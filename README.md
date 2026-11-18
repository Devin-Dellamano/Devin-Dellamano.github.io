# Devin Dellamano Portfolio

React, TypeScript, and Vite portfolio using React Router HashRouter for GitHub Pages. Work remains local for review.

## Run and validate

Use a current Node.js release supported by Vite 8.

```sh
npm install
npm run dev
npm run build
npm run lint
npm run preview
```

PowerShell with script restrictions can use `npm.cmd` instead of `npm`. Production files are written to `dist/`. Root GitHub Pages hosting uses the default Vite base. For a repository subdirectory, configure `base` in `vite.config.ts` and adjust public asset URLs accordingly. Hash routes need no server rewrites. No backend, API keys, analytics, or paid services are required.

## Maintain the portfolio

- `src/data/portfolio.ts` holds projects, skills, experience, resume configuration, and contact details.
- `src/types/` defines typed project and resume data.
- `src/components/` holds reusable project cards, skill groups, headings, button links, and experience entries.
- `src/pages/` contains pages and project details.
- `src/layouts/` holds navigation, footer, route titles, and focus handling.
- `src/hooks/` manages theme state and guarded localStorage persistence.
- `src/styles/` holds CSS variables, responsive layouts, and reduced-motion handling.
- `src/assets/` is available for imported assets. `public/` supports stable downloadable files.

Add a project with a unique slug to the typed projects array. Optional `screenshots` takes source and descriptive alt text. `videos` takes video URLs and titles. `buildUrl` and `repositoryUrl` render when supplied. Add only actual project media.

Place PDFs in `public/resumes/` and set each resume's `filename` in `src/data/portfolio.ts`. Keep `qualifications`, `pageCount`, and the fixed `lastUpdated` month (`YYYY-MM`) current when replacing a document. `ResumeCard` builds view and download URLs using Vite's `BASE_URL`, supporting root and repository-subdirectory hosting.

Maintain the professional email, LinkedIn URL, general location, and professional interests in the typed `contact` configuration in `src/data/portfolio.ts`. Contact cards reuse these values. Copy Email announces successful copies and provides manual-copy guidance when clipboard access is unavailable or denied.

## Pending content and review

Actual screenshots, gameplay videos, and playable builds await supplied assets or confirmed information. Rune-game design goals are identified separately from confirmed development activity. Employer-specific accomplishments are limited to supplied details.

Review keyboard navigation, mobile Menu and Escape handling, project detail routes, and both themes before publication. System theme is used on the first visit, with manual selection persisted when storage is available. No commit, push, or deployment was performed.

## Validation results

Production build and ESLint passed. The local server returned HTTP 200. Browser automation was unavailable during implementation, so visual light/dark and responsive verification remains pending.

## Formatting

Run `npm run format` to format supported project files and `npm run format:check` to verify formatting without changing files. Prettier uses two-space indentation, single quotes in JavaScript and TypeScript, no statement semicolons, and LF line endings. Generated output, installed dependencies, and the npm-managed lockfile are excluded.

Each page lives in its own file under `src/pages/`. Shared UI components live in individual files under `src/components/`, including `PageIntro`, `Header`, `Footer`, and `ThemeToggle`. Navigation links are configured in `src/data/navigation.ts`; portfolio content remains in `src/data/portfolio.ts`.
