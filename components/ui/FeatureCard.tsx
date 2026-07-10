import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { TerminalChip } from "@/components/ui/TerminalChip";

type FeatureCardProps = {
  number?: string;
  marker?: ReactNode;
  title: string;
  description: string;
  href?: string;
  className?: string;
  tone?: "technical" | "cta";
};

export function FeatureCard({
  number,
  marker,
  title,
  description,
  href,
  className = "",
  tone = "technical",
}: FeatureCardProps) {
  const content = (
    <Card hover={tone === "cta" ? "cta" : "technical"} className={`h-full ${className}`}>
      <div className="mb-6 flex items-start justify-between gap-4">
        {number ? <TerminalChip tone={tone}>{number}</TerminalChip> : null}
        {marker ? (
          <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-border-default bg-surface-page text-accent-technical">
            {marker}
          </span>
        ) : null}
      </div>
      <h3 className="text-xl font-bold leading-tight text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-text-muted">{description}</p>
      {href ? (
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-pink-dark">
          Abrir
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </span>
      ) : null}
    </Card>
  );

  if (!href) {
    return content;
  }

  return (
    <a href={href} className="block h-full text-inherit hover:text-inherit">
      {content}
    </a>
  );
}
