/**
 * Inline script for <Reveal>, run in <head> before the page's JavaScript loads.
 * It marks <html data-reveal-on> (which lets CSS hide not-yet-seen content) and
 * then shows each [data-reveal] by giving it data-in:
 * - straight away if it's already on screen or above it,
 * - through an IntersectionObserver when it scrolls into view,
 * - again whenever the tab becomes visible or new content is added.
 * Browsers without IntersectionObserver never hide anything.
 */
export const REVEAL_SCRIPT = `(function () {
  if (!("IntersectionObserver" in window)) return;
  var root = document.documentElement;
  root.setAttribute("data-reveal-on", "");
  var show = function (el) { el.setAttribute("data-in", ""); io.unobserve(el); };
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) show(e.target); });
  }, { rootMargin: "0px 0px -40px 0px" });
  var sweep = function () {
    var bottom = window.innerHeight;
    document.querySelectorAll("[data-reveal]:not([data-in])").forEach(function (el) {
      if (el.getBoundingClientRect().top < bottom) show(el); else io.observe(el);
    });
  };
  var queued = false;
  var soon = function () {
    if (queued) return;
    queued = true;
    setTimeout(function () { queued = false; sweep(); }, 30);
  };
  document.addEventListener("DOMContentLoaded", function () {
    sweep();
    new MutationObserver(soon).observe(document.body, { childList: true, subtree: true });
  });
  window.addEventListener("load", sweep);
  window.addEventListener("pageshow", sweep);
  window.addEventListener("resize", soon);
  document.addEventListener("visibilitychange", function () { if (!document.hidden) sweep(); });
})();`;
