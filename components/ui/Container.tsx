import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
};

const sizes = {
  narrow: "max-w-5xl",
  default: "max-w-7xl",
  wide: "max-w-[88rem]",
};

export function Container({ children, className = "", size = "default" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full ${sizes[size]} px-5 sm:px-8 lg:px-10 xl:px-12 ${className}`}>
      {children}
    </div>
  );
}
