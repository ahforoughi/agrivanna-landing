export type Person = {
  slug: string;
  name: string;
  role: string;
  focus: string;
  bio: string;
  photo: string;
  linkedin: string;
};

export const COFOUNDERS: Person[] = [
  {
    slug: "amirhossein",
    name: "Amirhossein Foroughi",
    role: "Chief Executive Officer",
    focus: "Product · AI · Satellite intelligence",
    bio: "MSc Software Engineering. AI engineer and software developer leading Agrivanna's product strategy, AI platform, and satellite forage intelligence. Sets the technical north star for the company.",
    photo: "/team/amirhossein.png",
    linkedin: "https://www.linkedin.com/in/ahforoughi/",
  },
  {
    slug: "aminreza",
    name: "Aminreza Abbasi",
    role: "Chief Technology Officer",
    focus: "Edge AI · Jetson · Hardware integration",
    bio: "Computer science student and edge AI specialist. Oversees Agrivanna's software stack, hardware integration, and Jetson-based deployment — everything that runs on the collar and in the field.",
    photo: "/team/aminreza.jpg",
    linkedin: "https://www.linkedin.com/in/aminrezaabbasi/",
  },
  {
    slug: "haden",
    name: "Haden Harrison",
    role: "Chief Operating Officer",
    focus: "Ranch ops · Go-to-market · Finance",
    bio: "BCom student and ag operator. Manages operations, rancher relationships, and commercial execution. The voice of the customer inside the company — and the founder most likely to be in a truck.",
    photo: "/team/haden.jpg",
    linkedin: "https://www.linkedin.com/in/hadenharrison/",
  },
];

export const ADVISORS: Person[] = [
  {
    slug: "bita",
    name: "Bita Asghari",
    role: "Hardware Lead · Ph.D.",
    focus: "FPGA · Embedded systems · Low-power edge compute",
    bio: "PhD engineer and FPGA expert directing Agrivanna's collar hardware design, embedded systems, and low-power edge compute. The reason the collar lives on solar alone.",
    photo: "/team/bita.png",
    linkedin: "https://www.linkedin.com/in/bita-asghari-b7710851/",
  },
  {
    slug: "jim",
    name: "Jim Lynch-Staunton",
    role: "Lead Field Validation Partner",
    focus: "Multi-generation rancher · Antelope Butte Ranch",
    bio: "Data-driven multi-generation rancher. Agrivanna's primary validation partner at Antelope Butte Ranch, where the system is tested against real cattle, real terrain, and real weather.",
    photo: "/team/jim.jpg",
    linkedin: "https://www.linkedin.com/",
  },
  {
    slug: "alireza",
    name: "Alireza Foroughi",
    role: "Veterinary Science Advisor",
    focus: "Cattle welfare · Grazing science · Herd behavior",
    bio: "Veterinary science PhD candidate. Advises on cattle welfare, herd behavior, and grazing science — the biology behind every AI recommendation the PRS makes.",
    photo: "/team/alireza.png",
    linkedin: "https://www.linkedin.com/",
  },
  {
    slug: "jade",
    name: "Jade Alberts",
    role: "Advisor · Fundraising & Commercialization",
    focus: "Serial entrepreneur · Angel investor",
    bio: "Serial entrepreneur and angel investor guiding Agrivanna's fundraising, commercialization, and investor readiness. Opens doors and sharpens pitches.",
    photo: "/team/jade.jpg",
    linkedin: "https://www.linkedin.com/in/jadealberts/",
  },
  {
    slug: "jason",
    name: "Jason Donkersgoed",
    role: "Advisor · Strategy & Leadership",
    focus: "Leadership coach · THRIVE SVG mentor",
    bio: "Leadership coach and THRIVE SVG advisor. Supports Agrivanna's strategy, team development, and milestone execution. The operating-rhythm advisor behind the founders.",
    photo: "/team/jason.jpg",
    linkedin: "https://www.linkedin.com/in/jason-donkersgoed/",
  },
];
