import type { HTMLAttributes, ReactNode } from "react";

export type CardHover = "none" | "technical" | "cta";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  hover?: CardHover;
};

const hoverStyles = {
  none: "",
  technical:
    "hover:-translate-y-0.5 hover:border-accent-technical/60 hover:shadow-foundation-card-technical",
  cta: "hover:-translate-y-0.5 hover:border-accent-cta/60 hover:shadow-foundation-card-cta",
};

export function Card({ children, className = "", hover = "none", ...props }: CardProps) {
  return (
    <div
      className={`rounded-foundation-card border border-border-default bg-surface-card/85 p-foundation-card shadow-foundation-card transition-all duration-foundation ${hoverStyles[hover]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
