# AGENTS.md — Personal Portfolio (Nahuel Zeballos)

Single-page personal portfolio. Static marketing/showcase site built with React (Vite) and Tailwind CSS, deployed to Vercel. No backend, no database, no API.

## Project type

- Single-page application (SPA), one route. Sections are anchors on the same page with smooth scroll.
- Static content only. The single piece of runtime state is the UI language (ES/EN) plus mobile-nav open/closed.

## Tech stack

- **Framework:** React 19 via **Vite** (latest stable).
- **Styling:** **Tailwind CSS** (latest stable; confirm Tailwind v4 vs v3 setup against current docs before scaffolding — do not mix the two). All styling is Tailwind utilities. No CSS-in-JS, no component UI framework.
- **i18n:** Lightweight, hand-rolled. A small React Context + a plain translations object. **No i18n library.** Spanish is the default; English is the secondary. Selected language is persisted to `localStorage` and restored on reload.
- **Deploy:** Vercel (Vite framework preset). `vercel.json` lives at the repo root. Custom domain (Namecheap) is documented in the README but optional.
- **Language:** JavaScript + JSX (`.jsx`). TypeScript is not required for this project.

## Architecture & conventions

- **Component-per-section** under `src/components/`:
  - `Navbar` — fixed top nav, all section anchors, language toggle, mobile nav.
  - `Hero` — `#inicio`.
  - `Bio` — `#bio`.
  - `ProjectSection` — **one reusable presentational component, rendered 3×** from a data array. Do NOT create three near-duplicate components.
  - `Contact` — `#contacto`.
- `App.jsx` composes the sections in order. `main.jsx` is the entry point.
- **Data-driven content:** project content lives in a single `projects` data source (array/object) consumed by `ProjectSection`. Visible copy lives in a shared translations dictionary keyed by language.
- **State:** local UI state only (`useState`/Context). No global state manager — adding Redux/Zustand here is overengineering.
- **Global styles:** `index.css` holds Tailwind layers, `scroll-behavior: smooth`, and `section { scroll-margin-top: … }` so anchored sections clear the fixed navbar.

## UI/UX — MANDATORY skill

- The **`/ui-ux-pro-max`** skill is **MANDATORY for every task that touches UI**. Read its `SKILL.md` (`/home/nushey/.agents/skills/ui-ux-pro-max/SKILL.md`, also `~/.claude/skills/ui-ux-pro-max`) BEFORE writing or editing any component, and apply its patterns.
- **Aesthetic = "Minimal moderno":** light theme, generous whitespace, large typography, subtle glassmorphism, soft cards.
- Must be **responsive**, **accessible** (semantic landmarks, focus states, ARIA on the language toggle, sufficient contrast on the light theme), and **respect `prefers-reduced-motion`** for scroll and animations.

## External links

All external links open in a new tab with `rel="noopener noreferrer"`.

## Quality bar

- No hardcoded duplicated section components; reuse `ProjectSection`.
- Every visible string must exist in both ES and EN.
- Confirm library versions via current docs (context7) before locking the toolchain.
