export type NewsItem = {
  title: string;
  source: string;
  date: string;
  summary: string;
  href: string;
  image: string;
  tag: "Press" | "Award" | "Accelerator" | "Competition";
};

export const NEWS: NewsItem[] = [
  {
    title: "Agrivanna takes 1st at The Arena Pitch Competition",
    source: "Arthur L. Irving Entrepreneurship Centre",
    date: "March 2026",
    summary:
      "Agrivanna placed first at the Arena Pitch Competition — named a top Canadian university startup and earning a national spotlight for grazing intelligence.",
    href: "https://arthurlirvingentrepreneurshipcentre.ca/thearena/",
    image: "/story/arena-win.png",
    tag: "Award",
  },
  {
    title: "2nd place at Hunter Hub Liftoff",
    source: "University of Calgary · Hunter Hub",
    date: "March 2026",
    summary:
      "Agrivanna took second place at the Hunter Hub Liftoff competition, backed by the University of Calgary's entrepreneurial thinking program.",
    href: "https://www.linkedin.com/posts/agrivanna_agrivanna-agtech-virtualabrfencing-activity-7443470146116935680-Tv0b",
    image: "/story/liftoff.jpg",
    tag: "Competition",
  },
  {
    title: "1st place at Aurrin Ventures Pitch Competition",
    source: "Aurrin Ventures",
    date: "February 2026",
    summary:
      "Won the Most Investible Company Award at the Aurrin Ventures pitch competition in YYC's startup community.",
    href: "https://www.linkedin.com/posts/aurrinventures_aurrinventures-yycstartups-startupcommunity-activity-7432893362451660800-tYK0",
    image: "/story/aurrin-win.png",
    tag: "Award",
  },
  {
    title: "Selected for Plug and Play Kananaskis accelerator",
    source: "Plug and Play",
    date: "November 2025",
    summary:
      "Agrivanna joined the Plug and Play Kananaskis cohort, connecting the team with global corporate partners and investors in agtech.",
    href: "https://www.linkedin.com/posts/ahforoughi_agtech-aiinagriculture-aginnovation-activity-7397013956038488065-gNdZ",
    image: "/story/pnp-photo.jpg",
    tag: "Accelerator",
  },
  {
    title: "Joined THRIVE SVG Academy Cohort VII",
    source: "THRIVE Agrifood",
    date: "November 2025",
    summary:
      "Agrivanna was selected for THRIVE's agtech venture cohort — the leading global network for agrifood innovation.",
    href: "https://thriveagrifood.com/academy-cohort-vii/",
    image: "/story/thrive-cohort.jpg",
    tag: "Accelerator",
  },
  {
    title: "1st place — Student Startup of the Year",
    source: "TechStart UCalgary",
    date: "May 2025",
    summary:
      "Agrivanna won TechStart UCalgary's top student startup award, validating the vision in front of Calgary's tech community.",
    href: "https://techstartucalgary.com/projects",
    image: "/story/techstart.jpg",
    tag: "Award",
  },
];

export type Milestone = {
  date: string;
  title: string;
  body: string;
  status: "past" | "now" | "future";
  image?: string;
};

// Kept deliberately simple — no overpromising. Future items stay vague.
export const TIMELINE: Milestone[] = [
  {
    date: "Oct 2024",
    title: "Agrivanna founded",
    body: "Three co-founders start the company in Calgary, Alberta.",
    status: "past",
  },
  {
    date: "May 2025",
    title: "TechStart UCalgary",
    body: "Named Student Startup of the Year.",
    status: "past",
    image: "/story/techstart.jpg",
  },
  {
    date: "Nov 2025",
    title: "THRIVE Cohort VII",
    body: "Joined the THRIVE SVG Academy — global agrifood innovation network.",
    status: "past",
  },
  {
    date: "Nov 2025",
    title: "Plug and Play",
    body: "Accepted into the Plug and Play Kananaskis accelerator.",
    status: "past",
    image: "/story/timeline-pnp.jpg",
  },
  {
    date: "Feb 2026",
    title: "Aurrin Ventures",
    body: "Won Most Investible Company at the Aurrin pitch competition.",
    status: "past",
    image: "/story/timeline-aurrin.jpg",
  },
  {
    date: "Mar 2026",
    title: "Hunter Hub Liftoff",
    body: "Second place at UCalgary's flagship startup competition.",
    status: "past",
    image: "/story/timeline-liftoff.jpg",
  },
  {
    date: "Mar 2026",
    title: "The Arena · 1st place",
    body: "Top Canadian university startup at The Arena pitch competition.",
    status: "past",
    image: "/story/timeline-arena.webp",
  },
  {
    date: "Summer 2026",
    title: "First ranch pilots",
    body: "First real-world deployments at partner ranches in Alberta.",
    status: "now",
  },
  {
    date: "Late 2026",
    title: "Product refinement",
    body: "Iterate on hardware and software from pilot data.",
    status: "future",
    image: "/story/timeline-mvp.jpg",
  },
  {
    date: "2027",
    title: "Western Canada",
    body: "Expand pilots and commercial deployments across the prairies.",
    status: "future",
  },
];
