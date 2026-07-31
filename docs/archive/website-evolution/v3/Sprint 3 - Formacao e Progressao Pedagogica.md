# Sprint 3 — Formação e Progressão Pedagógica

## Estado

Sprint 3 implementada em 23 de julho de 2026. A rota `/learn` foi reorganizada como arquitetura pedagógica do Payload Journey LAB, com progressão explícita entre conteúdo disponível, aprofundamento em construção e direção futura.

Nenhuma atividade da Sprint 4 foi iniciada.

## Baseline

| Campo | Valor |
|---|---|
| Data | 2026-07-23 |
| Timezone | Europe/Berlin |
| Branch | `refactor/homepage-v0.2.0` |
| Commit inicial | `fce173295dd6e6c5023c351008201cfa45b16c5e` |
| Commit final | Não criado; o `HEAD` permanece `fce173295dd6e6c5023c351008201cfa45b16c5e` |
| Commit baseline | `sprint1 com decisao humana` |
| Worktree inicial | Entrega completa e documentada da Sprint 2 ainda não commitada |
| Node.js | `v22.19.0` |
| npm | `11.6.3` |
| Next.js no build | `14.2.35` |
| First Load JS inicial de `/learn` | 94,3 kB |

O estado inicial da Sprint 2 foi preservado. Os sete gates disponíveis passaram antes da implementação: lint, TypeScript, build, foundation, AI-readiness, homepage e LAB.

O primeiro build baseline atingiu o limite operacional de 60 segundos depois de compilar e checar tipos. A repetição isolada com limite de 120 segundos concluiu normalmente as 17 páginas. Isso foi tratado como limitação do comando de validação, não falha da aplicação.

## Gate documental e contrato editorial

Foram lidos integralmente e aplicados:

- `Sprint 0 - Contrato Editorial e Mapa de Preservacao e Migracao.md`;
- `Sprint 1 - Homepage.md`;
- `Sprint 2 - LAB.md`;
- `sprint 3.md`.

O gate foi considerado apto porque:

- as Sprints 0, 1 e 2 estavam concluídas;
- o documento obrigatório da Sprint 2 existia;
- `/learn` estava inventariada no Mapa de Preservação e Migração;
- o worktree inicial correspondia à entrega documentada da Sprint 2;
- tese, público e estatuto dos claims permaneciam coerentes;
- a autorização humana para iniciar a Sprint 3 foi explícita.

### IDs do mapa utilizados

| ID | Tratamento |
|---|---|
| `V3-MAP-LEARN-001` | Hero reformulado com público, progressão, dois CTAs internos e limites. |
| `V3-MAP-LEARN-002` | Trilha antiga dividida em cinco níveis e percurso inicial de seis etapas. |
| `V3-MAP-LEARN-003` | Curso beta preservado, subordinado à arquitetura pedagógica e qualificado por limites. |
| `V3-MAP-PJ-001–004` | Payload Journey e modelo pedagógico preservados como ponto de entrada. |
| `V3-MAP-USMT-001–004` | USMT preservada como instrumento de modelagem do esperado. |
| `V3-MAP-METHOD-001–006` | Métodos preservados como instrumentos distintos, sem duplicação técnica. |
| `V3-MAP-PROTO-001–002` | Protocolo preservado como procedimento de investigação. |
| `V3-MAP-CASE-001–003` | HORA.city mantido como caso real em investigação, não prova de eficácia. |
| `V3-MAP-GLOBAL-007` | Guardrails atualizados para proteger invariantes estruturais e editoriais. |

Claims prioritários: `CL-004`, `CL-005`, `CL-007`, `CL-008`, `CL-013`, `CL-016`, `CL-020` e `CL-021`.

## Arquitetura anterior de `/learn`

1. `PageIntro` genérico.
2. H1 “Aprenda a seguir o flow”.
3. Link de retorno à homepage.
4. Trilha de quatro cards: Entenda o Payload, Payload Journey, Reverse Payload Journey e Track to Origin.
5. Curso beta na Udemy.
6. Continuidade para Payload Journey e LabLog.

### Limitações identificadas

- a página não explicitava o público prioritário;
- a progressão terminava antes de sistemas complexos e requisitos;
- resultados dos cards apareciam no indicativo;
- esforço intelectual e conhecimentos fundamentais não estavam explicitados;
- conteúdo presente, construção e futuro não eram diferenciados;
- curso e trilha concentravam quase toda a experiência;
- casos, métodos, protocolo e evidência pedagógica não formavam um percurso;
- a promessa do curso sugeria resultado forte ligado ao perfil Trace Engineer;
- a metadata não descrevia progressão nem limites.

## Arquitetura implementada

1. Hero — aprender a compreender sistemas.
2. Aprender por flow.
3. Progressão pedagógica canônica.
4. Esforço necessário.
5. Conhecimentos complementares.
6. Conteúdo atualmente disponível.
7. Percurso inicial recomendado.
8. Curso e canal formativo.
9. Casos como aprendizagem.
10. Evidência pedagógica.
11. Próxima ação.

A implementação usa uma composição específica server-first com Header, Footer, JSON-LD e continuidade compartilhados. Não foram adicionadas dependências ou Client Components.

## Progressão pedagógica final

| Nível | Título | Status público | Limite |
|---:|---|---|---|
| 1 | Uma operação concreta | Conteúdo disponível | Não representa domínio completo da codebase. |
| 2 | Flow entre camadas | Conteúdo disponível | A sequência pedagógica não representa todos os sistemas. |
| 3 | Investigação estruturada | Documentado | Instrumentos e protocolo existem; eficácia e transferibilidade não foram demonstradas. |
| 4 | Sistemas complexos | Aprofundamento em construção | Não existe formação completa ou aplicação demonstrada nesse nível. |
| 5 | Requisitos e sistemas críticos | Direção futura de pesquisa e formação | Não existe competência atual, serviço disponível ou aplicação validada. |

A cadeia investigativa foi materializada na ordem:

`intenção ou ocorrência → evento → payload → interpretação → decisão → estado → efeito observável`

O protocolo foi preservado como:

`Congelar → Mapear → Detectar → Restaurar`

Os termos `Freeze Record` e `Detection Report` aparecem somente como elementos pedagógicos do Nível 3. A página não afirma que existam ficheiros canônicos desses artefatos.

## Conteúdo real e estados

O inventário público foi limitado a conteúdo e destinos localizados no repositório.

| Conteúdo | Evidência localizada | Status publicado |
|---|---|---|
| Payload Journey | Conteúdo e rota `/payload-journey` | Documentado |
| USMT | Conteúdo e rota `/usmt` | Documentado |
| Métodos investigativos | Conteúdo estruturado e rota `/method` | Documentado |
| Protocolo | Conteúdo e rota `/protocol` | Documentado |
| HORA.city | Conteúdo do caso e rota `/cases` | Investigação em andamento |
| Formação beta | Rota `/learn` e destino Udemy configurado | Conteúdo disponível |
| LabLog | Rota `/lablog` e canal configurado | Conteúdo disponível |

O status descreve existência documental ou disponibilidade configurada. Não demonstra aprendizagem, eficácia, acesso externo atual ou resultado pedagógico.

## Conteúdo preservado

- Payload Journey como primeiro recorte;
- conceitos de payload, evento, estado, representação, transformação e decisão;
- Reverse Payload Journey;
- Track to Origin;
- Operational Payload Path;
- USMT;
- protocolo Congelar, Mapear, Detectar e Restaurar;
- checkpoints e evidências;
- quatro etapas históricas da trilha, redistribuídas na progressão;
- curso beta, nome, plataforma, estado, campanha e destino configurado;
- públicos prioritários;
- HORA.city e ligação com casos;
- CTAs válidos para métodos, protocolo, formação, caso e LabLog;
- relação complementar com arquitetura, testes, observabilidade e domínio.

## Conteúdo condensado ou movido

### Movido

- Payload Journey passou da segunda etapa da trilha antiga para o CTA principal e primeiro passo.
- Reverse Payload Journey e Track to Origin foram integrados ao Nível 3 e ao catálogo de métodos.
- Udemy passou de um dos dois blocos centrais para a oitava etapa, depois da progressão e do percurso.
- HORA.city passou a ter uma seção pedagógica própria.
- fundamentos, esforço e evidência ganharam seções antes ausentes.

### Condensado

- os quatro resultados assertivos da trilha antiga foram substituídos por objetivos, capacidades pretendidas e limites;
- explicações completas dos métodos continuam nas rotas canônicas e aparecem em `/learn` apenas como orientação;
- formação comercial foi reduzida a canal de aprofundamento com objetivos pretendidos e limites;
- continuidade foi organizada em quatro próximos passos sem repetir o catálogo.

Nenhum conteúdo autoral forte foi removido sem destino ou tratamento equivalente.

## Claims reformulados

| Formulação ou risco anterior | Tratamento final | Categoria |
|---|---|---|
| “Você consegue reconstruir um flow de ponta a ponta.” | Capacidades descritas como pretendidas e progressivas. | Objetivo pedagógico |
| “Você deixa de adivinhar e começa a investigar.” | Investigação estruturada exige hipóteses, checkpoints e evidências. | Proposta metodológica |
| Curso desenvolve visão necessária para Trace Engineer | Curso introduz capacidades; perfil não é prometido como resultado. | Intenção formativa |
| Formação inicial seria universalmente insuficiente | Conhecimentos fundamentais continuam essenciais; o LAB investiga capacidade complementar. | Hipótese pedagógica |
| Começar cedo produz mais preparação ou autonomia | Benefícios permanecem perguntas a investigar. | Hipótese pedagógica |
| Nível distribuído já disponível | Status “Aprofundamento em construção”. | Construção |
| Sistemas críticos como competência atual | Status “Direção futura de pesquisa e formação”. | Ambição futura |
| Caso real como prova de eficácia | HORA.city é aplicação em investigação e não prova geral. | Observação de caso |

Foram explicitamente omitidas promessas de onboarding reduzido, aprendizagem acelerada comprovada, empregabilidade, senioridade, autonomia imediata, método universal, transferibilidade comprovada e formação mission-critical disponível.

## Esforço e complementaridade

A página declara que investigar exige:

- ler código;
- compreender arquitetura;
- estudar domínio;
- formular hipóteses;
- executar o sistema;
- observar runtime;
- posicionar checkpoints;
- revisar evidências;
- reconhecer incerteza;
- documentar conclusões.

Princípio publicado:

`O método não pensa pelo estudante. Ele organiza onde olhar, o que perguntar e que evidência procurar.`

Programação, algoritmos, estruturas de dados, arquitetura, bancos de dados, redes, sistemas operacionais, testes, segurança, observabilidade e conhecimento de domínio permanecem necessários.

## Percurso e CTAs

### Hero

- `Começar pelo Payload Journey` → `/payload-journey`;
- `Ver o caso HORA.city` → `/cases`;
- Udemy ausente do Hero.

### Percurso inicial

1. Ver o flow → `/payload-journey`.
2. Explicitar o esperado → `/usmt`.
3. Entender os instrumentos → `/method`.
4. Investigar com procedimento → `/protocol`.
5. Observar um caso real → `/cases`.
6. Aprofundar a formação → `#formacao`.

### Curso

- `Conhecer o curso` → destino Udemy já configurado;
- `Rever a trilha` → `#trilha`.

### Continuidade

- Payload Journey;
- métodos;
- caso;
- LabLog.

## Metadata e JSON-LD

- title/H1: `Começar por um payload. Avançar para o sistema.`;
- description: `Aprenda progressivamente a seguir flows, payloads, decisões e evidências de runtime para compreender sistemas de software, do primeiro evento à investigação estruturada.`;
- canonical: `/learn`;
- Open Graph e Twitter derivados da mesma metadata;
- JSON-LD preserva `WebSite` e `WebPage`;
- nenhuma entidade `Organization` foi criada;
- nenhum claim exclusivo foi inserido na metadata.

## Tipagem e conteúdo estruturado

A estrutura foi mantida simples:

- union `LearningStatus`;
- objeto `LearningPresentation` com seções explícitas;
- arrays diretos para níveis, inventário e percurso;
- nenhum motor de currículo, registro de claims ou resolução dinâmica;
- status e limites definidos na fonte e renderizados como texto.

## Ficheiros alterados na Sprint 3

| Caminho | Alteração |
|---|---|
| `app/learn/page.tsx` | Composição pedagógica específica server-first. |
| `components/sections/LearningOverviewSection.tsx` | Hero, flow, esforço e fundamentos. |
| `components/sections/LearningPathSection.tsx` | Progressão canônica de cinco níveis. |
| `components/sections/LearningPracticeSection.tsx` | Inventário, percurso, casos e evidência. |
| `components/sections/EducationSection.tsx` | Curso, objetivos pretendidos, limites e conexão. |
| `content/payload-journey-lab.ts` | Fonte estruturada da arquitetura pedagógica. |
| `content/site.ts` | Apresentação prudente da formação beta. |
| `content/routes.ts` | H1 e metadata de `/learn`. |
| `types/content.ts` | Tipos simples de formação e atualização do curso. |
| `package.json` | Comando `verify:learn`. |
| `scripts/verify-learn.mjs` | Guardrail específico da Sprint 3. |
| `scripts/verify-homepage.mjs` | Invariantes atualizadas de `/learn`. |
| `scripts/verify-ai-readiness.mjs` | Metadata e proveniência pedagógica. |
| `scripts/verify-design-foundation.mjs` | Contrato server-first da composição específica. |
| `scripts/capture-home-responsive.mjs` | Seleção mais resiliente do target DevTools. |
| `docs/sprints para v3/sprint3-before-learn-*.png` | Baseline visual reconstruído do `HEAD`. |
| `docs/sprints para v3/sprint3-after-learn-*.png` | Evidência visual final. |
| Este documento | Registro integral da Sprint 3. |

Arquivos partilhados já modificados pela Sprint 2 foram preservados e receberam somente alterações necessárias à formação.

## Validação técnica final

Executada sequencialmente depois da última alteração de implementação:

| Ordem | Comando | Resultado |
|---:|---|---|
| 1 | `npm.cmd run lint` | Passou; zero warnings e erros do ESLint |
| 2 | `npx.cmd tsc --noEmit` | Passou; zero erros |
| 3 | `npm.cmd run build` | Passou; 17 páginas estáticas |
| 4 | `npm.cmd run verify:foundation` | Passou; zero novas Client Components |
| 5 | `npm.cmd run verify:ai-readiness` | Passou; 11 rotas canônicas e metadata coerente |
| 6 | `npm.cmd run verify:homepage` | Passou; corpus, links e decisões preservados |
| 7 | `npm.cmd run verify:lab` | Passou; contrato institucional da Sprint 2 preservado |
| 8 | `npm.cmd run verify:learn` | Passou; invariantes pedagógicos protegidos |

### Resultado do build

- `/learn`: 1,33 kB de route size;
- First Load JS: 94,3 kB;
- First Load JS compartilhado: 87,2 kB;
- variação frente ao baseline: 0 kB reportável;
- novas dependências: nenhuma;
- novas Client Components: nenhuma.

### Correções intermediárias

1. A inferência literal do TypeScript exigiu que todos os níveis declarassem o campo opcional `limit`; o Nível 2 recebeu um limite editorial explícito.
2. A primeira versão de `verify:learn` procurava a cadeia investigativa no HTML completo e encontrou “evento” fora da seção; a busca foi corretamente limitada ao bloco `aprender-por-flow`.
3. O Edge headless foi bloqueado no sandbox durante a captura inicial. A execução visual foi repetida com autorização, e o helper recebeu seleção resiliente do target DevTools.

As correções permaneceram dentro do escopo da Sprint 3.

### Warnings preexistentes

O build continua emitindo duas ocorrências:

`[webpack.cache.PackFileCacheStrategy] Caching failed for pack: Error: Unable to snapshot resolve dependencies`

Os warnings já existiam no baseline e não foram corrigidos.

Também permanece:

- `hostingRedirect: requires-public-validation-after-deploy`;
- política local do PowerShell que exige `npx.cmd`, não `npx.ps1`.

## Classificação das evidências

| Classe | Evidência usada | Limite |
|---|---|---|
| Fonte | Conteúdo, tipos, componentes, diff e verificadores | Não prova renderização ou execução. |
| Conteúdo renderizado | HTML local com headings, estados, links, metadata e JSON-LD | Não prova layout visual ou produção. |
| Build | Compilação e prerenderização estática de 17 páginas | Não é evidência de comportamento runtime. |
| Execução observada | Next dev e Edge headless com DOM, viewport e screenshots | Não prova produção ou aprendizagem real. |
| Produção | Não executada | Requer deploy posterior. |

Quando `runtime` aparece na página, designa a execução do sistema investigado. Build e renderização estática do site não foram tratados como evidência runtime.

## Validação visual e responsiva

O baseline visual foi reconstruído diretamente do `HEAD` inicial numa cópia temporária. A Sprint 2 não havia alterado editorialmente `/learn`. A cópia temporária e o archive foram removidos depois das capturas; o `node_modules` original permaneceu intacto.

### Comparação

| Aspecto | Antes | Depois |
|---|---|---|
| Primeiro viewport | H1 genérico, descrição curta e retorno à homepage | Tese pedagógica, público implícito, recorte por operação e CTAs internos |
| Progressão | Quatro cards lineares | Cinco níveis com objetivo, elementos, capacidade, claim e limite |
| Estados | Ausentes | Presente, documentado, construção e futuro visíveis por texto |
| Esforço | Ausente | Trabalho intelectual e técnico explícito |
| Fundamentos | Ausentes | Relação complementar explícita |
| Curso | Um dos dois blocos centrais | Canal de aprofundamento na oitava etapa |
| Casos | Apenas continuidade indireta | Seção própria com status de investigação |
| Evidência | Ausente | Demonstrado versus ainda a investigar |

### Matriz final

| Largura | `innerWidth` | `clientWidth` | `scrollWidth` | Overflow |
|---:|---:|---:|---:|---:|
| 320 | 320 | 320 | 320 | 0 px |
| 375 | 375 | 375 | 375 | 0 px |
| 768 | 768 | 768 | 768 | 0 px |
| 1024 | 1024 | 1024 | 1024 | 0 px |
| 1440 | 1440 | 1440 | 1440 | 0 px |

Capturas preservadas:

- `sprint3-before-learn-{320,375,768,1024,1440}.png`;
- `sprint3-after-learn-{320,375,768,1024,1440}.png`.

Resultado da inspeção:

- H1 e tese legíveis em mobile e desktop;
- CTA principal alcançável no primeiro percurso mobile;
- cadeia investigativa adapta-se de uma a sete colunas;
- cinco níveis preservam ordem e status textual;
- nível 4 e nível 5 são visualmente distintos sem depender somente de cor;
- chips e cards quebram corretamente em larguras estreitas;
- curso permanece visível, mas não domina o Hero ou a progressão;
- headings não saltam níveis;
- links possuem nomes acessíveis;
- foco reutiliza o contrato compartilhado;
- nenhuma grid quebrada ou overflow horizontal foi observado.

Dez capturas temporárias de amostragem do meio e fim foram removidas após a inspeção. Eram reproduzíveis e não integravam a entrega final.

## Limitações e decisões futuras

- eficácia pedagógica não foi avaliada;
- aprendizagem por terceiros e transferibilidade permanecem não demonstradas;
- não houve teste com estudantes, educators ou equipes;
- não houve validação externa do curso, do canal ou do HORA.city;
- o destino Udemy está configurado, mas disponibilidade comercial externa não foi auditada;
- não existe formação completa para sistemas distribuídos;
- CAN, DBC, SysML/MBSE, V-Model e contextos mission-critical permanecem direção futura;
- não houve deploy nem validação do host público;
- não houve commit nesta sprint;
- o canal canônico do YouTube continua pendente para a Sprint 6;
- aplicação, definições metodológicas profundas e casos continuam reservados às sprints responsáveis.

Durante a auditoria final apareceu no worktree o ficheiro não rastreado
`docs/sprints para v3/sprint 4.md`, com timestamp de criação posterior ao baseline desta execução.
Ele não constava no inventário ou no `git status` inicial, não foi criado, lido ou alterado pela
Sprint 3 e foi preservado como mudança externa do utilizador.

## Auditoria de escopo

- alteração editorial principal: somente `/learn`;
- conteúdo compartilhado alterado: somente apresentação de formação e fonte pedagógica;
- metadata alterada: somente `thematicRoutes.learn`;
- componentes novos ou alterados: somente seções utilizadas por `/learn`;
- microajustes técnicos: verificadores e helper de captura;
- homepage e `/lab` passaram novamente nos seus guardrails;
- nenhuma rota foi criada ou removida;
- nenhuma dependência foi adicionada;
- nenhum warning preexistente foi corrigido;
- nenhum arquivo de `/method`, `/protocol`, `/investigation`, `/payload-journey` ou `/usmt` foi refatorado editorialmente;
- o ficheiro externo `sprint 4.md` não foi acessado nem atribuído à entrega;
- nenhuma implementação ou atividade da Sprint 4 foi iniciada por esta execução.

## Conclusão

Sprint 3 concluída. Aguardando aprovação humana antes da Sprint 4.
