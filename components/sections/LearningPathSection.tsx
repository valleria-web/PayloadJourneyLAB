import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homepageEntry } from "@/content/payload-journey-lab";
import { homepageAnchors } from "@/content/site";

export function LearningPathSection() {
  const { learningPath } = homepageEntry;

  return (
    <Section id={homepageAnchors.learningPath} variant="blush" className="border-b border-line">
      <SectionHeader
        eyebrow={learningPath.eyebrow}
        eyebrowTone="readable"
        title={learningPath.title}
        description={learningPath.description}
      />
      <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {learningPath.steps.map((step) => (
          <li key={step.id} id={step.id} className="scroll-mt-24">
            <Card className="flex h-full flex-col bg-surface-card/90">
              <span className="font-mono text-technical-lg font-semibold text-accent-readable">
                {step.number}
              </span>
              <h3 className="mt-5 text-xl font-bold leading-7 text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-text-muted">{step.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Conceitos da etapa ${step.number}`}>
                {step.concepts.map((concept) => (
                  <li
                    key={concept}
                    className="rounded-full border border-border-default bg-surface-soft px-3 py-1 text-xs font-medium leading-5 text-text-primary"
                  >
                    {concept}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-border-default pt-5 xl:mt-auto">
                <p className="font-mono text-technical-sm font-semibold uppercase tracking-technical text-accent-readable">
                  Resultado
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-ink">{step.result}</p>
              </div>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}
