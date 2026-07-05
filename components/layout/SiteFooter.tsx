import { Container } from "@/components/ui/Container";
import { siteContent } from "@/content/payload-journey-lab";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-subtle py-10">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="font-semibold">{siteContent.brand.name}</p>
            <p className="mt-2 text-sm text-graphite">{siteContent.brand.tagline}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-graphite">
                Links
              </p>
              <div className="mt-3 grid gap-2 text-sm text-graphite">
                {siteContent.nav.slice(1, 6).map((item) => (
                  <a key={item.href} href={item.href} className="hover:text-ink">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-graphite">
                Redes
              </p>
              <div className="mt-3 grid gap-2 text-sm text-graphite">
                {siteContent.contact.links.map((link) => (
                  link.href === "#" ? (
                    <span key={link.label} aria-disabled="true">
                      {link.label} em preparação
                    </span>
                  ) : (
                    <a key={link.label} href={link.href} className="hover:text-ink">
                      {link.label}
                    </a>
                  )
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-graphite">
                Legal
              </p>
              <div className="mt-3 grid gap-2 text-sm text-graphite">
                {siteContent.footer.policies.map((item) => (
                  <span key={item} aria-disabled="true">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-line pt-5 text-xs text-graphite">
          © {year} {siteContent.brand.name}. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}
