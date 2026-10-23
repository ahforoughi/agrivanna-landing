/* Precaches every file the demo uses, then serves everything from the cache, so
   the demo runs with Wi-Fi off. Bump VERSION whenever any file changes. */
const VERSION = "booth-demo-v16";
const FILES = [
  "/demo", "/demo/index.html", "/demo/style.css", "/demo/app.js", "/demo/data.js", "/demo/manifest.webmanifest",
  "/demo/assets/map.jpg", "/demo/assets/logo.png", "/demo/assets/mark.png", "/demo/assets/qr.png",
  "/demo/assets/icon-180.png", "/demo/assets/icon-192.png", "/demo/assets/icon-512.png",
  "/demo/assets/f/fence-hero.jpg",
  "/demo/assets/Geist-Medium.ttf", "/demo/assets/Geist-SemiBold.ttf", "/demo/assets/GeistMono-Medium.ttf",
  // the home page video: the website's own hero video
  "/video/hero-1080.mp4", "/video/hero-poster.jpg",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const range = req.headers.get("range");
  e.respondWith((async () => {
    const cache = await caches.open(VERSION);
    const hit = await cache.match(req, { ignoreSearch: true, ignoreVary: true }) ||
                (req.mode === "navigate" ? await cache.match("/demo/index.html") : null);
    if (!hit) {
      try { return await fetch(req); } catch { return new Response("", { status: 504 }); }
    }
    // Safari asks for video in byte ranges and won't play a plain 200
    if (range) {
      const buf = await hit.arrayBuffer();
      const m = /bytes=(\d*)-(\d*)/.exec(range) || [];
      const size = buf.byteLength;
      const start = m[1] ? parseInt(m[1], 10) : 0;
      const end = m[2] ? Math.min(parseInt(m[2], 10), size - 1) : size - 1;
      return new Response(buf.slice(start, end + 1), {
        status: 206,
        headers: {
          "Content-Type": hit.headers.get("Content-Type") || "video/mp4",
          "Content-Range": `bytes ${start}-${end}/${size}`,
          "Content-Length": String(end - start + 1),
          "Accept-Ranges": "bytes",
        },
      });
    }
    return hit;
  })());
});
