import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type CtaState = "active" | "future" | "disabled" | "external" | "anchor";

export type CtaItem = {
  label: string;
  state: CtaState;
  href?: string;
  status?: string;
};

export type Pillar = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type CardItem = {
  title: string;
  description: string;
  category?: string;
  status?: string;
  action?: CtaItem;
};

export type WhitePaper = {
  id: string;
  type: string;
  title: string;
  summary: string;
  date: string;
  status: string;
};

export type CaseFact = {
  label: string;
  value: string;
};
