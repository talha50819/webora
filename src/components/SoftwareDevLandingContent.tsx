import Link from "next/link";
import {
  ArrowRight,
  Check,
  Code2,
  Server,
  Cloud,
  RefreshCw,
  FlaskConical,
  Database,
  LayoutDashboard,
  Plug,
  LifeBuoy,
  FileSearch,
  Search,
  ShieldCheck,
  Building2,
  Rocket,
  ShoppingCart,
  Users2,
  GraduationCap,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/CTASection";
import { SITE_URL } from "@/lib/seo";
import { slugify } from "@/lib/slugify";

const subServices = [
  {
    icon: Code2,
    title: "Custom Software Design & Architecture",
    description:
      "System architecture planned around your real workflows and scale, not a generic boilerplate.",
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description:
      "Reliable backend systems and REST or GraphQL APIs built to support your product and integrations.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure & DevOps",
    description:
      "Scalable infrastructure, CI/CD pipelines, and deployment automation on AWS, GCP, or Azure.",
  },
  {
    icon: RefreshCw,
    title: "Legacy System Modernization",
    description:
      "Modernizing outdated systems without disrupting the business processes that depend on them.",
  },
  {
    icon: FlaskConical,
    title: "Quality Assurance & Automated Testing",
    description:
      "Automated test suites and QA processes that catch issues before they reach production.",
  },
  {
    icon: Database,
    title: "Database Design & Data Migration",
    description:
      "Clean data models and safe migrations that keep your data structured, accurate, and accessible.",
  },
  {
    icon: LayoutDashboard,
    title: "Internal Tools & Admin Panels",
    description:
      "Custom dashboards and admin tools that make internal operations faster and easier to manage.",
  },
  {
    icon: Plug,
    title: "Third-Party Integrations & Connectivity",
    description:
      "Payment gateways, CRMs, ERPs, and other systems connected cleanly into your software.",
  },
  {
    icon: LifeBuoy,
    title: "Software Maintenance & Long-Term Support",
    description:
      "Ongoing updates, bug fixes, and improvements so your software keeps running reliably after launch.",
  },
  {
    icon: FileSearch,
    title: "Technical Due Diligence & Code Audits",
    description:
      "An honest review of an existing codebase's quality, risk, and readiness before you invest further.",
  },
];

const techGroups = [
  {
    title: "Languages & Frameworks",
    items: "Node.js, Python, Java, Go, TypeScript, .NET, chosen based on your project's needs.",
  },
  {
    title: "Front-End (When Needed)",
    items: "React, Next.js, Vue.js for dashboards, portals, and product interfaces.",
  },
  {
    title: "Databases",
    items: "PostgreSQL, MySQL, MongoDB, Redis, database architecture and performance tuning.",
  },
  {
    title: "Cloud & Infrastructure",
    items: "AWS, GCP, Azure, Docker, Kubernetes, Terraform, infrastructure as code.",
  },
  {
    title: "APIs & Integration",
    items: "REST, GraphQL, webhooks, and custom integrations with third-party systems.",
  },
  {
    title: "DevOps & CI/CD",
    items: "GitHub Actions, GitLab CI, Jenkins, automated deployments and release pipelines.",
  },
  {
    title: "Testing & QA",
    items: "Jest, Cypress, Playwright, automated test suites, and load testing.",
  },
  {
    title: "Security & Compliance",
    items: "Authentication and authorization, encryption, access control, compliance-ready architecture.",
  },
];

const processSteps = [
  { title: "Discovery & Requirements Scoping", description: "We define what the software needs to do, who uses it, and what constraints apply." },
  { title: "Technical Architecture & System Design", description: "We design a system architecture built for your actual scale and requirements." },
  { title: "Database & Data Modeling", description: "Data structures are modeled to support performance and long-term maintainability." },
  { title: "Backend & API Development", description: "Core business logic and APIs are built in iterative, testable increments." },
  { title: "Frontend Development", description: "When a UI is needed, we build it on top of a clean, working backend, not the other way around." },
  { title: "Integrations & Third-Party Connections", description: "Payment gateways, CRMs, and other systems are connected cleanly and reliably." },
  { title: "QA & Automated Testing", description: "Automated tests catch regressions early, before they reach production." },
  { title: "Deployment & DevOps Setup", description: "CI/CD pipelines and infrastructure are set up for repeatable, safe deployments." },
  { title: "Long-Term Support & Maintenance", description: "We stay involved after launch — fixing bugs, adding features, and keeping systems current." },
];

const whyUs = [
  { title: "We Think Beyond the First Release", description: "Software is a long-term asset. We architect for maintainability, not just a fast launch." },
  { title: "We Build Around Your Real Workflows", description: "Software is designed around how your business actually operates, not a generic template." },
  { title: "We Understand Architecture and Delivery", description: "A good architecture diagram means nothing without disciplined, tested delivery — we handle both." },
  { title: "We Keep Code Clean & Documented", description: "Clean, documented code makes your software easier to extend, audit, and hand off over time." },
  { title: "We Support You After Launch", description: "Software needs maintenance — we stay involved with updates, fixes, and new features as you grow." },
];

const useCases = [
  { icon: Building2, title: "For Small Businesses", description: "Internal tools that replace spreadsheets and manual processes with something reliable." },
  { icon: Rocket, title: "For Startups", description: "MVP and product builds that validate your idea fast and scale as you grow." },
  { icon: ShoppingCart, title: "For E-Commerce Brands", description: "Custom backend systems and integrations that support real transaction volume." },
  { icon: Users2, title: "For B2B Companies", description: "Internal software and automation that removes manual work from daily operations." },
  { icon: Building2, title: "For Enterprises", description: "Legacy system modernization that upgrades critical systems without disrupting operations." },
  { icon: GraduationCap, title: "For Agencies", description: "White-label development capacity for agencies that need reliable technical delivery." },
  { icon: RefreshCw, title: "For Existing Systems", description: "An audit, rebuild, or technical takeover when your current system is holding the business back." },
];

const faqs = [
  { question: "Can JSK Corporation build custom software from scratch?", answer: "Yes. We can scope, architect, build, test, and launch custom software based on your business requirements and workflows." },
  { question: "Do you build backend systems and APIs?", answer: "Yes. We build backend systems and REST or GraphQL APIs to power your product, integrations, and internal tools." },
  { question: "Can you modernize a legacy system?", answer: "Yes. We modernize outdated systems carefully, without disrupting the business processes that depend on them." },
  { question: "Do you handle cloud infrastructure and DevOps?", answer: "Yes. We set up cloud infrastructure, CI/CD pipelines, and deployment automation on AWS, GCP, or Azure." },
  { question: "Will the software include automated testing?", answer: "Yes. We build automated test suites so regressions are caught before they reach production." },
  { question: "Can you take over an existing codebase?", answer: "Yes. We review the current codebase, identify issues, and either extend it or rebuild key parts based on what we find." },
  { question: "Do you provide long-term maintenance and support?", answer: "Yes. We offer ongoing maintenance, updates, and support so your software keeps running reliably after launch." },
  { question: "Will I own the source code?", answer: "Yes. You retain full ownership of the source code, with clean, documented handoff — no vendor lock-in." },
  { question: "Can you integrate with our existing tools and systems?", answer: "Yes. We integrate with CRMs, ERPs, payment gateways, and other third-party systems your business already uses." },
  { question: "How do you ensure the software scales as we grow?", answer: "We architect for your realistic growth trajectory from the start, and revisit that architecture as your scale changes." },
];

type SoftwareDevLandingContentProps = {
  h1: string;
  heroLine: string;
  regionName?: string;
  regionSlug?: string;
  localAngle?: string;
  keywords?: string[];
  isHub?: boolean;
};

const SERVICE_SLUG = "software-development";

export default function SoftwareDevLandingContent({
  h1,
  heroLine,
  regionName,
  regionSlug,
  localAngle,
  keywords,
  isHub = false,
}: SoftwareDevLandingContentProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Software Development Services",
    name: h1,
    description: heroLine,
    url: regionSlug
      ? `${SITE_URL}/software-development-services-${regionSlug}/`
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
          ? `${SITE_URL}/software-development-services-${regionSlug}/`
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
              <Link href="/services/software-development" className="hover:text-primary-600">
                Software Development
              </Link>
            ) : (
              <span className="text-neutral-700">Software Development</span>
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
              Whether you need a backend system, an internal tool, a legacy
              system modernized, or a full custom product built from
              scratch, we architect and build around your actual workflows —
              not around a reused boilerplate.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">
                Book a Free Software Strategy Consultation <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="secondary">
                Request a Free Code Audit
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
            title="Are you searching for a software development partner that actually understands business?"
            description="Most business owners aren't just looking for “code” — they're looking for reliable systems, clean architecture, and a team that doesn't disappear after launch."
          />
          <p className="mx-auto mt-8 max-w-3xl text-center text-neutral-600">
            That is exactly where JSK Corporation fits in. We combine solid
            architecture, disciplined delivery, and long-term support to
            build software that works like a real business system, not a
            fragile prototype.
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
              Most software doesn&apos;t fail because of the first release
            </span>
            <h2 className="mx-auto mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-white sm:text-4xl">
              It fails because there was no plan past launch day
            </h2>
            <p className="mx-auto mt-4 text-lg text-white/80">
              The system launched, but there was no automated testing. The
              code shipped, but no one documented how it worked. The product
              grew, but the architecture couldn&apos;t keep up. At
              JSK Corporation, we don&apos;t treat software as a one-time build —
              we architect it to be maintained, tested, and extended.
            </p>
          </div>
        </Container>
      </section>

      {/* Positioning */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our approach"
            title="Custom software development built around your business"
            description="No-code tools and generic templates can work for very simple internal needs. But when your business needs real reliability, integrations, and scale, a bolted-together system quickly becomes a liability."
          />
          <p className="mx-auto mt-8 max-w-3xl text-center text-neutral-600">
            JSK Corporation builds software with an architecture-first mindset —
            planned around your actual workflows and growth, not forced into
            a generic boilerplate. Clean code, automated testing, and
            documented systems, so your software keeps working as your
            business scales.
          </p>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-primary-50/60 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What we build"
            title="Software development services we provide"
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
            title="Languages, platforms & tools we work with"
            description="We choose the right stack based on your team's skills, performance needs, and long-term maintenance plan."
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
          <SectionHeading eyebrow="How we work" title="Our A-to-Z software development process" />
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
          <SectionHeading eyebrow="Built for you" title="What kind of software do you need?" />
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
                <Server className="h-4 w-4" /> Built for {regionName}
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
                Software development for {regionName} businesses
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
                <Search className="h-4 w-4" /> Free software & code audit
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--foreground)]">
                Not sure what your current software needs?
              </h2>
              <p className="mt-4 text-neutral-600">
                If your system is slow, hard to maintain, or you&apos;re not
                sure it can handle the next stage of growth, JSK Corporation can
                review it and show you what can be improved.
              </p>
              <div className="mt-8">
                <Button href="/contact">
                  Request a Free Code Audit <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6">
              <ul className="space-y-3">
                {[
                  "Architecture review",
                  "Code quality review",
                  "Security review",
                  "Performance review",
                  "Scalability review",
                  "Technical debt review",
                  "Integration review",
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
            <FileSearch className="mx-auto h-8 w-8 text-primary-600" />
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
              Your code should belong to you
            </h2>
            <p className="mt-4 text-neutral-600">
              We don&apos;t believe in holding clients hostage with confusing
              systems, hidden access, or unclear ownership. With JSK Corporation,
              you retain full ownership of your source code — clean,
              documented, and portable, with no vendor lock-in.
            </p>
          </div>
        </Container>
      </section>


      {!isHub && regionSlug && (
        <section className="pb-4">
          <Container>
            <p className="text-center text-sm text-neutral-500">
              Serving businesses across every state —{" "}
              <Link href="/software-development-services-usa" className="font-medium text-primary-600 hover:underline">
                view our nationwide software development overview
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
            ? `Ready to build custom software for your ${regionName} business?`
            : "Ready to build custom software for your business?"
        }
        description="JSK Corporation helps businesses build custom software, backend systems, and internal tools that run reliably, stay maintainable, and support real growth."
        primaryLabel="Book a Free Software Strategy Consultation"
        primaryHref="/contact"
        secondaryLabel="Request a Free Code Audit"
        secondaryHref="/contact"
      />
    </>
  );
}
