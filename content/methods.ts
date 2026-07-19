import type {
  CtaItem,
  InvestigationStep,
  InvestigativePractice,
  InvestigativePracticePresentation,
  LearningMethod,
} from "@/types/content";

const usmtFutureAction = {
  label: "Conhecer a USMT",
  state: "future",
  status: "Página em desenvolvimento",
} satisfies CtaItem;

export const methodsSectionContent = {
  historicalPresentation: {
    eyebrow: "METODOS PARA COMPREENDER SISTEMAS",
    title: "Métodos para compreender sistemas",
    intro:
      "O LAB organiza observação, modelagem e investigação em métodos complementares. Cada método responde a uma necessidade específica, desde seguir uma informação através das camadas até reconstruir a origem de uma anomalia.",
  },
  eyebrow: "Métodos e instrumentos",
  title: "Cada método responde a uma pergunta diferente",
  intro:
    "Os métodos do LAB não competem entre si. Eles sustentam momentos diferentes da compreensão, do mapping e da investigação.",
  distinction:
    "O procedimento define a sequência investigativa. Os métodos são instrumentos utilizados durante essa sequência.",
  relation:
    "Payload Journey observa o percurso. A USMT modela a estrutura. Reverse Payload Journey reconstrói a anomalia. Operational Payload Path organiza o Mapping. Track to Origin conduz a investigação até a origem.",
  traceStack: "trace stack: payload / usmt / origin",
} as const;

export const methodsContent = [
  {
    id: "payload-journey",
    title: "Payload Journey",
    category: "Observação",
    description:
      "Método de observação progressiva que acompanha como uma informação nasce, atravessa camadas, assume diferentes representações e produz efeitos no sistema.",
    purpose: "Observar o percurso de uma informação através das camadas.",
    whenToUse:
      "Quando é necessário compreender como uma interação percorre o sistema de ponta a ponta.",
    question: "Por onde o payload atravessa e como muda ao longo do caminho?",
    result: "Uma visão operacional do flow.",
    relatedSteps: ["map", "restore"],
    relationship:
      "Apoia Mapear ao tornar o percurso visível e Restaurar ao validar novamente o flow.",
    currentSection: "metodos",
    futureSection: "methods-and-instruments",
    currentOrder: 1,
    futureOrder: 1,
  },
  {
    id: "usmt",
    title: "USMT",
    category: "Modelagem",
    description:
      "Universal System Modeling Template é um template de modelagem estrutural que organiza fenômenos, estados, eventos, transições permitidas e proibidas, invariantes, camadas, métricas e condições de término.",
    status: "A USMT é composta por 12 elementos metodológicos.",
    action: usmtFutureAction,
    purpose: "Modelar a estrutura e os limites verificáveis de um sistema.",
    whenToUse:
      "Quando é necessário tornar explícito o modelo que orienta a interpretação das evidências.",
    question: "Que estados, regras e invariantes definem o comportamento esperado?",
    result: "Um modelo estrutural para confrontar sistema e evidência.",
    relatedSteps: ["freeze", "detect", "restore"],
    relationship:
      "Apoia Congelar, Detectar e Restaurar ao explicitar estados, regras e invariantes.",
    currentSection: "metodos",
    futureSection: "methods-and-instruments",
    currentOrder: 2,
    futureOrder: 2,
  },
  {
    id: "reverse-payload-journey",
    title: "Reverse Payload Journey",
    category: "Investigação",
    description:
      "Método de investigação que parte de uma anomalia observável e reconstrói, em sentido reverso, o caminho percorrido pelo payload.",
    purpose: "Reconstruir o caminho de uma anomalia observável.",
    whenToUse: "Quando existe uma anomalia e sua origem ainda não é conhecida.",
    question: "De onde veio o comportamento que chegou à interface?",
    result: "Uma investigação orientada pela anomalia e pelo flow.",
    relatedSteps: ["freeze", "map", "detect"],
    relationship:
      "Apoia Congelar, Mapear e Detectar ao reconstruir o caminho a partir da anomalia observável.",
    currentSection: "metodos",
    futureSection: "methods-and-instruments",
    currentOrder: 3,
    futureOrder: 3,
  },
  {
    id: "operational-payload-path",
    title: "Operational Payload Path",
    category: "Mapping",
    description:
      "Instrumento operacional de Mapping que organiza zonas, fronteiras, componentes, representações, responsabilidades, autoridades e checkpoints ao longo de uma operação. Ele transforma a arquitetura abstrata em uma rota investigável.",
    purpose: "Transformar a arquitetura abstrata em uma rota investigável.",
    whenToUse:
      "Quando a arquitetura abstrata precisa ser convertida num caminho operacional investigável.",
    question: "Quais componentes reais transportam, transformam ou decidem?",
    result: "Um mapa explícito com pontos candidatos a checkpoints.",
    relatedSteps: ["map"],
    relationship:
      "Apoia Mapear e conecta Payload Journey e Reverse Payload Journey a componentes e fronteiras reais.",
    currentSection: "metodos",
    futureSection: "methods-and-instruments",
    currentOrder: 4,
    futureOrder: 4,
  },
  {
    id: "track-to-origin",
    title: "Track to Origin",
    category: "Origem e autoridade",
    description:
      "Processo investigativo que conduz o rastreamento até a origem técnica, semântica ou temporal e até o primeiro ponto de decisão relevante.",
    purpose: "Conduzir o rastreamento até a origem e o primeiro ponto de decisão relevante.",
    whenToUse:
      "Quando a divergência já foi localizada, mas ainda é necessário identificar sua autoridade de origem.",
    question: "Onde nasceu a decisão que determinou o comportamento?",
    result: "Uma origem investigativa sustentada por evidências.",
    relatedSteps: ["detect", "restore"],
    relationship:
      "Apoia Detectar e Restaurar ao rastrear a autoridade técnica, temporal ou semântica relevante.",
    currentSection: "metodos",
    futureSection: "methods-and-instruments",
    currentOrder: 5,
    futureOrder: 5,
  },
] satisfies LearningMethod[];

export const investigationCycle = [
  {
    id: "freeze",
    action: "FREEZE",
    actionPt: "Congelar",
    target: "PAYLOAD",
    number: "01",
    question: "Qual comportamento precisa ser preservado antes de qualquer alteração?",
    description:
      "Delimite o caso, registre o comportamento observável e preserve as condições necessárias para reproduzi-lo.",
    inputs: [
      "anomalia ou comportamento observado",
      "flow selecionado",
      "comportamento esperado, quando conhecido",
    ],
    activities: [
      "delimitar o caso",
      "interromper alterações especulativas",
      "registrar contexto",
      "preservar evidências iniciais",
      "definir o recorte investigável",
    ],
    result: "Um caso estável e reproduzível, pronto para ser investigado.",
    evidence: "registro do estado observado",
    relatedMethods: ["usmt", "reverse-payload-journey"],
    currentOrder: 1,
    futureSection: "investigation-procedure",
  },
  {
    id: "map",
    action: "MAP",
    actionPt: "Mapear",
    target: "PATH",
    number: "02",
    question: "Por onde o payload realmente atravessa o sistema?",
    description:
      "Reconstrua o caminho operacional, identifique fronteiras, representações, transformações, transportes e pontos de decisão.",
    inputs: ["caso congelado", "flow selecionado", "payload identificado"],
    activities: [
      "localizar a origem da interação",
      "identificar o payload",
      "seguir componentes reais",
      "registrar mudanças de representação",
      "posicionar checkpoints candidatos",
      "construir o Operational Payload Path",
    ],
    result: "Um caminho operacional explícito e verificável.",
    evidence: "mapa do flow e checkpoints candidatos",
    relatedMethods: [
      "payload-journey",
      "operational-payload-path",
      "reverse-payload-journey",
    ],
    currentOrder: 2,
    futureSection: "investigation-procedure",
  },
  {
    id: "detect",
    action: "DETECT",
    actionPt: "Detectar",
    target: "MUTATION",
    number: "03",
    question: "Em que ponto o comportamento observado diverge do esperado ou do modelo?",
    description:
      "Confronte evidências produzidas nos checkpoints, compare representações e determine onde surgiu a divergência relevante.",
    inputs: ["flow mapeado", "checkpoints candidatos", "comportamento esperado ou modelo"],
    activities: [
      "executar ou observar o flow",
      "recolher evidências",
      "comparar checkpoints",
      "confrontar observado e esperado",
      "identificar a primeira divergência relevante",
      "localizar decisão, transformação ou autoridade envolvida",
    ],
    result: "Uma divergência sustentada por evidências, não apenas uma hipótese.",
    evidence: "registro da divergência detectada",
    relatedMethods: ["reverse-payload-journey", "usmt", "track-to-origin"],
    currentOrder: 3,
    futureSection: "investigation-procedure",
  },
  {
    id: "restore",
    action: "RESTORE",
    actionPt: "Restaurar",
    target: "AUTHORITY",
    number: "04",
    question: "Que autoridade, regra ou comportamento precisa ser corrigido e validado?",
    description:
      "Aplique a mudança mínima necessária, restaure o comportamento desejado e percorra novamente o flow para validar o resultado.",
    inputs: ["divergência sustentada por evidências", "autoridade ou regra investigada"],
    activities: [
      "corrigir a autoridade ou regra",
      "evitar mudanças fora do recorte",
      "reexecutar checkpoints",
      "comparar antes e depois",
      "confirmar invariantes",
      "documentar o resultado",
    ],
    result: "Um comportamento restaurado e validado através do mesmo flow investigado.",
    evidence: "validação do comportamento restaurado",
    relatedMethods: ["track-to-origin", "usmt", "payload-journey"],
    currentOrder: 4,
    futureSection: "investigation-procedure",
  },
] satisfies InvestigationStep[];

export const investigationCycleSummary = "Congelar. Mapear. Detectar. Restaurar.";

export const investigationCycleSectionContent = {
  eyebrow: "Procedimento investigativo",
  title: "Congelar, Mapear, Detectar e Restaurar",
  description:
    "Uma investigação confiável preserva o comportamento, reconstrói o flow, confronta evidências e somente então modifica o sistema.",
  distinction:
    "O procedimento organiza a sequência. Os métodos oferecem instrumentos para executar cada etapa.",
} as const;

export const heroInvestigationPanel = {
  state: "TRACK MODE ACTIVE",
  command: ">_ payload.route.observe()",
  chips: [
    { label: "TRACK MODE", tone: "technical" },
    { label: "REVERSE", tone: "cta" },
    { label: "ORIGIN", tone: "neutral" },
  ],
} as const;

export const investigativePractice = [
  {
    id: "trace-engineer",
    title: "Trace Engineer",
    description:
      "Profissional ou função investigativa dedicada a seguir payloads, estados, eventos e decisões através das camadas de um sistema.",
    futureSection: "investigative-practice-and-trace-engineer",
  },
  {
    id: "track-mode",
    title: "Track Mode",
    description:
      "Estado operacional no qual mudanças são suspensas e a prioridade passa a ser observar, delimitar, registrar e compreender.",
    futureSection: "investigative-practice-and-trace-engineer",
  },
  {
    id: "software-system-investigation",
    title: "Software System Investigation",
    description:
      "Prática de investigação estrutural de sistemas baseada em tracing, modelagem, evidências e reconstrução de decisões.",
    futureSection: "investigative-practice-and-trace-engineer",
  },
] satisfies InvestigativePractice[];

export const ecosystemFlow = [
  investigativePractice[1].title,
  methodsContent[2].title,
  methodsContent[4].title,
  "Evidência",
  "Restauração",
] as const;

export const ecosystemFlowDescription =
  "O Track Mode suspende mudanças e prioriza observação. O Reverse Payload Journey reconstrói o caminho. Track to Origin conduz a investigação até a origem. A evidência permite restaurar autoridade e compreensão.";

export const investigativePracticePresentation = {
  eyebrow: "Prática investigativa",
  title: "Da observação à restauração",
  description:
    "O Payload Journey LAB reúne procedimento, métodos e evidências numa prática dedicada a compreender sistemas antes de modificá-los.",
  progression: [
    "Track Mode",
    "Reverse Payload Journey",
    "Track to Origin",
    "Evidência",
    "Restauração",
  ],
  trackMode: {
    id: "track-mode",
    title: "Track Mode",
    definition:
      "Um estado operacional no qual a prioridade deixa de ser modificar o sistema e passa a ser observar, mapear e produzir evidências.",
    principle: "Observe antes de modificar.",
    actions: [
      "suspender mudanças especulativas",
      "selecionar um flow",
      "acompanhar o payload",
      "registrar checkpoints",
      "confrontar evidências",
      "preservar o recorte investigativo",
    ],
  },
  traceEngineer: {
    id: "trace-engineer",
    title: "Trace Engineer",
    definition:
      "Uma função investigativa dedicada a reconstruir flows, seguir payloads, confrontar evidências e rastrear decisões até sua origem.",
    context: "Função investigativa proposta e desenvolvida pelo LAB.",
    responsibilities: [
      "delimitar casos",
      "selecionar flows",
      "produzir mapas operacionais",
      "posicionar checkpoints",
      "interpretar evidências",
      "identificar divergências",
      "rastrear autoridade",
      "validar restaurações",
      "documentar a investigação",
    ],
  },
  softwareSystemInvestigation: {
    id: "software-system-investigation",
    title: "Software System Investigation",
    definition:
      "Uma prática estrutural de investigação baseada em tracing, modelagem, checkpoints, evidências e reconstrução de decisões.",
    context: "Prática organizada e desenvolvida no contexto do Payload Journey LAB.",
    elements: [
      "payload",
      "flow",
      "modelo",
      "checkpoints",
      "evidências",
      "divergência",
      "autoridade",
      "restauração",
      "validação",
    ],
    result:
      "Compreensão investigativa suficiente para modificar o sistema com menor incerteza.",
  },
  centralConcepts: {
    evidence: "Evidências tornam o comportamento observado comparável e verificável.",
    authority: "Autoridade identifica onde uma regra ou decisão relevante é definida.",
    restoration: "Restauração corrige o recorte necessário e valida o comportamento pelo mesmo flow.",
    observationBeforeModification: "Observe antes de modificar.",
  },
  cta: {
    supportingText: "Veja como formação, pesquisa e investigação aplicada se conectam.",
    action: {
      label: "Conhecer o LAB",
      state: "internal",
      href: "/lab",
    },
  },
} satisfies InvestigativePracticePresentation;
