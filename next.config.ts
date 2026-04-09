import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Bump default quality from 75 — preserves detail on UI screenshots and product renders
    qualities: [75, 90, 95, 100],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2560, 3200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 768, 1024],
  },
  async redirects() {
    return [
      { source: "/data-room", destination: "https://agrivanna.notion.site/agrivanna-data-room", permanent: true },
      { source: "/pitch-deck", destination: "https://agrivanna.notion.site/agrivanna-data-room", permanent: true },
    ];
  },
  async headers() {
    return [
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

export default nextConfig;
