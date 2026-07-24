import type {
  CampaignConfig,
  CtaItem,
  ExternalChannel,
  FooterPresentation,
  HomepageAnchors,
  LabLogPresentation,
  NavigationArea,
  PrimaryNavigationItem,
  RouteContinuationMap,
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
    canonical: siteConfig.channels.youtube,
  },
  linkedin: {
    personal: null,
    institutional: null,
  },
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
  { label: "Início", href: "/", area: "home" },
  { label: "Aprender", href: "/learn", area: "learn" },
  { label: "Métodos", href: "/method", area: "methods" },
  { label: "Casos", href: "/cases", area: "cases" },
  { label: "LAB", href: "/lab", area: "lab" },
] as const satisfies readonly PrimaryNavigationItem[];

export const navigationAreas = {
  home: ["/"],
  learn: ["/payload-journey", "/learn"],
  methods: ["/method", "/protocol", "/investigation", "/usmt"],
  cases: ["/cases", "/lablog"],
  lab: ["/lab", "/ecosystem"],
} as const satisfies Record<NavigationArea, readonly string[]>;

export function getNavigationArea(currentPath: string): NavigationArea | null {
  const match = Object.entries(navigationAreas).find(([, paths]) =>
    (paths as readonly string[]).includes(currentPath),
  );
  return (match?.[0] as NavigationArea | undefined) ?? null;
}

export const siteCtas = {
  headerStart: {
    label: "Começar",
    state: "internal",
    href: "/payload-journey",
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
    "A primeira formação do Payload Journey LAB está configurada na Udemy como uma introdução prática a payload, flow e tracing.",
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
  title: "Curso beta como canal de aprofundamento",
  description:
    "A Udemy integra a oferta formativa do LAB sem substituir a progressão, os métodos, o protocolo ou os casos.",
  product: {
    name: "Payload Journey LAB: Siga o flow, entenda o sistema",
    historicalLabel: trainingContent.name,
  },
  learningIntent:
    "A formação introduz uma estratégia para escolher um flow, encontrar o payload, acompanhar transformações e procurar decisões.",
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
  intendedOutcomes: [
    "reconhecer payloads e representações",
    "delimitar uma operação concreta",
    "seguir um flow entre camadas",
    "formular perguntas investigativas iniciais",
  ],
  limits: [
    "não representa formação profissional concluída",
    "não certifica domínio de tracing",
    "não promete autonomia imediata ou empregabilidade",
    "não cobre sistemas distribuídos ou mission-critical como competência validada",
  ],
  connection:
    "O curso oferece uma entrada prática. Os métodos aprofundam instrumentos, o protocolo organiza a investigação e os casos mostram como claims e evidências são delimitados.",
  format: {
    platform: "Udemy",
    state: trainingContent.state,
  },
  primaryCta: {
    label: "Conhecer o curso",
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
  editorialStatus: "current",
  youtubeChannel: siteLinks.youtube.canonical,
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
  groups: [
    {
      title: "Começar",
      links: [
        { label: "Payload Journey", href: "/payload-journey" },
        { label: "Aprender", href: "/learn" },
      ],
    },
    {
      title: "Investigar",
      links: [
        { label: "Métodos", href: "/method" },
        { label: "Protocolo", href: "/protocol" },
        { label: "Software System Investigation", href: "/investigation" },
        { label: "USMT", href: "/usmt" },
      ],
    },
    {
      title: "Evidências",
      links: [
        { label: "Casos", href: "/cases" },
        ...(siteConfig.featureFlags.labLogPublic
          ? [{ label: "LabLog", href: "/lablog" }]
          : []),
      ],
    },
    {
      title: "LAB",
      links: [
        { label: "Sobre o LAB", href: "/lab" },
        { label: "Ecossistema", href: "/ecosystem" },
      ],
    },
    {
      title: "Canais",
      links: [
        {
          label: "Formação na Udemy",
          href: siteLinks.udemy.courseWithCoupon,
          external: true,
        },
        {
          label: "YouTube · LAB Log",
          href: siteLinks.youtube.canonical,
          external: true,
          ariaLabel: "Canal oficial do Payload Journey LAB no YouTube",
        },
      ],
    },
  ],
  legalNotice: "Informações institucionais e canais confirmados do Payload Journey LAB.",
  copyrightSuffix: "Todos os direitos reservados.",
  historicalPolicies: ["Política de privacidade", "Termos de uso"],
  missingLegalRoutes: ["privacy-policy", "terms-of-use"],
} as const satisfies FooterPresentation;

export const externalChannels = [
  {
    id: "udemy",
    label: "Udemy",
    role: "formative-secondary",
    status: "confirmed",
    publicHref: siteLinks.udemy.courseWithCoupon,
  },
  {
    id: "youtube",
    label: "YouTube · LAB Log",
    role: "editorial",
    status: "confirmed",
    publicHref: siteLinks.youtube.canonical,
  },
  {
    id: "linkedin-personal",
    label: "LinkedIn pessoal",
    role: "personal",
    status: "not-configured",
    publicHref: siteLinks.linkedin.personal,
  },
  {
    id: "linkedin-institutional",
    label: "LinkedIn institucional",
    role: "institutional",
    status: "not-configured",
    publicHref: siteLinks.linkedin.institutional,
  },
] as const satisfies readonly ExternalChannel[];

export const routeContinuations = {
  "/payload-journey": [
    { label: "Compreender a USMT", href: "/usmt" },
    { label: "Conhecer os métodos", href: "/method" },
    { label: "Começar a aprender", href: "/learn" },
  ],
  "/learn": [
    { label: "Começar pelo Payload Journey", href: "/payload-journey" },
    { label: "Ver o caso HORA.city", href: "/cases" },
    { label: "Conhecer os métodos", href: "/method" },
  ],
  "/method": [
    { label: "Executar o protocolo", href: "/protocol" },
    { label: "Conhecer Software System Investigation", href: "/investigation" },
    { label: "Começar pelo Payload Journey", href: "/payload-journey" },
    { label: "Compreender a USMT", href: "/usmt" },
  ],
  "/protocol": [
    { label: "Conhecer os métodos", href: "/method" },
    { label: "Conhecer Software System Investigation", href: "/investigation" },
    { label: "Ver o caso HORA.city", href: "/cases" },
  ],
  "/investigation": [
    { label: "Conhecer os métodos", href: "/method" },
    { label: "Executar o protocolo", href: "/protocol" },
    { label: "Começar a aprender", href: "/learn" },
    { label: "Ver o caso HORA.city", href: "/cases" },
  ],
  "/usmt": [
    { label: "Começar pelo Payload Journey", href: "/payload-journey" },
    { label: "Executar o protocolo", href: "/protocol" },
    { label: "Conhecer os métodos", href: "/method" },
  ],
  "/cases": [
    ...(siteConfig.featureFlags.labLogPublic
      ? [{ label: "Acompanhar os LabLogs", href: "/lablog" }]
      : []),
    { label: "Conhecer os métodos", href: "/method" },
    { label: "Executar o protocolo", href: "/protocol" },
  ],
  "/lablog": [
    { label: "Ver o caso HORA.city", href: "/cases" },
    { label: "Conhecer o LAB", href: "/lab" },
    { label: "Executar o protocolo", href: "/protocol" },
  ],
  "/lab": [
    { label: "Conhecer os métodos", href: "/method" },
    { label: "Conhecer Software System Investigation", href: "/investigation" },
    { label: "Ver o caso HORA.city", href: "/cases" },
    { label: "Começar a aprender", href: "/learn" },
  ],
  "/ecosystem": [
    { label: "Começar a aprender", href: "/learn" },
    { label: "Ver o caso HORA.city", href: "/cases" },
    { label: "Conhecer o LAB", href: "/lab" },
  ],
} as const satisfies RouteContinuationMap;
