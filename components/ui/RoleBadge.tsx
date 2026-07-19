import type { OperationalRole } from "@/types/content";

export type RoleBadgeProps = {
  role: OperationalRole;
  className?: string;
};

const roleLabels = {
  transport: "Transporta",
  transform: "Transforma",
  decide: "Decide",
  present: "Apresenta",
} satisfies Record<OperationalRole, string>;

const roleStyles = {
  transport: "border-role-transport/25 bg-role-transport-surface text-role-transport",
  transform: "border-role-transform/25 bg-role-transform-surface text-role-transform",
  decide: "border-role-decide/20 bg-role-decide-surface text-role-decide",
  present: "border-role-present/20 bg-role-present-surface text-role-present",
} satisfies Record<OperationalRole, string>;

export function RoleBadge({ role, className = "" }: RoleBadgeProps) {
  return (
    <span
      className={`inline-flex min-h-7 items-center rounded-full border px-3 py-1 font-mono text-technical-sm font-semibold uppercase tracking-technical ${roleStyles[role]} ${className}`}
    >
      {roleLabels[role]}
    </span>
  );
}
