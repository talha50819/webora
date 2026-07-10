"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Button from "./ui/Button";
import { services } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!message) nextErrors.message = "Please add a short message.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      setSubmitError(
        `The contact form isn't configured yet. Please email us directly at ${siteConfig.emails.info}.`
      );
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New inquiry from ${siteConfig.name} website`,
          name,
          email,
          phone,
          service,
          message,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Submission failed");
      }
      setSubmitted(true);
    } catch {
      setSubmitError(
        `Something went wrong sending your message. Please email us directly at ${siteConfig.emails.info}.`
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-primary-200 bg-primary-50 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-primary-600" />
        <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--foreground)]">
          Thanks — we&apos;ve got your message
        </h3>
        <p className="mt-2 max-w-sm text-sm text-neutral-600">
          A member of the JSK Corporation team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-neutral-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="mt-1.5 w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
            placeholder="Jane Doe"
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-neutral-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-1.5 w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
            placeholder="jane@company.com"
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-neutral-700">
            Phone <span className="text-neutral-400">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-1.5 w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
            placeholder="(555) 555-5555"
          />
        </div>
        <div>
          <label htmlFor="service" className="text-sm font-medium text-neutral-700">
            Service of interest
          </label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className="mt-1.5 w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-neutral-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-1.5 w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
          placeholder="Tell us a bit about your project..."
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
      </div>

      {submitError && <p className="text-sm text-red-600">{submitError}</p>}

      <Button type="submit" className="w-full sm:w-auto" disabled={submitting}>
        {submitting ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
