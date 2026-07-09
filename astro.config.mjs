import { defineConfig } from 'astro/config';

// Maya Fourteen — static site, Cloudflare Pages.
// output stays 'static': there is no server-side rendering need here,
// so no Cloudflare adapter is required. worker.js remains a separate,
// standalone Cloudflare Worker in front of Pages (schema injection,
// /press route, /sitemap.xml) exactly as in the reference project —
// Astro only changes how the static output is authored and built.
export default defineConfig({
  site: 'https://mayafourteen.com',
  trailingSlash: 'never',
  build: {
    // Emit page-en.html / index.html instead of pretty-URL directories,
    // so routes match the reference project's file names exactly and
    // nothing in worker.js's routing has to change.
    format: 'file',
  },
});
