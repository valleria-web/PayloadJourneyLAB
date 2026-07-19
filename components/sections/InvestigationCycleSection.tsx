import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteContent } from "@/content/payload-journey-lab";
import { homepageAnchors } from "@/content/site";

export function InvestigationCycleSection() {
  return (
    <Section id={homepageAnchors.procedure} className="border-b border-line">
      <SectionHeader
        eyebrow={siteContent.investigationCycle.eyebrow}
        title={siteContent.investigationCycle.title}
        description={siteContent.investigationCycle.description}
      />

      <p className="mt-7 max-w-4xl rounded-foundation-card border border-border-default bg-surface-soft p-5 text-base font-semibold leading-7 text-ink">
        {siteContent.investigationCycle.distinction}
      </p>

      <ol className="mt-10 grid gap-5 lg:grid-cols-2">
        {siteContent.investigationCycle.steps.map((step) => (
          <li key={step.id} id={step.id} className="scroll-mt-24">
            <Card className="h-full">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <Badge variant="neutral">{step.action}</Badge>
                  <h3 className="mt-4 text-2xl font-bold text-ink">{step.actionPt}</h3>
                </div>
                <span className="font-mono text-technical-lg font-semibold text-accent-readable">
                  {step.number}
                </span>
              </div>

              <div className="mt-6 rounded-foundation-control bg-accent-muted p-4">
                <p className="font-mono text-technical-sm font-semibold uppercase tracking-technical text-accent-readable">
                  Pergunta investigativa
                </p>
                <p className="mt-2 text-base font-semibold leading-7 text-ink">{step.question}</p>
              </div>

              <p className="mt-5 text-sm leading-6 text-text-muted sm:text-base sm:leading-7">
                {step.description}
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-technical-sm font-semibold uppercase tracking-technical text-accent-readable">
                    Entrada
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-text-muted">
                    {step.inputs.map((input) => (
                      <li key={input} className="flex gap-2">
                        <span aria-hidden="true" className="text-accent-readable">•</span>
                        <span>{input}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-technical-sm font-semibold uppercase tracking-technical text-accent-readable">
                    Atividades
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-text-muted">
                    {step.activities.map((activity) => (
                      <li key={activity} className="flex gap-2">
                        <span aria-hidden="true" className="text-accent-readable">•</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 grid gap-4 border-t border-border-default pt-5 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-technical-sm font-semibold uppercase tracking-technical text-accent-readable">
                    Resultado
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-ink">{step.result}</p>
                </div>
                <div>
                  <p className="font-mono text-technical-sm font-semibold uppercase tracking-technical text-accent-readable">
                    Evidência produzida
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-ink">{step.evidence}</p>
                </div>
              </div>
              <div className="mt-5 border-t border-border-default pt-5">
                <p className="font-mono text-technical-sm font-semibold uppercase tracking-technical text-accent-readable">
                  Métodos relacionados
                </p>
                <p className="mt-2 text-sm leading-6 text-text-muted">
                  {step.relatedMethods
                    .map(
                      (methodId) =>
                        siteContent.methods.items.find((method) => method.id === methodId)?.title,
                    )
                    .filter(Boolean)
                    .join(" · ")}
                </p>
              </div>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}
