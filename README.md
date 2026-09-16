# Gaurav Wagh — Portfolio

Personal engineering portfolio. Single static page, deployed at
[gauravwagh.tech](https://gauravwagh.tech).

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router), React 19 |
| Language | TypeScript (strict) |
| Styling | CSS Modules + design tokens in `app/globals.css` |
| Fonts | Inter + JetBrains Mono, self-hosted via `next/font` |
| Runtime deps | `next`, `react`, `react-dom` — nothing else |

## Getting started

```bash
npm install
npm run dev
```

| Script | Purpose |
|---|---|
| `npm run dev` | Dev server (Turbopack) on :3000 |
| `npm run build` | Production build |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint |

## Structure

```
app/
  globals.css          Design tokens, reset, shared primitives
  layout.tsx           Metadata, fonts, JSON-LD, theme script
  page.tsx             Section composition
  opengraph-image.tsx  Social card, generated at build time
  sitemap.ts robots.ts icon.svg
components/
  layout/              Header, Footer, ThemeScript
  sections/            Hero, About, Experience, Projects, Stack, AlgoLab, Contact
  ui/                  Section, Reveal, FlowDiagram, Icon
data/                  All page content, typed
hooks/                 useActiveSection, useTheme
```

## Editing content

**All copy lives in `data/` — components read it, they don't contain it.**

| File | Contents |
|---|---|
| `data/profile.ts` | Name, role, contact details, links, headline, education, principles |
| `data/experience.ts` | Employment history |
| `data/projects.ts` | Client projects (problem / solution / contribution / workflow) |
| `data/stack.ts` | Technology groups |
| `data/algo.ts` | Algo Lab content and architecture diagrams |

`data/types.ts` defines the shape of each; the build fails if a field is
missing, so content and rendering cannot drift apart.

### Ground rules for content

- Everything on the site must be supported by `public/Gaurav-Wagh-Resume.pdf`.
  No invented projects, metrics, counters or client names.
- Client work is under NDA: no repository links, no screenshots.
- The Algo Lab is a personal side project and is labelled as such. It must
  never carry performance or profitability claims.

## Design system

Tokens are defined once in `app/globals.css` for dark, then overridden for
light under `[data-theme='light']`. Every text/background pair in both themes
is verified at WCAG AA (4.5:1 body, 3:1 large text and focus rings) — re-check
before changing any colour.

Motion is opacity/transform only, wrapped in `prefers-reduced-motion`. The
`Reveal` component starts visible and only hides itself once JavaScript has
confirmed it can reveal again, so content is never lost when scripting fails.

## Configuration

The contact form posts to [Web3Forms](https://web3forms.com). The access key
identifies the destination inbox and is public by design, but it is read from
the environment so it can be rotated without a code change:

```bash
# .env.local
NEXT_PUBLIC_WEB3FORMS_KEY=your-key-here
```

If unset, the committed fallback key is used.

## Deployment

Push to `master`; Vercel builds with zero config. The build is fully static
(`○ prerendered`), so there is no server runtime to provision.
