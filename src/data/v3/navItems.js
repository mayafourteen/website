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
    { label: 'Home', href: '/page-en' },
    { label: 'About', href: '/about' },
    { label: 'Video', href: '/video-sets' },
    { label: 'Audio', href: '/audio-sets' },
    { label: 'Press', href: '/press' },
    { label: 'EPK', href: '/epk' },
    { label: 'Info', href: '/book' },
  ],
  // "Press" stays in English here (not "Imprensa") per explicit instruction —
  // matches the same already-established pattern as "EPK" and "Info", both
  // of which stay English across every language's nav too.
  pt: [
    { label: 'Início', href: '/page-pt' },
    { label: 'Sobre', href: '/about-pt' },
    { label: 'Vídeo', href: '/video-sets-pt' },
    { label: 'Áudio', href: '/audio-sets-pt' },
    { label: 'Press', href: '/press-pt' },
    { label: 'Mídia Kit', href: '/epk-pt' },
    { label: 'Info', href: '/book-pt' },
  ],
  es: [
    { label: 'Inicio', href: '/page-es' },
    { label: 'Sobre', href: '/about' },
    { label: 'Vídeo', href: '/video-sets' },
    { label: 'Audio', href: '/audio-sets' },
    { label: 'Prensa', href: '/press' },
    { label: 'EPK', href: '/epk-es' },
    { label: 'Info', href: '/book-es' },
  ],
};
