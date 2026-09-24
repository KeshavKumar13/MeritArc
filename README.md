# MeritArc v0.5.8

Practice and assessment platform with PostgreSQL-backed accounts, assessments, admin controls, question reporting, modification history, category pages, and mobile-friendly navigation.

## Admin roles
- User: take assessments and view own results.
- Editor: manage questions.
- Administrator: manage questions, results, users, question reports, and modification history.

The environment-managed administrator account is controlled by `ADMIN_EMAIL` and `ADMIN_PASSWORD`. The current administrator cannot change their own profile or role through the website.

## Admin result management
Administrators can edit a recorded score or permanently delete an assessment result after confirmation. Deleting an attempt removes its stored answers and result through database cascades.

## Users
Administrators can add users with a role and temporary password. The temporary password is shown once in the admin console. Email delivery is not configured yet.

## Question reports and audit history
Signed-in users can report a question during an assessment. Administrators can review report status and see a modification history showing who changed questions, results, users, and reports.

## Deployment
Use Render for the Node/Express service and Supabase PostgreSQL for the database. Required Render environment variables: `DATABASE_URL`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD`.

## Do not commit
Do not commit `.env`, `node_modules/`, database files, or credentials.


## v0.5.9 refinements

* Assessment deep links open directly into the assessment without flashing the home view.
* Question reports use a structured title dropdown, description, and optional attachment limited to 1 MB.
* Admins can activate, block, remove, or permanently delete user accounts. Blocked/removed users can receive an admin-written message and optional input request.
* Added support/contact page and support email link.
* Mobile navigation alignment improved and the menu closes when tapping outside it.
* Replaced the previous hero arc/peak decoration with a cleaner progress visual.
* Search suggestion styling refined.
