import type { LucideIcon } from "lucide-react";

type IconWrapperProps = {
  icon: LucideIcon;
};

export function IconWrapper({ icon: Icon }: IconWrapperProps) {
  return (
    <span className="flex size-10 items-center justify-center rounded-lg border border-line bg-blush/45 text-pink">
      <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
    </span>
  );
}
