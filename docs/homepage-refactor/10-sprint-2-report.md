# Sprint 2 — Relatório

Data de conclusão: 19 de julho de 2026

Branch observada: `refactor/homepage-v0.2.0`

Versão: `0.2.0`

## Objetivo

Consolidar tokens, contratos e primitives estruturais reutilizáveis para a futura repaginação sem iniciar a nova narrativa ou alterar a percepção da homepage atual.

## Estado inicial

- Branch e versão confirmadas.
- Working tree sem alterações tracked; somente `docs/sprints para v2/` estava untracked.
- Documentos `00–08` e nove screenshots baseline presentes e lidos.
- Lint, typecheck, build e smoke aprovados.
- Rota `/`: 6,46 kB; First Load JS: 93,7 kB.
- Dois warnings de cache Webpack preexistentes.
- Paleta duplicada entre Tailwind e CSS global.
- Container, Section, SectionHeader, Button, Card e Badge já existiam, mas alguns contratos eram estreitos ou semanticamente ambíguos.

Não foram executados pull, merge, rebase, checkout, commit, push, tag, deploy ou alteração de versão.

## Arquivos criados

1. `docs/homepage-refactor/09-design-foundation.md` — tokens, APIs, padrões, acessibilidade e uso futuro.
2. `docs/homepage-refactor/10-sprint-2-report.md` — este relatório.
3. `scripts/verify-design-foundation.mjs` — validação leve dos contratos da fundação.

## Arquivos modificados

1. `app/globals.css` — fonte canônica de tokens, gutters, seções, foco e utilitários do Study Case.
2. `tailwind.config.ts` — aliases que referenciam custom properties, sem paleta hexadecimal duplicada.
3. `package.json` — script `verify:foundation`.
4. `components/ui/Container.tsx` — tamanhos tipados, atributos nativos e tokens de layout.
5. `components/ui/Section.tsx` — ID opcional, variantes tipadas, atributos nativos e espaçamento tokenizado.
6. `components/ui/SectionHeader.tsx` — níveis limitados a `h2`, `h3` e `h4`.
7. `components/ui/Button.tsx` — contratos distintos de link e botão real.
8. `components/ui/Card.tsx` — atributos nativos e tokens de raio, padding, sombra e movimento.
9. `components/ui/Badge.tsx` — variantes exportadas, `className` e atributos nativos.
10. `components/ui/TechnicalLabel.tsx` — tipografia/tracking tokenizados.
11. `components/ui/TerminalChip.tsx` — tipografia/tracking tokenizados.
12. `components/ui/TerminalLine.tsx` — tipografia e raio tokenizados.
13. `components/ui/HighlightPanel.tsx` — raio e sombra tokenizados.
14. `components/sections/AboutSection.tsx` — import direto do SectionHeader canônico.
15. `components/sections/CaseStudySection.tsx` — import direto e tokens de cor/sombra/grid do HORA.city.
16. `components/sections/ConceptEcosystemSection.tsx` — import direto do SectionHeader.
17. `components/sections/ContactSection.tsx` — import direto e disabled convertido em botão nativo.
18. `components/sections/EducationSection.tsx` — import direto do SectionHeader.
19. `components/sections/HeroSection.tsx` — sombra do flow derivada de token.
20. `components/sections/LabOverviewSection.tsx` — import direto do SectionHeader.
21. `components/sections/UsmtSection.tsx` — import direto do SectionHeader.

## Arquivo removido

- `components/sections/SectionHeader.tsx` — re-export redundante; não continha copy nem comportamento.

`package-lock.json` não foi alterado.

## Tokens criados ou consolidados

### Cores

Dezoito tokens cobrem papel, ink, graphite, borda, superfícies, verde técnico, terminal, rosa, foco, danger e três superfícies do HORA.city. Os aliases do Tailwind preservam nomes atuais e opacidade, mas não repetem valores literais.

### Tipografia

As duas famílias atuais, três tamanhos técnicos e dois trackings recorrentes passaram a custom properties. Não houve instalação de fontes.

### Layout e espaçamento

- containers: 64 rem, 80 rem e 88 rem;
- gutters: 20/32/40/48 px por breakpoint;
- espaçamento de seção: 64/80/96 px;
- padding-base de card: 24 px.

### Forma, elevação e movimento

- raios: 8 px para controls e 16 px para cards;
- sete sombras semânticas;
- movimento: 180 ms para links e 200 ms para controls/cards;
- reduced motion preservado.

## Componentes compartilhados

| Componente | Contrato consolidado | Variantes | Uso atual |
| --- | --- | --- | --- |
| Container | `size` + atributos de div | narrow/default/wide | Header, Footer, Section e CTA final |
| Section | ID opcional, Container interno e atributos de section | default/soft/dark/blush | Oito seções e conteúdo reservado |
| SectionHeader | eyebrow, title, description, align e level | h2/h3/h4; left/center | Seções editoriais atuais e reservadas |
| Button | união discriminada link/action | primary/secondary/ghost | CTAs atuais e botão disabled reservado |
| Card | composição por children e atributos de div | hover none/technical/cta | Cards editoriais/técnicos |
| Badge | atributos de span e className | technical/cta/neutral | Formação |
| Primitives técnicas | APIs existentes | tones já existentes | Hero, Study Case e UI reservada |

Todos permanecem Server Components.

## Componentes atuais migrados

- Header/Footer e todas as Section existentes passam indiretamente pelos gutters canônicos do Container.
- Seções usam espaçamento canônico por `foundation-section`; overrides do Hero permanecem intactos.
- About, HORA.city, Ecossistema, Contato, Formação, O LAB e USMT importam diretamente o SectionHeader.
- HORA.city consome tokens nomeados para suas três superfícies, terminal, sombra e grid.
- Hero consome a sombra canônica do flow.
- Button, Card, Badge, TechnicalLabel, TerminalChip, TerminalLine e HighlightPanel consomem tokens.
- ContactSection passa a gerar um `<button disabled>` real no conteúdo reservado, em vez de `span` simulado.

## Componentes deliberadamente não migrados

- O header customizado de Métodos permanece local: seu layout lateral e tracking não são equivalentes ao SectionHeader.
- BetaCtaSection e Footer mantêm composições próprias porque não são wrappers equivalentes a Section.
- PayloadJourneyDiagram e `app/icon.svg` mantêm cores locais por serem SVGs isolados/reservados.
- FeatureCard, USMT, Contact, WhitePapers e diagramas futuros foram preservados sem publicação.
- Grid, Stack, VisuallyHidden, Accordion, FlowNode, MethodCard e ComparisonPanel não foram criados sem consumidor.

## Acessibilidade

- Um único H1 preservado.
- SectionHeader impossibilitado por tipo de emitir H1.
- Links e ações diferenciados semanticamente.
- `disabled` indisponível para CTA com href e nativo para botão real.
- Links externos seguros: zero ocorrências sem `noopener noreferrer`.
- Menu mobile abriu e fechou por Space, com sete links, `aria-expanded`, `aria-controls` e foco visível de 2 px.
- Foco alterado de rosa claro para rosa escuro: contraste 4,21:1 sobre papel e 4,22:1 sobre ink.
- Reduced motion computado em `0.001ms`.
- Nenhuma nova fronteira client.

Contrastes preexistentes preservados e documentados:

- branco/rosa do CTA: 3,11:1;
- verde técnico/papel: 2,70:1.

Corrigi-los exigiria mudança visual perceptível e deve ser uma decisão explícita da Sprint 3.

## Responsividade

| Viewport | Altura total | Gutter | Overflow | Menu |
| --- | ---: | ---: | ---: | --- |
| 360×800 | 14.395 px | 20 px | 0 | Abriu/fechou por teclado |
| 390×844 | 13.852 px | 20 px | 0 | Abriu/fechou por teclado |
| 768×1024 | 10.377 px | 32 px | 0 | Abriu/fechou por teclado |
| 1024×768 | 8.272 px | 40 px | 0 | Desktop |
| 1280×800 | 7.538 px | 48 px | 0 | Desktop |
| 1440×900 | 7.538 px | 48 px | 0 | Desktop |

Os valores são idênticos ao baseline. Não houve texto cortado, mudança de grid, estreitamento de botão ou overflow.

## Performance

| Métrica | Sprint 1 | Sprint 2 | Diferença |
| --- | ---: | ---: | ---: |
| Rota `/` | 6,46 kB | 6,46 kB | 0 |
| First Load JS | 93,7 kB | 93,7 kB | 0 |
| Shared JS | 87,2 kB | 87,2 kB | 0 |
| Client Components | 1 | 1 | 0 |
| Dependências | Baseline | Sem alteração | 0 |

Nenhum runtime JavaScript foi introduzido para layout ou tokens.

## Validações

| Comando ou verificação | Resultado | Observações |
| --- | --- | --- |
| `npm run lint` inicial | Aprovado | Sem warnings/erros |
| `npm exec tsc -- --noEmit` inicial | Aprovado | Sem erros |
| `npm run build` inicial | Aprovado | 6,46 kB / 93,7 kB |
| `npm run verify:homepage` inicial | Aprovado | Estrutura da Sprint 1 intacta |
| `npm run verify:foundation` | Aprovado | Cinco grupos de tokens e quatro guardrails estruturais |
| `npm run lint` final | Aprovado | Sem warnings/erros |
| `npm exec tsc -- --noEmit` final | Aprovado | Sem erros |
| `npm run build` final | Aprovado | Bundle inalterado |
| `npm run verify:homepage` final | Aprovado | HTTP 200, conteúdo, links, anchors e IDs |
| Runtime em seis larguras | Aprovado | Zero erros de console/hydration e zero overflow |
| Menu por teclado | Aprovado | Space abriu e fechou; foco visível |
| Links externos | Aprovado | Zero links inseguros |
| Reduced motion | Aprovado | `0.001ms` computado |
| `git diff --check` | Aprovado | Sem erros de whitespace; avisos LF→CRLF do ambiente |

Os dois warnings `Webpack cache PackFileCacheStrategy: Unable to snapshot resolve dependencies` permaneceram iguais ao baseline e não afetaram o exit code.

## Equivalência visual

As seis capturas neutras de viewport foram idênticas byte a byte aos PNGs da Sprint 0:

- 360×800;
- 390×844;
- 768×1024;
- 1024×768;
- 1280×800;
- 1440×900.

As capturas full-page mantiveram as dimensões exatas de 390×13.852, 768×10.377 e 1440×7.538 pixels e foram equivalentes na inspeção visual. Seus arquivos não são byte-idênticos devido à posição do header sticky e aos estados de rolagem/intersection no instante da captura. Conforme o guardrail da sprint, equivalência funcional, semântica e visual perceptível teve precedência sobre identidade binária.

A única mudança visual deliberada ocorre durante foco de teclado: o outline usa rosa escuro para atingir contraste suficiente. O estado neutro permanece idêntico.

## Problemas encontrados

1. O teste inicial do menu registrou o estado aberto no screenshot porque o fechamento por Enter não foi acionado pelo CDP; a validação foi corrigida para Space e repetida com sucesso.
2. O outline de foco rosa claro tinha contraste 2,90:1 sobre papel; foi migrado para rosa escuro.
3. CTA branco/rosa e labels verde/papel continuam abaixo de contraste AA para texto pequeno; preservados para não antecipar redesign.
4. As capturas full-page continuam sensíveis ao scroll e ao header sticky.
5. O warning de cache Webpack continua preexistente.

## Riscos remanescentes

- A Sprint 3 precisa decidir cores de CTA e labels com contraste AA sem perder identidade.
- A fonte tipográfica continua dependente dos fallbacks instalados.
- Navegação completa com leitor de tela real não foi executada.
- Primitives não substituem a necessidade de revisar a hierarquia após a nova ordem editorial.
- Componentes reservados continuam precisando de decisão explícita antes de uso.
- Dependências vulneráveis, analytics e configuração de produção continuam fora do escopo.

## Recomendação para a Sprint 3

Implementar a nova porta de entrada em lotes: Header, Hero, dor e competências. Reutilizar Container, Section, Button, Card, Badge e primitives técnicas; manter SectionHeader restrito a headings internos. Criar Grid/Stack apenas quando os novos layouts demonstrarem repetição. Resolver contraste como decisão visual explícita e executar `verify:foundation`, smoke, bundle e screenshots após cada lote.
