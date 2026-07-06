import {
  ArrowUpRight,
  BookOpen,
  Braces,
  Building2,
  CircleDot,
  ClipboardList,
  GraduationCap,
  Layers3,
  Link2,
  Map,
  Network,
  Orbit,
  Search,
  Share2,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import type { CardItem, CaseFact, CtaItem, NavItem, Pillar, WhitePaper } from "@/types/content";

const futureCta = (label: string, status = "Em preparação"): CtaItem => ({
  label,
  state: "future",
  status,
});

export const siteContent = {
  brand: {
    name: "Payload Journey LAB",
    tagline: "Siga o flow. Entenda o sistema.",
  },
  nav: [
    { label: "Início", href: "#inicio" },
    { label: "O LAB", href: "#lab" },
    { label: "Métodos", href: "#metodos" },
    { label: "Study Case", href: "#case-study" },
    { label: "Formação", href: "#formacao" },
    { label: "White Papers", href: "#white-papers" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ] satisfies NavItem[],
  hero: {
    eyebrow: "Software System Investigation",
    title: "PAYLOAD\nJOURNEY LAB",
    subtitle: "Siga o flow. Entenda o sistema.",
    intro:
      "Laboratório de formação, pesquisa e investigação aplicada dedicado a compreender como payloads, estados, eventos e decisões atravessam sistemas complexos.",
    primaryAction: { label: "Explorar o LAB", href: "#lab", state: "anchor" } satisfies CtaItem,
    secondaryAction: {
      label: "Conhecer o Study Case",
      href: "#case-study",
      state: "anchor",
    } satisfies CtaItem,
  },
  lab: {
    title: "O LAB",
    intro:
      "O Payload Journey LAB desenvolve métodos, artefatos pedagógicos e investigações aplicadas para observar, modelar, rastrear e compreender sistemas de software.",
    complement:
      "O trabalho do LAB combina formação, pesquisa metodológica e aplicação em codebases reais, especialmente em sistemas cuja expansão tornou a compreensão estrutural mais difícil.",
    pillars: [
      {
        title: "Formação",
        description:
          "Desenvolvimento de visão estrutural, capacidade de tracing e compreensão de sistemas através de experiências educacionais.",
        icon: GraduationCap,
      },
      {
        title: "Pesquisa",
        description:
          "Criação, documentação e refinamento de métodos para observar, modelar e investigar sistemas de software.",
        icon: BookOpen,
      },
      {
        title: "Investigação aplicada",
        description: "Aplicação dos métodos do LAB em anomalias, fluxos e codebases reais.",
        icon: Search,
      },
      {
        title: "Colaboração",
        description:
          "Construção de pilotos, estudos e parcerias com estudantes, pesquisadores, instituições e organizações.",
        icon: Share2,
      },
    ] satisfies Pillar[],
  },
  methods: {
    title: "Métodos para compreender sistemas",
    intro:
      "O LAB organiza observação, modelagem e investigação em métodos complementares. Cada método responde a uma necessidade específica, desde seguir uma informação através das camadas até reconstruir a origem de uma anomalia.",
    relation:
      "Payload Journey observa o percurso. A USMT modela a estrutura. Reverse Payload Journey reconstrói a anomalia. Operational Payload Path organiza o Mapping. Track to Origin conduz a investigação até a origem.",
    items: [
      {
        title: "Payload Journey",
        category: "Observação",
        description:
          "Método de observação progressiva que acompanha como uma informação nasce, atravessa camadas, assume diferentes representações e produz efeitos no sistema.",
      },
      {
        title: "USMT",
        category: "Modelagem",
        description:
          "Universal System Modeling Template é um template de modelagem estrutural que organiza fenômenos, estados, eventos, transições permitidas e proibidas, invariantes, camadas, métricas e condições de término.",
        status: "A USMT é composta por 12 elementos metodológicos.",
        action: futureCta("Conhecer a USMT", "Página em desenvolvimento"),
      },
      {
        title: "Reverse Payload Journey",
        category: "Investigação",
        description:
          "Método de investigação que parte de uma anomalia observável e reconstrói, em sentido reverso, o caminho percorrido pelo payload.",
      },
      {
        title: "Operational Payload Path",
        category: "Mapping",
        description:
          "Instrumento operacional de Mapping que organiza zonas, fronteiras, componentes, representações, responsabilidades, autoridades e checkpoints ao longo de uma operação. Ele transforma a arquitetura abstrata em uma rota investigável.",
      },
      {
        title: "Track to Origin",
        category: "Origem e autoridade",
        description:
          "Processo investigativo que conduz o rastreamento até a origem técnica, semântica ou temporal e até o primeiro ponto de decisão relevante.",
      },
    ] satisfies CardItem[],
  },
  ecosystem: {
    title: "Um ecossistema para compreender sistemas",
    intro:
      "Os métodos do LAB fazem parte de uma prática de investigação estrutural orientada por evidências.",
    flow: ["Track Mode", "Reverse Payload Journey", "Track to Origin", "Evidência", "Restauração"],
    flowDescription:
      "O Track Mode suspende mudanças e prioriza observação. O Reverse Payload Journey reconstrói o caminho. Track to Origin conduz a investigação até a origem. A evidência permite restaurar autoridade e compreensão.",
    items: [
      {
        title: "Trace Engineer",
        description:
          "Profissional ou função investigativa dedicada a seguir payloads, estados, eventos e decisões através das camadas de um sistema.",
      },
      {
        title: "Track Mode",
        description:
          "Estado operacional no qual mudanças são suspensas e a prioridade passa a ser observar, delimitar, registrar e compreender.",
      },
      {
        title: "Software System Investigation",
        description:
          "Prática de investigação estrutural de sistemas baseada em tracing, modelagem, evidências e reconstrução de decisões.",
      },
    ] satisfies CardItem[],
    futureArtifacts: [
      {
        title: "One Bit Machine",
        description:
          "Conteúdo preservado para uma área futura de formação, experimentos e artefatos pedagógicos.",
      },
    ] satisfies CardItem[],
  },
  usmt: {
    title: "USMT",
    subtitle: "Universal System Modeling Template",
    description:
      "Conteúdo completo preservado para uma rota específica futura. Na homepage, a USMT aparece apenas como resumo dentro da seção Métodos.",
    action: "Página USMT em preparação",
    elements: [
      "Phenomenon",
      "Delimitation",
      "States",
      "Events",
      "Allowed transitions",
      "Forbidden transitions",
      "Invalidation",
      "Termination",
      "Invariants",
      "Layers",
      "Metrics",
      "Spec",
    ],
    steps: [
      {
        number: "01",
        icon: "🔬",
        title: "Phenomenon description",
        description:
          "Clearly define the phenomenon the system is trying to model. What exists before any technical structure.",
      },
      {
        number: "02",
        icon: "📏",
        title: "Phenomenon delimitation",
        description:
          "Establish the boundaries of the phenomenon. What belongs inside the system and what remains outside the analysis scope.",
      },
      {
        number: "03",
        icon: "⏳",
        title: "State Enumeration",
        description: "List every possible system state explicitly. No implicit state should exist.",
      },
      {
        number: "04",
        icon: "⚡",
        title: "Event Enumeration",
        description: "Identify every event that can cause transitions between states.",
      },
      {
        number: "05",
        icon: "🟢",
        title: "Allowed transitions",
        description: "Define every valid transition between states. What the system is allowed to do.",
      },
      {
        number: "06",
        icon: "🚫",
        title: "Forbidden transitions",
        description:
          "Define impossible or prohibited transitions to prevent undefined or inconsistent behavior.",
      },
      {
        number: "07",
        icon: "🛑",
        title: "Invalidation Conditions",
        description:
          "Define the conditions that invalidate the current model or state. Cases where system logic fails or must be rejected.",
      },
      {
        number: "08",
        icon: "🏁",
        title: "Termination Guarantee",
        description:
          "Define when the system or phenomenon ends, and under which conditions that ending occurs.",
      },
      {
        number: "09",
        icon: "💎",
        title: "Invariants",
        description:
          "Define properties that must remain true regardless of system state or transition.",
      },
      {
        number: "10",
        icon: "🥪",
        title: "Layer separation",
        description:
          "Separate system layers clearly, such as UI, backend, domain, and persistence, to avoid mixed responsibilities.",
      },
      {
        number: "11",
        icon: "📊",
        title: "Verifiable metrics",
        description:
          "Define observable and verifiable metrics that make real system behavior testable.",
      },
      {
        number: "12",
        icon: "📜",
        title: "Spec",
        description:
          "Produce the final formal system specification by consolidating the previous steps into a verifiable model.",
      },
    ],
  },
  caseStudy: {
    title: "Study Case",
    subtitle: "Saving HORA.city",
    description:
      "O HORA.city é um sistema geolocalizado utilizado pelo Payload Journey LAB como caso real de investigação aplicada. Após uma expansão acelerada com agentes de IA, o sistema passou de aproximadamente 6 mil para 40 mil linhas de código e perdeu parte de sua observabilidade estrutural.",
    secondaryDescription:
      "A investigação atual acompanha uma anomalia temporal em createdAt, associada ao payload HeartCreated. O objetivo é reconstruir o caminho operacional, identificar a autoridade temporal e rastrear o primeiro ponto relevante de decisão.",
    stages: [
      { label: "Contexto", status: "Em documentação" },
      { label: "Anomalia", status: "Em investigação" },
      { label: "Investigação", status: "Em andamento" },
      { label: "Aprendizados", status: "Etapa futura" },
    ],
    facts: [
      { label: "Sistema inicial", value: "Aproximadamente 6 mil linhas" },
      { label: "Expansão", value: "Aproximadamente 40 mil linhas" },
      { label: "Anomalia observada", value: "createdAt incorreto" },
      { label: "Payload associado", value: "HeartCreated" },
      { label: "Método aplicado", value: "Reverse Payload Journey" },
      { label: "Missão", value: "Track to Origin" },
    ] satisfies CaseFact[],
    investigation: {
      caseId: "RPJ-HORA-001",
      anomaly: "createdAt incorreto",
      payload: "HeartCreated",
      state: "Investigação em andamento",
    },
    actions: [
      futureCta("Explorar o Study Case", "Em preparação"),
      futureCta("Assistir ao LabLog", "Em preparação"),
    ] satisfies CtaItem[],
  },
  education: {
    title: "Do método à prática",
    intro:
      "O Payload Journey LAB transforma seus métodos em experiências de formação, investigações aplicadas e oportunidades de colaboração.",
    items: [
      {
        title: "Aprender",
        description:
          "Cursos, vídeos, LabLogs e experiências pedagógicas para desenvolver visão estrutural e capacidade de tracing.",
      },
      {
        title: "Investigar",
        description:
          "Aplicação de Payload Journey, Reverse Payload Journey, Operational Payload Path e Track to Origin em sistemas reais.",
      },
      {
        title: "Colaborar",
        description:
          "Pilotos acadêmicos, estudos, pesquisa aplicada e parcerias com estudantes, universidades, laboratórios e organizações.",
      },
    ] satisfies CardItem[],
    links: ["Curso", "LabLogs", "Workshops", "Programa Trace Engineer", "Pilotos acadêmicos"],
  },
  whitePapers: {
    title: "White Papers",
    description:
      "Publicações destinadas a documentar os conceitos, métodos, experimentos e descobertas desenvolvidos no Payload Journey LAB.",
    action: futureCta("Ver todos os White Papers", "Página em desenvolvimento"),
    items: [
      {
        id: "White Paper 01",
        type: "Placeholder editorial",
        title: "Payload Journey: seguindo a informação através das camadas",
        summary:
          "Estrutura inicial para documentar o método de observação progressiva do payload e suas transformações através do sistema.",
        date: "Data a definir",
        status: "Em preparação",
      },
      {
        id: "White Paper 02",
        type: "Placeholder editorial",
        title: "Reverse Payload Journey e investigação estrutural de sistemas",
        summary:
          "Base metodológica para reconstruir o caminho de uma anomalia observável através de payloads, representações e checkpoints.",
        date: "Data a definir",
        status: "Em preparação",
      },
      {
        id: "White Paper 03",
        type: "Placeholder editorial",
        title: "Trace Engineer na era dos agentes de IA",
        summary:
          "Discussão inicial sobre tracing, autoria, observabilidade e preservação da compreensão estrutural em sistemas expandidos por agentes de IA.",
        date: "Data a definir",
        status: "Em preparação",
      },
    ] satisfies WhitePaper[],
  },
  about: {
    title: "Sobre o Payload Journey LAB",
    text:
      "Agentes de IA podem expandir sistemas mais rapidamente do que pessoas conseguem compreendê-los. Quando a velocidade de produção supera a velocidade de compreensão, torna-se mais difícil preservar rastreabilidade, autoridade, observabilidade e capacidade de decisão.",
    secondaryText:
      "O Payload Journey LAB nasce para investigar essa diferença de velocidade e desenvolver métodos que ajudem estudantes, engenheiros e organizações a compreender sistemas complexos antes de modificá-los.",
    vision:
      "A visão do LAB é consolidar uma prática de Software System Investigation que conecte formação, pesquisa metodológica e investigação aplicada.",
    founder: {
      title: "Fundadora",
      paragraphs: [
        "Valéria dos Santos Reiser é a criadora do Payload Journey LAB e dos métodos que estruturam sua prática de investigação aplicada.",
        "Seu trabalho desenvolve formas de observar como payloads, estados, eventos e decisões atravessam sistemas complexos, especialmente em codebases expandidas por agentes de IA",
      ],
    },
    reserved: ["Fundadora", "Pesquisadores", "Colaboradores", "Instituições parceiras"],
  },
  contact: {
    title: "Vamos seguir o flow",
    text:
      "Para colaborações, pilotos acadêmicos, pesquisa aplicada ou desenvolvimento do programa Trace Engineer, entre em contato com o Payload Journey LAB.",
    action: futureCta("Contato em configuração", "Contato em configuração"),
    channels: [
      futureCta("LinkedIn", "Canal em configuração"),
      futureCta("YouTube", "Canal em configuração"),
      futureCta("GitHub", "Canal em configuração"),
    ] satisfies CtaItem[],
  },
  footer: {
    policies: ["Política de privacidade", "Termos de uso"],
  },
  preservedFutureContent: {
    futureRoutes: [
      "/usmt",
      "/methods/payload-journey",
      "/methods/reverse-payload-journey",
      "/methods/operational-payload-path",
      "/methods/track-to-origin",
      "/case-study/hora-city",
      "/white-papers",
    ],
    nonRenderedAreas: [
      "Detalhamento completo dos 12 elementos da USMT",
      "One Bit Machine",
      "Pesquisadores e instituições parceiras",
      "Páginas futuras de métodos",
      "Páginas futuras de White Papers",
      "Página completa do Study Case",
    ],
  },
  icons: {
    ArrowUpRight,
    Braces,
    Building2,
    CircleDot,
    ClipboardList,
    Layers3,
    Link2,
    Map,
    Network,
    Orbit,
    ShieldCheck,
    Workflow,
  },
};
