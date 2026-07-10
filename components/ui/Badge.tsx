import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "technical" | "cta" | "neutral";
};

const variants = {
  technical: "border-accent-technical/30 bg-accent-muted text-accent-technical",
  cta: "border-accent-cta/25 bg-blush text-pink-dark",
  neutral: "border-border-default bg-white text-text-muted",
};

export function Badge({ children, variant = "technical" }: BadgeProps) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full border px-3 py-1 font-mono text-xs font-medium uppercase tracking-[0.08em] ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
