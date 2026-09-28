# MeritArc Assessment Question Count Fix

Fixes the assessment setup so 20, 30, and 50 question selections are actually available and usable for guests as well as signed-in users.

## Changes

- Frontend question bank now contains 60 questions per subject, allowing the setup to offer up to 50 questions.
- Guest setup no longer hard-limits the selector to 10 questions.
- Signed-in assessments continue to use the server-side assessment engine with a maximum of 50 questions.
- The selected count is passed through to the assessment engine.
- Existing assessment UI and setup flow are preserved.

## Files

- `js/app.js`
- `js/data.js`
- `backend/server.js`

## Validation

- 17 subjects × 60 frontend questions = 1,020 available static questions.
- Maximum selectable assessment size: 50.
- `node --check` passed for app.js and server.js.
