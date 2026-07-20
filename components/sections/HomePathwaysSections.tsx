import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homepageSummaries } from "@/content/routes";
import { siteContent } from "@/content/payload-journey-lab";

export function HomeAppliedInvestigationSection() {
  const content = homepageSummaries.applied;

  return (
    <Section id="investigacao-aplicada" variant="blush" className="border-b border-line">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <SectionHeader
          eyebrow={content.eyebrow}
          eyebrowTone="readable"
          title={content.title}
          description={content.description}
        />
        <Button href={content.href} variant="contrast" className="w-fit">
          {content.cta}
          <ArrowRight aria-hidden="true" className="size-4" />
        </Button>
      </div>
    </Section>
  );
}

export function HomeEcosystemSection() {
  const content = homepageSummaries.ecosystem;

  return (
    <Section id="ecosystem-overview" className="border-b border-line">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div>
          <SectionHeader
            eyebrow={content.eyebrow}
            eyebrowTone="readable"
            title={content.title}
            description={content.description}
          />
          <Button href={content.href} variant="secondary" className="mt-7 w-fit">
            {content.cta}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Button>
        </div>
        <ol className="grid gap-3 sm:grid-cols-2">
          {siteContent.ecosystem.pillars.map((pillar, index) => (
            <li key={pillar.id}>
              <Card className="h-full p-5">
                <span className="font-mono text-sm text-accent-readable">0{index + 1}</span>
                <h3 className="mt-3 text-lg font-semibold text-ink">{pillar.title}</h3>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

export function HomeLearningSection() {
  const content = homepageSummaries.learning;

  return (
    <Section id="learning-overview" variant="soft" className="border-b border-line">
      <SectionHeader
        eyebrow={content.eyebrow}
        eyebrowTone="readable"
        title={content.title}
        description={content.description}
      />
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        {content.items.map((item, index) => (
          <Button
            key={item.href}
            href={item.href}
            variant={index === 0 ? "contrast" : "secondary"}
          >
            {item.cta}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Button>
        ))}
      </div>
    </Section>
  );
}

export function HomeLabSection() {
  const content = homepageSummaries.lab;

  return (
    <Section id="lab-overview" className="border-b border-line">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <SectionHeader
          eyebrow={content.eyebrow}
          eyebrowTone="readable"
          title={content.title}
          description={content.description}
        />
        <Button href={content.href} variant="secondary" className="w-fit">
          {content.cta}
          <ArrowRight aria-hidden="true" className="size-4" />
        </Button>
      </div>
    </Section>
  );
}
