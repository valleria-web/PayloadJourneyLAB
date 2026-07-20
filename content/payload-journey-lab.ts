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
import { horaCityCase } from "@/content/hora-city";
import { siteConfig } from "@/config/site";
import {
  ecosystemFlow,
  ecosystemFlowDescription,
  investigationCycle,
  investigationCycleSectionContent,
  investigativePractice,
  investigativePracticePresentation,
  methodsContent,
  methodsSectionContent,
} from "@/content/methods";
import {
  campaignConfig,
  footerContent,
  homepageAnchors,
  labLogContent,
  siteCtas,
  siteIdentity,
  siteLinks,
  siteNavigation,
  trainingContent,
} from "@/content/site";
import type {
  CardItem,
  CtaItem,
  FinalCtaPresentation,
  HomepageEntry,
  InstitutionalEcosystemPresentation,
  LabPresentation,
  Pillar,
  WhitePaper,
} from "@/types/content";

const futureCta = (label: string, status = "Em preparação"): CtaItem => ({
  label,
  state: "future",
  status,
});

export const homepageEntry = {
  hero: {
    eyebrow: "Payload Tracing para estudantes e developers",
    title: "Aprenda a seguir o payload",
    lead: "Reduza uma codebase grande a um único flow investigável.",
    description:
      "Aprenda a acompanhar como a informação nasce, atravessa camadas, muda de representação e chega aos pontos onde o sistema toma decisões.",
    primaryCta: {
      label: "Ver o payload atravessar o sistema",
      state: "anchor",
      href: `#${homepageAnchors.demo}`,
    },
    secondaryCta: {
      label: "Explorar a trilha",
      state: "internal",
      href: `/learn#${homepageAnchors.learningPath}`,
    },
    signature: siteIdentity.tagline,
  },
  problem: {
    eyebrow: "Estratégia de entrada",
    title: "Não abra arquivos aleatoriamente",
    description: "Uma codebase grande não precisa ser compreendida inteira de uma vez.",
    supportingText:
      "Quando não existe uma estratégia de entrada, cada arquivo parece importante. O payload oferece um ponto concreto para começar.",
    steps: [
      {
        id: "choose-flow",
        number: "01",
        title: "Escolha um flow",
        description: "Comece por uma interação concreta que possa ser observada.",
      },
      {
        id: "find-payload",
        number: "02",
        title: "Encontre o payload",
        description:
          "Identifique a informação produzida ou transportada por essa interação.",
      },
      {
        id: "follow-transformations",
        number: "03",
        title: "Siga as transformações",
        description:
          "Observe como a informação muda de forma e significado entre as camadas.",
      },
      {
        id: "locate-decision",
        number: "04",
        title: "Localize a decisão",
        description:
          "Descubra onde o sistema interpreta, valida ou altera o comportamento.",
      },
    ],
    result: "Transforme milhares de arquivos numa rota investigável.",
    comparison: {
      withoutTracing: {
        title: "Sem tracing",
        items: [
          "abrir arquivos aleatoriamente",
          "procurar pelo sistema inteiro",
          "formular hipóteses vagas",
          "modificar antes de compreender",
        ],
      },
      withTracing: {
        title: "Com tracing",
        items: [
          "selecionar um flow",
          "seguir um payload",
          "produzir checkpoints",
          "observar antes de modificar",
        ],
      },
    },
  },
  learningOutcomes: {
    eyebrow: "O que você aprenderá",
    title: "Uma estratégia para compreender sistemas pelo flow",
    description:
      "O Payload Journey LAB desenvolve a capacidade de seguir a informação através do sistema, reconhecer transformações e localizar os pontos onde decisões realmente acontecem.",
    items: [
      {
        id: "identify-payload",
        number: "01",
        title: "Identificar o payload",
        description:
          "Reconhecer a informação produzida por uma interação, evento ou operação.",
      },
      {
        id: "recognize-representations",
        number: "02",
        title: "Reconhecer representações",
        description:
          "Observar as diferentes formas assumidas pela mesma semântica ao atravessar as camadas.",
      },
      {
        id: "follow-flow",
        number: "03",
        title: "Seguir o flow",
        description:
          "Reconstruir o caminho operacional entre interface, aplicação, domínio, persistência e resposta.",
      },
      {
        id: "distinguish-responsibilities",
        number: "04",
        title: "Distinguir responsabilidades",
        description: "Identificar quem transporta, quem transforma e quem decide.",
      },
      {
        id: "position-checkpoints",
        number: "05",
        title: "Posicionar checkpoints",
        description:
          "Escolher pontos de observação capazes de produzir evidências úteis.",
      },
      {
        id: "document-path",
        number: "06",
        title: "Documentar o caminho",
        description:
          "Registrar componentes, representações, operações e fronteiras do flow.",
      },
      {
        id: "reconstruct-anomalies",
        number: "07",
        title: "Reconstruir anomalias",
        description:
          "Partir de um comportamento observável e rastrear onde surgiu a divergência.",
      },
      {
        id: "trace-origin",
        number: "08",
        title: "Rastrear a origem",
        description:
          "Encontrar a primeira decisão técnica, temporal ou semântica relevante.",
      },
    ],
  },
  learningPath: {
    eyebrow: "Progressão de aprendizagem",
    title: "Seu caminho no Payload Journey LAB",
    description:
      "Comece entendendo o payload, aprenda a seguir o flow, investigue comportamentos observáveis e avance até a origem das decisões.",
    steps: [
      {
        id: "understand-payload",
        number: "01",
        title: "Entenda o Payload",
        description:
          "Aprenda a reconhecer a informação produzida por uma interação e as diferentes representações que ela assume ao atravessar o sistema.",
        concepts: [
          "payload",
          "estados e eventos",
          "camadas",
          "representações",
          "continuidade semântica",
        ],
        result: "Você passa a enxergar informação atravessando o sistema.",
      },
      {
        id: "payload-journey",
        number: "02",
        title: "Payload Journey",
        description:
          "Siga um payload de ponta a ponta e identifique quem o transporta, quem o transforma e onde decisões são tomadas.",
        concepts: [
          "origem",
          "caminho operacional",
          "fronteiras",
          "transporte",
          "transformação",
          "decisão",
          "checkpoints",
        ],
        result: "Você consegue reconstruir um flow de ponta a ponta.",
      },
      {
        id: "reverse-payload-journey",
        number: "03",
        title: "Reverse Payload Journey",
        description:
          "Parta de um comportamento observável e reconstrua o caminho em sentido reverso para localizar onde surgiu a divergência.",
        concepts: [
          "anomalia observável",
          "congelamento",
          "mapping",
          "checkpoints",
          "evidências",
          "divergência",
        ],
        result: "Você deixa de adivinhar e começa a investigar.",
      },
      {
        id: "track-to-origin",
        number: "04",
        title: "Track to Origin",
        description:
          "Conduza a investigação até a primeira decisão técnica, temporal ou semântica relevante.",
        concepts: ["origem", "autoridade", "modelo", "evidência", "restauração", "validação"],
        result: "Você consegue explicar onde e por que uma decisão ocorreu.",
      },
    ],
  },
  flowDemo: {
    eyebrow: "Demonstração visual",
    title: "Veja o payload atravessar o sistema",
    description:
      "Uma única interação pode atravessar várias camadas, mudar de representação e chegar aos pontos onde o sistema toma decisões.",
    context: "Uma representação pedagógica de um flow operacional.",
    nodes: [
      {
        id: "interaction",
        number: "01",
        label: "Clique",
        representation: "Interação do usuário",
        role: "trigger",
        responsibility: "Iniciar um comportamento observável no sistema.",
        investigativeQuestion: "Qual interação deu origem ao flow?",
      },
      {
        id: "structured-payload",
        number: "02",
        label: "Structured Payload",
        representation: "Dados estruturados pela aplicação",
        role: "transform",
        responsibility:
          "Converter a interação em informação que o sistema consegue transportar e interpretar.",
        investigativeQuestion: "Qual informação foi produzida?",
      },
      {
        id: "request",
        number: "03",
        label: "Request",
        representation: "Mensagem de transporte",
        role: "transport",
        responsibility: "Levar o payload através da fronteira de rede.",
        investigativeQuestion: "O que realmente saiu do frontend?",
      },
      {
        id: "api",
        number: "04",
        label: "API",
        representation: "Entrada recebida",
        role: "forward",
        responsibility: "Receber, validar e encaminhar a informação.",
        investigativeQuestion: "Como a entrada foi interpretada?",
      },
      {
        id: "domain",
        number: "05",
        label: "Domain",
        representation: "Ação interpretada",
        role: "decide",
        responsibility: "Aplicar regras e determinar o comportamento do sistema.",
        investigativeQuestion: "Onde a decisão foi tomada?",
      },
      {
        id: "repository",
        number: "06",
        label: "Repository",
        representation: "Operação de persistência",
        role: "persist",
        responsibility: "Transportar a decisão do domínio até a persistência.",
        investigativeQuestion: "O que foi enviado para persistência?",
      },
      {
        id: "response",
        number: "07",
        label: "Response",
        representation: "Resultado transportado",
        role: "transport",
        responsibility: "Levar o resultado da operação de volta à aplicação.",
        investigativeQuestion: "O que retornou do sistema?",
      },
      {
        id: "projection",
        number: "08",
        label: "Projection",
        representation: "Estado preparado para apresentação",
        role: "transform",
        responsibility: "Converter a resposta numa representação adequada à interface.",
        investigativeQuestion: "Como o resultado foi preparado para a UI?",
      },
      {
        id: "ui",
        number: "09",
        label: "UI",
        representation: "Comportamento visível",
        role: "present",
        responsibility: "Apresentar ao usuário o estado resultante do flow.",
        investigativeQuestion: "O que o usuário finalmente observa?",
      },
    ],
    cta: {
      supportingText:
        "Aprenda a reconstruir esse caminho com uma estratégia de entrada clara.",
      action: {
        label: "Começar pela formação",
        state: "internal",
        href: `/learn#${homepageAnchors.training}`,
      },
    },
  },
} satisfies HomepageEntry;

export const siteContent = {
  brand: {
    name: siteIdentity.name,
    tagline: siteIdentity.tagline,
  },
  nav: siteNavigation,
  hero: {
    eyebrow: "Software System Investigation",
    title: "PAYLOAD\nJOURNEY LAB",
    subtitle: siteIdentity.tagline,
    intro: siteIdentity.shortDescription,
    primaryAction: siteCtas.heroTraining,
    secondaryAction: labLogContent.action,
  },
  lab: {
    eyebrow: "Ensino",
    title: "Criado para ensinar a compreender sistemas",
    description:
      "O Payload Journey LAB desenvolve maneiras de ensinar, modelar e investigar software seguindo o fluxo da informação.",
    originPresentation: {
      eyebrow: "Sobre",
      title: "Origem, visão e autoria",
      description:
        "A origem do Payload Journey LAB, sua motivação e as informações confirmadas sobre sua fundadora.",
    },
    origin:
      "Sistemas podem crescer mais rapidamente do que a nossa capacidade de explicá-los. O LAB nasce da necessidade de recuperar visão estrutural, rastreabilidade e confiança antes de modificar software complexo.",
    motivatingProblem:
      "Quando a produção de código avança sem compreensão estrutural equivalente, torna-se mais difícil preservar rastreabilidade, autoridade, observabilidade e capacidade de decisão.",
    mission:
      "O LAB conecta educação, desenvolvimento metodológico, investigação de sistemas, aplicação em casos reais e possibilidades de colaboração.",
    principle:
      "Compreender antes de modificar: seguir o flow, produzir evidências e tornar as decisões do sistema visíveis.",
    vision:
      "O Payload Journey LAB trabalha para tornar investigação de sistemas uma capacidade ensinável, praticável e documentável.",
    connectionToInvestigativePractice:
      "A prática que você acabou de conhecer faz parte de um laboratório dedicado a desenvolver formação, métodos e investigação aplicada.",
    values: [
      "Seguir o flow",
      "Compreender antes de modificar",
      "Produzir evidência",
      "Tornar decisões visíveis",
      "Desenvolver visão estrutural",
      "Compartilhar métodos",
    ],
    founder: {
      name: siteConfig.founder.name,
      biography: [
        "O Payload Journey LAB nasceu de uma experiência prática.",
        "Ao trabalhar com sistemas desenvolvidos em alta velocidade com o apoio de agentes de IA, Valéria percebeu que a produção de código podia avançar mais rapidamente do que a compreensão das implementações realizadas. Aos poucos, o sistema tornava-se uma caixa-preta: pequenas alterações passaram a exigir horas de tentativa e erro, porque já não era claro onde as decisões aconteciam, como os dados atravessavam as camadas ou quais regras sustentavam o comportamento observado.",
        "Para recuperar visão estrutural, Valéria começou a estudar profundamente o payload, a rastreabilidade da informação, os estados, os eventos e as transformações realizadas ao longo do sistema. Esse processo deu origem ao Payload Journey LAB, à Universal System Modeling Template — USMT — e aos métodos de investigação hoje organizados pelo LAB.",
        "O que começou como uma forma de voltar a compreender sistemas acelerados por IA passou a ser estruturado como formação para estudantes e engenheiros. O objetivo é ajudá-los a entrar em grandes codebases com uma estratégia clara, conquistar autonomia mais rapidamente em equipes modernas de desenvolvimento assistido por IA e desenvolver a capacidade de atuar como Trace Engineers: profissionais capazes de seguir o fluxo, produzir evidências e compreender sistemas antes de modificá-los.",
      ],
      professionalLink: siteLinks.linkedin,
    },
  } satisfies LabPresentation,
  methods: {
    ...methodsSectionContent,
    items: methodsContent,
  },
  investigationCycle: {
    ...investigationCycleSectionContent,
    steps: investigationCycle,
  },
  investigativePractice: investigativePracticePresentation,
  ecosystem: {
    eyebrow: "Ecossistema do LAB",
    title: "Quatro áreas conectadas pelo mesmo propósito",
    description:
      "O LAB transforma investigação de sistemas em aprendizagem, pesquisa metodológica, aplicação prática e colaboração.",
    pillars: [
      {
        id: "education",
        title: "Formação",
        description:
          "Experiências educacionais para desenvolver visão estrutural, capacidade de tracing e estratégias de entrada em codebases grandes.",
        activities: ["Cursos", "Trilhas", "Vídeos", "Materiais educacionais"],
        audience: ["Estudantes", "Developers", "Pessoas entrando em codebases desconhecidas"],
        result: "Engenheiros mais capazes de compreender sistemas antes de modificá-los.",
        icon: GraduationCap,
      },
      {
        id: "methodological-research",
        title: "Pesquisa metodológica",
        description:
          "Criação, documentação, teste e refinamento dos métodos utilizados pelo Payload Journey LAB.",
        activities: [
          "Desenvolvimento da USMT",
          "Refinamento do Payload Journey",
          "Reverse Payload Journey",
          "Operational Payload Path",
          "Track to Origin",
          "Documentação do procedimento investigativo",
        ],
        result: "Métodos mais claros, verificáveis e ensináveis.",
        icon: BookOpen,
      },
      {
        id: "applied-investigation",
        title: "Investigação aplicada",
        description:
          "Aplicação dos métodos em codebases, flows, anomalias e decisões reais de software.",
        activities: [
          "Seleção de flows",
          "Mapping",
          "Checkpoints",
          "Confronto de evidências",
          "Estudo de anomalias",
          "Documentação de casos",
        ],
        result: "Casos reais que testam e fortalecem a prática investigativa.",
        icon: Search,
      },
      {
        id: "collaboration",
        title: "Colaboração",
        description:
          "O LAB está aberto a pilotos, estudos e experiências compartilhadas com públicos interessados em aprendizagem e investigação de sistemas.",
        activities: ["Pilotos de aprendizagem", "Estudos compartilhados", "Pesquisa aplicada"],
        audience: [
          "Estudantes",
          "Educadores",
          "Universidades",
          "Laboratórios",
          "Equipes",
          "Organizações",
        ],
        result:
          "Aprendizagem e investigação desenvolvidas em contato com possibilidades e contextos reais.",
        icon: Share2,
      },
    ],
    collaborationNote:
      "Estas são possibilidades de colaboração; os públicos indicam com quem o LAB pode colaborar.",
    historicalPresentation: {
      title: "Um ecossistema para compreender sistemas",
      intro:
        "Os métodos do LAB fazem parte de uma prática de investigação estrutural orientada por evidências.",
      institutionalTransition:
        "Formação, pesquisa, investigação aplicada e colaboração sustentam o desenvolvimento contínuo dos métodos e da prática do LAB.",
    },
    flow: ecosystemFlow,
    flowDescription: ecosystemFlowDescription,
    items: investigativePractice,
    futureArtifacts: [
      {
        title: "One Bit Machine",
        description:
          "Conteúdo preservado para uma área futura de formação, experimentos e artefatos pedagógicos.",
      },
    ] satisfies CardItem[],
  } satisfies InstitutionalEcosystemPresentation & {
    flow: typeof ecosystemFlow;
    flowDescription: typeof ecosystemFlowDescription;
    items: typeof investigativePractice;
    futureArtifacts: CardItem[];
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
    title: horaCityCase.editorialVariants.audited.title,
    subtitle: horaCityCase.editorialVariants.audited.subtitle,
    description: horaCityCase.editorialVariants.audited.description,
    secondaryDescription: horaCityCase.editorialVariants.audited.investigation,
    editorialVariants: horaCityCase.editorialVariants,
    editorialResolution: horaCityCase.editorialResolution,
    stages: horaCityCase.stages,
    facts: horaCityCase.auditedFacts,
    investigation: {
      caseId: horaCityCase.caseId,
      anomaly: horaCityCase.anomaly,
      payload: horaCityCase.payload,
      state: horaCityCase.status,
    },
    actions: horaCityCase.futureActions,
  },
  education: {
    eyebrow: "DO METODO A PRATICA",
    betaLabel: "LAB Beta",
    couponLabel: `coupon: ${campaignConfig.coupon.code}`,
    futurePathsLabel: "Trilhas futuras",
    title: "Do método à prática",
    intro:
      "O Payload Journey LAB transforma seus métodos em experiências de formação, investigações aplicadas e oportunidades de colaboração.",
    beta: {
      title: trainingContent.name,
      description: trainingContent.description,
      action: trainingContent.renderedAction,
      preservedEditorialAction: trainingContent.preservedEditorialAction,
    },
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
  betaCta: {
    eyebrow: "Comece agora",
    title: "Comece por um único flow",
    description:
      "Você não precisa compreender toda a codebase para começar. Escolha uma interação, encontre o payload e siga o caminho.",
    primaryCta: {
      label: "Entrar na formação",
      state: "external",
      href: siteLinks.udemy.courseWithCoupon,
    },
    secondaryCta: {
      label: "Ver o payload atravessar o sistema",
      state: "anchor",
      href: `#${homepageAnchors.demo}`,
    },
    campaignNote: campaignConfig.messages.heroStatus,
    historicalPresentation: {
      label: "LAB Beta",
      title: campaignConfig.messages.firstCircleTitle,
      text: campaignConfig.messages.firstCircleText,
      action: siteCtas.finalTraining,
    },
  } satisfies FinalCtaPresentation,
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
    historicalPolicies: footerContent.historicalPolicies,
    missingLegalRoutes: footerContent.missingLegalRoutes,
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
