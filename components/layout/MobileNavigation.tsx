"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import type { NavItem, NavigationArea, PrimaryNavigationItem } from "@/types/content";

type MobileNavigationProps = {
  items: readonly PrimaryNavigationItem[];
  cta: NavItem;
  activeArea: NavigationArea | null;
};

export function MobileNavigation({ items, cta, activeArea }: MobileNavigationProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstItemRef = useRef<HTMLAnchorElement>(null);
  const menuId = "mobile-navigation";

  useEffect(() => {
    if (!open) return;
    firstItemRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className="shrink-0 lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-label={open ? "Fechar navegação" : "Abrir navegação"}
        aria-expanded={open}
        aria-controls={menuId}
        className="flex size-11 items-center justify-center rounded-lg border border-line bg-paper text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cta focus-visible:ring-offset-2"
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
            {items.map((item, index) => (
              <a
                key={item.href}
                ref={index === 0 ? firstItemRef : undefined}
                href={item.href}
                aria-current={item.area === activeArea ? "page" : undefined}
                className={`min-h-11 rounded-lg border px-3 py-3 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cta ${
                  item.area === activeArea
                    ? "border-accent-cta bg-accent-muted text-ink"
                    : "border-transparent text-graphite hover:border-line hover:bg-accent-muted hover:text-ink"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              href={cta.href}
              variant="contrast"
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              {cta.label}
            </Button>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
