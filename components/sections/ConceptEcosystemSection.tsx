import { FlowDiagram } from "@/components/diagrams/FlowDiagram";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { siteContent } from "@/content/payload-journey-lab";
import { homepageAnchors } from "@/content/site";

export function ConceptEcosystemSection() {
  return (
    <Section id={homepageAnchors.ecosystem}>
      <SectionHeader
        title={siteContent.ecosystem.title}
        description={siteContent.ecosystem.intro}
      />
      <div className="mt-10">
        <FlowDiagram steps={siteContent.ecosystem.flow} />
        <p className="mt-5 max-w-3xl text-sm leading-6 text-graphite">
          {siteContent.ecosystem.flowDescription}
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {siteContent.ecosystem.items.map((concept) => (
          <Card key={concept.title}>
            <h3 className="text-lg font-semibold">{concept.title}</h3>
            <p className="mt-4 text-sm leading-6 text-graphite">{concept.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
