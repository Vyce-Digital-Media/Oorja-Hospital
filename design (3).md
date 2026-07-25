# Design System — Oorja Gastro-Liver & Fetal Medicine Centre

## 1. Design Direction
"Modern clinical trust" — a premium private-hospital feel: calm, precise,
warm-clinical (not cold/sterile, not playful). Think boutique medical brand,
not a generic template. Classic serif accents for gravitas + a clean modern
sans for readability, generous whitespace, restrained color, motion used to
guide attention rather than decorate.

## 2. Color Palette
Two-speciality identity: a deep teal/emerald for Gastro-Liver (organic,
internal medicine) and a soft rose/blush for Fetal Medicine — unified by a
shared neutral + deep navy base so the site still feels like one brand.

```
--color-navy:        #0B1F2A   /* primary text, headers, footer bg */
--color-navy-soft:    #13303F
--color-teal:         #0E7C6B  /* gastro/liver accent, primary CTA */
--color-teal-light:   #E4F3EF  /* gastro tint backgrounds */
--color-rose:         #C9738A  /* fetal medicine accent */
--color-rose-light:   #FBEEF1  /* fetal medicine tint backgrounds */
--color-gold:         #B08D57  /* premium hairline accent, dividers, icons */
--color-cream:        #FAF7F2  /* main page background, warmer than pure white */
--color-white:        #FFFFFF
--color-ink-60:       #4B5B62  /* body copy on light bg */
--color-border:       #E7E1D8
```

Usage rule: Navy for headings/nav/footer. Teal = gastro sections & primary
buttons. Rose = fetal medicine sections. Gold used sparingly — thin rules,
icon strokes, hover underlines — never as a fill. Cream, not white, as base
background to keep the "premium" warmth.

## 3. Typography
- **Display / Headings:** `Fraunces` or `Playfair Display` (serif, classic,
  premium) — used for H1/H2 only, at fairly large sizes with tight
  letter-spacing.
- **Body / UI:** `Inter` or `General Sans` (clean modern sans) — body text,
  nav, buttons, form labels.
- **Eyebrow labels** (e.g. "What We Do"): small caps, letter-spaced, gold or
  teal, sits above every section heading exactly like the current site's
  "What We Do" / "About Us" pattern — kept, just restyled.

Scale (desktop): H1 56–72px / H2 40–48px / H3 28–32px / body 17–18px /
small 14px. Line-height generous (1.5+ body, 1.1–1.2 headings).

## 4. Spacing & Layout
- 8px base spacing unit; section vertical padding 96–140px desktop, 56–72px
  mobile.
- Max content width 1280px, gutters 24px mobile / 64px desktop.
- Grids: services 3-col desktop / 1-col mobile; team 2-col; why-oorja
  4-col bento (mix of 1x1 and 2x1 tiles for visual rhythm, not a flat grid).
- Section backgrounds alternate cream → white → tinted (teal-light/rose-light)
  to create rhythm as user scrolls, replacing the current site's flat white
  monotony.

## 5. Imagery Treatment
- All images reuse the source site's images (same filenames/assets).
- Duotone-on-hover: default slightly desaturated + navy overlay at 8%;
  on hover, overlay fades to 0% and image scales 1.0 → 1.06 (600ms ease).
- Rounded corners: 12–20px radius, never sharp, never full-pill on photos.
- Hero images get a subtle static gold hairline frame (1px, inset 12px) for
  a "classic" framed-portrait feel.

## 6. Scroll Animation Spec
Global: **Lenis** smooth-scroll wrapper with `duration: 1.1`, easing
`easeOutExpo`-like curve — makes every scroll interaction feel weighted and
premium rather than default-browser-snappy.

Per-element (Framer Motion `whileInView`, `viewport={{ once: true, margin: "-80px" }}`):
- **Fade-up:** opacity 0→1, y 24→0, duration 0.6s, ease `[0.22,1,0.36,1]`
- **Stagger children:** 0.08–0.12s delay between siblings in a grid (services,
  why-oorja cards, doctor cards) so cards "arrive" in sequence, not all at once
- **Parallax:** hero background image translateY at 0.15–0.25x scroll speed;
  section decorative shapes (soft blurred circles in teal/rose) drift slower
  than content for depth
- **Count-up stats:** numbers animate from 0 to target when 60% in view
  (e.g., years of combined experience, number of specialities) using
  `framer-motion`'s `useMotionValue` + `useTransform`
- **Sticky reveal on Services pages:** section title pins briefly while cards
  scroll past it (`position: sticky` on the heading column, cards scrolling in
  adjacent column on desktop only — collapses to normal stack on mobile)
- **Route transitions:** page fades in with 8px upward shift, 0.35s, on every
  navigation via React Router + `AnimatePresence`
- **Scroll progress bar:** 2px gold gradient bar fixed to top, width tied to
  scroll position of the current page

Respect `prefers-reduced-motion`: all of the above degrade to instant
opacity/no-transform when the user has reduced motion enabled.

## 7. Hover Effects
- **Buttons (primary CTA):** background navy→teal shift, subtle scale 1.02,
  and a "magnetic" pointer-follow effect within a small radius (translate up
  to 6px toward cursor) for the main "Book Appointment" buttons only.
- **Nav links:** gold underline draws left→right under the link on hover
  (transform scaleX 0→1, transform-origin left).
- **Service/Why cards:** lift (`translateY(-6px)`), shadow deepens, a 1px
  border shifts from `--color-border` to teal or rose (matching section),
  icon inside nudges/rotates slightly.
- **Doctor cards:** photo overlay slides up revealing "View Profile" label;
  card border gains gold hairline.
- **Testimonial cards:** quote mark icon in background scales slightly and
  shifts opacity on hover; card background tint shifts cream→white.
- **Footer links:** simple color shift + 4px right-nudge on hover.

## 8. Page-Specific Layout Notes
- **Home:** full-bleed hero (image + gradient overlay, headline, CTA, small
  trust stat row), then alternating tinted sections in the order: intro →
  featured services teaser (3 gastro + 3 fetal side by side, split-color
  background) → why-oorja teaser → doctors teaser → testimonial teaser → CTA.
- **Service pages (Gastro / Fetal):** page-header banner in the section's
  accent tint, then sticky-heading + staggered card grid of that speciality's
  6 services, each card can expand slightly on hover to show full description.
- **Team:** two large, editorial-style doctor spreads (photo one side,
  full qualification list + specialty narrative other side), alternating
  image-left/image-right.
- **Why Oorja:** bento grid of the 7 differentiators, 2 tiles larger than
  the rest for visual hierarchy (e.g., "Expert-led care" and "Advanced
  Technology" as feature tiles).
- **Testimonials:** masonry-style or 2-column staggered card layout, not a
  single-column list, so all 5 reviews feel abundant not sparse.
- **Contact:** two-column — left: address/phone/email/social + embedded map
  (iframe from the same Google Maps link), right: simple contact/appointment
  form (mailto/WhatsApp fallback since no backend).

## 9. Accessibility & Performance Notes
- Color contrast checked: navy-on-cream and white-on-navy both pass AA.
- All animations respect `prefers-reduced-motion`.
- Images lazy-loaded (`loading="lazy"`) except hero.
- Semantic heading order (one H1 per page).
- Focus states visible (gold outline ring) for keyboard nav — motion effects
  never replace focus indication.
