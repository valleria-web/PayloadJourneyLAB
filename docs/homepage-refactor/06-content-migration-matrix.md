# Matriz definitiva de migração de conteúdo

Data: 19 de julho de 2026

Escopo: preparação semântica da versão `0.2.0`, sem movimentação visual na Sprint 1.

## Regras da matriz

- O código renderizado no início da sprint define o comportamento operacional a preservar.
- Variantes editoriais não equivalentes são mantidas separadamente e não são reconciliadas silenciosamente.
- “Remover apenas duplicação” significa remover uma cópia hardcoded do componente depois que o mesmo valor passa a vir de fonte tipada; não significa eliminar conteúdo.
- Destinos futuros descrevem a arquitetura planejada, não a ordem visual implementada nesta sprint.
- IDs canônicos são independentes do texto exibido.

## Conteúdo renderizado e institucional

| ID | Conteúdo atual | Localização atual | Destino futuro | Tratamento | Fonte canônica | Status | Observações |
| --- | --- | --- | --- | --- | --- | --- | --- |
| identity-lab-name | Payload Journey LAB | Header, Hero, Footer, metadata, várias seções | Header / Hero / Footer | combinar | `content/site.ts#siteIdentity` | migrar | Nome repetido em `config/site.ts` e conteúdo |
| identity-tagline | Siga o flow. Entenda o sistema. | Hero, marca e metadata | Hero | combinar | `content/site.ts#siteIdentity` | migrar | Preservar capitalização e pontuação |
| identity-short-description | Descrição curta usada por metadata | `config/site.ts` | Header / Hero | preservar | `content/site.ts#siteIdentity` | migrar | Não substituir pela versão institucional |
| identity-institutional-description | Laboratório de formação, pesquisa e investigação aplicada | Hero e O LAB | O LAB expandido | preservar | `content/payload-journey-lab.ts#labContent` | preservar | Variante mais extensa continua identificada |
| nav-current | Sete labels, anchors e ordem atuais | Header, menu mobile, footer parcial | Header / Footer | transformar em dado configurável | `content/site.ts#siteNavigation` | migrar | IDs atuais não mudam nesta sprint |
| header-course-cta | Entrar no LAB | Header | Header | preservar | `content/site.ts#siteCtas` | migrar | Mesmo destino Udemy, label específico |
| hero-copy | Eyebrow, H1, subtitle e introdução | Hero | Hero | preservar | `content/payload-journey-lab.ts#hero` | preservar | Sem reescrita |
| hero-training-cta | Entrar no LAB Beta | Hero | Hero | combinar | `content/site.ts#siteCtas` | migrar | Destino derivado da campanha atual |
| hero-lablog-cta | Assistir ao LabLog | Hero | Hero | combinar | `content/site.ts#labLogContent` | migrar | Mantém handle `@PayloadJourneyLAB` |
| investigation-cycle | FREEZE/MAP/DETECT/RESTORE e PAYLOAD/PATH/MUTATION/AUTHORITY | Array local do Hero | Procedimento investigativo | transformar em dado configurável | `content/methods.ts#investigationCycle` | migrar | IDs `freeze`, `map`, `detect`, `restore` |
| investigation-cycle-pt | Congelar. Mapear. Detectar. Restaurar. | Hero | Procedimento investigativo | combinar | `content/methods.ts#investigationCycleSummary` | migrar | Frase renderizada preservada literalmente |
| hero-track-state | TRACK MODE ACTIVE, comando e chips | Hero | Demonstração resumida / Procedimento investigativo | transformar em dado configurável | `content/methods.ts#heroInvestigationPanel` | migrar | Mantém strings operacionais atuais |
| lab-overview | Título, introdução e complemento do LAB | O LAB | O LAB expandido | preservar | `content/payload-journey-lab.ts#lab` | preservar | Sem mudança visual |
| lab-pillars | Formação, Pesquisa, Investigação aplicada, Colaboração | O LAB | O LAB expandido | combinar | `content/payload-journey-lab.ts#lab.pillars` | preservar | Ícones permanecem associados |
| lab-hardcoded-labels | LAB STRUCTURE e flow trace origin | O LAB | O LAB expandido | transformar em dado configurável | `content/payload-journey-lab.ts#lab` | migrar | Remove somente hardcoding |

## Métodos, prática e ecossistema

| ID | Conteúdo atual | Localização atual | Destino futuro | Tratamento | Fonte canônica | Status | Observações |
| --- | --- | --- | --- | --- | --- | --- | --- |
| payload-journey | Método Payload Journey | Métodos, formação, CTA, conteúdo futuro | Métodos e instrumentos | combinar | `content/methods.ts#methodsContent` | migrar | Ordem atual/futura 1 |
| usmt | Universal System Modeling Template | Métodos e conteúdo reservado | Métodos e instrumentos / páginas futuras | dividir | `content/methods.ts#methodsContent` + conteúdo reservado | migrar | Resumo atual e detalhamento de 12 passos preservados |
| reverse-payload-journey | Método Reverse Payload Journey | Métodos, ecossistema, HORA.city | Métodos e instrumentos | combinar | `content/methods.ts#methodsContent` | migrar | Ordem atual/futura 3 |
| operational-payload-path | Instrumento Operational Payload Path | Métodos e formação | Métodos e instrumentos | combinar | `content/methods.ts#methodsContent` | migrar | Ordem atual/futura 4 |
| track-to-origin | Processo Track to Origin | Métodos, ecossistema, HORA.city | Métodos e instrumentos | combinar | `content/methods.ts#methodsContent` | migrar | Ordem atual/futura 5 |
| methods-section-copy | Título, intro, relação e labels técnicos | Métodos | Métodos e instrumentos | preservar | `content/methods.ts#methodsSectionContent` | migrar | Classes e ordem permanecem |
| track-mode | Definição de Track Mode | Ecossistema e Hero | Prática investigativa e Trace Engineer | combinar | `content/methods.ts#investigativePractice` | migrar | ID estável `track-mode` |
| trace-engineer | Definição de Trace Engineer | Ecossistema, formação e conteúdo futuro | Prática investigativa e Trace Engineer | combinar | `content/methods.ts#investigativePractice` | migrar | ID estável `trace-engineer` |
| software-system-investigation | Definição da prática | Hero, ecossistema e visão | Prática investigativa e Trace Engineer | combinar | `content/methods.ts#investigativePractice` | migrar | ID estável `software-system-investigation` |
| ecosystem-flow | Track Mode → Reverse → Origin → Evidência → Restauração | Ecossistema | Procedimento investigativo | preservar | `content/methods.ts#ecosystemFlow` | migrar | Ordem atual preservada |
| ecosystem-copy | Título, intro e explicação do fluxo | Ecossistema | Prática investigativa e Trace Engineer | preservar | `content/payload-journey-lab.ts#ecosystem` | preservar | One Bit Machine continua reservado |

## HORA.city — variantes editoriais preservadas separadamente

Nenhuma das variantes abaixo é declarada “a versão editorial oficial”. O registro tipado reúne todas sob nomes explícitos. A homepage continua consumindo a variante que já era renderizada antes da sprint.

| ID | Conteúdo atual | Localização atual | Destino futuro | Tratamento | Fonte canônica | Status | Observações |
| --- | --- | --- | --- | --- | --- | --- | --- |
| hora-city-audited-title | Study Case / Saving HORA.city | Objeto central anterior | Caso real HORA.city | preservar | `content/hora-city.ts#editorialVariants.audited` | preservado | “Saving HORA.city” não era renderizado |
| hora-city-rendered-title | STUDY CASE / HORA.city | `CaseStudySection` | Caso real HORA.city | preservar | `content/hora-city.ts#editorialVariants.rendered` | migrar | Variante operacional visível |
| hora-city-audited-summary | Texto longo: sistema geolocalizado, uso pelo LAB, expansão com agentes de IA e perda de observabilidade | Objeto central anterior | Caso real HORA.city | preservar | `content/hora-city.ts#editorialVariants.audited.description` | preservado | Não substituir silenciosamente o texto visível |
| hora-city-rendered-summary | Texto compacto: caso real, expansão acelerada e perda de observabilidade | `CaseStudySection` | Caso real HORA.city | preservar | `content/hora-city.ts#editorialVariants.rendered.description` | migrar | Continua sendo a variante exibida |
| hora-city-audited-investigation | Texto longo sobre `createdAt`, HeartCreated, caminho operacional, autoridade e primeiro ponto de decisão | Objeto central anterior | Demonstração resumida / Caso real HORA.city | preservar | `content/hora-city.ts#editorialVariants.audited.investigation` | preservado | Variante não renderizada no início da sprint |
| hora-city-rendered-investigation | Texto compacto sobre anomalia, HeartCreated, caminho e decisão temporal | `CaseStudySection` | Demonstração resumida / Caso real HORA.city | preservar | `content/hora-city.ts#editorialVariants.rendered.investigation` | migrar | Continua visível sem alteração |
| hora-city-stages | Contexto/Anomalia/Investigação/Aprendizados e estados | Objeto central anterior | Caso real HORA.city | arquivar para uso futuro | `content/hora-city.ts#stages` | preservado | Não renderizar nesta sprint |
| hora-city-facts-audited | Facts com aproximadamente 6k/40k, anomalia, payload, método e missão | Objeto central anterior | Caso real HORA.city | preservar | `content/hora-city.ts#auditedFacts` | preservado | Valores extensos separados dos microfatos |
| hora-city-micro-facts | Escala, anomalia, payload e missão compactos | Array local de `CaseStudySection` | Demonstração resumida | remover apenas duplicação | `content/hora-city.ts#renderedMicroFacts` | migrar | Textos visíveis idênticos |
| hora-city-investigation | ID RPJ-HORA-001, anomalia, payload e estado | Conteúdo e componente | Caso real HORA.city | combinar | `content/hora-city.ts#investigation` | migrar | Fonte única tipada |
| hora-city-terminal-status | Região BR, status, primary payload e validated flow | `InvestigationStatusCard` | Demonstração resumida | transformar em dado configurável | `content/hora-city.ts#technicalStatus` | migrar | Preserva inglês e capitalização atuais |
| hora-city-authority | temporal authority under review | `InvestigationStatusCard` | Procedimento investigativo | transformar em dado configurável | `content/hora-city.ts#technicalStatus` | migrar | Não atualizar estado |
| hora-city-technical-rows | Anomalia, Payload, Método, Missão, Authority | Array local | Demonstração resumida | remover apenas duplicação | `content/hora-city.ts#technicalRows` | migrar | Derivado de dados já existentes |
| hora-city-rendered-ctas | Explorar o estudo / Acompanhar no LabLog | `CaseStudySection` | Caso real HORA.city | transformar em dado configurável | `content/hora-city.ts#renderedActions` | migrar | Mantém self-link e `#lablog` |
| hora-city-future-ctas | Explorar o Study Case / Assistir ao LabLog, ambos futuros | Objeto central anterior | Conteúdo reservado para páginas futuras | arquivar para uso futuro | `content/hora-city.ts#futureActions` | preservado | Não confundir com os CTAs visíveis |

## Formação, LabLog, Sobre, CTA e Footer

| ID | Conteúdo atual | Localização atual | Destino futuro | Tratamento | Fonte canônica | Status | Observações |
| --- | --- | --- | --- | --- | --- | --- | --- |
| training-beta | Nome, descrição, público implícito, estado beta e variantes de CTA | Formação, Hero, Header e CTA final | Formação fundamental | combinar | `content/site.ts#trainingContent` | migrar | Preserva separadamente “Entrar no LAB Beta” (renderizado) e “Começar com cupom…” (variante editorial anterior) |
| udemy-campaign | URL, cupom FOLLOW-THE-FLOW, estado ativo e mensagem | Conteúdo e Education | Formação fundamental | transformar em dado configurável | `content/site.ts#campaignConfig` | migrar | `expiration: null`; sem data inventada |
| education-paths | Aprender, Investigar, Colaborar | Formação | Trilha progressiva | preservar | `content/payload-journey-lab.ts#education.items` | preservar | Não mover visualmente agora |
| education-future-links | Curso, LabLogs, Workshops, Programa Trace Engineer, Pilotos acadêmicos | Badges de Formação | Conteúdo reservado para páginas futuras | arquivar para uso futuro | `content/payload-journey-lab.ts#education.links` | preservar | Continuam não interativos |
| lablog-rendered | Título, descrição atual e CTA | `LabLogSection` | LabLog | remover apenas duplicação | `content/site.ts#labLogContent` | migrar | Texto atual passa a ser fonte tipada |
| youtube-primary-current | `@PayloadJourneyLAB` | Hero e LabLog | LabLog | transformar em dado configurável | `content/site.ts#siteLinks.youtube.labLogCurrent` | migrar | Não declarado oficial |
| youtube-footer-current | `@Lab-Log` | Footer | Footer | transformar em dado configurável | `content/site.ts#siteLinks.youtube.footerCurrent` | migrar | Não declarado oficial |
| youtube-canonical | Destino oficial | Não resolvido | LabLog / Footer | transformar em dado configurável | `content/site.ts#siteLinks.youtube.canonical` | pendente | `null`, resolução editorial necessária |
| about-institutional | Contexto, visão e missão do LAB | Sobre | Sobre o LAB e fundadora | preservar | `content/payload-journey-lab.ts#about` | preservar | Sem reescrita |
| founder | Título e dois parágrafos da fundadora | Sobre | Sobre o LAB e fundadora | preservar | `content/payload-journey-lab.ts#about.founder` | preservar | Pontuação atual mantida |
| about-reserved | Fundadora, Pesquisadores, Colaboradores, Instituições parceiras | Conteúdo não renderizado | O LAB expandido / páginas futuras | arquivar para uso futuro | `content/payload-journey-lab.ts#about.reserved` | preservado | Não renderizar |
| beta-final-cta | Primeiro círculo de estudantes e Acessar curso beta | CTA final | CTA final | combinar | `content/site.ts#trainingContent` + conteúdo da homepage | migrar | Campanha isolada, texto visível preservado |
| footer-description | Resumo sem acentos usado no footer | Footer | Footer | preservar | `content/site.ts#footerContent` | migrar | Não corrigir editorialmente nesta sprint |
| footer-links | Udemy, LabLog e YouTube | Footer | Footer | transformar em dado configurável | `content/site.ts#footerContent` | migrar | Mantém destinos e ordem atuais |
| footer-legal | Política de privacidade e Termos de uso | Footer | Footer | preservar | `content/site.ts#footerContent` | migrar | Permanecem não interativos |
| footer-copyright | Ano dinâmico, nome e direitos reservados | Footer | Footer | preservar | Componente + `siteIdentity.name` | migrar | Ano continua calculado |

## Conteúdo reservado para páginas ou seções futuras

| ID | Conteúdo atual | Localização atual | Destino futuro | Tratamento | Fonte canônica | Status | Observações |
| --- | --- | --- | --- | --- | --- | --- | --- |
| reserved-usmt-12 | Doze elementos e doze passos da USMT | `siteContent.usmt`, `UsmtSection` | Conteúdo reservado para páginas futuras | arquivar para uso futuro | `content/payload-journey-lab.ts#usmt` | preservado | Componente não renderizado |
| reserved-white-papers | Três placeholders editoriais | `siteContent.whitePapers` | Conteúdo reservado para páginas futuras | arquivar para uso futuro | `content/payload-journey-lab.ts#whitePapers` | preservado | `WhitePapersSection` ainda delega a LabLog |
| reserved-one-bit-machine | One Bit Machine | `ecosystem.futureArtifacts` | Conteúdo reservado para páginas futuras | arquivar para uso futuro | `content/payload-journey-lab.ts` | preservado | Não renderizado |
| reserved-contact | Contato, LinkedIn, YouTube e GitHub em configuração | `siteContent.contact`, `ContactSection` | Footer / páginas futuras | arquivar para uso futuro | `content/payload-journey-lab.ts#contact` | preservado | Sem destinos reais |
| reserved-routes | Sete rotas futuras de métodos, USMT, case e papers | `preservedFutureContent.futureRoutes` | Conteúdo reservado para páginas futuras | transformar em dado configurável | `content/payload-journey-lab.ts` | preservado | Rotas ainda inexistentes |
| reserved-collaborators | Pesquisadores, colaboradores e instituições parceiras | `about.reserved` | O LAB expandido | arquivar para uso futuro | `content/payload-journey-lab.ts` | preservado | Decisão editorial futura |
| reserved-components | USMT, Contact, WhitePapers, dois diagramas e FeatureCard | `components/` | Conteúdo reservado para páginas futuras | arquivar para uso futuro | Arquivos atuais + `07-content-architecture.md` | preservado | Não remover nem renderizar |

## Resumo de cobertura

- Itens mapeados: 69.
- Destinos futuros cobertos: todos os 17 destinos definidos no briefing, diretamente ou por conteúdo compartilhado/reservado.
- Remoções editoriais: nenhuma.
- Remoções permitidas: somente cópias hardcoded substituídas por dados tipados equivalentes.
- Pendências explícitas: URL oficial do YouTube, validade/política do cupom e reconciliação das variantes editoriais de HORA.city.

## Atualização da Sprint 3 — nova porta de entrada

As classificações abaixo distinguem explicitamente conteúdo já representado, conteúdo reservado para sprint futura e histórico editorial. A remoção do Hero significa somente que o item deixou a primeira dobra; nenhuma fonte editorial foi apagada.

### Destino individual dos conteúdos retirados do Hero anterior

| ID | Conteúdo retirado da primeira dobra | Fonte preservada | Destino atual ou futuro | Classificação na Sprint 3 | Estado |
| --- | --- | --- | --- | --- | --- |
| hero-legacy-eyebrow | `Software System Investigation` | `siteContent.hero.eyebrow` e `content/methods.ts#investigativePractice` | Card de Software System Investigation no Ecossistema | Já representado + histórico editorial | preservado |
| hero-legacy-h1 | `PAYLOAD JOURNEY LAB` | `siteContent.hero.title` | Identidade do Header, Footer, metadata e conteúdo histórico do Hero | Já representado + histórico editorial | preservado |
| hero-legacy-tagline | `Siga o flow. Entenda o sistema.` | `siteIdentity.tagline` e `siteContent.hero.subtitle` | Assinatura do novo Hero | Já representado | migrado |
| hero-legacy-institutional-intro | Apresentação extensa do laboratório | `siteIdentity.shortDescription` e `siteContent.hero.intro` | O LAB, Sobre, metadata e histórico editorial | Já representado + histórico editorial | preservado |
| hero-legacy-formation-axis | Formação como eixo institucional | `siteContent.lab.pillars`, `siteContent.education` e texto histórico | O LAB e Formação | Já representado | preservado |
| hero-legacy-research-axis | Pesquisa metodológica | `siteContent.lab.pillars` e `siteContent.about` | O LAB e Sobre | Já representado | preservado |
| hero-legacy-applied-investigation-axis | Investigação aplicada | `siteContent.lab.pillars`, Formação e Sobre | O LAB, Formação e Sobre | Já representado | preservado |
| hero-legacy-training-cta | `Entrar no LAB Beta` e campanha Udemy | `siteCtas.heroTraining`, `trainingContent` e `campaignConfig` | Formação, CTA final e Footer; variante antiga permanece histórica | Já representado + histórico editorial | preservado |
| hero-legacy-lablog-cta | `Assistir ao LabLog` | `labLogContent.action` e `siteContent.hero.secondaryAction` | Seção LabLog, HORA.city e Footer | Já representado + histórico editorial | preservado |
| hero-legacy-cycle-summary | `Congelar. Mapear. Detectar. Restaurar.` | `content/methods.ts#investigationCycleSummary` | Futura seção do procedimento investigativo | Reservado para sprint futura | preservado |
| hero-legacy-freeze-step | `FREEZE / PAYLOAD` | `content/methods.ts#investigationCycle[freeze]` | Futura seção Congelar, Mapear, Detectar e Restaurar | Reservado para sprint futura | preservado |
| hero-legacy-map-step | `MAP / PATH` | `content/methods.ts#investigationCycle[map]` | Futura seção Congelar, Mapear, Detectar e Restaurar | Reservado para sprint futura | preservado |
| hero-legacy-detect-step | `DETECT / MUTATION` | `content/methods.ts#investigationCycle[detect]` | Futura seção Congelar, Mapear, Detectar e Restaurar | Reservado para sprint futura | preservado |
| hero-legacy-restore-step | `RESTORE / AUTHORITY` | `content/methods.ts#investigationCycle[restore]` | Futura seção Congelar, Mapear, Detectar e Restaurar | Reservado para sprint futura | preservado |
| hero-legacy-track-state | `TRACK MODE ACTIVE` | `content/methods.ts#heroInvestigationPanel.state` e prática `track-mode` | Ecossistema e futura demonstração resumida | Já representado + reservado para sprint futura | preservado |
| hero-legacy-terminal-command | `>_ payload.route.observe()` | `content/methods.ts#heroInvestigationPanel.command` | Futura demonstração visual | Reservado para Sprint 4 | preservado |
| hero-legacy-track-chip | `TRACK MODE` | `content/methods.ts#heroInvestigationPanel.chips` | Ecossistema e futura demonstração | Já representado + reservado para Sprint 4 | preservado |
| hero-legacy-reverse-chip | `REVERSE` | `content/methods.ts#heroInvestigationPanel.chips` | Métodos, Ecossistema e HORA.city | Já representado | preservado |
| hero-legacy-origin-chip | `ORIGIN` | `content/methods.ts#heroInvestigationPanel.chips` | Métodos, Ecossistema e HORA.city | Já representado | preservado |
| hero-legacy-method-set | Payload Journey, USMT, Reverse Payload Journey, Operational Payload Path e Track to Origin | `content/methods.ts#methodsContent` | Seção Métodos | Já representado | preservado |
| hero-legacy-trace-engineer | Trace Engineer | `content/methods.ts#investigativePractice` e conteúdo da Formação | Ecossistema e Formação | Já representado | preservado |
| hero-legacy-ecosystem-explanation | Explicação aprofundada de prática e ecossistema | `siteContent.ecosystem`, `ecosystemFlow` e `investigativePractice` | Seção Ecossistema | Já representado | preservado |

### Conteúdo introduzido na Sprint 3

| ID | Conteúdo | Fonte canônica | Destino | Estado |
| --- | --- | --- | --- | --- |
| entry-hero | Nova copy orientada a Payload Tracing | `homepageEntry.hero` | `#inicio` | implementado |
| entry-problem | Dor, quatro passos, resultado e comparação | `homepageEntry.problem` | `#aprender` | implementado |
| entry-learning-outcomes | Oito competências profissionais | `homepageEntry.learningOutcomes` | `#competencias` | implementado |
| anchor-aprender | Anchor da estratégia de entrada | `homepageAnchors.learn` | Header e CTAs | implementado |
| anchor-competencias | Anchor das competências | `homepageAnchors.competencies` | Seção de competências | implementado |
| future-learning-path | Trilha progressiva | `homepageEntry.learningPath` | `#trilha` | implementado na Sprint 4 |
| future-payload-demo | Demonstração visual do payload | `homepageEntry.flowDemo`; `heroInvestigationPanel` permanece preservado separadamente | `#demo` | implementado como representação pedagógica na Sprint 4 |

As variantes editoriais de HORA.city continuam separadas e com `editorialResolution: "unresolved"`.

## Atualização da Sprint 4 — Trilha e demonstração pedagógica

| ID | Conteúdo | Fonte canônica | Destino | Estado | Observações |
| --- | --- | --- | --- | --- | --- |
| anchor-trilha | Anchor da progressão de aprendizagem | `homepageAnchors.learningPath` | `#trilha` | implementado | Anchors anteriores preservados |
| anchor-demo | Anchor da demonstração resumida | `homepageAnchors.demo` | `#demo` | implementado | Demo estática e pedagógica |
| learning-path-understand | Entenda o Payload | `homepageEntry.learningPath.steps[understand-payload]` | Trilha 01 | implementado | Introduz payload, representações e continuidade semântica |
| learning-path-journey | Payload Journey | `homepageEntry.learningPath.steps[payload-journey]` | Trilha 02 | implementado | Método inserido na progressão sem alterar a seção Métodos |
| learning-path-reverse | Reverse Payload Journey | `homepageEntry.learningPath.steps[reverse-payload-journey]` | Trilha 03 | implementado | Reconstrução reversa de uma anomalia observável |
| learning-path-origin | Track to Origin | `homepageEntry.learningPath.steps[track-to-origin]` | Trilha 04 | implementado | Investigação até a primeira decisão relevante |
| payload-flow-summary | Clique → Structured Payload → Request → API → Domain → Repository → Response → Projection → UI | `homepageEntry.flowDemo.nodes` | `#demo` | implementado | Nove nodes em ordem semântica, sem alegação de execução real |
| operational-roles | Transporta, Transforma, Decide e Apresenta | `OperationalRole` + `RoleBadge` | `#demo` | implementado | Texto explícito; cor apenas como apoio |
| hero-flow-related-content | Painel, comando, Track Mode e chips retirados do Hero anterior | `content/methods.ts#heroInvestigationPanel` | Histórico editorial e possível demonstração aprofundada futura | preservado | A demo resumida não finge executar o comando nem substitui esse acervo |
| header-navigation-sprint-4 | Aprender, Trilha, Demo, Formação, Caso real e O LAB | `siteNavigation` | Header desktop e mobile | implementado | `Métodos` saiu somente do Header |
| header-methods-link | Item Métodos do Header | `homepageAnchors.methods` e `footerContent.navigation` | Footer e seção `#metodos` | removido apenas do Header | Anchor, seção e acesso pelo Footer preservados |
| header-start-sprint-4 | Começar → Trilha | `siteCtas.headerStart` | `#trilha` | implementado | Destino existente |
| hero-primary-sprint-4 | Ver o payload atravessar o sistema | `homepageEntry.hero.primaryCta` | `#demo` | implementado | Não promete demo completa |
| hero-secondary-sprint-4 | Explorar a trilha | `homepageEntry.hero.secondaryCta` | `#trilha` | implementado | Formação continua no Header |
| demo-case-cta | Começar pela formação | `homepageEntry.flowDemo.cta` | `#formacao` | atualizado na Sprint 5 | Conecta a representação pedagógica à entrada fundamental |
| future-deep-demo | Demonstração aprofundada | Conteúdo ainda não criado | Sprint futura | pendente | Sem página, modal, vídeo ou runtime nesta sprint |
| future-real-code-demo | Request/response, checkpoints e componentes reais | Conteúdo ainda não criado | Sprint futura | pendente | Nenhum arquivo, endpoint ou log foi inventado |
| future-demo-video | Vídeo específico da demonstração | Destino ainda não confirmado | Sprint futura | pendente | Decisão sobre YouTube continua unresolved |
| future-hora-city-refactor | Refatoração editorial e visual do caso real | `horaCityCase.publicNarrative` + variantes preservadas | `#case-study` | implementado na Sprint 5 | Narrativa pública usa fatos compartilhados; variantes continuam separadas e unresolved |

## Atualização da Sprint 5 — Formação fundamental e caso real

| ID | Conteúdo | Fonte canônica | Destino | Estado | Observações |
| --- | --- | --- | --- | --- | --- |
| training-repositioned | Formação fundamental imediatamente depois da Demo | `app/page.tsx` | `#formacao` | implementado | Seção movida sem alterar anchor |
| training-presentation | Nova copy de entrada fundamental | `trainingPresentation` | `#formacao` | implementado | Nome aprovado na Sprint 5; label histórico preservado separadamente |
| training-audience | Cinco grupos prioritários | `trainingPresentation.audience` | Formação | implementado | Nenhuma promessa de público avançado ou corporativo |
| training-topics | Fundamentos, estados/eventos, camadas, representações, Payload Journey, estratégia e tracing | `trainingPresentation.topics` | Formação | implementado | Somente conteúdos confirmados |
| training-primary-cta | Entrar na formação | `trainingPresentation.primaryCta` | URL Udemy atual | implementado | URL e cupom preservados |
| training-secondary-cta | Rever a trilha | `trainingPresentation.secondaryCta` | `#trilha` | implementado | Destino interno existente |
| training-campaign | Estado beta e cupom FOLLOW-THE-FLOW | `campaignConfig` + referência em `trainingPresentation` | Formação | preservado | `expiration: null`; nenhuma urgência inventada |
| training-historical-label | Formação Beta na Udemy | `trainingContent.name` + `trainingPresentation.product.historicalLabel` | Histórico editorial server-side | preservado | Não substituído silenciosamente |
| case-repositioned | HORA.city imediatamente depois da Formação | `app/page.tsx` | `#case-study` | implementado | O LAB, Métodos e Ecossistema passam para depois do caso |
| case-public-narrative | Narrativa neutra em sete partes | `horaCityCase.publicNarrative` | `#case-study` | implementado | `sourceStrategy: shared-confirmed-facts` |
| case-public-facts | Projeto, escala aproximada, anomalia temporal, HeartCreated, métodos, autoridade e estado | Fatos comuns de `horaCityCase` | Caso público | implementado | Sem declarar origem ou resolução comprovada |
| case-selected-flow | Comportamento observável associado a HeartCreated | `publicNarrative.sections[selected-flow]` | Caso público | implementado | Sem Send Heart, create/join ou nome técnico não confirmado |
| case-primary-cta | Acompanhar o caso no LabLog | `publicNarrative.primaryCta` | `#lablog` | implementado | Anchor confirmado antes da configuração |
| case-secondary-cta | Rever o flow | `publicNarrative.secondaryCta` | `#demo` | implementado | Destino interno existente |
| case-rendered-variant | Variante rendered completa | `editorialVariants.rendered` | Fonte server-side/histórico editorial | preservado | Não renderizada integralmente no HTML |
| case-audited-variant | Variante audited completa | `editorialVariants.audited` | Fonte server-side/histórico editorial | preservado | Não renderizada integralmente no HTML |
| case-editorial-resolution | Resolução entre variantes | `editorialResolution` | Decisão editorial futura | pendente | Continua `unresolved` |
| sprint5-omitted-unconfirmed | Nome técnico do flow, schema do payload, origem comprovada e resolução concluída | `publicNarrative.omissions.unconfirmed` | Documentação | omitido deliberadamente | Ausência de confirmação |
| sprint5-omitted-divergent | Título/subtítulo e redações completas de contexto/investigação | `publicNarrative.omissions.editorialDivergence` | Documentação | omitido deliberadamente | Divergência entre variantes editoriais |
| lab-methods-composition | O LAB, Métodos e Ecossistema depois do caso | `app/page.tsx` | Conteúdo posterior | movido apenas na composição | Componentes, copy e ordem relativa preservados |
| future-methods-refactor | Procedimento, cinco métodos e prática Trace Engineer | Fontes atuais em `content/methods.ts` | Sprint 6 | pendente | Não refatorado nesta sprint |
| future-ecosystem-refactor | Ecossistema investigativo | Fonte atual preservada | Sprint futura | pendente | Não refatorado nesta sprint |

Nenhum item pertencente às Sprints 6 a 8 foi declarado concluído.

## Atualização da Sprint 6 — procedimento, métodos e prática investigativa

| ID | Conteúdo | Fonte canônica | Destino | Estado | Observações |
| --- | --- | --- | --- | --- | --- |
| investigation-procedure | Sequência Congelar → Mapear → Detectar → Restaurar | `investigationCycle` | `#procedimento` | implementado | Aparece imediatamente depois de HORA.city |
| procedure-freeze | Pergunta, entrada, atividades, resultado e evidência de Congelar | `investigationCycle[freeze]` | Procedimento 01 | implementado | Preserva `FREEZE / PAYLOAD` como identidade histórica |
| procedure-map | Pergunta, entrada, atividades, resultado e evidência de Mapear | `investigationCycle[map]` | Procedimento 02 | implementado | Inclui Operational Payload Path e checkpoints candidatos |
| procedure-detect | Confronto de evidências e primeira divergência relevante | `investigationCycle[detect]` | Procedimento 03 | implementado | Não promete linha, arquivo ou bug encontrado por adivinhação |
| procedure-restore | Mudança mínima e validação pelo mesmo flow | `investigationCycle[restore]` | Procedimento 04 | implementado | Restauração não é reduzida a correção de código |
| procedure-method-relation | Métodos relacionados a cada etapa | `relatedMethods` | Cards do Procedimento | implementado | Relação explícita em texto; não depende de cor |
| methods-public-contracts | Categoria, propósito, uso, pergunta, resultado e relação | `methodsContent` | `#metodos` | implementado | IDs canônicos permanecem nos dados; DOM usa prefixo `method-` |
| payload-journey-sprint6 | Payload Journey como instrumento de observação e validação | `methodsContent[payload-journey]` | Métodos 01 | implementado | Relacionado a Mapear e Restaurar |
| usmt-sprint6 | USMT como instrumento de modelagem | `methodsContent[usmt]` | Métodos 02 | implementado | Doze elementos continuam reservados fora da homepage |
| reverse-payload-journey-sprint6 | Reconstrução reversa orientada pela anomalia | `methodsContent[reverse-payload-journey]` | Métodos 03 | implementado | Relacionado a Congelar, Mapear e Detectar |
| operational-payload-path-sprint6 | Trajetória concreta por componentes e fronteiras | `methodsContent[operational-payload-path]` | Métodos 04 | implementado | Produz mapa e checkpoints candidatos |
| track-to-origin-sprint6 | Rastreamento da autoridade de origem | `methodsContent[track-to-origin]` | Métodos 05 | implementado | Não promete uma única linha ou arquivo |
| methods-historical-presentation | Copy anterior da seção Métodos | `methodsSectionContent.historicalPresentation` | Fonte server-side histórica | preservado | Não renderizada pela nova apresentação pública |
| investigative-practice | Progressão operacional e três blocos públicos | `investigativePracticePresentation` | `#pratica-investigativa` | implementado | Não substitui o ciclo oficial |
| track-mode-sprint6 | Estado operacional e ações | `investigativePracticePresentation.trackMode` | Prática investigativa | implementado | Não apresentado como produto, ferramenta ou automação |
| trace-engineer-sprint6 | Função investigativa proposta pelo LAB | `investigativePracticePresentation.traceEngineer` | Prática investigativa | implementado | Sem claim de profissão, cargo ou certificação reconhecida |
| software-system-investigation-sprint6 | Prática estrutural no contexto do LAB | `investigativePracticePresentation.softwareSystemInvestigation` | Prática investigativa | implementado | Sem claim de disciplina ou standard externo |
| evidence-authority-restoration | Conceitos centrais da prática | `investigativePracticePresentation.centralConcepts` | Prática investigativa | implementado | Expostos por texto e lista semântica |
| practice-lab-cta | Conhecer o LAB | `investigativePracticePresentation.cta` | `#lab` | implementado | Destino interno preexistente |
| ecosystem-visible-duplication | Flow e três cards repetidos depois da nova Prática | `siteContent.ecosystem` | Fonte histórica | condensado no HTML | Fontes, `FlowDiagram`, IDs e conteúdo institucional preservados |
| ecosystem-institutional-transition | Relação entre formação, pesquisa, investigação e colaboração | `siteContent.ecosystem.institutionalTransition` | `#ecossistema` | implementado | Mantém a função institucional da seção sem repetir a Prática |
| lab-pillars-sprint6 | Formação, Pesquisa, Investigação aplicada e Colaboração | `siteContent.lab.pillars` | `#lab` | preservado | Sem mudança de copy ou componente |
| hero-methodology-history | Ciclo, Track Mode, Trace Engineer e SSI retirados do Hero na Sprint 3 | Fontes históricas de `content/methods.ts` | Procedimento e Prática | reaproveitado | Fontes anteriores permanecem separadas |
| hora-city-resolution-sprint6 | Decisão entre variantes editoriais | `horaCityCase.editorialResolution` | Decisão editorial futura | pendente | Continua `unresolved` |
| documentary-templates | Freeze Record, checkpoints e protocolo documental completo | Conteúdo ainda não criado | Sprint futura | pendente | Não implementado nesta sprint |
| deep-demo-sprint6 | Logs, schemas, request/response e execução aprofundada | Conteúdo ainda não confirmado | Sprint futura | pendente | Demo pedagógica atual preservada |
| lablog-about-sprint6 | Consolidação institucional de LabLog e Sobre | Fontes atuais | Sprint 7 | pendente | Seções preservadas sem refatoração integral |

Os itens destinados às Sprints 7 e 8 permanecem pendentes. A Sprint 6 não resolve HORA.city, YouTube, validade do cupom, templates documentais ou demonstração técnica aprofundada.
