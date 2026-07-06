import { Play, Search } from "lucide-react";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { siteContent } from "@/content/payload-journey-lab";

function InvestigationStatusCard() {
  const investigation = siteContent.caseStudy.investigation;

  return (
    <Card className="bg-subtle">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-graphite">
        Ficha investigativa
      </p>
      <dl className="mt-6 grid gap-4">
        <div className="rounded-sm border border-line bg-white p-4">
          <dt className="text-xs uppercase tracking-[0.16em] text-graphite">Case ID</dt>
          <dd className="mt-1 font-semibold">{investigation.caseId}</dd>
        </div>
        <div className="rounded-sm border border-line bg-white p-4">
          <dt className="text-xs uppercase tracking-[0.16em] text-graphite">Anomalia</dt>
          <dd className="mt-1 font-semibold">{investigation.anomaly}</dd>
        </div>
        <div className="rounded-sm border border-line bg-white p-4">
          <dt className="text-xs uppercase tracking-[0.16em] text-graphite">
            Payload associado
          </dt>
          <dd className="mt-1 font-semibold">{investigation.payload}</dd>
        </div>
        <div className="rounded-sm border border-line bg-white p-4">
          <dt className="text-xs uppercase tracking-[0.16em] text-graphite">Estado</dt>
          <dd className="mt-1 font-semibold">{investigation.state}</dd>
        </div>
      </dl>
    </Card>
  );
}

export function CaseStudySection() {
  return (
    <Section id="case-study" className="border-y border-line bg-[linear-gradient(180deg,#ffffff_0%,#f7f7f8_100%)]">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeader
            eyebrow={siteContent.caseStudy.subtitle}
            title={siteContent.caseStudy.title}
            description={siteContent.caseStudy.description}
          />
          <p className="mt-5 max-w-3xl text-base leading-7 text-graphite">
            {siteContent.caseStudy.secondaryDescription}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {siteContent.caseStudy.actions.map((action, index) => {
              const Icon = index === 0 ? Search : Play;

              return (
                <Button
                  key={action.label}
                  disabled
                  variant={index === 0 ? "primary" : "secondary"}
                >
                  <Icon aria-hidden="true" className="mr-2 size-4" />
                  {action.label}
                  {action.status ? ` - ${action.status}` : null}
                </Button>
              );
            })}
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {siteContent.caseStudy.stages.map((stage, index) => (
              <div key={stage.label} className="rounded-sm border border-line bg-white p-4">
                <p className="text-xs text-graphite">0{index + 1}</p>
                <p className="mt-4 font-semibold">{stage.label}</p>
                <p className="mt-2 text-xs text-graphite">{stage.status}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {siteContent.caseStudy.facts.map((fact) => (
              <div key={fact.label} className="rounded-sm border border-line bg-white p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-graphite">{fact.label}</p>
                <p className="mt-2 font-semibold">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
        <InvestigationStatusCard />
      </div>
    </Section>
  );
}
