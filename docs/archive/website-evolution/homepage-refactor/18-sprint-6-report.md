# Sprint 6 — Relatório

Data de conclusão: 19 de julho de 2026  
Branch observada: `refactor/homepage-v0.2.0`  
Versão: `0.2.0`

## Objetivo

Apresentar, depois da experiência concreta de Formação e HORA.city, o procedimento Congelar → Mapear → Detectar → Restaurar, os cinco métodos do LAB e a prática investigativa formada por Track Mode, Trace Engineer e Software System Investigation.

## Estado inicial

- Commit de referência: `492ae16` (`sprint5`).
- Branch e versão preservadas.
- `docs/sprints para v2/sprint 6.md` era um novo documento oficial ainda untracked.
- Quatro arquivos continham a correção preexistente e aprovada dos papéis funcionais da Demonstração visual: `PayloadFlowDemoSection.tsx`, `RoleBadge.tsx`, `content/payload-journey-lab.ts` e `types/content.ts`.
- Lint, typecheck, build, smoke e fundação estavam aprovados antes da Sprint 6.
- Baseline: rota `/` 7,03 kB; First Load JS 94,3 kB; Shared JS 87,2 kB; um Client Component; HTML 207.783 bytes; CSS 28.636 bytes.
- Dois warnings preexistentes de cache `Webpack cache PackFileCacheStrategy`.

## Estado da pasta de sprints

Nenhum documento em `docs/sprints para v2/` foi modificado, staged ou commitado. `sprint 6.md` permanece untracked e com o mesmo tamanho e hash do preflight.

| Documento | Bytes | SHA-256 inicial e final |
| --- | ---: | --- |
| `sprint 0.md` | 15.045 | `055002994063C71EAC6087CAB2D02B489BBBDEC41A9D5BA5A9F35872F59A9FCD` |
| `sprint 1.md` | 21.732 | `C983EF730F258033C83744E595A9D1C95BAB66B11B2E1702CF0885287F412352` |
| `sprint 2.md` | 21.018 | `553C7E881BCFA841B9AADF7666C2391B218EE9CC16EC698E1FDA87B771B4990F` |
| `sprint 3.md` | 30.849 | `13D2F7450CE13BF64A66B0CC961D61DE404891AA66BD54A2C5A4D57ADD3A8BFF` |
| `sprint 4.md` | 35.936 | `D61B90CDCA6F373C196492101CA7A095665024DEA4F8B48FD0B531ABEBDD9FC4` |
| `sprint 5.md` | 33.076 | `142F96B3E3DDEB9FD8796DE20E82FCDA4913444FC9B90F9AFF7F653931E02EFC` |
| `sprint 6.md` | 40.205 | `7F5EA3148E8BB56194D37790DE52C89AA743A6FDE7A27802A732F9F427E720C0` |

## Arquivos criados

1. `components/sections/InvestigationCycleSection.tsx` — procedimento investigativo.
2. `components/sections/InvestigationPracticeSection.tsx` — prática investigativa.
3. `docs/homepage-refactor/17-investigation-methodology.md` — especificação metodológica e limites editoriais.
4. `docs/homepage-refactor/18-sprint-6-report.md` — este relatório.

## Arquivos modificados

1. `app/page.tsx` — nova ordem da homepage.
2. `components/sections/ConceptEcosystemSection.tsx` — condensação somente das duplicações visíveis.
3. `components/sections/MethodsSection.tsx` — cinco contratos públicos e relações textuais.
4. `content/methods.ts` — procedimento, métodos, prática e apresentação histórica preservada.
5. `content/payload-journey-lab.ts` — composição central das novas fontes e transição institucional.
6. `content/site.ts` — anchors `procedimento` e `pratica-investigativa`.
7. `types/content.ts` — contratos explícitos e aditivos.
8. `scripts/verify-homepage.mjs` — ordem, semântica, conteúdo, links e IDs únicos.
9. `scripts/verify-design-foundation.mjs` — novas seções Server Components e `FlowDiagram` protegidos.
10. `docs/homepage-refactor/06-content-migration-matrix.md` — destinos e pendências da Sprint 6.
11. `components/sections/PayloadFlowDemoSection.tsx` — alteração preexistente aprovada dos papéis funcionais, preservada.
12. `components/ui/RoleBadge.tsx` — alteração preexistente aprovada dos rótulos funcionais, preservada.

`content/payload-journey-lab.ts` e `types/content.ts` continham parte da correção preexistente da Demo e também receberam mudanças da Sprint 6. Nenhum arquivo foi removido.

## Nova ordem da homepage

```text
Header → Hero → Dor → Competências → Trilha → Demo → Formação → HORA.city
→ Procedimento → Métodos → Prática investigativa → O LAB → Ecossistema
→ LabLog → Sobre → CTA final → Footer
```

## Procedimento investigativo

| Etapa | Pergunta | Resultado | Evidência |
| --- | --- | --- | --- |
| 01 Congelar | Qual comportamento precisa ser preservado antes de qualquer alteração? | Caso estável e reproduzível | Registro do estado observado |
| 02 Mapear | Por onde o payload realmente atravessa o sistema? | Caminho operacional explícito e verificável | Mapa do flow e checkpoints candidatos |
| 03 Detectar | Em que ponto o comportamento observado diverge do esperado ou do modelo? | Divergência sustentada por evidências | Registro da divergência detectada |
| 04 Restaurar | Que autoridade, regra ou comportamento precisa ser corrigido e validado? | Comportamento restaurado e validado pelo mesmo flow | Validação do comportamento restaurado |

Entradas e atividades permanecem visíveis, mas são hierarquizadas depois da pergunta e da descrição. Resultado, evidência e métodos relacionados formam o fechamento de cada card. No mobile, as etapas permanecem numa sequência vertical sem acordeão ou conteúdo oculto.

## Semântica de Detectar

Detectar foi implementado como confronto entre evidências produzidas nos checkpoints, comparação entre observado e esperado e identificação da primeira divergência relevante. A seção não sugere busca aleatória, arquivo suspeito, adivinhação da causa ou promessa de encontrar rapidamente um bug.

Restaurar aplica a mudança mínima, reexecuta checkpoints, compara antes e depois, confirma invariantes e valida o comportamento através do mesmo flow.

## Métodos e instrumentos

| Método | Categoria | Função pública | Relação principal |
| --- | --- | --- | --- |
| Payload Journey | Observar | Seguir informação através de camadas e representações | Mapear e validar o flow em Restaurar |
| USMT | Modelar | Explicitar estados, regras e invariantes | Congelar, Detectar e Restaurar |
| Reverse Payload Journey | Investigar | Reconstruir o caminho a partir da anomalia | Congelar, Mapear e Detectar |
| Operational Payload Path | Mapear | Converter arquitetura abstrata em rota concreta | Mapear; conectar os Journeys a componentes reais |
| Track to Origin | Rastrear a origem | Identificar a autoridade da decisão relevante | Detectar e Restaurar |

Cada método mostra propósito, quando utilizar, pergunta, resultado e relação textual com o procedimento. Os IDs canônicos permanecem nos dados. Para evitar colisões com a Trilha, o DOM usa `method-payload-journey`, `method-usmt`, `method-reverse-payload-journey`, `method-operational-payload-path` e `method-track-to-origin`.

## Relação procedimento/métodos

- Congelar: USMT e Reverse Payload Journey.
- Mapear: Payload Journey, Operational Payload Path e Reverse Payload Journey.
- Detectar: Reverse Payload Journey, USMT e Track to Origin.
- Restaurar: Track to Origin, USMT e Payload Journey para validar o flow.

As relações aparecem por texto dentro dos cards do Procedimento e dos Métodos; cores e badges são apenas apoio visual.

## Track Mode

É apresentado como estado operacional no qual observar, mapear e produzir evidências têm prioridade sobre mudanças especulativas. Não é apresentado como ferramenta, produto ou funcionalidade automática.

## Trace Engineer

É apresentado como função investigativa proposta e desenvolvida pelo LAB. A copy não declara profissão reconhecida, cargo padronizado ou certificação existente.

## Software System Investigation

É apresentada como prática estrutural organizada e desenvolvida no contexto do Payload Journey LAB. A homepage não a declara disciplina formal, standard ou prática externamente reconhecida.

## Condensação do Ecossistema

O `FlowDiagram` e os três cards que repetiam Track Mode, Trace Engineer e Software System Investigation foram transferidos para a nova Prática investigativa. O Ecossistema mantém anchor, título, introdução e transição institucional entre formação, pesquisa, investigação aplicada e colaboração.

As fontes históricas `ecosystemFlow`, `ecosystemFlowDescription`, `investigativePractice`, itens e artefatos futuros permanecem integralmente na fonte server-side. `FlowDiagram.tsx` não foi alterado e continua sendo utilizado.

## Navegação e CTAs

- Header preservado com seis links e CTA atual.
- Hero, Demo, Formação e HORA.city preservam seus CTAs.
- HORA.city continua apontando para `#lablog` e `#demo`, sem terceiro CTA.
- Prática investigativa adiciona `Conhecer o LAB` → `#lab`.
- Footer continua consumindo navegação independente do Header.
- Todos os links internos têm destinos existentes.

## Conteúdo preservado

Header, Hero, Dor, Competências, Trilha, Demo, Formação, narrativa factual de HORA.city, quatro pilares de O LAB, LabLog, Sobre, CTA final e Footer permanecem. A decisão editorial de HORA.city continua `unresolved`; variantes completas continuam na fonte server-side e fora do HTML. USMT completa, One Bit Machine, templates, protocolo, logs, schemas e demo aprofundada continuam reservados.

## Matriz de migração

A matriz registra individualmente procedimento, quatro etapas, cinco métodos, prática, conteúdo histórico do Hero reaproveitado, condensação visível do Ecossistema, pilares preservados e pendências. Nenhum item da Sprint 7 ou 8 foi marcado como concluído.

## Acessibilidade

- exatamente um `h1`;
- Procedimento, Métodos e Prática em `h2` e blocos em `h3`;
- listas ordenadas e listas de atividades semanticamente explícitas;
- ordem DOM igual à ordem visual;
- pergunta, resultado, evidência e relações identificados em texto;
- 46 IDs DOM, todos únicos;
- nenhum link interno sem destino;
- conteúdo integralmente disponível sem hover ou interação;
- foco visível, contraste AA e reduced motion preservados;
- menu mobile abre, fecha por Escape e devolve foco nas larguras móveis verificadas;
- nenhuma exceção de runtime, console ou hydration;
- exatamente um Client Component: `MobileNavigation`.

## Contraste

As seções reutilizam tokens e aliases da fundação, sem cores literais ou novos tokens. A validação mantém verde legível em 5,80:1, CTA de contraste em 6,12:1 e papéis operacionais acima de 4,5:1.

## Responsividade

| Viewport | Sprint 5 | Sprint 6 | Diferença | Overflow horizontal |
| --- | ---: | ---: | ---: | --- |
| 360×800 | 26.185 px | 34.994 px | +8.809 px | não |
| 390×844 | 25.046 px | 33.377 px | +8.331 px | não |
| 768×1024 | 16.485 px | 24.009 px | +7.524 px | não |
| 1024×768 | 14.518 px | 19.331 px | +4.813 px | não |
| 1280×800 | 12.781 px | 17.607 px | +4.826 px | não |
| 1440×900 | 12.754 px | 17.607 px | +4.853 px | não |

Screenshots temporários das três novas seções foram capturados nas seis larguras em uma pasta temporária, sem alterar o baseline oficial. Mobile apresenta uma coluna; a partir de 1024 px, Procedimento e Métodos usam duas colunas e a Prática usa três blocos. Não houve texto cortado, sobreposição ou conectores atravessando conteúdo.

## Performance

| Métrica | Sprint 5 | Sprint 6 | Diferença |
| --- | ---: | ---: | ---: |
| Rota `/` | 7,03 kB | 7,03 kB | 0 |
| First Load JS | 94,3 kB | 94,3 kB | 0 |
| Shared JS | 87,2 kB | 87,2 kB | 0 |
| Client Components | 1 | 1 | 0 |
| HTML estático | 207.783 bytes | 269.715 bytes | +61.932 bytes |
| CSS gerado | 28.636 bytes | 28.699 bytes | +63 bytes |

O crescimento está concentrado no HTML editorial e semântico das novas seções. O CSS cresceu 63 bytes; JavaScript, Shared JS e fronteiras client não cresceram. Não houve nova dependência, biblioteca, imagem, vídeo, animação ou runtime de layout.

## Validações

| Comando ou verificação | Resultado | Observações |
| --- | --- | --- |
| `npm.cmd run lint` | aprovado | sem warnings ou erros |
| `npm.cmd exec tsc -- --noEmit` | aprovado | execução final após build |
| `npm.cmd run build` | aprovado | sete rotas estáticas; bundle inalterado |
| `npm.cmd run verify:homepage` | aprovado | ordem, conteúdo, CTAs, 46 IDs únicos e uma fronteira client |
| `npm.cmd run verify:foundation` | aprovado | tokens, contraste, Server Components e FlowDiagram |
| Chrome headless em seis viewports | aprovado | HTTP 200, sem overflow, duplicação ou destino ausente |
| Menu mobile | aprovado | abriu, Escape fechou e foco retornou em 360 e 390 px |
| Console/hydration | aprovado | zero exceções e erros |
| `git diff --check` | aprovado | sem erro de whitespace |
| Hashes da pasta de sprints | aprovado | hashes iniciais e finais idênticos |

O typecheck intermediário executado em paralelo com um smoke encontrou arquivos temporariamente ausentes em `.next/types`; o build regenerou os artefatos e as execuções finais passaram. Os warnings de cache Webpack já conhecidos permanecem sem afetar compilação ou runtime.

## Diferenças visuais esperadas

- Procedimento inserido imediatamente após HORA.city.
- Métodos reorganizados em contratos completos e legíveis.
- Prática investigativa inserida com progressão, três blocos e CTA.
- O LAB e Ecossistema deslocados para depois da prática.
- Ecossistema visivelmente condensado.
- Altura total ampliada pelo novo conteúdo metodológico.

## Áreas não alteradas

Header, Hero, Dor, Competências, Trilha, conteúdo e estrutura da Demo, Formação, HORA.city, O LAB, LabLog, Sobre, CTA final, Footer, metadata, links externos, campanha, dependências e baseline oficial. A correção preexistente dos papéis funcionais da Demo foi preservada.

## Problemas encontrados

1. O typecheck paralelo ao smoke concorreu com a geração de `.next/types`; a validação sequencial resolveu o estado transitório.
2. O cache Webpack manteve os warnings preexistentes de snapshot/restauração.
3. Três IDs de métodos já pertencem à Trilha; os dados mantêm IDs canônicos e o DOM dos Métodos usa prefixo para garantir unicidade.

## Riscos remanescentes

- HORA.city continua editorialmente `unresolved`.
- Leitor de tela real não foi executado; a validação cobriu semântica, headings, listas, foco, contraste e teclado.
- Templates documentais, protocolo, demo aprofundada, schemas, logs e checkpoints reais continuam pendentes.
- URL canônica do YouTube e validade do cupom permanecem sem resolução.

## Recomendação para a Sprint 7

Consolidar O LAB, os quatro pilares, Ecossistema, LabLog, Sobre, fundadora, CTA final e Footer como fechamento institucional. A Sprint 7 pode reutilizar procedimento, métodos e prática sem reabrir a metodologia ou resolver silenciosamente as decisões editoriais pendentes.
