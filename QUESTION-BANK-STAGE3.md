# MeritArc Stage 3 Question Bank Expansion

This patch expands the verified MeritArc question bank from **1,119 to 2,119 questions** by adding **1,000 new exam-oriented practice questions**.

## Focus

The new batch is designed around SSC and banking-style preparation, with emphasis on:

- Quantitative Aptitude
- Mathematics
- Logical Reasoning
- English
- General Studies
- Banking awareness within General Studies
- Computer awareness within General Studies

The questions include calculation-based practice, reasoning patterns, grammar, vocabulary, idioms, one-word substitution, polity, history, geography, science, economics, banking concepts and computer awareness.

## Quality checks

- 1,000 new questions
- 2,119 questions in the combined seed file
- No duplicate `(subject, question)` pairs
- Four options per question
- Valid correct-option indexes
- Explanations present
- No placeholder Set/Question-number filler questions in the new batch
- Correct answers are distributed across all four option positions
- Difficulty labels are Easy/Medium and are intentionally weighted toward Medium for this exam-oriented batch
- JSON validation completed

## Important distinction

These are **original practice questions aligned to common SSC and banking preparation topics**. They are not being represented as official previous-year questions (PYQs). Verified PYQs can be added later as a separately identified source-backed collection.

## Deployment

Replace the existing:

`database/seed-data.json`

with the patched version in this ZIP.

The existing `backend/seed.js` will compare `subject + question_text` and insert only questions that are not already present in Supabase.

If the live database currently contains 1,119 questions, Render should seed approximately 1,000 additional questions.

Expected final database count:

`2,119`

## Commit

`Add 1000 quality exam oriented practice questions`
