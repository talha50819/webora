import Button from "./ui/Button";
import Container from "./ui/Container";

export default function CTASection({
  title = "Ready to start your project?",
  description = "Tell us about your goals and we'll help you figure out the right approach.",
  primaryLabel = "Get in touch",
  primaryHref = "/contact",
  secondaryLabel = "View our services",
  secondaryHref = "/services",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="py-20">
      <Container>
        <div className="gradient-brand relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <h2 className="relative font-[family-name:var(--font-heading)] text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/85">
            {description}
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href={primaryHref} variant="secondary">
              {primaryLabel}
            </Button>
            <Button href={secondaryHref} variant="outline-white">
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
