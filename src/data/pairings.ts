export type Pairing = {
  slug: string;
  slugs: [string, string];
  blurb: string;
};

const raw: { slugs: [string, string]; blurb: string }[] = [
  {
    slugs: ["web-development", "ui-ux-design"],
    blurb:
      "A site that looks right and works right, designed and built together.",
  },
  {
    slugs: ["digital-marketing", "content-writing"],
    blurb: "Campaigns backed by copy written to actually convert.",
  },
  {
    slugs: ["software-development", "cybersecurity-services"],
    blurb: "Systems built to scale — and built to hold up under scrutiny.",
  },
  {
    slugs: ["ai-ml-solutions", "business-applications-enterprise-solutions"],
    blurb:
      "Automation and intelligence layered into the tools your team already uses.",
  },
];

export const pairings: Pairing[] = raw.map((p) => ({
  ...p,
  slug: `${p.slugs[0]}-and-${p.slugs[1]}`,
}));

export function getPairingBySlug(slug: string) {
  return pairings.find((p) => p.slug === slug);
}
