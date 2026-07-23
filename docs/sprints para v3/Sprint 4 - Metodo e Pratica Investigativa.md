# Sprint 4 — Método e Prática Investigativa

## Estado

Sprint 4 implementada e validada. Nenhuma atividade da Sprint 5 foi iniciada.

## Gate documental e técnico

### Autorização e correspondência do plano

O plano aprovado em `docs/sprints para v3/plano-sprint4.md` corresponde à especificação autorizada em `docs/sprints para v3/sprint 4.md`:

- mantém somente as rotas existentes `/method`, `/protocol` e `/investigation`;
- separa prática, capacidades, função, instrumentos, protocolo e evidência;
- prevê as dez definições canônicas;
- exige inventário real de artefatos;
- classifica Trace Engineer como função e perfil investigativo em desenvolvimento;
- mantém sistemas distribuídos e mission-critical como direção futura;
- define o verificador combinado e os nove gates finais;
- impede o início da Sprint 5.

### Origem e estado dos documentos de entrada

| Ficheiro | Origem atribuída | Estado antes da edição | Tamanho | SHA-256 |
|---|---|---|---:|---|
| `sprint 4.md` | especificação fornecida pelo utilizador | preexistente, não rastreado, preservado sem edição | 32.302 bytes | `CA5B5003006E0ED89CC1B255C6702C11DF0F95178A8A9551AC579BDAEEB272C5` |
| `plano-sprint4.md` | plano aprovado pelo utilizador | preexistente, não rastreado, preservado sem edição | 28.823 bytes | `4E5DFAC0FBC44432D4594421A7F863D28089F39560EE601D7561EA457CE80A49` |

`sprint 4.md` foi criado em 23 de julho de 2026 às 10:45:36 e teve última escrita às 10:45:44. O plano foi criado e teve última escrita às 11:11:05.

### Repositório

- branch inicial e final: `refactor/homepage-v0.2.0`;
- commit inicial e final: `fce173295dd6e6c5023c351008201cfa45b16c5e`;
- nenhum commit foi criado nesta execução;
- o worktree já continha as entregas não commitadas das Sprints 2 e 3;
- essas alterações preexistentes foram atribuídas e preservadas;
- as páginas e documentos finais das Sprints 1, 2 e 3 não foram editados nesta sprint.

### Fontes obrigatórias lidas e preservadas

- `Sprint 0 - Contrato Editorial e Mapa de Preservacao e Migracao.md`;
- `Sprint 1 - Homepage.md`;
- `Sprint 2 - LAB.md`;
- `Sprint 3 - Formacao e Progressao Pedagogica.md`;
- `decisoes humanas.md`;
- `sprint 4.md`;
- `plano-sprint4.md`.

## Baseline anterior à implementação

Os oito gates existentes passaram antes das edições da Sprint 4: lint, TypeScript, build, foundation, AI-readiness, homepage, LAB e learn. O build gerou 17 páginas estáticas. As três rotas possuíam 1,33 kB de tamanho de rota, 94,3 kB de First Load JS e 87,2 kB compartilhados.

Foram capturadas 15 imagens de baseline:

- `sprint4-before-method-{320,375,768,1024,1440}.png`;
- `sprint4-before-protocol-{320,375,768,1024,1440}.png`;
- `sprint4-before-investigation-{320,375,768,1024,1440}.png`.

Todas apresentaram overflow horizontal igual a zero.

## Arquitetura final

### `/method`

Função: mapa canônico dos instrumentos do LAB.

Ordem:

1. hero com dois CTAs internos;
2. taxonomia metodológica;
3. mapa de cinco instrumentos;
4. checkpoints e documentos de investigação;
5. relação possível entre instrumentos;
6. limites;
7. continuidade.

Cada instrumento apresenta definição, ponto de partida, pergunta, uso, resultado condicionado, estado, evidência de estado, limite e página canônica somente quando localizada. Payload Journey e USMT apontam para suas páginas existentes; Reverse Payload Journey, Operational Payload Path e Track to Origin não receberam novas rotas.

### `/protocol`

Função: explicar a execução geral de uma investigação.

Ordem:

1. hero com dois CTAs internos;
2. entradas mínimas;
3. Congelar;
4. Mapear;
5. Detectar;
6. Restaurar;
7. retornos iterativos;
8. inventário de artefatos e estados reais;
9. limites;
10. continuidade.

As quatro fases expõem pergunta, objetivo, entradas, atividades, evidências possíveis, resultado condicionado e critério de saída. Os retornos Detectar–Mapear, Restaurar–Detectar e Mapear–Congelar impedem uma leitura linear rígida.

### `/investigation`

Função: definir a prática, a postura e as capacidades investigativas.

Ordem:

1. hero sem CTA da Udemy;
2. definição e características de Software System Investigation;
3. Track Mode;
4. Trace Engineering;
5. Trace Engineer;
6. perguntas investigativas;
7. práticas complementares;
8. autoridade humana;
9. limites atuais e direção futura;
10. continuidade.

Trace Engineer aparece junto do estado “Função e perfil investigativo em desenvolvimento” e das cinco ressalvas obrigatórias. Sistemas distribuídos e mission-critical aparecem somente dentro de “Direção futura de pesquisa e formação”.

## Definições canônicas

As dez definições estão centralizadas em `content/methods.ts`:

1. Payload Journey;
2. Payload Tracing;
3. Software System Investigation;
4. Trace Engineering;
5. Trace Engineer;
6. USMT;
7. Operational Payload Path;
8. Reverse Payload Journey;
9. Track to Origin;
10. Congelar, Mapear, Detectar e Restaurar.

Os componentes consomem a mesma fonte; não foram criadas cópias concorrentes.

## Inventário real de artefatos

| Artefato | Estado público | Evidência localizada |
|---|---|---|
| Payload Journey | página canônica disponível | rota `/payload-journey` e conteúdo correspondente |
| USMT | página canônica disponível | rota `/usmt` e conteúdo correspondente |
| Reverse Payload Journey | documentado | definição em `content/methods.ts` |
| Operational Payload Path | documentado | definição em `content/methods.ts`; nenhum OPP produzido localizado |
| Track to Origin | em desenvolvimento | definição e limites em `content/methods.ts` |
| Checkpoints | documentado | protocolo, formação e narrativa do HORA.city |
| evidências públicas do HORA.city | em uso no caso | `content/hora-city.ts` e rota `/cases` |
| Case Brief | não localizado | apenas menções documentais |
| Checkpoint Plan | não localizado | apenas menções documentais |
| Freeze Record | não localizado | apenas menções documentais |
| Detection Report | não localizado | apenas menções documentais |
| Trace Evidence Record / Package | não localizado | apenas menções documentais |
| USMT Evidence-Aligned | não localizado | apenas menções documentais |

Nenhuma menção documental foi convertida em disponibilidade.

## Claims reformulados

| Formulação anterior | Risco | Formulação final | Justificativa |
|---|---|---|---|
| “Métodos diferentes para perguntas diferentes” | confundia métodos e instrumentos | “Instrumentos diferentes para perguntas diferentes” | alinha a taxonomia canônica |
| “processo operacional” como apresentação suficiente | podia sugerir maturidade geral | protocolo em confronto, com limites e resultados condicionados | evita garantia de causa raiz ou eficácia universal |
| CTA formativo externo no hero de `/investigation` | misturava prática com oferta formativa | CTAs internos para protocolo e métodos | preserva a função metodológica da rota |
| Trace Engineer sem ressalvas adjacentes | podia parecer profissão, cargo ou certificação consolidada | função e perfil investigativo em desenvolvimento, com cinco ressalvas | respeita a decisão humana congelada |
| nomes de documentos sem estado | podiam parecer artefatos disponíveis | “Não localizado” com evidência explícita | disponibilidade exige ficheiro realmente localizado |
| sistemas distribuídos e mission-critical no horizonte | podiam sugerir competência atual | “Direção futura de pesquisa e formação” | separa estado atual de direção futura |

## Tratamento do conteúdo

- Preservado: as cinco famílias de instrumentos, as quatro fases, Track Mode, Trace Engineer, Software System Investigation, relações com arquitetura/debugging/observabilidade, autoridade humana e limites.
- Condensado: introduções genéricas e explicações repetidas.
- Movido: a taxonomia para o início de `/method`; entradas e artefatos para `/protocol`; ressalvas para junto de Trace Engineer.
- Dividido: método, protocolo e prática agora possuem responsabilidades distintas.
- Reformulado: estados, resultados e claims de maturidade.
- Removido por redundância: CTA da Udemy no hero de `/investigation` e apresentação histórica genérica.

## Tipagem

A tipagem foi mantida simples e funcional:

- uniões pequenas para estado e categoria de claim;
- campos explícitos para definição, entrada, limite e evidência;
- apresentações específicas das três páginas;
- nenhuma camada de domínio, registry, factory ou Client Component foi introduzida.

## Ficheiros alterados pela Sprint 4

| Caminho | Motivo | Risco | Validação |
|---|---|---|---|
| `types/content.ts` | contratos proporcionais | incompatibilidade de conteúdo | TypeScript e build |
| `content/methods.ts` | fonte canônica, estados e inventário | claims incorretos | verificador combinado |
| `content/routes.ts` | H1 e metadata | regressão SEO | AI-readiness e homepage |
| `components/pages/PageIntro.tsx` | segundo CTA interno | regressão no shell | foundation e homepage |
| `components/pages/SitePage.tsx` | encaminhar segundo CTA | regressão nas rotas | foundation e homepage |
| `components/sections/MethodsSection.tsx` | arquitetura de `/method` | densidade e hierarquia | verificador e visual |
| `components/sections/InvestigationCycleSection.tsx` | arquitetura de `/protocol` | linearidade ou artefatos falsos | verificador e visual |
| `components/sections/InvestigationPracticeSection.tsx` | arquitetura de `/investigation` | maturidade excessiva | verificador e visual |
| `app/method/page.tsx` | composição e continuidade | H1/CTA | verificador |
| `app/protocol/page.tsx` | composição e continuidade | H1/CTA | verificador |
| `app/investigation/page.tsx` | composição e remoção do CTA externo | H1/CTA | verificador |
| `scripts/verify-method-practice.mjs` | contrato combinado | falso positivo | execução local |
| `scripts/verify-homepage.mjs` | remover expectativas históricas | regressão global | execução local |
| `scripts/verify-ai-readiness.mjs` | nova proveniência contextual | regressão SEO | execução local |
| `package.json` | comando `verify:method-practice` | script inválido | execução local |

Além destes ficheiros, foram criadas as 15 capturas finais e este documento. Nenhum ficheiro de implementação de `/payload-journey`, `/usmt`, `/lab`, `/learn`, `/cases`, `/lablog`, `/ecosystem`, Header ou Footer foi alterado nesta sprint.

## Validação técnica final

| Gate | Resultado | Duração observada |
|---|---|---:|
| `npm.cmd run lint` | passou, zero warnings/erros ESLint | 10,1 s |
| `npx.cmd tsc --noEmit` | passou | 6,8 s |
| `npm.cmd run build` | passou, 17 páginas estáticas | 43,5 s |
| `npm.cmd run verify:foundation` | passou | 1,5 s |
| `npm.cmd run verify:ai-readiness` | passou | 45,2 s |
| `npm.cmd run verify:homepage` | passou | 36,5 s |
| `npm.cmd run verify:lab` | passou | 26,9 s |
| `npm.cmd run verify:learn` | passou | 29,6 s |
| `npm.cmd run verify:method-practice` | passou | 24,5 s |

O verificador combinado confirmou três rotas, H1 único, IDs únicos, headings sequenciais, dez definições canônicas, quatro fases, estado protegido de Trace Engineer, futuro protegido, zero novas rotas metodológicas e zero novos Client Components.

`git diff --check` passou.

### Warnings técnicos preexistentes

- O build repetiu duas mensagens `Webpack cache PackFileCacheStrategy: Unable to snapshot resolve dependencies`, já presentes no baseline.
- O Git informou que ficheiros LF serão convertidos para CRLF quando forem tocados, comportamento já associado à configuração do worktree.
- O redirect de hosting continua exigindo validação pública após deploy, conforme o verificador de AI-readiness.

Esses warnings foram registrados e não corrigidos nesta sprint.

## Validação visual e acessibilidade

Foram produzidas 15 capturas finais:

- `sprint4-after-method-{320,375,768,1024,1440}.png`;
- `sprint4-after-protocol-{320,375,768,1024,1440}.png`;
- `sprint4-after-investigation-{320,375,768,1024,1440}.png`.

Resultado:

- overflow horizontal: zero nas 15 combinações;
- primeiro viewport: função, H1 e CTAs claros nas três rotas;
- móvel: CTAs empilham sem corte e títulos quebram de forma legível;
- desktop: hierarquia e primeira transição editorial permanecem visíveis;
- status: sempre textual, sem depender apenas de cor;
- headings: um H1 e sequência sem saltos;
- listas: semânticas;
- links: nomes descritivos e destinos internos válidos;
- foco: estilo `focus-visible` preservado no componente Button;
- contraste: foundation confirmou WCAG AA para os pares protegidos;
- coerência: homepage, LAB e formação passaram seus verificadores.

## First Load JS e performance

Não houve alteração mensurável:

- `/method`: 1,33 kB; First Load JS 94,3 kB;
- `/protocol`: 1,33 kB; First Load JS 94,3 kB;
- `/investigation`: 1,33 kB; First Load JS 94,3 kB;
- compartilhado: 87,2 kB.

Nenhum Client Component ou dependência foi adicionado.

## Evidências separadas

### Evidência de fonte

Tipos, conteúdo canônico, componentes, páginas, metadata e verificadores foram inspecionados diretamente no repositório. O inventário declara disponibilidade somente quando uma rota, conteúdo ou ficheiro correspondente foi localizado.

### Evidência de conteúdo renderizado

Os verificadores solicitaram o HTML local das três rotas, confirmaram HTTP 200, H1 único, ordem, IDs, headings, textos, links, metadata, canonical e JSON-LD. Isso é evidência do conteúdo renderizado localmente, não de comportamento runtime do sistema investigado.

### Evidência de build

O build compilou e pré-renderizou 17 páginas. Essa evidência confirma compilação, tipagem integrada e renderização estática; não é tratada como evidência de comportamento runtime.

### Execução local observada

Um servidor Next local e um navegador Edge headless foram executados. Foram observados resposta HTTP, navegação das rotas, layout nos cinco viewports e métricas de overflow. Não foi inferido, a partir disso, comportamento runtime de sistemas externos ou eficácia da metodologia.

### Produção

Não houve deploy. Nenhuma afirmação de produção foi feita.

## Limitações e decisões pendentes

- eficácia pedagógica e transferibilidade continuam não demonstradas;
- casos externos continuam necessários;
- artefatos “Não localizado” ainda não possuem ficheiro canônico;
- aplicação distribuída, sistemas industriais e mission-critical continuam direção futura;
- Trace Engineer continua função e perfil investigativo em desenvolvimento;
- o LAB não oferece certificação profissional;
- validação pública do redirect de hosting depende de deploy futuro;
- qualquer avanço para a Sprint 5 depende de aprovação humana explícita.

## Critérios de conclusão

Os critérios autorizados da Sprint 4 foram atendidos: as três rotas têm funções distintas, as definições e estados estão centralizados, o protocolo é completo e iterativo, Trace Engineer está classificado com cautela, práticas complementares não são substituídas, os limites e o futuro estão explícitos, não há novas rotas metodológicas, metadata e verificadores estão alinhados, responsividade e performance foram validadas e a Sprint 5 não foi iniciada.
