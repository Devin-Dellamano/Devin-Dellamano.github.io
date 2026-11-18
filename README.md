# Devin Dellamano Portfolio

React, TypeScript, and Vite portfolio using React Router HashRouter and GitHub Actions for GitHub Pages deployment.

## Run and validate

Use Node.js 26, matching the deployment workflow and the installed Vite and ESLint requirements.

```sh
npm ci
npm run dev
npm run build
npm run lint
npm run preview
```

PowerShell with script restrictions can use `npm.cmd` instead of `npm`. Production files are written to `dist/`. Root GitHub Pages hosting uses the explicit `/` base in `vite.config.ts`. For a repository subdirectory, configure `base` in `vite.config.ts` and adjust public asset URLs accordingly. Hash routes need no server rewrites. No backend, API keys, analytics, or paid services are required.

## GitHub Pages deployment

Production is served at https://devin-dellamano.github.io/. The source `index.html` imports `/src/main.tsx` for Vite development. Publishing the repository root directly serves unbuilt TypeScript instead of the compiled application and can produce a blank page. `npm run build` generates a production `dist/index.html` referencing bundled JavaScript and CSS under `dist/assets/`.

The workflow in `.github/workflows/deploy.yml` runs on pushes to `main` and supports manual runs through `workflow_dispatch`. Its build job uses Node.js 26, installs `package-lock.json` dependencies with `npm ci`, checks formatting and lint, builds the site, and uploads only `dist/` with the official Pages artifact action. A dependent deployment job publishes that artifact with `pages: write` and `id-token: write` permissions. Deployments are serialized so an active deployment can finish. Actions are pinned to verified release commits.

To activate deployment in `Devin-Dellamano/Devin-Dellamano.github.io`:

1. Open repository **Settings → Pages** and select **GitHub Actions** under **Build and deployment → Source**.
2. Ensure GitHub Actions is enabled in **Settings → Actions → General** and repository or organization action policies permit the official `actions/*` actions used by the workflow.
3. Review and commit the local changes, including the workflow, `package-lock.json`, website source, and both files in `public/resumes/`, then push to `main` when ready. The push starts the workflow.
4. For manual deployment after the workflow is on `main`, open **Actions → Deploy portfolio to GitHub Pages → Run workflow** and select `main`.
5. Check the build and deploy jobs. If the `github-pages` environment has required reviewers, approve the pending deployment. If it has branch restrictions, allow `main`.
6. Open the production URL after the deployment succeeds. If a previously blank page is cached, reload it with the browser cache bypassed.

The workflow uses GitHub's built-in token. Deployment settings are configured on GitHub; creating the workflow locally does not activate or run it. `dist/` is generated and ignored by Git, and the workflow builds it from source for every deployment.

## Production routes and assets

HashRouter keeps the route after `#`, so page refreshes and copied direct links request the same root HTML document from GitHub Pages. Use these production URLs:

- Home at `https://devin-dellamano.github.io/`
- About at `https://devin-dellamano.github.io/#/about`
- Projects at `https://devin-dellamano.github.io/#/projects`
- Experience at `https://devin-dellamano.github.io/#/experience`
- Resumes at `https://devin-dellamano.github.io/#/resumes`
- Contact at `https://devin-dellamano.github.io/#/contact`
- Project details at `https://devin-dellamano.github.io/#/projects/<slug>`

Current project slugs are `mulysa`, `missile-barrage`, and `rune-multiplayer`. Employer jump links stay within the Experience hash route. Share URLs containing `/#/` for application pages.

Vite bundles imported source assets and copies `public/` into the root of `dist/`. Resume links use `import.meta.env.BASE_URL`, which resolves to `/` for this user website. Both PDF filenames retain their case and descriptive names. Typography uses local font fallbacks, icons are inline SVG or public SVG assets, and stylesheets are bundled by Vite.

Validate the production build locally before deployment:

```sh
npm run format:check
npm run lint
npm run build
npm run preview
```

Use the preview server's printed URL and append the same hash routes listed above. Confirm both resume PDFs open under `/resumes/` and the Network panel shows compiled `/assets/` scripts and styles loading successfully. The production HTML should reference `/assets/` JavaScript rather than `/src/main.tsx`.

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

Formatting, ESLint, and production build checks passed on Node.js 26. All six pages and three current project routes rendered in programmatic checks. Vite preview served the production HTML, bundled JavaScript and CSS, public SVG assets, and both resume PDFs successfully, with source/build asset hashes matching. Direct hash-route requests returned the same root document. Browser automation was unavailable, so interactive browser and visual verification remain pending. The GitHub-hosted workflow will run after the reviewed changes are pushed and Pages uses GitHub Actions.

## Formatting

Run `npm run format` to format supported project files and `npm run format:check` to verify formatting without changing files. Prettier uses two-space indentation, single quotes in JavaScript and TypeScript, no statement semicolons, and LF line endings. Generated output, installed dependencies, and the npm-managed lockfile are excluded.

Each page lives in its own file under `src/pages/`. Shared UI components live in individual files under `src/components/`, including `PageIntro`, `Header`, `Footer`, and `ThemeToggle`. Navigation links are configured in `src/data/navigation.ts`; portfolio content remains in `src/data/portfolio.ts`.
