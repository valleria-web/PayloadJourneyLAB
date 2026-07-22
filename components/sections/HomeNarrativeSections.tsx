import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homepageSummaries } from "@/content/routes";

export function HomeWhyNowSection() {
  const content = homepageSummaries.whyNow;

  return (
    <Section id="why-now" variant="soft" className="border-b border-line">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">
        <div>
          <SectionHeader
            eyebrow={content.eyebrow}
            eyebrowTone="readable"
            title={content.title}
          />
          <div className="mt-6 grid max-w-3xl gap-4 text-base leading-7 text-graphite">
            {content.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-7 max-w-3xl border-l-2 border-accent-readable pl-5 text-lg font-semibold leading-8 text-ink">
            {content.principle}
          </p>
        </div>
        <ul className="grid gap-3" aria-label="Tensões que tornam a investigação necessária">
          {content.signals.map((signal, index) => (
            <li key={signal}>
              <Card className="flex items-center gap-4 p-5">
                <span className="font-mono text-sm font-semibold text-accent-readable">
                  0{index + 1}
                </span>
                <span className="font-semibold text-ink">{signal}</span>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function HomeProposalSection() {
  const content = homepageSummaries.proposal;

  return (
    <Section id="proposal" className="border-b border-line">
      <SectionHeader
        eyebrow={content.eyebrow}
        eyebrowTone="readable"
        title={content.title}
        description={content.description}
      />
      <ol className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
        {content.sequence.map((step, index) => (
          <li key={step}>
            <Card className="h-full p-4">
              <span className="font-mono text-sm text-accent-readable">0{index + 1}</span>
              <p className="mt-3 font-semibold text-ink">{step}</p>
            </Card>
          </li>
        ))}
      </ol>
      <p className="mt-8 max-w-4xl rounded-foundation-card border border-accent-readable/25 bg-accent-muted/60 p-6 text-base font-semibold leading-7 text-ink">
        {content.note}
      </p>
    </Section>
  );
}

export function HomeProgressionSection() {
  const content = homepageSummaries.progression;

  return (
    <Section id="pedagogical-progression" variant="soft" className="border-b border-line">
      <SectionHeader
        eyebrow={content.eyebrow}
        eyebrowTone="readable"
        title={content.title}
        description={content.description}
      />
      <ol className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {content.levels.map((level) => (
          <li key={level.number}>
            <Card className="h-full">
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-sm font-semibold text-accent-readable">
                  {level.number}
                </span>
                {level.future ? <Badge variant="neutral">Horizonte futuro</Badge> : null}
              </div>
              <h3 className="mt-4 text-xl font-bold text-ink">{level.title}</h3>
              <p className="mt-3 text-sm leading-6 text-text-muted">{level.description}</p>
            </Card>
          </li>
        ))}
      </ol>
      <Button href={content.href} variant="contrast" className="mt-8 w-full sm:w-fit">
        {content.cta}
        <ArrowRight aria-hidden="true" className="size-4" />
      </Button>
    </Section>
  );
}
