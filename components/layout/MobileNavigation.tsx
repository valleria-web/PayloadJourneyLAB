"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import type { NavItem } from "@/types/content";

type MobileNavigationProps = {
  items: NavItem[];
};

export function MobileNavigation({ items }: MobileNavigationProps) {
  const [open, setOpen] = useState(false);
  const menuId = "mobile-navigation";

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Fechar navegação" : "Abrir navegação"}
        aria-expanded={open}
        aria-controls={menuId}
        className="flex size-11 items-center justify-center rounded-lg border border-line bg-paper text-ink transition-colors hover:border-accent hover:text-accent"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? (
          <X aria-hidden="true" className="size-5" />
        ) : (
          <Menu aria-hidden="true" className="size-5" />
        )}
      </button>
      {open ? (
        <div
          id={menuId}
          className="absolute left-0 top-full w-full border-b border-line bg-paper px-5 py-4 shadow-sm"
        >
          <nav aria-label="Navegação móvel" className="grid gap-2">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg border border-transparent px-3 py-3 text-sm font-medium text-graphite hover:border-line hover:bg-accent-muted hover:text-ink"
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
