import type {
  CampaignConfig,
  CtaItem,
  FooterPresentation,
  HomepageAnchors,
  LabLogPresentation,
  NavItem,
  SiteIdentity,
  SiteLinks,
  TrainingPresentation,
} from "@/types/content";
import { siteConfig } from "@/config/site";

const udemyCouponCode = "FOLLOW-THE-FLOW";
const udemyCourseWithCouponUrl =
  `https://www.udemy.com/course/payload-journey-lab-siga-o-flow-entenda-o-sistema/?couponCode=${udemyCouponCode}`;

export const homepageAnchors = {
  home: "inicio",
  learn: "aprender",
  competencies: "competencias",
  learningPath: "trilha",
  demo: "demo",
  usmt: "usmt",
  procedure: "procedimento",
  investigativePractice: "pratica-investigativa",
  lab: "lab",
  methods: "metodos",
  ecosystem: "ecossistema",
  caseStudy: "case-study",
  training: "formacao",
  labLog: "lablog",
  about: "sobre",
} as const satisfies HomepageAnchors;

export const siteIdentity = {
  name: siteConfig.name,
  tagline: siteConfig.tagline,
  title: siteConfig.title,
  shortDescription: siteConfig.description,
  language: siteConfig.language,
  locale: siteConfig.locale,
} as const satisfies SiteIdentity;

export const siteLinks = {
  udemy: {
    courseWithCoupon: udemyCourseWithCouponUrl,
  },
  youtube: {
    labLogCurrent: "https://www.youtube.com/@PayloadJourneyLAB",
    footerCurrent: "https://www.youtube.com/@Lab-Log",
    canonical: null,
    resolutionStatus: "unresolved",
  },
  linkedin: null,
  contact: null,
  email: null,
} as const satisfies SiteLinks;

export const campaignConfig = {
  id: "udemy-beta",
  state: "active",
  coupon: {
    code: udemyCouponCode,
    expiration: null,
  },
  messages: {
    heroStatus: `Comece pela formação na Udemy com o cupom ${udemyCouponCode}.`,
    firstCircleTitle: "Primeiro círculo de estudantes do LAB",
    firstCircleText:
      "O Payload Journey LAB está abrindo sua etapa beta para estudantes, desenvolvedores e pessoas interessadas em compreender sistemas como fluxo. Esta é a porta de entrada para aprender Payload Journey, USMT, Reverse Payload Journey e Track Mode.",
  },
} as const satisfies CampaignConfig;

export const siteNavigation = [
  { label: "Método", href: "/method" },
  { label: "Aprender", href: "/learn" },
  { label: "Casos", href: "/cases" },
  { label: "O LAB", href: "/lab" },
] satisfies NavItem[];

export const siteCtas = {
  headerStart: {
    label: "Começar",
    state: "internal",
    href: "/learn",
  },
  headerTraining: {
    label: "Entrar no LAB",
    state: "external",
    href: siteLinks.udemy.courseWithCoupon,
  },
  heroTraining: {
    label: "Entrar no LAB Beta",
    state: "external",
    href: siteLinks.udemy.courseWithCoupon,
    status: campaignConfig.messages.heroStatus,
  },
  educationTraining: {
    label: "Entrar no LAB Beta",
    state: "external",
    href: siteLinks.udemy.courseWithCoupon,
  },
  finalTraining: {
    label: "Acessar curso beta",
    state: "external",
    href: siteLinks.udemy.courseWithCoupon,
  },
} as const satisfies Record<string, CtaItem>;

export const trainingContent = {
  name: "Formação Beta na Udemy",
  description:
    "A primeira formação do Payload Journey LAB já está disponível na Udemy. Aprenda a seguir o payload através das camadas e desenvolva a visão estrutural necessária para pensar como Trace Engineer.",
  audience: "estudantes, desenvolvedores e pessoas interessadas em compreender sistemas como fluxo",
  state: "beta",
  renderedAction: siteCtas.educationTraining,
  preservedEditorialAction: {
    label: `Começar com cupom ${udemyCouponCode}`,
    state: "external",
    href: siteLinks.udemy.courseWithCoupon,
  } satisfies CtaItem,
} as const;

export const trainingPresentation = {
  id: homepageAnchors.training,
  eyebrow: "Formação fundamental",
  title: "Comece a aprender Payload Tracing",
  description:
    "Uma entrada prática para estudantes e developers que precisam de uma estratégia para compreender codebases grandes através do fluxo da informação.",
  product: {
    name: "Payload Journey LAB: Siga o flow, entenda o sistema",
    historicalLabel: trainingContent.name,
  },
  promise:
    "Aprenda a escolher um flow, encontrar o payload, acompanhar suas transformações e localizar onde o sistema toma decisões.",
  audience: [
    "Estudantes de Engenharia de Software",
    "Developers junior",
    "Developers entrando em codebases desconhecidas",
    "Pessoas trabalhando com sistemas expandidos por IA",
    "Profissionais sem uma estratégia estruturada de tracing",
  ],
  topics: [
    "Fundamentos de payload",
    "Estados e eventos",
    "Camadas e representações",
    "Payload Journey",
    "Estratégia de entrada",
    "Visão estrutural",
    "Tracing de flows",
  ],
  format: {
    platform: "Udemy",
    state: trainingContent.state,
  },
  primaryCta: {
    label: "Entrar na formação",
    state: "external",
    href: siteLinks.udemy.courseWithCoupon,
  },
  secondaryCta: {
    label: "Rever a trilha",
    state: "anchor",
    href: `#${homepageAnchors.learningPath}`,
  },
  campaign: {
    id: campaignConfig.id,
    state: campaignConfig.state,
    coupon: campaignConfig.coupon,
  },
} as const satisfies TrainingPresentation;

export const labLogContent = {
  id: homepageAnchors.labLog,
  eyebrow: "Investigação em movimento",
  title: "Acompanhe o LAB em movimento",
  description:
    "O LabLog registra flows, anomalias, decisões, checkpoints, mappings e o desenvolvimento público dos métodos do LAB.",
  themes: [
    "Payload Journey",
    "Mapping",
    "Checkpoints",
    "HORA.city",
    "Codebases",
    "Anomalias",
    "Track Mode",
    "Investigação de sistemas",
    "Formação",
  ],
  action: {
    label: "Assistir ao LabLog",
    state: "external",
    href: siteLinks.youtube.labLogCurrent,
  },
  editorialStatus: "current",
  youtubeResolution: {
    canonical: siteLinks.youtube.canonical,
    status: siteLinks.youtube.resolutionStatus,
    currentHomepageDestination: siteLinks.youtube.labLogCurrent,
    currentFooterDestination: siteLinks.youtube.footerCurrent,
  },
  historicalPresentation: {
    eyebrow: "LABLOG / YOUTUBE",
    title: "LabLog",
    description:
      "Acompanhe a investigacao em movimento: payloads, anomalias, decisoes, camadas e retorno a origem.",
  },
} as const satisfies LabLogPresentation;

export const footerContent = {
  identity: {
    name: siteIdentity.name,
    tagline: siteIdentity.tagline,
    description:
      "Formação, pesquisa metodológica e investigação aplicada para compreender sistemas seguindo o fluxo da informação.",
  },
  headings: {
    navigation: "Navegação",
    channels: "Canais",
  },
  navigation: [
    { label: "O LAB", href: "/lab" },
    { label: "Métodos", href: "/method" },
    { label: "Study Case", href: "/cases" },
    { label: "Formação", href: "/learn" },
    { label: "LabLog", href: "/lablog" },
  ] satisfies NavItem[],
  channels: [
    { label: "Udemy", href: siteLinks.udemy.courseWithCoupon, external: true },
    { label: "YouTube", href: siteLinks.youtube.footerCurrent, external: true },
  ],
  legalNotice: "Informações institucionais e canais confirmados do Payload Journey LAB.",
  copyrightSuffix: "Todos os direitos reservados.",
  historicalPolicies: ["Política de privacidade", "Termos de uso"],
  missingLegalRoutes: ["privacy-policy", "terms-of-use"],
} as const satisfies FooterPresentation;
