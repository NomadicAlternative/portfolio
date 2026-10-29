# Proposal: Portfolio Website

## Intent

Replace the Vite boilerplate with a polished, content-rich developer portfolio that positions Diego Garcia as an IoT + full-stack engineer. The Figma template is a starting point — the site must feel custom, not generic.

## Scope

### In Scope
- 7 content sections: NavBar, Hero, About (visual timeline), Skills (icon matrix), Projects (screenshot cards), How I Work (process pipeline), Contact (link-only), Footer (stack icons)
- Dark theme (#000000 bg, #FFFFFF text, Inter font) with one accent color (electric blue)
- Framer Motion scroll-triggered section reveals
- English + Spanish via i18next (lazy-loaded namespaces)
- Responsive layout (mobile-first, max-w container)
- Static data model (`SITE_DATA as const`) — no API, no CMS, no DB

### Out of Scope
- Blog, CMS, admin panel
- Contact form (links only: GitHub, LinkedIn, email)
- WebP build-time optimization pipeline (images pre-optimized manually)
- vitest/test infrastructure (set up post-v1)
- Deployment config (CI/CD, hosting)

## Capabilities

### New Capabilities
- `layout`: NavBar (sticky), Footer, dark theme with manual toggle, responsive container shell, Inter font loading
- `hero`: Tagline, stack badges, CTA buttons, subtle entrance animation
- `about`: Visual timeline (Electronics → IoT → BYU → BeepDash/LPS), bio text, scannable in 5s
- `skills`: Matrix grouped by category (Frontend, Backend, IoT/Firmware) with tech icons
- `projects`: BeepDash + LPS cards with screenshots, stack badges, demo/code links
- `how-i-work`: Spec → Design → Review → Ship pipeline visualization, AI-assisted workflow
- `contact`: GitHub, LinkedIn, email links — minimal, no form
- `i18n`: English/Spanish via i18next + react-i18next, lazy-loaded JSON namespaces

### Modified Capabilities
None — greenfield. No existing specs.

## Approach

Build from scratch with Tailwind CSS 4 (no component library). Single static data object (`SITE_DATA as const`) drives all content. Framer Motion for subtle scroll reveals. i18next with namespace splitting for section-level lazy loading. React 19 patterns throughout — no `useMemo`/`useCallback` (Compiler handles it), `ref` as prop, named imports only.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/` | Replaced | All Vite boilerplate removed; full component tree added |
| `src/data/` | New | Static content in EN/ES JSON namespaces |
| `src/i18n/` | New | i18next config, language detector, namespace loader |
| `public/` | Modified | Placeholder assets replaced with portfolio screenshots |
| `package.json` | Modified | Add framer-motion, i18next, react-i18next, react-icons, clsx, tailwind-merge |
| `index.html` | Modified | Title, meta tags, Inter font link, flash-prevention inline script |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| i18n scope creep | Medium | Strict 2-language limit, section-level granularity only |
| Content gaps (project metrics) | Medium | Scaffold with "TBD" placeholders; Diego fills in |
| Image loading perf | Low | Manual WebP optimization, lazy loading, fixed dimensions |
| Over-animation | Low | Fade-up only, `motion/react` lightweight entry, no layout animations |

## Rollback Plan

Delete all new `src/` directories and components. Revert `package.json` to scaffold state (`git checkout package.json`). Remove added dependencies (`npm uninstall`). The scaffold `App.tsx`/`App.css`/`index.css` can be restored from `git show <initial-commit>`.

## Dependencies

- User provides: project screenshots (WebP, 1200px max), LinkedIn URL, email address
- Design system confirmed: #000000 bg, #FFFFFF text, Inter 400/500/700, 12/16/20/32px sizes

## Success Criteria

- [ ] All 7 sections render with real content (no lorem ipsum)
- [ ] Dark theme toggle works, persists in localStorage, no flash
- [ ] i18n switches EN↔ES with no page reload
- [ ] Lighthouse ≥ 90 (Performance, Accessibility, Best Practices)
- [ ] `npm run build` succeeds with zero TS errors
- [ ] Responsive: mobile (320px), tablet (768px), desktop (1280px)
