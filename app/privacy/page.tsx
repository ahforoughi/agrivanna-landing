import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy policy — Agrivanna",
  description:
    "What the Agrivanna app and website collect, why, who it goes to, and what you can do about it.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-20">
        <div className="absolute inset-0 grid-backdrop" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4">
          <Reveal>
            <p className="eyebrow">Legal</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-3xl text-5xl font-medium tracking-tightest sm:text-6xl">
              Privacy policy
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-bone-300">
              What we collect in the Agrivanna app and on this website, why, who it goes to, and
              what you can do about it.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-bone-300">
              Agrivanna Inc. · Effective October 1, 2026
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-light border-t border-ink-950/10 py-20 sm:py-24">
        <div className="legal-prose mx-auto max-w-3xl px-4">
          <p>
            Agrivanna helps ranchers run their operation: herds and animals, paddocks and grazing,
            treatments and withdrawals, from the web and from a phone in the field. This policy
            explains what information we collect, why, who it goes to, and what you can do about
            it. It covers the Agrivanna app and this website.
          </p>

          <h2 id="short-version">1. The short version</h2>
          <ul>
            <li>
              We collect what it takes to run your ranch record: your account, the records you
              keep, and — when you use those features — your location, photos and voice notes.
            </li>
            <li>
              We don&apos;t show ads, we don&apos;t track you across other apps or websites, and we
              don&apos;t sell your information.
            </li>
            <li>
              Voice commands are understood on your phone. The recording isn&apos;t sent to us,
              except for a voice note, which is kept with its recording.
            </li>
            <li>
              <strong>Online mode</strong> sends your question, and the ranch records needed to
              answer it, to Google&apos;s AI. The app asks before you turn it on the first time.
              In offline mode, nothing goes to Google&apos;s AI.
            </li>
            <li>
              You can delete your account. Your personal details go; your ranch&apos;s records
              stay, because they&apos;re its legal record.
            </li>
          </ul>

          <h2 id="what-we-collect">2. What we collect</h2>
          <p>
            <strong>Your account.</strong> Your email address and name. Accounts are created on
            the Agrivanna website; the app only signs in. We never see your password — it&apos;s
            handled by our sign-in provider.
          </p>
          <p>
            <strong>Your ranch records.</strong> What you and the people on your ranch enter:
            herds, animals and their tags, weights, calving, weaning, treatments and withdrawal
            dates, paddocks and grazing, feeding, infrastructure, clip samples and notes.
          </p>
          <p>
            <strong>Your location</strong> — only while you&apos;re using the app, and only for
            the features that need it:
          </p>
          <ul>
            <li>placing infrastructure, such as a gate or a water point, on the ranch map;</li>
            <li>showing where you are on the map;</li>
            <li>recording where a clip sample was taken;</li>
            <li>walking a paddock&apos;s boundary to draw it.</li>
          </ul>
          <p>The app never collects your location in the background.</p>
          <p>
            <strong>Photos.</strong> A photo of a clip-sample frame, taken with the camera or
            chosen from your photo library. The app only receives the photo you pick.
          </p>
          <p>
            <strong>Voice notes.</strong> When you record a voice note, the recording is uploaded
            to your ranch record. Its transcript is made on your phone and stays there — only the
            recording is sent to us.
          </p>
          <p>
            <strong>Voice commands.</strong> When you say a move, a treatment or a note, your
            phone turns the speech into text itself. For a move or a treatment, the recording
            isn&apos;t sent to us — only the record the command creates. A note is saved as a
            voice note: its recording is uploaded, and its text stays on your phone.
          </p>
          <p>
            <strong>Questions in online mode.</strong> The text of what you ask, and the answers,
            are stored with your account so a follow-up question keeps its context. See{" "}
            <a href="#online-mode">section 4</a>.
          </p>
          <p>
            <strong>What Agrivanna heard.</strong> Your phone keeps a log of voice commands — the
            words each recogniser heard and how the command ended — to help us improve
            recognition. It&apos;s text and numbers only, with no audio, and it stays on your
            phone. It only reaches us if you choose to share it from the Account screen.
          </p>
          <p>
            <strong>Server logs.</strong> Like most online services, our servers record basic
            information about each request, such as its time and the network address it came
            from, to keep the service running and secure.
          </p>
          <p>
            <strong>What we don&apos;t collect.</strong> Advertising identifiers, browsing
            activity, contacts, health data or payment details. The app has no ads, no analytics
            or tracking tools, and nothing to buy.
          </p>

          <h2 id="how-we-use-it">3. How we use it</h2>
          <ul>
            <li>
              To run your ranch record and keep it in step across the web and your phone,
              including work saved on the phone with no signal and uploaded later.
            </li>
            <li>To answer questions in online mode.</li>
            <li>To keep the service secure and working, and to fix problems.</li>
            <li>To help you when you contact us.</li>
            <li>To improve voice recognition — only from logs you choose to share.</li>
          </ul>
          <p>We don&apos;t use your information for advertising, and we don&apos;t sell it.</p>

          <h2 id="online-mode">4. Online mode and Google</h2>
          <p>
            Online mode lets you ask about your ranch and hear the answer. To answer, it uses two
            Google services:
          </p>
          <ul>
            <li>
              <strong>Google Gemini</strong> writes the answer. It receives your question, the
              conversation so far, and the ranch records the question needs — for example the
              herds, tags, weights, treatments or paddocks it touches.
            </li>
            <li>
              <strong>Google Cloud Text-to-Speech</strong> reads the answer out. It receives the
              text of the answer.
            </li>
          </ul>
          <p>
            No recording of your voice is sent; your phone turns your speech into text first. The
            first time you turn online mode on, the app tells you this and asks you to agree. You
            can switch back to offline mode at any time, and then nothing goes to Google&apos;s
            AI.
          </p>

          <h2 id="sharing">5. Who we share it with</h2>
          <p>
            <strong>People on your ranch.</strong> Members of a ranch can see that ranch&apos;s
            records. The records you enter are shared with them.
          </p>
          <p>
            <strong>Service providers who run parts of Agrivanna for us:</strong>
          </p>
          <ul>
            <li>
              <strong>Google Cloud</strong> hosts our servers.
            </li>
            <li>
              <strong>Supabase</strong> handles signing in.
            </li>
            <li>
              <strong>Google Gemini</strong> and <strong>Google Cloud Text-to-Speech</strong>{" "}
              power online mode (<a href="#online-mode">section 4</a>).
            </li>
            <li>
              <strong>Vercel</strong> and <strong>Resend</strong> run this website and send its
              emails (<a href="#website">section 11</a>).
            </li>
          </ul>
          <p>They process information only to provide their services to us.</p>
          <p>
            <strong>When the law requires it.</strong> We may disclose information if we&apos;re
            legally required to, or to protect the safety of people or the service.
          </p>
          <p>
            We don&apos;t sell your information, and we don&apos;t share it for advertising.
          </p>

          <h2 id="storage">6. Where it&apos;s stored</h2>
          <ul>
            <li>
              <strong>On your phone.</strong> A copy of your ranch record is kept on the phone so
              the app works with no signal. Your sign-in is stored in the iPhone&apos;s keychain.
            </li>
            <li>
              <strong>Our servers</strong> run on Google Cloud in Montréal, Canada.
            </li>
            <li>
              <strong>Sign-in data</strong> is held by Supabase in its Canada (Central) region.
            </li>
            <li>
              <strong>Online mode</strong> uses Google services that may process data.
            </li>
            <li>
              <strong>This website</strong> is hosted by Vercel and sends email through Resend, in
              the United States.
            </li>
          </ul>

          <h2 id="retention">7. How long we keep it</h2>
          <ul>
            <li>
              <strong>Your account details</strong> are kept until you delete your account.
            </li>
            <li>
              <strong>Ranch records</strong> are kept as the ranch&apos;s legal record, including
              after an account is deleted.
            </li>
            <li>
              <strong>Online-mode conversations</strong> are deleted when you delete your account.
            </li>
            <li>
              <strong>Trial requests</strong> from this website are kept while we&apos;re in touch
              with you about Agrivanna. Ask us and we&apos;ll delete yours.
            </li>
            <li>
              <strong>Server logs</strong> are kept for one month.
            </li>
            <li>
              <strong>Backups</strong> may hold deleted information for three months before
              it&apos;s overwritten.
            </li>
          </ul>

          <h2 id="delete-account">8. Deleting your account</h2>
          <p>
            You can delete your account in the app — <strong>Account → Delete account</strong> —
            or on the Agrivanna website. You can also ask us to do it; see{" "}
            <a href="#contact">section 14</a>.
          </p>
          <p>Deletion happens straight away and can&apos;t be undone.</p>
          <p>
            <strong>What&apos;s deleted:</strong> your login, email address, name and profile,
            your membership of the ranch, and your conversations with the assistant.
          </p>
          <p>
            <strong>What&apos;s kept:</strong> the ranch&apos;s records — herds, animals, tags,
            events, weights, treatments, withdrawals, grazing and feeding — because they&apos;re
            the ranch&apos;s legal record. Records you entered stay, but they&apos;re no longer
            linked to your name.
          </p>
          <p>
            <strong>If you&apos;re the only person on the ranch,</strong> the ranch and its
            records are kept with no one in it, and any invitations you&apos;d sent are cancelled.
          </p>
          <p>
            <strong>If others are still on the ranch and you&apos;re its last owner,</strong> make
            someone else an owner first. The app will tell you this.
          </p>
          <p>
            <strong>Voice notes</strong> you recorded are deleted with your account, recordings
            included. Voice notes recorded before October 1, 2026 can&apos;t be matched to the
            person who made them, so they stay with the ranch&apos;s records. To have one
            removed, contact us.
          </p>

          <h2 id="your-rights">9. Your choices and rights</h2>
          <ul>
            <li>
              <strong>Permissions.</strong> Location, camera, photos, microphone and speech
              recognition can each be turned off in the iPhone&apos;s Settings. The features that
              need them stop working; everything else carries on.
            </li>
            <li>
              <strong>Online mode.</strong> Switch to offline mode at any time.
            </li>
            <li>
              <strong>Access and correction.</strong> You can see and correct your ranch records
              in the app and on the website. To get a copy of your personal information, or to
              have it corrected, contact us.
            </li>
            <li>
              <strong>Withdrawing consent.</strong> You can withdraw consent at any time, subject
              to the records we must keep (<a href="#retention">section 7</a>).
            </li>
            <li>
              <strong>Complaints.</strong> If you&apos;re not satisfied with how we handle your
              information, you can contact the Office of the Privacy Commissioner of Canada, or
              Alberta&apos;s Information and Privacy Commissioner.
            </li>
          </ul>

          <h2 id="security">10. Security</h2>
          <p>
            Information travels between the app and our servers over encrypted connections. Your
            sign-in is kept in the iPhone&apos;s keychain. The service only shows a ranch&apos;s
            records to that ranch&apos;s members. No system is perfectly secure, but we work to
            protect your information and fix problems quickly.
          </p>

          <h2 id="website">11. This website</h2>
          <p>
            agrivanna.com has no sign-in. What it collects:
          </p>
          <p>
            <strong>Trial requests.</strong> When you ask for a free trial, the form sends your
            name and email, and anything else you choose to fill in — phone, ranch name, where
            you ranch, herd size, type of operation, how you keep records now, and notes — to our
            team by email, with a copy to you. We use it to get back to you and set up your trial.
            If our email service is unavailable, the form opens a pre-filled email in your own
            mail app instead.
          </p>
          <p>
            <strong>Analytics, only if you accept.</strong> If you accept cookies in the banner,
            Vercel Analytics counts which pages are visited. If you reject them, it isn&apos;t
            loaded. Your choice is kept in your browser. See the{" "}
            <Link href="/cookie-policy">cookie policy</Link>.
          </p>
          <p>
            <strong>Server logs.</strong> The website&apos;s host records basic information about
            each request, such as its time and network address.
          </p>
          <p>
            <strong>Other sites.</strong> Booking a call takes you to Calendly, and the video on
            our news page is played by YouTube. Those services have their own privacy policies.
          </p>

          <h2 id="children">12. Children</h2>
          <p>
            Agrivanna is a tool for running a ranch business. It isn&apos;t directed to children,
            and we don&apos;t knowingly collect information from them.
          </p>

          <h2 id="changes">13. Changes to this policy</h2>
          <p>
            When we change this policy, we&apos;ll update the date at the top. If a change affects
            how we use your information in an important way, we&apos;ll tell you in the app or by
            email before it takes effect.
          </p>

          <h2 id="contact">14. Contact us</h2>
          <p>
            Agrivanna Inc.
            <br />
            1315 Northmount Dr NW, Calgary, AB
            <br />
            <a href="mailto:info@agrivanna.com">info@agrivanna.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
