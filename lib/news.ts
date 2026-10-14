/** Press and milestones. Titles, dates and summaries are per-language, in lib/dictionaries. */
export type NewsTag = "Press" | "Award" | "Accelerator" | "Competition";

export const NEWS = [
  {
    id: "spring",
    href: "https://spring.is",
    image: "/story/spring-scale-ready.jpg",
    tag: "Accelerator",
  },
  {
    id: "start-something",
    href: "https://ucalgary.ca/news/agrivanna-student-built-ai-agtech-startup-helps-ranchers-herd-cattle-quicker-saving-money-time",
    image: "/story/start-something-winning.jpg",
    tag: "Award",
  },
  {
    id: "arena",
    href: "https://arthurlirvingentrepreneurshipcentre.ca/thearena/",
    image: "/story/arena-win.png",
    tag: "Award",
  },
  {
    id: "liftoff",
    href: "https://www.linkedin.com/posts/agrivanna_agrivanna-agtech-virtualabrfencing-activity-7443470146116935680-Tv0b",
    image: "/story/liftoff.jpg",
    tag: "Competition",
  },
  {
    id: "aurrin",
    href: "https://www.linkedin.com/posts/aurrinventures_aurrinventures-yycstartups-startupcommunity-activity-7432893362451660800-tYK0",
    image: "/story/aurrin-win.png",
    tag: "Award",
  },
  {
    id: "plug-and-play",
    href: "https://www.linkedin.com/posts/ahforoughi_agtech-aiinagriculture-aginnovation-activity-7397013956038488065-gNdZ",
    image: "/story/pnp-photo.jpg",
    tag: "Accelerator",
  },
  {
    id: "thrive",
    href: "https://thriveagrifood.com/academy-cohort-vii/",
    image: "/story/thrive-cohort.jpg",
    // Extra zoom crops the scan border out of the source photo.
    imageZoom: true,
    tag: "Accelerator",
  },
  {
    id: "techstart",
    href: "https://techstartucalgary.com/projects",
    image: "/story/techstart.jpg",
    tag: "Award",
  },
] as const satisfies readonly {
  id: string;
  href: string;
  image: string;
  imageZoom?: boolean;
  tag: NewsTag;
}[];

export type NewsId = (typeof NEWS)[number]["id"];

// Kept deliberately simple — no overpromising. Future items stay vague.
export const TIMELINE = [
  { id: "founded", status: "past" },
  { id: "techstart", status: "past", image: "/story/techstart.jpg" },
  { id: "thrive", status: "past", image: "/story/thrive-cohort-2-v2.jpg" },
  { id: "plug-and-play", status: "past", image: "/story/timeline-pnp.jpg" },
  { id: "aurrin", status: "past", image: "/story/timeline-aurrin.jpg" },
  { id: "liftoff", status: "past", image: "/story/timeline-liftoff.jpg" },
  { id: "arena", status: "past", image: "/story/timeline-arena.webp" },
  { id: "pilots", status: "now", image: "/story/timeline-ranch-pilot-collars-v2.jpg", rnd: true },
  { id: "refinement", status: "future", image: "/story/timeline-bench-testing-v2.jpg" },
  { id: "western-canada", status: "future", image: "/story/canada-flag.jpg" },
] as const satisfies readonly {
  id: string;
  status: "past" | "now" | "future";
  image?: string;
  /** The photo shows collar hardware, so it carries the R&D label. */
  rnd?: boolean;
}[];

export type MilestoneId = (typeof TIMELINE)[number]["id"];
