import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homepageSummaries } from "@/content/routes";

export function HomeLabConstructionSection() {
  const content = homepageSummaries.audienceInvestigation;

  return (
    <Section id="audience-investigation" variant="blush" className="border-b border-line">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
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
          <p className="mt-7 max-w-3xl border-l-2 border-accent-readable pl-5 text-base font-semibold leading-7 text-ink">
            {content.closing}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={content.primaryCta.href} variant="contrast">
              {content.primaryCta.label}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Button>
            <Button href={content.secondaryCta.href} variant="secondary">
              {content.secondaryCta.label}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Button>
          </div>
        </div>

        <ul className="grid gap-3" aria-label="Critérios do horizonte inicial">
          {content.indicators.map((indicator, index) => (
            <li
              key={indicator}
              className="flex items-center gap-4 rounded-foundation-card border border-line bg-white/75 p-5 shadow-foundation-card"
            >
              <span className="font-mono text-technical-sm font-semibold text-accent-readable">
                0{index + 1}
              </span>
              <span className="font-semibold text-ink">{indicator}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
