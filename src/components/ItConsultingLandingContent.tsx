import Link from "next/link";
import {
  ArrowRight,
  Check,
  Compass,
  ClipboardCheck,
  Cloud,
  FileSearch,
  Users2,
  Workflow,
  Network,
  DollarSign,
  Archive,
  UserCog,
  Search,
  ClipboardList,
  ShieldCheck,
  Building2,
  Rocket,
  GraduationCap,
  Landmark,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/CTASection";
import { SITE_URL } from "@/lib/seo";
import { slugify } from "@/lib/slugify";

const subServices = [
  {
    icon: Compass,
    title: "Technology Strategy & Roadmapping",
    description:
      "A prioritized technology roadmap built around your business goals, not a generic best-practices template.",
  },
  {
    icon: ClipboardCheck,
    title: "Vendor & Tooling Evaluation",
    description:
      "Vendor-neutral comparisons of platforms and tools, so decisions are based on fit, not sales pitches.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure Planning",
    description:
      "Architecture and cost planning for AWS, GCP, or Azure that matches your actual scale and budget.",
  },
  {
    icon: FileSearch,
    title: "Technical Due Diligence",
    description:
      "Independent technical risk assessments for M&A, investment, or acquisition decisions.",
  },
  {
    icon: Users2,
    title: "Team Augmentation & Staffing Guidance",
    description:
      "Guidance on when to hire, what roles you actually need, and how to structure a technical team.",
  },
  {
    icon: Workflow,
    title: "Digital Transformation Planning",
    description:
      "A realistic plan for digitizing processes and modernizing systems without disrupting operations.",
  },
  {
    icon: Network,
    title: "Architecture Review & Recommendations",
    description:
      "An independent review of your current architecture, with clear recommendations for what to change.",
  },
  {
    icon: DollarSign,
    title: "IT Budget & Cost Optimization",
    description:
      "A review of current IT spend that identifies redundant tools and opportunities to consolidate.",
  },
  {
    icon: Archive,
    title: "Legacy System Assessment",
    description:
      "An honest assessment of whether to maintain, modernize, or replace an aging system.",
  },
  {
    icon: UserCog,
    title: "Fractional CTO / Technical Advisory",
    description:
      "Ongoing technical leadership for businesses that need senior guidance without a full-time hire.",
  },
];

const techGroups = [
  {
    title: "Strategy & Planning",
    items: "Technology roadmaps, capability assessments, prioritization frameworks.",
  },
  {
    title: "Cloud & Infrastructure",
    items: "AWS, GCP, Azure architecture review, cost optimization, migration planning.",
  },
  {
    title: "Vendor Evaluation",
    items: "RFP support, tooling comparisons, contract and licensing review.",
  },
  {
    title: "Due Diligence",
    items: "Code and architecture audits, technical risk assessment for M&A and investment.",
  },
  {
    title: "Team & Staffing",
    items: "Staffing plans, role definition, technical hiring support and guidance.",
  },
  {
    title: "Digital Transformation",
    items: "Process digitization, legacy modernization roadmaps, change management planning.",
  },
  {
    title: "Governance & Documentation",
    items: "Technical documentation, decision records, architecture diagrams.",
  },
  {
    title: "Budget & Cost",
    items: "IT spend analysis, tooling consolidation, cost-benefit modeling.",
  },
];

const processSteps = [
  { title: "Discovery & Current State Assessment", description: "We review your current technology, team, and constraints before recommending anything." },
  { title: "Stakeholder Interviews", description: "We talk to the people who actually use and maintain your systems, not just leadership." },
  { title: "Technology & Vendor Landscape Review", description: "We map the tools and vendors already in play and where they overlap or fall short." },
  { title: "Gap Analysis & Risk Identification", description: "We identify where current technology decisions create risk or hold the business back." },
  { title: "Roadmap & Recommendations", description: "A clear, prioritized roadmap is delivered, tied to business goals and constraints." },
  { title: "Prioritization & Budget Alignment", description: "Recommendations are sequenced against realistic budget and timeline constraints." },
  { title: "Implementation Support", description: "We stay involved to help execute the roadmap, not just hand over a document." },
  { title: "Progress Review & Adjustment", description: "The roadmap is revisited as priorities and constraints shift." },
  { title: "Ongoing Advisory", description: "We remain available as a technical advisor for decisions that come up along the way." },
];

const whyUs = [
  { title: "We Think Beyond a Single Recommendation", description: "A roadmap needs to account for budget, team capacity, and sequencing, not just what's technically ideal." },
  { title: "We Build Around Your Real Constraints", description: "Advice is grounded in your actual budget, team size, and timeline, not a theoretical best case." },
  { title: "We Understand Strategy and Execution", description: "A roadmap that can't actually be executed by your team isn't useful — we account for both." },
  { title: "We Keep Recommendations Vendor-Neutral", description: "We don't resell software, so recommendations are based on fit, not commissions." },
  { title: "We Support You Through Implementation", description: "We don't disappear after the roadmap is delivered — we help you actually execute it." },
];

const useCases = [
  { icon: Building2, title: "For Small Businesses", description: "A first-time technology strategy that brings structure to ad hoc tooling decisions." },
  { icon: Rocket, title: "For Startups", description: "Fractional CTO support that gives early-stage companies senior technical guidance." },
  { icon: Network, title: "For Growing Companies", description: "Infrastructure and team planning for companies scaling past their current systems." },
  { icon: Landmark, title: "For Investors & Acquirers", description: "Independent technical due diligence that surfaces real risk before a deal closes." },
  { icon: Users2, title: "For Non-Technical Leadership", description: "Technology decisions translated into plain language leadership can actually evaluate." },
  { icon: GraduationCap, title: "For Agencies", description: "Technical advisory support for agencies that need an outside expert opinion." },
  { icon: FileSearch, title: "For Existing Roadmaps", description: "A second opinion or audit of technology decisions already in motion." },
];

const faqs = [
  { question: "Can JSK Corporation help us build a technology roadmap?", answer: "Yes. We build prioritized technology roadmaps based on your business goals, budget, and team capacity." },
  { question: "Do you recommend specific vendors or stay neutral?", answer: "We stay vendor-neutral. We don't resell software, so recommendations are based on fit for your business, not commissions." },
  { question: "Can you evaluate our cloud infrastructure costs?", answer: "Yes. We review cloud architecture and spend to identify cost optimization and consolidation opportunities." },
  { question: "Do you provide technical due diligence for M&A or investment?", answer: "Yes. We provide independent technical risk assessments to support acquisition or investment decisions." },
  { question: "Can you help us hire or staff a technical team?", answer: "Yes. We advise on role definition, staffing plans, and hiring guidance based on what your roadmap actually requires." },
  { question: "Do you offer fractional CTO services?", answer: "Yes. We provide ongoing technical advisory and leadership for businesses that need senior guidance without a full-time hire." },
  { question: "Can you review our existing technology decisions?", answer: "Yes. We provide an independent second opinion or audit of technology decisions already in motion." },
  { question: "Will your recommendations be tied to specific products you sell?", answer: "No. We don't sell or resell software products, so our recommendations aren't tied to a specific vendor's interests." },
  { question: "Do you help implement the recommendations, not just write them?", answer: "Yes. We stay involved through implementation, rather than handing over a document and disappearing." },
  { question: "How do you tailor advice to a non-technical leadership team?", answer: "We translate technical tradeoffs into plain business language, so leadership can evaluate decisions confidently." },
];

type ItConsultingLandingContentProps = {
  h1: string;
  heroLine: string;
  regionName?: string;
  regionSlug?: string;
  localAngle?: string;
  keywords?: string[];
  isHub?: boolean;
};

const SERVICE_SLUG = "it-consulting";

export default function ItConsultingLandingContent({
  h1,
  heroLine,
  regionName,
  regionSlug,
  localAngle,
  keywords,
  isHub = false,
}: ItConsultingLandingContentProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "IT Consulting Services",
    name: h1,
    description: heroLine,
    url: regionSlug
      ? `${SITE_URL}/it-consulting-services-${regionSlug}/`
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
          ? `${SITE_URL}/it-consulting-services-${regionSlug}/`
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
              <Link href="/services/it-consulting" className="hover:text-primary-600">
                IT Consulting
              </Link>
            ) : (
              <span className="text-neutral-700">IT Consulting</span>
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
              Whether you need a technology roadmap, vendor evaluation,
              technical due diligence, or fractional CTO support, we advise
              around your actual constraints — not around what a vendor
              wants to sell you.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">
                Book a Free Technology Strategy Consultation <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="secondary">
                Request a Free Technology Assessment
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
            title="Are you searching for an IT consulting partner that actually understands business?"
            description="Most business owners aren't just looking for “advice” — they're looking for a clear, honest roadmap and someone to help them actually execute it."
          />
          <p className="mx-auto mt-8 max-w-3xl text-center text-neutral-600">
            That is exactly where JSK Corporation fits in. We combine strategic
            planning, vendor-neutral evaluation, and hands-on implementation
            support to give you technology guidance that works like a real
            business partnership.
          </p>
        </Container>
      </section>

      {/* Problem */}
      <section className="relative isolate flex min-h-[380px] items-center overflow-hidden">
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src="/videos/team-discussion.mp4"
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
              Most bad tech decisions aren&apos;t technical mistakes
            </span>
            <h2 className="mx-auto mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-white sm:text-4xl">
              They&apos;re decisions made without the full picture
            </h2>
            <p className="mx-auto mt-4 text-lg text-white/80">
              The tool was chosen because a vendor pitched it well, not
              because it actually fit. The roadmap was written, but it
              ignored the team&apos;s real capacity. The infrastructure grew
              without a plan behind it. At JSK Corporation, we don&apos;t sell
              software — we help you make decisions with the full picture in
              front of you.
            </p>
          </div>
        </Container>
      </section>

      {/* Positioning */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our approach"
            title="IT consulting built around your real constraints"
            description="Generic best-practices frameworks can work for a starting point. But when your business needs decisions tied to real budget, team, and timeline constraints, generic advice quickly becomes impractical."
          />
          <p className="mx-auto mt-8 max-w-3xl text-center text-neutral-600">
            JSK Corporation advises with an execution-first mindset — planned
            around your actual budget and team capacity, not a theoretical
            best case. Vendor-neutral recommendations and hands-on
            implementation support, so the roadmap actually gets executed.
          </p>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-primary-50/60 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What we advise on"
            title="IT consulting services we provide"
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
            title="Frameworks & practices we work with"
            description="We choose the right assessment and planning approach based on your industry, scale, and growth stage."
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
          <SectionHeading eyebrow="How we work" title="Our A-to-Z IT consulting process" />
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
          <SectionHeading eyebrow="Built for you" title="What kind of guidance do you need?" />
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
                <Compass className="h-4 w-4" /> Built for {regionName}
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
                IT consulting for {regionName} businesses
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
                <Search className="h-4 w-4" /> Free technology assessment
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--foreground)]">
                Not sure if your current technology decisions are right?
              </h2>
              <p className="mt-4 text-neutral-600">
                If you&apos;re not sure your tools are the right fit,
                your infrastructure spend feels high, or your roadmap
                needs a second opinion, JSK Corporation can review it and show
                you what&apos;s worth changing.
              </p>
              <div className="mt-8">
                <Button href="/contact">
                  Request a Free Technology Assessment <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6">
              <ul className="space-y-3">
                {[
                  "Current technology stack review",
                  "Vendor and tooling review",
                  "Infrastructure cost review",
                  "Team and staffing review",
                  "Technical risk review",
                  "Roadmap gap review",
                  "Digital transformation readiness review",
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
              Your technology decisions should belong to you
            </h2>
            <p className="mt-4 text-neutral-600">
              We don&apos;t believe in holding clients hostage with confusing
              systems, hidden access, or unclear ownership. With JSK Corporation,
              you receive vendor-neutral advice and documented decisions your
              team can act on independently — no reseller kickbacks, no
              lock-in.
            </p>
          </div>
        </Container>
      </section>


      {!isHub && regionSlug && (
        <section className="pb-4">
          <Container>
            <p className="text-center text-sm text-neutral-500">
              Serving businesses across every state —{" "}
              <Link href="/it-consulting-services-usa" className="font-medium text-primary-600 hover:underline">
                view our nationwide IT consulting overview
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
            ? `Ready to plan technology strategy for your ${regionName} business?`
            : "Ready to plan technology strategy for your business?"
        }
        description="JSK Corporation helps businesses build technology roadmaps, evaluate vendors, and plan infrastructure that supports real, confident growth."
        primaryLabel="Book a Free Technology Strategy Consultation"
        primaryHref="/contact"
        secondaryLabel="Request a Free Technology Assessment"
        secondaryHref="/contact"
      />
    </>
  );
}
