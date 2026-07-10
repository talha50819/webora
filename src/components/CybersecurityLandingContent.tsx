import Link from "next/link";
import {
  ArrowRight,
  Check,
  Search,
  Code2,
  Server,
  Bug,
  FileCheck2,
  AlertTriangle,
  Activity,
  KeyRound,
  Cloud,
  GraduationCap,
  ClipboardList,
  ShieldCheck,
  Building2,
  Rocket,
  ShoppingCart,
  HeartPulse,
  Landmark,
  RefreshCw,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/CTASection";
import { SITE_URL } from "@/lib/seo";
import { slugify } from "@/lib/slugify";

const subServices = [
  {
    icon: Search,
    title: "Security Audits & Vulnerability Assessments",
    description:
      "A structured review of your systems that identifies real, exploitable weaknesses, not just generic scan output.",
  },
  {
    icon: Code2,
    title: "Application Security Reviews",
    description:
      "Code and architecture reviews against the OWASP Top 10 and common application security failure points.",
  },
  {
    icon: Server,
    title: "Infrastructure & Network Hardening",
    description:
      "Firewall configuration, network segmentation, and patch management that closes real attack paths.",
  },
  {
    icon: Bug,
    title: "Authorized Penetration Testing",
    description:
      "Scoped, authorized penetration testing that simulates real attacks against your systems, safely.",
  },
  {
    icon: FileCheck2,
    title: "Compliance Readiness Support",
    description:
      "Preparation for SOC 2, HIPAA, PCI-DSS, and other frameworks, with documentation built to hold up under audit.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Response Planning",
    description:
      "Response playbooks and tabletop exercises so your team knows exactly what to do if something goes wrong.",
  },
  {
    icon: Activity,
    title: "Security Monitoring & Alerting",
    description:
      "Ongoing monitoring and alerting that catches suspicious activity before it becomes a breach.",
  },
  {
    icon: KeyRound,
    title: "Identity & Access Management",
    description:
      "SSO, MFA, and least-privilege access design so the right people have exactly the access they need.",
  },
  {
    icon: Cloud,
    title: "Cloud Security Configuration Review",
    description:
      "A review of your AWS, GCP, or Azure configuration against common cloud misconfiguration risks.",
  },
  {
    icon: GraduationCap,
    title: "Security Awareness Training",
    description:
      "Practical training that helps your team recognize phishing and social engineering before it works.",
  },
];

const techGroups = [
  {
    title: "Assessment & Testing",
    items: "Burp Suite, Nmap, OWASP ZAP, authorized penetration testing frameworks.",
  },
  {
    title: "Monitoring & Detection",
    items: "SIEM tooling, log monitoring, intrusion detection, alerting pipelines.",
  },
  {
    title: "Cloud Security",
    items: "AWS, GCP, and Azure security configuration, IAM policies, security groups.",
  },
  {
    title: "Application Security",
    items: "OWASP Top 10 reviews, secure code review, dependency and supply-chain scanning.",
  },
  {
    title: "Compliance & Governance",
    items: "SOC 2, HIPAA, PCI-DSS, GDPR-readiness, policy and evidence documentation.",
  },
  {
    title: "Identity & Access",
    items: "SSO, MFA, role-based access control, least-privilege access design.",
  },
  {
    title: "Incident Response",
    items: "Response playbooks, tabletop exercises, breach containment planning.",
  },
  {
    title: "Infrastructure",
    items: "Firewall configuration, network segmentation, patch and vulnerability management.",
  },
];

const processSteps = [
  { title: "Discovery & Risk Assessment", description: "We map your systems, data flows, and threat model to understand where real risk lives." },
  { title: "Vulnerability Scanning & Testing", description: "Automated scanning and, where scoped, authorized manual testing identify real weaknesses." },
  { title: "Application & Infrastructure Review", description: "Code, configuration, and infrastructure are reviewed against known attack patterns." },
  { title: "Findings Report & Risk Prioritization", description: "Findings are ranked by real exploitability and impact, not just by scanner severity." },
  { title: "Remediation Planning", description: "A prioritized plan tells you exactly what to fix first and why." },
  { title: "Hardening & Implementation", description: "Fixes and controls are implemented, with verification that they actually close the gap." },
  { title: "Compliance Documentation", description: "Where relevant, findings and controls are documented to support compliance requirements." },
  { title: "Monitoring & Alerting Setup", description: "Ongoing monitoring is configured so new issues get caught early, not after damage is done." },
  { title: "Ongoing Monitoring & Review", description: "Security posture is revisited regularly as your systems and threats evolve." },
];

const whyUs = [
  { title: "We Think Beyond a Scan Report", description: "A tool can generate a long list of findings. We tell you which ones actually matter." },
  { title: "We Prioritize by Real Risk", description: "Remediation is ordered by exploitability and business impact, not alphabetical severity labels." },
  { title: "We Understand Security and Engineering", description: "Recommendations are written to be implementable by your actual team, not just theoretically correct." },
  { title: "We Keep Findings Clear & Actionable", description: "Reports explain the risk in plain language and exactly what to do about it." },
  { title: "We Support You With Ongoing Monitoring", description: "Security isn't a one-time project — we stay involved as your systems and threats change." },
];

const useCases = [
  { icon: Building2, title: "For Small Businesses", description: "Practical security assessments that reduce real risk without enterprise-level overhead." },
  { icon: Rocket, title: "For SaaS & Product Companies", description: "Application security reviews that protect customer data and support enterprise sales." },
  { icon: HeartPulse, title: "For Healthcare Companies", description: "HIPAA readiness support and security controls built for protected health information." },
  { icon: Landmark, title: "For Financial Services", description: "Compliance-heavy security programs built to hold up under regulatory scrutiny." },
  { icon: ShoppingCart, title: "For E-Commerce Brands", description: "PCI-DSS-aligned payment security that protects customer transactions." },
  { icon: GraduationCap, title: "For Agencies", description: "White-label security support for agencies that need reliable audit and remediation delivery." },
  { icon: RefreshCw, title: "For Existing Systems", description: "Incident response and breach recovery support when something has already gone wrong." },
];

const faqs = [
  { question: "Can JSK Corporation run a security audit on our systems?", answer: "Yes. We run structured security audits and vulnerability assessments across applications, infrastructure, and cloud configuration." },
  { question: "Do you perform authorized penetration testing?", answer: "Yes, within a clearly defined and authorized scope. We only test systems you own or have explicit written authorization to test." },
  { question: "Can you help us become SOC 2 or HIPAA compliant?", answer: "Yes. We support compliance readiness with documented controls and evidence built to hold up under audit." },
  { question: "Do you review application code for vulnerabilities?", answer: "Yes. We review code and architecture against the OWASP Top 10 and other common application security risks." },
  { question: "Can you help with incident response if we're breached?", answer: "Yes. We help with breach containment, response planning, and recovery support if an incident occurs." },
  { question: "Do you provide ongoing security monitoring?", answer: "Yes. We set up monitoring and alerting so suspicious activity is caught early, and offer ongoing review over time." },
  { question: "Will you provide a written report of findings?", answer: "Yes. Every assessment includes a clear, prioritized report explaining findings and exactly what to do about them." },
  { question: "Can you help harden our cloud infrastructure?", answer: "Yes. We review and harden AWS, GCP, and Azure configurations against common cloud misconfiguration risks." },
  { question: "Do you provide security awareness training for our team?", answer: "Yes. We provide practical training that helps your team recognize phishing and social engineering attempts." },
  { question: "How do you prioritize which vulnerabilities to fix first?", answer: "We rank findings by real exploitability and business impact, not just automated scanner severity labels." },
];

type CybersecurityLandingContentProps = {
  h1: string;
  heroLine: string;
  regionName?: string;
  regionSlug?: string;
  localAngle?: string;
  keywords?: string[];
  isHub?: boolean;
};

const SERVICE_SLUG = "cybersecurity-services";

export default function CybersecurityLandingContent({
  h1,
  heroLine,
  regionName,
  regionSlug,
  localAngle,
  keywords,
  isHub = false,
}: CybersecurityLandingContentProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Cybersecurity Services",
    name: h1,
    description: heroLine,
    url: regionSlug
      ? `${SITE_URL}/cybersecurity-services-${regionSlug}/`
      : `${SITE_URL}/services/${SERVICE_SLUG}/`,
    provider: {
      "@type": "ProfessionalService",
      name: "JSK Corporation",
      url: SITE_URL,
    },
    areaServed: regionName ? (isHub ? "US" : regionName) : undefined,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services/` },
      {
        "@type": "ListItem",
        position: 3,
        name: h1,
        item: regionSlug
          ? `${SITE_URL}/cybersecurity-services-${regionSlug}/`
          : `${SITE_URL}/services/${SERVICE_SLUG}/`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-radial-fade py-20 sm:py-28">
        <Container>
          <nav className="text-sm text-neutral-500">
            <Link href="/services" className="hover:text-primary-600">
              Services
            </Link>
            <span className="mx-2">/</span>
            {regionName ? (
              <Link href="/services/cybersecurity-services" className="hover:text-primary-600">
                Cybersecurity Services
              </Link>
            ) : (
              <span className="text-neutral-700">Cybersecurity Services</span>
            )}
            {regionName && (
              <>
                <span className="mx-2">/</span>
                <span className="text-neutral-700">{regionName}</span>
              </>
            )}
          </nav>
          <div className="mt-8 max-w-3xl">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
              {h1}
            </h1>
            <p className="mt-6 text-lg text-neutral-600">{heroLine}</p>
            <p className="mt-4 text-base text-neutral-600">
              Whether you need a security audit, authorized penetration
              testing, compliance readiness support, or ongoing monitoring,
              we assess and reduce risk around your actual systems — not
              around a generic checklist.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">
                Book a Free Security Strategy Consultation <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="secondary">
                Request a Free Security Assessment
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Search intent */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Sound familiar?"
            title="Are you searching for a cybersecurity partner that actually understands business?"
            description="Most business owners aren't just looking for “a scan” — they're looking for clear answers about real risk, a prioritized plan to fix it, and ongoing peace of mind."
          />
          <p className="mx-auto mt-8 max-w-3xl text-center text-neutral-600">
            That is exactly where JSK Corporation fits in. We combine assessment,
            hardening, and ongoing monitoring to reduce risk in a way
            that&apos;s actually implementable by your team, not just
            technically correct on paper.
          </p>
        </Container>
      </section>

      {/* Problem */}
      <section className="relative isolate flex min-h-[380px] items-center overflow-hidden">
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src="/videos/tech-code.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 -z-10 bg-primary-950/80" />
        <div className="absolute inset-0 -z-10 gradient-brand opacity-30 mix-blend-multiply" />
        <Container className="py-16">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block text-sm font-semibold tracking-wide text-primary-200 uppercase">
              Most breaches don&apos;t start with a zero-day
            </span>
            <h2 className="mx-auto mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-white sm:text-4xl">
              They start with something that was already known and unfixed
            </h2>
            <p className="mx-auto mt-4 text-lg text-white/80">
              The scan ran, but the report sat unread. The finding was
              flagged, but no one owned fixing it. The access was
              over-permissioned because it was easier that way. At
              JSK Corporation, we don&apos;t just hand you a list of findings — we
              prioritize, explain, and help you actually close the gaps.
            </p>
          </div>
        </Container>
      </section>

      {/* Positioning */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our approach"
            title="Cybersecurity built around your real risk"
            description="Automated scanners can work for a basic starting point. But when your business handles real customer data, payments, or compliance requirements, a generic scan report quickly becomes a false sense of security."
          />
          <p className="mx-auto mt-8 max-w-3xl text-center text-neutral-600">
            JSK Corporation assesses security with a risk-first mindset — planned
            around your actual systems and threat model, not a generic
            checklist. Clear reporting, prioritized remediation, and ongoing
            monitoring, so your security posture keeps improving instead of
            quietly decaying.
          </p>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-primary-50/60 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="Cybersecurity services we provide"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subServices.map(({ icon: Icon, title, description }) => (
              <Link
                key={title}
                href={`/services/${SERVICE_SLUG}/${slugify(title)}/`}
                className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-primary-300"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--foreground)] group-hover:text-primary-600">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {description}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Tech stack */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Under the hood"
            title="Tools, frameworks & practices we work with"
            description="We choose the right assessment methods and tools based on your systems, industry, and compliance needs."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {techGroups.map(({ title, items }) => (
              <div key={title} className="rounded-2xl border border-neutral-200 p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-[var(--foreground)]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{items}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-primary-50/60 py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="How we work" title="Our A-to-Z security assessment process" />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.title} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white font-[family-name:var(--font-heading)] text-sm font-bold text-primary-700">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)]">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why us */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Why JSK Corporation" title="Why businesses choose JSK Corporation" />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map(({ title, description }) => (
              <div key={title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl gradient-brand text-white">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--foreground)]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Use cases */}
      <section className="bg-primary-50/60 py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Built for you" title="What kind of security support do you need?" />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-primary-200"
              >
                <Icon className="h-6 w-6 text-primary-600" />
                <h3 className="mt-4 font-[family-name:var(--font-heading)] text-base font-semibold text-[var(--foreground)]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Local angle (state pages only) */}
      {localAngle && (
        <section className="py-20 sm:py-28">
          <Container>
            <div className="mx-auto max-w-3xl rounded-3xl border border-neutral-200 p-8 text-center sm:p-12">
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-primary-600 uppercase">
                <ShieldCheck className="h-4 w-4" /> Built for {regionName}
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
                Cybersecurity for {regionName} businesses
              </h2>
              <p className="mt-4 text-neutral-600">{localAngle}</p>
              {keywords && keywords.length > 0 && (
                <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                  {keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* Free audit */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-primary-600 uppercase">
                <Search className="h-4 w-4" /> Free security assessment
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--foreground)]">
                Not sure how exposed your systems really are?
              </h2>
              <p className="mt-4 text-neutral-600">
                If you&apos;re not sure where your biggest security risks
                are, whether you&apos;re compliance-ready, or if your
                monitoring would even catch an incident, JSK Corporation can
                review it and show you what&apos;s worth fixing first.
              </p>
              <div className="mt-8">
                <Button href="/contact">
                  Request a Free Security Assessment <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6">
              <ul className="space-y-3">
                {[
                  "External attack surface review",
                  "Application security review",
                  "Cloud configuration review",
                  "Access control review",
                  "Compliance gap review",
                  "Incident readiness review",
                  "Monitoring coverage review",
                  "Prioritized recommendations report",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Ownership */}
      <section className="bg-primary-50/60 py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <ClipboardList className="mx-auto h-8 w-8 text-primary-600" />
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
              Your security posture should belong to you
            </h2>
            <p className="mt-4 text-neutral-600">
              We don&apos;t believe in holding clients hostage with confusing
              systems, hidden access, or unclear ownership. With JSK Corporation,
              you receive full documentation of findings, controls, and
              configurations — a security program that can be maintained and
              audited independently, with no vendor lock-in.
            </p>
          </div>
        </Container>
      </section>


      {!isHub && regionSlug && (
        <section className="pb-4">
          <Container>
            <p className="text-center text-sm text-neutral-500">
              Serving businesses across every state —{" "}
              <Link href="/cybersecurity-services-usa" className="font-medium text-primary-600 hover:underline">
                view our nationwide cybersecurity overview
              </Link>
              .
            </p>
          </Container>
        </section>
      )}

      {/* FAQs */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Questions" title="Frequently asked questions" />
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
            {faqs.map(({ question, answer }) => (
              <div key={question} className="rounded-2xl border border-neutral-200 p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-[var(--foreground)]">
                  {question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title={
          regionName
            ? `Ready to reduce security risk for your ${regionName} business?`
            : "Ready to reduce security risk for your business?"
        }
        description="JSK Corporation helps businesses run security audits, hardening, and ongoing monitoring that protect what you've already built."
        primaryLabel="Book a Free Security Strategy Consultation"
        primaryHref="/contact"
        secondaryLabel="Request a Free Security Assessment"
        secondaryHref="/contact"
      />
    </>
  );
}
