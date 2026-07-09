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
  integrations: [sitemap()],
  build: {
    // Emit page-en.html / index.html instead of pretty-URL directories,
    // so routes match the reference project's file names exactly and
    // nothing in worker.js's routing has to change.
    format: 'file',
  },
});
