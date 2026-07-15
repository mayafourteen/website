import { socialLinks, residentAdvisor } from './socialLinks.js';

// The credibility-signal icons the V3 homepage keeps visible, in the
// specified order: Instagram, YouTube, SoundCloud, Resident Advisor,
// Beepd, EPK (EPK stays last as the anchor). Beatport is deliberately
// excluded from this row only — it stays everywhere else (EPK Discover
// row, discography links, JSON-LD sameAs). Derived from socialLinks (not
// duplicated) so hrefs stay in sync with the canonical list. Resident
// Advisor isn't in socialLinks.js itself (see that file's own comment),
// so it's spliced in here explicitly.
const PRIMARY_ORDER = ['instagram', 'youtube', 'soundcloud'];

export const primarySocialLinks = [
  ...PRIMARY_ORDER.map((name) => socialLinks.find((link) => link.name === name)).filter(Boolean),
  residentAdvisor,
  socialLinks.find((link) => link.name === 'beepd'),
  socialLinks.find((link) => link.name === 'epk'),
].filter(Boolean);
