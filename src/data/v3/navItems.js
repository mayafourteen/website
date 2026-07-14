// Hamburger menu items for the V3 site architecture. Each opens a dedicated
// page — see PROJECT.md / v2 milestone notes for the one-purpose-per-page
// rationale (About / Video Sets / Audio Sets / Press / EPK / Book Maya).
// Keyed by language: PT-BR interior pages exist alongside the English
// originals (see the *-pt.astro siblings); ES stays deferred, so callers
// fall back to the `en` list for any language without its own entry.
export const navItems = {
  en: [
    { label: 'About', href: '/v3/about' },
    { label: 'Video Sets', href: '/v3/video-sets' },
    { label: 'Audio Sets', href: '/v3/audio-sets' },
    { label: 'Press', href: '/v3/press' },
    { label: 'EPK', href: '/v3/epk' },
    { label: 'Book Maya', href: '/v3/book' },
  ],
  pt: [
    { label: 'Sobre', href: '/v3/about-pt' },
    { label: 'Sets em Vídeo', href: '/v3/video-sets-pt' },
    { label: 'Sets em Áudio', href: '/v3/audio-sets-pt' },
    { label: 'Imprensa', href: '/v3/press-pt' },
    { label: 'EPK', href: '/v3/epk-pt' },
    { label: 'Contratar Maya', href: '/v3/book-pt' },
  ],
};
