import { homepageAnchors } from "@/content/site";
import type { CtaItem, HoraCityCase } from "@/types/content";

const futureCta = (label: string, status: string): CtaItem => ({
  label,
  state: "future",
  status,
});

const horaCityFacts = {
  caseId: "RPJ-HORA-001",
  project: "HORA.city",
  initialScale: "Aproximadamente 6 mil linhas",
  expandedScale: "Aproximadamente 40 mil linhas",
  renderedScale: "~6k → ~40k linhas",
  anomaly: "createdAt incorreto",
  payload: "HeartCreated",
  method: "Reverse Payload Journey",
  mission: "Track to Origin",
  authority: "temporal authority under review",
} as const;

export const horaCityCase = {
  id: "hora-city",
  caseId: horaCityFacts.caseId,
  project: horaCityFacts.project,
  region: "BR",
  codebase: {
    initial: horaCityFacts.initialScale,
    expanded: horaCityFacts.expandedScale,
    renderedScale: horaCityFacts.renderedScale,
  },
  anomaly: horaCityFacts.anomaly,
  payload: horaCityFacts.payload,
  method: horaCityFacts.method,
  mission: horaCityFacts.mission,
  authority: horaCityFacts.authority,
  status: "Investigação em andamento",
  editorialResolution: "unresolved",
  editorialVariants: {
    audited: {
      label: "audited",
      title: "Study Case",
      subtitle: "Saving HORA.city",
      description:
        "O HORA.city é um sistema geolocalizado utilizado pelo Payload Journey LAB como caso real de investigação aplicada. Após uma expansão acelerada com agentes de IA, o sistema passou de aproximadamente 6 mil para 40 mil linhas de código e perdeu parte de sua observabilidade estrutural.",
      investigation:
        "A investigação atual acompanha uma anomalia temporal em createdAt, associada ao payload HeartCreated. O objetivo é reconstruir o caminho operacional, identificar a autoridade temporal e rastrear o primeiro ponto relevante de decisão.",
      renderedAtSprintStart: false,
    },
    rendered: {
      label: "rendered",
      title: "HORA.city",
      subtitle: "STUDY CASE",
      description:
        "O HORA.city é um caso real de investigação aplicada no Payload Journey LAB, marcado por uma expansão acelerada e por perda de observabilidade estrutural.",
      investigation:
        "A investigação atual acompanha uma anomalia temporal em createdAt associada ao payload HeartCreated, com o objetivo de reconstruir o caminho operacional e rastrear a origem da decisão temporal.",
      renderedAtSprintStart: true,
    },
  },
  publicNarrative: {
    sourceStrategy: "shared-confirmed-facts",
    eyebrow: "Caso real",
    transition: "Da aprendizagem à investigação aplicada",
    title: "Veja o Payload Tracing aplicado numa codebase real",
    introduction:
      "HORA.city funciona como ambiente de investigação aplicada do Payload Journey LAB. Em vez de tentar compreender toda a codebase de uma vez, o trabalho começa pela seleção de um único flow observável.",
    mainMessage:
      "Uma codebase grande pode ser reduzida a uma rota investigável quando seguimos o payload, registramos checkpoints e confrontamos evidências.",
    sections: [
      {
        id: "context",
        number: "01",
        title: "Contexto",
        description:
          "HORA.city é um sistema real em expansão. A escala registrada passou de aproximadamente 6 mil para 40 mil linhas, aumentando a necessidade de recuperar visão estrutural.",
      },
      {
        id: "anomaly",
        number: "02",
        title: "Anomalia",
        description:
          "Um Heart apresentado como recém-criado exibia informações temporais que não correspondiam ao comportamento esperado.",
      },
      {
        id: "selected-flow",
        number: "03",
        title: "Flow selecionado",
        description:
          "A investigação delimita um comportamento observável associado ao payload HeartCreated e acompanha seu caminho operacional sem tentar explicar a codebase inteira.",
      },
      {
        id: "payload",
        number: "04",
        title: "Payload",
        description:
          "HeartCreated é o payload associado à anomalia temporal e fornece o ponto concreto para seguir a informação através do sistema.",
      },
      {
        id: "investigation",
        number: "05",
        title: "Investigação",
        description:
          "Reverse Payload Journey e Track to Origin orientam a observação do caminho, o posicionamento de checkpoints e a busca pela autoridade temporal sob investigação.",
      },
      {
        id: "evidence",
        number: "06",
        title: "Evidências",
        description:
          "A escala da codebase, a anomalia observável, o payload HeartCreated e o estado da autoridade temporal formam o conjunto confirmado de evidências públicas.",
      },
      {
        id: "current-status",
        number: "07",
        title: "Estado atual",
        description:
          "Caso documentado como investigação aplicada do LAB. A fonte registra a investigação como em andamento, sem declarar origem comprovada ou restauração concluída.",
      },
    ],
    technicalFacts: [
      { label: "Caso", value: horaCityFacts.caseId },
      { label: "Projeto", value: horaCityFacts.project },
      { label: "Payload", value: horaCityFacts.payload },
      { label: "Método", value: horaCityFacts.method },
      { label: "Missão", value: horaCityFacts.mission },
      { label: "Status", value: "Investigação em andamento" },
    ],
    primaryCta: {
      label: "Acompanhar o caso no LabLog",
      state: "anchor",
      href: `#${homepageAnchors.labLog}`,
    },
    secondaryCta: {
      label: "Rever o flow",
      state: "anchor",
      href: `#${homepageAnchors.demo}`,
    },
    omissions: {
      unconfirmed: [
        "nome técnico do flow selecionado",
        "estrutura interna do payload",
        "origem comprovada da anomalia",
        "resolução ou restauração concluída",
      ],
      editorialDivergence: [
        "título e subtítulo definitivos do caso",
        "redação completa de contexto",
        "redação completa da investigação",
      ],
    },
  },
  stages: [
    { label: "Contexto", status: "Em documentação" },
    { label: "Anomalia", status: "Em investigação" },
    { label: "Investigação", status: "Em andamento" },
    { label: "Aprendizados", status: "Etapa futura" },
  ],
  auditedFacts: [
    { label: "Sistema inicial", value: horaCityFacts.initialScale },
    { label: "Expansão", value: horaCityFacts.expandedScale },
    { label: "Anomalia observada", value: horaCityFacts.anomaly },
    { label: "Payload associado", value: horaCityFacts.payload },
    { label: "Método aplicado", value: horaCityFacts.method },
    { label: "Missão", value: horaCityFacts.mission },
  ],
  renderedMicroFacts: [
    { label: "Escala", value: horaCityFacts.renderedScale },
    { label: "Anomalia", value: horaCityFacts.anomaly },
    { label: "Payload", value: horaCityFacts.payload },
    { label: "Missão", value: horaCityFacts.mission },
  ],
  technicalStatus: {
    activeStatus: "active investigation",
    validatedFlow: "in progress",
    authority: horaCityFacts.authority,
  },
  technicalRows: [
    { label: "Anomalia", value: horaCityFacts.anomaly },
    { label: "Payload", value: horaCityFacts.payload },
    { label: "Método", value: horaCityFacts.method },
    { label: "Missão", value: horaCityFacts.mission },
    { label: "Authority", value: horaCityFacts.authority },
  ],
  technicalCopy: {
    caseFileLabel: "case file",
    commandPrefix: ">_",
    regionLabel: "region",
    statusLabel: "status",
    payloadLabel: "primary payload",
    validatedFlowLabel: "validated flow",
    validatedFlowHeading: "Validated Flow",
    authorityHeading: "Authority",
  },
  renderedNotice: "Detalhes completos em breve.",
  renderedActions: [
    {
      label: "Explorar o estudo",
      state: "anchor",
      href: `#${homepageAnchors.caseStudy}`,
    },
    {
      label: "Acompanhar no LabLog",
      state: "anchor",
      href: `#${homepageAnchors.labLog}`,
    },
  ],
  futureActions: [
    futureCta("Explorar o Study Case", "Em preparação"),
    futureCta("Assistir ao LabLog", "Em preparação"),
  ],
} as const satisfies HoraCityCase;
