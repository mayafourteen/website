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
  // Full 2732x1536 real grayscale (converted from the color master, not a
  // CSS filter standing in for resolution) — fixes the previous file being
  // a half-resolution 1366x768 original with no larger candidate to grow
  // into on big screens. webpSrcset/webpSrc are ~45-50% lighter than the
  // matching jpg at the same width; HeroBackground.astro serves them via
  // <picture> with the jpg set as the universal fallback.
  heroDefault: {
    src: '/images/maya-landing-bw.jpg',
    width: 2732,
    height: 1536,
    srcset: '/images/maya-landing-bw-640w.jpg 640w, /images/maya-landing-bw-960w.jpg 960w, /images/maya-landing-bw-1366w.jpg 1366w, /images/maya-landing-bw-2048w.jpg 2048w, /images/maya-landing-bw.jpg 2732w',
    webpSrc: '/images/maya-landing-bw.webp',
    webpSrcset: '/images/maya-landing-bw-640w.webp 640w, /images/maya-landing-bw-960w.webp 960w, /images/maya-landing-bw-1366w.webp 1366w, /images/maya-landing-bw-2048w.webp 2048w, /images/maya-landing-bw.webp 2732w',
  },
  landingColor: {
    src: '/images/maya-landing.jpg',
    width: 2732,
    height: 1536,
    srcset: '/images/maya-landing-640w.jpg 640w, /images/maya-landing-1024w.jpg 1024w, /images/maya-landing-1536w.jpg 1536w, /images/maya-landing-2048w.jpg 2048w, /images/maya-landing.jpg 2732w',
    webpSrc: '/images/maya-landing.webp',
    webpSrcset: '/images/maya-landing-640w.webp 640w, /images/maya-landing-1024w.webp 1024w, /images/maya-landing-1536w.webp 1536w, /images/maya-landing-2048w.webp 2048w, /images/maya-landing.webp 2732w',
  },
  // The root landing/redirect page's hero (src/pages/index.astro) — real
  // color, no responsive variants generated (single 313KB WebP is already
  // small enough not to need them). Distinct from landingColor above, which
  // is a different, unused-by-any-current-page asset.
  heroLandingColor: {
    src: '/images/maya-landing-color.webp',
    width: 2560,
    height: 1439,
  },
  // 1200x630, color, cropped from the same master — for og:image /
  // JSON-LD image only, never rendered as an on-page <img>.
  landingOg: {
    src: '/images/maya-landing-og.jpg',
    width: 1200,
    height: 630,
  },
  // Reuses the landing page's hero photo (src/pages/index.astro) rather
  // than its own dedicated shot — same file as heroLandingColor above, no
  // separate copy on disk. No srcset: that single WebP has no generated
  // smaller variants (see heroLandingColor's own comment).
  epkHero: {
    src: '/images/maya-landing-color.webp',
    width: 2560,
    height: 1439,
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
    height: 1245,
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
  epkFendi: {
    src: '/images/epk/epk-fendi.jpg',
    width: 1080,
    height: 720,
    srcset: '/images/epk/epk-fendi-540w.jpg 540w, /images/epk/epk-fendi.jpg 1080w',
  },
  epkWorldStages: {
    src: '/images/epk/epk-world-stages.jpg',
    width: 1066,
    height: 1600,
    srcset: '/images/epk/epk-world-stages-533w.jpg 533w, /images/epk/epk-world-stages.jpg 1066w',
  },
  // Video Sets page hero — distinct from epkWorldStages above (still used
  // by the EPK pages' own World Stages section, left untouched). Single
  // file, no generated smaller variants.
  videoHeroGreenvalley: {
    src: '/images/video-hero-greenvalley.webp',
    width: 1920,
    height: 1080,
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
  // The real press kit photos (EPK "Press Photos" grid), restoring what
  // epkPress1-4 above were standing in for. No srcset: single files, no
  // generated smaller variants.
  epkPressKit1: { src: '/images/epk/press/press-kit-1.jpg', width: 1080, height: 1080 },
  epkPressKit2: { src: '/images/epk/press/press-kit-2.jpg', width: 1080, height: 1080 },
  epkPressKit3: { src: '/images/epk/press/press-kit-3.jpg', width: 1080, height: 1080 },
  epkPressKit4: { src: '/images/epk/press/press-kit-4.jpg', width: 1080, height: 1080 },
};

// Looks up an entry by its `src` path — lets HeroBackground callers keep
// passing a plain path (as every page already does) while still getting
// the matching width/height/srcset without repeating them at every call
// site. Returns undefined for paths with no registry entry (none expected,
// but callers should tolerate it rather than throw).
export function findImageBySrc(src) {
  return Object.values(images).find((entry) => entry.src === src);
}
