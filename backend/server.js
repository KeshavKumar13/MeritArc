const express = require("express");
const path = require("node:path");
const crypto = require("node:crypto");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;
const SESSION_DAYS = 7;

app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(__dirname, "..")));

function outQuestion(r) {
  return {
    id: r.id,
    subject: r.subject,
    topic: r.topic,
    difficulty: r.difficulty,
    question: r.question_text,
    options: [r.option_a, r.option_b, r.option_c, r.option_d],
    correct: r.correct_option,
    explanation: r.explanation || "",
    status: r.status
  };
}

function hash(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function parseCookies(req) {
  const header = req.headers.cookie || "";
  const cookies = {};
  for (const part of header.split(";")) {
    const index = part.indexOf("=");
    if (index === -1) continue;
    const key = part.slice(0, index).trim();
    const value = part.slice(index + 1).trim();
    cookies[key] = decodeURIComponent(value);
  }
  return cookies;
}

function createSession(userId) {
  const token = crypto.randomBytes(32).toString("hex");
  const tokenHash = hash(token);
  const expires = new Date(Date.now() + SESSION_DAYS * 86400000).toISOString();

  db.prepare(`
    INSERT INTO sessions (user_id, token_hash, expires_at)
    VALUES (?, ?, ?)
  `).run(userId, tokenHash, expires);

  return { token, expires };
}

function getCurrentUser(req) {
  const token = parseCookies(req).meritArcSession;
  if (!token) return null;

  const row = db.prepare(`
    SELECT u.id, u.name, u.email
    FROM sessions s
    JOIN users u ON u.id = s.user_id
    WHERE s.token_hash = ? AND s.expires_at > datetime('now')
  `).get(hash(token));

  return row || null;
}

function setSessionCookie(res, token, expires) {
  const maxAge = Math.floor((new Date(expires).getTime() - Date.now()) / 1000);
  res.setHeader(
    "Set-Cookie",
    `meritArcSession=${encodeURIComponent(token)}; HttpOnly; Path=/; SameSite=Lax; Max-Age=${Math.max(maxAge, 0)}`
  );
}

function clearSessionCookie(res) {
  res.setHeader(
    "Set-Cookie",
    "meritArcSession=; HttpOnly; Path=/; SameSite=Lax; Max-Age=0"
  );
}

function validatePassword(password) {
  return typeof password === "string" && password.length >= 8;
}

function hashPassword(password) {
  const salt = crypto.randomBytes(16);
  const derived = crypto.scryptSync(password, salt, 64);
  return `${salt.toString("hex")}:${derived.toString("hex")}`;
}

function verifyPassword(password, stored) {
  const [saltHex, keyHex] = String(stored).split(":");
  if (!saltHex || !keyHex) return false;

  try {
    const derived = crypto.scryptSync(
      password,
      Buffer.from(saltHex, "hex"),
      64
    );
    const storedKey = Buffer.from(keyHex, "hex");
    return storedKey.length === derived.length &&
      crypto.timingSafeEqual(storedKey, derived);
  } catch {
    return false;
  }
}


function requireUser(req, res, next) {
  const user = getCurrentUser(req);
  if (!user) return res.status(401).json({ error: "Please sign in to start an assessment." });
  req.user = user;
  next();
}

function shuffleArray(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = crypto.randomInt(i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function publicAttemptQuestion(row) {
  return {
    id: row.attempt_question_id,
    questionId: row.question_id,
    position: row.position,
    question: row.question_text,
    options: JSON.parse(row.options_json),
    explanation: row.explanation || ""
  };
}

// ---------- Authentication ----------

app.post("/api/auth/register", (req, res) => {
  const name = String(req.body.name || "").trim();
  const email = String(req.body.email || "").trim().toLowerCase();
  const password = String(req.body.password || "");

  if (name.length < 2) {
    return res.status(400).json({ error: "Please enter your name." });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }

  if (!validatePassword(password)) {
    return res.status(400).json({ error: "Password must be at least 8 characters." });
  }

  try {
    const result = db.prepare(`
      INSERT INTO users (name, email, password_hash)
      VALUES (?, ?, ?)
    `).run(name, email, hashPassword(password));

    const session = createSession(result.lastInsertRowid);
    setSessionCookie(res, session.token, session.expires);

    res.status(201).json({
      user: { id: result.lastInsertRowid, name, email }
    });
  } catch (error) {
    if (String(error.message).includes("UNIQUE")) {
      return res.status(409).json({ error: "An account with this email already exists." });
    }
    console.error(error);
    res.status(500).json({ error: "Unable to create the account." });
  }
});

app.post("/api/auth/login", (req, res) => {
  const email = String(req.body.email || "").trim().toLowerCase();
  const password = String(req.body.password || "");

  const user = db.prepare(`
    SELECT id, name, email, password_hash
    FROM users
    WHERE email = ? COLLATE NOCASE
  `).get(email);

  if (!user || !verifyPassword(password, user.password_hash)) {
    return res.status(401).json({ error: "Email or password is incorrect." });
  }

  const session = createSession(user.id);
  setSessionCookie(res, session.token, session.expires);

  res.json({
    user: { id: user.id, name: user.name, email: user.email }
  });
});

app.post("/api/auth/logout", (req, res) => {
  const token = parseCookies(req).meritArcSession;

  if (token) {
    db.prepare("DELETE FROM sessions WHERE token_hash = ?").run(hash(token));
  }

  clearSessionCookie(res);
  res.json({ ok: true });
});

app.get("/api/auth/me", (req, res) => {
  const user = getCurrentUser(req);
  res.json({ authenticated: Boolean(user), user });
});


// ---------- Assessment attempts ----------

app.post("/api/attempts", requireUser, (req, res) => {
  const subject = String(req.body.subject || "").trim();
  const requestedCount = Math.min(Math.max(Number(req.body.count || 10), 1), 50);

  if (!subject) {
    return res.status(400).json({ error: "Subject is required." });
  }

  const source = db.prepare(`
    SELECT id, subject, topic, difficulty, question_text,
           option_a, option_b, option_c, option_d, correct_option, explanation
    FROM questions
    WHERE subject = ? AND status = 'active'
    ORDER BY RANDOM()
    LIMIT ?
  `).all(subject, requestedCount);

  if (!source.length) {
    return res.status(404).json({ error: "No active questions found for this subject." });
  }

  const create = db.transaction(() => {
    const attempt = db.prepare(`
      INSERT INTO attempts (user_id, subject, total)
      VALUES (?, ?, ?)
    `).run(req.user.id, subject, source.length);

    const insertQuestion = db.prepare(`
      INSERT INTO attempt_questions
      (attempt_id, question_id, position, options_json, correct_option)
      VALUES (?, ?, ?, ?, ?)
    `);

    const questions = source.map((q, index) => {
      const optionObjects = [
        { text: q.option_a, correct: q.correct_option === 0 },
        { text: q.option_b, correct: q.correct_option === 1 },
        { text: q.option_c, correct: q.correct_option === 2 },
        { text: q.option_d, correct: q.correct_option === 3 }
      ];

      const shuffled = shuffleArray(optionObjects);
      const options = shuffled.map(x => x.text);
      const correct = shuffled.findIndex(x => x.correct);

      const result = insertQuestion.run(
        attempt.lastInsertRowid,
        q.id,
        index,
        JSON.stringify(options),
        correct
      );

      return {
        attempt_question_id: result.lastInsertRowid,
        question_id: q.id,
        position: index,
        question_text: q.question_text,
        options_json: JSON.stringify(options),
        explanation: q.explanation || ""
      };
    });

    return {
      attemptId: Number(attempt.lastInsertRowid),
      subject,
      total: source.length,
      questions
    };
  });

  const result = create();
  res.status(201).json({
    attemptId: result.attemptId,
    subject: result.subject,
    total: result.total,
    questions: result.questions.map(publicAttemptQuestion)
  });
});

app.post("/api/attempts/:id/answers", requireUser, (req, res) => {
  const attemptId = Number(req.params.id);
  const selected = Number(req.body.selectedOption);

  if (![0, 1, 2, 3].includes(selected)) {
    return res.status(400).json({ error: "A valid answer is required." });
  }

  const attempt = db.prepare(`
    SELECT id, subject, status
    FROM attempts
    WHERE id = ? AND user_id = ?
  `).get(attemptId, req.user.id);

  if (!attempt) return res.status(404).json({ error: "Assessment attempt not found." });
  if (attempt.status !== "in_progress") {
    return res.status(409).json({ error: "This assessment is already completed." });
  }

  const aq = db.prepare(`
    SELECT aq.id, aq.correct_option, q.explanation
    FROM attempt_questions aq
    JOIN questions q ON q.id = aq.question_id
    WHERE aq.id = ? AND aq.attempt_id = ?
  `).get(Number(req.body.questionId), attemptId);

  if (!aq) return res.status(404).json({ error: "Question not found in this attempt." });

  const correct = selected === aq.correct_option ? 1 : 0;

  db.prepare(`
    INSERT INTO attempt_answers (attempt_question_id, selected_option, is_correct)
    VALUES (?, ?, ?)
    ON CONFLICT(attempt_question_id)
    DO UPDATE SET selected_option=excluded.selected_option,
                  is_correct=excluded.is_correct,
                  answered_at=CURRENT_TIMESTAMP
  `).run(aq.id, selected, correct);

  res.json({
    correct: Boolean(correct),
    explanation: aq.explanation || ""
  });
});

app.post("/api/attempts/:id/complete", requireUser, (req, res) => {
  const attemptId = Number(req.params.id);

  const attempt = db.prepare(`
    SELECT id, subject, status, total
    FROM attempts
    WHERE id = ? AND user_id = ?
  `).get(attemptId, req.user.id);

  if (!attempt) return res.status(404).json({ error: "Assessment attempt not found." });

  if (attempt.status === "completed") {
    const completed = db.prepare("SELECT score,total,percentage FROM attempts WHERE id=?").get(attemptId);
    return res.json(buildAttemptResult(attemptId, completed));
  }

  const rows = db.prepare(`
    SELECT aq.position, q.question_text, aq.options_json, aq.correct_option,
           aa.selected_option, aa.is_correct
    FROM attempt_questions aq
    JOIN questions q ON q.id = aq.question_id
    LEFT JOIN attempt_answers aa ON aa.attempt_question_id = aq.id
    WHERE aq.attempt_id = ?
    ORDER BY aq.position
  `).all(attemptId);

  const score = rows.filter(r => r.is_correct === 1).length;
  const total = rows.length;
  const percentage = total ? Math.round((score / total) * 100) : 0;

  db.prepare(`
    UPDATE attempts
    SET status='completed', completed_at=CURRENT_TIMESTAMP,
        score=?, total=?, percentage=?
    WHERE id=?
  `).run(score, total, percentage, attemptId);

  const result = {
    score,
    total,
    percentage,
    rows: rows.map(r => ({
      question: r.question_text,
      options: JSON.parse(r.options_json),
      answer: r.selected_option === null ? null : r.selected_option,
      correctAnswer: r.correct_option,
      correct: r.is_correct === 1
    }))
  };

  res.json(result);
});

app.get("/api/attempts", requireUser, (req, res) => {
  const rows = db.prepare(`
    SELECT id, subject, status, started_at, completed_at, score, total, percentage
    FROM attempts
    WHERE user_id = ?
    ORDER BY started_at DESC
    LIMIT 50
  `).all(req.user.id);

  res.json(rows);
});

function buildAttemptResult(attemptId, completed) {
  const rows = db.prepare(`
    SELECT aq.position, q.question_text, aq.options_json, aq.correct_option,
           aa.selected_option, aa.is_correct
    FROM attempt_questions aq
    JOIN questions q ON q.id = aq.question_id
    LEFT JOIN attempt_answers aa ON aa.attempt_question_id = aq.id
    WHERE aq.attempt_id = ?
    ORDER BY aq.position
  `).all(attemptId);

  return {
    score: completed.score,
    total: completed.total,
    percentage: completed.percentage,
    rows: rows.map(r => ({
      question: r.question_text,
      options: JSON.parse(r.options_json),
      answer: r.selected_option === null ? null : r.selected_option,
      correctAnswer: r.correct_option,
      correct: r.is_correct === 1
    }))
  };
}

// ---------- Existing question bank API ----------

app.get("/api/health", (req, res) => {
  const count = db.prepare("SELECT COUNT(*) AS count FROM questions").get().count;
  const users = db.prepare("SELECT COUNT(*) AS count FROM users").get().count;
  res.json({ ok: true, questions: count, users });
});

app.get("/api/subjects", (req, res) => {
  res.json(db.prepare(`
    SELECT subject, COUNT(*) AS count
    FROM questions
    WHERE status = 'active'
    GROUP BY subject
    ORDER BY subject
  `).all());
});

app.get("/api/topics", (req, res) => {
  const subject = String(req.query.subject || "");
  const rows = db.prepare(`
    SELECT DISTINCT topic
    FROM questions
    WHERE status = 'active' AND (? = '' OR subject = ?)
    ORDER BY topic
  `).all(subject, subject);

  res.json(rows.map(row => row.topic));
});

app.get("/api/questions", (req, res) => {
  let sql = "SELECT * FROM questions WHERE status = ?";
  const params = [req.query.status || "active"];

  for (const key of ["subject", "topic", "difficulty"]) {
    if (req.query[key]) {
      sql += ` AND ${key} = ?`;
      params.push(req.query[key]);
    }
  }

  sql += req.query.random === "false" ? " ORDER BY id" : " ORDER BY RANDOM()";
  sql += " LIMIT ?";
  params.push(Math.min(Math.max(parseInt(req.query.limit || "10", 10), 1), 100));

  res.json(db.prepare(sql).all(...params).map(outQuestion));
});

app.get("/api/questions/:id", (req, res) => {
  const row = db.prepare("SELECT * FROM questions WHERE id = ?").get(Number(req.params.id));

  if (!row) {
    return res.status(404).json({ error: "Question not found" });
  }

  res.json(outQuestion(row));
});

function validQuestion(q) {
  return q &&
    q.subject &&
    q.topic &&
    q.question &&
    Array.isArray(q.options) &&
    q.options.length === 4 &&
    ["Easy", "Medium", "Hard"].includes(q.difficulty) &&
    [0, 1, 2, 3].includes(Number(q.correct));
}

app.post("/api/questions", (req, res) => {
  if (!validQuestion(req.body)) {
    return res.status(400).json({ error: "Invalid question data." });
  }

  const q = req.body;
  const result = db.prepare(`
    INSERT INTO questions
    (subject, topic, difficulty, question_text, option_a, option_b, option_c, option_d,
     correct_option, explanation, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    q.subject, q.topic, q.difficulty, q.question,
    ...q.options, Number(q.correct), q.explanation || "", q.status || "active"
  );

  res.status(201).json(
    outQuestion(db.prepare("SELECT * FROM questions WHERE id = ?").get(result.lastInsertRowid))
  );
});

app.put("/api/questions/:id", (req, res) => {
  if (!validQuestion(req.body)) {
    return res.status(400).json({ error: "Invalid question data." });
  }

  const q = req.body;
  const id = Number(req.params.id);

  const result = db.prepare(`
    UPDATE questions
    SET subject=?, topic=?, difficulty=?, question_text=?,
        option_a=?, option_b=?, option_c=?, option_d=?,
        correct_option=?, explanation=?, status=?, updated_at=CURRENT_TIMESTAMP
    WHERE id=?
  `).run(
    q.subject, q.topic, q.difficulty, q.question,
    ...q.options, Number(q.correct), q.explanation || "", q.status || "active", id
  );

  if (!result.changes) {
    return res.status(404).json({ error: "Question not found" });
  }

  res.json(outQuestion(db.prepare("SELECT * FROM questions WHERE id = ?").get(id)));
});

app.delete("/api/questions/:id", (req, res) => {
  const result = db.prepare(`
    UPDATE questions
    SET status='archived', updated_at=CURRENT_TIMESTAMP
    WHERE id=?
  `).run(Number(req.params.id));

  if (!result.changes) {
    return res.status(404).json({ error: "Question not found" });
  }

  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`MeritArc running at http://localhost:${PORT}`);
});
