# MeritArc

MeritArc is an assessment platform with a learner UI, question bank, user authentication, server-side assessment attempts, and PostgreSQL persistence.

## Project structure

- `index.html` - learner-facing assessment UI
- `css/` - application styles
- `js/` - frontend logic and local question data fallback
- `admin/` - question bank administration prototype
- `backend/server.js` - Express API and web server
- `backend/db.js` - PostgreSQL connection pool
- `backend/seed.js` - schema initialization and question seeding
- `database/schema.sql` - PostgreSQL schema
- `database/seed-data.json` - starter question bank

## Local / production environment variables

Set `DATABASE_URL` to the PostgreSQL connection string from Supabase. Keep the real connection string private.

Example:

```text
DATABASE_URL=postgresql://postgres.<project-ref>:<password>@<pooler-host>:5432/postgres
PORT=3000
NODE_ENV=development
```

## Run locally

Install dependencies:

```bash
npm install
```

Initialize the PostgreSQL database and seed the starter questions:

```bash
npm run seed
```

Start the application:

```bash
npm start
```

The application listens on the configured `PORT` and binds to `0.0.0.0`.

## Free Render + Supabase deployment

MeritArc can run as a Render Web Service using the Render Free plan while Supabase provides the persistent PostgreSQL database.

Render settings:

```text
Language: Node
Branch: main
Root Directory: blank
Build Command: npm install
Start Command: npm run start:render
```

Set this Render environment variable:

```text
DATABASE_URL=<your private Supabase Session Pooler connection string>
```

Do not add a Render persistent disk when using the free plan. The database lives in Supabase.

`npm run start:render` initializes the schema and seeds the question bank on first deployment, then starts the Express server.

Health check path:

```text
/api/health
```

## Important security notes

- Never commit `.env` or a real `DATABASE_URL` to GitHub.
- Never publish the Supabase database password.
- The database password should only be stored as a hosting-provider environment variable or another secure secret store.
