import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type CtaState = "active" | "future" | "disabled" | "external" | "anchor" | "internal";

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

export type InstitutionalPillarId =
  | "education"
  | "methodological-research"
  | "applied-investigation"
  | "collaboration";

export type InstitutionalPillar = {
  id: InstitutionalPillarId;
  title: string;
  description: string;
  activities: string[];
  audience?: string[];
  result: string;
  icon: LucideIcon;
  cta?: CtaItem;
};

export type LabPresentation = {
  eyebrow: string;
  title: string;
  description: string;
  originPresentation: {
    eyebrow: string;
    title: string;
    description: string;
  };
  origin: string;
  motivatingProblem: string;
  mission: string;
  principle: string;
  vision: string;
  connectionToInvestigativePractice: string;
  values: string[];
  founder: FounderProfile;
  cta?: EntryCta;
};

export type InstitutionalEcosystemPresentation = {
  eyebrow: string;
  title: string;
  description: string;
  pillars: InstitutionalPillar[];
  collaborationNote: string;
  collaborationCta?: CtaItem;
  historicalPresentation: {
    title: string;
    intro: string;
    institutionalTransition: string;
  };
};

export type LabLogPresentation = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  themes: string[];
  featuredContent?: Array<{
    title: string;
    description: string;
    href: string;
  }>;
  action: CtaItem & { state: "external"; href: string };
  editorialStatus: "current";
  youtubeResolution: {
    canonical: string | null;
    status: "unresolved" | "resolved";
    currentHomepageDestination: string;
    currentFooterDestination: string;
  };
  historicalPresentation: {
    eyebrow: string;
    title: string;
    description: string;
  };
};

export type FounderProfile = {
  name: string;
  biography: string[];
  professionalLink: string | null;
};

export type FinalCtaPresentation = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta: CtaItem & { state: "external"; href: string };
  secondaryCta: EntryCta;
  campaignNote?: string;
  historicalPresentation: {
    label: string;
    title: string;
    text: string;
    action: CtaItem;
  };
};

export type FooterPresentation = {
  identity: {
    name: string;
    tagline: string;
    description: string;
  };
  headings: {
    navigation: string;
    channels: string;
  };
  navigation: NavItem[];
  channels: Array<{
    label: string;
    href: string;
    external: boolean;
  }>;
  legalNotice: string;
  copyrightSuffix: string;
  historicalPolicies: string[];
  missingLegalRoutes: string[];
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
  | "learningPath"
  | "demo"
  | "usmt"
  | "procedure"
  | "investigativePractice"
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
  href: string;
  state: "anchor" | "internal";
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

export type LearningPathStepId =
  | "understand-payload"
  | "payload-journey"
  | "reverse-payload-journey"
  | "track-to-origin";

export type LearningPathStep = {
  id: LearningPathStepId;
  number: string;
  title: string;
  description: string;
  concepts: string[];
  result: string;
};

export type OperationalRole =
  | "trigger"
  | "transform"
  | "transport"
  | "forward"
  | "decide"
  | "persist"
  | "present";

export type PayloadFlowNodeId =
  | "interaction"
  | "structured-payload"
  | "request"
  | "api"
  | "domain"
  | "repository"
  | "response"
  | "projection"
  | "ui";

export type PayloadFlowNode = {
  id: PayloadFlowNodeId;
  number: string;
  label: string;
  representation: string;
  responsibility: string;
  role: OperationalRole;
  investigativeQuestion: string;
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
  learningPath: {
    eyebrow: string;
    title: string;
    description: string;
    steps: LearningPathStep[];
  };
  flowDemo: {
    eyebrow: string;
    title: string;
    description: string;
    context: string;
    nodes: PayloadFlowNode[];
    cta: {
      supportingText: string;
      action: EntryCta;
    };
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

export type TrainingPresentation = {
  id: "formacao";
  eyebrow: string;
  title: string;
  description: string;
  product: {
    name: string;
    historicalLabel: string;
  };
  promise: string;
  audience: string[];
  topics: string[];
  format: {
    platform: "Udemy";
    state: "beta";
  };
  primaryCta: CtaItem & { state: "external"; href: string };
  secondaryCta: EntryCta;
  campaign: {
    id: CampaignConfig["id"];
    state: CampaignConfig["state"];
    coupon: CampaignConfig["coupon"];
  };
};

export type UsmtElementId =
  | "description"
  | "delimitation"
  | "states"
  | "events"
  | "allowed-transitions"
  | "forbidden-transitions"
  | "invalidation"
  | "termination"
  | "invariants"
  | "layers"
  | "metrics"
  | "spec";

export type UsmtElement = {
  id: UsmtElementId;
  number: string;
  title: string;
  englishTerm: string;
  description: string;
};

export type UsmtLensId = "where" | "how" | "logic" | "safe";

export type UsmtLens = {
  id: UsmtLensId;
  label: "WHERE" | "HOW" | "LOGIC" | "SAFE";
  action: string;
  question: string;
  description: string;
  observes: string[];
};

export type UsmtConnectionStepId =
  | "expected-model"
  | "observed-flow"
  | "evidence"
  | "investigation";

export type UsmtConnectionStep = {
  id: UsmtConnectionStepId;
  number: string;
  label: string;
  description: string;
};

export type UsmtPresentation = {
  id: "usmt";
  eyebrow: string;
  title: string;
  lead: string;
  provenance: string;
  description: string;
  centralQuestion: string;
  centralAnswer: string;
  indexableContext: string;
  elementsHeading: string;
  elementsDescription: string;
  elements: UsmtElement[];
  lensesHeading: string;
  lensesDescription: string;
  lenses: UsmtLens[];
  connection: {
    title: string;
    description: string;
    conclusion: string;
    steps: UsmtConnectionStep[];
  };
  protocolTransition: {
    eyebrow: string;
    title: string;
    description: string;
    steps: ["Congelar", "Mapear", "Detectar", "Restaurar"];
  };
  deepDiveCta: (CtaItem & { href: string }) | null;
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
  whenToUse: string;
  question: string;
  result: string;
  relatedSteps: InvestigationStepId[];
  relationship: string;
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
  number: string;
  question: string;
  description: string;
  inputs: string[];
  activities: string[];
  result: string;
  evidence: string;
  relatedMethods: MethodId[];
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

export type InvestigativePracticePresentation = {
  eyebrow: string;
  title: string;
  description: string;
  progression: string[];
  trackMode: {
    id: "track-mode";
    title: "Track Mode";
    definition: string;
    principle: string;
    actions: string[];
  };
  traceEngineer: {
    id: "trace-engineer";
    title: "Trace Engineer";
    definition: string;
    context: string;
    responsibilities: string[];
  };
  softwareSystemInvestigation: {
    id: "software-system-investigation";
    title: "Software System Investigation";
    definition: string;
    context: string;
    elements: string[];
    result: string;
  };
  centralConcepts: {
    evidence: string;
    authority: string;
    restoration: string;
    observationBeforeModification: string;
  };
  cta: {
    supportingText: string;
    action: EntryCta;
  };
};

export type HoraCityEditorialVariant = {
  label: "audited" | "rendered";
  title: string;
  subtitle: string;
  description: string;
  investigation: string;
  renderedAtSprintStart: boolean;
};

export type HoraCityPublicSectionId =
  | "context"
  | "anomaly"
  | "selected-flow"
  | "payload"
  | "investigation"
  | "evidence"
  | "current-status";

export type HoraCityPublicNarrative = {
  sourceStrategy: "shared-confirmed-facts";
  eyebrow: string;
  transition: string;
  title: string;
  introduction: string;
  mainMessage: string;
  sections: Array<{
    id: HoraCityPublicSectionId;
    number: string;
    title: string;
    description: string;
  }>;
  technicalFacts: CaseFact[];
  primaryCta: EntryCta;
  secondaryCta: EntryCta;
  omissions: {
    unconfirmed: string[];
    editorialDivergence: string[];
  };
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
  publicNarrative: HoraCityPublicNarrative;
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
