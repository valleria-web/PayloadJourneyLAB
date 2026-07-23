import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { siteContent } from "@/content/payload-journey-lab";

function Paragraphs({ items, className = "" }: { items: readonly string[]; className?: string }) {
  return (
    <div className={`grid gap-4 text-base leading-7 text-graphite ${className}`}>
      {items.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </div>
  );
}

export function LabHeroSection() {
  const content = siteContent.lab.hero;

  return (
    <Section id="lab" className="relative overflow-hidden border-b border-line py-14 sm:py-18 lg:py-24" containerClassName="relative">
      <div id="sobre" className="scroll-mt-24" />
      <div aria-hidden="true" className="absolute -right-24 top-0 size-80 rounded-full bg-blush/45 blur-3xl sm:size-[30rem]" />
      <div className="relative min-w-0 max-w-5xl">
        <TechnicalLabel tone="readable">{content.eyebrow}</TechnicalLabel>
        <h1 className="mt-5 max-w-5xl break-words text-4xl font-bold leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
          {content.title}
        </h1>
        <div className="mt-7 h-1 w-16 rounded-full bg-accent-cta" aria-hidden="true" />
        <Paragraphs items={content.description} className="mt-7 max-w-4xl sm:text-lg sm:leading-8" />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={content.primaryCta.href} variant="contrast" className="w-full sm:w-fit">
            {content.primaryCta.label}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Button>
          <Button href={content.secondaryCta.href} variant="secondary" className="w-full sm:w-fit">
            {content.secondaryCta.label}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Button>
        </div>
      </div>
    </Section>
  );
}

export function LabMissionOriginSection() {
  const { mission, origin } = siteContent.lab;

  return (
    <>
      <Section id="mission" variant="soft" className="border-b border-line">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader eyebrow={mission.eyebrow} eyebrowTone="readable" title={mission.title} />
          <div>
            <Paragraphs items={mission.thesis} className="font-semibold text-ink" />
            <Paragraphs items={mission.description} className="mt-6" />
            <p id="principle" className="mt-7 scroll-mt-24 border-l-2 border-accent-readable pl-5 text-base font-semibold leading-7 text-ink">
              {mission.principle}
            </p>
          </div>
        </div>
      </Section>

      <Section id="origin" className="border-b border-line">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader eyebrow={origin.eyebrow} eyebrowTone="readable" title={origin.title} />
          <Paragraphs items={origin.description} />
        </div>
      </Section>
    </>
  );
}

export function LabMethodsBridgeSection() {
  const content = siteContent.lab.methods;

  return (
    <Section id="how-the-lab-works" variant="blush" className="border-b border-line">
      <SectionHeader
        eyebrow={content.eyebrow}
        eyebrowTone="readable"
        title={content.title}
        description={content.description}
      />
      <ol className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {content.items.map((item, index) => (
          <li key={item.title}>
            <Card className="h-full p-5">
              <span className="font-mono text-sm font-semibold text-accent-readable">0{index + 1}</span>
              <h3 className="mt-3 text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-text-muted">{item.question}</p>
            </Card>
          </li>
        ))}
      </ol>
      <Button href={content.cta.href} variant="contrast" className="mt-8 w-full sm:w-fit">
        {content.cta.label}
        <ArrowRight aria-hidden="true" className="size-4" />
      </Button>
    </Section>
  );
}

export function LabHumanFounderSection() {
  const { humanAi, founder } = siteContent.lab;

  return (
    <>
      <Section id="human-ai" className="border-b border-line">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader eyebrow={humanAi.eyebrow} eyebrowTone="readable" title={humanAi.title} />
          <div>
            <Paragraphs items={humanAi.description} />
            <p className="mt-7 rounded-foundation-card border border-accent-readable/25 bg-accent-muted/60 p-6 text-base font-semibold leading-7 text-ink">
              {humanAi.principle}
            </p>
          </div>
        </div>
      </Section>

      <Section id="founder" variant="soft" className="border-b border-line">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <SectionHeader eyebrow={founder.eyebrow} eyebrowTone="readable" title={founder.title} />
            <p className="mt-6 text-xl font-bold text-ink">{founder.name}</p>
          </div>
          <Paragraphs items={founder.biography} />
        </div>
      </Section>
    </>
  );
}
