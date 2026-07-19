import { FlowDiagram } from "@/components/diagrams/FlowDiagram";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteContent } from "@/content/payload-journey-lab";
import { homepageAnchors } from "@/content/site";

export function InvestigationPracticeSection() {
  const practice = siteContent.investigativePractice;

  return (
    <Section id={homepageAnchors.investigativePractice} variant="soft" className="border-b border-line">
      <SectionHeader
        eyebrow={practice.eyebrow}
        title={practice.title}
        description={practice.description}
      />

      <div className="mt-9">
        <FlowDiagram steps={practice.progression} />
        <p className="mt-4 max-w-3xl text-sm leading-6 text-text-muted">
          Esta progressão representa a prática operacional e não substitui o procedimento investigativo.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        <Card id={`practice-${practice.trackMode.id}`} className="h-full scroll-mt-24">
          <h3 className="text-xl font-bold text-ink">{practice.trackMode.title}</h3>
          <p className="mt-4 text-sm leading-6 text-text-muted sm:text-base sm:leading-7">
            {practice.trackMode.definition}
          </p>
          <p className="mt-5 rounded-foundation-control bg-accent-muted p-4 font-semibold text-ink">
            {practice.trackMode.principle}
          </p>
          <ul className="mt-5 space-y-2 text-sm leading-6 text-text-muted">
            {practice.trackMode.actions.map((action) => (
              <li key={action} className="flex gap-2">
                <span aria-hidden="true" className="text-accent-readable">•</span>
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card id={`practice-${practice.traceEngineer.id}`} className="h-full scroll-mt-24">
          <h3 className="text-xl font-bold text-ink">{practice.traceEngineer.title}</h3>
          <p className="mt-4 text-sm leading-6 text-text-muted sm:text-base sm:leading-7">
            {practice.traceEngineer.definition}
          </p>
          <p className="mt-4 font-mono text-technical-sm font-semibold uppercase tracking-technical text-accent-readable">
            {practice.traceEngineer.context}
          </p>
          <ul className="mt-5 space-y-2 text-sm leading-6 text-text-muted">
            {practice.traceEngineer.responsibilities.map((responsibility) => (
              <li key={responsibility} className="flex gap-2">
                <span aria-hidden="true" className="text-accent-readable">•</span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card
          id={`practice-${practice.softwareSystemInvestigation.id}`}
          className="h-full scroll-mt-24"
        >
          <h3 className="text-xl font-bold text-ink">
            {practice.softwareSystemInvestigation.title}
          </h3>
          <p className="mt-4 text-sm leading-6 text-text-muted sm:text-base sm:leading-7">
            {practice.softwareSystemInvestigation.definition}
          </p>
          <p className="mt-4 font-mono text-technical-sm font-semibold uppercase tracking-technical text-accent-readable">
            {practice.softwareSystemInvestigation.context}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {practice.softwareSystemInvestigation.elements.map((element) => (
              <li
                key={element}
                className="rounded-full border border-border-default bg-surface-card px-3 py-1 text-sm text-text-muted"
              >
                {element}
              </li>
            ))}
          </ul>
          <div className="mt-5 border-t border-border-default pt-5">
            <p className="font-mono text-technical-sm font-semibold uppercase tracking-technical text-accent-readable">
              Resultado
            </p>
            <p className="mt-2 text-sm font-semibold leading-6 text-ink">
              {practice.softwareSystemInvestigation.result}
            </p>
          </div>
        </Card>
      </div>

      <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-foundation-card border border-border-default bg-surface-card p-5">
          <dt className="font-semibold text-ink">Evidência</dt>
          <dd className="mt-2 text-sm leading-6 text-text-muted">
            {practice.centralConcepts.evidence}
          </dd>
        </div>
        <div className="rounded-foundation-card border border-border-default bg-surface-card p-5">
          <dt className="font-semibold text-ink">Autoridade</dt>
          <dd className="mt-2 text-sm leading-6 text-text-muted">
            {practice.centralConcepts.authority}
          </dd>
        </div>
        <div className="rounded-foundation-card border border-border-default bg-surface-card p-5 sm:col-span-2 lg:col-span-1">
          <dt className="font-semibold text-ink">Restauração</dt>
          <dd className="mt-2 text-sm leading-6 text-text-muted">
            {practice.centralConcepts.restoration}
          </dd>
        </div>
      </dl>

      <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-foundation-card border border-border-default bg-surface-card p-6 sm:p-8 lg:flex-row lg:items-center">
        <p className="max-w-2xl text-base font-semibold leading-7 text-ink sm:text-lg">
          {practice.cta.supportingText}
        </p>
        <Button href={practice.cta.action.href} variant="contrast" className="shrink-0">
          {practice.cta.action.label}
        </Button>
      </div>
    </Section>
  );
}
