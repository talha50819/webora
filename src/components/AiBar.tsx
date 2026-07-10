"use client";

import { FormEvent, useState } from "react";
import { Sparkles, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { askGemini } from "@/lib/askGemini";

export default function AiBar() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = question.trim();
    if (!trimmed || loading) return;

    setLoading(true);
    setError(null);
    setAnswer(null);

    try {
      const result = await askGemini(trimmed);
      setAnswer(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto mt-10 w-full max-w-xl">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 rounded-full border border-primary-200 bg-white p-1.5 pl-4 shadow-sm shadow-primary-900/5"
      >
        <Sparkles className="h-4 w-4 shrink-0 text-primary-500" />
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask about web dev, apps, AI, marketing…"
          maxLength={300}
          className="min-w-0 flex-1 bg-transparent text-sm text-neutral-700 outline-none placeholder:text-neutral-400"
        />
        <button
          type="submit"
          disabled={loading || !question.trim()}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full gradient-brand px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              Ask
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>

      {(answer || error) && (
        <div className="mt-3 rounded-2xl border border-primary-100 bg-primary-50/70 p-4 text-left">
          <p className="text-sm leading-relaxed text-neutral-700">
            {error ? error : answer}
          </p>
          {answer && !error && (
            <Link
              href="/contact"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700"
            >
              Talk to JSK Corporation about this
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
