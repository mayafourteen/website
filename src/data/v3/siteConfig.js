// [CUTOVER] Flip to 'https://mayafourteen.com' when /v3/* is promoted to
// the site root (see DEPLOY.md's cutover checklist). Left empty until
// then so canonical, hreflang and breadcrumb URLs emit root-relative
// paths instead of asserting the still-noindexed /v3/ prefix as if it
// were the final production URL. og:url/og:image are unaffected by this
// constant — they stay absolute via Astro.site (astro.config.mjs),
// since social-preview unfurling needs a real fetchable URL regardless
// of indexing status, and the site truly is live at that domain today.
export const SITE_URL = '';
