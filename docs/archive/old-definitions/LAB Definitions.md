Quero implementar no site Payload Journey LAB uma nova área institucional chamada:

LAB Definitions
Definições do LAB

Esta implementação é semanticamente urgente e deve fortalecer a clareza conceptual do LAB sem eliminar, substituir, condensar ou reorganizar indevidamente qualquer conteúdo que já exista no site.

## Objectivo

Criar duas apresentações complementares das definições fundamentais do Payload Journey LAB:

1. Uma secção breve na página principal, com poucas frases e definições resumidas.
2. Uma página interna dedicada, com o glossário completo e detalhado.

A página principal deve introduzir os conceitos sem ficar excessivamente longa.

A página interna deve funcionar como a referência oficial e completa do vocabulário do LAB.

## Regra crítica de preservação

Antes de alterar qualquer ficheiro:

1. Inspecciona a estrutura actual do projecto.
2. Identifica a framework, o sistema de rotas, os componentes, os estilos e o padrão visual já utilizado.
3. Localiza a página principal e os componentes responsáveis pelas secções actualmente renderizadas.
4. Verifica se já existe uma página, rota ou estrutura de glossário que possa ser reutilizada.
5. Mantém integralmente todo o conteúdo, navegação, links, estilos, comportamentos, responsividade e funcionalidades existentes.

Não eliminar nenhuma secção.

Não substituir a hero.

Não alterar os textos existentes.

Não reformular o posicionamento actual do LAB.

Não modificar rotas existentes.

Não fazer redesign geral.

Não alterar componentes não relacionados com esta implementação.

Não remover imports, elementos, assets ou estilos apenas porque aparentam estar sem uso, a menos que tenham sido criados exclusivamente durante esta implementação e se tornem realmente desnecessários.

A alteração deve ser aditiva, mínima e localizada.

## Princípio da implementação

A nova área deve parecer uma parte nativa do site existente.

Reutiliza:

* tipografia;
* espaçamentos;
* largura dos containers;
* cores;
* bordas;
* botões;
* cards;
* animações;
* padrões responsivos;
* componentes compartilhados;
* convenções de acessibilidade;
* estrutura de headings.

Não introduzir uma nova identidade visual.

Não adicionar bibliotecas externas apenas para esta secção.

Não criar componentes excessivamente genéricos ou abstrações desnecessárias.

## Estrutura solicitada

### Parte 1 — Secção breve na página principal

Adicionar uma nova secção intitulada:

LAB Definitions

Subtítulo opcional:

Definições do LAB

Esta secção deve aparecer numa posição semanticamente coerente da página principal.

Preferência:

* depois da apresentação do problema e da proposta central do LAB;
* antes dos casos, métodos, demonstrações ou conteúdos mais específicos.

Não colocar a secção antes da hero.

Não interromper uma sequência visual que claramente pertença a um mesmo bloco.

Caso a estrutura actual da homepage não permita essa posição exacta, escolhe o ponto mais próximo em que o visitante já compreendeu o problema apresentado pelo LAB, mas ainda não entrou nos conteúdos metodológicos detalhados.

### Conteúdo introdutório da secção

Usar uma introdução breve equivalente a:

O Payload Journey LAB utiliza um vocabulário preciso para investigar como operações atravessam sistemas de software.

Estas definições estabelecem o significado de sistema, caminho, payload, tracing, compreensão e decisão dentro do LAB.

### Definições resumidas na homepage

Apresentar poucas definições curtas, preferencialmente em cards ou no padrão visual equivalente já existente no site.

Não apresentar o glossário completo na página principal.

As definições resumidas devem ser:

#### Software Engineering

A Engenharia de Software projecta, constrói, testa, opera e evolui sistemas de software completos.

#### Sistema

O sistema é a estrutura completa formada por componentes, responsabilidades, estados, eventos, regras, contratos, interfaces e mecanismos de persistência.

#### Caminho

O caminho é a sequência percorrida por uma operação dentro do sistema.

As pontes são a metáfora desses caminhos de travessia.

#### Payload

O payload é a representação operacional que permite que uma intenção, um evento ou uma operação atravesse os caminhos do sistema.

#### Tracing Engineering

A Tracing Engineering acompanha, reconstrói e verifica uma operação enquanto ela atravessa o sistema.

#### Compreensão

Compreender um software é conseguir explicar, com nomes reais e evidências, o que ele faz, por que produz determinado resultado e onde esse resultado é decidido.

### Chamada para a página interna

Ao final da secção breve, adicionar um link ou botão com texto equivalente a:

Explorar todas as definições

ou:

Ver LAB Definitions

O CTA deve seguir o padrão visual e linguístico já utilizado no site.

O link deve abrir a nova página interna de definições.

## Parte 2 — Página interna com glossário completo

Criar uma página interna dedicada às definições oficiais do LAB.

Usar uma rota semanticamente clara, seguindo o padrão de rotas já existente no projecto.

Preferência de rota:

`/lab-definitions`

Caso o site utilize rotas localizadas, slugs traduzidos, agrupamentos ou outra convenção, respeitar rigorosamente a estrutura existente.

Não criar duas rotas concorrentes para o mesmo conteúdo.

### Metadados da página

Definir title e description coerentes com o sistema actual de metadata.

Sugestão:

Title:

LAB Definitions | Payload Journey LAB

Description:

Definições oficiais de Software Engineering, sistema, caminho, payload, Payload Journey, tracing, Tracing Engineering, Trace Engineer, compreensão, decisão e evidência utilizadas pelo Payload Journey LAB.

Não alterar os metadados globais do site.

## Estrutura editorial da página interna

A página deve possuir:

1. título principal;
2. introdução;
3. glossário completo;
4. síntese final;
5. navegação clara de retorno para a página principal, seguindo os padrões existentes.

Usar headings semanticamente correctos.

Não usar apenas elementos visuais genéricos quando um `h1`, `h2`, `p`, `dl`, `dt` ou `dd` for semanticamente mais apropriado.

A página precisa funcionar bem em desktop e mobile.

## Texto completo da página interna

### LAB Definitions

O Payload Journey LAB utiliza um vocabulário preciso para investigar como operações atravessam sistemas de software.

Estas definições estabelecem o significado de software, sistema, caminho, payload, tracing, compreensão, decisão e evidência dentro do LAB.

### Software

Software é uma organização executável de instruções, regras, dados e estados capaz de interpretar sinais, transformar informação, aplicar decisões e produzir efeitos.

A sua lógica é intangível, mas a sua existência e execução dependem de estruturas físicas, como dispositivos, processadores, memória, redes, sensores e interfaces.

O software permite que acontecimentos, intenções e informações adquiram representação digital, atravessem diferentes camadas e produzam novos efeitos observáveis.

### Software Engineering

Software Engineering é a disciplina de projectar, construir, testar, operar e evoluir sistemas de software de forma controlada, verificável e sustentável.

A Engenharia de Software constrói sistemas completos.

Esses sistemas são formados por componentes, responsabilidades, estados, eventos, regras, contratos, mecanismos de comunicação, persistência e interfaces.

A Engenharia de Software também define os caminhos operacionais e projecta as representações necessárias para que intenções, eventos e informações possam atravessar o sistema e tornar-se decisões e resultados.

### Sistema

Um sistema de software é uma estrutura organizada de componentes, responsabilidades, estados, eventos, regras, contratos e mecanismos de comunicação.

O sistema é a estrutura completa.

Ele não é apenas uma sequência de chamadas ou um conjunto de ficheiros.

Os seus componentes existem para receber, interpretar, transformar, decidir, armazenar ou apresentar partes de uma operação.

### Caminho

Um caminho é a sequência percorrida por uma operação dentro de um sistema.

Uma operação pode atravessar uma interface, uma aplicação, uma request, uma API, um controller, um DTO, um command, o domínio, um repositório, uma base de dados, uma response, uma projection e novamente a interface.

As pontes são a metáfora desses caminhos de travessia.

A Engenharia de Software constrói o sistema e torna esses caminhos possíveis.

### Intenção

Uma intenção é aquilo que uma pessoa, um processo ou outro sistema pretende realizar.

O software não começa no código.

Ele começa quando existe uma expectativa de que determinada entrada, acção ou acontecimento produza um resultado.

Uma pessoa pode querer enviar uma mensagem.

Uma empresa pode querer processar um pagamento.

Uma comunidade pode querer enviar um Heart para um mapa.

A intenção origina a operação, mas não determina antecipadamente todas as decisões internas necessárias para realizá-la.

### Expectativa

A expectativa descreve o comportamento que o sistema deveria produzir.

Ela estabelece a relação esperada entre entrada, processamento, decisão e resultado.

No HORA.city, a expectativa da operação Send Heart é que o sistema receba uma intenção, obtenha os dados necessários, consulte o estado actual, aplique as regras de domínio, decida entre Create e Join, persista o resultado e apresente-o na interface.

A Tracing Engineering utiliza essa expectativa como referência para investigar a execução real.

### Payload

Payload é a representação operacional que permite que uma intenção, um evento, um estado ou uma operação atravesse os caminhos de um sistema.

O payload é deliberadamente projectado pela Engenharia de Software.

A Engenharia de Software define quais dados precisam de circular, como serão estruturados, que nomes e tipos terão, quais campos serão obrigatórios, que contratos os componentes aceitarão e como cada representação poderá ser transformada.

Durante a execução, o sistema instancia essas representações com os valores concretos de cada operação.

O payload pode mudar de nome, estrutura e formato.

Pode aparecer como evento de interface, structured payload, request, DTO, command, evento de domínio, documento persistido, response ou projection.

O payload não precisa permanecer estruturalmente idêntico durante toda a jornada.

O que precisa permanecer é a continuidade causal e semântica da operação.

### Significado operacional

O payload transporta uma representação do significado operacional.

Esse significado não reside exclusivamente no payload.

Ele resulta da relação entre:

* payload;
* schema;
* contexto;
* origem;
* destino;
* protocolo;
* estado actual;
* regras;
* ordem dos eventos;
* unidades;
* convenções.

Os valores de latitude e longitude, isoladamente, são apenas números.

Eles passam a representar uma localização quando são interpretados por um contrato, dentro de uma operação e segundo as regras do sistema.

### Payload Journey

Payload Journey é o caminho percorrido por uma operação através das suas diferentes representações, componentes, camadas, estados e decisões.

A jornada pode começar num clique, num sensor, numa integração, num processo automático ou noutro sistema.

Ela continua enquanto a operação é capturada, estruturada, validada, interpretada, decidida, persistida e apresentada.

O Payload Journey não observa apenas onde os dados passaram.

Ele investiga como a representação da operação mudou e se a sua continuidade causal e semântica foi preservada.

### Tracing

Tracing é o acto de seguir uma operação durante a sua execução.

O tracing procura reconstruir:

* onde a operação começou;
* que identidade a acompanha;
* por quais componentes passou;
* como o payload foi transformado;
* que estados foram consultados;
* que regras foram aplicadas;
* onde uma decisão foi produzida;
* que estado foi alterado;
* e que resultado foi apresentado.

Tracing não é apenas recolher logs.

É construir uma explicação causal sustentada por evidências.

Payload tracing e outras formas de tracing já fazem parte da Engenharia de Software.

O Payload Journey LAB não afirma ter inventado o tracing.

### Tracing Engineering

Tracing Engineering é a prática sistemática de tornar operações de software observáveis, reconstruíveis e verificáveis.

Ela combina modelação, identidade de tracing, checkpoints, instrumentação, observação de estados, captura de evidências e análise causal.

A Tracing Engineering conhece o percurso esperado e observa o percurso executado.

Ela compara:

* o que o sistema deveria fazer;
* com o que uma operação realmente fez.

A sua função é verificar se a intenção atravessou correctamente a estrutura construída, se as transformações foram válidas, se o significado operacional foi preservado, se a regra correcta foi aplicada e se o resultado final permaneceu ligado à origem da operação.

A Engenharia de Software constrói a possibilidade da travessia.

A Tracing Engineering reconstrói e verifica a travessia realizada.

### Trace Engineer

Trace Engineer é o profissional que investiga operações de software através da sua continuidade causal, semântica e temporal.

O Trace Engineer adopta uma posição interna à execução.

Ele entra no flow.

Isso não significa que esteja literalmente dentro do software.

Significa que acompanha o sistema a partir da perspectiva de uma operação enquanto ela atravessa componentes, muda de representação, encontra estados, activa regras, produz decisões e gera efeitos.

O seu foco é uma operação concreta e o caminho que ela percorre.

Ele observa:

* onde a operação começou;
* qual identidade conecta as evidências;
* como o payload foi representado;
* por quais componentes passou;
* que transformações ocorreram;
* que regras foram aplicadas;
* onde a decisão foi tomada;
* que estado foi alterado;
* e que resultado foi produzido.

O Trace Engineer vive no flow, mas não perde de vista o sistema.

### Compreensão

Compreender um software é conseguir explicar, com nomes reais e evidências:

* o que ele faz;
* por que produz determinado resultado;
* e onde esse resultado é decidido.

Compreensão não é apenas reconhecer ficheiros, funções, classes ou componentes.

É reconstruir a relação entre intenção, execução, representação, regra, decisão, estado e efeito.

Uma explicação sem ligação com a execução real é apenas uma descrição ou hipótese.

Uma explicação conectada por evidências é compreensão verificável.

### O que o software faz

Explicar o que um software faz significa descrever o comportamento observável e o caminho que permite que esse comportamento aconteça.

No HORA.city:

Uma pessoa inicia a operação Send Heart.

O sistema captura a intenção, recebe os dados necessários, estrutura o payload, envia uma request, consulta os Hearts activos, aplica a regra de domínio, decide entre Create e Join, persiste o resultado e apresenta-o no mapa.

### Por que o software faz

Explicar por que o software produz determinado resultado significa identificar:

* a regra aplicada;
* os dados utilizados;
* o estado anterior;
* a condição encontrada;
* e a consequência produzida.

No HORA.city:

O sistema decide Join quando encontra um Heart activo dentro do raio permitido.

O sistema decide Create quando não encontra um Heart activo dentro desse raio.

O resultado não acontece apenas porque a pessoa clicou.

Ele acontece porque uma regra foi aplicada a dados e estados concretos.

### Onde o software decide

Onde decide é o ponto exacto em que os dados deixam de ser apenas transportados e passam a determinar um resultado entre alternativas possíveis.

No HORA.city, a intenção humana é Send Heart.

A UI não deveria decidir Create ou Join.

A UI captura a intenção e apresenta o resultado.

A API recebe e valida a request.

O DTO representa os dados.

A aplicação coordena a operação.

O domínio consulta o estado e aplica a regra.

O repositório persiste o resultado.

A decisão entre Create e Join pertence conceptualmente ao domínio.

Na codebase real, o tracing deve identificar o componente, a função e a linha exacta em que essa bifurcação acontece.

### Decisão

Uma decisão é o resultado da aplicação de uma regra a dados e estados concretos.

No HORA.city:

Existe um Heart activo dentro do raio permitido?

Se sim, Join.

Se não, Create.

A decisão representa o encontro entre:

* a intenção recebida;
* o estado actual;
* e a regra definida pelo sistema.

### Estado

Estado é a condição actual de uma entidade, operação ou sistema num determinado momento.

Uma decisão não depende apenas dos dados recebidos.

Ela pode depender também do estado existente antes da operação.

No HORA.city, a mesma intenção Send Heart pode produzir Create ou Join porque o estado do sistema pode ser diferente em cada execução.

### Evidência

Evidência é qualquer registo verificável que permita reconstruir uma parte da operação.

Uma evidência pode demonstrar:

* a intenção capturada;
* a identidade da operação;
* o payload estruturado;
* a request recebida;
* o estado consultado;
* a distância calculada;
* a regra aplicada;
* a decisão produzida;
* o estado persistido;
* a response devolvida;
* ou o resultado apresentado.

Uma evidência isolada mostra apenas um ponto.

Um conjunto de evidências causalmente conectado permite reconstruir a travessia.

### Flow

Flow é a progressão operacional através da qual uma intenção se torna resultado.

O flow não é apenas um diagrama estático.

Ele é a sequência executada por uma operação concreta.

Seguir o flow significa acompanhar essa progressão através das representações, componentes, estados, regras e decisões do sistema.

### Síntese do LAB

Uma intenção origina uma operação.

A Engenharia de Software constrói o sistema completo.

Dentro do sistema, ela define componentes, regras, estados, contratos e caminhos operacionais.

As pontes representam esses caminhos de travessia.

O payload transporta uma representação operacional através dos caminhos.

Os componentes interpretam e transformam essa representação.

O domínio aplica regras ao payload e ao estado actual.

A decisão produz uma alteração de estado.

O sistema devolve e apresenta o resultado.

A Tracing Engineering acompanha, reconstrói e verifica essa travessia.

O Trace Engineer entra no flow sem perder de vista o sistema.

Compreender o sistema é conseguir explicar o que ele fez, por que fez e onde decidiu.

## Frases institucionais que devem permanecer em destaque

A Engenharia de Software constrói sistemas de software completos.

As pontes são a metáfora dos caminhos de travessia dentro desses sistemas.

O payload transporta uma representação operacional através desses caminhos.

A Tracing Engineering conhece o percurso esperado e observa o percurso executado.

O Trace Engineer entra no flow sem perder de vista o sistema.

A Engenharia de Software define como o significado poderá atravessar o sistema.

A Tracing Engineering verifica como ele realmente o atravessou.

## Requisitos de experiência e apresentação

A secção da homepage deve ser breve, legível e visualmente leve.

A página interna pode ser extensa, mas precisa ser organizada para leitura progressiva.

Aplicar:

* largura de leitura confortável;
* hierarquia tipográfica clara;
* espaçamento adequado entre definições;
* boa leitura em mobile;
* contraste acessível;
* navegação por teclado;
* estados de foco visíveis;
* links semanticamente identificáveis;
* nenhuma dependência de hover para acesso ao conteúdo.

Caso o projecto já utilize animações, aplicar apenas animações discretas e consistentes.

Respeitar `prefers-reduced-motion`, caso o site já possua esse tratamento.

## Navegação

A nova página deve ser alcançável pela secção da homepage.

Não adicionar obrigatoriamente um novo item ao menu principal sem antes avaliar o padrão e a densidade actual da navegação.

Caso exista uma secção de recursos, documentação, learning, about ou footer apropriada, pode ser adicionado um link secundário para `LAB Definitions`, desde que isso não altere ou substitua links existentes.

## Implementação técnica

Criar apenas os componentes necessários.

Evitar duplicação do conteúdo resumido e detalhado quando uma pequena estrutura de dados tipada puder servir ambas as apresentações sem aumentar a complexidade.

No entanto, não transformar toda a página num sistema genérico de CMS ou configuração desnecessária.

Preservar rendering server-side ou static generation se esse for o padrão do projecto.

Não converter componentes para client components sem necessidade.

Não adicionar estado React quando o conteúdo for estático.

Não introduzir chamadas externas.

Não alterar a configuração de deploy.

Não alterar dependências sem necessidade.

Não alterar o comportamento da hero ou dos CTAs existentes.

## Verificações obrigatórias

Após a implementação:

1. Executar o formatter utilizado pelo projecto.
2. Executar lint.
3. Executar typecheck, caso exista.
4. Executar testes relacionados, caso existam.
5. Executar build de produção.
6. Corrigir erros introduzidos pela implementação.
7. Verificar visualmente a homepage e a página interna em desktop e mobile.
8. Confirmar que nenhum conteúdo anterior desapareceu.
9. Confirmar que todos os links anteriores continuam funcionais.
10. Confirmar que o CTA da homepage abre correctamente a página interna.
11. Confirmar que existe apenas um `h1` principal por página, de acordo com a estrutura actual.
12. Confirmar que não existem warnings de hydration, chaves duplicadas ou imports desnecessários introduzidos.

## Entrega final

Ao concluir, apresentar:

1. resumo do que foi implementado;
2. lista exacta dos ficheiros criados;
3. lista exacta dos ficheiros modificados;
4. localização da nova secção na homepage;
5. rota final da página interna;
6. decisões tomadas para preservar o design existente;
7. resultados de lint, typecheck, testes e build;
8. qualquer limitação encontrada.

Não afirmar que algo foi validado se o respectivo comando não tiver sido executado.

Não realizar outras refactorizações.

Não limpar código não relacionado.

Não modificar textos fora da nova secção.

O resultado final deve acrescentar as Definições do LAB de forma semanticamente forte, tecnicamente rigorosa e visualmente coerente, preservando integralmente tudo o que já existe no Payload Journey LAB.
