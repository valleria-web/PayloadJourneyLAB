import { SectionHeader } from "@/components/sections/SectionHeader";
import { Card } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { Section } from "@/components/ui/Section";
import { siteContent } from "@/content/payload-journey-lab";

export function LabOverviewSection() {
  return (
    <Section id="lab">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader title={siteContent.lab.title} description={siteContent.lab.intro} />
          <p className="mt-5 max-w-3xl text-base leading-7 text-graphite">
            {siteContent.lab.complement}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {siteContent.lab.pillars.map((pillar) => (
            <Card key={pillar.title} className="min-h-48 transition-colors hover:border-accent">
              <IconWrapper icon={pillar.icon} />
              <h3 className="mt-6 text-xl font-semibold">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-6 text-graphite">{pillar.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
