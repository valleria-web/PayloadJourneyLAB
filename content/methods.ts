import type {
  CtaItem,
  InvestigationStep,
  InvestigativePractice,
  LearningMethod,
} from "@/types/content";

const usmtFutureAction = {
  label: "Conhecer a USMT",
  state: "future",
  status: "Página em desenvolvimento",
} satisfies CtaItem;

export const methodsSectionContent = {
  eyebrow: "METODOS PARA COMPREENDER SISTEMAS",
  title: "Métodos para compreender sistemas",
  intro:
    "O LAB organiza observação, modelagem e investigação em métodos complementares. Cada método responde a uma necessidade específica, desde seguir uma informação através das camadas até reconstruir a origem de uma anomalia.",
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
    currentOrder: 1,
    futureSection: "investigation-procedure",
  },
  {
    id: "map",
    action: "MAP",
    actionPt: "Mapear",
    target: "PATH",
    currentOrder: 2,
    futureSection: "investigation-procedure",
  },
  {
    id: "detect",
    action: "DETECT",
    actionPt: "Detectar",
    target: "MUTATION",
    currentOrder: 3,
    futureSection: "investigation-procedure",
  },
  {
    id: "restore",
    action: "RESTORE",
    actionPt: "Restaurar",
    target: "AUTHORITY",
    currentOrder: 4,
    futureSection: "investigation-procedure",
  },
] satisfies InvestigationStep[];

export const investigationCycleSummary = "Congelar. Mapear. Detectar. Restaurar.";

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
