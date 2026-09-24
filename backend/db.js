const Database=require("better-sqlite3"),path=require("node:path");
const db=new Database(path.join(__dirname,"..","database","meritarc.db")); db.pragma("journal_mode = WAL"); module.exports=db;
