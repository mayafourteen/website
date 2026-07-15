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
// Two of the originally-requested named mixes ("IBIZA LIVE RADIO"
// exclusive DJ mix, a "RETRO PULSE" set) could not be found on her
// profile after an extensive search — checked plausible URL slugs via
// oEmbed, all 404. Replaced with her next-highest-played sets instead of
// guessing a URL, per the brief's own "substitute the highest-play-count
// set" fallback instruction.
export const mixes = [
  {
    url: 'https://soundcloud.com/mayafourteen/ancestral-mato-grosso-brazil',
    title: 'Ancestral, Mato Grosso, Brazil',
  },
  {
    url: 'https://soundcloud.com/mayafourteen/maya-fourteen-la-mansarda',
    title: "'CENA ON' Radio Show, Live at La Mansarda",
  },
  {
    url: 'https://soundcloud.com/mayafourteen/maya-f1-after-race-recap',
    title: 'Maya F1 After Race Recap',
  },
  // Substitute for "IBIZA LIVE RADIO Exclusive DJ Mix" (not found) — her
  // 2nd highest-played set at time of writing.
  {
    url: 'https://soundcloud.com/mayafourteen/maya-fourteen-greenvalley-summer-opening-camboriu-brazil',
    title: 'Live DJ Set at Greenvalley, Camboriú',
  },
  // Substitute for "RETRO PULSE" (not found) — her 3rd highest-played set.
  {
    url: 'https://soundcloud.com/mayafourteen/dance-club-mag-podcast-feat-maya-fourteen',
    title: "Dance Club Mag 'Global Sessions', Portugal",
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
