# MeritArc Question Bank Stage 2 Quality Expansion

This patch expands the live seed source from 1,020 to 1,119 original practice questions.

## What changed

Added 99 scenario-based questions across:

- Windows
- Linux
- VMware
- Hyper-V
- Azure
- AWS
- Security
- Networking
- Computer Science Fundamentals
- Data Structures & Algorithms

The new questions emphasize troubleshooting, operational decisions, security investigation, infrastructure scenarios, and applied concepts rather than simple definitions.

## Validation

- Total questions: 1,119
- No duplicate `(subject, question)` pairs
- Four options per question
- Valid correct-answer indexes
- Explanations present
- JSON syntax validated
- Existing backend seed script syntax validated
- No frontend/UI files changed

## Apply

Replace the existing `database/seed-data.json` with the file in this patch.

The existing seed process will insert questions that are not already present in Supabase. It does not modify or delete existing questions.

After deployment, verify the Supabase count with:

```sql
SELECT COUNT(*) AS total_questions FROM questions;
```

Expected count after this patch: **1,119**.
