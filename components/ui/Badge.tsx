import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center border border-line px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-graphite">
      {children}
    </span>
  );
}
