const fs=require("node:fs"),path=require("node:path"),Database=require("better-sqlite3");
const db=new Database(path.join(__dirname,"..","database","meritarc.db"));
db.exec(fs.readFileSync(path.join(__dirname,"..","database","schema.sql"),"utf8"));
const seed=JSON.parse(fs.readFileSync(path.join(__dirname,"..","database","seed-data.json"),"utf8"));
if(!db.prepare("SELECT 1 FROM questions LIMIT 1").get()){
 const ins=db.prepare(`INSERT INTO questions(subject,topic,difficulty,question_text,option_a,option_b,option_c,option_d,correct_option,explanation,status) VALUES(?,?,?,?,?,?,?,?,?,?,?)`);
 db.transaction(rows=>rows.forEach(q=>ins.run(q.subject,q.topic,q.difficulty,q.question,...q.options,q.correct,q.explanation,q.status)))(seed);
 console.log(`Seeded ${seed.length} questions.`);
}else console.log("Seed skipped: database already has questions.");
db.close();
