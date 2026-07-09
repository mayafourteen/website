(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) return;

  var root = document.documentElement;
  var TRANSITION_MS = 400;

  root.classList.add("js-page-transitions");

  function reveal() {
    root.classList.add("is-ready");
  }

  // Wait for the page's hero image to actually be decoded before revealing,
  // so the fade-in shows a finished frame (image already emerging from
  // black) instead of the fade running ahead of a still-loading image and
  // having it pop in partway through. Bounded by a safety timeout so a slow
  // or failed image load can never leave the page stuck black.
  function whenHeroImageReady(callback) {
    var heroImage = document.images[0];
    var settled = false;

    function done() {
      if (settled) return;
      settled = true;
      callback();
    }

    if (!heroImage || (heroImage.complete && heroImage.naturalWidth > 0)) {
      done();
      return;
    }

    if (heroImage.decode) {
      heroImage.decode().then(done).catch(done);
    } else {
      heroImage.addEventListener("load", done, { once: true });
      heroImage.addEventListener("error", done, { once: true });
    }

    window.setTimeout(done, 1200);
  }

  function start() {
    whenHeroImageReady(reveal);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }

  // Pages restored from the back/forward cache keep their old class state
  // (scripts don't re-run), so without this the page would stay invisible
  // after navigating back.
  window.addEventListener("pageshow", function (event) {
    if (event.persisted) start();
  });

  document.addEventListener("click", function (event) {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    var link = event.target.closest("a[href]");
    if (!link) return;

    var href = link.getAttribute("href");
    if (!href || href.charAt(0) === "#") return;
    if (link.target && link.target !== "_self") return;
    if (link.hasAttribute("download")) return;
    if (link.origin !== window.location.origin) return;
    if (/^(mailto:|tel:)/i.test(href)) return;

    event.preventDefault();
    root.classList.remove("is-ready");
    window.setTimeout(function () {
      window.location.href = link.href;
    }, TRANSITION_MS);
  });
})();
