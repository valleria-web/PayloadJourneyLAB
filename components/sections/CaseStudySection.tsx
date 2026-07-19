import { ArrowDownLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { HighlightPanel } from "@/components/ui/HighlightPanel";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { horaCityCase } from "@/content/hora-city";
import { homepageAnchors } from "@/content/site";

export function CaseStudySection() {
  const narrative = horaCityCase.publicNarrative;

  return (
    <Section
      id={homepageAnchors.caseStudy}
      variant="blush"
      className="relative overflow-hidden border-b border-line"
      containerClassName="relative"
    >
      <div className="case-study-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative">
        <SectionHeader
          eyebrow={narrative.eyebrow}
          eyebrowTone="readable"
          title={narrative.title}
          description={narrative.introduction}
        />
        <p className="mt-5 font-mono text-technical font-semibold uppercase tracking-technical text-accent-readable">
          {narrative.transition}
        </p>

        <HighlightPanel
          variant="dark"
          className="mt-8 !bg-ink p-6 sm:p-8"
        >
          <p className="max-w-4xl text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
            {narrative.mainMessage}
          </p>
        </HighlightPanel>

        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {narrative.sections.map((section) => (
            <li key={section.id} id={`case-${section.id}`} className="scroll-mt-24">
              <Card className="h-full border-line/70 bg-case-card/90">
                <TechnicalLabel tone="readable">{section.number}</TechnicalLabel>
                <h3 className="mt-4 text-xl font-bold text-ink">{section.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-muted sm:text-base sm:leading-7">
                  {section.description}
                </p>
              </Card>
            </li>
          ))}
        </ol>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <Card className="border-line/70 bg-case-panel/90">
            <TechnicalLabel tone="terminal">Fatos técnicos confirmados</TechnicalLabel>
            <dl className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {narrative.technicalFacts.map((fact) => (
                <div key={fact.label} className="border-t border-line/70 pt-3">
                  <dt className="font-mono text-technical-sm font-semibold uppercase tracking-technical text-text-muted">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 text-sm font-semibold leading-6 text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Card>

          <div className="flex flex-col gap-3 sm:flex-row lg:w-64 lg:flex-col">
            <Button href={narrative.primaryCta.href} variant="contrast" className="w-full">
              <BookOpen aria-hidden="true" className="size-4" />
              {narrative.primaryCta.label}
            </Button>
            <Button href={narrative.secondaryCta.href} variant="secondary" className="w-full">
              {narrative.secondaryCta.label}
              <ArrowDownLeft aria-hidden="true" className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
