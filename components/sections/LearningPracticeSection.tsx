import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { HighlightPanel } from "@/components/ui/HighlightPanel";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { learningPresentation } from "@/content/payload-journey-lab";

export function LearningAvailableSection() {
  const { available } = learningPresentation;

  return (
    <Section id="conteudo-disponivel" className="border-b border-line">
      <SectionHeader
        eyebrow={available.eyebrow}
        eyebrowTone="readable"
        title={available.title}
        description={available.description}
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {available.items.map((item) => (
          <Card key={item.title} className="flex h-full flex-col">
            <Badge variant={item.status === "Conteúdo disponível" ? "technical" : "neutral"}>
              {item.status}
            </Badge>
            <h3 className="mt-5 text-xl font-bold text-ink">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-text-muted">{item.description}</p>
            <p className="mt-5 border-t border-border-default pt-4 text-sm font-semibold leading-6 text-ink">
              {item.learning}
            </p>
            <Button href={item.href} variant="ghost" className="mt-5 w-fit px-0">
              Onde começar
              <ArrowRight aria-hidden="true" className="size-4" />
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function LearningInitialPathSection() {
  const { initialPath } = learningPresentation;

  return (
    <Section id="trilha" variant="blush" className="border-b border-line">
      <SectionHeader
        eyebrow={initialPath.eyebrow}
        eyebrowTone="readable"
        title={initialPath.title}
        description={initialPath.description}
      />
      <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {initialPath.steps.map((step) => (
          <li key={step.number}>
            <Card className="flex h-full flex-col">
              <span className="font-mono text-technical-lg font-semibold text-accent-readable">
                {step.number}
              </span>
              <h3 className="mt-4 text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-text-muted">{step.description}</p>
              <Button href={step.href} variant="ghost" className="mt-5 w-fit px-0 md:mt-auto">
                Seguir esta etapa
                <ArrowRight aria-hidden="true" className="size-4" />
              </Button>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function LearningCasesEvidenceSection() {
  const { cases, evidence } = learningPresentation;

  return (
    <>
      <Section id="casos-aprendizagem" variant="soft" className="border-b border-line">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow={cases.eyebrow}
              eyebrowTone="readable"
              title={cases.title}
              description={cases.description[0]}
            />
            <p className="mt-5 max-w-3xl text-base leading-7 text-text-muted">
              {cases.description[1]}
            </p>
            <div className="mt-6">
              <Badge variant="cta">{cases.status}</Badge>
            </div>
            <Button href={cases.cta.href} variant="contrast" className="mt-7">
              {cases.cta.label}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Button>
          </div>
          <Card>
            <h3 className="text-xl font-bold text-ink">Práticas orientadas pelo caso</h3>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-text-muted sm:grid-cols-2">
              {cases.practices.map((practice) => (
                <li key={practice} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent-readable"
                  />
                  <span>{practice}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section id="evidencia-pedagogica" className="border-b border-line">
        <SectionHeader
          eyebrow={evidence.eyebrow}
          eyebrowTone="readable"
          title={evidence.title}
          description={evidence.description}
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <HighlightPanel variant="technical">
            <h3 className="text-xl font-bold text-ink">O que já pode ser demonstrado</h3>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-text-muted">
              {evidence.demonstrated.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent-readable"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </HighlightPanel>
          <HighlightPanel variant="soft-blush">
            <h3 className="text-xl font-bold text-ink">O que ainda precisa ser investigado</h3>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-text-muted">
              {evidence.investigate.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent-cta"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </HighlightPanel>
        </div>
      </Section>
    </>
  );
}
