export const projects = [
  {
    slug: 'headless-storefront-rebuild',
    sector: 'E-commerce / DTC',
    title: 'Headless storefront rebuild for a bootstrapped DTC brand',
    desc: 'Replaced a slow, plugin-heavy storefront with a headless build ahead of the brand’s first funding pitch — page load cut from 6s to under 1.5s.',
    tags: ['Web Development'],
    demo: 'storefront',
    demoLabel: 'aurelieshop.com',
  },
  {
    slug: 'driver-dispatch-app',
    sector: 'Logistics / Startup',
    title: 'Driver dispatch app for a regional courier startup',
    desc: 'Replaced a spreadsheet-based dispatch process with a driver-facing mobile app tracking deliveries in real time.',
    tags: ['Mobile App Development'],
    demo: 'dispatch',
    demoLabel: 'fleetline.app/dispatch',
  },
  {
    slug: 'cloud-cost-teardown',
    sector: 'SaaS / Solo founder',
    title: 'Cloud cost teardown for a single-founder SaaS product',
    desc: 'Migrated an over-provisioned VPS setup to right-sized AWS infrastructure, cutting monthly hosting cost by roughly 70%.',
    tags: ['Cloud & DevOps'],
    demo: 'cloudcost',
    demoLabel: 'ledger.cloud/reports',
  },
  {
    slug: 'security-review',
    sector: 'Fintech / Pre-seed',
    title: 'First security review ahead of an enterprise vendor audit',
    desc: 'Ran a pre-seed fintech’s first application security review so it could pass its first enterprise customer’s vendor questionnaire.',
    tags: ['Cybersecurity'],
    demo: 'security',
    demoLabel: 'redteam.report',
  },
  {
    slug: 'booking-flow-redesign',
    sector: 'Professional services',
    title: 'Booking flow redesign for a boutique studio’s client portal',
    desc: 'Simplified a five-step booking flow to two steps, cutting abandoned bookings roughly in half.',
    tags: ['UI/UX Design'],
    demo: 'booking',
    demoLabel: 'petalandstone.studio/book',
  },
  {
    slug: 'course-recommendation-feature',
    sector: 'Edtech / Solo founder',
    title: 'Lightweight course-recommendation feature for a one-person edtech platform',
    desc: 'Shipped a recommendation feature built on an off-the-shelf embedding model — no dedicated data team or infrastructure required.',
    tags: ['AI & Machine Learning'],
    demo: 'recommend',
    demoLabel: 'lernly.app/courses',
  },
]

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}
