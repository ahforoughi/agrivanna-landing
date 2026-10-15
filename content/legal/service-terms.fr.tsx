import Link from "next/link";
import type { LegalPage } from "@/components/LegalPage";

const page: LegalPage = {
  title: "Conditions d’utilisation",
  description: "Les conditions d’utilisation de l’application et du site Web d’Agrivanna.",
  intro: "Les conditions d’utilisation de l’application et du site Web d’Agrivanna.",
  body: (
    <>
      <h2>Conditions d’utilisation</h2>
      <ul>
        <li>
          Agrivanna fournit un service logiciel de gestion de ranch et de soutien à la santé
          animale et à la conformité. Il peut comprendre des analyses générées par l’IA.
        </li>
        <li>
          Le service est fourni « tel quel ». Les résultats peuvent être incomplets ou inexacts,
          et vous demeurez responsable de toutes les décisions relatives au ranch, aux soins
          vétérinaires et à la conformité.
        </li>
        <li>
          Agrivanna ne remplace pas un vétérinaire autorisé ni un avis professionnel.
        </li>
        <li>
          Vous vous engagez à utiliser l’application conformément à la loi et à ne pas en faire un usage abusif —
          aucun piratage, moissonnage de données, rétro-ingénierie ni partage de compte — et à fournir des renseignements exacts.
        </li>
        <li>
          Votre compte et votre contenu vous appartiennent. Vous autorisez Agrivanna à les
          héberger et à les traiter pour exploiter le service.
        </li>
        <li>
          Agrivanna peut suspendre ou résilier l’accès en cas de violation des politiques, de
          fraude ou de risque pour la sécurité.
        </li>
        <li>
          La responsabilité d’Agrivanna est limitée dans la mesure permise par la loi et exclut tout dommage indirect ou consécutif.
        </li>
        <li>
          Les conditions peuvent être mises à jour. Continuer d’utiliser le service après une mise
          à jour signifie que vous les acceptez.
        </li>
      </ul>

      <h2>Confidentialité</h2>
      <p>
        Ce que nous recueillons, comment nous l’utilisons et le communiquons, combien de temps
        nous le conservons et vos choix sont expliqués séparément dans la{" "}
        <Link href="/fr/privacy">politique de confidentialité</Link>.
      </p>

      <h2>Aide à la décision et avertissement vétérinaire</h2>
      <p>
        Les résultats sont fournis à titre informatif et ne remplacent pas un vétérinaire
        autorisé.
      </p>

      <h2>Responsabilité de l’utilisateur</h2>
      <p>
        Vous êtes responsable des mesures que vous prenez en vous fondant sur l’application et du
        respect de la réglementation locale.
      </p>

      <h2>Communications liées au service</h2>
      <p>
        Agrivanna peut communiquer avec vous pour la mise en route, le soutien et les avis
        importants concernant le service.
      </p>

      <h2>Témoins</h2>
      <p>
        L’utilisation des témoins est expliquée séparément dans la{" "}
        <Link href="/fr/cookie-policy">politique relative aux témoins</Link>.
      </p>

      <h2>Nous joindre</h2>
      <p>
        Pour toute question sur ces conditions, écrivez à{" "}
        <a href="mailto:info@agrivanna.com">info@agrivanna.com</a>.
      </p>
    </>
  ),
};

export default page;
