# MeritArc Assessment Setup — Inline

This patch moves assessment setup into the assessment area itself.

Flow:
1. User selects a subject.
2. MeritArc opens the assessment area.
3. The setup form appears before any question is shown.
4. User chooses question count, time limit and difficulty.
5. MeritArc starts the assessment using those selections.
6. The timer starts only after the assessment begins.

No database migration is required.

Replace:
- `index.html`
- `js/app.js`
- `css/style.css`

Commit:
`Move assessment setup into pre-assessment flow`
