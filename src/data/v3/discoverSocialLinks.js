import { socialLinks, residentAdvisor } from './socialLinks.js';

// Explicit order (not a .filter() over socialLinks, which would inherit
// that file's own order instead): Instagram, YouTube, SoundCloud, Spotify,
// Beatport, Resident Advisor.
const DISCOVER_ORDER = ['instagram', 'youtube', 'soundcloud', 'spotify', 'beatport'];

export const discoverSocialLinks = [
  ...DISCOVER_ORDER.map((name) => socialLinks.find((link) => link.name === name)).filter(Boolean),
  residentAdvisor,
];
