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
    // Responsive variants (generated with sharp, q72) so mobile loads a
    // ~12KB image instead of the full 313KB master — the homepage hero is
    // the page's LCP element, so this directly drives mobile LCP.
    srcset: '/images/maya-landing-color-640w.webp 640w, /images/maya-landing-color-960w.webp 960w, /images/maya-landing-color-1366w.webp 1366w, /images/maya-landing-color-2048w.webp 2048w, /images/maya-landing-color.webp 2560w',
    webpSrc: '/images/maya-landing-color.webp',
    webpSrcset: '/images/maya-landing-color-640w.webp 640w, /images/maya-landing-color-960w.webp 960w, /images/maya-landing-color-1366w.webp 1366w, /images/maya-landing-color-2048w.webp 2048w, /images/maya-landing-color.webp 2560w',
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
  // Press page background (2026-07-21, Antonio's pick): "CoffeStreet"
  // urban shot against a metal shutter, pre-converted to grayscale
  // (the page filter darkens it further). Source: Hub/Maya/Assets.
  pressHeroStreet: {
    // Mystery crop (Antonio): frame starts at the lips, face unseen.
    src: '/images/press-hero-street.webp',
    width: 1920,
    height: 1080,
    srcset: '/images/press-hero-street-640w.webp 640w, /images/press-hero-street-960w.webp 960w, /images/press-hero-street-1366w.webp 1366w, /images/press-hero-street.webp 1920w',
    webpSrc: '/images/press-hero-street.webp',
    webpSrcset: '/images/press-hero-street-640w.webp 640w, /images/press-hero-street-960w.webp 960w, /images/press-hero-street-1366w.webp 1366w, /images/press-hero-street.webp 1920w',
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
    // Re-cropped 2026-07-21 v3 (Antonio): gentle 1.09x zoom from the
    // original 1920x1080 — full figure with generous margin, dead right
    // side trimmed, slight top-crowd trim. (v1 1.43x was far too tight,
    // v2 1.2x still read too close.)
    src: '/images/video-hero-greenvalley.webp',
    width: 1244,
    height: 700,
    // Responsive variants (sharp, q58 — always rendered darkened+grayscale
    // as a filtered background, so aggressive compression is invisible).
    srcset: '/images/video-hero-greenvalley-640w.webp 640w, /images/video-hero-greenvalley-960w.webp 960w, /images/video-hero-greenvalley-1344w.webp 1344w',
    webpSrc: '/images/video-hero-greenvalley.webp',
    webpSrcset: '/images/video-hero-greenvalley-640w.webp 640w, /images/video-hero-greenvalley-960w.webp 960w, /images/video-hero-greenvalley-1344w.webp 1344w',
  },
  // Press page hero (src/pages/press.astro + press-pt/press-es) — single
  // file, no generated smaller variants. Was previously missing from this
  // registry entirely, which meant HeroBackground.astro's width/height
  // lookup silently returned undefined and the <img> shipped with no
  // intrinsic size (a real CLS risk) despite every other hero image here
  // having one. Named pressHero, not epkHero — that key is already taken
  // above by the EPK pages' own (different) hero photo; reusing it would
  // silently shadow that entry via JS's last-duplicate-key-wins semantics.
  pressHero: {
    src: '/images/epk/epk-hero.jpg',
    width: 1080,
    height: 1350,
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

  // /fashion-vibes (unlisted, noindex) — sourced from the private Fashion &
  // Luxury Vibes EPK at epk-fl-maya-fourteen-6m0uheh.gamma.site, re-hosted
  // here rather than hotlinked. No srcset: single files, no generated
  // smaller variants (same convention as the epkPressKit/epkAudience keys
  // above for one-off photos under ~1200px).
  // Background-removed cutout (real alpha channel, not a CSS trick) — kept
  // as .webp specifically, not flattened to .jpg, so the transparency
  // survives and the figure sits directly on the starfield background.
  fashionHero: { src: '/images/fashion/fashion-hero.webp', width: 1024, height: 1024 },
  fashionProfile: { src: '/images/fashion/fashion-profile.jpg', width: 1080, height: 1080 },
  fashionAward: { src: '/images/fashion/fashion-award.jpg', width: 1024, height: 1536 },
  fashionF1: { src: '/images/fashion/fashion-f1.jpg', width: 600, height: 600 },
  fashionFilm: { src: '/images/fashion/fashion-film.jpg', width: 1200, height: 1200 },
  // Reverted 2026-07-19 (round 2 review): the W Budapest swap above was
  // rolled back per client feedback, back to the original Bali
  // destination-set portrait.
  fashionHospitality: { src: '/images/fashion/fashion-hospitality.jpg', width: 625, height: 625 },
  fashionBrand: { src: '/images/fashion/fashion-brand.jpg', width: 600, height: 600 },
  fashionOceanus1: { src: '/images/fashion/fashion-oceanus-1.jpg', width: 1080, height: 1080 },
  fashionOceanus2: { src: '/images/fashion/fashion-oceanus-2.jpg', width: 1080, height: 675 },
  fashionPress1: { src: '/images/fashion/fashion-press-1.jpg', width: 900, height: 900 },
  fashionPress2: { src: '/images/fashion/fashion-press-2.jpg', width: 600, height: 600 },
  fashionPress3: { src: '/images/fashion/fashion-press-3.jpg', width: 600, height: 600 },
  fashionPress4: { src: '/images/fashion/fashion-press-4.jpg', width: 600, height: 600 },
};

// Looks up an entry by its `src` path — lets HeroBackground callers keep
// passing a plain path (as every page already does) while still getting
// the matching width/height/srcset without repeating them at every call
// site. Returns undefined for paths with no registry entry (none expected,
// but callers should tolerate it rather than throw).
export function findImageBySrc(src) {
  return Object.values(images).find((entry) => entry.src === src);
}
