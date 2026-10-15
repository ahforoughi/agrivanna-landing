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
      "Speak your herd and pasture records with gloves on. Works with no signal, syncs when you're back in range, and builds rotational grazing plans from satellite imagery.",
    ogTitle: "Agrivanna — Run the herd, not the software",
    ogDescription:
      "Voice-first ranch records that work offline, plus pasture mapping and rotational grazing plans.",
  },

  nav: {
    home: "Home",
    pricing: "Pricing",
    team: "Team",
    news: "News",
    homeAria: "Agrivanna home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  language: {
    label: "Language",
    switchTo: "Switch to {language}",
  },

  trialButton: "Start a free trial",

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
    scanCredit: "3D cow scan: Center for Digital Humanities, University of Arizona",
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
      "Your first month is free. We set the ranch up by hand so it works on day one. Takes a minute — these are the same questions we'd ask on a call.",
    close: "Close",
    name: "Your name",
    email: "Email",
    phone: "Phone",
    ranch: "Ranch name",
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
    heroPhotoAlt:
      "A rancher holding a phone showing Agrivanna's weigh screen beside a scale head indicator",
    heroLine1: "Run the herd.",
    heroLine2: "Not the",
    heroLine3: "software.",
    heroBody:
      "Muddy hands, no signal? Just talk. Agrivanna writes the herd and pasture records for you.",
    seeHow: "See how it works",
    heroVideoLabel: "A rancher works cattle through the chute while the Agrivanna app records each animal's tag and weight",
    testedOn: "Built and tested on working Alberta ranches",





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
      heading: "Priced to your operation.",
      intro:
        "Every ranch runs differently, so each one gets its own price. Your first month is free while you find out if it keeps up.",
      planName: "Agrivanna software",
      price: "Custom",
      priceNote: "for your ranch",
      includes: [
        "Voice records, chute sessions, wand and scale support",
        "Works offline on every device, syncs itself",
        "Pasture mapping, readiness and rotation planning",
        "Records on the web for the family, hired help and your vet",
        "We set the ranch up and load your records for you",
        "Your data exports whenever you ask for it",
      ],
      setupNote: "First month free. No credit card to start.",
      howTitle: "How pricing works",
      howSteps: [
        { step: "01", head: "Tell us about the ranch", body: "Fill in the free trial form. It takes a minute." },
        { step: "02", head: "Talk it through", body: "On a short call we set the ranch up and agree on a price that fits your herd and land." },
        { step: "03", head: "First month free", body: "Use everything for a month. Your plan only starts after that." },
      ],
    },

    features: {
      eyebrow: "What you get",
      headLine1: "Everything in the platform,",
      headLine2: "included for every ranch.",
      body:
        "No add-on modules: every ranch gets the whole platform. Parts of this are still rolling out — ask us what's live on your ranch today and we'll tell you straight.",
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
    metaTitle: "News — Agrivanna",
    metaDescription:
      "Press, awards, and accelerator news from Agrivanna.",
    eyebrow: "Press · Awards · Milestones",
    headLine1: "What we're",
    headLine2: "building in public.",
    intro:
      "Every accelerator, award, and article the company has picked up along the way.",
    photoAlt: "A rancher holding a phone showing Agrivanna's weigh screen beside a scale head indicator",
    latestEyebrow: "Latest",
    latestHeading: "In the news.",
    storyCount: "{count} stories",
    readMore: "Read more",
    watchEyebrow: "Watch",
    watchHeading: "Agrivanna, on video.",
    videos: {
      platform: "Platform Calgary · Agrivanna, 2026 Top 10 Finalist",
      ucalgary: "University of Calgary · How Agrivanna started",
    },
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
      "calgary-tech": {
        title: "Agrivanna brings voice-powered records to the ranch",
        source: "Calgary.Tech",
        date: "September 2026",
        summary:
          "Calgary.Tech profiled how ranchers speak notes on animals, treatments and herd moves, check them before they're saved, and keep working with no cell signal, alongside pasture mapping and rotation planning.",
      },
      "platform-top-10": {
        title: "Named one of Calgary's Top 10 early-stage startups",
        source: "Platform Calgary",
        date: "September 2026",
        summary:
          "Platform Calgary named Agrivanna to the Top 10 of its 2026 Calgary Launch Party, which picks the city's most promising early-stage startups. The Launch Party takes place November 5, during Calgary Innovation Week.",
      },
      "rural-roots": {
        title: "Making virtual fencing more accessible to ranchers",
        source: "Rural Roots Canada · Field to Future",
        date: "August 2026",
        summary:
          "Rural Roots Canada looked at the virtual fencing Agrivanna is developing to make rotational grazing easier, including a lower-cost setup built around a handheld base station. Virtual fencing is still in research and development.",
      },
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
      "ucalgary-feature": {
        title: "Student-built agtech startup helps ranchers manage cattle",
        source: "University of Calgary News",
        date: "June 2026",
        summary:
          "UCalgary News told the story of how Agrivanna's three co-founders met at the university, and why they set out to make ranch technology cheaper and more useful for Canadian producers.",
      },
      arena: {
        title: "Agrivanna wins The Arena 2026 and its $10,000 grand prize",
        source: "Saint Mary's University · The Arena",
        date: "April 2026",
        summary:
          "COO Haden Harrison pitched Agrivanna to the top of The Arena, Saint Mary's University's national student pitch competition: a month-long, head-to-head bracket of more than 64 founders from 41 schools across Canada.",
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
      arena: { date: "Apr 2026", title: "The Arena · 1st place", body: "Top Canadian university startup at The Arena pitch competition." },
      pilots: { date: "Summer 2026", title: "First ranch pilots", body: "First real-world deployments at partner ranches in Alberta." },
      refinement: { date: "Late 2026", title: "Product refinement", body: "Iterate on hardware and software from pilot data." },
      "western-canada": { date: "2027", title: "Western Canada", body: "Expand pilots and commercial deployments across the prairies." },
    },
  },

  softwareLeads: {
    metaTitle: "Free trial — Agrivanna",
    metaDescription:
      "Tell us about your operation and get set up with Agrivanna grazing intelligence software.",
    eyebrow: "Free trial",
    headLine1: "Put Agrivanna",
    headLine2: "on your ranch.",
    intro:
      "Tell us about your operation and we'll get you set up. It takes a couple of minutes — the questions below are the same ones we ask on a first call.",
    asks: [
      "Your name and how to reach you",
      "Your ranch's name",
      "Where your records live now",
    ],
    questionsBefore: "Questions before you start? Email ",
    questionsAfter: ".",
  },

  legal: {
    eyebrow: "Legal",
    /** Shown above translated legal text. Empty in English. */
    translationNote: "",
  },

  /** Menus and pages added by the site restructure (product, pricing, company…). */
  site: {
    menu: {
      product: "Product",
      resources: "Resources",
      company: "Company",
      pricing: "Pricing",
      news: "News",
      software: "Software",
      hardware: "Hardware",
      hardwareCard: {
        title: "Virtual fencing",
        body: "Fences without wire, built on the pastures you map today. In research and development, not for sale yet.",
        link: "What we're building",
      },
      rnd: "R&D",
      items: {
        webApp: { label: "Web app", desc: "Your whole ranch on the big screen." },
        iosApp: { label: "iOS app", desc: "Talk at the chute, even with no signal." },
        pasture: { label: "Pasture management", desc: "Pastures mapped, readiness from satellite." },
        herd: { label: "Herd management", desc: "Every animal, from birth to sale." },
        grazing: { label: "Grazing management", desc: "Plan rotations, see where they grazed." },
        fencing: { label: "Virtual fencing", desc: "Fences without wire. In research and development." },
        features: { label: "All features", desc: "Voice records, offline and the rest, included." },
        news: { label: "News", desc: "Press, awards and accelerators." },
        faq: { label: "Help & FAQ", desc: "Straight answers before you start." },
        about: { label: "About us", desc: "Our story so far, and who backs us." },
        team: { label: "Team", desc: "The people building Agrivanna." },
        partners: { label: "Partners", desc: "Research, funding and equipment partners." },
        contact: { label: "Contact", desc: "Start a free trial or email the team." },
      },
    },

    footerResources: "Resources",
    pricingScope: {
      title: "Software only, for now",
      body: "Today we sell the Agrivanna software. Virtual fencing hardware is in research and development and isn't for sale yet.",
      link: "See what we're building",
    },
    rndBadge: "R&D prototype",
    fenceImageAlt: "A red cow wearing an Agrivanna virtual fencing collar prototype",
    learnMore: "Learn more",

    home: {
      productsEyebrow: "The platform",
      productsLine1: "One app,",
      productsLine2: "from the chute to the kitchen table.",
      howEyebrow: "How it works",
      howLine1: "Say it. Check it.",
      howLine2: "Decide from it.",
      howSteps: [
        { step: "01", head: "Say it", body: "Talk through the run at the chute or in the field. No signal needed." },
        { step: "02", head: "Check it", body: "Each record comes back as a plain row. One tap keeps it, nothing is saved without you." },
        { step: "03", head: "Use it", body: "Herd, weights and pastures on the phone and the laptop, ready to decide from." },
      ],
      pricingEyebrow: "Pricing",
      pricingLine1: "Priced to your ranch.",
      pricingLine2: "First month free.",
      pricingBody: "The Agrivanna software, every feature, for every ranch. Tell us about the operation and we'll quote a price that fits it.",
      showcasePause: "Pause the tour",
      showcasePlay: "Play the tour",
      showcase: {
        voice: { label: "Voice records", head: "Say it at the chute.", body: "Talk through the run the way you'd tell your neighbour. Agrivanna writes the tags, weights and treatments into the right animal's record, and nothing is saved until you confirm it." },
        pasture: { label: "Pasture & grazing", head: "Know which pasture is ready.", body: "Map your pastures, see from satellite imagery which ones have rested enough, and move herds through a rotation without redrawing anything." },
        web: { label: "Records on the web", head: "The same records, on the big screen.", body: "Everything said at the chute is on the laptop by the time you come in. Sort herds, check weights, and export for the vet or the accountant." },
        fencing: { label: "Virtual fencing", head: "Fences without wire.", body: "Virtual boundaries that turn cattle back, built on the pastures you map today. In research and development, not for sale yet." },
      },
      dataEyebrow: "Your data",
      dataLine1: "Your records stay",
      dataLine2: "on your side of the fence.",
      dataPoints: [
        { head: "Stored in Canada", body: "Our servers run on Google Cloud in Montréal." },
        { head: "Never sold", body: "We don't sell your information or use it for advertising." },
        { head: "Yours to take", body: "Export your records whenever you ask, in a format other programs can read." },
        { head: "Encrypted on the way", body: "Records travel between the app and our servers over encrypted connections." },
      ],
      dataLink: "Read the privacy policy",
    },

    pages: {
      software: {
        metaTitle: "Software — Agrivanna",
        metaDescription: "The Agrivanna web app and iOS app: herd, pasture and grazing management for cow-calf ranches, with voice records that work with no signal.",
        eyebrow: "Product · Software",
        headLine1: "One app,",
        headLine2: "for the herd and the grass.",
        intro: "Talk to it on your phone at the chute, plan grazing on the map, and pick it all up on the laptop back at the house. Every part is included for every ranch.",
        jumpTitle: "On this page",
        sections: {
          webApp: {
            head1: "Your whole ranch,",
            head2: "on the big screen.",
            body: "Everything said at the chute is on the laptop by the time you come in. The dashboard shows head counts, herds, pastures under graze and the weather at a glance.",
            bullets: [
              "See where every herd is, how long it's been there, and which moves are due.",
              "Sort herds, check weights, and see which cows are earning their feed.",
              "Export your records whenever the vet or the accountant asks.",
              "Give family, hired help and your vet their own access, with permissions you set.",
            ],
            imageAlt: "The Agrivanna dashboard on a laptop: head count, herds, weather and pasture status",
          },
          iosApp: {
            head1: "Talk to it at the chute.",
            head2: "Even with no signal.",
            body: "Tell it what happened the way you'd tell your neighbour over the fence. Agrivanna pulls out the tags, weights and treatments and writes them against the right animal.",
            bullets: [
              "Speak in your own words. No forms, no dropdowns, nothing to learn.",
              "Each record comes back as a plain row, and nothing is saved until you confirm it.",
              "No signal needed. Records stay on the phone and upload themselves when you're back in range.",
              "Your wand and scale head send tags and weights in over Bluetooth.",
            ],
            imageAlt: "The Agrivanna iPhone app listening for a voice note",
          },
          pasture: {
            head1: "Know which pasture",
            head2: "is ready.",
            body: "Get your pastures in however suits you: draw them on the map, drive them in the truck, walk the fence line, or import the boundaries you already have. Acres come out the other end either way.",
            bullets: [
              "Satellite imagery shows which pastures have had enough rest, so it isn't a guess.",
              "Every pasture marked ready, watch or rest, at a glance.",
              "See how many head are on each pasture, right on the map.",
              "Your local weather and forecast, pulled in automatically.",
            ],
            imageAlt: "Pastures mapped over satellite imagery in the Agrivanna app, with the head count on each",
          },
          herd: {
            head1: "Every animal,",
            head2: "from birth to sale.",
            body: "Each animal gets one history: calving, treatments, weights and moves, recorded as you work instead of typed up later.",
            bullets: [
              "Inventory counts that keep up as animals move, calve or get culled.",
              "Breeding and calving: AI records, pregnancy checks and the calving book.",
              "Treatments with withdrawal times, so you know who can't ship yet.",
              "RFID tags scanned with Bluetooth stick readers, and body condition scored at the chute.",
            ],
            imageAlt: "Agrivanna herd list and animal records open in a browser",
          },
          grazing: {
            head1: "Plan the rotation.",
            head2: "See where they grazed.",
            body: "Build a rotation and move herds through it without redrawing anything. Agrivanna keeps count of the days each herd has been on a pasture and flags when a move is due.",
            bullets: [
              "A grazing plan built from carrying capacity and stock density.",
              "Utilization heat maps show where they actually grazed, not where you sent them.",
              "Days on pasture and moves due, for every herd.",
              "The pastures and rotations you set up now are the ones virtual fencing will run on.",
            ],
            imageAlt: "Grazing map in the Agrivanna app: paddocks shaded by vegetation index, with a herd's days on pasture and a Move button",
          },
        },
      },
      fencing: {
        metaTitle: "Virtual fencing (in R&D) — Agrivanna",
        metaDescription: "Agrivanna is building virtual fencing: boundaries that turn cattle back without posts or wire, on the pastures ranchers already map. In research and development, not for sale yet.",
        eyebrow: "Hardware · Virtual fencing · In R&D",
        heroLine1: "Fence the land.",
        heroLine2: "Not with",
        heroLine3: "wire.",
        heroBody: "Virtual boundaries that turn cattle back without posts or wire. We're building it now, on the pastures and rotations ranchers already map in Agrivanna.",
        howLink: "How it works",
        ideaEyebrow: "The idea",
        ideaLine1: "Draw the line.",
        ideaLine2: "The herd learns it.",
        ideaSteps: [
          { step: "01", head: "Draw it on the map", body: "Mark the boundary in Agrivanna, the same way you map pastures today." },
          { step: "02", head: "A cue near the line", body: "Cattle that walk up to the boundary get a gentle cue to turn back." },
          { step: "03", head: "Move it when you rotate", body: "Shift the line to the next paddock without building anything." },
        ],
        whyEyebrow: "Why it matters",
        whyLine1: "Put cattle where",
        whyLine2: "fencing never paid.",
        statusEyebrow: "Where it stands",
        statusLine1: "In research",
        statusLine2: "and development.",
        statusBody: "We're testing prototypes with partner ranches in Alberta. Nothing here is for sale yet, and we'll say so plainly until it is.",
        photoPilots: "Prototype collars at a partner ranch during pilot testing",
        photoCow: "A cow wearing an Agrivanna virtual fencing prototype",
        photoTeam: "The Agrivanna founders with an early collar prototype",
        softwareEyebrow: "Start with the software",
        softwareLine1: "The pastures you map now",
        softwareLine2: "are the ones it will run on.",
        softwareBody: "Map your pastures and plan rotations in Agrivanna today. When virtual fencing is ready, it builds on what you've already drawn.",
        softwareLink: "Pasture management",
      },
      pricing: {
        metaTitle: "Pricing — Agrivanna",
        metaDescription: "Agrivanna is priced for each ranch. Tell us about your operation, get a quote on a short call, and use everything free for the first month.",
        eyebrow: "Pricing",
        headLine1: "Priced to",
        headLine2: "your operation.",
        intro: "No price list to decode. We learn how your ranch runs, quote a price that fits it, and give you the first month free.",
        faqEyebrow: "Questions",
        faqHeading: "Before you sign up.",
      },
      company: {
        metaTitle: "About us — Agrivanna",
        metaDescription: "Agrivanna is a Calgary agtech company building ranch records that work at the chute, with no signal.",
        eyebrow: "About us",
        headLine1: "Built in Calgary.",
        headLine2: "Tested on Alberta ranches.",
        intro: "Agrivanna was founded in October 2024 to build ranch records people actually keep: spoken at the chute, saved with no signal, and useful back at the house.",
        photoAlt: "The Agrivanna founders with an early collar prototype",
        teamLink: "Meet the team",
      },
      contact: {
        metaTitle: "Contact — Agrivanna",
        metaDescription: "Start a free trial or email the Agrivanna team.",
        emailTitle: "Email us",
        emailBody: "We read every message ourselves.",
      },
      faq: {
        metaTitle: "Help & FAQ — Agrivanna",
        metaDescription: "Straight answers about Agrivanna: price, contracts, signal, equipment, your data and virtual fencing.",
        eyebrow: "Help & FAQ",
        headLine1: "Straight answers.",
        headLine2: "No sales pitch.",
        intro: "The questions ranchers ask us most. If yours isn't here, email us and a person will answer.",
        stillTitle: "Still have a question?",
        stillBody: "Email {email} or start a free trial.",
      },
    },

    /** Shown on /faq; the ones marked pricing are also on /pricing. */
    faq: [
      { pricing: true, q: "How much does it cost?", a: "Each ranch gets its own price, based on the operation and what you need. Fill in the free trial form and we'll quote it on a short call. The first month is free." },
      { pricing: true, q: "Is there a contract?", a: "Terms are agreed with you on a call, before anything is charged." },
      { pricing: true, q: "How do I get started?", a: "Onboarding is straightforward, and you don't start over. Fill in the free trial form and send us the records you already have, whether that's a notebook, spreadsheets or another program. We load the whole ranch for you and set it up ourselves, with pastures mapped, herds in and your wand paired, and we get in touch within a day." },
      { pricing: false, q: "Do I need cell signal?", a: "No. Everything is saved on the phone first and uploads itself the next time you hit signal or the yard Wi-Fi." },
      { pricing: false, q: "What equipment does it work with?", a: "Bluetooth stick readers and indicator scale heads. They send tags and weights in without you keying a number." },
      { pricing: false, q: "Can I get my data out?", a: "Yes, whenever you ask, in a format other programs can read." },
      { pricing: false, q: "Can my family, hired help or vet use it?", a: "Yes. Each person gets their own access, with permissions you set." },
      { pricing: true, q: "Can I buy virtual fencing hardware?", a: "Not yet. Today we sell the Agrivanna software only. Virtual fencing is in research and development, and the pastures you map and rotations you build now are the ones it will run on." },
    ],
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
