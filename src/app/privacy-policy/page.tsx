import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/siteConfig";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How JSK Corporation collects, uses, and protects information submitted through this website.",
  path: "/privacy-policy/",
});

const h2 = "mt-10 font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--foreground)]";
const p = "mt-3 leading-relaxed text-neutral-600";
const ul = "mt-3 list-disc space-y-2 pl-5 leading-relaxed text-neutral-600";

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading as="h1" align="left" eyebrow="Legal" title="Privacy Policy" />
        <p className="mt-4 text-sm text-neutral-400">Last updated: July 10, 2026</p>

        <p className={p}>
          This policy explains what information {siteConfig.name} (&quot;we,&quot;
          &quot;us&quot;) collects through jskcorporation.com, how it&apos;s used, the
          legal basis we rely on, and the choices and rights you have. It applies
          to this website only, not to work product delivered under a separate
          client agreement.
        </p>

        <h2 className={h2}>Information we collect</h2>
        <ul className={ul}>
          <li>
            <strong>Contact form:</strong> name, email address, phone number
            (optional), service of interest, and any message you submit.
          </li>
          <li>
            <strong>Direct email:</strong> anything you send to our
            info, sales, support, hr, or accounting addresses.
          </li>
          <li>
            <strong>AI assistant:</strong> if you use the &quot;Ask&quot; bar on
            our homepage, the text you type is sent directly from your
            browser to Google&apos;s Gemini API to generate a response.
          </li>
          <li>
            <strong>Analytics and chat, if you accept cookies:</strong> standard
            web analytics (pages viewed, approximate location, device and
            browser type, referring site) and, if you start a conversation,
            live-chat message content.
          </li>
        </ul>

        <h2 className={h2}>Legal basis for processing</h2>
        <p className={p}>
          Where the GDPR or similar laws apply, we process contact form and
          email correspondence under <strong>legitimate interest</strong> (responding
          to inquiries and operating our business) or, where you&apos;re
          discussing a prospective engagement, in <strong>anticipation of a
          contract</strong>. Analytics and live-chat cookies are only activated
          based on your <strong>consent</strong>, given through the cookie
          banner, which you can withdraw at any time.
        </p>

        <h2 className={h2}>How we use it</h2>
        <p className={p}>
          We use contact and email information to respond to inquiries,
          discuss potential projects, and provide requested services. We use
          analytics data in aggregate to understand site usage and improve
          content. We do not sell your information to third parties.
        </p>

        <h2 className={h2}>The AI assistant</h2>
        <p className={p}>
          Questions submitted through the homepage AI bar are sent directly
          from your browser to Google&apos;s Gemini API to generate an answer.
          We do not store these questions or answers on our own servers.
          That exchange is subject to Google&apos;s own privacy practices,
          available at{" "}
          <a
            href="https://policies.google.com/privacy"
            className="text-primary-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            policies.google.com/privacy
          </a>
          . Avoid submitting personal or confidential information through
          the AI bar.
        </p>

        <h2 className={h2}>Third-party service providers</h2>
        <p className={p}>
          We use third-party providers to operate this site: Web3Forms
          (contact form submissions), Google Gemini (the AI assistant),
          and — only if you accept cookies — Google Analytics (site traffic
          analytics) and Tawk.to (live chat). These providers process data
          on our behalf and are subject to their own privacy and security
          practices.
        </p>

        <h2 className={h2}>Cookies and tracking</h2>
        <p className={p}>
          This site uses a small number of cookies. Strictly necessary
          cookies (for example, to remember your cookie preference) are
          always active. Two non-essential services — Google Analytics
          (site traffic analytics) and Tawk.to (live chat) — only load
          after you accept cookies in the banner shown on your first visit.
          You can accept or reject these at any time using the &quot;Cookie
          Settings&quot; link in the footer, and you can also block cookies
          generally through your browser settings. This site does not
          currently respond to browser &quot;Do Not Track&quot; signals, since
          there is no common industry standard for how to honor them.
        </p>

        <h2 className={h2}>International data transfers</h2>
        <p className={p}>
          Our service providers (Web3Forms, Google, Tawk.to) may process and
          store data on servers located outside Pakistan, including in the
          United States. Where required, these transfers rely on the
          provider&apos;s own safeguards, such as standard contractual clauses.
        </p>

        <h2 className={h2}>Data retention</h2>
        <p className={p}>
          We retain contact form submissions and correspondence for as long
          as reasonably necessary to respond to your inquiry and maintain
          business records, unless you request earlier deletion. Analytics
          data is retained by Google Analytics per its default retention
          settings.
        </p>

        <h2 className={h2}>Your privacy rights</h2>
        <p className={p}>
          Depending on where you live, you may have the right to request
          access to, correction of, deletion of, or a copy of your personal
          information, to object to or restrict certain processing, and to
          withdraw consent at any time. If you&apos;re in the EEA or UK, these
          rights derive from the GDPR; if you&apos;re a California resident,
          the CCPA/CPRA gives you the right to know what we&apos;ve collected,
          to delete it, and to non-discrimination for exercising that right —
          we do not sell or &quot;share&quot; personal information as those
          terms are defined by the CCPA. To exercise any of these rights,
          email{" "}
          <a
            href={`mailto:${siteConfig.emails.info}`}
            className="text-primary-600 hover:underline"
          >
            {siteConfig.emails.info}
          </a>
          . We&apos;ll respond within a reasonable time and, where applicable,
          within the timeframe required by law.
        </p>

        <h2 className={h2}>Data breach notification</h2>
        <p className={p}>
          If a breach affecting your personal information occurs, we will
          notify affected individuals and, where legally required, the
          relevant supervisory authority without undue delay, consistent
          with applicable law.
        </p>

        <h2 className={h2}>Children&apos;s privacy</h2>
        <p className={p}>
          This website is intended for business audiences and is not
          directed at children under 13. We do not knowingly collect
          information from children.
        </p>

        <h2 className={h2}>Changes to this policy</h2>
        <p className={p}>
          We may update this policy from time to time. The &quot;last
          updated&quot; date above reflects the most recent revision.
        </p>

        <h2 className={h2}>Contact us</h2>
        <p className={p}>
          {siteConfig.name}
          <br />
          {siteConfig.address}
          <br />
          <a
            href={`mailto:${siteConfig.emails.info}`}
            className="text-primary-600 hover:underline"
          >
            {siteConfig.emails.info}
          </a>{" "}
          · {siteConfig.phone}
        </p>
      </Container>
    </section>
  );
}
