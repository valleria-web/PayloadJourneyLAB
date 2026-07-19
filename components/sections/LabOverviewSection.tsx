import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { Section } from "@/components/ui/Section";
import { siteContent } from "@/content/payload-journey-lab";
import { homepageAnchors } from "@/content/site";

export function LabOverviewSection() {
  return (
    <Section id={homepageAnchors.lab} className="bg-paper">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader
            eyebrow={siteContent.lab.eyebrow}
            title={siteContent.lab.title}
            description={siteContent.lab.intro}
          />
          <p className="mt-5 max-w-3xl text-base leading-7 text-graphite">
            {siteContent.lab.complement}
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 font-mono text-[calc(0.75rem+5px)] text-accent">
            <span>{">_"}</span>
            {siteContent.lab.terminalLine}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {siteContent.lab.pillars.map((pillar, index) => (
            <Card
              key={pillar.title}
              className="group min-h-48 hover:-translate-y-0.5 hover:border-accent"
            >
              <div className="flex items-start justify-between gap-4">
                <IconWrapper icon={pillar.icon} />
                <span className="font-mono text-[calc(0.75rem+5px)] text-accent">0{index + 1}</span>
              </div>
              <h3 className="mt-6 text-xl font-bold">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-6 text-graphite">{pillar.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
