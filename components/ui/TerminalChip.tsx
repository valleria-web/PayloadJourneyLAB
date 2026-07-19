import type { ReactNode } from "react";

type TerminalChipProps = {
  children: ReactNode;
  className?: string;
  tone?: "technical" | "cta" | "neutral";
};

const tones = {
  technical: "border-accent-technical/25 bg-accent-muted text-accent-technical",
  cta: "border-accent-cta/25 bg-blush text-pink-dark",
  neutral: "border-border-default bg-white/80 text-text-muted",
};

export function TerminalChip({
  children,
  className = "",
  tone = "technical",
}: TerminalChipProps) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-md border px-2.5 py-1 font-mono text-technical-sm font-semibold uppercase leading-none tracking-technical ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
