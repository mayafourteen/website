// Canonical order (Instagram, YouTube, SoundCloud, Beatport, EPK) first,
// then the remaining icons that aren't part of that canonical five, in
// their prior relative order. Any page that derives a subset via
// .filter() (e.g. the EPK "Discover MAYA" row) inherits this order for
// free without needing its own explicit ordering list.
export const socialLinks = [
  { href: 'https://www.instagram.com/mayafourteen/', title: 'Instagram', type: 'fa', name: 'instagram' },
  { href: 'https://www.youtube.com/@MayaFourteen', title: 'YouTube', type: 'fa', name: 'youtube' },
  { href: 'https://soundcloud.com/mayafourteen', title: 'SoundCloud', type: 'fa', name: 'soundcloud' },
  { href: 'https://www.beatport.com/pt/artist/maya-fourteen/1218920', title: 'Beatport', type: 'svg', name: 'beatport' },
  { href: '/v3/epk', title: 'EPK', type: 'svg', name: 'epk' },
  { href: 'https://open.spotify.com/artist/6vCjW095i7Y8D7P2Uf6H0K', title: 'Spotify', type: 'fa', name: 'spotify' },
  { href: 'https://music.beepd.co/card/mayafourteen', title: 'Beepd', type: 'svg', name: 'beepd' },
];
