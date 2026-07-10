import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteContent } from "@/content/payload-journey-lab";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="scroll-mt-24 overflow-hidden border-b border-line bg-paper py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="max-w-4xl">
          <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-accent">
            {siteContent.hero.eyebrow}
          </p>
          <h1 className="whitespace-pre-line text-5xl font-bold leading-[0.98] tracking-normal text-ink sm:text-7xl lg:text-8xl">
            {siteContent.hero.title}
          </h1>
          <p className="mt-5 text-xl font-semibold text-ink sm:text-2xl">
            {siteContent.hero.subtitle}
          </p>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-graphite">
            {siteContent.hero.intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={siteContent.hero.primaryAction.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteContent.hero.primaryAction.label}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Button>
            <Button
              href={siteContent.hero.secondaryAction.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              <Play aria-hidden="true" className="size-4" />
              {siteContent.hero.secondaryAction.label}
            </Button>
          </div>
          <p className="mt-5 max-w-xl font-mono text-sm leading-6 text-accent">
            <span>{">_"}</span> Congelar. Mapear. Detectar. Restaurar.
          </p>
        </div>
      </Container>
    </section>
  );
}
