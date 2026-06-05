# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev              # Start Vite dev server (localhost:5173) — serves index.html + playground.html
npm run storybook        # Start Storybook (localhost:6006)
npm run build-storybook  # Build Storybook to storybook-static/
npm run build-components # Build React components as IIFE bundle to dist/
npx vitest --project=storybook run  # Run all Storybook component tests
```

## Architecture

This repo has two distinct layers that coexist:

### 1. Static Vanilla JS Playbook (`index.html`)
The primary deliverable. A single-file vanilla HTML/CSS/JS app with no build step. All UI, routing, and interactivity is self-contained in `index.html` + `tokens.css` + `script.js`.

- **Navigation**: `showPage(pageId)` controls which `.page` div is visible. `switchCat(category)` switches the topbar category and re-renders the sidebar via `renderSidebar()`.
- **Sidebar**: Dynamically rendered from `sidebarConfig` object in the script block. Each category maps to an array of page items.
- **Design tokens**: All colors, spacing, typography live in `tokens.css` as CSS custom properties. The inline `<style>` in `index.html` extends these for component-specific styles.
- **Interactive previews**: Each UI pattern page has a `.preview-box` with vanilla JS animations/interactions. Stateful functions like `cotReplay()`, `runTyping()`, `pgSetState()` control them.

### 2. React Component Library (`src/`)
A separate React/Vite layer for Storybook documentation and a compiled component bundle.

- `src/components/` — React components (Button, FeedbackBar, AIThinking, ResponseLabel, PromptChip, ClarificationCard). Each has `.jsx`, `.css`, and `.stories.jsx`.
- `src/theme/theme.js` — Mantine theme using the same greyscale tokens as `tokens.css`.
- `src/index.jsx` — Entry point that exports all components globally via `window.PlaybookComponents` and `window.mountComponent()`.
- `vite.config.build.js` — Builds the IIFE bundle to `dist/components.iife.js` + `dist/components.css` for use directly in `index.html`.

### 3. Playground (`playground.html`)
Standalone HTML page embedding the ShipStation AI surface interaction demo. Contains a React app (via CDN React) with a left rail for use case selection and a right panel showing scripted AI responses. The surface interaction demo lives in `surface_interaction.html`.

### 4. GitHub Pages Deployment
`.github/workflows/deploy.yml` builds Storybook and assembles `_site/` by copying static files + `storybook-static/` into `storybook/` subdirectory. Deployed to `https://quyennguyen-star.github.io/response-playbook-ai/`.

## Product Knowledge

Before making changes to the playground or any AI pattern pages, read the relevant files in `docs/shippy-playbook/` and treat them as the source of truth for how Shippy should behave. If a request conflicts with the playbook (wrong pattern, missing guardrail, incorrect response structure), flag it before making changes.

- `principles.md` — 4 core principles that govern every AI response
- `response-patterns.md` — Assist / Insight / Configure definitions and use case mapping
- `guardrails.md` — Clarification, Capability Boundary, and Escalation rules
- `ui-patterns.md` — When and how to use each UI component
- `playground-rules.md` — Use case format and how to add new playground scenarios
- `examples.md` — Canonical scripted examples

When editing any playbook guideline, pattern, guardrail, UI pattern, example, or playground rule, update **both** the visible UI in `index.html` / `playground.html` **and** the corresponding markdown file in `docs/shippy-playbook/` so they stay in sync.

## Key Conventions

- **Adding a new UI pattern page**: Add to `sidebarConfig['ui-patterns']` array in the script block, add `pageToCategory` mapping, create the page div with `id="page-<name>"`, add CSS to the `<style>` block.
- **Design tokens**: Use `var(--token-name)` from `tokens.css`. The `--indigo-950` is the primary action color; `--grey-950` is primary text.
- **Preview boxes**: Use `class="preview-box"` for all interactive previews — this gives the grey dotted background with centered content and `min-height: 300px`.
- **Replay buttons**: Positioned `absolute` at `top: var(--space-4); right: var(--space-4)` inside `.preview-box`. Use the standard replay SVG icon pattern.
