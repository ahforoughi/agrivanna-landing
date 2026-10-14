import type { Dictionary } from "./en";

/**
 * Canadian French (fr-CA): "vous", "courriel", "témoins", "fin de semaine",
 * province abbreviations as "(Alb.)", amounts as "50 $", a non-breaking space
 * before a colon and none before ? ! or ;.
 *
 * Bios avoid gendered words (il/elle, étudiant/étudiante) because we don't
 * know how each person refers to themselves.
 *
 * The app itself, and its voice recognition, are English-only today — see
 * home.recording.appLanguageNote. Don't promise French dictation here.
 */
const fr: Dictionary = {
  meta: {
    title: "Agrivanna — Des registres de ranch que vous dictez au lieu de les taper",
    description:
      "Dictez vos registres de troupeau et de pâturage, gants aux mains. Fonctionne sans réseau, se synchronise dès que le signal revient et établit des plans de pâturage en rotation à partir d’images satellite.",
    ogTitle: "Agrivanna — Gérez le troupeau, pas le logiciel",
    ogDescription:
      "Des registres de ranch à la voix qui fonctionnent hors ligne, plus la cartographie des pâturages et des plans de pâturage en rotation.",
  },

  nav: {
    home: "Accueil",
    pricing: "Tarifs",
    team: "Équipe",
    news: "Nouvelles",
    freeTrial: "Essai gratuit",
    homeAria: "Accueil Agrivanna",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },

  language: {
    label: "Langue",
    switchTo: "Passer à la version {language}",
  },

  trialButton: "Commencer un essai gratuit",
  bookCall: "Réserver un appel",

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
    location: "Ville la plus proche et province",
    locationPlaceholder: "p. ex. Nanton (Alb.)",
    head: "Nombre de têtes",
    operation: "Type d’exploitation",
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
    eyebrow: "Registres de ranch · Calgary (Alb.)",
    heroPhotoAlt:
      "Un téléphone affichant l’écran de pesée d’Agrivanna, tenu à côté d’un indicateur de balance",
    heroLine1: "Gérez le troupeau.",
    heroLine2: "Pas le",
    heroLine3: "logiciel.",
    heroBody:
      "Les mains dans la boue, pas de réseau et pas une semaine à perdre pour apprendre un logiciel. Alors n’apprenez rien — parlez-lui. Agrivanna tient les registres de troupeau et de pâturage que vous n’avez jamais le temps d’écrire.",
    seeHow: "Voir comment ça marche",
    testedOn: "Conçu et testé dans de vrais ranchs albertains",

    problem: {
      eyebrow: "Le vrai problème",
      headLine1: "Le logiciel n’a jamais été",
      headLine2: "le plus difficile.",
      body:
        "C’est d’y entrer quoi que ce soit. Depuis vingt ans, tous les logiciels de ranch échouent au même point — le moment où quelqu’un, les mains sales, doit arrêter de travailler pour taper.",
      friction: [
        {
          head: "Vous avez déjà les mains pleines.",
          body:
            "Vêlages, gants, sang, colostrum, une étiquette entre les dents. Personne ne fait défiler six écrans à trois heures du matin pour inscrire une génisse.",
        },
        {
          head: "Le calepin, c’est le système.",
          body:
            "Les étiquettes sur un bout de papier, les poids sur le tableau blanc de l’atelier, le reste dans votre tête jusqu’à ce que le comptable pose la question en mars.",
        },
        {
          head: "Personne n’a une semaine pour apprendre un logiciel.",
          body:
            "La plupart des logiciels de ranch demandent plus de champs que vous n’avez de réponses, et il faut tout taper. Alors on les ouvre une fois, puis plus jamais.",
        },
      ],
      punchline: "Alors ne tapez pas. Parlez.",
    },

    recording: {
      eyebrow: "Enregistrement",
      headLine1: "Dites-le à voix haute.",
      headLine2: "C’est noté.",
      body:
        "Racontez ce que vous faites comme vous le diriez à votre voisin par-dessus la clôture. Agrivanna repère les étiquettes, les poids et les traitements dans ce que vous dites et les inscrit à la fiche du bon animal.",
      bullets: [
        "Parlez avec vos propres mots. Pas de formulaires, pas de menus déroulants, rien à apprendre.",
        "Votre lecteur RFID et votre indicateur de balance envoient les étiquettes et les poids sans que vous tapiez un seul chiffre.",
        "Vous tenez déjà des registres ailleurs? Envoyez-les-nous et nous importerons tout pour vous.",
      ],
      appLanguageNote:
        "À noter : pour l’instant, l’application et la reconnaissance vocale fonctionnent en anglais. L’exemple sur le téléphone est donc dicté en anglais.",
      // Left in English on purpose: it's what the app hears, and it only listens in English.
      dictation:
        "Cow 418, the black baldy heifer. Calved around five this morning in the north pasture. Bull calf, no help needed, up and sucking already. Gave him yellow tag 418 and a shot of vitamin E and selenium. Guessing he's about 85 pounds. She's a good mom, a bit protective.",
      dictationSr: "L’écran de note vocale d’Agrivanna transcrit, en anglais, ce que dit un éleveur :",
      confirmEyebrow: "Puis confirmez",
      confirmLine1: "Touchez une fois, et c’est",
      confirmLine2: "au registre.",
      confirmBody:
        "Tout ce que vous avez dit au champ revient sous forme de lignes simples — le vêlage, les bouvillons déplacés, la vache traitée, l’endroit où vous avez laissé les balles, celui où vous avez mis le sel. Vérifiez-les ou rejetez-les. Rien n’entre dans vos registres sans votre accord : une étiquette mal entendue ne devient jamais une erreur au dossier.",
    },

    confirmQueue: {
      title: "Prêt à confirmer",
      count: "5 entrées",
      footer:
        "Touchez le crochet et c’est au registre. Rien n’est inscrit à vos registres sans votre accord.",
      rows: [
        { date: "11 sept.", action: "Vêlage", subject: "Vache 418", detail: "Veau mâle, sans aide, pâturage nord" },
        { date: "11 sept.", action: "Changement de pâturage", subject: "Bouvillons d’un an · 88 têtes", detail: "Pré nord → sud" },
        { date: "10 sept.", action: "Traitement", subject: "Bleu 61", detail: "Kératoconjonctivite, 8 cc, délai d’attente inscrit" },
        { date: "10 sept.", action: "Balles déposées", subject: "12 balles rondes", detail: "Pâturage du ruisseau, barrière ouest" },
        { date: "9 sept.", action: "Sel et minéraux", subject: "Bloc déposé", detail: "Pâturage sud, près de la fosse-réservoir" },
      ],
    },

    offline: {
      eyebrow: "Pensé pour fonctionner hors ligne",
      headLine1: "Pas de réseau.",
      headLine2: "Rien de perdu.",
      body:
        "La version qui fait foi, c’est celle du téléphone, pas celle d’un serveur en ville. Entrer et sortir de la zone de couverture ne devrait pas vous préoccuper, et une zone morte ne devrait jamais vous coûter une journée de travail.",
      steps: [
        { step: "01", head: "Vous parlez", body: "À la contention, au champ, où que vous soyez." },
        { step: "02", head: "Le téléphone garde tout", body: "Enregistré sur l’appareil dès que vous arrêtez de parler. Avec ou sans signal." },
        { step: "03", head: "Ça se téléverse tout seul", body: "Dès que vous retrouvez du signal ou le Wi-Fi de la cour. Rien à faire de votre côté." },
      ],
    },

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
      fenceHeadHighlight: "Les clôtures virtuelles",
      fenceHeadAfter: "sont à venir.",
      fenceBody:
        "Pas de fil, pas de piquets, pas de réparations après le passage des wapitis. Subdivisez un quart de section sans dépenser un dollar en matériaux ni une fin de semaine de travail, et mettez du bétail sur des terres que vous n’auriez jamais pu vous permettre de clôturer — fonds de ruisseau, boisés, terres louées, l’arrière de la colline.",
      fenceHonest:
        "Nous n’allons pas vous vendre un collier qui n’est pas prêt. La clôture virtuelle est en recherche et développement. Les pâturages que vous cartographiez et les rotations que vous établissez aujourd’hui sont ceux sur lesquels elle fonctionnera : rien de ce que vous faites maintenant ne sera perdu.",
    },

    house: {
      eyebrow: "De retour à la maison",
      headLine1: "Les mêmes registres,",
      headLine2: "sur grand écran.",
      body:
        "Tout ce que vous avez dit à la contention est sur l’ordinateur avant même que vous rentriez. Triez les troupeaux, vérifiez les poids, voyez quelles vaches méritent leur ration et exportez vos données quand le vétérinaire ou le comptable les demande.",
      imageAlt: "Liste du troupeau et fiches des animaux d’Agrivanna ouvertes dans un navigateur",
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
      headLine1: "Conçu à la contention,",
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
        "Registres vocaux, séances de contention, lecteurs et indicateurs de balance",
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
        "Aucun module à ajouter : chaque ranch a toute la plateforme. Certaines fonctions sont encore en déploiement — demandez-nous ce qui est déjà disponible pour votre ranch et nous vous le dirons franchement.",
      imageAlt: "Choix des tâches d’une séance de contention dans l’application Agrivanna",
      groups: [
        {
          group: "Animaux et troupeau",
          items: [
            { name: "Fiche à vie de l’animal", detail: "Chaque événement de l’animal, de la naissance à la vente, dans un seul historique." },
            { name: "Inventaire en temps réel", detail: "Se met à jour tout seul quand les animaux changent de place, vêlent ou sont réformés." },
            { name: "Lecture des étiquettes RFID", detail: "Lecteurs à bâton Bluetooth et indicateurs de balance." },
            { name: "Reproduction et vêlage", detail: "Registres d’insémination, diagnostics de gestation et registre de vêlage." },
            { name: "Génétique et DEP", detail: "Différences escomptées chez la progéniture, rattachées à l’animal." },
            { name: "Cote d’état de chair", detail: "De 1 à 10, prise à la contention pendant la lecture de l’étiquette." },
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
      headLine1: "Essayez Agrivanna à la contention.",
      headLine2: "Au dernier veau, vous serez fixé.",
      body:
        "Écrivez-nous et nous configurerons votre ranch nous-mêmes — pâturages cartographiés, troupeaux importés, lecteur jumelé. Ensuite, apportez votre téléphone à la contention et voyez si Agrivanna suit le rythme.",
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
      "Agrivanna est une petite équipe qui a bâti ce que presque toute l’industrie jugeait impossible : un système d’aide à la gestion du pâturage qui fonctionne hors ligne, dans de vrais ranchs. Voici qui est derrière.",
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
    photoAlt: "Un téléphone affichant l’écran de pesée d’Agrivanna, tenu à côté d’un indicateur de balance",
    latestEyebrow: "Récent",
    latestHeading: "Dans les médias.",
    storyCount: "{count} articles",
    readMore: "Lire la suite",
    watchEyebrow: "Regarder",
    watchHeading: "Agrivanna en vidéo.",
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
      arena: {
        title: "Agrivanna remporte la 1re place au concours The Arena",
        source: "Arthur L. Irving Entrepreneurship Centre",
        date: "Mars 2026",
        summary:
          "Agrivanna a terminé première au concours de présentation The Arena — reconnue parmi les meilleures jeunes pousses universitaires du Canada, avec une visibilité nationale pour son outil d’aide au pâturage.",
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
      arena: { date: "Mars 2026", title: "The Arena · 1re place", body: "Meilleure jeune pousse universitaire canadienne au concours The Arena." },
      pilots: { date: "Été 2026", title: "Premiers projets pilotes en ranch", body: "Premiers déploiements réels dans des ranchs partenaires en Alberta." },
      refinement: { date: "Fin 2026", title: "Peaufinage du produit", body: "Amélioration du matériel et du logiciel grâce aux données des projets pilotes." },
      "western-canada": { date: "2027", title: "Ouest canadien", body: "Expansion des projets pilotes et des déploiements commerciaux dans les Prairies." },
    },
  },

  softwareLeads: {
    metaTitle: "Commencer — Agrivanna",
    metaDescription:
      "Parlez-nous de votre exploitation et commencez à utiliser le logiciel d’aide à la gestion du pâturage d’Agrivanna.",
    eyebrow: "Commencer",
    headLine1: "Mettez Agrivanna",
    headLine2: "sur votre ranch.",
    intro:
      "Parlez-nous de votre exploitation et nous configurerons votre compte. Ça prend quelques minutes — les questions ci-dessous sont celles que nous posons lors d’un premier appel.",
    asks: [
      "Où vous élevez votre bétail",
      "Type d’exploitation et taille du troupeau",
      "Limites des pâturages, si vous les avez",
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
      login: "Se connecter",
      rnd: "R-D",
      items: {
        voice: { label: "Registres vocaux", desc: "Dites-le à la chute. C’est noté." },
        offline: { label: "Fonctionne hors ligne", desc: "Pas de réseau, rien de perdu." },
        pasture: { label: "Gestion des pâturages", desc: "Herbe cartographiée, rotations planifiées." },
        web: { label: "Registres sur le Web", desc: "Les mêmes registres, sur grand écran." },
        fencing: { label: "Clôture virtuelle", desc: "Des clôtures sans fil. En recherche et développement." },
        features: { label: "Toutes les fonctions", desc: "Toute la plateforme, comprise." },
        news: { label: "Nouvelles", desc: "Presse, prix et accélérateurs." },
        faq: { label: "Aide et FAQ", desc: "Des réponses franches avant de commencer." },
        about: { label: "À propos", desc: "Notre parcours et ceux qui nous appuient." },
        team: { label: "Équipe", desc: "Les gens qui bâtissent Agrivanna." },
        partners: { label: "Partenaires", desc: "Partenaires de recherche, de financement et d’équipement." },
        contact: { label: "Contact", desc: "Réservez un appel ou commencez un essai gratuit." },
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
        { step: "02", head: "Vérifiez-le", body: "Chaque entrée revient en ligne simple. Un toucher la garde; rien n’est enregistré sans vous." },
        { step: "03", head: "Utilisez-le", body: "Troupeau, poids et pâturages sur le téléphone et l’ordinateur, prêts pour vos décisions." },
      ],
      pricingEyebrow: "Tarifs",
      pricingLine1: "Un prix adapté à votre ranch.",
      pricingLine2: "Premier mois gratuit.",
      pricingBody: "Le logiciel Agrivanna, toutes les fonctions, pour chaque ranch. Parlez-nous de votre exploitation et nous vous proposerons un prix qui lui convient.",
      showcasePause: "Mettre la visite en pause",
      showcasePlay: "Reprendre la visite",
      showcase: {
        voice: { head: "Dites-le à la chute.", body: "Racontez la journée comme vous le feriez à votre voisin. Agrivanna inscrit les étiquettes, les poids et les traitements au dossier du bon animal, et rien n’est enregistré avant votre confirmation." },
        pasture: { head: "Sachez quel pâturage est prêt.", body: "Cartographiez vos pâturages, voyez par imagerie satellite lesquels se sont assez reposés et faites passer vos troupeaux dans une rotation sans rien redessiner." },
        web: { head: "Les mêmes registres, sur grand écran.", body: "Tout ce qui est dit à la chute est sur l’ordinateur quand vous rentrez. Triez les troupeaux, vérifiez les poids et exportez pour le vétérinaire ou le comptable." },
        fencing: { head: "Des clôtures sans fil.", body: "Des limites virtuelles qui font rebrousser chemin au bétail, bâties sur les pâturages que vous cartographiez aujourd’hui. En recherche et développement, pas encore en vente." },
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
      fencing: {
        metaTitle: "Clôture virtuelle (en R-D) — Agrivanna",
        metaDescription: "Agrivanna bâtit la clôture virtuelle : des limites qui font rebrousser chemin au bétail sans poteaux ni fil, sur les pâturages que les éleveurs cartographient déjà. En recherche et développement, pas encore en vente.",
        eyebrow: "Matériel · Clôture virtuelle · En R-D",
        heroLine1: "Clôturez la terre.",
        heroLine2: "Sans",
        heroLine3: "fil.",
        heroBody: "Des limites virtuelles qui font rebrousser chemin au bétail, sans poteaux ni fil. Nous la bâtissons maintenant, sur les pâturages et les rotations que les éleveurs cartographient déjà dans Agrivanna.",
        pilots: "Parlons des projets pilotes",
        howLink: "Comment ça marche",
        ideaEyebrow: "L’idée",
        ideaLine1: "Tracez la ligne.",
        ideaLine2: "Le troupeau l’apprend.",
        ideaSteps: [
          { step: "01", head: "Tracez-la sur la carte", body: "Marquez la limite dans Agrivanna, comme vous cartographiez vos pâturages aujourd’hui." },
          { step: "02", head: "Un signal près de la ligne", body: "Le bétail qui s’approche de la limite reçoit un léger signal pour faire demi-tour." },
          { step: "03", head: "Déplacez-la à chaque rotation", body: "Passez la ligne au prochain enclos sans rien construire." },
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
        photoTeam: "Les fondateurs d’Agrivanna avec un premier prototype de collier",
        softwareEyebrow: "Commencez par le logiciel",
        softwareLine1: "Les pâturages que vous cartographiez",
        softwareLine2: "sont ceux sur lesquels elle fonctionnera.",
        softwareBody: "Cartographiez vos pâturages et planifiez vos rotations dans Agrivanna dès aujourd’hui. Quand la clôture virtuelle sera prête, elle s’appuiera sur ce que vous avez déjà tracé.",
        softwareLink: "Gestion des pâturages",
      },
      voice: {
        metaTitle: "Registres vocaux — Agrivanna",
        metaDescription: "Dictez vos registres de troupeau, gants aux mains. Agrivanna les inscrit au bon animal, et rien n’est enregistré avant votre confirmation.",
        eyebrow: "Produit · Registres vocaux",
        headLine1: "Parlez-lui.",
        headLine2: "Ne tapez plus.",
        intro: "Racontez ce qui s’est passé comme vous le feriez à votre voisin par-dessus la clôture. Agrivanna en tire les étiquettes, les poids et les traitements, et n’enregistre rien avant votre accord.",
      },
      offline: {
        metaTitle: "Fonctionne hors ligne — Agrivanna",
        metaDescription: "Agrivanna enregistre chaque entrée sur le téléphone d’abord et la téléverse d’elle-même dès que le signal revient.",
        eyebrow: "Produit · Fonctionne hors ligne",
        headLine1: "Conçu pour les coins",
        headLine2: "sans réseau.",
        intro: "Tout est enregistré sur le téléphone dès que vous arrêtez de parler. Le téléversement se fait tout seul au prochain signal ou sur le Wi-Fi de la cour : une zone morte ne vous coûte jamais une journée de travail.",
      },
      pasture: {
        metaTitle: "Gestion des pâturages — Agrivanna",
        metaDescription: "Cartographiez vos pâturages, voyez par imagerie satellite lesquels se sont assez reposés et faites passer vos troupeaux dans un plan de rotation.",
        eyebrow: "Produit · Gestion des pâturages",
        headLine1: "Sachez quel pâturage",
        headLine2: "est prêt.",
        intro: "Cartographiez vos pâturages, voyez par imagerie satellite lesquels ont eu assez de repos et faites passer vos troupeaux dans une rotation sans rien redessiner.",
      },
      web: {
        metaTitle: "Registres sur le Web — Agrivanna",
        metaDescription: "Tout ce qui est noté à la chute est sur l’ordinateur quand vous rentrez. Triez les troupeaux, vérifiez les poids et exportez vos données.",
        eyebrow: "Produit · Registres sur le Web",
        headLine1: "De la chute",
        headLine2: "à la table de cuisine.",
        intro: "Tout ce qui est noté au champ s’affiche sur l’ordinateur. Triez les troupeaux, vérifiez les poids et sortez un export quand le vétérinaire ou le comptable le demande.",
      },
      features: {
        metaTitle: "Toutes les fonctions — Agrivanna",
        metaDescription: "Toutes les fonctions d’Agrivanna pour le troupeau, les pâturages et les données, comprises pour chaque ranch.",
        eyebrow: "Produit · Toutes les fonctions",
        headLine1: "Une plateforme.",
        headLine2: "Tout compris.",
        intro: "Registres de troupeau, planification des pâturages et vos données, tout compris. Aucun module à acheter plus tard.",
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
        headLine1: "Conçu à Calgary.",
        headLine2: "Éprouvé sur des ranchs albertains.",
        intro: "Agrivanna a été fondée en octobre 2024 pour créer des registres de ranch que les gens tiennent vraiment : dictés à la chute, enregistrés sans réseau et utiles à la maison.",
        photoAlt: "Les fondateurs d’Agrivanna avec un premier prototype de collier",
        teamLink: "Rencontrer l’équipe",
      },
      contact: {
        metaTitle: "Contact — Agrivanna",
        metaDescription: "Commencez un essai gratuit, réservez un appel ou écrivez à l’équipe d’Agrivanna.",
        callTitle: "Vous préférez en parler?",
        callBody: "Choisissez le moment qui vous convient et parlez à l’équipe.",
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
        stillBody: "Écrivez à {email} ou réservez un appel.",
      },
    },

    faq: [
      { pricing: true, q: "Combien ça coûte?", a: "Chaque ranch a son propre prix, selon l’exploitation et vos besoins. Remplissez le formulaire d’essai ou réservez un appel et nous vous le proposerons. Le premier mois est gratuit." },
      { pricing: true, q: "Y a-t-il un contrat?", a: "Les conditions sont convenues avec vous lors d’un appel, avant tout paiement." },
      { pricing: true, q: "Y a-t-il des frais en plus?", a: "Aucun module à ajouter. Chaque ranch a toute la plateforme." },
      { pricing: true, q: "Comment commencer?", a: "Remplissez le formulaire d’essai gratuit. Nous configurons le ranch nous-mêmes, pâturages cartographiés, troupeaux importés et lecteur jumelé, et nous vous contactons d’ici un jour." },
      { pricing: false, q: "Ai-je besoin d’un signal cellulaire?", a: "Non. Tout est enregistré sur le téléphone d’abord et se téléverse tout seul au prochain signal ou sur le Wi-Fi de la cour." },
      { pricing: false, q: "Avec quel équipement fonctionne-t-il?", a: "Les lecteurs à bâton Bluetooth et les indicateurs de balance. Ils transmettent étiquettes et poids sans que vous ayez à taper un chiffre." },
      { pricing: false, q: "Je tiens déjà des registres ailleurs. Dois-je tout recommencer?", a: "Non. Envoyez-nous ce que vous avez, calepin, feuilles de calcul ou autre logiciel, et nous chargerons le ranch pour vous." },
      { pricing: false, q: "Puis-je récupérer mes données?", a: "Oui, quand vous voulez, dans un format que d’autres logiciels peuvent lire." },
      { pricing: false, q: "Ma famille, mes employés ou mon vétérinaire peuvent-ils l’utiliser?", a: "Oui. Chaque personne a son propre accès, avec les permissions que vous choisissez." },
      { pricing: true, q: "Puis-je acheter le matériel de clôture virtuelle?", a: "Pas encore. Aujourd’hui, nous vendons seulement le logiciel Agrivanna. La clôture virtuelle est en recherche et développement, et les pâturages que vous cartographiez et les rotations que vous bâtissez aujourd’hui sont ceux sur lesquels elle fonctionnera." },
      { pricing: false, q: "L’application comprend-elle le français?", a: "Pas encore. Pour l’instant, l’application et sa reconnaissance vocale fonctionnent en anglais seulement." },
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
