import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clapperboard,
  Camera,
  CalendarDays,
  Smartphone,
  Wand2,
  Repeat,
  Image as ImageIcon,
  Mic,
  Megaphone,
  ClipboardList,
  Wrench,
  Rocket,
  ShieldCheck,
  Building2,
  ShoppingCart,
  GraduationCap,
  Users2,
  Utensils,
  Search,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/CTASection";
import { SITE_URL } from "@/lib/seo";
import { slugify } from "@/lib/slugify";

const subServices = [
  {
    icon: Clapperboard,
    title: "Video Production & Editing",
    description:
      "Brand videos, promos, and campaign content — shot, edited, and finished to match your brand's tone.",
  },
  {
    icon: Camera,
    title: "Product & Brand Photography",
    description:
      "Clean, consistent photography for products, teams, and locations that makes your brand look established.",
  },
  {
    icon: CalendarDays,
    title: "Social Media Content Calendars",
    description:
      "Planned content calendars that keep your social presence active, consistent, and on-brand.",
  },
  {
    icon: Smartphone,
    title: "Short-Form Video for Social Channels",
    description:
      "Reels, TikToks, and Shorts built for how people actually watch — fast, vertical, and attention-grabbing.",
  },
  {
    icon: Wand2,
    title: "Motion Graphics & Animation",
    description:
      "Animated logos, lower-thirds, and explainer graphics that add polish without a full production shoot.",
  },
  {
    icon: Repeat,
    title: "Content Repurposing Across Channels",
    description:
      "One shoot, many formats — turning long-form content into clips, posts, and assets for every channel.",
  },
  {
    icon: ImageIcon,
    title: "Brand & Lifestyle Photography",
    description:
      "Photography that captures your brand's personality, not just your products, for a more authentic feel.",
  },
  {
    icon: Mic,
    title: "Podcast & Long-Form Video Production",
    description:
      "Recording, editing, and production for podcasts and long-form video content that builds authority over time.",
  },
  {
    icon: Megaphone,
    title: "Ad Creative Production",
    description:
      "Photo and video creative built specifically for paid campaigns, tested and refreshed as performance data comes in.",
  },
  {
    icon: ClipboardList,
    title: "Content Strategy & Planning",
    description:
      "A content plan built around your goals and audience, not just a list of post ideas to fill a calendar.",
  },
];

const techGroups = [
  {
    title: "Video Production",
    items: "Professional camera and lighting gear, Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve.",
  },
  {
    title: "Photography",
    items: "Studio and on-location photography, professional lighting, product photography setups.",
  },
  {
    title: "Motion & Animation",
    items: "Adobe After Effects, Cinema 4D, motion graphics templates, animated brand assets.",
  },
  {
    title: "Social & Short-Form",
    items: "Vertical-first editing for Reels, TikTok, and Shorts, CapCut, platform-native formatting.",
  },
  {
    title: "Content Planning",
    items: "Content calendars, creative briefs, shot lists, and brand voice guidelines.",
  },
  {
    title: "Distribution & Repurposing",
    items: "Clipping long-form content into short-form, cross-platform formatting for every channel.",
  },
  {
    title: "Collaboration & Delivery",
    items: "Organized asset libraries with raw and final file delivery, structured project handoff.",
  },
  {
    title: "Analytics & Performance",
    items: "Content performance tracking, platform insights, and iteration based on real engagement data.",
  },
];

const processSteps = [
  { title: "Content Strategy & Planning", description: "We define goals, audience, and formats before any shoot gets scheduled." },
  { title: "Concept & Scripting", description: "Concepts and scripts developed to match your brand voice and campaign goals." },
  { title: "Shot List & Pre-Production", description: "Locations, talent, and logistics planned so production day runs smoothly." },
  { title: "Photo & Video Production", description: "Professional shooting on-location or in-studio, capturing everything needed for editing." },
  { title: "Editing & Post-Production", description: "Footage and photos edited, color-corrected, and finished to a polished, on-brand result." },
  { title: "Motion Graphics & Animation", description: "Animated elements added where they strengthen the final piece, not just for the sake of it." },
  { title: "Content Repurposing", description: "One production turned into multiple formats and assets across channels." },
  { title: "Review & Brand Approval", description: "Content reviewed against brand guidelines before it goes anywhere public." },
  { title: "Publishing & Performance Tracking", description: "Content published and tracked, with insights feeding the next round of production." },
];

const whyUs = [
  { title: "We Think Beyond a Single Post", description: "Content is planned as a system, not a one-off asset that gets forgotten after posting." },
  { title: "We Build Around Your Real Brand Voice", description: "Every piece of content reflects how your brand actually sounds and looks, not a generic template." },
  { title: "We Understand Production and Platforms", description: "Great footage means nothing if it's not formatted for how each platform actually performs." },
  { title: "We Keep Content Organized & Reusable", description: "Raw files and finished assets are delivered organized, so nothing gets lost or wasted." },
  { title: "We Support You With Ongoing Production", description: "Content needs are recurring — we stay available for new shoots, campaigns, and refreshes." },
];

const useCases = [
  { icon: Building2, title: "For Small Businesses", description: "Consistent photo and video content that builds trust and keeps your social presence active." },
  { icon: ShoppingCart, title: "For E-Commerce Brands", description: "Product photography and video that makes items look their best across your store and ads." },
  { icon: Rocket, title: "For Startups", description: "Brand story and launch content that introduces your product with clarity and energy." },
  { icon: Users2, title: "For B2B Companies", description: "Case study and testimonial video that builds credibility with serious buyers." },
  { icon: Utensils, title: "For Restaurants & Hospitality", description: "Photo and video content that makes menus, spaces, and experiences look irresistible." },
  { icon: GraduationCap, title: "For Agencies", description: "White-label production support for agencies that need reliable photo and video delivery." },
  { icon: Repeat, title: "For Existing Content Libraries", description: "Repurposing and refreshing existing footage and photos into new, usable formats." },
];

const faqs = [
  { question: "Can JSK Corporation produce video content from scratch?", answer: "Yes. We can plan, shoot, edit, and deliver video content from concept through final export, based on your brand and goals." },
  { question: "Do you handle product and brand photography?", answer: "Yes. We shoot product, lifestyle, and brand photography in-studio or on-location, depending on what the project needs." },
  { question: "Can you create short-form video for TikTok, Reels, and Shorts?", answer: "Yes. We produce vertical-first short-form video built for how each platform's audience actually watches." },
  { question: "Do you provide motion graphics and animation?", answer: "Yes. We create animated logos, lower-thirds, and explainer graphics to add polish to video content." },
  { question: "Can you repurpose long-form content into multiple formats?", answer: "Yes. One shoot or recording can be turned into clips, posts, and assets across multiple channels." },
  { question: "Do you manage a content calendar for social media?", answer: "Yes. We build and manage content calendars so your social presence stays active and consistent." },
  { question: "Will I receive the raw footage and source files?", answer: "Yes. You receive raw footage, photos, and final files — your content belongs to you, not to us." },
  { question: "Can you produce ad creative for paid campaigns?", answer: "Yes. We produce photo and video creative specifically for paid campaigns, refreshed based on performance." },
  { question: "Do you travel on-location for shoots?", answer: "Yes. We shoot on-location or in-studio depending on what the project and brand call for." },
  { question: "How do you measure content performance?", answer: "We track engagement and platform-specific metrics, feeding those insights back into future content planning." },
];

type ContentCreationLandingContentProps = {
  h1: string;
  heroLine: string;
  regionName?: string;
  regionSlug?: string;
  localAngle?: string;
  keywords?: string[];
  isHub?: boolean;
};

const SERVICE_SLUG = "content-creation";

export default function ContentCreationLandingContent({
  h1,
  heroLine,
  regionName,
  regionSlug,
  localAngle,
  keywords,
  isHub = false,
}: ContentCreationLandingContentProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Content Creation Services",
    name: h1,
    description: heroLine,
    url: regionSlug
      ? `${SITE_URL}/content-creation-services-${regionSlug}/`
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
          ? `${SITE_URL}/content-creation-services-${regionSlug}/`
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
              <Link href="/services/content-creation" className="hover:text-primary-600">
                Content Creation
              </Link>
            ) : (
              <span className="text-neutral-700">Content Creation</span>
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
              Whether you need video production, product photography, a
              social content calendar, or short-form video for social
              channels, we plan and produce content around your brand — not
              around a generic content mill.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">
                Book a Free Content Strategy Consultation <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="secondary">
                Request a Free Content Audit
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
            title="Are you searching for a content partner that actually understands business?"
            description="Most business owners aren't just looking for “more posts” — they're looking for content that looks professional, stays consistent, and actually gets seen."
          />
          <p className="mx-auto mt-8 max-w-3xl text-center text-neutral-600">
            That is exactly where JSK Corporation fits in. We combine planning,
            production, and platform-native editing to create content that
            feels intentional and works like a real marketing asset.
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
              Most content doesn&apos;t fail because of the camera
            </span>
            <h2 className="mx-auto mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-white sm:text-4xl">
              It fails because there was no plan behind the posting
            </h2>
            <p className="mx-auto mt-4 text-lg text-white/80">
              The footage looked fine, but it never got repurposed past one
              post. The photos were taken, but they didn&apos;t match the
              brand&apos;s tone. The content published, but no one tracked
              what actually performed. At JSK Corporation, we don&apos;t treat
              content as a one-off task — we plan, produce, and repurpose it
              as a system.
            </p>
          </div>
        </Container>
      </section>

      {/* Positioning */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our approach"
            title="Content creation built around your business"
            description="Stock photos and templated posts can work for very simple visibility. But when your business needs real recognition and engagement, generic content quickly becomes forgettable."
          />
          <p className="mx-auto mt-8 max-w-3xl text-center text-neutral-600">
            JSK Corporation produces content with a strategy-first mindset —
            planned around your actual brand and audience, not forced into a
            trend. Consistent visuals, platform-native formats, and organized
            delivery, so your content library keeps working long after
            it&apos;s produced.
          </p>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-primary-50/60 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What we produce"
            title="Content creation services we provide"
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
            title="Tools & disciplines we work with"
            description="We choose the right mix of production, editing, and distribution based on your brand, budget, and channels."
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
          <SectionHeading eyebrow="How we work" title="Our A-to-Z content production process" />
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
                Content creation for {regionName} businesses
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
                <Search className="h-4 w-4" /> Free content audit
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--foreground)]">
                Not sure what your current content needs?
              </h2>
              <p className="mt-4 text-neutral-600">
                If your content feels inconsistent, outdated, or isn&apos;t
                getting engagement, JSK Corporation can review it and show you
                what can be improved.
              </p>
              <div className="mt-8">
                <Button href="/contact">
                  Request a Free Content Audit <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6">
              <ul className="space-y-3">
                {[
                  "Content quality review",
                  "Brand consistency review",
                  "Platform performance review",
                  "Content calendar and gap review",
                  "Video and photo quality review",
                  "Competitor content review",
                  "Repurposing opportunity review",
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
              Your content and raw footage should belong to you
            </h2>
            <p className="mt-4 text-neutral-600">
              We don&apos;t believe in holding clients hostage with confusing
              systems, hidden access, or unclear ownership. With JSK Corporation,
              you receive full raw files, organized asset libraries, and a
              content system that can be maintained, reused, and expanded
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
              <Link href="/content-creation-services-usa" className="font-medium text-primary-600 hover:underline">
                view our nationwide content creation overview
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
            ? `Ready to produce content for your ${regionName} business?`
            : "Ready to produce content for your business?"
        }
        description="JSK Corporation helps businesses produce photo, video, and social content that looks professional, stays on-brand, and supports real growth."
        primaryLabel="Book a Free Content Strategy Consultation"
        primaryHref="/contact"
        secondaryLabel="Request a Free Content Audit"
        secondaryHref="/contact"
      />
    </>
  );
}
