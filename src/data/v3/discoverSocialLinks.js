import { socialLinks } from './socialLinks.js';

// Resident Advisor has no entry in socialLinks.js because that list is
// also read unfiltered (no `links` prop) by SocialNav on the legacy root
// pages (src/pages/page-en.astro etc.) and by name-lookup on the V3
// homepage's five-icon row (primarySocialLinks.js) — adding it there would
// silently grow both of those unrelated rows. It's only ever shown in the
// EPK "Discover MAYA" row, so it's defined here instead.
const residentAdvisor = { href: 'https://ra.co/dj/mayafourteen', title: 'Resident Advisor', type: 'svg', name: 'residentadvisor' };

// Explicit order (not a .filter() over socialLinks, which would inherit
// that file's own order instead): Instagram, YouTube, SoundCloud, Spotify,
// Beatport, Resident Advisor.
const DISCOVER_ORDER = ['instagram', 'youtube', 'soundcloud', 'spotify', 'beatport'];

export const discoverSocialLinks = [
  ...DISCOVER_ORDER.map((name) => socialLinks.find((link) => link.name === name)).filter(Boolean),
  residentAdvisor,
];
