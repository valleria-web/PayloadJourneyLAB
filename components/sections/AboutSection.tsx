import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { siteContent } from "@/content/payload-journey-lab";
import { homepageAnchors } from "@/content/site";

export function AboutSection() {
  return (
    <Section id={homepageAnchors.about}>
      <div>
        <SectionHeader
          eyebrow={siteContent.about.eyebrow}
          title={siteContent.about.title}
          description={siteContent.about.origin}
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Card>
            <h3 className="text-xl font-semibold text-ink">Por que o LAB existe</h3>
            <p className="mt-4 text-sm leading-6 text-graphite sm:text-base sm:leading-7">
              {siteContent.about.motivatingProblem}
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold text-ink">Visão</h3>
            <p className="mt-4 text-sm leading-6 text-graphite sm:text-base sm:leading-7">
              {siteContent.about.vision}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {siteContent.about.values.map((value) => (
                <li
                  key={value}
                  className="rounded-full border border-line bg-subtle px-3 py-1 text-xs text-graphite"
                >
                  {value}
                </li>
              ))}
            </ul>
          </Card>
        </div>
        <Card className="mt-5 bg-subtle">
          <p className="text-xs font-semibold uppercase tracking-technical text-accent-readable">
            Fundadora
          </p>
          <h3 className="mt-2 text-xl font-semibold text-ink">
            {siteContent.about.founder.name}
          </h3>
          <p className="mt-2 font-semibold text-graphite">{siteContent.about.founder.role}</p>
          <div className="mt-5 grid gap-6 lg:grid-cols-2">
            <div className="grid gap-3 text-sm leading-6 text-graphite sm:text-base sm:leading-7">
              <p>{siteContent.about.founder.labCreation}</p>
              <p>{siteContent.about.founder.usmtCreation}</p>
              <p>{siteContent.about.relationshipToUsmt}</p>
            </div>
            <ul className="grid gap-3 text-sm leading-6 text-graphite sm:text-base sm:leading-7">
              {siteContent.about.founder.confirmedContext.map((context) => (
                <li key={context} className="flex gap-3">
                  <span aria-hidden="true" className="text-accent-readable">→</span>
                  <span>{context}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </Section>
  );
}
