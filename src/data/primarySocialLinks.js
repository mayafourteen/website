import { socialLinks } from './socialLinks.js';

// The five credibility-signal icons the V3 homepage keeps visible, in the
// specified order. Derived from socialLinks (not duplicated) so hrefs stay
// in sync with the canonical list; Beepd is omitted here per the V3 spec
// but remains available via socialLinks for other pages.
const PRIMARY_ORDER = ['youtube', 'soundcloud', 'beatport', 'instagram', 'epk'];

export const primarySocialLinks = PRIMARY_ORDER.map((name) =>
  socialLinks.find((link) => link.name === name)
).filter(Boolean);
