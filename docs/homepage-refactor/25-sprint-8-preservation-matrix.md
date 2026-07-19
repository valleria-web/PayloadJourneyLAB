# Sprint 8 — Matriz de preservação e rastreabilidade

Data: 19 de julho de 2026  
Corpus de origem: HTML público de `a8e14c9`  
Regra: cada item publicamente renderizado deve permanecer acessível; conteúdo histórico não público permanece somente na fonte server-side.

## Matriz

| ID | Conteúdo original | Tipo coberto | Fonte única | Destino público | Mecanismo de preservação | Preservado |
| --- | --- | --- | --- | --- | --- | :---: |
| shell-header | marca, logo, navegação e Começar | texto, imagem, links, interação | `SiteHeader`, `MobileNavigation`, `siteNavigation` | todas as rotas | componentes compartilhados; destinos internos convertidos em rotas reais | 100% |
| hero-copy | eyebrow, H1, lead, descrição e assinatura | textos, hierarquia, visual | `HeroSection`, `homepageEntry.hero` | `/` | mesmo componente | 100% |
| hero-actions | Ver o payload e Explorar a trilha | links válidos | `homepageEntry.hero` | `/` | Demo continua local; Trilha aponta para `/learn#trilha` | 100% |
| problem-intro | cabeçalho e texto de apoio | textos | `ProblemSection` | `/payload-journey` | mesmo componente | 100% |
| problem-steps | quatro passos numerados | sequência, cards, textos | `homepageEntry.problem.steps` | `/payload-journey` | mesma iteração e mesma ordem | 100% |
| problem-result | resultado e comparação Sem/Com tracing | painel, listas, textos | `homepageEntry.problem` | `/payload-journey` | mesmo componente | 100% |
| outcomes | oito competências | sequência, cards, textos | `LearningOutcomesSection` | `/payload-journey` | mesmo componente e IDs | 100% |
| learning-path | quatro etapas, conceitos e resultados | sequência, cards, labels, textos | `LearningPathSection` | `/learn` | mesmo componente e IDs | 100% |
| demo-header | introdução e contexto pedagógico | textos, disclosure | `PayloadFlowDemoSection` | `/` e `/payload-journey` | uma implementação compartilhada | 100% |
| demo-roles | sete papéis operacionais | labels, cores semânticas | `RoleBadge` | `/` e `/payload-journey` | mesmo componente e tokens | 100% |
| demo-flow | nove nós do Clique à UI, incluindo Projection | sequência, cards, textos, IDs | `FlowNode`, `homepageEntry.flowDemo.nodes` | `/` e `/payload-journey` | mesma fonte e ordem; verificação nas duas rotas | 100% |
| demo-action | texto de apoio e Começar pela formação | texto, link | `homepageEntry.flowDemo.cta` | `/` e `/payload-journey` | link real `/learn#formacao` | 100% |
| training-intro | cabeçalho, produto, promessa, plataforma e beta | textos, labels, card | `EducationSection` | `/learn` | mesmo componente | 100% |
| training-campaign | cupom e estado ativo | dado público | `trainingPresentation.campaign` | `/learn` | mesmo objeto; `expiration: null` preservado na fonte | 100% |
| training-details | público, tópicos e Como começar | listas, chips, textos | `trainingPresentation` | `/learn` | mesmo componente | 100% |
| training-links | Udemy e Rever a trilha | links | `trainingPresentation` | `/learn` | Udemy idêntico; anchor local válido | 100% |
| case-intro | cabeçalho, transição e mensagem principal | textos, painel | `CaseStudySection` | `/cases` | mesmo componente | 100% |
| case-narrative | sete blocos do contexto ao estado atual | sequência, cards, textos | `horaCityCase.publicNarrative.sections` | `/cases` | mesma iteração, fatos compartilhados e ordem | 100% |
| case-facts | fatos técnicos confirmados | dados, `dl` | `publicNarrative.technicalFacts` | `/cases` | mesmo componente | 100% |
| case-links | LabLog e Rever o flow | links | `publicNarrative` | `/cases` | `/lablog#lablog` e `/payload-journey#demo` | 100% |
| usmt-intro | título, lead, descrição, contexto e pergunta | textos, SEO, card | `UsmtSection`, `usmtContent` | `/usmt` | mesmo componente integral | 100% |
| usmt-elements | 12 elementos | sequência, cards, termos PT/EN | `usmtContent.elements` | `/usmt` | mesma iteração e IDs | 100% |
| usmt-lenses | WHERE, HOW, LOGIC e SAFE | sequência, cards, listas | `usmtContent.lenses` | `/usmt` | mesma iteração e IDs | 100% |
| usmt-connection | quatro conexões e protocolo | sequência, textos, painel | `usmtContent.connection`, `protocolTransition` | `/usmt` | mesmo componente; nenhum CTA falso | 100% |
| procedure | quatro etapas operacionais completas | sequência, cards, listas, textos | `InvestigationCycleSection` | `/protocol` | mesmo componente e IDs | 100% |
| methods | cinco métodos completos | sequência, cards, textos | `MethodsSection`, `methodsContent` | `/method` | mesmo componente e relações textuais | 100% |
| practice-flow | progressão operacional | diagrama, ordem, texto alternativo semântico | `FlowDiagram` | `/investigation` | mesmo componente | 100% |
| practice-blocks | Track Mode, Trace Engineer e SSI | cards, listas, textos | `InvestigationPracticeSection` | `/investigation` | mesmo componente e IDs | 100% |
| practice-concepts | evidência, autoridade e restauração | `dl`, textos | `investigativePracticePresentation` | `/investigation` | mesmo componente | 100% |
| practice-action | Conhecer o LAB | texto, link | `investigativePracticePresentation.cta` | `/investigation` | destino real `/lab` | 100% |
| lab | introdução, conexão, missão e princípio | textos, composição | `LabOverviewSection` | `/lab` | mesmo componente | 100% |
| ecosystem-pillars | quatro pilares completos | sequência, cards, ícones, textos, listas | `ConceptEcosystemSection` | `/ecosystem` | mesmo componente e IDs | 100% |
| ecosystem-collaboration | públicos possíveis e nota | textos, chips, enquadramento editorial | `siteContent.ecosystem` | `/ecosystem` | mesmas copies; nenhum CTA sem destino | 100% |
| lablog | eyebrow, título, descrição e temas | textos, lista | `LabLogSection` | `/lablog` | mesmo componente; singular editorial mantido | 100% |
| lablog-link | Assistir ao LabLog | link externo | `labLogContent.action` | `/lablog` | `@PayloadJourneyLAB` preservado | 100% |
| about-origin | origem, problema e visão | textos, cards | `AboutSection` | `/about` | mesmo componente | 100% |
| about-founder | nome, papel, LAB, USMT e contexto confirmado | textos, listas | `siteContent.about.founder` | `/about` | mesma fonte; link profissional continua ausente | 100% |
| final-cta | eyebrow, título, descrição e campanha | textos, painel | `BetaCtaSection` | `/` | mesmo componente integral | 100% |
| final-links | formação e Demo | links | `siteContent.betaCta` | `/` | Udemy preservado e `#demo` válido | 100% |
| shell-footer | identidade, logo, tagline, informação e copyright | textos, imagem, landmark | `SiteFooter`, `footerContent` | todas as rotas | mesmo componente compartilhado | 100% |
| footer-navigation | cinco entradas próprias | links | `footerContent.navigation` | todas as rotas | rotas reais; independente do Header | 100% |
| footer-channels | Udemy e YouTube | links externos | `footerContent.channels` | todas as rotas | destinos preservados; YouTube do Footer continua distinto | 100% |
| mobile-navigation | abrir, fechar, Escape e retorno de foco | interação, teclado, touch | `MobileNavigation` | todas as rotas | mesmo Client Component; testado em mobile | 100% |
| accessibility | headings, landmarks, ordem, contraste e reduced motion | estrutura e comportamento | componentes e design system | todas as rotas | um H1 por rota, conteúdo sem hover e zero nova fronteira client | 100% |
| responsive-layout | grids e progressões existentes | layout e conteúdo | componentes originais | destinos correspondentes | mesmos breakpoints internos; zero overflow | 100% |

## Conteúdo histórico protegido, mas não publicado

| Conteúdo | Fonte | Estado final |
| --- | --- | --- |
| variantes editoriais completas do HORA.city | `horaCityCase.editorialVariants` | server-side; ausentes do corpus HTML |
| apresentação histórica da formação | `trainingContent` e `historicalLabel` | server-side |
| apresentação histórica do LabLog | `labLogContent.historicalPresentation` | server-side |
| doze passos extensos anteriores da USMT | `siteContent.usmt` | server-side; ausentes do corpus HTML |
| CTA futuro da USMT | fontes históricas; `deepDiveCta: null` | não renderizado |
| Política de privacidade e Termos de uso | `footerContent.historicalPolicies` | pendências; nomes ausentes do HTML |

## Evidência automatizada

`scripts/verify-homepage.mjs` valida:

- HTTP 200 nas 12 rotas públicas;
- HTTP 404 nas cinco rotas deliberadamente ausentes;
- um H1, metadata e canonical por página;
- presença do conteúdo essencial em cada destino;
- sequências completas de flow, Trilha, HORA.city, USMT, protocolo, métodos, prática e pilares;
- demonstração nas duas rotas por uma única implementação;
- links internos, anchors e três destinos externos;
- ausência de links vazios, páginas legais inexistentes e alegações não confirmadas;
- guardrails editoriais e um único Client Component.

## Resultado

Todas as 45 unidades de rastreabilidade estão marcadas como `100%`. Nenhum texto, elemento visual, sequência, link válido ou interação pública do baseline foi descartado. Alterações de `href` foram exclusivamente arquiteturais para manter destinos válidos após a migração.
