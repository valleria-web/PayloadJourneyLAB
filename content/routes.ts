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
    title: "Universal System Model Template",
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
      "Uma sequência operacional que preserva o comportamento, produz evidências, localiza divergências e valida a restauração.",
  },
  investigation: {
    path: "/investigation",
    eyebrow: "Prática investigativa",
    title: "Do Track Mode à investigação de sistemas",
    description:
      "Uma prática própria para observar antes de modificar, produzir evidência e seguir o flow até a autoridade relevante.",
  },
  lab: {
    path: "/lab",
    eyebrow: "O LAB",
    title: "Formação, pesquisa e investigação aplicada",
    description:
      "O Payload Journey LAB organiza aprendizagem e prática investigativa em torno do fluxo da informação.",
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
  about: {
    path: "/about",
    eyebrow: "Sobre",
    title: "Origem, visão e autoria",
    description:
      "A origem do Payload Journey LAB, sua motivação e as informações confirmadas sobre sua fundadora.",
  },
} as const;

export const homepageSummaries = {
  method: {
    eyebrow: "Visão geral do método",
    title: "Modele, rastreie e investigue",
    description:
      "Três entradas conectam o comportamento esperado, o flow observado e o procedimento que transforma divergências em evidência investigável.",
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
    eyebrow: "Investigação aplicada",
    title: "Um caso real torna o método observável",
    description:
      "O caso HORA.city documenta contexto, anomalia, payload, investigação e estado atual sem ampliar os fatos confirmados.",
    href: "/cases",
    cta: "Conhecer o caso",
  },
  ecosystem: {
    eyebrow: "Ecossistema do LAB",
    title: "Quatro pilares, um propósito comum",
    description:
      "Formação, pesquisa metodológica, investigação aplicada e colaboração organizam as possibilidades do LAB.",
    href: "/ecosystem",
    cta: "Explorar o ecossistema",
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
  about: {
    eyebrow: "Sobre",
    title: "Um laboratório dedicado a compreender sistemas",
    description:
      "Conheça a origem do Payload Journey LAB, sua visão e as informações confirmadas sobre Valéria dos Santos Reiser.",
    href: "/about",
    cta: "Conhecer o LAB e sua origem",
  },
} as const;

export const publicRoutePaths = [
  "/",
  ...Object.values(thematicRoutes).map((route) => route.path),
] as const;
