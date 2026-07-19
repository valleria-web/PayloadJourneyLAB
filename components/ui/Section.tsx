import type { HTMLAttributes, ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export type SectionVariant = "default" | "soft" | "dark" | "blush";

export type SectionProps = Omit<HTMLAttributes<HTMLElement>, "id"> & {
  id?: string;
  children: ReactNode;
  variant?: SectionVariant;
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
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={`foundation-section scroll-mt-24 ${variants[variant]} ${className}`}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
