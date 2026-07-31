# Sprint 8 — Inventário integral do conteúdo público

Data do congelamento: 19 de julho de 2026  
Baseline operacional: `a8e14c95200a53603aa4eb4a15a1e8449453df9d`  
Baseline histórico da Sprint 7: `81fec0b87c74320a07b10bc1c97ba1c926a69a6d`

## Escopo do inventário

Este documento registra tudo o que estava publicamente renderizado na homepage no baseline operacional `a8e14c9`. O inventário considera textos, labels, listas, cards, elementos visuais, sequências, links válidos, IDs, responsividade e interação. Conteúdo histórico que já permanecia apenas na fonte server-side não integra o corpus público, mas continua protegido.

## Estado técnico congelado

- rota pública: `/`;
- ordem pública: Header → Hero → Dor → Competências → Trilha → Demo → Formação → HORA.city → USMT → Procedimento → Métodos → Prática → O LAB → Ecossistema → LabLog → Sobre → CTA final → Footer;
- 15 IDs principais de seção;
- 71 IDs DOM únicos;
- 84 sinais de conteúdo essenciais no verificador;
- nove nós no flow visual;
- 12 elementos, quatro lentes e quatro conexões na USMT;
- quatro etapas de procedimento, cinco métodos e três blocos de prática;
- quatro pilares institucionais;
- um Client Component: `MobileNavigation`;
- altura em 1440×900: 21.283 px;
- HTML: 344.107 bytes; CSS: 30.265 bytes;
- rota `/`: 7,03 kB; First Load JS: 94,3 kB; Shared JS: 87,2 kB.

## Inventário estrutural completo

| Nº | Bloco público | ID/âncora | Componente e fonte | Conteúdo e elementos públicos | Links/interação no baseline | Destino Sprint 8 |
| ---: | --- | --- | --- | --- | --- | --- |
| 01 | Header | landmark `header` | `SiteHeader`, `MobileNavigation`, `siteNavigation` | marca, logo, seis entradas, CTA Começar | anchors da homepage; menu mobile, Escape e retorno de foco | todas as rotas; navegação atualizada para páginas reais |
| 02 | Hero | `inicio` | `HeroSection`, `homepageEntry.hero` | eyebrow, H1, lead, descrição, dois CTAs, assinatura terminal e decoração | Demo e Trilha | permanece integral na homepage; Trilha passa a `/learn#trilha` |
| 03 | Estratégia de entrada | `aprender` | `ProblemSection`, `homepageEntry.problem` | cabeçalho, texto de apoio, quatro passos, resultado, Sem tracing e Com tracing com todos os itens | sem interação | `/payload-journey` integral; síntese indireta na homepage |
| 04 | Competências | `competencias` | `LearningOutcomesSection`, `homepageEntry.learningOutcomes` | cabeçalho e oito competências numeradas com descrições | sem interação | `/payload-journey` integral |
| 05 | Trilha | `trilha` | `LearningPathSection`, `homepageEntry.learningPath` | cabeçalho, quatro etapas, conceitos e resultados | IDs estáveis das quatro etapas | `/learn` integral |
| 06 | Demonstração visual | `demo` | `PayloadFlowDemoSection`, `FlowNode`, `RoleBadge`, `homepageEntry.flowDemo` | contexto, sete papéis e nove nós: Clique, Structured Payload, Request, API, Domain, Repository, Response, Projection e UI; representações, responsabilidades e perguntas | CTA Começar pela formação; layout responsivo | mesma implementação integral na homepage e em `/payload-journey` |
| 07 | Formação | `formacao` | `EducationSection`, `trainingPresentation` | cabeçalho, produto, plataforma, estado beta, cupom, promessa, público, tópicos e Como começar | Udemy externo e Rever a trilha | `/learn` integral; síntese própria na homepage |
| 08 | HORA.city | `case-study` | `CaseStudySection`, `horaCityCase.publicNarrative` | cabeçalho, transição, mensagem principal, sete blocos narrativos e fatos técnicos confirmados | LabLog e Rever o flow | `/cases` integral; síntese própria na homepage |
| 09 | USMT | `usmt` | `UsmtSection`, `usmtContent` | introdução, pergunta central, contexto indexável, 12 elementos, quatro lentes, quatro conexões e transição ao protocolo | nenhum CTA no baseline | `/usmt` integral; card compacto real na homepage |
| 10 | Procedimento | `procedimento` | `InvestigationCycleSection`, `investigationCycle` | cabeçalho, distinção e Congelar, Mapear, Detectar e Restaurar com perguntas, entradas, atividades, resultados, evidências e métodos relacionados | IDs das quatro etapas | `/protocol` integral; card compacto na homepage |
| 11 | Métodos | `metodos` | `MethodsSection`, `methodsContent` | cabeçalho, distinção e cinco métodos com categoria, propósito, uso, pergunta, resultado e relação com o procedimento | IDs estáveis dos métodos | `/method` integral; visão integrada na homepage |
| 12 | Prática investigativa | `pratica-investigativa` | `InvestigationPracticeSection`, `FlowDiagram`, `investigativePracticePresentation` | progressão, Track Mode, Trace Engineer, Software System Investigation, evidência, autoridade e restauração | CTA Conhecer o LAB | `/investigation` integral, por possuir conteúdo autônomo |
| 13 | O LAB | `lab` | `LabOverviewSection`, `siteContent.lab` | cabeçalho, conexão com prática, missão e princípio | sem CTA público | `/lab` integral |
| 14 | Ecossistema | `ecossistema` | `ConceptEcosystemSection`, `siteContent.ecosystem` | cabeçalho, quatro pilares, atividades, públicos possíveis, resultados e nota de colaboração | sem CTA de colaboração | `/ecosystem` integral; quatro títulos compactos na homepage |
| 15 | LabLog | `lablog` | `LabLogSection`, `labLogContent` | eyebrow singular consistente, título, descrição e nove temas | YouTube `@PayloadJourneyLAB` | `/lablog` integral; entrada compacta na homepage |
| 16 | Sobre | `sobre` | `AboutSection`, `siteContent.about` | origem, problema motivador, visão, valores, fundadora, criação do LAB e USMT e contexto confirmado | nenhum link profissional | `/about` integral; síntese própria na homepage |
| 17 | CTA final | seção sem ID | `BetaCtaSection`, `siteContent.betaCta` | eyebrow, título, descrição e nota da campanha | Udemy e Demo | permanece integral na homepage |
| 18 | Footer | landmark `footer` | `SiteFooter`, `footerContent` | identidade, logo, descrição, tagline, navegação própria, canais, informação real e copyright | Udemy e YouTube `@Lab-Log` | todas as rotas; links internos apontam para páginas reais |

## Sequências protegidas

1. Flow público: Clique → Structured Payload → Request → API → Domain → Repository → Response → Projection → UI. A formulação de escopo da Sprint também cita Click → Structured Payload → Request → API → Domain → Repository → Response → UI; o nó público adicional Projection foi mantido porque já estava renderizado em `a8e14c9`.
2. Trilha: Entenda o Payload → Payload Journey → Reverse Payload Journey → Track to Origin.
3. Procedimento: Congelar → Mapear → Detectar → Restaurar.
4. Métodos: Payload Journey → USMT → Reverse Payload Journey → Operational Payload Path → Track to Origin.
5. Lentes USMT: WHERE → HOW → LOGIC → SAFE.
6. Pilares: Formação → Pesquisa metodológica → Investigação aplicada → Colaboração.

## Links externos confirmados

- Udemy com cupom `FOLLOW-THE-FLOW` e `expiration: null`;
- LabLog: `https://www.youtube.com/@PayloadJourneyLAB`;
- Footer: `https://www.youtube.com/@Lab-Log`;
- destino canônico do YouTube: `null`, com `resolutionStatus: "unresolved"`.

## Conteúdo histórico fora do corpus público

Continuam apenas server-side: versões editoriais extensas do HORA.city, apresentação histórica da formação, apresentação histórica do LabLog, copies institucionais anteriores, passos extensos antigos da USMT, CTA futuro da USMT e nomes de páginas legais inexistentes. Esses itens não eram renderizados em `a8e14c9` e não são enviados às novas páginas.

## Pendências mantidas

- HORA.city: `editorialResolution: "unresolved"`;
- YouTube canônico: `resolutionStatus: "unresolved"`;
- validade do cupom: `expiration: null`;
- LinkedIn, contato e e-mail: `null`;
- páginas legais: ausentes;
- colaboração: apresentada como público ou possibilidade, nunca atividade atual confirmada.
