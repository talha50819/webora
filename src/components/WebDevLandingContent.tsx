import Link from "next/link";
import {
  ArrowRight,
  Check,
  Globe,
  Layers,
  ShoppingCart,
  Server,
  AppWindow,
  RefreshCw,
  LifeBuoy,
  Search,
  ClipboardList,
  Wrench,
  Rocket,
  ShieldCheck,
  Building2,
  Store,
  GraduationCap,
  Users2,
  FileSearch,
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
    icon: Globe,
    title: "Custom Website Development",
    description:
      "Professional, responsive, and scalable websites for businesses that need more than a generic online presence. Every section is planned to support clarity, trust, and conversion.",
  },
  {
    icon: Building2,
    title: "Business Website Design",
    description:
      "For service-based businesses, agencies, consultants, clinics, real estate firms, education brands, financial services, local businesses, and B2B companies that need a strong digital foundation.",
  },
  {
    icon: FileSearch,
    title: "WordPress Website Development",
    description:
      "Custom WordPress websites that are easy to manage, fast, mobile-friendly, and structured for SEO — custom themes, Elementor, WooCommerce, blogs, and business websites.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Website Development",
    description:
      "Online stores with clean product pages, secure checkout flows, payment gateways, inventory structure, shipping setup, customer accounts, and conversion-focused experiences.",
  },
  {
    icon: Store,
    title: "Shopify & WooCommerce Development",
    description:
      "Shopify stores, WooCommerce websites, product catalogs, custom checkout, subscription setup, or store redesigns — built for an easy shopping and easy management experience.",
  },
  {
    icon: Layers,
    title: "React & Next.js Development",
    description:
      "Fast, modern, scalable front-end experiences — React and Next.js websites, dashboards, portals, and web applications with clean component-based architecture.",
  },
  {
    icon: Server,
    title: "Node.js Backend Development",
    description:
      "Backend systems, APIs, admin panels, dashboards, user accounts, authentication flows, database logic, and custom business features.",
  },
  {
    icon: AppWindow,
    title: "Web Application Development",
    description:
      "Custom web applications such as customer portals, internal tools, dashboards, booking systems, reporting platforms, CRM-style systems, and workflow-based business software.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign Services",
    description:
      "If your current website looks outdated, loads slowly, confuses visitors, or no longer represents your business, we redesign it with better branding, structure, speed, and flow.",
  },
  {
    icon: LifeBuoy,
    title: "Website Maintenance & Support",
    description:
      "Updates, backups, bug fixes, speed improvements, security checks, content updates, hosting support, and ongoing website optimization after launch.",
  },
];

const techGroups = [
  {
    title: "Design & Prototyping",
    items: "Figma, Adobe XD, Photoshop, Illustrator, wireframes, UI systems, landing page layouts, mobile-first design, UX planning, design handoff.",
  },
  {
    title: "Front-End Development",
    items: "HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js, Vue.js, Tailwind CSS, Bootstrap, responsive layouts, animation, component-based interfaces.",
  },
  {
    title: "CMS & Website Builders",
    items: "WordPress, WooCommerce, Shopify, Webflow, Elementor, custom WordPress themes, custom CMS structures, content-managed business websites.",
  },
  {
    title: "Backend Development",
    items: "Node.js, Express.js, Python, Django, FastAPI, PHP, Laravel, REST APIs, GraphQL, authentication systems, admin panels, custom backend logic.",
  },
  {
    title: "Databases",
    items: "MySQL, PostgreSQL, MongoDB, Firebase, Supabase, database architecture, data modeling, performance optimization.",
  },
  {
    title: "E-Commerce & Payments",
    items: "Shopify, WooCommerce, Stripe, PayPal, Authorize.net, subscription billing, product catalogs, checkout optimization, payment gateway integration.",
  },
  {
    title: "CRM, ERP & Integrations",
    items: "CRM integrations, ERP connections, form automation, email marketing tools, analytics platforms, booking tools, lead management, custom data syncing.",
  },
  {
    title: "DevOps, Hosting & Deployment",
    items: "Vercel, Netlify, AWS, DigitalOcean, cPanel, VPS hosting, GitHub, GitLab, Docker, CI/CD pipelines, SSL setup, backups, staging environments.",
  },
  {
    title: "SEO, Performance & Security",
    items: "Technical SEO, Core Web Vitals, schema markup, page speed optimization, SSL, CDN setup, secure forms, malware protection, backups, monitoring.",
  },
];

const processSteps = [
  { title: "Discovery & Website Strategy", description: "We understand your business model, target audience, competitors, services, conversion goals, and technical requirements." },
  { title: "UX Planning & Wireframing", description: "We map how visitors will move through the site, where they may hesitate, and what action they should take next." },
  { title: "UI Design in Figma", description: "Clean, modern, conversion-focused layouts designed before development starts, so there's no confusion later." },
  { title: "Front-End Development", description: "A responsive, fast, user-friendly front-end using the right technology — HTML, CSS, JavaScript, React, Next.js, or WordPress." },
  { title: "Backend & CMS Development", description: "Dynamic content, admin controls, user accounts, forms, dashboards, APIs, and database features, built to support your site properly." },
  { title: "Integrations", description: "Connecting your website with the tools your business uses — CRMs, ERPs, payment gateways, email platforms, analytics, and automation software." },
  { title: "SEO, Speed & Security", description: "Clean headings, metadata, mobile responsiveness, fast loading, secure forms, SSL, and technical SEO basics before launch." },
  { title: "Testing & Launch", description: "Testing across devices, browsers, screen sizes, forms, links, speed, and user flows before going live — then support through launch." },
  { title: "Maintenance & Growth Support", description: "Ongoing updates, improvements, backups, monitoring, bug fixes, new features, and optimization after launch." },
];

const whyUs = [
  { title: "We Think Beyond Design", description: "A beautiful website is important, but it isn't enough. We think about messaging, user flow, conversion, speed, SEO, and long-term usability." },
  { title: "We Build Around Your Real Business", description: "Your website should match your services, audience, sales process, and goals — not a generic layout." },
  { title: "We Understand Front-End and Backend", description: "Many websites fail because design and development are treated separately. We connect how the site looks with how it actually works." },
  { title: "We Keep the Structure Clean", description: "Clean code, organized assets, proper access, and maintainable systems make your website easier to improve over time." },
  { title: "We Support You After Launch", description: "A website needs care after it goes live. We help with maintenance, updates, performance, security, and future improvements." },
];

const useCases = [
  { icon: Building2, title: "For Small Businesses", description: "A professional website that explains your services, builds trust, gets inquiries, and gives your business a stronger online presence." },
  { icon: Handshake, title: "For Service-Based Companies", description: "A conversion-focused website with strong service pages, clear messaging, calls-to-action, contact forms, and SEO structure." },
  { icon: ShoppingCart, title: "For E-Commerce Brands", description: "A store that makes it easy for customers to browse, understand products, add to cart, and complete checkout without friction." },
  { icon: Rocket, title: "For Startups", description: "A scalable website or MVP that can start lean, validate your idea, and grow into a larger platform as your business develops." },
  { icon: Users2, title: "For B2B Companies", description: "A professional digital presence that explains complex services clearly, supports lead generation, and helps buyers trust your company." },
  { icon: GraduationCap, title: "For Agencies", description: "White-label or development support for agencies that need reliable website design, WordPress, React, Next.js, or web application development." },
  { icon: RefreshCw, title: "For Existing Websites", description: "A redesign, rebuild, speed optimization, bug fix, SEO cleanup, or technical takeover when your current website is no longer performing." },
];

const faqs = [
  { question: "Can JSK Corporation build a custom website from scratch?", answer: "Yes. We can plan, design, develop, test, and launch a custom website from scratch based on your business goals, brand, audience, and technical requirements." },
  { question: "Do you provide WordPress development services?", answer: "Yes. We build custom WordPress websites, business websites, landing pages, blogs, WooCommerce stores, and WordPress redesigns, plus speed, SEO, and security improvements." },
  { question: "Can you convert a Figma design into a website?", answer: "Yes. We can convert Figma designs into responsive websites using WordPress, Webflow, HTML/CSS, React, Next.js, or another suitable technology." },
  { question: "Do you work with React, Next.js, and Node.js?", answer: "Yes. We work with React and Next.js for modern front-end development and Node.js for backend systems, APIs, dashboards, portals, and custom features." },
  { question: "Can you build an e-commerce website?", answer: "Yes. We build e-commerce websites using Shopify, WooCommerce, or custom development, including product pages, checkout, payments, shipping, and store optimization." },
  { question: "Can you redesign my existing website?", answer: "Yes. If your current website looks outdated, loads slowly, or doesn't convert visitors, we redesign it with better visuals, messaging, UX, and performance." },
  { question: "Can you take over a messy or half-finished website?", answer: "Yes. We review your current website, identify issues, fix bugs, clean up structure, improve performance, and rebuild parts where needed." },
  { question: "Will my website be SEO-friendly?", answer: "Yes. We build with technical SEO basics in mind — clean structure, proper headings, metadata, internal linking, fast loading, and mobile responsiveness." },
  { question: "Do you offer website maintenance after launch?", answer: "Yes. We provide ongoing maintenance, backups, updates, security checks, bug fixes, content updates, and speed optimization." },
  { question: "How do I know which technology is right for my website?", answer: "You don't need to decide alone — we recommend the right technology based on your goals, whether that's WordPress, Shopify, React, Next.js, or Node.js." },
];

type WebDevLandingContentProps = {
  h1: string;
  heroLine: string;
  regionName?: string;
  regionSlug?: string;
  localAngle?: string;
  keywords?: string[];
  isHub?: boolean;
};

const SERVICE_SLUG = "web-development";

export default function WebDevLandingContent({
  h1,
  heroLine,
  regionName,
  regionSlug,
  localAngle,
  keywords,
  isHub = false,
}: WebDevLandingContentProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Web Development Services",
    name: h1,
    description: heroLine,
    url: regionSlug
      ? `${SITE_URL}/custom-web-development-services-${regionSlug}/`
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
          ? `${SITE_URL}/custom-web-development-services-${regionSlug}/`
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
              <Link href="/services/web-development" className="hover:text-primary-600">
                Web Development
              </Link>
            ) : (
              <span className="text-neutral-700">Web Development</span>
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
              Whether you need a WordPress website, a React or Next.js
              front-end, a Node.js backend, a Shopify or WooCommerce store, or
              a fully custom web platform, we build around your business
              goals — not around a reused template.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">
                Book a Free Web Strategy Consultation <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="secondary">
                Request a Free Website Audit
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
            title="Are you searching for a web development company that actually understands business?"
            description="Most business owners aren't just looking for “a website” — they're looking for a site that brings leads, converts ad traffic, makes buying easy, and doesn't disappear after launch."
          />
          <p className="mx-auto mt-8 max-w-3xl text-center text-neutral-600">
            That is exactly where JSK Corporation fits in. We combine design
            thinking, clean development, conversion strategy, SEO structure,
            and technical support to build websites that feel professional
            and work like real business systems.
          </p>
        </Container>
      </section>

      {/* Problem */}
      <section className="relative isolate flex min-h-[380px] items-center overflow-hidden">
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src="/videos/focus-work.mp4"
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
              Most websites don&apos;t fail because of design
            </span>
            <h2 className="mx-auto mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-white sm:text-4xl">
              They fail because there was no strategy
            </h2>
            <p className="mx-auto mt-4 text-lg text-white/80">
              The design looked nice, but the site was slow. The pages were
              live, but visitors weren&apos;t converting. The site launched,
              but no one knew how to maintain it. At JSK Corporation, we don&apos;t
              treat your website like a one-time design task — we look at
              your audience, sales process, content, technical needs, and SEO
              goals, then build the website around that.
            </p>
          </div>
        </Container>
      </section>

      {/* Positioning */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our approach"
            title="Custom website development built around your business"
            description="Templates can work for very simple sites. But when your business needs stronger branding, better speed, custom functionality, or SEO structure, a basic template quickly becomes a limitation."
          />
          <p className="mx-auto mt-8 max-w-3xl text-center text-neutral-600">
            JSK Corporation builds websites and web platforms with a custom-first
            mindset — planned around your actual business, not forced into a
            layout hundreds of other companies already use. Clean design,
            practical development, strong structure, mobile responsiveness,
            performance, security, and flexibility, so your website can grow
            with your business instead of holding it back.
          </p>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-primary-50/60 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What we build"
            title="Website design & development services we provide"
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
            description="We help you choose the right technology based on your goals, budget, performance needs, content management needs, and long-term growth plan."
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
          <SectionHeading eyebrow="How we work" title="Our A-to-Z web development process" />
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
          <SectionHeading eyebrow="Built for you" title="What kind of website do you need?" />
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
                Website development for {regionName} businesses
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
                <Search className="h-4 w-4" /> Free website audit
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--foreground)]">
                Not sure what your current website needs?
              </h2>
              <p className="mt-4 text-neutral-600">
                If your website is slow, outdated, confusing, not generating
                leads, or difficult to manage, JSK Corporation can review it and
                show you what can be improved.
              </p>
              <div className="mt-8">
                <Button href="/contact">
                  Request a Free Website Audit <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6">
              <ul className="space-y-3">
                {[
                  "Design and first-impression review",
                  "Mobile experience check",
                  "Page speed and performance review",
                  "SEO structure review",
                  "Conversion flow review",
                  "Technical and security observations",
                  "Content and call-to-action suggestions",
                  "Website maintenance recommendations",
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
              Your website should belong to you
            </h2>
            <p className="mt-4 text-neutral-600">
              We don&apos;t believe in holding clients hostage with confusing
              systems, hidden access, or unclear ownership. With JSK Corporation,
              your website is built with transparency and long-term control
              in mind — proper access, organized assets, clean structure, and
              a system that can be maintained, improved, and expanded over
              time.
            </p>
          </div>
        </Container>
      </section>


      {!isHub && regionSlug && (
        <section className="pb-4">
          <Container>
            <p className="text-center text-sm text-neutral-500">
              Serving businesses across every state —{" "}
              <Link href="/custom-web-development-services-usa" className="font-medium text-primary-600 hover:underline">
                view our nationwide web development overview
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
            ? `Ready to build a website for your ${regionName} business?`
            : "Ready to build a website for your business?"
        }
        description="JSK Corporation helps businesses build custom websites, e-commerce stores, landing pages, web applications, and digital systems that look professional, perform smoothly, and support real growth."
        primaryLabel="Book a Free Web Strategy Consultation"
        primaryHref="/contact"
        secondaryLabel="Request a Free Website Audit"
        secondaryHref="/contact"
      />
    </>
  );
}
