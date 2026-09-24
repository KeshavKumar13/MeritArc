# MeritArc

MeritArc is an assessment platform with a learner UI, question bank, user authentication, server-side assessment attempts, and SQLite persistence.

## Local development

Requirements: Node.js 20+

```bash
npm install
npm run seed
npm start
```

Learner: http://localhost:3000
Admin: http://localhost:3000/admin/

## Render deployment

The app is configured for Render Web Services.

Build command:

```bash
npm install
```

Start command:

```bash
npm run start:render
```

For persistent SQLite storage on Render, configure a persistent disk and set:

```text
DATABASE_PATH=/var/data/meritarc.db
```

The server binds to `0.0.0.0` and uses Render's `PORT` environment variable.

## Important

The admin question-bank interface is still a development prototype and does not yet have role-based administrator authentication. Do not expose or use it for public administration until that security layer is added.
