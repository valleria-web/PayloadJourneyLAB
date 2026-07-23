import Image from "next/image";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteContent } from "@/content/payload-journey-lab";
import { getNavigationArea, siteCtas, siteNavigation } from "@/content/site";

type SiteHeaderProps = {
  currentPath: string;
};

export function SiteHeader({ currentPath }: SiteHeaderProps) {
  const activeArea = getNavigationArea(currentPath);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <Container className="relative flex h-16 items-center justify-between gap-5">
        <a
          href="/"
          className="flex min-h-11 min-w-0 flex-1 items-center gap-3 overflow-hidden font-mono text-[calc(1rem+7px)] font-semibold text-accent lg:flex-none"
          aria-label={`${siteContent.brand.name} - início`}
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
          <span className="min-w-0 truncate lg:hidden xl:inline">{siteContent.brand.name}</span>
        </a>
        <nav aria-label="Navegação principal" className="hidden items-center gap-1 text-sm lg:flex">
          {siteNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={item.area === activeArea ? "page" : undefined}
              className={`rounded-md border-b-2 px-3 py-2 font-medium transition-colors duration-200 ${
                item.area === activeArea
                  ? "border-accent-cta bg-accent-muted text-ink"
                  : "border-transparent text-graphite hover:bg-accent-muted hover:text-ink"
              }`}
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
        <MobileNavigation
          items={siteNavigation}
          cta={siteCtas.headerStart}
          activeArea={activeArea}
        />
      </Container>
    </header>
  );
}
