const express = require("express");
const path = require("node:path");
const crypto = require("node:crypto");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;
const SESSION_DAYS = 7;

app.use(express.json({ limit: "2mb" }));
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
    `SELECT u.id, u.name, u.email, u.role, u.access_status, u.access_message, u.request_input, u.request_prompt
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

async function writeAudit(req, action, entityType, entityId, details = {}) {
  try {
    const actor = req.user || {};
    await db.query(
      `INSERT INTO audit_logs (actor_user_id, actor_name, actor_email, action, entity_type, entity_id, details)
       VALUES ($1,$2,$3,$4,$5,$6,$7::jsonb)`,
      [actor.id || null, actor.name || null, actor.email || null, action, entityType, entityId || null, JSON.stringify(details)]
    );
  } catch (error) {
    console.error("Audit log failed:", error);
  }
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
    if (user.access_status !== "active") return res.status(403).json({ error: user.access_message || "Your MeritArc account access is currently unavailable.", accessStatus: user.access_status, requestInput: Boolean(user.request_input), requestPrompt: user.request_prompt || "", email: user.email, supportEmail: "support@meritarc.in" });
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
      `SELECT id, name, email, password_hash, access_status, access_message, request_input, request_prompt
       FROM users
       WHERE LOWER(email) = LOWER($1)`,
      [email]
    );

    const user = result.rows[0];
    if (!user || !verifyPassword(password, user.password_hash)) {
      return res.status(401).json({ error: "Email or password is incorrect." });
    }

    if (user.access_status !== "active") {
      const stateLabel = user.access_status === "blocked" ? "blocked" : "removed";
      return res.status(403).json({
        error: user.access_message || `Your MeritArc account access has been ${stateLabel}.`,
        accessStatus: user.access_status,
        requestInput: Boolean(user.request_input),
        requestPrompt: user.request_prompt || "If you believe this was a mistake, please tell us why you need access.",
        email: user.email,
        supportEmail: "support@meritarc.in"
      });
    }

    const session = await createSession(user.id);
    setSessionCookie(res, session.token, session.expires);

    res.json({ user: { id: Number(user.id), name: user.name, email: user.email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to sign in." });
  }
});

app.post("/api/access-response", async (req, res) => {
  const email = String(req.body.email || "").trim().toLowerCase();
  const response = String(req.body.response || "").trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: "Please enter a valid email address." });
  if (response.length < 5 || response.length > 2000) return res.status(400).json({ error: "Please provide between 5 and 2000 characters." });
  try {
    const user = await db.query("SELECT id, access_status, request_input FROM users WHERE LOWER(email)=LOWER($1) LIMIT 1", [email]);
    if (!user.rows[0] || user.rows[0].access_status === "active" || !user.rows[0].request_input) {
      return res.status(400).json({ error: "Input is not currently requested for this account." });
    }
    await db.query("INSERT INTO access_responses (user_id, email, response) VALUES ($1,$2,$3)", [user.rows[0].id, email, response]);
    res.status(201).json({ ok: true, message: "Your response has been submitted." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to submit your response." });
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
    if (user && user.access_status !== "active") {
      return res.json({ authenticated:false, user:null, access:{status:user.access_status, message:user.access_message || "Your MeritArc account access is currently unavailable.", requestInput:Boolean(user.request_input), requestPrompt:user.request_prompt || "", email:user.email, supportEmail:"support@meritarc.in"} });
    }
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
      `SELECT u.id, u.name, u.email, u.role, u.access_status, u.access_message, u.request_input, u.request_prompt, u.created_at,
              COUNT(a.id)::int AS attempts,
              COUNT(a.id) FILTER (WHERE a.status = 'completed')::int AS completed_attempts,
              (SELECT ar.response FROM access_responses ar WHERE ar.user_id=u.id ORDER BY ar.created_at DESC LIMIT 1) AS latest_response,
              (SELECT ar.created_at FROM access_responses ar WHERE ar.user_id=u.id ORDER BY ar.created_at DESC LIMIT 1) AS latest_response_at
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
      access_status: r.access_status, access_message: r.access_message || "", request_input: Boolean(r.request_input), request_prompt: r.request_prompt || "",
      latest_response: r.latest_response || "", latest_response_at: r.latest_response_at,
      created_at: r.created_at, attempts: Number(r.attempts), completed_attempts: Number(r.completed_attempts)
    })));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to load users." });
  }
});

app.post("/api/admin/users", requireAdmin, async (req, res) => {
  const name = String(req.body.name || "").trim();
  const email = String(req.body.email || "").trim().toLowerCase();
  const role = String(req.body.role || "user").trim().toLowerCase();
  let temporaryPassword = String(req.body.temporaryPassword || "");

  if (name.length < 2) return res.status(400).json({ error: "Name must be at least 2 characters." });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: "Please enter a valid email address." });
  if (!["user", "editor", "admin"].includes(role)) return res.status(400).json({ error: "Invalid role." });
  if (!temporaryPassword) temporaryPassword = crypto.randomBytes(9).toString("base64url");
  if (!validatePassword(temporaryPassword)) return res.status(400).json({ error: "Temporary password must be at least 8 characters." });

  try {
    const result = await db.query(
      `INSERT INTO users (name, email, password_hash, role)
       VALUES ($1,$2,$3,$4)
       RETURNING id, name, email, role, created_at`,
      [name, email, hashPassword(temporaryPassword), role]
    );
    const user = result.rows[0];
    await writeAudit(req, "user_created", "user", user.id, { email: user.email, role: user.role });
    res.status(201).json({
      user: { id: Number(user.id), name: user.name, email: user.email, role: user.role, created_at: user.created_at },
      temporaryPassword
    });
  } catch (error) {
    if (error.code === "23505") return res.status(409).json({ error: "An account with this email already exists." });
    console.error(error);
    res.status(500).json({ error: "Unable to add the user." });
  }
});

app.put("/api/admin/users/:id", requireAdmin, async (req, res) => {
  const id = Number(req.params.id);
  const role = String(req.body.role || "user").trim().toLowerCase();
  const accessStatus = String(req.body.accessStatus || "active").trim().toLowerCase();
  const accessMessage = String(req.body.accessMessage || "").trim().slice(0, 1000);
  const requestInput = Boolean(req.body.requestInput);
  const requestPrompt = String(req.body.requestPrompt || "").trim().slice(0, 500);
  if (!Number.isInteger(id) || id < 1) return res.status(400).json({ error: "Invalid user." });
  if (!["user", "editor", "admin"].includes(role)) return res.status(400).json({ error: "Invalid role." });
  if (!["active", "blocked", "removed"].includes(accessStatus)) return res.status(400).json({ error: "Invalid access status." });
  if (id === Number(req.user.id)) return res.status(400).json({ error: "Your administrator account can only be changed through Render environment variables." });
  if (accessStatus !== "active" && !accessMessage) return res.status(400).json({ error: "Please enter the message the user should see when access is denied." });
  if (requestInput && !requestPrompt) return res.status(400).json({ error: "Please enter the question you want to ask the user." });
  try {
    const current = await db.query("SELECT id, name, email, role, access_status, access_message, request_input, request_prompt, created_at FROM users WHERE id=$1", [id]);
    if (!current.rows[0]) return res.status(404).json({ error: "User not found." });
    const before = current.rows[0];
    const result = await db.query(
      `UPDATE users SET role=$1, access_status=$2, access_message=$3, request_input=$4, request_prompt=$5, updated_at=NOW() WHERE id=$6
       RETURNING id, name, email, role, access_status, access_message, request_input, request_prompt, created_at`,
      [role, accessStatus, accessMessage, requestInput, requestPrompt, id]
    );
    await writeAudit(req, "user_access_changed", "user", id, {
      email: result.rows[0].email,
      from_role: before.role, to_role: role,
      from_access_status: before.access_status, to_access_status: accessStatus,
      message_changed: before.access_message !== accessMessage,
      access_message: accessMessage,
      request_input: requestInput,
      request_prompt: requestPrompt
    });
    if (accessStatus !== "active") await db.query("DELETE FROM sessions WHERE user_id=$1", [id]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to update user access." });
  }
});

app.delete("/api/admin/users/:id", requireAdmin, async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) return res.status(400).json({ error: "Invalid user." });
  if (id === Number(req.user.id)) return res.status(400).json({ error: "Your administrator account cannot be deleted here." });
  try {
    const current = await db.query("SELECT id, name, email, role, access_status FROM users WHERE id=$1", [id]);
    if (!current.rows[0]) return res.status(404).json({ error: "User not found." });
    const u = current.rows[0];
    await writeAudit(req, "user_deleted", "user", id, { email: u.email, role: u.role, access_status: u.access_status });
    await db.query("DELETE FROM users WHERE id=$1", [id]);
    res.json({ ok:true, message:"User permanently deleted." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to delete the user." });
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

app.delete("/api/admin/results/:id", requireAdmin, async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) return res.status(400).json({ error: "Invalid result." });
  try {
    const current = await db.query(
      `SELECT a.id, a.subject, a.status, a.score, a.total, u.email, u.name
       FROM attempts a JOIN users u ON u.id=a.user_id WHERE a.id=$1`, [id]
    );
    if (!current.rows[0]) return res.status(404).json({ error: "Result not found." });
    const r = current.rows[0];
    await writeAudit(req, "result_deleted", "attempt", id, {
      subject: r.subject, status: r.status, score: r.score, total: r.total, user_email: r.email
    });
    await db.query("DELETE FROM attempts WHERE id=$1", [id]);
    res.json({ ok: true, message: "Result permanently removed from the database." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to delete the result." });
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
    await writeAudit(req, "result_score_changed", "attempt", id, { from_score: current.rows[0].score, to_score: score, total });
    res.json({ ...result.rows[0], id: Number(result.rows[0].id), score: Number(result.rows[0].score), total: Number(result.rows[0].total), percentage: Number(result.rows[0].percentage) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to modify the result." });
  }
});

// ---------- Question reports & audit history ----------

app.post("/api/attempt-questions/:id/report", requireUser, async (req, res) => {
  const attemptQuestionId = Number(req.params.id);
  const title = String(req.body.title || "Other").trim();
  const description = String(req.body.description || "").trim();
  const attachmentName = String(req.body.attachmentName || "").trim().slice(0, 255);
  const attachmentType = String(req.body.attachmentType || "").trim().slice(0, 120);
  const attachmentBase64 = String(req.body.attachmentBase64 || "").trim();
  const allowedTitles = ["Incorrect answer", "Incorrect question", "Unclear wording", "Typo or formatting", "Duplicate question", "Outdated information", "Other"];
  if (!Number.isInteger(attemptQuestionId) || attemptQuestionId < 1) return res.status(400).json({ error: "Invalid question." });
  if (!allowedTitles.includes(title)) return res.status(400).json({ error: "Please select a valid report type." });
  if (description.length < 5 || description.length > 2000) return res.status(400).json({ error: "Please provide a description between 5 and 2000 characters." });
  let attachmentBuffer = null;
  if (attachmentBase64) {
    try {
      attachmentBuffer = Buffer.from(attachmentBase64, "base64");
      if (!attachmentBuffer.length || attachmentBuffer.length > 1024 * 1024) return res.status(400).json({ error: "Attachment must be 1 MB or smaller." });
    } catch {
      return res.status(400).json({ error: "Invalid attachment." });
    }
  }
  try {
    const result = await db.query(
      `SELECT aq.id, aq.question_id, a.user_id
       FROM attempt_questions aq JOIN attempts a ON a.id=aq.attempt_id
       WHERE aq.id=$1 AND a.user_id=$2`,
      [attemptQuestionId, req.user.id]
    );
    if (!result.rows[0]) return res.status(404).json({ error: "Question not found in your assessment." });
    const row = result.rows[0];
    await db.query(
      `INSERT INTO question_reports (user_id, question_id, attempt_question_id, title, description, reason, attachment_name, attachment_type, attachment_size, attachment_data)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
      [req.user.id, row.question_id, attemptQuestionId, title, description, description, attachmentName || null, attachmentType || null, attachmentBuffer ? attachmentBuffer.length : null, attachmentBuffer]
    );
    res.status(201).json({ ok: true, message: "Thanks. Your report has been submitted." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to submit the report." });
  }
});

app.get("/api/admin/reports", requireAdmin, async (req, res) => {
  const status = String(req.query.status || "").trim().toLowerCase();
  try {
    const result = await db.query(
      `SELECT r.id, r.title, r.description, r.reason, r.status, r.created_at, r.reviewed_at, r.attachment_name, r.attachment_type, r.attachment_size,
              q.id AS question_id, q.question_text, u.name, u.email,
              ru.name AS reviewer_name
       FROM question_reports r
       LEFT JOIN questions q ON q.id=r.question_id
       LEFT JOIN users u ON u.id=r.user_id
       LEFT JOIN users ru ON ru.id=r.reviewed_by
       WHERE ($1='' OR r.status=$1)
       ORDER BY r.created_at DESC LIMIT 200`, [status]
    );
    res.json(result.rows.map(r => ({
      id:Number(r.id), title:r.title || "Other", description:r.description || r.reason || "", reason:r.reason, status:r.status, created_at:r.created_at, reviewed_at:r.reviewed_at,
      attachment_name:r.attachment_name || null, attachment_type:r.attachment_type || null, attachment_size:r.attachment_size ? Number(r.attachment_size) : null,
      question_id:r.question_id ? Number(r.question_id) : null, question:r.question_text || "Question removed",
      name:r.name || "Unknown user", email:r.email || "", reviewer_name:r.reviewer_name || null
    })));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to load question reports." });
  }
});

app.put("/api/admin/reports/:id", requireAdmin, async (req, res) => {
  const id = Number(req.params.id);
  const status = String(req.body.status || "").trim().toLowerCase();
  if (!Number.isInteger(id) || id < 1) return res.status(400).json({ error: "Invalid report." });
  if (!["open","reviewed","dismissed"].includes(status)) return res.status(400).json({ error: "Invalid report status." });
  try {
    const result = await db.query(
      `UPDATE question_reports SET status=$1, reviewed_by=$2, reviewed_at=NOW() WHERE id=$3 RETURNING id,status`,
      [status, req.user.id, id]
    );
    if (!result.rows[0]) return res.status(404).json({ error: "Report not found." });
    await writeAudit(req, "question_report_updated", "question_report", id, { status });
    res.json({ ok:true, ...result.rows[0], id:Number(result.rows[0].id) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to update the report." });
  }
});

app.get("/api/admin/reports/:id/attachment", requireAdmin, async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) return res.status(400).send("Invalid report.");
  try {
    const result = await db.query("SELECT attachment_name, attachment_type, attachment_data FROM question_reports WHERE id=$1", [id]);
    const row = result.rows[0];
    if (!row || !row.attachment_data) return res.status(404).send("Attachment not found.");
    res.setHeader("Content-Type", row.attachment_type || "application/octet-stream");
    res.setHeader("Content-Disposition", `attachment; filename="${String(row.attachment_name || "attachment").replace(/[^a-zA-Z0-9._-]/g, "_")}"`);
    res.send(row.attachment_data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unable to download attachment.");
  }
});

app.get("/api/admin/access-responses", requireAdmin, async (req, res) => {
  try {
    const result = await db.query(`SELECT ar.id, ar.user_id, ar.email, ar.response, ar.created_at, u.name
      FROM access_responses ar LEFT JOIN users u ON u.id=ar.user_id ORDER BY ar.created_at DESC LIMIT 200`);
    res.json(result.rows.map(r => ({id:Number(r.id), user_id:r.user_id ? Number(r.user_id) : null, name:r.name || "Unknown user", email:r.email, response:r.response, created_at:r.created_at})));
  } catch (error) {
    console.error(error);
    res.status(500).json({error:"Unable to load user responses."});
  }
});

app.get("/api/admin/audit", requireAdmin, async (req, res) => {
  const search = String(req.query.search || "").trim().toLowerCase();
  try {
    const result = await db.query(
      `SELECT id, actor_name, actor_email, action, entity_type, entity_id, details, created_at
       FROM audit_logs
       WHERE ($1='' OR LOWER(COALESCE(actor_name,'')) LIKE '%'||$1||'%' OR LOWER(COALESCE(actor_email,'')) LIKE '%'||$1||'%' OR LOWER(action) LIKE '%'||$1||'%' OR LOWER(entity_type) LIKE '%'||$1||'%')
       ORDER BY created_at DESC LIMIT 300`, [search]
    );
    res.json(result.rows.map(r => ({ id:Number(r.id), actor_name:r.actor_name || "System", actor_email:r.actor_email || "", action:r.action, entity_type:r.entity_type, entity_id:r.entity_id ? Number(r.entity_id) : null, details:r.details || {}, created_at:r.created_at })));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to load modification history." });
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
    await writeAudit(req, "question_created", "question", result.rows[0].id, { subject: result.rows[0].subject, topic: result.rows[0].topic });
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
    await writeAudit(req, "question_updated", "question", id, { subject: result.rows[0].subject, topic: result.rows[0].topic });
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
    await writeAudit(req, "question_archived", "question", Number(req.params.id), {});
    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to archive the question." });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`MeritArc running on port ${PORT}`);
});
