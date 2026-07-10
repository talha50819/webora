import Link from "next/link";
import {
  ArrowRight,
  Check,
  Search,
  PenTool,
  Palette,
  Boxes,
  ClipboardCheck,
  Eye,
  Smartphone,
  Monitor,
  Code2,
  RefreshCw,
  ClipboardList,
  Wrench,
  Rocket,
  ShieldCheck,
  Building2,
  ShoppingCart,
  GraduationCap,
  Users2,
  Handshake,
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
    title: "User Research & Journey Mapping",
    description:
      "Interviews, surveys, and journey mapping that uncover what users actually need before a single screen gets designed.",
  },
  {
    icon: PenTool,
    title: "Wireframing & Prototyping",
    description:
      "Low-fidelity wireframes and interactive prototypes that validate structure and flow before visual design begins.",
  },
  {
    icon: Palette,
    title: "UI Design in Figma",
    description:
      "Clean, modern, on-brand visual design — every screen built to be both attractive and genuinely easy to use.",
  },
  {
    icon: Boxes,
    title: "Design Systems & Component Libraries",
    description:
      "Reusable components, design tokens, and style guides that keep your product consistent as it scales.",
  },
  {
    icon: ClipboardCheck,
    title: "Usability Testing",
    description:
      "Real users testing real flows — so decisions are based on observed behavior, not assumptions.",
  },
  {
    icon: Eye,
    title: "Accessibility (WCAG) Reviews",
    description:
      "Color contrast, keyboard navigation, and screen-reader compatibility reviewed against WCAG guidelines.",
  },
  {
    icon: Smartphone,
    title: "Mobile App UI/UX Design",
    description:
      "Touch-first navigation, onboarding flows, and layouts designed specifically for how people use apps.",
  },
  {
    icon: Monitor,
    title: "Web & SaaS Product Design",
    description:
      "Dashboards, portals, and complex product interfaces designed to make advanced features feel simple.",
  },
  {
    icon: Code2,
    title: "Design-to-Development Handoff",
    description:
      "Structured specs, redlines, and Figma Dev Mode handoff so engineering builds exactly what was designed.",
  },
  {
    icon: RefreshCw,
    title: "UX Audits & Redesigns",
    description:
      "If your current product feels confusing, dated, or hard to use, we audit it and redesign what's holding it back.",
  },
];

const techGroups = [
  {
    title: "Design & Prototyping",
    items: "Figma, Adobe XD, Sketch, Photoshop, Illustrator, Framer, InVision, interactive prototypes.",
  },
  {
    title: "Research & Testing",
    items: "User interviews, surveys, usability testing, A/B testing, card sorting, session recordings.",
  },
  {
    title: "Design Systems",
    items: "Component libraries, design tokens, Storybook, style guides, documented UI patterns.",
  },
  {
    title: "Handoff & Collaboration",
    items: "Figma Dev Mode, Zeplin, redlines, structured specs, developer handoff documentation.",
  },
  {
    title: "Accessibility",
    items: "WCAG 2.1/2.2 compliance, color contrast checks, keyboard navigation, screen reader testing.",
  },
  {
    title: "Front-End Awareness",
    items: "HTML, CSS, React, and Tailwind familiarity — so designs are realistic and buildable, not just pretty.",
  },
  {
    title: "Analytics & Insight",
    items: "Google Analytics, Mixpanel, Hotjar, FullStory, heatmaps, and session-based behavior analysis.",
  },
  {
    title: "Delivery & Version Control",
    items: "Organized Figma files, version history, component libraries, and structured design documentation.",
  },
];

const processSteps = [
  { title: "Discovery & UX Research", description: "We understand your users, business goals, competitors, and the problems the interface actually needs to solve." },
  { title: "User Journey Mapping", description: "We map how users move through your product, where they hesitate, and what should happen next." },
  { title: "Wireframing", description: "Low-fidelity flows that validate structure and logic fast, before visual design begins." },
  { title: "Visual Design in Figma", description: "High-fidelity, on-brand UI design built on top of a validated structure." },
  { title: "Design System & Components", description: "Reusable components and style guides so the product stays consistent as it grows." },
  { title: "Interactive Prototyping", description: "Clickable prototypes that let stakeholders and users experience the flow before it's built." },
  { title: "Usability Testing", description: "Real users testing real flows, with findings folded back into the design." },
  { title: "Accessibility Review", description: "WCAG-aligned checks for contrast, navigation, and screen-reader compatibility." },
  { title: "Developer Handoff & Launch Support", description: "Structured specs and Dev Mode handoff, plus support through implementation and launch." },
];

const whyUs = [
  { title: "We Think Beyond Visuals", description: "A beautiful screen is important, but it isn't enough. We think about flow, comprehension, accessibility, and conversion." },
  { title: "We Design Around Real Users", description: "Decisions are based on research and testing, not assumptions about what looks good." },
  { title: "We Understand Design and Development", description: "Designs are built to be realistic and buildable, not just visually appealing in a static file." },
  { title: "We Keep Design Systems Clean", description: "Organized components and documented patterns make your product easier to extend over time." },
  { title: "We Support You After Handoff", description: "Design doesn't stop at delivery — we stay involved through implementation and iteration." },
];

const useCases = [
  { icon: Building2, title: "For Small Businesses", description: "A clear, professional interface that builds trust and makes it easy for customers to take action." },
  { icon: Handshake, title: "For Service-Based Companies", description: "Interfaces with strong information architecture, clear CTAs, and a smoother booking or inquiry flow." },
  { icon: ShoppingCart, title: "For E-Commerce Brands", description: "Product and checkout flows designed to reduce friction and increase completed purchases." },
  { icon: Rocket, title: "For Startups & SaaS", description: "MVP-ready UX that validates your product fast and scales into a full design system later." },
  { icon: Users2, title: "For B2B Companies", description: "Dashboards and portals that make complex data and workflows genuinely easy to use." },
  { icon: GraduationCap, title: "For Agencies", description: "White-label UX and UI design support for agencies that need reliable research-backed design." },
  { icon: RefreshCw, title: "For Existing Products", description: "A UX audit, redesign, or design system cleanup when your current product is hard to use or maintain." },
];

const faqs = [
  { question: "Can JSK Corporation design a product from scratch?", answer: "Yes. We can research, wireframe, design, prototype, and test a full product experience from scratch based on your users and business goals." },
  { question: "Do you do user research before designing?", answer: "Yes. We start with research and journey mapping so design decisions are based on how users actually behave, not assumptions." },
  { question: "Can you convert my idea into wireframes and prototypes?", answer: "Yes. We turn early ideas into low-fidelity wireframes and interactive prototypes you can validate before committing to development." },
  { question: "Do you build design systems?", answer: "Yes. We build component libraries, design tokens, and style guides so your product stays visually and functionally consistent as it grows." },
  { question: "Can you redesign my existing app or website?", answer: "Yes. If your current product feels confusing, dated, or hard to use, we audit it and redesign the parts holding it back." },
  { question: "Do you test designs with real users?", answer: "Yes. We run usability testing sessions and fold the findings directly back into the design before development starts." },
  { question: "Will my design be accessible (WCAG)?", answer: "Yes. We review contrast, keyboard navigation, and screen-reader compatibility against WCAG guidelines as part of the design process." },
  { question: "Can you hand off designs directly to developers?", answer: "Yes. We provide structured specs, redlines, and Figma Dev Mode handoff so engineering can build exactly what was designed." },
  { question: "Do you design both web and mobile products?", answer: "Yes. We design responsive web products, native mobile app interfaces, and cross-platform experiences." },
  { question: "How do I know if I need a full redesign or just improvements?", answer: "You don't need to decide alone — a UX audit will show whether targeted fixes are enough or a broader redesign makes more sense." },
];

type UiUxLandingContentProps = {
  h1: string;
  heroLine: string;
  regionName?: string;
  regionSlug?: string;
  localAngle?: string;
  keywords?: string[];
  isHub?: boolean;
};

const SERVICE_SLUG = "ui-ux-design";

export default function UiUxLandingContent({
  h1,
  heroLine,
  regionName,
  regionSlug,
  localAngle,
  keywords,
  isHub = false,
}: UiUxLandingContentProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "UI/UX Design Services",
    name: h1,
    description: heroLine,
    url: regionSlug
      ? `${SITE_URL}/ui-ux-design-services-${regionSlug}/`
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
          ? `${SITE_URL}/ui-ux-design-services-${regionSlug}/`
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
              <Link href="/services/ui-ux-design" className="hover:text-primary-600">
                UI/UX Design
              </Link>
            ) : (
              <span className="text-neutral-700">UI/UX Design</span>
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
              Whether you need user research, wireframes, a full visual
              design system, or a usability audit of what already exists, we
              design around how people actually use your product — not
              around a reused template.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">
                Book a Free UX Strategy Consultation <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="secondary">
                Request a Free UX Audit
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
            title="Are you searching for a UI/UX design partner that actually understands business?"
            description="Most teams aren't just looking for “a nicer interface” — they're looking for a product that's easier to use, converts more visitors, and doesn't confuse new users on day one."
          />
          <p className="mx-auto mt-8 max-w-3xl text-center text-neutral-600">
            That is exactly where JSK Corporation fits in. We combine user
            research, clean visual design, accessible interfaces, and
            developer-ready handoff to design products that feel intuitive
            and work like real business systems.
          </p>
        </Container>
      </section>

      {/* Problem */}
      <section className="relative isolate flex min-h-[380px] items-center overflow-hidden">
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src="/videos/design-work.mp4"
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
              Most products don&apos;t fail because of visuals
            </span>
            <h2 className="mx-auto mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-white sm:text-4xl">
              They fail because there was no research behind the design
            </h2>
            <p className="mx-auto mt-4 text-lg text-white/80">
              The screens looked polished, but users couldn&apos;t find the
              action they needed. The flow launched, but new users dropped
              off in onboarding. The design shipped, but no one tested it
              with real people first. At JSK Corporation, we don&apos;t treat
              design as decoration — we look at your users, workflows, and
              goals, then design around that.
            </p>
          </div>
        </Container>
      </section>

      {/* Positioning */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our approach"
            title="UI/UX design built around your actual users"
            description="Generic UI kits can work for very simple screens. But when your product needs real usability, accessibility, or a design system that scales, a template quickly becomes a limitation."
          />
          <p className="mx-auto mt-8 max-w-3xl text-center text-neutral-600">
            JSK Corporation designs with a research-first mindset — planned around
            your actual users and workflows, not forced into a generic kit.
            Clean visuals, validated structure, accessible interaction
            patterns, and documented design systems, so your product can grow
            without the UX falling apart.
          </p>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-primary-50/60 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What we design"
            title="UI/UX design services we provide"
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
            title="Tools, methods & practices we work with"
            description="We choose the right research methods, tools, and design systems based on your product, users, and long-term roadmap."
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
          <SectionHeading eyebrow="How we work" title="Our A-to-Z UI/UX design process" />
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
          <SectionHeading eyebrow="Built for you" title="What kind of design do you need?" />
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
                <Wrench className="h-4 w-4" /> Built for {regionName}
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
                UI/UX design for {regionName} businesses
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
                <Search className="h-4 w-4" /> Free UX audit
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--foreground)]">
                Not sure what your current product needs?
              </h2>
              <p className="mt-4 text-neutral-600">
                If your product is confusing, outdated, hard to navigate, or
                losing users during onboarding, JSK Corporation can review it and
                show you what can be improved.
              </p>
              <div className="mt-8">
                <Button href="/contact">
                  Request a Free UX Audit <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6">
              <ul className="space-y-3">
                {[
                  "Usability and flow review",
                  "Accessibility (WCAG) review",
                  "Conversion flow review",
                  "Visual design review",
                  "Mobile experience review",
                  "Design system review",
                  "Information architecture review",
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
              Your design files should belong to you
            </h2>
            <p className="mt-4 text-neutral-600">
              We don&apos;t believe in holding clients hostage with confusing
              systems, hidden access, or unclear ownership. With JSK Corporation,
              your designs are built with transparency and long-term control
              in mind — full Figma file ownership, organized components, and
              a design system that can be maintained, improved, and expanded
              over time.
            </p>
          </div>
        </Container>
      </section>


      {!isHub && regionSlug && (
        <section className="pb-4">
          <Container>
            <p className="text-center text-sm text-neutral-500">
              Serving businesses across every state —{" "}
              <Link href="/ui-ux-design-services-usa" className="font-medium text-primary-600 hover:underline">
                view our nationwide UI/UX design overview
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
            ? `Ready to design a better product for your ${regionName} business?`
            : "Ready to design a better product for your business?"
        }
        description="JSK Corporation helps businesses design research-driven interfaces, design systems, and product experiences that look professional, work intuitively, and support real growth."
        primaryLabel="Book a Free UX Strategy Consultation"
        primaryHref="/contact"
        secondaryLabel="Request a Free UX Audit"
        secondaryHref="/contact"
      />
    </>
  );
}
