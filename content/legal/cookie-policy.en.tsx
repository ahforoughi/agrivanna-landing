import type { LegalPage } from "@/components/LegalPage";

const page: LegalPage = {
  title: "Cookie policy",
  description: "How Agrivanna uses cookies and similar technologies, and how to change your choices.",
  intro: "How Agrivanna uses cookies and similar technologies, and how to change your mind.",
  body: (
    <>
      <h2>What cookies are</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website or use an
        app. They help the site remember your preferences, keep you signed in, and understand
        how the service is used so it can be improved.
      </p>

      <h2>Your choices on this site</h2>
      <p>
        The first time you visit agrivanna.com we ask whether you accept non-essential
        cookies. If you reject them, we don&apos;t load analytics at all. If you accept, we
        load Vercel Analytics to see which pages get read.
      </p>
      <p>
        Your answer is stored locally in your own browser. To change it, clear this site&apos;s
        site data in your browser settings and the choice will be offered again on your next
        visit.
      </p>
      <p>
        If you pick English or French with the EN | FR switch, that choice is saved in a cookie
        named NEXT_LOCALE for one year, so the site opens in your language next time. It is
        only used for that.
      </p>

      <h2>How we use cookies</h2>
      <p>
        Agrivanna uses cookies and similar technologies, such as local storage, to:
      </p>
      <ul>
        <li>Keep you logged in and secure your session</li>
        <li>Remember your settings and preferences, including your cookie choice and language</li>
        <li>Understand how our website and app are used</li>
        <li>Improve performance, security, and reliability</li>
        <li>Support features such as forms and support tools</li>
      </ul>

      <h2>Types of cookies we use</h2>
      <ul>
        <li>
          <strong>Strictly necessary.</strong> Required for the service to work, such as
          authentication and security. These generally cannot be turned off.
        </li>
        <li>
          <strong>Functional.</strong> Remember choices you make so the site behaves the way
          you left it.
        </li>
        <li>
          <strong>Analytics.</strong> Help us see how visitors use the site so we can improve
          it. Data is aggregated and does not identify you personally. These only load if you
          accept.
        </li>
      </ul>
      <p>
        We do not use cookies to sell your data or to track you across other websites.
      </p>

      <h2>Managing cookies in your browser</h2>
      <p>
        You can control cookies through your browser or device settings, including blocking or
        deleting them. Some features may not work correctly if you block strictly necessary
        cookies. For app-specific controls, check your device settings or the options provided
        in the app.
      </p>

      <h2>Updates</h2>
      <p>
        We may update this policy to reflect changes in our practices or the law. The updated
        version is posted on this page. Continued use of our services after an update means
        you accept the revised policy.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about cookies or this policy go to{" "}
        <a href="mailto:info@agrivanna.com">info@agrivanna.com</a>.
      </p>
    </>
  ),
};

export default page;
