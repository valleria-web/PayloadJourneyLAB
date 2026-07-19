import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteContent } from "@/content/payload-journey-lab";
import { homepageAnchors } from "@/content/site";

export function MethodsSection() {
  return (
    <Section id={homepageAnchors.methods} className="border-y border-line bg-subtle">
      <SectionHeader
        eyebrow={siteContent.methods.eyebrow}
        title={siteContent.methods.title}
        description={siteContent.methods.intro}
      />

      <p className="mt-7 max-w-4xl rounded-foundation-card border border-border-default bg-surface-card p-5 text-base font-semibold leading-7 text-ink">
        {siteContent.methods.distinction}
      </p>

      <ol className="mt-10 grid gap-5 lg:grid-cols-2">
        {siteContent.methods.items.map((method, index) => (
          <li key={method.id} id={`method-${method.id}`} className="scroll-mt-24">
            <Card className="h-full">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <Badge>{method.category}</Badge>
                  <h3 className="mt-4 text-xl font-bold text-ink">{method.title}</h3>
                </div>
                <span className="font-mono text-technical-lg font-semibold text-accent-readable">
                  0{index + 1}
                </span>
              </div>

              <div className="mt-6 space-y-5 text-sm leading-6 text-text-muted sm:text-base sm:leading-7">
                <div>
                  <p className="font-mono text-technical-sm font-semibold uppercase tracking-technical text-accent-readable">
                    Propósito
                  </p>
                  <p className="mt-2">{method.purpose}</p>
                </div>
                <div>
                  <p className="font-mono text-technical-sm font-semibold uppercase tracking-technical text-accent-readable">
                    Quando utilizar
                  </p>
                  <p className="mt-2">{method.whenToUse}</p>
                </div>
                <div className="rounded-foundation-control bg-surface-soft p-4">
                  <p className="font-mono text-technical-sm font-semibold uppercase tracking-technical text-accent-readable">
                    Pergunta respondida
                  </p>
                  <p className="mt-2 font-semibold text-ink">{method.question}</p>
                </div>
                <div>
                  <p className="font-mono text-technical-sm font-semibold uppercase tracking-technical text-accent-readable">
                    Resultado
                  </p>
                  <p className="mt-2 font-semibold text-ink">{method.result}</p>
                </div>
                <div className="border-t border-border-default pt-5">
                  <p className="font-mono text-technical-sm font-semibold uppercase tracking-technical text-accent-readable">
                    Relação com o procedimento
                  </p>
                  <p className="mt-2">{method.relationship}</p>
                </div>
              </div>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}
