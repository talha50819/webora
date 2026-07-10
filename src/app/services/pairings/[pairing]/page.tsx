import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check, Plus } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/CTASection";
import ServiceIcon from "@/components/ServiceIcon";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import { getServiceBySlug } from "@/data/services";
import { pairings, getPairingBySlug } from "@/data/pairings";

export function generateStaticParams() {
  return pairings.map((p) => ({ pairing: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pairing: string }>;
}): Promise<Metadata> {
  const { pairing } = await params;
  const p = getPairingBySlug(pairing);
  if (!p) return {};
  const [first, second] = p.slugs.map((s) => getServiceBySlug(s)!);

  return buildMetadata({
    title: `${first.title} + ${second.title}`,
    description: p.blurb,
    path: `/services/pairings/${pairing}/`,
  });
}

export default async function PairingPage({
  params,
}: {
  params: Promise<{ pairing: string }>;
}) {
  const { pairing } = await params;
  const p = getPairingBySlug(pairing);
  if (!p) notFound();

  const [first, second] = p.slugs.map((s) => getServiceBySlug(s)!);
  const otherPairings = pairings.filter((x) => x.slug !== pairing);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services/` },
      {
        "@type": "ListItem",
        position: 3,
        name: `${first.title} + ${second.title}`,
        item: `${SITE_URL}/services/pairings/${pairing}/`,
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
      <section className="bg-radial-fade py-20 sm:py-28">
        <Container>
          <nav className="text-sm text-neutral-500">
            <Link href="/services" className="hover:text-primary-600">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-700">
              {first.title} + {second.title}
            </span>
          </nav>
          <div className="mt-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
              <ServiceIcon icon={first.icon} className="h-6 w-6" />
            </div>
            <Plus className="h-5 w-5 shrink-0 text-neutral-400" />
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
              <ServiceIcon icon={second.icon} className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-6 max-w-3xl">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
              {first.title} + {second.title}
            </h1>
            <p className="mt-6 text-lg text-neutral-600">{p.blurb}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">
                Book a Free Consultation <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/services" variant="secondary">
                View All Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* What each service covers */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What's included"
            title="What each service covers"
            description="Both disciplines, scoped and delivered together instead of coordinated across separate vendors."
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {[first, second].map((service) => (
              <div key={service.slug} className="rounded-2xl border border-neutral-200 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <ServiceIcon icon={service.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--foreground)]">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {service.shortDesc}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}/`}
                  className="mt-5 inline-block text-sm font-semibold text-primary-600 hover:underline"
                >
                  View {service.title} services
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Other pairings */}
      <section className="bg-primary-50/60 py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Explore more" title="Other pairings that work well together" />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherPairings.map((op) => {
              const [opFirst, opSecond] = op.slugs.map((s) => getServiceBySlug(s)!);
              return (
                <Link
                  key={op.slug}
                  href={`/services/pairings/${op.slug}/`}
                  className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-primary-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                      <ServiceIcon icon={opFirst.icon} className="h-5 w-5" />
                    </div>
                    <Plus className="h-4 w-4 shrink-0 text-neutral-400" />
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                      <ServiceIcon icon={opSecond.icon} className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--foreground)] group-hover:text-primary-600">
                    {opFirst.title} + {opSecond.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{op.blurb}</p>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection
        title={`Ready to start a ${first.title.toLowerCase()} + ${second.title.toLowerCase()} project?`}
        description={p.blurb}
        primaryLabel="Book a Free Consultation"
        primaryHref="/contact"
        secondaryLabel="View All Services"
        secondaryHref="/services"
      />
    </>
  );
}
