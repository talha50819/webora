import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Service } from "@/data/services";
import ServiceIcon from "./ServiceIcon";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-900/5"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:gradient-brand group-hover:text-white">
        <ServiceIcon icon={service.icon} />
      </div>
      <h3 className="mt-5 font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--foreground)]">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
        {service.shortDesc}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
