# Oorja Gastro-Liver & Fetal Medicine Centre — Website Rebuild Masterplan

## 1. Project Goal
Rebuild oorjahospital.com as a **multi-page** React + Tailwind site. Same content and
information as the current site — new structure, new visual design, new interaction
layer (premium scroll animations + hover effects). No content is invented; everything
maps back to `content.txt`.

## 2. Why Rebuild (audit of current site)
- Single long homepage; About/Services/Team/Testimonials are just anchor-scrolled
  sections, not real pages — bad for SEO, hard to deep-link, no per-topic depth.
- Generic Bootstrap-carousel template look; no motion design beyond a slider.
- Gastro services and Fetal Medicine services are visually identical, flattened
  into one same grid — no sense of "two specialities under one roof."
- Doctor bios are minimal (name + degree list), no photos-as-story, no page of
  their own.
- Testimonials are plain text blocks, no visual hierarchy.
- No dedicated Contact page with map + form; contact info only in header/footer.

## 3. Tech Stack
- **React 18** (Vite, not CRA — faster dev server, native ESM)
- **React Router v6** — real multi-page routing
- **Tailwind CSS 3** — utility styling, custom theme tokens (see design.md)
- **Framer Motion** — scroll-triggered reveals, page transitions, hover micro-interactions
- **Lenis** (or `react-scroll-parallax`) — smooth/inertia scrolling to make scroll
  animation feel premium instead of janky
- **lucide-react** — icon set (medical/clean line icons)
- Optional: **Swiper.js** for testimonial/team carousels if needed beyond Framer

## 4. Site Map (Pages)
1. **Home** (`/`) — hero, brief intro to both specialities, highlight stats,
   why-oorja teaser, featured doctors, testimonial teaser, CTA
2. **About** (`/about`) — full "Who We Are" story, mission, facility highlights
   (ultrasound machine, endoscopy suite, daycare, admission, 24x7 emergency)
3. **Gastroenterology Services** (`/services/gastroenterology`) — the 6 gastro
   services in depth
4. **Fetal Medicine Services** (`/services/fetal-medicine`) — the 6 fetal
   medicine services in depth
   (Services landing `/services` can also exist as a hub linking to the two)
5. **Our Team** (`/team`) — Dr. Harsh Jain & Dr. Ishita Agarwal, full
   qualifications, individual detail cards
6. **Why Oorja** (`/why-oorja`) — the 7 differentiators, expanded
7. **Testimonials** (`/testimonials`) — all 5 patient reviews, full layout
8. **Contact** (`/contact`) — address, phone, email, map embed, WhatsApp
   booking CTA, social links

Shared: persistent **Navbar** (with active-route highlighting) and **Footer**
(quick links, both service lists, contact info, social) on every page.

## 5. Component Inventory
- `Navbar` — logo, route links, phone CTA button, mobile hamburger + slide menu
- `Footer` — 4-column layout (About/Quick Links/Services/Contact)
- `Hero` (variant per page: full hero on Home, smaller page-header banner on
  inner pages)
- `SectionHeading` — eyebrow label + heading + subtext (reused across pages)
- `ServiceCard` — icon/image, title, description, hover lift + border glow
- `DoctorCard` — photo, name, qualification list, specialty tag
- `StatCounter` — animated count-up numbers (e.g., years of experience)
- `WhyCard` — icon, title, description in a bento/grid layout
- `TestimonialCard` — quote, patient name, subtle quote-mark motif
- `CTASection` — reusable "Book Appointment" banner (WhatsApp link)
- `ContactBlock` — map + address/phone/email + form (optional, static mail-to
  fallback since there's no backend)
- `ScrollProgressBar` — thin top bar showing scroll progress (premium detail)
- `PageTransition` — Framer Motion wrapper for route enter/exit fades

## 6. Animation Strategy (high level — full detail in design.md)
- Smooth-scroll wrapper (Lenis) on the whole app for weighty, premium scroll feel
- `whileInView` fade/slide reveals on every section, staggered per child
- Parallax drift on hero images and section background shapes
- Sticky/pinned mini-interactions on Services and Why-Oorja grids (cards scale
  in as they enter viewport)
- Number count-up on stats when scrolled into view
- Route-level page transition (fade + slight vertical shift) on navigation
- Hover: magnetic buttons, image zoom-on-hover with overlay reveal, card
  lift + shadow + border-gradient on hover, underline-draw link hovers

## 7. Folder Structure
```
oorja-hospital/
├─ index.html
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
├─ vite.config.js
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ index.css
│  ├─ data/
│  │  └─ content.js        (structured export of content.txt)
│  ├─ components/
│  │  ├─ layout/ (Navbar, Footer, PageTransition, ScrollProgressBar)
│  │  ├─ ui/ (SectionHeading, ServiceCard, DoctorCard, StatCounter,
│  │  │       WhyCard, TestimonialCard, CTASection, Button)
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  ├─ About.jsx
│  │  ├─ ServicesHub.jsx
│  │  ├─ GastroServices.jsx
│  │  ├─ FetalMedicine.jsx
│  │  ├─ Team.jsx
│  │  ├─ WhyOorja.jsx
│  │  ├─ Testimonials.jsx
│  │  └─ Contact.jsx
│  └─ assets/ (images — reuse same images from current site, same filenames)
```

## 8. Build Phases
1. Scaffold Vite + Tailwind + Router, global theme tokens, fonts
2. Build layout shell: Navbar, Footer, page transition wrapper, routes wired
3. Build shared UI components (cards, headings, buttons, CTA)
4. Build Home page fully with all animation layers
5. Build inner pages (About, Services x2, Team, Why Oorja, Testimonials, Contact)
6. Polish: hover states, mobile responsiveness, reduced-motion fallback,
   Lighthouse pass (images lazy-loaded, alt text, semantic headings)

## 9. Content Rule
No new claims, services, doctors, or credentials are invented. All copy comes
from the existing site as captured in `content.txt`. Only presentation,
structure, and page count change.
