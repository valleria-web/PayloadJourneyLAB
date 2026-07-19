import { ArrowDownRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { TerminalLine } from "@/components/ui/TerminalLine";
import { homepageEntry } from "@/content/payload-journey-lab";
import { homepageAnchors } from "@/content/site";

export function HeroSection() {
  const { hero } = homepageEntry;

  return (
    <Section
      id={homepageAnchors.home}
      className="relative overflow-hidden border-b border-line py-16 sm:py-20 lg:py-24"
      containerClassName="relative"
    >
      <div
        aria-hidden="true"
        className="absolute -right-24 top-0 size-80 rounded-full bg-blush/40 blur-3xl sm:size-[28rem]"
      />
      <div className="relative max-w-5xl">
        <TechnicalLabel tone="readable" className="mb-5">
          {hero.eyebrow}
        </TechnicalLabel>
        <h1 className="max-w-4xl text-5xl font-bold leading-[0.98] tracking-normal text-ink sm:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
        <div className="mt-6 h-1 w-16 rounded-full bg-accent-cta" aria-hidden="true" />
        <p className="mt-7 max-w-3xl text-xl font-semibold leading-8 text-ink sm:text-2xl sm:leading-9">
            {hero.lead}
          </p>
        <p className="mt-5 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
            {hero.description}
          </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={hero.primaryCta.href} variant="contrast">
              {hero.primaryCta.label}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Button>
          <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
              <ArrowDownRight aria-hidden="true" className="size-4" />
            </Button>
        </div>
        <TerminalLine className="mt-6">{hero.signature}</TerminalLine>
      </div>
    </Section>
  );
}
