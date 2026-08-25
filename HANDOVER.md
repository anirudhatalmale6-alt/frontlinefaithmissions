# Frontline Faith Missions — how your website works

Plain-English notes for Kristen and Ryan. No technical background assumed.
Last updated 20 August 2026.

---

## The short version

Your site is live at **https://frontlinefaithmissions.org**

It costs you **one thing a year: the domain name renewal at GoDaddy.** Hosting,
the security certificate and the contact form are all on free plans. There is no
monthly bill and no invoice coming from anywhere else.

---

## The four pieces, and who owns what

Your site is made of four services. It's worth knowing which is which, because
when something looks wrong the first question is always "which piece?"

### 1. The domain name — GoDaddy.
Your account. You bought frontlinefaithmissions.org here. This is the address,
and it's the one thing that renews for money. If it ever lapses, the site goes
dark no matter how healthy everything else is — so keep auto-renew on and keep
the card on that account current. That's the single biggest risk to the site,
and it's entirely in your hands.

### 2. The pages themselves — GitHub.
Currently my account. This is where the actual website files live, and it's also
what serves them to visitors — free, with no traffic limit you're likely to
reach. I've offered to move this to an account in your name whenever you want
it; say the word and I'll walk you through it.

### 3. The padlock — Let's Encrypt.
Nobody's account. The certificate that puts the padlock in the browser bar is
issued automatically and renews itself roughly every three months. Yours is
currently good until 15 November 2026 and will renew on its own before then.
There is nothing to do and nothing to pay.

### 4. The contact form — Formspree.
Your account, set up under frontlinefaithmissions@gmail.com. When someone fills
in the form, Formspree receives it and emails it to you. Free plan.

---

## The contact form

Messages from the website arrive in **frontlinefaithmissions@gmail.com**.

The subject line the visitor types becomes the email subject, so your inbox reads
like real messages rather than twenty identical notices. When you hit Reply in
Gmail it replies to the visitor, not to Formspree — so you can just answer
normally.

There's a hidden field on the form that automated spam fills in and humans never
see. Anything that fills it is quietly dropped. It cuts out a lot of junk without
making real people solve a puzzle.

**The free plan has a monthly cap on messages.** For a new nonprofit that's
plenty, but it does mean messages can stop arriving if you have an unusually busy
month. Worth logging into Formspree occasionally to glance at the count. If you
outgrow it, their paid tier is the simple fix.

**To change where messages go:** change it in the Formspree dashboard, not on the
website. The site just hands the message over; Formspree decides the destination.

If Formspree is ever down or the cap is hit, the form tells the visitor honestly
and shows them your email address. It will not tell someone their message was
sent when it wasn't — I'd much rather they email you directly than think they've
reached you and hear nothing back.

---

## About the www address

- **https://frontlinefaithmissions.org** — works perfectly.
- **https://www.frontlinefaithmissions.org** — shows a security warning.

This is a known, deliberate choice — you picked it — not something broken. The
certificate covers the bare domain only. Making the warning go away would mean
making www the official address of the site, which changes your web address
everywhere it's printed.

So: **use and print the address without www.** On business cards, in emails, on
the Facebook page — always frontlinefaithmissions.org.

If you'd rather switch it at some point, that's a small job, but it's a decision
about your address rather than a repair. Just don't let anyone "fix" it without
understanding they're changing what your address is.

---

## Changing things on the site

Small text changes, new photos, new trip dates, swapping a section — message me
and I'll do them. That doesn't stop when the project closes.

A few things worth flagging early rather than late:

**Trip dates.** They appear in four places — the homepage, What We Do, Get
Involved and the Contact page. Tell me the new dates and I'll change all four; if
only some get updated you end up with the site contradicting itself.

**The Board of Directors** section on Our Story currently says "coming soon".
Send names, roles and photos when you have them.

**Donations.** The Give page and the Give button are built and waiting. Once you
have the processor account set up in the nonprofit's name, send me the link or
the embed code and I'll wire it in — same as I did the contact form. Expect them
to ask for your 501(c)(3) determination letter and EIN during signup, so having
those to hand saves you starting twice.

---

## If something looks wrong

### The whole site is down / shows a GoDaddy parking page.
Almost always the domain. Check the GoDaddy account first — renewal, or someone
changing DNS settings. The DNS records are the fragile part: four numbered
records point your domain at the pages. If those get edited or a "domain
forwarding" option gets switched on, the site breaks. Don't change anything in
there without asking me.

### The padlock is gone or the browser warns.
Check you typed the address without www (see above). If it's the bare domain
warning, tell me — that's genuinely wrong and I'll look.

### A change I made isn't showing.
Give it two minutes, then reload with Ctrl+Shift+R (Cmd+Shift+R on a Mac).
Browsers hold onto the old styling for a while.

### Form messages stopped arriving.
Check the Gmail spam folder first, then the Formspree dashboard for the monthly
count.

---

## Things not to do

- Don't let the domain lapse. Everything else survives neglect; this doesn't.
- Don't turn on GoDaddy's "domain forwarding" — it silently rewrites the records
  that point your domain at the site.
- Don't delete the file called `CNAME` in the website files. It's what binds the
  site to your domain.
- Don't hand the GoDaddy login to anyone who doesn't need it. That account can
  move the whole site.
