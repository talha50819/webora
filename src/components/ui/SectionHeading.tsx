type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Heading = "h2",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClasses}`}>
      {eyebrow && (
        <span className="inline-block text-sm font-semibold tracking-wide text-primary-600 uppercase">
          {eyebrow}
        </span>
      )}
      <Heading className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
        {title}
      </Heading>
      {description && (
        <p className="mt-4 text-lg text-neutral-600">{description}</p>
      )}
    </div>
  );
}
