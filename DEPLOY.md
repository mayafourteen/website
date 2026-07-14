# DEPLOY.md — V3 cutover

Deploy prep for promoting the `/v3/` prototype to the production root. This
document is planning only: nothing described here has been executed against
production, and none of it changes current production behavior. It exists so
the actual cutover can be done deliberately, in order, without guessing.

## 1. What "cutover" means

Today, `/v3/*` is a `noindex, nofollow` preview living alongside the real
site. Cutover means:

1. Moving every `src/pages/v3/*.astro` file to the equivalent root path
   (dropping the `/v3` prefix).
2. Repointing `src/layouts/V3*.astro` and `src/components/v3/*` /
   `src/data/v3/*` back to being *the* layouts/components/data (either by
   renaming them back to the plain names the production files currently use,
   or by updating production's `src/pages/*.astro` to import the V3 versions
   and retiring the old ones — either works; pick whichever produces a
   smaller diff at the time).
3. Removing the `<meta name="robots" content="noindex, nofollow">` tag and
   the `noindex, nofollow` `robots` meta values (three occurrences right now:
   `V3HomeLayout.astro`, `V3InteriorLayout.astro`, `v3/index.astro`) so the
   real site is indexable again.
4. Retiring `/v2/*` and `/v2-legacy/*` (or leaving them in place but
   confirming they still carry their own `noindex, nofollow` — check before
   deleting anything, since `Website/` and this whole migration history is
   the reference record of how the site got here).
5. Adding the redirects below so no external link or bookmark 404s.
6. Re-running `@astrojs/sitemap` (automatic on build) and confirming the
   generated sitemap only lists the new root routes, not `/v2/`, `/v2-legacy/`
   or stale `/v3/` paths.

None of this is done yet. This file is the checklist for when it happens.

## 2. Route map: `/v3/*` → root

| Current (`/v3/…`) | Becomes (root) | Notes |
|---|---|---|
| `/v3` | `/` | language-detect redirect page |
| `/v3/page-en` | `/page-en` | |
| `/v3/page-pt` | `/page-pt` | |
| `/v3/page-es` | `/page-es` | still points at its own gamma.site EPK link — ES interior pages were explicitly deferred, see §5 |
| `/v3/about` | `/about` | **new root path** — production has no `/about` today |
| `/v3/about-pt` | `/about-pt` | **new root path** |
| `/v3/press` | `/press` | **replaces** the current production `/press.astro` — different content structure (V3's `pressItems.js` vs. production's inline array), same 8 outlets |
| `/v3/press-pt` | `/press-pt` | **new root path** — production has no PT press page today |
| `/v3/audio-sets` | `/audio-sets` | **new root path** |
| `/v3/audio-sets-pt` | `/audio-sets-pt` | **new root path** |
| `/v3/video-sets` | `/video-sets` | **new root path** — 4 embedded curated sets |
| `/v3/video-sets-pt` | `/video-sets-pt` | same |
| `/v3/book` | `/book` | **new root path** |
| `/v3/book-pt` | `/book-pt` | **new root path** |
| `/v3/epk` | `/epk` | **new root path**, replaces the gamma.site EPK link on the English homepage; includes a featured SoundCloud track |
| `/v3/epk-pt` | `/epk-pt` | same |

`/v3/press` colliding with the existing `/press` is the one genuinely
destructive step in this list — confirm that's intended (retiring the old
press page's content/structure) before cutover, not an oversight.

## 3. Redirects (301), documentation only

These are **not implemented** anywhere yet (no `_redirects` file, no Worker
routes, no Cloudflare Pages config). Listed here as the map to implement at
actual cutover time, via whichever mechanism Cloudflare Pages is using at
that point (a `public/_redirects` file is the simplest for Pages).

**From today's production paths** (mostly unchanged, listed for completeness):

```
/            ->  /            (content swaps to new design, path unchanged)
/page-en     ->  /page-en     (content swaps, path unchanged)
/page-pt     ->  /page-pt     (content swaps, path unchanged)
/page-es     ->  /page-es     (content swaps, path unchanged)
/press       ->  /press       (content swaps, path unchanged — see §2 note)
```

**From `/v2/*` (the frozen prototype) to their root equivalents:**

```
/v2              ->  /
/v2/page-en      ->  /page-en
/v2/page-pt      ->  /page-pt
/v2/page-es      ->  /page-es
/v2/about        ->  /about
/v2/press        ->  /press
/v2/audio-sets   ->  /audio-sets
/v2/video-sets   ->  /video-sets
/v2/book         ->  /book
```

**From `/v2-legacy/*` (already-archived older prototype):**

```
/v2-legacy/page-en  ->  /page-en
/v2-legacy/page-pt  ->  /page-pt
/v2-legacy/page-es  ->  /page-es
```

Low priority — these were never a public production URL, so there's likely
nothing external linking to them, but redirecting costs nothing.

**Not redirected:** `/v3/epk` and `/v3/audio-sets` etc. themselves become the
new root paths per §2, so no redirect is needed for those — the file move
*is* the migration.

## 4. Sitemap and robots.txt

- No static `public/robots.txt` exists today — the site relies entirely on
  per-page `<meta name="robots">` tags. Confirm whether a real
  `robots.txt` is wanted at cutover (pointing at the sitemap) or whether the
  meta-tag-only approach continues.
- `@astrojs/sitemap` runs automatically on every `npm run build` using
  `site: 'https://mayafourteen.com'` from `astro.config.mjs` — it will
  include *whatever pages exist under `src/pages/` at build time*. This means
  the sitemap is only correct at cutover if `/v2/`, `/v2-legacy/`, and the
  old duplicate root pages have actually been removed or archived out of
  `src/pages/` first — otherwise they'll be listed as indexable production
  URLs despite still being marked `noindex` on-page (the sitemap has no
  awareness of that meta tag).

## 5. Known gaps — not blockers for this deploy-prep commit, but blockers for launch

- **Spanish**: interior pages (About, Press, Audio Sets, Video Sets, Book,
  EPK) exist only in EN/PT. ES stays on the homepage-only experience,
  matching the explicit deferral — its language-menu links on every interior
  page fall back to `/v3/page-es` (soon `/page-es`).
- **Cloudflare account/domain wiring**: `wrangler.toml`'s `account_id` is
  still intentionally blank. Nothing in this repo has touched Cloudflare
  Pages project settings, DNS, or the domain. That's a manual step outside
  this environment when cutover actually happens.
- **Hero image performance**: Lighthouse flagged the hero photo
  (`maya-landing-bw.jpg` / `maya-landing.jpg`) as served at native
  resolution with no responsive `srcset` — real savings are available there
  but need actual resized image assets, which needs either a real asset
  export pass or an image-processing step; out of scope for the "no new
  tools" constraint on this pass.
- **SEO Lighthouse score**: capped below 90 right now purely because of the
  intentional `noindex, nofollow` on every `/v3/` page (see §1.3) — resolves
  automatically once that's removed at cutover, not a separate fix.
