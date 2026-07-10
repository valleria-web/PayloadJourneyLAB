import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-line bg-white/75 p-6 shadow-[0_14px_40px_rgba(47,174,66,0.07)] transition-all duration-200 hover:shadow-[0_18px_48px_rgba(47,174,66,0.13)] ${className}`}
    >
      {children}
    </div>
  );
}
