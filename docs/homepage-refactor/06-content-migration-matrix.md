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
| future-learning-path | Trilha progressiva | Conteúdo ainda não criado | Sprint 4 | reservado, não implementado |
| future-payload-demo | Demonstração visual do payload | `heroInvestigationPanel` preservado | Sprint 4 | reservado, não implementado |

As variantes editoriais de HORA.city continuam separadas e com `editorialResolution: "unresolved"`. Nenhum item das Sprints 4 a 8 foi declarado concluído.
