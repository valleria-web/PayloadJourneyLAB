import { horaCityCase } from "@/content/hora-city";
import { labLogContent } from "@/content/site";
import type {
  LabLogEntry,
  PublicCaseRecord,
  PublicEvidence,
} from "@/types/content";

export const caseEvidence = [
  {
    id: "EVD-HORA-DOC-001",
    caseId: horaCityCase.caseId,
    type: "documento",
    title: "Registro editorial canônico do caso",
    description:
      "Fonte estruturada que reúne a identidade, a anomalia documentada, o payload associado, o método e o estado inconclusivo do caso.",
    source: "Fonte editorial interna do site",
    observedAt: "Data da investigação não confirmada",
    status: "localizada",
    access: "Resumo público nesta página; ficheiro não oferecido para download",
    supports: [
      "existência do caso RPJ-HORA-001",
      "anomalia temporal documentada",
      "associação ao payload HeartCreated",
      "investigação ainda em andamento",
    ],
    limitations: [
      "fonte produzida pela própria investigadora",
      "não contém log, trace, checkpoint ou execução observada publicável",
      "não constitui evidência externa",
    ],
  },
  {
    id: "EVD-HORA-DOC-002",
    caseId: horaCityCase.caseId,
    type: "documento",
    title: "Apresentação documental do repositório",
    description:
      "Documento localizado que repete a identidade do caso, a anomalia de createdAt, o payload HeartCreated e a missão Track to Origin.",
    source: "Documento de apresentação do projeto",
    observedAt: "Data da investigação não confirmada",
    status: "referenciada",
    access: "Localização pública do documento não confirmada",
    supports: [
      "consistência documental da identidade do caso",
      "consistência documental da pergunta temporal",
    ],
    limitations: [
      "repete a fonte interna e não é verificação independente",
      "não contém artefato técnico do comportamento observado",
    ],
  },
] as const satisfies readonly PublicEvidence[];

export const publicCases = [
  {
    id: horaCityCase.caseId,
    title: "HORA.city — anomalia temporal em investigação",
    system:
      "HORA.city, sistema geolocalizado utilizado como campo interno de investigação aplicada do LAB.",
    origin: "Caso interno conduzido pela criadora do método.",
    flow: "Comportamento temporal associado ao payload HeartCreated.",
    operation: "Operação associada a HeartCreated; nome técnico não confirmado.",
    question:
      "Como a informação temporal associada ao HeartCreated atravessa o flow e onde se encontra a autoridade que determina createdAt?",
    anomaly:
      "Um Heart apresentado como recém-criado exibia informação temporal divergente do comportamento esperado.",
    expectedBehavior:
      "A informação temporal apresentada para um Heart recém-criado deveria corresponder ao comportamento temporal esperado pelo caso.",
    observedBehavior:
      "O caso registra createdAt incorreto; a origem causal e a camada responsável ainda não foram confirmadas publicamente.",
    status: "Em mapeamento",
    protocolStage:
      "Mapear — o caminho operacional e a autoridade temporal ainda estão sendo reconstruídos.",
    openedAt: "Não confirmado",
    updatedAt: "Não confirmado",
    methods: ["Reverse Payload Journey", "Track to Origin"],
    components: ["Não confirmado publicamente"],
    evidenceIds: caseEvidence.map((item) => item.id),
    confirmedFacts: [
      `o caso interno ${horaCityCase.caseId} está documentado`,
      "HORA.city é a codebase associada ao caso",
      "createdAt incorreto é a anomalia registrada",
      "HeartCreated é o payload associado",
      "Reverse Payload Journey é o método registrado",
      "Track to Origin é a missão registrada",
      "a investigação permanece inconclusiva",
    ],
    hypotheses: [
      "a autoridade temporal relevante ainda precisa ser localizada",
      "o caminho do payload pode revelar onde o significado temporal diverge",
      "a perda percebida de visibilidade estrutural pode ter dificultado a explicação do flow",
    ],
    unknowns: [
      "nome técnico completo do flow",
      "estrutura interna publicável do payload",
      "componentes e checkpoints confirmados por artefatos",
      "primeiro ponto causal de divergência",
      "datas de abertura e atualização da investigação",
      "restauração implementada ou validada",
    ],
    limitations: [
      "caso interno criado e investigado pela própria autora do método",
      "investigação assistida por IA",
      "ausência de replicação externa",
      "artefatos técnicos do caso não localizados neste repositório",
      "flow parcial e ainda em reconstrução",
      "nenhuma restauração validada foi localizada",
    ],
    restoration: "Não localizada",
    validation: "Ainda não validada",
    nextSteps: [
      "localizar uma fonte técnica publicável do comportamento observado",
      "documentar o caminho operacional sem expor dados sensíveis",
      "posicionar e registrar checkpoints verificáveis",
      "confrontar a autoridade temporal com evidências",
    ],
    authorizedClaims: [
      "o LAB está aplicando instrumentos autorais a um caso interno real",
      "o caso documenta uma pergunta e uma anomalia temporal em investigação",
      "as fontes localizadas sustentam aplicação, não eficácia",
    ],
    prohibitedClaims: [
      "o caso prova eficácia, transferibilidade ou validade universal",
      "o método reduz onboarding, bugs ou tempo de investigação",
      "a origem causal foi comprovada",
      "uma restauração foi implementada ou validada",
    ],
  },
] as const satisfies readonly PublicCaseRecord[];

export const labLogEntries = [] as const satisfies readonly LabLogEntry[];

export const casesPageContent = {
  hero: {
    description: [
      "Os casos do Payload Journey LAB mostram como os métodos são aplicados em sistemas reais. Cada investigação separa fatos, hipóteses, desconhecidos, evidências e limites antes de declarar uma conclusão.",
      "Um caso demonstra o trabalho realizado naquele contexto. Não demonstra automaticamente eficácia geral, transferibilidade ou validade universal.",
    ],
    primaryCta: { label: "Explorar o caso HORA.city", href: "#case-hora-city" },
  },
  readingGuide: {
    eyebrow: "COMO LER UM CASO",
    title: "O que está confirmado e o que ainda não sabemos",
    description:
      "Cada bloco declara a força do que está sendo apresentado para que uma observação não seja confundida com conclusão.",
    items: [
      { title: "Estado", description: "Posição documental atual na investigação." },
      { title: "Evidência", description: "Fonte localizada e o limite do claim que ela sustenta." },
      { title: "Fato", description: "Informação confirmada pelas fontes disponíveis." },
      { title: "Hipótese", description: "Explicação que ainda precisa ser confrontada." },
      { title: "Desconhecido", description: "Lacuna preservada sem preenchimento especulativo." },
      { title: "Limitação", description: "Condição que restringe interpretação e generalização." },
    ],
  },
  registry: {
    eyebrow: "REGISTRO PÚBLICO",
    title: "Um caso localizado, sem simular escala",
    description:
      "O inventário atual contém somente HORA.city. Novos casos dependerão de identidade, escopo, estado, fontes e evidências rastreáveis.",
  },
  evidence: {
    eyebrow: "EVIDÊNCIAS DISPONÍVEIS",
    title: "Fontes públicas localizadas; materiais internos permanecem restritos",
    description:
      "As duas fontes abaixo sustentam a existência e o estado público do caso. O conjunto documental interno do protocolo existe, mas não substitui a publicação de evidências específicas desta investigação.",
  },
  timeline: {
    eyebrow: "LINHA DE INVESTIGAÇÃO",
    title: "Cronologia pública ainda não localizada",
    description:
      "Nenhum conjunto de marcos com data, estado, descrição e evidência relacionada foi localizado. Datas não serão inferidas a partir do site ou de documentos de sprint.",
  },
  future:
    "Próximos casos dependerão de novas investigações documentadas.",
  continuation: [
    { label: "Conhecer os métodos", href: "/method" },
    { label: "Executar o protocolo", href: "/protocol" },
    { label: "Ver a prática", href: "/investigation" },
    { label: "Começar a aprender", href: "/learn" },
  ],
} as const;

export const labLogPageContent = {
  hero: {
    description: [
      "O LabLog registra decisões, perguntas, checkpoints, evidências, mudanças de hipótese e limites quando uma entrada possui data e fonte verificável.",
      "Uma entrada documenta o estado do trabalho em determinada data. Ela não substitui o caso completo nem transforma uma observação provisória em conclusão.",
    ],
    primaryCta: { label: "Ver os casos", href: "/cases" },
    secondaryCta: { label: "Conhecer o protocolo", href: "/protocol" },
  },
  guide: {
    eyebrow: "O QUE É UMA ENTRADA",
    title: "Um registro datado, não um caso completo",
    description:
      "Uma entrada precisa declarar data, pergunta, trabalho realizado, evidência, desconhecidos, próximos passos, autoria e assistência de IA quando aplicável.",
  },
  inventory: {
    eyebrow: "INVENTÁRIO REAL",
    title: "Nenhuma entrada pública foi autorizada",
    description:
      "O LabLog ainda não possui uma publicação que satisfaça o contrato editorial e a autorização pública. Isso não significa ausência de documentação interna, que sustenta o trabalho investigativo sem se tornar automaticamente uma publicação.",
    status: "0 entradas publicadas",
  },
  relation: {
    eyebrow: "RELAÇÃO COM OS CASOS",
    title: "O caso agrega; o LabLog preserva momentos",
    description:
      "O caso mostra o conjunto da investigação. O LabLog preserva como ela evoluiu no tempo.",
  },
  provenance: {
    eyebrow: "PROVENIÊNCIA",
    title: "Responsabilidade humana permanece explícita",
    items: [
      { title: "Fonte original", description: "Material localizado do qual a entrada deriva." },
      { title: "Resumo editorial", description: "Síntese pública sem ampliar o claim da fonte." },
      { title: "Evidência técnica", description: "Artefato relacionado ao trabalho descrito." },
      { title: "Interpretação", description: "Leitura identificada como interpretação, não fato." },
      { title: "Assistência de IA", description: "Apoio declarado sem transferir autoria ou decisão." },
      { title: "Conclusão humana", description: "Publicação e limites aprovados por responsabilidade humana." },
    ],
  },
  themes: labLogContent.themes,
  channel: {
    status:
      "O canal oficial no YouTube é https://www.youtube.com/@PayloadJourneyLAB. Um vídeo pode acompanhar uma publicação, mas não substitui os critérios editoriais de uma entrada do LabLog.",
  },
  continuation: [
    { label: "Ver os casos", href: "/cases" },
    { label: "Conhecer os métodos", href: "/method" },
    { label: "Executar o protocolo", href: "/protocol" },
    { label: "Começar a aprender", href: "/learn" },
    { label: "Conhecer o LAB", href: "/lab" },
  ],
} as const;
