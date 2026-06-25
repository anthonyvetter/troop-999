# Troop 999 Website

A simple website for Troop 999, an all-girls troop affiliated with Scouting America.
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

## 2. Updating the site

**Every change merged to the `main` branch goes live automatically** within about a minute —
no separate "publish" step.

### The easy way (content & events)

1. Edit `js/content.js` (wording) or `js/events.js` (events) in any text editor.
2. Save, then in a terminal:
   ```bash
   git add js/content.js js/events.js
   git commit -m "Update content"
   git push
   ```
3. Refresh the site after ~60 seconds.

### For bigger or code changes (recommended workflow)

Work on a branch and merge via a pull request so `main` always stays live and working:

```bash
git checkout -b my-change      # start a branch
# ...make edits...
git add .
git commit -m "Describe the change"
git push -u origin my-change    # then open a Pull Request on GitHub
```

Merging that pull request into `main` deploys it automatically.

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
