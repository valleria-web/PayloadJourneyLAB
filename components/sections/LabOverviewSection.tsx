import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Section } from "@/components/ui/Section";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { siteContent } from "@/content/payload-journey-lab";
import { homepageAnchors } from "@/content/site";

export function LabOverviewSection() {
  const content = siteContent.lab;

  return (
    <>
      <Section id={homepageAnchors.lab} className="bg-paper">
        <div className="max-w-4xl">
          <SectionHeader
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-graphite">
            {content.connectionToInvestigativePractice}
          </p>
        </div>
      </Section>

      <Section id={homepageAnchors.about} variant="soft" className="border-y border-line">
        <SectionHeader
          eyebrow={content.originPresentation.eyebrow}
          title={content.originPresentation.title}
          description={content.originPresentation.description}
        />
        <Card id="origin" className="mt-9 scroll-mt-24 bg-white p-6 sm:p-8 lg:p-10">
          <h3 className="text-2xl font-bold text-ink">Por que o LAB existe</h3>
          <div className="mt-5 grid gap-4 text-base leading-7 text-graphite lg:grid-cols-2 lg:gap-8">
            <p>{content.origin}</p>
            <p>{content.motivatingProblem}</p>
          </div>
        </Card>
      </Section>

      <Section className="bg-paper">
        <h2 className="text-3xl font-bold text-ink sm:text-4xl">Missão e princípio</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Card id="mission" className="scroll-mt-24 bg-subtle p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-ink">Missão</h3>
            <p className="mt-2 text-sm leading-6 text-graphite sm:text-base sm:leading-7">
              {content.mission}
            </p>
          </Card>
          <Card id="principle" className="scroll-mt-24 bg-subtle p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-ink">Princípio</h3>
            <p className="mt-2 text-sm leading-6 text-graphite sm:text-base sm:leading-7">
              {content.principle}
            </p>
          </Card>
        </div>
      </Section>

      <Section id="vision" variant="soft" className="border-y border-line">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">Visão</h2>
            <p className="mt-5 text-base leading-7 text-graphite">{content.vision}</p>
          </div>
          <div id="how-the-lab-works" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">Como o LAB trabalha</h2>
            <ol className="mt-6 grid gap-3 sm:grid-cols-2">
              {content.values.map((value, index) => (
                <li key={value} className="rounded-foundation-control border border-line bg-white p-4">
                  <span className="font-mono text-technical-sm font-semibold text-accent-readable">
                    0{index + 1}
                  </span>
                  <p className="mt-2 text-sm font-semibold leading-6 text-ink">{value}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section id="founder" className="scroll-mt-24 bg-paper">
        <Card className="bg-subtle p-6 sm:p-8 lg:p-10">
          <TechnicalLabel tone="readable">Fundadora</TechnicalLabel>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Fundadora e autoria</h2>
          <h3 className="mt-7 text-2xl font-semibold text-ink">{content.founder.name}</h3>
          <p className="mt-2 font-semibold text-graphite">{content.founder.role}</p>
          <div className="mt-6 grid gap-7 lg:grid-cols-2">
            <div className="grid gap-3 text-sm leading-6 text-graphite sm:text-base sm:leading-7">
              <p>{content.founder.labCreation}</p>
              <p>{content.founder.usmtCreation}</p>
              <p>{content.relationshipToUsmt}</p>
            </div>
            <ul className="grid gap-3 text-sm leading-6 text-graphite sm:text-base sm:leading-7">
              {content.founder.confirmedContext.map((context) => (
                <li key={context} className="flex gap-3">
                  <span aria-hidden="true" className="text-accent-readable">→</span>
                  <span>{context}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </Section>
    </>
  );
}
