import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/CTASection";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import { services } from "@/data/services";
import { subServicesByService } from "@/data/subServices";

export function generateStaticParams() {
  return Object.entries(subServicesByService).flatMap(([slug, subs]) =>
    subs.map((sub) => ({ slug, subslug: sub.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; subslug: string }>;
}): Promise<Metadata> {
  const { slug, subslug } = await params;
  const service = services.find((s) => s.slug === slug);
  const sub = subServicesByService[slug]?.find((s) => s.slug === subslug);
  if (!service || !sub) return {};

  return buildMetadata({
    title: `${sub.title} | ${service.title}`,
    description: sub.description,
    path: `/services/${slug}/${subslug}/`,
  });
}

export default async function SubServicePage({
  params,
}: {
  params: Promise<{ slug: string; subslug: string }>;
}) {
  const { slug, subslug } = await params;
  const service = services.find((s) => s.slug === slug);
  const sub = subServicesByService[slug]?.find((s) => s.slug === subslug);
  if (!service || !sub) notFound();

  const otherSubServices = subServicesByService[slug].filter(
    (s) => s.slug !== subslug
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: sub.title,
    name: sub.title,
    description: sub.description,
    url: `${SITE_URL}/services/${slug}/${subslug}/`,
    provider: {
      "@type": "ProfessionalService",
      name: "JSK Corporation",
      url: SITE_URL,
    },
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
        name: service.title,
        item: `${SITE_URL}/services/${slug}/`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: sub.title,
        item: `${SITE_URL}/services/${slug}/${subslug}/`,
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
            <Link href={`/services/${slug}`} className="hover:text-primary-600">
              {service.title}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-700">{sub.title}</span>
          </nav>
          <div className="mt-8 max-w-3xl">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
              {sub.title}
            </h1>
            <p className="mt-6 text-lg text-neutral-600">{sub.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">
                Book a Free Consultation <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href={`/services/${slug}`} variant="secondary">
                View All {service.title}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* What's included */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What's included"
            title={`How JSK Corporation approaches ${sub.title.toLowerCase()}`}
            description={sub.description}
          />
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-neutral-200 p-6">
            <ul className="space-y-3">
              {[
                "Discovery call to understand your goals and requirements",
                "A clear scope and timeline before any work begins",
                "Direct communication throughout the project",
                "Clean, well-structured work you can maintain long-term",
                "Support after delivery, not just a one-time handoff",
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
        </Container>
      </section>

      {/* Other sub-services */}
      <section className="bg-primary-50/60 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Explore more"
            title={`More ${service.title} services`}
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherSubServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${slug}/${s.slug}/`}
                className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-primary-300"
              >
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--foreground)] group-hover:text-primary-600">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {s.description}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title={`Ready to get started with ${sub.title.toLowerCase()}?`}
        description={`Tell us about your goals and we'll help you figure out the right approach for ${sub.title.toLowerCase()}.`}
        primaryLabel="Book a Free Consultation"
        primaryHref="/contact"
        secondaryLabel={`View All ${service.title}`}
        secondaryHref={`/services/${slug}`}
      />
    </>
  );
}
