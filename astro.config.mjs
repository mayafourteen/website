import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

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
  { en: '/page-en', pt: '/page-pt', es: '/page-es' },
  { en: '/about', pt: '/about-pt', es: '/about-es' },
  { en: '/book', pt: '/book-pt', es: '/book-es' },
  { en: '/epk', pt: '/epk-pt', es: '/epk-es' },
  { en: '/video-sets', pt: '/video-sets-pt' },
  { en: '/audio-sets', pt: '/audio-sets-pt' },
  { en: '/press', pt: '/press-pt' },
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
      filter: (page) => !/^https?:\/\/[^/]+\/(legacy|v2-legacy|v2)(\/|$)/.test(page),
      // Attaches xhtml:link hreflang alternates to every URL that belongs to
      // one of the groups above, so crawlers see the same language
      // relationships the pages themselves declare. Pages with no group
      // (currently just "/", the language-detect redirect page, which
      // likewise has no hreflang tags of its own) pass through unchanged.
      serialize(item) {
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
    // Emit page-en.html / index.html instead of pretty-URL directories,
    // so routes match the reference project's file names exactly and
    // nothing in worker.js's routing has to change.
    format: 'file',
  },
});
