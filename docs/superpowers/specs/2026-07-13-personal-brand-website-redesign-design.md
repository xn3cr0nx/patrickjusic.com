# Personal Brand Website Redesign — Design Spec

**Date:** 2026-07-13
**Owner:** Patrick Jusic
**Status:** Approved direction; ready for implementation planning

## Goal

Rebuild `patrickjusic.com` from a dark-template personal page into a serious,
distinctive personal brand — a credibility hub that also grows an audience
through writing. It must feel like part of the same design family as
[chipcolate.com](https://chipcolate.com) (Patrick's company) while being
unmistakably *his own*.

Two audiences, one page: investors / partners / peers who need to take Patrick
seriously as a founder and engineering leader, and readers who arrive for the
writing.

### Positioning & voice
- **Persona:** founder & engineering leader first; hacker/bitcoiner roots as a
  quiet, tasteful accent (`xn3cr0nx` as a signature, not a banner). No political
  or ideological broadcasting.
- **Headline (locked):** "I scale systems — and the teams behind them."
- **Kicker (locked):** `founder · engineering leader · bitcoiner · father`

## Visual references (source of truth)

Interactive mockups built and approved during brainstorming live in
`.superpowers/brainstorm/*/content/` (gitignored):
- `hero-v2.html` — the approved hero (immersive portrait + kinetic type)
- `timeline.html` — the approved `/work` timeline
- `hero-directions.html`, `hero-final.html` — earlier exploration (A/B/C)

These are the visual contract for the build.

## Design system

Derived from Chipcolate's actual tokens (sampled from the live site), adapted
into Patrick's own signature.

### Color (CSS variables, dark theme only for v1)
| Token | Value | Use |
|---|---|---|
| `--bg` | `#080d12` | page background (near-black blue) |
| `--bg-2` | `#0a1017` | raised surfaces |
| `--green` | `#34c463` | primary accent |
| `--green-bright` | `#6cf29a` | glow highlights, hover |
| `--green-deep` | `#1f9142` | gradient bottoms, deep accents |
| `--choco` | `#8a6448` | **sparing** secondary accent (the "chipcolate" tie) |
| `--text` | `#e9eef3` | primary text |
| `--muted` | `#8a97a6` | secondary text |
| `--line` | `rgba(255,255,255,.08)` | borders/hairlines |
| `--radius` | `10px` | matches Chipcolate |

Chocolate is used deliberately and rarely (e.g. an accent node in the portrait
field, a single secondary badge state) so the green stays dominant.

### Typography
- **Roboto** — headings & body (replaces Geist). Weights 300/400/500/700/900.
- **Roboto Mono** — kickers, terminal line, timeline periods, `xn3cr0nx`
  signature. Weights 400/500.
- Served locally via Astro's font provider (Fontsource/local `.woff2`) — no
  external CDN dependency at runtime.

### Signature treatments
- **Glow headline:** vertical green gradient clipped to text
  (`#a5f7c1 → #41d074 → #178a3f`) + `drop-shadow` green bloom. Mirrors
  Chipcolate's glossy headlines.
- **Mono kicker:** uppercase, letter-spaced, green.
- **Green pill-badges:** `rgba(52,196,99,.08)` fill, `rgba(52,196,99,.25)`
  border; a neutral variant for softer facts.
- **Ambient motion:** faint scanline + slow horizontal light beam on dark
  sections (very low opacity).

## Site architecture (multi-page)

Astro, `output: 'static'`, Vercel adapter (unchanged).

```
/            Home    — hero + short intro + links out (minimal)
/work        Work    — animated vertical timeline of the full track record
/writing     Writing — post index (cards); posts at /writing/[id]
/about       About   — bio, principles, advisory / work-with-me
/contact     Contact — Resend form + email + socials
/blog        →       — 301/redirect to /writing (and /blog/[id] → /writing/[id])
```

Nav (fixed, transparent → blurred on scroll): `patrick jusic` wordmark (no
green square) · **Work · Writing · About · Contact** · a `Get in touch` button.
Footer (shared): wordmark, nav echo, socials (X / GitHub / LinkedIn), email,
copyright.

Speaking & Press is **out of scope for v1** (deferred until there's real
content to feature).

## Pages

### / — Home (minimal)
1. Fixed nav.
2. **Hero** (full viewport, locked design):
   - Mono kicker · glowing kinetic headline · terminal `TypedLine` cycling the
     track record · CTAs (`Get in touch` → `/contact`, `Read the writing` →
     `/writing`) · `— xn3cr0nx` signature.
   - Right: **PortraitField** — the point-field portrait as an immersive
     background that bleeds off the right edge and melts into black. Breathes,
     scanline sweep, scatters around the cursor.
3. **Intro band:** one or two sentences of positioning + inline links to Work /
   Writing / About. Keeps Home light per decision.
4. Footer.

### /work — Track record
- Page header: kicker `// track record`, glow headline
  ("A decade building and scaling systems."), one-line lede.
- **Timeline** (locked design): vertical line that draws itself on scroll; each
  role is a dot that lights as the fill reaches it; entries fade/slide up on
  enter. Period (mono, left) · role + company · description · green metric
  badges.
- Roles (most-recent first): Chipcolate (Co-Founder & CTO) · Toggl (Head of
  Engineering) · Poseidon DAO · Elysium Bridge · early roles grouped
  (BQTX · Things Lab · Buull · Snapup). A "full history & earlier roles"
  expansion reveals the grouped early roles individually (incl. Leroy Merlin).
- Toggl badges: `500k+ daily users`, `Migrated to Kubernetes / GCP`,
  `Logical-replication warehouse`. Chipcolate badges: `Aerospace`,
  `Agriculture`, `Finance` + neutral client list.

### /writing — Writing
- Migrates the existing Astro content collection (`src/content/blog`).
- Index: post cards (title, date, reading time, excerpt, "mirrored" tag where
  applicable) revealing on scroll.
- Post page `/writing/[id]`: typographic reading layout (Tailwind Typography,
  restyled to the dark green system), keeping the existing mirrored-post
  disclaimer callout.
- `/blog` and `/blog/[id]` redirect to the new routes.

### /about — About
- Longer bio: founder & engineering leader; the arc from crypto startups to
  scaling Toggl; father; bitcoiner/cypherpunk roots stated once, with taste.
- **Principles** block: a short, numbered "how I work / first-principles"
  section (a nod to Chipcolate's "Our Principles", in Patrick's voice).
- **Work-with-me:** advise & angel-invest in early-stage; serious build work
  routes to Chipcolate; an open "let's talk." Clear CTA to `/contact`.
- Optional compact count-up metric highlight (e.g. 500k+ users) if it fits.

### /contact — Contact
- Promote the current `ContactDialog` to a full page: the React
  `MessageForm` (react-hook-form + zod) posting to the existing
  `/api/send` (Resend). Restyled to the new system.
- Direct email + X / GitHub / LinkedIn.

## Components (isolation & responsibilities)

Interactive animations are implemented as **Astro components with scoped
client `<script>`s** (vanilla JS/canvas) to keep the JS bundle small; React is
reserved for the existing form. Each unit has one purpose and a clear interface.

| Component | Type | Responsibility |
|---|---|---|
| `Layout.astro` | Astro | html shell, Roboto fonts, meta/OG, `<Nav>` + `<Footer>`, Toaster |
| `Nav.astro` | Astro | fixed nav; scroll-blur via tiny script |
| `Footer.astro` | Astro | shared footer |
| `Hero.astro` | Astro | hero layout; hosts the two animation islands |
| `PortraitField` | Astro + `<script>` (canvas) | point-field portrait; props: image, focus, density |
| `TypedLine` | Astro + `<script>` | cycling terminal line; prop: string[] |
| `Timeline.astro` | Astro + `<script>` | data-driven timeline; scroll-fill + reveal |
| `GlowHeading.astro` | Astro | reusable glow headline |
| `Kicker.astro`, `Badge.astro` | Astro | small primitives |
| `WritingCard.astro` | Astro | post card |
| `MessageForm.tsx` | React (kept) | contact form → `/api/send` |

Data (experiences, writing meta) lives in typed modules / content collections,
not hardcoded in markup — the timeline renders from a `roles` array so it stays
easy to edit.

## Animation implementation notes (carry the bug learnings)

1. **PortraitField (canvas point-field):**
   - Sample a downscaled grayscale portrait to a low-res offscreen grid;
     luminance → point size/brightness; skip near-black pixels so the face
     emerges from darkness.
   - **Cover-fit with a focal point** so the face sits right-of-centre; CSS
     `mask-image` radial gradient feathers all edges and bleeds off the right.
   - **Handle cached images:** call the build routine on `img.onload` **and**
     immediately if `img.complete && img.naturalWidth` — otherwise a cached
     image never fires `onload` and the canvas stays blank. (Observed bug.)
   - Additive compositing (`lighter`), no per-point `shadowBlur` (too slow);
     cap density; `requestAnimationFrame`.
2. **TypedLine:** when the index reaches the full string length, **render the
   full string before setting the "deleting" flag / returning** — otherwise the
   final character is always dropped. (Observed bug.)
3. **Timeline:** track fill height = clamp of (viewport read-line − track top);
   a dot lights when its top ≤ fill tip; entries revealed via
   `IntersectionObserver`.
4. **Scroll reveals:** shared `IntersectionObserver` utility, `.in` class.

## Accessibility & performance
- Respect `prefers-reduced-motion`: skip/settle canvas animation, typing, beam,
  and scroll-draw to final states; content fully readable without motion.
- Canvas animations pause when off-screen (IntersectionObserver) and on hidden
  tabs.
- Fonts self-hosted, `font-display: swap`, preloaded.
- Provide real `alt`/semantics; portrait has a text alternative; nav is
  keyboard-navigable; color contrast checked for text on `--bg`.
- Static output; lazy/deferred scripts; images optimized (Astro assets).

## Changes to the current codebase
- **Replace** palette + fonts globally: rewrite `globals.css` variables and
  `tailwind.config.ts` tokens; swap Geist → Roboto/Roboto Mono in
  `astro.config.mjs` fonts.
- **Restructure** `index.astro` into Home; add `work.astro`, `about.astro`,
  `contact.astro`; move `blog/` → `writing/` with redirects.
- **Replace** the identity-list hero + accordion with the new Hero + Timeline.
- **Keep** Resend API route + `MessageForm`; keep the content collection and the
  existing post + disclaimer callout.
- **Drop** now-unused bits (glitch text, Radix accordion if the "full history"
  uses `<details>`, `Lightning`/`GlitchText` experiments) — pruned during
  implementation.

## Out of scope (v1)
- Speaking & Press page.
- Light theme (dark-only for v1).
- CMS / analytics changes.
- New photography (reuse the existing side-lit B&W portrait).

## Content to finalize (with Patrick, during build)
- Final About bio copy (draft provided from experience + refined by Patrick).
- Advisory/angel specifics (stage, sectors) — tasteful default drafted.
- Confirm home intro sentence(s) and metric numbers
  (500k+ DAU confirmed; "years leading engineering"; companies founded).
- Confirm the grouped early-roles copy and the "full history" contents.

## Success criteria
- Visually reads as the same family as Chipcolate, with its own signature.
- The hero (portrait + kinetic type) and the `/work` timeline land as the two
  memorable, unique moments.
- Serious and credible; the bitcoiner/hacker note is present but quiet.
- Fast, accessible, static; writing is easy to publish and read.
