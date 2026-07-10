import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Building2,
  Calendar,
  Clock,
  Globe,
  Palette,
  PenTool,
  Quote,
  Smartphone,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/CTASection";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import { portfolioItems, getPortfolioItemBySlug } from "@/data/portfolio";
import { liveDemos } from "@/components/portfolio/demos";
import DeviceSwitcher from "@/components/portfolio/DeviceSwitcher";

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

const categoryIcons: Record<string, typeof Globe> = {
  "Web Development": Globe,
  "Mobile App Development": Smartphone,
  "UI/UX Design": PenTool,
  "Graphic Design & Branding": Palette,
  "Digital Marketing": TrendingUp,
  "AI/ML Solutions": Bot,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioItemBySlug(slug);
  if (!item) return {};

  return buildMetadata({
    title: item.title,
    description: item.blurb,
    path: `/portfolio/${slug}/`,
  });
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getPortfolioItemBySlug(slug);
  if (!item) notFound();

  const liveDemo = liveDemos[slug];

  const otherProjects = portfolioItems
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Portfolio", item: `${SITE_URL}/portfolio/` },
      {
        "@type": "ListItem",
        position: 3,
        name: item.title,
        item: `${SITE_URL}/portfolio/${slug}/`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-radial-fade py-16 sm:py-24">
        <Container>
          <nav className="flex items-center gap-2 text-sm text-neutral-500">
            <Link href="/portfolio" className="hover:text-primary-600">
              Portfolio
            </Link>
            <span>/</span>
            <span className="text-neutral-700">{item.title}</span>
          </nav>

          <Link
            href="/portfolio"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all work
          </Link>

          <div className="mt-6 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold tracking-wide text-primary-600 uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              {item.category}
            </span>
            <h1 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
              {item.title}
            </h1>
            <p className="mt-6 text-lg text-neutral-600">{item.overview}</p>

            <dl className="mt-8 grid grid-cols-3 gap-6 border-t border-neutral-200 pt-6">
              <div>
                <dt className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-neutral-500 uppercase">
                  <Building2 className="h-3.5 w-3.5" /> Client
                </dt>
                <dd className="mt-1.5 text-sm font-semibold text-[var(--foreground)]">
                  {item.client}
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-neutral-500 uppercase">
                  <Calendar className="h-3.5 w-3.5" /> Year
                </dt>
                <dd className="mt-1.5 text-sm font-semibold text-[var(--foreground)]">
                  {item.year}
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-neutral-500 uppercase">
                  <Clock className="h-3.5 w-3.5" /> Timeline
                </dt>
                <dd className="mt-1.5 text-sm font-semibold text-[var(--foreground)]">
                  {item.timeline}
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">
                Start a Similar Project <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/portfolio" variant="secondary">
                View All Work
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Live demo */}
      <section className="pb-20 sm:pb-28">
        <Container>
          <SectionHeading
            eyebrow="Try it yourself"
            title="Explore the live demo"
            description={liveDemo.description}
          />
          <div className="mt-14">
            {liveDemo.kind === "site" ? (
              <DeviceSwitcher url={liveDemo.url}>
                <liveDemo.Component />
              </DeviceSwitcher>
            ) : (
              <liveDemo.Component />
            )}
          </div>
        </Container>
      </section>

      {/* Challenge / Solution */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="The project"
            title="Challenge & solution"
            description="A quick look at what we walked into and how we approached it."
          />
          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 p-8">
              <span className="text-xs font-semibold tracking-wide text-primary-600 uppercase">
                The challenge
              </span>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                {item.challenge}
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-primary-50/50 p-8">
              <span className="text-xs font-semibold tracking-wide text-primary-600 uppercase">
                Our solution
              </span>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                {item.solution}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {item.services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm font-medium text-neutral-700"
              >
                {service}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Results */}
      <section className="gradient-brand py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold tracking-wide text-white/80 uppercase">
              The results
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-bold text-white sm:text-4xl">
              Outcomes that mattered
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {item.results.map((result) => (
              <div
                key={result.label}
                className="rounded-2xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-sm"
              >
                <div className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white">
                  {result.value}
                </div>
                <div className="mt-2 text-sm font-medium text-white/80">
                  {result.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-3xl">
            <Quote className="mx-auto h-8 w-8 text-white/60" />
            <p className="mt-4 text-center text-xl leading-relaxed text-white sm:text-2xl">
              &ldquo;{item.testimonial.quote}&rdquo;
            </p>
            <p className="mt-6 text-center text-sm font-semibold text-white">
              {item.testimonial.author}
              <span className="block font-normal text-white/70">
                {item.testimonial.role}
              </span>
            </p>
          </div>
        </Container>
      </section>

      {/* More projects */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Keep exploring" title="More of our work" />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {otherProjects.map((p) => {
              const Icon = categoryIcons[p.category] ?? Sparkles;
              return (
                <Link
                  key={p.slug}
                  href={`/portfolio/${p.slug}/`}
                  className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg"
                >
                  <div
                    className={`relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br ${p.gradient}`}
                  >
                    <Icon className="h-10 w-10 text-white/90 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold tracking-wide text-primary-600 uppercase">
                      {p.category}
                    </span>
                    <h3 className="mt-1.5 flex items-center gap-1.5 font-[family-name:var(--font-heading)] text-base font-semibold text-[var(--foreground)]">
                      {p.title}
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-primary-500 opacity-0 transition-opacity group-hover:opacity-100" />
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection
        title="Want to see your project here next?"
        description="Let's talk about what you're trying to build."
      />
    </>
  );
}
