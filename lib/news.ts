/** Press and milestones. Titles, dates and summaries are per-language, in lib/dictionaries. */
export type NewsTag = "Press" | "Award" | "Accelerator" | "Competition";

export const NEWS = [
  {
    id: "calgary-tech",
    href: "https://calgary.tech/2026/09/29/agrivanna-brings-voice-powered-records-to-the-ranch/",
    image: "/story/rancher-interview.jpg",
    tag: "Press",
  },
  {
    id: "platform-top-10",
    href: "https://www.youtube.com/watch?v=2_-BQZmU3y4",
    image: "/story/team-photo.jpg",
    tag: "Competition",
  },
  {
    id: "rural-roots",
    href: "https://www.fieldtofuture.ca/ag-tech-startup-looks-to-make-virtual-fencing-more-accessible-to-ranchers/",
    image: "/story/cows-on-pasture.jpg",
    tag: "Press",
  },
  {
    id: "spring",
    href: "https://spring.is",
    image: "/story/spring-scale-ready.jpg",
    tag: "Accelerator",
  },
  {
    id: "start-something",
    href: "https://ucalgary.ca/news/ucalgary-founders-take-next-step-start-something-summit",
    image: "/story/start-something-winning.jpg",
    tag: "Award",
  },
  {
    id: "ucalgary-feature",
    href: "https://ucalgary.ca/news/agrivanna-student-built-ai-agtech-startup-helps-ranchers-herd-cattle-quicker-saving-money-time",
    image: "/story/team-ranch.jpg",
    tag: "Press",
  },
  {
    id: "arena",
    href: "https://news.smu.ca/news/2026/4/7/student-behind-ai-ranching-technology-wins-10000-grand-prize-in-the-arena-2026",
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
