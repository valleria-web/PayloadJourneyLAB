# Sprint 10 — inventário de unificação institucional

## Baseline congelado

- branch: `refactor/homepage-v0.2.0`
- commit: `1ae665afa7b8c8000f4bf952d5d0adfb7ee10b3e`
- versão da aplicação: `0.2.0`
- Next.js efetivo: `14.2.35`
- data do baseline: 20 de julho de 2026
- rotas institucionais antes da migração: `/lab` e `/about`, ambas `200`
- rotas públicas indexáveis antes da migração: 12
- fronteiras Client Component: 1 (`MobileNavigation`)
- First Load JS das duas rotas: 94,3 kB
- JS compartilhado: 87,2 kB
- HTML estático de `/lab`: 36.070 bytes
- HTML estático de `/about`: 41.209 bytes

O staging estava vazio. Já estavam fora do índice os documentos `docs/sprints para v2/auditoria.md`, `sprint 10.md`, `sprint 11.md` e a pasta `docs/ai-readiness/`; todos permanecem fora do escopo desta implementação.

## Fontes runtime antes da migração

| Responsabilidade | Fonte | Consumidor |
| --- | --- | --- |
| apresentação da rota `/lab` | `thematicRoutes.lab` | `app/lab/page.tsx` e `SitePage` |
| conteúdo institucional resumido | `siteContent.lab` | `LabOverviewSection` |
| apresentação da rota `/about` | `thematicRoutes.about` | `app/about/page.tsx` e `SitePage` |
| origem, visão e autoria | `siteContent.about` | `AboutSection` |
| síntese institucional da home | `homepageSummaries.about` | `HomeAboutSection` |
| navegação principal | `siteNavigation` | `SiteHeader` e `MobileNavigation` |
| navegação independente do Footer | `footerContent.navigation` | `SiteFooter` |
| sitemap | `publicRoutePaths`, derivado de `thematicRoutes` | `app/sitemap.ts` |
| JSON-LD | `getThematicPageStructuredData` | `SitePage` nas duas rotas |

## Inventário público de `/lab`

| ID | Tipo | Conteúdo ou comportamento | Fonte atual | Destino obrigatório |
| --- | --- | --- | --- | --- |
| lab-intro-eyebrow | eyebrow | `O LAB` | `thematicRoutes.lab.eyebrow` | introdução de `/lab` |
| lab-intro-title | `h1` | `Formação, pesquisa e investigação aplicada` | `thematicRoutes.lab.title` | `h1` único de `/lab` |
| lab-intro-description | parágrafo | `O Payload Journey LAB organiza aprendizagem e prática investigativa em torno do fluxo da informação.` | `thematicRoutes.lab.description` | introdução de `/lab` |
| lab-home-link | link | `Voltar à homepage` → `/` | `PageIntro` | introdução de `/lab` |
| lab-anchor | ID | `#lab` | `homepageAnchors.lab` | preservar em `/lab` |
| lab-section-eyebrow | eyebrow | `O laboratório` | `siteContent.lab.eyebrow` | seção “O laboratório” |
| lab-section-title | heading | `Formação, pesquisa e investigação aplicada` | `siteContent.lab.title` | ideia preservada sem repetição visual consecutiva |
| lab-description | parágrafo | `O Payload Journey LAB desenvolve maneiras de ensinar, modelar e investigar software seguindo o fluxo da informação.` | `siteContent.lab.description` | seção “O laboratório” |
| lab-connection | parágrafo | `A prática que você acabou de conhecer faz parte de um laboratório dedicado a desenvolver formação, métodos e investigação aplicada.` | `siteContent.lab.connectionToInvestigativePractice` | seção “O laboratório” |
| lab-mission-heading | heading | `Missão` | `LabOverviewSection` | seção `#mission` |
| lab-mission | parágrafo | `O LAB conecta educação, desenvolvimento metodológico, investigação de sistemas, aplicação em casos reais e possibilidades de colaboração.` | `siteContent.lab.mission` | seção `#mission` |
| lab-principle-heading | heading | `Princípio` | `LabOverviewSection` | seção `#principle` |
| lab-principle | parágrafo | `Compreender antes de modificar: seguir o flow, produzir evidências e tornar as decisões do sistema visíveis.` | `siteContent.lab.principle` | seção `#principle` |
| lab-continuation | heading | `Continue explorando o LAB` | `PageContinuation` | continuidade final |
| lab-ecosystem-link | link | `Explorar o ecossistema` → `/ecosystem` | `app/lab/page.tsx` | continuidade ou navegação global |
| lab-origin-link | link | `Conhecer a origem` → `/about` | `app/lab/page.tsx` | retirar; o conteúdo passará a estar na própria página |

## Inventário público de `/about`

| ID | Tipo | Conteúdo ou comportamento | Fonte atual | Destino obrigatório em `/lab` |
| --- | --- | --- | --- | --- |
| about-intro-eyebrow | eyebrow | `Sobre` | `thematicRoutes.about.eyebrow` | conteúdo institucional sob `#sobre` |
| about-intro-title | `h1` | `Origem, visão e autoria` | `thematicRoutes.about.title` | heading conceitual interno; não será segundo `h1` |
| about-intro-description | parágrafo | `A origem do Payload Journey LAB, sua motivação e as informações confirmadas sobre sua fundadora.` | `thematicRoutes.about.description` | introdução da área `#sobre` |
| about-home-link | link | `Voltar à homepage` → `/` | `PageIntro` | já preservado pela introdução canônica de `/lab` |
| about-anchor | ID | `#sobre` | `homepageAnchors.about` | preservar exatamente em `/lab` |
| about-section-eyebrow | eyebrow | `Sobre o LAB` | `siteContent.about.eyebrow` | seção institucional `#sobre` |
| about-section-title | heading | `Criado para ensinar a compreender sistemas` | `siteContent.about.title` | seção “O laboratório” |
| about-origin | parágrafo | `Sistemas podem crescer mais rapidamente do que a nossa capacidade de explicá-los. O LAB nasce da necessidade de recuperar visão estrutural, rastreabilidade e confiança antes de modificar software complexo.` | `siteContent.about.origin` | `#origin` |
| about-reason-heading | heading | `Por que o LAB existe` | `AboutSection` | `#origin` |
| about-reason | parágrafo | `Quando a produção de código avança sem compreensão estrutural equivalente, torna-se mais difícil preservar rastreabilidade, autoridade, observabilidade e capacidade de decisão.` | `siteContent.about.motivatingProblem` | `#origin` |
| about-vision-heading | heading | `Visão` | `AboutSection` | `#vision` |
| about-vision | parágrafo | `O Payload Journey LAB trabalha para tornar investigação de sistemas uma capacidade ensinável, praticável e documentável.` | `siteContent.about.vision` | `#vision` |
| about-value-1 | lista | `Seguir o flow` | `siteContent.about.values[0]` | `#how-the-lab-works` |
| about-value-2 | lista | `Compreender antes de modificar` | `siteContent.about.values[1]` | `#how-the-lab-works` |
| about-value-3 | lista | `Produzir evidência` | `siteContent.about.values[2]` | `#how-the-lab-works` |
| about-value-4 | lista | `Tornar decisões visíveis` | `siteContent.about.values[3]` | `#how-the-lab-works` |
| about-value-5 | lista | `Desenvolver visão estrutural` | `siteContent.about.values[4]` | `#how-the-lab-works` |
| about-value-6 | lista | `Compartilhar métodos` | `siteContent.about.values[5]` | `#how-the-lab-works` |
| about-founder-label | label | `Fundadora` | `AboutSection` | `#founder` |
| about-founder-name | heading | `Valéria dos Santos Reiser` | `siteContent.about.founder.name` | `#founder` |
| about-founder-role | parágrafo | `Criadora do Payload Journey LAB e da USMT` | `siteContent.about.founder.role` | `#founder` |
| about-lab-creation | parágrafo | `Criou o Payload Journey LAB.` | `siteContent.about.founder.labCreation` | `#founder` |
| about-usmt-creation | parágrafo | `Criou a Universal System Modeling Template (USMT).` | `siteContent.about.founder.usmtCreation` | `#founder` |
| about-usmt-relation | parágrafo | `A USMT integra o trabalho metodológico do LAB como instrumento para explicitar estados, regras, invariantes e o comportamento esperado.` | `siteContent.about.relationshipToUsmt` | `#founder` |
| about-context-1 | lista | `Desenvolvimento de maneiras de observar payloads, estados, eventos e decisões em sistemas complexos` | `siteContent.about.founder.confirmedContext[0]` | `#founder` |
| about-context-2 | lista | `Desenvolvimento dos métodos que estruturam a prática de investigação aplicada do LAB` | `siteContent.about.founder.confirmedContext[1]` | `#founder` |
| about-lab-link | link | `Conhecer o LAB` → `/lab` | `app/about/page.tsx` | absorvido pela rota canônica |
| about-ecosystem-link | link | `Explorar o ecossistema` → `/ecosystem` | `app/about/page.tsx` | continuidade final ou navegação global |

## Elementos globais compartilhados

As duas páginas contêm Header, navegação desktop/mobile, CTA `Começar`, Footer, logo da marca, canais Udemy/YouTube, aviso institucional real e copyright. Esses elementos são fornecidos por `SitePage` e continuarão presentes em `/lab`. O Header tinha simultaneamente `O LAB` → `/lab` e `Sobre` → `/about`; o Footer já tinha somente `O LAB` → `/lab`.

## Metadata e dados estruturados antes da migração

| Rota | Title renderizado | Description | Canonical | JSON-LD |
| --- | --- | --- | --- | --- |
| `/lab` | `Formação, pesquisa e investigação aplicada \| Payload Journey LAB` | organização da aprendizagem e prática investigativa | `https://payloadjourneylab.com/lab` | `WebPage` sobre `Organization` |
| `/about` | `Origem, visão e autoria \| Payload Journey LAB` | origem, motivação e fundadora | `https://payloadjourneylab.com/about` | `WebPage` sobre `Organization` |

Após a migração somente `/lab` poderá produzir metadata, canonical e JSON-LD institucionais. `/about` será exclusivamente uma resposta de compatibilidade 308.

## Anchors e parâmetros

- Anchor público encontrado em `/lab`: `#lab`.
- Anchor público encontrado em `/about`: somente `#sobre`.
- Não há links internos, componentes ou documentação funcional que definam parâmetros de query para `/about`.
- Fragmentos não integram a requisição HTTP. Por isso, o redirect será explicitamente `/about` → `/lab#sobre`.
- Query strings não faziam parte do contrato público conhecido de `/about`; não será criada lógica para transportar parâmetros arbitrários.

## Capturas baseline

- `sprint10-before-lab-desktop.png` — 1440 × 900
- `sprint10-before-lab-mobile.png` — 390 × 844
- `sprint10-before-about-desktop.png` — 1440 × 900
- `sprint10-before-about-mobile.png` — 390 × 844

## Gate de preservação

Nenhuma fonte runtime institucional duplicada poderá ser removida antes de todos os itens acima estarem representados em `/lab` e cobertos pela matriz final. Depois da comprovação, `siteContent.about`, `thematicRoutes.about` e `AboutSection` deverão ser eliminados do runtime; o histórico permanecerá no Git e nos documentos 27, 28 e 29.
