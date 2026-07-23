import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  methodPagePresentation,
  methodsContent,
  methodsSectionContent,
} from "@/content/methods";

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-3 space-y-2 text-sm leading-6 text-text-muted">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span aria-hidden="true" className="text-accent-readable">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function MethodsSection() {
  const page = methodPagePresentation;

  return (
    <>
      <Section id="method-taxonomy" className="border-b border-line">
        <SectionHeader {...page.taxonomy} />
        <dl className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {page.taxonomy.items.map((item) => (
            <Card key={item.term}>
              <dt className="text-lg font-bold text-ink">{item.term}</dt>
              <dd className="mt-2">
                <Badge variant="neutral">{item.role}</Badge>
                <p className="mt-4 text-sm leading-6 text-text-muted">{item.description}</p>
              </dd>
            </Card>
          ))}
        </dl>
      </Section>

      <Section id="methods" variant="soft" className="border-b border-line">
        <SectionHeader
          eyebrow={methodsSectionContent.eyebrow}
          title={methodsSectionContent.title}
          description={methodsSectionContent.intro}
        />
        <p className="mt-7 max-w-4xl rounded-foundation-card border border-border-default bg-surface-card p-5 font-semibold leading-7 text-ink">
          {methodsSectionContent.distinction}
        </p>
        <ol className="mt-10 grid gap-5 lg:grid-cols-2">
          {methodsContent.map((method, index) => (
            <li key={method.id} id={`method-${method.id}`} className="scroll-mt-24">
              <Card className="h-full">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <Badge>{method.category}</Badge>
                    <h3 className="mt-4 text-2xl font-bold text-ink">{method.title}</h3>
                  </div>
                  <span className="font-mono text-sm font-semibold text-accent-readable">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-5 text-base font-semibold leading-7 text-ink">{method.definition}</p>
                <dl className="mt-6 grid gap-5 text-sm leading-6 text-text-muted sm:grid-cols-2">
                  <div><dt className="font-semibold text-ink">Ponto de partida</dt><dd className="mt-1">{method.startingPoint}</dd></div>
                  <div><dt className="font-semibold text-ink">Pergunta</dt><dd className="mt-1">{method.question}</dd></div>
                  <div><dt className="font-semibold text-ink">Quando utilizar</dt><dd className="mt-1">{method.whenToUse}</dd></div>
                  <div><dt className="font-semibold text-ink">Resultado condicionado</dt><dd className="mt-1">{method.result}</dd></div>
                </dl>
                <div className="mt-6 border-t border-border-default pt-5">
                  <Badge variant="neutral">{method.status}</Badge>
                  <p className="mt-3 text-sm leading-6 text-text-muted">{method.evidence}</p>
                  <p className="mt-3 text-sm leading-6 text-text-muted"><strong className="text-ink">Limite:</strong> {method.limits}</p>
                  {method.canonicalHref ? (
                    <Button href={method.canonicalHref} variant="secondary" className="mt-5">
                      Abrir página canônica
                    </Button>
                  ) : null}
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="supporting-instruments" className="border-b border-line">
        <SectionHeader {...page.supportingInstruments} />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {page.supportingInstruments.items.map((item) => (
            <Card key={item.title}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                <Badge variant="neutral">{item.status}</Badge>
              </div>
              <p className="mt-5 text-sm leading-6 text-text-muted"><strong className="text-ink">Pergunta:</strong> {item.question}</p>
              <p className="mt-3 text-sm leading-6 text-text-muted"><strong className="text-ink">Resultado:</strong> {item.result}</p>
              <p className="mt-3 text-sm leading-6 text-text-muted"><strong className="text-ink">Evidência de estado:</strong> {item.evidence}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="method-relationship" variant="soft" className="border-b border-line">
        <SectionHeader {...page.relationship} />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {page.relationship.steps.map((step, index) => (
            <li key={step.title}>
              <Card className="h-full">
                <span className="font-mono text-sm font-semibold text-accent-readable">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-text-muted">{step.action}</p>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="method-limits" className="border-b border-line">
        <SectionHeader eyebrow={page.limits.eyebrow} title={page.limits.title} />
        <BulletList items={page.limits.items} />
      </Section>
    </>
  );
}
