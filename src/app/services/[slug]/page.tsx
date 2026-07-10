import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import WebDevLandingContent from "@/components/WebDevLandingContent";
import MobileAppLandingContent from "@/components/MobileAppLandingContent";
import UiUxLandingContent from "@/components/UiUxLandingContent";
import BrandingLandingContent from "@/components/BrandingLandingContent";
import MarketingLandingContent from "@/components/MarketingLandingContent";
import AiMlLandingContent from "@/components/AiMlLandingContent";
import ContentCreationLandingContent from "@/components/ContentCreationLandingContent";
import ContentWritingLandingContent from "@/components/ContentWritingLandingContent";
import SoftwareDevLandingContent from "@/components/SoftwareDevLandingContent";
import EnterpriseLandingContent from "@/components/EnterpriseLandingContent";
import CybersecurityLandingContent from "@/components/CybersecurityLandingContent";
import ItConsultingLandingContent from "@/components/ItConsultingLandingContent";

const serviceContent: Record<
  string,
  {
    Component: (props: { h1: string; heroLine: string }) => React.JSX.Element;
    metaTitle: string;
    metaDescription: string;
    h1: string;
    heroLine: string;
  }
> = {
  "web-development": {
    Component: WebDevLandingContent,
    metaTitle: "Custom Web Development Services",
    metaDescription:
      "JSK Corporation provides custom web development services, including website design, WordPress development, React, Next.js, Node.js, e-commerce websites, web applications, Figma to development, integrations, SEO, security, and ongoing website support.",
    h1: "Custom Web Development Services — Built for Businesses That Want More Than a Basic Website",
    heroLine:
      "Your website should not just look modern. It should load fast, explain your value clearly, build trust, convert visitors, and support your business as it grows. JSK Corporation helps businesses build custom websites, e-commerce stores, landing pages, business portals, and web applications with strategy, design, development, integrations, performance, security, and support under one roof.",
  },
  "mobile-app-development": {
    Component: MobileAppLandingContent,
    metaTitle: "Mobile App Development Services",
    metaDescription:
      "JSK Corporation provides mobile app development services, including iOS app development, Android app development, React Native, Flutter, app UI/UX design, app store deployment, backend & API integration, and ongoing app support.",
    h1: "Mobile App Development Services — Built for Businesses That Want Apps Users Actually Keep",
    heroLine:
      "Your app should not just look good in a demo. It should launch on both stores, run reliably, keep users engaged, and support your business as it grows. JSK Corporation helps businesses build custom iOS, Android, and cross-platform apps with strategy, design, development, integrations, performance, security, and support under one roof.",
  },
  "ui-ux-design": {
    Component: UiUxLandingContent,
    metaTitle: "UI/UX Design Services",
    metaDescription:
      "JSK Corporation provides UI/UX design services, including user research, wireframing, prototyping, visual design, design systems, usability testing, accessibility (WCAG) reviews, and Figma-based design handoff.",
    h1: "UI/UX Design Services — Interfaces Built Around How People Actually Use Them",
    heroLine:
      "Your product should not just look good in a portfolio shot. It should be easy to understand, easy to navigate, and built to convert and retain real users. JSK Corporation helps businesses design research-driven interfaces, design systems, and product experiences with strategy, usability, accessibility, and developer-ready handoff under one roof.",
  },
  "graphic-design-branding": {
    Component: BrandingLandingContent,
    metaTitle: "Graphic Design & Branding Services",
    metaDescription:
      "JSK Corporation provides graphic design and branding services, including logo design, brand identity systems, brand guidelines, marketing collateral, packaging design, and social media design kits.",
    h1: "Graphic Design & Branding Services — Visual Identities Built to Make Your Business Memorable",
    heroLine:
      "Your brand should not just look nice on one page. It should stay consistent across your logo, website, packaging, and every piece of marketing your business puts out. JSK Corporation helps businesses build brand identities, guidelines, and collateral with strategy, design, and long-term consistency under one roof.",
  },
  "digital-marketing": {
    Component: MarketingLandingContent,
    metaTitle: "Digital Marketing Services",
    metaDescription:
      "JSK Corporation provides digital marketing services, including SEO, paid search and social advertising, email marketing automation, social media management, conversion rate optimization, and analytics reporting.",
    h1: "Digital Marketing Services — Growth Built on Strategy, Not Guesswork",
    heroLine:
      "Your marketing should not just generate impressions. It should bring qualified leads, track clearly to revenue, and improve month over month. JSK Corporation helps businesses run SEO, paid media, email, and conversion campaigns with strategy, tracking, and honest reporting under one roof.",
  },
  "ai-ml-solutions": {
    Component: AiMlLandingContent,
    metaTitle: "AI/ML Solutions",
    metaDescription:
      "JSK Corporation provides AI and machine learning solutions, including AI chatbots, LLM and RAG application development, process automation, custom model development, data pipelines, and AI model monitoring.",
    h1: "AI/ML Solutions — Practical AI Built Around Your Business Data",
    heroLine:
      "Your AI feature should not just impress in a demo. It should run reliably in production, stay grounded in your real data, and keep working after launch. JSK Corporation helps businesses build AI chatbots, automation, and custom models with strategy, engineering, and ongoing monitoring under one roof.",
  },
  "content-creation": {
    Component: ContentCreationLandingContent,
    metaTitle: "Content Creation Services",
    metaDescription:
      "JSK Corporation provides content creation services, including video production, product and brand photography, social media content, short-form video, motion graphics, and content repurposing.",
    h1: "Content Creation Services — Photo & Video Content Built to Capture Attention and Stay On-Brand",
    heroLine:
      "Your content should not just fill a calendar. It should look professional, sound like your brand, and get repurposed across every channel instead of being used once and forgotten. JSK Corporation helps businesses produce video, photography, and social content with strategy, production, and repurposing under one roof.",
  },
  "content-writing": {
    Component: ContentWritingLandingContent,
    metaTitle: "Content Writing Services",
    metaDescription:
      "JSK Corporation provides content writing services, including website copywriting, blog and article writing, SEO content strategy, email and campaign copy, technical documentation, and editing and proofreading.",
    h1: "Content Writing Services — Copy That Reads Clearly and Ranks on Purpose",
    heroLine:
      "Your content should not just fill a page. It should read clearly, sound like your brand, and target the keywords your customers are actually searching. JSK Corporation helps businesses write website copy, blog content, and documentation with research, SEO structure, and editorial rigor under one roof.",
  },
  "software-development": {
    Component: SoftwareDevLandingContent,
    metaTitle: "Software Development Services",
    metaDescription:
      "JSK Corporation provides custom software development services, including software architecture and design, backend and API development, cloud infrastructure and DevOps, legacy system modernization, QA and automated testing, and long-term technical support.",
    h1: "Software Development Services — Custom Software Built Around How Your Business Actually Works",
    heroLine:
      "Your software should not just work on launch day. It should stay reliable, stay maintainable, and keep supporting your business as it grows and changes. JSK Corporation helps businesses build custom software, backend systems, and internal tools with architecture, testing, and long-term support under one roof.",
  },
  "business-applications-enterprise-solutions": {
    Component: EnterpriseLandingContent,
    metaTitle: "Business Applications & Enterprise Solutions",
    metaDescription:
      "JSK Corporation provides business applications and enterprise solutions, including custom CRM and ERP systems, internal dashboards, workflow automation, system integrations, role-based access control, and data migration and reporting.",
    h1: "Business Applications & Enterprise Solutions — Systems That Scale With Your Operations",
    heroLine:
      "Your business systems should not force your team into a rigid workflow. They should match how your organization actually operates, and keep working as you add locations, teams, and complexity. JSK Corporation helps companies build CRMs, ERPs, and internal systems with process mapping, clean architecture, and structured rollouts under one roof.",
  },
  "cybersecurity-services": {
    Component: CybersecurityLandingContent,
    metaTitle: "Cybersecurity Services",
    metaDescription:
      "JSK Corporation provides cybersecurity services, including security audits and vulnerability assessments, application and infrastructure hardening, authorized penetration testing, compliance readiness support, incident response planning, and security monitoring.",
    h1: "Cybersecurity Services — Practical Security Built to Protect What You've Already Built",
    heroLine:
      "Your security program should not just be a scan report that sits unread. It should identify real risk, prioritize what to fix first, and keep watching after the first assessment is done. JSK Corporation helps businesses run audits, hardening, and ongoing monitoring with clear reporting and long-term support under one roof.",
  },
  "it-consulting": {
    Component: ItConsultingLandingContent,
    metaTitle: "IT Consulting Services",
    metaDescription:
      "JSK Corporation provides IT consulting services, including technology strategy and roadmapping, vendor and tooling evaluation, cloud and infrastructure planning, technical due diligence, team augmentation, and digital transformation planning.",
    h1: "IT Consulting Services — Practical Technology Strategy Built Around Your Roadmap",
    heroLine:
      "Your technology roadmap should not just live in a slide deck. It should reflect your real budget, team capacity, and timeline, and someone should stay involved to help you actually execute it. JSK Corporation helps businesses plan technology strategy, evaluate vendors, and implement roadmaps with vendor-neutral, hands-on advisory support.",
  },
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = serviceContent[slug];
  if (!content) return {};
  return buildMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    path: `/services/${slug}/`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = serviceContent[slug];
  if (!content) notFound();

  const { Component, h1, heroLine } = content;
  return <Component h1={h1} heroLine={heroLine} />;
}
