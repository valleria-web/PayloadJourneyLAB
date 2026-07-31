# Trilha progressiva e demonstração visual do payload

Data: 19 de julho de 2026  
Versão de referência: `0.2.0`

## 1. Objetivo

A Trilha e a Demo aparecem depois da dor e das competências porque completam uma progressão deliberada: primeiro o visitante reconhece o problema, depois entende o que aprenderá, em seguida vê como essa aprendizagem evolui e, por fim, observa uma representação concreta do payload atravessando o sistema. A profundidade institucional e metodológica permanece nas seções antigas posteriores.

## 2. Trilha

A Trilha usa a nomenclatura etapa, progressão, caminho e trilha. Não representa níveis de certificação.

| Etapa | ID | Conceitos centrais | Resultado |
| --- | --- | --- | --- |
| 01 — Entenda o Payload | `understand-payload` | payload, estados e eventos, camadas, representações e continuidade semântica | Você passa a enxergar informação atravessando o sistema. |
| 02 — Payload Journey | `payload-journey` | origem, caminho operacional, fronteiras, transporte, transformação, decisão e checkpoints | Você consegue reconstruir um flow de ponta a ponta. |
| 03 — Reverse Payload Journey | `reverse-payload-journey` | anomalia observável, congelamento, mapping, checkpoints, evidências e divergência | Você deixa de adivinhar e começa a investigar. |
| 04 — Track to Origin | `track-to-origin` | origem, autoridade, modelo, evidência, restauração e validação | Você consegue explicar onde e por que uma decisão ocorreu. |

O conteúdo está centralizado em `homepageEntry.learningPath` e é renderizado como lista ordenada. Cada etapa possui descrição, conceitos e resultado explícito.

## 3. Demonstração

A Demo é identificada na interface como `Uma representação pedagógica de um flow operacional.` Ela não é log, tracing em tempo real, execução da codebase ou reprodução de um endpoint real.

| Ordem | ID | Label | Representação | Responsabilidade | Papel | Pergunta investigativa |
| ---: | --- | --- | --- | --- | --- | --- |
| 01 | `interaction` | Clique | Interação do usuário | Iniciar um comportamento observável no sistema. | Apresenta | Qual interação deu origem ao flow? |
| 02 | `structured-payload` | Structured Payload | Dados estruturados pela aplicação | Converter a interação em informação transportável e interpretável. | Transforma | Qual informação foi produzida? |
| 03 | `request` | Request | Mensagem de transporte | Levar o payload através da fronteira de rede. | Transporta | O que realmente saiu do frontend? |
| 04 | `api` | API | Entrada recebida | Receber, validar e encaminhar a informação. | Transforma | Como a entrada foi interpretada? |
| 05 | `domain` | Domain | Ação interpretada | Aplicar regras e determinar o comportamento do sistema. | Decide | Onde a decisão foi tomada? |
| 06 | `repository` | Repository | Operação de persistência | Transportar a decisão do domínio até a persistência. | Transporta | O que foi enviado para persistência? |
| 07 | `response` | Response | Resultado transportado | Levar o resultado da operação de volta à aplicação. | Transporta | O que retornou do sistema? |
| 08 | `projection` | Projection | Estado preparado para apresentação | Converter a resposta numa representação adequada à interface. | Transforma | Como o resultado foi preparado para a UI? |
| 09 | `ui` | UI | Comportamento visível | Apresentar ao usuário o estado resultante do flow. | Apresenta | O que o usuário finalmente observa? |

Os nove nodes permanecem nesta ordem no HTML. O CSS pode distribuí-los em colunas, mas não reorganiza o DOM.

## 4. Transportar, transformar, decidir e apresentar

- **Transporta:** desloca a informação entre fronteiras ou responsabilidades sem assumir autoridade de domínio. Request, Repository e Response usam este papel.
- **Transforma:** muda a representação ou interpreta a entrada para a próxima responsabilidade. Structured Payload, API e Projection usam este papel.
- **Decide:** aplica regras e determina comportamento. Domain recebe esse papel e destaque visual superior.
- **Apresenta:** inicia ou encerra a observação do flow na relação com o usuário. Clique e UI usam este papel.

As palavras Transporta, Transforma, Decide e Apresenta são renderizadas explicitamente. Cor, borda e superfície são apenas apoio. Repository não é descrito como autoridade de domínio.

## 5. Semântica e acessibilidade

- Trilha e Demo usam `h2`; cards internos usam `h3`.
- Trilha, conceitos, legenda operacional e flow usam listas semânticas.
- A ordem de leitura coincide com a sequência pedagógica e operacional.
- Os papéis possuem labels textuais, não apenas cor.
- Os contrastes dos papéis medem 7,06:1, 5,63:1, 6,12:1 e 14,28:1.
- As seções funcionam sem JavaScript, hover, acordeão ou expansão.
- `Section` mantém `scroll-margin-top` para o Header sticky.
- O foco global e a proteção de reduced motion existentes permanecem.
- `MobileNavigation` continua sendo a única fronteira Client Component e conserva Escape e retorno de foco.

## 6. Responsividade

- Mobile: uma etapa e um node por linha; flow vertical; conceitos quebram naturalmente; sem scroll horizontal.
- Tablet: Trilha e Demo usam duas colunas, preservando a ordem do DOM.
- Desktop: Trilha usa quatro colunas; o flow progride por três colunas em `lg` e cinco em `xl`, formando duas linhas em larguras amplas.
- Conectores complexos foram evitados. Número, ordem da lista e composição visual tornam a sequência inequívoca sem sobreposição.

## 7. CTAs

| Origem | Texto | Destino |
| --- | --- | --- |
| Header | Começar | `#trilha` |
| Hero principal | Ver o payload atravessar o sistema | `#demo` |
| Hero secundário | Explorar a trilha | `#trilha` |
| Demo | Ver o caso real HORA.city | `#case-study` |

A interface não oferece “demonstração completa” nem aponta para página, vídeo ou experiência inexistente. Formação continua diretamente acessível pelo Header.

## 8. Preparação para futuras sprints

A estrutura tipada poderá receber, numa sprint futura e com fontes reais confirmadas, checkpoints, componentes, request/response, vídeo, codebase e o flow do Send Heart. Nenhum desses elementos foi inventado ou implementado agora. `heroInvestigationPanel` e o conteúdo técnico retirado do Hero continuam preservados separadamente.
