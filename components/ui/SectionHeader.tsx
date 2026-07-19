import { TechnicalLabel } from "@/components/ui/TechnicalLabel";

export type SectionHeadingLevel = "h2" | "h3" | "h4";

export type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  level?: SectionHeadingLevel;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  level = "h2",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const Heading = level;

  return (
    <div className={`${isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      {eyebrow ? <TechnicalLabel className="mb-4">{eyebrow}</TechnicalLabel> : null}
      <Heading className="text-3xl font-bold tracking-normal text-ink sm:text-4xl">
        {title}
      </Heading>
      {description ? (
        <p className="mt-5 max-w-3xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
