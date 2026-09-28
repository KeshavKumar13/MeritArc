# MeritArc Stage 4: Smarter Assessment Selection

This patch improves the existing `/api/attempts` question selection without changing the frontend UI or database schema.

## What changes

The assessment engine now:

1. Targets an approximate 40% Easy / 40% Medium / 20% Hard mix when enough questions are available.
2. Rotates across topics while selecting questions to reduce repeated topics in a single assessment.
3. Prioritizes questions the signed-in user has not previously attempted for that subject.
4. Reuses previously attempted questions only when there are not enough unseen questions to fill the requested assessment.
5. Keeps the requested assessment size and existing option shuffling behavior.
6. Falls back gracefully when a subject has an uneven difficulty or topic distribution.

## UI impact

None. Existing assessment pages continue to call `POST /api/attempts` with the same payload.

## Database impact

None. No schema migration is required.

## Deployment

Replace the current `backend/server.js` with the file in this patch, commit, and push to GitHub. Render will redeploy automatically.

## Validation

`node --check backend/server.js` passes.

Suggested functional test after deployment:

1. Sign in.
2. Start the same subject twice.
3. Compare the questions between attempts.
4. Confirm the second attempt generally prioritizes questions not seen in the first attempt.
5. Complete the assessment and verify scoring/history still work normally.
