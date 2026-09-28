# MeritArc Assessment Setup Fix

This patch fixes the assessment setup flow so the setup screen opens immediately before authentication/session checks finish.

It also prevents direct calls to `startAssessment()` from bypassing the setup screen.

## Replace these exact files

```text
index.html
style.css
js/app.js
backend/server.js
```

Do not place `app.js` or `server.js` in the repository root. The paths above are important.

## Expected flow

Click Start Practice → Assessment Setup opens → choose question count, time limit and difficulty → Start Assessment → assessment begins and timer starts.

The setup screen should also appear when opening a subject through a `?subject=` URL.

## Commit

```text
Fix assessment setup flow
```
