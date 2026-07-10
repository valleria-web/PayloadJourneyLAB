import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteContent } from "@/content/payload-journey-lab";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <Container className="relative flex h-16 items-center justify-between gap-5">
        <a
          href="#inicio"
          className="flex min-h-11 min-w-0 items-center gap-3 font-mono text-sm font-semibold text-accent"
          aria-label={`${siteContent.brand.name} - inicio`}
        >
          <span
            aria-hidden="true"
            className="grid size-8 shrink-0 grid-cols-2 rounded-md border border-accent bg-ink"
          >
            <span className="border-b border-r border-accent" />
            <span className="border-b border-accent" />
            <span className="border-r border-accent" />
            <span />
          </span>
          <span className="truncate">{siteContent.brand.name}</span>
        </a>
        <nav aria-label="Navegacao principal" className="hidden items-center gap-1 text-sm lg:flex">
          {siteContent.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 font-medium text-graphite transition-colors duration-200 hover:bg-accent-muted hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button
            href={siteContent.hero.primaryAction.href}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-10 px-4 py-2"
          >
            Entrar no LAB
          </Button>
        </div>
        <MobileNavigation items={siteContent.nav} />
      </Container>
    </header>
  );
}
