/**
 * Every visible string on the site, in English. fr.ts must have the same shape —
 * TypeScript fails the build if a key is missing there.
 *
 * Strings only, no functions: the dictionary is handed from the server to client
 * components. Placeholders like {name} are filled with fmt() from lib/i18n.
 */
const en = {
  meta: {
    title: "Agrivanna — Ranch records you can speak instead of type",
    description:
      "Speak your herd and pasture records with gloves on. Works with no signal, syncs when you're back in range, and builds rotational grazing plans from satellite imagery. $50/month.",
    ogTitle: "Agrivanna — Run the herd, not the software",
    ogDescription:
      "Voice-first ranch records that work offline, plus pasture mapping and rotational grazing plans.",
  },

  nav: {
    home: "Home",
    pricing: "Pricing",
    team: "Team",
    news: "News",
    freeTrial: "Free trial",
    homeAria: "Agrivanna home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  language: {
    label: "Language",
    switchTo: "Switch to {language}",
  },

  trialButton: "Start a free trial",
  bookCall: "Book a call",

  footer: {
    eyebrow: "Start today",
    headLine1: "Get it out of your head.",
    headLine2: "And into the record.",
    blurb:
      "Canadian agtech. Herd and pasture records built for dirty hands, heavy gloves, and country with no signal.",
    social: { email: "Email" },
    columns: {
      product: "Product",
      company: "Company",
      legal: "Legal",
    },
    links: {
      recording: "Voice records",
      offline: "Works offline",
      pasture: "Pasture & grazing",
      features: "Full feature list",
      pricing: "Pricing",
      team: "Team",
      news: "News & timeline",
      contact: "Contact",
      privacy: "Privacy policy",
      cookies: "Cookie policy",
      terms: "Terms of service",
    },
    copyright: "© {year} Agrivanna Inc. Calgary, Alberta.",
    support: "With the support of Alberta Innovates",
  },

  cookie: {
    aria: "Cookie choices",
    textBefore:
      "We use a few cookies to see which pages ranchers actually read. Nothing is sold, and nothing tracks you across other sites. Read the ",
    link: "cookie policy",
    textAfter: ".",
    reject: "Reject",
    accept: "Accept",
  },

  trial: {
    eyebrow: "Free trial",
    title: "Tell us about the outfit.",
    intro:
      "We set the ranch up by hand so it works on day one. Takes a minute — these are the same questions we'd ask on a call.",
    close: "Close",
    name: "Your name",
    email: "Email",
    phone: "Phone",
    ranch: "Ranch name",
    location: "Nearest town and province",
    locationPlaceholder: "e.g. Nanton, AB",
    head: "How many head",
    operation: "What you run",
    records: "Where your records live now",
    notes: "Anything we should know",
    notesPlaceholder: "Wand or scale you use, how many pastures, what you're hoping to fix.",
    choose: "Choose one",
    send: "Send it",
    sending: "Sending…",
    reassurance: "No credit card. We read every one of these ourselves.",
    error: "That didn't go through. Email haden@agrivanna.com and we'll sort it.",
    doneTitle: "Got it. Talk soon.",
    doneBody:
      "We'll be in touch within a day to get the ranch set up — pastures mapped, herds in, wand paired.",
  },

  home: {
    eyebrow: "Ranch records · Calgary, AB",
    heroPhotoAlt:
      "A rancher holding a phone showing Agrivanna's weigh screen beside a scale head indicator",
    heroLine1: "Run the herd.",
    heroLine2: "Not the",
    heroLine3: "software.",
    heroBody:
      "Muddy hands, no signal, and no week to spare learning a program. So don't learn one — talk to it. Agrivanna keeps the herd and pasture records you never get around to writing down.",
    seeHow: "See how it works",
    testedOn: "Built and tested on working Alberta ranches",

    problem: {
      eyebrow: "The real problem",
      headLine1: "The software was never",
      headLine2: "the hard part.",
      body:
        "Getting anything into it is. Every ranch program in the last twenty years has failed at the same place — the moment a person with dirty hands has to stop working and type.",
      friction: [
        {
          head: "Your hands are already full.",
          body:
            "Calving, gloves, blood, colostrum, a tag in your teeth. Nobody is tapping through six screens at three in the morning to log a heifer.",
        },
        {
          head: "The notebook is the system.",
          body:
            "Tags on a scrap of paper, weights on the shop whiteboard, the rest carried in your head until the accountant asks in March.",
        },
        {
          head: "Nobody has a week to learn a program.",
          body:
            "Most ranch software wants more fields than you have answers for, and it wants them typed. So it gets opened once and never again.",
        },
      ],
      punchline: "So don't type. Talk.",
    },

    recording: {
      eyebrow: "Recording",
      headLine1: "Say it out loud.",
      headLine2: "It's written down.",
      body:
        "Talk through the run the way you'd tell your neighbour over the fence. Agrivanna pulls the tags, weights and treatments out of what you said and writes them into your records against the right animal.",
      bullets: [
        "Speak in your own words. No forms, no dropdowns, nothing to learn.",
        "Your wand and scale head send tags and weights in without you keying a number.",
        "Already keeping records somewhere? Send them over and we'll load the ranch for you.",
      ],
      /** Shown only where the site language differs from what the app listens in. */
      appLanguageNote: "",
      /** The worked example shown transcribing on the phone. The confirm queue
          below shows the records Agrivanna pulls out of this exact note. */
      dictation:
        "Cow 418, the black baldy heifer. Calved around five this morning in the north pasture. Bull calf, no help needed, up and sucking already. Gave him yellow tag 418 and a shot of vitamin E and selenium. Guessing he's about 85 pounds. She's a good mom, a bit protective.",
      dictationSr: "The Agrivanna voice note screen transcribing as a rancher speaks:",
      confirmEyebrow: "Then confirm",
      confirmLine1: "One tap and it's",
      confirmLine2: "in the book.",
      confirmBody:
        "Everything you said out there comes back as plain rows — the calving, the steers you moved, the cow you treated, where you dropped bales, where the salt went. Check them or throw them out. Nothing touches your records until you say yes, so a misheard tag never becomes a wrong record.",
    },

    confirmQueue: {
      title: "Ready to confirm",
      count: "5 records",
      footer: "Tap the check and it's in the book. Nothing is written to your records until you say so.",
      rows: [
        { date: "Sep 11", action: "Calving", subject: "Cow 418", detail: "Bull calf, unassisted, north pasture" },
        { date: "Sep 11", action: "Pasture move", subject: "Yearling steers · 88 head", detail: "North Meadow → South" },
        { date: "Sep 10", action: "Treatment", subject: "Blue 61", detail: "Pinkeye, 8 cc, withdrawal logged" },
        { date: "Sep 10", action: "Bales out", subject: "12 round bales", detail: "Creek pasture, west gate" },
        { date: "Sep 09", action: "Salt & mineral", subject: "Block set out", detail: "South pasture, by the dugout" },
      ],
    },

    offline: {
      eyebrow: "Offline first",
      headLine1: "No signal.",
      headLine2: "Nothing lost.",
      body:
        "The phone is the source of truth, not a server in a city. Coming in and out of coverage is not something you should have to think about, and a dead zone should never cost you a day's work.",
      steps: [
        { step: "01", head: "You talk", body: "Out at the chute, in the field, wherever you are." },
        { step: "02", head: "The phone keeps it", body: "Written to the device the second you stop. Bars or no bars." },
        { step: "03", head: "It uploads itself", body: "Next time you hit signal or the yard Wi-Fi. Nothing for you to do." },
      ],
    },

    pasture: {
      eyebrow: "Pasture & grazing",
      headLine1: "Grass mapped.",
      headLine2: "Rotations planned.",
      bodyBefore: "Get your pastures in however suits you — ",
      bodyStrong:
        "draw them on the map, drive them in the truck, walk the fence line, or import the boundaries you already have.",
      bodyAfter: " Acres come out the other end either way.",
      bullets: [
        "Satellite imagery tells you which pasture has had enough rest, so it isn't a guess.",
        "Build a rotation and move herds through it without redrawing anything.",
        "Utilization heat maps show where they actually grazed, not where you sent them.",
      ],
      mapAlt: "Satellite pasture map showing grazing status across paddocks",
      fenceTag: "In R&D",
      fenceHeadBefore: "Built for the fences you already have.",
      fenceHeadHighlight: "Virtual boundaries",
      fenceHeadAfter: "are coming.",
      fenceBody:
        "No wire, no posts, no fixing what the elk went through. Cross-fence a quarter without spending a dollar on materials or a weekend on labour, and put cattle on ground you could never afford to fence — creek bottoms, bush, leased land, the back of the hill.",
      fenceHonest:
        "We're not going to sell you a collar that isn't ready. Virtual fencing is in research and development. The pastures you map and the rotations you build now are the ones it will run on, so nothing you do today gets thrown away.",
    },

    house: {
      eyebrow: "Back at the house",
      headLine1: "The same records,",
      headLine2: "on the big screen.",
      body:
        "Everything you said at the chute is on the laptop by the time you come in. Sort herds, check weights, see which cows are earning their feed, and pull an export when the vet or the accountant asks.",
      imageAlt: "Agrivanna herd list and animal records open in a browser",
    },

    payoff: {
      eyebrow: "Why it pays",
      headLine1: "Records you keep",
      headLine2: "are records you can decide from.",
      body:
        "Which cows to cull, which heifers to keep, when to pull the bull, which pasture has had enough rest. Those are the decisions that move money, and every one of them needs a record that got written down at the time.",
      items: [
        {
          value: "60 lbs",
          claim:
            "more weaned calf per cow, for ranchers who keep records on every animal and actually use them.",
        },
        { value: "$400", claim: "of winter feed spent on one open cow you didn't catch at preg check." },
        { value: "39 lbs", claim: "of weaning weight gone for every 21-day cycle a cow breeds late." },
      ],
    },

    builtWith: {
      eyebrow: "Who it's built with",
      headLine1: "Designed at the chute,",
      headLine2: "not in a boardroom.",
      body:
        "We build alongside cattlemen running real terrain, real mud, and real weather — and with the University of Calgary, Alberta Innovates, and the Canadian Forage and Grassland Association.",
      rosetownAlt: "Ranch near Rosetown, Saskatchewan",
      rosetown: "Ranch near Rosetown, SK",
      nantonAlt: "Ranch near Nanton, Alberta",
      nanton: "Ranch near Nanton, AB",
    },

    pricing: {
      eyebrow: "Pricing",
      heading: "One price. No surprises.",
      intro:
        "No head count tiers, no sales call before you can see a number, no annual contract to get started.",
      planName: "Software access",
      price: "$50",
      perMonth: "/ month",
      includes: [
        "Unlimited head, unlimited pastures",
        "Voice records, chute sessions, wand and scale support",
        "Works offline on every device, syncs itself",
        "Pasture mapping, readiness and rotation planning",
        "Your data exports whenever you ask for it",
      ],
      setupNote: "Email us and we'll get you set up. Self-serve signup is on the way.",
      largeName: "Large operations",
      largePrice: "Let's talk",
      largeBody:
        "Community pastures, grazing associations, leased land under several owners, or crews who need onboarding at the chute. Tell us how the operation is set up and we'll price it properly.",
    },

    features: {
      eyebrow: "What you get",
      headLine1: "Everything in the platform,",
      headLine2: "for the one price.",
      body:
        "No modules to add on, no per-head charges, no upsell when your herd grows. Parts of this are still rolling out — ask us what's live on your ranch today and we'll tell you straight.",
      imageAlt: "Picking the jobs a chute session covers in the Agrivanna app",
      /** Platform scope, grouped the way a rancher would ask about it rather
          than the way it's built. */
      groups: [
        {
          group: "Animals & herd",
          items: [
            { name: "Lifetime animal profile", detail: "Every event on an animal, birth to sale, in one history." },
            { name: "Live inventory counts", detail: "Reconciles itself as animals move, calve, or get culled." },
            { name: "RFID and tag scanning", detail: "Bluetooth stick readers and indicator scale heads." },
            { name: "Breeding and calving", detail: "AI records, pregnancy checks, and the calving book." },
            { name: "Genetics and EPDs", detail: "Expected progeny differences carried on the animal." },
            { name: "Body condition scoring", detail: "1–10, taken at the chute while the tag is scanned." },
            { name: "BQA management", detail: "Beef Quality Assurance protocols tracked as you work." },
            { name: "Feed inventory", detail: "High-level counts of what you have on hand." },
          ],
        },
        {
          group: "Pasture & grazing",
          items: [
            { name: "Grazing plan builder", detail: "Automated, using carrying capacity and stock density." },
            { name: "Utilization heat maps", detail: "Built from vegetation index and satellite imagery." },
            { name: "Winter-adjusted forage", detail: "Cold-season estimates once NRS data is connected." },
            { name: "Boundaries your way", detail: "Draw them, drive them, walk them, or import what you have." },
          ],
        },
        {
          group: "System & data",
          items: [
            { name: "Voice dictation and fast logging", detail: "Quick ranch notes and explicit log actions, kept apart." },
            { name: "Satellite and weather feeds", detail: "Imagery plus your local forecast, pulled in automatically." },
            { name: "Open API and exports", detail: "Your data out whenever you want it, in a format others can read." },
            { name: "Roles and multi-user access", detail: "Permissions for family, hired help, and your vet." },
            { name: "Works offline everywhere", detail: "Local first on every device, syncs itself when there's signal." },
            { name: "We do your data entry", detail: "Send us what you have and we'll load the ranch for you." },
          ],
        },
      ],
    },

    cta: {
      headLine1: "Try it on one chute run.",
      headLine2: "You'll know by the last calf.",
      body:
        "Send us a note and we'll set your ranch up ourselves — pastures mapped, herds in, wand paired. Then take it to the chute and see if it keeps up.",
    },
  },

  partners: {
    eyebrow: "Working with",
    heading: "Built with Canadian research, funding, and ag equipment partners.",
    contexts: {
      NVIDIA: "Technology partner",
      "Google Cloud": "Startup credits",
      "Alberta Innovates": "Funding partner",
      "NuWest Interiors": "Founding sponsor",
      "Plug and Play": "Agtech program",
      "THRIVE SVG": "Agrifood program",
      DeepSense: "AI partner",
      "Huber Ag Equipment": "Equipment partner",
    },
  },

  team: {
    metaTitle: "Team — Agrivanna",
    metaDescription:
      "The founders and advisors building Agrivanna — AI researchers, FPGA engineers, ranchers, and operators.",
    eyebrow: "Who we are",
    headLine1: "Engineers,",
    headLine2: "ranchers,",
    headLine3: "operators.",
    intro:
      "Agrivanna is a small team that built a system most of the industry said couldn't exist: offline grazing intelligence that works on working ranches. Here's who's behind it.",
    photoAlt: "The Agrivanna founders with an early collar prototype",
    cofoundersEyebrow: "Co-founders",
    cofoundersHeading: "The three building the company.",
    founded: "Calgary, AB · Founded Oct 2024",
    advisorsEyebrow: "Advisory board",
    advisorsHeading: "The people we call when it counts.",
    teamPhotoAlt: "The Agrivanna team",
    closingLine1: "Built in Calgary.",
    closingLine2: "Tested on Alberta ranches.",
    closingTag: "Agrivanna / Team",
    linkedinAria: "{name} on LinkedIn",
    people: {
      amirhossein: {
        role: "Chief Executive Officer",
        focus: "Product · AI · Satellite intelligence",
        bio: "MSc Software Engineering. AI engineer and software developer leading Agrivanna's product strategy, AI platform, and satellite forage intelligence. Sets the technical north star for the company.",
      },
      aminreza: {
        role: "Chief Technology Officer",
        focus: "Edge AI · Jetson · Hardware integration",
        bio: "Computer science student and edge AI specialist. Oversees Agrivanna's software stack, hardware integration, and Jetson-based deployment — everything that runs on the collar and in the field.",
      },
      haden: {
        role: "Chief Operating Officer",
        focus: "Ranch ops · Go-to-market · Finance",
        bio: "BCom student and ag operator. Manages operations, rancher relationships, and commercial execution. The voice of the customer inside the company — and the founder most likely to be in a truck.",
      },
      bita: {
        role: "Hardware Lead · Ph.D.",
        focus: "FPGA · Embedded systems · Low-power edge compute",
        bio: "PhD engineer and FPGA expert directing Agrivanna's collar hardware design, embedded systems, and low-power edge compute. The reason the collar lives on solar alone.",
      },
      jim: {
        role: "Lead Field Validation Partner",
        focus: "Multi-generation rancher · Antelope Butte Ranch",
        bio: "Data-driven multi-generation rancher. Agrivanna's primary validation partner at Antelope Butte Ranch, where the system is tested against real cattle, real terrain, and real weather.",
      },
      alireza: {
        role: "Veterinary Science Advisor",
        focus: "Cattle welfare · Grazing science · Herd behavior",
        bio: "Veterinary science PhD candidate. Advises on cattle welfare, herd behavior, and grazing science — the biology behind every AI recommendation the PRS makes.",
      },
      soheil: {
        role: "Hardware Advisor · Enclosure & Form Factor",
        focus: "Industrial design · Enclosure engineering · Form factor",
        bio: "Built the hardware enclosure and form factor for the Agrivanna collar. Continues to advise on hardware design as the collar moves toward field-ready production.",
      },
      jason: {
        role: "Advisor · Strategy & Leadership",
        focus: "Leadership coach · THRIVE SVG mentor",
        bio: "Leadership coach and THRIVE SVG advisor. Supports Agrivanna's strategy, team development, and milestone execution. The operating-rhythm advisor behind the founders.",
      },
    },
  },

  news: {
    metaTitle: "News & Timeline — Agrivanna",
    metaDescription:
      "Press, awards, and accelerator news from Agrivanna — plus our story from founding to first ranch pilots.",
    eyebrow: "Press · Awards · Milestones",
    headLine1: "What we're",
    headLine2: "building in public.",
    intro:
      "Every accelerator, award, and article the company has picked up along the way, plus the story from founding to first ranch pilots.",
    photoAlt: "Agrivanna's mobile drone base station in the workshop",
    latestEyebrow: "Latest",
    latestHeading: "In the news.",
    storyCount: "{count} stories",
    readMore: "Read more",
    watchEyebrow: "Watch",
    watchHeading: "Agrivanna, on video.",
    storyEyebrow: "Our story so far",
    storyHeading: "From Calgary to the herd — and beyond.",
    storyIntro: "Every milestone since October 2024, plus what we're building toward next.",
    tags: {
      Press: "Press",
      Award: "Award",
      Accelerator: "Accelerator",
      Competition: "Competition",
    },
    items: {
      spring: {
        title: "Selected for Spring's Elevate Round Ready program",
        source: "Spring",
        date: "June 2026",
        summary:
          "Agrivanna joined the Summer 2026 cohort of Spring's Elevate Round Ready program — a Vancouver-based accelerator whose ventures have raised over $17M since mid-2025. The program pairs the team with curated investor introductions while it raises its seed round.",
      },
      "start-something": {
        title: "1st place — Start Something Summit",
        source: "University of Calgary · Hunter Hub",
        date: "June 2026",
        summary:
          "Agrivanna won $10,000 for 1st place in the Launchpad Stream at the University of Calgary's Start Something Summit — the latest in a run of Hunter Hub pitch wins.",
      },
      arena: {
        title: "Agrivanna takes 1st at The Arena Pitch Competition",
        source: "Arthur L. Irving Entrepreneurship Centre",
        date: "March 2026",
        summary:
          "Agrivanna placed first at the Arena Pitch Competition — named a top Canadian university startup and earning a national spotlight for grazing intelligence.",
      },
      liftoff: {
        title: "2nd place at Hunter Hub Liftoff",
        source: "University of Calgary · Hunter Hub",
        date: "March 2026",
        summary:
          "Agrivanna took second place at the Hunter Hub Liftoff competition, backed by the University of Calgary's entrepreneurial thinking program.",
      },
      aurrin: {
        title: "1st place at Aurrin Ventures Pitch Competition",
        source: "Aurrin Ventures",
        date: "February 2026",
        summary:
          "Won the Most Investible Company Award at the Aurrin Ventures pitch competition in YYC's startup community.",
      },
      "plug-and-play": {
        title: "Selected for Plug and Play Kananaskis accelerator",
        source: "Plug and Play",
        date: "November 2025",
        summary:
          "Agrivanna joined the Plug and Play Kananaskis cohort, connecting the team with global corporate partners and investors in agtech.",
      },
      thrive: {
        title: "Joined THRIVE SVG Academy Cohort VII",
        source: "THRIVE Agrifood",
        date: "November 2025",
        summary:
          "Agrivanna was selected for THRIVE's agtech venture cohort — the leading global network for agrifood innovation.",
      },
      techstart: {
        title: "1st place — Student Startup of the Year",
        source: "TechStart UCalgary",
        date: "May 2025",
        summary:
          "Agrivanna won TechStart UCalgary's top student startup award, validating the vision in front of Calgary's tech community.",
      },
    },
  },

  timeline: {
    planned: "Planned",
    inProgress: "In progress",
    complete: "Complete",
    previous: "Previous milestone",
    next: "Next milestone",
    items: {
      founded: { date: "Oct 2024", title: "Agrivanna founded", body: "Three co-founders start the company in Calgary, Alberta." },
      techstart: { date: "May 2025", title: "TechStart UCalgary", body: "Named Student Startup of the Year." },
      thrive: { date: "Nov 2025", title: "THRIVE Cohort VII", body: "Joined the THRIVE SVG Academy — global agrifood innovation network." },
      "plug-and-play": { date: "Nov 2025", title: "Plug and Play", body: "Accepted into the Plug and Play Kananaskis accelerator." },
      aurrin: { date: "Feb 2026", title: "Aurrin Ventures", body: "Won Most Investible Company at the Aurrin pitch competition." },
      liftoff: { date: "Mar 2026", title: "Hunter Hub Liftoff", body: "Second place at UCalgary's flagship startup competition." },
      arena: { date: "Mar 2026", title: "The Arena · 1st place", body: "Top Canadian university startup at The Arena pitch competition." },
      pilots: { date: "Summer 2026", title: "First ranch pilots", body: "First real-world deployments at partner ranches in Alberta." },
      refinement: { date: "Late 2026", title: "Product refinement", body: "Iterate on hardware and software from pilot data." },
      "western-canada": { date: "2027", title: "Western Canada", body: "Expand pilots and commercial deployments across the prairies." },
    },
  },

  softwareLeads: {
    metaTitle: "Get started — Agrivanna",
    metaDescription:
      "Tell us about your operation and get set up with Agrivanna grazing intelligence software.",
    eyebrow: "Get started",
    headLine1: "Put Agrivanna",
    headLine2: "on your ranch.",
    intro:
      "Tell us about your operation and we'll get you set up. It takes a couple of minutes — the questions below are the same ones we ask on a first call.",
    asks: [
      "Where you run cattle",
      "Operation type & herd size",
      "Pasture boundaries, if you have them",
    ],
    questionsBefore: "Questions before you start? Email ",
    questionsAfter: ".",
  },

  legal: {
    eyebrow: "Legal",
    /** Shown above translated legal text. Empty in English. */
    translationNote: "",
  },

  notFound: {
    metaTitle: "Page not found — Agrivanna",
    eyebrow: "404",
    heading: "That page isn't here.",
    body: "It may have moved, or the link has a typo. The home page has everything else.",
    home: "Back to the home page",
  },
};

export default en;
export type Dictionary = typeof en;
