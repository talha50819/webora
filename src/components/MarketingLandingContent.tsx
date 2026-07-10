import Link from "next/link";
import {
  ArrowRight,
  Check,
  Search,
  Target,
  Share2,
  Mail,
  Megaphone,
  TrendingUp,
  FileText,
  BarChart3,
  MapPin,
  ClipboardList,
  Wrench,
  Rocket,
  ShieldCheck,
  Building2,
  ShoppingCart,
  GraduationCap,
  Users2,
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
    title: "SEO Strategy & Technical Audits",
    description:
      "Keyword strategy, on-page structure, and technical fixes that build sustainable organic visibility, not short-term tricks.",
  },
  {
    icon: Target,
    title: "Paid Search Advertising",
    description:
      "Google Ads campaigns built around intent and conversion tracking, so ad spend goes toward leads, not just clicks.",
  },
  {
    icon: Share2,
    title: "Paid Social Advertising",
    description:
      "Meta, LinkedIn, and TikTok campaigns targeted to the audiences most likely to convert for your business.",
  },
  {
    icon: Mail,
    title: "Email Marketing & Automation",
    description:
      "Lifecycle emails, campaigns, and automated flows that keep leads warm and turn customers into repeat buyers.",
  },
  {
    icon: Megaphone,
    title: "Social Media Management",
    description:
      "Content calendars, scheduling, and community management that keep your brand active and consistent.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Rate Optimization",
    description:
      "Landing page and funnel testing that turns more of your existing traffic into leads and sales.",
  },
  {
    icon: FileText,
    title: "Content & SEO Copywriting Strategy",
    description:
      "Content planning built around real search intent, so pages and posts support both users and rankings.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting Dashboards",
    description:
      "Clear, honest dashboards that show what's working, what isn't, and where budget should move next.",
  },
  {
    icon: MapPin,
    title: "Local SEO & Google Business Profile",
    description:
      "Local listings, reviews, and map pack optimization for businesses that depend on nearby customers finding them.",
  },
  {
    icon: ClipboardList,
    title: "Marketing Strategy & Campaign Planning",
    description:
      "A channel plan built around your actual sales funnel, budget, and growth goals — not a generic playbook.",
  },
];

const techGroups = [
  {
    title: "SEO & Technical",
    items: "Google Search Console, Ahrefs, SEMrush, Screaming Frog, schema markup, Core Web Vitals.",
  },
  {
    title: "Paid Media",
    items: "Google Ads, Meta Ads Manager, LinkedIn Ads, TikTok Ads, programmatic display.",
  },
  {
    title: "Email & Automation",
    items: "Klaviyo, Mailchimp, HubSpot, ActiveCampaign, lifecycle and automated workflows.",
  },
  {
    title: "Social Media",
    items: "Content calendars, Buffer, Hootsuite, community management, organic and paid social.",
  },
  {
    title: "Analytics & Reporting",
    items: "Google Analytics 4, Google Tag Manager, Looker Studio, custom reporting dashboards.",
  },
  {
    title: "CRO & Testing",
    items: "A/B testing, Hotjar heatmaps, landing page optimization, funnel analysis.",
  },
  {
    title: "CRM & Integrations",
    items: "HubSpot, Salesforce, Zapier, lead scoring, marketing-to-sales handoff.",
  },
  {
    title: "Local & Listings",
    items: "Google Business Profile, review management, local citations, map pack optimization.",
  },
];

const processSteps = [
  { title: "Discovery & Marketing Audit", description: "We review your current channels, data, competitors, and where the biggest opportunities actually are." },
  { title: "Strategy & Channel Planning", description: "We build a channel plan and budget allocation based on your sales funnel and growth goals." },
  { title: "SEO Foundation & Technical Fixes", description: "We fix technical issues and build the on-page structure organic growth depends on." },
  { title: "Campaign Setup", description: "Paid search and social campaigns built around intent, targeting, and conversion tracking." },
  { title: "Content & Creative Development", description: "Ad creative, landing pages, and content built to match what each audience is actually searching for." },
  { title: "Email & Automation Setup", description: "Lifecycle flows and campaigns that nurture leads and bring customers back." },
  { title: "Launch & Optimization", description: "Campaigns go live, then get tuned based on real performance data, not assumptions." },
  { title: "Analytics & Reporting Setup", description: "Dashboards built so you always know what's working and what needs to change." },
  { title: "Ongoing Optimization & Scaling", description: "Continuous testing and budget reallocation toward what's actually driving growth." },
];

const whyUs = [
  { title: "We Think Beyond Vanity Metrics", description: "Impressions and likes are easy to report. We focus on leads, sales, and measurable ROI instead." },
  { title: "We Build Around Your Real Funnel", description: "Campaigns are planned around how your business actually sells, not a generic marketing template." },
  { title: "We Understand Marketing and Technical SEO", description: "Campaigns and content are built on a technically sound site, not layered on top of one that's holding you back." },
  { title: "We Keep Reporting Clear & Honest", description: "You'll always know what's working, what isn't, and why — no vanity dashboards." },
  { title: "We Support You With Ongoing Optimization", description: "Marketing isn't a one-time launch — we keep testing and refining as results come in." },
];

const useCases = [
  { icon: Building2, title: "For Small Businesses", description: "Local visibility and lead generation that helps nearby customers find and choose your business." },
  { icon: ShoppingCart, title: "For E-Commerce Brands", description: "Paid media and email flows that drive traffic, recover carts, and increase repeat purchases." },
  { icon: Users2, title: "For B2B Companies", description: "Lead generation campaigns and content built to move complex buyers through a longer sales cycle." },
  { icon: Rocket, title: "For Startups", description: "Growth marketing that tests channels fast and doubles down on what's actually converting." },
  { icon: MapPin, title: "For Local Service Businesses", description: "Local SEO, reviews, and map pack visibility that bring in nearby, ready-to-book customers." },
  { icon: GraduationCap, title: "For Agencies", description: "White-label marketing execution for agencies that need reliable SEO, paid, or email delivery." },
  { icon: RefreshCw, title: "For Existing Campaigns", description: "An audit and fix for underperforming SEO, paid, or email campaigns that aren't delivering results." },
];

const faqs = [
  { question: "Can JSK Corporation manage my SEO from scratch?", answer: "Yes. We handle technical audits, keyword strategy, on-page structure, and ongoing optimization for businesses starting from zero or rebuilding an existing strategy." },
  { question: "Do you run paid search and paid social campaigns?", answer: "Yes. We build and manage Google Ads, Meta, LinkedIn, and TikTok campaigns with conversion tracking built in from day one." },
  { question: "Can you set up email marketing and automation?", answer: "Yes. We build lifecycle flows, campaigns, and automation in platforms like Klaviyo, Mailchimp, or HubSpot." },
  { question: "Do you manage social media posting and content?", answer: "Yes. We handle content calendars, scheduling, and community management to keep your brand active and consistent." },
  { question: "Can you improve my website's conversion rate?", answer: "Yes. We test landing pages and funnels to turn more of your existing traffic into leads and sales." },
  { question: "Will I own my ad accounts and marketing data?", answer: "Yes. You retain full ownership and access to your ad accounts, analytics, and email platform — no agency lock-in." },
  { question: "Do you provide reporting and analytics dashboards?", answer: "Yes. We build clear dashboards so you always know what's working, what isn't, and where budget should move." },
  { question: "Can you help with local SEO and Google Business Profile?", answer: "Yes. We optimize listings, reviews, and local citations to improve map pack visibility for nearby customers." },
  { question: "Can you take over or fix underperforming campaigns?", answer: "Yes. We audit existing SEO, paid, or email campaigns, identify what's not working, and rebuild the strategy around real data." },
  { question: "How do you measure success and ROI?", answer: "We tie campaigns to leads, sales, and revenue wherever possible — not just impressions, clicks, or followers." },
];

type MarketingLandingContentProps = {
  h1: string;
  heroLine: string;
  regionName?: string;
  regionSlug?: string;
  localAngle?: string;
  keywords?: string[];
  isHub?: boolean;
};

const SERVICE_SLUG = "digital-marketing";

export default function MarketingLandingContent({
  h1,
  heroLine,
  regionName,
  regionSlug,
  localAngle,
  keywords,
  isHub = false,
}: MarketingLandingContentProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Digital Marketing Services",
    name: h1,
    description: heroLine,
    url: regionSlug
      ? `${SITE_URL}/digital-marketing-services-${regionSlug}/`
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
          ? `${SITE_URL}/digital-marketing-services-${regionSlug}/`
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
              <Link href="/services/digital-marketing" className="hover:text-primary-600">
                Digital Marketing
              </Link>
            ) : (
              <span className="text-neutral-700">Digital Marketing</span>
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
              Whether you need SEO, paid search and social, email automation,
              or a conversion-focused funnel, we plan campaigns around your
              actual sales process — not around a generic marketing
              playbook.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">
                Book a Free Marketing Strategy Consultation <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="secondary">
                Request a Free Marketing Audit
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
            title="Are you searching for a digital marketing partner that actually understands business?"
            description="Most business owners aren't just looking for “more traffic” — they're looking for qualified leads, better ad ROI, and a marketing team that reports honestly on what's working."
          />
          <p className="mx-auto mt-8 max-w-3xl text-center text-neutral-600">
            That is exactly where JSK Corporation fits in. We combine SEO, paid
            media, email, and conversion optimization to run campaigns that
            drive real growth, not just vanity metrics.
          </p>
        </Container>
      </section>

      {/* Problem */}
      <section className="relative isolate flex min-h-[380px] items-center overflow-hidden">
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src="/videos/portfolio-seo.mp4"
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
              Most marketing doesn&apos;t fail because of budget
            </span>
            <h2 className="mx-auto mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-white sm:text-4xl">
              It fails because there was no strategy behind the spend
            </h2>
            <p className="mx-auto mt-4 text-lg text-white/80">
              The ads ran, but no one tracked what actually converted. The
              content published, but it wasn&apos;t built around real search
              intent. The campaign launched, but reporting stayed vague. At
              JSK Corporation, we don&apos;t treat marketing as a checkbox — we
              build a plan around your funnel, then measure what matters.
            </p>
          </div>
        </Container>
      </section>

      {/* Positioning */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our approach"
            title="Digital marketing built around your business"
            description="Generic content calendars and boosted posts can work for very simple visibility. But when your business needs real leads, tracked ROI, and a scalable funnel, a one-size-fits-all playbook quickly becomes a limitation."
          />
          <p className="mx-auto mt-8 max-w-3xl text-center text-neutral-600">
            JSK Corporation builds marketing programs with a strategy-first
            mindset — planned around your actual funnel and goals, not
            forced into a generic package. Clean tracking, honest reporting,
            and channels chosen for your business, so your marketing spend
            actually compounds over time.
          </p>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-primary-50/60 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What we run"
            title="Digital marketing services we provide"
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
            description="We choose the right channels and tools based on your audience, budget, and growth goals."
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
          <SectionHeading eyebrow="How we work" title="Our A-to-Z marketing process" />
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
          <SectionHeading eyebrow="Built for you" title="What kind of marketing do you need?" />
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
                Digital marketing for {regionName} businesses
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
                <Search className="h-4 w-4" /> Free marketing audit
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--foreground)]">
                Not sure what your current marketing needs?
              </h2>
              <p className="mt-4 text-neutral-600">
                If your campaigns aren&apos;t generating leads, your SEO
                feels stuck, or you&apos;re not sure what&apos;s actually
                working, JSK Corporation can review it and show you what can be
                improved.
              </p>
              <div className="mt-8">
                <Button href="/contact">
                  Request a Free Marketing Audit <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6">
              <ul className="space-y-3">
                {[
                  "SEO and technical review",
                  "Paid campaign review",
                  "Social media presence review",
                  "Email marketing review",
                  "Conversion funnel review",
                  "Analytics and tracking review",
                  "Competitor benchmark review",
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
              Your marketing data should belong to you
            </h2>
            <p className="mt-4 text-neutral-600">
              We don&apos;t believe in holding clients hostage with confusing
              systems, hidden access, or unclear ownership. With JSK Corporation,
              you retain full access to your ad accounts, analytics
              properties, and email platform — a marketing program that can
              be maintained, improved, and expanded over time.
            </p>
          </div>
        </Container>
      </section>


      {!isHub && regionSlug && (
        <section className="pb-4">
          <Container>
            <p className="text-center text-sm text-neutral-500">
              Serving businesses across every state —{" "}
              <Link href="/digital-marketing-services-usa" className="font-medium text-primary-600 hover:underline">
                view our nationwide digital marketing overview
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
            ? `Ready to grow your ${regionName} business with digital marketing?`
            : "Ready to grow your business with digital marketing?"
        }
        description="JSK Corporation helps businesses run SEO, paid media, email, and conversion campaigns that look professional, track clearly, and support real growth."
        primaryLabel="Book a Free Marketing Strategy Consultation"
        primaryHref="/contact"
        secondaryLabel="Request a Free Marketing Audit"
        secondaryHref="/contact"
      />
    </>
  );
}
