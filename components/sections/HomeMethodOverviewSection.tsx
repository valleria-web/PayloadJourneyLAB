import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homepageSummaries } from "@/content/routes";

export function HomeMethodOverviewSection() {
  const content = homepageSummaries.method;

  return (
    <Section id="method-overview" className="border-b border-line">
      <SectionHeader
        eyebrow={content.eyebrow}
        eyebrowTone="readable"
        title={content.title}
        description={content.description}
      />
      <ol className="mt-9 grid gap-5 lg:grid-cols-3">
        {content.items.map((item, index) => (
          <li key={item.href}>
            <Card className="flex h-full flex-col" hover="technical">
              <div className="flex items-start justify-between gap-4">
                <p className="font-mono text-sm font-semibold uppercase tracking-technical text-accent-readable">
                  {item.label}
                </p>
                <span className="font-mono text-sm text-accent-readable">0{index + 1}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold leading-7 text-ink">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-text-muted">{item.description}</p>
              <Button href={item.href} variant="ghost" className="mt-6 w-fit px-0 lg:mt-auto lg:pt-6">
                {item.cta}
                <ArrowRight aria-hidden="true" className="size-4" />
              </Button>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}
