import type { UsmtPresentation } from "@/types/content";

export const usmtContent = {
  id: "usmt",
  eyebrow: "Modelo do sistema",
  title: "USMT — Universal System Model Template",
  lead: "Entenda o sistema que o payload atravessa.",
  description:
    "Seguir o payload revela o que aconteceu. A USMT ajuda a compreender o que deveria acontecer.",
  centralQuestion: "Como sabemos se o comportamento observado durante a jornada do payload está correto?",
  centralAnswer:
    "A USMT estabelece o modelo do sistema. A investigação confronta esse modelo com o comportamento real observado no flow.",
  indexableContext:
    "Na prática de software system investigation, a USMT aproxima system modeling de payload tracing. States, events, invariants e layers tornam o comportamento esperado explícito e verificável.",
  elementsHeading: "Doze elementos para tornar o sistema investigável",
  elementsDescription:
    "A estrutura organiza o que existe, como muda, quais limites precisam ser preservados e como o comportamento pode ser verificado.",
  elements: [
    {
      id: "description",
      number: "01",
      title: "Descrição",
      englishTerm: "description",
      description: "O que é o sistema.",
    },
    {
      id: "delimitation",
      number: "02",
      title: "Delimitação",
      englishTerm: "delimitation",
      description: "Onde o sistema começa e termina.",
    },
    {
      id: "states",
      number: "03",
      title: "Estados",
      englishTerm: "states",
      description: "Em quais condições pode existir.",
    },
    {
      id: "events",
      number: "04",
      title: "Eventos",
      englishTerm: "events",
      description: "O que provoca mudança.",
    },
    {
      id: "allowed-transitions",
      number: "05",
      title: "Transições permitidas",
      englishTerm: "allowed transitions",
      description: "O que pode acontecer.",
    },
    {
      id: "forbidden-transitions",
      number: "06",
      title: "Transições proibidas",
      englishTerm: "forbidden transitions",
      description: "O que não pode acontecer.",
    },
    {
      id: "invalidation",
      number: "07",
      title: "Invalidação",
      englishTerm: "invalidation",
      description: "O que torna um estado inválido.",
    },
    {
      id: "termination",
      number: "08",
      title: "Terminação",
      englishTerm: "termination",
      description: "Como o ciclo termina.",
    },
    {
      id: "invariants",
      number: "09",
      title: "Invariantes",
      englishTerm: "invariants",
      description: "O que deve permanecer verdadeiro.",
    },
    {
      id: "layers",
      number: "10",
      title: "Camadas",
      englishTerm: "layers",
      description: "Onde cada responsabilidade vive.",
    },
    {
      id: "metrics",
      number: "11",
      title: "Métricas",
      englishTerm: "metrics",
      description: "Como o comportamento é medido.",
    },
    {
      id: "spec",
      number: "12",
      title: "Spec",
      englishTerm: "spec",
      description: "A síntese operacional do modelo.",
    },
  ],
  lensesHeading: "Quatro lentes para investigar qualquer fluxo",
  lensesDescription:
    "As lentes não substituem o tracing. Elas orientam o que deve ser observado durante o tracing.",
  lenses: [
    {
      id: "where",
      label: "WHERE",
      action: "Localiza",
      question: "Onde a responsabilidade vive?",
      description: "Onde a responsabilidade, a fronteira e a autoridade estão localizadas.",
      observes: ["Camada", "Componente", "Fronteira", "Autoridade"],
    },
    {
      id: "how",
      label: "HOW",
      action: "Acompanha",
      question: "Como o comportamento acontece?",
      description: "Como o payload é transportado, transformado e encaminhado pelo sistema.",
      observes: ["Flow", "Transformação", "Transporte", "Sequência"],
    },
    {
      id: "logic",
      label: "LOGIC",
      action: "Interpreta",
      question: "Qual regra decide o resultado?",
      description: "Qual condição, transição ou regra de domínio determina o comportamento.",
      observes: ["Regra", "Condição", "Decisão", "Transição"],
    },
    {
      id: "safe",
      label: "SAFE",
      action: "Valida",
      question: "O que mantém o sistema válido e seguro?",
      description: "Quais invariantes, limites e condições evitam estados inconsistentes.",
      observes: ["Invariantes", "Limites", "Invalidação", "Terminação"],
    },
  ],
  connection: {
    title: "Do modelo esperado ao comportamento observado",
    description:
      "A USMT modela o comportamento esperado. O Payload Journey revela o comportamento observado. A investigação confronta os dois.",
    conclusion:
      "Uma divergência pode revelar uma anomalia, uma regra ainda desconhecida ou um modelo que precisa ser refinado.",
    steps: [
      {
        id: "expected-model",
        number: "01",
        label: "Modelo esperado",
        description: "A USMT explicita estados, regras, limites e invariantes.",
      },
      {
        id: "observed-flow",
        number: "02",
        label: "Flow observado",
        description: "O Payload Journey acompanha o comportamento real.",
      },
      {
        id: "evidence",
        number: "03",
        label: "Evidência",
        description: "Checkpoints tornam esperado e observado comparáveis.",
      },
      {
        id: "investigation",
        number: "04",
        label: "Investigação",
        description: "A confrontação localiza e explica divergências relevantes.",
      },
    ],
  },
  protocolTransition: {
    eyebrow: "Próxima etapa",
    title: "Com o sistema modelado e o fluxo visível, a investigação pode começar.",
    description:
      "O protocolo organiza essa confrontação numa sequência verificável, da preservação do comportamento à validação da restauração.",
    steps: ["Congelar", "Mapear", "Detectar", "Restaurar"],
  },
  deepDiveCta: null,
} satisfies UsmtPresentation;
