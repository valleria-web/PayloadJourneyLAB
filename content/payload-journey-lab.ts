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
  LearningPresentation,
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
    eyebrow: "PAYLOAD JOURNEY LAB",
    title: "O código acelera. A compreensão precisa acompanhar.",
    lead:
      "Software pode crescer mais rápido do que a capacidade humana de explicar o que ele faz, por que faz e onde decide.",
    description:
      "O LAB investiga como seguir o flow, rastrear o payload e produzir evidências pode ajudar estudantes e developers a construir compreensão antes de modificar sistemas.",
    primaryCta: {
      label: "Começar pelo Payload Journey",
      state: "internal",
      href: "/payload-journey",
    },
    secondaryCta: {
      label: "Ver o caso HORA.city",
      state: "internal",
      href: "/cases",
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

export const learningPresentation = {
  hero: {
    eyebrow: "APRENDER SOFTWARE SYSTEM INVESTIGATION",
    title: "Começar por um payload. Avançar para o sistema.",
    description: [
      "O Payload Journey LAB organiza a aprendizagem em torno de operações concretas. Em vez de começar tentando compreender toda a codebase, o estudante escolhe um flow, identifica o payload e acompanha como a informação é representada, interpretada, validada, persistida e apresentada.",
      "A proposta é desenvolver progressivamente uma forma investigativa de pensar software, conectando estrutura, domínio, runtime e evidências.",
    ],
    primaryCta: {
      label: "Começar pelo Payload Journey",
      state: "internal",
      href: "/payload-journey",
    },
    secondaryCta: {
      label: "Ver o caso HORA.city",
      state: "internal",
      href: "/cases",
    },
  },
  flow: {
    eyebrow: "APRENDER POR FLOW",
    title: "Uma operação concreta reduz o recorte, não a complexidade",
    description: [
      "Escolher um flow cria um ponto de entrada investigável sem apagar as relações do sistema. O recorte permite seguir código e comportamento, comparar responsabilidades e construir um modelo mental progressivo.",
      "O LAB investiga uma capacidade complementar: compreender como operações reais atravessam o sistema durante a execução.",
    ],
    chain: [
      "intenção ou ocorrência",
      "evento",
      "payload",
      "interpretação",
      "decisão",
      "estado",
      "efeito observável",
    ],
    questions:
      "Cada etapa acrescenta uma pergunta. O que aconteceu? Que representação foi criada? Quem interpretou? Que regra autorizou a decisão? Que estado foi alterado? Que evidência confirma o resultado?",
  },
  progression: {
    eyebrow: "PROGRESSÃO PEDAGÓGICA",
    title: "Do primeiro evento à investigação estruturada",
    description:
      "Os níveis organizam uma progressão possível. Eles não representam domínio automático, currículo completo nem equivalência à experiência profissional.",
    levels: [
      {
        id: "nivel-1-operacao",
        number: "01",
        title: "Uma operação concreta",
        status: "Conteúdo disponível",
        objective:
          "Compreender como uma intenção ou ocorrência se transforma em um efeito observável.",
        elements: [
          "evento",
          "payload",
          "request",
          "interpretação",
          "decisão",
          "estado",
          "resposta",
          "efeito",
        ],
        capabilities: [
          "identificar a origem da operação",
          "reconhecer o payload",
          "localizar entrada e saída",
          "explicar o flow básico",
        ],
        claim: "O estudante começa a construir um modelo operacional do sistema.",
        limit: "O nível não representa domínio completo da codebase.",
      },
      {
        id: "nivel-2-camadas",
        number: "02",
        title: "Flow entre camadas",
        status: "Conteúdo disponível",
        objective:
          "Compreender como uma operação atravessa responsabilidades e representações diferentes.",
        elements: [
          "UI",
          "application",
          "interpretation",
          "domain",
          "persistence",
          "projection",
        ],
        capabilities: [
          "distinguir representação de significado",
          "reconhecer onde a informação muda",
          "localizar a autoridade de domínio",
          "comparar decisão e representação final",
        ],
        claim:
          "O bit pode continuar sendo o mesmo, mas o significado muda conforme a camada o interpreta.",
        limit: "A sequência é um modelo pedagógico e não representa todos os sistemas.",
      },
      {
        id: "nivel-3-investigacao",
        number: "03",
        title: "Investigação estruturada",
        status: "Documentado",
        objective:
          "Passar da observação informal para uma investigação orientada por modelo, checkpoints e evidências.",
        elements: [
          "modelagem",
          "comportamento esperado",
          "invariantes",
          "Operational Payload Path",
          "checkpoints",
          "Freeze Record",
          "evidências",
          "divergência",
          "Detection Report",
          "restauração",
          "validação",
        ],
        capabilities: [
          "formular hipóteses",
          "posicionar checkpoints",
          "confrontar modelo e runtime",
          "localizar divergências",
          "justificar uma restauração",
        ],
        claim: "Congelar → Mapear → Detectar → Restaurar",
        limit:
          "Os instrumentos e o protocolo estão documentados; eficácia e transferibilidade ainda não foram demonstradas.",
      },
      {
        id: "nivel-4-sistemas-complexos",
        number: "04",
        title: "Sistemas complexos",
        status: "Aprofundamento em construção",
        objective:
          "Preparar o tracing de causalidade e estado através de múltiplos componentes.",
        elements: [
          "eventos",
          "concorrência",
          "mensagens",
          "filas",
          "dependências",
          "estados distribuídos",
          "falhas parciais",
          "observabilidade",
          "tracing distribuído",
        ],
        capabilities: [
          "seguir causalidade entre componentes",
          "reconhecer perda de contexto",
          "investigar ordenação",
          "observar propagação de falhas",
          "reconstruir estados distribuídos",
        ],
        claim: "O LAB prepara esta direção de aprofundamento.",
        limit:
          "Não existe formação completa nem aplicação demonstrada neste nível.",
      },
      {
        id: "nivel-5-requisitos",
        number: "05",
        title: "Requisitos e sistemas críticos",
        status: "Direção futura de pesquisa e formação",
        objective:
          "Conectar futuramente requisito, modelo, implementação, mensagem e efeito observável.",
        elements: [
          "requisitos",
          "timing",
          "deadlines",
          "CAN",
          "DBC",
          "SysML/MBSE",
          "V-Model",
          "requirements-to-runtime traceability",
          "safety invariants",
          "sistemas industriais",
          "mission-critical",
        ],
        capabilities: [
          "investigar comportamento temporal",
          "localizar autoridade e responsabilidade",
          "confrontar execução com safety constraints",
          "produzir evidências de ponta a ponta",
        ],
        claim: "Este nível constitui um horizonte de pesquisa.",
        limit:
          "O LAB não declara competência atual, serviço disponível ou aplicação validada nestes contextos.",
      },
    ],
  },
  effort: {
    eyebrow: "SEM ATALHOS DE COMPREENSÃO",
    title: "Investigar exige pensar, observar e confrontar",
    description: [
      "Aprender Software System Investigation exige trabalho intelectual e técnico. O LAB não promete eliminar esse esforço.",
      "A proposta é organizar o esforço, oferecer linguagem e instrumentos e reduzir investigação aleatória.",
    ],
    requirements: [
      "ler código",
      "compreender arquitetura",
      "estudar domínio",
      "formular hipóteses",
      "executar o sistema",
      "observar runtime",
      "posicionar checkpoints",
      "revisar evidências",
      "reconhecer incerteza",
      "documentar conclusões",
    ],
    contributions: [
      "fornecer um ponto de entrada",
      "organizar onde olhar",
      "explicitar o que perguntar",
      "indicar que evidência procurar",
      "tornar a progressão mais consciente",
    ],
    principle:
      "O método não pensa pelo estudante. Ele organiza onde olhar, o que perguntar e que evidência procurar.",
  },
  foundations: {
    eyebrow: "CONHECIMENTOS FUNDAMENTAIS",
    title: "Uma capacidade complementar",
    description: [
      "Payload Journey e Software System Investigation não substituem os fundamentos de engenharia de software.",
      "A leitura da codebase mostra estrutura. A arquitetura mostra responsabilidades. Testes verificam comportamentos definidos. Observabilidade oferece sinais. Payload tracing conecta essas perspectivas ao seguir uma operação durante a execução.",
    ],
    items: [
      "programação",
      "algoritmos",
      "estruturas de dados",
      "arquitetura",
      "bancos de dados",
      "redes",
      "sistemas operacionais",
      "testes",
      "segurança",
      "observabilidade",
      "conhecimento de domínio",
    ],
  },
  available: {
    eyebrow: "CONTEÚDO DISPONÍVEL",
    title: "O que já pode orientar a aprendizagem",
    description:
      "A lista apresenta somente conteúdo e destinos localizados no repositório. O estado descreve a evidência disponível, não eficácia pedagógica.",
    items: [
      {
        title: "Payload Journey",
        description:
          "Método para seguir uma operação através de representações, camadas, decisões, estados e efeitos.",
        learning: "Criar o primeiro recorte operacional.",
        href: "/payload-journey",
        status: "Documentado",
      },
      {
        title: "USMT",
        description:
          "Instrumento para explicitar estados, eventos, transições, regras, invariantes e limites esperados.",
        learning: "Tornar o comportamento esperado confrontável.",
        href: "/usmt",
        status: "Documentado",
      },
      {
        title: "Métodos investigativos",
        description:
          "Catálogo com Payload Journey, Reverse Payload Journey, Operational Payload Path, Track to Origin e instrumentos relacionados.",
        learning: "Escolher a pergunta e o instrumento adequados.",
        href: "/method",
        status: "Documentado",
      },
      {
        title: "Protocolo de investigação",
        description:
          "Sequência Congelar, Mapear, Detectar e Restaurar, apoiada por checkpoints e evidências.",
        learning: "Organizar uma investigação estruturada.",
        href: "/protocol",
        status: "Documentado",
      },
      {
        title: "HORA.city",
        description:
          "Caso real acompanhado pelo LAB, com fatos, limites e estado ainda aberto.",
        learning: "Observar como um caso delimita claims e perguntas.",
        href: "/cases",
        status: "Investigação em andamento",
      },
      {
        title: "Formação beta",
        description:
          "Curso configurado como canal externo de introdução a Payload Tracing.",
        learning: "Aprofundar fundamentos e estratégia de entrada.",
        href: "/learn#formacao",
        status: "Conteúdo disponível",
      },
      {
        title: "LabLog",
        description:
          "Rota e canal configurados para acompanhar temas e desenvolvimento público do LAB.",
        learning: "Acompanhar registros e limites do trabalho em andamento.",
        href: "/lablog",
        status: "Conteúdo disponível",
      },
    ],
  },
  initialPath: {
    eyebrow: "PERCURSO INICIAL",
    title: "Seis passos possíveis para começar",
    description:
      "O percurso orienta uma sequência inicial, mas não obriga todas as pessoas a seguir a mesma ordem.",
    steps: [
      {
        number: "01",
        title: "Ver o flow",
        description: "Aprender Payload Journey.",
        href: "/payload-journey",
      },
      {
        number: "02",
        title: "Explicitar o esperado",
        description: "Conhecer USMT.",
        href: "/usmt",
      },
      {
        number: "03",
        title: "Entender os instrumentos",
        description: "Conhecer os métodos.",
        href: "/method",
      },
      {
        number: "04",
        title: "Investigar com procedimento",
        description: "Conhecer o protocolo.",
        href: "/protocol",
      },
      {
        number: "05",
        title: "Observar um caso real",
        description: "Analisar HORA.city como investigação em andamento.",
        href: "/cases",
      },
      {
        number: "06",
        title: "Aprofundar a formação",
        description: "Acessar o curso e os conteúdos disponíveis.",
        href: "#formacao",
      },
    ],
  },
  cases: {
    eyebrow: "CASOS COMO APRENDIZAGEM",
    title: "Um caso serve para praticar perguntas e limites",
    description: [
      "Casos não são apenas demonstrações. Eles ajudam a praticar delimitação, modelagem, seleção de checkpoints, observação de runtime e revisão de conclusões.",
      "HORA.city é um caso real em investigação. Sua existência demonstra aplicação documentada no repositório, não eficácia geral dos métodos.",
    ],
    practices: [
      "delimitar uma operação",
      "construir modelos",
      "identificar flows",
      "escolher checkpoints",
      "observar runtime",
      "registrar evidências",
      "reconhecer limitações",
      "revisar conclusões",
    ],
    status: "Investigação em andamento",
    cta: {
      label: "Estudar o caso HORA.city",
      state: "internal",
      href: "/cases",
    },
  },
  evidence: {
    eyebrow: "EVIDÊNCIA PEDAGÓGICA",
    title: "Ensinar também é investigar",
    description:
      "O LAB não presume que um método é eficaz apenas porque foi criado. A proposta pedagógica precisa ser observada em uso, documentada e confrontada com resultados reais.",
    demonstrated: [
      "existência dos métodos e documentos no repositório",
      "aplicação documentada no caso HORA.city em andamento",
      "existência da rota de formação e do destino externo configurado",
      "presença documentada de checkpoints no protocolo e no caso",
    ],
    investigate: [
      "aprendizagem por terceiros",
      "redução do tempo de compreensão",
      "aumento de autonomia",
      "transferibilidade",
      "aplicação em codebases externas",
      "progressão para sistemas distribuídos",
      "impacto em equipes",
    ],
  },
  continuation: [
    { label: "Começar pelo Payload Journey", href: "/payload-journey" },
    { label: "Conhecer os métodos", href: "/method" },
    { label: "Estudar o caso", href: "/cases" },
    { label: "Acompanhar o LabLog", href: "/lablog" },
  ],
} as const satisfies LearningPresentation;

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
    secondaryAction: {
      label: "Acompanhar o LabLog",
      state: "internal",
      href: "/lablog",
    },
  },
  lab: {
    hero: {
      eyebrow: "PAYLOAD JOURNEY LAB",
      title: "Um laboratório para investigar como sistemas realmente funcionam",
      description: [
        "O Payload Journey LAB é um laboratório autoral de formação, pesquisa metodológica e investigação aplicada em sistemas de software.",
        "Ele surgiu de uma experiência localizada: uma codebase expandida com agentes de inteligência artificial cresceu mais rapidamente do que sua própria capacidade humana de ser explicada. Essa perda de compreensão transformou-se em pergunta investigativa, métodos e laboratório.",
      ],
      primaryCta: { label: "Conhecer os métodos", href: "/method", state: "internal" },
      secondaryCta: { label: "Ver o caso HORA.city", href: "/cases", state: "internal" },
    },
    mission: {
      eyebrow: "MISSÃO",
      title: "Recuperar compreensão e autoridade sobre o sistema",
      thesis: [
        "À medida que agentes de inteligência artificial aceleram a produção e a modificação de código, a compreensão do sistema pode tornar-se um dos principais gargalos da engenharia de software.",
        "O Payload Journey LAB investiga se — e até que ponto — métodos baseados em flow, payload tracing, causalidade, modelagem, checkpoints e evidências de runtime podem ajudar estudantes de Engenharia de Software e developers a desenvolver mais cedo a capacidade de compreender codebases grandes, complexas ou pouco conhecidas.",
      ],
      description: [
        "A missão do LAB é ensinar estudantes e developers a seguir payloads, localizar causalidade e compreender como uma operação se transforma em decisão, estado e efeito observável.",
        "A hipótese é que começar esse desenvolvimento mais cedo pode contribuir para entrar em codebases pouco conhecidas com clareza, autonomia progressiva e responsabilidade técnica. Esse benefício ainda está sendo investigado.",
      ],
      principle: "Compreender antes de modificar: observar o flow, produzir evidências e tornar as decisões do sistema visíveis.",
    },
    origin: {
      eyebrow: "ORIGEM",
      title: "Quando produzir ficou mais rápido do que compreender",
      description: [
        "O LAB não nasceu de uma teoria abstrata. Nasceu da necessidade de compreender um sistema real que continuava funcionando, crescendo e mudando, mas cujos flows já não podiam ser explicados com segurança apenas pela leitura fragmentada da codebase.",
        "No desenvolvimento do HORA.city, agentes de IA apoiaram a expansão e a alteração do código. Funcionalidades podiam avançar enquanto se tornava mais difícil explicar onde certas decisões aconteciam, como payloads mudavam de representação e quais estados sustentavam o comportamento observado.",
        "Essa experiência não significa que toda a codebase se tornou incompreensível ou que o sistema entrou em colapso. Ela localizou um problema: corrigir sintomas sem reconstruir o flow não recuperava a compreensão necessária. Investigar a operação tornou-se o próximo passo.",
      ],
    },
    methods: {
      eyebrow: "DO PROBLEMA AOS MÉTODOS",
      title: "Transformar perda de compreensão em método",
      description:
        "A experiência foi organizada em instrumentos que respondem a perguntas distintas. Esta página os situa; a definição completa permanece em /method e nas rotas canônicas.",
      items: [
        { title: "Payload Journey", question: "Por onde a operação passa?" },
        { title: "USMT", question: "O que deveria acontecer?" },
        { title: "Reverse Payload Journey", question: "De onde veio a anomalia?" },
        { title: "Operational Payload Path", question: "Qual caminho está sendo investigado?" },
        { title: "Track to Origin", question: "Onde nasce a decisão relevante?" },
        { title: "Protocolo investigativo", question: "Como investigar sem modificar prematuramente?" },
        { title: "Evidências", question: "O que sustenta a conclusão?" },
      ],
      cta: { label: "Explorar os métodos", href: "/method", state: "internal" },
    },
    humanAi: {
      eyebrow: "HUMAN DIRECTION · AI ASSISTANCE",
      title: "Uma mulher assessorada pela IA, não substituída por ela",
      description: [
        "A inteligência artificial participa da construção do LAB como assessoria técnica, interlocutora metodológica, apoio à exploração de codebases e aceleradora da documentação.",
        "A direção do trabalho, as perguntas investigativas, os critérios de evidência, a criação dos métodos e a responsabilidade sobre as conclusões permanecem humanas.",
      ],
      principle: "A IA deve ampliar a capacidade de compreensão dos engenheiros, não substituir sua autoridade sobre o sistema.",
    },
    founder: {
      eyebrow: "FOUNDER",
      title: "Uma experiência pessoal transformada em campo de investigação",
      name: siteConfig.founder.name,
      biography: [
        "Valéria dos Santos Reiser é a criadora do Payload Journey LAB e da Universal System Modeling Template — USMT — e responde pela direção investigativa, metodológica e pedagógica do trabalho.",
        "Como estudante de Engenharia de Software, ela não iniciou o LAB com todas as respostas. Os instrumentos foram sendo formulados enquanto investigava flows, payloads e decisões no HORA.city e procurava recuperar uma explicação tecnicamente sustentada para o comportamento observado.",
        "O LAB transforma essa necessidade pessoal de compreender sistemas em método, documentação e experiência pedagógica para outras pessoas. A autoria humana inclui a responsabilidade pública pelas hipóteses, pelos critérios e pelas conclusões.",
      ],
      professionalLink: siteLinks.linkedin.personal,
    },
    currentState: {
      eyebrow: "ESTADO ATUAL",
      title: "Uma visão que já possui instrumentos, caso e conteúdo público",
      description:
        "O LAB trabalha com codebases reais, flows, payloads, modelagem, checkpoints, execução observada, evidências e documentação. Este inventário apresenta somente elementos localizados no repositório ou destinos configurados no site; o status descreve o que está verificável agora, não sua eficácia.",
      items: [
        {
          title: "Site institucional",
          description: "Onze rotas públicas organizam a tese, os métodos, a formação, o caso, o ecossistema e o próprio LAB.",
          status: "Disponível",
          evidence: "Rotas, sitemap e verificadores presentes no repositório.",
        },
        {
          title: "USMT e métodos",
          description: "USMT, Payload Journey, Reverse Payload Journey, Operational Payload Path e Track to Origin possuem definições públicas no site.",
          status: "Documentado",
          evidence: "Conteúdo estruturado e rotas /usmt, /payload-journey e /method.",
        },
        {
          title: "Protocolo investigativo",
          description: "Congelar, Mapear, Detectar e Restaurar está descrito como procedimento do LAB.",
          status: "Documentado",
          evidence: "Conteúdo estruturado e rota /protocol.",
        },
        {
          title: "HORA.city",
          description: "Um caso real documenta contexto, anomalia, flow selecionado, payload, checkpoints narrados e estado atual.",
          status: "Em investigação",
          evidence: "Conteúdo do caso e rota /cases; origem e restauração continuam não comprovadas.",
        },
        {
          title: "Formação beta",
          description: "A trilha de aprendizagem e um destino externo de formação estão configurados no site.",
          status: "Disponível",
          evidence: "Rota /learn e link de formação configurado no conteúdo.",
        },
        {
          title: "LabLog",
          description: "A rota apresenta temas acompanhados e aponta para o canal atualmente configurado, sem inventariar publicações individuais.",
          status: "Disponível",
          evidence: "Rota /lablog e destino de canal configurado.",
        },
      ],
    },
    construction: {
      eyebrow: "LAB EM CONSTRUÇÃO",
      title: "Do método autoral a uma capacidade transferível",
      description: [
        "O LAB está consolidando definições, protocolo, instrumentos, casos completos, evidências e experiências de formação.",
        "Capacidade transferível é um objetivo: ela depende de outras pessoas aplicarem os instrumentos em investigações desconhecidas e produzirem conclusões tecnicamente justificadas.",
      ],
      items: [
        {
          title: "Definições e instrumentos",
          description: "As definições autorais estão públicas, mas permanecem sujeitas a refinamento por aplicação e evidência.",
          status: "Evidência parcial",
          evidence: "Rotas /method, /protocol e /investigation.",
        },
        {
          title: "Caso completo",
          description: "HORA.city oferece investigação aplicada, mas ainda não documenta o ciclo completo até uma restauração validada.",
          status: "Em investigação",
          evidence: "Estado e omissões explícitas na rota /cases.",
        },
        {
          title: "Conjunto documental de evidências",
          description: "Registros, mapas, relatórios e pacotes de evidência são objetivos do piloto; ficheiros canônicos desse conjunto não foram localizados.",
          status: "Em construção",
        },
        {
          title: "Avaliação pedagógica",
          description: "A formação existe, mas seu efeito sobre compreensão, autonomia ou preparação ainda não foi avaliado.",
          status: "Ainda não validado",
        },
        {
          title: "Aplicação externa",
          description: "Nenhuma execução externa documentada do protocolo foi localizada no repositório.",
          status: "Ainda não validado",
        },
      ],
    },
    pilot: {
      eyebrow: "DO ZERO AO PILOTO",
      title: "Um horizonte inicial de seis meses",
      description: [
        "O primeiro horizonte do LAB é consolidar, em seis meses, um piloto verificável. O prazo é um compromisso institucional sem data final inventada e deve ser revisto quando o ciclo correspondente terminar.",
        "O objetivo não é declarar uma nova disciplina consolidada, mas produzir evidências de que o LAB possui objeto de estudo, métodos, instrumentos, casos e uma proposta de formação avaliável.",
      ],
      commitments: [
        {
          number: "01",
          title: "Definir",
          description: "Estabelecer uma definição clara de Software System Investigation e da função investigativa do Trace Engineer.",
          status: "Evidência parcial",
          evidence: "Definições autorais publicadas em /investigation; validação externa ausente.",
        },
        {
          number: "02",
          title: "Formalizar",
          description: "Consolidar os métodos, o protocolo e o conjunto documental que sustentam uma investigação verificável.",
          status: "Evidência parcial",
          evidence: "Métodos e protocolo documentados; conjunto documental de evidências ainda incompleto.",
        },
        {
          number: "03",
          title: "Aplicar",
          description: "Executar o protocolo completo num flow de uma codebase real, da delimitação do caso à restauração validada.",
          status: "Em investigação",
          evidence: "HORA.city está em andamento; restauração validada não foi localizada.",
        },
        {
          number: "04",
          title: "Evidenciar",
          description: "Produzir checkpoints, registros, mapas operacionais, relatórios de detecção e pacotes de evidência.",
          status: "Em construção",
          evidence: "Os tipos de artefato são definidos como objetivo, mas o conjunto canônico não foi localizado.",
        },
        {
          number: "05",
          title: "Ensinar",
          description: "Transformar o conhecimento produzido em formação, vídeos, LabLogs, materiais e experiências pedagógicas.",
          status: "Evidência parcial",
          evidence: "Trilha, formação e rota LabLog existem; eficácia pedagógica não foi avaliada.",
        },
        {
          number: "06",
          title: "Transferir",
          description: "Permitir que outra pessoa utilize o protocolo para investigar um flow que não conhecia previamente.",
          status: "Ainda não validado",
          evidence: "Nenhuma aplicação externa documentada foi localizada.",
        },
      ],
      test: {
        title: "O verdadeiro teste do piloto",
        description:
          "O piloto será avaliado quando uma pessoa externa entrar numa codebase desconhecida, selecionar uma operação, identificar o payload, posicionar checkpoints, seguir o flow, confrontar comportamento e modelo e documentar uma explicação ou divergência com base em evidências.",
        initialEvidence:
          "Evidência inicial de transferibilidade: uma pessoa externa aplica o protocolo em uma investigação documentada, com registro do nível de assistência recebido.",
        transferablePilot:
          "Piloto de capacidade transferível: pelo menos duas pessoas externas, em duas investigações distintas, produzem evidências revisáveis e conclusões tecnicamente justificadas.",
        status: "Ainda não validado",
      },
    },
    traceEngineer: {
      eyebrow: "TRACE ENGINEERING",
      title: "Uma função investigativa em desenvolvimento",
      definition:
        "Trace Engineer é a função investigativa exercida por quem segue operações, payloads, transformações e decisões para compreender e explicar o comportamento de um sistema com base em evidências.",
      status: "Em construção",
      caveats: [
        "Não é profissão consolidada.",
        "Não é cargo reconhecido pelo mercado.",
        "Não é certificação oficial.",
        "É uma função e um perfil em desenvolvimento no universo do LAB.",
      ],
      competencies: [
        "Delimitar operações e seguir payloads",
        "Identificar transformações e autoridades de decisão",
        "Observar execução e posicionar checkpoints",
        "Confrontar modelo e comportamento observado",
        "Identificar divergências e validar restaurações",
        "Documentar conclusões sustentadas por evidências",
      ],
      cta: { label: "Conhecer Software System Investigation", href: "/investigation", state: "internal" },
    },
    longTerm: {
      eyebrow: "LONG-TERM VISION",
      title: "Construir uma capacidade para a engenharia de software contemporânea",
      description: [
        "A visão de longo prazo é ensinar capacidades para investigar sistemas complexos, apoiar a compreensão de codebases grandes e produzir casos tecnicamente verificáveis.",
        "O LAB pretende conectar modelagem, arquitetura, observabilidade, domínio, requisitos, execução e evidência, além de explorar colaborações com estudantes, educadores, universidades, equipes e organizações.",
      ],
      outcomes: [
        "Desenvolver capacidades do perfil Trace Engineer",
        "Investigar estratégias de entrada em codebases grandes",
        "Produzir casos de investigação tecnicamente verificáveis",
        "Desenvolver requirements-to-runtime traceability",
        "Conectar modelagem, execução e evidência",
        "Contribuir para investigação de sistemas e rastreabilidade no Brasil",
      ],
      future: {
        title: "Da operação concreta aos sistemas críticos",
        description:
          "O LAB pretende aprofundar progressivamente sua abordagem em direção a sistemas distribuídos, requisitos, mensagens, timing e contextos industriais ou mission-critical.",
        status: "Direção futura",
        topics: [
          "Concorrência",
          "Mensagens e estados distribuídos",
          "Timing",
          "CAN e DBC",
          "SysML/MBSE e V-Model",
          "Requirements-to-runtime traceability",
          "Safety invariants",
        ],
      },
    },
    publicCommitment: {
      eyebrow: "PUBLIC COMMITMENT",
      title: "Compreender antes de modificar",
      description: [
        "O Payload Journey LAB assume o compromisso de investigar sistemas com rigor, distinguir hipótese de evidência, não ampliar fatos não confirmados e documentar o caminho que sustenta cada conclusão.",
        "O LAB existe para ensinar pessoas a recuperar autoridade sobre sistemas que se tornaram maiores do que sua compreensão inicial. Essa é uma direção pedagógica, não uma garantia de resultado individual.",
      ],
      closing: "Siga o payload. Encontre a causalidade. Recupere a compreensão.",
    },
    continuation: [
      { label: "Começar pelo Payload Journey", href: "/payload-journey" },
      { label: "Explorar os métodos", href: "/method" },
      { label: "Conhecer a investigação", href: "/investigation" },
      { label: "Examinar o caso", href: "/cases" },
      { label: "Ver a trilha de aprendizagem", href: "/learn" },
    ],
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
    eyebrow: "Formação",
    title: "Transforme a investigação em prática de aprendizagem",
    description:
      "A trilha organiza uma entrada progressiva para aprender payload, flow, tracing, checkpoints e construção de evidências.",
    primaryCta: {
      label: "Explorar a trilha de aprendizagem",
      state: "internal",
      href: "/learn",
    },
    secondaryCta: {
      label: "Conhecer a formação na Udemy",
      state: "external",
      href: siteLinks.udemy.courseWithCoupon,
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
