import Link from "next/link";
import {
  ArrowRight,
  Check,
  Apple,
  Smartphone,
  Layers,
  Server,
  Bell,
  Repeat,
  LifeBuoy,
  Search,
  ClipboardList,
  Wrench,
  Rocket,
  ShieldCheck,
  Building2,
  ShoppingCart,
  GraduationCap,
  Users2,
  Handshake,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/CTASection";
import { SITE_URL } from "@/lib/seo";
import { slugify } from "@/lib/slugify";

const subServices = [
  {
    icon: Apple,
    title: "Custom iOS App Development",
    description:
      "Native iOS apps built with Swift and SwiftUI — fast, polished, and designed to meet Apple's App Store guidelines from day one.",
  },
  {
    icon: Smartphone,
    title: "Custom Android App Development",
    description:
      "Native Android apps built with Kotlin and Jetpack Compose — reliable across device sizes, OS versions, and hardware.",
  },
  {
    icon: Layers,
    title: "Cross-Platform App Development",
    description:
      "React Native and Flutter apps that share one codebase across iOS and Android, without giving up native performance or feel.",
  },
  {
    icon: Wrench,
    title: "Mobile UI/UX Design",
    description:
      "Interfaces designed specifically for mobile — touch-first navigation, onboarding flows, and layouts that feel native on every screen.",
  },
  {
    icon: Server,
    title: "App Backend & API Development",
    description:
      "User accounts, authentication, databases, admin panels, and REST or GraphQL APIs that power your app's real functionality.",
  },
  {
    icon: Bell,
    title: "Push Notifications & Offline Support",
    description:
      "Real-time push notifications, background sync, and offline-first data handling so your app stays useful without a connection.",
  },
  {
    icon: ShoppingCart,
    title: "Payment & Third-Party Integrations",
    description:
      "Stripe, PayPal, Apple Pay, Google Pay, CRMs, analytics, maps, and other third-party APIs integrated cleanly into your app.",
  },
  {
    icon: Rocket,
    title: "App Store & Google Play Deployment",
    description:
      "Store listings, screenshots, review guidelines, and submission handled end-to-end so your launch doesn't get stuck in review.",
  },
  {
    icon: Repeat,
    title: "App Redesign & Modernization",
    description:
      "If your current app feels dated, slow, or hard to maintain, we redesign and rebuild it with better architecture and UX.",
  },
  {
    icon: LifeBuoy,
    title: "App Maintenance & Support",
    description:
      "OS updates, bug fixes, crash monitoring, new features, and ongoing support so your app keeps working as platforms evolve.",
  },
];

const techGroups = [
  {
    title: "Design & Prototyping",
    items: "Figma, Adobe XD, wireframes, interactive prototypes, mobile-first UI systems, design handoff.",
  },
  {
    title: "Native Development",
    items: "Swift, SwiftUI, Kotlin, Jetpack Compose, Xcode, Android Studio.",
  },
  {
    title: "Cross-Platform Development",
    items: "React Native, Flutter, Expo, shared component architecture.",
  },
  {
    title: "Backend & APIs",
    items: "Node.js, Express.js, Python, Django, FastAPI, Firebase, REST APIs, GraphQL, authentication systems.",
  },
  {
    title: "Databases",
    items: "PostgreSQL, MongoDB, Firebase Firestore, Realm, SQLite, offline-first data sync.",
  },
  {
    title: "Integrations",
    items: "Push notifications (FCM, APNs), Stripe, PayPal, Apple Pay, Google Pay, Firebase Analytics, Mixpanel, maps & location APIs.",
  },
  {
    title: "DevOps & Deployment",
    items: "App Store Connect, Google Play Console, Fastlane, CI/CD pipelines, TestFlight, staged rollouts.",
  },
  {
    title: "Monitoring & Security",
    items: "Crashlytics, Sentry, secure authentication, data encryption, performance profiling, app store compliance.",
  },
];

const processSteps = [
  { title: "Discovery & App Strategy", description: "We understand your business model, target users, competitors, and the platforms and features your app actually needs." },
  { title: "UX Planning & User Flow Mapping", description: "We map how users move through the app, where they may drop off, and what keeps them coming back." },
  { title: "UI Design in Figma", description: "Clean, modern, mobile-first screens designed and approved before development starts." },
  { title: "Prototype & Validation", description: "Interactive prototypes to validate the experience with real users before writing production code." },
  { title: "Native or Cross-Platform Development", description: "Swift, Kotlin, React Native, or Flutter — whichever fits your platforms, budget, and timeline best." },
  { title: "Backend & API Development", description: "User accounts, data storage, authentication, and business logic built to support the app properly." },
  { title: "Integrations", description: "Push notifications, payments, analytics, maps, and other third-party services connected cleanly." },
  { title: "Testing & QA", description: "Testing across real devices, OS versions, screen sizes, and network conditions before submission." },
  { title: "App Store Submission & Launch Support", description: "Store listing setup, review guideline compliance, and support through approval and launch." },
];

const whyUs = [
  { title: "We Think Beyond Design", description: "A beautiful app is important, but it isn't enough. We think about onboarding, retention, performance, and long-term usability." },
  { title: "We Build Around Your Real Business", description: "Your app should match your users, workflows, and goals — not a generic template pulled off the shelf." },
  { title: "We Understand Both App and Backend", description: "Many apps fail because the front-end and backend are treated separately. We connect how the app feels with how it actually works." },
  { title: "We Keep the Codebase Clean", description: "Clean code, organized architecture, and proper documentation make your app easier to extend and hand off over time." },
  { title: "We Support You After Launch", description: "OS updates, new devices, and app store policy changes don't stop after launch — we help you keep up." },
];

const useCases = [
  { icon: Building2, title: "For Small Businesses", description: "A simple, reliable app that gives customers an easy way to book, order, or reach your business directly." },
  { icon: Handshake, title: "For Service-Based Companies", description: "A branded app with scheduling, notifications, and account management that keeps clients engaged." },
  { icon: ShoppingCart, title: "For E-Commerce Brands", description: "A shopping app with fast browsing, secure checkout, and push notifications that bring customers back." },
  { icon: Rocket, title: "For Startups", description: "A lean MVP app that validates your idea fast and can grow into a full platform as you scale." },
  { icon: Users2, title: "For B2B Companies", description: "Field, portal, or internal apps that support operations and give your team mobile access to real data." },
  { icon: GraduationCap, title: "For Agencies", description: "White-label or development support for agencies that need reliable iOS, Android, or cross-platform delivery." },
  { icon: Repeat, title: "For Existing Apps", description: "A redesign, rebuild, performance fix, or technical takeover when your current app is no longer performing." },
];

const faqs = [
  { question: "Can JSK Corporation build a mobile app from scratch?", answer: "Yes. We can plan, design, develop, test, and launch a custom mobile app from scratch based on your business goals, users, and technical requirements." },
  { question: "Do you build native iOS and Android apps?", answer: "Yes. We build native apps with Swift and SwiftUI for iOS and Kotlin and Jetpack Compose for Android, when native performance matters most." },
  { question: "Do you work with React Native and Flutter?", answer: "Yes. For many projects, a single cross-platform codebase in React Native or Flutter is the faster, more cost-effective choice — we'll recommend what fits your goals." },
  { question: "Can you build the backend and APIs for my app?", answer: "Yes. We build user accounts, authentication, databases, admin panels, and REST or GraphQL APIs to power your app's real functionality." },
  { question: "Can you publish my app to the App Store and Google Play?", answer: "Yes. We handle store listings, screenshots, review guideline compliance, and submission so your launch doesn't stall in review." },
  { question: "Can you redesign my existing app?", answer: "Yes. If your current app feels outdated, slow, or hard to maintain, we redesign and rebuild it with better UX and architecture." },
  { question: "Can you take over a messy or half-finished app?", answer: "Yes. We review the current codebase, identify issues, fix bugs, clean up architecture, and rebuild parts where needed." },
  { question: "Will my app work offline?", answer: "Where it matters, yes — we build offline-first data handling and background sync so the app stays useful without a connection." },
  { question: "Do you offer app maintenance after launch?", answer: "Yes. We provide ongoing maintenance, OS-update compatibility, bug fixes, crash monitoring, and new feature development." },
  { question: "How do I know whether to build native or cross-platform?", answer: "You don't need to decide alone — we recommend the right approach based on your platforms, performance needs, budget, and timeline." },
];

type MobileAppLandingContentProps = {
  h1: string;
  heroLine: string;
  regionName?: string;
  regionSlug?: string;
  localAngle?: string;
  keywords?: string[];
  isHub?: boolean;
};

const SERVICE_SLUG = "mobile-app-development";

export default function MobileAppLandingContent({
  h1,
  heroLine,
  regionName,
  regionSlug,
  localAngle,
  keywords,
  isHub = false,
}: MobileAppLandingContentProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Mobile App Development Services",
    name: h1,
    description: heroLine,
    url: regionSlug
      ? `${SITE_URL}/mobile-app-development-services-${regionSlug}/`
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
          ? `${SITE_URL}/mobile-app-development-services-${regionSlug}/`
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
              <Link href="/services/mobile-app-development" className="hover:text-primary-600">
                Mobile App Development
              </Link>
            ) : (
              <span className="text-neutral-700">Mobile App Development</span>
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
              Whether you need a native iOS app, a native Android app, a
              cross-platform React Native or Flutter build, or a full backend
              and API to power it, we build around your users and your
              business goals — not around a reused template.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">
                Book a Free App Strategy Consultation <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="secondary">
                Request a Free App Audit
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
            title="Are you searching for a mobile app development company that actually understands business?"
            description="Most business owners aren't just looking for “an app” — they're looking for an app that keeps users engaged, doesn't crash, gets approved by the app stores, and doesn't disappear after launch."
          />
          <p className="mx-auto mt-8 max-w-3xl text-center text-neutral-600">
            That is exactly where JSK Corporation fits in. We combine product
            thinking, clean native and cross-platform development, backend
            engineering, and ongoing support to build apps that feel polished
            and work like real business systems.
          </p>
        </Container>
      </section>

      {/* Problem */}
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
        <Container className="py-16">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block text-sm font-semibold tracking-wide text-primary-200 uppercase">
              Most apps don&apos;t fail because of design
            </span>
            <h2 className="mx-auto mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-white sm:text-4xl">
              They fail because there was no strategy
            </h2>
            <p className="mx-auto mt-4 text-lg text-white/80">
              The app looked fine, but it drained the battery or crashed on
              older devices. It launched, but got stuck in app store review.
              It shipped, but no one could maintain it afterward. At
              JSK Corporation, we don&apos;t treat your app like a one-time build —
              we look at your users, workflows, platforms, and long-term
              roadmap, then build the app around that.
            </p>
          </div>
        </Container>
      </section>

      {/* Positioning */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our approach"
            title="Custom mobile app development built around your business"
            description="Off-the-shelf app builders can work for very simple projects. But when your business needs real functionality, offline support, integrations, or app store approval, a generic template quickly becomes a limitation."
          />
          <p className="mx-auto mt-8 max-w-3xl text-center text-neutral-600">
            JSK Corporation builds apps with a custom-first mindset — planned
            around your actual users and workflows, not forced into a
            template. Clean design, practical native or cross-platform
            development, solid backend architecture, and long-term support,
            so your app can grow with your business instead of holding it
            back.
          </p>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-primary-50/60 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What we build"
            title="Mobile app development services we provide"
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
            title="Frameworks, platforms & tools we work with"
            description="We help you choose the right technology based on your platforms, budget, performance needs, and long-term growth plan."
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
          <SectionHeading eyebrow="How we work" title="Our A-to-Z app development process" />
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
          <SectionHeading eyebrow="Built for you" title="What kind of app do you need?" />
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
                App development for {regionName} businesses
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
                <Search className="h-4 w-4" /> Free app audit
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--foreground)]">
                Not sure what your current app needs?
              </h2>
              <p className="mt-4 text-neutral-600">
                If your app is slow, crashing, outdated, losing users, or
                difficult to maintain, JSK Corporation can review it and show you
                what can be improved.
              </p>
              <div className="mt-8">
                <Button href="/contact">
                  Request a Free App Audit <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6">
              <ul className="space-y-3">
                {[
                  "UI/UX and onboarding review",
                  "Performance and crash review",
                  "App store listing review",
                  "Backend and API review",
                  "Security review",
                  "Offline behavior and sync review",
                  "Feature roadmap suggestions",
                  "App maintenance recommendations",
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
              Your app should belong to you
            </h2>
            <p className="mt-4 text-neutral-600">
              We don&apos;t believe in holding clients hostage with confusing
              systems, hidden access, or unclear ownership. With JSK Corporation,
              your app is built with transparency and long-term control in
              mind — proper app store account access, organized source
              control, clean architecture, and a system that can be
              maintained, improved, and expanded over time.
            </p>
          </div>
        </Container>
      </section>


      {!isHub && regionSlug && (
        <section className="pb-4">
          <Container>
            <p className="text-center text-sm text-neutral-500">
              Serving businesses across every state —{" "}
              <Link href="/mobile-app-development-services-usa" className="font-medium text-primary-600 hover:underline">
                view our nationwide app development overview
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
            ? `Ready to build an app for your ${regionName} business?`
            : "Ready to build an app for your business?"
        }
        description="JSK Corporation helps businesses build custom iOS, Android, and cross-platform apps that look professional, perform smoothly, and support real growth."
        primaryLabel="Book a Free App Strategy Consultation"
        primaryHref="/contact"
        secondaryLabel="Request a Free App Audit"
        secondaryHref="/contact"
      />
    </>
  );
}
