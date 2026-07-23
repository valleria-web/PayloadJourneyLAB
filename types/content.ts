import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type CanonicalRoutePath =
  | "/"
  | "/payload-journey"
  | "/learn"
  | "/cases"
  | "/usmt"
  | "/method"
  | "/protocol"
  | "/investigation"
  | "/lab"
  | "/ecosystem"
  | "/lablog";

export type NavigationArea = "home" | "learn" | "methods" | "cases" | "lab";

export type PrimaryNavigationItem = {
  label: string;
  href: CanonicalRoutePath;
  area: NavigationArea;
};

export type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FooterGroup = {
  title: string;
  links: FooterLink[];
};

export type ChannelStatus = "confirmed" | "unresolved" | "not-configured";

export type ExternalChannel = {
  id: "udemy" | "youtube" | "linkedin-personal" | "linkedin-institutional";
  label: string;
  role: "formative-secondary" | "editorial" | "personal" | "institutional";
  status: ChannelStatus;
  publicHref: string | null;
  candidates?: readonly string[];
};

export type RouteContinuationMap = Record<
  Exclude<CanonicalRoutePath, "/">,
  readonly NavItem[]
>;

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

export type LabStatus =
  | "Disponível"
  | "Documentado"
  | "Em investigação"
  | "Em construção"
  | "Evidência parcial"
  | "Ainda não validado"
  | "Direção futura";

export type LabStatusItem = {
  title: string;
  description: string;
  status: LabStatus;
  evidence?: string;
};

export type LabPresentation = {
  hero: {
    eyebrow: string;
    title: string;
    description: string[];
    primaryCta: EntryCta;
    secondaryCta: EntryCta;
  };
  mission: {
    eyebrow: string;
    title: string;
    thesis: string[];
    description: string[];
    principle: string;
  };
  origin: {
    eyebrow: string;
    title: string;
    description: string[];
  };
  methods: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ title: string; question: string }>;
    cta: EntryCta;
  };
  humanAi: {
    eyebrow: string;
    title: string;
    description: string[];
    principle: string;
  };
  founder: {
    eyebrow: string;
    title: string;
    name: string;
    biography: string[];
    professionalLink: string | null;
  };
  currentState: {
    eyebrow: string;
    title: string;
    description: string;
    items: LabStatusItem[];
  };
  construction: {
    eyebrow: string;
    title: string;
    description: string[];
    items: LabStatusItem[];
  };
  pilot: {
    eyebrow: string;
    title: string;
    description: string[];
    commitments: Array<LabStatusItem & { number: string }>;
    test: {
      title: string;
      description: string;
      initialEvidence: string;
      transferablePilot: string;
      status: LabStatus;
    };
  };
  traceEngineer: {
    eyebrow: string;
    title: string;
    definition: string;
    status: LabStatus;
    caveats: string[];
    competencies: string[];
    cta: EntryCta;
  };
  longTerm: {
    eyebrow: string;
    title: string;
    description: string[];
    outcomes: string[];
    future: {
      title: string;
      description: string;
      status: LabStatus;
      topics: string[];
    };
  };
  publicCommitment: {
    eyebrow: string;
    title: string;
    description: string[];
    closing: string;
  };
  continuation: Array<{ label: string; href: string }>;
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
  action?: CtaItem & { state: "external"; href: string };
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
  primaryCta: CtaItem & { href: string };
  secondaryCta: CtaItem & { href: string };
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
  groups: FooterGroup[];
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

export type LearningStatus =
  | "Conteúdo disponível"
  | "Documentado"
  | "Aplicado em caso"
  | "Investigação em andamento"
  | "Aprofundamento em construção"
  | "Direção futura de pesquisa e formação";

export type LearningPresentation = {
  hero: {
    eyebrow: string;
    title: string;
    description: string[];
    primaryCta: EntryCta;
    secondaryCta: EntryCta;
  };
  flow: {
    eyebrow: string;
    title: string;
    description: string[];
    chain: string[];
    questions: string;
  };
  progression: {
    eyebrow: string;
    title: string;
    description: string;
    levels: Array<{
      id: string;
      number: string;
      title: string;
      status: LearningStatus;
      objective: string;
      elements: string[];
      capabilities: string[];
      claim: string;
      limit?: string;
    }>;
  };
  effort: {
    eyebrow: string;
    title: string;
    description: string[];
    requirements: string[];
    contributions: string[];
    principle: string;
  };
  foundations: {
    eyebrow: string;
    title: string;
    description: string[];
    items: string[];
  };
  available: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
      learning: string;
      href: string;
      status: LearningStatus;
    }>;
  };
  initialPath: {
    eyebrow: string;
    title: string;
    description: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
      href: string;
    }>;
  };
  cases: {
    eyebrow: string;
    title: string;
    description: string[];
    practices: string[];
    status: LearningStatus;
    cta: EntryCta;
  };
  evidence: {
    eyebrow: string;
    title: string;
    description: string;
    demonstrated: string[];
    investigate: string[];
  };
  continuation: Array<{ label: string; href: string }>;
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
  linkedin: {
    personal: string | null;
    institutional: string | null;
  };
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
  learningIntent: string;
  audience: string[];
  topics: string[];
  intendedOutcomes: string[];
  limits: string[];
  connection: string;
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

export type MethodStatus =
  | "Página canônica disponível"
  | "Documentado"
  | "Em desenvolvimento";

export type MethodClaimKind =
  | "Definição autoral"
  | "Estado documentado"
  | "Em desenvolvimento"
  | "Direção futura";

export type LearningMethod = CardItem & {
  id: MethodId;
  definition: string;
  purpose: string;
  startingPoint: string;
  whenToUse: string;
  question: string;
  result: string;
  status: MethodStatus;
  limits: string[];
  evidence: string;
  canonicalHref?: "/payload-journey" | "/usmt";
  claimKind: MethodClaimKind;
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
  objective: string;
  description: string;
  inputs: string[];
  activities: string[];
  result: string;
  evidence: string;
  possibleEvidence: string[];
  exitCriterion: string;
  relatedMethods: MethodId[];
  currentOrder: number;
  futureSection: "investigation-procedure";
};

export type MethodPracticeHero = {
  id: string;
  eyebrow: string;
  title: string;
  description: string[];
  primaryCta: EntryCta;
  secondaryCta: EntryCta;
};

export type MethodPagePresentation = {
  hero: MethodPracticeHero;
  taxonomy: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ term: string; role: string; description: string }>;
  };
  supportingInstruments: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      question: string;
      result: string;
      status: "Documentado" | "Não localizado";
      evidence: string;
    }>;
  };
  relationship: {
    eyebrow: string;
    title: string;
    description: string;
    steps: Array<{ title: string; action: string }>;
  };
  limits: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  continuation: Array<{ label: string; href: string }>;
};

export type ProtocolArtifactStatus =
  | "Documentado"
  | "Em uso no caso"
  | "Em construção"
  | "Não localizado";

export type ProtocolPagePresentation = {
  hero: MethodPracticeHero;
  minimumInputs: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  };
  iteration: {
    eyebrow: string;
    title: string;
    description: string;
    returns: Array<{ from: string; to: string; reason: string }>;
  };
  artifacts: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
      status: ProtocolArtifactStatus;
      evidence: string;
    }>;
  };
  limits: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  continuation: Array<{ label: string; href: string }>;
};

export type InvestigationPagePresentation = {
  hero: MethodPracticeHero;
  characteristics: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  };
  trackMode: {
    id: "track-mode";
    title: "Track Mode";
    definition: string;
    principle: string;
    actions: string[];
  };
  traceEngineering: {
    id: "trace-engineering";
    title: "Trace Engineering";
    definition: string;
    status: "Capacidades em desenvolvimento";
    capabilities: string[];
  };
  traceEngineer: {
    id: "trace-engineer";
    title: "Trace Engineer";
    definition: string;
    status: "Função e perfil investigativo em desenvolvimento";
    responsibilities: string[];
    caveats: string[];
  };
  softwareSystemInvestigation: {
    id: "software-system-investigation";
    title: "Software System Investigation";
    definition: string;
    status: "Prática estruturada autoral";
  };
  questions: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  relations: {
    eyebrow: string;
    title: string;
    principle: string;
    items: Array<{ title: string; description: string }>;
  };
  authority: {
    eyebrow: string;
    title: string;
    description: string[];
    principles: string[];
  };
  limits: {
    eyebrow: string;
    title: string;
    current: string[];
    future: {
      status: "Direção futura de pesquisa e formação";
      description: string;
      topics: string[];
    };
  };
  continuation: Array<{ label: string; href: string }>;
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

export type PublicCaseStatus =
  | "Delimitado"
  | "Congelado"
  | "Em mapeamento"
  | "Em detecção"
  | "Divergência localizada"
  | "Comportamento explicado"
  | "Restauração proposta"
  | "Restauração implementada"
  | "Restauração validada"
  | "Suspenso"
  | "Encerrado sem conclusão"
  | "Encerrado";

export type PublicEvidenceStatus =
  | "localizada"
  | "verificada"
  | "parcialmente verificada"
  | "derivada"
  | "referenciada"
  | "não localizada"
  | "não publicável"
  | "substituída"
  | "invalidada";

export type PublicEvidence = {
  id: string;
  caseId: string;
  type: string;
  title: string;
  description: string;
  source: string;
  observedAt: string;
  status: PublicEvidenceStatus;
  access: string;
  supports: readonly string[];
  limitations: readonly string[];
  href?: string;
};

export type PublicCaseRecord = {
  id: string;
  title: string;
  system: string;
  origin: string;
  flow: string;
  operation: string;
  question: string;
  anomaly: string;
  expectedBehavior: string;
  observedBehavior: string;
  status: PublicCaseStatus;
  protocolStage: string;
  openedAt: string;
  updatedAt: string;
  methods: readonly string[];
  components: readonly string[];
  evidenceIds: readonly string[];
  confirmedFacts: readonly string[];
  hypotheses: readonly string[];
  unknowns: readonly string[];
  limitations: readonly string[];
  restoration: string;
  validation: string;
  nextSteps: readonly string[];
  authorizedClaims: readonly string[];
  prohibitedClaims: readonly string[];
};

export type LabLogEntry = {
  id: string;
  date: string;
  title: string;
  caseId?: string;
  entryType: string;
  question: string;
  workPerformed: readonly string[];
  evidenceIds: readonly string[];
  unknowns: readonly string[];
  nextSteps: readonly string[];
  author: string;
  aiAssistance: string;
};
