import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  disabled?: boolean;
};

const variants = {
  primary:
    "border-accent-cta bg-accent-cta text-white shadow-[0_12px_30px_rgba(235,92,184,0.18)] hover:border-pink-dark hover:bg-pink-dark hover:text-white",
  secondary:
    "border-border-default bg-surface-page text-ink hover:border-accent-cta hover:bg-blush/50 hover:text-ink",
  ghost:
    "border-transparent bg-transparent text-ink hover:border-border-default hover:bg-accent-muted hover:text-ink",
};

export function Button({
  children,
  className = "",
  variant = "primary",
  disabled = false,
  rel,
  target,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-5 py-3 text-center text-sm font-semibold leading-5 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink";

  if (disabled) {
    return (
      <span
        aria-disabled="true"
        className={`${baseClasses} cursor-not-allowed border-border-default bg-surface-soft text-text-muted opacity-80 ${className}`}
      >
        {children}
      </span>
    );
  }

  return (
    <a
      className={`${baseClasses} ${variants[variant]} ${className}`}
      rel={target === "_blank" && !rel ? "noopener noreferrer" : rel}
      target={target}
      {...props}
    >
      {children}
    </a>
  );
}
