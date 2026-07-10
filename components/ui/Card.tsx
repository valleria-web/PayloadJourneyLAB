import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: "none" | "technical" | "cta";
};

const hoverStyles = {
  none: "",
  technical:
    "hover:-translate-y-0.5 hover:border-accent-technical/60 hover:shadow-[0_18px_44px_rgba(47,174,66,0.12)]",
  cta: "hover:-translate-y-0.5 hover:border-accent-cta/60 hover:shadow-[0_18px_44px_rgba(235,92,184,0.12)]",
};

export function Card({ children, className = "", hover = "none" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border-default bg-surface-card/85 p-6 shadow-[0_14px_40px_rgba(16,16,16,0.05)] transition-all duration-200 ${hoverStyles[hover]} ${className}`}
    >
      {children}
    </div>
  );
}
