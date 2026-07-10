import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "soft" | "dark" | "blush";
  containerClassName?: string;
};

const variants = {
  default: "bg-surface-page text-text-primary",
  soft: "bg-surface-soft text-text-primary",
  dark: "bg-ink text-white",
  blush: "bg-blush text-text-primary",
};

export function Section({
  id,
  children,
  className = "",
  variant = "default",
  containerClassName = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-16 sm:py-20 lg:py-24 ${variants[variant]} ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
