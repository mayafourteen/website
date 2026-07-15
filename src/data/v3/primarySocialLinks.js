import { socialLinks } from './socialLinks.js';

// The credibility-signal icons the V3 homepage keeps visible, in the
// specified order: EPK, Instagram, YouTube, SoundCloud, Beepd. EPK leads
// as the anchor. Beatport and Resident Advisor are deliberately excluded
// from this row — Beatport stays everywhere else (EPK Discover row,
// discography links, JSON-LD sameAs); Resident Advisor is homepage-row
// only removed and now lives on the EPK Discover row exclusively (see
// discoverSocialLinks.js). Derived from socialLinks (not duplicated) so
// hrefs stay in sync with the canonical list.
const PRIMARY_ORDER = ['epk', 'instagram', 'youtube', 'soundcloud', 'beepd'];

export const primarySocialLinks = PRIMARY_ORDER.map((name) =>
  socialLinks.find((link) => link.name === name)
).filter(Boolean);
