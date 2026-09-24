const Database = require("better-sqlite3");
const path = require("node:path");
const fs = require("node:fs");

// Local development keeps the SQLite database inside the project.
// Render uses DATABASE_PATH (configured as /var/data/meritarc.db) on a persistent disk.
const dbPath = process.env.DATABASE_PATH ||
  path.join(__dirname, "..", "database", "meritarc.db");

const dbDir = path.dirname(dbPath);
fs.mkdirSync(dbDir, { recursive: true });

const db = new Database(dbPath);
db.pragma("journal_mode = WAL");

module.exports = db;
