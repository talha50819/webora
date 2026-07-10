import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center py-24">
      <Container className="text-center">
        <span className="gradient-brand-text font-[family-name:var(--font-heading)] text-6xl font-bold">
          404
        </span>
        <h1 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-semibold text-[var(--foreground)]">
          Page not found
        </h1>
        <p className="mt-2 text-neutral-600">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8">
          <Button href="/">Back to home</Button>
        </div>
      </Container>
    </section>
  );
}
