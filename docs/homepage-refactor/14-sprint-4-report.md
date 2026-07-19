# Sprint 4 — Relatório

Data de conclusão: 19 de julho de 2026  
Branch observada: `refactor/homepage-v0.2.0`  
Versão: `0.2.0`

## Objetivo

Implementar a progressão pedagógica do Payload Journey LAB e uma representação visual, estática e acessível do percurso de um payload antes do aprofundamento metodológico.

## Estado inicial

- Commit de referência: `4b251f0` (`sprint3`).
- Lint, typecheck, build, smoke e fundação aprovados.
- Rota `/`: 7,03 kB; First Load JS: 94,3 kB; Shared JS: 87,2 kB.
- Uma fronteira Client Component: `MobileNavigation`.
- Dois warnings preexistentes de cache Webpack.
- `docs/sprints para v2/` é conteúdo oficial rastreado. `sprint 4.md` já possuía uma alteração tracked antes da implementação, com SHA-256 `D61B90CDCA6F373C196492101CA7A095665024DEA4F8B48FD0B531ABEBDD9FC4`.

Nenhum documento da pasta de sprints foi editado, restaurado ou preparado para staging pela implementação. A verificação final repetiu os cinco hashes iniciais; `sprint 4.md` permaneceu em `D61B90CDCA6F373C196492101CA7A095665024DEA4F8B48FD0B531ABEBDD9FC4`, confirmando preservação byte a byte do diff preexistente.

## Arquivos criados

1. `components/sections/LearningPathSection.tsx` — Trilha progressiva.
2. `components/sections/PayloadFlowDemoSection.tsx` — demonstração pedagógica.
3. `components/ui/FlowNode.tsx` — representação semântica de um node.
4. `components/ui/RoleBadge.tsx` — label tipado dos papéis operacionais.
5. `docs/homepage-refactor/13-learning-path-and-flow-demo.md` — contrato da progressão e do flow.
6. `docs/homepage-refactor/14-sprint-4-report.md` — este relatório.

## Arquivos modificados

1. `app/globals.css` — tokens semânticos aditivos dos papéis.
2. `app/page.tsx` — insere Trilha e Demo após Competências.
3. `content/payload-journey-lab.ts` — conteúdo tipado e CTAs.
4. `content/site.ts` — anchors, navegação e CTA do Header.
5. `docs/homepage-refactor/06-content-migration-matrix.md` — destinos e pendências da Sprint 4.
6. `scripts/verify-design-foundation.mjs` — tokens, contraste e Server Components.
7. `scripts/verify-homepage.mjs` — ordem, conteúdo, anchors, CTAs e preservação.
8. `tailwind.config.ts` — aliases para custom properties dos papéis.
9. `types/content.ts` — contratos da Trilha, Demo, nodes e papéis.

Nenhum arquivo foi removido. `FlowDiagram.tsx`, dependências e lockfile não foram alterados.

## Trilha progressiva

Quatro etapas são renderizadas a partir de `homepageEntry.learningPath`: Entenda o Payload, Payload Journey, Reverse Payload Journey e Track to Origin. Cada etapa contém descrição, conceitos e resultado, em uma lista ordenada 01–04. O layout usa uma coluna no mobile, duas no tablet e quatro somente em desktop amplo.

## Demonstração visual

A Demo renderiza nove nodes num único `<ol>`: Clique, Structured Payload, Request, API, Domain, Repository, Response, Projection e UI. A ordem do HTML permanece 01–09 em todas as larguras. Cada node apresenta representação, responsabilidade, papel e pergunta investigativa.

A mensagem `Uma representação pedagógica de um flow operacional.` impede que a composição seja confundida com execução, log ou tracing real. Não há animação, estado, canvas, biblioteca de diagrama ou JavaScript de layout.

## Papéis operacionais

| Papel | Critério | Contraste |
| --- | --- | ---: |
| Transporta | Move informação entre fronteiras | 7,06:1 |
| Transforma | Muda ou interpreta uma representação | 5,63:1 |
| Decide | Aplica regras e determina comportamento | 6,12:1 |
| Apresenta | Inicia ou encerra a observação com o usuário | 14,28:1 |

Todos aparecem por texto explícito e apoio visual. Domain é o ponto de decisão; Repository permanece transporte.

## Navegação e CTAs

- Header: Aprender, Trilha, Demo, Formação, Caso real e O LAB.
- Começar → `#trilha`.
- Hero principal → `#demo`.
- Hero secundário → `#trilha`.
- Demo → `#case-study`.
- Métodos saiu somente do Header; `#metodos`, a seção e o link do Footer continuam presentes.
- Footer permanece baseado em `footerContent.navigation`, independente de `siteNavigation`.

## Conteúdo preservado

Dor e estratégia, Competências, O LAB, Métodos, Ecossistema, HORA.city, Formação, LabLog, Sobre, CTA final e Footer mantêm ordem relativa e componentes. Links Udemy/YouTube, cupom com validade desconhecida, HORA.city `audited`/`rendered`, `editorialResolution: unresolved` e YouTube `resolutionStatus: unresolved` permanecem protegidos.

## Matriz de migração

A matriz registra individualmente anchors, quatro etapas, flow, papéis, conteúdo técnico antigo do Hero, navegação e CTAs. Demo aprofundada, código real, vídeo e refatoração HORA.city permanecem pendentes; nenhum item das Sprints 5 a 8 foi marcado como concluído.

## Acessibilidade

- exatamente um H1;
- Trilha e Demo em H2; cards em H3;
- listas ordenadas para progressão e flow;
- labels operacionais textuais;
- foco visível e reduced motion preservados;
- todos os links internos possuem destino;
- menu mobile fecha por Escape e devolve foco;
- `aria-expanded` e `aria-controls` preservados;
- nenhuma nova fronteira Client Component.

## Contraste

Os quatro papéis atendem WCAG AA para texto normal. Tokens foram adicionados como custom properties e referenciados pelo Tailwind. Defaults consumidos pelas seções antigas permanecem inalterados.

## Responsividade

| Viewport | Altura Sprint 3 | Altura Sprint 4 | Crescimento | Overflow |
| --- | ---: | ---: | ---: | ---: |
| 360×800 | 17.853 px | 24.661 px | +6.808 px | 0 |
| 390×844 | 17.279 px | 23.590 px | +6.311 px | 0 |
| 768×1024 | 12.147 px | 15.928 px | +3.781 px | 0 |
| 1024×768 | 10.549 px | 13.533 px | +2.984 px | 0 |
| 1280×800 | 9.303 px | 11.881 px | +2.578 px | 0 |
| 1440×900 | 9.303 px | 11.854 px | +2.551 px | 0 |

Screenshots temporários nas seis larguras confirmaram flow vertical no mobile, duas colunas no tablet, duas linhas no desktop amplo, Domain destacado e ausência de sobreposição. O baseline original não foi sobrescrito.

## Performance

| Métrica JavaScript | Sprint 3 | Sprint 4 | Diferença |
| --- | ---: | ---: | ---: |
| Rota `/` | 7,03 kB | 7,03 kB | 0 |
| First Load JS | 94,3 kB | 94,3 kB | 0 |
| Shared JS | 87,2 kB | 87,2 kB | 0 |
| Client Components | 1 | 1 | 0 |

O crescimento é de HTML e CSS estáticos, não de JavaScript. O HTML estático final possui 199.171 bytes e o CSS gerado possui 30.797 bytes. A Sprint 3 não registrou esses dois tamanhos em bytes, portanto não há delta binário confiável para essas métricas; a diferença perceptível está documentada pelas alturas acima e pelo conteúdo adicionado. Nenhuma dependência, client bundle ou runtime de layout foi acrescentado.

## Validações

| Comando ou verificação | Resultado | Observações |
| --- | --- | --- |
| `npm.cmd run lint` | aprovado | sem warnings/erros |
| `npm.cmd exec tsc -- --noEmit` | aprovado | sem erros |
| `npm.cmd run build` | aprovado | sete rotas estáticas; JavaScript inalterado |
| `npm.cmd run verify:homepage` | aprovado | 12 IDs, 4 etapas, 9 nodes, 4 papéis, 1 client boundary |
| `npm.cmd run verify:foundation` | aprovado | tokens canônicos, contrastes e Server Components |
| Runtime em seis viewports | aprovado | zero overflow, zero anchors ausentes |
| Console e runtime | aprovado | nenhuma exceção ou mensagem de erro |
| Menu mobile | aprovado | Escape, fechamento e retorno de foco |
| Comparação visual | aprovado | screenshots temporários; baseline preservado |
| `git diff --check` | aprovado | sem erros de whitespace |

Os dois warnings `Webpack cache PackFileCacheStrategy` permanecem preexistentes e não afetam o exit code.

## Diferenças visuais esperadas

- links Trilha e Demo no Header;
- novo destino do CTA Começar;
- novos CTAs do Hero;
- seção rosa da Trilha;
- seção clara da Demo e papéis operacionais;
- aumento proporcional da altura total.

## Áreas não alteradas

O LAB, Métodos, Ecossistema, HORA.city, Formação, LabLog, Sobre, CTA final, Footer, `FlowDiagram`, metadata, analytics, dependências, assets e páginas reservadas.

## Problemas encontrados

1. Os warnings preexistentes de cache Webpack continuam ocorrendo.
2. A scrollbar do Chrome ocupa 15 px, mas `innerWidth` foi emulado exatamente e `scrollWidth === clientWidth` em todos os casos.
3. A Sprint 3 não registrou bytes de HTML/CSS, impedindo uma comparação binária dessas duas métricas.

## Riscos remanescentes

- leitor de tela real não executado;
- fontes dependem dos fallbacks instalados;
- demo aprofundada ainda precisa de fontes reais e escopo próprio;
- YouTube, cupom e variantes HORA.city continuam unresolved;
- dependências vulneráveis, analytics e deploy permanecem fora do escopo.

## Recomendação para a Sprint 5

Conectar a progressão à formação fundamental e ao caso real HORA.city sem refazer Hero, Trilha ou Demo. A Sprint 5 deve explicitar como a formação desenvolve as quatro etapas, transformar o caso real numa aplicação narrativa coerente da Demo e revisar o CTA de conversão somente depois de preservar separadamente as variantes editoriais do Study Case.
