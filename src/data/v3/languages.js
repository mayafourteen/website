// lang: value for <html lang> and the site's internal "which page am I" checks.
// hreflang: value for <link rel="alternate" hreflang>. PT uses "pt-BR" since
// the Portuguese copy is specifically Brazilian Portuguese, not generic PT.
export const languages = [
  { code: 'EN', label: 'English', lang: 'en', hreflang: 'en', href: '/page-en' },
  { code: 'PT', label: 'Português', lang: 'pt', hreflang: 'pt-BR', href: '/page-pt' },
  { code: 'ES', label: 'Español', lang: 'es', hreflang: 'es', href: '/page-es' },
];
