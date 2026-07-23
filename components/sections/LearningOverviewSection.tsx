import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { HighlightPanel } from "@/components/ui/HighlightPanel";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { learningPresentation } from "@/content/payload-journey-lab";

export function LearningHeroSection() {
  const { hero } = learningPresentation;

  return (
    <Section id="aprender" className="border-b border-line py-12 sm:py-16 lg:py-20">
      <div className="max-w-5xl">
        <TechnicalLabel tone="readable">{hero.eyebrow}</TechnicalLabel>
        <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
          {hero.title}
        </h1>
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-text-muted sm:text-xl sm:leading-9">
          {hero.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={hero.primaryCta.href} variant="contrast">
            {hero.primaryCta.label}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Button>
          <Button href={hero.secondaryCta.href} variant="secondary">
            {hero.secondaryCta.label}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Button>
        </div>
      </div>
    </Section>
  );
}

export function LearningFlowSection() {
  const { flow } = learningPresentation;

  return (
    <Section id="aprender-por-flow" variant="soft" className="border-b border-line">
      <SectionHeader
        eyebrow={flow.eyebrow}
        eyebrowTone="readable"
        title={flow.title}
        description={flow.description[0]}
      />
      <p className="mt-5 max-w-3xl text-base leading-7 text-text-muted">{flow.description[1]}</p>

      <ol
        className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7"
        aria-label="Cadeia investigativa de uma operação"
      >
        {flow.chain.map((item, index) => (
          <li key={item} className="relative">
            <Card className="flex h-full min-h-28 flex-col justify-between p-4">
              <span className="font-mono text-technical-sm font-semibold text-accent-readable">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mt-5 text-sm font-semibold leading-5 text-ink">{item}</span>
            </Card>
          </li>
        ))}
      </ol>

      <HighlightPanel className="mt-6 max-w-5xl">
        <p className="text-base font-semibold leading-7">{flow.questions}</p>
      </HighlightPanel>
    </Section>
  );
}

export function LearningEffortFoundationsSection() {
  const { effort, foundations } = learningPresentation;

  return (
    <>
      <Section id="esforco" className="border-b border-line">
        <SectionHeader
          eyebrow={effort.eyebrow}
          eyebrowTone="readable"
          title={effort.title}
          description={effort.description[0]}
        />
        <p className="mt-5 max-w-3xl text-base leading-7 text-text-muted">{effort.description[1]}</p>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Card>
            <h3 className="text-xl font-bold text-ink">O trabalho necessário</h3>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-text-muted sm:grid-cols-2">
              {effort.requirements.map((requirement) => (
                <li key={requirement} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent-readable"
                  />
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="text-xl font-bold text-ink">O que o método organiza</h3>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-text-muted">
              {effort.contributions.map((contribution) => (
                <li key={contribution} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent-cta"
                  />
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
        <HighlightPanel variant="dark" className="mt-6 max-w-5xl">
          <p className="text-lg font-semibold leading-8">{effort.principle}</p>
        </HighlightPanel>
      </Section>

      <Section id="fundamentos" variant="soft" className="border-b border-line">
        <SectionHeader
          eyebrow={foundations.eyebrow}
          eyebrowTone="readable"
          title={foundations.title}
          description={foundations.description[0]}
        />
        <p className="mt-5 max-w-4xl text-base leading-7 text-text-muted">
          {foundations.description[1]}
        </p>
        <ul className="mt-8 flex max-w-5xl flex-wrap gap-2" aria-label="Conhecimentos complementares">
          {foundations.items.map((item) => (
            <li
              key={item}
              className="rounded-full border border-border-default bg-surface-card px-4 py-2 text-sm font-medium text-text-primary"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
