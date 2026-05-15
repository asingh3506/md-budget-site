# Presentation Brief — Final Client Presentation

This file is the **prompt** to paste into a fresh Claude chat (claude.ai or Claude Code) to generate the final 15-minute, 10–12-slide presentation for the Maryland Budget Intel Tool. It is self-contained: Claude does not need this repository checked out to use it. All facts, figures, brand specs, and slide content are inline.

> **How to use:** Open a new Claude conversation. Paste this entire file as your first message. Claude will produce a `.pptx` file via `python-pptx`, plus the speaker notes. Iterate from there.

---

## TASK FOR CLAUDE

Generate a polished, client-ready 12-slide PowerPoint presentation for the **Maryland Budget Intel Tool** final handoff. Output two artifacts:

1. **A `.pptx` file** built with `python-pptx`. Use the exact brand specs, slide content, and structure provided below. Save to `presentation/Maryland_Budget_Intel_Tool_Final.pptx`.
2. **A speaker-notes document** (`presentation/SPEAKER_NOTES.md`) with timing, talking points, and transition cues for every slide. Total runtime: 14–15 minutes (≈ 70–80 seconds per slide, with stretch on the demo slides).

Match the brand identity of the live site at https://mdbudgetintel.netlify.app — the deck should look like a natural extension of the website, not a generic template.

---

## PROJECT CONTEXT

| | |
|---|---|
| Product | Maryland Budget Intel Tool (MBIT) |
| Live site | https://mdbudgetintel.netlify.app |
| Home Page repo | https://github.com/asingh3506/md-budget-site |
| Deep-Dive repo | https://github.com/priyanshu124/IT_state_budget_agent |
| Team | Aarushi Singh · Nadvi Haque · Priyanshu Gupta · James Van Doorn |
| Program | University of Maryland iSchool Capstone |
| Partners | NXT · Senate Budget & Taxation Committee Staff |
| Fiscal year covered | FY2027 (with FY2017–FY2030 trend data in Deep-Dive) |

**One-sentence pitch.** Maryland Budget Intel Tool is a public, source-cited fiscal dashboard that transforms four published government document types (ACFR, JCR, MFR, DBM budget books) into ten interactive visualizations plus an 80+ agency drill-down explorer — every figure deep-linked to the exact PDF page where it was first stated.

**The audience.** Legislators, legislative staffers, journalists, policy analysts, NXT leadership, Senate Budget & Taxation Committee staff. Mixed financial literacy; assume they understand budgets but not the technical stack.

---

## BRAND IDENTITY (use exactly)

### Color palette

| Token | Hex | Use |
|---|---|---|
| `nxt-deep` | `#211030` | Hero backgrounds, headlines on light cards |
| `nxt-grape` | `#6321a5` | Primary accents, section dividers |
| `nxt-tint` | `#802CD7` | Secondary purple, button-style elements |
| `nxt-lavender` | `#b376f6` | Subtle highlights on dark backgrounds |
| `nxt-pink` | `#ede5f8` | Light surface background |
| `red-flag` | `#CE1126` | "Red" KPI direction, alerts, Maryland flag |
| `gold-flag` | `#E8A317` | "Amber" direction, Maryland flag |
| `green-ok` | `#1A7340` | "Green" direction |
| `ink` | `#121212` | Body text |
| `mute` | `#6B7280` | Secondary text |

### Maryland flag stripe

Every slide footer carries a thin (4–6 pt) horizontal bar split into 4 equal segments, left-to-right: `#CE1126` red · `#E8A317` gold · `#000000` black · `#FFFFFF` white. This is the signature element from the live site's header.

### Typography

| Use | Font | Fallback |
|---|---|---|
| Headlines & hero stats | Georgia (or "Libre Baskerville") | Times New Roman |
| Section labels (all caps, tracked) | JetBrains Mono | Consolas |
| Body | IBM Plex Sans | Calibri / Helvetica |

Headline sizing reference: hero stat **88pt**, slide title **36pt**, section label **11pt with 0.18em letter-spacing**.

### Visual conventions

- **No bullet hell.** Each content slide carries one big idea — a hero stat, a hero visual, or a clean 3-card row.
- **Source citation** on every data slide: small monospace footnote in `#9B9B9B`, prefixed `SOURCE — `.
- **Dark hero slides** use the gradient `linear-gradient(135deg, #211030 0%, #551c8e 60%, #6321a5 100%)`.
- **Light content slides** use `#FAFAFA` background with the flag stripe at bottom.
- **Numbers are bold and big.** Don't shrink the hero stat to fit a paragraph — shrink the paragraph.

---

## SLIDE-BY-SLIDE OUTLINE

Total runtime budget: **14 min 30 sec** (includes transitions and one live-demo moment). Each slide below includes target timing, content, layout, and speaker notes.

### Slide 1 — Title (40 s)

**Layout:** Dark hero background (`#211030 → #6321a5` gradient). Maryland crest top-left. Maryland flag stripe along bottom.

**Content:**
- Eyebrow label (mono, lavender): `MARYLAND · FY2027 OPERATING BUDGET`
- Title (Georgia, white, 48pt, bold): `Maryland Budget Intel Tool`
- Subtitle (sans, lavender, 18pt): `A public, source-cited fiscal dashboard`
- Foot label row (mono, 10pt, muted lavender): `mdbudgetintel.netlify.app` · `University of Maryland iSchool Capstone · NXT · Senate Budget & Taxation Committee`
- Team line (10pt): `Aarushi Singh · Nadvi Haque · Priyanshu Gupta · James Van Doorn`

**Speaker notes (40 s):** "Good morning. We're presenting the Maryland Budget Intel Tool, a public dashboard for Maryland's FY2027 operating budget. The live site is at mdbudgetintel.netlify.app. Over the next fifteen minutes we'll show what we built, how we built it, and why it matters."

---

### Slide 2 — The Problem (80 s)

**Layout:** Light background. Three stacked cards, each containing one row.

**Content:**
- Section label: `THE PROBLEM`
- Title: `Maryland's fiscal story lives in four disconnected documents`
- Three cards (each with a doc name + one-line role):
  - `ACFR — Audited financial statements (Comptroller, annual)`
  - `JCR — Legislative appropriations analysis (Joint Chairmen, annual)`
  - `MFR — Monthly fiscal reports (executive in-year tracking)`
  - `DBM — Operating Budget Books (proposed and enacted)`
- One-sentence footnote (italic, mute): `No public-facing tool has ever reconciled the narratives in these documents against the underlying audited figures.`

**Speaker notes (80 s):** "Maryland publishes its budget story across four official document types, each with its own narrative interpretation of the numbers. The ACFR is audited. The JCR is legislative. The MFR tracks the year in progress. The DBM books are the executive's proposed and enacted budget. Until now, no public-facing tool has cross-referenced these narratives against the underlying audited financial statements. When the narratives disagree, the public has no easy way to see it."

---

### Slide 3 — Our Solution (70 s)

**Layout:** Hero stat slide. Big number on left half, three context callouts on right.

**Content:**
- Hero stat (88pt Georgia bold, `#211030`): `$70.8B`
- Stat caption (16pt mono, mute): `FY2027 OPERATING BUDGET, FULLY SOURCED`
- Right-side stack (three rows):
  - `10  ·  HOME PAGE VISUALIZATIONS`
  - `80+  ·  AGENCIES IN DEEP-DIVE`
  - `100%  ·  TRACEABLE TO EXACT PDF PAGE`
- Footer line: `mdbudgetintel.netlify.app`

**Speaker notes (70 s):** "Our solution: a single dashboard that transforms those four document types into ten interactive visualizations on the home page, plus an agency-level explorer covering 80+ Maryland agencies. Every figure deep-links to the exact page of the source PDF. There is no third-party data, no estimate not labeled as an estimate, and nothing on the dashboard that cannot be traced back to a published document."

---

### Slide 4 — How It's Built (80 s)

**Layout:** Single panel with a horizontal data-flow diagram, three boxes connected by arrows.

**Content:**
- Section label: `INPUT → MAGIC BOX → OUTPUT`
- Three boxes:
  - **INPUT** (lavender header): `4 official document types + DBM open data API`
  - **MAGIC BOX** (grape header): `Python ingestion · DBT transformations · Claude-powered TBM classification · DuckDB warehouse`
  - **OUTPUT** (deep purple header): `Next.js home page · Evidence Deep-Dive · 1 domain · 1 deploy`
- Stack badges row (10pt mono): `Next.js 16 · React 19 · TypeScript · Plotly.js · Evidence.dev · DuckDB · DBT · Netlify`
- Italic footnote: `The pipeline is fully deterministic. Same inputs in, same charts out.`

**Speaker notes (80 s):** "The architecture follows a simple Input-to-Output flow. Inputs are four published document types plus the Department of Budget and Management's open data portal. The middle layer — what we call the magic box — runs Python ingestion, DBT transformations, and Claude-powered Technology Business Management classifications, all writing to a DuckDB analytical warehouse. The output is two applications served from one domain: a Next.js home page and an Evidence-based Deep-Dive. Crucially, the pipeline is deterministic. The same source PDFs produce the same charts every time."

---

### Slide 5 — Home Page in Five Seconds (90 s — DEMO MOMENT)

**Layout:** Full-bleed screenshot of the home page above the fold. Caption strip below.

**Content:**
- Screenshot: capture https://mdbudgetintel.netlify.app showing the hero, KPI row, and the start of the carousel. 1400×900 px. (If unavailable at generation time, leave a placeholder labeled `[SCREENSHOT: Home page above the fold]`.)
- Caption strip (3 columns):
  - `6  ·  KPI cards with red/amber/green direction`
  - `10  ·  rotating headlines in the ticker`
  - `10  ·  drag-or-arrow-navigable chart slides`

**Speaker notes (90 s):** "Here's the home page above the fold. In five seconds, you see Maryland's FY2027 fiscal position. Six KPI cards summarize the state's fiscal health, color-coded red, amber, or green. The ticker rotates ten headline metrics. Below that, a ten-slide chart carousel that you navigate by drag, arrow keys, or the tab strip at the bottom. *(Optional: if presenting live, briefly scroll/scrub the carousel.)*"

---

### Slide 6 — Two Stories Worth Showing (110 s)

**Layout:** 2×1 grid. Two screenshots side by side.

**Content:**
- Left card:
  - Title: `Budget Flow: Revenue → Fund → Agency → Programs`
  - Screenshot: Sankey diagram (capture from slide 2 of the carousel, full-width fullbleed)
  - Caption: `Click any agency in the Sankey to drill down to its top 20 programs.`
- Right card:
  - Title: `Federal Cut Calculator`
  - Screenshot: Federal Cut Calculator (slide 7 of the carousel)
  - Caption: `Drag the slider 0–20% to model federal-grant cuts by agency in real time.`

**Speaker notes (110 s):** "Two stories worth showing. On the left, the budget flow Sankey: revenue source flows through fund type into agency. Click any agency in the diagram and you drill into the top twenty programs that agency funds. On the right, the Federal Cut Calculator: drag a slider zero to twenty percent and the chart re-renders to show the dollar impact per agency. Federal dependency by agency comes straight from the ACFR 2025 Statement of Activities."

---

### Slide 7 — The Honest Number (90 s)

**Layout:** Single dark panel. Big stat at top. Chart below. Source at bottom.

**Content:**
- Eyebrow (mono lavender): `STRUCTURAL GAP · ACFR 2025`
- Hero stat (Georgia, 64pt, white): `Spending growing 3.2× faster than revenue`
- Sub-stat row (lavender, 14pt):
  - `Revenue trend: +$1.2 B/yr`
  - `Expenditure trend: +$3.8 B/yr`
  - `Projected gap by FY2030: −$19.7 B`
- Embedded chart or screenshot: Structural Gap chart from carousel slide 5
- Footer (mono mute): `SOURCE — ACFR 2025 · Statistical Section · pp.231–233 · Linear projection from FY2023–FY2025 audited actuals`

**Speaker notes (90 s):** "If we had to pick one number to put in front of a legislator, it's this one. Pulled from the audited ACFR 2025 Statistical Section, last ten fiscal years of changes in fund balances: revenue is growing at one-point-two billion dollars a year. Expenditures are growing at three-point-eight billion. That's three-point-two times faster. Extended along the same slope, the structural gap reaches negative nineteen-point-seven billion by FY2030. This isn't a forecast — we're not predicting policy. It's the trajectory if current rates hold. And the chart is built so anyone can verify it: click the citation and the source PDF opens to page two thirty-one."

---

### Slide 8 — Methodology & Guardrails (75 s)

**Layout:** Two-column. Methodology pillars left, Guardrails list right.

**Content:**
- Left column (header: `METHODOLOGY`):
  - `Cross-document reconciliation — narrative claims checked against audited figures`
  - `Deterministic pipeline — same PDFs in, same charts out`
  - `Five NXT pillars · NIST RMF governance dimensions addressed`
- Right column (header: `GUARDRAILS — WHAT THIS TOOL WILL NOT DO`):
  - `Invent agency-level data`
  - `Project past FY2030`
  - `Answer hypothetical political questions`
  - `Hide uncertainty`
  - `Strip context from numbers`
  - `Personalize political actors`

**Speaker notes (75 s):** "On the methodology side: we cross-reference narrative claims across the four document types against the audited financial statements. Where they diverge, we surface the divergence rather than republishing the claim. The pipeline is deterministic and aligns with the five NXT DNA pillars and the governance dimensions of the NIST AI Risk Management Framework. On the guardrails side, we publish what the tool will not do. It will not invent agency-level data. It will not project past FY2030. It will not answer hypothetical political questions. These are not aspirations — they're enforced by the pipeline itself."

---

### Slide 9 — The Deep-Dive (95 s)

**Layout:** Screenshot collage of the Deep-Dive. Five capability badges below.

**Content:**
- Title: `Agency-level. Program-level. TBM-classified.`
- Screenshot: Deep-Dive Budget Office landing page (1400×800)
- Five badges (color: nxt-grape, mono):
  - `BUDGET OFFICE · 83 agencies, FY2017–FY2027`
  - `TECHNOLOGY · TBM v5.0.1 cost pools + IT towers`
  - `VARIANCE ANALYSIS · year-over-year change detection`
  - `ANOMALY DETECTION · 386 outliers flagged across 72 agencies`
  - `IT PROJECTS · MITDP register drill-downs`
- Footer: `Built on DuckDB + DBT, classified by Claude, published with Evidence.dev`

**Speaker notes (95 s):** "The Deep-Dive is the second app, accessible from the navigation bar. It runs against a DuckDB analytical warehouse built with DBT transformations, and it's where the technical depth lives. Budget Office gives a high-level fiscal overview across 83 agencies. Technology classifies IT spend into TBM cost pools and IT towers — those classifications are done by Claude-powered agents and cached. Variance Analysis surfaces year-over-year change. Anomaly Detection has flagged 386 statistical outliers across 72 agencies in the current dataset. And IT Projects covers the MITDP register with per-project drill-downs."

---

### Slide 10 — Source Citation, Front and Center (60 s)

**Layout:** A simple "anatomy of a citation" demo. Show one carousel slide with the citation panel circled or highlighted.

**Content:**
- Title: `Every number, click-traceable to the source page.`
- Screenshot: zoom on a carousel sidebar showing the SOURCE block with the clickable citation link
- Annotation arrows pointing to:
  - The plain-language insight
  - The source line
  - The clickable PDF deep-link
- Footer caption: `One click opens the source PDF at the exact page where the figure was first stated.`

**Speaker notes (60 s):** "I want to spend ten seconds on what we think is the most important design decision in the entire project. Every chart has a clickable source. One click and the official PDF opens to the exact page where that number was first published. If a legislator wants to verify a figure, the audit trail is one click away. That is the guardrail against fabrication, and it's the reason the tool earns trust."

---

### Slide 11 — What's Next (75 s)

**Layout:** Five numbered cards in a horizontal strip.

**Content:**
- Title: `Roadmap`
- Five cards:
  - `01 · Custom domain` — Move from netlify.app subdomain to an organization-owned URL via GoDaddy or equivalent registrar
  - `02 · Automated data refresh` — Scheduled GitHub Action to pull DBM open data, run DBT, rebuild the Deep-Dive
  - `03 · Peer-state benchmarking` — Add Virginia, Pennsylvania, North Carolina for comparative context
  - `04 · Executive PDF brief` — One-page printable summary for legislative offices
  - `05 · Observability` — Sentry for error tracking, Plausible analytics for production visibility

**Speaker notes (75 s):** "Five concrete next steps. First: move from the Netlify subdomain to an organization-owned domain like marylandbudgetintel-dot-com via GoDaddy or any registrar. Second: a scheduled GitHub Action that refreshes the data automatically each month. Third: add peer states for cross-state context — Virginia, Pennsylvania, North Carolina. Fourth: a downloadable one-page executive brief for legislative offices. Fifth: production observability — error tracking and lightweight analytics. The handoff documentation includes step-by-step instructions for each."

---

### Slide 12 — Live Site / Closing (40 s)

**Layout:** Dark gradient hero again. URL prominently displayed.

**Content:**
- Title (Georgia white 56pt): `mdbudgetintel.netlify.app`
- Subtitle (lavender 18pt): `Public. Source-cited. Open source.`
- Repo links row (mono 11pt, lavender):
  - `github.com/asingh3506/md-budget-site`
  - `github.com/priyanshu124/IT_state_budget_agent`
- Team and partners line (10pt mute):
  - `Aarushi Singh · Nadvi Haque · Priyanshu Gupta · James Van Doorn`
  - `University of Maryland iSchool Capstone · NXT · Senate Budget & Taxation Committee`
- Maryland flag stripe at bottom

**Speaker notes (40 s):** "That's the Maryland Budget Intel Tool. The live site is at mdbudgetintel.netlify.app. Both repositories are public on GitHub. Thank you to the iSchool, to NXT, and to the Senate Budget and Taxation Committee staff. We're happy to take questions."

---

## OUTPUT SPECIFICATIONS

### File 1 — `presentation/Maryland_Budget_Intel_Tool_Final.pptx`

Build with `python-pptx`. The script should:

- Use 16:9 widescreen (`pptx.util.Inches(13.333) × Inches(7.5)`).
- Load Georgia, JetBrains Mono, and IBM Plex Sans by name. (Fonts substitute automatically if missing on the renderer's system; this is fine.)
- Render the Maryland flag stripe as four rectangles at the slide bottom, each `Inches(13.333 / 4)` wide × `Inches(0.08)` tall, colored `#CE1126`, `#E8A317`, `#000000`, `#FFFFFF` left-to-right.
- For dark hero slides (1, 7, 12), set the slide background to a solid `#211030` and overlay one large purple gradient shape (use a fully-filled `Rectangle` with semi-transparent fill stacked for the gradient effect, since `python-pptx` does not natively support gradient fills on the slide background).
- For light slides, set background to `#FAFAFA`.
- Insert screenshots as full-bleed images where the outline says so. If a screenshot is unavailable at generation time, emit a placeholder rectangle with caption text `[SCREENSHOT: <description>]` matching the outline.

### File 2 — `presentation/SPEAKER_NOTES.md`

A markdown document with:

- Per-slide section (`## Slide N — <Title>`)
- Target duration
- Verbatim talking points (copy from this brief — already drafted above)
- Transition cue to the next slide
- A `**Stage direction:**` line where there's a live-demo moment (Slide 5) or a navigation cue (Slide 6)
- A short opening (15 s) and closing (15 s) outside the slide flow

### Asset note: screenshots

Before running the generator, capture these images from the live site and save them under `presentation/assets/`:

1. `01_home_above_fold.png` — Home page top, KPIs + start of carousel visible. 1400×900.
2. `02_sankey_drilldown.png` — Carousel slide 2 (Budget Flow Sankey). 1400×800.
3. `03_federal_cut_calculator.png` — Carousel slide 7. 1400×800.
4. `04_structural_gap.png` — Carousel slide 5. 1400×800.
5. `05_deep_dive_budget_office.png` — `/deep-dive/budget-office`. 1400×800.
6. `06_citation_anatomy.png` — Zoom into a carousel sidebar showing the SOURCE block with the clickable link. 1200×700.

If any are missing at runtime, the generator should still produce the deck with labeled placeholders.

---

## QUALITY BAR

A slide is "industry gold standard" when **all** of these are true:

- A six-year-old can name the one thing the slide is about within three seconds.
- The hero element (stat, screenshot, or chart) is at least 40% of the slide area.
- Body text is under 25 words; if it isn't, split into two slides or kill paragraphs.
- Every number on a content slide has a citation in the footer.
- Brand colors and typography match the website tokens exactly (refer to the table at the top of this brief).
- The Maryland flag stripe is on every slide.
- Transitions between slides are simple (cut or fade); no flying-in elements.

If any slide breaks one of these, redesign it before declaring the deck done.

---

## OPTIONAL: PRESENTATION VARIANTS

After producing the main deck, optionally produce two variants:

1. **`Maryland_Budget_Intel_Tool_Short.pptx`** — A 5-minute, 5-slide version for an elevator-pitch context. Slides: Title · Problem · Solution (hero number) · One demo · Closing.
2. **`Maryland_Budget_Intel_Tool_Technical.pptx`** — A 25-minute, 18-slide version expanding architecture, data flow, the AI classification pipeline, and the deployment topology for a technical reviewer audience.

---

## FACTUAL GUARDRAILS FOR THE GENERATOR

Do not introduce numbers, claims, or features not in this brief. In particular:

- The Ask Questions / Streamlit AI agent has been removed from the product and **must not appear** anywhere in the deck.
- The header does **not** carry an "FY2027" badge.
- The Sankey supports drill-down by clicking agency nodes; do not describe a separate agency-chip side panel (it was removed).
- The Structural Gap projected gap is **−$19.7B by FY2030**, derived from a polyfit on FY2023–FY2025 audited actuals. Do not round to a different number.
- The Commerce citation is JCR 2025 p.34. Do not cite p.265.

If the slide draft tries to introduce a fact outside this brief, drop it.

---

## FINAL CHECK BEFORE EXPORT

Before saving the `.pptx`, verify:

- 12 slides total (or whichever exact count this brief specifies; do not add filler).
- Every slide has the Maryland flag stripe footer.
- Slide 5 and Slide 6 have screenshots or labeled placeholders.
- Speaker notes file totals between 14:00 and 15:30 of read time at conversational pace (~150 wpm).
- The file opens cleanly in Microsoft PowerPoint, Keynote, and Google Slides on import.

When complete, hand back:

- Path to the `.pptx` file
- Path to the speaker-notes file
- A one-paragraph summary of any placeholders that need the maintainer's attention

— end of brief —
