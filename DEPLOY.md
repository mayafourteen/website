# DEPLOY.md — V3 cutover

**Status: executed.** Sections 1-6 below are the plan as originally written
pre-cutover and are kept as the historical record of what was done and why.
The cutover itself — promoting `/v3/*` to root, archiving the old production
pages to `/legacy/*`, adding the redirects, flipping `SITE_URL` — has been
committed, merged to `main`, and pushed to `origin/main`. See §7 for current
status and the branch workflow now in effect.

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
| `/v3/page-es` | `/page-es` | still points at its own gamma.site EPK link — ES interior pages were explicitly deferred, see §6 |
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
| `/v3/epk-es` | `/epk-es` | same — EPK's the one exception to the ES interior-page deferral above, it has a real ES version |

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
- This `site` value is unrelated to, and unaffected by, the `SITE_URL`
  constant described in §6 below — `@astrojs/sitemap` requires an absolute
  URL to build the sitemap's entries and cannot run against an empty/
  relative value, so it's been the real production domain since before this
  SEO pass and stays that way. The sitemap already lists real, absolute
  `https://mayafourteen.com/v3/...` URLs today; what's still `noindex`/
  root-relative is the *canonical and hreflang tags on those pages*, which
  is what §6 actually controls.

## 5. SEO plumbing: already built, intentionally inert until cutover

Everything in this section is implemented and live in the codebase today —
unlike the rest of this document, it's not a plan, it's already shipped.
What's *not* live yet is its effect on real search engines, which is exactly
the point: all of it is gated behind one constant so it activates in a
single, deliberate step at cutover instead of needing new code written then.

- **`src/data/v3/siteConfig.js`** exports `SITE_URL`, currently `''`. Every
  canonical `<link>`, hreflang `<link rel="alternate">`, and BreadcrumbList
  JSON-LD `item` URL on every `/v3/` page is built as `` `${SITE_URL}${path}` ``
  — with `SITE_URL` empty, they're root-relative today (e.g.
  `/v3/page-en`, not `https://mayafourteen.com/v3/page-en`). **The entire
  cutover activation step for this section is changing that one string to
  `'https://mayafourteen.com'`.** No other file needs to change.
- Root-relative canonical/hreflang is why Lighthouse's SEO audit currently
  fails `canonical` and shows `hreflang` as not fully valid — both checks
  require absolute URLs per spec. This is intentional and expected
  pre-cutover (see the constant's own comment for the reasoning: asserting an
  absolute production URL for content still living under the `/v3/` prefix,
  before that prefix is even gone, would be actively wrong); it self-
  resolves the moment `SITE_URL` flips, with no other change needed.
  `og:url`/`og:image` are unaffected by any of this — they've used
  `Astro.site` (the real domain, from `astro.config.mjs`) all along, since
  social-preview unfurling needs a real fetchable URL regardless of
  indexing status.
- **JSON-LD structured data**: every page emits a `MusicGroup` schema (name,
  genre, description, `sameAs` built live from `src/data/v3/socialLinks.js`
  so it can't drift from the real profile URLs). Pages with real hierarchy
  below the homepage — the 5 `V3InteriorLayout` pages and the 3 EPK pages —
  also emit a `BreadcrumbList`, using the same `SITE_URL`-prefixed URLs.
  Nothing further needed here at cutover; it rides along with the
  canonical/hreflang flip automatically since it reads the same constant.
- **Lighthouse SEO score (50/100 on both homepage and EPK, measured via
  `astro preview` + local `lighthouse` CLI during this pass)**: fully
  explained by two intentional, temporary things — `noindex` (`is-crawlable`
  audit) and the root-relative canonical/hreflang above. Both resolve
  automatically at cutover: removing the three `noindex, nofollow` instances
  (§1.3) plus flipping `SITE_URL`. Nothing to fix separately.
- **Cutover checklist addition**: add "flip `SITE_URL` in
  `src/data/v3/siteConfig.js` to `'https://mayafourteen.com'`" as an explicit
  step alongside removing the `noindex` meta tags in §1.3 — they're
  independent flips (one file each) but both are part of "make this
  indexable for real," so do them together.

## 6. Known gaps — not blockers for this deploy-prep commit, but blockers for launch

- **Spanish**: Press, Audio Sets and Video Sets still exist only in EN/PT —
  their language-menu links fall back to the English page. EPK, Book
  (`book-es.astro`) and About (`about-es.astro`, added 2026-07-15) each
  have a real ES version.
- **Cloudflare account/domain wiring**: `wrangler.toml`'s `account_id` is
  still intentionally blank. Nothing in this repo has touched Cloudflare
  Pages project settings, DNS, or the domain. That's a manual step outside
  this environment when cutover actually happens.
- ~~**Hero image performance**~~ — resolved. Every hero/background image and
  all EPK content photos now have real srcset variants (generated via `sips
  --resampleWidth`, committed alongside the originals) plus explicit width/
  height and loading="eager"/"lazy" as appropriate; see
  `src/data/v3/images.js`.
- **SEO Lighthouse score**: see §5 above for the current measured numbers
  and exactly what resolves automatically at cutover vs. what's a separate
  fix (nothing currently is).

## 7. Post-cutover status and branch workflow

Cutover executed: `/v3/*` promoted to root routes (including `book-es.astro`,
missed by §2's original table but real content), old production pages
archived to `/legacy/*` (noindex, kept functional), `SITE_URL` flipped to
`https://mayafourteen.com`, `public/_redirects` added for `/v3/*`, `/v2/*`
and `/v2-legacy/*`, and the sitemap filtered to exclude the archived
prefixes. `feature/v2-redesign` is merged into `main`; both are pushed to
`origin`.

Not done as part of this cutover, still open per §6: Cloudflare
account/domain wiring (`wrangler.toml`'s `account_id` is still blank —
that's a manual step outside this repo), and Spanish interior pages beyond
EPK.

**Workflow going forward:**

- `main` is production — it's what's live at `mayafourteen.com` (once
  Cloudflare's domain/DNS wiring, still pending per §6, points there).
- `staging` (branched from `main` right after this cutover, pushed to
  `origin/staging`) is where all new work happens from now on. Its
  Cloudflare Pages auto-preview URL is the test site — use that to verify
  changes before they go anywhere near `main`.
- Merges from `staging` (or any feature branch) into `main` happen only on
  explicit instruction — never automatically as part of routine work.
