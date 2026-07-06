import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
};

const variants = {
  primary: "border-ink bg-ink text-white hover:border-accent hover:bg-accent",
  secondary: "border-line bg-white text-ink hover:border-accent hover:text-accent",
};

export function Button({
  children,
  className = "",
  variant = "primary",
  disabled = false,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border px-5 py-3 text-center text-sm font-semibold leading-5 transition-colors";

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
