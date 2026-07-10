import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

export const SITE_URL = "https://jskcorporation.com";

const DEFAULT_TITLE =
  "JSK Corporation — Digital Agency for Web, Mobile, Design & Growth";

/**
 * Builds canonical/OpenGraph/Twitter metadata for a page. `path` must
 * match the site's trailingSlash routing (e.g. "/about/", or "/" for home).
 */
export function buildMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: string;
}): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const fullTitle = title ? `${title} | ${siteConfig.name}` : DEFAULT_TITLE;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
