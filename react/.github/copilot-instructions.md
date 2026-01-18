## Purpose

This repo is a Vite + React single-page application (SPA) with client-side routing, lazy-loaded pages, and light-weight data served from a JSON file. The goal of this file is to give an AI coding agent the minimal, actionable context needed to make meaningful code changes quickly.

## Quick start (commands)

- Run dev server: `npm run dev` (starts Vite with HMR)
- Build production: `npm run build`
- Preview production build: `npm run preview`
- Lint: `npm run lint`
- Local JSON API: `npm run server` (runs `json-server --watch ./data/db.json --port 4000`)

## Big-picture architecture

- App bootstrap: `src/main.jsx` mounts the app, wraps it with `QueryClientProvider` (react-query), `ErrorBoundary`, and `BrowserRouter`.
- Routing & lazy-loading: `src/App.jsx` defines routes using `react-router` and `React.lazy` for pages in `src/pages/*`. Navigation is enhanced with the View Transitions API (see the navigation interception in `src/App.jsx`).
- Pages vs Components: High-level pages live in `src/pages/`; reusable UI sections live in `src/components/` and `src/components/solutions/`.
- Assets: Static assets and the JSON data live in `public/` (e.g. `public/data/db.json`); images and icons live under `src/assets/`.

## Important conventions & patterns

- Path alias: `@` resolves to `src` (configured in `vite.config.js`). Example: `import Header from "@/Header.jsx"`.
- Error handling: App-level errors use `react-error-boundary`. The fallback component is `src/components/Error.jsx`.
- Data fetching: `@tanstack/react-query` is available and used for async data. Prefer using query hooks rather than ad-hoc fetches when adding new data-layer code.
- Code-splitting: Pages are lazy-loaded with `React.lazy` + `Suspense` + a `Loader` component (`src/components/Loader.jsx`). Follow the same pattern for large route-level components.
- SVGs: `vite-plugin-svgr` is enabled; import SVGs as React components when appropriate.
- Styling: TailwindCSS is used (see `tailwindcss` plugin in `package.json` and `src/App.css`). Keep utility classes concise and prefer component-level classes where readability suffers.

## Integration points & gotchas

- JSON server: `package.json` exposes a `server` script but it points to `public/data/db.json`.
- View Transitions: `src/App.jsx` intercepts link clicks to use `document.startViewTransition`. When editing navigation or link markup, ensure same-origin links remain standard `<a href="/path/">` so the interception works.

## Files to inspect for context

- App bootstrap & routing: `src/main.jsx`, `src/App.jsx`
- Header/Footer/Global layout: `src/Header.jsx`, `src/Footer.jsx`, `src/Logo.jsx`
- Pages: `src/pages/*` (e.g. `src/pages/Home.jsx`, `src/pages/Solutions.jsx`)
- Reusable UI: `src/components/*` (sections, loaders, error fallback)
- Vite config & alias: `vite.config.js`
- Local API data: `public/data/db.json`

## Editing guidelines for AI agents

- Keep changes minimal and preserve existing component exports/props unless a refactor is requested.
- Use the `@` alias for imports inside `src` to maintain consistency.
- For routing or large UI changes, prefer adding a new lazy-loaded page under `src/pages/` and register it in `src/App.jsx` following the existing `React.lazy` + `Suspense` pattern.
- When adding data endpoints for local development, prefer updating `public/data/db.json` and the `server` script accordingly.

If anything here is unclear or you want this file expanded with examples (common PR templates, test commands, or code style rules), tell me which area to expand.
