"use client";

import { useState } from "react";
import { Check, Copy, Flower2 } from "lucide-react";

type Tab = "identity" | "typography" | "collateral";

const tabs: { key: Tab; label: string }[] = [
  { key: "identity", label: "Logo & Palette" },
  { key: "typography", label: "Typography" },
  { key: "collateral", label: "Collateral" },
];

const palette = [
  { hex: "#7E22CE", name: "Plum" },
  { hex: "#D946EF", name: "Orchid" },
  { hex: "#F3E8FF", name: "Mist" },
  { hex: "#1E1330", name: "Ink" },
];

export default function BrandBoardDemo() {
  const [tab, setTab] = useState<Tab>("identity");
  const [copied, setCopied] = useState<string | null>(null);

  function copyHex(hex: string) {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(hex).catch(() => {});
    }
    setCopied(hex);
    setTimeout(() => setCopied((c) => (c === hex ? null : c)), 1200);
  }

  return (
    <div className="@container mx-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-2xl shadow-primary-900/10">
      <div className="flex gap-1 overflow-x-auto border-b border-neutral-100 p-2">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setTab(t.key)}
            className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap transition-colors ${
              tab === t.key ? "bg-primary-600 text-white" : "text-neutral-500 hover:bg-primary-50 hover:text-primary-600"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="min-h-[420px] p-6 @lg:p-10">
        {tab === "identity" && (
          <div className="grid grid-cols-1 gap-8 @lg:grid-cols-2">
            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 p-8">
              <span className="flex h-16 w-16 items-center justify-center rounded-full gradient-brand text-white">
                <Flower2 className="h-8 w-8" />
              </span>
              <div className="text-center">
                <p className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-[0.15em] text-[var(--foreground)]">
                  FERNWOOD &amp; CO.
                </p>
                <p className="mt-1 text-xs tracking-[0.3em] text-neutral-400 uppercase">Est. 2019</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wide text-neutral-500 uppercase">
                Color palette · click to copy
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {palette.map((c) => (
                  <button
                    key={c.hex}
                    type="button"
                    onClick={() => copyHex(c.hex)}
                    className="group overflow-hidden rounded-xl border border-neutral-100 text-left"
                  >
                    <div
                      className="relative flex h-16 items-center justify-center"
                      style={{ backgroundColor: c.hex }}
                    >
                      {copied === c.hex ? (
                        <span className="flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold text-primary-700">
                          <Check className="h-3 w-3" /> Copied
                        </span>
                      ) : (
                        <Copy className="h-4 w-4 text-white/0 transition-colors group-hover:text-white/80" />
                      )}
                    </div>
                    <div className="p-2.5">
                      <p className="text-xs font-semibold text-[var(--foreground)]">{c.name}</p>
                      <p className="text-[11px] text-neutral-400">{c.hex}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "typography" && (
          <div>
            <p className="text-xs font-semibold tracking-wide text-neutral-500 uppercase">
              Display · Headings
            </p>
            <p className="mt-2 font-[family-name:var(--font-heading)] text-4xl font-bold text-[var(--foreground)]">
              Rooted in craft
            </p>
            <p className="mt-8 text-xs font-semibold tracking-wide text-neutral-500 uppercase">
              Body · Copy
            </p>
            <p className="mt-2 max-w-md text-base leading-relaxed text-neutral-600">
              Every Fernwood piece starts with a sketch, a material sample, and a question: will
              this still feel right in ten years?
            </p>
            <div className="mt-8 flex flex-wrap gap-8 rounded-xl bg-neutral-50 p-6">
              <div className="text-center">
                <p className="font-[family-name:var(--font-heading)] text-5xl font-bold text-[var(--foreground)]">
                  Aa
                </p>
                <p className="mt-1 text-[11px] text-neutral-400">Display</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-normal text-[var(--foreground)]">Aa</p>
                <p className="mt-1 text-[11px] text-neutral-400">Body</p>
              </div>
            </div>
          </div>
        )}

        {tab === "collateral" && (
          <div className="grid grid-cols-1 gap-4 @sm:grid-cols-2">
            <div className="col-span-full flex items-center gap-3 rounded-xl border border-neutral-100 p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full gradient-brand text-white">
                <Flower2 className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-[var(--foreground)]">Priya Nandakumar</p>
                <p className="text-xs text-neutral-400">Co-Founder · Fernwood &amp; Co.</p>
              </div>
            </div>
            <div className="flex aspect-square items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500">
              <Flower2 className="h-10 w-10 text-white/90" />
            </div>
            <div className="flex aspect-square flex-col items-center justify-center gap-2 rounded-xl border border-neutral-100 bg-neutral-50">
              {palette.slice(0, 3).map((c) => (
                <div key={c.hex} className="h-2.5 w-16 rounded-full" style={{ backgroundColor: c.hex }} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
