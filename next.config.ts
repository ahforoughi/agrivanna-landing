import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/data-room",
        destination: "https://agrivanna.notion.site/agrivanna-data-room",
        permanent: true, // 308 redirect - SEO friendly
      },
      {
        source: "/pitch-deck",
        destination: "https://agrivanna.notion.site/agrivanna-data-room",
        permanent: true, // 308 redirect - SEO friendly
      },
    ];
  },
  async headers() {
    return [
      {
        // Specific headers for video files
        source: "/hero.mp4",
        headers: [
          {
            key: "Content-Type",
            value: "video/mp4",
          },
          {
            key: "Accept-Ranges",
            value: "bytes",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Headers for image files
        source: "/:path*.{jpg,jpeg,png,svg,webp,gif}",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
