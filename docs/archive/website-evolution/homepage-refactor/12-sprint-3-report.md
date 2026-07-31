# Sprint 3 — Relatório

Data de conclusão: 19 de julho de 2026  
Branch observada: `refactor/homepage-v0.2.0`  
Versão: `0.2.0`

## Objetivo

Criar uma nova porta de entrada para que estudantes e developers junior compreendam imediatamente Payload Tracing como estratégia concreta para entrar em codebases grandes.

## Estado inicial

- Working tree tracked limpa; somente `docs/sprints para v2/` estava untracked.
- Lint, typecheck, build, smoke e fundação aprovados.
- Bundle: rota `/` 6,46 kB; First Load JS 93,7 kB; Shared JS 87,2 kB.
- Um Client Component: `MobileNavigation`.
- Dois warnings preexistentes de cache Webpack.

Não foram realizados pull, merge, rebase, checkout, commit, push, tag, deploy ou alteração de versão.

## Arquivos criados

1. `components/sections/ProblemSection.tsx` — dor, passos, resultado e comparação.
2. `components/sections/LearningOutcomesSection.tsx` — oito competências.
3. `docs/homepage-refactor/11-entry-experience.md` — contrato editorial, visual e responsivo da nova entrada.
4. `docs/homepage-refactor/12-sprint-3-report.md` — este relatório.

## Arquivos modificados

1. `app/globals.css` — tokens aditivos de contraste.
2. `app/page.tsx` — nova composição inicial sem alterar a ordem relativa anterior.
3. `components/layout/MobileNavigation.tsx` — CTA mobile, Escape e retorno de foco dentro da fronteira existente.
4. `components/layout/SiteFooter.tsx` — navegação passa a consumir sua fonte independente, com output preservado.
5. `components/layout/SiteHeader.tsx` — navegação simplificada e CTA interno.
6. `components/sections/HeroSection.tsx` — nova mensagem e composição.
7. `components/ui/Button.tsx` — variante aditiva `contrast`; defaults preservados.
8. `components/ui/SectionHeader.tsx` — `eyebrowTone` aditivo; default preservado.
9. `components/ui/TechnicalLabel.tsx` — tone aditivo `readable`; default preservado.
10. `content/payload-journey-lab.ts` — `homepageEntry` e copy tipada.
11. `content/site.ts` — anchors, Header, CTA e navegação independente do Footer.
12. `docs/homepage-refactor/06-content-migration-matrix.md` — destinos individuais do Hero anterior e novos itens.
13. `scripts/verify-design-foundation.mjs` — contraste medido e proteção dos defaults.
14. `scripts/verify-homepage.mjs` — novo H1, anchors, conteúdo, links, IDs, Footer e fronteira client.
15. `tailwind.config.ts` — aliases dos novos tokens CSS.
16. `types/content.ts` — contratos e IDs estáveis da nova entrada.

Nenhum arquivo foi removido. `package.json`, `package-lock.json` e dependências permanecem inalterados.

## Nova navegação

| Label | Destino |
| --- | --- |
| Aprender | `#aprender` |
| Formação | `#formacao` |
| Caso real | `#case-study` |
| Métodos | `#metodos` |
| O LAB | `#lab` |
| Começar | `#aprender` |

Desktop e mobile usam `siteNavigation`. O Footer não usa essa fonte: continua com O LAB, Métodos, Study Case, Formação e LabLog por `footerContent.navigation`.

## Novo Hero

O Hero apresenta Payload Tracing, público prioritário, resultado possível, descrição do percurso da informação e dois CTAs internos válidos. O painel técnico, o curso e o LabLog deixam a primeira dobra, mas suas fontes permanecem preservadas.

## Seção da dor

`#aprender` apresenta a dor de navegar aleatoriamente, os quatro passos solicitados, resultado destacado e comparação Sem tracing/Com tracing. O markup usa `ol`, `li`, `h2`, `h3` e cards compreensíveis sem hover.

## Competências ensinadas

`#competencias` apresenta oito outcomes tipados com IDs estáveis. O grid usa uma, duas ou quatro colunas conforme largura, sem altura mínima artificial.

## Conteúdo preservado

A matriz registra individualmente 22 itens retirados do Hero. Cada um está marcado como já representado, reservado para sprint futura e/ou histórico editorial. `siteContent.hero`, `heroInvestigationPanel`, `investigationCycle`, métodos, prática investigativa e CTAs antigos não foram apagados.

HORA.city permanece intocado, com variantes `audited` e `rendered` separadas e resolução `unresolved`. Os dois YouTube handles e a validade desconhecida do cupom continuam protegidos.

## Matriz de migração

Foram adicionados registros para Hero, dor, competências, anchors `aprender`/`competencias`, futura Trilha e futura Demo. Trilha e Demo permanecem reservadas e não renderizadas.

## Acessibilidade

- exatamente um H1;
- novas seções em H2 e cards em H3;
- cards em listas ordenadas;
- links internos semanticamente corretos;
- foco global visível;
- menu mobile abre por botão nativo;
- Escape fecha e devolve foco ao gatilho;
- `aria-expanded` e `aria-controls` preservados;
- áreas de toque de pelo menos 44 px;
- conteúdo independente de hover;
- reduced motion preservado;
- nenhuma ARIA redundante adicionada;
- somente um Client Component.

## Contraste

| Combinação nova | Resultado |
| --- | ---: |
| verde legível sobre papel | 5,80:1 |
| ink sobre rosa do CTA | 6,12:1 |

Ambas atendem WCAG AA para texto normal. Os estilos padrão antigos não foram alterados.

## Responsividade

| Viewport | Altura | Overflow | Menu |
| --- | ---: | ---: | --- |
| 360×800 | 17.853 px | 0 | abre; Escape fecha; foco retorna |
| 390×844 | 17.279 px | 0 | abre; Escape fecha; foco retorna |
| 768×1024 | 12.147 px | 0 | abre; Escape fecha; foco retorna |
| 1024×768 | 10.549 px | 0 | desktop |
| 1280×800 | 9.303 px | 0 | desktop |
| 1440×900 | 9.303 px | 0 | desktop |

Todos os viewports tiveram largura interna exata, `scrollWidth === clientWidth`, um H1 e zero destinos internos ausentes. Screenshots temporários confirmaram Header, primeira dobra e início da dor; `baseline/` não foi alterado.

## Performance

| Métrica | Sprint 2 | Sprint 3 | Diferença |
| --- | ---: | ---: | ---: |
| Rota `/` | 6,46 kB | 7,03 kB | +0,57 kB |
| First Load JS | 93,7 kB | 94,3 kB | +0,6 kB |
| Shared JS | 87,2 kB | 87,2 kB | 0 |
| Client Components | 1 | 1 | 0 |
| Dependências | baseline | sem alteração | 0 |

O aumento é proporcional ao conteúdo e ao comportamento de teclado adicionado à fronteira client já existente. Não há JS de layout, biblioteca de ícones nova, imagem, vídeo ou dependência de runtime nova.

## Validações

| Comando ou verificação | Resultado | Observações |
| --- | --- | --- |
| `npm.cmd run lint` | aprovado | sem warnings/erros |
| `npm.cmd exec tsc -- --noEmit` | aprovado | sem erros |
| `npm.cmd run build` | aprovado | sete rotas estáticas; bundle documentado |
| `npm.cmd run verify:homepage` | aprovado | HTTP 200; 10 IDs; 5 anchors de Header; 25 conteúdos; 26 IDs estáveis; 1 client boundary |
| `npm.cmd run verify:foundation` | aprovado | tokens canônicos, aliases, semântica e contraste |
| Runtime headless em seis viewports | aprovado | zero overflow, um H1 e anchors válidos |
| Menu mobile | aprovado | click, Escape, retorno de foco e outline de 2 px |
| Comparação visual | aprovado para áreas modificadas | screenshots temporários; mudanças esperadas |
| Preservação posterior | aprovado estruturalmente | componentes/copy/ordem antigos não alterados |
| `git diff --check` | aprovado | somente avisos de normalização do ambiente quando aplicável |

O wrapper `npm.ps1` está bloqueado pela Execution Policy local; `npm.cmd`, executável equivalente, foi usado. Os dois warnings `Webpack cache PackFileCacheStrategy` continuam preexistentes e não afetam o exit code.

O protocolo CDP do Edge recusou comandos de target durante uma tentativa de captura full-page. A validação foi refeita com Chrome headless, iframes de viewport CSS exato, DOM dump e screenshots. Console dedicado não pôde ser coletado por esse fallback; hydration foi confirmada funcionalmente porque o estado React do menu abriu, fechou por Escape e devolveu foco.

## Diferenças visuais esperadas

- Header com cinco links e CTA Começar;
- Hero editorial e visualmente mais simples;
- ausência do painel técnico na primeira dobra;
- novas seções de dor e competências;
- rosa com texto escuro nos CTAs novos;
- verde legível nos textos pequenos novos;
- aumento da altura total.

## Áreas não alteradas

O LAB, Métodos, Ecossistema, HORA.city, Formação, LabLog, Sobre e CTA final mantêm componentes, copy, links, anchors, estilos e ordem relativa. O Footer mantém conteúdo e aparência; somente sua fonte de navegação foi desacoplada do Header.

## Problemas encontrados

1. `npm.ps1` bloqueado pela política local; contornado com `npm.cmd`.
2. O smoke inicial ainda exigia o antigo H1 em caixa alta; foi atualizado para identidade preservada + novo H1.
3. Chrome/Edge headless impõem largura mínima sem emulação; a medição final usou iframe com viewport CSS exato.
4. CDP de page target indisponível neste ambiente; fallback documentado acima.
5. Warnings de cache Webpack permanecem preexistentes.
6. `technical-corners` neutralizava o fundo dark do novo resultado por usar o shorthand `background`; o novo consumidor recebeu `!bg-ink`, sem alterar o utilitário ou consumidores antigos.

## Riscos remanescentes

- fontes continuam dependentes de fallbacks instalados;
- leitor de tela real não foi executado;
- console browser dedicado não foi exportado pelo fallback headless;
- dependências vulneráveis, analytics e deploy continuam fora do escopo;
- decisões de YouTube, cupom e HORA.city continuam pendentes.

## Recomendação para a Sprint 4

Adicionar Trilha e Demo como Server Components entre as competências e o conteúdo antigo. Reutilizar `investigationCycle` e `heroInvestigationPanel`, evitar repetir a seção da dor e revisar o CTA principal somente quando o novo destino existir. O flow deve permanecer vertical no mobile, acessível sem animação e protegido por reduced motion.
