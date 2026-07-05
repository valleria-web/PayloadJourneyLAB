import type { LucideIcon } from "lucide-react";

type IconWrapperProps = {
  icon: LucideIcon;
};

export function IconWrapper({ icon: Icon }: IconWrapperProps) {
  return (
    <span className="flex size-10 items-center justify-center border border-line bg-subtle text-ink">
      <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
    </span>
  );
}
