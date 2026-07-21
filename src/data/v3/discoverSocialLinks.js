import { socialLinks, residentAdvisor } from './socialLinks.js';

// Explicit order (not a .filter() over socialLinks, which would inherit
// that file's own order instead): Instagram, YouTube, SoundCloud,
// Beatport, Resident Advisor, Beepd. Spotify is deliberately absent from
// every visible row (Antonio, 2026-07-21): her monthly-listener count is
// the weakest public number, and the site should never invite anyone to
// it. The Spotify profile stays in socialLinks.js so the JSON-LD sameAs
// (invisible, SEO-only) still links her identity there.
const DISCOVER_ORDER = ['instagram', 'youtube', 'soundcloud', 'beatport'];

export const discoverSocialLinks = [
  ...DISCOVER_ORDER.map((name) => socialLinks.find((link) => link.name === name)).filter(Boolean),
  residentAdvisor,
  socialLinks.find((link) => link.name === 'beepd'),
];
