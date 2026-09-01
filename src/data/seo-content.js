// Single source of truth for per-route SEO metadata.
//
// Consumed two ways:
//   1. `useSEO()` calls in each page component, at runtime.
//   2. `scripts/prerender-meta.mjs`, at build time, which bakes this same
//      metadata into a static `<head>` per route so crawlers and social-media
//      link-preview bots that don't execute JavaScript still see correct
//      per-page titles, descriptions, and Open Graph tags.
// Keeping it here (plain data, no JSX/React) means both consumers stay in
// sync automatically instead of drifting.

export const SITE_URL = 'https://mTalha.is-a.dev'
export const SITE_NAME = 'mTalha is a dev'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

// Netlify serves prerendered directory-index files (dist/about/index.html
// etc.) under their trailing-slash form and issues a real 301 from the
// no-slash form to it (its own "pretty URL" canonicalization). Every path
// below — used for canonical tags, the sitemap, JSON-LD, and every internal
// <Link>/<NavLink> in the app — matches that trailing-slash form so no
// internal link, canonical tag, or sitemap entry ever needs that redirect.
export const paths = {
  home: '/',
  services: '/services/',
  about: '/about/',
  work: '/work/',
  contact: '/contact/',
  liveTv: '/live-tv/',
  service: (slug) => `/services/${slug}/`,
  workItem: (slug) => `/work/${slug}/`,
}

// Rendered on Home as a visible FAQ section and exposed as FAQPage JSON-LD
// for rich-result eligibility. Every answer restates a claim already made
// elsewhere on the site (value props, About, Contact) — no new facts are
// introduced here.
export const faqs = [
  {
    q: 'How is pricing structured?',
    a: "Fixed scope, fixed cost. I scope carefully up front so the estimate is a commitment, not an opening offer — the number doesn't move in month two.",
  },
  {
    q: 'Who actually works on my project?',
    a: "Most of the work, I do myself. When a project needs a specialist outside my core stack, I bring in someone from a small network of freelancers and agencies I've already worked with and vetted — but I stay the one point of contact, and I review everything before it reaches you.",
  },
  {
    q: 'Do we own the code and infrastructure after the engagement ends?',
    a: 'Yes — code, infrastructure, credentials, and documentation. Nothing is held hostage in a vendor-only repo when the engagement ends.',
  },
  {
    q: 'How fast do you respond to a new project inquiry?',
    a: 'Under one business day. Tell me what you’re building on the contact page and you’ll hear back from me directly, not a sales queue.',
  },
  {
    q: 'Is mTalha is a dev remote-first?',
    a: "Yes — remote from day one. You work directly with me, the person building or directing your system, wherever you're based.",
  },
  {
    q: 'What disciplines does mTalha is a dev cover?',
    a: "Seven: web development, mobile app development, cloud & DevOps, cybersecurity, AI & machine learning, UI/UX design, and IT consulting — all coordinated by me personally, whether I'm building it myself or directing a vetted specialist for a piece outside my core stack.",
  },
]

// Live TV is a standalone tool, unrelated to the agency services above —
// kept out of the FAQ voice used elsewhere (no "I"/"we" claims about
// broadcast rights) and out of the main site's indexing (see siteRoutes.liveTv
// below) so it doesn't dilute what this domain is about for search engines.
export const liveTvFaqs = [
  {
    q: 'How many live TV channels are available?',
    a: 'Thousands of free channels from around the world, covering news, sports, entertainment, and more — sourced from the public iptv-org channel index.',
  },
  {
    q: 'Can I filter channels by country and category?',
    a: 'Yes — use the search box plus the country and category filters to narrow the list down to what you want to watch.',
  },
  {
    q: 'Is this free to use?',
    a: 'Yes, no subscription or account required. Availability of any given stream depends on the source broadcaster, not this page.',
  },
  {
    q: 'Which devices can I use to watch?',
    a: 'Any device with a modern web browser — desktop, laptop, tablet, or phone.',
  },
]

function buildFaqJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

export const siteRoutes = {
  home: {
    title: 'mTalha is a dev — Engineering Systems That Hold',
    description:
      'Full-spectrum software engineering: web development, mobile apps, cloud & DevOps, cybersecurity, AI & machine learning, UI/UX design. Direct work with founder. Fixed scope, fixed cost.',
    keywords: 'software engineering, web development, cloud consulting, cybersecurity, AI machine learning, freelance developer',
    path: paths.home,
    jsonLd: buildFaqJsonLd(faqs),
  },
  services: {
    title: 'Services — mTalha is a dev',
    description:
      'Seven full-spectrum engineering disciplines — web development, mobile app development, cloud & DevOps, cybersecurity, AI/ML, UI/UX design, and IT consulting — all coordinated personally by founder.',
    keywords: 'software engineering services, web development, cloud services, cybersecurity consulting, AI services, custom development',
    path: paths.services,
  },
  about: {
    title: 'About — mTalha is a dev',
    description:
      'Muhammad Talha Siddiqui — Full-spectrum engineering practice built on shipping it right. 5+ years of freelance experience, now working with vetted specialists.',
    keywords: 'Muhammad Talha Siddiqui, software engineer, founder, freelance developer, technology consultant',
    path: paths.about,
  },
  work: {
    title: 'Selected Work — mTalha is a dev',
    description:
      'Portfolio of completed projects: web development, mobile apps, cloud migrations, security reviews, and AI implementations across web, mobile, cloud, and security.',
    keywords: 'portfolio, case studies, project examples, web development projects, cloud projects, security work',
    path: paths.work,
  },
  contact: {
    title: 'Contact — mTalha is a dev',
    description: "Tell me what you're building — I reply within one business day. Direct email to founder. Free initial consultation.",
    keywords: 'contact engineer, hire developer, software consultation, project inquiry, freelance work',
    path: paths.contact,
  },
  // Standalone tool, not part of the agency-services topic this site is
  // otherwise built around — noindex'd on purpose (see comment above
  // liveTvFaqs) and left out of sitemap.xml. Remove `noindex` and add it
  // to the sitemap if that tradeoff ever changes.
  liveTv: {
    title: 'Live TV — Free Global Channels Online',
    description:
      'Stream thousands of free live TV channels worldwide — search and filter by country and category, no subscription required. Entertainment, news, sports.',
    keywords: 'live TV, free streaming, channels, worldwide TV, streaming service',
    path: paths.liveTv,
    noindex: true,
    jsonLd: buildFaqJsonLd(liveTvFaqs),
  },
}

export function buildWorkSeo(project) {
  if (!project) return null
  const path = paths.workItem(project.slug)
  const keywords = [project.title, project.sector, ...project.tags].join(', ')
  return {
    title: `${project.title} — ${SITE_NAME}`,
    description: project.desc,
    keywords,
    path,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}${paths.home}` },
        { '@type': 'ListItem', position: 2, name: 'Work', item: `${SITE_URL}${paths.work}` },
        { '@type': 'ListItem', position: 3, name: project.title, item: `${SITE_URL}${path}` },
      ],
    },
  }
}

export function buildServiceSeo(service) {
  if (!service) return null
  const path = paths.service(service.slug)
  const keywords = `${service.name}, ${service.stack.slice(0, 3).join(', ')}, ${service.slug.replace(/-/g, ' ')}`
  return {
    title: `${service.name} — ${SITE_NAME}`,
    description: service.summary,
    keywords,
    path,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.name,
        description: service.summary,
        provider: { '@type': 'Organization', name: SITE_NAME, url: `${SITE_URL}/` },
        areaServed: 'Worldwide',
        url: `${SITE_URL}${path}`,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}${paths.home}` },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}${paths.services}` },
          { '@type': 'ListItem', position: 3, name: service.name, item: `${SITE_URL}${path}` },
        ],
      },
    ],
  }
}
