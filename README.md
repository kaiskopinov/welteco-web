# Welteco Design System

**Welteco** is a web design studio. This design system was imported from the Figma file **"Web design.fig"**, which is an html.to.design capture (dated 13/10/2026) of the **FormWise — Construction & Architects** Webflow template (`formwise-construction-architects.webflow.io`, by Loonis). The file has one page with two frames:

- **Components sheet** (node 2:390): 10 component sets (variant × `:hover`) on a dark board.
- **1920w light** (node 2:478): the full homepage, 1920 × 9214.

There is no Welteco-specific branding in the source. **No Welteco logo was provided.** Where a mark goes, set "Welteco" in Funnel Sans Medium. The only marks in the file belong to the template's sample content (FormWise logo, Loonis mark, Webflow badge). They are kept as `Icon` names so the UI kit matches the file, but they are not Welteco's brand.

Sources: Figma file "Web design.fig" (attached, mounted read-only). No codebase, no Figma URL, and no slide decks were provided.

---

## Index

- `styles.css`: global entry point, made only of `@import` lines
- `tokens/fonts.css`: Funnel Sans (Google Fonts) and `--font-*` stacks
- `components/figma/fig-tokens.css`: all 139 Figma variables, verbatim (one collection, one mode). Floats are unitless.
- `components/figma/fig-typography.css`: empty. The file defines 0 text styles.
- `tokens/semantic.css`: semantic aliases (surfaces, text, borders, radii, spacing, type scale, effects) in px
- `guidelines/*.html`: foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/`: React components (see below)
- `ui_kits/website/`: interactive homepage recreation
- `assets/images/`: every bitmap in the file (photography, intro icons, template thumbnail)
- `thumbnail.html`, `SKILL.md`

## Components

The Figma file defines 10 component families. Each is materialized verbatim in `components/figma/` under its Figma name, with live hover built in (hover follows the pointer unless `hover` is passed; `block`, `href` and `onClick` are accepted on every interactive one):

- `Component1` (Figma "Component 1", 4 variants × hover): CTA button. 1 espresso · 2 glass · 3 wide · 4 light
- `Component2` (Figma "Component 2", 18 variants): icon & mark set
- `Component3` (Figma "Component 3"): full-width form submit
- `Component4` (Figma "Component 4", 4 variants × hover): text links. 4 top nav · 1 footer list · 2/3 credit & legal
- `Component5` (Figma "Component 5"): nav dropdown trigger
- `Component6` (Figma "Component 6"): cart link
- `Component7` (Figma "Component 7"): 46px icon button
- `Component8` (Figma "Component 8"): white template pill (+ `image` prop)
- `Component9` (Figma "Component 9"): black help pill
- `Component10` (Figma "Component 10"): white more-templates pill
- `Icon` (`components/icons/`): semantic names over Component 2 (`iconNames` map)

Cards live by concern: `components/actions/` (1, 3, 7), `components/navigation/` (4, 5, 6), `components/badges/` (8, 9, 10), `components/icons/`, `components/figma/` (raw variant sheet).

## Intentional additions

- `Icon`: a name-based wrapper over Figma "Component 2", because its variants are numbered 1–18 with no names.
- `Component8` gained an `image` prop so it can show its real thumbnail bitmap, which the materializer had flattened to a square.

## UI kits

- `ui_kits/website/`: FormWise homepage (nav, hero, intro, offer split, services tabs, process, projects, about, values, blog, contact, footer banner, footer, floating badges).

---

## CONTENT FUNDAMENTALS

The copy is sample template content for a construction and architecture firm. It is confident, plain and professional, and it trades on **craft, precision and trust**.

- **Voice:** first-person plural "we" for the firm, with "you/your vision" for the client. Examples: "We translate ideas into actionable designs that balance creativity with practicality", "Every great project begins with understanding your vision."
- **Headlines:** short and declarative, in Title Case for section heads ("Our Step-by-Step Approach", "Insights for Better Building", "Let's Build Something That Lasts"). Longer statement headings use sentence case and an em-dash aside: "FormWise is built for those shaping the spaces we live and work in — architects, builders, and design studios who value both structure and style."
- **Eyebrows / badges:** always UPPERCASE, 2–3 words, in a sand chip: "WELCOME TO FORMWISE", "SERVICES", "OUR VALUES", "GET STARTED".
- **CTAs:** two-word verb phrases in Title Case: "View Projects", "Contact Us", "Learn More", "Book Consultation", "Send Message", "Visit Blog", "Buy FormWise".
- **Rhythm:** benefit triplets ("on time, on budget, and built to last"; "inspire, connect, and endure") and em-dashes for asides. Numbers appear as bold proof points: "180+ Architectural projects designed", "200+ Projects Completed".
- **No emoji**, no exclamation marks, no slang. Unicode is limited to typographic punctuation (— ’ “ ”).

## VISUAL FOUNDATIONS

- **Palette:** warm and quiet. The page is off-white **#FFFCF7** (`--color-base-white`), not pure white. The accent is a deep espresso brown **#413936** (`--accent`), used for primary buttons and badge text. A soft sand **#F5EFEA** (`--accent-secondary`) fills eyebrow chips, intro cards, tabs, value cards and the process section background. Text is pure black or #222. A warm neutral ramp (`--color-neutral-shade-50…900`, #FAF8F2 → #A6A5A1) supplies hairlines. The only saturated colours are utility ones in the template's floating badges: red #E60023 on the help-badge hover, and Webflow blue #146EF5.
- **Type:** a single family, **Funnel Sans**, at weights 300, 400 and 500. Headings use Medium with tight leading (90/90 display, 40/46 H2). Subheads use Regular (32/38.4, 28/33.6, 20/26). Body is 16/24 and 14/21. Eyebrows are 14px uppercase with +0.2 tracking. Captions are 12.1/18.12. Odd sizes such as 12.1, 13.6 and 19.6 are copied verbatim from the file.
- **Backgrounds:** full-bleed architectural photography: skylines, aerial construction sites, warm interiors, dusk light. Images always sit under a dark overlay when text is on top. That is either black at 40% plus a bottom fade to black (hero), black at 50% (offer and process cards), or a fade to black from 52% (footer banner). There are no illustrations, patterns or textures, and no decorative gradients.
- **Glass:** translucent white panels (white at 1–20% with `backdrop-filter: blur(10–20px)`) over photos: the hero info card, glass buttons, stat chips, the project card and the contact form. The nav bar is black at 30% with a 10px blur, sitting over the hero.
- **Corner radii:** small and consistent. 4px everywhere (buttons, cards, inputs, images), 2–3px for tiny chips, 6px for icon buttons and the hero info panel, 8px for 60px icon tiles, and 12px only for the floating template pills.
- **Cards:** mostly flat. Cards are sand-filled with no border, or off-white with a 1px #F2F0EB/#F7F5F0 hairline. Blog cards add a barely-visible warm glow (`0 10px 12px rgba(247,243,236,.3)`). There are no heavy shadows and no coloured left borders.
- **Borders:** 1px hairlines in warm neutrals. On dark surfaces they are 40% white (glass) or #A6A5A1 (contact form). List items are divided by top borders in `rgba(166,165,161,.2)`.
- **Layout:** a 1428px max container with a 20px gutter. Section padding is 96 or 144px. Grids have very tight **6px gaps** between cards, which reads as a mosaic. Sections alternate between full-bleed photo bands and off-white/sand content blocks. The nav is fixed at 76px, and the template badges float fixed bottom-right.
- **Hover:** done with opacity only. Buttons drop to opacity 0.8, nav and footer links and the icon button drop to 0.5, and footer links also reveal a 6px dot. Light buttons and template pills swap to a slightly darker fill (#F5EFEA / #F5F5F5), and the help pill turns red. No press or shrink states are defined. Transitions are simple 200ms ease fades. The file defines no motion beyond this.
- **Imagery tone:** warm, natural and slightly desaturated, with golden-hour or overcast light, wood and concrete, and calm interiors.

## ICONOGRAPHY

- All icons come from the file's own **Component 2** set: 18 vector glyphs and marks, materialized as inline SVG in `components/figma/Component2.jsx` and exposed through `<Icon name="…" />`. They are thin outline glyphs (0.5–0.625px strokes at 20px): service icons, arrow-right, check, info, play. Brand marks are included too (FormWise logo, Loonis, Webflow badge).
- The **intro-card icons are raster** 60px PNG tiles (`assets/images/efea20af…`, `0521c0fb…`, `c2a4de45…`, `e6ab5f0a…`), and the template pill uses a PNG thumbnail (`4b22ab81…`).
- There is no icon font, no CDN icon library, no emoji, and no unicode glyphs used as icons. If you need a glyph that isn't in the set, ask for it. Don't substitute another library.
- The footer's three social-link slots are empty 24px frames in the source, so their icons are not available.

## Fonts

Funnel Sans is loaded from **Google Fonts** (the same family the file names). No font binaries were attached. Inter Light 12px appears only in the Figma variant-sheet legends and is not part of the design.
