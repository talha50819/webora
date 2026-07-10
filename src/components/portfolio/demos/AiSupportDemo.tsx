"use client";

import { useState } from "react";
import {
  Bot,
  CheckCircle2,
  FileText,
  MessageSquare,
  Send,
  Sparkles,
  TrendingDown,
} from "lucide-react";

type View = "chat" | "insights" | "sources";
type Msg = { from: "user" | "bot"; text: string };

const navItems: { key: View; label: string; icon: typeof MessageSquare }[] = [
  { key: "chat", label: "Chat", icon: MessageSquare },
  { key: "insights", label: "Insights", icon: TrendingDown },
  { key: "sources", label: "Sources", icon: FileText },
];

const suggestions = [
  "Where's my shipment #4521?",
  "How do I reset my password?",
  "What's your return policy?",
];

const replies: Record<string, string> = {
  "Where's my shipment #4521?":
    "Shipment #4521 left our Reno facility this morning and is on track for delivery tomorrow by 5 PM.",
  "How do I reset my password?":
    "Go to Account > Security and click \"Reset password\" — we'll email you a secure link that expires in 15 minutes.",
  "What's your return policy?":
    "You can return most items within 30 days of delivery for a full refund, as long as they're unused and in original packaging.",
};
const fallbackReply =
  "Let me look into that for you — I've flagged this to a specialist and they'll follow up shortly.";

const topics = [
  { label: "Shipment tracking", pct: 82 },
  { label: "Account setup", pct: 67 },
  { label: "Billing questions", pct: 54 },
];

const sources = [
  { name: "Shipping Policy.pdf", status: "Indexed" },
  { name: "Account FAQ.docx", status: "Indexed" },
  { name: "Billing Handbook.pdf", status: "Indexed" },
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

export default function AiSupportDemo() {
  const [view, setView] = useState<View>("chat");
  const [messages, setMessages] = useState<Msg[]>([
    { from: "bot", text: "Hi! I'm the Northline Assistant. Ask me about your shipment, account, or billing." },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  function send(text: string) {
    if (!text.trim() || typing) return;
    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: replies[text] ?? fallbackReply }]);
      setTyping(false);
    }, 700);
  }

  return (
    <div className="flex min-h-[560px] bg-white">
      <Sidebar view={view} onChange={setView} />

      <div className="flex flex-1 flex-col">
        {view === "chat" && (
          <>
            <div className="flex items-center gap-2.5 border-b border-neutral-100 px-5 py-3.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full gradient-brand text-white">
                <Bot className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-bold text-[var(--foreground)]">Northline Assistant</p>
                <p className="flex items-center gap-1 text-[11px] text-primary-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-500" /> Online
                </p>
              </div>
            </div>
            <div className="flex-1 space-y-3 overflow-y-auto bg-neutral-50 p-5">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={
                    m.from === "bot"
                      ? "max-w-[80%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5 text-sm text-neutral-600 shadow-sm"
                      : "ml-auto max-w-[80%] rounded-2xl rounded-tr-sm gradient-brand px-3.5 py-2.5 text-sm text-white"
                  }
                >
                  {m.text}
                </div>
              ))}
              {typing && (
                <div className="max-w-[50%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5 text-sm text-neutral-400 shadow-sm">
                  Typing…
                </div>
              )}
              {messages.length <= 1 && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => send(s)}
                      className="rounded-full border border-primary-200 px-3 py-1.5 text-xs font-medium text-primary-600 hover:bg-primary-50"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 border-t border-neutral-100 p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") send(input);
                }}
                placeholder="Message Northline Assistant…"
                className="h-9 flex-1 rounded-full bg-neutral-100 px-4 text-sm text-[var(--foreground)] outline-none placeholder:text-neutral-400"
              />
              <button
                type="button"
                onClick={() => send(input)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full gradient-brand text-white"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </>
        )}

        {view === "insights" && (
          <div className="p-6 @lg:p-8">
            <p className="text-sm font-bold text-[var(--foreground)]">Deflection insights</p>
            <div className="mt-4 grid grid-cols-2 gap-3 @sm:max-w-sm">
              <div className="rounded-xl border border-neutral-100 p-4">
                <div className="flex items-center gap-1 text-[11px] text-neutral-400">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary-600" /> Tickets deflected
                </div>
                <p className="mt-1 text-xl font-bold text-primary-600">+58%</p>
              </div>
              <div className="rounded-xl border border-neutral-100 p-4">
                <div className="flex items-center gap-1 text-[11px] text-neutral-400">
                  <TrendingDown className="h-3.5 w-3.5 text-primary-600" /> Avg. response time
                </div>
                <p className="mt-1 text-xl font-bold text-primary-600">-91%</p>
              </div>
            </div>
            <p className="mt-6 text-xs font-semibold text-neutral-500 uppercase">
              Top deflected topics
            </p>
            <div className="mt-3 space-y-3 @sm:max-w-sm">
              {topics.map((t) => (
                <div key={t.label}>
                  <div className="flex justify-between text-xs text-neutral-500">
                    <span>{t.label}</span>
                    <span className="font-semibold text-[var(--foreground)]">{t.pct}%</span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-neutral-100">
                    <div style={{ width: `${t.pct}%` }} className="h-full rounded-full gradient-brand" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === "sources" && (
          <div className="p-6 @lg:p-8">
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-primary-600" />
              <p className="text-sm font-bold text-[var(--foreground)]">Training sources</p>
            </div>
            <div className="mt-4 space-y-2 @sm:max-w-md">
              {sources.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center justify-between rounded-lg border border-neutral-100 px-4 py-3"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="h-4 w-4 text-neutral-400" />
                    <span className="text-xs font-medium text-neutral-600">{s.name}</span>
                  </div>
                  <span className="rounded-full bg-primary-50 px-2.5 py-1 text-[11px] font-semibold text-primary-600">
                    {s.status}
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
