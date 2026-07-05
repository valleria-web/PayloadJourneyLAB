"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import type { NavItem } from "@/types/content";

type MobileNavigationProps = {
  items: NavItem[];
};

export function MobileNavigation({ items }: MobileNavigationProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Fechar navegação" : "Abrir navegação"}
        aria-expanded={open}
        className="flex size-11 items-center justify-center border border-line bg-white"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>
      {open ? (
        <div className="absolute left-0 top-full w-full border-b border-line bg-white px-5 py-4">
          <nav aria-label="Navegação móvel" className="grid gap-2">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border border-transparent px-3 py-3 text-sm font-medium text-graphite hover:border-line hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
