export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === "/sitemap.xml") {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
 <url>
  <loc>https://mayafourteen.com/</loc>
 </url>
 <url>
  <loc>https://mayafourteen.com/press</loc>
 </url>
</urlset>`;

    return new Response(sitemap, {
      headers: {
        "content-type": "application/xml; charset=UTF-8"
      }
    });
  }

  if (url.pathname === "/press") {
    const pressHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Maya Fourteen | Press & Media</title>
  <meta name="description" content="Maya Fourteen is an international electronic music artist and DJ known for emotionally driven, story-telling sets blending deep tech, organic house, and progressive sounds.">
  <link rel="canonical" href="https://mayafourteen.com/press">
  <style>
    body {
      background: #000;
      color: #fff;
      font-family: Arial, sans-serif;
      max-width: 900px;
      margin: 0 auto;
      padding: 60px 24px;
      line-height: 1.6;
    }
    h1 {
      font-size: 42px;
      margin-bottom: 12px;
    }
    p {
      color: #cfcfcf;
      margin-bottom: 36px;
    }
    .item {
      margin-bottom: 28px;
      padding-bottom: 20px;
      border-bottom: 1px solid #222;
    }
    .item strong {
      display: block;
      font-size: 20px;
      margin-bottom: 6px;
      color: #fff;
    }
    .item a {
      color: #fff;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <h1>Press & Media</h1>
  <p>Maya Fourteen has been featured across international electronic music media platforms.</p>

  <div class="item">
    <strong>DJ Mag LATAM</strong>
    <a href="https://djmagla.com/conoce-a-maya-fourteen-la-artista-brasilena-que-esta-llevando-su-talento-a-nuevos-lugares-del-mundo" target="_blank">Read article</a>
  </div>

  <div class="item">
    <strong>Mixmag Brazil</strong>
    <a href="https://mixmag.com.br/feature/conheca-maya-fourteen-artista-brasileira-reconhecida-por-nicole-moudaber-e-pete-tong" target="_blank">Read article</a>
  </div>

  <div class="item">
    <strong>Alataj</strong>
    <a href="https://alataj.com.br/15-to-understand/maya" target="_blank">Read article</a>
  </div>

  <div class="item">
    <strong>Play BPM</strong>
    <a href="https://playbpm.com.br/colunas/play-bpm-indica/maya/" target="_blank">Read article</a>
  </div>

  <div class="item">
    <strong>Clubbing TV</strong>
    <a href="https://clubbingtv.com/shows/view/5593/lds-with-maya-fourteen-ade-2023-spaces/" target="_blank">Watch feature</a>
  </div>

  <div class="item">
    <strong>Sync Beat Magazine</strong>
    <a href="https://issuu.com/syncbeatmagazine/docs/maya_-_english" target="_blank">View publication</a>
  </div>

  <div class="item">
    <strong>Sync Beat Magazine Cover</strong>
    <a href="https://issuu.com/syncbeatmagazine/docs/portada_bebbo" target="_blank">View cover feature</a>
  </div>

  <div class="item">
    <strong>EKM</strong>
    <a href="https://ekm.co/maya-fourteen-uniqueness/" target="_blank">Read review</a>
  </div>
</body>
</html>`;

    return new Response(pressHtml, {
      headers: {
        "content-type": "text/html; charset=UTF-8"
      }
    });
  }
  const response = await fetch(request);
  const contentType = response.headers.get("content-type");

  if (contentType && contentType.includes("text/html")) {
    let html = await response.text();

    const schema = `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Maya Fourteen",
  "alternateName": "MAYA FOURTEEN",
  "url": "https://mayafourteen.com",
  "image": "https://mayafourteen.com/assets/maya-landing.jpg",
  "jobTitle": "International Electronic Music Artist and DJ",
  "description": "International electronic music artist and DJ from the Amazon Basin (Brazil). Winner of the 2025 Nicole Moudaber Award.",
  "foundingLocation": {
    "@type": "Place",
    "name": "Mato Grosso, Brazil"
  },
  "genre": [
    "Melodic Techno",
    "Deep House",
    "Progressive House",
    "Electronic Music"
  ],
  "award": [
    "Nicole Moudaber Future Talent Award (IMS Ibiza 2025)",
    "Pete Tong Future Talent Program (IMS Ibiza 2025)"
  ],
  "sameAs": [
    "https://www.instagram.com/mayafourteen",
    "https://www.linkedin.com/in/mayafourteen",
    "https://www.youtube.com/@mayafourteen",
    "https://soundcloud.com/mayafourteen",
    "https://www.beatport.com/artist/maya-fourteen/1090623",
    "https://open.spotify.com/artist/6vCjW095i7Y8D7P2Uf6H0K"
  ]
}
</script>
`;

    html = html.replace("</head>", schema + "</head>");
    html = html.replace("</body>", `<div style="position:absolute;left:-9999px;"><a href="/press">Press & Media</a></div></body>`);
    return new Response(html, response);
  }

  return response;
}
};
