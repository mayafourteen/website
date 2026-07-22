// Curated SoundCloud embeds for /v3/audio-sets. Every URL below was
// verified live (SoundCloud oEmbed API, not just an HTTP 200 — SoundCloud's
// SPA returns 200 for nonexistent paths too) before being added here.
//
// Visual mode (artwork-filled dark player), warm-white/neutral play-button
// color — shared builder so every embed's query string stays identical.
export function buildEmbedUrl(trackUrl) {
  const params = new URLSearchParams({
    url: trackUrl,
    color: '#f2ede4',
    auto_play: 'false',
    hide_related: 'true',
    show_comments: 'false',
    show_user: 'true',
    show_reposts: 'false',
    show_teaser: 'false',
    visual: 'true',
  });
  return `https://w.soundcloud.com/player/?${params.toString()}`;
}
//
// Mixes mirror the five SPOTLIGHT (pinned) sets on her SoundCloud profile,
// in the profile's own order (Antonio, 2026-07-22). Two of these (Ibiza
// Live Radio, Retro Pulse) did not exist at the previous pass; all five
// were re-verified live on soundcloud.com before this update.
export const mixes = [
  {
    url: 'https://soundcloud.com/mayafourteen/maya-fourteen-la-mansarda',
    title: "'CENA ON' Radio Show, Live at La Mansarda",
  },
  {
    url: 'https://soundcloud.com/mayafourteen/ibiza-live-radio-exclusive-dj-mix',
    title: 'Ibiza Live Radio, Exclusive DJ Mix',
  },
  {
    url: 'https://soundcloud.com/mayafourteen/retro-pulse',
    title: 'Retro Pulse, Curated for Oceanus (Paris & London Fashion Week)',
  },
  {
    url: 'https://soundcloud.com/mayafourteen/ancestral-mato-grosso-brazil',
    title: 'Ancestral, Mato Grosso, Brazil',
  },
  {
    url: 'https://soundcloud.com/mayafourteen/pyramid-waves-showcase-privilege-roftop-sls-dubai',
    title: 'Pyramid Waves Showcase, Privilege Rooftop, SLS Dubai',
  },
];

export const originalTracks = [
  {
    url: 'https://soundcloud.com/mayafourteen/maya-fourteen-feat-francesca-uniqueness-extended-mix-systematic-20yrs',
    title: "'Uniqueness' feat. Francesca, Systematic Recordings",
  },
];

// No SoundCloud embed exists for the 'Feel Better' EP track (Mario Franca
// collab, VIVa MUSiC) — checked her profile, Mario Franca's profile and
// VIVa MUSiC's profile; every plausible URL slug 404'd on oEmbed. The
// release is confirmed real (Beatport/Traxsource/Instagram), just not
// uploaded to SoundCloud as of this pass. Rendered as a styled link to
// her Beatport artist page instead of a guessed embed — the exact
// track-level Beatport URL couldn't be independently verified either
// (Beatport blocks automated requests site-wide, confirmed separately),
// so this points at her verified artist page rather than a deep link
// that can't be confirmed live.
export const feelBetterFallback = {
  href: 'https://www.beatport.com/artist/maya-fourteen/1218920',
};
