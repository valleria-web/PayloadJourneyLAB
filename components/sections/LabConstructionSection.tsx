import { Card } from "@/components/ui/Card";
import { HighlightPanel } from "@/components/ui/HighlightPanel";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { siteContent } from "@/content/payload-journey-lab";

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="grid gap-4 text-base leading-7 text-graphite">
      {items.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

export function LabConstructionSection() {
  const content = siteContent.lab.construction;

  return (
    <>
      <Section id="lab-construction" variant="soft" className="border-y border-line">
        <SectionHeader eyebrow={content.eyebrow} title={content.title} />
        <div className="mt-7 max-w-4xl">
          <Paragraphs items={content.introduction} />
        </div>

        <div className="mt-14 max-w-4xl">
          <h3 className="text-2xl font-bold text-ink sm:text-3xl">
            {content.currentState.title}
          </h3>
          <div className="mt-6">
            <Paragraphs items={content.currentState.description} />
          </div>
        </div>

        <ol className="mt-9 grid gap-5 lg:grid-cols-3">
          {content.currentState.dimensions.map((dimension) => (
            <li key={dimension.number}>
              <Card className="h-full bg-white p-6">
                <span className="font-mono text-technical-sm font-semibold text-accent-readable">
                  {dimension.number}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-ink">{dimension.title}</h3>
                <p className="mt-3 text-sm leading-6 text-graphite">
                  {dimension.description}
                </p>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="human-ai" className="bg-paper">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <SectionHeader eyebrow={content.humanAi.eyebrow} title={content.humanAi.title} />
          <div className="lg:pt-10">
            <Paragraphs items={content.humanAi.description} />
          </div>
        </div>
      </Section>

      <Section id="pilot" variant="soft" className="border-y border-line">
        <SectionHeader eyebrow={content.pilot.eyebrow} title={content.pilot.title} />
        <p className="mt-6 max-w-4xl text-base leading-7 text-graphite">
          {content.pilot.description}
        </p>

        <div className="mt-12 border-t border-line pt-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <h3 className="text-2xl font-bold text-ink sm:text-3xl">
                {content.earlyFormation.title}
              </h3>
              <div className="mt-5">
                <Paragraphs items={content.earlyFormation.description} />
              </div>
            </div>
            <div>
              <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                {content.earlyFormation.perspectives.map((perspective) => (
                  <div key={perspective.label} className="border-t border-line pt-4">
                    <dt className="font-semibold text-ink">{perspective.label}</dt>
                    <dd className="mt-1 text-sm leading-6 text-graphite">
                      {perspective.description}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 border-l-2 border-accent pl-4 text-sm leading-6 text-graphite">
                {content.earlyFormation.connection}
              </p>
            </div>
          </div>
        </div>

        <ol className="mt-12 grid gap-x-10 gap-y-7 md:grid-cols-2">
          {content.pilot.commitments.map((commitment) => (
            <li key={commitment.number} className="border-t border-line pt-5">
              <div className="flex gap-4">
                <span className="font-mono text-technical-sm font-semibold text-accent-readable">
                  {commitment.number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{commitment.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-graphite">
                    {commitment.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <HighlightPanel className="mt-12 p-6 sm:p-8" variant="technical">
          <h3 className="text-2xl font-bold text-ink">{content.pilot.test.title}</h3>
          <div className="mt-5 max-w-4xl">
            <Paragraphs items={content.pilot.test.description} />
          </div>
        </HighlightPanel>
      </Section>

      <Section id="long-term-vision" className="bg-paper">
        <SectionHeader eyebrow={content.longTerm.eyebrow} title={content.longTerm.title} />
        <div className="mt-7 max-w-4xl">
          <Paragraphs items={content.longTerm.description} />
        </div>

        <ul className="mt-10 grid gap-3 md:grid-cols-2">
          {content.longTerm.outcomes.map((outcome) => (
            <li
              key={outcome}
              className="flex items-start gap-3 rounded-foundation-control border border-line bg-subtle px-5 py-4 text-sm font-semibold leading-6 text-ink"
            >
              <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              {outcome}
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-4xl border-l-2 border-accent pl-5 text-base leading-7 text-graphite">
          {content.longTerm.culturalAmbition}
        </p>
      </Section>

      <Section id="public-commitment" variant="blush" className="border-y border-line">
        <div className="rounded-foundation-card border border-white/15 bg-ink p-7 shadow-foundation-highlight sm:p-10 lg:p-12">
          <TechnicalLabel tone="terminal">{content.publicCommitment.eyebrow}</TechnicalLabel>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            {content.publicCommitment.title}
          </h2>
          <div className="mt-6 grid max-w-4xl gap-4 text-base leading-7 text-white/80">
            {content.publicCommitment.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-8 border-t border-white/15 pt-6 text-xl font-semibold leading-8 text-white sm:text-2xl">
            {content.publicCommitment.closing}
          </p>
        </div>
      </Section>
    </>
  );
}
