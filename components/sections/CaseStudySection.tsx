import { Play, Search } from "lucide-react";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { siteContent } from "@/content/payload-journey-lab";

function InvestigationStatusCard() {
  const investigation = siteContent.caseStudy.investigation;

  return (
    <Card className="bg-paper/80">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-accent">
        {">_"} HORA.city
      </p>
      <div className="mt-6 rounded-xl border border-line bg-ink p-5 font-mono text-xs leading-6 text-white">
        <p>
          <span className="text-terminal">{">_"}</span> case: {investigation.caseId}
        </p>
        <p className="text-white/70">region: BR</p>
        <p className="text-white/70">status: active investigation</p>
        <p className="text-white/70">payloads: tracked</p>
      </div>
      <dl className="mt-6 grid gap-3">
        {[
          ["Anomalia", investigation.anomaly],
          ["Payload associado", investigation.payload],
          ["Estado", investigation.state],
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg border border-line bg-white/80 p-4">
            <dt className="font-mono text-xs uppercase tracking-[0.08em] text-graphite">{label}</dt>
            <dd className="mt-1 font-semibold">{value}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}

export function CaseStudySection() {
  return (
    <Section id="case-study" className="border-y border-line bg-accent-muted/60">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeader
            eyebrow="STUDY CASE"
            title="HORA.city"
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
                  {index === 0 ? "Explorar o estudo" : action.label}
                  {action.status ? ` - ${action.status}` : null}
                </Button>
              );
            })}
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {siteContent.caseStudy.stages.map((stage, index) => (
              <div key={stage.label} className="rounded-xl border border-line bg-white/75 p-4">
                <p className="font-mono text-xs text-accent">0{index + 1}</p>
                <p className="mt-4 font-semibold">{stage.label}</p>
                <p className="mt-2 text-xs text-graphite">{stage.status}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {siteContent.caseStudy.facts.map((fact) => (
              <div key={fact.label} className="rounded-xl border border-line bg-white/75 p-4">
                <p className="font-mono text-xs uppercase tracking-[0.08em] text-graphite">
                  {fact.label}
                </p>
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
