import type { Dictionary } from "./en";

/**
 * Canadian French (fr-CA): "vous", "courriel", "témoins", "fin de semaine",
 * province abbreviations as "(Alb.)", amounts as "50 $", a non-breaking space
 * before a colon and none before ? ! or ;.
 *
 * Bios avoid gendered words (il/elle, étudiant/étudiante) because we don't
 * know how each person refers to themselves.
 *
 * The app itself, and its voice recognition, are English-only today. Don't
 * promise French dictation here.
 */
const fr: Dictionary = {
  meta: {
    title: "Agrivanna — Des registres de ranch que vous dictez au lieu de les taper",
    description:
      "Dictez vos registres de troupeau et de pâturage, gants aux mains. Fonctionne sans réseau, se synchronise dès que le signal revient et établit des plans de pâturage en rotation à partir d’images satellite.",
    ogTitle: "Agrivanna — Gérez le troupeau, pas le logiciel",
    ogDescription:
      "Des registres de ranch tenus à la voix qui fonctionnent hors ligne, ainsi que la cartographie des pâturages et des plans de pâturage en rotation.",
  },

  nav: {
    home: "Accueil",
    pricing: "Tarifs",
    team: "Équipe",
    news: "Nouvelles",
    homeAria: "Accueil Agrivanna",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },

  language: {
    label: "Langue",
    switchTo: "Passer à la version {language}",
  },

  trialButton: "Commencer un essai gratuit",

  footer: {
    eyebrow: "Commencez dès aujourd’hui",
    headLine1: "Ne gardez plus tout en tête.",
    headLine2: "Mettez tout au registre.",
    blurb:
      "Agrotechnologie canadienne. Des registres de troupeau et de pâturage conçus pour les mains sales, les gros gants et les coins sans réseau.",
    social: { email: "Courriel" },
    columns: {
      product: "Produit",
      company: "Entreprise",
      legal: "Juridique",
    },
    links: {
      recording: "Registres vocaux",
      offline: "Fonctionne hors ligne",
      pasture: "Gestion des pâturages",
      features: "Toutes les fonctions",
      pricing: "Tarifs",
      team: "Équipe",
      news: "Nouvelles et parcours",
      contact: "Nous joindre",
      privacy: "Politique de confidentialité",
      cookies: "Politique relative aux témoins",
      terms: "Conditions d’utilisation",
    },
    copyright: "© {year} Agrivanna Inc. Calgary (Alberta).",
    scanCredit: "Numérisation 3D de la vache : Center for Digital Humanities, University of Arizona",
    support: "Avec le soutien d’Alberta Innovates",
  },

  cookie: {
    aria: "Choix relatifs aux témoins",
    textBefore:
      "Nous utilisons quelques témoins (cookies) pour savoir quelles pages les éleveurs lisent vraiment. Rien n’est vendu, et rien ne vous suit sur d’autres sites. Consultez la ",
    link: "politique relative aux témoins",
    textAfter: ".",
    reject: "Refuser",
    accept: "Accepter",
  },

  trial: {
    eyebrow: "Essai gratuit",
    title: "Parlez-nous de votre exploitation.",
    intro:
      "Votre premier mois est gratuit. Nous configurons le ranch nous-mêmes pour qu’il fonctionne dès le premier jour. Le formulaire prend une minute — ce sont les mêmes questions que nous poserions au téléphone.",
    close: "Fermer",
    name: "Votre nom",
    email: "Courriel",
    phone: "Téléphone",
    ranch: "Nom du ranch",
    records: "Où sont vos registres en ce moment",
    notes: "Ce que nous devrions savoir",
    notesPlaceholder:
      "Le lecteur ou la balance que vous utilisez, le nombre de pâturages, ce que vous voulez régler.",
    choose: "Choisissez",
    send: "Envoyer",
    sending: "Envoi en cours…",
    reassurance: "Aucune carte de crédit. Nous lisons chaque demande nous-mêmes.",
    error: "L’envoi n’a pas fonctionné. Écrivez à haden@agrivanna.com et nous réglerons ça.",
    doneTitle: "C’est reçu. À bientôt.",
    doneBody:
      "Nous vous écrirons d’ici un jour ouvrable pour configurer le ranch — pâturages cartographiés, troupeaux importés, lecteur jumelé.",
  },

  home: {
    heroPhotoAlt:
      "Un téléphone affichant l’écran de pesée d’Agrivanna, tenu par un éleveur à côté d’un indicateur de balance",
    heroLine1: "Gérez le troupeau.",
    heroLine2: "Pas le",
    heroLine3: "logiciel.",
    heroBody:
      "Les mains dans la boue, pas de réseau? Parlez, tout simplement. Agrivanna tient vos registres de troupeau et de pâturage pour vous.",
    seeHow: "Voir comment ça marche",
    heroVideoLabel: "Un éleveur fait passer le bétail dans la chute pendant que l’application Agrivanna enregistre l’étiquette et le poids de chaque animal",
    heroVideoPlay: "Lire la vidéo",
    testedOn: "Conçu et testé dans des ranchs albertains en activité",





    pasture: {
      eyebrow: "Gestion des pâturages",
      headLine1: "L’herbe cartographiée.",
      headLine2: "Les rotations planifiées.",
      bodyBefore: "Entrez vos pâturages comme ça vous convient — ",
      bodyStrong:
        "dessinez-les sur la carte, faites-en le tour en camion, longez la clôture à pied ou importez les limites que vous avez déjà.",
      bodyAfter: " Dans tous les cas, vous obtenez la superficie.",
      bullets: [
        "Les images satellite vous indiquent quel pâturage s’est assez reposé : plus besoin de deviner.",
        "Établissez une rotation et faites-y passer vos troupeaux sans rien redessiner.",
        "Les cartes thermiques d’utilisation montrent où les bêtes ont vraiment brouté, pas où vous les avez envoyées.",
      ],
      mapAlt: "Carte satellite des pâturages montrant l’état du pâturage dans chaque enclos",
      fenceTag: "En R-D",
      fenceHeadBefore: "Conçu pour les clôtures que vous avez déjà.",
      fenceHeadHighlight: "Les limites virtuelles",
      fenceHeadAfter: "sont à venir.",
      fenceBody:
        "Pas de fil, pas de poteaux, pas de réparations après le passage des wapitis. Subdivisez un quart de section sans dépenser un dollar en matériaux ni une fin de semaine de travail, et mettez du bétail sur des terres que vous n’auriez jamais pu vous permettre de clôturer — fonds de ruisseau, boisés, terres louées, l’arrière de la colline.",
      fenceHonest:
        "Nous n’allons pas vous vendre un collier qui n’est pas prêt. La clôture virtuelle est en recherche et développement. Les pâturages que vous cartographiez et les rotations que vous établissez aujourd’hui sont ceux sur lesquels elle fonctionnera : rien de ce que vous faites maintenant ne sera perdu.",
    },


    payoff: {
      eyebrow: "Pourquoi c’est payant",
      headLine1: "Les registres que vous tenez",
      headLine2: "sont ceux qui vous aident à décider.",
      body:
        "Quelles vaches réformer, quelles génisses garder, quand retirer le taureau, quel pâturage s’est assez reposé. Ce sont les décisions qui rapportent, et chacune repose sur une donnée notée sur le moment.",
      items: [
        {
          value: "60 lb",
          claim:
            "de veau sevré en plus par vache, chez les éleveurs qui tiennent un registre pour chaque animal et s’en servent vraiment.",
        },
        {
          value: "400 $",
          claim: "de fourrage d’hiver dépensés pour une seule vache vide que vous n’avez pas repérée au diagnostic de gestation.",
        },
        {
          value: "39 lb",
          claim: "de poids au sevrage perdues pour chaque cycle de 21 jours où une vache est saillie en retard.",
        },
      ],
    },

    builtWith: {
      eyebrow: "Avec qui nous le bâtissons",
      headLine1: "Conçu à la chute,",
      headLine2: "pas dans une salle de réunion.",
      body:
        "Nous travaillons aux côtés d’éleveurs qui composent avec un vrai terrain, de la vraie boue et une vraie météo — et avec l’Université de Calgary, Alberta Innovates et l’Association canadienne pour les plantes fourragères.",
      rosetownAlt: "Ranch près de Rosetown, en Saskatchewan",
      rosetown: "Ranch près de Rosetown (Sask.)",
      nantonAlt: "Ranch près de Nanton, en Alberta",
      nanton: "Ranch près de Nanton (Alb.)",
    },

    pricing: {
      eyebrow: "Tarifs",
      heading: "Un prix adapté à votre exploitation.",
      intro:
        "Chaque ranch fonctionne à sa façon, alors chacun a son propre prix. Votre premier mois est gratuit, le temps de voir si l’outil suit le rythme.",
      planName: "Logiciel Agrivanna",
      price: "Sur mesure",
      priceNote: "pour votre ranch",
      includes: [
        "Registres vocaux, séances à la chute, prise en charge des lecteurs et des indicateurs de balance",
        "Fonctionne hors ligne sur chaque appareil, se synchronise tout seul",
        "Cartographie des pâturages, état de préparation et planification des rotations",
        "Registres sur le Web pour la famille, les employés et votre vétérinaire",
        "Nous configurons le ranch et chargeons vos registres pour vous",
        "Vos données exportées dès que vous le demandez",
      ],
      setupNote: "Premier mois gratuit. Aucune carte de crédit pour commencer.",
      howTitle: "Comment le prix est établi",
      howSteps: [
        { step: "01", head: "Parlez-nous du ranch", body: "Remplissez le formulaire d’essai gratuit. Ça prend une minute." },
        { step: "02", head: "Discutons-en", body: "Lors d’un court appel, nous configurons le ranch et convenons d’un prix adapté à votre troupeau et à vos terres." },
        { step: "03", head: "Premier mois gratuit", body: "Utilisez tout pendant un mois. Votre forfait ne commence qu’après." },
      ],
    },

    features: {
      eyebrow: "Ce que vous obtenez",
      headLine1: "Toute la plateforme,",
      headLine2: "comprise pour chaque ranch.",
      body:
        "Aucun module à ajouter : chaque ranch a toute la plateforme. Certaines fonctions sont encore en déploiement — demandez-nous ce qui est déjà disponible pour votre ranch et nous vous le dirons franchement.",
      imageAlt: "Choix des tâches d’une séance à la chute dans l’application Agrivanna",
      groups: [
        {
          group: "Animaux et troupeau",
          items: [
            { name: "Fiche à vie de l’animal", detail: "Chaque événement de l’animal, de la naissance à la vente, dans un seul historique." },
            { name: "Inventaire en temps réel", detail: "Se met à jour tout seul quand les animaux changent de place, vêlent ou sont réformés." },
            { name: "Lecture des étiquettes RFID", detail: "Lecteurs à bâton Bluetooth et indicateurs de balance." },
            { name: "Reproduction et vêlage", detail: "Registres d’insémination, diagnostics de gestation et registre de vêlage." },
            { name: "Génétique et DEP", detail: "Différences attendues chez la progéniture, rattachées à l’animal." },
            { name: "Cote d’état de chair", detail: "De 1 à 10, prise à la chute pendant la lecture de l’étiquette." },
            { name: "Gestion BQA", detail: "Protocoles Beef Quality Assurance suivis au fil du travail." },
            { name: "Inventaire des aliments", detail: "Un portrait global de ce que vous avez en réserve." },
          ],
        },
        {
          group: "Gestion des pâturages",
          items: [
            { name: "Planificateur de pâturage", detail: "Automatisé, selon la capacité de charge et la densité de chargement." },
            { name: "Cartes thermiques d’utilisation", detail: "Établies à partir de l’indice de végétation et d’images satellite." },
            { name: "Fourrage ajusté pour l’hiver", detail: "Estimations pour la saison froide une fois les données NRS connectées." },
            { name: "Limites à votre façon", detail: "Dessinez-les, parcourez-les en camion ou à pied, ou importez ce que vous avez." },
          ],
        },
        {
          group: "Système et données",
          items: [
            { name: "Dictée vocale et saisie rapide", detail: "Notes de ranch rapides et actions de saisie explicites, gardées séparément." },
            { name: "Données satellite et météo", detail: "Images et prévisions locales, récupérées automatiquement." },
            { name: "API ouverte et exportations", detail: "Vos données quand vous le voulez, dans un format que d’autres logiciels peuvent lire." },
            { name: "Rôles et accès multiutilisateur", detail: "Des autorisations pour la famille, les employés et votre vétérinaire." },
            { name: "Hors ligne partout", detail: "Données conservées sur chaque appareil, synchronisation automatique dès qu’il y a du signal." },
            { name: "Nous faisons votre saisie", detail: "Envoyez-nous ce que vous avez et nous importerons tout pour vous." },
          ],
        },
      ],
    },

    cta: {
      headLine1: "Essayez Agrivanna le temps d’un passage à la chute.",
      headLine2: "Au dernier veau, vous saurez.",
      body:
        "Écrivez-nous et nous configurerons votre ranch nous-mêmes — pâturages cartographiés, troupeaux importés, lecteur jumelé. Ensuite, apportez votre téléphone à la chute et voyez si Agrivanna suit le rythme.",
    },
  },

  partners: {
    eyebrow: "Nos partenaires",
    heading: "Bâti avec des partenaires canadiens en recherche, en financement et en équipement agricole.",
    contexts: {
      NVIDIA: "Partenaire technologique",
      "Google Cloud": "Crédits pour jeunes pousses",
      "Alberta Innovates": "Partenaire de financement",
      "NuWest Interiors": "Commanditaire fondateur",
      "Plug and Play": "Programme agrotech",
      "THRIVE SVG": "Programme agroalimentaire",
      DeepSense: "Partenaire en IA",
      "Huber Ag Equipment": "Partenaire en équipement",
    },
  },

  team: {
    metaTitle: "Équipe — Agrivanna",
    metaDescription:
      "L’équipe fondatrice et le comité consultatif qui bâtissent Agrivanna — recherche en IA, ingénierie FPGA, élevage et gestion.",
    eyebrow: "Qui nous sommes",
    headLine1: "Ingénieurs,",
    headLine2: "éleveurs,",
    headLine3: "gestionnaires.",
    intro:
      "Agrivanna est une petite équipe qui a bâti ce que presque toute l’industrie jugeait impossible : un système d’aide à la gestion du pâturage qui fonctionne hors ligne, dans des ranchs en activité. Voici qui est derrière.",
    photoAlt: "L’équipe fondatrice d’Agrivanna avec un des premiers prototypes de collier",
    cofoundersEyebrow: "Équipe fondatrice",
    cofoundersHeading: "Les trois qui bâtissent l’entreprise.",
    founded: "Calgary (Alb.) · Fondée en oct. 2024",
    advisorsEyebrow: "Comité consultatif",
    advisorsHeading: "Les personnes que nous appelons quand ça compte.",
    teamPhotoAlt: "L’équipe d’Agrivanna",
    closingLine1: "Bâti à Calgary.",
    closingLine2: "Testé dans des ranchs albertains.",
    closingTag: "Agrivanna / Équipe",
    linkedinAria: "{name} sur LinkedIn",
    people: {
      amirhossein: {
        role: "Chef de la direction",
        focus: "Produit · IA · Imagerie satellite",
        bio: "M. Sc. en génie logiciel. Spécialiste de l’IA et du développement logiciel à la tête de la stratégie produit d’Agrivanna, de sa plateforme d’IA et de son estimation du fourrage par satellite. Fixe le cap technique de l’entreprise.",
      },
      aminreza: {
        role: "Chef de la technologie",
        focus: "IA embarquée · Jetson · Intégration matérielle",
        bio: "Études en informatique en cours; spécialiste de l’IA embarquée. Supervise la pile logicielle d’Agrivanna, l’intégration matérielle et le déploiement sur Jetson — tout ce qui tourne sur le collier et au champ.",
      },
      haden: {
        role: "Chef de l’exploitation",
        focus: "Opérations de ranch · Mise en marché · Finances",
        bio: "Études en commerce (B. Comm.) en cours et expérience en exploitation agricole. Gère les opérations, les relations avec les éleveurs et l’exécution commerciale. La voix du client dans l’entreprise — et la personne de l’équipe fondatrice qu’on trouve le plus souvent dans un camion.",
      },
      bita: {
        role: "Responsable du matériel · Ph. D.",
        focus: "FPGA · Systèmes embarqués · Calcul à faible consommation",
        bio: "Titulaire d’un doctorat en génie et spécialiste des FPGA. Dirige la conception matérielle du collier d’Agrivanna, ses systèmes embarqués et son calcul à faible consommation. Si le collier fonctionne uniquement à l’énergie solaire, c’est grâce à ce travail.",
      },
      jim: {
        role: "Validation sur le terrain · Ranch partenaire principal",
        focus: "Élevage familial depuis plusieurs générations · Antelope Butte Ranch",
        bio: "Plusieurs générations d’élevage et des décisions guidées par les données. Mène l’essentiel de la validation d’Agrivanna à l’Antelope Butte Ranch, où le système est mis à l’épreuve avec de vrais bovins, un vrai terrain et une vraie météo.",
      },
      alireza: {
        role: "Comité consultatif · Sciences vétérinaires",
        focus: "Bien-être des bovins · Science du pâturage · Comportement du troupeau",
        bio: "Doctorat en sciences vétérinaires en cours. Conseille l’équipe sur le bien-être des bovins, le comportement du troupeau et la science du pâturage — la biologie derrière chaque recommandation d’IA du PRS.",
      },
      soheil: {
        role: "Comité consultatif · Matériel, boîtier et format",
        focus: "Design industriel · Ingénierie du boîtier · Format",
        bio: "A conçu le boîtier et le format du collier d’Agrivanna. Continue de conseiller l’équipe sur la conception matérielle à mesure que le collier avance vers une production prête pour le terrain.",
      },
      jason: {
        role: "Comité consultatif · Stratégie et leadership",
        focus: "Coaching en leadership · Mentorat THRIVE SVG",
        bio: "Coach en leadership et mentor à THRIVE SVG. Appuie la stratégie d’Agrivanna, le développement de l’équipe et l’atteinte des jalons. Veille au rythme de travail de l’équipe fondatrice.",
      },
    },
  },

  news: {
    metaTitle: "Nouvelles — Agrivanna",
    metaDescription:
      "Presse, prix et accélérateurs : les nouvelles d’Agrivanna.",
    eyebrow: "Presse · Prix · Jalons",
    headLine1: "Ce que nous bâtissons",
    headLine2: "au grand jour.",
    intro:
      "Chaque accélérateur, prix et article obtenu en chemin.",
    photoAlt: "Un téléphone affichant l’écran de pesée d’Agrivanna, tenu par un éleveur à côté d’un indicateur de balance",
    latestEyebrow: "Récent",
    latestHeading: "Dans les médias.",
    storyCount: "{count} articles",
    readMore: "Lire la suite",
    watchEyebrow: "Regarder",
    watchHeading: "Agrivanna en vidéo.",
    videos: {
      platform: "Platform Calgary · Agrivanna, finaliste du Top 10 2026",
      ucalgary: "Université de Calgary · Les débuts d’Agrivanna",
    },
    storyEyebrow: "Notre parcours jusqu’ici",
    storyHeading: "De Calgary au troupeau — et plus loin.",
    storyIntro: "Chaque jalon depuis octobre 2024, et ce que nous préparons pour la suite.",
    tags: {
      Press: "Presse",
      Award: "Prix",
      Accelerator: "Accélérateur",
      Competition: "Concours",
    },
    items: {
      "calgary-tech": {
        title: "Agrivanna apporte les registres vocaux au ranch",
        source: "Calgary.Tech",
        date: "Septembre 2026",
        summary:
          "Calgary.Tech a présenté comment les éleveurs dictent leurs notes sur les animaux, les traitements et les déplacements de troupeaux, les vérifient avant de les enregistrer et continuent de travailler sans réseau cellulaire, en plus de la cartographie des pâturages et de la planification des rotations.",
      },
      "platform-top-10": {
        title: "Parmi les 10 meilleures jeunes pousses en démarrage de Calgary",
        source: "Platform Calgary",
        date: "Septembre 2026",
        summary:
          "Platform Calgary a nommé Agrivanna parmi les 10 finalistes de son Calgary Launch Party 2026, qui réunit les jeunes pousses en démarrage les plus prometteuses de la ville. Le Launch Party a lieu le 5 novembre, pendant la Calgary Innovation Week.",
      },
      "rural-roots": {
        title: "Rendre la clôture virtuelle plus accessible aux éleveurs",
        source: "Rural Roots Canada · Field to Future",
        date: "Août 2026",
        summary:
          "Rural Roots Canada s’est penché sur la clôture virtuelle qu’Agrivanna développe pour faciliter le pâturage en rotation, dont une option moins coûteuse construite autour d’une station de base portative. La clôture virtuelle est toujours en recherche et développement.",
      },
      spring: {
        title: "Sélection au programme Elevate Round Ready de Spring",
        source: "Spring",
        date: "Juin 2026",
        summary:
          "Agrivanna s’est jointe à la cohorte de l’été 2026 du programme Elevate Round Ready de Spring — un accélérateur de Vancouver dont les entreprises ont amassé plus de 17 M$ depuis la mi-2025. Le programme met l’équipe en relation avec des investisseurs choisis pendant qu’elle mène sa ronde de financement d’amorçage.",
      },
      "start-something": {
        title: "1re place — Start Something Summit",
        source: "Université de Calgary · Hunter Hub",
        date: "Juin 2026",
        summary:
          "Agrivanna a remporté 10 000 $ pour la 1re place du volet Launchpad au Start Something Summit de l’Université de Calgary — la plus récente d’une série de victoires aux concours de présentation du Hunter Hub.",
      },
      "ucalgary-feature": {
        title: "Une jeune pousse étudiante en agrotech aide les éleveurs à gérer leur bétail",
        source: "Nouvelles de l’Université de Calgary",
        date: "Juin 2026",
        summary:
          "Les Nouvelles de l’Université de Calgary ont raconté comment les trois membres de l’équipe fondatrice d’Agrivanna se sont rencontrés à l’université, et pourquoi ils ont voulu rendre la technologie de ranch moins chère et plus utile pour les producteurs canadiens.",
      },
      arena: {
        title: "Agrivanna remporte The Arena 2026 et son grand prix de 10 000 $",
        source: "Université Saint Mary’s · The Arena",
        date: "Avril 2026",
        summary:
          "Haden Harrison, chef de l’exploitation, a mené Agrivanna au sommet de The Arena, le concours national de présentation pour étudiants de l’Université Saint Mary’s : un mois de duels éliminatoires entre plus de 64 fondateurs issus de 41 établissements de partout au Canada.",
      },
      liftoff: {
        title: "2e place au Hunter Hub Liftoff",
        source: "Université de Calgary · Hunter Hub",
        date: "Mars 2026",
        summary:
          "Agrivanna a pris la deuxième place du concours Hunter Hub Liftoff, soutenu par le programme de pensée entrepreneuriale de l’Université de Calgary.",
      },
      aurrin: {
        title: "1re place au concours Aurrin Ventures",
        source: "Aurrin Ventures",
        date: "Février 2026",
        summary:
          "Agrivanna a remporté le prix Most Investible Company au concours de présentation d’Aurrin Ventures, au cœur de la communauté des jeunes pousses de Calgary.",
      },
      "plug-and-play": {
        title: "Sélection à l’accélérateur Plug and Play Kananaskis",
        source: "Plug and Play",
        date: "Novembre 2025",
        summary:
          "Agrivanna s’est jointe à la cohorte Plug and Play Kananaskis, qui met l’équipe en relation avec de grandes entreprises et des investisseurs agrotech du monde entier.",
      },
      thrive: {
        title: "Admission à la cohorte VII de la THRIVE SVG Academy",
        source: "THRIVE Agrifood",
        date: "Novembre 2025",
        summary:
          "Agrivanna a été retenue pour la cohorte d’entreprises agrotech de THRIVE — le principal réseau mondial d’innovation agroalimentaire.",
      },
      techstart: {
        title: "1re place — Jeune pousse étudiante de l’année",
        source: "TechStart UCalgary",
        date: "Mai 2025",
        summary:
          "Agrivanna a remporté le prix de la meilleure jeune pousse étudiante de TechStart UCalgary, une validation de sa vision devant la communauté techno de Calgary.",
      },
    },
  },

  timeline: {
    planned: "Prévu",
    inProgress: "En cours",
    complete: "Terminé",
    previous: "Jalon précédent",
    next: "Jalon suivant",
    items: {
      founded: { date: "Oct. 2024", title: "Fondation d’Agrivanna", body: "Les trois membres de l’équipe fondatrice lancent l’entreprise à Calgary, en Alberta." },
      techstart: { date: "Mai 2025", title: "TechStart UCalgary", body: "Nommée jeune pousse étudiante de l’année." },
      thrive: { date: "Nov. 2025", title: "Cohorte VII de THRIVE", body: "Admission à la THRIVE SVG Academy — un réseau mondial d’innovation agroalimentaire." },
      "plug-and-play": { date: "Nov. 2025", title: "Plug and Play", body: "Admission à l’accélérateur Plug and Play Kananaskis." },
      aurrin: { date: "Févr. 2026", title: "Aurrin Ventures", body: "Prix Most Investible Company au concours Aurrin." },
      liftoff: { date: "Mars 2026", title: "Hunter Hub Liftoff", body: "Deuxième place au principal concours de jeunes pousses de l’Université de Calgary." },
      arena: { date: "Avr. 2026", title: "The Arena · 1re place", body: "Meilleure jeune pousse universitaire canadienne au concours The Arena." },
      pilots: { date: "Été 2026", title: "Premiers projets pilotes en ranch", body: "Premiers déploiements réels dans des ranchs partenaires en Alberta." },
      refinement: { date: "Fin 2026", title: "Peaufinage du produit", body: "Amélioration du matériel et du logiciel grâce aux données des projets pilotes." },
      "western-canada": { date: "2027", title: "Ouest canadien", body: "Expansion des projets pilotes et des déploiements commerciaux dans les Prairies." },
    },
  },

  softwareLeads: {
    metaTitle: "Essai gratuit — Agrivanna",
    metaDescription:
      "Parlez-nous de votre exploitation et commencez à utiliser le logiciel d’aide à la gestion du pâturage d’Agrivanna.",
    eyebrow: "Essai gratuit",
    headLine1: "Mettez Agrivanna",
    headLine2: "sur votre ranch.",
    intro:
      "Parlez-nous de votre exploitation et nous configurerons votre compte. Ça prend quelques minutes — les questions ci-dessous sont celles que nous posons lors d’un premier appel.",
    asks: [
      "Votre nom et comment vous joindre",
      "Le nom de votre ranch",
      "Où sont vos registres en ce moment",
    ],
    questionsBefore: "Des questions avant de commencer? Écrivez à ",
    questionsAfter: ".",
  },

  legal: {
    eyebrow: "Juridique",
    translationNote:
      "Cette traduction est fournie pour votre commodité. En cas de divergence, la version anglaise prévaut.",
  },

  site: {
    menu: {
      product: "Produit",
      resources: "Ressources",
      company: "Entreprise",
      pricing: "Tarifs",
      news: "Nouvelles",
      software: "Logiciel",
      hardware: "Matériel",
      hardwareCard: {
        title: "Clôture virtuelle",
        body: "Des clôtures sans fil, bâties sur les pâturages que vous cartographiez aujourd’hui. En recherche et développement, pas encore en vente.",
        link: "Ce que nous bâtissons",
      },
      rnd: "R-D",
      items: {
        webApp: { label: "Application Web", desc: "Tout votre ranch sur grand écran." },
        iosApp: { label: "Application iOS", desc: "Parlez à la chute, même sans réseau." },
        pasture: { label: "Gestion des pâturages", desc: "Pâturages cartographiés, état vu par satellite." },
        herd: { label: "Gestion du troupeau", desc: "Chaque animal, de la naissance à la vente." },
        grazing: { label: "Pâturage en rotation", desc: "Planifiez les rotations, voyez où les bêtes ont brouté." },
        fencing: { label: "Clôture virtuelle", desc: "Des clôtures sans fil. En recherche et développement." },
        features: { label: "Toutes les fonctions", desc: "Registres vocaux, mode hors ligne et le reste, tout compris." },
        news: { label: "Nouvelles", desc: "Presse, prix et accélérateurs." },
        faq: { label: "Aide et FAQ", desc: "Des réponses franches avant de commencer." },
        about: { label: "À propos", desc: "Notre parcours et ceux qui nous appuient." },
        team: { label: "Équipe", desc: "Les gens qui bâtissent Agrivanna." },
        partners: { label: "Partenaires", desc: "Partenaires de recherche, de financement et d’équipement." },
        contact: { label: "Contact", desc: "Commencez un essai gratuit ou écrivez à l’équipe." },
      },
    },

    footerResources: "Ressources",
    pricingScope: {
      title: "Logiciel seulement, pour l’instant",
      body: "Aujourd’hui, nous vendons le logiciel Agrivanna. Le matériel de clôture virtuelle est en recherche et développement et n’est pas encore en vente.",
      link: "Voir ce que nous bâtissons",
    },
    rndBadge: "Prototype R-D",
    fenceImageAlt: "Une vache rousse portant un prototype de collier de clôture virtuelle Agrivanna",
    learnMore: "En savoir plus",

    home: {
      productsEyebrow: "La plateforme",
      productsLine1: "Une seule application,",
      productsLine2: "de la chute à la table de cuisine.",
      howEyebrow: "Comment ça marche",
      howLine1: "Dites-le. Vérifiez-le.",
      howLine2: "Décidez à partir de là.",
      howSteps: [
        { step: "01", head: "Dites-le", body: "Racontez la journée à la chute ou au champ. Pas besoin de réseau." },
        { step: "02", head: "Vérifiez-le", body: "Chaque entrée revient sous forme de ligne simple. Un toucher suffit pour la garder; rien n’est enregistré sans vous." },
        { step: "03", head: "Utilisez-le", body: "Troupeau, poids et pâturages sur le téléphone et l’ordinateur, prêts pour vos décisions." },
      ],
      pricingEyebrow: "Tarifs",
      pricingLine1: "Un prix adapté à votre ranch.",
      pricingLine2: "Premier mois gratuit.",
      pricingBody: "Le logiciel Agrivanna, toutes les fonctions, pour chaque ranch. Parlez-nous de votre exploitation et nous vous proposerons un prix qui lui convient.",
      showcasePause: "Mettre la visite en pause",
      showcasePlay: "Reprendre la visite",
      showcase: {
        voice: { label: "Registres vocaux", head: "Dites-le à la chute.", body: "Racontez la journée comme vous le feriez à votre voisin. Agrivanna inscrit les étiquettes, les poids et les traitements à la fiche du bon animal, et rien n’est enregistré avant votre confirmation." },
        pasture: { label: "Gestion des pâturages", head: "Sachez quel pâturage est prêt.", body: "Cartographiez vos pâturages, voyez par imagerie satellite lesquels se sont assez reposés et faites passer vos troupeaux dans une rotation sans rien redessiner." },
        web: { label: "Registres sur le Web", head: "Les mêmes registres, sur grand écran.", body: "Tout ce qui est dit à la chute est sur l’ordinateur quand vous rentrez. Triez les troupeaux, vérifiez les poids et exportez pour le vétérinaire ou le comptable." },
        fencing: { label: "Clôture virtuelle", head: "Des clôtures sans fil.", body: "Des limites virtuelles qui font rebrousser chemin au bétail, bâties sur les pâturages que vous cartographiez aujourd’hui. En recherche et développement, pas encore en vente." },
      },
      dataEyebrow: "Vos données",
      dataLine1: "Vos registres restent",
      dataLine2: "de votre côté de la clôture.",
      dataPoints: [
        { head: "Hébergées au Canada", body: "Nos serveurs fonctionnent sur Google Cloud, à Montréal." },
        { head: "Jamais vendues", body: "Nous ne vendons pas vos renseignements et ne les utilisons pas pour la publicité." },
        { head: "À vous de les emporter", body: "Exportez vos registres quand vous le voulez, dans un format que d’autres logiciels peuvent lire." },
        { head: "Chiffrées en transit", body: "Les registres circulent entre l’application et nos serveurs par des connexions chiffrées." },
      ],
      dataLink: "Lire la politique de confidentialité",
    },

    pages: {
      software: {
        metaTitle: "Logiciel — Agrivanna",
        metaDescription: "L’application Web et l’application iOS d’Agrivanna : gestion du troupeau, des pâturages et du pâturage en rotation pour les ranchs vache-veau, avec des registres vocaux qui fonctionnent sans réseau.",
        eyebrow: "Produit · Logiciel",
        headLine1: "Une application,",
        headLine2: "pour le troupeau et l’herbe.",
        intro: "Parlez-lui sur votre téléphone à la chute, planifiez le pâturage sur la carte et retrouvez tout sur l’ordinateur de retour à la maison. Chaque partie est comprise pour chaque ranch.",
        jumpTitle: "Sur cette page",
        sections: {
          webApp: {
            head1: "Tout votre ranch,",
            head2: "sur grand écran.",
            body: "Tout ce que vous avez dit à la chute est sur l’ordinateur avant même que vous rentriez. Le tableau de bord montre d’un coup d’œil le nombre de têtes, les troupeaux, les pâturages occupés et la météo.",
            bullets: [
              "Voyez où est chaque troupeau, depuis combien de temps, et quels déplacements sont dus.",
              "Triez les troupeaux, vérifiez les poids et voyez quelles vaches méritent leur ration.",
              "Exportez vos registres quand le vétérinaire ou le comptable les demande.",
              "Donnez à votre famille, à vos employés et à votre vétérinaire leur propre accès, avec les autorisations que vous choisissez.",
            ],
            imageAlt: "Le tableau de bord d’Agrivanna sur un ordinateur portable : nombre de têtes, troupeaux, météo et état des pâturages",
          },
          iosApp: {
            head1: "Parlez-lui à la chute.",
            head2: "Même sans réseau.",
            body: "Racontez ce qui s’est passé comme vous le diriez à votre voisin par-dessus la clôture. Agrivanna repère les étiquettes, les poids et les traitements et les inscrit à la fiche du bon animal.",
            bullets: [
              "Parlez avec vos propres mots. Pas de formulaires, pas de menus déroulants, rien à apprendre.",
              "Chaque entrée revient sous forme de ligne simple, et rien n’est enregistré avant votre confirmation.",
              "Pas besoin de réseau. Les registres restent sur le téléphone et se téléversent tout seuls quand vous retrouvez le signal.",
              "Votre lecteur RFID et votre indicateur de balance envoient les étiquettes et les poids par Bluetooth.",
            ],
            imageAlt: "L’application iPhone d’Agrivanna à l’écoute d’une note vocale",
          },
          pasture: {
            head1: "Sachez quel pâturage",
            head2: "est prêt.",
            body: "Entrez vos pâturages comme ça vous convient : dessinez-les sur la carte, faites-en le tour en camion, longez la clôture à pied ou importez les limites que vous avez déjà. Dans tous les cas, vous obtenez la superficie.",
            bullets: [
              "Les images satellite montrent quels pâturages se sont assez reposés : plus besoin de deviner.",
              "Chaque pâturage marqué prêt, à surveiller ou au repos, d’un coup d’œil.",
              "Voyez combien de têtes sont sur chaque pâturage, directement sur la carte.",
              "Votre météo locale et vos prévisions, intégrées automatiquement.",
            ],
            imageAlt: "Pâturages cartographiés sur l’imagerie satellite dans l’application Agrivanna, avec le nombre de têtes sur chacun",
          },
          herd: {
            head1: "Chaque animal,",
            head2: "de la naissance à la vente.",
            body: "Chaque animal a un seul historique : vêlages, traitements, poids et déplacements, enregistrés pendant que vous travaillez au lieu d’être tapés plus tard.",
            bullets: [
              "Un inventaire qui se tient à jour quand les animaux se déplacent, vêlent ou sont réformés.",
              "Reproduction et vêlage : inséminations, diagnostics de gestation et registre de vêlage.",
              "Les traitements avec leurs délais d’attente, pour savoir quels animaux ne peuvent pas encore être expédiés.",
              "Étiquettes RFID lues avec des lecteurs à bâton Bluetooth, et état de chair noté à la chute.",
            ],
            imageAlt: "Liste du troupeau et fiches des animaux d’Agrivanna ouvertes dans un navigateur",
          },
          grazing: {
            head1: "Planifiez la rotation.",
            head2: "Voyez où les bêtes ont brouté.",
            body: "Établissez une rotation et faites-y passer vos troupeaux sans rien redessiner. Agrivanna compte les jours que chaque troupeau passe sur un pâturage et vous signale quand un déplacement est dû.",
            bullets: [
              "Un plan de pâturage établi selon la capacité de charge et la densité de chargement.",
              "Les cartes thermiques d’utilisation montrent où les bêtes ont vraiment brouté, pas où vous les avez envoyées.",
              "Le nombre de jours au pâturage et les déplacements dus, pour chaque troupeau.",
              "Les pâturages et les rotations que vous configurez aujourd’hui sont ceux sur lesquels la clôture virtuelle fonctionnera.",
            ],
            imageAlt: "Carte de pâturage dans l’application Agrivanna : enclos colorés selon l’indice de végétation, avec les jours de pâturage d’un troupeau et le bouton « Move »",
          },
        },
      },
      fencing: {
        metaTitle: "Clôture virtuelle (en R-D) — Agrivanna",
        metaDescription: "Agrivanna bâtit la clôture virtuelle : des limites qui font rebrousser chemin au bétail sans poteaux ni fil, sur les pâturages que les éleveurs cartographient déjà. En recherche et développement, pas encore en vente.",
        eyebrow: "Matériel · Clôture virtuelle · En R-D",
        heroLine1: "Clôturez la terre.",
        heroLine2: "Sans",
        heroLine3: "fil.",
        heroBody: "Des limites virtuelles qui font rebrousser chemin au bétail, sans poteaux ni fil. Nous les bâtissons maintenant, sur les pâturages et les rotations que les éleveurs cartographient déjà dans Agrivanna.",
        howLink: "Comment ça marche",
        ideaEyebrow: "L’idée",
        ideaLine1: "Tracez la ligne.",
        ideaLine2: "Le troupeau l’apprend.",
        ideaSteps: [
          { step: "01", head: "Tracez-la sur la carte", body: "Marquez la limite dans Agrivanna, comme vous cartographiez vos pâturages aujourd’hui." },
          { step: "02", head: "Un signal près de la ligne", body: "Le bétail qui s’approche de la limite reçoit un léger signal pour faire demi-tour." },
          { step: "03", head: "Déplacez-la à chaque rotation", body: "Déplacez la ligne vers le prochain enclos sans rien construire." },
        ],
        whyEyebrow: "Pourquoi c’est important",
        whyLine1: "Mettez le bétail là où",
        whyLine2: "clôturer n’a jamais été rentable.",
        statusEyebrow: "Où nous en sommes",
        statusLine1: "En recherche",
        statusLine2: "et développement.",
        statusBody: "Nous testons des prototypes avec des ranchs partenaires en Alberta. Rien de tout cela n’est encore en vente, et nous le dirons clairement tant que ce sera le cas.",
        photoPilots: "Prototypes de colliers dans un ranch partenaire pendant les essais pilotes",
        photoCow: "Une vache portant un prototype de clôture virtuelle Agrivanna",
        photoTeam: "L’équipe fondatrice d’Agrivanna avec un des premiers prototypes de collier",
        softwareEyebrow: "Commencez par le logiciel",
        softwareLine1: "Les pâturages que vous cartographiez",
        softwareLine2: "sont ceux sur lesquels elle fonctionnera.",
        softwareBody: "Cartographiez vos pâturages et planifiez vos rotations dans Agrivanna dès aujourd’hui. Quand la clôture virtuelle sera prête, elle s’appuiera sur ce que vous avez déjà tracé.",
        softwareLink: "Gestion des pâturages",
      },
      pricing: {
        metaTitle: "Tarifs — Agrivanna",
        metaDescription: "Agrivanna a un prix adapté à chaque ranch. Parlez-nous de votre exploitation, recevez un prix lors d’un court appel et utilisez tout gratuitement le premier mois.",
        eyebrow: "Tarifs",
        headLine1: "Un prix adapté",
        headLine2: "à votre exploitation.",
        intro: "Pas de grille tarifaire à déchiffrer. Nous apprenons comment votre ranch fonctionne, proposons un prix qui lui convient et vous offrons le premier mois.",
        faqEyebrow: "Questions",
        faqHeading: "Avant de vous inscrire.",
      },
      company: {
        metaTitle: "À propos — Agrivanna",
        metaDescription: "Agrivanna est une entreprise agrotechnologique de Calgary qui conçoit des registres de ranch qui fonctionnent à la chute, sans réseau.",
        eyebrow: "À propos",
        headLine1: "Bâti à Calgary.",
        headLine2: "Testé dans des ranchs albertains.",
        intro: "Agrivanna a été fondée en octobre 2024 pour créer des registres de ranch que les gens tiennent vraiment : dictés à la chute, enregistrés sans réseau et utiles à la maison.",
        photoAlt: "L’équipe fondatrice d’Agrivanna avec un des premiers prototypes de collier",
        teamLink: "Rencontrer l’équipe",
      },
      contact: {
        metaTitle: "Contact — Agrivanna",
        metaDescription: "Commencez un essai gratuit ou écrivez à l’équipe d’Agrivanna.",
        emailTitle: "Écrivez-nous",
        emailBody: "Nous lisons chaque message nous-mêmes.",
      },
      faq: {
        metaTitle: "Aide et FAQ — Agrivanna",
        metaDescription: "Des réponses franches sur Agrivanna : prix, contrat, réseau, équipement, vos données et la clôture virtuelle.",
        eyebrow: "Aide et FAQ",
        headLine1: "Des réponses franches.",
        headLine2: "Sans boniment.",
        intro: "Les questions que les éleveurs nous posent le plus. Si la vôtre n’y est pas, écrivez-nous et une vraie personne vous répondra.",
        stillTitle: "Encore une question?",
        stillBody: "Écrivez à {email} ou commencez un essai gratuit.",
      },
    },

    faq: [
      { pricing: true, q: "Combien ça coûte?", a: "Chaque ranch a son propre prix, selon l’exploitation et vos besoins. Remplissez le formulaire d’essai gratuit et nous vous le proposerons lors d’un court appel. Le premier mois est gratuit." },
      { pricing: true, q: "Y a-t-il un contrat?", a: "Les conditions sont convenues avec vous lors d’un appel, avant tout paiement." },
      { pricing: true, q: "Comment commencer?", a: "L’intégration est simple, et vous ne repartez pas de zéro. Remplissez le formulaire d’essai gratuit et envoyez-nous les registres que vous avez déjà, que ce soit un calepin, des feuilles de calcul ou un autre logiciel. Nous importons tout le ranch pour vous et le configurons nous-mêmes (pâturages cartographiés, troupeaux importés et lecteur jumelé), et nous vous contactons d’ici un jour." },
      { pricing: false, q: "Ai-je besoin d’un signal cellulaire?", a: "Non. Tout est enregistré sur le téléphone d’abord et se téléverse tout seul au prochain signal ou sur le Wi-Fi de la cour." },
      { pricing: false, q: "Avec quel équipement Agrivanna fonctionne-t-il?", a: "Avec les lecteurs à bâton Bluetooth et les indicateurs de balance. Ils transmettent étiquettes et poids sans que vous ayez à taper un chiffre." },
      { pricing: false, q: "Puis-je récupérer mes données?", a: "Oui, quand vous voulez, dans un format que d’autres logiciels peuvent lire." },
      { pricing: false, q: "Ma famille, mes employés ou mon vétérinaire peuvent-ils l’utiliser?", a: "Oui. Chaque personne a son propre accès, avec les autorisations que vous choisissez." },
      { pricing: true, q: "Puis-je acheter le matériel de clôture virtuelle?", a: "Pas encore. Aujourd’hui, nous vendons seulement le logiciel Agrivanna. La clôture virtuelle est en recherche et développement, et les pâturages que vous cartographiez et les rotations que vous établissez aujourd’hui sont ceux sur lesquels elle fonctionnera." },
    ],
  },

  notFound: {
    metaTitle: "Page introuvable — Agrivanna",
    eyebrow: "404",
    heading: "Cette page n’existe pas.",
    body: "Elle a peut-être été déplacée, ou le lien contient une faute de frappe. La page d’accueil mène à tout le reste.",
    home: "Retour à l’accueil",
  },
};

export default fr;
