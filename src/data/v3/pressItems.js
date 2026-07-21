// Shared with src/pages/press.astro's own inline copy intentionally kept
// separate — this file is only consumed by the v3/ preview so the current
// production press page is never touched before V3 is approved.
export const pressItems = [
  {
    outlet: 'DJ Mag LATAM',
    href: 'https://djmagla.com/conoce-a-maya-fourteen-la-artista-brasilena-que-esta-llevando-su-talento-a-nuevos-lugares-del-mundo',
    label: 'Read article',
    // Verbatim from the article (Spanish original).
    quote: 'El nombre MAYA FOURTEEN está comenzando a ser cada vez más conocido en diferentes partes del mundo.',
  },
  {
    outlet: 'Mixmag Brazil',
    href: 'https://mixmag.com.br/feature/conheca-maya-fourteen-artista-brasileira-reconhecida-por-nicole-moudaber-e-pete-tong',
    label: 'Read article',
    // The article's own headline (site blocks robots, so the verifiable
    // title is used rather than body text).
    quote: 'Artista brasileira reconhecida por Nicole Moudaber e Pete Tong',
  },
  {
    outlet: 'Alataj',
    href: 'https://alataj.com.br/15-to-understand/maya',
    label: 'Read article',
    quote: 'Consolidou sua projeção internacional tocando em palcos como o World Club Dome (Frankfurt) e Terra Solis by Tomorrowland (Dubai)',
  },
  {
    outlet: 'Play BPM',
    href: 'https://playbpm.com.br/colunas/play-bpm-indica/maya/',
    label: 'Read article',
    quote: 'MAYA representa uma nova geração de brasileiros que pensa globalmente sem esquecer as raízes.',
  },
  {
    outlet: 'Clubbing TV',
    href: 'https://clubbingtv.com/shows/view/5593/lds-with-maya-fourteen-ade-2023-spaces/',
    label: 'Watch feature',
  },
  {
    outlet: 'Sync Beat Magazine',
    href: 'https://issuu.com/syncbeatmagazine/docs/portada_bebbo',
    label: 'View publication',
    // Verbatim from the magazine's editorial intro to her interview.
    quote: 'A rising star in the electronic music scene, celebrated for her distinctive blend of organic soundscapes, deep tech, and progressive vibes.',
  },
  {
    outlet: 'Sync Beat Magazine Cover',
    href: 'https://issuu.com/syncbeatmagazine/docs/maya_-_english',
    label: 'View cover feature',
    quote: 'Enchanting audiences worldwide with her emotionally charged sets and signature style.',
  },
  {
    outlet: 'EKM',
    href: 'https://ekm.co/maya-fourteen-uniqueness/',
    label: 'Read review',
    quote: "It's a throwback to the golden era of House, evoking timeless vibes akin to Mood II Swing",
  },
];
