import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { footerContent } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink py-10 text-white sm:py-12">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_2.4fr]">
          <div>
            <Image
              src="/brand/logo.png"
              alt={footerContent.identity.name}
              width={224}
              height={96}
              sizes="224px"
              className="h-24 w-56 rounded-md object-cover"
            />
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
              {footerContent.identity.description}
            </p>
            <p className="mt-3 font-mono text-sm text-terminal">
              {footerContent.identity.tagline}
            </p>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-5">
            {footerContent.groups.map((group) => (
            <div key={group.title}>
              <p className="font-mono text-[calc(0.75rem+12px)] font-semibold uppercase tracking-[0.08em] text-terminal">
                {group.title}
              </p>
              <div className="mt-3 grid gap-2 text-sm text-white/70">
                {group.links.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target={"external" in item && item.external ? "_blank" : undefined}
                    rel={"external" in item && item.external ? "noopener noreferrer" : undefined}
                    className="w-fit py-1 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terminal"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            ))}
          </div>
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-6 text-white/60">
          {footerContent.legalNotice}
        </p>
        <p className="mt-10 border-t border-white/10 pt-5 text-xs text-white/55">
          © {year} {footerContent.identity.name}. {footerContent.copyrightSuffix}
        </p>
      </Container>
    </footer>
  );
}
