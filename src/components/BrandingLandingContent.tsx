import Link from "next/link";
import {
  ArrowRight,
  Check,
  Palette,
  Compass,
  BookOpen,
  FileText,
  Package,
  Share2,
  Presentation,
  Globe,
  RefreshCw,
  LifeBuoy,
  Search,
  ClipboardList,
  Wrench,
  Rocket,
  ShieldCheck,
  Building2,
  ShoppingCart,
  Users2,
  HandHeart,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/CTASection";
import { SITE_URL } from "@/lib/seo";
import { slugify } from "@/lib/slugify";

const subServices = [
  {
    icon: Palette,
    title: "Logo & Visual Identity Design",
    description:
      "A distinct logo and visual identity built to be recognizable, flexible across formats, and true to your brand.",
  },
  {
    icon: Compass,
    title: "Brand Strategy & Positioning",
    description:
      "Clarity on who you are, who you're for, and how you're different — before a single visual gets designed.",
  },
  {
    icon: BookOpen,
    title: "Brand Guidelines & Style Guides",
    description:
      "Documented rules for logo usage, color, typography, and tone so your brand stays consistent across every team and vendor.",
  },
  {
    icon: FileText,
    title: "Marketing & Sales Collateral",
    description:
      "Brochures, sales sheets, business cards, and other materials designed to match your brand and support real sales conversations.",
  },
  {
    icon: Package,
    title: "Packaging & Print Design",
    description:
      "Packaging and print-ready design that stands out on a shelf or in a box, with production specs handled correctly.",
  },
  {
    icon: Share2,
    title: "Social Media Design Kits",
    description:
      "Templates and assets that keep your social presence consistent, on-brand, and easy for your team to maintain.",
  },
  {
    icon: Presentation,
    title: "Presentation & Pitch Deck Design",
    description:
      "Pitch decks and presentations designed to look credible and communicate your message clearly to investors or clients.",
  },
  {
    icon: Globe,
    title: "Website & Digital Brand Assets",
    description:
      "Digital-ready brand assets — icons, banners, email headers — built to translate cleanly onto your website and campaigns.",
  },
  {
    icon: RefreshCw,
    title: "Brand Refresh & Rebranding",
    description:
      "If your current brand feels dated or inconsistent, we refresh or rebuild it while preserving the recognition you've already earned.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Design Support & Retainers",
    description:
      "Continued design support for new campaigns, collateral, and assets as your brand and marketing needs evolve.",
  },
];

const techGroups = [
  {
    title: "Design & Illustration",
    items: "Adobe Illustrator, Photoshop, InDesign, Figma, custom illustration and iconography.",
  },
  {
    title: "Brand Strategy",
    items: "Positioning workshops, competitor audits, moodboards, brand voice and messaging guidelines.",
  },
  {
    title: "Identity Systems",
    items: "Logo systems, color palettes, typography systems, iconography, brand pattern libraries.",
  },
  {
    title: "Print & Packaging",
    items: "Packaging design, print-ready files, die-lines, large-format print specs, production coordination.",
  },
  {
    title: "Digital & Social",
    items: "Social media templates, ad creatives, email banners, digital brand kits for ongoing use.",
  },
  {
    title: "Collateral & Presentations",
    items: "Pitch decks, sales sheets, brochures, business cards, signage, and event materials.",
  },
  {
    title: "Guidelines & Delivery",
    items: "Documented brand guidelines, organized asset libraries, usage rules, and structured file handoff.",
  },
  {
    title: "Motion & Animation",
    items: "Logo animation and lightweight motion branding for video intros and digital placements.",
  },
];

const processSteps = [
  { title: "Brand Discovery & Positioning", description: "We clarify your audience, positioning, and tone before any visual work starts." },
  { title: "Competitor & Market Audit", description: "We review how competitors present themselves so your brand stands apart, not blends in." },
  { title: "Concept Exploration & Moodboards", description: "Multiple visual directions explored early, so we find the right direction before refining it." },
  { title: "Logo & Visual Identity Design", description: "The core mark and identity elements designed and refined into a final, flexible system." },
  { title: "Color, Typography & Iconography", description: "A complete visual system — palette, type, and supporting elements — built to work everywhere." },
  { title: "Brand Guidelines Documentation", description: "Clear, documented rules so your brand stays consistent no matter who's using the assets." },
  { title: "Marketing Collateral Design", description: "Sales sheets, social templates, and campaign assets built on top of the finished identity." },
  { title: "Packaging & Print Design", description: "Print-ready packaging and materials with production specs handled correctly, when needed." },
  { title: "Delivery & Ongoing Brand Support", description: "Full asset delivery, plus support for new collateral and campaigns as your brand grows." },
];

const whyUs = [
  { title: "We Think Beyond a Logo", description: "A mark is just one piece. We think about positioning, consistency, and how the brand shows up everywhere." },
  { title: "We Build Around Your Real Positioning", description: "Your brand should reflect who you actually are and who you're for — not a trend pulled from a mood board." },
  { title: "We Design Systems, Not One-Off Assets", description: "Every asset is built on a documented system, so new materials stay consistent without starting from scratch." },
  { title: "We Keep Brand Files Organized", description: "Clean source files, organized libraries, and clear guidelines make your brand easier to use and extend." },
  { title: "We Support You After Delivery", description: "Brands evolve — we stay available for new collateral, campaigns, and refinements as you grow." },
];

const useCases = [
  { icon: Building2, title: "For Small Businesses", description: "A professional identity that builds trust and makes your business look established from day one." },
  { icon: Rocket, title: "For Startups", description: "A brand-from-scratch package that gives you a credible identity fast, ready to scale as you grow." },
  { icon: ShoppingCart, title: "For E-Commerce Brands", description: "Packaging, product photography styling, and digital assets designed to drive recognition and repeat purchases." },
  { icon: Users2, title: "For B2B Companies", description: "Professional collateral and presentation materials that help complex offerings earn buyer trust." },
  { icon: HandHeart, title: "For Nonprofits", description: "A clear, trustworthy identity that supports fundraising, outreach, and community recognition." },
  { icon: Building2, title: "For Agencies", description: "White-label design support for agencies that need reliable branding and collateral delivery." },
  { icon: RefreshCw, title: "For Existing Brands", description: "A refresh or full rebrand when your current identity no longer represents where your business is now." },
];

const faqs = [
  { question: "Can JSK Corporation build a brand identity from scratch?", answer: "Yes. We can develop positioning, logo, visual identity, and guidelines from scratch based on your business, audience, and goals." },
  { question: "Do you handle brand strategy, not just visuals?", answer: "Yes. Every identity project starts with positioning and audience clarity — visuals are built on top of that foundation, not instead of it." },
  { question: "Can you design a full logo system with variations?", answer: "Yes. We design primary marks, secondary marks, icon versions, and usage variations so your logo works across every context." },
  { question: "Do you provide brand guidelines documents?", answer: "Yes. Every identity project includes documented guidelines covering logo usage, color, typography, and tone." },
  { question: "Can you design packaging for physical products?", answer: "Yes. We design packaging with correct production specs, die-lines, and print-ready files for manufacturing." },
  { question: "Do you design marketing collateral and sales materials?", answer: "Yes. We design brochures, sales sheets, business cards, presentations, and other materials built on your brand system." },
  { question: "Can you refresh or rebrand an existing business?", answer: "Yes. We can refresh a dated identity or lead a full rebrand while preserving the recognition you've already built." },
  { question: "Do you design social media templates and digital assets?", answer: "Yes. We build social media kits, ad creatives, and digital brand assets that keep your presence consistent." },
  { question: "Will I receive editable source files?", answer: "Yes. You receive full source files and an organized asset library — your brand belongs to you, not to us." },
  { question: "Do you offer ongoing design support after the initial project?", answer: "Yes. Many clients keep us on for ongoing collateral, campaign assets, and design support as needs come up." },
];

type BrandingLandingContentProps = {
  h1: string;
  heroLine: string;
  regionName?: string;
  regionSlug?: string;
  localAngle?: string;
  keywords?: string[];
  isHub?: boolean;
};

const SERVICE_SLUG = "graphic-design-branding";

export default function BrandingLandingContent({
  h1,
  heroLine,
  regionName,
  regionSlug,
  localAngle,
  keywords,
  isHub = false,
}: BrandingLandingContentProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Graphic Design & Branding Services",
    name: h1,
    description: heroLine,
    url: regionSlug
      ? `${SITE_URL}/graphic-design-branding-services-${regionSlug}/`
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
          ? `${SITE_URL}/graphic-design-branding-services-${regionSlug}/`
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
              <Link href="/services/graphic-design-branding" className="hover:text-primary-600">
                Graphic Design & Branding
              </Link>
            ) : (
              <span className="text-neutral-700">Graphic Design & Branding</span>
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
              Whether you need a logo and visual identity, brand guidelines,
              packaging, marketing collateral, or a full rebrand, we design
              around your positioning and audience — not around a trend
              pulled from a template library.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">
                Book a Free Brand Strategy Consultation <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="secondary">
                Request a Free Brand Audit
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
            title="Are you searching for a branding partner that actually understands business?"
            description="Most business owners aren't just looking for “a nicer logo” — they're looking for a brand that looks credible, stays consistent everywhere, and doesn't need to be redone in two years."
          />
          <p className="mx-auto mt-8 max-w-3xl text-center text-neutral-600">
            That is exactly where JSK Corporation fits in. We combine brand
            strategy, distinct visual design, documented systems, and
            practical collateral to build brands that feel intentional and
            work like real business assets.
          </p>
        </Container>
      </section>

      {/* Problem */}
      <section className="relative isolate flex min-h-[380px] items-center overflow-hidden">
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src="/videos/portfolio-branding.mp4"
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
              Most brands don&apos;t fail because of the logo
            </span>
            <h2 className="mx-auto mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-white sm:text-4xl">
              They fail because there was no system behind it
            </h2>
            <p className="mx-auto mt-4 text-lg text-white/80">
              The logo looked fine, but every team member used it
              differently. The colors and fonts changed from one piece of
              collateral to the next. The brand launched, but no one had
              guidelines to keep it consistent. At JSK Corporation, we don&apos;t
              treat branding as a one-off design task — we build a system
              your business can actually use.
            </p>
          </div>
        </Container>
      </section>

      {/* Positioning */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our approach"
            title="Graphic design & branding built around your business"
            description="Logo generators and templates can work for a very simple placeholder. But when your business needs real recognition, consistency, and a system that scales, a generic template quickly becomes a limitation."
          />
          <p className="mx-auto mt-8 max-w-3xl text-center text-neutral-600">
            JSK Corporation builds brand identities with a strategy-first mindset —
            planned around your actual positioning and audience, not forced
            into a trend. Distinct visuals, documented systems, and practical
            collateral, so your brand can grow without losing consistency.
          </p>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-primary-50/60 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What we design"
            title="Graphic design & branding services we provide"
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

      {/* Tech / disciplines */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Under the hood"
            title="Disciplines & deliverables we work with"
            description="We choose the right mix of strategy, design, and production based on your brand, budget, and where it needs to show up."
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
          <SectionHeading eyebrow="How we work" title="Our A-to-Z branding process" />
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
          <SectionHeading eyebrow="Built for you" title="What kind of brand do you need?" />
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
                Branding for {regionName} businesses
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
                <Search className="h-4 w-4" /> Free brand audit
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--foreground)]">
                Not sure what your current brand needs?
              </h2>
              <p className="mt-4 text-neutral-600">
                If your brand feels outdated, inconsistent, or doesn&apos;t
                match where your business is today, JSK Corporation can review it
                and show you what can be improved.
              </p>
              <div className="mt-8">
                <Button href="/contact">
                  Request a Free Brand Audit <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6">
              <ul className="space-y-3">
                {[
                  "Logo and identity review",
                  "Consistency-across-channels review",
                  "Competitor positioning review",
                  "Collateral and print review",
                  "Social media presence review",
                  "Packaging review (if applicable)",
                  "Guidelines and documentation review",
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
              Your brand assets should belong to you
            </h2>
            <p className="mt-4 text-neutral-600">
              We don&apos;t believe in holding clients hostage with confusing
              systems, hidden access, or unclear ownership. With JSK Corporation,
              your brand is built with transparency and long-term control in
              mind — full source files, organized asset libraries, and a
              system that can be maintained, improved, and expanded over
              time.
            </p>
          </div>
        </Container>
      </section>


      {!isHub && regionSlug && (
        <section className="pb-4">
          <Container>
            <p className="text-center text-sm text-neutral-500">
              Serving businesses across every state —{" "}
              <Link href="/graphic-design-branding-services-usa" className="font-medium text-primary-600 hover:underline">
                view our nationwide branding overview
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
            ? `Ready to build a brand for your ${regionName} business?`
            : "Ready to build a brand for your business?"
        }
        description="JSK Corporation helps businesses build brand identities, guidelines, and marketing collateral that look professional, stay consistent, and support real growth."
        primaryLabel="Book a Free Brand Strategy Consultation"
        primaryHref="/contact"
        secondaryLabel="Request a Free Brand Audit"
        secondaryHref="/contact"
      />
    </>
  );
}
