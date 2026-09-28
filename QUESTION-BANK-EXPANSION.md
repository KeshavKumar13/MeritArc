# MeritArc Question Bank Expansion

This patch expands the existing MeritArc seed question bank from 170 to 1,020 original practice questions.

## Coverage

17 existing subjects × 60 questions each = 1,020 questions.

Each question includes:

- Subject
- Topic
- Difficulty
- Question text
- Four options
- Correct option
- Explanation
- Active status

The assessment UI is unchanged.

## Deployment

Replace the existing `database/seed-data.json` with the file in this patch and deploy normally.

MeritArc's existing `backend/seed.js` checks the subject and question text before inserting, so the existing questions will not be duplicated. The new questions will be inserted into the existing Supabase PostgreSQL database when Render starts the service.

## Validation

- 1,020 questions
- 60 questions per subject
- No duplicate subject/question pairs
- Four options per question
- Valid correct-option indexes
- Explanations present
- Existing seed script syntax validated
