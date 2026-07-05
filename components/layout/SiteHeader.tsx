import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { Container } from "@/components/ui/Container";
import { siteContent } from "@/content/payload-journey-lab";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <Container className="relative flex h-16 items-center justify-between gap-6">
        <a href="#inicio" className="flex items-center gap-3 font-semibold">
          <span aria-hidden="true" className="grid size-8 grid-cols-2 border border-ink">
            <span className="border-b border-r border-ink" />
            <span className="border-b border-ink" />
            <span className="border-r border-ink" />
            <span />
          </span>
          <span>{siteContent.brand.name}</span>
        </a>
        <nav aria-label="Navegação principal" className="hidden items-center gap-5 md:flex">
          {siteContent.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-graphite transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <MobileNavigation items={siteContent.nav} />
      </Container>
    </header>
  );
}
