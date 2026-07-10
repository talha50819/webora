import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/siteConfig";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Compliance Policy",
  description:
    "How JSK Corporation approaches compliance internally and in client engagements.",
  path: "/compliance-policy-development/",
});

const h2 = "mt-10 font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--foreground)]";
const p = "mt-3 leading-relaxed text-neutral-600";
const ul = "mt-3 list-disc space-y-2 pl-5 leading-relaxed text-neutral-600";

export default function CompliancePolicyPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading as="h1" align="left" eyebrow="Legal" title="Compliance Policy" />
        <p className="mt-4 text-sm text-neutral-400">Last updated: July 10, 2026</p>

        <p className={p}>
          Many of the businesses we work with operate under regulatory or
          contractual compliance requirements — data privacy laws,
          industry standards, or customer security questionnaires. This
          page outlines our general approach; specific compliance
          commitments for a given project are defined in that
          engagement&apos;s agreement.
        </p>

        <h2 className={h2}>Our approach with clients</h2>
        <p className={p}>
          As part of our{" "}
          <a
            href="/services/cybersecurity-services/"
            className="text-primary-600 hover:underline"
          >
            Cybersecurity Services
          </a>{" "}
          and{" "}
          <a href="/services/it-consulting/" className="text-primary-600 hover:underline">
            IT Consulting
          </a>{" "}
          work, we help clients assess their current posture against
          relevant frameworks, identify gaps, and develop practical policies
          and controls to close them.
        </p>

        <h2 className={h2}>Frameworks we commonly work with</h2>
        <ul className={ul}>
          <li><strong>Data privacy:</strong> GDPR (EU/UK), CCPA/CPRA (California)</li>
          <li><strong>Payments:</strong> PCI-DSS</li>
          <li><strong>Healthcare:</strong> HIPAA</li>
          <li><strong>Information security management:</strong> ISO 27001, SOC 2</li>
        </ul>
        <p className={p}>
          These are frameworks we help clients assess and build toward —
          not certifications {siteConfig.name} itself holds, unless stated
          in writing for a particular engagement.
        </p>

        <h2 className={h2}>Internal practices</h2>
        <p className={p}>
          We handle client data confidentially, limit access to what a
          given engagement requires, and apply the practices described in
          our{" "}
          <a
            href="/information-security-policy/"
            className="text-primary-600 hover:underline"
          >
            Information Security Policy
          </a>
          . We do not claim certification against any specific compliance
          framework unless stated in writing for a particular engagement.
        </p>

        <h2 className={h2}>Data processing agreements</h2>
        <p className={p}>
          For engagements involving processing of personal data on a
          client&apos;s behalf, we can enter into a data processing
          agreement (DPA) or similar contractual terms on request, as part
          of that engagement&apos;s written agreement.
        </p>

        <h2 className={h2}>Working within your regulatory context</h2>
        <p className={p}>
          Every client&apos;s regulatory obligations are different. Rather
          than apply a one-size-fits-all checklist, we scope compliance
          work around your industry, jurisdiction, and existing
          obligations at the start of an engagement.
        </p>

        <h2 className={h2}>Questions</h2>
        <p className={p}>
          For compliance-related questions about a current or prospective
          engagement, contact{" "}
          <a
            href={`mailto:${siteConfig.emails.info}`}
            className="text-primary-600 hover:underline"
          >
            {siteConfig.emails.info}
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
