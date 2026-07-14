import { socialLinks } from './socialLinks.js';

// The five credibility-signal icons the V3 homepage keeps visible, in the
// specified order. Derived from socialLinks (not duplicated) so hrefs stay
// in sync with the canonical list; Beepd is omitted here per the V2 spec
// but remains available via socialLinks for other pages.
const PRIMARY_ORDER = ['instagram', 'youtube', 'soundcloud', 'beatport', 'epk'];

export const primarySocialLinks = PRIMARY_ORDER.map((name) =>
  socialLinks.find((link) => link.name === name)
).filter(Boolean);
