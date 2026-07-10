import Link from "next/link";
import { Plus } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ServiceIcon from "@/components/ServiceIcon";
import CTASection from "@/components/CTASection";
import { services, getServiceBySlug } from "@/data/services";
import { pairings } from "@/data/pairings";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Explore JSK Corporation's full range of services — web development, mobile apps, design, marketing, AI/ML, software, and more.",
  path: "/services/",
});

const serviceFaqs = [
  {
    question: "Do I need to know exactly which service I need before reaching out?",
    answer:
      "No — tell us the problem or goal, and we'll help you figure out which combination of services actually makes sense.",
  },
  {
    question: "Can services be combined into one project?",
    answer:
      "Yes, most projects blend multiple disciplines — design, development, and marketing usually overlap more than people expect.",
  },
  {
    question: "Do you offer ongoing retainers or only one-off projects?",
    answer:
      "Both. Some clients need a single project delivered and handed off; others keep us on retainer for ongoing development, marketing, or support.",
  },
  {
    question: "What if my project doesn't fit neatly into one service category?",
    answer:
      "Most don't. We scope around your actual goal, not a fixed service menu.",
  },
  {
    question: "Can you support an in-house team instead of replacing it?",
    answer:
      "Yes — we regularly work alongside internal teams, filling skill gaps or adding capacity rather than taking over entirely.",
  },
  {
    question: "How do you decide which service to start with?",
    answer:
      "It depends on your biggest constraint right now — we'll help you identify that in a quick discovery conversation.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-radial-fade py-20 sm:py-28">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Our services"
            title="Everything a modern business needs, in one place"
            description="Twelve disciplines, one team — so your website, brand, marketing, and software all move in the same direction."
          />
        </Container>
      </section>

      <section className="relative isolate flex min-h-[380px] items-center overflow-hidden">
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src="/videos/team-discussion.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 -z-10 bg-primary-950/80" />
        <div className="absolute inset-0 -z-10 gradient-brand opacity-30 mix-blend-multiply" />
        <Container className="py-16 text-center">
          <span className="inline-block text-sm font-semibold tracking-wide text-primary-200 uppercase">
            One team, every discipline
          </span>
          <h2 className="mx-auto mt-3 max-w-2xl font-[family-name:var(--font-heading)] text-3xl font-bold text-white sm:text-4xl">
            Twelve services, working from the same plan
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Design, engineering, and strategy stay in sync because they sit
            under one roof — not spread across separate vendors.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-primary-50/60 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Popular pairings"
            title="Services that work well together"
            description="Most projects don't fit into a single category — here are a few combinations we build often."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {pairings.map(({ slug, slugs, blurb }) => {
              const [first, second] = slugs.map((s) => getServiceBySlug(s)!);
              return (
                <Link
                  key={slug}
                  href={`/services/pairings/${slug}/`}
                  className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-primary-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                      <ServiceIcon icon={first.icon} className="h-5 w-5" />
                    </div>
                    <Plus className="h-4 w-4 shrink-0 text-neutral-400" />
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                      <ServiceIcon icon={second.icon} className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--foreground)] group-hover:text-primary-600">
                    {first.title} + {second.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {blurb}
                  </p>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

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
        <Container className="py-16 text-center">
          <span className="inline-block text-sm font-semibold tracking-wide text-primary-200 uppercase">
            From idea to execution
          </span>
          <h2 className="mx-auto mt-3 max-w-2xl font-[family-name:var(--font-heading)] text-3xl font-bold text-white sm:text-4xl">
            Every service starts with the same question: what&apos;s it for?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            We scope around your goal first, then bring in whichever
            disciplines actually move it forward.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Questions"
            title="Frequently asked questions"
            description="Common questions about scoping and combining services."
          />
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
            {serviceFaqs.map(({ question, answer }) => (
              <div key={question} className="rounded-2xl border border-neutral-200 p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-[var(--foreground)]">
                  {question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
