# Sprint 0 — Contrato Editorial e Mapa de Preservação e Migração

## Identificação

| Campo | Valor |
| --- | --- |
| Data da execução | 22 de julho de 2026 |
| Timezone | Europe/Berlin |
| Branch auditada | `refactor/homepage-v0.2.0` |
| Commit auditado | `fc7cdbb73384030c4d6e92b39e07798dac4a2fb5` |
| Aplicação | `payload-journey-lab@0.2.0` |
| Node.js | `v22.19.0` |
| npm | `11.6.3` |
| Next.js | `14.2.35` |
| React / React DOM | `18.3.1` |
| TypeScript instalado | `5.9.3` |
| Natureza da sprint | documental, investigativa e editorial |
| Implementação autorizada | nenhuma |
| Documento autorizado | este arquivo |

## Estado Git inicial e autorização

No início da Sprint 0:

- `git diff --name-only`: vazio;
- `git diff --cached --name-only`: vazio;
- `git status --short`: somente `?? "docs/sprints para v3/"`;
- o diretório documental já continha `auditoria refactor site v3.md`, `resultado auditoria narrativa site v3.md` e `sprint 0.md`;
- nenhum arquivo versionado de implementação estava modificado ou staged.

Esta sprint autoriza somente a criação de:

`docs/sprints para v3/Sprint 0 - Contrato Editorial e Mapa de Preservacao e Migracao.md`

A criação deste documento é uma alteração documental intencional e autorizada. Qualquer alteração em `app/`, `components/`, `content/`, `config/`, `lib/`, `scripts/`, `types/`, arquivos de configuração, testes ou dependências não está autorizada.

## Modelo de evidência

As evidências foram separadas para evitar tratar build ou renderização estática como comportamento runtime.

| Classe | Definição nesta sprint | Evidência coletada | Limite |
| --- | --- | --- | --- |
| Evidência de fonte | Texto, estrutura ou regra localizada no repositório. | Arquivos TypeScript/TSX, configuração, conteúdo tipado e scripts. | Prova intenção e implementação de fonte, não comportamento em execução. |
| Conteúdo renderizado | Conteúdo presente no HTML devolvido pelo servidor local iniciado pelos verificadores. | 11 rotas com H1, metadata, conteúdo preservado e links verificados. | Prova presença no HTML observado; não prova interação em browser ou produção pública. |
| Evidência de build | Resultado da compilação e geração estática do Next.js. | 17 páginas estáticas, tamanhos de bundle e warnings. | Prova que o projeto compila e gera artefatos; não prova comportamento runtime. |
| Execução observada | Comportamento efetivamente observado por requisições HTTP contra servidor Next local em modo de desenvolvimento. | Status das 11 rotas, redirect `/about`, 404 deliberados, canonical, JSON-LD e navegação inicial. | Não equivale a execução no host público, interação humana, browser real ou runtime de negócio. |

O site não possui backend, autenticação, banco de dados ou fluxo de negócio runtime no escopo deste repositório. A expressão `runtime` usada no conteúdo editorial refere-se à execução de sistemas investigados pelo LAB; não descreve o build deste site.

## Baseline técnico

### Evidência de build

`npm.cmd run build` — aprovado:

- 17 páginas estáticas geradas;
- 11 rotas públicas de conteúdo;
- First Load JS de `94,3 kB` nas rotas de conteúdo;
- JS compartilhado de `87,2 kB`;
- compilação, lint interno e checagem de tipos aprovados;
- nenhuma rota dinâmica identificada.

Warnings técnicos preexistentes, registrados e não corrigidos:

```text
[webpack.cache.PackFileCacheStrategy] Caching failed for pack:
Error: Unable to snapshot resolve dependencies
```

O warning apareceu duas vezes. Ele não impediu o build. Esta sprint não investigou nem alterou o cache Webpack.

### Verificações de fonte e build

| Comando | Resultado | Classe predominante |
| --- | --- | --- |
| `npx.cmd tsc --noEmit` | aprovado | fonte / tipos |
| `npm.cmd run lint` | aprovado sem warnings ou erros | fonte |
| `npm.cmd run verify:foundation` | aprovado | fonte e contratos de design |

`verify:foundation` confirmou, entre outros itens:

- seis grupos de tokens;
- nenhuma cor literal no Tailwind;
- níveis `h2`, `h3` e `h4` aceitos pelo `SectionHeader`;
- zero novas fronteiras Client;
- contraste calculado para verde, CTA e papéis operacionais;
- páginas temáticas e seções de flow preservadas como Server Components.

### Conteúdo renderizado e execução observada local

`npm.cmd run verify:ai-readiness` — aprovado:

- 11 rotas canônicas observadas por HTTP local;
- 11 URLs no sitemap;
- canonical e `og:url` coerentes;
- política de crawlers preservada;
- nome oficial da USMT preservado;
- 12 elementos e quatro lentes da USMT;
- proveniência contextual em oito rotas;
- JSON-LD com `WebSite`, `WebPage`, `Person` e `CreativeWork`;
- `Organization` deliberadamente omitido;
- redirect de host configurado aprovado localmente;
- redirect da hospedagem ainda requer validação pública após deploy.

`npm.cmd run verify:homepage` — aprovado:

- 11 rotas indexáveis com resposta observada;
- um redirect permanente de compatibilidade;
- cinco rotas deliberadamente ausentes;
- 11 páginas com H1 único e metadata;
- dez seções completas preservadas;
- demo compartilhada em duas rotas;
- nove nós de flow;
- links internos validados;
- três destinos externos;
- uma fronteira Client;
- conteúdo público e decisões editoriais não resolvidas protegidos.

Os dois verificadores iniciaram `next dev` localmente e fizeram requisições HTTP. Esses resultados são execução observada local, não validação do host público.

## Rotas e superfícies auditadas

### Rotas canônicas

1. `/`;
2. `/payload-journey`;
3. `/learn`;
4. `/cases`;
5. `/usmt`;
6. `/method`;
7. `/protocol`;
8. `/investigation`;
9. `/lab`;
10. `/ecosystem`;
11. `/lablog`.

### Contratos adicionais

- `/about` — redirect permanente para `/lab#sobre`;
- `/mapping`, `/reverse-payload-journey`, `/resources`, `/privacy-policy` e `/terms-of-use` — 404 deliberados;
- `/robots.txt`;
- `/sitemap.xml`;
- Header desktop;
- navegação mobile;
- Footer;
- metadata global e por rota;
- structured data;
- CTAs internos e externos;
- verificadores automatizados.

## Arquivos inspecionados

### Aplicação e configuração

- `app/page.tsx`;
- `app/cases/page.tsx`;
- `app/ecosystem/page.tsx`;
- `app/investigation/page.tsx`;
- `app/lab/page.tsx`;
- `app/lablog/page.tsx`;
- `app/learn/page.tsx`;
- `app/method/page.tsx`;
- `app/payload-journey/page.tsx`;
- `app/protocol/page.tsx`;
- `app/usmt/page.tsx`;
- `app/layout.tsx`;
- `app/sitemap.ts`;
- `app/robots.ts`;
- `next.config.mjs`;
- `config/site.ts`.

### Conteúdo e tipos

- `content/routes.ts`;
- `content/site.ts`;
- `content/payload-journey-lab.ts`;
- `content/methods.ts`;
- `content/usmt.ts`;
- `content/hora-city.ts`;
- `types/content.ts`.

### Componentes responsáveis

- `components/pages/SitePage.tsx`;
- `components/pages/PageIntro.tsx`;
- `components/pages/PageContinuation.tsx`;
- `components/layout/SiteHeader.tsx`;
- `components/layout/MobileNavigation.tsx`;
- `components/layout/SiteFooter.tsx`;
- `components/seo/JsonLd.tsx`;
- `components/sections/BetaCtaSection.tsx`;
- `components/sections/CaseStudySection.tsx`;
- `components/sections/ConceptEcosystemSection.tsx`;
- `components/sections/EducationSection.tsx`;
- `components/sections/HeroSection.tsx`;
- `components/sections/HomeLabConstructionSection.tsx`;
- `components/sections/HomeMethodOverviewSection.tsx`;
- `components/sections/HomePathwaysSections.tsx`;
- `components/sections/InvestigationCycleSection.tsx`;
- `components/sections/InvestigationPracticeSection.tsx`;
- `components/sections/LabConstructionSection.tsx`;
- `components/sections/LabLogSection.tsx`;
- `components/sections/LabOverviewSection.tsx`;
- `components/sections/LearningOutcomesSection.tsx`;
- `components/sections/LearningPathSection.tsx`;
- `components/sections/MethodsSection.tsx`;
- `components/sections/PayloadFlowDemoSection.tsx`;
- `components/sections/ProblemSection.tsx`;
- `components/sections/UsmtSection.tsx`.

### Metadata, dados estruturados e verificadores

- `lib/metadata.ts`;
- `lib/structured-data.ts`;
- `scripts/verify-homepage.mjs`;
- `scripts/verify-design-foundation.mjs`;
- `scripts/verify-ai-readiness.mjs`.

# Contrato editorial

## Tese editorial canônica

> À medida que agentes de inteligência artificial aceleram a produção e a modificação de código, a compreensão do sistema pode tornar-se um dos principais gargalos da engenharia de software.

> O Payload Journey LAB investiga se — e até que ponto — métodos baseados em flow, payload tracing, causalidade, modelagem, checkpoints e evidências de runtime podem ajudar estudantes de Engenharia de Software e developers a desenvolver mais cedo a capacidade de compreender codebases grandes, complexas ou pouco conhecidas.

Estatuto:

- direção institucional;
- problema investigado;
- hipótese pedagógica;
- fundamento narrativo do site.

Não é:

- lei geral da engenharia de software;
- resultado científico demonstrado;
- comprovação de eficácia;
- promessa de empregabilidade, onboarding ou produtividade;
- evidência de aplicação universal.

## Cadeia narrativa central

```text
IA acelera a produção e modificação de código
→ a distância entre código produzido e sistema compreendido pode aumentar
→ estudantes e developers precisam aprender mais cedo a compreender sistemas que não construíram
→ o LAB propõe uma progressão baseada em flow, payload, causalidade, runtime e evidências
→ casos reais e protocolos documentados investigam até que ponto os métodos desenvolvem essa capacidade
→ a aprendizagem pode avançar para sistemas distribuídos, requisitos, timing e contextos críticos
```

Cada página deve responder a uma parte da cadeia; o texto não deve ser repetido integralmente em todas elas.

## Públicos prioritários

### Primários

1. Estudantes de Engenharia de Software.
2. Developers em início de carreira.
3. Developers entrando em codebases grandes, complexas, legadas, mistas ou pouco conhecidas.
4. Profissionais trabalhando com sistemas expandidos por agentes de IA.

### Secundários

5. Educadores e instituições de ensino.
6. Equipes de desenvolvimento.
7. Organizações que precisam melhorar compreensão, rastreabilidade e investigação.
8. Laboratórios, universidades e iniciativas de pesquisa aplicada.

O LAB não deve ser reduzido a empregabilidade. Sua relação com o trabalho deve ser expressa por capacidades investigadas: compreender codebases, construir modelos mentais progressivos, formular perguntas, localizar causalidade, verificar mudanças produzidas por IA, ganhar autonomia progressiva e produzir explicações baseadas em evidências.

## Dor contemporânea

Ferramentas e agentes de IA podem acelerar produção, modificação e expansão do código. Essa velocidade não elimina contexto, investigação, domínio, rastreabilidade, modelagem, validação, confronto com runtime ou responsabilidade humana.

O problema do LAB é compreender:

- o que foi produzido;
- que operação foi alterada;
- quais payloads atravessam o flow;
- onde a informação muda;
- qual autoridade toma cada decisão;
- quais invariantes devem permanecer verdadeiras;
- quais estados e efeitos surgem em runtime.

## IA e autoridade humana

A IA pode atuar como assessoria técnica, interlocutora metodológica, instrumento de exploração, aceleradora de documentação, apoio à investigação e amplificadora da capacidade cognitiva humana.

A IA não é autora autônoma dos métodos, autoridade final sobre o sistema, substituta da compreensão, fonte suficiente de evidência ou responsável pelas conclusões.

Formulação central:

> A IA deve ampliar a capacidade de compreensão dos engenheiros, não substituir a sua autoridade sobre o sistema.

## Estudantes, juniors e esforço intelectual

O pensamento investigativo exige esforço, prática, confronto entre hipótese e evidência e aprendizagem de arquitetura, domínio, runtime e comportamento. Ele não produz domínio imediato de sistemas complexos, mas também não precisa ser reservado a seniors.

Progressão canônica:

```text
evento → payload → camada → transformação → decisão → estado → efeito observável
```

Depois:

```text
flow completo → vários componentes → serviços distribuídos → mensagens assíncronas
→ timing → requisitos → invariantes críticas → contextos industriais ou mission-critical
```

A possibilidade de essa formação antecipar capacidades é hipótese pedagógica, não resultado comprovado.

## Payload e tracing

O payload é fio condutor de uma operação, representação transportável de uma intenção ou ocorrência, elemento observável entre camadas e ponto de contato entre estrutura, semântica e execução.

Tracing é reconstrução do flow, busca por causalidade, observação de transformações, localização de decisões, confronto entre modelo e runtime e produção de evidências.

A narrativa deve transmitir rigor, progressão, esforço, acessibilidade e descoberta, sem sentimentalismo ou promoção excessiva.

## Estatuto dos conceitos investigativos

- **Software System Investigation:** prática ou campo investigativo.
- **Trace Engineering:** conjunto de capacidades e raciocínios investigativos.
- **Trace Engineer:** função e perfil investigativo em desenvolvimento no universo do LAB.
- **Payload Journey LAB:** laboratório que investiga, formaliza, aplica e ensina esses elementos.

Trace Engineer não é profissão consolidada, cargo reconhecido, categoria oficial, certificação externa ou competência já validada pelo LAB.

## Relação com práticas existentes

- leitura da codebase revela estrutura;
- arquitetura revela organização, responsabilidades e relações;
- debugging localiza e corrige comportamentos problemáticos;
- observabilidade oferece sinais sobre estado e execução;
- tracing segue operações e relações causais;
- Software System Investigation combina modelo, runtime, checkpoints e evidências para reconstruir comportamento.

Tracing não substitui arquitetura, debugging, testes, observabilidade, APM, logs, métricas, documentação ou conhecimento de domínio.

## Sistemas distribuídos e mission-critical

> Sistemas distribuídos, requisitos, mensagens, timing, contextos industriais e mission-critical representam uma direção futura de aprofundamento do Payload Journey LAB.

CAN, DBC, SysML/MBSE, V-Model e requirements-to-runtime traceability pertencem à trilha futura. O site pode declarar intenção de estudar ou conectar esses temas, mas não domínio, validação ou aplicação demonstrada.

## Taxonomia de claims

| Categoria | Definição | Regra editorial |
| --- | --- | --- |
| Fato confirmado | Informação sustentada por fonte, documento, caso, execução, publicação ou artefato localizado. | Citar a evidência e limitar a afirmação ao que ela prova. |
| Observação derivada de caso | Interpretação sustentada por caso específico. | Não generalizar automaticamente. |
| Hipótese investigativa | Possibilidade que o LAB pretende avaliar. | Usar linguagem condicional e indicar como será investigada. |
| Ambição futura | Direção ainda não demonstrada. | Usar futuro/intenção e não atribuir competência atual. |

## Política linguística

Português brasileiro é o idioma editorial principal porque os públicos prioritários incluem estudantes brasileiros, o curso principal está em PT-BR e a voz autoral é predominantemente brasileira.

Padronizar futuramente: `objetivo`, `atuação`, `arquitetura`, `equipe`, `investigação`, `compreensão`, `código`, `página`, `navegação`, `início`.

Permanecem em inglês quando preservam reconhecimento e precisão: `payload`, `tracing`, `flow`, `runtime`, `checkpoint`, `Track Mode`, `mission-critical`, `requirements-to-runtime traceability`.

## Definições canônicas mínimas

| Termo | Definição canônica |
| --- | --- |
| Payload Journey | Seguir uma operação através das representações, camadas, interpretações, decisões, estados e efeitos que compõem sua execução. |
| Payload Tracing | Prática de acompanhar um payload e suas transformações para reconstruir o flow e a causalidade de uma operação. |
| Software System Investigation | Prática estruturada de compreender sistemas através de modelagem, tracing, checkpoints, runtime e evidências. |
| Trace Engineering | Conjunto de capacidades utilizadas para seguir operações, localizar decisões, confrontar modelo e execução e produzir explicações verificáveis. |
| Trace Engineer | Função e perfil investigativo que aplica essas capacidades para compreender e explicar sistemas. |
| USMT | Instrumento utilizado para explicitar o modelo esperado de estados, eventos, transições, regras, invariantes e limites de um sistema. |
| Operational Payload Path | Representação do caminho operacional provável ou confirmado percorrido por um payload entre componentes e camadas. |
| Reverse Payload Journey | Investigação que parte de uma anomalia ou efeito observado e percorre o flow em direção à sua origem causal. |
| Track to Origin | Prática de continuar o tracing até localizar a origem e a autoridade da decisão investigada. |
| Congelar, Mapear, Detectar e Restaurar | Protocolo geral para preservar o comportamento observado, reconstruir o flow, localizar divergências e validar uma restauração. |

# Arquitetura narrativa por página

| Superfície | Pergunta principal congelada | Papel futuro |
| --- | --- | --- |
| Homepage | Por que compreender sistemas se tornou urgente, para quem o LAB existe e qual capacidade está sendo investigada? | Entrada: agora → dor → público → proposta → demo → hipótese/evidência → aprendizagem → ação. |
| `/lab` | Por que o LAB surgiu, qual é sua missão, o que está construindo e que compromisso assume? | Missão, hipótese, origem, IA/humano, estado, piloto, visão, fundadora e compromisso. |
| `/payload-journey` | Por que o payload é um fio condutor e como uma operação pode ser observada? | Definição e demonstração canônica do método. |
| `/method` | Quais instrumentos existem, que perguntas respondem e como se relacionam? | Mapa dos métodos e limites. |
| `/protocol` | Como uma investigação é executada, documentada e validada? | Sequência operacional e evidências. |
| `/investigation` | O que é Software System Investigation e quais capacidades formam Trace Engineering? | Prática, capacidades e perfil, sem sugerir profissão consolidada. |
| `/learn` | Como a capacidade é desenvolvida progressivamente, do primeiro evento a flows complexos? | Progressão pedagógica e estado do conteúdo. |
| `/cases` | Que evidências existem, o que foi observado, o que permanece desconhecido e o que cada caso ensina? | Centro de evidência aplicada. |
| `/usmt` | Como explicitar o modelo esperado e confrontá-lo com comportamento observado em runtime? | Modelagem canônica e relação com tracing. |
| `/lablog` | Que trabalho está acontecendo, em que data, com que estado e quais evidências foram produzidas? | Registro datado e verificável. |
| `/ecosystem` | Como uma pessoa pode aprender, pesquisar, aplicar ou colaborar com o LAB? | Portas de entrada e canais confirmados. |
| Header/Footer | Como conduzir ao próximo passo sem esconder métodos fundamentais ou criar caminhos concorrentes? | Navegação coerente com a arquitetura. |

# Mapa de Preservação e Migração

Escalas usadas:

- clareza: alta, média ou baixa;
- repetição: baixa, média ou alta;
- evidência: `fonte`, `renderizado`, `build` ou `execução observada`, conforme o modelo definido na baseline.

## Homepage

| ID | Rota atual | Arquivo de origem | Componente | Heading/trecho | Propósito atual | Público | Mensagem | Categoria | Evidência localizada | Clareza | Repetição | Contradição | Risco | Decisão | Destino | Ação futura | Justificativa | Dependências | Validação |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| V3-MAP-HOME-001 | `/` | `content/payload-journey-lab.ts:60`, chave `homepageEntry.hero` | `HeroSection` | “Aprenda a seguir o payload” | Entrada metodológica | Estudantes e developers | Reduzir codebase a um flow | Hipótese investigativa | Fonte; HTML observado em `/`; `verify:homepage` preserva H1 | Alta | Média | Não explica IA/urgência | Médio: tese começa tarde | reformular | Hero futuro | alteração de texto | Hero deve responder por que agora e para quem, sem perder payload | contrato, HOME-006 | H1 único; tese e público no HTML |
| V3-MAP-HOME-002 | `/` | `content/payload-journey-lab.ts:263`, `homepageEntry.flowDemo` | `PayloadFlowDemoSection` | “Veja o payload atravessar o sistema” | Demonstrar uma operação | Iniciantes | Informação muda entre nove nós até a UI | Fato confirmado sobre o modelo pedagógico do site | Fonte; HTML observado; nove nós verificados | Alta | Média | Modelo é pedagógico, não runtime observado de sistema real | Baixo | preservar integralmente | Homepage após proposta | alteração de ordem | É a demonstração mais concreta do valor pedagógico | hero e proposta | nove IDs na ordem; textos e CTA preservados |
| V3-MAP-HOME-003 | `/` | `content/routes.ts:84`, `homepageSummaries.method` | `HomeMethodOverviewSection` | “Modele, rastreie e investigue” | Resumir USMT, Payload Journey e protocolo | Visitante geral | Modelo, flow e procedimento são entradas complementares | Fato confirmado sobre arquitetura autoral | Fonte e conteúdo renderizado | Alta | Média | Antecede a explicação completa da dor | Baixo | mover | Após demo ou dor, conforme narrativa aprovada | alteração de ordem | Deve responder à dor, não competir com ela | HOME-001, HOME-006 | três destinos e descrições preservados |
| V3-MAP-HOME-004 | `/` | `content/routes.ts:117`, `homepageSummaries.applied` | `HomeAppliedInvestigationSection` | “Um caso real torna o método observável” | Conectar método a caso | Estudantes, profissionais e organizações | HORA.city documenta aplicação sem ampliar fatos | Fato confirmado | Fonte; link `/cases`; conteúdo observado | Alta | Média | Caso prova uso, não eficácia | Médio se “evidência” for generalizada | preservar com microajuste | Bloco hipótese/evidência | alteração de texto | Explicitar o que o caso prova e não prova | CASE-001–003 | CTA, status e limites consistentes com `/cases` |
| V3-MAP-HOME-005 | `/` | `content/routes.ts:126`, `homepageSummaries.ecosystem` | `HomeEcosystemSection` | “Quatro pilares, um propósito comum” | Resumir ecossistema | Públicos primários e secundários | Formação, pesquisa, aplicação e colaboração | Fato confirmado sobre organização do LAB | Fonte e HTML observado | Alta | Média | Surge antes do público/urgência | Baixo | mover | Próximo do fechamento institucional | alteração de ordem | É contexto institucional, não argumento inicial | ECO-001–002 | quatro pilares e CTA preservados |
| V3-MAP-HOME-006 | `/` | `content/routes.ts:134`, `homepageSummaries.audienceInvestigation` | `HomeLabConstructionSection` | “Compreender sistemas mais cedo” | Declarar público, hipótese e prudência | Públicos primários | Métodos podem ajudar a construir modelo mental e autonomia | Hipótese investigativa | Fonte; HTML observado; strings protegidas por dois verificadores | Alta | Baixa | Conteúdo correto, mas aparece na sexta seção | Alto: núcleo narrativo enterrado | dividir | Hero e bloco hipótese/evidência | alteração de ordem | “Por que agora”, público e hipótese devem aparecer cedo sem duplicação | HOME-001, auditoria V3 | linguagem condicional preservada em todos os destinos |
| V3-MAP-HOME-007 | `/` | `content/routes.ts:152`, `homepageSummaries.learning` | `HomeLearningSection` | “Comece pela trilha e acompanhe o LabLog” | Apontar formação e registros | Estudantes e interessados | Aprender pela trilha e acompanhar desenvolvimento | Fato confirmado sobre caminhos existentes | Fonte; links `/learn` e `/lablog` observados | Alta | Média | LabLog tem pouca evidência própria | Médio | preservar com microajuste | Caminho de aprendizagem | alteração de CTA | Separar aprender de acompanhar evidência | LEARN-002, LABLOG-001 | CTAs conduzem a conteúdos que cumprem a promessa |
| V3-MAP-HOME-008 | `/` | `content/routes.ts:163`, `homepageSummaries.lab` | `HomeLabSection` | “Formação, pesquisa e investigação aplicada” | Síntese institucional | Visitante geral | Conhecer identidade, origem, missão e autoria | Fato confirmado | Fonte e link `/lab` observado | Alta | Média | Repete intro de `/lab` | Baixo | condensar | Fechamento institucional | alteração de texto | Manter ponte curta, sem duplicar a página institucional | LAB-001 | síntese distinta do H1 de `/lab` |
| V3-MAP-HOME-009 | `/` | `content/payload-journey-lab.ts:828`, `siteContent.betaCta` | `BetaCtaSection` | “Comece por um único flow” | Conversão para Udemy | Estudantes/developers | Formação começa por uma operação | Fato confirmado sobre oferta; benefício é hipótese | Fonte; CTA externo observado | Alta | Alta | Peso comercial pode dominar fechamento | Médio | decisão humana necessária | Fechamento da homepage | decisão humana | Peso da Udemy precisa ser aprovado | decisão HUM-004 | CTA, campanha e estatuto beta confirmados |

## Payload Journey

| ID | Rota atual | Arquivo de origem | Componente | Heading/trecho | Propósito atual | Público | Mensagem | Categoria | Evidência localizada | Clareza | Repetição | Contradição | Risco | Decisão | Destino | Ação futura | Justificativa | Dependências | Validação |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| V3-MAP-PJ-001 | `/payload-journey` | `content/routes.ts:4`, `thematicRoutes.payloadJourney` | `PageIntro` via `SitePage` | “Siga a informação através do sistema” | Introduzir método | Iniciantes | Escolher flow, encontrar payload e decisões | Fato confirmado sobre método autoral | Fonte; H1/metadata observados | Alta | Média | Não define formalmente Payload Journey | Médio | reformular | Intro canônica | criação de definição canônica | A página deve abrir com a definição aprovada | glossário | definição e propósito no HTML/metadata |
| V3-MAP-PJ-002 | `/payload-journey` | `content/payload-journey-lab.ts:78`, `homepageEntry.problem` | `ProblemSection` | “Não abra arquivos aleatoriamente” | Estratégia de entrada | Developers em codebase desconhecida | Payload oferece ponto concreto para começar | Hipótese investigativa | Fonte e conteúdo observado | Alta | Média | Comparação “sem/com tracing” pode sugerir superioridade universal | Médio | preservar com microajuste | Após definição | alteração de texto | Preservar força prática e limitar generalização | contrato de limites | texto não afirma substituir outras práticas |
| V3-MAP-PJ-003 | `/payload-journey` | `content/payload-journey-lab.ts:135`, `learningOutcomes` | `LearningOutcomesSection` | “Uma estratégia para compreender sistemas pelo flow” | Explicitar oito capacidades | Estudantes/developers | Identificar, seguir, distinguir, evidenciar e rastrear | Hipótese investigativa | Fonte e oito cards renderizados | Alta | Média | “O que você aprenderá” pressupõe resultado do curso/método | Médio | preservar com microajuste | Competências iniciais | alteração de heading | Distinguir objetivos de aprendizagem de eficácia comprovada | LEARN-002 | heading e claims compatíveis com estatuto beta |
| V3-MAP-PJ-004 | `/payload-journey` | `content/payload-journey-lab.ts:263`, `flowDemo` | `PayloadFlowDemoSection` | “Veja o payload atravessar o sistema” | Modelo pedagógico do flow | Iniciantes | Operação cruza nove representações | Fato confirmado sobre artefato pedagógico | Fonte; HTML observado; compartilhado em duas rotas | Alta | Alta | Duplicação integral com homepage é intencional, mas pesada | Baixo | preservar integralmente | Página canônica e demo da homepage | sem alteração | Demo é conteúdo central aprovado | HOME-002 | igualdade dos nove nós e rotulagem pedagógica |

## Formação

| ID | Rota atual | Arquivo de origem | Componente | Heading/trecho | Propósito atual | Público | Mensagem | Categoria | Evidência localizada | Clareza | Repetição | Contradição | Risco | Decisão | Destino | Ação futura | Justificativa | Dependências | Validação |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| V3-MAP-LEARN-001 | `/learn` | `content/routes.ts:11`, `thematicRoutes.learn` | `PageIntro` | “Aprenda a seguir o flow” | Introduzir percurso | Estudantes/developers | Formação prática para compreender pelo caminho da informação | Hipótese investigativa | Fonte; H1 e metadata observados | Alta | Média | Não explicita esforço ou estatuto beta no topo | Médio | reformular | Intro de `/learn` | alteração de texto | Incluir progressão e limites | contrato pedagógico | público, esforço e percurso no HTML |
| V3-MAP-LEARN-002 | `/learn` | `content/payload-journey-lab.ts:198`, `learningPath` | `LearningPathSection` | “Seu caminho no Payload Journey LAB” | Progressão em quatro etapas | Estudantes | Payload → Journey → Reverse → Origin | Hipótese investigativa | Fonte; quatro IDs ordenados observados | Alta | Média | Resultados escritos no indicativo; termina antes de sistemas complexos | Alto | dividir | Níveis 1–3 e ponte aos níveis 4–5 | alteração de conteúdo estruturado | Formalizar progressão completa e estados disponível/futuro | mapa pedagógico | etapas e claims permitidos testáveis |
| V3-MAP-LEARN-003 | `/learn` | `content/site.ts:126`, `trainingPresentation` | `EducationSection` | “Comece a aprender Payload Tracing” | Apresentar curso beta | Públicos primários | Curso ensina fundamentos e estratégia de tracing | Fato confirmado sobre oferta; resultados são hipótese | Fonte; conteúdo e CTA observados | Alta | Média | “visão necessária para pensar como Trace Engineer” sugere resultado forte | Alto | reformular | Bloco formação disponível | alteração de texto | Distinguir oferta, objetivos e eficácia | HUM-004, claims | beta, currículo e CTA preservados; promessa prudente |

## Casos

| ID | Rota atual | Arquivo de origem | Componente | Heading/trecho | Propósito atual | Público | Mensagem | Categoria | Evidência localizada | Clareza | Repetição | Contradição | Risco | Decisão | Destino | Ação futura | Justificativa | Dependências | Validação |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| V3-MAP-CASE-001 | `/cases` | `content/routes.ts:18`, `thematicRoutes.cases` | `PageIntro` | “Casos acompanhados pelo LAB” | Introduzir evidência aplicada | Todos os públicos | Fatos confirmados, checkpoints e estado atual | Fato confirmado | Fonte; H1/metadata observados | Alta | Baixa | Plural “casos” com um caso público | Médio | preservar com microajuste | Intro de `/cases` | alteração de text | Não sugerir inventário maior que o existente | HUM-006 | singular/plural e escopo coerentes |
| V3-MAP-CASE-002 | `/cases` | `content/hora-city.ts:61`, `publicNarrative` | `CaseStudySection` | “Veja o Payload Tracing aplicado numa codebase real” | Narrar HORA.city | Estudantes, developers e equipes | Um flow reduz o território investigável | Observação derivada de caso | Fonte; sete seções e fatos renderizados | Alta | Baixa | Escala é documentada internamente, não verificada externamente | Médio | preservar integralmente | Centro de evidência | sem alteração | É o melhor exemplo de prudência e delimitação | evidências HORA.city | conhecido/desconhecido/status preservados |
| V3-MAP-CASE-003 | `/cases` | `content/hora-city.ts:106`, seções `evidence/current-status/omissions` | `CaseStudySection` | “Evidências” / “Estado atual” | Limitar conclusões | Todos os públicos | Investigação em andamento; origem e restauração não comprovadas | Fato confirmado sobre estado documental | Fonte; HTML e status observados | Alta | Baixa | Variante histórica diz “perdeu observabilidade” sem critério público | Alto | preservar integralmente | Centro de proveniência | criação de evidência | Manter prudência e futuramente publicar artefatos | HUM-006 | nenhum claim de resolução sem evidência |

## USMT

| ID | Rota atual | Arquivo de origem | Componente | Heading/trecho | Propósito atual | Público | Mensagem | Categoria | Evidência localizada | Clareza | Repetição | Contradição | Risco | Decisão | Destino | Ação futura | Justificativa | Dependências | Validação |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| V3-MAP-USMT-001 | `/usmt` | `content/usmt.ts:4`, `usmtContent` | `PageIntro` + `UsmtSection` | “USMT — Universal System Modeling Template” | Definir instrumento e proveniência | Developers, estudantes e pesquisadores | Modelo esperado torna comportamento verificável | Fato confirmado sobre método autoral | Fonte; H1, proveniência e JSON-LD observados | Alta | Baixa | Definição atual difere levemente da definição canônica | Baixo | preservar com microajuste | Intro canônica | criação de definição canônica | Unificar sem perder autoria | config/site, JSON-LD | nome, creator e definição coerentes |
| V3-MAP-USMT-002 | `/usmt` | `content/usmt.ts:17`, `elements` | `UsmtSection` | “Doze elementos para tornar o sistema investigável” | Explicitar estrutura | Público técnico | Estados, eventos, transições, limites e spec | Fato confirmado sobre estrutura autoral | Fonte; 12 elementos observados/verificados | Alta | Baixa | Nenhuma | Baixo | preservar integralmente | `/usmt` | sem alteração | Conteúdo autoral central | tipos, verifier | 12 IDs, ordem e termos preservados |
| V3-MAP-USMT-003 | `/usmt` | `content/usmt.ts:103`, `lenses` | `UsmtSection` | “Quatro lentes para investigar qualquer fluxo” | Orientar observação | Público técnico | WHERE/HOW/LOGIC/SAFE orientam tracing | Fato confirmado sobre estrutura autoral | Fonte; quatro lentes observadas/verificadas | Alta | Baixa | “qualquer fluxo” pode sugerir universalidade | Médio | preservar com microajuste | `/usmt` | alteração de texto | Manter lentes, limitar universalidade | contrato de claims | quatro lentes e escopo explícito |
| V3-MAP-USMT-004 | `/usmt` | `content/usmt.ts:145`, `connection` | `UsmtSection` | “Do modelo esperado ao comportamento observado” | Conectar modelagem e tracing | Público técnico | USMT modela; Journey observa; evidência confronta | Fato confirmado sobre modelo metodológico | Fonte e HTML observado | Alta | Média | Runtime aqui é conceito do sistema investigado, não evidência do site | Baixo | preservar integralmente | `/usmt` e síntese metodológica | sem alteração | Expressa a complementaridade central | METHOD-001 | relação e conclusão preservadas |

## Métodos

| ID | Rota atual | Arquivo de origem | Componente | Heading/trecho | Propósito atual | Público | Mensagem | Categoria | Evidência localizada | Clareza | Repetição | Contradição | Risco | Decisão | Destino | Ação futura | Justificativa | Dependências | Validação |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| V3-MAP-METHOD-001 | `/method` | `content/routes.ts:32`; `content/methods.ts:13`, `methodsSectionContent` | `PageIntro` + `MethodsSection` | “Cada método responde a uma pergunta diferente” | Distinguir instrumentos | Estudantes e profissionais | Procedimento é sequência; métodos são instrumentos | Fato confirmado sobre taxonomia autoral | Fonte; H1 e distinção observados | Alta | Baixa | “Métodos do LAB” ainda não inclui limites de validação | Baixo | preservar integralmente | Intro e mapa metodológico | sem alteração | Distinção evita confusão estrutural | definições canônicas | método/prática/protocolo continuam distintos |
| V3-MAP-METHOD-002 | `/method` | `content/methods.ts:28`, `methodsContent[0]` | `MethodsSection` | “Payload Journey” | Definir observação progressiva | Iniciantes | Seguir informação e representações | Fato confirmado sobre método autoral | Fonte e card renderizado | Alta | Média | Definição não é idêntica à canônica | Baixo | preservar com microajuste | Catálogo e possível página futura | criação de definição canônica | Evitar variações semânticas | HUM-003 | definição única em fonte e metadata futura |
| V3-MAP-METHOD-003 | `/method` | `content/methods.ts:47`, `methodsContent[1]` | `MethodsSection` | “USMT” | Definir modelagem | Público técnico | Explicitar estrutura e limites | Fato confirmado | Fonte e card renderizado | Alta | Média | CTA histórico diz página em desenvolvimento, mas `/usmt` existe em outra fonte preservada | Médio | reformular | Catálogo com link real a `/usmt` | alteração de CTA | Remover estado histórico se for renderizado no futuro | USMT-001 | nenhum CTA futuro incorreto no HTML |
| V3-MAP-METHOD-004 | `/method` | `content/methods.ts:71`, `methodsContent[2]` | `MethodsSection` | “Reverse Payload Journey” | Definir investigação reversa | Developers/investigadores | Partir de anomalia e reconstruir caminho | Fato confirmado sobre método autoral | Fonte e card renderizado | Alta | Média | Sem página ou caso detalhado próprio | Baixo | preservar integralmente | Catálogo; página depende de decisão | sem alteração | Definição é clara e usada no caso | HUM-003 | relação com caso/protocolo preservada |
| V3-MAP-METHOD-005 | `/method` | `content/methods.ts:91`, `methodsContent[3]` | `MethodsSection` | “Operational Payload Path” | Definir instrumento de mapping | Público técnico | Transformar arquitetura abstrata em rota investigável | Fato confirmado sobre instrumento autoral | Fonte e card renderizado | Alta | Baixa | Definição canônica aprovada inclui caminho provável ou confirmado | Baixo | preservar com microajuste | Catálogo; possível página | criação de definição canônica | Alinhar escopo e estatuto do mapa | HUM-003 | definição e capitalização únicas |
| V3-MAP-METHOD-006 | `/method` | `content/methods.ts:111`, `methodsContent[4]` | `MethodsSection` | “Track to Origin” | Definir busca por origem/autoridade | Público técnico | Rastrear primeira decisão relevante | Fato confirmado sobre prática autoral | Fonte e card renderizado | Alta | Média | Chamado “processo” aqui e “prática” no contrato | Médio | reformular | Catálogo; possível página | criação de definição canônica | Escolher estatuto canônico sem perder função | HUM-003 | terminologia consistente entre páginas |

## Protocolo

| ID | Rota atual | Arquivo de origem | Componente | Heading/trecho | Propósito atual | Público | Mensagem | Categoria | Evidência localizada | Clareza | Repetição | Contradição | Risco | Decisão | Destino | Ação futura | Justificativa | Dependências | Validação |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| V3-MAP-PROTO-001 | `/protocol` | `content/routes.ts:39`, `thematicRoutes.protocol` | `PageIntro` | “Congelar, Mapear, Detectar e Restaurar” | Introduzir sequência | Developers/investigadores | Preservar, evidenciar, localizar e validar | Fato confirmado sobre protocolo autoral | Fonte; H1/metadata observados | Alta | Média | “processo operacional” pode parecer validado universalmente | Médio | preservar com microajuste | Intro canônica | alteração de texto | Marcar como protocolo do LAB | claims | estatuto explícito no HTML e metadata |
| V3-MAP-PROTO-002 | `/protocol` | `content/methods.ts:132`, `investigationCycle` | `InvestigationCycleSection` | Quatro etapas detalhadas | Documentar execução | Público técnico | Cada etapa tem pergunta, inputs, atividades, resultado e evidência | Fato confirmado sobre especificação; eficácia é hipótese | Fonte; quatro IDs ordenados observados | Alta | Baixa | Resultados no indicativo podem sugerir garantia | Médio | preservar com microajuste | `/protocol` | alteração de texto | Preservar rigor e evitar promessa automática | CASE-002 | estrutura completa e linguagem prudente |

## Prática investigativa

| ID | Rota atual | Arquivo de origem | Componente | Heading/trecho | Propósito atual | Público | Mensagem | Categoria | Evidência localizada | Clareza | Repetição | Contradição | Risco | Decisão | Destino | Ação futura | Justificativa | Dependências | Validação |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| V3-MAP-INV-001 | `/investigation` | `content/routes.ts:46`, `thematicRoutes.investigation` | `PageIntro` | “Do Track Mode à investigação de sistemas” | Introduzir prática | Developers e estudantes | Observar antes de modificar e seguir autoridade | Fato confirmado sobre proposta autoral | Fonte; H1/metadata observados | Alta | Média | CTA do topo leva à Udemy antes de explicar prática | Médio | preservar com microajuste | Intro de `/investigation` | alteração de CTA | Próximo passo deve seguir arquitetura, não interrompê-la | HUM-004, GLOBAL-001 | CTA aprovado e contexto completo |
| V3-MAP-INV-002 | `/investigation` | `content/methods.ts:307`, `trackMode` | `InvestigationPracticeSection` | “Track Mode” | Definir estado operacional | Investigadores | Suspender mudanças e observar | Fato confirmado sobre definição autoral | Fonte e card renderizado | Alta | Baixa | Nenhuma | Baixo | preservar integralmente | `/investigation` | sem alteração | Definição clara e coerente | glossário | ações e princípio preservados |
| V3-MAP-INV-003 | `/investigation` | `content/methods.ts:322`, `traceEngineer` | `InvestigationPracticeSection` | “Trace Engineer” | Definir função/perfil | Públicos primários | Reconstruir flows, evidenciar e rastrear autoridade | Ambição futura no estatuto profissional; fato sobre definição autoral | Fonte e card renderizado | Média | Média | Em `/lab` aparece como profissionais a formar | Alto | reformular | Seção canônica do perfil | criação de definição canônica | Congelar função em desenvolvimento, não profissão consolidada | HUM-002 | ressalva explícita e responsabilidades preservadas |
| V3-MAP-INV-004 | `/investigation` | `content/methods.ts:340`, `softwareSystemInvestigation` | `InvestigationPracticeSection` | “Software System Investigation” | Definir prática/campo | Público técnico e institucional | Modelagem, tracing, checkpoints e evidências | Fato sobre definição autoral; validação externa ausente | Fonte e card renderizado | Alta | Média | `/lab` por vezes a chama campo de estudo/capacidade | Médio | reformular | Definição canônica | criação de definição canônica | Unificar “prática ou campo investigativo” | LAB-003 | definição e estatuto iguais em todas as rotas |

## O LAB

| ID | Rota atual | Arquivo de origem | Componente | Heading/trecho | Propósito atual | Público | Mensagem | Categoria | Evidência localizada | Clareza | Repetição | Contradição | Risco | Decisão | Destino | Ação futura | Justificativa | Dependências | Validação |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| V3-MAP-LAB-001 | `/lab` | `content/routes.ts:59`; `content/payload-journey-lab.ts:379`, `siteContent.lab` | `PageIntro` + `LabOverviewSection` | “Formação, pesquisa e investigação aplicada” | Identidade e origem | Todos os públicos | LAB ensina, modela e investiga pelo flow | Fato confirmado sobre identidade declarada | Fonte; H1/metadata e conteúdo observados | Alta | Alta | Repete sínteses da homepage e ecossistema | Médio | condensar | Abertura institucional | alteração de ordem | Abrir por missão/hipótese e reduzir duplicação | HOME-008 | propósito, origem e tese aparecem cedo |
| V3-MAP-LAB-002 | `/lab` | `content/payload-journey-lab.ts:407`, `founder` | `LabOverviewSection` | “Fundadora” | Narrar origem e autoria | Público institucional | Experiência pessoal originou LAB, USMT e métodos | Fato documentado internamente + observação pessoal | Fonte e biografia renderizada | Alta | Baixa | “horas de tentativa e erro” e causalidade não têm evidência pública localizada | Alto | preservar com microajuste | Seção de autoria | alteração de texto | Preservar voz autoral e distinguir relato de comprovação | HUM-010 | autoria intacta; observações marcadas como relato |
| V3-MAP-LAB-003 | `/lab` | `content/payload-journey-lab.ts:426`, `currentState` | `LabConstructionSection` | “Mais do que conteúdo” | Definir unidade aplicada | Público institucional | Campo, prática e ambiente aplicado | Ambição futura + fato sobre organização declarada | Fonte e conteúdo renderizado | Média | Média | “Trace Engineering: prática profissional” conflita com perfil em desenvolvimento | Alto | reformular | Estado atual do LAB | alteração de texto | Separar o que existe do que está sendo formalizado | INV-003–004 | estatutos canônicos explícitos |
| V3-MAP-LAB-004 | `/lab` | `content/payload-journey-lab.ts:456`, `humanAi` | `LabConstructionSection` | “Human direction · AI assistance” | Definir IA/humano | Todos os públicos | IA auxilia; direção e responsabilidade são humanas | Fato confirmado sobre posição institucional | Fonte; HTML observado; protegido por verifier | Alta | Baixa | Nenhuma | Baixo | preservar integralmente | Após missão/origem | sem alteração | Conteúdo central que não pode ser perdido | contrato IA | texto integral e posição central preservados |
| V3-MAP-LAB-005 | `/lab` | `content/payload-journey-lab.ts:463`, `earlyFormation` | `LabConstructionSection` | “Por que formar estudantes e developers desde cedo” | Justificar público | Públicos primários | Tracing complementa formação e pode antecipar capacidades | Hipótese investigativa | Fonte e HTML observado | Média | Média | “já não são suficientes” e “mais preparados estarão” soam factuais | Alto | reformular | Hipótese pedagógica | alteração de texto | Usar condicional e explicitar esforço | claims CL-006/007 | nenhuma eficácia apresentada como fato |
| V3-MAP-LAB-006 | `/lab` | `content/payload-journey-lab.ts:492`, `pilot` | `LabConstructionSection` | “Seis meses para demonstrar que o laboratório existe” | Definir piloto e teste | Institucional, parceiros | Formalizar, aplicar, evidenciar, ensinar e transferir | Ambição futura | Fonte e conteúdo renderizado | Alta | Baixa | Prazo sem data inicial; “método reproduzível” antecede demonstração | Alto | decisão humana necessária | Estado atual/piloto | decisão humana | Atualidade e critério precisam de confirmação | HUM-001, HUM-007 | marco datado; critérios não confundidos com resultados |
| V3-MAP-LAB-007 | `/lab` | `content/payload-journey-lab.ts:543`, `longTerm` | `LabConstructionSection` | “Estabelecer uma capacidade para a engenharia...” | Expressar visão | Públicos secundários | Trace Engineering reconhecível e avanço a sistemas críticos | Ambição futura | Fonte e conteúdo renderizado | Alta | Baixa | Pode sugerir prontidão mission-critical | Alto | manter como ambição | Visão futura | alteração de texto | Marcar explicitamente ausência de validação | HUM-008 | verbos de intenção; nenhum claim de domínio |
| V3-MAP-LAB-008 | `/lab` | `content/payload-journey-lab.ts:563`, `publicCommitment` | `LabConstructionSection` | “Compreender antes de modificar” | Compromisso público | Todos os públicos | Rigor, hipótese/evidência e não ampliação de fatos | Fato confirmado sobre compromisso declarado | Fonte e conteúdo renderizado | Alta | Média | “recuperar autoridade” pode soar como resultado | Baixo | preservar com microajuste | Fechamento de `/lab` | alteração de texto | Preservar princípio, evitar promessa | contrato | compromisso e prudência intactos |

## Ecossistema

| ID | Rota atual | Arquivo de origem | Componente | Heading/trecho | Propósito atual | Público | Mensagem | Categoria | Evidência localizada | Clareza | Repetição | Contradição | Risco | Decisão | Destino | Ação futura | Justificativa | Dependências | Validação |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| V3-MAP-ECO-001 | `/ecosystem` | `content/payload-journey-lab.ts:582`, `ecosystem.pillars` | `ConceptEcosystemSection` | “Quatro áreas conectadas pelo mesmo propósito” | Organizar atuação | Públicos primários e secundários | Formação, pesquisa, investigação e colaboração | Fato confirmado sobre arquitetura declarada | Fonte; quatro pilares renderizados | Alta | Média | Resultados dos pilares estão no indicativo e podem soar alcançados | Médio | preservar com microajuste | `/ecosystem` | alteração de texto | Distinguir atividades existentes de resultados esperados | claims | cada pilar marca estado e resultado corretamente |
| V3-MAP-ECO-002 | `/ecosystem` | `content/payload-journey-lab.ts:627`, pilar `collaboration` | `ConceptEcosystemSection` | “Colaboração” | Abrir possibilidades | Educadores, equipes, organizações | Pilotos, estudos e pesquisa aplicada possíveis | Ambição futura | Fonte e card renderizado | Média | Baixa | Não existe canal de contato confirmado | Alto | aguardar evidência | Porta de colaboração | decisão humana | Não criar CTA ou parceria fictícia | HUM-005 | canal aprovado antes de CTA ativo |

## LabLog

| ID | Rota atual | Arquivo de origem | Componente | Heading/trecho | Propósito atual | Público | Mensagem | Categoria | Evidência localizada | Clareza | Repetição | Contradição | Risco | Decisão | Destino | Ação futura | Justificativa | Dependências | Validação |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| V3-MAP-LABLOG-001 | `/lablog` | `content/site.ts:175`, `labLogContent` | `LabLogSection` | “Acompanhe o LAB em movimento” | Registro público e ponte ao YouTube | Todos os públicos | LabLog registra flows, anomalias e métodos | Fato sobre intenção/canal; evidência de registros não está na rota | Fonte; tema/CTA renderizados; destino externo observado | Média | Média | Página promete registros, mas mostra somente temas; dois canais YouTube divergem | Alto | reformular | Centro de proveniência datado | criação de evidência | A rota deve mostrar itens, datas, estado e artefatos | HUM-005, Sprint 5 | entradas verificáveis e canal canônico |

## Superfícies globais, metadata e guardrails

| ID | Rota atual | Arquivo de origem | Componente | Heading/trecho | Propósito atual | Público | Mensagem | Categoria | Evidência localizada | Clareza | Repetição | Contradição | Risco | Decisão | Destino | Ação futura | Justificativa | Dependências | Validação |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| V3-MAP-GLOBAL-001 | todas | `content/site.ts:75`, `siteNavigation`; `SiteHeader.tsx` | `SiteHeader`, `MobileNavigation` | Método, Aprender, Casos, O LAB | Navegação principal | Todos os públicos | Quatro entradas e CTA “Começar” | Fato confirmado | Fonte; navegação inicial observada em 11 páginas | Alta | Baixa | USMT, protocolo, investigação, ecossistema e LabLog ficam indiretos | Médio | reformular | Header V3 | alteração de navegação | Navegação deve refletir perguntas e jornada | Sprint 6 | desktop/mobile iguais; destinos válidos |
| V3-MAP-GLOBAL-002 | todas | `content/site.ts:214`, `footerContent`; `SiteFooter.tsx` | `SiteFooter` | O LAB, Métodos, Study Case, Formação, LabLog | Navegação secundária/canais | Todos | Identidade, rotas e canais | Fato confirmado | Fonte; Footer observado; links externos validados | Alta | Baixa | “Study Case” destoa do PT-BR; YouTube diverge do LabLog | Médio | preservar com microajuste | Footer V3 | alteração de navegação | Padronizar idioma e canal | HUM-005 | canal único; links e labels aprovados |
| V3-MAP-GLOBAL-003 | todas | `app/layout.tsx`; `lib/metadata.ts`; `content/routes.ts` | metadata do App Router | title, description, canonical, OG, Twitter | Descoberta e resumo | Humanos, crawlers e agentes | Descrever entidade e tema de cada rota | Fato confirmado sobre implementação | Fonte; canonical/metadata observados em 11 rotas | Alta | Baixa | Tese nova não governa descriptions; sem imagem OG oficial | Médio | reformular | Metadata por página | alteração de metadata | Alinhar snippets ao contrato após conteúdo | Sprint 7 | title/description únicos e claims prudentes |
| V3-MAP-GLOBAL-004 | `/`, `/lab`, `/usmt` e demais | `lib/structured-data.ts`; `JsonLd.tsx` | `JsonLd` | WebSite/WebPage/Person/CreativeWork | Entidades e proveniência | Crawlers/agentes | LAB, fundadora e USMT com IDs estáveis | Fato confirmado sobre implementação | Fonte; JSON-LD parseado em 11 rotas por execução observada | Alta | Baixa | Sem entidade para curso/caso; `Organization` omitido deliberadamente | Baixo | preservar com microajuste | Structured data V3 | alteração de conteúdo estruturado | Só adicionar entidades sustentadas pelo conteúdo aprovado | Sprint 7 | JSON válido, texto visível coerente, sem entidade inventada |
| V3-MAP-GLOBAL-005 | infraestrutura | `app/sitemap.ts`; `app/robots.ts`; `content/routes.ts` | Metadata routes | 11 URLs; crawler policy | Descoberta | Crawlers | Busca e ações permitidas; GPTBot bloqueado | Fato confirmado | Fonte; sitemap/robots observados | Alta | Baixa | Nenhuma; política de treino é decisão separada | Baixo | preservar integralmente | Infraestrutura | sem alteração | Política atual é deliberada e validada | Sprint 7 | 11 URLs, host e regras preservados |
| V3-MAP-GLOBAL-006 | `/about` e hosts | `next.config.mjs:3` | configuração Next | redirects permanentes | Canonicalizar host e compatibilidade | Todos | Apex → www; about → lab#sobre | Fato confirmado sobre configuração e execução local | Fonte; 308 local observado; hospedagem pública não validada | Alta | Baixa | Comportamento da hospedagem não está provado | Médio | preservar integralmente | Redirects | sem alteração | Não confundir config/local com produção | deploy futuro | validar publicamente após deploy |
| V3-MAP-GLOBAL-007 | todas | `scripts/verify-homepage.mjs` | verificador | conteúdo preservado e contratos HTTP | Guardrail | Equipe | Protege strings, rotas, H1, links e decisões | Fato confirmado | Fonte; execução aprovada | Alta | Baixa | Strings exatas podem bloquear refactor editorial legítimo | Alto | reformular | Guardrail V3 | alteração de verificador | Atualizar somente após contrato e migração aprovados | Sprints 1–7 | novos contratos testados; preservação comprovada |
| V3-MAP-GLOBAL-008 | todas | `scripts/verify-ai-readiness.mjs` | verificador | canonical, entidades, proveniência | Guardrail semântico | Equipe | Protege host, USMT, JSON-LD e contexto | Fato confirmado | Fonte; execução aprovada | Alta | Baixa | Hosting continua fora da validação local | Médio | preservar com microajuste | Guardrail V3 | alteração de verificador | Acrescentar contratos só após conteúdo aprovado | Sprint 7 | local/público separados no resultado |
| V3-MAP-GLOBAL-009 | todas | `scripts/verify-design-foundation.mjs` | verificador | tokens, contraste, Server Components | Guardrail visual/técnico | Equipe | Preserva foundation e limites de client | Fato confirmado | Fonte; execução aprovada | Alta | Baixa | Não certifica WCAG ou QA visual humano | Baixo | preservar integralmente | Guardrail V3 | sem alteração | Refactor é narrativo; foundation deve permanecer | todas as sprints | zero regressão de tokens/client boundaries |

## Contagem do mapa

O Mapa de Preservação e Migração contém **55 itens**:

- homepage: 9;
- Payload Journey: 4;
- formação: 3;
- casos: 3;
- USMT: 4;
- métodos: 6;
- protocolo: 2;
- prática investigativa: 4;
- LAB: 8;
- ecossistema: 2;
- LabLog: 1;
- superfícies globais: 9.

# Matriz de preservação

## Conteúdos que não podem ser perdidos

| Conteúdo | IDs do mapa | Regra |
| --- | --- | --- |
| Tese, público e prudência editorial | HOME-006, LAB-005, LAB-008 | Preservar estatuto de hipótese e compromisso com evidência. |
| Payload como fio condutor | HOME-001/002, PJ-001/002/004 | Preservar definição, demonstração e caráter pedagógico. |
| Origem do LAB e narrativa da fundadora | LAB-001/002 | Preservar autoria; separar relato e evidência. |
| Relação IA–autoridade humana | LAB-004 | Preservar integralmente. |
| USMT, autoria, 12 elementos e quatro lentes | USMT-001–004 | Preservar estrutura e proveniência. |
| Cinco métodos/instrumentos | METHOD-002–006 | Preservar definições e relações; unificar estatutos. |
| Protocolo de quatro etapas | PROTO-001/002 | Preservar sequência, inputs, atividades e evidências. |
| Software System Investigation e Trace Engineering | INV-003/004 | Preservar conceitos; corrigir estatuto profissional. |
| HORA.city e desconhecidos explícitos | CASE-001–003 | Preservar fatos, estado inconclusivo e omissões. |
| Compromissos e teste do piloto | LAB-006 | Preservar conteúdo; decidir prazo e estado. |
| Direção distribuída/mission-critical | LAB-007 | Manter exclusivamente como ambição. |
| Robots, sitemap, canonical e entidades confirmadas | GLOBAL-003–006 | Preservar contratos técnicos e não inventar entidades. |

## Conteúdos que podem ser condensados, movidos ou fundidos

| Conteúdo | IDs | Decisão futura |
| --- | --- | --- |
| Repetições de flow/payload/transformação | HOME-002/003, PJ-002/003/004, LEARN-002 | Definir uma página canônica e usar sínteses contextuais. |
| Síntese institucional repetida | HOME-005/008, LAB-001, ECO-001 | Condensar homepage e manter aprofundamento em `/lab`/`/ecosystem`. |
| Benefícios educacionais repetidos | HOME-006, LEARN-001–003, LAB-005 | Fundir sob taxonomia de hipótese e distribuir por intenção. |
| CTAs repetidos de Udemy | HOME-009, LEARN-003, INV-001 | Decidir peso comercial e manter apenas nos pontos aprovados. |
| Introduções metodológicas equivalentes | HOME-003, METHOD-001, PROTO-001, INV-004 | Manter uma frase canônica por conceito. |
| Demo integral duplicada | HOME-002, PJ-004 | Preservar por ora; decidir se homepage mantém versão integral. |

## Conteúdos que exigem decisão humana

| ID humano | Decisão | Conteúdo relacionado |
| --- | --- | --- |
| HUM-001 | O marco “seis meses” continua ativo? Qual data inicial e estado atual? | LAB-006 |
| HUM-002 | Como apresentar publicamente Trace Engineer enquanto função/perfil em desenvolvimento? | INV-003, LAB-003/007 |
| HUM-003 | Criar páginas próprias para métodos ou aprofundar `/method`? | METHOD-002–006 |
| HUM-004 | Qual deve ser o peso da Udemy e dos CTAs comerciais? | HOME-009, LEARN-003, INV-001 |
| HUM-005 | Qual é o canal oficial de YouTube e qual canal de colaboração/contato será publicado? | ECO-002, LABLOG-001, GLOBAL-002 |
| HUM-006 | Quais artefatos públicos podem sustentar os fatos e observações do HORA.city? | CASE-001–003 |
| HUM-007 | Quais critérios e replicações autorizam declarar transferibilidade/reprodutibilidade? | LAB-006, PROTO-002 |
| HUM-008 | Em que momento termos mission-critical podem aparecer além da visão futura? | LAB-007 |
| HUM-009 | Qual formulação final da tese será usada no Hero e na metadata? | HOME-001/006, GLOBAL-003 |
| HUM-010 | Qual nível de exposição da experiência pessoal da fundadora será mantido? | LAB-002 |

# Inventário de Claims

| ID | Texto atual ou síntese fiel | Rota | Arquivo / evidência de fonte | Categoria | Evidência localizada | Risco | Formulação futura recomendada | Decisão humana | Sprint |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CL-001 | “Sistemas podem crescer mais rapidamente do que a nossa capacidade de explicá-los.” | `/lab` | `content/payload-journey-lab.ts:390` | Hipótese investigativa | Relato institucional; sem estudo externo no repositório | Pode soar como lei geral | “Com agentes de IA, a distância entre código produzido e sistema compreendido pode aumentar.” | Aprovar formulação do Hero | 1–2 |
| CL-002 | HORA.city passou de aproximadamente 6 mil para 40 mil linhas. | `/cases` | `content/hora-city.ts:5–12`; fatos renderizados | Fato confirmado no repositório | Fonte de caso interna; HTML observado | Pode ser interpretado como medição independente | “A escala registrada pelo caso passou de aproximadamente 6 mil para 40 mil linhas.” | Definir artefato público | 5 |
| CL-003 | A expansão do HORA.city causou perda de observabilidade estrutural. | Conteúdo preservado do caso | `content/hora-city.ts:45–47`, variante `audited` | Observação derivada de caso | Relato editorial interno; não integra a narrativa pública principal | Relação causal e critério de “perda” não localizados | “No caso, o crescimento foi acompanhado por perda percebida de visibilidade sobre determinados flows.” | Evidência pública do caso | 5 |
| CL-004 | Métodos podem ajudar a construir mais cedo um modelo mental confiável. | `/` | `content/routes.ts:138` | Hipótese investigativa | Declarada explicitamente como investigação | Baixo se a prudência for preservada | Manter a formulação condicional e indicar como será avaliada. | Critérios de avaliação | 1/3/5 |
| CL-005 | A capacidade pode gerar perguntas melhores, menor dependência e maior autonomia. | `/` | `content/routes.ts:139–140` | Hipótese investigativa | O texto já diz que não é resultado comprovado | Pode ser repetida como benefício factual noutras páginas | “O LAB investiga se a prática pode contribuir para...” | Métricas do piloto | 1/3/5 |
| CL-006 | Formação tradicional “já não é suficiente” para sistemas com agentes de IA. | `/lab` | `content/payload-journey-lab.ts:466` | Hipótese investigativa formulada excessivamente | Nenhuma evidência comparativa localizada | Generalização sobre educação | “O LAB investiga uma capacidade complementar às formações existentes.” | Aprovar posição pedagógica | 2 |
| CL-007 | Quanto mais cedo aprenderem, mais preparados estarão. | `/lab` | `content/payload-journey-lab.ts:468` | Hipótese investigativa | Nenhuma avaliação educacional concluída | Resultado apresentado no futuro do indicativo | “O LAB investiga se começar mais cedo pode contribuir para...” | Critérios pedagógicos | 2–3 |
| CL-008 | Entrar em codebases com estratégia permite conquistar autonomia mais rapidamente. | `/lab` | `content/payload-journey-lab.ts:416` | Hipótese investigativa em narrativa pessoal | Relato da intenção do LAB, não resultado | Promessa de onboarding/autonomia | “O objetivo é investigar se a estratégia pode apoiar autonomia progressiva.” | Exposição da biografia | 2 |
| CL-009 | IA torna o processo de investigação mais produtivo. | `/lab` | `content/payload-journey-lab.ts:459` | Observação institucional | Descrição do uso interno; sem métrica de produtividade | “Produtivo” pode implicar ganho demonstrado | “A IA apoia exploração, documentação e confronto de hipóteses.” | Nenhuma, se reformulado | 2 |
| CL-010 | O LAB possui método reproduzível e capacidade de formar outras pessoas. | `/lab` | `content/payload-journey-lab.ts:495` | Ambição futura apresentada como critério do piloto | O parágrafo diz que o objetivo é produzir evidência | Pode soar como capacidade atual | “O piloto procura avaliar reprodutibilidade e capacidade formativa.” | Critério de reprodutibilidade | 2/5 |
| CL-011 | Quando uma pessoa externa repetir o protocolo, haverá capacidade transferível. | `/lab` | `content/payload-journey-lab.ts:536–539` | Ambição futura / critério | Teste definido, mas não registrado como concluído | Uma execução pode não sustentar generalização | “Uma replicação externa será uma evidência inicial de transferibilidade.” | Quantidade e padrão de replicações | 2/5 |
| CL-012 | Trace Engineers são profissionais capazes de seguir flow e produzir evidências. | `/lab` | `content/payload-journey-lab.ts:416`; `methods.ts:322` | Ambição futura; definição autoral atual | Perfil é definido, profissão externa não é comprovada | Sugere cargo reconhecido | “Trace Engineer é uma função e perfil investigativo em desenvolvimento no LAB.” | Estatuto público | 2/4 |
| CL-013 | O curso desenvolve a visão necessária para pensar como Trace Engineer. | `/learn`/conteúdo | `content/site.ts:112–115` | Hipótese investigativa com tom promocional | Curso existe; resultado não foi avaliado | Promessa educacional forte | “A formação introduz capacidades que integram o perfil investigativo em desenvolvimento.” | Peso e promessa da Udemy | 3 |
| CL-014 | HORA.city é caso real utilizado pelo LAB. | `/cases` | `content/hora-city.ts:39–46`; narrativa renderizada | Fato confirmado no repositório | Caso, ID, projeto e estado documentados | Baixo; “real” depende da fonte do LAB | Manter e associar artefatos públicos quando disponíveis. | Evidência pública | 5 |
| CL-015 | A investigação HORA.city está em andamento, sem origem/restauração comprovada. | `/cases` | `content/hora-city.ts:113–120`, `omissions` | Fato confirmado sobre estado documental | Texto renderizado e protegido por verificador | Pode ficar desatualizado sem data | Adicionar data de estado e histórico de atualização. | Cadência editorial | 5 |
| CL-016 | O LAB avança para sistemas distribuídos, industriais e mission-critical. | `/lab` | `content/payload-journey-lab.ts:546–560` | Ambição futura | Marcado como visão de longo prazo | Pode sugerir experiência existente | “Esses contextos são direção futura de aprofundamento, ainda não demonstrada.” | Termos permitidos | 2/3 |
| CL-017 | O LAB pode contribuir para reconhecimento do Brasil em investigação de sistemas. | `/lab` | `content/payload-journey-lab.ts:560` | Ambição futura | Declaração aspiracional | Pode soar grandiosa sem trajetória demonstrada | Manter como ambição cultural, separada de resultados. | Manter ou condensar | 2 |
| CL-018 | O LabLog registra flows, anomalias, decisões e desenvolvimento público. | `/lablog` | `content/site.ts:175–196`; página renderizada | Fato sobre intenção editorial | A rota mostra temas e link, não entradas | Promessa de arquivo público ainda não materializada na página | “O LabLog pretende reunir...” até haver inventário datado. | Canal oficial | 5/6 |
| CL-019 | Software System Investigation e Trace Engineering devem tornar-se práticas reconhecíveis. | `/lab` | `content/payload-journey-lab.ts:546` | Ambição futura | Declaração de longo prazo | “Reconhecíveis” pode ser lido como reconhecimento atual | Manter verbo de intenção e estatuto autoral. | Estatuto do campo/perfil | 2/4 |
| CL-020 | Tracing substitui arquitetura, debugging ou observabilidade. | Não afirmado; risco preventivo | `content/payload-journey-lab.ts:466–489` nega substituição | Fato confirmado sobre posição editorial | Texto distingue quatro perspectivas e diz que tracing não substitui | Perda dessa ressalva no refactor | Preservar explicitamente a complementaridade. | Nenhuma | 2/4 |
| CL-021 | Redução de onboarding, custos, bugs, empregabilidade ou eficácia universal. | Não afirmado como resultado atual | Busca no conteúdo e auditoria de fonte | Claim proibido sem evidência | Nenhuma evidência localizada | Alto se introduzido no futuro | Não publicar como resultado até existir método, baseline e evidência apropriados. | Critério de prova | Todas |

## Contagem do inventário

O Inventário de Claims contém **21 itens**:

- fatos confirmados: 3 (`CL-002`, `CL-014`, `CL-015`);
- observações derivadas de caso ou uso interno: 2 (`CL-003`, `CL-009`);
- hipóteses investigativas: 7 (`CL-001`, `CL-004`–`CL-008`, `CL-013`);
- ambições futuras: 6 (`CL-010`–`CL-012`, `CL-016`, `CL-017`, `CL-019`);
- claims preventivos, de política ou mistos: 3 (`CL-018`, `CL-020`, `CL-021`).

As categorias primárias somam os 21 itens. `CL-012` e `CL-018` também possuem nuances secundárias registradas nas próprias linhas.

# Glossário editorial

| Termo canônico | Definição | Capitalização/idioma | Variantes encontradas | Evitar | Páginas principais | Relação |
| --- | --- | --- | --- | --- | --- | --- |
| Payload | Informação ou representação transportável associada a uma intenção, evento ou operação. | minúscula em uso comum; inglês técnico | payload, informação, dados estruturados | tratar todo objeto como payload sem delimitação | `/`, `/payload-journey`, `/learn` | fio observado por Payload Tracing |
| Payload Journey | Seguir operação por representações, camadas, interpretações, decisões, estados e efeitos. | Nome próprio em inglês | Payload Journey, jornada do payload | definições concorrentes | `/payload-journey`, `/method` | método apoiado por tracing |
| Payload Tracing | Acompanhar payload e transformações para reconstruir flow e causalidade. | Nome da prática; inglês técnico | payload tracing, tracing, Tracing | usar como sinônimo de debugging | `/`, `/payload-journey`, `/learn` | prática usada no Journey |
| Flow | Recorte operacional que conecta origem, representações, decisões, estado e efeito. | minúscula; inglês técnico | flow, fluxo, caminho | alternância sem critério | todas as páginas metodológicas | unidade investigável |
| Runtime | Momento/ambiente em que o comportamento do sistema investigado se manifesta. | minúscula; inglês técnico | runtime, execução | usar build do site como evidência de runtime | `/usmt`, `/investigation`, `/lab` | comportamento observado |
| Checkpoint | Ponto deliberado de observação e coleta de evidência num flow. | minúscula; inglês técnico | checkpoint, checkpoints | ponto genérico sem evidência | `/protocol`, `/cases`, `/learn` | torna estados comparáveis |
| Causalidade | Relação investigada entre eventos, decisões, transformações e efeitos. | PT-BR | causalidade | atribuição causal sem evidência | `/investigation`, `/cases` | objetivo do tracing |
| Autoridade | Local, regra ou responsabilidade que determina uma decisão relevante. | PT-BR | authority, autoridade temporal | pessoa/cargo quando se trata de regra técnica | `/investigation`, `/cases`, `/protocol` | alvo de Track to Origin |
| Evidência | Registro verificável que sustenta comparação, afirmação ou conclusão delimitada. | PT-BR | evidência, fatos técnicos | usar intenção ou build como prova de eficácia | todas | base da prudência editorial |
| Software System Investigation | Prática estruturada de compreender sistemas por modelagem, tracing, checkpoints, runtime e evidências. | Nome próprio em inglês | prática, campo de estudo, investigação de sistemas | profissão consolidada | `/investigation`, `/lab` | reúne método e protocolo |
| Trace Engineering | Capacidades para seguir operações, localizar decisões, confrontar modelo/execução e explicar com evidências. | Nome próprio em inglês | prática profissional, capacidade | disciplina validada externamente | `/investigation`, `/lab` | conjunto aplicado pelo perfil |
| Trace Engineer | Função e perfil investigativo em desenvolvimento que aplica Trace Engineering. | Nome próprio em inglês | profissional, função investigativa | cargo oficial, certificação, profissão reconhecida | `/investigation`, `/lab`, `/learn` | aplica capacidades investigativas |
| Track Mode | Estado operacional que suspende mudanças especulativas e prioriza observação. | Nome próprio em inglês | track mode, TRACK MODE | processo completo | `/investigation` | entrada da prática |
| USMT | Instrumento para explicitar modelo esperado de estados, eventos, transições, regras, invariantes e limites. | sigla; `Universal System Modeling Template` | Model Template histórico | expansão incorreta da sigla | `/usmt`, `/method` | modelagem esperada |
| Reverse Payload Journey | Investigação que parte de anomalia/efeito e percorre o flow em direção à origem causal. | Nome próprio em inglês | RPJ, reverse | mera navegação reversa | `/method`, `/learn`, `/cases` | método investigativo |
| Operational Payload Path | Representação do caminho operacional provável ou confirmado entre componentes e camadas. | Nome próprio em inglês | Mapping, mapa operacional | declarar caminho provável como confirmado | `/method`, `/protocol` | instrumento de mapeamento |
| Track to Origin | Prática de continuar tracing até origem e autoridade da decisão. | Nome próprio em inglês | processo investigativo, missão | prometer causa definitiva | `/method`, `/learn`, `/cases` | etapa rumo à autoridade |
| Congelar, Mapear, Detectar e Restaurar | Protocolo geral para preservar, reconstruir, localizar e validar. | PT-BR; iniciais maiúsculas em título | FREEZE/MAP/DETECT/RESTORE | apresentar resultado automático | `/protocol` | organiza uso dos métodos |
| Modelagem | Explicitação do comportamento esperado e seus limites. | PT-BR | modeling, system modeling | confundir com diagrama apenas | `/usmt`, `/investigation` | confrontada com runtime |
| Restauração | Mudança delimitada e validada pelo mesmo flow investigado. | PT-BR | restore, restauração | sinônimo de correção não validada | `/protocol`, `/investigation` | etapa final do protocolo |
| Mission-critical | Contexto em que falha pode produzir consequências críticas e exige rigor elevado. | inglês técnico com hífen | mission critical, sistemas críticos | competência atual do LAB | `/lab`, futura `/learn` | direção futura |
| Requirements-to-runtime traceability | Relação rastreável entre requisitos e comportamento observado em execução. | inglês técnico | traceability, requisitos-to-runtime | capacidade atual demonstrada | visão futura | Nível 5 pedagógico |

## Variantes linguísticas a substituir futuramente

| Encontrada | Canônica PT-BR | Evidência de fonte |
| --- | --- | --- |
| `objectivo` | `objetivo` | `content/payload-journey-lab.ts`, piloto |
| `actuação` | `atuação` | visão de longo prazo |
| `arquitectura` | `arquitetura` | formação e visão |
| `equipas` | `equipes` | homepage e `/lab` |
| `seleccionar` | `selecionar` | teste do piloto |
| `direcção` | `direção` | visão futura |
| `Navegacao` | `Navegação` | `SiteHeader.tsx` aria-label |
| `inicio` | `início` | `SiteHeader.tsx` aria-label |
| `METODOS` | `MÉTODOS` | conteúdo histórico em `methods.ts` |
| `DO METODO A PRATICA` | `DO MÉTODO À PRÁTICA` | `siteContent.education` |

As substituições são planejadas, não executadas nesta sprint.

# Mapa de progressão pedagógica

## Nível 1 — Operação concreta

| Campo | Contrato |
| --- | --- |
| Elementos | evento, payload, request, decisão, estado, efeito |
| Conteúdo disponível | Hero, demo de nove nós, problema de entrada, fundamentos da formação e primeiros passos da trilha. |
| Conteúdo apenas mencionado | Relação explícita e ordenada `evento → payload → camada → transformação → decisão → estado → efeito`. |
| Conteúdo ausente | Exercício público completo com evidências produzidas por estudante. |
| Resultado esperado | Delimitar uma operação e reconhecer a informação que a atravessa. |
| Claim permitido | “O conteúdo apresenta uma estratégia para começar por uma operação concreta.” |
| Claim ainda não permitido | “O estudante domina uma codebase depois de seguir um payload.” |
| Evidência de fonte | `homepageEntry.problem`, `flowDemo`, `trainingPresentation`. |
| Futuro responsável | Sprint 3. |

## Nível 2 — Flow entre camadas

| Campo | Contrato |
| --- | --- |
| Elementos | UI, application, interpretation, domain, persistence, projection |
| Conteúdo disponível | Demo com Interaction, Structured Payload, Request, API, Domain, Repository, Response, Projection e UI; oito learning outcomes. |
| Conteúdo apenas mencionado | Application e interpretation como categorias explícitas da progressão. |
| Conteúdo ausente | Variações de arquitetura e flows não lineares. |
| Resultado esperado | Reconstruir caminho, representações e responsabilidades de um flow delimitado. |
| Claim permitido | “A demo ensina a observar transformações e papéis entre camadas.” |
| Claim ainda não permitido | “A sequência representa todos os sistemas.” |
| Evidência de fonte/renderizado | `homepageEntry.flowDemo`; `PayloadFlowDemoSection`; nove nós observados. |
| Futuro responsável | Sprint 3, preservando `/payload-journey`. |

## Nível 3 — Investigação estruturada

| Campo | Contrato |
| --- | --- |
| Elementos | modelagem, invariantes, checkpoints, evidências, divergência, restauração |
| Conteúdo disponível | USMT, cinco métodos, protocolo, Track Mode, Trace Engineer, Software System Investigation e caso HORA.city em andamento. |
| Conteúdo apenas mencionado | Transferibilidade e reprodutibilidade completas. |
| Conteúdo ausente | Caso público concluído do congelamento à restauração validada e replicação externa. |
| Resultado esperado | Confrontar modelo e execução, localizar divergência e documentar evidências. |
| Claim permitido | “O LAB formalizou instrumentos e os aplica num caso em andamento.” |
| Claim ainda não permitido | “O protocolo é reproduzível, transferível ou eficaz de forma demonstrada.” |
| Evidência | `content/usmt.ts`, `methods.ts`, `hora-city.ts`; HTML observado nas rotas. |
| Futuro responsável | Sprints 4 e 5. |

## Nível 4 — Sistemas complexos

| Campo | Contrato |
| --- | --- |
| Elementos | múltiplos componentes, eventos, concorrência, mensagens, dependências, estados distribuídos |
| Conteúdo disponível | Referências gerais a sistemas complexos e distribuídos na visão do LAB. |
| Conteúdo apenas mencionado | Sistemas distribuídos e requisitos como horizonte. |
| Conteúdo ausente | Trilha, modelos, exercícios, caso público, concorrência, mensagens assíncronas e estados distribuídos detalhados. |
| Resultado esperado | Expandir tracing sem perder identidade, causalidade e estado entre componentes. |
| Claim permitido | “O LAB prepara uma direção de aprofundamento.” |
| Claim ainda não permitido | “O LAB formou ou validou competência em sistemas distribuídos.” |
| Evidência de fonte | `siteContent.lab.construction.longTerm`. |
| Futuro responsável | Planejamento posterior às Sprints 1–7; Sprint 3 apenas estrutura a ponte. |

## Nível 5 — Direção futura

| Campo | Contrato |
| --- | --- |
| Elementos | requisitos, timing, CAN, DBC, SysML/MBSE, V-Model, requirements-to-runtime traceability, sistemas industriais, mission-critical |
| Conteúdo disponível | Somente visão geral de requisitos, timing, indústria e mission-critical em `/lab`. |
| Conteúdo apenas mencionado | Requirements-to-runtime traceability. |
| Conteúdo ausente | CAN, DBC, SysML/MBSE, V-Model, formação, aplicação, caso e evidência. |
| Resultado esperado | Futuramente conectar requisitos, modelos e comportamento observado com rastreabilidade verificável. |
| Claim permitido | “Esses temas constituem direção futura.” |
| Claim ainda não permitido | Qualquer declaração de domínio, aplicação ou validação atual. |
| Evidência de fonte | `content/payload-journey-lab.ts:546–560`; itens adicionais congelados neste contrato. |
| Futuro responsável | Roadmap futuro sujeito a aprovação humana. |

# Mapa futuro de Sprints

## Sprint 1 — Homepage

| Campo | Plano |
| --- | --- |
| Objetivo | Fazer a homepage responder cedo por que agora, para quem e qual capacidade está sendo investigada. |
| Escopo | Hero, ordem das seções, dor, público, hipótese, demonstração, evidência, aprendizagem e CTAs. |
| Conteúdos afetados | HOME-001–009; sínteses relacionadas. |
| Riscos | Perder demo aprovada, aumentar texto inicial, duplicar `/lab`, quebrar âncoras e strings protegidas. |
| Dependências | Tese final `HUM-009`, peso da Udemy `HUM-004`, mapa de preservação. |
| Critérios de conclusão | Tese e público no primeiro percurso; demo intacta; hipótese explícita; todos os destinos válidos; responsividade e H1 preservados. |
| Claims que podem mudar | CL-001, CL-004, CL-005 — somente para reforçar prudência. |
| Claims proibidos | Empregabilidade, onboarding reduzido, produtividade ou eficácia comprovada. |

## Sprint 2 — LAB

| Campo | Plano |
| --- | --- |
| Objetivo | Separar missão, hipótese, origem, estado atual, piloto, visão e autoria. |
| Escopo | `/lab`, conteúdo institucional, founder, IA/humano, piloto, visão e compromisso. |
| Conteúdos afetados | LAB-001–008. |
| Riscos | Apagar autoria, reduzir nuance, manter claims contraditórios, quebrar `/about#sobre`. |
| Dependências | HUM-001, HUM-002, HUM-010; contrato de claims. |
| Critérios de conclusão | Todo conteúdo protegido rastreado; densidade reduzida; IDs/redirect preservados; fatos/hipóteses/ambições visíveis. |
| Claims que podem mudar | CL-001, CL-006–012, CL-016/017/019. |
| Claims proibidos | Profissão consolidada, piloto concluído, transferibilidade ou mission-critical demonstrados. |

## Sprint 3 — Formação

| Campo | Plano |
| --- | --- |
| Objetivo | Explicitar a progressão do evento ao efeito e a direção para flows complexos. |
| Escopo | `/learn`, percurso, objetivos, esforço, estados disponível/futuro e formação Udemy. |
| Conteúdos afetados | LEARN-001–003; mapa pedagógico. |
| Riscos | Prometer resultados, confundir currículo atual com roadmap, converter página em landing comercial. |
| Dependências | HUM-004; definição do Nível 4/5. |
| Critérios de conclusão | Cinco níveis claramente classificados; curso beta delimitado; claims educacionais condicionais; CTAs coerentes. |
| Claims que podem mudar | CL-004/005/007/008/013. |
| Claims proibidos | Domínio imediato, autonomia comprovada, progressão distribuída já disponível. |

## Sprint 4 — Método e prática

| Campo | Plano |
| --- | --- |
| Objetivo | Aplicar definições canônicas e esclarecer limites entre métodos, protocolo, prática e perfil. |
| Escopo | `/method`, `/protocol`, `/investigation`, `/payload-journey`, `/usmt`. |
| Conteúdos afetados | PJ-001–004, USMT-001–004, METHOD-001–006, PROTO-001/002, INV-001–004. |
| Riscos | Uniformizar em excesso conceitos distintos; criar páginas desnecessárias; perder relações autorais. |
| Dependências | HUM-002/003; glossário. |
| Critérios de conclusão | Uma definição por conceito; tracing explicitamente complementar; estatuto Trace Engineer correto; relações preservadas. |
| Claims que podem mudar | CL-012, CL-019/020. |
| Claims proibidos | Reconhecimento profissional, certificação ou superioridade sobre práticas existentes. |

## Sprint 5 — Evidência

| Campo | Plano |
| --- | --- |
| Objetivo | Fortalecer `/cases` e `/lablog` como centro de proveniência. |
| Escopo | Caso HORA.city, datas, estados, desconhecidos, artefatos, entradas de LabLog e critérios de evidência. |
| Conteúdos afetados | CASE-001–003, LABLOG-001. |
| Riscos | Expor informação privada, fabricar evidência, declarar conclusão prematura, prometer cadência. |
| Dependências | HUM-005/006/007; artefatos autorizados. |
| Critérios de conclusão | Cada afirmação aponta para evidência pública; estados datados; desconhecidos preservados; nenhum resultado inventado. |
| Claims que podem mudar | CL-002/003/010/011/014/015/018. |
| Claims proibidos | Origem/restauração comprovada sem artefato; eficácia generalizada a partir de um caso. |

## Sprint 6 — Navegação e descoberta

| Campo | Plano |
| --- | --- |
| Objetivo | Alinhar Header, Footer, continuations, CTAs e canais à jornada aprovada. |
| Escopo | Navegação desktop/mobile, Footer, CTAs internos/externos, colaboração e YouTube. |
| Conteúdos afetados | GLOBAL-001/002, ECO-002 e CTAs do mapa. |
| Riscos | Ocultar rotas importantes, criar canais inexistentes, divergência mobile/desktop. |
| Dependências | HUM-004/005; arquitetura final das páginas. |
| Critérios de conclusão | Destinos confirmados; sem links quebrados; canal único; percurso previsível; acessibilidade preservada. |
| Claims que podem mudar | Somente labels e descrições de caminhos confirmados. |
| Claims proibidos | Parcerias, contato ou recursos que não existam. |

## Sprint 7 — Metadata e validação

| Campo | Plano |
| --- | --- |
| Objetivo | Alinhar SEO, structured data, conteúdo tipado e verificadores ao contrato implementado. |
| Escopo | titles, descriptions, canonical, OG/Twitter, JSON-LD, sitemap, robots e scripts de verificação. |
| Conteúdos afetados | GLOBAL-003–009 e todas as rotas migradas. |
| Riscos | Metadata contradizer texto; inventar entidade; manipular testes para ocultar regressão. |
| Dependências | Sprints 1–6 concluídas; deploy para validação pública. |
| Critérios de conclusão | Fonte/HTML/build/execução observada separados; entidades confirmadas; checks passam; host público validado separadamente. |
| Claims que podem mudar | Somente sínteses aprovadas já visíveis nas páginas. |
| Claims proibidos | Claims novos exclusivos de metadata ou JSON-LD. |

# Decisões humanas pendentes

As dez decisões `HUM-001`–`HUM-010` permanecem abertas. Prioridade para desbloqueio:

1. `HUM-009` — formulação final do Hero e tese resumida;
2. `HUM-004` — peso da Udemy;
3. `HUM-001` — validade do marco de seis meses;
4. `HUM-002` — estatuto público de Trace Engineer;
5. `HUM-010` — exposição da narrativa da fundadora;
6. `HUM-003` — páginas individuais de métodos;
7. `HUM-005` — YouTube e colaboração;
8. `HUM-006` — evidências públicas HORA.city;
9. `HUM-007` — critérios de transferibilidade;
10. `HUM-008` — política para mission-critical.

# Limitações da Sprint 0

- O host público não foi acessado; redirects e metadata de produção não foram validados externamente.
- As requisições observadas foram feitas contra `next dev` local pelos verificadores.
- Não foi executado browser real, leitor de tela, interação completa por teclado ou auditoria visual nesta sprint documental.
- O build comprova compilação e geração estática, não comportamento runtime.
- O HTML observado comprova conteúdo entregue localmente, não eficácia editorial ou pedagógica.
- Os fatos do HORA.city foram tratados como documentados pelo repositório, não verificados por fonte independente.
- Nenhum dado de Udemy, YouTube ou Google Analytics foi consultado.
- Nenhuma dependência ou warning técnico foi corrigido.

# Validação documental final

## Cobertura

| Verificação | Resultado | Evidência |
| --- | --- | --- |
| Branch e commit confirmados | Aprovado | `refactor/homepage-v0.2.0`; `fc7cdbb73384030c4d6e92b39e07798dac4a2fb5`. |
| Rotas inspecionadas | Aprovado | 11 rotas canônicas, redirect, cinco 404 deliberados, sitemap e robots. |
| Fontes e componentes listados | Aprovado | Seção “Arquivos inspecionados”. |
| Contrato editorial completo | Aprovado | Tese, narrativa, públicos, dor, IA/humano, formação, tracing, estatutos, claims e política linguística. |
| Mapa com evidência concreta | Aprovado | 55 itens; todos registram arquivo/chave/linha aproximada e/ou conteúdo observado. |
| Taxonomia aplicada | Aprovado | 21 claims classificados. |
| Hipóteses não convertidas em fatos | Aprovado | Claims educacionais, autonomia, gargalo e benefícios permanecem condicionais. |
| Ambições não convertidas em competências | Aprovado | Transferibilidade, Trace Engineer profissional, sistemas distribuídos e mission-critical permanecem futuros. |
| PT-BR definido | Aprovado | Política linguística e tabela de variantes. |
| Progressão pedagógica | Aprovado | Cinco níveis, com disponível/mencionado/ausente e claims permitidos/proibidos. |
| Sprints futuras planejadas | Aprovado | Sprints 1–7 com escopo, riscos, dependências, critérios e claims. |
| Documento no local obrigatório | Aprovado | `docs/sprints para v3/Sprint 0 - Contrato Editorial e Mapa de Preservacao e Migracao.md`. |

## Diferenciação de alterações

### Criação documental autorizada

Foi criado deliberadamente apenas o documento principal desta Sprint 0:

`docs/sprints para v3/Sprint 0 - Contrato Editorial e Mapa de Preservacao e Migracao.md`

Essa criação está dentro do escopo aprovado. Nenhum material auxiliar foi criado.

### Arquivos de implementação não autorizados

Nenhum arquivo de implementação foi alterado:

- `git diff --name-only`: vazio;
- `git diff --cached --name-only`: vazio;
- nenhum arquivo em `app/`, `components/`, `content/`, `config/`, `lib/`, `scripts/` ou `types/` foi editado;
- nenhuma configuração, dependência, teste ou verificador foi modificado;
- nenhuma mudança foi staged.

O comando de build atualizou artefatos gerados e ignorados em `.next/`. Esses artefatos são saída de validação de build, não arquivos-fonte de implementação nem parte da entrega documental. Eles não são apresentados como evidência de comportamento runtime.

## Integridade dos documentos preexistentes

Os três documentos preexistentes mantiveram os mesmos tamanhos e hashes SHA-256 registrados antes da criação desta entrega:

| Documento | Bytes | SHA-256 |
| --- | ---: | --- |
| `auditoria refactor site v3.md` | 11.948 | `78C57A36C6B79A7E076B4DB47933F48C48AF6E9143950B8F1AE8D05367ED775A` |
| `resultado auditoria narrativa site v3.md` | 21.411 | `0B2F6697F1465054897D1C69C4C98F11DCE5635A2FFC5B2BFEFECC162FB39432` |
| `sprint 0.md` | 42.618 | `90C24A7F23EFE9E493F500837E52B2C27B983D69FDE94F121BC0CF2C464E9CC9` |

## Warnings e pendências técnicas não corrigidos

- dois warnings preexistentes do cache Webpack: `Caching failed for pack: Error: Unable to snapshot resolve dependencies`;
- redirect da infraestrutura pública ainda requer validação após deploy;
- canal canônico do YouTube permanece não resolvido;
- páginas legais deliberadamente inexistentes permanecem 404;
- teste com browser real, leitor de tela e host público permanece fora desta sprint.

Nenhuma dessas pendências foi corrigida ou ocultada.

## Resultado da Sprint 0

- contrato editorial congelado;
- tese e públicos formalizados;
- taxonomia de claims aprovada para uso futuro;
- 55 itens de preservação e migração documentados;
- 21 claims inventariados;
- glossário PT-BR estabelecido;
- progressão pedagógica em cinco níveis formalizada;
- Sprints 1–7 planejadas sem implementação;
- dez decisões humanas mantidas pendentes;
- somente o documento autorizado foi criado;
- nenhum arquivo-fonte de implementação foi alterado;
- Sprint 1 não iniciada.

Status: aguardando aprovação humana antes de qualquer alteração de implementação.
