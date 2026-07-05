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
import type { CardItem, CaseFact, NavItem, Pillar, WhitePaper } from "@/types/content";

export const siteContent = {
  brand: {
    name: "Payload Journey LAB",
    tagline: "Siga o flow. Entenda o sistema.",
  },
  nav: [
    { label: "Início", href: "#inicio" },
    { label: "O LAB", href: "#lab" },
    { label: "Métodos", href: "#metodos" },
    { label: "Case Study", href: "#case-study" },
    { label: "Formação", href: "#formacao" },
    { label: "White Papers", href: "#white-papers" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ] satisfies NavItem[],
  hero: {
    title: "PAYLOAD\nJOURNEY LAB",
    subtitle: "Siga o flow. Entenda o sistema.",
    intro:
      "Laboratório de formação, pesquisa e investigação aplicada dedicado a compreender como payloads, estados, eventos e decisões atravessam sistemas complexos.",
    primaryAction: "Explorar o LAB",
    secondaryAction: "Conhecer o Case Study",
  },
  lab: {
    title: "O LAB",
    intro:
      "O Payload Journey LAB é um laboratório de formação e pesquisa aplicada dedicado ao desenvolvimento de métodos para observar, modelar, rastrear e investigar sistemas de software.",
    pillars: [
      {
        title: "Formação",
        description: "Desenvolvimento de visão estrutural e capacidade de tracing.",
        icon: GraduationCap,
      },
      {
        title: "Pesquisa",
        description: "Criação e documentação de métodos para compreensão de sistemas.",
        icon: BookOpen,
      },
      {
        title: "Investigação aplicada",
        description: "Aplicação dos métodos em codebases e problemas reais.",
        icon: Search,
      },
      {
        title: "Colaboração",
        description: "Construção de pilotos, estudos e parcerias acadêmicas.",
        icon: Share2,
      },
    ] satisfies Pillar[],
  },
  methods: {
    title: "Métodos",
    items: [
      {
        title: "Payload Journey",
        description:
          "Estuda como uma informação nasce, atravessa camadas, sofre transformações e produz efeitos no sistema.",
      },
      {
        title: "Reverse Payload Journey",
        description:
          "Reconstrói o caminho percorrido por um payload a partir de uma anomalia observável. O Operational Payload Path funciona como instrumento operacional desse rastreamento.",
      },
      {
        title: "Track to Origin",
        description:
          "Método investigativo que conduz o rastreamento de volta à origem, à autoridade e ao primeiro ponto de decisão relevante.",
      },
      {
        title: "USMT",
        description:
          "Universal System Modeling Template para modelagem estrutural rigorosa, organizado em 12 elementos que apoiam a leitura de estados, eventos, transições e invariantes.",
      },
    ] satisfies CardItem[],
  },
  ecosystem: {
    title: "Um ecossistema para compreender sistemas",
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
        title: "Payload Journey",
        description:
          "Mapeamento progressivo do percurso de uma informação através do sistema.",
      },
      {
        title: "Reverse Payload Journey",
        description: "Reconstrução reversa da jornada do payload.",
      },
      {
        title: "Track to Origin",
        description:
          "Processo de rastrear uma anomalia até sua origem técnica, semântica ou temporal.",
      },
      {
        title: "Software System Investigation",
        description:
          "Prática de investigação estrutural aplicada a sistemas de software, anomalias observáveis e perda de rastreabilidade.",
      },
    ] satisfies CardItem[],
    flow: ["Track Mode", "Reverse Payload Journey", "Track to Origin", "Evidência", "Restauração"],
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
      "A USMT modela sistemas como estruturas de estados, eventos, transições e invariantes. Ela oferece uma gramática disciplinada para compreender o movimento de payloads.",
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
        description:
          "List every possible system state explicitly. No implicit state should exist.",
      },
      {
        number: "04",
        icon: "⚡",
        title: "Event Enumeration",
        description:
          "Identify every event that can cause transitions between states.",
      },
      {
        number: "05",
        icon: "🟢",
        title: "Allowed transitions",
        description:
          "Define every valid transition between states. What the system is allowed to do.",
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
  whitePapers: {
    title: "White Papers",
    description:
      "Publicações que documentam os conceitos, métodos, experimentos e descobertas desenvolvidos no Payload Journey LAB.",
    items: [
      {
        id: "White Paper 01",
        type: "Placeholder editorial",
        title: "Payload Journey: seguindo a informação através das camadas",
        summary:
          "Estrutura inicial para documentar o método de observação progressiva do payload.",
        date: "Data a definir",
        status: "Em preparação",
      },
      {
        id: "White Paper 02",
        type: "Placeholder editorial",
        title: "Reverse Payload Journey e investigação estrutural de sistemas",
        summary:
          "Base para organizar o método reverso aplicado a anomalias observáveis.",
        date: "Data a definir",
        status: "Em preparação",
      },
      {
        id: "White Paper 03",
        type: "Placeholder editorial",
        title: "Trace Engineer na era dos agentes de IA",
        summary:
          "Ponto de partida para discutir autoria, observabilidade e velocidade de expansão.",
        date: "Data a definir",
        status: "Em preparação",
      },
    ] satisfies WhitePaper[],
  },
  caseStudy: {
    title: "Case Study",
    subtitle: "Saving HORA.city",
    description:
      "Um sistema geolocalizado expandido rapidamente com agentes de IA perdeu parte de sua observabilidade estrutural. O Payload Journey LAB iniciou uma investigação real para rastrear uma anomalia temporal, reconstruir a jornada do payload e restaurar a autoridade dos dados.",
    stages: ["Contexto", "Anomalia", "Investigação", "Aprendizados"],
    facts: [
      { label: "Sistema inicial", value: "aprox. 6 mil linhas" },
      { label: "Expansão", value: "aprox. 40 mil linhas" },
      { label: "Anomalia observada", value: "createdAt" },
      { label: "Payload investigado", value: "HeartCreated" },
      { label: "Método aplicado", value: "Reverse Payload Journey" },
      { label: "Missão", value: "Track to Origin" },
    ] satisfies CaseFact[],
    investigation: {
      caseId: "RPJ-HORA-001",
      anomaly: "createdAt incorreto",
      payload: "HeartCreated",
      state: "Investigação em andamento",
    },
  },
  education: {
    title: "Do método à prática",
    items: [
      {
        title: "Aprender",
        description:
          "Conteúdos, cursos, vídeos e experiências para desenvolver visão estrutural de sistemas.",
      },
      {
        title: "Investigar",
        description:
          "Aplicação de tracing, deep debugging, Reverse Payload Journey e Track to Origin em sistemas reais.",
      },
      {
        title: "Colaborar",
        description:
          "Pilotos com estudantes, universidades, pesquisadores, laboratórios e organizações.",
      },
    ] satisfies CardItem[],
    links: ["Curso", "LabLogs", "Workshops", "Pilotos acadêmicos", "Programa Trace Engineer"],
  },
  about: {
    title: "Sobre o Payload Journey LAB",
    text:
      "Agentes de IA podem expandir sistemas mais rapidamente do que pessoas conseguem compreendê-los. O Payload Journey LAB nasce para investigar essa diferença de velocidade e desenvolver métodos que preservem rastreabilidade, compreensão estrutural e capacidade de decisão.",
    reserved: ["Fundadora", "Pesquisadores", "Colaboradores", "Instituições parceiras"],
  },
  contact: {
    title: "Vamos seguir o flow",
    text:
      "Para colaborações, pilotos acadêmicos, pesquisa aplicada ou desenvolvimento do programa Trace Engineer, entre em contato com o Payload Journey LAB.",
    email: "email@payloadjourneylab.example",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "YouTube", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  footer: {
    policies: ["Política de privacidade", "Termos de uso"],
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
