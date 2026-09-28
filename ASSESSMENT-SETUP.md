# MeritArc Assessment Setup

Adds an assessment configuration step before every assessment starts.

## User controls

- Number of questions: 5, 10, 20, 30 or 50
- Time limit: No timer, 5, 10, 15, 20, 30 or 60 minutes
- Difficulty: Mixed, Easy, Medium or Hard

The assessment timer starts only after the user clicks **Start Assessment**.

## Smart selection

- Mixed difficulty uses the existing Stage 4 balanced difficulty selection.
- Easy, Medium or Hard filters the server question pool before selection.
- The existing topic spreading and unseen-question preference remain active.
- The current assessment UI remains unchanged after the assessment starts.

## Guest behavior

Guest practice remains available. Guests can select question count and time, but difficulty-specific selection is available after signing in because the live database contains the authoritative difficulty metadata.

## Files

Replace these files in the current MeritArc repository:

- `index.html`
- `js/app.js`
- `style.css`
- `backend/server.js`

This patch assumes the Stage 4 smarter assessment engine is already deployed. The included `backend/server.js` contains that Stage 4 logic plus difficulty filtering.
