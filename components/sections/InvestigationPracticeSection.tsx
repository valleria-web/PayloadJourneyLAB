import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { investigativePracticePresentation as page } from "@/content/methods";

function List({ items }: { items: readonly string[] }) {
  return <ul className="mt-4 space-y-2 text-sm leading-6 text-text-muted">{items.map((item) => <li key={item} className="flex gap-2"><span aria-hidden="true" className="text-accent-readable">•</span><span>{item}</span></li>)}</ul>;
}

export function InvestigationPracticeSection() {
  return (
    <>
      <Section id="investigation-characteristics" className="border-b border-line">
        <SectionHeader {...page.characteristics} />
        <Card className="mt-8 max-w-4xl">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h3 className="text-xl font-bold text-ink">{page.softwareSystemInvestigation.title}</h3>
            <Badge variant="neutral">{page.softwareSystemInvestigation.status}</Badge>
          </div>
          <p className="mt-4 text-base leading-7 text-text-muted">
            {page.softwareSystemInvestigation.definition}
          </p>
        </Card>
        <List items={page.characteristics.items} />
      </Section>

      <Section id="investigation-practice" variant="soft" className="border-b border-line">
        <SectionHeader eyebrow="POSTURA E CAPACIDADES" title="Do Track Mode às capacidades de Trace Engineering" description="Os conceitos são relacionados, mas cumprem papéis distintos." />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Card id={page.trackMode.id}>
            <h3 className="text-2xl font-bold text-ink">{page.trackMode.title}</h3>
            <p className="mt-4 text-base leading-7 text-text-muted">{page.trackMode.definition}</p>
            <p className="mt-5 rounded-foundation-control bg-accent-muted p-4 font-semibold text-ink">{page.trackMode.principle}</p>
            <List items={page.trackMode.actions} />
          </Card>
          <Card id={page.traceEngineering.id}>
            <div className="flex flex-wrap items-start justify-between gap-3"><h3 className="text-2xl font-bold text-ink">{page.traceEngineering.title}</h3><Badge variant="neutral">{page.traceEngineering.status}</Badge></div>
            <p className="mt-4 text-base leading-7 text-text-muted">{page.traceEngineering.definition}</p>
            <List items={page.traceEngineering.capabilities} />
          </Card>
        </div>
      </Section>

      <Section id={page.traceEngineer.id} className="border-b border-line">
        <SectionHeader eyebrow="FUNÇÃO INVESTIGATIVA" title={page.traceEngineer.title} description={page.traceEngineer.definition} />
        <Badge variant="neutral">{page.traceEngineer.status}</Badge>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Card><h3 className="text-xl font-bold text-ink">Responsabilidades em formalização</h3><List items={page.traceEngineer.responsibilities} /></Card>
          <Card><h3 className="text-xl font-bold text-ink">O que o termo não declara</h3><List items={page.traceEngineer.caveats} /></Card>
        </div>
      </Section>

      <Section id="investigation-questions" variant="soft" className="border-b border-line">
        <SectionHeader eyebrow={page.questions.eyebrow} title={page.questions.title} />
        <ol className="mt-8 grid gap-3 md:grid-cols-2">
          {page.questions.items.map((question, index) => <li key={question} className="rounded-foundation-card border border-border-default bg-surface-card p-5 text-sm font-semibold leading-6 text-ink"><span className="mr-3 font-mono text-accent-readable">{String(index + 1).padStart(2, "0")}</span>{question}</li>)}
        </ol>
      </Section>

      <Section id="investigation-relations" className="border-b border-line">
        <SectionHeader eyebrow={page.relations.eyebrow} title={page.relations.title} />
        <p className="mt-6 max-w-3xl text-lg font-bold leading-8 text-ink">{page.relations.principle}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{page.relations.items.map((item) => <Card key={item.title}><h3 className="font-bold text-ink">{item.title}</h3><p className="mt-3 text-sm leading-6 text-text-muted">{item.description}</p></Card>)}</div>
      </Section>

      <Section id="investigation-authority" variant="soft" className="border-b border-line">
        <SectionHeader eyebrow={page.authority.eyebrow} title={page.authority.title} />
        <div className="mt-6 max-w-4xl space-y-4 text-base leading-7 text-text-muted">{page.authority.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <List items={page.authority.principles} />
      </Section>

      <Section id="investigation-limits" className="border-b border-line">
        <SectionHeader eyebrow={page.limits.eyebrow} title={page.limits.title} />
        <List items={page.limits.current} />
        <Card className="mt-8">
          <Badge variant="neutral">{page.limits.future.status}</Badge>
          <p className="mt-4 text-base leading-7 text-text-muted">{page.limits.future.description}</p>
          <List items={page.limits.future.topics} />
        </Card>
      </Section>
    </>
  );
}
