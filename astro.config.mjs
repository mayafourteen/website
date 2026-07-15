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
    }),
  ],
  build: {
    // Emit page-en.html / index.html instead of pretty-URL directories,
    // so routes match the reference project's file names exactly and
    // nothing in worker.js's routing has to change.
    format: 'file',
  },
});
