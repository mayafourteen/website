// Production domain, used to build absolute canonical, hreflang and
// breadcrumb URLs. og:url/og:image are unaffected by this constant — they
// stay absolute via Astro.site (astro.config.mjs), since social-preview
// unfurling needs a real fetchable URL regardless of indexing status.
export const SITE_URL = 'https://mayafourteen.com';
