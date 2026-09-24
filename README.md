MERITARC
========

Folder structure
----------------
index.html
css/style.css
js/data.js
js/app.js
assets/logo.svg

Current functionality
---------------------
1. MeritArc branded UI
2. Eight subjects
3. Separate question bank file
4. Ten randomized questions per attempt
5. Fresh randomized set on every retake
6. Immediate answer checking
7. Answer explanations
8. Final assessment report
9. Local browser result history
10. Subject search

Architecture
------------
The frontend is deliberately separated so we can add a backend later.

Recommended next phase
----------------------
- Move questions into a database
- Add topic and difficulty fields
- Add admin question management
- Add configurable assessment length
- Add timers
- Add user accounts
- Add server-side result storage
- Add analytics


Recent UI/UX fixes
------------------
- Changed the assessment badge to "10 questions per attempt"
- Randomized answer options while preserving the correct answer
- Improved SVG logo sizing/rendering in the header
- Reduced top navigation font weight and improved hover styling
- Search now scrolls to the assessment results
- Empty search still shows all assessments and scrolls to results
- No-match searches show a clear "No assessments found" message
- Search suggestions appear while typing
