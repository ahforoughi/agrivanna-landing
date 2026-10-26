import type { MetadataRoute } from "next";

/** /robots.txt: everything is open to search engines except the form APIs. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: "https://agrivanna.com/sitemap.xml",
    host: "https://agrivanna.com",
  };
}
