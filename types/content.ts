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

export type HomepageAnchorKey =
  | "home"
  | "learn"
  | "competencies"
  | "lab"
  | "methods"
  | "ecosystem"
  | "caseStudy"
  | "training"
  | "labLog"
  | "about";

export type HomepageAnchors = Record<HomepageAnchorKey, string>;

export type EntryCta = {
  label: string;
  href: `#${string}`;
  state: "anchor";
};

export type ProblemStepId =
  | "choose-flow"
  | "find-payload"
  | "follow-transformations"
  | "locate-decision";

export type ProblemStep = {
  id: ProblemStepId;
  number: string;
  title: string;
  description: string;
};

export type LearningOutcomeId =
  | "identify-payload"
  | "recognize-representations"
  | "follow-flow"
  | "distinguish-responsibilities"
  | "position-checkpoints"
  | "document-path"
  | "reconstruct-anomalies"
  | "trace-origin";

export type LearningOutcome = {
  id: LearningOutcomeId;
  number: string;
  title: string;
  description: string;
};

export type HomepageEntry = {
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    description: string;
    primaryCta: EntryCta;
    secondaryCta: EntryCta;
    signature: string;
  };
  problem: {
    eyebrow: string;
    title: string;
    description: string;
    supportingText: string;
    steps: ProblemStep[];
    result: string;
    comparison: {
      withoutTracing: { title: string; items: string[] };
      withTracing: { title: string; items: string[] };
    };
  };
  learningOutcomes: {
    eyebrow: string;
    title: string;
    description: string;
    items: LearningOutcome[];
  };
};

export type SiteIdentity = {
  name: string;
  tagline: string;
  title: string;
  shortDescription: string;
  language: string;
  locale: string;
};

export type YouTubeLinks = {
  labLogCurrent: string;
  footerCurrent: string;
  canonical: string | null;
  resolutionStatus: "unresolved" | "resolved";
};

export type SiteLinks = {
  website: string;
  udemy: {
    courseWithCoupon: string;
  };
  youtube: YouTubeLinks;
  linkedin: string | null;
  contact: string | null;
  email: string | null;
};

export type CampaignConfig = {
  id: "udemy-beta";
  state: "active" | "inactive";
  coupon: {
    code: string;
    expiration: string | null;
  };
  messages: {
    heroStatus: string;
    firstCircleTitle: string;
    firstCircleText: string;
  };
};

export type MethodId =
  | "payload-journey"
  | "usmt"
  | "reverse-payload-journey"
  | "operational-payload-path"
  | "track-to-origin";

export type LearningMethod = CardItem & {
  id: MethodId;
  purpose: string;
  currentSection: "metodos";
  futureSection: "methods-and-instruments";
  currentOrder: number;
  futureOrder: number;
};

export type InvestigationStepId = "freeze" | "map" | "detect" | "restore";

export type InvestigationStep = {
  id: InvestigationStepId;
  action: string;
  actionPt: string;
  target: string;
  currentOrder: number;
  futureSection: "investigation-procedure";
};

export type InvestigativePracticeId =
  | "track-mode"
  | "trace-engineer"
  | "software-system-investigation";

export type InvestigativePractice = CardItem & {
  id: InvestigativePracticeId;
  futureSection: "investigative-practice-and-trace-engineer";
};

export type HoraCityEditorialVariant = {
  label: "audited" | "rendered";
  title: string;
  subtitle: string;
  description: string;
  investigation: string;
  renderedAtSprintStart: boolean;
};

export type HoraCityCase = {
  id: "hora-city";
  caseId: string;
  project: string;
  region: string;
  codebase: {
    initial: string;
    expanded: string;
    renderedScale: string;
  };
  anomaly: string;
  payload: string;
  method: "Reverse Payload Journey";
  mission: "Track to Origin";
  authority: string;
  status: string;
  editorialResolution: "unresolved";
  editorialVariants: {
    audited: HoraCityEditorialVariant;
    rendered: HoraCityEditorialVariant;
  };
  stages: Array<{ label: string; status: string }>;
  auditedFacts: CaseFact[];
  renderedMicroFacts: CaseFact[];
  technicalStatus: {
    activeStatus: string;
    validatedFlow: string;
    authority: string;
  };
  technicalRows: Array<{ label: string; value: string }>;
  technicalCopy: {
    caseFileLabel: string;
    commandPrefix: string;
    regionLabel: string;
    statusLabel: string;
    payloadLabel: string;
    validatedFlowLabel: string;
    validatedFlowHeading: string;
    authorityHeading: string;
  };
  renderedNotice: string;
  renderedActions: CtaItem[];
  futureActions: CtaItem[];
};
