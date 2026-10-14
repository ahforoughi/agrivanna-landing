import type { Dictionary } from "@/lib/dictionaries";

type MenuKey = keyof Dictionary["site"]["menu"]["items"];

export type MenuLink = { key: MenuKey; path: string; rnd?: boolean };

/**
 * The site map behind the mega menu and the footer, in one place. Paths are
 * language-neutral; wrap them in href()/localizePath() before linking.
 */
export const SOFTWARE_LINKS: MenuLink[] = [
  { key: "voice", path: "/product/voice" },
  { key: "offline", path: "/product/offline" },
  { key: "pasture", path: "/product/pasture" },
  { key: "web", path: "/product/web" },
  { key: "features", path: "/features" },
];

export const HARDWARE_LINKS: MenuLink[] = [
  { key: "fencing", path: "/product/virtual-fencing", rnd: true },
];

export const PRODUCT_LINKS: MenuLink[] = [...SOFTWARE_LINKS, ...HARDWARE_LINKS];

/** Footer only: News has its own tab in the menu, and the FAQ lives here and on /pricing. */
export const RESOURCE_LINKS: MenuLink[] = [
  { key: "news", path: "/news" },
  { key: "faq", path: "/faq" },
];

export const COMPANY_LINKS: MenuLink[] = [
  { key: "about", path: "/company" },
  { key: "partners", path: "/company#partners" },
  { key: "contact", path: "/contact" },
];

export const APP_URL = "https://app.agrivanna.com";
