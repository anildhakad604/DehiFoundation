<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Dehi Foundation — Agent Guide

## Project Overview

**Dehi Foundation** is a single-page nonprofit/foundation marketing website built with the Next.js App Router. It presents the organization's mission of service through four pillars: **food (Annadaan)**, **environment (Green Earth Drive)**, **animal welfare (Gau & Animal Seva)**, and **community/spiritual upliftment**.

The site is a static, content-driven landing page — no backend, no database, no API routes, and no dynamic data fetching. All content lives as static TypeScript data arrays inside the components.

---

## Tech Stack

| Layer        | Technology                                             |
| ------------ | ------------------------------------------------------ |
| Framework    | **Next.js 16.2.12** (App Router, React 19.2.4)         |
| Language     | **TypeScript 5** (strict mode enabled)                 |
| Styling      | **Tailwind CSS 4** (`@tailwindcss/postcss`, `@theme`)  |
| Animation    | **Framer Motion 12.43** (`framer-motion`)              |
| Linting      | **ESLint 9** flat config (`eslint-config-next`)        |
| Fonts        | `next/font/google` — Playfair Display + Inter          |
| Package Mgr  | npm                                                  |

### Commands

```bash
npm run dev     # Start dev server (Turbopack, Next 16 default)
npm run build   # Production build (Turbopack, no webpack flags needed)
npm start       # Start production server
npm run lint    # Run ESLint CLI directly (next lint is REMOVED in v16)
```

---

## Project Structure

```
dehi-foundation/
├── public/
│   ├── logo.jpg               # Logo (Header, Hero, and Footer all use /logo.jpg)
│   ├── SliderBanner1.png      # Hero slider slide (volunteers planting trees)
│   ├── SliderBanner2.png      # Hero slider slide (families & volunteers)
│   ├── SliderBanner3.png      # Hero slider slide (food/education/healthcare/animal welfare)
│   ├── SliderBanner4.png      # Present in public/ but NOT used by BannerSlider
│   ├── SliderBanner5.png      # Hero slider slide (empowering communities)
│   ├── file.svg, globe.svg, next.svg, vercel.svg, window.svg   # create-next-app defaults
├── src/
│   ├── app/
│   │   ├── globals.css   # Tailwind import, CSS variables, @theme inline, global styles
│   │   ├── layout.tsx    # Root layout: fonts, metadata, html/body shells
│   │   └── page.tsx      # Home page — composes all section components
│   └── components/
│       ├── Header.tsx        # Fixed sticky header (client) — scroll-aware, mobile menu
│       ├── BannerSlider.tsx  # Hero image slider (client) — autoplay, swipe/drag, arrows, dots
│       ├── Hero.tsx          # Hero intro section (client) — framer-motion entrance, stats, logo badge
│       ├── Mission.tsx       # Mission section — 4 pillar cards (server component)
│       ├── Impact.tsx        # Impact section — dark stats band (server component)
│       ├── Programs.tsx      # Programs section — alternating row cards (server component)
│       ├── Testimonials.tsx  # Stories section — quote cards (server component)
│       ├── GetInvolved.tsx   # Donate section — Donate/Volunteer/Partner cards (server component)
│       ├── Footer.tsx        # Contact footer — link groups, newsletter form (server component)
│       ├── Reveal.tsx        # Client wrapper — scroll-reveal animation via framer-motion
│       └── icons.tsx         # Custom inline SVG icon components (no icon library)
├── next.config.ts        # Minimal — no config options set
├── postcss.config.mjs    # Tailwind CSS 4 PostCSS plugin
├── eslint.config.mjs     # ESLint flat config: core-web-vitals + typescript, globalIgnores
├── tsconfig.json         # Path alias @/* → ./src/*, strict, bundler resolution
└── package.json
```

---

## Architecture & Conventions

### Component Model

- **Server Components by default.** Most sections (`Mission`, `Impact`, `Programs`, `Testimonials`, `GetInvolved`, `Footer`) are plain server components — they contain no hooks or browser APIs.
- **Client Components** (`"use client"` directive at top of file):
  - `Header.tsx` — uses `useState`/`useEffect` for scroll state and mobile menu
  - `BannerSlider.tsx` — uses `useState`/`useEffect`/`useRef`/`useCallback`, `motion` + `AnimatePresence` for slide transitions, drag/swipe gestures
  - `Hero.tsx` — uses `motion` for entrance animations
  - `Reveal.tsx` — uses `motion` for scroll-into-view reveal animations
- **Named exports only.** Every component is exported as a named function (`export function Header()`, etc.) — never default exports.
- Import path alias: `@/components/...` and `@/app/...` map to `src/`.

### Content Data Pattern

Section content is defined as **const arrays/objects at the top of each component file** (e.g., `SLIDES`, `PILLARS`, `STATS`, `PROGRAMS`, `QUOTES`, `WAYS`, `NAV_LINKS`, `LINK_GROUPS`). To edit copy, change these arrays — no markup changes needed.

### Banner Slider (`BannerSlider.tsx`)

The full-width hero image carousel above the `Hero` intro section. Key behaviors:

- **Slides data:** `SLIDES` const array of `{ src, alt }` pairs pointing to `/SliderBanner1.png`, `/SliderBanner2.png`, `/SliderBanner3.png`, `/SliderBanner5.png` — to add/remove slides, edit this array (dot indicators and arrows render dynamically from it).
- **Autoplay:** `AUTOPLAY_MS = 6000` interval advances to the next slide; **pauses on hover** (`onMouseEnter`/`onMouseLeave` on the section).
- **Wrap-around navigation:** `go()` uses modular arithmetic (`(next + SLIDES.length) % SLIDES.length`) so slides wrap infinitely in both directions.
- **Swipe/drag support:** `drag="x"` with `dragConstraints={{ left: 0, right: 0 }}` and `dragElastic={0.2}`. `SWIPE_THRESHOLD = 60` — dragging beyond ±60px triggers the next/previous slide.
- **Direction-aware transitions:** `[index, direction]` state tuple drives `variants` (enter/center/exit) with `AnimatePresence custom={direction} mode="wait"` and the shared ease curve `[0.22, 1, 0.36, 1]` (0.6s duration).
- **Controls:** prev/next chevron buttons (`IconChevronLeft`/`IconChevronRight`), dot indicators with active styling (`w-6 bg-gold` vs `w-2.5 bg-cream/60`), all using `aria-label`s for accessibility.
- **Overlay copy:** The tagline quote ("A Happy Soul Begins with Good Karma.") and sub-line are hardcoded in the section JSX (not in a data array).
- **First slide optimization:** `priority={index === 0}` on the `Image`; `sizes="100vw"` with `fill` and `object-cover`.
- **Anchored:** The section carries `id="top"` — it is the `#top` anchor target.

### Animation Pattern (`Reveal.tsx`)

`Reveal` is a reusable client wrapper used by all server sections to add scroll-reveal animations:

```tsx
<Reveal delay={i * 0.1} className="...">
  <div>...</div>
</Reveal>
```

Props: `children`, `delay` (seconds, default 0), `className`, `y` (initial Y offset, default 24). It uses `whileInView` with `viewport={{ once: true, margin: "-80px" }}` and a shared ease curve `[0.22, 1, 0.36, 1]`.

### Icons (`icons.tsx`)

All icons are hand-written inline SVGs exported as typed React components accepting `React.SVGProps<SVGSVGElement>`:

| Icon | Used In |
| ---- | ------- |
| `IconBowl` | Mission, Impact, Programs (food/deliveries) |
| `IconTree` | Mission, Impact, Programs (environment) |
| `IconPaw` | Mission, Impact, Programs (animal welfare) |
| `IconGraduationCap` | Mission, Impact, Programs (education) |
| `IconHands` | GetInvolved (Volunteer) |
| `IconDrop` | GetInvolved (Donate) |
| `IconBird` | GetInvolved (Partner) |
| `IconHeart` | Testimonials |
| `IconChevronLeft` | BannerSlider (previous slide) |
| `IconChevronRight` | BannerSlider (next slide) |

They use `stroke="currentColor"` — color is controlled by the consumer via Tailwind `text-*` classes. **Do not add an icon library**; follow this pattern.

---

## Styling System (Tailwind CSS 4)

### Design Tokens

Color palette is defined in `globals.css` as CSS variables and exposed to Tailwind via `@theme inline`:

| Token          | Hex       | Usage                              |
| -------------- | --------- | ---------------------------------- |
| `cream`        | `#fdfaf3` | Primary background (light sections) |
| `cream-deep`   | `#f5efe0` | Alt background (Programs section)  |
| `forest`       | `#2f5233` | Primary CTA, deep green accents    |
| `forest-deep`  | `#1e3a22` | Headings on light, CTA hover, dark CTA bg |
| `gold`         | `#c99a3d` | Accents, dividers, labels, borders, active slider dot |
| `gold-light`   | `#e0b968` | Accents on dark backgrounds        |
| `brown`        | `#6b4423` | Secondary text, warm accents       |
| `brown-deep`   | `#4a2e17` | Body text on light, borders        |
| `navy`         | `#182642` | Dark section accent                |
| `navy-deep`    | `#0f1a2e` | Dark backgrounds (Impact, Footer, slider overlay gradients), body text |
| `ember`        | `#e08a3e` | Decorative gradients only          |

Usage: `bg-cream`, `text-navy-deep`, `border-gold/30`, `bg-forest/10`, etc.

### Fonts

- `--font-serif` → **Playfair Display** (500–900) — headings (`font-serif`)
- `--font-sans` → **Inter** (300–700) — body default
- Loaded in `layout.tsx` via `next/font/google` and applied via CSS variables.

### Global CSS Utilities (`globals.css`)

- `* { scroll-behavior: smooth }` — global smooth scrolling (**Note:** Next.js 16 no longer overrides scroll-behavior during route transitions; see "Next.js 16 Notes" below)
- `h1–h4, .font-serif` — Playfair applied automatically to headings
- `.texture-overlay` — subtle dotted grain overlay via `::before` pseudo-element
- `.gold-divider` — 1px gold gradient horizontal rule
- `.animate-fade-up` + `@keyframes fade-up` — simple CSS-only fade-up (used where framer-motion is not needed)
- `::selection` — gold highlight on navy text

### Page Layout (`layout.tsx`)

- `<html>` with `lang="en"`, font variables, `h-full`, `antialiased`
- `<body>` with `min-h-full flex flex-col bg-cream text-navy-deep`
- `metadata`: title "Dehi Foundation | Nourishing Souls, Enriching Lives", description about the org

### Page Structure (`page.tsx`)

Composes, in order: `Header` → `<main className="flex-1">` wrapping `BannerSlider`, `Hero`, `Mission`, `Impact`, `Programs`, `Testimonials`, `GetInvolved` → `Footer`.

### Anchor Navigation

The site is a single page with anchored sections linked from the header and footer:

| Anchor        | Section                                    |
| ------------- | ------------------------------------------ |
| `#top`        | BannerSlider (hero image slider)           |
| `#mission`    | Mission (Four Pillars)                     |
| `#programs`   | Programs (4 program cards)                 |
| `#impact`     | Impact (stats band)                        |
| `#stories`    | Testimonials                               |
| `#donate`     | GetInvolved                                |
| `#contact`    | Footer / Contact                           |

---

## Next.js 16 Critical Notes (read before editing)

This project runs **Next.js 16.2.12**. Key breaking changes vs. older training data:

1. **Turbopack is the default** for both `next dev` and `next build`. No `--turbopack` flag needed. Custom webpack configs will **fail the build** unless `--webpack` is passed.
2. **Async Request APIs are mandatory** — `cookies()`, `headers()`, `draftMode()`, `params`, and `searchParams` are **Promise-based only**. Synchronous access was fully removed in v16. Any page/layout receiving props must `await props.params` / `await props.searchParams`.
3. **`next lint` is removed.** The `lint` script uses the ESLint CLI directly (`eslint`). `next build` no longer runs linting. The `eslint` option in `next.config.ts` is unsupported.
4. **`middleware` renamed to `proxy`** — the `proxy.ts` file exports a `proxy` function; the `edge` runtime is not supported in proxy.
5. **`next/image` changes:**
   - `images.minimumCacheTTL` default is now **4 hours** (was 60s).
   - `images.qualities` default is now **`[75]`** only.
   - `16` was removed from default `images.imageSizes`.
   - Local images with query strings require `images.localPatterns.search` config.
   - Local IP optimization blocked by default (`images.dangerouslyAllowLocalIP`).
   - `images.domains` is deprecated — use `images.remotePatterns`.
   - `next/legacy/image` is deprecated — use `next/image`.
6. **Scroll behavior override changed** — Next.js 16 no longer overrides `scroll-behavior: smooth` on navigation. This project relies on CSS `scroll-behavior: smooth` for anchor links, which works as-is. If SPA navigation snap-scrolling behavior is ever desired, add `data-scroll-behavior="smooth"` to the `<html>` element.
7. **`revalidateTag` now requires a second cacheLife profile argument** (e.g., `revalidateTag('tag', 'max')`). New `updateTag` and `refresh` APIs exist in `next/cache`.
8. **`cacheLife` / `cacheTag` are stable** — drop the `unstable_` prefix.
9. **`cacheComponents`** (top-level config) replaces `experimental.ppr`, `experimental.dynamicIO`, and `experimental.useCache`.
10. **ESLint flat config is the default** — the project already uses `eslint.config.mjs` with `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`.
11. **`next dev` outputs to `.next/dev`** (separate from build output).
12. **React 19.2** — new features include View Transitions, `useEffectEvent`, and `Activity`.
13. **`devIndicators` options** `appIsrStatus`, `buildActivity`, `buildActivityPosition` were removed.
14. **App Router uses React canary releases** with React 19 features built in.

**Always consult** `node_modules/next/dist/docs/01-app/` (especially `02-guides/upgrading/version-16.md`) before introducing any Next.js API not already used in the codebase.

---

## Gotchas & Known Issues

- **Unused slider asset:** `public/SliderBanner4.png` exists but is **not** referenced by `SLIDES` in `BannerSlider.tsx` (only 1, 2, 3, and 5 are used). Either add it to the slider or remove it.
- **Newsletter form:** The form in `Footer.tsx` has no `action`/handler — it's purely presentational. Don't expect it to submit anywhere.
- **CTA links:** Donate/Volunteer/Partner buttons in `GetInvolved.tsx` all link to `#contact` (the footer). Volunteer and Partner links in the footer also point to `#donate`.
- **`#top` anchor is on `BannerSlider`:** The header logo links to `#top`, which currently targets the slider section (not `Hero`). The `Hero` section itself has no `id`.
- **No responsive image risks:** All `next/image` usages supply `fill` + `sizes`; keep `sizes` accurate when resizing layouts.
- **Framer Motion import:** Animations use the `motion` package import `from "framer-motion"` (v12). Do not switch to the `motion/react` package without testing.
- **Strict TypeScript:** `strict: true` in tsconfig. New data arrays must be fully typed; untyped object literals in props will fail.
- **Slider drag conflicts with links:** The slider's draggable slide layers sit over the content; buttons/controls inside the slider use `z-10` to stay clickable. If adding new interactive elements inside the slide area, keep them above `z-[5]` (the gradient overlays).

---

## Contribution Guidelines

1. **Component style:** Named exports, server-first (no `"use client"` unless hooks/framer-motion are needed), content data as top-of-file consts.
2. **Reuse `Reveal`** for any scroll-reveal animation instead of adding new `whileInView` logic.
3. **Use design tokens** from the `@theme` palette — do not introduce new hex colors inline. If a new color is needed, add a CSS variable + `@theme inline` entry in `globals.css`.
4. **Icons:** Add new icons as typed SVG components in `icons.tsx` using `stroke="currentColor"`.
5. **Copy changes:** Edit the data arrays (e.g., `SLIDES`, `PROGRAMS`, `QUOTES`, `STATS`) rather than hardcoded JSX text.
6. **Verify with:** `npm run lint`, `npm run build`, and `npm run dev` before considering a change complete.
7. **Fractional stats use Indian number-system formatting** (e.g., `1,20,000+` — lakhs grouping) — preserve this style in copy.