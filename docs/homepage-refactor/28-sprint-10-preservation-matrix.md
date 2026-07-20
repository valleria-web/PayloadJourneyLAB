# Sprint 10 — matriz de preservação institucional

## Resultado

A migração preserva 100% das informações institucionais publicamente renderizadas no baseline `1ae665afa7b8c8000f4bf952d5d0adfb7ee10b3e`. A página `/lab` é agora a única fonte pública e operacional desse conteúdo. A rota `/about` deixou de ser uma página concorrente e responde com redirect permanente para o ponto institucional equivalente, `/lab#sobre`.

## Conteúdo anteriormente servido em `/lab`

| Item do inventário | Destino final | Evidência | Estado |
| --- | --- | --- | --- |
| eyebrow `O LAB` | introdução da página | `thematicRoutes.lab.eyebrow` | preservado |
| H1 `Formação, pesquisa e investigação aplicada` | introdução da página | único `h1` de `/lab` | preservado |
| descrição introdutória | introdução da página | `thematicRoutes.lab.description` | preservada e ampliada apenas com conceitos já inventariados |
| `Voltar à homepage` | introdução da página | link `/` de `PageIntro` | preservado |
| anchor `#lab` | primeira seção institucional | `Section id={homepageAnchors.lab}` | preservado |
| eyebrow `O laboratório` | seção `#lab` | `siteContent.lab.eyebrow` | preservado |
| conceito `Criado para ensinar a compreender sistemas` | seção `#lab` | `siteContent.lab.title` | preservado, sem repetir o H1 |
| descrição sobre ensinar, modelar e investigar | seção `#lab` | primeiro parágrafo | preservada literalmente |
| conexão com formação, métodos e investigação aplicada | seção `#lab` | segundo parágrafo | preservada literalmente |
| missão | card `#mission` | heading e texto | preservada literalmente |
| princípio | card `#principle` | heading e texto | preservado literalmente |
| continuidade `Continue explorando o LAB` | encerramento | `PageContinuation` | preservada |
| acesso ao ecossistema | navegação global | Footer `Ecossistema` | preservado como acesso público |
| acesso à origem | conteúdo local | `/lab#sobre` | substituído pelo próprio conteúdo equivalente, sem salto para página concorrente |

## Conteúdo anteriormente servido em `/about`

| Item do inventário | Destino final em `/lab` | Evidência | Estado |
| --- | --- | --- | --- |
| eyebrow `Sobre` | seção `#sobre` | `originPresentation.eyebrow` | preservado |
| título `Origem, visão e autoria` | seção `#sobre` | `h2` interno | preservado sem criar segundo H1 |
| descrição sobre origem, motivação e fundadora | seção `#sobre` | `originPresentation.description` | preservada literalmente |
| `Voltar à homepage` | introdução canônica de `/lab` | link `/` de `PageIntro` | preservado funcionalmente |
| anchor `#sobre` | seção institucional | `Section id={homepageAnchors.about}` | preservado exatamente |
| conceito `Criado para ensinar a compreender sistemas` | seção `#lab` | heading institucional | preservado |
| origem do LAB | card `#origin` | primeiro parágrafo | preservada literalmente |
| heading `Por que o LAB existe` | card `#origin` | `h3` | preservado |
| problema motivador | card `#origin` | segundo parágrafo | preservado literalmente |
| visão | seção `#vision` | heading e parágrafo | preservada literalmente |
| `Seguir o flow` | lista em `#how-the-lab-works` | item 01 | preservado |
| `Compreender antes de modificar` | lista em `#how-the-lab-works` | item 02 | preservado |
| `Produzir evidência` | lista em `#how-the-lab-works` | item 03 | preservado |
| `Tornar decisões visíveis` | lista em `#how-the-lab-works` | item 04 | preservado |
| `Desenvolver visão estrutural` | lista em `#how-the-lab-works` | item 05 | preservado |
| `Compartilhar métodos` | lista em `#how-the-lab-works` | item 06 | preservado |
| label `Fundadora` | seção `#founder` | `TechnicalLabel` | preservado |
| `Valéria dos Santos Reiser` | seção `#founder` | heading | preservado literalmente |
| `Criadora do Payload Journey LAB e da USMT` | seção `#founder` | role | preservado literalmente |
| criação do Payload Journey LAB | seção `#founder` | parágrafo | preservada literalmente |
| criação da USMT | seção `#founder` | parágrafo | preservada literalmente |
| relação USMT–LAB | seção `#founder` | parágrafo | preservada literalmente |
| contexto confirmado sobre payloads, estados, eventos e decisões | seção `#founder` | primeiro item da lista | preservado literalmente |
| contexto confirmado sobre métodos de investigação aplicada | seção `#founder` | segundo item da lista | preservado literalmente |
| acesso ao LAB | própria rota canônica | `/lab` | absorvido sem perda de destino público |
| acesso ao ecossistema | navegação global | Footer `Ecossistema` | preservado como acesso público |

Nenhuma informação biográfica foi adicionada. A apresentação de Valéria dos Santos Reiser permanece limitada aos fatos já confirmados no baseline.

## Elementos globais, visuais e interações

| Elemento | Antes | Depois | Estado |
| --- | --- | --- | --- |
| Header institucional | `O LAB` e `Sobre` | somente `O LAB` → `/lab` | consolidado conforme o contrato da sprint |
| navegação mobile | mesmos dois destinos institucionais | somente `O LAB` → `/lab` | consolidada; mecanismo mobile inalterado |
| Footer institucional | `O LAB` → `/lab` | `O LAB` → `/lab` | preservado e independente do Header |
| marca, CTA `Começar`, canais e copyright | presentes nas duas páginas | presentes em `/lab` | preservados |
| cards de missão, princípio, origem e fundadora | distribuídos em duas páginas | integrados na narrativa de `/lab` | preservados |
| lista visual de seis formas de atuação | lista em `/about` | `<ol>` com seis `<li>` em `/lab` | preservada e semanticamente explícita |
| homepage | síntese `Sobre` | uma única síntese `O LAB` → `/lab` | conteúdo institucional único, sem duplicação |
| fragmento público antigo | `/about#sobre` | redirect de `/about` para `/lab#sobre` | conteúdo equivalente alcançado diretamente |

Os rótulos redundantes de navegação que criavam dois territórios institucionais foram consolidados por decisão explícita da Sprint 10; nenhuma informação exclusiva foi eliminada. As capturas antes/depois registram a preservação visual da hierarquia, dos cards, das listas, da navegação e do Footer.

## Rotas e indexabilidade

| Classe | Rotas | Resposta esperada |
| --- | --- | --- |
| indexáveis | `/`, `/payload-journey`, `/learn`, `/cases`, `/usmt`, `/method`, `/protocol`, `/investigation`, `/lab`, `/ecosystem`, `/lablog` | 11 respostas `200` |
| compatibilidade | `/about` | `308`, `Location: /lab#sobre` |
| deliberadamente inexistentes | `/mapping`, `/reverse-payload-journey`, `/resources`, `/privacy-policy`, `/terms-of-use` | 5 respostas `404` |

O sitemap contém exatamente as 11 rotas indexáveis. `/about` não aparece em `thematicRoutes`, `publicRoutePaths`, sitemap ou coleções de páginas indexáveis.

## Metadata e fonte operacional

| Responsabilidade | Fonte final | Verificação |
| --- | --- | --- |
| apresentação e metadata institucional | `thematicRoutes.lab` | canonical `/lab` |
| conteúdo institucional | `siteContent.lab` | consumidor único `LabOverviewSection` |
| dados estruturados | `SitePage` para `/lab` | uma página institucional indexável |
| compatibilidade antiga | `next.config.mjs` | redirect 308 para `/lab#sobre` |

Foram removidos `siteContent.about`, `thematicRoutes.about`, `AboutSection` e a página runtime `app/about/page.tsx` após a conferência integral desta matriz. A preservação histórica está no Git e nos documentos 27–29, não no bundle ou no HTML.

## Cobertura

- conteúdo textual inventariado: 100% preservado;
- fatos de autoria e fundadora: 100% preservados, sem ampliação;
- anchors públicos: `#lab` e `#sobre` preservados;
- seis formas de atuação: 6 de 6 em lista semântica;
- links e destinos públicos válidos: mantidos ou consolidados no equivalente canônico;
- elementos visuais e globais relevantes: preservados em `/lab`;
- fontes runtime institucionais concorrentes: 0.
