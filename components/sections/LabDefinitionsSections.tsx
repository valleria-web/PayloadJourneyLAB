import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  homepageLabDefinitions,
  labDefinitions,
  labDefinitionsHighlights,
  labDefinitionsPageContent,
  labDefinitionsSynthesis,
  type LabDefinitionBlock,
} from "@/content/lab-definitions";

function DefinitionBlocks({ blocks }: { blocks: readonly LabDefinitionBlock[] }) {
  return (
    <div className="space-y-4 text-base leading-7 text-text-muted">
      {blocks.map((block, index) =>
        typeof block === "string" ? (
          <p key={`${index}-${block}`}>{block}</p>
        ) : (
          <ul key={index} className="grid gap-2 pl-1">
            {block.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="text-accent-readable">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ),
      )}
    </div>
  );
}

export function HomeLabDefinitionsSection() {
  return (
    <Section id="lab-definitions" variant="soft" className="border-b border-line">
      <SectionHeader
        eyebrow="Definições do LAB"
        eyebrowTone="readable"
        title="LAB Definitions"
        description="O Payload Journey LAB utiliza um vocabulário preciso para investigar como operações atravessam sistemas de software. Estas definições estabelecem o significado de sistema, caminho, payload, tracing, compreensão e decisão dentro do LAB."
      />
      <dl className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {homepageLabDefinitions.map((definition) => (
          <Card key={definition.id} className="h-full">
            <dt className="text-xl font-bold text-ink">{definition.title}</dt>
            <dd className="mt-4 text-sm leading-6 text-text-muted">{definition.summary}</dd>
          </Card>
        ))}
      </dl>
      <Button href="/lab-definitions" variant="contrast" className="mt-8 w-full sm:w-fit">
        Explorar todas as definições
        <ArrowRight aria-hidden="true" className="size-4" />
      </Button>
    </Section>
  );
}

export function LabDefinitionsPageSections() {
  const content = labDefinitionsPageContent;

  return (
    <>
      <Section id="lab-definitions-glossary" className="border-b border-line">
        <SectionHeader {...content.glossary} />
        <dl className="mt-10 grid max-w-4xl gap-6">
          {labDefinitions.map((definition) => (
            <Card
              key={definition.id}
              id={`definition-${definition.id}`}
              className="scroll-mt-24 sm:p-8"
            >
              <dt>
                <h3 className="text-2xl font-bold text-ink">{definition.title}</h3>
              </dt>
              <dd className="mt-5">
                <DefinitionBlocks blocks={definition.blocks} />
              </dd>
            </Card>
          ))}
        </dl>
      </Section>

      <Section id="lab-definitions-highlights" variant="blush" className="border-b border-line">
        <SectionHeader
          eyebrow={content.highlights.eyebrow}
          eyebrowTone="readable"
          title={content.highlights.title}
        />
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {labDefinitionsHighlights.map((highlight) => (
            <li key={highlight}>
              <Card className="h-full">
                <p className="border-l-2 border-accent-readable pl-4 font-semibold leading-7 text-ink">
                  {highlight}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="lab-definitions-synthesis" className="border-b border-line">
        <SectionHeader
          eyebrow={content.synthesis.eyebrow}
          eyebrowTone="readable"
          title={content.synthesis.title}
        />
        <ol className="mt-10 grid max-w-4xl gap-3">
          {labDefinitionsSynthesis.map((statement, index) => (
            <li
              key={statement}
              className="flex gap-4 rounded-foundation-control border border-border-default bg-surface-card p-4 text-base leading-7 text-ink"
            >
              <span className="font-mono text-sm font-semibold text-accent-readable">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{statement}</span>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
