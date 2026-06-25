/* ============================================================
   TROOP 999 — SITE COPY
   ============================================================

   WHAT THIS FILE IS
   This file holds the words shown on the website. Change the text
   here to change the website. No programs to install.

   HOW TO EDIT (right here on the GitHub website)
   1. Click the pencil icon (it says "Edit this file") at the
      top-right of this file.
   2. Change ONLY the text inside the "quotation marks".
        OK to change:  tagline: "Your new words here"
        Do NOT change: the word before the colon (like  tagline: ),
                        the quotation marks, the commas, or the { }.

   HOW TO SAVE AND PUBLISH  (on GitHub, saving = publishing)
   3. Click the green "Commit changes..." button (top-right).
   4. In the box that appears, type a short note like
      "Update the tagline", leave the rest as-is.
   5. Make sure "Commit directly to the main branch" is selected,
      then click the green "Commit changes" button.
   6. That's it — you just published. Wait about ONE MINUTE, then
      open the live site and refresh:
        https://anthonyvetter.github.io/troop-999/
      (If you still see the old words, refresh once more — your
       browser may be showing a saved copy. On a Mac press
       Cmd+Shift+R; on Windows press Ctrl+Shift+R.)

   MADE A MISTAKE?  You can't break anything permanently. See the
   "If something looks broken" steps in README.md to undo an edit.
   ============================================================ */

const CONTENT = {

  // The big headline tagline on the homepage
  hero: {
    tagline: "Building confident kids, one adventure at a time.",
    ctaLabel: "Join Our Troop"
  },

  // 2–3 sentence introduction shown on the homepage
  about: "Troop 999 is an all-female troop proudly affiliated with Scouting America. We welcome all who identify as female. We hike, camp, lead, and serve our community together — building lifelong friendships and real-world skills along the way. New families are always welcome.",

  // Where & when the troop meets — shown on the homepage.
  // *** Replace the bracketed parts with your real details before launch. ***
  meetingInfo: "We meet [day] evenings at [time], at [location, town].",

  // Short welcome line at the top of the Contact / Join page
  contactIntro: "Interested in joining Troop 999? Send us a note using the form below and a troop leader will be in touch soon.",

  // Privacy reassurance shown just under the contact form
  privacyNote: "We only use your contact information to reach out to you about joining Troop 999. We never share it with anyone else.",

  // Message shown after someone successfully submits the form
  thankYou: "Thanks! A troop leader will be in touch with you soon.",

  // Text shown at the bottom of every page
  footer: "Troop 999 · Proudly affiliated with Scouting America",

  // --- Contact form delivery ---------------------------------
  // After creating a free form at formspree.io, paste its endpoint
  // URL here (it looks like https://formspree.io/f/abcdwxyz).
  formEndpoint: "https://formspree.io/f/your-form-id"

};
