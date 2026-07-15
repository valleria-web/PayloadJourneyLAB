import type { ReactNode } from "react";

type TechnicalLabelProps = {
  children: ReactNode;
  className?: string;
  tone?: "technical" | "terminal" | "cta" | "muted";
};

const tones = {
  technical: "text-accent-technical",
  terminal: "text-terminal",
  cta: "text-pink-dark",
  muted: "text-text-muted",
};

export function TechnicalLabel({
  children,
  className = "",
  tone = "technical",
}: TechnicalLabelProps) {
  return (
    <p
      className={`font-mono text-[calc(0.75rem+5px)] font-semibold uppercase tracking-[0.12em] ${tones[tone]} ${className}`}
    >
      {children}
    </p>
  );
}
