import type { NextConfig } from "next";
import { withBotId } from "botid/next/config";

const nextConfig: NextConfig = {
  images: {
    // Bump default quality from 75 — preserves detail on UI screenshots and product renders
    qualities: [75, 90, 95, 100],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2560, 3200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 768, 1024],
  },
  async redirects() {
    // Retired 2024-design pages. Kept as redirects so old bookmarks and search
    // results land somewhere current instead of a 404.
    return [
      // One address for the site: www served every page too, so Google filed
      // the www copies as "Alternate page with proper canonical tag"
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.agrivanna.com" }],
        destination: "https://agrivanna.com/:path*",
        permanent: true,
      },
      { source: "/solutions", destination: "/", permanent: true },
      { source: "/products", destination: "/product", permanent: true },
      { source: "/pilot-waitlist", destination: "/", permanent: true },
      { source: "/about", destination: "/company", permanent: true },
      { source: "/careers", destination: "/company#team", permanent: true },
      // The team now lives on the About page. Not permanent, in case it gets its own page again.
      { source: "/team", destination: "/company#team", permanent: false },
      { source: "/fr/team", destination: "/fr/company#team", permanent: false },
      { source: "/investment", destination: "/", permanent: true },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      // The software used to be one page per part; it's one page with sections
      // now. Not permanent while the product menu is still settling.
      ...[
        ["/product/voice", "/product#ios-app"],
        ["/product/offline", "/product#ios-app"],
        ["/product/pasture", "/product#pasture"],
        ["/product/web", "/product#web-app"],
        ["/features", "/product#features"],
      ].flatMap(([from, to]) => [
        { source: from, destination: to, permanent: false },
        { source: `/fr${from}`, destination: `/fr${to}`, permanent: false },
      ]),
    ];
  },
  async rewrites() {
    // The booth's offline tablet demo: plain files in public/demo, opened at /demo
    return [{ source: "/demo", destination: "/demo/index.html" }];
  },
  async headers() {
    return [
      {
        // The demo's offline cache covers /demo itself, one level above its file, and
        // must always be the latest version; nothing in it should reach search engines
        source: "/demo/sw.js",
        headers: [
          { key: "Service-Worker-Allowed", value: "/demo" },
          { key: "Cache-Control", value: "no-cache" },
        ],
      },
      {
        source: "/demo/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/demo",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/:path*.mp4",
        headers: [
          { key: "Content-Type", value: "video/mp4" },
          { key: "Accept-Ranges", value: "bytes" },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/:path*.{jpg,jpeg,png,svg,webp,gif}",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

// withBotId adds the routes Vercel BotID uses to check visitors (see instrumentation-client.ts)
export default withBotId(nextConfig);
