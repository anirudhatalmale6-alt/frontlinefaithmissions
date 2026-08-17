/* Frontline Faith Missions — site behaviour */
(function () {
  "use strict";

  /* sticky header state */
  var hdr = document.getElementById("hdr");
  if (hdr) {
    var onScroll = function () {
      hdr.classList.toggle("is-stuck", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* mobile menu */
  var burger = document.getElementById("burger");
  if (burger) {
    burger.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll("#nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* contact form
     FFM_CONTACT_ENDPOINT is set in config.js once hosting is live. Until then the
     form tells the truth instead of pretending the message went somewhere. */
  var form = document.getElementById("contact-form");
  if (form) {
    var status = document.getElementById("form-status");
    var say = function (msg, ok) {
      status.textContent = msg;
      status.classList.add("is-shown");
      status.classList.toggle("is-ok", !!ok);
    };

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (form.website.value) return; // honeypot: quietly drop bots

      var missing = ["name", "email", "subject", "message"].filter(function (k) {
        return !form[k].value.trim();
      });
      if (missing.length) {
        say("Please fill in your name, email, subject and message.");
        form[missing[0]].focus();
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.value.trim())) {
        say("That email address doesn't look right — mind checking it?");
        form.email.focus();
        return;
      }

      var endpoint = window.FFM_CONTACT_ENDPOINT;
      if (!endpoint) {
        say(
          "This form isn't connected to email yet. In the meantime please write " +
            "to frontlinefaithmissions@gmail.com and we'll come straight back to you."
        );
        return;
      }

      var btn = form.querySelector("button[type=submit]");
      btn.disabled = true;
      say("Sending…");

      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name.value.trim(),
          email: form.email.value.trim(),
          subject: form.subject.value.trim(),
          message: form.message.value.trim()
        })
      })
        .then(function (r) {
          if (!r.ok) throw new Error("HTTP " + r.status);
          form.reset();
          say("Thank you — your message is on its way. We'll be in touch soon.", true);
        })
        .catch(function () {
          say(
            "Something went wrong sending that. Please email " +
              "frontlinefaithmissions@gmail.com directly and we'll pick it up there."
          );
        })
        .then(function () {
          btn.disabled = false;
        });
    });
  }

  /* scroll reveals (hero animates on load instead) */
  var targets = document.querySelectorAll(".rise:not(.hero .rise)");
  if (!("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: "0px 0px -12% 0px", threshold: 0.08 });
  targets.forEach(function (el) { io.observe(el); });
})();
