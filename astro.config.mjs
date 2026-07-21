import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Build timestamp stamped as <lastmod> on every sitemap URL, so Google gets a
// freshness signal to re-crawl after each deploy (a sitemap with no lastmod
// gives crawlers no reason to revisit known URLs).
const SITEMAP_BUILD_DATE = new Date().toISOString();

// Maya Fourteen — static site, Cloudflare Pages.
// output stays 'static': there is no server-side rendering need here,
// so no Cloudflare adapter is required.
//
// worker.js is kept in this repo untouched for now, but its responsibilities
// (JSON-LD injection, /press, /sitemap.xml) have been migrated natively into
// this Astro site — see BaseLayout.astro (JSON-LD), src/pages/press.astro,
// and the sitemap integration below. The Worker is not deleted or disabled
// as part of this change; see project notes for the plan to retire it.

// Language groups for the sitemap's xhtml:link hreflang alternates, kept in
// lockstep with the hreflangAlternates props each page already passes to
// V3BaseLayout (home pages in V3HomeLayout, interior pages in
// V3InteriorLayout, EPK pages inline) — see those files if a page's real
// language siblings change. Groups without an `es` entry mirror pages where
// hasEsSibling isn't set (no real ES translation exists yet).
const SITEMAP_HREFLANG_GROUPS = [
  { en: '/en', pt: '/pt', es: '/es' },
  { en: '/en/about', pt: '/pt/about', es: '/es/about' },
  { en: '/en/book', pt: '/pt/book', es: '/es/book' },
  { en: '/en/epk', pt: '/pt/epk', es: '/es/epk' },
  { en: '/en/video-sets', pt: '/pt/video-sets', es: '/es/video-sets' },
  { en: '/en/audio-sets', pt: '/pt/audio-sets', es: '/es/audio-sets' },
  { en: '/en/press', pt: '/pt/press', es: '/es/press' },
  { en: '/en/privacy', pt: '/pt/privacy', es: '/es/privacy' },
  { en: '/en/sets/greenvalley', pt: '/pt/sets/greenvalley', es: '/es/sets/greenvalley' },
  { en: '/en/sets/sls-dubai', pt: '/pt/sets/sls-dubai', es: '/es/sets/sls-dubai' },
  { en: '/en/sets/amazon-basin', pt: '/pt/sets/amazon-basin', es: '/es/sets/amazon-basin' },
];

// pt is specifically Brazilian Portuguese sitewide (see siteConfig.js /
// V3BaseLayout's own comments on this) — matches every hreflang tag already
// rendered in the page heads.
const SITEMAP_LANG_CODES = { en: 'en', pt: 'pt-BR', es: 'es' };

export default defineConfig({
  site: 'https://mayafourteen.com',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      // /legacy/, /v2/ and /v2-legacy/ are archived, noindex prototypes kept
      // in the build for reference (see DEPLOY.md) — the sitemap has no
      // awareness of per-page <meta name="robots"> tags, so they'd otherwise
      // be listed as indexable production URLs despite carrying noindex.
      // /fashion-vibes is an unlisted, noindex page shared privately with
      // fashion/luxury clients, reachable only by direct URL — it must
      // never appear in the sitemap either.
      filter: (page) => !/^https?:\/\/[^/]+\/(legacy|v2-legacy|v2|fashion-vibes|404|subscribed)(\/|$)/.test(page),
      // Attaches xhtml:link hreflang alternates to every URL that belongs to
      // one of the groups above, so crawlers see the same language
      // relationships the pages themselves declare. Pages with no group
      // (currently just "/", the language-detect redirect page, which
      // likewise has no hreflang tags of its own) pass through unchanged.
      serialize(item) {
        item.lastmod = SITEMAP_BUILD_DATE;
        const itemUrl = new URL(item.url);
        const pathname = itemUrl.pathname.replace(/\/$/, '') || '/';
        const group = SITEMAP_HREFLANG_GROUPS.find((g) => Object.values(g).includes(pathname));
        if (!group) return item;
        const links = Object.entries(group).map(([lang, path]) => ({
          lang: SITEMAP_LANG_CODES[lang],
          url: `${itemUrl.origin}${path}`,
        }));
        links.push({ lang: 'x-default', url: `${itemUrl.origin}${group.en}` });
        return { ...item, links };
      },
    }),
  ],
  build: {
    // Inline the small per-page CSS into the HTML so it isn't a
    // render-blocking request on slow connections (homepage CSS is ~4KB).
    inlineStylesheets: 'always',
    // Emit page-en.html / index.html instead of pretty-URL directories,
    // so routes match the reference project's file names exactly and
    // nothing in worker.js's routing has to change.
    format: 'file',
  },
});
