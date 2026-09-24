const fs = require("node:fs");
const path = require("node:path");
const db = require("./db");

async function seed() {
  const schema = fs.readFileSync(
    path.join(__dirname, "..", "database", "schema.sql"),
    "utf8"
  );
  await db.query(schema);

  const seedData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "database", "seed-data.json"), "utf8")
  );

  const countResult = await db.query("SELECT COUNT(*)::int AS count FROM questions");
  if (countResult.rows[0].count > 0) {
    console.log("Seed skipped: database already has questions.");
    await db.end();
    return;
  }

  const client = await db.connect();
  try {
    await client.query("BEGIN");

    for (const q of seedData) {
      await client.query(
        `INSERT INTO questions
          (subject, topic, difficulty, question_text, option_a, option_b, option_c, option_d,
           correct_option, explanation, status)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
        [
          q.subject,
          q.topic,
          q.difficulty,
          q.question,
          q.options[0],
          q.options[1],
          q.options[2],
          q.options[3],
          q.correct,
          q.explanation || "",
          q.status || "active"
        ]
      );
    }

    await client.query("COMMIT");
    console.log(`Seeded ${seedData.length} questions.`);
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
    await db.end();
  }
}

seed().catch(async (error) => {
  console.error("Database seed failed:", error);
  await db.end().catch(() => {});
  process.exit(1);
});
