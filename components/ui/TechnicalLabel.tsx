import type { ReactNode } from "react";

export type TechnicalLabelTone = "technical" | "readable" | "terminal" | "cta" | "muted";

type TechnicalLabelProps = {
  children: ReactNode;
  className?: string;
  tone?: TechnicalLabelTone;
};

const tones = {
  technical: "text-accent-technical",
  readable: "text-accent-readable",
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
      className={`font-mono text-technical font-semibold uppercase tracking-technical-wide ${tones[tone]} ${className}`}
    >
      {children}
    </p>
  );
}
