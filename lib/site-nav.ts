import type { Dictionary } from "@/lib/dictionaries";

type MenuKey = keyof Dictionary["site"]["menu"]["items"];

export type MenuLink = { key: MenuKey; path: string; rnd?: boolean };

/**
 * The site map behind the mega menu and the footer, in one place. Paths are
 * language-neutral; wrap them in href()/localizePath() before linking.
 */
/** The software is one page; each link jumps to its section. */
export const SOFTWARE_LINKS: MenuLink[] = [
  { key: "webApp", path: "/product#web-app" },
  { key: "iosApp", path: "/product#ios-app" },
  { key: "pasture", path: "/product#pasture" },
  { key: "herd", path: "/product#herd" },
  { key: "grazing", path: "/product#grazing" },
  { key: "features", path: "/product#features" },
];

export const HARDWARE_LINKS: MenuLink[] = [
  { key: "fencing", path: "/product/virtual-fencing", rnd: true },
];

export const PRODUCT_LINKS: MenuLink[] = [...SOFTWARE_LINKS, ...HARDWARE_LINKS];

/** Footer only: News and Help & FAQ also have their own tabs in the top bar. */
export const RESOURCE_LINKS: MenuLink[] = [
  { key: "news", path: "/news" },
  { key: "faq", path: "/faq" },
];

export const COMPANY_LINKS: MenuLink[] = [
  { key: "about", path: "/company" },
  { key: "partners", path: "/company#partners" },
  { key: "contact", path: "/contact" },
];
