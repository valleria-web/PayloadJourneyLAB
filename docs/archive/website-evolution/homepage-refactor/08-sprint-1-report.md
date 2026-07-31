# Sprint 1 — Relatório

Data de conclusão: 19 de julho de 2026

Branch observada: `refactor/homepage-v0.2.0`

Versão: `0.2.0`

## Objetivo

Preparar a arquitetura de informação e a camada central de conteúdo da homepage sem alterar o que o visitante vê: mesma copy, ordem, layout, anchors, links e comportamento.

## Estado inicial

- Branch `refactor/homepage-v0.2.0`, sem troca durante a sprint.
- Versão `0.2.0`.
- Documentação e nove screenshots da Sprint 0 presentes em `docs/homepage-refactor/`.
- Working tree sem alterações tracked; somente `docs/sprints para v2/` estava untracked e foi preservado integralmente.
- Lint, typecheck e build iniciais aprovados.
- Build inicial: `/` com 6,46 kB e First Load JS de 93,7 kB.
- Warning preexistente do cache Webpack reproduzido sem falha de build.

Não foram executados pull, merge, rebase, checkout, commit, push, tag, deploy ou alterações de serviço externo.

## Arquivos criados

1. `content/hora-city.ts` — domínio tipado do caso HORA.city e suas variantes editoriais.
2. `content/methods.ts` — métodos, procedimento, prática e ecossistema.
3. `content/site.ts` — identidade, anchors, navegação, links, campanha, CTAs, formação, LabLog e footer.
4. `docs/homepage-refactor/06-content-migration-matrix.md` — matriz definitiva com 69 itens.
5. `docs/homepage-refactor/07-content-architecture.md` — arquitetura, decisões, reservas, pendências e reprodução do smoke.
6. `docs/homepage-refactor/08-sprint-1-report.md` — este relatório.
7. `scripts/verify-homepage.mjs` — smoke test estrutural sem dependências novas.

## Arquivos modificados

1. `components/diagrams/FlowDiagram.tsx` — aceita fluxo canônico `readonly`.
2. `components/layout/SiteFooter.tsx` — consome copy, headings, links, legal e copyright centralizados.
3. `components/layout/SiteHeader.tsx` — consome anchor inicial e CTA do header centralizados.
4. `components/sections/AboutSection.tsx` — consome anchor central.
5. `components/sections/BetaCtaSection.tsx` — consome label de campanha centralizado.
6. `components/sections/CaseStudySection.tsx` — consome a variante renderizada e os dados técnicos de HORA.city.
7. `components/sections/ConceptEcosystemSection.tsx` — consome anchor central.
8. `components/sections/EducationSection.tsx` — consome labels, cupom e CTA centralizados.
9. `components/sections/HeroSection.tsx` — consome anchors, ciclo e painel investigativo centralizados.
10. `components/sections/LabLogSection.tsx` — consome copy, CTA, URL e anchor centralizados.
11. `components/sections/LabOverviewSection.tsx` — consome anchor e labels técnicos centralizados.
12. `components/sections/MethodsSection.tsx` — consome anchor e labels da seção centralizados.
13. `components/sections/UsmtSection.tsx` — preserva o componente não renderizado usando o anchor canônico do LabLog.
14. `config/site.ts` — deriva metadata da identidade e URL centrais.
15. `content/payload-journey-lab.ts` — torna-se fachada compatível e preserva o conteúdo ainda não extraído/não renderizado.
16. `package.json` — adiciona `verify:homepage`.
17. `types/content.ts` — adiciona contratos e IDs estáveis dos novos domínios.

`package-lock.json` não foi alterado. `docs/sprints para v2/sprint0.md` e `sprint1.md` permanecem untracked, com os mesmos arquivos e fora do escopo das mudanças.

## Conteúdos centralizados

- Identidade pública e metadata.
- Sete itens de navegação e oito IDs de seção.
- URL do site, Udemy e os dois destinos atuais do YouTube.
- Quatro variantes de CTA para a mesma oferta.
- Oferta de formação e campanha temporária, incluindo cupom e `expiration: null`.
- Copy e estado do LabLog.
- Copy, links e informações legais do Footer.
- Cinco métodos com ID, função, ordem e destino atual/futuro.
- Quatro passos do procedimento investigativo.
- Track Mode, Trace Engineer e Software System Investigation.
- Fluxo do ecossistema e painel investigativo do Hero.
- Fatos, estado técnico, microfatos, linhas técnicas, CTAs e variantes editoriais de HORA.city.

## Duplicações removidas do código

- URL Udemy/cupom e URL LabLog deixaram de ser constantes locais ou strings repetidas nos componentes.
- Nome, tagline, descrição SEO e URL do site deixaram de existir como cópias independentes em `config/site.ts`.
- Navegação e anchors deixaram de ser repetidos entre dados e componentes.
- Hero deixou de manter localmente ciclo, comando e chips.
- HORA.city deixou de manter arrays, estado técnico, copy e fatos repetidos no componente.
- Métodos, prática e fluxo deixaram de ser arrays isolados na fachada.
- LabLog e Footer deixaram de manter copy/links hardcoded nos componentes.
- Labels técnicos de O LAB, Métodos, Formação e CTA final passaram a dados.

Somente duplicações foram removidas; nenhum conteúdo editorial relevante foi descartado.

## Conteúdos preservados

- Todos os textos visíveis no início da sprint.
- As duas variantes de HORA.city: `rendered` e `audited`, com resolução `unresolved`.
- As duas variantes de CTA da formação: visível e anteriormente modelada.
- Os dois handles do YouTube, mantendo cada destino em seu consumidor atual.
- USMT completa, White Papers, One Bit Machine, contato, colaboradores, rotas futuras, diagramas e `FeatureCard`.
- Estados temporários e técnicos, inclusive self-link do Study Case e itens legais não interativos.

## Anchors preservados

`inicio`, `lab`, `metodos`, `ecossistema`, `case-study`, `formacao`, `lablog` e `sobre` permanecem presentes. Os sete links do menu apontam para destinos existentes. Nenhum ID foi renomeado.

## Pendências editoriais

1. YouTube oficial: `@PayloadJourneyLAB` e `@Lab-Log` continuam separados; canonical `null`, status `unresolved`.
2. Cupom: `FOLLOW-THE-FLOW` segue ativo na configuração, mas validade, owner e fallback não foram confirmados; `expiration: null`.
3. HORA.city: as variantes longa/auditada e compacta/renderizada precisam de reconciliação explícita; nenhuma foi declarada oficial.
4. Conteúdo futuro: USMT, White Papers, One Bit Machine, contato, colaboradores e rotas permanecem reservados.
5. Estados técnicos do caso, self-link, políticas legais e canais de contato ainda precisam de decisão.

## Validações executadas

| Comando/verificação | Resultado | Observações |
| --- | --- | --- |
| `npm run lint` (inicial) | Aprovado | Sem warnings ou erros |
| `npm exec tsc -- --noEmit` (inicial) | Aprovado | Sem saída de erro |
| `npm run build` (inicial) | Aprovado | `/` 6,46 kB; First Load 93,7 kB |
| `npm run lint` (final) | Aprovado | Sem warnings ou erros |
| `npm exec tsc -- --noEmit` (final) | Aprovado | Sem erros |
| `npm run build` (final) | Aprovado | Mesmos tamanhos do baseline; sete rotas/páginas estáticas |
| `npm run verify:homepage` | Aprovado | HTTP 200; 1 H1; 8 IDs; 7 anchors; 16 conteúdos; 3 URLs; 14 IDs estáveis |
| Execução local | Aprovado | Next dev em `127.0.0.1:3211`; `/` e asset responderam 200 |
| Console/runtime | Aprovado | Nenhuma exceção ou mensagem de erro nas seis larguras |
| Menu mobile | Aprovado | Abriu, ficou visível e fechou; `aria-expanded` acompanhou o estado |
| Anchors | Aprovado | Nenhum dos links internos inspecionados ficou sem destino |
| Links principais | Aprovado | Udemy, `@PayloadJourneyLAB` e `@Lab-Log` presentes sem troca de destino |
| Overflow horizontal | Aprovado | Zero em 360, 390, 768, 1024, 1280 e 1440 px |
| Comparação de viewport | Aprovado | Seis PNGs idênticos byte a byte ao baseline da Sprint 0 |
| Comparação full-page | Aprovado com nota técnica | Mesmas dimensões e nenhuma diferença perceptível na inspeção; bytes variam por estados temporais de animação/intersection durante a captura |
| `git diff --check` | Aprovado | Sem erro de whitespace; somente aviso de normalização LF→CRLF do ambiente |
| Working tree final | Aprovado | Branch e versão preservadas; diretório externo continua untracked; sem alteração do lockfile |

Os dois warnings `Webpack cache PackFileCacheStrategy: Unable to snapshot resolve dependencies` permanecem iguais aos da Sprint 0 e não alteraram exit code, lint, tipos, geração estática ou bundle.

## Equivalência visual

A homepage permaneceu visualmente equivalente ao baseline. As seis primeiras dobras foram capturadas com métricas exatas e produziram arquivos byte a byte iguais aos screenshots da Sprint 0:

- 360×800;
- 390×844;
- 768×1024;
- 1024×768;
- 1280×800;
- 1440×900.

As capturas full-page mantiveram exatamente 390×13.852, 768×10.377 e 1440×7.538 pixels e foram visualmente equivalentes. A diferença binária full-page é atribuída aos estados temporais acionados pela rolagem para captura, não a texto, layout, ordem, link ou comportamento. Nenhuma regressão perceptível foi encontrada.

## Problemas encontrados

- A contagem provisória no resumo da matriz estava em 58, enquanto a matriz final possui 69 itens; o resumo foi corrigido.
- O primeiro typecheck intermediário identificou que `FlowDiagram` aceitava apenas array mutável; o contrato foi ajustado para `readonly` sem mudança de runtime.
- A porta 3000 já estava ocupada no ambiente durante a inspeção final; a aplicação desta sprint foi iniciada isoladamente na porta 3211.
- O cache Webpack repetiu o warning já conhecido da Sprint 0.

## Riscos remanescentes

- Decisões editoriais pendentes podem reintroduzir divergência se forem resolvidas diretamente em componentes.
- O smoke atual é estrutural e não substitui automação browser/visual em CI ou auditoria completa de acessibilidade.
- Conteúdo futuro e a fachada compatível ainda precisam ser migrados com a matriz como gate.
- Analytics, dependências vulneráveis, fontes e configuração de produção permanecem fora do escopo e devem ter mudanças isoladas.

## Recomendação para a Sprint 2

Usar os módulos tipados e a matriz de 69 itens como contratos antes de criar a fundação técnica/visual. A Sprint 2 pode começar por tokens, primitives e shell de layout, mantendo o smoke e os screenshots como gates. Antes de publicar qualquer nova narrativa, resolver explicitamente o YouTube oficial, a política do cupom e a autoridade editorial das variantes de HORA.city.
