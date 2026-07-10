import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteContent } from "@/content/payload-journey-lab";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="scroll-mt-24 border-b border-line bg-[linear-gradient(180deg,#ffffff_0%,#f7f7f8_100%)] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-graphite">
            {siteContent.hero.eyebrow}
          </p>
          <h1 className="whitespace-pre-line text-5xl font-semibold leading-none tracking-normal sm:text-6xl lg:text-7xl">
            {siteContent.hero.title}
          </h1>
          <p className="mt-5 text-xl font-semibold text-ink">{siteContent.hero.subtitle}</p>
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
            <Button href={siteContent.hero.secondaryAction.href} variant="secondary">
              {siteContent.hero.secondaryAction.label}
            </Button>
          </div>
          {siteContent.hero.primaryAction.status ? (
            <p className="mt-3 max-w-xl text-sm leading-6 text-graphite">
              {siteContent.hero.primaryAction.status}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
