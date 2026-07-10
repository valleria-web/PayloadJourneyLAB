import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center rounded-full border border-line bg-white px-3 py-1 font-mono text-xs font-medium uppercase tracking-[0.08em] text-accent">
      {children}
    </span>
  );
}
