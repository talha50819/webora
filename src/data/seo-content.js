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

export const SITE_URL = 'https://webora.is-a.dev'
export const SITE_NAME = 'webora is a dev'
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
  careers: '/careers/',
  contact: '/contact/',
  service: (slug) => `/services/${slug}/`,
}

// Rendered on Home as a visible FAQ section and exposed as FAQPage JSON-LD
// for rich-result eligibility. Every answer restates a claim already made
// elsewhere on the site (value props, About, Careers, Contact) — no new
// facts are introduced here.
export const faqs = [
  {
    q: 'How is pricing structured?',
    a: "Fixed scope, fixed cost. We scope carefully up front so the estimate is a commitment, not an opening offer — the number doesn't move in month two.",
  },
  {
    q: 'Who actually works on my project?',
    a: 'Senior engineers only — no bench of juniors learning on your invoice. Every engagement is staffed by people who have shipped that category of work before.',
  },
  {
    q: 'Do we own the code and infrastructure after the engagement ends?',
    a: "Yes — code, infrastructure, credentials, and documentation. Nothing is held hostage in a vendor-only repo when the engagement ends.",
  },
  {
    q: 'How fast do you respond to a new project inquiry?',
    a: 'Under one business day. Tell us what you’re building on the contact page and you’ll hear back from an engineer, not a sales queue.',
  },
  {
    q: 'Is webora is a dev remote-first?',
    a: 'Yes — remote from day one, with no office to eventually mandate a return to. You work directly with the person building your system.',
  },
  {
    q: 'What disciplines does webora is a dev cover?',
    a: 'Seven: web development, mobile app development, cloud & DevOps, cybersecurity, AI & machine learning, UI/UX design, and IT consulting — carried by one senior team.',
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
    title: 'webora is a dev — Engineering Systems That Hold',
    description:
      'webora is a dev — full-spectrum technology partner for software, cloud, security, and AI. Senior engineers only, fixed scope, and infrastructure built to last.',
    path: paths.home,
    jsonLd: buildFaqJsonLd(faqs),
  },
  services: {
    title: 'Services — webora is a dev',
    description:
      'Seven full-spectrum engineering disciplines — web, mobile, cloud & DevOps, cybersecurity, AI/ML, UI/UX design, and IT consulting — carried by one senior team.',
    path: paths.services,
  },
  about: {
    title: 'About — webora is a dev',
    description:
      'webora is a dev started in 2020 as one freelance developer and grew into a full-spectrum technology company without losing the habit of shipping it right.',
    path: paths.about,
  },
  work: {
    title: 'Selected Work — webora is a dev',
    description:
      'A sample of client work across web, mobile, cloud, security, design, and AI, delivered before webora is a dev had a name.',
    path: paths.work,
  },
  careers: {
    title: 'Careers — webora is a dev',
    description:
      'Open to collaborate with senior engineers across web, mobile, cloud, security, AI, and design at webora is a dev — a small, founder-led team.',
    path: paths.careers,
  },
  contact: {
    title: 'Contact — webora is a dev',
    description: "Tell us what you're building. webora is a dev replies within one business day.",
    path: paths.contact,
  },
}

export function buildServiceSeo(service) {
  if (!service) return null
  const path = paths.service(service.slug)
  return {
    title: `${service.name} — ${SITE_NAME}`,
    description: service.summary,
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
