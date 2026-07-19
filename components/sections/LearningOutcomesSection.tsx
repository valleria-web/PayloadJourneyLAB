import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homepageEntry } from "@/content/payload-journey-lab";
import { homepageAnchors } from "@/content/site";

export function LearningOutcomesSection() {
  const { learningOutcomes } = homepageEntry;

  return (
    <Section id={homepageAnchors.competencies} className="border-b border-line">
      <SectionHeader
        eyebrow={learningOutcomes.eyebrow}
        eyebrowTone="readable"
        title={learningOutcomes.title}
        description={learningOutcomes.description}
      />
      <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {learningOutcomes.items.map((item) => (
          <li key={item.id}>
            <Card className="h-full">
              <span className="font-mono text-technical-lg font-semibold text-accent-readable">
                {item.number}
              </span>
              <h3 className="mt-5 text-xl font-bold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-text-muted">{item.description}</p>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}
