// Canonical order (Instagram, YouTube, SoundCloud, Beatport, EPK) first,
// then the remaining icons that aren't part of that canonical five, in
// their prior relative order. Any page that derives a subset via
// .filter() (e.g. the EPK "Discover MAYA" row) inherits this order for
// free without needing its own explicit ordering list.
export const socialLinks = [
  { href: 'https://www.instagram.com/mayafourteen/', title: 'Instagram', type: 'fa', name: 'instagram' },
  { href: 'https://www.youtube.com/@MayaFourteen', title: 'YouTube', type: 'fa', name: 'youtube' },
  { href: 'https://soundcloud.com/mayafourteen', title: 'SoundCloud', type: 'fa', name: 'soundcloud' },
  { href: 'https://www.beatport.com/artist/maya-fourteen/1218920', title: 'Beatport', type: 'svg', name: 'beatport' },
  { href: '/en/epk', title: 'EPK', type: 'svg', name: 'epk' },
  { href: 'https://open.spotify.com/artist/0A89st7lXBJ5UE96h8Ku0r', title: 'Spotify', type: 'fa', name: 'spotify' },
  { href: 'https://music.beepd.co/card/mayafourteen', title: 'Beepd', type: 'svg', name: 'beepd' },
];

// Deliberately not part of the array above: that array is read unfiltered
// (no `links` prop) by SocialNav on the legacy root pages (src/pages/
// page-en.astro etc.) — adding a new entry there would silently grow that
// unrelated row too. Exported separately so primarySocialLinks.js and
// discoverSocialLinks.js can both opt in explicitly instead.
export const residentAdvisor = { href: 'https://ra.co/dj/mayafourteen', title: 'Resident Advisor', type: 'svg', name: 'residentadvisor' };

// Contact/booking entry for the homepage row only. Points at the interior
// contact page (/en/book by default; the homepage overrides with the
// visitor's language via contactHref) rather than a raw mailto, so the
// address stays off the highest-traffic page. Kept out of socialLinks for
// the same reason as residentAdvisor: legacy pages read that array raw.
export const contactLink = { href: '/en/book', title: 'Contact', type: 'svg', name: 'contact' };
