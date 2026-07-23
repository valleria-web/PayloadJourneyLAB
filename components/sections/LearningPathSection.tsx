import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { HighlightPanel } from "@/components/ui/HighlightPanel";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { learningPresentation } from "@/content/payload-journey-lab";

function statusVariant(status: string) {
  if (status === "Conteúdo disponível") return "technical" as const;
  if (status === "Aprofundamento em construção") return "cta" as const;
  return "neutral" as const;
}

export function LearningPathSection() {
  const { progression } = learningPresentation;

  return (
    <Section id="progressao" variant="blush" className="border-b border-line">
      <SectionHeader
        eyebrow={progression.eyebrow}
        eyebrowTone="readable"
        title={progression.title}
        description={progression.description}
      />

      <ol className="mt-10 grid gap-5">
        {progression.levels.map((level) => (
          <li key={level.id} id={level.id} className="scroll-mt-24">
            <Card
              className={`grid gap-7 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] ${
                level.number === "04"
                  ? "border-accent-cta/35 bg-surface-card"
                  : level.number === "05"
                    ? "border-border-strong bg-surface-soft"
                    : "bg-surface-card/90"
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-technical-lg font-semibold text-accent-readable">
                    NÍVEL {level.number}
                  </span>
                  <Badge variant={statusVariant(level.status)}>{level.status}</Badge>
                </div>
                <h3 className="mt-5 text-2xl font-bold leading-8 text-ink sm:text-3xl">
                  {level.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-text-muted">{level.objective}</p>
                <div className="mt-6 flex flex-wrap gap-2" aria-label={`Elementos do nível ${level.number}`}>
                  {level.elements.map((element) => (
                    <span
                      key={element}
                      className="rounded-full border border-border-default bg-surface-page px-3 py-1 text-xs font-medium leading-5 text-text-primary"
                    >
                      {element}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-mono text-technical font-semibold uppercase tracking-technical-wide text-accent-readable">
                  Capacidade pretendida
                </h4>
                <ul className="mt-4 grid gap-3 text-sm leading-6 text-text-muted sm:grid-cols-2">
                  {level.capabilities.map((capability) => (
                    <li key={capability} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent-readable"
                      />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
                <HighlightPanel
                  variant={level.number === "05" ? "soft-blush" : "technical"}
                  className="mt-6"
                >
                  <p className="text-sm font-semibold leading-6">{level.claim}</p>
                  {level.limit ? (
                    <p className="mt-3 border-t border-current/15 pt-3 text-sm leading-6 opacity-80">
                      Limite: {level.limit}
                    </p>
                  ) : null}
                </HighlightPanel>
              </div>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}
