# Repository Guidelines

## Project Structure & Module Organization
The site is an Astro 5 + TypeScript static build. Source lives in `src`; use `src/pages` for routes, `src/layouts` for shared scaffolding, and `src/components` for reusable UI. Campaign data is Markdown/MDX inside `src/content/{company,players,sessions,diary}`, validated by `src/content/config.ts`. Static assets stay in `public/`, builds emit into `dist/`, and contributor notes live in `docs/`.

## Build, Test, and Development Commands
- `npm install` — install dependencies; rerun after package updates.
- `npm run dev` — launch the Astro dev server at http://localhost:4321 with hot reload for `.astro`, `.ts`, and Markdown sources.
- `npm run build` — create the production bundle in `dist/`; fails fast on schema or type violations.
- `npm run preview` — serve the latest build locally to confirm production rendering.
- `npm run astro -- check` — optional static analysis that validates TypeScript and content collections before committing.

## Coding Style & Naming Conventions
Astro, TypeScript, and Markdown keep tab indentation; let the default formatter control quotes and trailing commas. Name Astro components and helpers in PascalCase, with props types `Props` or `FeatureProps`. Derive slugs from filenames in lowercase-kebab, keep frontmatter keys (`title`, `session`, `published`) in English, and deliver reader-facing copy in Russian. Promote repeated blocks into `src/components/` before reusing them.

## Testing Guidelines
There is no dedicated test runner; rely on Astro’s build pipeline. Run `npm run build` before pushing so content schemas and Markdown frontmatter validate. Smoke-test `/`, `/sessions/`, `/players/`, and `/diary/lasm/` in dev or preview to check navigation, theme toggle, and skip links. Keep dates in `YYYY-MM-DD`, ensure `published` flags are correct, and grab screenshots when layout tokens change.

## Commit & Pull Request Guidelines
History is minimal, so stick to concise, imperative commit subjects like `Add session 14 summary` or `Refine hero highlight spacing`. Bundle related content edits together and mention impacted collections. PR descriptions should outline intent, list touched directories, link issues when they exist, and include screenshots for visual tweaks. Call out follow-up steps such as “run npm install” or “rebuild content”.

## Content Authoring Tips
Review `docs/content.md`, `docs/pages.md`, and `docs/workflow.md` before editing—they capture voice, taxonomy, and publishing flow. Keep narrative text in Russian to match the existing tone. Add concise summaries in the opening paragraph so cards and teasers populate correctly. Use frontmatter arrays (`players`, `tags`) consistently and preview drafts locally before flipping `published` to `true`.
