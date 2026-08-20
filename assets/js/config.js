/* Frontline Faith Missions — site configuration.

   This is the one file to edit when an outside service changes. Nothing else
   in the site hardcodes these values.

   FFM_CONTACT_ENDPOINT — where the contact form posts. Formspree receives it
   and forwards to frontlinefaithmissions@gmail.com. To change the destination
   inbox, change it in the Formspree dashboard, not here. Setting this to an
   empty string switches the form back to telling visitors it isn't connected,
   rather than silently swallowing their message. */
window.FFM_CONTACT_ENDPOINT = "https://formspree.io/f/xljrpqrw";
