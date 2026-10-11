/** Who's on the team page. Roles and bios are per-language, in lib/dictionaries. */
export type TeamMember = {
  slug: string;
  name: string;
  photo: string;
  linkedin: string;
};

export type Person = TeamMember & { role: string; focus: string; bio: string };

export const COFOUNDERS = [
  {
    slug: "amirhossein",
    name: "Amirhossein Foroughi",
    photo: "/team/amirhossein-2.jpg",
    linkedin: "https://www.linkedin.com/in/ahforoughi/",
  },
  {
    slug: "aminreza",
    name: "Aminreza Abbasi",
    photo: "/team/aminreza.jpg",
    linkedin: "https://www.linkedin.com/in/aminrezaabbasi/",
  },
  {
    slug: "haden",
    name: "Haden Harrison",
    photo: "/team/haden.jpg",
    linkedin: "https://www.linkedin.com/in/hadenharrison/",
  },
] as const satisfies readonly TeamMember[];

export const ADVISORS = [
  {
    slug: "bita",
    name: "Bita Asghari",
    photo: "/team/bita.png",
    linkedin: "https://www.linkedin.com/in/bita-asghari-b7710851/",
  },
  {
    slug: "jim",
    name: "Jim Lynch-Staunton",
    photo: "/team/jim.jpg",
    linkedin: "https://www.linkedin.com/",
  },
  {
    slug: "alireza",
    name: "Alireza Foroughi",
    photo: "/team/alireza.png",
    linkedin: "https://www.linkedin.com/",
  },
  {
    slug: "soheil",
    name: "Soheil Ghazizadeh",
    photo: "/team/soheil.jpg",
    linkedin: "https://www.linkedin.com/in/soheil-ghazizadeh-9252731ba/",
  },
  {
    slug: "jason",
    name: "Jason Donkersgoed",
    photo: "/team/jason.jpg",
    linkedin: "https://www.linkedin.com/in/jason-donkersgoed/",
  },
] as const satisfies readonly TeamMember[];

export type TeamSlug = (typeof COFOUNDERS)[number]["slug"] | (typeof ADVISORS)[number]["slug"];
