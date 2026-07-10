"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { Cookie } from "lucide-react";
import Button from "./ui/Button";
import { siteConfig } from "@/data/siteConfig";

const STORAGE_KEY = "cookie-consent";
const REOPEN_EVENT = "open-cookie-preferences";

const GA_ID = "G-R2R1LN41QV";
const TAWK_SRC = "https://embed.tawk.to/6a50f3d67838b91d47b6bfb3/1jt63gvqq";

type Consent = "accepted" | "rejected";

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Consent | null;
    if (stored === "accepted" || stored === "rejected") {
      setConsent(stored);
    } else {
      setShowBanner(true);
    }

    const reopen = () => setShowBanner(true);
    window.addEventListener(REOPEN_EVENT, reopen);
    return () => window.removeEventListener(REOPEN_EVENT, reopen);
  }, []);

  function choose(value: Consent) {
    window.localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
    setShowBanner(false);
  }

  return (
    <>
      {consent === "accepted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
          <Script id="tawk-to" strategy="afterInteractive">
            {`
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='${TAWK_SRC}';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `}
          </Script>
        </>
      )}

      {showBanner && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white/95 px-4 py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-sm sm:px-6"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
              <p className="text-sm text-neutral-600">
                {siteConfig.name} uses cookies for essential site functionality and,
                with your consent, for analytics and live chat. See our{" "}
                <Link href="/privacy-policy/" className="font-medium text-primary-600 hover:underline">
                  Privacy Policy
                </Link>{" "}
                for details.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3 sm:justify-end">
              <Button variant="secondary" onClick={() => choose("rejected")}>
                Reject non-essential
              </Button>
              <Button variant="primary" onClick={() => choose("accepted")}>
                Accept all
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function reopenCookiePreferences() {
  window.dispatchEvent(new Event(REOPEN_EVENT));
}
