import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentGuard from "@/components/ContentGuard";
import CookieConsent from "@/components/CookieConsent";
import { siteConfig } from "@/data/siteConfig";
import { SITE_URL } from "@/lib/seo";

const heading = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const defaultTitle =
  "JSK Corporation — Digital Agency for Web, Mobile, Design & Growth";
const defaultDescription =
  "JSK Corporation is a full-service digital agency delivering web development, mobile apps, UI/UX design, branding, digital marketing, AI/ML solutions, and enterprise software.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: "%s | JSK Corporation",
  },
  description: defaultDescription,
  keywords: [
    "digital agency",
    "web development",
    "mobile app development",
    "UI/UX design",
    "branding agency",
    "digital marketing",
    "AI/ML solutions",
    "enterprise software",
    "Karachi digital agency",
  ],
  authors: [{ name: siteConfig.name, url: SITE_URL }],
  alternates: { canonical: "/" },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: SITE_URL,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  description: siteConfig.description,
  url: SITE_URL,
  logo: `${SITE_URL}/logo-mark-dark.png`,
  image: `${SITE_URL}/logo-mark-dark.png`,
  telephone: siteConfig.phoneHref,
  email: siteConfig.emails.info,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.addressParts.street,
    addressLocality: siteConfig.addressParts.city,
    addressRegion: siteConfig.addressParts.region,
    postalCode: siteConfig.addressParts.postalCode,
    addressCountry: siteConfig.addressParts.country,
  },
  sameAs: Object.values(siteConfig.social).filter((url) => url !== "#"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[var(--foreground)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        <ContentGuard />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
