# Tasks: Portfolio Website

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~1,200–1,400 |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | PR 1 (Foundation) → PR 2 (Theme+Layout) → PR 3 (Sections) → PR 4 (Polish) |
| Delivery strategy | auto-chain |
| Chain strategy | feature-branch-chain |

Decision needed before apply: Yes
Chained PRs recommended: Yes
Chain strategy: feature-branch-chain
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Foundation (deps, i18n, locale, meta) | PR 1 | base = feature/portfolio-website; ~295 lines |
| 2 | Theme system + layout shell | PR 2 | base = PR 1 branch; ~220 lines |
| 3 | All 6 content sections (Hero→Contact) | PR 3 | base = PR 2 branch; ~470 lines — split into 2 PRs if needed |
| 4 | LangSwitcher + ES + App.tsx + perf | PR 4 | base = PR 3 branch; ~300 lines |

## Phase 1 — Foundation

- [x] 1.1 Install 7 deps: framer-motion, i18next, react-i18next, i18next-browser-languagedetector, react-icons, clsx, tailwind-merge (package.json). **Spec**: i18n, layout.
- [x] 1.2 Create i18n init + lazy namespace loader (src/i18n/index.ts, request.ts). **Spec**: i18n.
- [x] 1.3 Create en.json + es.json with all 6 section namespaces (src/data/en.json, src/data/es.json). **Spec**: i18n.
- [x] 1.4 Update index.html — Inter font 400/500/700, meta tags, flash-prevention inline script. **Spec**: layout.
- [x] 1.5 Replace index.css — @import "tailwindcss", dark CSS vars, Inter family, scroll-behavior smooth. **Spec**: layout.
- [x] 1.6 Update main.tsx — wrap <App> with I18nextProvider. **Spec**: i18n.
- [x] 1.7 Create cn() utility — clsx + twMerge helper (src/lib/cn.ts).

## Phase 2 — Theme + Layout Shell

- [x] 2.1 Create ThemeToggle — sun/moon icons, localStorage persistence, dark class on <html>, zero flash (src/components/layout/ThemeToggle.tsx). **Spec**: layout.
- [x] 2.2 Create NavBar — sticky top, anchor links (#hero|#about|…), mobile hamburger <768px, dark-aware glass bg (src/components/layout/NavBar.tsx). **Spec**: layout.
- [x] 2.3 Create Footer — tech icon row (react-icons/si), copyright, dark-aware border (src/components/layout/Footer.tsx). **Spec**: layout.
- [x] 2.4 Create SectionHeading — reusable h2 + electric-blue accent underline (src/components/ui/SectionHeading.tsx). **Spec**: all sections.

## Phase 3 — Content Sections

- [x] 3.1 Create Hero — tagline (32px/700), 8 stack badges, 2 CTA buttons (GitHub/LinkedIn), fade-up Framer Motion animation, photo placeholder (src/components/sections/Hero.tsx). **Spec**: hero.
- [x] 3.2 Create Timeline — reusable node + accent connector line, responsive vertical (src/components/sections/Timeline.tsx). **Spec**: about.
- [x] 3.3 Create About — 4-node vertical timeline (2014→2017→2020→2024), bio text, scannable in 5s (src/components/sections/About.tsx). **Spec**: about.
- [x] 3.4 Create Skills — 3-category grid (Frontend/Backend/IoT), icon+label per tech, no progress bars (src/components/sections/Skills.tsx). **Spec**: skills.
- [x] 3.5 Create ProjectCard — screenshot WebP (lazy), stack badges, GitHub/demo links, fixed ratio (src/components/sections/ProjectCard.tsx). **Spec**: projects.
- [x] 3.6 Create Projects — 2-column grid with BeepDash + LPS cards (src/components/sections/Projects.tsx). **Spec**: projects.
- [x] 3.7 Create HowIWork — 4-step horizontal pipeline (Spec→Design→Review→Ship), connection lines, responsive vertical (src/components/sections/HowIWork.tsx). **Spec**: how-i-work.
- [x] 3.8 Create Contact — 3 icon links (GitHub, LinkedIn, email), no form or inputs (src/components/sections/Contact.tsx). **Spec**: contact.

## Phase 4 — Polish & Integration

- [x] 4.1 Create LangSwitcher — EN/ES toggle in NavBar, calls i18n.changeLanguage() (src/components/layout/LangSwitcher.tsx). **Spec**: i18n.
- [x] 4.2 Create es.json — placeholder structure matching en.json (src/data/es.json). Full Spanish translations deferred to PR 4. **Spec**: i18n.
- [x] 4.3 Replace App.tsx — single-page assembly: NavBar + 7 sections + Footer, each section wrapped in motion.div with fade-up. **Spec**: layout.
- [x] 4.4 Optimize images — lazy loading, fixed aspect-ratio containers, WebP for project screenshots in public/. **Spec**: projects.
