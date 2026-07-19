import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { siteContent } from "@/content/payload-journey-lab";
import { footerContent } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink py-10 text-white sm:py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1.2fr_2fr]">
          <div>
            <Image
              src="/brand/logo.png"
              alt={siteContent.brand.name}
              width={224}
              height={96}
              sizes="224px"
              className="h-24 w-56 rounded-md object-cover"
            />
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
              {footerContent.description}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="font-mono text-[calc(0.75rem+10px)] font-semibold uppercase tracking-[0.08em] text-terminal">
                {footerContent.headings.navigation}
              </p>
              <div className="mt-3 grid gap-2 text-sm text-white/70">
                {siteContent.nav.slice(1, 6).map((item) => (
                  <a key={item.href} href={item.href} className="w-fit py-1 hover:text-white">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-[calc(0.75rem+10px)] font-semibold uppercase tracking-[0.08em] text-terminal">
                {footerContent.headings.links}
              </p>
              <div className="mt-3 grid gap-2 text-sm text-white/70">
                {footerContent.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="w-fit py-1 text-[calc(0.875rem+5px)] hover:text-terminal"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-[calc(0.75rem+10px)] font-semibold uppercase tracking-[0.08em] text-terminal">
                {footerContent.headings.legal}
              </p>
              <div className="mt-3 grid gap-2 text-sm text-white/60">
                {footerContent.policies.map((item) => (
                  <span key={item} aria-disabled="true" className="py-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-5 text-xs text-white/55">
          © {year} {siteContent.brand.name}. {footerContent.copyrightSuffix}
        </p>
      </Container>
    </footer>
  );
}
