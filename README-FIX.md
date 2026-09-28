# MeritArc UI + Assessment Flow Fix

This patch restores the inline pre-assessment setup and keeps the 5/10/20/30/50 question flow intact.

It also:
- restores the assessment question area after the homepage polish patch accidentally replaced the inline setup markup
- updates the homepage to 2,119+ questions, 17 subjects and 25 exam guides
- adds visible setup styling for question count, time limit and difficulty
- makes Quick Practice cards slightly bolder and cleaner
- fixes the global page loader so it is created only after `body` exists and is hidden on the window `load` event
- includes the current assessment count/smarter-selection frontend and backend files

Replace:
- index.html
- css/style.css
- exam-pages.css
- js/site.js
- js/app.js
- backend/server.js

Commit:
`Restore assessment flow and polish loading UI`
