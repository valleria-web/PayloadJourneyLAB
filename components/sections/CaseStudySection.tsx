import { BookOpen, Search } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { HighlightPanel } from "@/components/ui/HighlightPanel";
import { Section } from "@/components/ui/Section";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { horaCityCase } from "@/content/hora-city";
import { homepageAnchors } from "@/content/site";

function InvestigationStatusCard() {
  const technicalRows = horaCityCase.technicalRows;

  return (
    <Card className="border-line/70 bg-case-panel/90 p-6 sm:p-7 lg:p-8">
      <div className="flex items-center justify-between gap-3">
        <TechnicalLabel tone="terminal" className="text-[calc(0.68rem+10px)]">
          {horaCityCase.technicalCopy.commandPrefix} {horaCityCase.project}
        </TechnicalLabel>
        <span className="font-mono text-[calc(0.62rem+5px)] uppercase tracking-[0.16em] text-text-muted">
          {horaCityCase.technicalCopy.caseFileLabel}
        </span>
      </div>

      <div className="mt-6 rounded-2xl border border-ink/10 bg-ink p-5 font-mono text-[calc(0.78rem+5px)] leading-6 text-white shadow-foundation-investigation">
        <p>
          <span className="text-[calc(0.78rem+10px)] text-terminal">
            {horaCityCase.technicalCopy.commandPrefix}
          </span>{" "}
          case: {horaCityCase.caseId}
        </p>
        <p className="mt-1 text-white/70">
          {horaCityCase.technicalCopy.regionLabel}: {horaCityCase.region}
        </p>
        <p className="mt-1 text-white/70">
          {horaCityCase.technicalCopy.statusLabel}: {horaCityCase.technicalStatus.activeStatus}
        </p>
        <p className="mt-1 text-white/70">
          {horaCityCase.technicalCopy.payloadLabel}: {horaCityCase.payload}
        </p>
        <p className="mt-1 text-white/70">
          {horaCityCase.technicalCopy.validatedFlowLabel}: {horaCityCase.technicalStatus.validatedFlow}
        </p>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_1fr]">
        <div className="rounded-2xl border border-line/70 bg-white/75 p-4">
          <TechnicalLabel tone="terminal" className="text-[calc(0.6rem+10px)]">
            {horaCityCase.technicalCopy.validatedFlowHeading}
          </TechnicalLabel>
          <p className="mt-2 text-sm font-semibold text-ink">
            {horaCityCase.technicalStatus.validatedFlow}
          </p>
        </div>
        <div className="rounded-2xl border border-line/70 bg-white/75 p-4">
          <TechnicalLabel tone="terminal" className="text-[calc(0.6rem+10px)]">
            {horaCityCase.technicalCopy.authorityHeading}
          </TechnicalLabel>
          <p className="mt-2 text-sm font-semibold text-ink">
            {horaCityCase.technicalStatus.authority}
          </p>
        </div>
      </div>

      <div className="mt-5 divide-y divide-line/70 rounded-2xl border border-line/70 bg-white/70">
        {technicalRows.map(({ label, value }) => (
          <div key={label} className="flex items-center justify-between gap-4 px-4 py-3">
            <span className="font-mono text-[calc(0.7rem+5px)] uppercase tracking-[0.1em] text-graphite">
              {label}
            </span>
            <span className="text-right text-sm font-medium text-ink">{value}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full border border-line/70 bg-white/75 px-3 py-1.5 font-mono text-[calc(0.66rem+5px)] uppercase tracking-[0.12em] text-graphite">
          {horaCityCase.codebase.renderedScale}
        </span>
        <span className="rounded-full border border-line/70 bg-white/75 px-3 py-1.5 font-mono text-[calc(0.66rem+5px)] uppercase tracking-[0.12em] text-graphite">
          {horaCityCase.anomaly}
        </span>
      </div>
    </Card>
  );
}

export function CaseStudySection() {
  return (
    <Section
      id={homepageAnchors.caseStudy}
      className="relative overflow-hidden border-y border-line bg-case-section/70"
      containerClassName="relative"
    >
      <div className="case-study-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <HighlightPanel
          variant="soft-blush"
          className="border-line/70 bg-case-card/90 p-6 sm:p-8 lg:p-8"
        >
          <SectionHeader
            eyebrow={horaCityCase.editorialVariants.rendered.subtitle}
            title={horaCityCase.editorialVariants.rendered.title}
            className="max-w-none"
          />
          <p className="mt-5 max-w-2xl text-base leading-7 text-graphite sm:text-[1.02rem]">
            {horaCityCase.editorialVariants.rendered.description}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-graphite sm:text-[1.02rem]">
            {horaCityCase.editorialVariants.rendered.investigation}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button
              href={horaCityCase.renderedActions[0].href}
              variant="secondary"
              className="sm:w-fit border-accent-cta/25 bg-white/80 text-pink-dark shadow-none hover:border-accent-cta/40 hover:bg-blush/70 hover:text-pink-dark"
            >
              <Search aria-hidden="true" className="size-4" />
              {horaCityCase.renderedActions[0].label}
            </Button>
            <Button
              href={horaCityCase.renderedActions[1].href}
              variant="ghost"
              className="sm:w-fit text-ink/80 hover:bg-white/70"
            >
              <BookOpen aria-hidden="true" className="size-4" />
              {horaCityCase.renderedActions[1].label}
            </Button>
          </div>

          <p className="mt-3 text-xs leading-6 text-text-muted/80">
            {horaCityCase.renderedNotice}
          </p>

          <div className="mt-8 border-t border-line/70 pt-5">
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {horaCityCase.renderedMicroFacts.map((fact) => (
                <div key={fact.label} className="flex items-baseline gap-2">
                  <TechnicalLabel tone="terminal" className="text-[calc(0.58rem+10px)]">
                    {fact.label}
                  </TechnicalLabel>
                  <span className="text-sm font-medium text-ink">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </HighlightPanel>

        <InvestigationStatusCard />
      </div>
    </Section>
  );
}
