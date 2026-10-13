# Website UI kit

Recreation of the single page in the Figma file: the **1920w light** homepage of the "FormWise" construction & architects Webflow template (node 2:478).

- `index.html` — interactive homepage. Nav links scroll, "Buy FormWise" increments the cart count, service tabs switch, process cards activate on hover, "See in Action" opens a lightbox, contact form submits to a thank-you state, the floating badge stack closes via "More Templates".
- `Chrome.jsx` — Container, Eyebrow, SiteNav, SiteFooter (+ banner), FloatingBadges.
- `HomeTop.jsx` — Hero, Intro, Offer (Construction / Architecture split), Services tabs.
- `HomeBottom.jsx` — Process, Projects, About, Values, Blog, Contact.

Layout is fluid (container max 1428 + 20px gutter) rather than the fixed 1920 canvas. Projects / About / Values sections were rebuilt from their copy plus the shared visual vocabulary; their exact inner geometry was not transcribed and may differ slightly from Figma.
