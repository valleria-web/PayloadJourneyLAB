import type { ReactNode } from "react";

type TerminalLineProps = {
  children: ReactNode;
  className?: string;
  prefix?: string;
};

export function TerminalLine({
  children,
  className = "",
  prefix = ">_",
}: TerminalLineProps) {
  return (
    <p
      className={`inline-flex max-w-full items-start gap-2 rounded-lg border border-accent-technical/20 bg-accent-muted/75 px-3 py-2 font-mono text-xs leading-5 text-text-muted ${className}`}
    >
      <span className="shrink-0 font-semibold text-accent-technical">{prefix}</span>
      <span>{children}</span>
    </p>
  );
}
