# Assessment Setup Fix 2

Fixes the deep-link loading overlay that could remain above the assessment setup modal at `/?subject=Linux#assessment`.

The setup modal now clears the boot overlay immediately and is layered above legacy overlays.

Replace:
- `index.html`
- `style.css`
- `js/app.js`
- `backend/server.js`

Commit: `Fix assessment setup overlay`
