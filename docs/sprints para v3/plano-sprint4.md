# Plano de implementação — Sprint 4

## Estado do plano

Este documento planeja a Sprint 4 — Método e Prática Investigativa.

Nenhuma alteração de implementação da Sprint 4 foi realizada durante a elaboração deste plano. A execução deverá começar somente após aprovação humana explícita deste documento.

Documento de especificação:

`docs/sprints para v3/sprint 4.md`

Documento obrigatório da futura execução:

`docs/sprints para v3/Sprint 4 - Metodo e Pratica Investigativa.md`

## Objetivo

Consolidar três páginas com responsabilidades distintas:

| Rota | Pergunta principal |
|---|---|
| `/method` | Que instrumentos existem, que pergunta cada um responde e como se relacionam? |
| `/protocol` | Como uma investigação é conduzida, iterada, documentada e validada? |
| `/investigation` | O que é a prática investigativa e que capacidades, função e responsabilidades ela envolve? |

O resultado deverá separar claramente:

- prática;
- capacidades;
- função investigativa;
- instrumentos;
- protocolo;
- evidência;
- conteúdo documentado;
- trabalho em desenvolvimento;
- direção futura.

Não serão criadas novas rotas metodológicas.

## Baseline observado

| Campo | Valor |
|---|---|
| Data do planejamento | 2026-07-23 |
| Timezone | Europe/Berlin |
| Branch | `refactor/homepage-v0.2.0` |
| HEAD | `fce173295dd6e6c5023c351008201cfa45b16c5e` |
| Node.js | `v22.19.0` |
| npm | `11.6.3` |
| Next.js | `14.2.35` |
| First Load JS de referência | 94,3 kB nas rotas de conteúdo |
| Arquitetura | Next.js App Router, conteúdo tipado e Server Components |

O worktree contém as entregas documentadas das Sprints 2 e 3 ainda não commitadas, suas capturas, verificadores e documentos. A especificação `sprint 4.md` foi adicionada pelo utilizador depois da Sprint 3. A origem dessas alterações está identificada.

O último estado validado da Sprint 3 registrou aprovação de:

1. lint;
2. TypeScript;
3. build;
4. foundation;
5. AI-readiness;
6. homepage;
7. LAB;
8. formação.

O build gerou 17 páginas estáticas, com First Load JS de 94,3 kB. Permaneceram duas ocorrências do warning preexistente:

`[webpack.cache.PackFileCacheStrategy] Caching failed for pack: Error: Unable to snapshot resolve dependencies`

Esses resultados são referência. Todos os gates deverão ser executados novamente no início da implementação.

## Gate documental obrigatório

Antes de editar código, reler integralmente:

1. `Sprint 0 - Contrato Editorial e Mapa de Preservacao e Migracao.md`;
2. `decisoes humanas.md`;
3. `Sprint 1 - Homepage.md`;
4. `Sprint 2 - LAB.md`;
5. `Sprint 3 - Formacao e Progressao Pedagogica.md`;
6. `sprint 4.md`;
7. este plano aprovado.

Confirmar:

- Sprint 3 concluída e aprovada;
- documento da Sprint 3 existente;
- tese e públicos inalterados;
- definições e taxonomia de claims coerentes;
- origem de todas as mudanças do worktree atribuída;
- nenhuma implementação concorrente da Sprint 4 ou 5;
- autorização explícita para executar a Sprint 4.

Bloquear a execução se algum item não puder ser comprovado.

## IDs e claims do contrato

### Mapa de Preservação e Migração

- `V3-MAP-METHOD-001` — distinção entre método e procedimento;
- `V3-MAP-METHOD-002` — Payload Journey;
- `V3-MAP-METHOD-003` — USMT e link real para `/usmt`;
- `V3-MAP-METHOD-004` — Reverse Payload Journey;
- `V3-MAP-METHOD-005` — Operational Payload Path;
- `V3-MAP-METHOD-006` — Track to Origin;
- `V3-MAP-PROTO-001` — introdução canônica do protocolo;
- `V3-MAP-PROTO-002` — quatro fases detalhadas;
- `V3-MAP-INV-001` — introdução da prática e remoção do CTA comercial;
- `V3-MAP-INV-002` — Track Mode;
- `V3-MAP-INV-003` — Trace Engineer;
- `V3-MAP-INV-004` — Software System Investigation;
- `V3-MAP-GLOBAL-007` — verificadores orientados a contrato.

### Claims prioritários

- `CL-012` — Trace Engineer não é profissão consolidada;
- `CL-019` — Software System Investigation e Trace Engineering são conceitos autorais em desenvolvimento;
- `CL-020` — tracing conecta práticas existentes e não as substitui;
- `CL-021` — não publicar eficácia universal, redução de onboarding, custos ou bugs.

Preservar também os limites congelados sobre transferibilidade, casos externos, sistemas distribuídos e mission-critical.

## Arquitetura atual

### `/method`

Estrutura observada:

1. `PageIntro` genérico.
2. H1 “Métodos diferentes para perguntas diferentes”.
3. `MethodsSection`.
4. Cinco cards de instrumentos.
5. Continuidade para protocolo e prática.

Conteúdo já forte:

- propósito;
- momento de uso;
- pergunta;
- resultado;
- relação com o procedimento;
- cinco instrumentos na ordem aprovada.

Lacunas:

- definição canônica não está sempre idêntica ao contrato;
- falta ponto de partida explícito;
- falta status real por instrumento;
- faltam limites por instrumento;
- USMT ainda carrega na fonte um CTA histórico “Página em desenvolvimento”;
- checkpoints e documentos de evidência não integram o mapa;
- a relação completa entre instrumentos não é apresentada;
- Payload Journey e USMT não possuem links canônicos dentro dos cards;
- “Track to Origin” alterna entre processo e prática.

### `/protocol`

Estrutura observada:

1. `PageIntro` genérico.
2. H1 “Congelar, Mapear, Detectar e Restaurar”.
3. `InvestigationCycleSection`.
4. Quatro fases em cards.
5. Continuidade para métodos e prática.

Conteúdo já forte:

- quatro IDs ordenados: `freeze`, `map`, `detect`, `restore`;
- pergunta, entradas, atividades, resultado, evidência e métodos relacionados;
- vínculo com USMT, Payload Journey, Reverse Payload Journey, Operational Payload Path e Track to Origin.

Lacunas:

- não há Hero próprio com dois CTAs;
- entradas mínimas não estão separadas;
- critérios de saída não existem na estrutura;
- evidências possíveis estão condensadas numa única frase;
- resultados podem soar automáticos;
- iteração e retornos entre fases não estão explícitos;
- inventário de artefatos e estados reais está ausente;
- limites do protocolo não aparecem;
- “processo operacional” na metadata pode sugerir maturidade universal.

### `/investigation`

Estrutura observada:

1. `PageIntro` genérico.
2. H1 “Do Track Mode à investigação de sistemas”.
3. CTA comercial da Udemy no Hero.
4. `InvestigationPracticeSection`.
5. FlowDiagram com cinco passos.
6. Cards de Track Mode, Trace Engineer e Software System Investigation.
7. Conceitos de evidência, autoridade e restauração.
8. CTA para `/lab`.

Lacunas:

- Hero não usa a definição canônica de Software System Investigation;
- Udemy interrompe a arquitetura metodológica;
- Trace Engineering não possui seção e definição próprias;
- Trace Engineer não apresenta todas as ressalvas obrigatórias;
- a prática não lista suas características;
- faltam perguntas concretas do perfil investigativo;
- relação com arquitetura, código, testes, debugging e observabilidade não está explícita;
- autoridade humana e assistência por IA precisam de bloco próprio;
- limites atuais e direção futura não estão separados;
- o resultado “menor incerteza” pode soar como benefício demonstrado.

## Inventário inicial de artefatos

O inventário deverá ser repetido na execução. No estado observado:

| Elemento | Evidência localizada | Tratamento planejado |
|---|---|---|
| Payload Journey | Conteúdo e rota `/payload-journey` | Página canônica disponível |
| USMT | Conteúdo e rota `/usmt` | Página canônica disponível |
| Reverse Payload Journey | Definição em `content/methods.ts` e uso no caso | Documentado, sem rota própria |
| Operational Payload Path | Definição em `content/methods.ts` | Documentado, sem rota própria |
| Track to Origin | Definição em `content/methods.ts` | Em desenvolvimento, sem rota própria |
| Checkpoints | Definições e uso em protocolo/caso | Documentado como conceito e prática |
| Protocolo | Conteúdo e rota `/protocol` | Documentado |
| HORA.city | Conteúdo e rota `/cases` | Investigação em andamento |
| Case Brief | Apenas menções documentais | Não localizado como ficheiro canônico |
| Checkpoint Plan | Apenas menções documentais | Não localizado como ficheiro canônico |
| Freeze Record | Apenas menções documentais | Não localizado como ficheiro canônico |
| Detection Report | Apenas menções documentais | Não localizado como ficheiro canônico |
| Trace Evidence Record | Apenas menções documentais | Não localizado como ficheiro canônico |
| Trace Evidence Package | Apenas menções documentais | Não localizado como ficheiro canônico |
| USMT Evidence-Aligned | Apenas menções documentais | Não localizado como ficheiro canônico |

Os artefatos não localizados podem aparecer como exemplos, formatos pretendidos ou estados `Não localizado`/`Em construção`. Não podem ser apresentados como disponíveis, templates existentes ou evidência produzida.

## Definições canônicas e fonte única

Concentrar as definições em `content/methods.ts` ou numa estrutura canônica adjacente dentro do mesmo domínio, evitando duplicações concorrentes:

- Payload Journey;
- Payload Tracing;
- Software System Investigation;
- Trace Engineering;
- Trace Engineer;
- USMT;
- Operational Payload Path;
- Reverse Payload Journey;
- Track to Origin;
- protocolo Congelar, Mapear, Detectar e Restaurar.

As três páginas podem repetir sínteses curtas, mas devem consumir a mesma fonte.

Não alterar amplamente `/payload-journey` ou `/usmt`. Fazer apenas microajustes de links ou sínteses se os verificadores encontrarem divergência terminológica material.

## Tipagem proporcional

Usar estruturas explícitas e simples.

### Instrumentos

Estender `LearningMethod` somente com os campos necessários:

- `definition`;
- `startingPoint`;
- `status`;
- `limits`;
- `canonicalHref`, quando existir;
- `evidence`.

Manter `purpose`, `whenToUse`, `question`, `result`, `relatedSteps` e `relationship`.

### Protocolo

Estender `InvestigationStep` com:

- `possibleEvidence`;
- `exitCriterion`;
- `limits`, se necessário.

Criar um inventário simples de artefatos com:

- nome;
- descrição;
- status;
- evidência localizada.

### Prática

Criar uma apresentação explícita para:

- características da investigação;
- Track Mode;
- Trace Engineering;
- Trace Engineer;
- perguntas;
- relação com práticas existentes;
- autoridade e responsabilidade;
- limites;
- direção futura.

Se `claimKind` for necessário, usar uma union pequena e local, por exemplo:

- `definicao-autoral`;
- `estado-documentado`;
- `em-desenvolvimento`;
- `direcao-futura`.

Não criar registro global, resolvedor de claims, herança de tipos ou framework editorial genérico.

## Arquitetura planejada de `/method`

1. Hero — instrumentos diferentes para perguntas diferentes.
2. Distinção entre prática, capacidades, função, instrumentos, protocolo e evidência.
3. Mapa dos instrumentos.
4. Checkpoints e documentos de investigação.
5. Relação possível entre os instrumentos.
6. Limites.
7. Próxima ação.

### Hero

- H1: `Instrumentos diferentes para perguntas diferentes`;
- CTA primário: `/protocol`;
- CTA secundário: `/investigation`;
- nenhum CTA comercial.

### Mapa

Cada item deverá mostrar:

- definição canônica;
- pergunta;
- ponto de partida;
- resultado esperado;
- momento de uso;
- relação;
- status;
- limite;
- link canônico somente quando existente.

Ordem:

1. Payload Journey;
2. USMT;
3. Reverse Payload Journey;
4. Operational Payload Path;
5. Track to Origin;
6. checkpoints;
7. documentos de investigação.

### Relação

Representar em HTML/CSS:

`USMT → Payload Journey → Operational Payload Path → Checkpoints → Reverse Payload Journey → Track to Origin → Protocolo`

Marcar explicitamente que é uma sequência possível, não obrigatória.

### Limites

Incluir mapa provisório, observação parcial, confronto com runtime, necessidade de domínio/arquitetura/testes e impossibilidade de generalizar um caso.

## Arquitetura planejada de `/protocol`

1. Hero.
2. Entradas mínimas.
3. Congelar.
4. Mapear.
5. Detectar.
6. Restaurar.
7. Iteração.
8. Artefatos e estados reais.
9. Limites.
10. Continuidade.

### Hero

- H1: `Congelar. Mapear. Detectar. Restaurar.`;
- CTA primário: `/method`;
- CTA secundário: `/cases`;
- texto deixa claro que é protocolo geral do LAB, não norma certificada.

### Fases

Cada fase terá:

- objetivo;
- pergunta;
- entradas;
- atividades;
- evidências possíveis;
- resultado condicionado;
- critério de saída;
- métodos relacionados.

Reformular resultados no indicativo quando sugerirem garantia automática.

### Iteração

Proteger retornos:

- Detectar → Mapear;
- Restaurar → Detectar;
- Mapear → Congelar.

### Artefatos

Exibir todos os nomes exigidos pela especificação, mas com status baseado no inventário. “Evidência possível” não será confundida com “artefato disponível”.

### Limites

Explicitar que o protocolo não substitui testes, revisão, observabilidade ou julgamento humano; não garante causa raiz; não evita toda regressão; não é norma certificada; ainda está em confronto com casos e uso externo.

## Arquitetura planejada de `/investigation`

1. Hero.
2. O que caracteriza uma investigação.
3. Track Mode.
4. Trace Engineering.
5. Trace Engineer.
6. Perguntas concretas.
7. Relação com práticas existentes.
8. Autoridade e responsabilidade.
9. Limites atuais.
10. Direção futura.
11. Continuidade.

### Hero

- H1: `Compreender antes de modificar`;
- definição canônica de Software System Investigation;
- CTA primário: `/protocol`;
- CTA secundário: `/method`;
- remoção do CTA da Udemy.

### Taxonomia

- Software System Investigation: prática;
- Trace Engineering: capacidades;
- Trace Engineer: função e perfil investigativo em desenvolvimento;
- Track Mode: postura operacional;
- protocolo: sequência;
- evidência: sustentação ou refutação de hipótese.

### Trace Engineer

Renderizar status:

`Função e perfil investigativo em desenvolvimento`

Renderizar todas as ressalvas:

- não é profissão consolidada;
- não é cargo reconhecido;
- não é certificação;
- não representa domínio universal;
- capacidades ainda em formalização e teste.

### Relações

Comparar sem hierarquia de superioridade:

- arquitetura;
- leitura de código;
- testes;
- debugging;
- observabilidade;
- Software System Investigation.

Proteger a frase:

`Tracing conecta perspectivas; não as substitui.`

### Limites e futuro

Separar:

- métodos em desenvolvimento;
- eficácia pedagógica como hipótese;
- transferibilidade não demonstrada;
- necessidade de casos externos;
- aprofundamento distribuído em construção;
- sistemas industriais e mission-critical como direção futura;
- ausência de certificação profissional.

## Estratégia de componentes

Preservar Server Components e reutilizar `Section`, `SectionHeader`, `TechnicalLabel`, `Card`, `Badge`, `HighlightPanel`, `Button` e `PageContinuation`.

Composição recomendada:

- manter `MethodsSection` como mapa principal;
- criar ou agrupar Hero, taxonomia, relação e limites num componente específico de método;
- manter `InvestigationCycleSection` como fases;
- criar ou agrupar entradas, iteração, artefatos e limites num componente específico de protocolo;
- manter `InvestigationPracticeSection` para prática, capacidades e função;
- criar ou agrupar Hero, relações, limites e futuro num componente específico de investigação.

As páginas provavelmente precisarão de composição específica, como `/lab` e `/learn`, porque cada Hero exige dois CTAs. Isso evita ampliar `PageIntro` para todas as rotas.

Cada composição deverá preservar:

- `JsonLd`;
- `SiteHeader`;
- `PageContinuation`;
- `SiteFooter`;
- metadata server-side;
- um único H1.

## Conteúdo e claims a reformular

| Atual | Tratamento planejado |
|---|---|
| “Profissional ou função investigativa” | Remover “profissional”; usar definição aprovada de função. |
| “Função investigativa proposta” | Acrescentar status e ressalvas completas. |
| “Prática própria” | Usar prática estruturada autoral, sem sugerir reconhecimento externo. |
| “Compreensão ... com menor incerteza” | Descrever objetivo de produzir explicações verificáveis, não redução demonstrada. |
| “Caso estável e reproduzível” | “Contexto preservado de forma suficiente para investigação”; reprodução é critério, não garantia. |
| “Divergência sustentada” | Condicionar ao conjunto de evidências observado. |
| “Comportamento restaurado e validado” | Tratar como resultado esperado e exigir critério de saída. |
| “Processo operacional” | “Protocolo geral do LAB”, ainda em confronto com casos. |
| Track to Origin como processo | Padronizar como prática. |
| USMT “Página em desenvolvimento” | Substituir pelo link real `/usmt`. |

Claims proibidos deverão ser verificados no HTML público e não apenas na fonte.

## CTAs e continuidade

### `/method`

- Hero → `/protocol`, `/investigation`;
- seção final → `/payload-journey`, `/usmt`, `/protocol`, `/cases`.

### `/protocol`

- Hero → `/method`, `/cases`;
- continuidade → `/method`, `/investigation`, `/cases`, `/learn`.

### `/investigation`

- Hero → `/protocol`, `/method`;
- continuidade → `/method`, `/protocol`, `/learn`, `/cases`.

Evitar loops sem contexto. Cada label deverá declarar a próxima ação.

## Metadata e JSON-LD

Atualizar somente as três apresentações:

### `/method`

`Conheça os instrumentos do Payload Journey LAB e as perguntas que Payload Journey, USMT, Reverse Payload Journey, Operational Payload Path e Track to Origin ajudam a investigar.`

### `/protocol`

`Conheça o protocolo Congelar, Mapear, Detectar e Restaurar para investigar flows, produzir evidências e validar mudanças em sistemas de software.`

### `/investigation`

`Software System Investigation combina modelagem, payload tracing, checkpoints, runtime e evidências para compreender como sistemas transformam operações em decisões e estados.`

Verificar:

- title;
- description;
- canonical;
- Open Graph;
- Twitter;
- `WebPage` no JSON-LD;
- ausência de `Organization`;
- ausência de claims exclusivos em structured data.

Não criar novas entidades estruturadas sem necessidade.

## Ficheiros previstos

### Alteração provável

- `app/method/page.tsx`;
- `app/protocol/page.tsx`;
- `app/investigation/page.tsx`;
- `components/sections/MethodsSection.tsx`;
- `components/sections/InvestigationCycleSection.tsx`;
- `components/sections/InvestigationPracticeSection.tsx`;
- `content/methods.ts`;
- `content/routes.ts`;
- `types/content.ts`;
- `scripts/verify-homepage.mjs`;
- `scripts/verify-ai-readiness.mjs`;
- `scripts/verify-design-foundation.mjs`;
- `package.json`;
- `scripts/capture-home-responsive.mjs`, somente se a captura das três rotas exigir microajuste;
- documento e capturas da Sprint 4.

### Criação provável

- até três componentes narrativos agrupados, um por rota, se os componentes atuais não comportarem as novas responsabilidades;
- `scripts/verify-method-practice.mjs`;
- `docs/sprints para v3/Sprint 4 - Metodo e Pratica Investigativa.md`;
- capturas antes/depois das três rotas.

### Alteração somente se indispensável

- `app/payload-journey/page.tsx`;
- `app/usmt/page.tsx`;
- `content/usmt.ts`;
- componentes dessas duas rotas.

Qualquer alteração nesses ficheiros deverá ser um microajuste terminológico ou de continuidade, documentado separadamente.

### Fora de alteração

- homepage;
- `/lab`;
- `/learn`;
- `/cases`;
- `/lablog`;
- `/ecosystem`;
- Header e Footer, salvo correção técnica indispensável;
- dependências;
- configuração global;
- Sprint 5.

## Verificador combinado

Criar:

`scripts/verify-method-practice.mjs`

Adicionar:

`npm.cmd run verify:method-practice`

### Invariantes de `/method`

- H1 canônico;
- mapa de instrumentos;
- definições canônicas;
- perguntas, entradas, resultados, status e limites;
- links para `/payload-journey` e `/usmt`;
- checkpoints e documentos diferenciados;
- sequência possível, não obrigatória;
- nenhuma nova rota metodológica.

### Invariantes de `/protocol`

- quatro fases na ordem;
- objetivos;
- entradas;
- atividades;
- evidências possíveis;
- critérios de saída;
- iteração;
- inventário com status reais;
- limites;
- ausência de garantia de causa raiz.

### Invariantes de `/investigation`

- definição de Software System Investigation;
- definição de Trace Engineering;
- Track Mode;
- Trace Engineer como função em desenvolvimento;
- ressalvas obrigatórias;
- perguntas concretas;
- complementaridade com práticas existentes;
- autoridade humana;
- limites atuais;
- mission-critical somente futuro.

### Invariantes globais

- H1 único em cada rota;
- ordem dos IDs;
- IDs únicos;
- headings sequenciais;
- links nomeados e válidos;
- CTAs corretos;
- metadata e canonical;
- claims proibidos ausentes;
- PT-BR nos textos alterados;
- zero novas rotas metodológicas;
- zero Client Components novos.

Atualizar os verificadores existentes somente para remover expectativas antigas e delegar ao novo verificador o detalhe específico.

## Sequência de implementação

### Etapa 1 — Revalidar o gate

- registrar branch, HEAD e `git status`;
- atribuir todas as mudanças;
- confirmar aprovação da Sprint 3 e deste plano;
- verificar que Sprint 5 não começou.

### Etapa 2 — Executar baseline técnico

Sequencialmente:

```powershell
npm.cmd run lint
npx.cmd tsc --noEmit
npm.cmd run build
npm.cmd run verify:foundation
npm.cmd run verify:ai-readiness
npm.cmd run verify:homepage
npm.cmd run verify:lab
npm.cmd run verify:learn
```

Registrar duração, warnings e First Load JS.

### Etapa 3 — Capturar baseline visual

Capturar cada rota em 320, 375, 768, 1024 e 1440 px:

- `sprint4-before-method-*`;
- `sprint4-before-protocol-*`;
- `sprint4-before-investigation-*`.

Registrar overflow, primeiro viewport, ordem, densidade e CTAs.

### Etapa 4 — Congelar definições e inventário

- consolidar as dez definições canônicas;
- inventariar artefatos por nome e ficheiro;
- congelar status;
- registrar claims anteriores;
- impedir que menções documentais virem disponibilidade.

### Etapa 5 — Ajustar tipos e conteúdo

- estender somente os tipos necessários;
- migrar definições, estados, limites e evidências para `content/methods.ts`;
- remover estados históricos incorretos da apresentação pública;
- manter fonte única.

### Etapa 6 — Implementar `/method`

- Hero;
- taxonomia;
- mapa;
- documentos/checkpoints;
- relação;
- limites;
- CTAs.

Validar a rota isoladamente antes de avançar.

### Etapa 7 — Implementar `/protocol`

- Hero;
- entradas;
- fases;
- critérios;
- iteração;
- artefatos;
- limites;
- CTAs.

Validar que nenhum artefato ausente apareça como disponível.

### Etapa 8 — Implementar `/investigation`

- Hero sem Udemy;
- características;
- Track Mode;
- Trace Engineering;
- Trace Engineer;
- perguntas;
- práticas complementares;
- autoridade;
- limites;
- futuro;
- CTAs.

Validar todas as ressalvas junto da definição do perfil.

### Etapa 9 — Metadata e continuidade

- atualizar as três descrições;
- validar OG, Twitter, canonical e JSON-LD;
- fazer somente microajustes indispensáveis em `/payload-journey` ou `/usmt`.

### Etapa 10 — Criar e alinhar verificadores

- implementar `verify:method-practice`;
- atualizar expectations antigas de homepage, AI-readiness e foundation;
- proteger conceitos e estrutura, não parágrafos completos.

### Etapa 11 — Validar acessibilidade e responsividade

- teclado e foco;
- headings;
- listas;
- status textual;
- links;
- contraste;
- overflow;
- cards e relações;
- cinco larguras em cada rota.

### Etapa 12 — Executar gates finais

```powershell
npm.cmd run lint
npx.cmd tsc --noEmit
npm.cmd run build
npm.cmd run verify:foundation
npm.cmd run verify:ai-readiness
npm.cmd run verify:homepage
npm.cmd run verify:lab
npm.cmd run verify:learn
npm.cmd run verify:method-practice
```

Executar sem builds concorrentes.

### Etapa 13 — Documentar e auditar

- completar `Sprint 4 - Metodo e Pratica Investigativa.md`;
- registrar before/after;
- classificar fonte, conteúdo renderizado, build e execução observada separadamente;
- executar `git diff --check`;
- listar caminhos alterados;
- confirmar zero novas rotas;
- confirmar que Sprint 5 não foi iniciada;
- apresentar somente o resumo final exigido pela especificação.

## Validação visual

Matriz obrigatória por rota:

| Rota | 320 | 375 | 768 | 1024 | 1440 |
|---|---:|---:|---:|---:|---:|
| `/method` | obrigatório | obrigatório | obrigatório | obrigatório | obrigatório |
| `/protocol` | obrigatório | obrigatório | obrigatório | obrigatório | obrigatório |
| `/investigation` | obrigatório | obrigatório | obrigatório | obrigatório | obrigatório |

Inspecionar:

- primeiro viewport;
- função distinta;
- títulos;
- CTAs;
- status;
- legibilidade;
- densidade;
- relações entre instrumentos;
- fases;
- ressalvas de Trace Engineer;
- limites/futuro;
- teclado;
- overflow.

Preservar somente as 30 capturas finais de comparação — 15 antes e 15 depois. Capturas temporárias de amostragem deverão ser removidas depois da inspeção e registradas como artefatos reproduzíveis.

## Evidências e linguagem

Classificar no relatório:

| Classe | Prova | Não prova |
|---|---|---|
| Fonte | Implementação, conteúdo e tipos | Renderização ou execução |
| Conteúdo renderizado | HTML local | Layout visual ou produção |
| Build | Compilação e prerenderização | Comportamento runtime |
| Execução local observada | HTTP local, DOM e navegador | Produção ou eficácia |
| Produção | Somente após deploy | Não prevista nesta sprint |

O termo `runtime` no conteúdo significa execução do sistema investigado. Build e renderização estática do site não são evidência runtime.

## Riscos e mitigação

| Risco | Mitigação |
|---|---|
| Duplicar definições entre três páginas | Fonte canônica única e verificador combinado. |
| Apresentar documentos mencionados como existentes | Inventário por ficheiro e status `Não localizado`. |
| Transformar protocolo em garantia | Resultados condicionados, critérios de saída e limites. |
| Apresentar Trace Engineer como profissão | Status e cinco ressalvas visíveis junto da definição. |
| Transformar `/investigation` em página de carreira | Foco em prática, capacidades, perguntas e responsabilidade. |
| Repetir `/method` em `/protocol` | Mostrar apenas instrumentos relacionados a cada fase. |
| Repetir `/lab` em `/investigation` | Preservar somente autoridade humana e limites necessários. |
| Criar páginas individuais | Verificador de rotas e auditoria do sitemap. |
| Aumentar excessivamente a página | Agrupamento narrativo, cards somente onde ajudam comparação. |
| Introduzir Client Components | Server-first protegido pela foundation. |
| Alterar Sprints 1–3 | Reexecutar homepage, LAB e formação. |
| Corrigir warning fora do escopo | Registrar warnings preexistentes sem investigação lateral. |

## Critérios de conclusão

A execução estará pronta para aprovação quando:

- as três páginas tiverem funções distintas;
- as dez definições canônicas forem coerentes;
- prática, capacidades, função, instrumentos, protocolo e evidência estiverem separados;
- cada instrumento responder a pergunta, entrada, resultado, uso, relação, status e limite;
- as quatro fases incluírem objetivo, evidência e critério de saída;
- a iteração estiver explícita;
- artefatos ausentes não forem apresentados como disponíveis;
- Trace Engineer estiver corretamente classificado;
- `Tracing conecta perspectivas; não as substitui` estiver visível;
- limites atuais e futuro estiverem separados;
- nenhuma nova rota metodológica existir;
- nenhuma dependência ou Client Component desnecessário tiver sido criado;
- metadata estiver alinhada;
- todos os nove gates finais passarem;
- as três rotas passarem nas cinco larguras;
- First Load JS for comparado;
- o documento obrigatório estiver completo;
- nenhuma atividade da Sprint 5 tiver sido iniciada.

## Entrega final planejada

Ao concluir a futura implementação, apresentar os 21 itens exigidos em `sprint 4.md` e terminar exatamente com:

`Sprint 4 concluída. Aguardando aprovação humana antes da Sprint 5.`

Até nova aprovação humana, permanecer apenas neste plano.
