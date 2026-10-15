import type { LegalPage } from "@/components/LegalPage";

const page: LegalPage = {
  title: "Politique relative aux témoins",
  description:
    "Comment Agrivanna utilise les témoins (cookies) et les technologies semblables, et comment modifier vos choix.",
  intro:
    "Comment Agrivanna utilise les témoins (cookies) et les technologies semblables, et comment changer d’avis.",
  body: (
    <>
      <h2>Ce que sont les témoins</h2>
      <p>
        Les témoins (cookies) sont de petits fichiers texte enregistrés sur votre appareil quand
        vous visitez un site Web ou utilisez une application. Ils aident le site à se souvenir de
        vos préférences, à garder votre session ouverte et à comprendre comment le service est
        utilisé afin de l’améliorer.
      </p>

      <h2>Vos choix sur ce site</h2>
      <p>
        À votre première visite sur agrivanna.com, nous vous demandons si vous acceptez les
        témoins non essentiels. Si vous les refusez, nous ne chargeons aucun outil d’analyse. Si
        vous les acceptez, nous chargeons Vercel Analytics pour voir quelles pages sont lues.
      </p>
      <p>
        Votre réponse est enregistrée localement, dans votre propre navigateur. Pour la modifier,
        effacez les données de ce site dans les paramètres de votre navigateur : le choix vous
        sera proposé de nouveau à votre prochaine visite.
      </p>
      <p>
        Si vous choisissez l’anglais ou le français avec le sélecteur EN | FR, ce choix est
        enregistré pendant un an dans un témoin nommé NEXT_LOCALE, pour que le site s’ouvre dans
        votre langue la prochaine fois. Il ne sert qu’à cela.
      </p>

      <h2>Comment nous utilisons les témoins</h2>
      <p>
        Agrivanna utilise des témoins et des technologies semblables, comme le stockage local,
        pour :
      </p>
      <ul>
        <li>Garder votre session ouverte et la sécuriser</li>
        <li>Retenir vos paramètres et préférences, y compris votre choix de témoins et de langue</li>
        <li>Comprendre comment notre site Web et notre application sont utilisés</li>
        <li>Améliorer la performance, la sécurité et la fiabilité</li>
        <li>Permettre certaines fonctions, comme les formulaires et les outils d’assistance</li>
      </ul>

      <h2>Types de témoins utilisés</h2>
      <ul>
        <li>
          <strong>Strictement nécessaires.</strong> Indispensables au fonctionnement du service,
          par exemple pour l’authentification et la sécurité. Ils ne peuvent généralement pas
          être désactivés.
        </li>
        <li>
          <strong>Fonctionnels.</strong> Retiennent vos choix pour que le site se comporte comme
          vous l’avez laissé.
        </li>
        <li>
          <strong>D’analyse.</strong> Nous aident à voir comment les visiteurs utilisent le
          site pour l’améliorer. Les données sont agrégées et ne vous identifient pas
          personnellement. Ils ne sont chargés que si vous les acceptez.
        </li>
      </ul>
      <p>
        Nous n’utilisons pas de témoins pour vendre vos données ni pour vous suivre sur d’autres
        sites Web.
      </p>

      <h2>Gérer les témoins dans votre navigateur</h2>
      <p>
        Vous pouvez gérer les témoins dans les paramètres de votre navigateur ou de votre
        appareil, notamment en les bloquant ou en les supprimant. Certaines fonctions peuvent ne
        pas fonctionner correctement si vous bloquez les témoins strictement nécessaires. Pour
        les réglages propres à l’application, consultez les paramètres de votre appareil ou les
        options offertes dans l’application.
      </p>

      <h2>Mises à jour</h2>
      <p>
        Nous pouvons mettre à jour cette politique pour tenir compte de changements dans nos
        pratiques ou dans la législation. La version à jour est publiée sur cette page. Continuer
        d’utiliser nos services après une mise à jour signifie que vous acceptez la politique
        révisée.
      </p>

      <h2>Nous joindre</h2>
      <p>
        Pour toute question sur les témoins ou sur cette politique, écrivez à{" "}
        <a href="mailto:info@agrivanna.com">info@agrivanna.com</a>.
      </p>
    </>
  ),
};

export default page;
