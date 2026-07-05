import { FlowDiagram } from "@/components/diagrams/FlowDiagram";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { siteContent } from "@/content/payload-journey-lab";

export function ConceptEcosystemSection() {
  return (
    <Section id="ecossistema">
      <SectionHeader title={siteContent.ecosystem.title} />
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {siteContent.ecosystem.items.map((concept) => (
          <Card key={concept.title}>
            <h3 className="text-lg font-semibold">{concept.title}</h3>
            <p className="mt-4 text-sm leading-6 text-graphite">{concept.description}</p>
          </Card>
        ))}
      </div>
      <div className="mt-10">
        <FlowDiagram steps={siteContent.ecosystem.flow} />
      </div>
    </Section>
  );
}
