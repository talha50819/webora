import Link from "next/link";
import {
  ArrowRight,
  Check,
  Bot,
  BrainCircuit,
  Sparkles,
  Workflow,
  ScanSearch,
  Database,
  Puzzle,
  Activity,
  ClipboardList,
  Wrench,
  Rocket,
  ShieldCheck,
  Building2,
  ShoppingCart,
  GraduationCap,
  Users2,
  Headset,
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
    icon: Bot,
    title: "AI Chatbots & Virtual Assistants",
    description:
      "Conversational assistants for support, sales, or internal use, grounded in your actual content and workflows.",
  },
  {
    icon: BrainCircuit,
    title: "LLM & RAG Application Development",
    description:
      "Retrieval-augmented applications that answer questions and take action using your own documents and data.",
  },
  {
    icon: Sparkles,
    title: "Custom Model Development & Fine-Tuning",
    description:
      "Models tuned on your data when off-the-shelf models aren't precise enough for your use case.",
  },
  {
    icon: Workflow,
    title: "Process & Workflow Automation",
    description:
      "AI-driven automation that removes manual, repetitive work from real business processes.",
  },
  {
    icon: Search,
    title: "AI-Powered Search & Recommendations",
    description:
      "Semantic search and recommendation systems that help users find what they need faster.",
  },
  {
    icon: Database,
    title: "Data Pipeline & Infrastructure Setup",
    description:
      "Clean data pipelines and storage so AI features have reliable, well-structured data to work with.",
  },
  {
    icon: ScanSearch,
    title: "Computer Vision & Document Processing",
    description:
      "Image recognition and document extraction that turns unstructured content into usable data.",
  },
  {
    icon: Puzzle,
    title: "AI Integration Into Existing Systems",
    description:
      "AI features added into your current website, app, or software — not bolted on as a separate tool.",
  },
  {
    icon: Activity,
    title: "Model Evaluation, Monitoring & Retraining",
    description:
      "Ongoing evaluation and monitoring so performance and accuracy don't quietly degrade after launch.",
  },
  {
    icon: ClipboardList,
    title: "AI Strategy & Feasibility Assessment",
    description:
      "An honest assessment of where AI actually helps your business, and where it doesn't, before you invest.",
  },
];

const techGroups = [
  {
    title: "LLM Providers & Frameworks",
    items: "OpenAI, Anthropic Claude, Google Gemini, LangChain, LlamaIndex, prompt orchestration.",
  },
  {
    title: "Data & Machine Learning",
    items: "Python, PyTorch, TensorFlow, scikit-learn, pandas, vector databases (Pinecone, Weaviate, pgvector).",
  },
  {
    title: "Data Infrastructure",
    items: "ETL pipelines, data warehouses, Snowflake, BigQuery, Airflow, structured data modeling.",
  },
  {
    title: "Automation & Integrations",
    items: "Zapier, n8n, custom APIs, workflow orchestration, third-party system integrations.",
  },
  {
    title: "Backend & APIs",
    items: "Node.js, Python (FastAPI, Django), REST and GraphQL APIs, authentication and access control.",
  },
  {
    title: "Cloud & Deployment",
    items: "AWS, GCP, Azure, Docker, CI/CD, serverless inference, scalable model hosting.",
  },
  {
    title: "Monitoring & Evaluation",
    items: "Evaluation frameworks, observability tooling, drift detection, custom performance dashboards.",
  },
  {
    title: "Security & Compliance",
    items: "Data privacy controls, access control, prompt and data governance, audit logging.",
  },
];

const processSteps = [
  { title: "Discovery & AI Feasibility Assessment", description: "We identify where AI can realistically create value for your business, and where it can't." },
  { title: "Data Audit & Readiness Review", description: "We review your existing data to understand what's usable and what needs cleanup first." },
  { title: "Use Case Prioritization", description: "We prioritize use cases by impact and effort, so the first build proves value fast." },
  { title: "Prototype & Proof of Concept", description: "A working prototype validates the approach before committing to full production development." },
  { title: "Model Selection or Fine-Tuning", description: "We choose the right foundation model or fine-tune one on your data, based on accuracy and cost." },
  { title: "Integration & Backend Development", description: "AI features are integrated into your real systems, with the backend to support them properly." },
  { title: "Testing & Evaluation", description: "We test outputs against real scenarios, not just happy-path demos, before launch." },
  { title: "Deployment & Launch", description: "The system goes live with monitoring in place from day one." },
  { title: "Monitoring, Retraining & Iteration", description: "We track performance over time and retrain or adjust as your data and usage evolve." },
];

const whyUs = [
  { title: "We Think Beyond the Demo", description: "A slick demo is easy. We focus on what holds up in production, with real users and real data." },
  { title: "We Build Around Your Real Data", description: "AI features are grounded in your actual business data and workflows, not generic examples." },
  { title: "We Understand AI and Production Engineering", description: "Many AI projects fail at the integration and infrastructure stage — we handle both sides." },
  { title: "We Keep Systems Evaluated & Monitored", description: "Model performance is tracked over time, so quality doesn't quietly drift after launch." },
  { title: "We Support You After Launch", description: "AI systems need maintenance and retraining — we stay involved as your data and needs change." },
];

const useCases = [
  { icon: Building2, title: "For Small Businesses", description: "AI chat and support automation that handles common questions so your team can focus elsewhere." },
  { icon: ShoppingCart, title: "For E-Commerce Brands", description: "AI-powered search and recommendations that help shoppers find products faster and buy more." },
  { icon: Users2, title: "For B2B Companies", description: "Internal automation and document processing that cuts manual work out of daily operations." },
  { icon: Rocket, title: "For Startups", description: "AI-native product features built in from the start, not retrofitted after launch." },
  { icon: Headset, title: "For Customer Support Teams", description: "Chatbots and deflection tools that resolve common tickets before they reach a human agent." },
  { icon: GraduationCap, title: "For Agencies", description: "White-label AI integration support for agencies that need reliable delivery for their clients." },
  { icon: Puzzle, title: "For Existing Products", description: "AI features added into an app or platform that already exists, without a disruptive rebuild." },
];

const faqs = [
  { question: "Can JSK Corporation build an AI feature from scratch?", answer: "Yes. We can assess feasibility, prototype, build, and launch a custom AI feature based on your business goals and data." },
  { question: "Do you build chatbots and virtual assistants?", answer: "Yes. We build chat and assistant experiences grounded in your own content, for support, sales, or internal use." },
  { question: "What is RAG and do you build RAG applications?", answer: "RAG (retrieval-augmented generation) lets an AI system answer questions using your own documents and data. Yes, we build these regularly." },
  { question: "Can you fine-tune a custom model on our data?", answer: "Yes, when it makes sense. We'll also tell you honestly when a fine-tuned model isn't necessary and a simpler approach works better." },
  { question: "Will AI be trained on our proprietary data safely?", answer: "Yes. We implement data privacy controls, access restrictions, and governance so your proprietary data stays protected." },
  { question: "Can you automate manual workflows with AI?", answer: "Yes. We identify repetitive, manual processes and build automation that removes that work from your team's plate." },
  { question: "Do you integrate AI into an existing app or website?", answer: "Yes. We add AI features into your current systems rather than requiring a separate, disconnected tool." },
  { question: "How do you monitor AI models after launch?", answer: "We set up evaluation and monitoring from day one, tracking accuracy and performance so issues are caught early." },
  { question: "Is our data secure and private?", answer: "Yes. We implement access controls, data governance, and audit logging appropriate to your industry and compliance needs." },
  { question: "How do we know if AI is actually worth it for our business?", answer: "That's exactly what our feasibility assessment is for — an honest review of where AI helps, and where it doesn't." },
];

type AiMlLandingContentProps = {
  h1: string;
  heroLine: string;
  regionName?: string;
  regionSlug?: string;
  localAngle?: string;
  keywords?: string[];
  isHub?: boolean;
};

const SERVICE_SLUG = "ai-ml-solutions";

export default function AiMlLandingContent({
  h1,
  heroLine,
  regionName,
  regionSlug,
  localAngle,
  keywords,
  isHub = false,
}: AiMlLandingContentProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI/ML Solutions",
    name: h1,
    description: heroLine,
    url: regionSlug
      ? `${SITE_URL}/ai-ml-solutions-${regionSlug}/`
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
          ? `${SITE_URL}/ai-ml-solutions-${regionSlug}/`
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
              <Link href="/services/ai-ml-solutions" className="hover:text-primary-600">
                AI/ML Solutions
              </Link>
            ) : (
              <span className="text-neutral-700">AI/ML Solutions</span>
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
              Whether you need an AI chatbot, a RAG application over your own
              documents, workflow automation, or a custom model built on your
              data, we build around what your business actually needs — not
              around a trending demo.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">
                Book a Free AI Strategy Consultation <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="secondary">
                Request a Free AI Opportunity Assessment
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
            title="Are you searching for an AI partner that actually understands business?"
            description="Most business owners aren't just looking for “AI” — they're looking for less manual work, faster answers for customers, and features that hold up in production, not just in a demo."
          />
          <p className="mx-auto mt-8 max-w-3xl text-center text-neutral-600">
            That is exactly where JSK Corporation fits in. We combine practical AI
            engineering, clean data infrastructure, and production-grade
            integration to build AI features that work like real business
            systems.
          </p>
        </Container>
      </section>

      {/* Problem */}
      <section className="relative isolate flex min-h-[380px] items-center overflow-hidden">
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src="/videos/portfolio-ai.mp4"
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
              Most AI projects don&apos;t fail because of the model
            </span>
            <h2 className="mx-auto mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-white sm:text-4xl">
              They fail because there was no plan past the demo
            </h2>
            <p className="mx-auto mt-4 text-lg text-white/80">
              The prototype looked impressive, but it never got integrated
              into a real workflow. The chatbot launched, but no one
              monitored its answers. The data was messy, so the model
              underperformed from day one. At JSK Corporation, we don&apos;t treat
              AI as a novelty feature — we build it around your data,
              workflows, and long-term maintenance.
            </p>
          </div>
        </Container>
      </section>

      {/* Positioning */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our approach"
            title="AI/ML solutions built around your business"
            description="Off-the-shelf AI widgets can work for very simple use cases. But when your business needs accuracy, integration, and long-term reliability, a bolted-on tool quickly becomes a liability."
          />
          <p className="mx-auto mt-8 max-w-3xl text-center text-neutral-600">
            JSK Corporation builds AI features with a data-first mindset — planned
            around your actual workflows and information, not forced into a
            generic chatbot widget. Clean data pipelines, evaluated models,
            and monitored systems, so your AI investment keeps working after
            launch.
          </p>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-primary-50/60 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What we build"
            title="AI/ML services we provide"
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
            description="We choose the right models, infrastructure, and tooling based on your data, budget, and accuracy requirements."
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
          <SectionHeading eyebrow="How we work" title="Our A-to-Z AI/ML delivery process" />
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
          <SectionHeading eyebrow="Built for you" title="What kind of AI solution do you need?" />
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
                AI/ML solutions for {regionName} businesses
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
                <Search className="h-4 w-4" /> Free AI opportunity assessment
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--foreground)]">
                Not sure where AI actually fits in your business?
              </h2>
              <p className="mt-4 text-neutral-600">
                If you&apos;re not sure where AI would actually help, whether
                your data is ready, or if an existing AI feature isn&apos;t
                performing, JSK Corporation can review it and show you what&apos;s
                worth pursuing.
              </p>
              <div className="mt-8">
                <Button href="/contact">
                  Request a Free AI Opportunity Assessment <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6">
              <ul className="space-y-3">
                {[
                  "Data readiness review",
                  "Use case identification",
                  "Feasibility and ROI review",
                  "Existing AI/automation review",
                  "Security and compliance review",
                  "Model performance review (if applicable)",
                  "Integration review",
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
              Your AI systems and data should belong to you
            </h2>
            <p className="mt-4 text-neutral-600">
              We don&apos;t believe in holding clients hostage with confusing
              systems, hidden access, or unclear ownership. With JSK Corporation,
              you retain full ownership of your models, prompts, pipelines,
              and infrastructure — a system that can be maintained, improved,
              and expanded over time, with no vendor lock-in.
            </p>
          </div>
        </Container>
      </section>


      {!isHub && regionSlug && (
        <section className="pb-4">
          <Container>
            <p className="text-center text-sm text-neutral-500">
              Serving businesses across every state —{" "}
              <Link href="/ai-ml-solutions-usa" className="font-medium text-primary-600 hover:underline">
                view our nationwide AI/ML solutions overview
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
            ? `Ready to build AI features for your ${regionName} business?`
            : "Ready to build AI features for your business?"
        }
        description="JSK Corporation helps businesses build AI chatbots, automation, and custom models that look professional, run reliably, and support real growth."
        primaryLabel="Book a Free AI Strategy Consultation"
        primaryHref="/contact"
        secondaryLabel="Request a Free AI Opportunity Assessment"
        secondaryHref="/contact"
      />
    </>
  );
}
