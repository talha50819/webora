import {
  Target,
  HeartHandshake,
  Layers,
  Rocket,
  Handshake,
  MessagesSquare,
  Award,
  CircleCheckBig,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about JSK Corporation's mission, values, and approach to building digital products for growing businesses.",
  path: "/about/",
});

const values = [
  {
    icon: Target,
    title: "Outcomes over output",
    description:
      "We measure success by the results our work drives for your business, not just deliverables shipped.",
  },
  {
    icon: HeartHandshake,
    title: "Genuine partnership",
    description:
      "We work as an extension of your team — clear communication, honest recommendations, no black boxes.",
  },
  {
    icon: Layers,
    title: "Full-stack thinking",
    description:
      "Design, engineering, and marketing decisions are made together, not in isolated silos.",
  },
  {
    icon: Rocket,
    title: "Built to last",
    description:
      "We favor solid, maintainable foundations over quick hacks that create problems later.",
  },
];

const cultureItems = [
  {
    icon: Handshake,
    title: "Collaboration first",
    description:
      "You're looped into decisions as they happen, not handed a finished deliverable and a bill.",
  },
  {
    icon: MessagesSquare,
    title: "Clear communication",
    description:
      "Regular check-ins and plain-language updates — no jargon dumps or radio silence between milestones.",
  },
  {
    icon: Award,
    title: "Craft over shortcuts",
    description:
      "We'd rather take an extra day and get the details right than ship something we'd need to redo.",
  },
  {
    icon: CircleCheckBig,
    title: "Follow-through",
    description:
      "Launch day isn't the finish line — we stick around to make sure what we built keeps working.",
  },
];

const aboutFaqs = [
  {
    question: "What makes JSK Corporation different from a bigger agency?",
    answer:
      "You work directly with the people doing the design, engineering, and strategy work — not routed through layers of account management. Fewer hand-offs means faster, clearer decisions.",
  },
  {
    question: "Who will I actually be working with?",
    answer:
      "One dedicated point of contact coordinates the specialists on your project, so you're not chasing different people for different parts of the work.",
  },
  {
    question: "Can we start with a smaller project first?",
    answer:
      "Yes. Plenty of relationships start with a scoped, smaller engagement — an audit, a redesign, a single feature — before growing into a larger partnership.",
  },
  {
    question: "Do you only work with tech companies?",
    answer:
      "No — we work across healthcare, retail, real estate, education, hospitality, and more. If your business needs digital work done well, we can likely help.",
  },
  {
    question: "Is JSK Corporation a good fit for early-stage startups?",
    answer:
      "We work with businesses at every stage, from early-stage startups validating an idea to established companies modernizing existing systems.",
  },
  {
    question: "How do you handle communication throughout a project?",
    answer:
      "Regular check-ins, clear milestones, and a single point of contact — you'll always know what's shipped, what's next, and who to ask.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-radial-fade py-20 sm:py-28">
        <Container className="text-center">
          <span className="inline-block text-sm font-semibold tracking-wide text-primary-600 uppercase">
            About JSK Corporation
          </span>
          <h1 className="mx-auto mt-3 max-w-2xl font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
            A digital agency built around{" "}
            <span className="gradient-brand-text">practical results</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
            JSK Corporation was founded to give growing businesses access to the
            same caliber of design, engineering, and strategy that larger
            companies take for granted — without the overhead of managing a
            dozen vendors.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--foreground)]">
                Our approach
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                Every engagement starts with understanding your business, not
                just your brief. We bring together strategy, design, and
                engineering from day one so decisions in one discipline
                account for the others.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                Whether we&apos;re shipping a new website, an internal tool, or
                a full product, our goal is the same: build something that
                works well today and holds up as you grow.
              </p>
            </div>
            <div className="space-y-4">
              <div className="relative h-56 overflow-hidden rounded-2xl sm:h-64">
                <video
                  className="h-full w-full object-cover"
                  src="/videos/about-workspace.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-primary-50 p-6">
                  <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary-700">
                    12
                  </p>
                  <p className="mt-1 text-sm text-neutral-600">service disciplines under one roof</p>
                </div>
                <div className="rounded-2xl bg-primary-50 p-6">
                  <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary-700">
                    1
                  </p>
                  <p className="mt-1 text-sm text-neutral-600">dedicated point of contact per project</p>
                </div>
              </div>
              <div className="rounded-2xl gradient-brand p-6 text-white">
                <p className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                  Karachi, Pakistan — serving clients everywhere
                </p>
                <p className="mt-1 text-sm text-white/85">
                  Remote-friendly collaboration with a home base in Gulistan-e-Johar,
                  Karachi, Pakistan.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-primary-50/60 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="How we work together"
            title="What it's actually like to work with us"
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {cultureItems.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl gradient-brand text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--foreground)]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative isolate flex min-h-[320px] items-center overflow-hidden">
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src="/videos/focus-work.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 -z-10 bg-primary-950/75" />
        <Container className="py-16 text-center">
          <p className="mx-auto max-w-xl font-[family-name:var(--font-heading)] text-2xl font-semibold text-white sm:text-3xl">
            Heads-down, detail-focused, and accountable for the outcome.
          </p>
        </Container>
      </section>

      <section className="bg-primary-50/60 py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="What we value" title="The principles behind our work" />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--foreground)]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative isolate flex min-h-[380px] items-center overflow-hidden">
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src="/videos/team-huddle.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 -z-10 bg-primary-950/80" />
        <div className="absolute inset-0 -z-10 gradient-brand opacity-30 mix-blend-multiply" />
        <Container className="py-16 text-center">
          <span className="inline-block text-sm font-semibold tracking-wide text-primary-200 uppercase">
            Small team, hands-on approach
          </span>
          <h2 className="mx-auto mt-3 max-w-2xl font-[family-name:var(--font-heading)] text-3xl font-bold text-white sm:text-4xl">
            Every project gets real attention, start to finish
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            No handing your work off to whoever&apos;s free — the people who
            scope your project are the people who build it.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Questions"
            title="Frequently asked questions"
            description="Common questions about working with JSK Corporation."
          />
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
            {aboutFaqs.map(({ question, answer }) => (
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

      <CTASection
        title="Let's build something worth showing off"
        description="Tell us about your project and we'll help you scope the right approach."
      />
    </>
  );
}
