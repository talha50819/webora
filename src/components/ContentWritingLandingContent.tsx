import Link from "next/link";
import {
  ArrowRight,
  Check,
  FileText,
  Newspaper,
  Search,
  Mail,
  BookOpen,
  FileCheck2,
  ShoppingBag,
  Feather,
  SpellCheck,
  BookText,
  Wrench,
  Rocket,
  ShieldCheck,
  Building2,
  ShoppingCart,
  GraduationCap,
  Users2,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/CTASection";
import { SITE_URL } from "@/lib/seo";
import { slugify } from "@/lib/slugify";

const subServices = [
  {
    icon: FileText,
    title: "Website & Landing Page Copy",
    description:
      "Clear, conversion-focused copy for homepages, service pages, and landing pages that explain your value fast.",
  },
  {
    icon: Newspaper,
    title: "Blog & Article Writing",
    description:
      "Well-researched blog posts and articles written to engage readers and support long-term organic growth.",
  },
  {
    icon: Search,
    title: "SEO Content Strategy & Keyword Research",
    description:
      "Content planned around real search intent and keyword opportunity, not just topics that sound good.",
  },
  {
    icon: Mail,
    title: "Email & Campaign Copy",
    description:
      "Email sequences and campaign copy written to be opened, read, and acted on.",
  },
  {
    icon: BookOpen,
    title: "Technical & Product Documentation",
    description:
      "Clear documentation and help content that makes complex products easier for users to understand.",
  },
  {
    icon: FileCheck2,
    title: "Case Studies & White Papers",
    description:
      "Structured, credible case studies and white papers that build authority with serious buyers.",
  },
  {
    icon: ShoppingBag,
    title: "Product Descriptions & E-Commerce Copy",
    description:
      "Product copy written to answer real buyer questions and support conversion, not just describe features.",
  },
  {
    icon: Feather,
    title: "Ghostwriting & Thought Leadership",
    description:
      "Articles and posts written in your voice to build authority and visibility for your business or leadership team.",
  },
  {
    icon: SpellCheck,
    title: "Editing & Proofreading",
    description:
      "A final editorial pass that catches errors, tightens language, and keeps tone consistent before publishing.",
  },
  {
    icon: BookText,
    title: "Content Style Guides & Brand Voice",
    description:
      "Documented voice and tone guidelines so content stays consistent across every writer and channel.",
  },
];

const techGroups = [
  {
    title: "Research & SEO",
    items: "Ahrefs, SEMrush, Google Search Console, keyword clustering, competitor content gap analysis.",
  },
  {
    title: "Writing & Editing",
    items: "Style guides, Grammarly, Hemingway Editor, editorial calendars, brand voice documentation.",
  },
  {
    title: "CMS & Publishing",
    items: "WordPress, Webflow, headless CMS, structured metadata, internal linking strategy.",
  },
  {
    title: "Documentation",
    items: "Technical writing tools, knowledge base platforms, structured product documentation.",
  },
  {
    title: "Email & Campaigns",
    items: "Klaviyo, Mailchimp, HubSpot copy formatting, subject line and open-rate testing.",
  },
  {
    title: "AI-Assisted Workflows",
    items: "AI drafting tools used responsibly, always paired with human editing and fact-checking.",
  },
  {
    title: "Analytics & Performance",
    items: "Google Analytics, content performance tracking, headline and CTA A/B testing.",
  },
  {
    title: "Collaboration & Delivery",
    items: "Google Docs, Notion, structured briefs, organized content calendars and handoff.",
  },
];

const processSteps = [
  { title: "Content Strategy & Keyword Research", description: "We identify what to write about based on real search intent and business goals, not guesswork." },
  { title: "Brief & Outline Development", description: "A clear brief and outline align on angle, audience, and structure before drafting starts." },
  { title: "Research & Source Gathering", description: "Claims and details are backed by real research, not filler or generic statements." },
  { title: "First Draft Writing", description: "A complete draft written to match your brand voice and the outline's structure." },
  { title: "SEO Optimization & On-Page Structure", description: "Headings, metadata, and internal links structured to support both readers and rankings." },
  { title: "Internal Review & Editing", description: "A first editorial pass catches gaps, tightens language, and checks accuracy." },
  { title: "Client Review & Revisions", description: "You review the draft and we revise based on your feedback before finalizing." },
  { title: "Final Proofreading", description: "A last pass for grammar, clarity, and consistency before anything goes live." },
  { title: "Publishing & Performance Tracking", description: "Content is published and tracked, with performance feeding future content decisions." },
];

const whyUs = [
  { title: "We Think Beyond Word Count", description: "A long page isn't automatically a good one. We focus on clarity, structure, and whether it actually helps the reader." },
  { title: "We Write Around Your Real Audience", description: "Content is written for the people who actually buy from you, not a generic reader persona." },
  { title: "We Understand Writing and SEO", description: "Good writing and search visibility aren't separate goals — every piece is built to support both." },
  { title: "We Keep Brand Voice Consistent", description: "Documented style guides mean your content sounds like you, no matter who's writing it." },
  { title: "We Support You With Ongoing Content", description: "Content needs are recurring — we stay available for new articles, campaigns, and updates." },
];

const useCases = [
  { icon: Building2, title: "For Small Businesses", description: "Clear website and service page copy that builds trust and explains what you actually do." },
  { icon: ShoppingCart, title: "For E-Commerce Brands", description: "Product descriptions and category copy written to answer buyer questions and drive conversion." },
  { icon: Users2, title: "For B2B Companies", description: "Technical content and thought leadership that builds credibility with serious, research-driven buyers." },
  { icon: Rocket, title: "For Startups", description: "Website launch copy that explains a new product clearly to a first-time audience." },
  { icon: BookOpen, title: "For SaaS Companies", description: "Documentation and help content that reduces support tickets and improves onboarding." },
  { icon: GraduationCap, title: "For Agencies", description: "White-label writing support for agencies that need reliable, on-brand content delivery." },
  { icon: FileCheck2, title: "For Existing Content", description: "An audit, rewrite, or refresh of existing pages and articles that aren't performing." },
];

const faqs = [
  { question: "Can JSK Corporation write website copy from scratch?", answer: "Yes. We can write full website copy — home, service, and landing pages — based on your business, audience, and goals." },
  { question: "Do you provide SEO-optimized blog and article writing?", answer: "Yes. We research keywords and search intent before writing, so content is built to rank as well as read well." },
  { question: "Can you write email and campaign copy?", answer: "Yes. We write email sequences and campaign copy designed to be opened, read, and acted on." },
  { question: "Do you write technical and product documentation?", answer: "Yes. We write clear documentation and help content that makes complex products easier for users to understand." },
  { question: "Can you write case studies and white papers?", answer: "Yes. We structure and write case studies and white papers that build credibility with serious buyers." },
  { question: "Will the content match our brand voice?", answer: "Yes. We develop or follow a documented style guide so content sounds consistently like your brand." },
  { question: "Do you do keyword research before writing?", answer: "Yes. Content strategy and keyword research come first, so writing is built around real search demand." },
  { question: "Can you edit or rewrite our existing content?", answer: "Yes. We audit existing pages and articles, then edit or rewrite what isn't performing or reading well." },
  { question: "Do you use AI tools when writing?", answer: "We may use AI-assisted drafting tools responsibly, but every piece is human-edited, fact-checked, and reviewed before delivery." },
  { question: "Will I own the rights to the content?", answer: "Yes. You receive full rights and editable source documents — the content belongs to you, not to us." },
];

type ContentWritingLandingContentProps = {
  h1: string;
  heroLine: string;
  regionName?: string;
  regionSlug?: string;
  localAngle?: string;
  keywords?: string[];
  isHub?: boolean;
};

const SERVICE_SLUG = "content-writing";

export default function ContentWritingLandingContent({
  h1,
  heroLine,
  regionName,
  regionSlug,
  localAngle,
  keywords,
  isHub = false,
}: ContentWritingLandingContentProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Content Writing Services",
    name: h1,
    description: heroLine,
    url: regionSlug
      ? `${SITE_URL}/content-writing-services-${regionSlug}/`
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
          ? `${SITE_URL}/content-writing-services-${regionSlug}/`
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
              <Link href="/services/content-writing" className="hover:text-primary-600">
                Content Writing
              </Link>
            ) : (
              <span className="text-neutral-700">Content Writing</span>
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
              Whether you need website copy, SEO-focused blog content, email
              campaigns, or technical documentation, we write around your
              actual audience and keyword opportunity — not around a generic
              word-count target.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">
                Book a Free Content Strategy Consultation <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="secondary">
                Request a Free Content Writing Audit
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
            title="Are you searching for a content writing partner that actually understands business?"
            description="Most business owners aren't just looking for “more words” — they're looking for clear copy that ranks, converts, and doesn't sound like everyone else's website."
          />
          <p className="mx-auto mt-8 max-w-3xl text-center text-neutral-600">
            That is exactly where JSK Corporation fits in. We combine keyword
            research, clear writing, and editorial rigor to produce content
            that reads well and works like a real business asset.
          </p>
        </Container>
      </section>

      {/* Problem */}
      <section className="relative isolate flex min-h-[380px] items-center overflow-hidden">
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src="/videos/focus-work.mp4"
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
              Most content doesn&apos;t fail because of the writing
            </span>
            <h2 className="mx-auto mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-white sm:text-4xl">
              It fails because there was no strategy behind the words
            </h2>
            <p className="mx-auto mt-4 text-lg text-white/80">
              The page read fine, but it targeted no real keyword. The blog
              published, but no one checked if it matched search intent. The
              copy sounded generic because there was no documented brand
              voice to follow. At JSK Corporation, we don&apos;t treat writing as
              filler — we build it around real research and strategy.
            </p>
          </div>
        </Container>
      </section>

      {/* Positioning */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our approach"
            title="Content writing built around your business"
            description="AI-generated filler and generic templates can work for very simple pages. But when your business needs real authority, rankings, and a consistent voice, generic content quickly becomes forgettable."
          />
          <p className="mx-auto mt-8 max-w-3xl text-center text-neutral-600">
            JSK Corporation writes content with a strategy-first mindset — planned
            around your actual audience and keyword opportunity, not forced
            into a generic template. Researched claims, documented brand
            voice, and SEO structure, so your content keeps working long
            after it&apos;s published.
          </p>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-primary-50/60 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What we write"
            title="Content writing services we provide"
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
            title="Tools & practices we work with"
            description="We choose the right research, editing, and publishing tools based on your content goals and platform."
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
          <SectionHeading eyebrow="How we work" title="Our A-to-Z content writing process" />
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
          <SectionHeading eyebrow="Built for you" title="What kind of content do you need?" />
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
                Content writing for {regionName} businesses
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
                <Search className="h-4 w-4" /> Free content writing audit
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--foreground)]">
                Not sure what your current content needs?
              </h2>
              <p className="mt-4 text-neutral-600">
                If your website copy feels thin, your blog isn&apos;t
                ranking, or your tone feels inconsistent, JSK Corporation can
                review it and show you what can be improved.
              </p>
              <div className="mt-8">
                <Button href="/contact">
                  Request a Free Content Writing Audit <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6">
              <ul className="space-y-3">
                {[
                  "Website copy review",
                  "Blog and SEO content review",
                  "Brand voice consistency review",
                  "Keyword and ranking opportunity review",
                  "Competitor content review",
                  "Email copy review",
                  "Documentation review",
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
            <BookText className="mx-auto h-8 w-8 text-primary-600" />
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
              Your content should belong to you
            </h2>
            <p className="mt-4 text-neutral-600">
              We don&apos;t believe in holding clients hostage with confusing
              systems, hidden access, or unclear ownership. With JSK Corporation,
              you receive full rights and editable source documents for every
              piece — content that can be maintained, reused, and expanded
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
              <Link href="/content-writing-services-usa" className="font-medium text-primary-600 hover:underline">
                view our nationwide content writing overview
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
            ? `Ready to write content for your ${regionName} business?`
            : "Ready to write content for your business?"
        }
        description="JSK Corporation helps businesses write website copy, blog content, and documentation that reads clearly, ranks on purpose, and supports real growth."
        primaryLabel="Book a Free Content Strategy Consultation"
        primaryHref="/contact"
        secondaryLabel="Request a Free Content Writing Audit"
        secondaryHref="/contact"
      />
    </>
  );
}
