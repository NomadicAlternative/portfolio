# Design: Portfolio Website

## Technical Approach

Static single-page portfolio. No router, no API, no DB. Content lives in i18next JSON namespaces (one per section, lazy-loaded). Framer Motion handles scroll-triggered fade-up reveals. Tailwind CSS 4 `dark:` class strategy for theming with `localStorage` persistence and flash-prevention inline script. Mobile-first responsive via Tailwind breakpoints. React 19 patterns: `ref` as prop, named imports only, no `useMemo`/`useCallback` (Compiler handles it).

## Architecture Decisions

| Decision | Options | Tradeoff | Choice |
|----------|---------|----------|--------|
| **i18n** | i18next vs react-intl | i18next: namespace lazy-loading, browser detection, 10KB gzip. react-intl: ICU message format but heavier. | **i18next** + `react-i18next` + `i18next-browser-languagedetector` |
| **Namespace split** | Single file vs per-section | One file: simpler but 100% upfront load. Per-section: only loads visible content, better Lighthouse. | **Per-section** — `hero`, `about`, `skills`, `projects`, `howIWork`, `contact` |
| **Animations** | Framer Motion vs CSS-only | FM (`motion/react`): 5KB, `useInView` built-in, declarative variants. CSS: limited to mount transitions. | **Framer Motion** — `motion.div` + `variants` + `useInView`, no layout animations |
| **Dark mode** | Class strategy vs `prefers-color-scheme` only | Class: user toggle + persistence. Media query: no toggle control. | **Class strategy** — `<html class="dark">`, inline `<script>` blocking flash |
| **Icons** | react-icons vs lucide-react | react-icons: Simple Icons for tech stack + Feather for UI. lucide-react: consistent set but no tech brand icons. | **react-icons** (`si` + `fi` subsets, tree-shakeable) |
| **i18n default locale** | English vs Spanish | Diego's primary audience may be LatAm; proposal says nav language detection falls back to `es`. | **Spanish** (`fallbackLng: 'es'`) — matches browser-detection fallback spec |

## Data Model

Content lives in i18next resource JSON, not TypeScript. Single schema constrains shape:

```typescript
// Ensures both en.json and es.json have identical structure
interface SiteContent {
  hero: { tagline: string; stackBadges: string[]; cta: { github: string; linkedin: string } };
  about: { timeline: Array<{ years: string; title: string; description: string }> };
  skills: { categories: Array<{ name: string; items: Array<{ name: string; icon: string }> }> };
  projects: Array<{ title: string; description: string; stack: string[]; image: string; links: { github: string; demo: string } }>;
  howIWork: Array<{ step: string; icon: string; description: string }>;
  contact: Array<{ type: "github" | "linkedin" | "email"; url: string; label: string }>;
}
```

## Component Tree

```
src/
├── data/                        # i18next resource JSON (en.json, es.json)
├── i18n/                        # index.ts (init) + request.ts (lazy loader)
├── components/
│   ├── layout/
│   │   ├── NavBar.tsx           # Sticky, hamburger <768px, anchor links
│   │   ├── Footer.tsx           # Tech icon row + copyright
│   │   ├── ThemeToggle.tsx      # Sun/Moon toggle, localStorage
│   │   └── LangSwitcher.tsx     # EN/ES toggle, i18n.changeLanguage()
│   ├── sections/
│   │   ├── Hero.tsx             # Tagline, badges, CTA, photo placeholder
│   │   ├── About.tsx            # 4-node vertical timeline
│   │   ├── Timeline.tsx         # Reusable: node + accent connector line
│   │   ├── Skills.tsx           # 3-category grid, no progress bars
│   │   ├── Projects.tsx         # 2-column project card grid
│   │   ├── ProjectCard.tsx      # Screenshot, stack badges, links
│   │   ├── HowIWork.tsx         # 4-step horizontal pipeline
│   │   └── Contact.tsx          # 3 icon links (GitHub, LinkedIn, email)
│   └── ui/
│       └── SectionHeading.tsx   # Reusable h2 + accent underline
├── App.tsx                      # Single-page: wraps sections in <main>
├── main.tsx                     # Entry: createRoot + i18next provider
└── index.css                    # @import "tailwindcss"; dark vars, Inter
```

## Route Design

No router. Anchor-based navigation: `<a href="#about">`. Each `<section>` has matching `id`. `scroll-behavior: smooth` on `<html>` handles transition. NavBar links scroll to sections; hamburger menu on mobile (<768px).

## Testing Strategy

Out of scope for v1 (per proposal). Post-v1: vitest + React Testing Library for unit/integration; Playwright for visual regression on 3 breakpoints.

## Migration / Rollout

Greenfield — no migration. Rollback: delete `src/components/`, `src/data/`, `src/i18n/`; revert 5 existing files to scaffold state; `npm uninstall` 6 added deps.

## Open Questions

None.
