export type PortfolioItem = {
  slug: string;
  title: string;
  category: string;
  blurb: string;
  video: string;
  gradient: string;
  client: string;
  year: string;
  timeline: string;
  services: string[];
  overview: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  testimonial: { quote: string; author: string; role: string };
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "ecommerce-platform-redesign",
    title: "E-Commerce Platform Redesign",
    category: "Web Development",
    blurb:
      "A full storefront rebuild focused on faster load times and a streamlined checkout flow.",
    video: "/videos/portfolio-ecommerce.mp4",
    gradient: "from-primary-600 to-accent-500",
    client: "Meridian Home Goods",
    year: "2025",
    timeline: "14 weeks",
    services: ["Next.js", "Headless Commerce", "Performance Optimization", "Checkout UX"],
    overview:
      "Meridian Home Goods came to us with a storefront built on an aging platform that couldn't keep up with their catalog growth or mobile traffic. We rebuilt the experience from the ground up on a modern, headless stack.",
    challenge:
      "Page loads regularly topped 6 seconds on mobile, the checkout flow spanned five separate pages, and the team had no way to run A/B tests without engineering support.",
    solution:
      "We migrated to a headless commerce architecture with an optimized image pipeline, collapsed checkout into a single streamlined step, and gave the marketing team a visual editor for merchandising and experiments.",
    results: [
      { label: "Page load time", value: "-64%" },
      { label: "Checkout completion", value: "+38%" },
      { label: "Mobile conversion", value: "+27%" },
    ],
    testimonial: {
      quote:
        "The new site paid for itself within the first quarter. Our checkout completion rate alone made the investment a no-brainer.",
      author: "Dana Whitfield",
      role: "Director of E-Commerce, Meridian Home Goods",
    },
  },
  {
    slug: "fitness-tracking-app",
    title: "Fitness Tracking App",
    category: "Mobile App Development",
    blurb:
      "A cross-platform companion app for tracking workouts, goals, and progress.",
    video: "/videos/portfolio-fitness.mp4",
    gradient: "from-primary-700 to-primary-400",
    client: "PulseForm",
    year: "2025",
    timeline: "5 months",
    services: ["React Native", "Wearable Integration", "Cloud Sync", "Push Notifications"],
    overview:
      "PulseForm needed a single cross-platform app to replace three separate tools their members were juggling to log workouts, sync wearable data, and track long-term goals.",
    challenge:
      "Existing spreadsheet-and-app workarounds meant fragmented data, no reminders, and members dropping off after the first few weeks.",
    solution:
      "We built a React Native app with real-time wearable sync, adaptive goal tracking, and behavior-based push notifications that bring members back at the right moments.",
    results: [
      { label: "App Store rating", value: "4.8 / 5" },
      { label: "Weekly active users", value: "+142%" },
      { label: "Avg. session length", value: "3.1x" },
    ],
    testimonial: {
      quote:
        "Retention was our biggest problem and it's now our biggest win. Members actually stick around past week three.",
      author: "Marcus Ihedigbo",
      role: "Founder, PulseForm",
    },
  },
  {
    slug: "healthcare-portal-uiux",
    title: "Patient Portal UX Overhaul",
    category: "UI/UX Design",
    blurb:
      "Simplified appointment booking and records access for a healthcare provider portal.",
    video: "/videos/portfolio-healthcare.mp4",
    gradient: "from-accent-500 to-primary-600",
    client: "Harborview Health Partners",
    year: "2024",
    timeline: "10 weeks",
    services: ["User Research", "Wireframing", "Design System", "Accessibility Audit"],
    overview:
      "Harborview's patient portal was functional but frustrating — patients were calling the front desk to do things the portal was supposed to handle.",
    challenge:
      "Booking an appointment took an average of 9 clicks, records were buried under confusing navigation, and the portal failed basic accessibility checks.",
    solution:
      "We ran usability sessions with real patients, redesigned booking around a 3-step flow, and rebuilt the UI on an accessible design system that passes WCAG AA.",
    results: [
      { label: "Booking completion", value: "+52%" },
      { label: "Support call volume", value: "-31%" },
      { label: "Accessibility", value: "WCAG AA" },
    ],
    testimonial: {
      quote:
        "Our front desk team noticed the difference within the first week. Patients stopped calling to ask how to book online.",
      author: "Dr. Elena Marsh",
      role: "Chief Experience Officer, Harborview Health Partners",
    },
  },
  {
    slug: "brand-identity-refresh",
    title: "Brand Identity Refresh",
    category: "Graphic Design & Branding",
    blurb:
      "A full visual identity system, from logo mark to marketing collateral guidelines.",
    video: "/videos/portfolio-branding.mp4",
    gradient: "from-primary-500 to-accent-600",
    client: "Fernwood & Co.",
    year: "2024",
    timeline: "6 weeks",
    services: ["Logo Design", "Brand Guidelines", "Packaging", "Marketing Collateral"],
    overview:
      "Fernwood & Co. had outgrown a logo they designed themselves five years earlier and needed an identity that matched where the brand was headed next.",
    challenge:
      "Inconsistent colors and typography across packaging, social, and print meant the brand looked like three different companies depending on where a customer encountered it.",
    solution:
      "We designed a new mark, a full color and type system, and a documented brand guideline so every future asset — from packaging to social templates — stays consistent without our involvement.",
    results: [
      { label: "Brand recognition (survey)", value: "+45%" },
      { label: "Social engagement", value: "2.4x" },
      { label: "Deliverables shipped", value: "32 assets" },
    ],
    testimonial: {
      quote:
        "We finally have a brand that feels like one company. The guidelines have made it so easy to hand off to new vendors.",
      author: "Priya Nandakumar",
      role: "Co-Founder, Fernwood & Co.",
    },
  },
  {
    slug: "regional-retailer-seo-growth",
    title: "Regional Retailer SEO & Growth",
    category: "Digital Marketing",
    blurb:
      "An SEO and paid media program built to grow organic and local search visibility.",
    video: "/videos/portfolio-seo.mp4",
    gradient: "from-primary-600 to-primary-900",
    client: "Coastal Outfitters",
    year: "2025",
    timeline: "Ongoing — 6-month results shown",
    services: ["Technical SEO", "Local SEO", "Paid Search", "Content Strategy"],
    overview:
      "Coastal Outfitters ranked well for their brand name and nowhere else. With nine storefronts across two states, local visibility was leaving revenue on the table.",
    challenge:
      "Thin location pages, a slow site, and no consistent content strategy meant competitors with weaker products were outranking them in every nearby market.",
    solution:
      "We fixed the technical foundation, built out location-specific landing pages, launched a content calendar targeting local search intent, and layered in paid search to cover gaps while organic rankings climbed.",
    results: [
      { label: "Organic traffic", value: "+118%" },
      { label: "Local pack rankings", value: "Top 3 in 9 markets" },
      { label: "Cost per lead", value: "-41%" },
    ],
    testimonial: {
      quote:
        "We're now the store that shows up first, not the one customers stumble onto by accident. The lead quality has been the real difference.",
      author: "Tom Achebe",
      role: "VP of Marketing, Coastal Outfitters",
    },
  },
  {
    slug: "support-chatbot-assistant",
    title: "AI Support Assistant",
    category: "AI/ML Solutions",
    blurb:
      "A custom support chatbot trained on internal documentation to deflect routine tickets.",
    video: "/videos/portfolio-ai.mp4",
    gradient: "from-accent-500 to-primary-800",
    client: "Northline Logistics",
    year: "2025",
    timeline: "8 weeks",
    services: ["LLM Fine-Tuning", "RAG Pipeline", "Helpdesk Integration", "Analytics Dashboard"],
    overview:
      "Northline's support team was buried in repetitive tickets about shipment status, account setup, and policy questions that were already answered in their internal docs.",
    challenge:
      "Ticket volume was growing faster than headcount, response times were slipping past 24 hours, and agents had no time left for the complex cases that actually needed a human.",
    solution:
      "We built a retrieval-augmented chatbot trained on Northline's internal documentation, wired it into their existing helpdesk, and shipped an analytics dashboard so the support team can see exactly what it's deflecting and where it's still handing off to a human.",
    results: [
      { label: "Ticket deflection", value: "+58%" },
      { label: "Avg. response time", value: "-91%" },
      { label: "Customer satisfaction", value: "4.6 / 5" },
    ],
    testimonial: {
      quote:
        "Our agents finally have room to breathe. The bot handles the repetitive stuff and hands off cleanly when it can't.",
      author: "Sarah Okonjo",
      role: "Head of Customer Support, Northline Logistics",
    },
  },
];

export function getPortfolioItemBySlug(slug: string) {
  return portfolioItems.find((item) => item.slug === slug);
}
