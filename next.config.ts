import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/data-room",
        destination: "https://agrivanna.notion.site/agrivanna-data-room",
        permanent: true, // 308 redirect - SEO friendly
      },
    ];
  },
};

export default nextConfig;
