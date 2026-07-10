import { Container } from "@/components/ui/Container";
import { siteContent } from "@/content/payload-journey-lab";

const footerLinks = [
  { label: "Udemy", href: siteContent.hero.primaryAction.href, external: true },
  { label: "LabLog", href: "#lablog" },
  { label: "LinkedIn", href: "#contato" },
  { label: "GitHub", href: "#contato" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink py-10 text-white sm:py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="font-mono font-semibold text-terminal">{siteContent.brand.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
              Payload Journey LAB - formacao, pesquisa e investigacao aplicada em sistemas
              complexos.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-terminal">
                Navegacao
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
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-terminal">
                Links
              </p>
              <div className="mt-3 grid gap-2 text-sm text-white/70">
                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="w-fit py-1 hover:text-terminal"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-terminal">
                Legal
              </p>
              <div className="mt-3 grid gap-2 text-sm text-white/60">
                {siteContent.footer.policies.map((item) => (
                  <span key={item} aria-disabled="true" className="py-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-5 text-xs text-white/55">
          © {year} {siteContent.brand.name}. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}
