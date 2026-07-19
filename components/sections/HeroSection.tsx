import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HighlightPanel } from "@/components/ui/HighlightPanel";
import { Section } from "@/components/ui/Section";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { TerminalChip } from "@/components/ui/TerminalChip";
import { TerminalLine } from "@/components/ui/TerminalLine";
import {
  heroInvestigationPanel,
  investigationCycle,
  investigationCycleSummary,
} from "@/content/methods";
import { siteContent } from "@/content/payload-journey-lab";
import { homepageAnchors } from "@/content/site";

function PayloadFlowPanel() {
  return (
    <HighlightPanel
      variant="soft-blush"
      className="relative overflow-hidden border-accent-cta/20 bg-surface-page/80 p-5 sm:p-6 lg:p-7"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-6 top-24 h-px bg-accent-technical/20"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-5 right-5 h-12 w-px bg-accent-cta/20"
      />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <TerminalChip>{heroInvestigationPanel.state}</TerminalChip>
          <p className="mt-4 font-mono text-[calc(0.75rem+5px)] leading-6 text-text-muted">
            {heroInvestigationPanel.command}
          </p>
        </div>
      </div>

      <div className="relative mt-10 grid gap-3">
        {investigationCycle.map((item, index) => (
          <div
            key={item.action}
            className="grid grid-cols-[auto_1fr] items-center gap-4 rounded-xl border border-border-default/80 bg-white/70 px-4 py-3 shadow-[0_10px_30px_rgba(16,16,16,0.03)]"
          >
            <span className="grid size-10 place-items-center rounded-lg border border-accent-technical/25 bg-accent-muted font-mono text-[calc(0.75rem+5px)] font-semibold text-accent-technical">
              0{index + 1}
            </span>
            <div className="min-w-0">
              <p className="font-mono text-[calc(0.875rem+5px)] font-semibold uppercase tracking-[0.08em] text-ink">
                {item.action}
              </p>
              <p className="mt-1 font-mono text-[calc(0.7rem+5px)] uppercase tracking-[0.08em] text-text-muted">
                {item.target}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {heroInvestigationPanel.chips.map((chip) => (
          <TerminalChip key={chip.label} tone={chip.tone}>
            {chip.label}
          </TerminalChip>
        ))}
      </div>
    </HighlightPanel>
  );
}

export function HeroSection() {
  const title = siteContent.hero.title.replace(/\s+/g, " ");

  return (
    <Section
      id={homepageAnchors.home}
      className="overflow-hidden border-b border-line py-20 sm:py-24 lg:py-28"
      containerClassName="relative"
    >
      <div
        aria-hidden="true"
        className="absolute left-8 top-8 hidden h-16 w-px bg-accent-technical/25 lg:block"
      />
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)] lg:gap-14">
        <div className="max-w-4xl">
          <TechnicalLabel className="mb-5">{siteContent.hero.eyebrow}</TechnicalLabel>
          <h1 className="max-w-4xl text-5xl font-bold leading-[0.94] tracking-normal text-ink sm:text-6xl md:text-7xl lg:text-[5.6rem]">
            {title}
          </h1>
          <div className="mt-5 h-1 w-16 rounded-full bg-accent-cta" aria-hidden="true" />
          <p className="mt-6 text-xl font-semibold leading-8 text-ink sm:text-2xl">
            {siteContent.hero.subtitle}
          </p>
          <p className="mt-7 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
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
          <TerminalLine className="mt-6">
            {investigationCycleSummary}
          </TerminalLine>
        </div>

        <PayloadFlowPanel />
      </div>
    </Section>
  );
}
