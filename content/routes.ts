import { siteConfig } from "@/config/site";

export const thematicRoutes = {
  payloadJourney: {
    path: "/payload-journey",
    eyebrow: "Payload Journey",
    title: "Siga a informação através do sistema",
    description:
      "Aprenda a escolher um flow, encontrar o payload, acompanhar suas transformações e localizar onde decisões acontecem.",
    metadataTitle: "Payload Journey — Siga o payload, entenda o sistema",
    metadataDescription:
      "Aprenda a seguir uma operação por eventos, payloads, camadas, decisões, estados e efeitos observáveis para construir uma compreensão progressiva do sistema.",
  },
  learn: {
    path: "/learn",
    eyebrow: "Aprender Software System Investigation",
    title: "Começar por um payload. Avançar para o sistema.",
    description:
      "Uma progressão de aprendizagem para estudantes e developers compreenderem sistemas a partir de operações concretas.",
    metadataDescription:
      "Aprenda progressivamente a seguir flows, payloads, decisões e evidências de runtime, do primeiro evento à investigação estruturada de sistemas de software.",
    metadataTitle:
      "Aprender Software System Investigation — Payload Journey LAB",
  },
  cases: {
    path: "/cases",
    eyebrow: "CASOS E EVIDÊNCIAS",
    title: "Investigações reais, conclusões proporcionais às evidências",
    description:
      "Os casos do Payload Journey LAB mostram como os métodos são aplicados em sistemas reais, separando fatos, hipóteses, desconhecidos, evidências e limites.",
    metadataDescription:
      "Explore o caso HORA.city com flows, estados, hipóteses, evidências, limitações e conclusões proporcionais ao que foi observado.",
    metadataTitle: "Casos e Evidências — Payload Journey LAB",
  },
  usmt: {
    path: "/usmt",
    eyebrow: "Modelagem",
    title: `${siteConfig.usmt.alternateName} — ${siteConfig.usmt.name}`,
    description:
      "Um modelo estrutural para explicitar estados, eventos, regras, invariantes, camadas e limites verificáveis.",
    metadataTitle: "USMT — Modelo esperado de sistemas de software",
    metadataDescription:
      "Use a USMT para explicitar estados, eventos, transições, regras, invariantes e limites e confrontar o modelo esperado com o comportamento observado.",
  },
  method: {
    path: "/method",
    eyebrow: "Métodos do LAB",
    title: "Instrumentos diferentes para perguntas diferentes",
    description:
      "Cada instrumento reduz uma parte diferente da incerteza: o modelo esperado, o caminho da operação, a origem da anomalia, a autoridade da decisão ou a evidência necessária.",
    metadataDescription:
      "Conheça os instrumentos do LAB e as perguntas que Payload Journey, USMT, Reverse Payload Journey, Operational Payload Path e Track to Origin ajudam a investigar.",
    metadataTitle: "Métodos do Payload Journey LAB",
  },
  protocol: {
    path: "/protocol",
    eyebrow: "Procedimento investigativo",
    title: "Congelar. Mapear. Detectar. Restaurar.",
    description:
      "O processo operacional do Payload Journey LAB preserva o comportamento, produz evidências, localiza divergências e valida a restauração.",
    metadataDescription:
      "Conheça o protocolo do LAB para delimitar flows, preservar comportamentos, produzir evidências, localizar divergências e validar restaurações.",
    metadataTitle: "Congelar, Mapear, Detectar e Restaurar",
  },
  investigation: {
    path: "/investigation",
    eyebrow: "Prática investigativa",
    title: "Compreender antes de modificar",
    description:
      "Software System Investigation estrutura perguntas, tracing, checkpoints, runtime e evidências para compreender sistemas antes de intervir.",
    metadataDescription:
      "Compreenda a prática que combina modelagem, payload tracing, checkpoints, runtime e evidências para explicar como operações se transformam em decisões e estados.",
    metadataTitle: "Software System Investigation e Trace Engineering",
  },
  lab: {
    path: "/lab",
    eyebrow: "PAYLOAD JOURNEY LAB",
    title: "Um laboratório para investigar como sistemas realmente funcionam",
    description:
      "Conheça a missão, a origem e a construção do Payload Journey LAB, um laboratório autoral de formação, pesquisa metodológica e investigação aplicada em sistemas de software.",
    metadataDescription:
      "Conheça a missão, a origem e a construção do Payload Journey LAB, um laboratório de formação, pesquisa metodológica e investigação aplicada em sistemas de software.",
    metadataTitle: "Sobre o Payload Journey LAB",
  },
  ecosystem: {
    path: "/ecosystem",
    eyebrow: "Ecossistema",
    title: "Quatro áreas conectadas pelo mesmo propósito",
    description:
      "Formação, pesquisa metodológica, investigação aplicada e colaboração como possibilidades do ecossistema do LAB.",
    metadataTitle: "Ecossistema do Payload Journey LAB",
    metadataDescription:
      "Conheça como o LAB conecta formação, pesquisa metodológica, investigação aplicada, casos e futuras possibilidades de colaboração.",
  },
  lablog: {
    path: "/lablog",
    eyebrow: "LABLOG",
    title: "A investigação enquanto acontece",
    description:
      "O LabLog preserva registros datados de decisões, perguntas, checkpoints, evidências, mudanças de hipótese e limites quando essas entradas possuem fonte verificável.",
    metadataDescription:
      "Conheça o espaço destinado a registros datados de investigação, checkpoints, hipóteses, decisões e evidências do Payload Journey LAB.",
    metadataTitle: "LabLog — Investigação em andamento",
  },
} as const;

export const homepageSummaries = {
  whyNow: {
    eyebrow: "Por que agora",
    title: "Produzir código ficou mais rápido. Construir compreensão continua sendo trabalho humano.",
    description: [
      "A aceleração promovida por IA amplia a quantidade de código, decisões e dependências que uma pessoa precisa interpretar.",
      "Sem uma forma de reconstruir causalidade, velocidade de produção não garante clareza sobre o comportamento do sistema.",
    ],
    principle:
      "A IA deve ampliar a capacidade de compreensão dos engenheiros, não substituir sua autoridade sobre o sistema.",
    signals: ["Código acelerado por IA", "Compreensão verificável", "Autoridade humana"],
  },
  proposal: {
    eyebrow: "A proposta",
    title: "Siga uma operação concreta até tornar sua causalidade visível",
    description:
      "Em vez de tentar compreender a codebase inteira, escolha um flow e acompanhe a informação pelos pontos em que ela é criada, transportada, interpretada e transformada em efeito.",
    sequence: [
      "Intenção",
      "Evento",
      "Payload",
      "Interpretação",
      "Decisão",
      "Estado",
      "Efeito",
    ],
    note:
      "O payload funciona como fio condutor; checkpoints produzem evidências; a investigação segue a causalidade até a autoridade de domínio relevante.",
  },
  method: {
    eyebrow: "Métodos como resposta",
    title: "Instrumentos para investigar o flow",
    description:
      "Cada instrumento responde a uma pergunta diferente e conecta o comportamento esperado, o flow observado e a evidência produzida.",
    href: "/method",
    cta: "Ver todos os métodos",
    items: [
      {
        label: "Modelar",
        title: "USMT",
        description:
          "Compreenda estados, eventos, regras, invariantes, camadas e limites do sistema.",
        href: "/usmt",
        cta: "Conhecer a USMT",
      },
      {
        label: "Rastrear",
        title: "Payload Journey",
        description:
          "Siga o comportamento real do payload através das camadas do sistema.",
        href: "/payload-journey",
        cta: "Explorar o Payload Journey",
      },
      {
        label: "Investigar",
        title: "Congelar → Mapear → Detectar → Restaurar",
        description:
          "Produza evidências, localize divergências e valide a restauração.",
        href: "/protocol",
        cta: "Ver o protocolo investigativo",
      },
    ],
  },
  applied: {
    eyebrow: "Evidência e hipótese",
    title: "O LAB não presume a resposta. Investiga.",
    description:
      "O trabalho público distingue o que já existe e foi documentado daquilo que ainda precisa ser testado.",
    confirmed: [
      "Métodos e instrumentos descritos publicamente",
      "Um caso real, HORA.city, com fatos confirmados e estado atual documentado",
      "Uma trilha de aprendizagem e registros públicos no LabLog",
    ],
    investigating: [
      "Se flow e payload tracing ajudam a construir compreensão mais cedo",
      "Como checkpoints e evidências sustentam decisões técnicas melhores",
      "Quais resultados podem ser reproduzidos fora do contexto atual",
    ],
    href: "/cases",
    cta: "Examinar o caso HORA.city",
    secondaryHref: "/lablog",
    secondaryCta: "Acompanhar o LabLog",
  },
  ecosystem: {
    eyebrow: "Ecossistema do LAB",
    title: "Quatro pilares, um propósito comum",
    description:
      "Formação, pesquisa metodológica, investigação aplicada e colaboração organizam as possibilidades do LAB.",
    href: "/ecosystem",
    cta: "Explorar o ecossistema",
  },
  audienceInvestigation: {
    eyebrow: "Para quem",
    title: "Uma hipótese de aprendizagem para quem precisa entrar no sistema",
    description: [
      "O LAB está sendo construído prioritariamente para estudantes de Engenharia de Software, developers em início de carreira e pessoas diante de codebases desconhecidas, legadas ou complexas.",
      "A hipótese investigada é que flow, payload tracing, causalidade, checkpoints e evidências de execução observada podem ajudar esse público a formar mais cedo um modelo mental verificável do sistema.",
      "Isso ainda não é apresentado como resultado comprovado. O LAB documenta métodos, casos e critérios para avaliar a hipótese sem prometer empregabilidade, onboarding mais rápido ou autonomia garantida.",
    ],
    closing:
      "A ambição pedagógica é tornar a investigação de sistemas uma capacidade ensinável, praticável e documentável.",
    indicators: [
      "Estudantes de software",
      "Developers em início de carreira",
      "Codebases desconhecidas ou legadas",
    ],
    primaryCta: { label: "Conhecer os métodos", href: "/method" },
    secondaryCta: { label: "Ver a investigação aplicada", href: "/cases" },
  },
  progression: {
    eyebrow: "Progressão pedagógica",
    title: "Da leitura de um payload à investigação de sistemas",
    description:
      "A progressão separa capacidades já ensináveis dos horizontes que ainda dependem de validação e desenvolvimento.",
    levels: [
      { number: "01", title: "Reconhecer", description: "Identificar payloads, estados, eventos e representações.", future: false },
      { number: "02", title: "Seguir", description: "Acompanhar um flow através das camadas e transformações.", future: false },
      { number: "03", title: "Investigar", description: "Posicionar checkpoints, produzir evidências e reconstruir causalidade.", future: false },
      { number: "04", title: "Modelar", description: "Conectar comportamento observado, regras, invariantes e autoridade.", future: true },
      { number: "05", title: "Transferir", description: "Testar a prática em contextos externos com critérios comparáveis; sistemas distribuídos e mission-critical permanecem direção futura.", future: true },
    ],
    href: "/learn",
    cta: "Explorar a progressão completa",
  },
  learning: {
    eyebrow: "Formação e conteúdo",
    title: "Comece pela trilha e acompanhe o LabLog",
    description:
      "A formação oferece uma entrada prática; o LabLog acompanha flows, anomalias e o desenvolvimento público dos métodos.",
    items: [
      { label: "Formação", href: "/learn", cta: "Explorar a formação" },
      { label: "LabLog", href: "/lablog", cta: "Acompanhar o LabLog" },
    ],
  },
  lab: {
    eyebrow: "O LAB",
    title: "Formação, pesquisa e investigação aplicada",
    description:
      "Conheça a identidade, a origem, a missão e a autoria do Payload Journey LAB.",
    href: "/lab",
    cta: "Conhecer o LAB",
  },
} as const;

export const homepageMetadata = {
  path: "/",
  title: "Payload Journey LAB — Compreender sistemas pelo flow",
  description:
    "Laboratório de Software System Investigation que pesquisa como flow, payload tracing, modelagem, checkpoints e evidências de runtime podem ajudar estudantes e developers a compreender codebases complexas.",
} as const;

export const publicRoutePaths = [
  "/",
  ...Object.values(thematicRoutes).map((route) => route.path),
] as const;
