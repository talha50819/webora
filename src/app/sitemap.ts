import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { subServicesByService } from "@/data/subServices";
import { pairings } from "@/data/pairings";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/about/", priority: 0.7 },
    { path: "/services/", priority: 0.9 },
    { path: "/portfolio/", priority: 0.7 },
    { path: "/contact/", priority: 0.7 },
    { path: "/privacy-policy/", priority: 0.3 },
    { path: "/terms-and-conditions/", priority: 0.3 },
    { path: "/information-security-policy/", priority: 0.3 },
    { path: "/compliance-policy-development/", priority: 0.3 },
  ];

  const now = new Date();

  const staticEntries = staticRoutes.map(({ path, priority }) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  }));

  const serviceEntries = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const subServiceEntries = Object.entries(subServicesByService).flatMap(
    ([serviceSlug, subs]) =>
      subs.map((sub) => ({
        url: `${SITE_URL}/services/${serviceSlug}/${sub.slug}/`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }))
  );

  const pairingEntries = pairings.map((p) => ({
    url: `${SITE_URL}/services/pairings/${p.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticEntries,
    ...serviceEntries,
    ...subServiceEntries,
    ...pairingEntries,
  ];
}
