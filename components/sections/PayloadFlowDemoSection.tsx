import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FlowNode } from "@/components/ui/FlowNode";
import { RoleBadge } from "@/components/ui/RoleBadge";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homepageEntry } from "@/content/payload-journey-lab";
import { homepageAnchors } from "@/content/site";
import type { OperationalRole } from "@/types/content";

const operationalRoles: OperationalRole[] = [
  "trigger",
  "transform",
  "transport",
  "forward",
  "decide",
  "persist",
  "present",
];

type PayloadFlowDemoSectionProps = {
  homepagePresentation?: boolean;
};

export function PayloadFlowDemoSection({ homepagePresentation = false }: PayloadFlowDemoSectionProps) {
  const { flowDemo } = homepageEntry;

  return (
    <Section id={homepageAnchors.demo} variant="soft" className="border-b border-line">
      <SectionHeader
        eyebrow={flowDemo.eyebrow}
        eyebrowTone="readable"
        title={homepagePresentation ? "Veja como uma intenção atravessa o sistema" : flowDemo.title}
        description={flowDemo.description}
      />

      <div className="mt-8 rounded-foundation-card border border-accent-readable/25 bg-accent-muted/60 p-5 sm:p-6">
        <p className="text-base font-semibold leading-7 text-ink">{flowDemo.context}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Papéis operacionais do flow">
          {operationalRoles.map((role) => (
            <li key={role}>
              <RoleBadge role={role} />
            </li>
          ))}
        </ul>
      </div>

      <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {flowDemo.nodes.map((node) => (
          <li key={node.id} id={node.id} className="scroll-mt-24">
            <FlowNode node={node} />
          </li>
        ))}
      </ol>

      <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-foundation-card border border-border-default bg-surface-card p-6 sm:p-8 lg:flex-row lg:items-center">
        <p className="max-w-2xl text-base font-semibold leading-7 text-ink sm:text-lg">
          {flowDemo.cta.supportingText}
        </p>
        <Button href={flowDemo.cta.action.href} variant="contrast" className="shrink-0">
          {flowDemo.cta.action.label}
          <ArrowDownRight aria-hidden="true" className="size-4" />
        </Button>
      </div>
    </Section>
  );
}
