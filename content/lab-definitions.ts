export type LabDefinitionBlock = string | readonly string[];

export type LabDefinition = {
  id: string;
  title: string;
  summary: string;
  homepage: boolean;
  blocks: readonly LabDefinitionBlock[];
};

export const labDefinitionsIntroduction = [
  "O Payload Journey LAB utiliza um vocabulário preciso para investigar como operações atravessam sistemas de software.",
  "Estas definições estabelecem o significado de software, sistema, caminho, payload, tracing, compreensão, decisão e evidência dentro do LAB.",
] as const;

export const labDefinitions = [
  {
    id: "software",
    title: "Software",
    summary:
      "Software organiza instruções, regras, dados e estados para interpretar sinais, transformar informação, aplicar decisões e produzir efeitos.",
    homepage: false,
    blocks: [
      "Software é uma organização executável de instruções, regras, dados e estados capaz de interpretar sinais, transformar informação, aplicar decisões e produzir efeitos.",
      "A sua lógica é intangível, mas a sua existência e execução dependem de estruturas físicas, como dispositivos, processadores, memória, redes, sensores e interfaces.",
      "O software permite que acontecimentos, intenções e informações adquiram representação digital, atravessem diferentes camadas e produzam novos efeitos observáveis.",
    ],
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    summary:
      "A Engenharia de Software projecta, constrói, testa, opera e evolui sistemas de software completos.",
    homepage: true,
    blocks: [
      "Software Engineering é a disciplina de projectar, construir, testar, operar e evoluir sistemas de software de forma controlada, verificável e sustentável.",
      "A Engenharia de Software constrói sistemas completos.",
      "Esses sistemas são formados por componentes, responsabilidades, estados, eventos, regras, contratos, mecanismos de comunicação, persistência e interfaces.",
      "A Engenharia de Software também define os caminhos operacionais e projecta as representações necessárias para que intenções, eventos e informações possam atravessar o sistema e tornar-se decisões e resultados.",
    ],
  },
  {
    id: "sistema",
    title: "Sistema",
    summary:
      "O sistema reúne componentes, responsabilidades e contratos; o runtime e os mecanismos de transporte tornam a sua travessia efectiva.",
    homepage: true,
    blocks: [
      "Um sistema de software é uma estrutura organizada de componentes, responsabilidades, estados, eventos, regras, contratos, interfaces, boundaries e mecanismos de execução, comunicação e transporte.",
      "O sistema é a estrutura completa que torna possível transformar uma intenção, entrada ou acontecimento numa operação executável e num resultado observável.",
      "Ele não é apenas uma sequência de chamadas, um conjunto de ficheiros ou a lógica escrita pela aplicação.",
      "Um sistema em execução também depende de um ambiente operacional formado por runtime, memória, sistema operativo, processos, rede, protocolos, drivers, filas, bases de dados e outros mecanismos de infraestrutura.",
      "O runtime, o sistema operativo e a rede podem estar dentro do limite do sistema investigado ou fazer parte do seu ambiente operacional. Para o LAB, devem ser considerados sempre que participem causalmente da execução.",
      "Os componentes definem responsabilidades dentro da operação. Eles podem receber, interpretar, validar, transformar, decidir, armazenar ou apresentar informação.",
      "As interfaces e boundaries estabelecem os pontos em que uma operação muda de componente, responsabilidade, camada, processo ou contexto de execução.",
      "Os canais e mecanismos de transporte realizam a passagem efectiva entre esses pontos.",
      "Essa passagem pode acontecer por meio de uma chamada de função, passagem de argumentos, evento, memória compartilhada, request HTTP, socket, fila, message broker, driver de base de dados ou outro mecanismo concreto de execução e comunicação.",
      "O payload não se transporta sozinho.",
      "Ele é carregado por esses mecanismos enquanto atravessa o sistema.",
      "Os contratos determinam como o payload deve ser estruturado, recebido e interpretado em cada boundary.",
      "O runtime executa as instruções e torna possíveis as chamadas, transformações e transferências que compõem a travessia.",
      "Por isso, compreender um sistema exige observar não apenas os seus componentes e regras, mas também:",
      [
        "por onde a operação passa",
        "onde atravessa uma boundary",
        "qual mecanismo realiza o transporte",
        "que representação é transportada",
        "qual contrato permite interpretá-la",
        "em que ambiente a execução realmente acontece",
      ],
      "No Payload Journey LAB, o sistema investigado inclui todos os elementos que participam causalmente da operação observada, estejam eles no código da aplicação, no runtime ou na infraestrutura operacional.",
      "O caminho indica por onde a operação passa.",
      "A boundary indica onde ocorre a passagem.",
      "O transporte realiza essa passagem.",
      "O payload é a representação transportada.",
      "O contrato determina como ela deve ser entendida.",
      "O runtime torna a travessia executável.",
      "Os componentes dão estrutura e responsabilidade à operação; o runtime e os mecanismos de transporte tornam a travessia efectiva.",
    ],
  },
  {
    id: "caminho",
    title: "Caminho",
    summary:
      "O caminho é a sequência percorrida por uma operação dentro do sistema. As pontes são a metáfora desses caminhos de travessia.",
    homepage: true,
    blocks: [
      "Um caminho é a sequência percorrida por uma operação dentro de um sistema.",
      "Uma operação pode atravessar uma interface, uma aplicação, uma request, uma API, um controller, um DTO, um command, o domínio, um repositório, uma base de dados, uma response, uma projection e novamente a interface.",
      "As pontes são a metáfora desses caminhos de travessia.",
      "A Engenharia de Software constrói o sistema e torna esses caminhos possíveis.",
    ],
  },
  {
    id: "intencao",
    title: "Intenção",
    summary:
      "Uma intenção expressa aquilo que uma pessoa, um processo ou outro sistema pretende realizar.",
    homepage: false,
    blocks: [
      "Uma intenção é aquilo que uma pessoa, um processo ou outro sistema pretende realizar.",
      "O software não começa no código.",
      "Ele começa quando existe uma expectativa de que determinada entrada, acção ou acontecimento produza um resultado.",
      "Uma pessoa pode querer enviar uma mensagem.",
      "Uma empresa pode querer processar um pagamento.",
      "Uma comunidade pode querer enviar um Heart para um mapa.",
      "A intenção origina a operação, mas não determina antecipadamente todas as decisões internas necessárias para realizá-la.",
    ],
  },
  {
    id: "expectativa",
    title: "Expectativa",
    summary:
      "A expectativa descreve a relação esperada entre entrada, processamento, decisão e resultado.",
    homepage: false,
    blocks: [
      "A expectativa descreve o comportamento que o sistema deveria produzir.",
      "Ela estabelece a relação esperada entre entrada, processamento, decisão e resultado.",
      "No modelo esperado do HORA.city, a especificação da operação Send Heart prevê que o sistema receba uma intenção, obtenha os dados necessários, consulte o estado actual, aplique as regras de domínio, decida entre Create e Join, persista o resultado e apresente-o na interface.",
      "A Trace Engineering utiliza essa expectativa como referência para investigar a execução real e verificar se a implementação actual corresponde ao percurso especificado.",
    ],
  },
  {
    id: "payload",
    title: "Payload",
    summary:
      "O payload é a representação operacional que permite que uma intenção, um evento ou uma operação atravesse os caminhos do sistema.",
    homepage: true,
    blocks: [
      "Payload é a representação operacional que permite que uma intenção, um evento, um estado ou uma operação atravesse os caminhos de um sistema.",
      "O payload é deliberadamente projectado pela Engenharia de Software.",
      "A Engenharia de Software define quais dados precisam de circular, como serão estruturados, que nomes e tipos terão, quais campos serão obrigatórios, que contratos os componentes aceitarão e como cada representação poderá ser transformada.",
      "Durante a execução, o sistema instancia essas representações com os valores concretos de cada operação.",
      "O payload pode mudar de nome, estrutura e formato.",
      "Pode aparecer como evento de interface, structured payload, request, DTO, command, evento de domínio, documento persistido, response ou projection.",
      "O payload não precisa permanecer estruturalmente idêntico durante toda a jornada.",
      "O que precisa permanecer é a continuidade causal e semântica da operação.",
    ],
  },
  {
    id: "significado-operacional",
    title: "Significado operacional",
    summary:
      "O significado operacional surge da relação entre payload, contrato, contexto, estado, regras e convenções.",
    homepage: false,
    blocks: [
      "O payload transporta uma representação do significado operacional.",
      "Esse significado não reside exclusivamente no payload.",
      [
        "payload",
        "schema",
        "contexto",
        "origem",
        "destino",
        "protocolo",
        "estado actual",
        "regras",
        "ordem dos eventos",
        "unidades",
        "convenções",
      ],
      "Os valores de latitude e longitude, isoladamente, são apenas números.",
      "Eles passam a representar uma localização quando são interpretados por um contrato, dentro de uma operação e segundo as regras do sistema.",
    ],
  },
  {
    id: "payload-journey",
    title: "Payload Journey",
    summary:
      "Payload Journey acompanha uma operação através de representações, componentes, camadas, estados e decisões.",
    homepage: false,
    blocks: [
      "Payload Journey é o caminho percorrido por uma operação através das suas diferentes representações, componentes, camadas, estados e decisões.",
      "A jornada pode começar num clique, num sensor, numa integração, num processo automático ou noutro sistema.",
      "Ela continua enquanto a operação é capturada, estruturada, validada, interpretada, decidida, persistida e apresentada.",
      "O Payload Journey não observa apenas onde os dados passaram.",
      "Ele investiga como a representação da operação mudou e se a sua continuidade causal e semântica foi preservada.",
    ],
  },
  {
    id: "tracing",
    title: "Tracing",
    summary:
      "Tracing é o acto de seguir uma operação e construir uma explicação causal sustentada por evidências.",
    homepage: false,
    blocks: [
      "Tracing é o acto de seguir uma operação durante a sua execução.",
      "O tracing procura reconstruir:",
      [
        "onde a operação começou",
        "que identidade a acompanha",
        "por quais componentes passou",
        "como o payload foi transformado",
        "que estados foram consultados",
        "que regras foram aplicadas",
        "onde uma decisão foi produzida",
        "que estado foi alterado",
        "que resultado foi apresentado",
      ],
      "Tracing não é apenas recolher logs.",
      "É construir uma explicação causal sustentada por evidências.",
      "Payload tracing e outras formas de tracing já fazem parte da Engenharia de Software.",
      "O Payload Journey LAB não afirma ter inventado o tracing.",
    ],
  },
  {
    id: "trace-engineering",
    title: "Trace Engineering",
    summary:
      "A Trace Engineering acompanha, reconstrói e verifica uma operação enquanto ela atravessa o sistema.",
    homepage: true,
    blocks: [
      "Trace Engineering é a prática sistemática de tornar operações de software observáveis, reconstruíveis e verificáveis.",
      "Ela adopta a perspectiva interna da execução, acompanha uma operação através dos caminhos do sistema e compara o percurso esperado com o percurso realmente executado.",
      "Ela combina modelação, identidade de tracing, checkpoints, instrumentação, observação de estados, captura de evidências e análise causal.",
      "A sua função é verificar se a intenção atravessou correctamente a estrutura construída, se as transformações foram válidas, se o significado operacional foi preservado, se a regra correcta foi aplicada e se o resultado final permaneceu ligado à origem da operação.",
      "A Software Engineering constrói o sistema e define como uma operação poderá atravessá-lo.",
      "A Trace Engineering reconstrói e verifica como uma operação concreta realmente o atravessou.",
    ],
  },
  {
    id: "trace-engineer",
    title: "Trace Engineer",
    summary:
      "Trace Engineer é uma função e um perfil investigativo em desenvolvimento que acompanha operações através do flow sem perder de vista o sistema.",
    homepage: false,
    blocks: [
      "Trace Engineer é uma função e um perfil investigativo em desenvolvimento, centrado na reconstrução e verificação de operações de software através da sua continuidade causal, semântica e temporal.",
      "A pessoa que adopta essa função assume a perspectiva interna da execução, entra no flow e acompanha uma operação sem perder de vista o sistema maior.",
      "Isso não significa que esteja literalmente dentro do software.",
      "Significa que acompanha o sistema a partir da perspectiva de uma operação enquanto ela atravessa componentes, muda de representação, encontra estados, activa regras, produz decisões e gera efeitos.",
      "O seu foco é uma operação concreta e o caminho que ela percorre.",
      "Ela observa:",
      [
        "onde a operação começou",
        "qual identidade conecta as evidências",
        "como o payload foi representado",
        "por quais componentes passou",
        "que transformações ocorreram",
        "que regras foram aplicadas",
        "onde a decisão foi tomada",
        "que estado foi alterado",
        "que resultado foi produzido",
      ],
      "O Trace Engineer entra no flow sem perder de vista o sistema.",
    ],
  },
  {
    id: "compreensao",
    title: "Compreensão",
    summary:
      "Compreender um software é explicar, com nomes reais e evidências, o que ele faz, por que produz determinado resultado e onde esse resultado é decidido.",
    homepage: true,
    blocks: [
      "Compreender um software é conseguir explicar, com nomes reais e evidências:",
      [
        "o que ele faz",
        "por que produz determinado resultado",
        "onde esse resultado é decidido",
      ],
      "Compreensão não é apenas reconhecer ficheiros, funções, classes ou componentes.",
      "É reconstruir a relação entre intenção, execução, representação, regra, decisão, estado e efeito.",
      "Uma explicação sem ligação com a execução real é apenas uma descrição ou hipótese.",
      "Uma explicação conectada por evidências é compreensão verificável.",
    ],
  },
  {
    id: "o-que-o-software-faz",
    title: "O que o software faz",
    summary:
      "Explicar o que um software faz é descrever o comportamento observável e o caminho que o torna possível.",
    homepage: false,
    blocks: [
      "Explicar o que um software faz significa descrever o comportamento observável e o caminho que permite que esse comportamento aconteça.",
      "Como exemplo conceptual da especificação do HORA.city, uma pessoa inicia a operação Send Heart. O percurso esperado captura a intenção, recebe os dados necessários, estrutura o payload, envia uma request, consulta o estado relevante, aplica uma regra de domínio, decide entre Create e Join, persiste o resultado e apresenta-o no mapa.",
      "O tracing da codebase real ainda precisa verificar onde e como cada responsabilidade está actualmente implementada.",
    ],
  },
  {
    id: "por-que-o-software-faz",
    title: "Por que o software faz",
    summary:
      "Explicar por que um resultado acontece exige identificar regra, dados, estado anterior, condição e consequência.",
    homepage: false,
    blocks: [
      "Explicar por que o software produz determinado resultado significa identificar:",
      [
        "a regra aplicada",
        "os dados utilizados",
        "o estado anterior",
        "a condição encontrada",
        "a consequência produzida",
      ],
      "No modelo esperado do HORA.city, a especificação prevê Join quando a regra encontra um Heart activo dentro do raio permitido e Create quando não encontra um Heart activo dentro desse raio.",
      "Esse comportamento é uma referência conceptual para a investigação e a futura refactorização; o tracing deve verificar como a implementação actual produz o resultado.",
      "O resultado não acontece apenas porque a pessoa clicou.",
      "Ele acontece porque uma regra é aplicada a dados e estados concretos.",
    ],
  },
  {
    id: "onde-o-software-decide",
    title: "Onde o software decide",
    summary:
      "Onde decide é o ponto em que os dados deixam de ser apenas transportados e determinam um resultado.",
    homepage: false,
    blocks: [
      "Onde decide é o ponto exacto em que os dados deixam de ser apenas transportados e passam a determinar um resultado entre alternativas possíveis.",
      "No modelo esperado do HORA.city, a operação Send Heart deve chegar ao domínio como uma intenção única. O domínio deverá consultar o estado actual e aplicar a regra definida para decidir entre Create e Join.",
      "A UI deve capturar a intenção e apresentar o resultado. A API deve receber e validar a request. O DTO deve representar os dados. A aplicação deve coordenar a operação. O repositório deve persistir o resultado.",
      "O tracing da codebase real deverá identificar em que componente, função e linha essa decisão está actualmente implementada e verificar se ela corresponde à separação de responsabilidades esperada.",
    ],
  },
  {
    id: "decisao",
    title: "Decisão",
    summary:
      "Uma decisão é o resultado da aplicação de uma regra a dados e estados concretos.",
    homepage: false,
    blocks: [
      "Uma decisão é o resultado da aplicação de uma regra a dados e estados concretos.",
      "Como exemplo conceptual do modelo esperado do HORA.city: existe um Heart activo dentro do raio permitido? Se sim, Join. Se não, Create.",
      "A decisão representa o encontro entre:",
      ["a intenção recebida", "o estado actual", "a regra definida pelo sistema"],
      "A implementação actual deve ser verificada por tracing antes que esse exemplo seja apresentado como comportamento confirmado da codebase.",
    ],
  },
  {
    id: "estado",
    title: "Estado",
    summary:
      "Estado é a condição actual de uma entidade, operação ou sistema num determinado momento.",
    homepage: false,
    blocks: [
      "Estado é a condição actual de uma entidade, operação ou sistema num determinado momento.",
      "Uma decisão não depende apenas dos dados recebidos.",
      "Ela pode depender também do estado existente antes da operação.",
      "No modelo esperado do HORA.city, a mesma intenção Send Heart pode produzir Create ou Join porque o estado do sistema pode ser diferente em cada execução.",
    ],
  },
  {
    id: "evidencia",
    title: "Evidência",
    summary:
      "Evidência é um registo verificável que permite reconstruir uma parte da operação.",
    homepage: false,
    blocks: [
      "Evidência é qualquer registo verificável que permita reconstruir uma parte da operação.",
      "Uma evidência pode demonstrar:",
      [
        "a intenção capturada",
        "a identidade da operação",
        "o payload estruturado",
        "a request recebida",
        "o estado consultado",
        "a distância calculada",
        "a regra aplicada",
        "a decisão produzida",
        "o estado persistido",
        "a response devolvida",
        "o resultado apresentado",
      ],
      "Uma evidência isolada mostra apenas um ponto.",
      "Um conjunto de evidências causalmente conectado permite reconstruir a travessia.",
    ],
  },
  {
    id: "flow",
    title: "Flow",
    summary:
      "Flow é a progressão operacional através da qual uma intenção se torna resultado.",
    homepage: false,
    blocks: [
      "Flow é a progressão operacional através da qual uma intenção se torna resultado.",
      "O flow não é apenas um diagrama estático.",
      "Ele é a sequência executada por uma operação concreta.",
      "Seguir o flow significa acompanhar essa progressão através das representações, componentes, estados, regras e decisões do sistema.",
    ],
  },
] as const satisfies readonly LabDefinition[];

export const homepageLabDefinitions = labDefinitions.filter(
  (definition) => definition.homepage,
);

export const labDefinitionsHighlights = [
  "A Engenharia de Software constrói sistemas de software completos.",
  "Os componentes dão estrutura e responsabilidade à operação; o runtime e os mecanismos de transporte tornam a travessia efectiva.",
  "As pontes são a metáfora dos caminhos de travessia dentro desses sistemas.",
  "O payload transporta uma representação operacional através desses caminhos.",
  "A Trace Engineering conhece o percurso esperado e observa o percurso executado.",
  "O Trace Engineer entra no flow sem perder de vista o sistema.",
  "A Engenharia de Software define como o significado poderá atravessar o sistema.",
  "A Trace Engineering verifica como ele realmente o atravessou.",
] as const;

export const labDefinitionsSynthesis = [
  "Uma intenção origina uma operação.",
  "A Engenharia de Software constrói o sistema completo.",
  "Dentro do sistema, ela define componentes, regras, estados, contratos e caminhos operacionais.",
  "O runtime executa as instruções e os mecanismos de transporte realizam a passagem efectiva entre boundaries.",
  "As pontes representam esses caminhos de travessia.",
  "O payload transporta uma representação operacional através dos caminhos.",
  "Os componentes interpretam e transformam essa representação.",
  "O domínio aplica regras ao payload e ao estado actual.",
  "A decisão produz uma alteração de estado.",
  "O sistema devolve e apresenta o resultado.",
  "A Trace Engineering acompanha, reconstrói e verifica essa travessia.",
  "O Trace Engineer entra no flow sem perder de vista o sistema.",
  "Compreender o sistema é conseguir explicar o que ele fez, por que fez e onde decidiu.",
] as const;

export const labDefinitionsPageContent = {
  eyebrow: "Definições do LAB",
  title: "LAB Definitions",
  description: labDefinitionsIntroduction,
  metadataTitle: "LAB Definitions | Payload Journey LAB",
  metadataDescription:
    "Definições oficiais de Software Engineering, sistema, caminho, payload, Payload Journey, tracing, Trace Engineering, Trace Engineer, compreensão, decisão e evidência utilizadas pelo Payload Journey LAB.",
  glossary: {
    eyebrow: "Vocabulário oficial",
    title: "Definições para investigar operações através do sistema",
    description:
      "O glossário preserva uma distinção clara entre sistema, percurso esperado, execução observada, decisão e evidência.",
  },
  highlights: {
    eyebrow: "Frases institucionais",
    title: "O sistema torna a travessia possível; o tracing torna-a explicável",
  },
  synthesis: {
    eyebrow: "Síntese do LAB",
    title: "Da intenção ao resultado verificável",
  },
} as const;
