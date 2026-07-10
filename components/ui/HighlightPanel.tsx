import type { ReactNode } from "react";

type HighlightPanelProps = {
  children: ReactNode;
  className?: string;
  variant?: "soft-blush" | "technical" | "dark";
};

const variants = {
  "soft-blush": "border-accent-cta/25 bg-blush/50 text-ink",
  technical: "border-accent-technical/25 bg-accent-muted text-ink",
  dark: "border-white/15 bg-ink text-white",
};

export function HighlightPanel({
  children,
  className = "",
  variant = "technical",
}: HighlightPanelProps) {
  return (
    <div
      className={`technical-corners rounded-2xl border p-6 shadow-[0_18px_54px_rgba(16,16,16,0.06)] ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  );
}
