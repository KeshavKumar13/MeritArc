# MeritArc v0.2

Backend step for MeritArc.

Added:
- SQLite structured question bank
- Subject, topic and difficulty
- Random question API
- Question CRUD API
- Basic admin question-bank page
- Existing learner UI kept as the baseline

Run with Node.js 20+:

npm install
npm run seed
npm start

Learner: http://localhost:3000
Admin: http://localhost:3000/admin/

The admin page is a development prototype without authentication. Do not expose it publicly until authentication and authorization are added.


## Authentication

This version includes account creation, sign-in, sign-out, password hashing with Node.js `crypto/scrypt`, and server-side sessions stored in SQLite.

Email verification, password reset, rate limiting, role-based admin authentication, and production hardening are intentionally separate future steps.
