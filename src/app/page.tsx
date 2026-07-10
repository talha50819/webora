import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Gauge,
  Users2,
  Layers,
  UserRound,
  MapPin,
  HeartPulse,
  ShoppingBag,
  Landmark,
  GraduationCap,
  Plane,
  Rocket,
  HandHeart,
  Home as HomeIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import AiBar from "@/components/AiBar";
import { services } from "@/data/services";
import { portfolioItems } from "@/data/portfolio";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  description:
    "JSK Corporation is a full-service digital agency delivering web development, mobile apps, UI/UX design, branding, digital marketing, AI/ML solutions, and enterprise software.",
  path: "/",
});

const valueProps = [
  {
    icon: Sparkles,
    title: "Senior-led delivery",
    description:
      "Every engagement is guided by experienced practitioners, not just account managers.",
  },
  {
    icon: Gauge,
    title: "Built for speed",
    description:
      "Lean processes and modern tooling mean fewer delays between idea and launch.",
  },
  {
    icon: ShieldCheck,
    title: "Security-minded",
    description:
      "We build with security and reliability in mind from day one, not as an afterthought.",
  },
  {
    icon: Users2,
    title: "One partner, many disciplines",
    description:
      "Design, engineering, marketing, and AI under one roof — no hand-offs between vendors.",
  },
];

const processSteps = [
  { step: "01", title: "Discover", description: "We learn your goals, constraints, and audience." },
  { step: "02", title: "Design", description: "We map out the plan, experience, and technical approach." },
  { step: "03", title: "Build", description: "We develop, test, and iterate in tight feedback loops." },
  { step: "04", title: "Grow", description: "We launch, measure, and keep improving with you." },
];

const trustStats = [
  { icon: Layers, value: "12", label: "service disciplines under one roof" },
  { icon: UserRound, value: "1", label: "dedicated point of contact per project" },
  { icon: ShieldCheck, value: "100%", label: "senior-led delivery, no junior hand-offs" },
  { icon: MapPin, value: "PK", label: "Karachi-based, remote-friendly team" },
];

const industries = [
  { icon: HeartPulse, label: "Healthcare" },
  { icon: ShoppingBag, label: "Retail & E-commerce" },
  { icon: HomeIcon, label: "Real Estate" },
  { icon: Landmark, label: "Fintech & Professional Services" },
  { icon: GraduationCap, label: "Education" },
  { icon: Plane, label: "Hospitality & Travel" },
  { icon: Rocket, label: "Startups" },
  { icon: HandHeart, label: "Nonprofits" },
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on scope — a marketing site can launch in a few weeks, while a full product build or enterprise integration may run several months. We give you a realistic timeline after the discovery phase, not before.",
  },
  {
    question: "Do you work with businesses outside Pakistan?",
    answer:
      "Yes. We're based in Karachi, Pakistan, but most of our collaboration happens remotely — video calls, shared docs, and async updates — so location isn't a barrier.",
  },
  {
    question: "Can you take over an existing project or codebase?",
    answer:
      "Often, yes. We start with an audit of what's there, flag any risks, and give you an honest read on whether to extend it or rebuild key parts before committing to a plan.",
  },
  {
    question: "What does working together actually look like?",
    answer:
      "You get one point of contact who coordinates design, engineering, and strategy behind the scenes, plus regular check-ins so you always know what's shipped and what's next.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes — ongoing maintenance, monitoring, and iteration are available for every service line, so your product keeps working (and improving) after launch day.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Most engagements are scoped as a fixed project fee after discovery; ongoing work (support, marketing, retained development) is typically a monthly rate. We'll recommend the right structure for your project.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-radial-fade">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-100/60 blur-3xl" />
        <Container className="flex flex-col items-center py-24 text-center sm:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-1.5 text-sm font-medium text-primary-700">
            <Sparkles className="h-4 w-4" />
            Full-service digital agency
          </span>
          <h1 className="mt-6 max-w-3xl font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl">
            Digital products and growth,{" "}
            <span className="gradient-brand-text">engineered right.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-600">
            JSK Corporation helps businesses design, build, and grow — from websites
            and mobile apps to AI solutions and enterprise software, all under
            one roof.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact">
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/services" variant="secondary">
              Explore Services
            </Button>
          </div>
          <AiBar />
        </Container>
      </section>

      <section className="border-y border-neutral-200 bg-white py-10">
        <Container>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {trustStats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <Icon className="h-5 w-5 text-primary-600" />
                <span className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--foreground)]">
                  {value}
                </span>
                <span className="mt-1 text-xs leading-relaxed text-neutral-600">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative isolate flex min-h-[420px] items-center overflow-hidden">
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src="/videos/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 -z-10 bg-primary-950/80" />
        <div className="absolute inset-0 -z-10 gradient-brand opacity-30 mix-blend-multiply" />
        <Container className="py-20 text-center">
          <span className="inline-block text-sm font-semibold tracking-wide text-primary-200 uppercase">
            Always moving
          </span>
          <h2 className="mx-auto mt-3 max-w-2xl font-[family-name:var(--font-heading)] text-3xl font-bold text-white sm:text-4xl">
            Steady progress, on every project
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Design, code, and strategy moving in the same direction —
            that&apos;s the pace we aim to keep on every engagement.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="Services built to move your business forward"
            description="From first line of code to final campaign, we cover the full range of what a modern business needs."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="relative isolate flex min-h-[380px] items-center overflow-hidden">
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src="/videos/tech-code.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 -z-10 bg-primary-950/80" />
        <Container className="py-16 text-center">
          <span className="inline-block text-sm font-semibold tracking-wide text-primary-200 uppercase">
            Under the hood
          </span>
          <h2 className="mx-auto mt-3 max-w-2xl font-[family-name:var(--font-heading)] text-3xl font-bold text-white sm:text-4xl">
            Built on modern, reliable technology
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Clean architecture, tested code, and tooling chosen for your
            project — not whatever&apos;s trendy this quarter.
          </p>
        </Container>
      </section>

      <section className="bg-primary-50/60 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Why JSK Corporation"
            title="A partner that acts like part of your team"
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map(({ icon: Icon, title, description }) => (
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

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Where we work"
            title="Industries we build for"
            description="Different sectors, different constraints — we adapt our approach to what your business and users actually need."
          />
          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {industries.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-neutral-200 px-4 py-8 text-center transition-colors hover:border-primary-200 hover:bg-primary-50/60"
              >
                <Icon className="h-6 w-6 text-primary-600" />
                <span className="text-sm font-medium text-[var(--foreground)]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="A simple, transparent process"
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(({ step, title, description }) => (
              <div key={step} className="relative rounded-2xl border border-neutral-200 p-6">
                <span className="font-[family-name:var(--font-heading)] text-3xl font-bold text-primary-100">
                  {step}
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--foreground)]">
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
          src="/videos/mobile-hands.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 -z-10 bg-primary-950/80" />
        <div className="absolute inset-0 -z-10 gradient-brand opacity-30 mix-blend-multiply" />
        <Container className="py-16 text-center">
          <span className="inline-block text-sm font-semibold tracking-wide text-primary-200 uppercase">
            Built for real usage
          </span>
          <h2 className="mx-auto mt-3 max-w-2xl font-[family-name:var(--font-heading)] text-3xl font-bold text-white sm:text-4xl">
            Designed for wherever your users are
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Desktop, mobile, tablet — every product we ship is built to feel
            right on the device it&apos;s actually used on.
          </p>
        </Container>
      </section>

      <section className="bg-primary-50/60 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our work"
            title="A sample of what we build"
            description="A few representative projects across our core service lines."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.slice(0, 3).map((item) => (
              <Link
                key={item.slug}
                href="/portfolio"
                className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-shadow hover:shadow-lg"
              >
                <div className="relative h-40 overflow-hidden">
                  <video
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-40 mix-blend-multiply`}
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold tracking-wide text-primary-600 uppercase">
                    {item.category}
                  </span>
                  <h3 className="mt-2 font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">{item.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/portfolio" variant="secondary">
              View full portfolio
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Questions"
            title="Frequently asked questions"
            description="Answers to what prospective clients ask us most."
          />
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
            {faqs.map(({ question, answer }) => (
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
