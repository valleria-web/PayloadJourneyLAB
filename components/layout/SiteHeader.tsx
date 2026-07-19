import Image from "next/image";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteContent } from "@/content/payload-journey-lab";
import { homepageAnchors, siteCtas, siteNavigation } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <Container className="relative flex h-16 items-center justify-between gap-5">
        <a
          href={`#${homepageAnchors.home}`}
          className="flex min-h-11 min-w-0 items-center gap-3 font-mono text-[calc(1rem+5px)] font-semibold text-accent"
          aria-label={`${siteContent.brand.name} - inicio`}
        >
          <span className="relative h-11 w-20 shrink-0 overflow-hidden rounded-md bg-black">
            <Image
              src="/brand/logo.png"
              alt=""
              fill
              priority
              sizes="80px"
              className="object-cover"
            />
          </span>
          <span className="truncate lg:hidden xl:inline">{siteContent.brand.name}</span>
        </a>
        <nav aria-label="Navegacao principal" className="hidden items-center gap-1 text-sm lg:flex">
          {siteNavigation.map((item) => (
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
            href={siteCtas.headerStart.href}
            variant="contrast"
            className="min-h-10 px-4 py-2"
          >
            {siteCtas.headerStart.label}
          </Button>
        </div>
        <MobileNavigation items={siteNavigation} cta={siteCtas.headerStart} />
      </Container>
    </header>
  );
}
