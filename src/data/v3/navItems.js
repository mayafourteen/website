// Hamburger menu items for the V3 site architecture. Each opens a dedicated
// page — see PROJECT.md / v2 milestone notes for the one-purpose-per-page
// rationale (Home / About / Video Sets / Sets & Tracks / Press Area / EPK /
// Info). Keyed by language: PT-BR interior pages exist alongside the
// English originals (see the *-pt.astro siblings). ES has its own array too
// now, and picked up real ES pages for Info (book-es.astro), EPK, About
// (about-es.astro) and Press (press-es.astro) alongside the homepage —
// Video/Audio still point at the English page since there's no ES
// equivalent for those yet.
export const navItems = {
  en: [
    { label: 'Home', href: '/en' },
    { label: 'About', href: '/en/about' },
    { label: 'Video', href: '/en/video-sets' },
    { label: 'Audio', href: '/en/audio-sets' },
    { label: 'Press', href: '/en/press' },
    // highlight: rendered in the site's desert-gold with the [ enter ]
    // breathing pulse — the one lit item in the menu, so promoters and
    // bookers find their runway in one glance (Antonio's call, 2026-07-21).
    { label: 'Booking', href: '/en/book' },
    { label: 'EPK', href: '/en/epk', highlight: true },
  ],
  // "Press" stays in English here (not "Imprensa") per explicit instruction —
  // matches the same already-established pattern as "EPK" and "Booking",
  // both of which stay English across every language's nav too. "Booking"
  // (was "Info") makes the runway explicit for promoters without the
  // "book to read" ambiguity of a bare "Book" (Antonio, 2026-07-23).
  pt: [
    { label: 'Início', href: '/pt' },
    { label: 'Sobre', href: '/pt/about' },
    { label: 'Vídeo', href: '/pt/video-sets' },
    { label: 'Áudio', href: '/pt/audio-sets' },
    { label: 'Press', href: '/pt/press' },
    { label: 'Booking', href: '/pt/book' },
    { label: 'EPK', href: '/pt/epk', highlight: true },
  ],
  es: [
    { label: 'Inicio', href: '/es' },
    { label: 'Sobre', href: '/es/about' },
    { label: 'Vídeo', href: '/es/video-sets' },
    { label: 'Audio', href: '/es/audio-sets' },
    { label: 'Prensa', href: '/es/press' },
    { label: 'Booking', href: '/es/book' },
    { label: 'EPK', href: '/es/epk', highlight: true },
  ],
};
