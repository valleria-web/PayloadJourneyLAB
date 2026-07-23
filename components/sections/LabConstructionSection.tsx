import { ArrowRight } from "lucide-react";
import { Badge, type BadgeVariant } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { HighlightPanel } from "@/components/ui/HighlightPanel";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { siteContent } from "@/content/payload-journey-lab";
import type { LabStatus } from "@/types/content";

function statusVariant(status: LabStatus): BadgeVariant {
  if (status === "Disponível" || status === "Documentado") return "technical";
  if (status === "Em investigação" || status === "Evidência parcial") return "cta";
  return "neutral";
}

function Paragraphs({ items }: { items: readonly string[] }) {
  return (
    <div className="grid gap-4 text-base leading-7 text-graphite">
      {items.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </div>
  );
}

export function LabStateConstructionSection() {
  const { currentState, construction } = siteContent.lab;

  return (
    <>
      <Section id="current-state" className="border-b border-line">
        <SectionHeader
          eyebrow={currentState.eyebrow}
          eyebrowTone="readable"
          title={currentState.title}
          description={currentState.description}
        />
        <ul className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {currentState.items.map((item) => (
            <li key={item.title}>
              <Card className="flex h-full flex-col">
                <Badge variant={statusVariant(item.status)}>{item.status}</Badge>
                <h3 className="mt-4 text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-muted">{item.description}</p>
                {item.evidence ? (
                  <p className="mt-5 border-t border-line pt-4 text-xs leading-5 text-graphite">
                    <span className="font-semibold text-ink">Base localizada:</span> {item.evidence}
                  </p>
                ) : null}
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="lab-construction" variant="soft" className="border-b border-line">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader eyebrow={construction.eyebrow} eyebrowTone="readable" title={construction.title} />
          <Paragraphs items={construction.description} />
        </div>
        <ul className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {construction.items.map((item) => (
            <li key={item.title}>
              <Card className="h-full p-5">
                <Badge variant={statusVariant(item.status)}>{item.status}</Badge>
                <h3 className="mt-4 text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-muted">{item.description}</p>
                {item.evidence ? <p className="mt-4 text-xs leading-5 text-graphite">{item.evidence}</p> : null}
              </Card>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

export function LabPilotSection() {
  const content = siteContent.lab.pilot;

  return (
    <Section id="pilot" variant="blush" className="border-b border-line">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeader eyebrow={content.eyebrow} eyebrowTone="readable" title={content.title} />
        <Paragraphs items={content.description} />
      </div>

      <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {content.commitments.map((commitment) => (
          <li key={commitment.number}>
            <Card className="h-full">
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-sm font-semibold text-accent-readable">{commitment.number}</span>
                <Badge variant={statusVariant(commitment.status)}>{commitment.status}</Badge>
              </div>
              <h3 className="mt-4 text-xl font-bold text-ink">{commitment.title}</h3>
              <p className="mt-3 text-sm leading-6 text-text-muted">{commitment.description}</p>
              {commitment.evidence ? (
                <p className="mt-5 border-t border-line pt-4 text-xs leading-5 text-graphite">
                  <span className="font-semibold text-ink">Evidência do status:</span> {commitment.evidence}
                </p>
              ) : null}
            </Card>
          </li>
        ))}
      </ol>

      <HighlightPanel className="mt-10 p-6 sm:p-8 lg:p-10" variant="technical">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <h3 className="text-2xl font-bold text-ink sm:text-3xl">{content.test.title}</h3>
          <Badge variant={statusVariant(content.test.status)}>{content.test.status}</Badge>
        </div>
        <p className="mt-5 max-w-4xl text-base leading-7 text-graphite">{content.test.description}</p>
        <div className="mt-7 grid gap-5 lg:grid-cols-2">
          <div className="rounded-foundation-control border border-accent-readable/20 bg-white/70 p-5">
            <h4 className="font-semibold text-ink">Evidência inicial de transferibilidade</h4>
            <p className="mt-2 text-sm leading-6 text-graphite">{content.test.initialEvidence}</p>
          </div>
          <div className="rounded-foundation-control border border-accent-readable/20 bg-white/70 p-5">
            <h4 className="font-semibold text-ink">Piloto de capacidade transferível</h4>
            <p className="mt-2 text-sm leading-6 text-graphite">{content.test.transferablePilot}</p>
          </div>
        </div>
      </HighlightPanel>
    </Section>
  );
}

export function LabTraceVisionSection() {
  const { traceEngineer, longTerm } = siteContent.lab;

  return (
    <>
      <Section id="trace-engineer" className="border-b border-line">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader eyebrow={traceEngineer.eyebrow} eyebrowTone="readable" title={traceEngineer.title} />
            <Badge className="mt-6" variant={statusVariant(traceEngineer.status)}>{traceEngineer.status}</Badge>
            <p className="mt-6 text-base font-semibold leading-7 text-ink">{traceEngineer.definition}</p>
            <ul className="mt-6 grid gap-2 text-sm leading-6 text-graphite">
              {traceEngineer.caveats.map((caveat) => <li key={caveat}>— {caveat}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-ink">Competências em desenvolvimento</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {traceEngineer.competencies.map((competency) => (
                <li key={competency} className="rounded-foundation-control border border-line bg-subtle p-4 text-sm font-semibold leading-6 text-ink">
                  {competency}
                </li>
              ))}
            </ul>
            <Button href={traceEngineer.cta.href} variant="contrast" className="mt-7 w-full sm:w-fit">
              {traceEngineer.cta.label}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Button>
          </div>
        </div>
      </Section>

      <Section id="vision" variant="soft" className="border-b border-line">
        <div id="long-term-vision" className="scroll-mt-24">
          <SectionHeader eyebrow={longTerm.eyebrow} eyebrowTone="readable" title={longTerm.title} />
          <div className="mt-7 max-w-4xl"><Paragraphs items={longTerm.description} /></div>
          <ul className="mt-9 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {longTerm.outcomes.map((outcome) => (
              <li key={outcome} className="rounded-foundation-control border border-line bg-white p-4 text-sm font-semibold leading-6 text-ink">
                {outcome}
              </li>
            ))}
          </ul>

          <Card className="mt-10 border-accent-cta/25 bg-blush/60 p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-ink">{longTerm.future.title}</h3>
                <p className="mt-4 max-w-4xl text-base leading-7 text-graphite">{longTerm.future.description}</p>
              </div>
              <Badge
                className="max-w-full whitespace-normal text-center sm:max-w-[18rem] sm:shrink-0"
                variant="neutral"
              >
                Direção futura de pesquisa e formação
              </Badge>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tópicos futuros de pesquisa e formação">
              {longTerm.future.topics.map((topic) => <li key={topic}><Badge variant="neutral">{topic}</Badge></li>)}
            </ul>
          </Card>
        </div>
      </Section>
    </>
  );
}

export function LabPublicCommitmentSection() {
  const content = siteContent.lab.publicCommitment;

  return (
    <Section id="public-commitment" variant="blush" className="border-b border-line">
      <div className="rounded-foundation-card border border-white/15 bg-ink p-7 shadow-foundation-highlight sm:p-10 lg:p-12">
        <TechnicalLabel tone="terminal">{content.eyebrow}</TechnicalLabel>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{content.title}</h2>
        <div className="mt-6 grid max-w-4xl gap-4 text-base leading-7 text-white/80">
          {content.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <p className="mt-8 border-t border-white/15 pt-6 text-xl font-semibold leading-8 text-white sm:text-2xl">
          {content.closing}
        </p>
      </div>
    </Section>
  );
}
