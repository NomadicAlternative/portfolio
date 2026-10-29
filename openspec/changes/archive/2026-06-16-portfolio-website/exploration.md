## Exploration: Portfolio Website

### Current State

The project is a **fresh Vite 8 + React 19 + TypeScript 6 + Tailwind CSS 4 scaffold**. The `App.tsx` contains the default Vite boilerplate — no portfolio content, no components, no routing, no data fetching. The `index.css` only imports Tailwind via `@import "tailwindcss"` and resets body margin to 0. `App.css` holds the Vite starter styles (hero animations, counter, next-steps sections) — all slated for removal.

**What exists:**
- `src/main.tsx` — StrictMode entry point, renders `<App />`
- `src/App.tsx` — Vite boilerplate (counter, docs links, social links)
- `src/App.css` — Vite starter styles (184 lines, to be replaced)
- `src/index.css` — Tailwind import + body margin reset
- `src/assets/` — `hero.png`, `react.svg`, `vite.svg` (all Vite scaffold assets)
- `public/` — `favicon.svg`, `icons.svg` (Vite scaffold)
- `openspec/config.yaml` — SDD config, defines 5 Figma sections
- `openspec/specs/` — empty (no domain specs yet)
- `openspec/changes/archive/` — empty

**What's missing:**
- No components at all
- No page sections (Hero, About, Projects, Contact, Footer)
- No router (react-router not installed)
- No dark/light mode
- No i18n
- No animation library
- No SEO (meta tags, OpenGraph, sitemap)
- No CI/CD, no deployment config
- No tests

### Affected Areas

- `src/` — entire directory will be restructured. All existing App.tsx/App.css content will be replaced.
- `package.json` — new dependencies needed (router, animation lib, i18n lib, potentially component library).
- `index.html` — title and meta tags need updating.
- `public/` — needs portfolio assets (screenshots, resume PDF, favicon).
- `openspec/changes/portfolio-website/` — all SDD artifacts will be created here.
- `tailwind` theme — needs design tokens (colors, fonts, spacing) derived from Figma.

### Figma Design Analysis

**Status: BLOCKED — Design not retrieved.**

The `FIGMA_ACCESS_TOKEN` environment variable is **empty** in this session. Neither the Figma API endpoint (`api.figma.com/v1/files/zK3Y8wDbDGPrQqny3POSo6`) nor the community page were accessible. Attempts via DuckDuckGo search for the template were also blocked by bot detection.

**What we know from `openspec/config.yaml`:**
- Template: "Developer Personal Portfolio (Community)"
- File key: `zK3Y8wDbDGPrQqny3POSo6`
- Sections: Hero Section, About Me Section, Projects, Contact Me, Footer

**What we DON'T know (and need before design phase):**
- Exact color palette (primary, secondary, background, accent colors)
- Typography (font families, sizes, weights)
- Layout structure (single page scroll? sticky nav? grid vs flex sections?)
- Visual tone (dark vs light theme, minimal vs bold, gradient usage)
- Component details (card styles, button styles, icon usage)
- Spacing system (section padding, max-width container)
- Responsive breakpoints (mobile-first? desktop-first?)
- Interactive elements (hover effects, scroll animations, parallax?)

**Recommendation:** The user must either:
1. Run `export FIGMA_ACCESS_TOKEN=<their-token>` in their shell and re-invoke the exploration OR
2. Provide a screenshot/image of the Figma design OR
3. Describe the design visually so we can proceed without the API

Without design data, we can still proceed with a **content-first approach** (define text, structure, and IA first), but the visual design phase will be deferred.

### Portfolio Best Practices (Research Summary)

**What recruiters look for (first 60 seconds):**
1. **Clarity over complexity** — "What does this developer specialize in? What problems can they solve?"
2. **Clean code signals** — consistent naming, logical structure, readable commits
3. **Real-world relevance** — projects that solve actual problems, not tutorial clones
4. **Documentation** — READMEs, setup instructions, screenshots show communication skills
5. **Depth over quantity** — 2-4 well-developed projects > 10 unfinished repos
6. **Problem-solving evidence** — challenges faced, decisions made, trade-offs considered
7. **Professional Git** — meaningful commits, visible iteration, no "final version" commits

**Common anti-patterns (from reviewing 100+ portfolios):**
- Treating portfolio as a resume PDF dump
- Showcasing only school assignments
- Broken links, 404s, grammar errors
- No clear call to action or contact info
- Static/outdated — no sign of maintenance

**Best practices for standing out:**
- **Story-driven case studies** — problem → approach → challenges → outcome (with metrics)
- **Personal branding** — custom domain, headshot, clear tagline
- **Accessibility** — WCAG contrast, keyboard nav, ARIA labels
- **Performance** — optimized images, fast load times (Lighthouse 90+)
- **Interactive elements** — subtle animations, but don't sacrifice performance
- **SEO** — descriptive titles, meta descriptions, sitemap
- **Continuous evolution** — treat portfolio as a living side project

### Content Strategy (for Diego specifically)

#### Hero Section
- **Name:** Diego Garcia
- **Tagline:** "Building complex software that connects hardware and people"
- **Sub-tagline:** IoT & Full-Stack Developer | BYU-Idaho Software Engineering
- **CTA:** "View My Work" → scrolls to Projects, "Get In Touch" → scrolls to Contact
- **Visual:** Professional photo or geometric/code-themed background

#### About Me Section
- **Story arc:** Electronics technician → Software Engineering at BYU-Idaho → IoT + Full-Stack developer
- **Key points:**
  - Started in hardware (electronics technician background)
  - Transitioned to software at BYU-Idaho
  - Passionate about IoT — connecting physical devices to intelligent software
  - Full-stack capable: React/Next.js frontend, Node.js/Python backend, MQTT/ESP32 embedded
  - Currently building multi-tenant SaaS products
- **Skills grid:** React, TypeScript, Node.js, Next.js, Python, Tailwind, MQTT, ESP32, PostgreSQL, Supabase, Docker, Git
- **Tone:** Authentic, technical but warm — the hardware+software duality is Diego's differentiator

#### Projects Section
**Project 1: BeepDash**
- **What:** Multi-tenant IoT SaaS platform for fleet/asset monitoring
- **Stack:** React, Node.js, MQTT, ESP32, PostgreSQL
- **Key features:** Real-time dashboards, device provisioning, multi-tenant architecture, MQTT message routing
- **Challenge:** Designing a secure multi-tenant MQTT topic architecture with per-device isolation
- **Outcome/metrics:** [TBD — Diego to provide: number of devices supported, latency, tenants]
- **Visual:** Dashboard screenshot, architecture diagram

**Project 2: Leadership Planning System (LPS)**
- **What:** Franklin Covey-inspired personal/team planning application
- **Stack:** Next.js, Supabase, TypeScript, Tailwind
- **Key features:** Goal cascading (mission → goals → weekly plans), role-based planning, progress tracking
- **Challenge:** Modeling the Franklin Covey planning hierarchy in a relational database
- **Outcome/metrics:** [TBD — Diego to provide]
- **Visual:** Planning dashboard screenshot, goal hierarchy visualization

#### Contact Section
- **Email:** [Diego's email]
- **GitHub:** github.com/NomadicAlternative
- **LinkedIn:** [Diego's LinkedIn URL]
- **CTA:** "Let's build something together — I'm open to freelance, contract, and full-time opportunities"

#### Footer
- Links: Home, About, Projects, Contact
- Social: GitHub, LinkedIn
- Copyright: "© 2026 Diego Garcia"
- "Built with React 19 + Tailwind CSS 4"

### Technical Decision Analysis

#### 1. Component Library vs. From Scratch

| Approach | Pros | Cons | Effort |
|----------|------|------|--------|
| **shadcn/ui** | Beautiful, accessible, customizable, Tailwind-native, copy-paste components, good docs | Adds deps (Radix primitives), overkill for a landing page, makes it look like every other portfolio | Medium |
| **base-ui (MUI Base)** | Unstyled, accessible primitives from MUI team, close to shadcn but lighter | Less ecosystem, fewer pre-built components, less community momentum | Medium-High |
| **From scratch with Tailwind** | Zero deps, maximum control, unique design, true to Figma template, no vendor lock-in | More work to build accessible components (dialog, nav, etc.), need to handle focus management manually | High (but appropriate for a 5-section page) |

**Recommendation: Build from scratch with Tailwind.** A portfolio landing page has ~5 sections. The complexity of integrating shadcn/ui (Radix primitives, class-variance-authority, tailwind-merge) isn't justified for a single-page site. Building from scratch also ensures the portfolio truly reflects the Figma design and doesn't look generic. If the project later expands (blog, CMS), we can add shadcn/ui at that point.

#### 2. Animations

| Approach | Pros | Cons | Effort |
|----------|------|------|--------|
| **Framer Motion** | Best React animation library, declarative, scroll-triggered animations, layout animations, huge community | Adds ~30KB, can hurt performance if overused, another dependency | Low-Medium |
| **CSS transitions + IntersectionObserver** | Zero deps, minimal bundle, good enough for scroll-reveal and hover effects | Less powerful for complex animations, more imperative code | Medium |
| **No animations** | Fastest, simplest | Feels static and unpolished, misses modern web expectations | None |

**Recommendation: Framer Motion** for scroll-triggered section reveals and subtle hover effects. A portfolio is ALL about first impression — animations signal polish and attention to detail. Use `motion/react` (the lightweight entry point), enable `layoutAnimation` only where needed, and keep animations subtle (fade-up, not bounce-in). Target: add < 10KB gzipped to bundle.

#### 3. Dark/Light Mode

| Approach | Pros | Cons | Effort |
|----------|------|------|--------|
| **System preference only (prefers-color-scheme)** | Zero UI, automatic, follows user OS setting | No manual toggle, some users want choice | Low |
| **Manual toggle + localStorage** | User control, persists across visits | More code, needs SSR flash prevention | Medium |
| **No dark mode** | Simplest | Accessibility fail, ignores user preference, looks outdated | None |

**Recommendation: Start with system preference + manual toggle.** This is table stakes for modern portfolios. Tailwind 4's `dark:` variant makes this straightforward. Store preference in `localStorage`, apply class to `<html>` before React hydrates (flash prevention via inline script in `index.html`).

#### 4. i18n (Spanish/English)

| Approach | Pros | Cons | Effort |
|----------|------|------|--------|
| **i18next + react-i18next** | Most popular, rich ecosystem, namespace splitting, ICU message format | Adds deps, complex setup for a small site | Medium-High |
| **Custom hook + JSON** | Zero deps, simple, full control | No pluralization, interpolation, or formatting helpers | Low-Medium |
| **English only** | Simplest | Misses Diego's Spanish-speaking audience, limits reach | None |

**Recommendation: English only for v1.** A portfolio is inherently global — English is the lingua franca of tech hiring. Adding i18n adds significant complexity (content duplication, locale detection, URL routing, SEO considerations like `hreflang`). This can be added in v2 if there's demand. Focus energy on making the English version exceptional.

#### 5. Project Screenshots Showcase

| Approach | Pros | Cons | Effort |
|----------|------|------|--------|
| **Static images (optimized WebP)** | Fast, no JS needed, simple `<img>` tags | Static, no interaction | Low |
| **Lightbox/modal gallery** | Interactive, professional, click to enlarge | Needs JS, adds complexity for modal state management | Medium |
| **Video/GIF walkthrough** | Most engaging, shows UI in action | Large file size, autoplay concerns, more production work | High |

**Recommendation: Static WebP images with optional lightbox.** Use `next/image` equivalent (manual `<img>` with `srcset` and `loading="lazy"` since no Next.js). Diego should provide 2-3 screenshots per project at 2x resolution, optimize to WebP with a max width of 1200px. A simple modal (click to expand) can be built with React state — no library needed.

### Dependency Forecast

**Definite additions:**
- `framer-motion` — scroll animations
- `react-icons` or `@phosphor-icons/react` — social/tech icons
- `clsx` + `tailwind-merge` — for `cn()` utility

**Optional (defer decision):**
- `react-router-dom` — only if site grows beyond single page
- `@shadcn/ui` components — only if site grows beyond landing page
- `react-helmet-async` — for SEO meta tags per page (may not need for SPA)
- `i18next` + `react-i18next` — deferred to v2
- `vitest` + `@testing-library/react` — for tests

### Architecture Approach

**Component tree (proposed):**
```
App
├── Navbar (sticky, links to sections)
├── HeroSection
│   ├── HeroContent (name, tagline, CTAs)
│   └── HeroVisual (photo/code background)
├── AboutSection
│   ├── StoryBlock
│   └── SkillsGrid
├── ProjectsSection
│   ├── ProjectCard (BeepDash)
│   └── ProjectCard (LPS)
├── ContactSection
│   ├── ContactForm (or email link + social links)
│   └── SocialLinks
└── Footer
```

**Data model:**
```typescript
const SITE_DATA = {
  hero: { name, tagline, subTagline, ctas },
  about: { story, skills },
  projects: Project[],
  contact: { email, github, linkedin },
} as const;
```

All content as a single static data object. No API, no CMS, no database. This is a static portfolio — the data IS the source of truth. TypeScript's `as const` ensures full type safety.

### Risks

1. **Design blocked** — Cannot proceed to sdd-design without Figma visual data. The user MUST provide the FIGMA_ACCESS_TOKEN or design screenshots.
2. **Content gaps** — Project descriptions need Diego's input (metrics, outcomes, challenges). Can scaffold with placeholders, but final content must come from Diego.
3. **Scope creep** — Easy to over-engineer a portfolio (blog, CMS, i18n, complex animations). Stay focused: 5 sections, static data, fast delivery.
4. **Image optimization** — Portfolio performance depends heavily on optimized images. Diego needs to provide screenshots, and we need to set up a build-time optimization pipeline (unlikely needed if images are pre-optimized).
5. **Accessibility compliance** — Building from scratch means we own all a11y. Must verify color contrast, keyboard navigation, and screen reader support.
6. **No testing infrastructure** — `vitest` is not installed. For a static portfolio, snapshot tests of components would be sufficient, but we should set up the test runner before implementing.

### Ready for Proposal

**Yes** — with the caveat that the Figma design data is needed before the design phase. We can proceed with:
1. **sdd-propose** — Define scope, approach, and content structure
2. **sdd-spec** — Write delta specs for each section (content requirements)
3. **sdd-design** (blocked until Figma data is available) — Visual implementation details

**Recommendation to user:** Provide the `FIGMA_ACCESS_TOKEN` (set it in your shell via `export FIGMA_ACCESS_TOKEN=...` or use `set -x FIGMA_ACCESS_TOKEN ...` for fish shell). Without it, we can still define the content and structure, but the visual implementation will be based on best practices rather than the selected template.
