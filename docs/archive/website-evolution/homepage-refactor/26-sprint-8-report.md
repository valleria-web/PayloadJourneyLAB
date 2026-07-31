# Sprint 8 — Relatório final

Data de conclusão: 19 de julho de 2026  
Branch observada: `refactor/homepage-v0.2.0`  
Baseline operacional: `a8e14c95200a53603aa4eb4a15a1e8449453df9d`  
Baseline histórico da Sprint 7: `81fec0b87c74320a07b10bc1c97ba1c926a69a6d`  
Versão: `0.2.0`

## Objetivo

Transformar a homepage extensa pós-Sprint 9 numa entrada sintética conectada a páginas temáticas completas, preservando publicamente 100% do conteúdo renderizado no baseline operacional.

## Estado inicial

- somente a rota `/` existia;
- 15 seções principais, 71 IDs DOM e um Client Component;
- altura: 21.283 px em 1440×900;
- rota `/`: 7,03 kB; First Load JS: 94,3 kB; Shared JS: 87,2 kB;
- HTML: 344.107 bytes; CSS: 30.265 bytes;
- lint, typecheck, build, homepage smoke e foundation aprovados;
- único arquivo fora do índice: `docs/sprints para v2/sprint 8.md`.

## Documentação

- `23-sprint-8-content-inventory.md`: inventário estrutural integral;
- `24-sprint-8-route-map.md`: arquitetura, responsabilidades e navegação;
- `25-sprint-8-preservation-matrix.md`: 45 unidades com preservação de 100%;
- `26-sprint-8-report.md`: este relatório.

Os documentos 21 e 22 da Sprint 9 não foram alterados.

## Arquitetura final

Foram publicadas 12 rotas estáticas:

| Rota | Conteúdo |
| --- | --- |
| `/` | Hero, Demo integral, sínteses navegáveis e CTA final |
| `/payload-journey` | Estratégia de entrada, Competências e Demo integral compartilhada |
| `/learn` | Trilha e Formação |
| `/cases` | HORA.city |
| `/usmt` | USMT detalhada da Sprint 9 |
| `/method` | cinco métodos e suas relações |
| `/protocol` | Congelar → Mapear → Detectar → Restaurar |
| `/investigation` | Track Mode, Trace Engineer e Software System Investigation |
| `/lab` | missão e princípio do LAB |
| `/ecosystem` | quatro pilares e possibilidades de colaboração |
| `/lablog` | narrativa, temas e canal atual do LabLog |
| `/about` | origem, visão e fundadora |

`/mapping`, `/reverse-payload-journey` e `/resources` não foram criadas porque o inventário não encontrou conteúdo público completo, independente e não redundante. As rotas legais também continuam ausentes.

## Homepage

Ordem anterior:

```text
Header → Hero → Dor → Competências → Trilha → Demo → Formação → HORA.city
→ USMT → Procedimento → Métodos → Prática → O LAB → Ecossistema
→ LabLog → Sobre → CTA final → Footer
```

Ordem final:

```text
Header → Hero → Demo → Método → Investigação aplicada → Ecossistema
→ Formação e conteúdo → Sobre → CTA final → Footer
```

As sínteses foram implementadas em componentes próprios. Nenhuma seção completa foi escondida com CSS ou recebeu um modo `compact` destrutivo.

## Demonstração

`PayloadFlowDemoSection` permanece integral na homepage e é importado diretamente por `/payload-journey`. A fonte e a implementação são únicas.

Sequência pública preservada:

```text
Clique → Structured Payload → Request → API → Domain → Repository
→ Response → Projection → UI
```

O nó Projection, já público no baseline, foi mantido além da sequência abreviada mencionada no escopo. Representações, responsabilidades, papéis, perguntas investigativas, aparência e CTA também foram preservados.

## USMT

A seção detalhada da Sprint 9 migrou integralmente para `/usmt`: pergunta central, contexto indexável, 12 elementos, WHERE/HOW/LOGIC/SAFE, conexão modelo/flow/evidência/investigação e transição ao protocolo. A homepage contém apenas a entrada compacta com CTA real. Nenhum CTA fictício ou conteúdo detalhado foi perdido.

## Método, protocolo e investigação

- `/method` mantém os cinco métodos completos e sua relação textual com o procedimento;
- `/protocol` mantém exclusivamente o processo operacional e as evidências produzidas;
- `/investigation` foi criado porque o inventário comprovou conteúdo autônomo sobre prática, papéis e conceitos centrais.

Não existe duplicação de responsabilidade entre as três rotas.

## Preservação de conteúdo

Todos os 15 blocos editoriais que saíram da homepage continuam públicos através dos mesmos componentes completos. Header, Hero, Demo, CTA final e Footer continuam públicos na homepage. Links internos foram alterados apenas quando necessário para manter destinos reais depois da migração.

Conteúdo histórico que já não era público continua server-side e ausente do HTML e do bundle client: variantes longas do HORA.city, copies anteriores da formação e do LabLog, passos históricos da USMT, CTA futuro da USMT e nomes de páginas legais inexistentes.

## Guardrails editoriais

- Valéria dos Santos Reiser continua apresentada somente como criadora do Payload Journey LAB e da USMT, com contexto confirmado nas fontes;
- colaboração, universidades, laboratórios, equipes, organizações e pilotos continuam como públicos ou possibilidades;
- HORA.city permanece `editorialResolution: "unresolved"`;
- os dois destinos de YouTube permanecem distintos e `resolutionStatus: "unresolved"`;
- o cupom permanece com `expiration: null`;
- Header e Footer usam fontes de navegação independentes;
- o eyebrow do LabLog permanece no singular: `Investigação em movimento`;
- nenhum nome de página legal inexistente é renderizado.

## Navegação, SEO e indexação

- Header atualizado para cinco agrupamentos simples e CTA Começar;
- Footer preservado e atualizado para rotas reais;
- uma introdução temática com H1 por página;
- metadata, description, canonical e JSON-LD `WebPage` próprios;
- sitemap com todas as 12 rotas;
- links de continuidade contextual;
- nenhuma página órfã;
- todo conteúdo como HTML real e indexável.

## Acessibilidade

- exatamente um H1 por rota;
- H2/H3/H4 preservados nos componentes completos;
- Header, main, sections e Footer semanticamente presentes;
- foco visível e controles nativos;
- menu mobile fecha com Escape e devolve o foco;
- conteúdo não depende de hover ou apenas de cor;
- reduced motion e contrastes do design system preservados;
- zero link vazio;
- zero overflow horizontal;
- somente `MobileNavigation` é Client Component.

Leitor de tela real não foi executado; a auditoria foi estrutural e por teclado em Chrome headless.

## Responsividade da homepage

| Viewport | Baseline operacional | Sprint 8 | Redução | Overflow |
| --- | ---: | ---: | ---: | --- |
| 360×800 | 44.344 px | 9.878 px | 77,7% | não |
| 390×844 | 42.309 px | 9.698 px | 77,1% | não |
| 768×1024 | 30.762 px | 7.142 px | 76,8% | não |
| 1024×768 | 23.775 px | 5.652 px | 76,2% | não |
| 1280×800 | 21.363 px | 5.391 px | 74,8% | não |
| 1440×900 | 21.283 px | 5.391 px | 74,7% | não |

A meta indicativa era 9.500–11.700 px em 1440×900. O resultado ficou menor porque 11 seções completas migraram para páginas próprias. Não foram adicionados espaçamento artificial ou conteúdo redundante para atingir uma altura nominal; fontes, ritmo, demonstração e legibilidade permaneceram confortáveis.

## Alturas das páginas temáticas

| Rota | Desktop 1440×900 | Mobile 390×844 | Overflow |
| --- | ---: | ---: | --- |
| `/payload-journey` | 4.665 px | 9.562 px | não |
| `/learn` | 3.035 px | 5.798 px | não |
| `/cases` | 2.985 px | 4.914 px | não |
| `/usmt` | 3.612 px | 7.798 px | não |
| `/method` | 3.783 px | 5.879 px | não |
| `/protocol` | 3.295 px | 6.640 px | não |
| `/investigation` | 2.545 px | 4.876 px | não |
| `/lab` | 1.610 px | 2.481 px | não |
| `/ecosystem` | 2.701 px | 4.606 px | não |
| `/lablog` | 1.539 px | 2.389 px | não |
| `/about` | 2.052 px | 3.208 px | não |

## Performance

| Métrica | Baseline | Sprint 8 | Diferença |
| --- | ---: | ---: | ---: |
| Rota `/` | 7,03 kB | 1,33 kB | −5,70 kB |
| First Load JS | 94,3 kB | 94,3 kB | 0 |
| Shared JS | 87,2 kB | 87,2 kB | 0 |
| Client Components | 1 | 1 | 0 |
| HTML da homepage | 344.107 bytes | 105.017 bytes | −239.090 bytes |
| CSS | 30.265 bytes | 30.743 bytes | +478 bytes |
| Rotas públicas | 1 | 12 | +11 |

O JavaScript não cresceu. O pequeno aumento de CSS corresponde ao shell temático e aos resumos. Nenhuma dependência, imagem de runtime, biblioteca de diagrama ou nova fronteira client foi adicionada.

## Capturas

Homepage:

- `sprint8-before-desktop.png`, `sprint8-before-tablet.png`, `sprint8-before-mobile.png`;
- `sprint8-after-home-desktop.png`, `sprint8-after-home-tablet.png`, `sprint8-after-home-mobile.png`.

Cada rota temática possui:

- `sprint8-route-<rota>-desktop.png`;
- `sprint8-route-<rota>-mobile.png`.

São 28 capturas permanentes no total. O baseline oficial em `baseline/` não foi sobrescrito.

## Validações

| Verificação | Resultado |
| --- | --- |
| `npm.cmd run lint` | aprovado |
| `npm.cmd exec tsc -- --noEmit` | aprovado |
| `npm.cmd run build` | aprovado; 18 páginas estáticas geradas |
| `npm.cmd run verify:homepage` | aprovado; 12 rotas, conteúdo, links, 404 e guardrails |
| `npm.cmd run verify:foundation` | aprovado; 11 páginas temáticas Server Components |
| Chrome headless | aprovado; 28 combinações com capturas e seis viewports da homepage |
| Console e hydration | zero erro |
| Links internos | todos os destinos validados |
| Rotas não autorizadas | cinco respostas 404 validadas |
| Links externos | Udemy localizado; YouTube mantido `unresolved` porque o crawler não confirmou os handles |
| `git diff --check` | aprovado, somente avisos de normalização LF→CRLF |
| Staging | vazio |
| Hashes | documentos oficiais preservados |

O primeiro build pós-migração encontrou um chunk ausente no cache `.next`, após uso anterior do dev server. O cache gerado foi removido com caminho absoluto validado e o build limpo passou. Os dois warnings preexistentes de cache Webpack permaneceram.

## Arquivos criados

### Código e conteúdo

- `app/about/page.tsx`;
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
- `components/pages/PageContinuation.tsx`;
- `components/pages/PageIntro.tsx`;
- `components/pages/SitePage.tsx`;
- `components/sections/HomeMethodOverviewSection.tsx`;
- `components/sections/HomePathwaysSections.tsx`;
- `content/routes.ts`;
- `lib/metadata.ts`.

### Documentação

- `docs/homepage-refactor/23-sprint-8-content-inventory.md`;
- `docs/homepage-refactor/24-sprint-8-route-map.md`;
- `docs/homepage-refactor/25-sprint-8-preservation-matrix.md`;
- `docs/homepage-refactor/26-sprint-8-report.md`;
- 28 capturas `sprint8-*.png` descritas acima.

## Arquivos modificados

- `app/page.tsx`;
- `app/sitemap.ts`;
- `components/layout/SiteHeader.tsx`;
- `content/hora-city.ts`;
- `content/methods.ts`;
- `content/payload-journey-lab.ts`;
- `content/site.ts`;
- `lib/structured-data.ts`;
- `scripts/verify-design-foundation.mjs`;
- `scripts/verify-homepage.mjs`;
- `types/content.ts`.

Nenhum arquivo foi removido. Header, Footer e os 15 componentes completos permanecem no repositório. Dependências e lockfile não foram alterados.

## Pasta de sprints

| Documento | Bytes | SHA-256 |
| --- | ---: | --- |
| `sprint 0.md` | 15.045 | `055002994063C71EAC6087CAB2D02B489BBBDEC41A9D5BA5A9F35872F59A9FCD` |
| `sprint 1.md` | 21.732 | `C983EF730F258033C83744E595A9D1C95BAB66B11B2E1702CF0885287F412352` |
| `sprint 2.md` | 21.018 | `553C7E881BCFA841B9AADF7666C2391B218EE9CC16EC698E1FDA87B771B4990F` |
| `sprint 3.md` | 30.849 | `13D2F7450CE13BF64A66B0CC961D61DE404891AA66BD54A2C5A4D57ADD3A8BFF` |
| `sprint 4.md` | 35.936 | `D61B90CDCA6F373C196492101CA7A095665024DEA4F8B48FD0B531ABEBDD9FC4` |
| `sprint 5.md` | 33.076 | `142F96B3E3DDEB9FD8796DE20E82FCDA4913444FC9B90F9AFF7F653931E02EFC` |
| `sprint 6.md` | 40.205 | `7F5EA3148E8BB56194D37790DE52C89AA743A6FDE7A27802A732F9F427E720C0` |
| `sprint 7.md` | 39.660 | `C7B90C1803F86CE62A07B4CE85531985235D931D4065C87D1E028BE51BB6B187` |
| `sprint 8.md` | 23.802 | `51E69505291CB37F86173126823F5922AFD101606669CD4FB2CB653E3D0A1F76` |
| `sprint 9.md` | 17.142 | `A0D0ABEC1AD84EE811835B0DB1E1FE851DD8D7FF2B5E82982532A688A265095D` |

`sprint 8.md` permaneceu untracked, fora de staging e byte a byte preservado.

## Pendências

- leitor de tela real não executado;
- YouTube canônico continua não resolvido;
- validade do cupom continua não confirmada;
- HORA.city continua editorialmente não resolvido;
- páginas legais continuam ausentes;
- publicação, release e deploy não realizados.

## Commit sugerido

```text
refactor(homepage): modularize content into thematic pages
```

Nenhum commit foi realizado durante esta execução.
