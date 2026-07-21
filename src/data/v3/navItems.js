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
    { label: 'EPK', href: '/en/epk' },
    { label: 'Info', href: '/en/book' },
  ],
  // "Press" stays in English here (not "Imprensa") per explicit instruction —
  // matches the same already-established pattern as "EPK" and "Info", both
  // of which stay English across every language's nav too.
  pt: [
    { label: 'Início', href: '/pt' },
    { label: 'Sobre', href: '/pt/about' },
    { label: 'Vídeo', href: '/pt/video-sets' },
    { label: 'Áudio', href: '/pt/audio-sets' },
    { label: 'Press', href: '/pt/press' },
    { label: 'EPK', href: '/pt/epk' },
    { label: 'Info', href: '/pt/book' },
  ],
  es: [
    { label: 'Inicio', href: '/es' },
    { label: 'Sobre', href: '/es/about' },
    { label: 'Vídeo', href: '/en/video-sets' },
    { label: 'Audio', href: '/en/audio-sets' },
    { label: 'Prensa', href: '/es/press' },
    { label: 'EPK', href: '/es/epk' },
    { label: 'Info', href: '/es/book' },
  ],
};
