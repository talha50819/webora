export type Service = {
  slug: string;
  title: string;
  icon:
    | "web"
    | "mobile"
    | "uiux"
    | "branding"
    | "marketing"
    | "ai"
    | "content-creation"
    | "content-writing"
    | "software"
    | "enterprise"
    | "cybersecurity"
    | "consulting";
  shortDesc: string;
  longDesc: string;
  features: string[];
  processSteps: { title: string; description: string }[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    icon: "web",
    shortDesc:
      "Fast, responsive websites and web apps built on modern frameworks.",
    longDesc:
      "We design and build custom websites and web applications that are fast, accessible, and easy to maintain — from marketing sites to complex, data-driven web platforms.",
    features: [
      "Custom website & web app development",
      "E-commerce storefronts",
      "CMS integrations & headless CMS builds",
      "API development & third-party integrations",
      "Performance and SEO optimization",
      "Ongoing maintenance & support",
    ],
    processSteps: [
      { title: "Discovery", description: "We map your goals, audience, and technical requirements." },
      { title: "Design", description: "Wireframes and UI design tailored to your brand." },
      { title: "Build", description: "Clean, scalable code with regular progress check-ins." },
      { title: "Launch & support", description: "Deployment, QA, and ongoing improvements post-launch." },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    icon: "mobile",
    shortDesc:
      "Native and cross-platform apps for iOS and Android that users love.",
    longDesc:
      "From concept to app-store launch, we build reliable mobile applications for iOS and Android using modern cross-platform and native tooling.",
    features: [
      "iOS & Android app development",
      "Cross-platform builds (React Native, Flutter)",
      "UI/UX tailored for mobile",
      "App Store & Google Play deployment",
      "Push notifications & offline support",
      "Post-launch monitoring & updates",
    ],
    processSteps: [
      { title: "Strategy", description: "Define platform, features, and success metrics." },
      { title: "Prototype", description: "Interactive prototypes to validate the experience early." },
      { title: "Development", description: "Iterative builds with testing on real devices." },
      { title: "Release", description: "Store submission, monitoring, and iteration." },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    icon: "uiux",
    shortDesc:
      "Research-driven interface design that makes products simple to use.",
    longDesc:
      "We craft intuitive, accessible interfaces backed by user research — turning complex workflows into products people enjoy using.",
    features: [
      "User research & journey mapping",
      "Wireframing & prototyping",
      "Design systems & component libraries",
      "Usability testing",
      "Accessibility (WCAG) reviews",
      "Handoff-ready design files",
    ],
    processSteps: [
      { title: "Research", description: "Understand users, competitors, and business goals." },
      { title: "Wireframes", description: "Low-fidelity flows to validate structure fast." },
      { title: "Visual design", description: "High-fidelity UI aligned with your brand." },
      { title: "Testing", description: "Validate with real users and refine." },
    ],
  },
  {
    slug: "graphic-design-branding",
    title: "Graphic Design & Branding",
    icon: "branding",
    shortDesc:
      "Distinct visual identities — logos, brand systems, and marketing assets.",
    longDesc:
      "We build cohesive brand identities and design assets that help your business stand out — from logo and brand guidelines to marketing collateral.",
    features: [
      "Logo & visual identity design",
      "Brand guidelines & style guides",
      "Marketing & sales collateral",
      "Packaging & print design",
      "Social media design kits",
      "Presentation & pitch deck design",
    ],
    processSteps: [
      { title: "Brand discovery", description: "Clarify positioning, audience, and tone." },
      { title: "Concepting", description: "Explore visual directions and moodboards." },
      { title: "Refinement", description: "Narrow to a final identity and system." },
      { title: "Delivery", description: "Full asset library and usage guidelines." },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: "marketing",
    shortDesc:
      "SEO, paid media, and content strategy that drive measurable growth.",
    longDesc:
      "We plan and run digital marketing programs — SEO, paid advertising, email, and social — focused on measurable growth, not vanity metrics.",
    features: [
      "SEO strategy & technical audits",
      "Paid search & social advertising",
      "Email marketing & automation",
      "Social media management",
      "Analytics & reporting dashboards",
      "Conversion rate optimization",
    ],
    processSteps: [
      { title: "Audit", description: "Assess current channels, data, and performance." },
      { title: "Strategy", description: "Set targets and channel mix." },
      { title: "Execution", description: "Launch campaigns and content calendars." },
      { title: "Optimize", description: "Report on results and iterate monthly." },
    ],
  },
  {
    slug: "ai-ml-solutions",
    title: "AI/ML Solutions",
    icon: "ai",
    shortDesc:
      "Practical AI features and automation built around your data.",
    longDesc:
      "We help businesses apply AI and machine learning practically — from intelligent automation and chatbots to custom models built on your own data.",
    features: [
      "AI feature integration (chat, search, recommendations)",
      "Custom model development & fine-tuning",
      "Process automation & workflow AI",
      "Data pipeline & infrastructure setup",
      "LLM & RAG application development",
      "Model evaluation & monitoring",
    ],
    processSteps: [
      { title: "Assessment", description: "Identify high-value use cases and data readiness." },
      { title: "Prototype", description: "Build a proof of concept to validate value." },
      { title: "Build", description: "Develop and integrate the production solution." },
      { title: "Monitor", description: "Track performance and retrain as needed." },
    ],
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    icon: "content-creation",
    shortDesc: "Photo, video, and social content that fits your brand voice.",
    longDesc:
      "We produce photo, video, and social-ready content designed to capture attention and stay consistent with your brand.",
    features: [
      "Video production & editing",
      "Product & brand photography",
      "Social media content calendars",
      "Short-form video for social channels",
      "Motion graphics & animation",
      "Content repurposing across channels",
    ],
    processSteps: [
      { title: "Concept", description: "Define themes, formats, and channels." },
      { title: "Production", description: "Shoot, design, or produce the content." },
      { title: "Editing", description: "Polish and format for each platform." },
      { title: "Publish", description: "Schedule, publish, and review performance." },
    ],
  },
  {
    slug: "content-writing",
    title: "Content Writing",
    icon: "content-writing",
    shortDesc:
      "SEO-minded copywriting for web, blogs, and marketing campaigns.",
    longDesc:
      "Clear, well-researched writing for websites, blogs, and campaigns — written to engage readers and support your SEO goals.",
    features: [
      "Website & landing page copy",
      "Blog & article writing",
      "SEO content strategy",
      "Email & campaign copy",
      "Technical & product documentation",
      "Editing & proofreading",
    ],
    processSteps: [
      { title: "Brief", description: "Align on audience, tone, and keywords." },
      { title: "Draft", description: "Research and write the first draft." },
      { title: "Review", description: "Revise based on your feedback." },
      { title: "Finalize", description: "Deliver publish-ready copy." },
    ],
  },
  {
    slug: "software-development",
    title: "Software Development",
    icon: "software",
    shortDesc:
      "Custom software built around the way your business actually works.",
    longDesc:
      "We design and build custom software — from internal tools to full products — engineered for reliability and long-term maintainability.",
    features: [
      "Custom software design & architecture",
      "Backend & API development",
      "Cloud infrastructure & DevOps",
      "Legacy system modernization",
      "Quality assurance & automated testing",
      "Long-term technical support",
    ],
    processSteps: [
      { title: "Scoping", description: "Define requirements and technical approach." },
      { title: "Architecture", description: "Design a scalable, maintainable system." },
      { title: "Development", description: "Build in iterative, testable increments." },
      { title: "Support", description: "Maintain, monitor, and extend the system." },
    ],
  },
  {
    slug: "business-applications-enterprise-solutions",
    title: "Business Applications & Enterprise Solutions",
    icon: "enterprise",
    shortDesc:
      "Internal tools, CRMs, and enterprise systems that scale with you.",
    longDesc:
      "We build and integrate business applications — CRMs, internal dashboards, ERP integrations — that streamline operations as your company scales.",
    features: [
      "Custom CRM & ERP solutions",
      "Internal dashboards & admin tools",
      "Workflow & process automation",
      "System integrations (payments, data, third-party APIs)",
      "Role-based access & permissions",
      "Data migration & reporting",
    ],
    processSteps: [
      { title: "Requirements", description: "Map current workflows and pain points." },
      { title: "Solution design", description: "Design the system and integrations." },
      { title: "Implementation", description: "Build and integrate with existing tools." },
      { title: "Rollout", description: "Train teams and support adoption." },
    ],
  },
  {
    slug: "cybersecurity-services",
    title: "Cybersecurity Services",
    icon: "cybersecurity",
    shortDesc:
      "Security assessments and hardening to protect what you've built.",
    longDesc:
      "We help businesses assess and reduce security risk — from application security reviews to infrastructure hardening and ongoing monitoring.",
    features: [
      "Security audits & vulnerability assessments",
      "Application & infrastructure hardening",
      "Penetration testing (authorized engagements)",
      "Compliance readiness support",
      "Incident response planning",
      "Security monitoring & training",
    ],
    processSteps: [
      { title: "Assessment", description: "Review current systems and identify risk." },
      { title: "Remediation plan", description: "Prioritize fixes by impact and effort." },
      { title: "Hardening", description: "Implement fixes and security controls." },
      { title: "Ongoing monitoring", description: "Track posture and respond to new threats." },
    ],
  },
  {
    slug: "it-consulting",
    title: "IT Consulting",
    icon: "consulting",
    shortDesc:
      "Practical technology strategy and guidance to support your roadmap.",
    longDesc:
      "We act as a technology partner — advising on architecture, tooling, and roadmap decisions so you can invest with confidence.",
    features: [
      "Technology strategy & roadmapping",
      "Vendor & tooling evaluation",
      "Cloud & infrastructure planning",
      "Technical due diligence",
      "Team augmentation & staffing guidance",
      "Digital transformation planning",
    ],
    processSteps: [
      { title: "Discovery", description: "Understand your current stack and goals." },
      { title: "Recommendations", description: "Deliver a clear, prioritized plan." },
      { title: "Implementation support", description: "Guide execution alongside your team." },
      { title: "Review", description: "Revisit the roadmap as priorities evolve." },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
