// Real on-disk dimensions (via `sips -g pixelWidth -g pixelHeight`) and
// generated responsive variants (via `sips --resampleWidth`, real
// downscaled files committed alongside the originals, not synthetic
// numbers) for every photo used at a size worth offering a smaller
// candidate for. Single source of truth so width/height attributes always
// match the actual files — required to reserve the correct aspect ratio
// and avoid layout shift regardless of which srcset candidate loads.
//
// Images below ~400x400 (audience grid icons, press headshots) have no
// srcset entry: they're already small enough that a second smaller variant
// wouldn't meaningfully reduce bytes transferred, so they just get their
// real width/height for CLS purposes.
export const images = {
  heroDefault: {
    src: '/images/maya-landing-bw.jpg',
    width: 1366,
    height: 768,
    srcset: '/images/maya-landing-bw-640w.jpg 640w, /images/maya-landing-bw-960w.jpg 960w, /images/maya-landing-bw.jpg 1366w',
  },
  landingColor: {
    src: '/images/maya-landing.jpg',
    width: 2732,
    height: 1536,
    srcset: '/images/maya-landing-640w.jpg 640w, /images/maya-landing-1024w.jpg 1024w, /images/maya-landing-1536w.jpg 1536w, /images/maya-landing.jpg 2732w',
  },
  epkHero: {
    src: '/images/epk/epk-hero.jpg',
    width: 1080,
    height: 1350,
    srcset: '/images/epk/epk-hero-540w.jpg 540w, /images/epk/epk-hero.jpg 1080w',
  },
  epkOverview: {
    src: '/images/epk/epk-overview.jpg',
    width: 1080,
    height: 675,
    srcset: '/images/epk/epk-overview-540w.jpg 540w, /images/epk/epk-overview.jpg 1080w',
  },
  epkGlobalPerformances: {
    src: '/images/epk/epk-global-performances.jpg',
    width: 1080,
    height: 675,
    srcset: '/images/epk/epk-global-performances-540w.jpg 540w, /images/epk/epk-global-performances.jpg 1080w',
  },
  epkAward: {
    src: '/images/epk/epk-award.jpg',
    width: 1080,
    height: 1080,
    srcset: '/images/epk/epk-award-540w.jpg 540w, /images/epk/epk-award.jpg 1080w',
  },
  epkIndustryVoices: {
    src: '/images/epk/epk-industry-voices.jpg',
    width: 1080,
    height: 675,
    srcset: '/images/epk/epk-industry-voices-540w.jpg 540w, /images/epk/epk-industry-voices.jpg 1080w',
  },
  epkMediaSpotlight: {
    src: '/images/epk/epk-media-spotlight.jpg',
    width: 1080,
    height: 675,
    srcset: '/images/epk/epk-media-spotlight-540w.jpg 540w, /images/epk/epk-media-spotlight.jpg 1080w',
  },
  epkEditorial: {
    src: '/images/epk/epk-editorial.jpg',
    width: 1080,
    height: 675,
    srcset: '/images/epk/epk-editorial-540w.jpg 540w, /images/epk/epk-editorial.jpg 1080w',
  },
  epkWorldStages: {
    src: '/images/epk/epk-world-stages.jpg',
    width: 1066,
    height: 1600,
    srcset: '/images/epk/epk-world-stages-533w.jpg 533w, /images/epk/epk-world-stages.jpg 1066w',
  },
  epkDiscography: {
    src: '/images/epk/epk-discography.jpg',
    width: 1080,
    height: 1350,
    srcset: '/images/epk/epk-discography-540w.jpg 540w, /images/epk/epk-discography.jpg 1080w',
  },
  epkAudienceMap: { src: '/images/epk/epk-audience-map.jpg', width: 800, height: 400 },
  epkAudienceRadio: { src: '/images/epk/epk-audience-radio.jpg', width: 400, height: 400 },
  epkAudienceGreenvalley: { src: '/images/epk/epk-audience-greenvalley.jpg', width: 400, height: 400 },
  epkPress1: { src: '/images/epk/epk-press-1.jpg', width: 400, height: 400 },
  epkPress2: { src: '/images/epk/epk-press-2.jpg', width: 400, height: 400 },
  epkPress3: { src: '/images/epk/epk-press-3.jpg', width: 400, height: 400 },
  epkPress4: { src: '/images/epk/epk-press-4.jpg', width: 400, height: 400 },
};

// Looks up an entry by its `src` path — lets HeroBackground callers keep
// passing a plain path (as every page already does) while still getting
// the matching width/height/srcset without repeating them at every call
// site. Returns undefined for paths with no registry entry (none expected,
// but callers should tolerate it rather than throw).
export function findImageBySrc(src) {
  return Object.values(images).find((entry) => entry.src === src);
}
