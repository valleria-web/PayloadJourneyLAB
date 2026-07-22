import { siteConfig } from "@/config/site";
import { siteLinks } from "@/content/site";

export const thematicRoutes = {
  payloadJourney: {
    path: "/payload-journey",
    eyebrow: "Payload Journey",
    title: "Siga a informação através do sistema",
    description:
      "Aprenda a escolher um flow, encontrar o payload, acompanhar suas transformações e localizar onde decisões acontecem.",
  },
  learn: {
    path: "/learn",
    eyebrow: "Formação",
    title: "Aprenda a seguir o flow",
    description:
      "Uma progressão de aprendizagem e uma formação prática para compreender sistemas a partir do caminho da informação.",
  },
  cases: {
    path: "/cases",
    eyebrow: "Investigação aplicada",
    title: "Casos acompanhados pelo LAB",
    description:
      "Evidências, checkpoints e estado atual de investigações apresentadas somente com fatos confirmados.",
  },
  usmt: {
    path: "/usmt",
    eyebrow: "Modelagem",
    title: `${siteConfig.usmt.alternateName} — ${siteConfig.usmt.name}`,
    description:
      "Um modelo estrutural para explicitar estados, eventos, regras, invariantes, camadas e limites verificáveis.",
  },
  method: {
    path: "/method",
    eyebrow: "Métodos do LAB",
    title: "Métodos diferentes para perguntas diferentes",
    description:
      "Uma visão integrada dos instrumentos usados para observar, modelar, mapear e investigar sistemas.",
  },
  protocol: {
    path: "/protocol",
    eyebrow: "Procedimento investigativo",
    title: "Congelar, Mapear, Detectar e Restaurar",
    description:
      "O processo operacional do Payload Journey LAB preserva o comportamento, produz evidências, localiza divergências e valida a restauração.",
  },
  investigation: {
    path: "/investigation",
    eyebrow: "Prática investigativa",
    title: "Do Track Mode à investigação de sistemas",
    description:
      "Uma prática própria para observar antes de modificar, produzir evidência e seguir o flow até a autoridade relevante.",
    introAction: {
      label: "Aprender sobre payload e tracing",
      href: siteLinks.udemy.courseWithCoupon,
      external: true,
    },
  },
  lab: {
    path: "/lab",
    eyebrow: "O LAB",
    title: "Formação, pesquisa e investigação aplicada",
    description:
      "Conheça a origem, missão e autoria do Payload Journey LAB, um laboratório de formação, pesquisa metodológica e investigação aplicada de sistemas.",
    metadataDescription:
      "Laboratório de formação, pesquisa metodológica e investigação aplicada que desenvolve Software System Investigation e Trace Engineering através de métodos, casos reais e evidências.",
  },
  ecosystem: {
    path: "/ecosystem",
    eyebrow: "Ecossistema",
    title: "Quatro áreas conectadas pelo mesmo propósito",
    description:
      "Formação, pesquisa metodológica, investigação aplicada e colaboração como possibilidades do ecossistema do LAB.",
  },
  lablog: {
    path: "/lablog",
    eyebrow: "Investigação em movimento",
    title: "Acompanhe o LAB em movimento",
    description:
      "Registros públicos de flows, anomalias, decisões, checkpoints, mappings e desenvolvimento dos métodos.",
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
  title: "Payload Journey LAB — O código acelera. A compreensão precisa acompanhar.",
  description:
    "Laboratório de Software System Investigation que pesquisa como flow, payload tracing, modelagem, checkpoints e evidências de runtime podem ajudar estudantes e developers a compreender codebases complexas mais cedo.",
} as const;

export const publicRoutePaths = [
  "/",
  ...Object.values(thematicRoutes).map((route) => route.path),
] as const;
