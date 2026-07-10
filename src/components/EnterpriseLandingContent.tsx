import Link from "next/link";
import {
  ArrowRight,
  Check,
  Users2,
  Boxes,
  LayoutDashboard,
  Workflow,
  Plug,
  Lock,
  Database,
  Warehouse,
  Network,
  LifeBuoy,
  Search,
  ClipboardList,
  ShieldCheck,
  Building2,
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
    icon: Users2,
    title: "Custom CRM Development",
    description:
      "Customer relationship systems built around your actual sales process, not a generic pipeline template.",
  },
  {
    icon: Boxes,
    title: "ERP Integration & Development",
    description:
      "Enterprise resource planning systems and integrations that connect finance, operations, and inventory.",
  },
  {
    icon: LayoutDashboard,
    title: "Internal Dashboards & Admin Tools",
    description:
      "Custom dashboards that give your team the visibility and controls they actually need, in one place.",
  },
  {
    icon: Workflow,
    title: "Workflow & Process Automation",
    description:
      "Automated approvals, notifications, and processes that remove manual steps from daily operations.",
  },
  {
    icon: Plug,
    title: "System Integrations",
    description:
      "Payment processors, data sources, and third-party APIs connected cleanly into your business systems.",
  },
  {
    icon: Lock,
    title: "Role-Based Access & Permissions",
    description:
      "Access controls structured around your org chart, so the right people see the right data and nothing else.",
  },
  {
    icon: Database,
    title: "Data Migration & Reporting",
    description:
      "Safe migration from legacy systems, paired with reporting that gives leadership real visibility.",
  },
  {
    icon: Warehouse,
    title: "Inventory & Operations Management",
    description:
      "Systems that track inventory, orders, and operations accurately across locations and teams.",
  },
  {
    icon: Network,
    title: "Multi-Location & Multi-Team Rollouts",
    description:
      "Structured rollouts that get systems adopted consistently across every location and department.",
  },
  {
    icon: LifeBuoy,
    title: "Enterprise Application Maintenance & Support",
    description:
      "Ongoing support and updates so business-critical systems keep running as your company evolves.",
  },
];

const techGroups = [
  {
    title: "CRM & ERP Platforms",
    items: "Salesforce, HubSpot, NetSuite, Odoo, or fully custom-built systems, chosen based on fit.",
  },
  {
    title: "Backend & APIs",
    items: "Node.js, Python, Java, .NET, REST and GraphQL APIs for custom business logic.",
  },
  {
    title: "Databases",
    items: "PostgreSQL, MySQL, SQL Server, data warehousing for reporting at scale.",
  },
  {
    title: "Workflow & Automation",
    items: "Zapier, n8n, custom workflow engines, and business rules automation.",
  },
  {
    title: "Access & Security",
    items: "Role-based access control (RBAC), SSO, audit logging, and compliance controls.",
  },
  {
    title: "Reporting & BI",
    items: "Power BI, Looker, custom reporting dashboards, and data visualization.",
  },
  {
    title: "Integrations",
    items: "Payment gateways, QuickBooks, Xero, and other third-party business system APIs.",
  },
  {
    title: "Cloud & Infrastructure",
    items: "AWS, Azure, GCP, scalable hosting built for multi-team, multi-location systems.",
  },
];

const processSteps = [
  { title: "Requirements Gathering & Stakeholder Discovery", description: "We talk to the people who'll actually use the system, not just the people buying it." },
  { title: "Process Mapping & Workflow Analysis", description: "Current workflows are mapped to find what should be automated, simplified, or removed." },
  { title: "Solution Design & System Architecture", description: "A system architecture is designed around your org structure and growth plans." },
  { title: "Data Modeling & Migration Planning", description: "Data models and a migration plan are built to move existing data safely and accurately." },
  { title: "Development & Integration", description: "The system is built and connected to the other tools your business already relies on." },
  { title: "Role & Permission Configuration", description: "Access controls are configured so each role sees exactly what it needs to." },
  { title: "Testing & User Acceptance Testing", description: "Real users test real workflows before the system goes live company-wide." },
  { title: "Rollout & Team Training", description: "A structured rollout and training plan gets teams using the system consistently." },
  { title: "Ongoing Support & Optimization", description: "We stay involved after launch, refining the system as your operations evolve." },
];

const whyUs = [
  { title: "We Think Beyond a Single Department", description: "Business systems touch sales, ops, and finance — we design with the whole organization in mind." },
  { title: "We Build Around Your Real Org Structure", description: "Roles, permissions, and workflows are modeled on how your company actually operates." },
  { title: "We Understand Systems and Operations", description: "A well-built system that doesn't match real operations still fails — we account for both." },
  { title: "We Keep Access Controls Clean & Auditable", description: "Role-based access is documented and structured, not a patchwork of manual exceptions." },
  { title: "We Support You Through Rollout & Beyond", description: "Adoption is often the hardest part — we stay involved through training and beyond." },
];

const useCases = [
  { icon: Building2, title: "For Growing Businesses", description: "Systems that replace spreadsheets and disconnected tools as your operations get more complex." },
  { icon: Network, title: "For Multi-Location Companies", description: "Unified systems that give consistent visibility and control across every location." },
  { icon: Users2, title: "For B2B Companies", description: "Custom CRMs and sales ops tools that fit your actual sales process, not a generic template." },
  { icon: Warehouse, title: "For Manufacturing & Operations", description: "ERP and inventory systems that track operations accurately at scale." },
  { icon: ClipboardList, title: "For Professional Services Firms", description: "Client and project management systems that keep teams and deadlines organized." },
  { icon: Building2, title: "For Enterprises", description: "Legacy system integration that connects existing tools without a disruptive rebuild." },
  { icon: RefreshCw, title: "For Existing Systems", description: "An audit and consolidation of disconnected tools into one coherent platform." },
];

const faqs = [
  { question: "Can JSK Corporation build a custom CRM or ERP from scratch?", answer: "Yes. We design and build custom CRM, ERP, and business application systems based on your actual sales process and operations." },
  { question: "Do you integrate with existing tools like Salesforce or QuickBooks?", answer: "Yes. We integrate with CRM, accounting, and other business tools your company already uses, rather than requiring a full replacement." },
  { question: "Can you build role-based access and permissions?", answer: "Yes. We structure access controls around your org chart so the right people see the right data and nothing else." },
  { question: "Do you handle data migration from our old systems?", answer: "Yes. We plan and execute data migrations carefully, so historical data moves accurately into the new system." },
  { question: "Can you automate manual workflows and approvals?", answer: "Yes. We build automated workflows and approval processes that remove manual steps from daily operations." },
  { question: "Do you build reporting and analytics dashboards?", answer: "Yes. We build custom dashboards and reporting so leadership gets real visibility into operations." },
  { question: "Can you support rollouts across multiple locations or teams?", answer: "Yes. We plan structured rollouts and training so systems get adopted consistently everywhere." },
  { question: "Will our data and systems belong to us?", answer: "Yes. You retain full ownership of your data and systems, with clean, documented handoff and no vendor lock-in." },
  { question: "Do you provide training for our team?", answer: "Yes. Rollout includes training so your team can use the new system confidently from day one." },
  { question: "How do you handle ongoing support after rollout?", answer: "We offer ongoing support and optimization, staying involved as your operations and team needs evolve." },
];

type EnterpriseLandingContentProps = {
  h1: string;
  heroLine: string;
  regionName?: string;
  regionSlug?: string;
  localAngle?: string;
  keywords?: string[];
  isHub?: boolean;
};

const SERVICE_SLUG = "business-applications-enterprise-solutions";

export default function EnterpriseLandingContent({
  h1,
  heroLine,
  regionName,
  regionSlug,
  localAngle,
  keywords,
  isHub = false,
}: EnterpriseLandingContentProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Business Applications & Enterprise Solutions",
    name: h1,
    description: heroLine,
    url: regionSlug
      ? `${SITE_URL}/business-applications-enterprise-solutions-${regionSlug}/`
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
          ? `${SITE_URL}/business-applications-enterprise-solutions-${regionSlug}/`
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
              <Link
                href="/services/business-applications-enterprise-solutions"
                className="hover:text-primary-600"
              >
                Business Applications & Enterprise Solutions
              </Link>
            ) : (
              <span className="text-neutral-700">Business Applications & Enterprise Solutions</span>
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
              Whether you need a custom CRM, an ERP integration, internal
              dashboards, or role-based access across multiple teams, we
              build around your actual org structure — not around a rigid,
              one-size-fits-all platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">
                Book a Free Business Systems Consultation <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="secondary">
                Request a Free Business Systems Audit
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
            title="Are you searching for an enterprise systems partner that actually understands business?"
            description="Most business owners aren't just looking for “software” — they're looking for fewer spreadsheets, fewer disconnected tools, and one system their whole team can actually trust."
          />
          <p className="mx-auto mt-8 max-w-3xl text-center text-neutral-600">
            That is exactly where JSK Corporation fits in. We combine process
            mapping, clean system architecture, and structured rollouts to
            build business applications that work like real operational
            infrastructure.
          </p>
        </Container>
      </section>

      {/* Problem */}
      <section className="relative isolate flex min-h-[380px] items-center overflow-hidden">
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src="/videos/team-huddle.mp4"
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
              Most business systems don&apos;t fail because of features
            </span>
            <h2 className="mx-auto mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-white sm:text-4xl">
              They fail because they didn&apos;t match how the team works
            </h2>
            <p className="mx-auto mt-4 text-lg text-white/80">
              The CRM launched, but the sales process didn&apos;t fit into
              its pipeline stages. The dashboard shipped, but no one trusted
              the numbers. The rollout happened, but teams quietly went back
              to spreadsheets. At JSK Corporation, we don&apos;t treat business
              systems as generic software — we build them around how your
              organization actually operates.
            </p>
          </div>
        </Container>
      </section>

      {/* Positioning */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our approach"
            title="Business applications built around your organization"
            description="Off-the-shelf CRMs and ERPs can work for very simple operations. But when your business needs real customization, integrations, and multi-team rollout, a rigid platform quickly becomes a constraint."
          />
          <p className="mx-auto mt-8 max-w-3xl text-center text-neutral-600">
            JSK Corporation builds business applications with a process-first
            mindset — planned around your actual org structure and
            workflows, not forced into a generic platform. Clean
            architecture, structured access, and honest reporting, so your
            systems keep working as your company scales.
          </p>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-primary-50/60 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What we build"
            title="Business applications & enterprise services we provide"
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
            title="Platforms & tools we work with"
            description="We choose the right platform or custom-built approach based on your team size, workflows, and growth plans."
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
          <SectionHeading eyebrow="How we work" title="Our A-to-Z enterprise systems process" />
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
          <SectionHeading eyebrow="Built for you" title="What kind of system do you need?" />
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
                <Network className="h-4 w-4" /> Built for {regionName}
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
                Business applications for {regionName} companies
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
                <Search className="h-4 w-4" /> Free business systems audit
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--foreground)]">
                Not sure what your current systems need?
              </h2>
              <p className="mt-4 text-neutral-600">
                If your team is juggling disconnected tools, your reporting
                feels unreliable, or you&apos;re not sure your systems can
                handle the next stage of growth, JSK Corporation can review it and
                show you what can be improved.
              </p>
              <div className="mt-8">
                <Button href="/contact">
                  Request a Free Business Systems Audit <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6">
              <ul className="space-y-3">
                {[
                  "Current tools and systems review",
                  "Workflow efficiency review",
                  "Data and reporting review",
                  "Access and security review",
                  "Integration gap review",
                  "Scalability review",
                  "Cost and tool consolidation review",
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
              Your business systems and data should belong to you
            </h2>
            <p className="mt-4 text-neutral-600">
              We don&apos;t believe in holding clients hostage with confusing
              systems, hidden access, or unclear ownership. With JSK Corporation,
              you retain full ownership of your data and systems — portable,
              documented, and built to be maintained and expanded over time,
              with no vendor lock-in.
            </p>
          </div>
        </Container>
      </section>


      {!isHub && regionSlug && (
        <section className="pb-4">
          <Container>
            <p className="text-center text-sm text-neutral-500">
              Serving businesses across every state —{" "}
              <Link
                href="/business-applications-enterprise-solutions-usa"
                className="font-medium text-primary-600 hover:underline"
              >
                view our nationwide business applications overview
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
            ? `Ready to build business systems for your ${regionName} company?`
            : "Ready to build business systems for your company?"
        }
        description="JSK Corporation helps businesses build CRMs, ERPs, and internal systems that run reliably, scale with your team, and support real growth."
        primaryLabel="Book a Free Business Systems Consultation"
        primaryHref="/contact"
        secondaryLabel="Request a Free Business Systems Audit"
        secondaryHref="/contact"
      />
    </>
  );
}
