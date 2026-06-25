# Troop Website — Spec

## Overview

A simple, parent-facing website for an all-girls Scouting America troop. The goal is to give parents a clear, trustworthy place to find upcoming events and get in touch with troop leadership.

---

## Goals

- Help parents quickly find out what's coming up for the troop
- Give prospective parents an easy way to ask questions or express interest in joining
- Present the troop professionally and warmly

## Non-goals

- Member login / private portal
- Badge tracking or internal troop management
- E-commerce or payment handling
- Content management system (static HTML only)

---

## Content Management

All site copy must be editable by non-technical troop leaders without touching HTML.

**Approach:** Two files cover everything leaders will ever need to update:

| File | What it controls | How often it changes |
|------|-----------------|----------------------|
| `js/events.js` | All upcoming events (name, date, location, description) | Frequently |
| `js/content.js` | All prose copy (taglines, blurbs, footer text) | Rarely |

Both files are plain JavaScript with clearly labeled fields — no Markdown syntax, no special tools, no server required. Leaders can open either file in any text editor, change the text between the quotes, save, and push to GitHub.

### Example — `js/content.js`

```js
const CONTENT = {
  hero: {
    tagline: "Building tomorrow's leaders, one adventure at a time.",
    ctaLabel: "Join Us"
  },
  about: "We are Troop 999, an all-girls troop proudly affiliated with Scouting America. We meet weekly and love camping, service projects, and earning badges together.",
  // Where & when the troop meets — shown on the homepage. Fill in real details before launch.
  meetingInfo: "We meet [day] at [time] at [location, town].",
  contactIntro: "Interested in joining Troop 999? Fill out the form below and a troop leader will be in touch soon.",
  privacyNote: "We only use your contact information to reach out to you about joining Troop 999. We never share it with anyone else.",
  thankYou: "Thanks! A troop leader will be in touch soon.",
  footer: "Troop 999 · Proudly affiliated with Scouting America",
  // Paste your Formspree endpoint here after creating a form at formspree.io
  formEndpoint: "https://formspree.io/f/your-form-id"
};
```

### Example — `js/events.js`

```js
const EVENTS = [
  {
    name: "Weekly Troop Meeting",
    date: "2026-07-01",
    time: "6:00 PM",
    location: "First Community Church, Room 4",
    description: "Regular weekly meeting. Bring your handbook!"
  }
];
```

### Editing workflow for leaders

1. Open `js/events.js` or `js/content.js` in any text editor
2. Change the text between the quotes — don't change the field names
3. Save, commit, and push to GitHub — the site updates within ~60 seconds

---

## Target Audience

**Primary:** Parents of current and prospective scouts
**Secondary:** Troop leaders who will update content by editing `js/content.js` and `js/events.js`

---

## Site Structure

### Pages

| Page | Purpose |
|------|---------|
| `index.html` | Homepage — hero, brief troop intro, quick links |
| `events.html` | Upcoming meetings, campouts, and activities |
| `contact.html` | Contact / join inquiry form |

### Navigation

Global nav present on all pages:
- Home
- Events
- Contact / Join Us

---

## Page Specifications

### Homepage (`index.html`)

- **Hero section:** Troop name/number, a one-line tagline, and a "Join Us" CTA button linking to `contact.html`
- **About blurb:** 2–3 sentences about the troop (Scouting America, all-girls, what makes the troop special)
- **Meeting info:** A short "where & when we meet" line (`meetingInfo` from `content.js`) so prospective parents can find this at a glance
- **Upcoming events preview:** Show the next 2–3 events pulled from a shared data structure (a JS array in `events.js`), with a "See all events" link
- **Footer:** Troop name, Scouting America affiliation notice — no email displayed publicly

### Events Page (`events.html`)

- Full list of upcoming events, sorted chronologically
- Each event card shows:
  - Event name
  - Date and time
  - Location (optional)
  - Short description (optional)
- Events sourced from a single `events.js` file so the homepage and events page stay in sync
- Past events are automatically hidden — leaders never need to manually remove them
  - Rule: an event stays visible through the end of its `date` in the visitor's local time; it drops off only once that day has fully passed (so a same-day event still shows all day)
- If no upcoming events: friendly "Check back soon!" message

### Contact / Join Page (`contact.html`)

- Brief welcome message for prospective families
- **Data minimization:** the form deliberately collects *no information about the child*. Scout's name and age/grade are gathered later, in person or by follow-up — not through a public web form.
- Form fields:
  - Parent/guardian name (required)
  - Email address (required)
  - Phone number (optional)
  - Message / questions (optional textarea)
  - Submit button
- **Privacy note** displayed directly beneath the form (text lives in `content.js`): "We only use your contact information to reach out to you about joining Troop 999. We never share it with anyone else."
- Form submits via Formspree (endpoint configured in `js/content.js`)
- After submit: inline "Thanks, we'll be in touch!" message replaces the form — no page redirect

---

## Design Guidelines

- **Palette:** Use Scouting America green (`#00843D`) as primary, white and light gray as neutrals, gold/yellow (`#FFC72C`) as accent
- **Typography:** Clean, readable sans-serif (e.g., system font stack or Google Fonts — no more than 2 typefaces)
- **Tone:** Friendly, welcoming, community-focused — not overly corporate
- **Images:** No photos for now — hero uses a solid green background with a subtle SVG pattern overlay. One placeholder logo spot in the header (text fallback until a real logo is provided). All image slots are clearly commented in HTML so swapping in real assets later requires only changing a file path.
- **Mobile-first:** Layout must work well on phones since parents will likely browse on mobile
- **Mobile nav:** Nav links stack vertically on small screens — no hamburger menu
- **Accessibility:** Sufficient color contrast, semantic HTML, form labels tied to inputs
- **Page basics (every page):** Descriptive `<title>` (e.g. "Events · Troop 999"), a `<meta name="description">`, viewport meta tag, and a shared `favicon.svg` so browsers don't 404. Favicon can be a simple green badge placeholder, swappable later.

---

## Technical Constraints

- Plain HTML, CSS, and vanilla JavaScript — no frameworks, no build tools
- All files in a single directory, deployable by dropping onto any static host (GitHub Pages, Netlify, etc.)
- No backend — contact form uses a third-party form service (e.g., Formspree)
- All editable content lives in two files: `js/events.js` (events) and `js/content.js` (prose copy)
- No Markdown parsing, no fetch calls, no CDN dependencies for content — site works when opened directly from the filesystem

---

## File Structure

```
troop-999/
├── index.html
├── events.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   ├── content.js     ← LEADERS EDIT THIS (all site copy)
│   ├── events.js      ← LEADERS EDIT THIS (upcoming events)
│   └── main.js
├── images/
│   └── logo.png               ← swap this file to update the logo (keep same filename)
├── favicon.svg                ← browser tab icon (placeholder green badge)
└── README.md                  ← setup & editing instructions for the troop webmaster
```

---

## Deployment — GitHub Pages

The site is hosted on GitHub Pages, served directly from the `main` branch root.

### One-time setup (done by troop webmaster)

1. Create a new public GitHub repository (e.g. `troop-999`)
2. Push this project to `main`
3. In the repo → **Settings → Pages**, set source to `main` branch, `/ (root)`
4. Site will be live at `https://<username>.github.io/troop-999/`

### Updating the site (troop leaders)

1. Edit `js/content.js` (prose copy) or `js/events.js` (events)
2. Commit and push to `main`
3. GitHub Pages redeploys automatically within ~60 seconds

### Local preview

Leaders can preview changes by opening `index.html` directly in any browser — no server required.

### README (deliverable)

A `README.md` ships with the project covering, in plain language for a non-developer webmaster:

1. **First-time deploy** — create the GitHub repo, push, enable Pages, set up Formspree
2. **Updating in place** — editing `content.js`/`events.js` for content *and* code changes; every merge to `main` goes live automatically
3. **Local preview** — opening `index.html` in a browser

---

## Troop Details

- **Troop number:** 999 (confirmed real)
- **Location & meeting schedule:** To be provided before launch — `content.js` ships with a clearly-marked `meetingInfo` placeholder
- **Copy:** Friendly placeholder copy written by us at build time; leaders refine in `content.js`
- **Contact email:** anthonyvetter@gmail.com
- **Form service:** Formspree (endpoint to be added to `js/content.js` after account setup)
- **Logo:** None yet — use troop name as text in header
- **Email:** Used as Formspree destination only — not displayed publicly on the site
- **Domain:** Launch on the free `*.github.io` address; structure for a future custom domain — use relative links throughout and document adding a `CNAME` file in the README so a domain can be attached with no code changes
