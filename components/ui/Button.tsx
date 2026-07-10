import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
};

const variants = {
  primary: "border-pink bg-pink text-white shadow-[0_12px_30px_rgba(235,92,184,0.18)] hover:border-pink-dark hover:bg-pink-dark",
  secondary: "border-line bg-paper text-ink hover:border-pink hover:bg-blush/45",
};

export function Button({
  children,
  className = "",
  variant = "primary",
  disabled = false,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-5 py-3 text-center text-sm font-semibold leading-5 transition-all duration-200";

  if (disabled) {
    return (
      <span
        aria-disabled="true"
        className={`${baseClasses} cursor-not-allowed border-line bg-soft text-muted opacity-90 ${className}`}
      >
        {children}
      </span>
    );
  }

  return (
    <a
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
