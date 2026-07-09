# Maya Fourteen — Website (Astro)

Astro rebuild of the Maya Fourteen site. The plain-HTML version at
`../Website` is the frozen visual and functional reference for this
migration — it is not modified as part of this project.

## Why Astro

The reference project is two static HTML files (`index.html`,
`page-en.html`) fronted by a Cloudflare Worker (`worker.js`) that injects
JSON-LD schema and serves `/press` and `/sitemap.xml`, deployed to
Cloudflare Pages. Astro was chosen to introduce componentization and
maintainability without changing that deployment shape:

- Astro compiles to plain static HTML/CSS with zero client-side JS by
  default — output stays a static site Cloudflare Pages can serve as-is.
- No Cloudflare adapter/SSR runtime is needed (`output: 'static'` in
  `astro.config.mjs`), so `worker.js` keeps fronting Pages exactly as it
  does today — nothing about the Worker/Pages relationship changes.
- `build.format: 'file'` in `astro.config.mjs` makes Astro emit
  `page-en.html` / `index.html` instead of pretty-URL directories, so
  routes match the reference project's file names and every existing
  external link (social profiles, gamma.site EPKs, `worker.js`'s own
  `href="/press"` injection) keeps working unmodified.

## Structure

```
src/
  components/   reusable .astro components (one concept per file)
  layouts/      shared page shells (head/meta/fonts, common wrappers)
  pages/        file-based routes -> index.html, page-en.html
  data/         small content files (e.g. nav links) so content edits
                don't require touching markup
  styles/       shared CSS (tokens, global rules)
public/
  images/       hero/background images served as-is (no processing)
  icons/        favicon and any static icon files
  fonts/        self-hosted font files, if/when fonts are self-hosted
  favicon.ico
worker.js        Cloudflare Worker — same role as the reference project
wrangler.toml    Worker config (account_id intentionally blank; fill in
                 only when actually deploying)
```

## Commands

| Command           | Action                                       |
|-------------------|-----------------------------------------------|
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Start local dev server                        |
| `npm run build`   | Build static output to `dist/`                |
| `npm run preview` | Preview the production build locally          |

## Status

Scaffold only. No deployment, Cloudflare, or GitHub action has been taken
as part of building this project — see project conventions before doing
any of those.
