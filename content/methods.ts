import type {
  InvestigationPagePresentation,
  InvestigationStep,
  LearningMethod,
  MethodPagePresentation,
  ProtocolPagePresentation,
} from "@/types/content";

export const canonicalMethodDefinitions = {
  payloadJourney:
    "Payload Journey é o acompanhamento de uma operação através das representações, camadas, interpretações, decisões, estados e efeitos que compõem sua execução.",
  payloadTracing:
    "Payload Tracing é a prática de acompanhar um payload e suas transformações para reconstruir o flow e a causalidade de uma operação.",
  softwareSystemInvestigation:
    "Software System Investigation é a prática estruturada de compreender sistemas por meio de modelagem, tracing, checkpoints, runtime e evidências.",
  traceEngineering:
    "Trace Engineering é o conjunto de capacidades utilizadas para seguir operações, localizar decisões, confrontar modelo e execução e produzir explicações verificáveis.",
  traceEngineer:
    "Trace Engineer é a função investigativa exercida por quem segue operações, payloads, transformações e decisões para compreender e explicar o comportamento de um sistema com base em evidências.",
  usmt:
    "A USMT é o instrumento utilizado para explicitar o modelo esperado de estados, eventos, transições, regras, invariantes e limites de um sistema.",
  operationalPayloadPath:
    "O Operational Payload Path representa o caminho operacional provável ou confirmado percorrido por um payload entre componentes e camadas.",
  reversePayloadJourney:
    "Reverse Payload Journey é a investigação que parte de uma anomalia ou efeito observado e percorre o flow em direção à sua origem causal.",
  trackToOrigin:
    "Track to Origin é a prática de continuar o tracing até localizar a origem e a autoridade da decisão investigada.",
  protocol:
    "Congelar, Mapear, Detectar e Restaurar é o protocolo geral utilizado para preservar o comportamento observado, reconstruir o flow, localizar divergências e validar uma restauração.",
} as const;

export const methodsSectionContent = {
  historicalPresentation: {
    eyebrow: "MÉTODOS PARA COMPREENDER SISTEMAS",
    title: "Métodos para compreender sistemas",
    intro:
      "O LAB organiza observação, modelagem e investigação em métodos complementares.",
  },
  eyebrow: "Mapa dos instrumentos",
  title: "Cada instrumento reduz uma parte diferente da incerteza",
  intro:
    "Definição, pergunta, ponto de partida, resultado esperado, momento de uso, relação, status e limites tornam cada instrumento comparável.",
  distinction:
    "Software System Investigation é a prática. Trace Engineering reúne capacidades. Trace Engineer é a função investigativa. Os instrumentos respondem perguntas. O protocolo organiza a sequência. Evidências sustentam ou refutam hipóteses.",
  relation:
    "Os instrumentos podem aparecer em ordens diferentes conforme a pergunta e o estado da investigação.",
  traceStack: "trace stack: modelo / operação / evidência / origem",
} as const;

export const methodsContent = [
  {
    id: "payload-journey",
    title: "Payload Journey",
    category: "Instrumento de observação",
    description: canonicalMethodDefinitions.payloadJourney,
    definition: canonicalMethodDefinitions.payloadJourney,
    purpose: "Acompanhar uma operação e suas representações através do sistema.",
    startingPoint: "Uma operação concreta.",
    whenToUse:
      "Quando é necessário compreender por onde uma operação passa e como suas representações mudam.",
    question: "Por onde a operação passa e como suas representações mudam?",
    result: "Mapa progressivo do flow.",
    status: "Página canônica disponível",
    limits: [
      "O recorte não representa domínio completo da codebase.",
      "O caminho inicial pode precisar ser revisto diante da execução observada.",
    ],
    evidence: "Conteúdo estruturado e rota pública /payload-journey.",
    canonicalHref: "/payload-journey",
    claimKind: "Estado documentado",
    relatedSteps: ["map", "restore"],
    relationship:
      "Torna o percurso observável e fornece o recorte que pode ser organizado no Operational Payload Path.",
    currentSection: "metodos",
    futureSection: "methods-and-instruments",
    currentOrder: 1,
    futureOrder: 1,
  },
  {
    id: "usmt",
    title: "USMT",
    category: "Instrumento de modelagem",
    description: canonicalMethodDefinitions.usmt,
    definition: canonicalMethodDefinitions.usmt,
    purpose: "Explicitar o comportamento esperado e seus limites verificáveis.",
    startingPoint: "Comportamento esperado, domínio ou especificação.",
    whenToUse:
      "Quando é necessário confrontar observações com estados, regras, transições e invariantes explícitos.",
    question: "O que deveria acontecer para que o sistema permaneça válido?",
    result:
      "Modelo explícito de estados, eventos, transições, regras, invariantes e limites.",
    status: "Página canônica disponível",
    limits: [
      "O modelo pode estar incompleto ou incorreto.",
      "Documentação e execução observada precisam ser confrontadas.",
    ],
    evidence: "Conteúdo estruturado e rota pública /usmt.",
    canonicalHref: "/usmt",
    claimKind: "Estado documentado",
    relatedSteps: ["freeze", "detect", "restore"],
    relationship:
      "Explicita o esperado para orientar checkpoints, detectar divergências e validar uma restauração.",
    currentSection: "metodos",
    futureSection: "methods-and-instruments",
    currentOrder: 2,
    futureOrder: 2,
  },
  {
    id: "reverse-payload-journey",
    title: "Reverse Payload Journey",
    category: "Instrumento de investigação",
    description: canonicalMethodDefinitions.reversePayloadJourney,
    definition: canonicalMethodDefinitions.reversePayloadJourney,
    purpose: "Reconstruir o caminho causal de uma anomalia ou efeito observado.",
    startingPoint: "Sintoma, divergência, estado inesperado ou campo incorreto.",
    whenToUse: "Quando existe um efeito observável e sua origem ainda não é conhecida.",
    question: "De onde veio a anomalia observada?",
    result: "Caminho causal reconstruído em direção à origem.",
    status: "Documentado",
    limits: [
      "Não possui rota própria nesta sprint.",
      "Uma reconstrução causal exige evidências; a ordem reversa não prova causa por si só.",
    ],
    evidence: "Definição em content/methods.ts e aplicação narrativa no caso HORA.city.",
    claimKind: "Estado documentado",
    relatedSteps: ["freeze", "map", "detect"],
    relationship:
      "Parte do efeito observado, usa o caminho e os checkpoints e pode conduzir a Track to Origin.",
    currentSection: "metodos",
    futureSection: "methods-and-instruments",
    currentOrder: 3,
    futureOrder: 3,
  },
  {
    id: "operational-payload-path",
    title: "Operational Payload Path",
    category: "Instrumento de mapping",
    description: canonicalMethodDefinitions.operationalPayloadPath,
    definition: canonicalMethodDefinitions.operationalPayloadPath,
    purpose: "Organizar o caminho operacional de um flow selecionado.",
    startingPoint: "Flow selecionado e codebase real.",
    whenToUse:
      "Quando componentes, camadas, operações, fronteiras e checkpoints precisam formar uma rota confrontável.",
    question: "Qual é o caminho operacional provável ou confirmado desta operação?",
    result: "Representação dos componentes, camadas, operações e checkpoints.",
    status: "Documentado",
    limits: [
      "Um caminho provável não deve ser apresentado como confirmado.",
      "Nenhum ficheiro canônico de OPP produzido foi localizado no repositório.",
    ],
    evidence: "Definição estruturada em content/methods.ts.",
    claimKind: "Estado documentado",
    relatedSteps: ["map"],
    relationship:
      "Organiza o percurso observado pelo Payload Journey e posiciona pontos candidatos a checkpoints.",
    currentSection: "metodos",
    futureSection: "methods-and-instruments",
    currentOrder: 4,
    futureOrder: 4,
  },
  {
    id: "track-to-origin",
    title: "Track to Origin",
    category: "Prática de origem e autoridade",
    description: canonicalMethodDefinitions.trackToOrigin,
    definition: canonicalMethodDefinitions.trackToOrigin,
    purpose: "Continuar a investigação até a origem e a autoridade da decisão.",
    startingPoint: "Payload, decisão, transformação ou divergência.",
    whenToUse:
      "Quando a divergência está delimitada, mas a origem ou a responsabilidade ainda não está sustentada.",
    question: "Onde nasce a decisão e quem possui autoridade sobre ela?",
    result: "Origem e autoridade identificadas com o limite das evidências disponíveis.",
    status: "Em desenvolvimento",
    limits: [
      "Não garante uma causa única ou definitiva.",
      "A autoridade identificada precisa ser sustentada por fonte e execução observada.",
    ],
    evidence: "Definição autoral e uso narrativo no caso HORA.city.",
    claimKind: "Em desenvolvimento",
    relatedSteps: ["detect", "restore"],
    relationship:
      "Aprofunda a divergência localizada e orienta a intervenção causalmente justificada.",
    currentSection: "metodos",
    futureSection: "methods-and-instruments",
    currentOrder: 5,
    futureOrder: 5,
  },
] satisfies LearningMethod[];

export const methodPagePresentation = {
  hero: {
    id: "method",
    eyebrow: "MÉTODOS DO LAB",
    title: "Instrumentos diferentes para perguntas diferentes",
    description: [
      "O Payload Journey LAB não utiliza um único método para todas as situações. Cada instrumento reduz uma parte diferente da incerteza: o modelo esperado, o caminho da operação, a origem da anomalia, a autoridade da decisão ou a evidência necessária.",
    ],
    primaryCta: { label: "Conhecer o protocolo", href: "/protocol", state: "internal" },
    secondaryCta: {
      label: "Ver a prática investigativa",
      href: "/investigation",
      state: "internal",
    },
  },
  taxonomy: {
    eyebrow: "TAXONOMIA METODOLÓGICA",
    title: "Prática, capacidades, função, instrumentos, protocolo e evidência",
    description:
      "Os termos cumprem responsabilidades diferentes e não devem ser usados como sinônimos.",
    items: [
      {
        term: "Software System Investigation",
        role: "Prática",
        description: "É o campo de ação no qual o sistema é investigado.",
      },
      {
        term: "Trace Engineering",
        role: "Capacidades",
        description: "São as capacidades empregadas durante a investigação.",
      },
      {
        term: "Trace Engineer",
        role: "Função investigativa",
        description: "É quem exerce essas capacidades; o perfil permanece em desenvolvimento.",
      },
      {
        term: "Instrumentos",
        role: "Perguntas específicas",
        description: "Modelam, seguem, organizam, observam ou rastreiam uma parte da investigação.",
      },
      {
        term: "Protocolo",
        role: "Sequência geral",
        description: "Congelar, Mapear, Detectar e Restaurar organiza a investigação.",
      },
      {
        term: "Evidência",
        role: "Sustentação",
        description: "Registros observáveis sustentam ou refutam uma hipótese delimitada.",
      },
    ],
  },
  supportingInstruments: {
    eyebrow: "OBSERVAÇÃO E REGISTRO",
    title: "Checkpoints e documentos de investigação",
    description:
      "Os conceitos são documentados; a existência de um nome na metodologia não significa que um ficheiro canônico esteja disponível.",
    items: [
      {
        title: "Checkpoints",
        question: "Que evidência deve ser capturada para confirmar ou refutar a hipótese?",
        result: "Observações comparáveis entre camadas e momentos.",
        status: "Documentado",
        evidence: "Definições no protocolo, na formação e no caso HORA.city.",
      },
      {
        title: "Documentos de investigação",
        question: "Como preservar, confrontar e comunicar o que foi observado?",
        result: "Registros, planos e relatórios pretendidos para organizar evidências.",
        status: "Não localizado",
        evidence:
          "Case Brief, Checkpoint Plan, Freeze Record, Detection Report e pacotes de evidência aparecem como termos, não como ficheiros canônicos.",
      },
    ],
  },
  relationship: {
    eyebrow: "RELAÇÃO ENTRE INSTRUMENTOS",
    title: "Uma sequência possível, não uma receita única",
    description:
      "A ordem varia conforme a pergunta, o que já é conhecido e as evidências disponíveis.",
    steps: [
      { title: "USMT", action: "define o esperado" },
      { title: "Payload Journey", action: "segue a operação" },
      { title: "Operational Payload Path", action: "organiza o caminho" },
      { title: "Checkpoints", action: "capturam evidências" },
      { title: "Reverse Payload Journey", action: "percorre a divergência" },
      { title: "Track to Origin", action: "localiza origem e autoridade" },
      { title: "Protocolo", action: "organiza a investigação completa" },
    ],
  },
  limits: {
    eyebrow: "LIMITES",
    title: "Instrumentos organizam a investigação; não compreendem pelo investigador",
    items: [
      "um mapa inicial pode estar errado",
      "um checkpoint pode observar apenas parte do comportamento",
      "runtime pode contradizer documentação e modelo",
      "uma hipótese precisa ser confrontada",
      "tracing não substitui domínio, arquitetura, debugging, testes ou observabilidade",
      "um caso não demonstra eficácia universal",
    ],
  },
  continuation: [
    { label: "Começar pelo Payload Journey", href: "/payload-journey" },
    { label: "Modelar com a USMT", href: "/usmt" },
    { label: "Executar o protocolo", href: "/protocol" },
    { label: "Ver o caso aplicado", href: "/cases" },
  ],
} as const satisfies MethodPagePresentation;

export const investigationCycle = [
  {
    id: "freeze",
    action: "FREEZE",
    actionPt: "Congelar",
    target: "PAYLOAD",
    number: "01",
    question: "Qual comportamento precisa ser preservado antes de qualquer alteração?",
    objective: "Preservar o estado investigável antes de mudanças.",
    description:
      "Delimite o caso, registre o comportamento observado e preserve o contexto necessário para que outra pessoa reconheça a investigação.",
    inputs: [
      "sistema ou codebase acessível",
      "flow delimitado",
      "comportamento observado",
      "comportamento esperado ou pergunta investigativa",
    ],
    activities: [
      "delimitar o caso",
      "registrar comportamento observado",
      "identificar versão, branch, commit e ambiente",
      "preservar payloads, respostas e estados",
      "formular hipóteses sem tratá-las como conclusão",
    ],
    result: "Contexto preservado de forma suficiente para iniciar a investigação.",
    evidence: "registro do estado e do contexto observado",
    possibleEvidence: [
      "screenshot",
      "log",
      "payload",
      "commit",
      "ambiente",
      "versão",
      "Case Brief ou Freeze Record, se existirem",
    ],
    exitCriterion: "Outro investigador consegue reconhecer o que está sendo investigado.",
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
    objective: "Reconstruir o caminho provável ou confirmado da operação.",
    description:
      "Identifique componentes, camadas, representações, transformações, decisões, estados e pontos candidatos a checkpoints.",
    inputs: ["caso congelado", "flow selecionado", "payload identificado"],
    activities: [
      "identificar origem causal",
      "localizar componentes",
      "reconhecer payloads e representações",
      "identificar decisões e estados",
      "elaborar Operational Payload Path",
      "planejar checkpoints",
    ],
    result: "Hipótese de caminho operacional explícita e confrontável.",
    evidence: "referências de código, mapa do flow e checkpoints candidatos",
    possibleEvidence: [
      "code references",
      "Operational Payload Path",
      "diagramas",
      "payload schemas",
      "chamadas",
      "eventos",
      "Checkpoint Plan, se existir",
    ],
    exitCriterion: "Existe uma hipótese de flow suficientemente precisa para ser testada.",
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
    objective: "Confrontar modelo, hipótese e runtime.",
    description:
      "Execute o flow, compare representações e invariantes e procure o primeiro ponto de divergência sustentado pelas evidências observadas.",
    inputs: ["flow mapeado", "checkpoints planejados", "comportamento esperado ou modelo"],
    activities: [
      "instrumentar checkpoints",
      "executar o flow",
      "comparar representações",
      "verificar invariantes",
      "localizar o primeiro ponto de divergência",
      "identificar autoridade e revisar hipóteses",
    ],
    result:
      "Divergência localizada ou comportamento explicado dentro do limite das evidências coletadas.",
    evidence: "registros comparáveis da execução observada",
    possibleEvidence: [
      "logs estruturados",
      "traces",
      "snapshots",
      "payloads",
      "estados persistidos",
      "respostas",
      "Trace Evidence Record ou Detection Report, se existirem",
    ],
    exitCriterion:
      "A conclusão possui evidência suficiente para justificar ou rejeitar uma intervenção delimitada.",
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
    objective: "Modificar o sistema de maneira causalmente justificada e validar o resultado.",
    description:
      "Defina a menor intervenção sustentada pela investigação, preserve invariantes e repita os checkpoints antes de concluir.",
    inputs: ["conclusão sustentada por evidências", "autoridade ou regra investigada"],
    activities: [
      "definir restauração mínima",
      "preservar invariantes",
      "implementar mudança",
      "repetir checkpoints",
      "comparar antes e depois",
      "atualizar modelo e documentação",
    ],
    result:
      "Comportamento confrontado novamente com o esperado, ou uma nova hipótese documentada.",
    evidence: "comparação antes/depois e validação pelo mesmo flow",
    possibleEvidence: [
      "diff",
      "testes",
      "logs",
      "nova execução",
      "comparação",
      "pacote de evidência, se existir",
      "USMT Evidence-Aligned, se existir",
    ],
    exitCriterion:
      "O comportamento após a intervenção foi confrontado com o esperado e documentado.",
    relatedMethods: ["track-to-origin", "usmt", "payload-journey"],
    currentOrder: 4,
    futureSection: "investigation-procedure",
  },
] satisfies InvestigationStep[];

export const investigationCycleSummary = "Congelar. Mapear. Detectar. Restaurar.";

export const investigationCycleSectionContent = {
  eyebrow: "Fases do protocolo",
  title: "Quatro fases, com retornos quando a evidência exige",
  description:
    "Cada fase tem objetivo, entradas, atividades, evidências possíveis, resultado condicionado e critério de saída.",
  distinction:
    "O protocolo organiza a sequência. Os instrumentos apoiam cada fase. A evidência pode obrigar a investigação a retornar e rever o recorte.",
} as const;

export const protocolPagePresentation = {
  hero: {
    id: "protocol",
    eyebrow: "PROTOCOLO GERAL",
    title: "Congelar. Mapear. Detectar. Restaurar.",
    description: [
      "O protocolo organiza uma investigação para evitar que o sistema seja modificado antes de o comportamento observado, o caminho operacional e as evidências necessárias terem sido preservados.",
      canonicalMethodDefinitions.protocol,
    ],
    primaryCta: { label: "Ver os métodos", href: "/method", state: "internal" },
    secondaryCta: { label: "Ver um caso", href: "/cases", state: "internal" },
  },
  minimumInputs: {
    eyebrow: "ANTES DE INICIAR",
    title: "Entradas mínimas dependem do caso",
    description:
      "Nem toda investigação exige o mesmo conjunto, mas o recorte precisa ser observável e registrável.",
    items: [
      "sistema ou codebase acessível",
      "flow delimitado",
      "comportamento observado",
      "comportamento esperado ou pergunta investigativa",
      "ambiente de execução",
      "possibilidade de registrar evidências",
    ],
  },
  iteration: {
    eyebrow: "ITERAÇÃO",
    title: "A investigação pode voltar quando o modelo deixa de explicar o observado",
    description:
      "As fases orientam o trabalho, mas não formam um fluxo linear rígido.",
    returns: [
      {
        from: "Detectar",
        to: "Mapear",
        reason: "quando os checkpoints revelam que o caminho estava incompleto",
      },
      {
        from: "Restaurar",
        to: "Detectar",
        reason: "quando a nova execução ainda contradiz o comportamento esperado",
      },
      {
        from: "Mapear",
        to: "Congelar",
        reason: "quando o caso foi delimitado de forma insuficiente",
      },
    ],
  },
  artifacts: {
    eyebrow: "ARTEFATOS E ESTADOS REAIS",
    title: "Nomear um artefato não significa que ele já esteja disponível",
    description:
      "O inventário separa conceitos documentados, registros públicos do caso e ficheiros canônicos não localizados.",
    items: [
      {
        title: "Operational Payload Path",
        description: "Instrumento para representar o caminho operacional provável ou confirmado.",
        status: "Documentado",
        evidence: "Definição em content/methods.ts; nenhum OPP produzido foi localizado.",
      },
      {
        title: "Checkpoints",
        description: "Pontos deliberados de observação e coleta de evidência.",
        status: "Documentado",
        evidence: "Definições no protocolo, formação e narrativa do HORA.city.",
      },
      {
        title: "Evidências públicas do HORA.city",
        description: "Fatos e estado documental apresentados na rota de casos.",
        status: "Em uso no caso",
        evidence: "content/hora-city.ts e rota /cases.",
      },
      {
        title: "Case Brief",
        description: "Registro pretendido para delimitação do caso.",
        status: "Não localizado",
        evidence: "Menções documentais; nenhum ficheiro canônico localizado.",
      },
      {
        title: "Checkpoint Plan",
        description: "Plano pretendido para posicionamento de checkpoints.",
        status: "Não localizado",
        evidence: "Menções documentais; nenhum ficheiro canônico localizado.",
      },
      {
        title: "Freeze Record",
        description: "Registro pretendido do estado congelado.",
        status: "Não localizado",
        evidence: "Menções documentais; nenhum ficheiro canônico localizado.",
      },
      {
        title: "Detection Report",
        description: "Relatório pretendido para comunicar divergências e evidências.",
        status: "Não localizado",
        evidence: "Menções documentais; nenhum ficheiro canônico localizado.",
      },
      {
        title: "Trace Evidence Record / Package",
        description: "Registros e pacote pretendidos para preservar evidências revisáveis.",
        status: "Não localizado",
        evidence: "Menções documentais; nenhum ficheiro canônico localizado.",
      },
      {
        title: "USMT Evidence-Aligned",
        description: "Artefato pretendido para alinhar modelo e evidência.",
        status: "Não localizado",
        evidence: "Menções documentais; nenhum ficheiro canônico localizado.",
      },
    ],
  },
  limits: {
    eyebrow: "LIMITES DO PROTOCOLO",
    title: "Um procedimento não elimina incerteza nem julgamento",
    items: [
      "não substitui testes",
      "não substitui revisão de código",
      "não substitui observabilidade",
      "não elimina julgamento humano",
      "não garante causa raiz em qualquer investigação",
      "não impede toda regressão",
      "não é norma certificada",
      "ainda está sendo confrontado com casos e uso externo",
    ],
  },
  continuation: [
    { label: "Rever os métodos", href: "/method" },
    { label: "Conhecer a prática", href: "/investigation" },
    { label: "Examinar o caso", href: "/cases" },
    { label: "Começar a aprender", href: "/learn" },
  ],
} as const satisfies ProtocolPagePresentation;

export const heroInvestigationPanel = {
  state: "TRACK MODE ACTIVE",
  command: ">_ payload.route.observe()",
  chips: [
    { label: "TRACK MODE", tone: "technical" },
    { label: "EVIDENCE", tone: "cta" },
    { label: "AUTHORITY", tone: "neutral" },
  ],
} as const;

export const investigativePractice = [
  {
    id: "track-mode",
    title: "Track Mode",
    description: "Postura operacional de observar antes de modificar.",
  },
  {
    id: "trace-engineer",
    title: "Trace Engineer",
    description: "Função e perfil investigativo em desenvolvimento.",
  },
  {
    id: "software-system-investigation",
    title: "Software System Investigation",
    description: "Prática estruturada autoral.",
  },
] as const;

export const ecosystemFlow = [
  "Track Mode",
  "Reverse Payload Journey",
  "Track to Origin",
  "Evidência",
  "Restauração",
] as const;

export const ecosystemFlowDescription =
  "O Track Mode prioriza observação. Reverse Payload Journey reconstrói o caminho. Track to Origin procura origem e autoridade. Evidências sustentam ou refutam a intervenção.";

export const investigativePracticePresentation = {
  hero: {
    id: "investigation",
    eyebrow: "SOFTWARE SYSTEM INVESTIGATION",
    title: "Compreender antes de modificar",
    description: [
      canonicalMethodDefinitions.softwareSystemInvestigation,
      "Ela começa por uma pergunta, delimita uma operação e reconstrói como o sistema transforma intenção ou ocorrência em decisão, estado e efeito observável.",
    ],
    primaryCta: { label: "Conhecer o protocolo", href: "/protocol", state: "internal" },
    secondaryCta: { label: "Ver os métodos", href: "/method", state: "internal" },
  },
  characteristics: {
    eyebrow: "A PRÁTICA",
    title: "Uma investigação começa por uma pergunta delimitada",
    description:
      "Investigar não é preencher lacunas com suposição nem modificar antes de compreender.",
    items: [
      "distinguir observado de esperado",
      "registrar contexto",
      "formular hipóteses",
      "seguir causalidade",
      "produzir evidências",
      "identificar autoridade",
      "reconhecer incerteza",
      "documentar conclusões",
      "validar intervenções",
    ],
  },
  trackMode: {
    id: "track-mode",
    title: "Track Mode",
    definition:
      "Track Mode é a postura operacional na qual mudanças especulativas são suspensas e a prioridade passa a ser observar, delimitar, seguir uma operação e preservar evidências.",
    principle: "Observe antes de modificar.",
    actions: [
      "reduzir o recorte",
      "selecionar um flow",
      "acompanhar o payload",
      "não preencher lacunas com suposição",
      "registrar checkpoints",
      "continuar até localizar origem e autoridade",
    ],
  },
  traceEngineering: {
    id: "trace-engineering",
    title: "Trace Engineering",
    definition: canonicalMethodDefinitions.traceEngineering,
    status: "Capacidades em desenvolvimento",
    capabilities: [
      "delimitação de flows",
      "leitura orientada por operação",
      "modelagem do esperado",
      "payload tracing",
      "interpretação entre camadas",
      "identificação de domínio",
      "raciocínio causal",
      "desenho de checkpoints",
      "análise de runtime",
      "validação de invariantes",
      "documentação de evidências",
      "comunicação de incerteza",
      "validação de restaurações",
    ],
  },
  traceEngineer: {
    id: "trace-engineer",
    title: "Trace Engineer",
    definition: canonicalMethodDefinitions.traceEngineer,
    status: "Função e perfil investigativo em desenvolvimento",
    responsibilities: [
      "delimitar casos e operações",
      "seguir payloads e transformações",
      "posicionar checkpoints",
      "interpretar evidências",
      "rastrear decisões e autoridade",
      "documentar incerteza e conclusões",
      "validar restaurações",
    ],
    caveats: [
      "não é profissão consolidada",
      "não é cargo reconhecido",
      "não é certificação oficial",
      "não representa domínio universal",
      "as capacidades ainda estão sendo formalizadas e testadas",
    ],
  },
  softwareSystemInvestigation: {
    id: "software-system-investigation",
    title: "Software System Investigation",
    definition: canonicalMethodDefinitions.softwareSystemInvestigation,
    status: "Prática estruturada autoral",
  },
  questions: {
    eyebrow: "PERGUNTAS INVESTIGATIVAS",
    title: "Perguntas tornam o recorte confrontável",
    items: [
      "Qual operação está sendo investigada?",
      "Qual é sua origem causal?",
      "Que payload representa a intenção?",
      "Em que camada o significado muda?",
      "Quem possui autoridade para decidir?",
      "Que invariantes devem permanecer verdadeiras?",
      "Qual foi o primeiro ponto de divergência?",
      "Que evidência sustenta essa conclusão?",
      "A restauração foi validada em runtime?",
      "O modelo precisa ser corrigido?",
    ],
  },
  relations: {
    eyebrow: "PRÁTICAS COMPLEMENTARES",
    title: "Tracing conecta perspectivas; não as substitui",
    principle: "Tracing conecta perspectivas; não as substitui.",
    items: [
      {
        title: "Arquitetura",
        description: "Mostra organização, componentes e responsabilidades.",
      },
      {
        title: "Leitura de código",
        description: "Mostra estrutura e implementação.",
      },
      {
        title: "Testes",
        description: "Verificam comportamentos e contratos definidos.",
      },
      {
        title: "Debugging",
        description: "Localiza e corrige comportamentos problemáticos.",
      },
      {
        title: "Observabilidade",
        description: "Oferece logs, métricas, traces e sinais sobre a execução.",
      },
      {
        title: "Software System Investigation",
        description:
          "Combina essas fontes com modelagem, causalidade, checkpoints e evidências para reconstruir uma operação.",
      },
    ],
  },
  authority: {
    eyebrow: "AUTORIDADE E RESPONSABILIDADE",
    title: "Cada conclusão precisa declarar de onde vem",
    description: [
      "Uma decisão deve possuir origem, uma transformação deve possuir responsabilidade e uma conclusão deve possuir evidência.",
      "A IA pode auxiliar exploração, documentação e confronto de hipóteses. A autoridade final sobre critérios, intervenção e conclusão permanece humana.",
    ],
    principles: [
      "uma alteração deve preservar invariantes",
      "evidência limita a conclusão",
      "incerteza deve ser comunicada",
      "responsabilidade não é delegada à IA",
    ],
  },
  limits: {
    eyebrow: "LIMITES ATUAIS",
    title: "O campo está sendo formalizado e confrontado",
    current: [
      "os métodos estão em desenvolvimento",
      "a eficácia pedagógica ainda é hipótese",
      "transferibilidade ainda não foi demonstrada",
      "casos externos ainda são necessários",
      "aplicação distribuída está em aprofundamento",
      "o LAB não oferece certificação profissional",
    ],
    future: {
      status: "Direção futura de pesquisa e formação",
      description:
        "O LAB pretende conectar progressivamente tracing, timing, requisitos e contextos industriais sem declarar competência atual.",
      topics: [
        "sistemas distribuídos",
        "eventos",
        "concorrência",
        "timing",
        "requisitos",
        "requirements-to-runtime traceability",
        "sistemas industriais",
        "mission-critical",
      ],
    },
  },
  continuation: [
    { label: "Ver os métodos", href: "/method" },
    { label: "Executar o protocolo", href: "/protocol" },
    { label: "Começar a aprender", href: "/learn" },
    { label: "Ver os casos", href: "/cases" },
  ],
} as const satisfies InvestigationPagePresentation;
