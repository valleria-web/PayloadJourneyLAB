import { Card } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Section } from "@/components/ui/Section";
import { siteContent } from "@/content/payload-journey-lab";
import { homepageAnchors } from "@/content/site";

export function ConceptEcosystemSection() {
  return (
    <Section id={homepageAnchors.ecosystem}>
      <SectionHeader
        eyebrow={siteContent.ecosystem.eyebrow}
        title={siteContent.ecosystem.title}
        description={siteContent.ecosystem.description}
      />
      <ol className="mt-10 grid gap-5 lg:grid-cols-2">
        {siteContent.ecosystem.pillars.map((pillar, index) => (
          <li key={pillar.id} id={pillar.id}>
            <Card className="h-full" hover="technical">
              <div className="flex items-start justify-between gap-4">
                <IconWrapper icon={pillar.icon} />
                <span className="font-mono text-technical text-accent-readable">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-ink">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-6 text-graphite sm:text-base sm:leading-7">
                {pillar.description}
              </p>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-technical text-graphite">
                    Atividades
                  </p>
                  <ul className="mt-3 grid gap-2 text-sm leading-6 text-graphite">
                    {pillar.activities.map((activity) => (
                      <li key={activity} className="flex gap-2">
                        <span aria-hidden="true" className="text-accent-readable">→</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {pillar.audience ? (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-technical text-graphite">
                      Públicos possíveis
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {pillar.audience.map((audience) => (
                        <li
                          key={audience}
                          className="rounded-full border border-line bg-subtle px-3 py-1 text-xs text-graphite"
                        >
                          {audience}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
              <div className="mt-6 border-t border-line pt-5">
                <p className="text-xs font-semibold uppercase tracking-technical text-graphite">
                  Resultado
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-ink">{pillar.result}</p>
              </div>
            </Card>
          </li>
        ))}
      </ol>
      <p className="mt-8 max-w-4xl border-l-2 border-accent-readable pl-5 text-sm leading-6 text-text-muted">
        {siteContent.ecosystem.collaborationNote}
      </p>
    </Section>
  );
}
