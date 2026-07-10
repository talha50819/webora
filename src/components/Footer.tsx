"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import Container from "./ui/Container";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";
import { FacebookIcon, InstagramIcon, LinkedInIcon, XIcon } from "./SocialIcons";
import { reopenCookiePreferences } from "./CookieConsent";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-primary-950 text-primary-100">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo-mark.png"
                alt="JSK Corporation"
                width={475}
                height={192}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-200/80">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { href: siteConfig.social.facebook, icon: FacebookIcon, label: "Facebook" },
                { href: siteConfig.social.instagram, icon: InstagramIcon, label: "Instagram" },
                { href: siteConfig.social.linkedin, icon: LinkedInIcon, label: "LinkedIn" },
                { href: siteConfig.social.x, icon: XIcon, label: "X" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary-600"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-primary-200/80 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-200/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-white">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-200/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-primary-400" />
                <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-primary-400" />
                <a href={`mailto:${siteConfig.emails.info}`} className="hover:text-white">
                  {siteConfig.emails.info}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-sm text-primary-200/70">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>
              &copy; {year} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
              <span className="break-all">{siteConfig.emails.sales}</span>
              <span className="break-all">{siteConfig.emails.support}</span>
              <span className="break-all">{siteConfig.emails.hr}</span>
              <span className="break-all">{siteConfig.emails.accounting}</span>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:justify-start">
            <Link href="/privacy-policy/" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions/" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
            <Link href="/information-security-policy/" className="hover:text-white">
              Information Security Policy
            </Link>
            <Link href="/compliance-policy-development/" className="hover:text-white">
              Compliance Policy
            </Link>
            <button
              type="button"
              onClick={() => reopenCookiePreferences()}
              className="hover:text-white"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
