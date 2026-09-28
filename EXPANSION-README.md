# MeritArc Exam Library Expansion

This patch adds exam-specific preparation pages and a larger XML sitemap.

## Added sections
- Exam Library
- Banking Exams
- SSC Exams
- Teaching Exams
- Railway Exams
- Government & Defence Exams
- About MeritArc
- Privacy Policy
- IBPS PO, IBPS Clerk, SBI PO, SBI Clerk
- RBI Grade B, RBI Assistant
- SSC CGL, CHSL, CPO, MTS, GD, Stenographer
- DSSSB TGT, PRT, PGT
- CTET
- KVS TGT, KVS PRT
- NVS TGT, NVS PGT
- RRB NTPC, RRB Group D
- UPSC Civil Services, CDS, AFCAT

## Sitemap
The updated sitemap contains 38 URLs:
- 5 existing public pages
- 8 hub/trust pages
- 25 exam-specific pages

## Important
These pages are preparation resources and use original MeritArc guidance. They do not claim that original practice questions are official previous-year questions. Actual previous-year material should only be labeled as such when the source/year is verified.

## Deployment
Copy the new HTML files and `exam-pages.css` into the website root/assets structure and replace the existing `sitemap.xml` with the included version.

Existing pages should also receive an `Exam Library` navigation link pointing to `/exams.html`.

## GitHub commit comment
Add MeritArc exam library and expanded sitemap
