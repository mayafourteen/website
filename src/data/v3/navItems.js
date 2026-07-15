// Hamburger menu items for the V3 site architecture. Each opens a dedicated
// page — see PROJECT.md / v2 milestone notes for the one-purpose-per-page
// rationale (Home / About / Video Sets / Sets & Tracks / Press Area / EPK /
// Info). Keyed by language: PT-BR interior pages exist alongside the
// English originals (see the *-pt.astro siblings). ES has its own array too
// now, and picked up a real ES Info page (book-es.astro) alongside the
// homepage and EPK — every other ES nav item still points at the English
// page since there's no ES equivalent yet.
export const navItems = {
  en: [
    { label: 'Home', href: '/v3/page-en' },
    { label: 'About', href: '/v3/about' },
    { label: 'Video', href: '/v3/video-sets' },
    { label: 'Audio', href: '/v3/audio-sets' },
    { label: 'Press', href: '/v3/press' },
    { label: 'EPK', href: '/v3/epk' },
    { label: 'Info', href: '/v3/book' },
  ],
  // "Press" stays in English here (not "Imprensa") per explicit instruction —
  // matches the same already-established pattern as "EPK" and "Info", both
  // of which stay English across every language's nav too.
  pt: [
    { label: 'Início', href: '/v3/page-pt' },
    { label: 'Sobre', href: '/v3/about-pt' },
    { label: 'Vídeo', href: '/v3/video-sets-pt' },
    { label: 'Áudio', href: '/v3/audio-sets-pt' },
    { label: 'Press', href: '/v3/press-pt' },
    { label: 'Mídia Kit', href: '/v3/epk-pt' },
    { label: 'Info', href: '/v3/book-pt' },
  ],
  es: [
    { label: 'Inicio', href: '/v3/page-es' },
    { label: 'Sobre', href: '/v3/about' },
    { label: 'Vídeo', href: '/v3/video-sets' },
    { label: 'Audio', href: '/v3/audio-sets' },
    { label: 'Prensa', href: '/v3/press' },
    { label: 'EPK', href: '/v3/epk-es' },
    { label: 'Info', href: '/v3/book-es' },
  ],
};
