const fs = require("node:fs");
const path = require("node:path");
const db = require("./db");

function hashPassword(password) {
  const crypto = require("node:crypto");
  const salt = crypto.randomBytes(16);
  const derived = crypto.scryptSync(password, salt, 64);
  return `${salt.toString("hex")}:${derived.toString("hex")}`;
}

async function seedAdmin() {
  const email = String(process.env.ADMIN_EMAIL || "").trim().toLowerCase();
  const password = String(process.env.ADMIN_PASSWORD || "");
  if (!email || !password) return;
  if (password.length < 8) throw new Error("ADMIN_PASSWORD must be at least 8 characters.");

  const existing = await db.query("SELECT id FROM users WHERE LOWER(email) = LOWER($1) LIMIT 1", [email]);
  const passwordHash = hashPassword(password);
  if (existing.rows[0]) {
    await db.query("UPDATE users SET role='admin', password_hash=$1 WHERE id=$2", [passwordHash, existing.rows[0].id]);
    console.log(`Admin account ready: ${email}`);
  } else {
    await db.query(
      `INSERT INTO users (name, email, password_hash, role) VALUES ($1,$2,$3,'admin')`,
      ["MeritArc Admin", email, passwordHash]
    );
    console.log(`Admin account created: ${email}`);
  }
}

async function seed() {
  const schema = fs.readFileSync(path.join(__dirname, "..", "database", "schema.sql"), "utf8");
  await db.query(schema);
  const seedData = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "database", "seed-data.json"), "utf8"));

  let inserted = 0;
  const client = await db.connect();
  try {
    await client.query("BEGIN");
    for (const q of seedData) {
      const existing = await client.query(
        `SELECT id FROM questions WHERE subject = $1 AND question_text = $2 LIMIT 1`,
        [q.subject, q.question]
      );
      if (existing.rowCount > 0) continue;
      await client.query(
        `INSERT INTO questions
          (subject, topic, difficulty, question_text, option_a, option_b, option_c, option_d,
           correct_option, explanation, status)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
        [q.subject, q.topic, q.difficulty, q.question, q.options[0], q.options[1], q.options[2], q.options[3], q.correct, q.explanation || "", q.status || "active"]
      );
      inserted++;
    }
    await client.query("COMMIT");
    console.log(inserted ? `Seeded ${inserted} new questions.` : "Seed skipped: all questions already exist.");
    await seedAdmin();
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
    await db.end();
  }
}

seed().catch(async error => {
  console.error("Database seed failed:", error);
  await db.end().catch(() => {});
  process.exit(1);
});
