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
    id: Number(r.id),
    subject: r.subject,
    topic: r.topic,
    difficulty: r.difficulty,
    question: r.question_text,
    options: [r.option_a, r.option_b, r.option_c, r.option_d],
    correct: Number(r.correct_option),
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

async function createSession(userId) {
  const token = crypto.randomBytes(32).toString("hex");
  const tokenHash = hash(token);
  const expires = new Date(Date.now() + SESSION_DAYS * 86400000);

  await db.query(
    `INSERT INTO sessions (user_id, token_hash, expires_at)
     VALUES ($1, $2, $3)`,
    [userId, tokenHash, expires]
  );

  return { token, expires };
}

async function getCurrentUser(req) {
  const token = parseCookies(req).meritArcSession;
  if (!token) return null;

  const result = await db.query(
    `SELECT u.id, u.name, u.email, u.role
     FROM sessions s
     JOIN users u ON u.id = s.user_id
     WHERE s.token_hash = $1 AND s.expires_at > NOW()`,
    [hash(token)]
  );

  return result.rows[0] || null;
}

function setSessionCookie(res, token, expires) {
  const maxAge = Math.floor((new Date(expires).getTime() - Date.now()) / 1000);
  const secure = process.env.NODE_ENV === "production" || process.env.RENDER ? "; Secure" : "";
  res.setHeader(
    "Set-Cookie",
    `meritArcSession=${encodeURIComponent(token)}; HttpOnly; Path=/; SameSite=Lax${secure}; Max-Age=${Math.max(maxAge, 0)}`
  );
}

function clearSessionCookie(res) {
  const secure = process.env.NODE_ENV === "production" || process.env.RENDER ? "; Secure" : "";
  res.setHeader(
    "Set-Cookie",
    `meritArcSession=; HttpOnly; Path=/; SameSite=Lax${secure}; Max-Age=0`
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
    const derived = crypto.scryptSync(password, Buffer.from(saltHex, "hex"), 64);
    const storedKey = Buffer.from(keyHex, "hex");
    return storedKey.length === derived.length && crypto.timingSafeEqual(storedKey, derived);
  } catch {
    return false;
  }
}

async function requireUser(req, res, next) {
  try {
    const user = await getCurrentUser(req);
    if (!user) return res.status(401).json({ error: "Please sign in to start an assessment." });
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to verify the session." });
  }
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
    id: Number(row.attempt_question_id),
    questionId: Number(row.question_id),
    position: Number(row.position),
    question: row.question_text,
    options: row.options_json,
    explanation: row.explanation || ""
  };
}

async function buildAttemptResult(attemptId, completed) {
  const result = await db.query(
    `SELECT aq.position, q.question_text, aq.options_json, aq.correct_option,
            aa.selected_option, aa.is_correct
     FROM attempt_questions aq
     JOIN questions q ON q.id = aq.question_id
     LEFT JOIN attempt_answers aa ON aa.attempt_question_id = aq.id
     WHERE aq.attempt_id = $1
     ORDER BY aq.position`,
    [attemptId]
  );

  return {
    score: Number(completed.score),
    total: Number(completed.total),
    percentage: Number(completed.percentage),
    rows: result.rows.map(r => ({
      question: r.question_text,
      options: r.options_json,
      answer: r.selected_option === null ? null : Number(r.selected_option),
      correctAnswer: Number(r.correct_option),
      correct: r.is_correct === true
    }))
  };
}

// ---------- Authentication ----------

app.post("/api/auth/register", async (req, res) => {
  const name = String(req.body.name || "").trim();
  const email = String(req.body.email || "").trim().toLowerCase();
  const password = String(req.body.password || "");

  if (name.length < 2) return res.status(400).json({ error: "Please enter your name." });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }
  if (!validatePassword(password)) {
    return res.status(400).json({ error: "Password must be at least 8 characters." });
  }

  try {
    const result = await db.query(
      `INSERT INTO users (name, email, password_hash)
       VALUES ($1, $2, $3)
       RETURNING id, name, email`,
      [name, email, hashPassword(password)]
    );

    const user = result.rows[0];
    const session = await createSession(user.id);
    setSessionCookie(res, session.token, session.expires);

    res.status(201).json({ user: { id: Number(user.id), name: user.name, email: user.email } });
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({ error: "An account with this email already exists." });
    }
    console.error(error);
    res.status(500).json({ error: "Unable to create the account." });
  }
});

app.post("/api/auth/login", async (req, res) => {
  const email = String(req.body.email || "").trim().toLowerCase();
  const password = String(req.body.password || "");

  try {
    const result = await db.query(
      `SELECT id, name, email, password_hash
       FROM users
       WHERE LOWER(email) = LOWER($1)`,
      [email]
    );

    const user = result.rows[0];
    if (!user || !verifyPassword(password, user.password_hash)) {
      return res.status(401).json({ error: "Email or password is incorrect." });
    }

    const session = await createSession(user.id);
    setSessionCookie(res, session.token, session.expires);

    res.json({ user: { id: Number(user.id), name: user.name, email: user.email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to sign in." });
  }
});

app.post("/api/auth/logout", async (req, res) => {
  try {
    const token = parseCookies(req).meritArcSession;
    if (token) await db.query("DELETE FROM sessions WHERE token_hash = $1", [hash(token)]);
    clearSessionCookie(res);
    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to sign out." });
  }
});

app.get("/api/auth/me", async (req, res) => {
  try {
    const user = await getCurrentUser(req);
    res.json({ authenticated: Boolean(user), user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to check the session." });
  }
});

async function requireStaff(req, res, next) {
  try {
    const user = await getCurrentUser(req);
    if (!user) return res.status(401).json({ error: "Please sign in to the administrator console." });
    if (!['admin', 'editor'].includes(user.role)) return res.status(403).json({ error: "Staff access required." });
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to verify staff access." });
  }
}

async function requireAdmin(req, res, next) {
  try {
    const user = await getCurrentUser(req);
    if (!user) return res.status(401).json({ error: "Please sign in as an administrator." });
    if (user.role !== "admin") return res.status(403).json({ error: "Administrator access required." });
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to verify administrator access." });
  }
}

app.get("/api/admin/me", async (req, res) => {
  try {
    const user = await getCurrentUser(req);
    res.json({ authenticated: Boolean(user && ["admin", "editor"].includes(user.role)), user: user && ["admin", "editor"].includes(user.role) ? user : null });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to check administrator session." });
  }
});

app.post("/api/admin/login", async (req, res) => {
  const email = String(req.body.email || "").trim().toLowerCase();
  const password = String(req.body.password || "");
  try {
    const result = await db.query("SELECT id, name, email, password_hash, role FROM users WHERE LOWER(email) = LOWER($1) LIMIT 1", [email]);
    const user = result.rows[0];
    if (!user || !["admin", "editor"].includes(user.role) || !verifyPassword(password, user.password_hash)) {
      return res.status(401).json({ error: "Invalid administrator credentials." });
    }
    const session = await createSession(user.id);
    setSessionCookie(res, session.token, session.expires);
    res.json({ user: { id: Number(user.id), name: user.name, email: user.email, role: user.role } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to sign in as administrator." });
  }
});

app.post("/api/admin/logout", async (req, res) => {
  const token = parseCookies(req).meritArcSession;
  try {
    if (token) await db.query("DELETE FROM sessions WHERE token_hash = $1", [hash(token)]);
    clearSessionCookie(res);
    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to sign out." });
  }
});

// ---------- Assessment attempts ----------

app.post("/api/attempts", requireUser, async (req, res) => {
  const subject = String(req.body.subject || "").trim();
  const requestedCount = Math.min(Math.max(Number(req.body.count || 10), 1), 50);

  if (!subject) return res.status(400).json({ error: "Subject is required." });

  try {
    await db.query(
      `UPDATE attempts SET status = 'abandoned' WHERE user_id = $1 AND status = 'in_progress' AND started_at < NOW() - INTERVAL '30 minutes'`,
      [req.user.id]
    );

    const sourceResult = await db.query(
      `SELECT id, subject, topic, difficulty, question_text,
              option_a, option_b, option_c, option_d, correct_option, explanation
       FROM questions
       WHERE subject = $1 AND status = 'active'
       ORDER BY RANDOM()
       LIMIT $2`,
      [subject, requestedCount]
    );
    const source = sourceResult.rows;

    if (!source.length) return res.status(404).json({ error: "No active questions found for this subject." });

    const client = await db.connect();
    try {
      await client.query("BEGIN");

      const attemptResult = await client.query(
        `INSERT INTO attempts (user_id, subject, total)
         VALUES ($1, $2, $3)
         RETURNING id`,
        [req.user.id, subject, source.length]
      );
      const attemptId = Number(attemptResult.rows[0].id);
      const questions = [];

      for (let index = 0; index < source.length; index++) {
        const q = source[index];
        const optionObjects = [
          { text: q.option_a, correct: Number(q.correct_option) === 0 },
          { text: q.option_b, correct: Number(q.correct_option) === 1 },
          { text: q.option_c, correct: Number(q.correct_option) === 2 },
          { text: q.option_d, correct: Number(q.correct_option) === 3 }
        ];
        const shuffled = shuffleArray(optionObjects);
        const options = shuffled.map(x => x.text);
        const correct = shuffled.findIndex(x => x.correct);

        const inserted = await client.query(
          `INSERT INTO attempt_questions
             (attempt_id, question_id, position, options_json, correct_option)
           VALUES ($1, $2, $3, $4::jsonb, $5)
           RETURNING id`,
          [attemptId, q.id, index, JSON.stringify(options), correct]
        );

        questions.push({
          attempt_question_id: Number(inserted.rows[0].id),
          question_id: Number(q.id),
          position: index,
          question_text: q.question_text,
          options_json: options,
          explanation: q.explanation || ""
        });
      }

      await client.query("COMMIT");
      res.status(201).json({
        attemptId,
        subject,
        total: source.length,
        questions: questions.map(publicAttemptQuestion)
      });
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to start the assessment." });
  }
});

app.post("/api/attempts/:id/answers", requireUser, async (req, res) => {
  const attemptId = Number(req.params.id);
  const selected = Number(req.body.selectedOption);
  const questionId = Number(req.body.questionId);

  if (![0, 1, 2, 3].includes(selected)) {
    return res.status(400).json({ error: "A valid answer is required." });
  }

  try {
    const attemptResult = await db.query(
      `SELECT id, subject, status FROM attempts WHERE id = $1 AND user_id = $2`,
      [attemptId, req.user.id]
    );
    const attempt = attemptResult.rows[0];
    if (!attempt) return res.status(404).json({ error: "Assessment attempt not found." });
    if (attempt.status !== "in_progress") return res.status(409).json({ error: "This assessment is already completed." });

    const aqResult = await db.query(
      `SELECT aq.id, aq.correct_option, q.explanation
       FROM attempt_questions aq
       JOIN questions q ON q.id = aq.question_id
       WHERE aq.id = $1 AND aq.attempt_id = $2`,
      [questionId, attemptId]
    );
    const aq = aqResult.rows[0];
    if (!aq) return res.status(404).json({ error: "Question not found in this attempt." });

    const correct = selected === Number(aq.correct_option);
    await db.query(
      `INSERT INTO attempt_answers (attempt_question_id, selected_option, is_correct)
       VALUES ($1, $2, $3)
       ON CONFLICT (attempt_question_id)
       DO UPDATE SET selected_option = EXCLUDED.selected_option,
                     is_correct = EXCLUDED.is_correct,
                     answered_at = NOW()`,
      [aq.id, selected, correct]
    );

    res.json({ correct, explanation: aq.explanation || "" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to save the answer." });
  }
});

app.post("/api/attempts/:id/complete", requireUser, async (req, res) => {
  const attemptId = Number(req.params.id);

  try {
    const attemptResult = await db.query(
      `SELECT id, subject, status, total, score, percentage
       FROM attempts WHERE id = $1 AND user_id = $2`,
      [attemptId, req.user.id]
    );
    const attempt = attemptResult.rows[0];
    if (!attempt) return res.status(404).json({ error: "Assessment attempt not found." });

    if (attempt.status === "completed") {
      return res.json(await buildAttemptResult(attemptId, attempt));
    }

    const rowsResult = await db.query(
      `SELECT aq.position, q.question_text, aq.options_json, aq.correct_option,
              aa.selected_option, aa.is_correct
       FROM attempt_questions aq
       JOIN questions q ON q.id = aq.question_id
       LEFT JOIN attempt_answers aa ON aa.attempt_question_id = aq.id
       WHERE aq.attempt_id = $1
       ORDER BY aq.position`,
      [attemptId]
    );
    const rows = rowsResult.rows;
    const score = rows.filter(r => r.is_correct === true).length;
    const total = rows.length;
    const percentage = total ? Math.round((score / total) * 100) : 0;

    await db.query(
      `UPDATE attempts
       SET status = 'completed', completed_at = NOW(), score = $1, total = $2, percentage = $3
       WHERE id = $4`,
      [score, total, percentage, attemptId]
    );

    res.json({
      score,
      total,
      percentage,
      rows: rows.map(r => ({
        question: r.question_text,
        options: r.options_json,
        answer: r.selected_option === null ? null : Number(r.selected_option),
        correctAnswer: Number(r.correct_option),
        correct: r.is_correct === true
      }))
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to complete the assessment." });
  }
});

app.get("/api/attempts", requireUser, async (req, res) => {
  try {
    await db.query(
      `UPDATE attempts SET status = 'abandoned' WHERE user_id = $1 AND status = 'in_progress' AND started_at < NOW() - INTERVAL '30 minutes'`,
      [req.user.id]
    );
    const result = await db.query(
      `SELECT id, subject, status, started_at, completed_at, score, total, percentage
       FROM attempts WHERE user_id = $1 ORDER BY started_at DESC LIMIT 50`,
      [req.user.id]
    );
    res.json(result.rows.map(r => ({
      ...r,
      id: Number(r.id),
      score: r.score === null ? null : Number(r.score),
      total: r.total === null ? null : Number(r.total),
      percentage: r.percentage === null ? null : Number(r.percentage)
    })));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to load assessment history." });
  }
});

// ---------- Existing question bank API ----------


// ---------- Admin management ----------

app.get("/api/admin/users", requireAdmin, async (req, res) => {
  const search = String(req.query.search || "").trim().toLowerCase();
  const role = String(req.query.role || "").trim().toLowerCase();
  try {
    const result = await db.query(
      `SELECT u.id, u.name, u.email, u.role, u.created_at,
              COUNT(a.id)::int AS attempts,
              COUNT(a.id) FILTER (WHERE a.status = 'completed')::int AS completed_attempts
       FROM users u
       LEFT JOIN attempts a ON a.user_id = u.id
       WHERE ($1 = '' OR LOWER(u.name) LIKE '%' || $1 || '%' OR LOWER(u.email) LIKE '%' || $1 || '%')
         AND ($2 = '' OR u.role = $2)
       GROUP BY u.id
       ORDER BY u.created_at DESC
       LIMIT 200`,
      [search, role]
    );
    res.json(result.rows.map(r => ({
      id: Number(r.id), name: r.name, email: r.email, role: r.role,
      created_at: r.created_at, attempts: Number(r.attempts), completed_attempts: Number(r.completed_attempts)
    })));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to load users." });
  }
});

app.put("/api/admin/users/:id", requireAdmin, async (req, res) => {
  const id = Number(req.params.id);
  const role = String(req.body.role || "user").trim().toLowerCase();
  const name = String(req.body.name || "").trim();
  if (!Number.isInteger(id) || id < 1) return res.status(400).json({ error: "Invalid user." });
  if (!['user', 'editor', 'admin'].includes(role)) return res.status(400).json({ error: "Invalid role." });
  if (name.length < 2) return res.status(400).json({ error: "Name must be at least 2 characters." });
  if (id === Number(req.user.id) && role !== 'admin') return res.status(400).json({ error: "You cannot remove your own administrator access." });
  try {
    const result = await db.query(
      `UPDATE users SET name = $1, role = $2 WHERE id = $3 RETURNING id, name, email, role, created_at`,
      [name, role, id]
    );
    if (!result.rows[0]) return res.status(404).json({ error: "User not found." });
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to update user access." });
  }
});

app.get("/api/admin/results", requireAdmin, async (req, res) => {
  const search = String(req.query.search || "").trim().toLowerCase();
  const status = String(req.query.status || "").trim().toLowerCase();
  try {
    const result = await db.query(
      `SELECT a.id, a.user_id, u.name, u.email, a.subject, a.status,
              a.started_at, a.completed_at, a.score, a.total, a.percentage
       FROM attempts a JOIN users u ON u.id = a.user_id
       WHERE ($1 = '' OR LOWER(u.name) LIKE '%' || $1 || '%' OR LOWER(u.email) LIKE '%' || $1 || '%' OR LOWER(a.subject) LIKE '%' || $1 || '%')
         AND ($2 = '' OR a.status = $2)
       ORDER BY a.started_at DESC LIMIT 200`,
      [search, status]
    );
    res.json(result.rows.map(r => ({
      id: Number(r.id), user_id: Number(r.user_id), name: r.name, email: r.email,
      subject: r.subject, status: r.status, started_at: r.started_at, completed_at: r.completed_at,
      score: r.score === null ? null : Number(r.score), total: r.total === null ? null : Number(r.total),
      percentage: r.percentage === null ? null : Number(r.percentage)
    })));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to load results." });
  }
});

app.post("/api/admin/results/:id/reset", requireAdmin, async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) return res.status(400).json({ error: "Invalid result." });
  try {
    const result = await db.query(
      `UPDATE attempts
       SET status = 'abandoned', completed_at = NULL, score = NULL, percentage = NULL
       WHERE id = $1
       RETURNING id, status`, [id]
    );
    if (!result.rows[0]) return res.status(404).json({ error: "Result not found." });
    await db.query("DELETE FROM attempt_answers WHERE attempt_question_id IN (SELECT id FROM attempt_questions WHERE attempt_id = $1)", [id]);
    res.json({ ok: true, message: "Result reset. The user can start a fresh assessment." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to reset the result." });
  }
});

app.put("/api/admin/results/:id", requireAdmin, async (req, res) => {
  const id = Number(req.params.id);
  const score = Number(req.body.score);
  if (!Number.isInteger(id) || id < 1) return res.status(400).json({ error: "Invalid result." });
  if (!Number.isInteger(score) || score < 0) return res.status(400).json({ error: "Score must be a non-negative whole number." });
  try {
    const current = await db.query("SELECT id, total FROM attempts WHERE id = $1", [id]);
    if (!current.rows[0]) return res.status(404).json({ error: "Result not found." });
    const total = Number(current.rows[0].total || 0);
    if (score > total) return res.status(400).json({ error: "Score cannot exceed the total questions." });
    const percentage = total ? Math.round((score / total) * 100) : 0;
    const result = await db.query(
      `UPDATE attempts SET status='completed', completed_at=COALESCE(completed_at, NOW()), score=$1, total=$2, percentage=$3 WHERE id=$4
       RETURNING id, status, score, total, percentage, completed_at`,
      [score, total, percentage, id]
    );
    res.json({ ...result.rows[0], id: Number(result.rows[0].id), score: Number(result.rows[0].score), total: Number(result.rows[0].total), percentage: Number(result.rows[0].percentage) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to modify the result." });
  }
});

app.get("/api/health", async (req, res) => {
  try {
    const [questions, users] = await Promise.all([
      db.query("SELECT COUNT(*)::int AS count FROM questions"),
      db.query("SELECT COUNT(*)::int AS count FROM users")
    ]);
    res.json({ ok: true, questions: questions.rows[0].count, users: users.rows[0].count });
  } catch (error) {
    console.error(error);
    res.status(503).json({ ok: false, error: "Database unavailable" });
  }
});

app.get("/api/subjects", async (req, res) => {
  try {
    const result = await db.query(
      `SELECT subject, COUNT(*)::int AS count
       FROM questions WHERE status = 'active'
       GROUP BY subject ORDER BY subject`
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to load subjects." });
  }
});

app.get("/api/topics", async (req, res) => {
  const subject = String(req.query.subject || "");
  try {
    const result = await db.query(
      `SELECT DISTINCT topic FROM questions
       WHERE status = 'active' AND ($1 = '' OR subject = $1)
       ORDER BY topic`,
      [subject]
    );
    res.json(result.rows.map(row => row.topic));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to load topics." });
  }
});

app.get("/api/questions", async (req, res) => {
  const params = [req.query.status || "active"];
  let where = "WHERE status = $1";
  let parameterIndex = 2;

  for (const key of ["subject", "topic", "difficulty"]) {
    if (req.query[key]) {
      where += ` AND ${key} = $${parameterIndex++}`;
      params.push(req.query[key]);
    }
  }

  const limit = Math.min(Math.max(parseInt(req.query.limit || "10", 10), 1), 100);
  const order = req.query.random === "false" ? "id ASC" : "RANDOM()";
  params.push(limit);

  try {
    const result = await db.query(
      `SELECT * FROM questions ${where} ORDER BY ${order} LIMIT $${parameterIndex}`,
      params
    );
    res.json(result.rows.map(outQuestion));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to load questions." });
  }
});

app.get("/api/questions/:id", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM questions WHERE id = $1", [Number(req.params.id)]);
    if (!result.rows[0]) return res.status(404).json({ error: "Question not found" });
    res.json(outQuestion(result.rows[0]));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to load the question." });
  }
});

function validQuestion(q) {
  return q && q.subject && q.topic && q.question && Array.isArray(q.options) &&
    q.options.length === 4 && ["Easy", "Medium", "Hard"].includes(q.difficulty) &&
    [0, 1, 2, 3].includes(Number(q.correct));
}

app.post("/api/questions", requireStaff, async (req, res) => {
  if (!validQuestion(req.body)) return res.status(400).json({ error: "Invalid question data." });
  const q = req.body;
  try {
    const result = await db.query(
      `INSERT INTO questions
       (subject, topic, difficulty, question_text, option_a, option_b, option_c, option_d,
        correct_option, explanation, status)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
       RETURNING *`,
      [q.subject, q.topic, q.difficulty, q.question, ...q.options, Number(q.correct), q.explanation || "", q.status || "active"]
    );
    res.status(201).json(outQuestion(result.rows[0]));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to create the question." });
  }
});

app.put("/api/questions/:id", requireStaff, async (req, res) => {
  if (!validQuestion(req.body)) return res.status(400).json({ error: "Invalid question data." });
  const q = req.body;
  const id = Number(req.params.id);
  try {
    const result = await db.query(
      `UPDATE questions
       SET subject=$1, topic=$2, difficulty=$3, question_text=$4,
           option_a=$5, option_b=$6, option_c=$7, option_d=$8,
           correct_option=$9, explanation=$10, status=$11, updated_at=NOW()
       WHERE id=$12 RETURNING *`,
      [q.subject, q.topic, q.difficulty, q.question, ...q.options, Number(q.correct), q.explanation || "", q.status || "active", id]
    );
    if (!result.rows[0]) return res.status(404).json({ error: "Question not found" });
    res.json(outQuestion(result.rows[0]));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to update the question." });
  }
});

app.delete("/api/questions/:id", requireStaff, async (req, res) => {
  try {
    const result = await db.query(
      `UPDATE questions SET status='archived', updated_at=NOW() WHERE id=$1 RETURNING id`,
      [Number(req.params.id)]
    );
    if (!result.rows[0]) return res.status(404).json({ error: "Question not found" });
    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to archive the question." });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`MeritArc running on port ${PORT}`);
});
