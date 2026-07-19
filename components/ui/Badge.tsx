import type { HTMLAttributes, ReactNode } from "react";

export type BadgeVariant = "technical" | "cta" | "neutral";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  variant?: BadgeVariant;
};

const variants = {
  technical: "border-accent-technical/30 bg-accent-muted text-accent-technical",
  cta: "border-accent-cta/25 bg-blush text-pink-dark",
  neutral: "border-border-default bg-white text-text-muted",
};

export function Badge({ children, className = "", variant = "technical", ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full border px-3 py-1 font-mono text-technical font-medium uppercase tracking-technical ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
