import { slugify } from "@/lib/slugify";

export type SubService = {
  slug: string;
  title: string;
  description: string;
};

const raw: Record<string, { title: string; description: string }[]> = {
  "web-development": [
    {
      title: "Custom Website Development",
      description:
        "Professional, responsive, and scalable websites for businesses that need more than a generic online presence. Every section is planned to support clarity, trust, and conversion.",
    },
    {
      title: "Business Website Design",
      description:
        "For service-based businesses, agencies, consultants, clinics, real estate firms, education brands, financial services, local businesses, and B2B companies that need a strong digital foundation.",
    },
    {
      title: "WordPress Website Development",
      description:
        "Custom WordPress websites that are easy to manage, fast, mobile-friendly, and structured for SEO — custom themes, Elementor, WooCommerce, blogs, and business websites.",
    },
    {
      title: "E-Commerce Website Development",
      description:
        "Online stores with clean product pages, secure checkout flows, payment gateways, inventory structure, shipping setup, customer accounts, and conversion-focused experiences.",
    },
    {
      title: "Shopify & WooCommerce Development",
      description:
        "Shopify stores, WooCommerce websites, product catalogs, custom checkout, subscription setup, or store redesigns — built for an easy shopping and easy management experience.",
    },
    {
      title: "React & Next.js Development",
      description:
        "Fast, modern, scalable front-end experiences — React and Next.js websites, dashboards, portals, and web applications with clean component-based architecture.",
    },
    {
      title: "Node.js Backend Development",
      description:
        "Backend systems, APIs, admin panels, dashboards, user accounts, authentication flows, database logic, and custom business features.",
    },
    {
      title: "Web Application Development",
      description:
        "Custom web applications such as customer portals, internal tools, dashboards, booking systems, reporting platforms, CRM-style systems, and workflow-based business software.",
    },
    {
      title: "Website Redesign Services",
      description:
        "If your current website looks outdated, loads slowly, confuses visitors, or no longer represents your business, we redesign it with better branding, structure, speed, and flow.",
    },
    {
      title: "Website Maintenance & Support",
      description:
        "Updates, backups, bug fixes, speed improvements, security checks, content updates, hosting support, and ongoing website optimization after launch.",
    },
  ],
  "mobile-app-development": [
    {
      title: "Custom iOS App Development",
      description:
        "Native iOS apps built with Swift and SwiftUI — fast, polished, and designed to meet Apple's App Store guidelines from day one.",
    },
    {
      title: "Custom Android App Development",
      description:
        "Native Android apps built with Kotlin and Jetpack Compose — reliable across device sizes, OS versions, and hardware.",
    },
    {
      title: "Cross-Platform App Development",
      description:
        "React Native and Flutter apps that share one codebase across iOS and Android, without giving up native performance or feel.",
    },
    {
      title: "Mobile UI/UX Design",
      description:
        "Interfaces designed specifically for mobile — touch-first navigation, onboarding flows, and layouts that feel native on every screen.",
    },
    {
      title: "App Backend & API Development",
      description:
        "User accounts, authentication, databases, admin panels, and REST or GraphQL APIs that power your app's real functionality.",
    },
    {
      title: "Push Notifications & Offline Support",
      description:
        "Real-time push notifications, background sync, and offline-first data handling so your app stays useful without a connection.",
    },
    {
      title: "Payment & Third-Party Integrations",
      description:
        "Stripe, PayPal, Apple Pay, Google Pay, CRMs, analytics, maps, and other third-party APIs integrated cleanly into your app.",
    },
    {
      title: "App Store & Google Play Deployment",
      description:
        "Store listings, screenshots, review guidelines, and submission handled end-to-end so your launch doesn't get stuck in review.",
    },
    {
      title: "App Redesign & Modernization",
      description:
        "If your current app feels dated, slow, or hard to maintain, we redesign and rebuild it with better architecture and UX.",
    },
    {
      title: "App Maintenance & Support",
      description:
        "OS updates, bug fixes, crash monitoring, new features, and ongoing support so your app keeps working as platforms evolve.",
    },
  ],
  "ui-ux-design": [
    {
      title: "User Research & Journey Mapping",
      description:
        "Interviews, surveys, and journey mapping that uncover what users actually need before a single screen gets designed.",
    },
    {
      title: "Wireframing & Prototyping",
      description:
        "Low-fidelity wireframes and interactive prototypes that validate structure and flow before visual design begins.",
    },
    {
      title: "UI Design in Figma",
      description:
        "Clean, modern, on-brand visual design — every screen built to be both attractive and genuinely easy to use.",
    },
    {
      title: "Design Systems & Component Libraries",
      description:
        "Reusable components, design tokens, and style guides that keep your product consistent as it scales.",
    },
    {
      title: "Usability Testing",
      description:
        "Real users testing real flows — so decisions are based on observed behavior, not assumptions.",
    },
    {
      title: "Accessibility (WCAG) Reviews",
      description:
        "Color contrast, keyboard navigation, and screen-reader compatibility reviewed against WCAG guidelines.",
    },
    {
      title: "Mobile App UI/UX Design",
      description:
        "Touch-first navigation, onboarding flows, and layouts designed specifically for how people use apps.",
    },
    {
      title: "Web & SaaS Product Design",
      description:
        "Dashboards, portals, and complex product interfaces designed to make advanced features feel simple.",
    },
    {
      title: "Design-to-Development Handoff",
      description:
        "Structured specs, redlines, and Figma Dev Mode handoff so engineering builds exactly what was designed.",
    },
    {
      title: "UX Audits & Redesigns",
      description:
        "If your current product feels confusing, dated, or hard to use, we audit it and redesign what's holding it back.",
    },
  ],
  "graphic-design-branding": [
    {
      title: "Logo & Visual Identity Design",
      description:
        "A distinct logo and visual identity built to be recognizable, flexible across formats, and true to your brand.",
    },
    {
      title: "Brand Strategy & Positioning",
      description:
        "Clarity on who you are, who you're for, and how you're different — before a single visual gets designed.",
    },
    {
      title: "Brand Guidelines & Style Guides",
      description:
        "Documented rules for logo usage, color, typography, and tone so your brand stays consistent across every team and vendor.",
    },
    {
      title: "Marketing & Sales Collateral",
      description:
        "Brochures, sales sheets, business cards, and other materials designed to match your brand and support real sales conversations.",
    },
    {
      title: "Packaging & Print Design",
      description:
        "Packaging and print-ready design that stands out on a shelf or in a box, with production specs handled correctly.",
    },
    {
      title: "Social Media Design Kits",
      description:
        "Templates and assets that keep your social presence consistent, on-brand, and easy for your team to maintain.",
    },
    {
      title: "Presentation & Pitch Deck Design",
      description:
        "Pitch decks and presentations designed to look credible and communicate your message clearly to investors or clients.",
    },
    {
      title: "Website & Digital Brand Assets",
      description:
        "Digital-ready brand assets — icons, banners, email headers — built to translate cleanly onto your website and campaigns.",
    },
    {
      title: "Brand Refresh & Rebranding",
      description:
        "If your current brand feels dated or inconsistent, we refresh or rebuild it while preserving the recognition you've already earned.",
    },
    {
      title: "Ongoing Design Support & Retainers",
      description:
        "Continued design support for new campaigns, collateral, and assets as your brand and marketing needs evolve.",
    },
  ],
  "digital-marketing": [
    {
      title: "SEO Strategy & Technical Audits",
      description:
        "Keyword strategy, on-page structure, and technical fixes that build sustainable organic visibility, not short-term tricks.",
    },
    {
      title: "Paid Search Advertising",
      description:
        "Google Ads campaigns built around intent and conversion tracking, so ad spend goes toward leads, not just clicks.",
    },
    {
      title: "Paid Social Advertising",
      description:
        "Meta, LinkedIn, and TikTok campaigns targeted to the audiences most likely to convert for your business.",
    },
    {
      title: "Email Marketing & Automation",
      description:
        "Lifecycle emails, campaigns, and automated flows that keep leads warm and turn customers into repeat buyers.",
    },
    {
      title: "Social Media Management",
      description:
        "Content calendars, scheduling, and community management that keep your brand active and consistent.",
    },
    {
      title: "Conversion Rate Optimization",
      description:
        "Landing page and funnel testing that turns more of your existing traffic into leads and sales.",
    },
    {
      title: "Content & SEO Copywriting Strategy",
      description:
        "Content planning built around real search intent, so pages and posts support both users and rankings.",
    },
    {
      title: "Analytics & Reporting Dashboards",
      description:
        "Clear, honest dashboards that show what's working, what isn't, and where budget should move next.",
    },
    {
      title: "Local SEO & Google Business Profile",
      description:
        "Local listings, reviews, and map pack optimization for businesses that depend on nearby customers finding them.",
    },
    {
      title: "Marketing Strategy & Campaign Planning",
      description:
        "A channel plan built around your actual sales funnel, budget, and growth goals — not a generic playbook.",
    },
  ],
  "ai-ml-solutions": [
    {
      title: "AI Chatbots & Virtual Assistants",
      description:
        "Conversational assistants for support, sales, or internal use, grounded in your actual content and workflows.",
    },
    {
      title: "LLM & RAG Application Development",
      description:
        "Retrieval-augmented applications that answer questions and take action using your own documents and data.",
    },
    {
      title: "Custom Model Development & Fine-Tuning",
      description:
        "Models tuned on your data when off-the-shelf models aren't precise enough for your use case.",
    },
    {
      title: "Process & Workflow Automation",
      description:
        "AI-driven automation that removes manual, repetitive work from real business processes.",
    },
    {
      title: "AI-Powered Search & Recommendations",
      description:
        "Semantic search and recommendation systems that help users find what they need faster.",
    },
    {
      title: "Data Pipeline & Infrastructure Setup",
      description:
        "Clean data pipelines and storage so AI features have reliable, well-structured data to work with.",
    },
    {
      title: "Computer Vision & Document Processing",
      description:
        "Image recognition and document extraction that turns unstructured content into usable data.",
    },
    {
      title: "AI Integration Into Existing Systems",
      description:
        "AI features added into your current website, app, or software — not bolted on as a separate tool.",
    },
    {
      title: "Model Evaluation, Monitoring & Retraining",
      description:
        "Ongoing evaluation and monitoring so performance and accuracy don't quietly degrade after launch.",
    },
    {
      title: "AI Strategy & Feasibility Assessment",
      description:
        "An honest assessment of where AI actually helps your business, and where it doesn't, before you invest.",
    },
  ],
  "content-creation": [
    {
      title: "Video Production & Editing",
      description:
        "Brand videos, promos, and campaign content — shot, edited, and finished to match your brand's tone.",
    },
    {
      title: "Product & Brand Photography",
      description:
        "Clean, consistent photography for products, teams, and locations that makes your brand look established.",
    },
    {
      title: "Social Media Content Calendars",
      description:
        "Planned content calendars that keep your social presence active, consistent, and on-brand.",
    },
    {
      title: "Short-Form Video for Social Channels",
      description:
        "Reels, TikToks, and Shorts built for how people actually watch — fast, vertical, and attention-grabbing.",
    },
    {
      title: "Motion Graphics & Animation",
      description:
        "Animated logos, lower-thirds, and explainer graphics that add polish without a full production shoot.",
    },
    {
      title: "Content Repurposing Across Channels",
      description:
        "One shoot, many formats — turning long-form content into clips, posts, and assets for every channel.",
    },
    {
      title: "Brand & Lifestyle Photography",
      description:
        "Photography that captures your brand's personality, not just your products, for a more authentic feel.",
    },
    {
      title: "Podcast & Long-Form Video Production",
      description:
        "Recording, editing, and production for podcasts and long-form video content that builds authority over time.",
    },
    {
      title: "Ad Creative Production",
      description:
        "Photo and video creative built specifically for paid campaigns, tested and refreshed as performance data comes in.",
    },
    {
      title: "Content Strategy & Planning",
      description:
        "A content plan built around your goals and audience, not just a list of post ideas to fill a calendar.",
    },
  ],
  "content-writing": [
    {
      title: "Website & Landing Page Copy",
      description:
        "Clear, conversion-focused copy for homepages, service pages, and landing pages that explain your value fast.",
    },
    {
      title: "Blog & Article Writing",
      description:
        "Well-researched blog posts and articles written to engage readers and support long-term organic growth.",
    },
    {
      title: "SEO Content Strategy & Keyword Research",
      description:
        "Content planned around real search intent and keyword opportunity, not just topics that sound good.",
    },
    {
      title: "Email & Campaign Copy",
      description:
        "Email sequences and campaign copy written to be opened, read, and acted on.",
    },
    {
      title: "Technical & Product Documentation",
      description:
        "Clear documentation and help content that makes complex products easier for users to understand.",
    },
    {
      title: "Case Studies & White Papers",
      description:
        "Structured, credible case studies and white papers that build authority with serious buyers.",
    },
    {
      title: "Product Descriptions & E-Commerce Copy",
      description:
        "Product copy written to answer real buyer questions and support conversion, not just describe features.",
    },
    {
      title: "Ghostwriting & Thought Leadership",
      description:
        "Articles and posts written in your voice to build authority and visibility for your business or leadership team.",
    },
    {
      title: "Editing & Proofreading",
      description:
        "A final editorial pass that catches errors, tightens language, and keeps tone consistent before publishing.",
    },
    {
      title: "Content Style Guides & Brand Voice",
      description:
        "Documented voice and tone guidelines so content stays consistent across every writer and channel.",
    },
  ],
  "software-development": [
    {
      title: "Custom Software Design & Architecture",
      description:
        "System architecture planned around your real workflows and scale, not a generic boilerplate.",
    },
    {
      title: "Backend & API Development",
      description:
        "Reliable backend systems and REST or GraphQL APIs built to support your product and integrations.",
    },
    {
      title: "Cloud Infrastructure & DevOps",
      description:
        "Scalable infrastructure, CI/CD pipelines, and deployment automation on AWS, GCP, or Azure.",
    },
    {
      title: "Legacy System Modernization",
      description:
        "Modernizing outdated systems without disrupting the business processes that depend on them.",
    },
    {
      title: "Quality Assurance & Automated Testing",
      description:
        "Automated test suites and QA processes that catch issues before they reach production.",
    },
    {
      title: "Database Design & Data Migration",
      description:
        "Clean data models and safe migrations that keep your data structured, accurate, and accessible.",
    },
    {
      title: "Internal Tools & Admin Panels",
      description:
        "Custom dashboards and admin tools that make internal operations faster and easier to manage.",
    },
    {
      title: "Third-Party Integrations & Connectivity",
      description:
        "Payment gateways, CRMs, ERPs, and other systems connected cleanly into your software.",
    },
    {
      title: "Software Maintenance & Long-Term Support",
      description:
        "Ongoing updates, bug fixes, and improvements so your software keeps running reliably after launch.",
    },
    {
      title: "Technical Due Diligence & Code Audits",
      description:
        "An honest review of an existing codebase's quality, risk, and readiness before you invest further.",
    },
  ],
  "business-applications-enterprise-solutions": [
    {
      title: "Custom CRM Development",
      description:
        "Customer relationship systems built around your actual sales process, not a generic pipeline template.",
    },
    {
      title: "ERP Integration & Development",
      description:
        "Enterprise resource planning systems and integrations that connect finance, operations, and inventory.",
    },
    {
      title: "Internal Dashboards & Admin Tools",
      description:
        "Custom dashboards that give your team the visibility and controls they actually need, in one place.",
    },
    {
      title: "Workflow & Process Automation",
      description:
        "Automated approvals, notifications, and processes that remove manual steps from daily operations.",
    },
    {
      title: "System Integrations",
      description:
        "Payment processors, data sources, and third-party APIs connected cleanly into your business systems.",
    },
    {
      title: "Role-Based Access & Permissions",
      description:
        "Access controls structured around your org chart, so the right people see the right data and nothing else.",
    },
    {
      title: "Data Migration & Reporting",
      description:
        "Safe migration from legacy systems, paired with reporting that gives leadership real visibility.",
    },
    {
      title: "Inventory & Operations Management",
      description:
        "Systems that track inventory, orders, and operations accurately across locations and teams.",
    },
    {
      title: "Multi-Location & Multi-Team Rollouts",
      description:
        "Structured rollouts that get systems adopted consistently across every location and department.",
    },
    {
      title: "Enterprise Application Maintenance & Support",
      description:
        "Ongoing support and updates so business-critical systems keep running as your company evolves.",
    },
  ],
  "cybersecurity-services": [
    {
      title: "Security Audits & Vulnerability Assessments",
      description:
        "A structured review of your systems that identifies real, exploitable weaknesses, not just generic scan output.",
    },
    {
      title: "Application Security Reviews",
      description:
        "Code and architecture reviews against the OWASP Top 10 and common application security failure points.",
    },
    {
      title: "Infrastructure & Network Hardening",
      description:
        "Firewall configuration, network segmentation, and patch management that closes real attack paths.",
    },
    {
      title: "Authorized Penetration Testing",
      description:
        "Scoped, authorized penetration testing that simulates real attacks against your systems, safely.",
    },
    {
      title: "Compliance Readiness Support",
      description:
        "Preparation for SOC 2, HIPAA, PCI-DSS, and other frameworks, with documentation built to hold up under audit.",
    },
    {
      title: "Incident Response Planning",
      description:
        "Response playbooks and tabletop exercises so your team knows exactly what to do if something goes wrong.",
    },
    {
      title: "Security Monitoring & Alerting",
      description:
        "Ongoing monitoring and alerting that catches suspicious activity before it becomes a breach.",
    },
    {
      title: "Identity & Access Management",
      description:
        "SSO, MFA, and least-privilege access design so the right people have exactly the access they need.",
    },
    {
      title: "Cloud Security Configuration Review",
      description:
        "A review of your AWS, GCP, or Azure configuration against common cloud misconfiguration risks.",
    },
    {
      title: "Security Awareness Training",
      description:
        "Practical training that helps your team recognize phishing and social engineering before it works.",
    },
  ],
  "it-consulting": [
    {
      title: "Technology Strategy & Roadmapping",
      description:
        "A prioritized technology roadmap built around your business goals, not a generic best-practices template.",
    },
    {
      title: "Vendor & Tooling Evaluation",
      description:
        "Vendor-neutral comparisons of platforms and tools, so decisions are based on fit, not sales pitches.",
    },
    {
      title: "Cloud & Infrastructure Planning",
      description:
        "Architecture and cost planning for AWS, GCP, or Azure that matches your actual scale and budget.",
    },
    {
      title: "Technical Due Diligence",
      description:
        "Independent technical risk assessments for M&A, investment, or acquisition decisions.",
    },
    {
      title: "Team Augmentation & Staffing Guidance",
      description:
        "Guidance on when to hire, what roles you actually need, and how to structure a technical team.",
    },
    {
      title: "Digital Transformation Planning",
      description:
        "A realistic plan for digitizing processes and modernizing systems without disrupting operations.",
    },
    {
      title: "Architecture Review & Recommendations",
      description:
        "An independent review of your current architecture, with clear recommendations for what to change.",
    },
    {
      title: "IT Budget & Cost Optimization",
      description:
        "A review of current IT spend that identifies redundant tools and opportunities to consolidate.",
    },
    {
      title: "Legacy System Assessment",
      description:
        "An honest assessment of whether to maintain, modernize, or replace an aging system.",
    },
    {
      title: "Fractional CTO / Technical Advisory",
      description:
        "Ongoing technical leadership for businesses that need senior guidance without a full-time hire.",
    },
  ],
};

export const subServicesByService: Record<string, SubService[]> = Object.fromEntries(
  Object.entries(raw).map(([serviceSlug, items]) => [
    serviceSlug,
    items.map((item) => ({ ...item, slug: slugify(item.title) })),
  ])
);

export function getSubService(
  serviceSlug: string,
  subSlug: string
): SubService | undefined {
  return subServicesByService[serviceSlug]?.find((s) => s.slug === subSlug);
}
