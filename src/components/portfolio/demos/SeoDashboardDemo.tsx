"use client";

import { useMemo, useState } from "react";
import { Globe, LayoutDashboard, MapPin, Search, TrendingUp } from "lucide-react";

type View = "overview" | "keywords" | "local";

const navItems: { key: View; label: string; icon: typeof LayoutDashboard }[] = [
  { key: "overview", label: "Overview", icon: LayoutDashboard },
  { key: "keywords", label: "Keywords", icon: Search },
  { key: "local", label: "Local", icon: MapPin },
];

const kpis = [
  { label: "Organic traffic", value: "+118%" },
  { label: "Avg. position", value: "#3.2" },
  { label: "Leads", value: "412" },
];
const trend = [30, 42, 38, 55, 60, 72, 68, 85, 90];

const allKeywords = [
  { term: "coastal rain jackets", pos: "#2", change: "+14" },
  { term: "outdoor gear near me", pos: "#1", change: "+8" },
  { term: "hiking boots portland", pos: "#4", change: "+22" },
  { term: "waterproof backpacks", pos: "#3", change: "+6" },
  { term: "insulated water bottles", pos: "#5", change: "+11" },
  { term: "camping tents oregon", pos: "#2", change: "+9" },
];

const markets = [
  { city: "Portland, OR", rank: 1 },
  { city: "Eugene, OR", rank: 2 },
  { city: "Salem, OR", rank: 1 },
];

function Sidebar({ view, onChange }: { view: View; onChange: (v: View) => void }) {
  return (
    <div className="flex w-16 shrink-0 flex-col items-center gap-3 border-r border-neutral-100 py-6 @lg:w-40 @lg:items-stretch @lg:px-3">
      {navItems.map((item) => {
        const active = item.key === view;
        return (
          <button
            key={item.key}
            type="button"
            onClick={() => onChange(item.key)}
            className={`flex items-center justify-center gap-2 rounded-lg px-2 py-2.5 text-xs font-semibold transition-colors @lg:justify-start ${
              active ? "bg-primary-600 text-white" : "text-neutral-400 hover:bg-primary-50 hover:text-primary-600"
            }`}
          >
            <item.icon className="h-4 w-4 shrink-0" />
            <span className="hidden @lg:inline">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default function SeoDashboardDemo() {
  const [view, setView] = useState<View>("overview");
  const [query, setQuery] = useState("");

  const filteredKeywords = useMemo(
    () => allKeywords.filter((k) => k.term.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <div className="flex min-h-[560px] bg-white">
      <Sidebar view={view} onChange={setView} />

      <div className="flex-1 p-6 @lg:p-8">
        {view === "overview" && (
          <div>
            <p className="text-sm font-bold text-[var(--foreground)]">Growth overview</p>
            <div className="mt-4 grid grid-cols-3 gap-3 @sm:max-w-md">
              {kpis.map((k) => (
                <div key={k.label} className="rounded-lg border border-neutral-100 p-3">
                  <p className="text-base font-bold text-primary-600">{k.value}</p>
                  <p className="text-[11px] text-neutral-400">{k.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl border border-neutral-100 p-4 @sm:max-w-md">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500">
                <TrendingUp className="h-3.5 w-3.5 text-primary-600" /> Organic sessions, last 9 weeks
              </div>
              <div className="mt-3 flex h-20 items-end justify-between gap-1.5">
                {trend.map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="w-full rounded-full bg-gradient-to-t from-primary-600 to-accent-500"
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {view === "keywords" && (
          <div>
            <p className="text-sm font-bold text-[var(--foreground)]">Keyword rankings</p>
            <div className="mt-4 flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-2 @sm:max-w-sm">
              <Search className="h-4 w-4 shrink-0 text-neutral-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Filter keywords…"
                className="w-full text-sm text-[var(--foreground)] outline-none placeholder:text-neutral-400"
              />
            </div>
            <div className="mt-4 space-y-2 @sm:max-w-md">
              {filteredKeywords.map((k) => (
                <div
                  key={k.term}
                  className="flex items-center justify-between rounded-lg border border-neutral-100 px-3 py-2.5"
                >
                  <span className="text-xs font-medium text-neutral-600">{k.term}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[var(--foreground)]">{k.pos}</span>
                    <span className="rounded-full bg-primary-50 px-1.5 py-0.5 text-[11px] font-semibold text-primary-600">
                      {k.change}
                    </span>
                  </div>
                </div>
              ))}
              {filteredKeywords.length === 0 && (
                <p className="text-xs text-neutral-400">No keywords match &ldquo;{query}&rdquo;.</p>
              )}
            </div>
          </div>
        )}

        {view === "local" && (
          <div>
            <p className="text-sm font-bold text-[var(--foreground)]">Local pack rankings</p>
            <div className="mt-4 space-y-2.5 @sm:max-w-md">
              {markets.map((m) => (
                <div
                  key={m.city}
                  className="flex items-center justify-between rounded-lg border border-neutral-100 px-4 py-3"
                >
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-primary-600" />
                    <span className="text-xs font-medium text-neutral-600">{m.city}</span>
                  </div>
                  <span className="rounded-full gradient-brand px-2.5 py-1 text-[11px] font-bold text-white">
                    Top {m.rank}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
