# Frontline Faith Missions

Website for Frontline Faith Missions — a faith-driven nonprofit giving first
responders and hospital staff a place to serve, heal, and grow in faith.

Live at <https://frontlinefaithmissions.org>.

For non-technical instructions — how to change wording, what renews when, what to
do if something breaks — see [HANDOVER.md](HANDOVER.md).

## Structure

    index.html          Home
    about.html          Our Story
    what-we-do.html     What We Do
    get-involved.html   Get Involved
    photos.html         Photos
    give.html           Give
    contact.html        Contact
    assets/css          Styles (single stylesheet)
    assets/js/config.js The only file holding outside-service settings
    assets/js/main.js   Menu, sticky header, contact form, scroll reveals
    assets/fonts        Self-hosted webfonts (Newsreader, Barlow)
    assets/img          Logo marks, emblem, trip photography

No build step and no dependencies. Static HTML/CSS/JS — open any page in a
browser to preview, or serve the folder with `python3 -m http.server` if you
want the contact form's fetch call to behave as it does in production.

## Settings

`assets/js/config.js` holds every value that points at an outside service.
Nothing else in the site hardcodes them. Today that is the contact form's
Formspree endpoint; the donation link belongs there too when it exists.

Setting `FFM_CONTACT_ENDPOINT` to an empty string makes the form tell visitors
it isn't connected and show the email address instead — it never silently
swallows a message.

## Hosting

GitHub Pages serves `main` from the repository root. Pushing to `main` deploys;
there is no other deploy step. It takes a minute or two to go live, and browsers
often hold the old CSS for a few minutes longer.

`CNAME` in the repository root binds the custom domain. Deleting it takes the
site off frontlinefaithmissions.org, so leave it alone.

## Notes for whoever picks this up

Two things are easy to get wrong:

**The generator.** `tools/build_pages.py` (kept outside this repository) emits
the six inner pages from one shared header/footer so the nav can't drift. Its
output is committed as plain static HTML — you do not need the generator to work
on this site, and editing the HTML by hand is fine. But if you *do* run it, it
rewrites `index.html`'s nav and footer from its own definitions, so any hand
edits to those two blocks on the homepage will be overwritten. Everything it
writes must stay safe to run twice; a non-idempotent insert here once put three
duplicate footer links into production.

**`https://www`.** Only the bare domain has a certificate. `www` resolves but
warns, which is a deliberate decision by the owner rather than a fault — see
HANDOVER.md before "fixing" it, because the fix changes the site's address.
