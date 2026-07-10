import { TechnicalLabel } from "@/components/ui/TechnicalLabel";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`${isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      {eyebrow ? <TechnicalLabel className="mb-4">{eyebrow}</TechnicalLabel> : null}
      <h2 className="text-3xl font-bold tracking-normal text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-3xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
