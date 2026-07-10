import { MapPin, Phone, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/data/siteConfig";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with JSK Corporation — call, email, or send us a message about your project.",
  path: "/contact/",
});

const emailCards = [
  { label: "General inquiries", email: siteConfig.emails.info },
  { label: "Sales", email: siteConfig.emails.sales },
  { label: "Support", email: siteConfig.emails.support },
  { label: "Careers", email: siteConfig.emails.hr },
];

export default function ContactPage() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    siteConfig.address
  )}&output=embed`;

  return (
    <>
      <section className="bg-radial-fade py-20 sm:py-28">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Contact us"
            title="Let's talk about your project"
            description="Reach out however is easiest — we typically respond within one business day."
          />
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-neutral-200 bg-white p-8">
                <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--foreground)]">
                  Send us a message
                </h2>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)]">Office</h3>
                    <p className="mt-1 text-sm text-neutral-600">{siteConfig.address}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)]">Phone</h3>
                    <a
                      href={`tel:${siteConfig.phoneHref}`}
                      className="mt-1 block text-sm text-neutral-600 hover:text-primary-600"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div className="w-full">
                    <h3 className="font-semibold text-[var(--foreground)]">Email</h3>
                    <ul className="mt-2 space-y-1.5">
                      {emailCards.map((item) => (
                        <li key={item.email} className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5 text-sm">
                          <span className="shrink-0 text-neutral-500">{item.label}</span>
                          <a
                            href={`mailto:${item.email}`}
                            className="break-all font-medium text-neutral-700 hover:text-primary-600"
                          >
                            {item.email}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-neutral-200">
            <iframe
              title="JSK Corporation office location"
              src={mapSrc}
              width="100%"
              height="360"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
