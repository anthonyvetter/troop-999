/* ============================================================
   TROOP 999 — SITE BEHAVIOR
   ------------------------------------------------------------
   This file wires the copy (content.js) and events (events.js)
   into the pages. Leaders normally don't need to touch this —
   edit content.js and events.js instead.
   ============================================================ */

(function () {
  "use strict";

  /* ---- Inject copy from CONTENT into [data-content] elements ----
     An element like <span data-content="hero.tagline"></span> is
     filled with CONTENT.hero.tagline. */
  function resolvePath(obj, path) {
    return path.split(".").reduce(function (value, key) {
      return value == null ? undefined : value[key];
    }, obj);
  }

  function fillContent() {
    document.querySelectorAll("[data-content]").forEach(function (el) {
      var value = resolvePath(CONTENT, el.getAttribute("data-content"));
      if (value != null) {
        el.textContent = value;
      }
    });
  }

  /* ---- Events ---- */

  // Midnight today, in the visitor's local time.
  function startOfToday() {
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }

  // Parse "YYYY-MM-DD" as a local date (avoids UTC off-by-one).
  function parseDate(str) {
    var p = String(str).split("-");
    return new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
  }

  // Future-and-today events, soonest first.
  function upcomingEvents() {
    var today = startOfToday();
    return EVENTS
      .filter(function (e) { return parseDate(e.date) >= today; })
      .sort(function (a, b) { return parseDate(a.date) - parseDate(b.date); });
  }

  function formatDate(str) {
    return parseDate(str).toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }

  function buildEventCard(e) {
    var card = document.createElement("article");
    card.className = "event-card";

    var name = document.createElement("h3");
    name.className = "event-card__name";
    name.textContent = e.name;
    card.appendChild(name);

    var when = document.createElement("p");
    when.className = "event-card__when";
    when.textContent = formatDate(e.date) + (e.time ? " · " + e.time : "");
    card.appendChild(when);

    if (e.location) {
      var loc = document.createElement("p");
      loc.className = "event-card__location";
      loc.textContent = e.location;
      card.appendChild(loc);
    }

    if (e.description) {
      var desc = document.createElement("p");
      desc.className = "event-card__desc";
      desc.textContent = e.description;
      card.appendChild(desc);
    }

    return card;
  }

  function renderEvents() {
    // Homepage shows a short preview; events page shows the full list.
    var preview = document.getElementById("events-preview");
    var fullList = document.getElementById("events-list");
    var target = preview || fullList;
    if (!target) {
      return;
    }

    var events = upcomingEvents();

    if (events.length === 0) {
      var empty = document.createElement("p");
      empty.className = "events-empty";
      empty.textContent = "Check back soon for upcoming events!";
      target.appendChild(empty);
      return;
    }

    var limit = preview ? 3 : events.length;
    events.slice(0, limit).forEach(function (e) {
      target.appendChild(buildEventCard(e));
    });
  }

  /* ---- Contact form (Formspree) ---- */
  function initContactForm() {
    var form = document.getElementById("contact-form");
    if (!form) {
      return;
    }

    form.setAttribute("action", CONTENT.formEndpoint);

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var errorEl = document.getElementById("form-error");
      if (errorEl) {
        errorEl.hidden = true;
      }

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (response) {
          if (response.ok) {
            showThankYou();
          } else {
            showError();
          }
        })
        .catch(showError);
    });

    function showThankYou() {
      var message = document.createElement("p");
      message.className = "form-thankyou";
      message.setAttribute("role", "status");
      message.textContent = CONTENT.thankYou;
      form.replaceWith(message);
    }

    function showError() {
      var errorEl = document.getElementById("form-error");
      if (errorEl) {
        errorEl.hidden = false;
      }
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    fillContent();
    renderEvents();
    initContactForm();
  });
})();
