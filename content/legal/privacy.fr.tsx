import Link from "next/link";
import type { LegalPage } from "@/components/LegalPage";

const page: LegalPage = {
  title: "Politique de confidentialité",
  description:
    "Ce que l’application et le site Web d’Agrivanna recueillent, pourquoi, à qui ces renseignements sont communiqués et ce que vous pouvez y faire.",
  intro:
    "Ce que nous recueillons dans l’application Agrivanna et sur ce site Web, pourquoi, à qui ces renseignements sont communiqués et ce que vous pouvez y faire.",
  updated: "Agrivanna Inc. · En vigueur le 1er octobre 2026",
  body: (
    <>
      <p>
        Agrivanna aide les éleveurs à gérer leur exploitation : troupeaux et animaux, enclos et
        pâturage, traitements et délais d’attente, sur le Web et sur un téléphone au champ. Cette
        politique explique quels renseignements nous recueillons, pourquoi, à qui ils sont
        communiqués et ce que vous pouvez y faire. Elle s’applique à l’application Agrivanna et à
        ce site Web.
      </p>

      <h2 id="short-version">1. En bref</h2>
      <ul>
        <li>
          Nous recueillons ce qu’il faut pour tenir les registres de votre ranch : votre compte,
          les registres que vous tenez et — quand vous utilisez ces fonctions — votre position,
          vos photos et vos notes vocales.
        </li>
        <li>
          Nous n’affichons pas de publicité, nous ne vous suivons pas dans d’autres applications
          ou sites Web et nous ne vendons pas vos renseignements.
        </li>
        <li>
          Les commandes vocales sont interprétées sur votre téléphone. L’enregistrement ne nous est
          pas envoyé, sauf pour une note vocale, qui est conservée avec son enregistrement.
        </li>
        <li>
          Le <strong>mode en ligne</strong> envoie votre question, et les registres du ranch
          nécessaires pour y répondre, à l’IA de Google. L’application vous demande votre accord
          avant que vous l’activiez la première fois. En mode hors ligne, rien n’est envoyé à
          l’IA de Google.
        </li>
        <li>
          Vous pouvez supprimer votre compte. Vos renseignements personnels sont supprimés; les
          registres du ranch sont conservés, parce qu’ils en constituent le registre officiel.
        </li>
      </ul>

      <h2 id="what-we-collect">2. Ce que nous recueillons</h2>
      <p>
        <strong>Votre compte.</strong> Votre adresse courriel et votre nom. Les comptes sont créés
        sur <a href="https://app.agrivanna.com">app.agrivanna.com</a>; l’application permet
        seulement de se connecter. Nous ne voyons jamais votre mot de passe — il est géré par
        notre fournisseur d’authentification.
      </p>
      <p>
        <strong>Les registres de votre ranch.</strong> Ce que vous et les gens de votre ranch
        saisissez : troupeaux, animaux et leurs étiquettes, poids, vêlages, sevrages, traitements
        et dates de fin des délais d’attente, enclos et pâturage, alimentation, infrastructures,
        échantillons de coupe et notes.
      </p>
      <p>
        <strong>Votre position</strong> — seulement pendant que vous utilisez l’application, et
        seulement pour les fonctions qui en ont besoin :
      </p>
      <ul>
        <li>placer une infrastructure, comme une barrière ou un point d’eau, sur la carte du ranch;</li>
        <li>montrer où vous êtes sur la carte;</li>
        <li>noter l’endroit où un échantillon de coupe a été prélevé;</li>
        <li>longer à pied la limite d’un enclos pour la tracer.</li>
      </ul>
      <p>L’application ne recueille jamais votre position en arrière-plan.</p>
      <p>
        <strong>Photos.</strong> Une photo du cadre d’un échantillon de coupe, prise avec
        l’appareil photo ou choisie dans votre photothèque. L’application ne reçoit que la photo
        que vous choisissez.
      </p>
      <p>
        <strong>Notes vocales.</strong> Quand vous enregistrez une note vocale, l’enregistrement
        est téléversé dans les registres de votre ranch. Sa transcription est faite sur votre
        téléphone et y reste — seul l’enregistrement nous est envoyé.
      </p>
      <p>
        <strong>Commandes vocales.</strong> Quand vous dictez un déplacement, un traitement ou une
        note, votre téléphone convertit lui-même la parole en texte. Pour un déplacement ou un
        traitement, l’enregistrement ne nous est pas envoyé — seulement l’entrée que la commande
        crée. Une note est sauvegardée comme note vocale : son enregistrement est téléversé, et
        son texte reste sur votre téléphone.
      </p>
      <p>
        <strong>Questions en mode en ligne.</strong> Le texte de vos questions et des réponses est
        conservé avec votre compte, pour qu’une question de suivi garde son contexte. Voir la{" "}
        <a href="#online-mode">section 4</a>.
      </p>
      <p>
        <strong>Ce qu’Agrivanna a entendu.</strong> Votre téléphone tient un journal des commandes
        vocales — les mots que chaque outil de reconnaissance a entendus et la façon dont la
        commande s’est terminée — pour nous aider à améliorer la reconnaissance. Il ne contient
        que du texte et des chiffres, sans aucun enregistrement audio, et il reste sur votre téléphone. Il ne nous
        parvient que si vous choisissez de le partager à partir de l’écran Account (Compte).
      </p>
      <p>
        <strong>Journaux des serveurs.</strong> Comme la plupart des services en ligne, nos
        serveurs enregistrent des renseignements de base sur chaque requête, comme l’heure et
        l’adresse réseau d’où elle provient, pour assurer le fonctionnement et la sécurité du
        service.
      </p>
      <p>
        <strong>Ce que nous ne recueillons pas.</strong> Identifiants publicitaires, historique de
        navigation, contacts, données de santé ou renseignements de paiement. L’application n’a
        ni publicité, ni outil d’analyse ou de suivi, ni rien à acheter.
      </p>

      <h2 id="how-we-use-it">3. Comment nous les utilisons</h2>
      <ul>
        <li>
          Pour tenir les registres de votre ranch et les garder synchronisés entre le Web et votre
          téléphone, y compris le travail sauvegardé sur le téléphone sans signal et téléversé
          plus tard.
        </li>
        <li>Pour répondre aux questions en mode en ligne.</li>
        <li>Pour assurer la sécurité et le bon fonctionnement du service, et corriger les problèmes.</li>
        <li>Pour vous aider quand vous communiquez avec nous.</li>
        <li>
          Pour améliorer la reconnaissance vocale — seulement à partir des journaux que vous
          choisissez de partager.
        </li>
      </ul>
      <p>
        Nous n’utilisons pas vos renseignements à des fins publicitaires, et nous ne les vendons
        pas.
      </p>

      <h2 id="online-mode">4. Le mode en ligne et Google</h2>
      <p>
        Le mode en ligne vous permet de poser des questions sur votre ranch et d’entendre la
        réponse. Pour répondre, il utilise deux services de Google :
      </p>
      <ul>
        <li>
          <strong>Google Gemini</strong> rédige la réponse. Il reçoit votre question, la
          conversation jusque-là et les registres du ranch dont la question a besoin — par
          exemple les troupeaux, étiquettes, poids, traitements ou enclos qu’elle concerne.
        </li>
        <li>
          <strong>Google Cloud Text-to-Speech</strong> lit la réponse à voix haute. Il reçoit le
          texte de la réponse.
        </li>
      </ul>
      <p>
        Aucun enregistrement de votre voix n’est envoyé; votre téléphone convertit d’abord votre
        parole en texte. La première fois que vous activez le mode en ligne, l’application vous
        l’explique et vous demande votre accord. Vous pouvez revenir au mode hors ligne en tout
        temps; rien n’est alors envoyé à l’IA de Google.
      </p>

      <h2 id="sharing">5. À qui nous les communiquons</h2>
      <p>
        <strong>Les gens de votre ranch.</strong> Les membres d’un ranch peuvent voir les
        registres de ce ranch. Les entrées que vous saisissez leur sont communiquées.
      </p>
      <p>
        <strong>Les fournisseurs de services qui exploitent certaines composantes d’Agrivanna pour notre compte :</strong>
      </p>
      <ul>
        <li>
          <strong>Google Cloud</strong> héberge nos serveurs.
        </li>
        <li>
          <strong>Supabase</strong> gère l’authentification.
        </li>
        <li>
          <strong>Google Gemini</strong> et <strong>Google Cloud Text-to-Speech</strong> font
          fonctionner le mode en ligne (<a href="#online-mode">section 4</a>).
        </li>
        <li>
          <strong>Vercel</strong> et <strong>Resend</strong> font fonctionner ce site Web et
          envoient ses courriels (<a href="#website">section 11</a>).
        </li>
      </ul>
      <p>Ils traitent les renseignements uniquement pour nous fournir leurs services.</p>
      <p>
        <strong>Quand la loi l’exige.</strong> Nous pouvons communiquer des renseignements si la
        loi nous y oblige, ou pour protéger la sécurité des personnes ou du service.
      </p>
      <p>
        Nous ne vendons pas vos renseignements et nous ne les communiquons pas à des fins
        publicitaires.
      </p>

      <h2 id="storage">6. Où ils sont conservés</h2>
      <ul>
        <li>
          <strong>Sur votre téléphone.</strong> Une copie des registres de votre ranch est
          conservée sur le téléphone pour que l’application fonctionne sans signal. Vos identifiants de connexion sont conservés dans le trousseau de l’iPhone.
        </li>
        <li>
          <strong>Nos serveurs</strong> fonctionnent sur Google Cloud, à Montréal, au Canada.
        </li>
        <li>
          <strong>Les données de connexion</strong> sont conservées par Supabase dans sa région
          Canada (Centre).
        </li>
        <li>
          <strong>Le mode en ligne</strong> utilise des services de Google qui peuvent traiter des
          données à l’extérieur du Canada.
        </li>
        <li>
          <strong>Ce site Web</strong> est hébergé par Vercel et envoie ses courriels par l’intermédiaire de Resend,
          aux États-Unis.
        </li>
      </ul>

      <h2 id="retention">7. Combien de temps nous les conservons</h2>
      <ul>
        <li>
          <strong>Les renseignements de votre compte</strong> sont conservés jusqu’à ce que vous
          supprimiez votre compte.
        </li>
        <li>
          <strong>Les registres du ranch</strong> sont conservés comme registre officiel du ranch,
          y compris après la suppression d’un compte.
        </li>
        <li>
          <strong>Les conversations en mode en ligne</strong> sont supprimées quand vous supprimez
          votre compte.
        </li>
        <li>
          <strong>Les demandes d’essai</strong> faites sur ce site Web sont conservées tant que
          nous sommes en contact avec vous au sujet d’Agrivanna. Demandez-le-nous et nous
          supprimerons la vôtre.
        </li>
        <li>
          <strong>Les journaux des serveurs</strong> sont conservés pendant un mois.
        </li>
        <li>
          <strong>Les sauvegardes</strong> peuvent contenir des renseignements supprimés pendant trois mois, jusqu’à ce que ces
          derniers soient écrasés.
        </li>
      </ul>

      <h2 id="delete-account">8. Supprimer votre compte</h2>
      <p>
        Vous pouvez supprimer votre compte dans l’application —{" "}
        <strong>Account → Delete account</strong> (Compte → Supprimer le compte). Vous pouvez
        aussi nous demander de le faire; voir la <a href="#contact">section 14</a>.
      </p>
      <p>La suppression est immédiate et irréversible.</p>
      <p>
        <strong>Ce qui est supprimé :</strong> votre identifiant de connexion, votre adresse
        courriel, votre nom et votre profil, votre appartenance au ranch et vos conversations
        avec l’assistant.
      </p>
      <p>
        <strong>Ce qui est conservé :</strong> les registres du ranch — troupeaux, animaux,
        étiquettes, événements, poids, traitements, délais d’attente, pâturage et alimentation —
        parce qu’ils constituent le registre officiel du ranch. Les entrées que vous avez saisies
        restent, mais elles ne sont plus liées à votre nom.
      </p>
      <p>
        <strong>Si vous êtes la seule personne du ranch,</strong> le ranch et ses registres sont
        conservés sans aucun membre, et les invitations que vous aviez envoyées sont annulées.
      </p>
      <p>
        <strong>S’il reste d’autres personnes dans le ranch et que vous en êtes le seul propriétaire,</strong> nommez d’abord quelqu’un d’autre comme propriétaire.
        L’application vous l’indiquera.
      </p>
      <p>
        <strong>Les notes vocales</strong> que vous avez enregistrées sont supprimées avec votre
        compte, enregistrements compris. Les notes vocales enregistrées avant le 1er octobre 2026
        ne peuvent pas être associées à la personne qui les a faites; elles restent donc avec les
        registres du ranch. Pour en faire retirer une, communiquez avec nous.
      </p>

      <h2 id="your-rights">9. Vos choix et vos droits</h2>
      <ul>
        <li>
          <strong>Autorisations.</strong> La localisation, l’appareil photo, les photos, le
          microphone et la reconnaissance vocale peuvent chacun être désactivés dans les
          Réglages de l’iPhone. Les fonctions qui en ont besoin cessent de fonctionner; tout le
          reste continue de fonctionner.
        </li>
        <li>
          <strong>Mode en ligne.</strong> Revenez au mode hors ligne en tout temps.
        </li>
        <li>
          <strong>Accès et correction.</strong> Vous pouvez consulter et corriger les registres de
          votre ranch dans l’application et sur le site Web. Pour obtenir une copie de vos
          renseignements personnels, ou pour les faire corriger, communiquez avec nous.
        </li>
        <li>
          <strong>Retrait du consentement.</strong> Vous pouvez retirer votre consentement en tout
          temps, sous réserve des registres que nous devons conserver (
          <a href="#retention">section 7</a>).
        </li>
        <li>
          <strong>Plaintes.</strong> Si la façon dont nous traitons vos renseignements ne vous
          satisfait pas, vous pouvez communiquer avec le Commissariat à la protection de la vie
          privée du Canada ou avec le Commissaire à l’information et à la protection de la vie
          privée de l’Alberta.
        </li>
      </ul>

      <h2 id="security">10. Sécurité</h2>
      <p>
        Les renseignements circulent entre l’application et nos serveurs par des connexions
        chiffrées. Vos identifiants de connexion sont conservés dans le trousseau de l’iPhone. Le service ne
        montre les registres d’un ranch qu’aux membres de ce ranch. Aucun système n’est
        parfaitement sûr, mais nous travaillons à protéger vos renseignements et à corriger
        rapidement les problèmes.
      </p>

      <h2 id="website">11. Ce site Web</h2>
      <p>agrivanna.com ne comporte aucune ouverture de session. Voici ce qu’il recueille :</p>
      <p>
        <strong>Demandes d’essai.</strong> Quand vous demandez un essai gratuit, le formulaire
        envoie par courriel à notre équipe votre nom et votre adresse courriel, ainsi que tout ce
        que vous choisissez d’ajouter — téléphone, nom du ranch, emplacement du ranch, taille du troupeau, type
        d’exploitation, façon dont vous tenez vos registres et notes —, avec une copie pour vous.
        Nous nous en servons pour vous répondre et mettre en place votre essai. Si notre service de
        courriel n’est pas disponible, le formulaire ouvre plutôt un courriel prérempli dans
        votre propre application de courriel.
      </p>
      <p>
        <strong>Analyse d’audience, seulement si vous l’acceptez.</strong> Si vous acceptez les témoins dans
        le bandeau, Vercel Analytics compte les pages visitées. Si vous les refusez, l’outil
        n’est pas chargé. Votre choix est conservé dans votre navigateur. Voir la{" "}
        <Link href="/fr/cookie-policy">politique relative aux témoins</Link>.
      </p>
      <p>
        <strong>Journaux des serveurs.</strong> L’hébergeur du site enregistre des renseignements
        de base sur chaque requête, comme l’heure et l’adresse réseau.
      </p>
      <p>
        <strong>Autres sites.</strong> La réservation d’un appel se fait sur Calendly, et la vidéo
        de notre page Nouvelles est lue par YouTube. Ces services ont leurs propres politiques de
        confidentialité.
      </p>

      <h2 id="children">12. Enfants</h2>
      <p>
        Agrivanna est un outil de gestion d’entreprise d’élevage. Il ne s’adresse pas aux enfants,
        et nous ne recueillons pas sciemment de renseignements auprès d’eux.
      </p>

      <h2 id="changes">13. Modifications de cette politique</h2>
      <p>
        Quand nous modifions cette politique, nous mettons à jour la date en haut de la page. Si
        une modification a une incidence importante sur la façon dont nous utilisons vos
        renseignements,
        nous vous en informerons dans l’application ou par courriel avant son entrée en vigueur.
      </p>

      <h2 id="contact">14. Nous joindre</h2>
      <p>
        Agrivanna Inc.
        <br />
        1315 Northmount Dr NW, Calgary (Alb.)
        <br />
        <a href="mailto:info@agrivanna.com">info@agrivanna.com</a>
      </p>
    </>
  ),
};

export default page;
