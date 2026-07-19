import { Card } from "@/components/ui/Card";
import { RoleBadge } from "@/components/ui/RoleBadge";
import type { PayloadFlowNode } from "@/types/content";

export type FlowNodeProps = {
  node: PayloadFlowNode;
};

export function FlowNode({ node }: FlowNodeProps) {
  const isDecision = node.role === "decide";

  return (
    <Card
      className={`h-full ${
        isDecision
          ? "border-role-decide-surface bg-role-decide-surface/10 shadow-foundation-card-cta"
          : "bg-surface-card/90"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-technical-lg font-semibold text-accent-readable">
          {node.number}
        </span>
        <RoleBadge role={node.role} />
      </div>
      <h3 className="mt-5 text-xl font-bold leading-7 text-ink">{node.label}</h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-text-primary">
        {node.representation}
      </p>
      <p className="mt-4 text-sm leading-6 text-text-muted">{node.responsibility}</p>
      <div className="mt-5 border-t border-border-default pt-4">
        <p className="font-mono text-technical-sm font-semibold uppercase tracking-technical text-accent-readable">
          Pergunta investigativa
        </p>
        <p className="mt-2 text-sm font-medium leading-6 text-ink">
          {node.investigativeQuestion}
        </p>
      </div>
    </Card>
  );
}
