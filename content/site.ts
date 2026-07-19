import type {
  CampaignConfig,
  CtaItem,
  HomepageAnchors,
  NavItem,
  SiteIdentity,
  SiteLinks,
} from "@/types/content";

const udemyCouponCode = "FOLLOW-THE-FLOW";
const udemyCourseWithCouponUrl =
  `https://www.udemy.com/course/payload-journey-lab-siga-o-flow-entenda-o-sistema/?couponCode=${udemyCouponCode}`;

export const homepageAnchors = {
  home: "inicio",
  learn: "aprender",
  competencies: "competencias",
  lab: "lab",
  methods: "metodos",
  ecosystem: "ecossistema",
  caseStudy: "case-study",
  training: "formacao",
  labLog: "lablog",
  about: "sobre",
} as const satisfies HomepageAnchors;

export const siteIdentity = {
  name: "Payload Journey LAB",
  tagline: "Siga o flow. Entenda o sistema.",
  title: "Payload Journey LAB — Siga o flow. Entenda o sistema.",
  shortDescription:
    "Laboratório de formação, pesquisa e investigação aplicada dedicado a compreender como payloads, estados, eventos e decisões atravessam sistemas complexos.",
  language: "pt-BR",
  locale: "pt_BR",
} as const satisfies SiteIdentity;

export const siteLinks = {
  website: "https://payloadjourneylab.com",
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
  { label: "Aprender", href: `#${homepageAnchors.learn}` },
  { label: "Formação", href: `#${homepageAnchors.training}` },
  { label: "Caso real", href: `#${homepageAnchors.caseStudy}` },
  { label: "Métodos", href: `#${homepageAnchors.methods}` },
  { label: "O LAB", href: `#${homepageAnchors.lab}` },
] satisfies NavItem[];

export const siteCtas = {
  headerStart: {
    label: "Começar",
    state: "anchor",
    href: `#${homepageAnchors.learn}`,
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

export const labLogContent = {
  id: homepageAnchors.labLog,
  eyebrow: "LABLOG / YOUTUBE",
  title: "LabLog",
  description:
    "Acompanhe a investigacao em movimento: payloads, anomalias, decisoes, camadas e retorno a origem.",
  action: {
    label: "Assistir ao LabLog",
    state: "external",
    href: siteLinks.youtube.labLogCurrent,
  } satisfies CtaItem,
  youtubeResolution: {
    canonical: siteLinks.youtube.canonical,
    status: siteLinks.youtube.resolutionStatus,
    currentHomepageDestination: siteLinks.youtube.labLogCurrent,
    currentFooterDestination: siteLinks.youtube.footerCurrent,
  },
} as const;

export const footerContent = {
  description:
    "Payload Journey LAB - formacao, pesquisa e investigacao aplicada em sistemas complexos.",
  headings: {
    navigation: "Navegacao",
    links: "Links",
    legal: "Legal",
  },
  navigation: [
    { label: "O LAB", href: `#${homepageAnchors.lab}` },
    { label: "Métodos", href: `#${homepageAnchors.methods}` },
    { label: "Study Case", href: `#${homepageAnchors.caseStudy}` },
    { label: "Formação", href: `#${homepageAnchors.training}` },
    { label: "LabLog", href: `#${homepageAnchors.labLog}` },
  ] satisfies NavItem[],
  links: [
    { label: "Udemy", href: siteLinks.udemy.courseWithCoupon, external: true },
    { label: "LabLog", href: `#${homepageAnchors.labLog}`, external: false },
    { label: "YouTube", href: siteLinks.youtube.footerCurrent, external: true },
  ],
  policies: ["Política de privacidade", "Termos de uso"],
  copyrightSuffix: "Todos os direitos reservados.",
} as const;
