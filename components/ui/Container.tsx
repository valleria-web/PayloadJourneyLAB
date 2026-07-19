import type { HTMLAttributes, ReactNode } from "react";

export type ContainerSize = "default" | "narrow" | "wide";

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  size?: ContainerSize;
};

const sizes = {
  narrow: "foundation-container-narrow",
  default: "foundation-container-default",
  wide: "foundation-container-wide",
} satisfies Record<ContainerSize, string>;

export function Container({
  children,
  className = "",
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={`foundation-container ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
