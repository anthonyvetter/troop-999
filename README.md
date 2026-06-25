# Troop 999 Website

A simple website for Troop 999, an all-female troop affiliated with Scouting America.
Plain HTML, CSS, and JavaScript — no build tools, no frameworks. Hosted free on GitHub Pages.

---

## Quick reference: what to edit

| To change… | Edit this file |
|------------|----------------|
| Tagline, about text, footer, privacy note, meeting info | `js/content.js` |
| Upcoming events | `js/events.js` |
| The contact form's destination | `formEndpoint` in `js/content.js` |
| The logo | drop a `images/logo.png` (see below) |
| Colors / fonts / layout | `css/style.css` (developer) |

Everything a non-developer needs is in **`js/content.js`** and **`js/events.js`**.
Change the text between the quotes, save, and push — that's it.

---

## 1. Deploying the site for the first time

You'll need a free [GitHub](https://github.com) account. Do this once.

1. **Create a repository** — on GitHub click **+ → New repository**.
   - Name it `troop-999`
   - Set it to **Public**
   - Don't add a README or .gitignore (this project already has them)
   - Click **Create repository**

2. **Push the code** — in a terminal, from this project folder:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/troop-999.git
   git push -u origin main
   ```
   Replace `YOUR-USERNAME` with your GitHub username.

3. **Turn on GitHub Pages** — in the repo on GitHub:
   - **Settings → Pages**
   - Under *Source*, choose **Deploy from a branch**
   - Branch: `main`, folder: `/ (root)` → **Save**

4. **Wait about a minute**, then visit:
   ```
   https://YOUR-USERNAME.github.io/troop-999/
   ```

5. **Connect the contact form** — create a free form at [formspree.io](https://formspree.io),
   copy its endpoint URL (looks like `https://formspree.io/f/abcdwxyz`), and paste it as the
   value of `formEndpoint` in `js/content.js`. Commit and push. Submissions now arrive in your
   Formspree inbox (and forward to your email).

---

## 2. Updating the site (no software needed)

You can update the wording and events right on the GitHub website — no programs to
install, no terminal, nothing to download. **On GitHub, saving your change IS publishing
it.** When you finish the steps below, the live site updates by itself in about a minute.

> You only need two things: a free GitHub account that has been added to this project,
> and a web browser. If you can fill out a form online, you can do this.

### Step-by-step: change the wording (tagline, about text, etc.)

1. Go to the project on GitHub:
   **https://github.com/anthonyvetter/troop-999**
2. Click the **`js`** folder, then click the **`content.js`** file to open it.
3. Click the **pencil icon** (✏️) near the top-right of the file. It says *"Edit this file"*
   when you hover over it. The file becomes editable.
4. Find the text you want to change. **Only change the words inside the "quotation marks."**
   Don't change anything before the colon (`:`) or remove any quotes, commas, or brackets.
   - ✅ Good: changing `"Building confident kids, one adventure at a time."`
     to `"Adventure, friendship, and fun await."`
   - ❌ Avoid: deleting the quote marks, the comma at the end of the line, or the word
     before the colon (like `tagline:`).
5. When you're happy with your edit, scroll up and click the green **Commit changes…**
   button in the top-right.
6. A small box pops up. In the first line, type a short note about what you changed
   (for example: *"Update the homepage tagline"*). Leave everything else as-is.
7. Make sure **"Commit directly to the `main` branch"** is selected, then click the
   green **Commit changes** button.
8. ✅ Done! That's the "save and publish" step. Wait about **one minute**, then open
   **https://anthonyvetter.github.io/troop-999/** and refresh the page to see your change.
   (If you don't see it right away, wait another minute and refresh again — sometimes your
   browser shows an old copy. A "hard refresh" with **Ctrl+Shift+R**, or **Cmd+Shift+R** on
   a Mac, forces it to load the newest version.)

### Step-by-step: add or change an event

Exactly the same steps as above, except in **Step 2** you open the **`events.js`** file
(inside the `js` folder) instead of `content.js`. Then:

- **To add an event:** copy one of the existing blocks (everything from a `{` down to the
  matching `},` including the comma) and paste it right below, then change the details.
  Keep the `date` in `YYYY-MM-DD` form, for example `2026-09-15`.
- **To edit an event:** just change the text inside the quotation marks.
- **To remove an event:** delete its whole block, from `{` through the `},`. (You usually
  don't need to — past events disappear on their own.)

Then follow **Steps 5–8** above to commit (save + publish).

### If something looks broken after an edit

Most likely a quotation mark, comma, or bracket got deleted by accident. The fix:

1. On GitHub, open the file you edited and click the **"History"** link (top-right of the
   file view, a small clock icon).
2. Find your most recent change, click the **"..."** menu next to it, and choose
   **"Revert"** to undo it. Commit that revert the same way (Steps 5–7).

This puts the site back exactly as it was before your edit. You can't permanently break
anything — every previous version is saved.

### For developers (optional)

If you're comfortable with git and a code editor, you can clone the repo, edit locally,
and push to `main` — or open a pull request for larger changes. Every merge to `main`
deploys automatically. The browser steps above are the recommended path for everyone else.

---

## 3. Previewing locally

No server or tools needed — just open `index.html` in a web browser:

- **Mac:** right-click `index.html` → *Open With* → Safari or Chrome
- **Windows:** double-click `index.html`

The page text and events render straight from `content.js` and `events.js`, so you'll see your
edits immediately on refresh.

> Note: the **contact form** only works on the live (hosted) site, not from a local file —
> that's normal, since it has to send the message over the internet.

---

## Adding a logo

When you have a logo image:

1. Save it as `images/logo.png`.
2. In each HTML file (`index.html`, `events.html`, `contact.html`), find this comment in the header:
   ```html
   <!-- <img class="brand-logo" src="images/logo.png" alt="Troop 999 logo"> -->
   ```
   Remove the `<!--` and `-->` around the `<img>` line to switch it on.

Until then, the troop name shows as text.

---

## Using your own web address (later)

The site starts on the free `…github.io/troop-999/` address. To use a custom domain
(like `troop999.org`) later:

1. Add a file named `CNAME` in the project root containing just your domain, e.g. `troop999.org`.
2. Point your domain's DNS at GitHub Pages ([GitHub's guide](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)).

All links in the site are relative, so no code changes are needed to switch domains.

---

## Project structure

```
troop-999/
├── index.html        Homepage
├── events.html       Events listing
├── contact.html      Join / contact form
├── favicon.svg       Browser tab icon
├── css/
│   └── style.css     Visual styles
├── js/
│   ├── content.js    ← site copy (edit me)
│   ├── events.js     ← events (edit me)
│   └── main.js       Site behavior
└── images/
    └── logo.png      (optional — add to show a logo)
```
