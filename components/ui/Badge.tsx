import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center rounded-sm border border-line bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-muted">
      {children}
    </span>
  );
}
