import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  investigationCycle,
  investigationCycleSectionContent,
  protocolPagePresentation,
} from "@/content/methods";

function List({ items }: { items: readonly string[] }) {
  return <ul className="mt-3 space-y-2 text-sm leading-6 text-text-muted">{items.map((item) => <li key={item} className="flex gap-2"><span aria-hidden="true" className="text-accent-readable">•</span><span>{item}</span></li>)}</ul>;
}

export function InvestigationCycleSection() {
  const page = protocolPagePresentation;
  return (
    <>
      <Section id="protocol-inputs" className="border-b border-line">
        <SectionHeader {...page.minimumInputs} />
        <List items={page.minimumInputs.items} />
      </Section>
      <Section id="procedure" variant="soft" className="border-b border-line">
        <SectionHeader {...investigationCycleSectionContent} />
        <p className="mt-7 max-w-4xl rounded-foundation-card border border-border-default bg-surface-card p-5 font-semibold leading-7 text-ink">{investigationCycleSectionContent.distinction}</p>
        <ol className="mt-10 grid gap-5 lg:grid-cols-2">
          {investigationCycle.map((step) => (
            <li key={step.id} id={step.id} className="scroll-mt-24">
              <Card className="h-full">
                <div className="flex items-start justify-between gap-3">
                  <div><Badge variant="neutral">{step.action}</Badge><h3 className="mt-4 text-2xl font-bold text-ink">{step.actionPt}</h3></div>
                  <span className="font-mono font-semibold text-accent-readable">{step.number}</span>
                </div>
                <p className="mt-5 rounded-foundation-control bg-accent-muted p-4 font-semibold leading-7 text-ink">{step.question}</p>
                <p className="mt-5 text-sm leading-6 text-text-muted"><strong className="text-ink">Objetivo:</strong> {step.objective}</p>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div><h4 className="font-semibold text-ink">Entradas</h4><List items={step.inputs} /></div>
                  <div><h4 className="font-semibold text-ink">Atividades</h4><List items={step.activities} /></div>
                  <div><h4 className="font-semibold text-ink">Evidências possíveis</h4><List items={step.possibleEvidence} /></div>
                  <div className="space-y-4 text-sm leading-6 text-text-muted">
                    <p><strong className="text-ink">Resultado condicionado:</strong> {step.result}</p>
                    <p><strong className="text-ink">Critério de saída:</strong> {step.exitCriterion}</p>
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </Section>
      <Section id="protocol-iteration" className="border-b border-line">
        <SectionHeader eyebrow={page.iteration.eyebrow} title={page.iteration.title} description={page.iteration.description} />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">{page.iteration.returns.map((item) => <Card key={`${item.from}-${item.to}`}><p className="font-bold text-ink">{item.from} → {item.to}</p><p className="mt-3 text-sm leading-6 text-text-muted">{item.reason}</p></Card>)}</div>
      </Section>
      <Section id="protocol-artifacts" variant="soft" className="border-b border-line">
        <SectionHeader {...page.artifacts} />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">{page.artifacts.items.map((item) => <Card key={item.title}><div className="flex flex-wrap items-start justify-between gap-3"><h3 className="font-bold text-ink">{item.title}</h3><Badge variant="neutral">{item.status}</Badge></div><p className="mt-4 text-sm leading-6 text-text-muted">{item.description}</p><p className="mt-3 text-sm leading-6 text-text-muted"><strong className="text-ink">Evidência:</strong> {item.evidence}</p></Card>)}</div>
      </Section>
      <Section id="protocol-limits" className="border-b border-line">
        <SectionHeader eyebrow={page.limits.eyebrow} title={page.limits.title} />
        <List items={page.limits.items} />
      </Section>
    </>
  );
}
