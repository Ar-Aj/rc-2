# Rapid Construction — Digital Flagship

> **Building Relations Since 1984**  
> Founders: Mr. Mohammed Anwar Abbajumma & Mr. Shamim Abbajumma  
> Flagship Web Experience: **Apple × Aman Resorts × Porsche × Bjarke Ingels Group**

---

## 1. Executive Summary

This repository houses the definitive digital flagship for **Rapid Construction**, a family-led builder and developer enterprise established in Mumbai in 1984.

This is not a generic real estate template or a static brochure. It is a cinematic, interaction-driven architectural experience that reflects forty years of unbroken delivery, engineering speed, and generational trust across South Mumbai, Andheri, Neral, and Khopoli.

### Key Heritage Pillars
* **150+ Years Family Roots in Mumbai:** Lineage dating back to 19th-century trade, evolving through textile logistics (Rajdeep Road Lines, 1971–1984) and real estate development.
* **The 21-Day Genesis (1984):** Company founded upon the miraculous 21-day completion of Amin Building (G+5) on Narayan Dhuru Street.
* **Vertical Milestones:** From South Mumbai landmark towers like **Rapid Heights (G+32)** in Pydhonie and **Maimoon Tower (G+21)** in Byculla to boutique hospitality at **Hotel Elegant (G+7)**.
* **Masterplanned Townships:** Over 25 buildings at the foothills of Matheran in Neral—including **Rapid Residency Phase I, II, III (Ready to Move G+7)**, and the upcoming **Phase IV**.
* **Future Developments:** An active pipeline of **7.25 Lakh sq.ft** across Byculla, Andheri West, and Neral.

---

## 2. Design System & Aesthetics

Crafted to meet the visual and sensory standards of elite international design agencies:

### Curated Color Palette
* **Primary / Heritage Ground:** Deep Chocolate Brown (`#1E110B` / `#5B3222`) — reflecting the brochure's tactile cover, grounding the interface in structural permanence.
* **Secondary / Warm Light:** Warm Plaster Cream (`#FBF7F0` / `#E8D2A8`) — the color of the logo brick, lime plaster, and architectural linen paper.
* **Accent Only:** Architectural Gold (`#C9A35B` / `#E2C58B`) — reserved strictly for fine hairline rules, badges, and luxury highlights (never used for body copy on light backgrounds).
* **Neutrals:** Soft stone whites, warm black, and graphite charcoal.

### Typography
* **Display Serif:** `Cormorant Variable` (Google Fonts) — editorial authority, classical proportions, high-contrast italic accents.
* **Sans-Serif Body:** `Manrope Variable` (Google Fonts) — geometric modernism, high legibility for technical specifications and numerical data.

### Signature Interaction Moments
1. **Lerping Magnetic Custom Cursor:** Fluid dot-and-ring pointer that expands and magnets over interactive elements, cards, and CTA plates.
2. **Atmospheric Hero Section:** Parallax architectural hero with live Mumbai time-of-day clock, ambient lighting overlays, and dynamic slide previews.
3. **Interactive Day / Night Elevation Comparison Slider:** Smooth drag slider allowing prospective homeowners to compare daylight radiance with warm night illumination for Rapid Residency Phase IV.
4. **Interactive Regional Vector Map:** Spatial visualizer highlighting Rapid Construction’s regional developments across South Mumbai, Andheri, Neral, and Khopoli.
5. **Easing Stats Counters:** Animated count-up statistics celebrating 40+ years, 20+ delivered projects, 800+ homes and retail shops, and 7.25L sq.ft pipeline.
6. **Chronological Timeline Scrubber:** Interactive multi-decadal chronicle spanning 1968 prehistory, 1984 founding, 1990s commercial expansion, 2010s townships, to present launches.
7. **Interactive Spatial Floor Plan Viewer:** Instant toggle between 2D technical layout blueprints and 3D isometric perspectives for 1 BHK (397 sq.ft carpet) and 2 BHK (501 sq.ft carpet) configurations.
8. **Pure-CSS Brick-Building Loader:** Monolithic SVG logo brick-laying animation with count-up year ticker (1984 → 2026), respecting `prefers-reduced-motion` and `sessionStorage`.

---

## 3. Technology Stack & Architecture

Built with modern, production-grade web technologies:

* **Core Framework:** React 19 + TypeScript + Vite 8
* **Styling:** Tailwind CSS v4 (using CSS-first `@theme` design tokens in `src/styles/index.css`)
* **Motion & Physics:** Motion (`motion`) + GSAP (`gsap`)
* **Smooth Scrolling:** Lenis (`lenis`) for luxury editorial scrolling deceleration
* **Forms & Validation:** React Hook Form + Zod (for Site Visit reservations and Contact inquiries)
* **Icons:** Lucide React (`lucide-react`)
* **Image Processing:** Sharp pipeline (`scripts/optimize-images.mjs`) generating 67 WebP assets across responsive breakpoints (480px, 960px, 1600px, 2400px) with inline LQIP blur placeholders.

---

## 4. Complete Route Structure

| Route | Page Component | Description |
| :--- | :--- | :--- |
| `/` | `HomePage` | Digital flagship landing with hero, showcase, township split, map, timeline, and FAQs |
| `/legacy` | `LegacyPage` | Four decades of history, founder story (Mr. Anwar & Shamim), 21-day miracle |
| `/leadership` | `LeadershipPage` | Executive board (Aslam, Khurram, Ahmed, Mohammed Ali), founders, next-gen |
| `/projects` | `ProjectsPage` | Complete archive of 24 projects with status and zone filtering + historical index table |
| `/projects/completed` | `ProjectsPage` | Filtered view for delivered landmarks (Rapid Heights, Maimoon Tower, etc.) |
| `/projects/current` | `ProjectsPage` | Filtered view for ready-to-move inventory (Rapid Residency Phase III) |
| `/projects/upcoming` | `ProjectsPage` | Filtered view for upcoming launch (Rapid Residency Phase IV) |
| `/projects/:slug` | `ProjectDetailPage` | Dynamic deep-dive showcase with day/night slider, floor plans, specs, gallery, and FAQs |
| `/gallery` | `GalleryPage` | Architectural image archive with category filters and high-res lightbox modal |
| `/construction-timeline`| `TimelinePage` | Interactive milestone chronicle from 1968 to Next |
| `/future-developments` | `FutureDevelopmentsPage`| 7.25 Lakh sq.ft pipeline across Byculla, Andheri, and Neral + joint ventures |
| `/why-rapid` | `WhyRapidPage` | The 4 core pillars, material craft, and trust credentials |
| `/testimonials` | `TestimonialsPage` | Resident and shop-owner voices with explicit sample disclosures |
| `/careers` | `CareersPage` | Work culture, stability, and open engineering/design positions |
| `/contact` | `ContactPage` | Three offices (Rapid House, Shoppers Point, Neral site office) + inquiry form |
| `/book-site-visit` | `BookSiteVisitPage` | Dedicated site visit scheduling with complimentary Neral station pickup |
| `/privacy` | `PrivacyPage` | MahaRERA and digital data privacy terms |
| `/terms` | `TermsPage` | Statutory real estate disclaimers and intellectual property terms |
| `/404` | `NotFoundPage` | Architectural 404 error experience with navigation links |

---

## 5. SEO & Social Optimization

The site features a custom Vite prerender build plugin (`rapid:prerender-seo` in `vite.config.ts`) that prerenders static HTML files for **all 32 routes** directly into `dist/`.

Each route includes:
* **Unique Meta Tags:** Handcrafted, conversion-focused `<title>` and `<meta name="description">`
* **Canonical URLs & Open Graph:** Full OpenGraph and Twitter Cards (`1200x630`)
* **JSON-LD Structured Schemas:**
  * `Organization` & `HomeAndConstructionBusiness` (with all 3 office addresses and phones)
  * `WebSite`
  * `BreadcrumbList` on all interior pages
  * `FAQPage` on Home and Project pages
  * `ApartmentComplex` and `RealEstateListing` on residential pages
* **Crawlers & Search Engines:** Auto-generated `sitemap.xml` with priority scores and `robots.txt`
* **No-Script Fallback:** Rich semantic HTML `<noscript>` body for zero-JS crawlers.

---

## 6. Media Pipeline & Prompts

* **Asset Pipeline:** Raw PDF imagery and local photos optimized via Sharp into WebP assets (`public/media/`).
* **Downloadable Brochures:** Compressed, high-resolution PDF brochures placed in `public/downloads/`:
  * `rapid-construction-portfolio.pdf` (7.5 MB)
  * `rapid-residency-phase-4-brochure.pdf` (8.6 MB)
* **Cinematic Prompts Documentation:** See [`docs/PROMPTS.md`](docs/PROMPTS.md) for full SeeDance 2.0 prompts (camera movement, lighting, lens, environment) and Midjourney/Nano Banana Pro prompts.

---

## 7. Development & Production Commands

### Installation
```bash
npm install
```

### Local Development Server
```bash
npm run dev
```

### Production Build & Static Prerendering
```bash
npm run build
```
*Compiles TypeScript types (`tsc -b`), bundles optimized CSS/JS, and prerenders all 32 HTML routes, sitemap.xml, robots.txt, and 404.html into `dist/`.*

### Preview Production Build
```bash
npm run preview
```

### Optimize Media Assets
```bash
npm run images
```

---

## 8. Compliance & Content Integrity Notice

* **Source of Truth:** All project facts, dates, dimensions, unit counts, and leadership names are sourced directly from the client's original PDFs (`Rapid Construction Portfolio (2).pdf` and `Phase 4 Proposal Rapid Construction..pdf`).
* **Sample Content Disclosures:** Any missing fact or illustrative item is styled with a visible, discrete `Sample content` tag (`SampleBadge.tsx`) to guarantee absolute transparency for client review prior to commercial launch.
* **Brand Nomenclature:** Strict adherence to client technical standards and brand phrasing ("Pipes / Fittings", exact standard numbers, and uncompressed milestone figures).

---

*Designed and engineered with pride for Rapid Construction — Builders & Developers Since 1984.*
