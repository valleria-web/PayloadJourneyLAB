import { BookOpen, Search } from "lucide-react";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { HighlightPanel } from "@/components/ui/HighlightPanel";
import { Section } from "@/components/ui/Section";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { siteContent } from "@/content/payload-journey-lab";

function InvestigationStatusCard() {
  const investigation = siteContent.caseStudy.investigation;
  const technicalRows = [
    ["Anomalia", investigation.anomaly],
    ["Payload", investigation.payload],
    ["Método", "Reverse Payload Journey"],
    ["Missão", "Track to Origin"],
    ["Authority", "temporal authority under review"],
  ];

  return (
    <Card className="border-line/70 bg-[#fcf7f8]/90 p-6 sm:p-7 lg:p-8">
      <div className="flex items-center justify-between gap-3">
        <TechnicalLabel tone="terminal" className="text-[0.68rem]">
          {">_"} HORA.city
        </TechnicalLabel>
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-text-muted">
          case file
        </span>
      </div>

      <div className="mt-6 rounded-2xl border border-ink/10 bg-ink p-5 font-mono text-[0.78rem] leading-6 text-white shadow-[0_18px_50px_rgba(16,16,16,0.18)]">
        <p>
          <span className="text-terminal">{">_"}</span> case: {investigation.caseId}
        </p>
        <p className="mt-1 text-white/70">region: BR</p>
        <p className="mt-1 text-white/70">status: active investigation</p>
        <p className="mt-1 text-white/70">primary payload: HeartCreated</p>
        <p className="mt-1 text-white/70">validated flow: in progress</p>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_1fr]">
        <div className="rounded-2xl border border-line/70 bg-white/75 p-4">
          <TechnicalLabel tone="terminal" className="text-[0.6rem]">
            Validated Flow
          </TechnicalLabel>
          <p className="mt-2 text-sm font-semibold text-ink">in progress</p>
        </div>
        <div className="rounded-2xl border border-line/70 bg-white/75 p-4">
          <TechnicalLabel tone="terminal" className="text-[0.6rem]">
            Authority
          </TechnicalLabel>
          <p className="mt-2 text-sm font-semibold text-ink">temporal authority under review</p>
        </div>
      </div>

      <div className="mt-5 divide-y divide-line/70 rounded-2xl border border-line/70 bg-white/70">
        {technicalRows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between gap-4 px-4 py-3">
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-graphite">
              {label}
            </span>
            <span className="text-right text-sm font-medium text-ink">{value}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full border border-line/70 bg-white/75 px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-graphite">
          ~6k → ~40k linhas
        </span>
        <span className="rounded-full border border-line/70 bg-white/75 px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-graphite">
          createdAt incorreto
        </span>
      </div>
    </Card>
  );
}

export function CaseStudySection() {
  const microFacts = [
    { label: "Escala", value: "~6k → ~40k linhas" },
    { label: "Anomalia", value: "createdAt incorreto" },
    { label: "Payload", value: "HeartCreated" },
    { label: "Missão", value: "Track to Origin" },
  ];

  return (
    <Section
      id="case-study"
      className="relative overflow-hidden border-y border-line bg-[#f6e7eb]/70"
      containerClassName="relative"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(16,16,16,0.08)_1px,transparent_1px)] [background-size:14px_14px]" />
      <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <HighlightPanel
          variant="soft-blush"
          className="border-line/70 bg-[#fbf1f4]/90 p-6 sm:p-8 lg:p-8"
        >
          <SectionHeader
            eyebrow="STUDY CASE"
            title="HORA.city"
            className="max-w-none"
          />
          <p className="mt-5 max-w-2xl text-base leading-7 text-graphite sm:text-[1.02rem]">
            O HORA.city é um caso real de investigação aplicada no Payload Journey LAB, marcado por uma expansão acelerada e por perda de observabilidade estrutural.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-graphite sm:text-[1.02rem]">
            A investigação atual acompanha uma anomalia temporal em createdAt associada ao payload HeartCreated, com o objetivo de reconstruir o caminho operacional e rastrear a origem da decisão temporal.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button
              href="#case-study"
              variant="secondary"
              className="sm:w-fit border-accent-cta/25 bg-white/80 text-pink-dark shadow-none hover:border-accent-cta/40 hover:bg-blush/70 hover:text-pink-dark"
            >
              <Search aria-hidden="true" className="size-4" />
              Explorar o estudo
            </Button>
            <Button href="#lablog" variant="ghost" className="sm:w-fit text-ink/80 hover:bg-white/70">
              <BookOpen aria-hidden="true" className="size-4" />
              Acompanhar no LabLog
            </Button>
          </div>

          <p className="mt-3 text-xs leading-6 text-text-muted/80">Detalhes completos em breve.</p>

          <div className="mt-8 border-t border-line/70 pt-5">
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {microFacts.map((fact) => (
                <div key={fact.label} className="flex items-baseline gap-2">
                  <TechnicalLabel tone="terminal" className="text-[0.58rem]">
                    {fact.label}
                  </TechnicalLabel>
                  <span className="text-sm font-medium text-ink">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </HighlightPanel>

        <InvestigationStatusCard />
      </div>
    </Section>
  );
}
