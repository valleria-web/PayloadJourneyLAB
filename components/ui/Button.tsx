import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

const variants = {
  primary: "border-ink bg-ink text-white hover:bg-white hover:text-ink",
  secondary: "border-line bg-white text-ink hover:border-ink",
};

export function Button({ children, className = "", variant = "primary", ...props }: ButtonProps) {
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center rounded-none border px-5 py-3 text-sm font-semibold transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
