# Sprint 5 — Relatório

Data de conclusão: 19 de julho de 2026  
Branch observada: `refactor/homepage-v0.2.0`  
Versão: `0.2.0`

## Objetivo

Reposicionar a Formação e HORA.city imediatamente depois da Demo, apresentando a primeira como entrada fundamental e o segundo como prova de aplicação numa codebase real.

## Estado inicial

- Commit de referência: `2c8a0ca` (`sprint4`).
- Único diff preexistente: conteúdo oficial tracked de `docs/sprints para v2/sprint 5.md`.
- Lint, typecheck, build, smoke e fundação aprovados.
- Rota `/`: 7,03 kB; First Load JS: 94,3 kB; Shared JS: 87,2 kB.
- HTML: 199.171 bytes; CSS: 30.797 bytes; um Client Component.
- Dois warnings preexistentes `Webpack cache PackFileCacheStrategy`.

### Documentos oficiais preservados

| Documento | SHA-256 inicial e final |
| --- | --- |
| `sprint 0.md` | `055002994063C71EAC6087CAB2D02B489BBBDEC41A9D5BA5A9F35872F59A9FCD` |
| `sprint 1.md` | `C983EF730F258033C83744E595A9D1C95BAB66B11B2E1702CF0885287F412352` |
| `sprint 2.md` | `553C7E881BCFA841B9AADF7666C2391B218EE9CC16EC698E1FDA87B771B4990F` |
| `sprint 3.md` | `13D2F7450CE13BF64A66B0CC961D61DE404891AA66BD54A2C5A4D57ADD3A8BFF` |
| `sprint 4.md` | `D61B90CDCA6F373C196492101CA7A095665024DEA4F8B48FD0B531ABEBDD9FC4` |
| `sprint 5.md` | `142F96B3E3DDEB9FD8796DE20E82FCDA4913444FC9B90F9AFF7F653931E02EFC` |

Os hashes finais são idênticos aos registrados antes da implementação. O diff preexistente de `sprint 5.md` foi preservado byte a byte e não houve staging.

## Arquivos criados

1. `docs/homepage-refactor/15-training-and-case-study.md`.
2. `docs/homepage-refactor/16-sprint-5-report.md`.

## Arquivos modificados

1. `app/page.tsx` — nova ordem da homepage.
2. `components/sections/EducationSection.tsx` — Formação fundamental.
3. `components/sections/CaseStudySection.tsx` — narrativa pública em sete partes.
4. `content/site.ts` — apresentação tipada da Formação.
5. `content/hora-city.ts` — camada pública aditiva baseada em fatos compartilhados.
6. `content/payload-journey-lab.ts` — CTA final da Demo.
7. `types/content.ts` — contratos de Formação e narrativa pública.
8. `scripts/verify-homepage.mjs` — ordem, CTAs, fatos e variantes.
9. `scripts/verify-design-foundation.mjs` — proteção dos Server Components.
10. `docs/homepage-refactor/06-content-migration-matrix.md` — migrações e omissões.

Nenhum arquivo foi removido. Dependências, lockfile, Header, Hero, Footer, Métodos, Ecossistema e documentos oficiais de sprint não foram alterados.

## Nova ordem da homepage

```text
Header → Hero → Dor → Competências → Trilha → Demo → Formação → HORA.city
→ O LAB → Métodos → Ecossistema → LabLog → Sobre → CTA final → Footer
```

## Formação fundamental

- Título: `Comece a aprender Payload Tracing`.
- Produto: `Payload Journey LAB: Siga o flow, entenda o sistema`.
- Label histórico: `Formação Beta na Udemy`, preservado separadamente.
- Público: cinco grupos prioritários.
- Conteúdo: sete temas confirmados.
- Formato apresentado: Udemy, beta.
- CTA principal: `Entrar na formação` → URL Udemy existente.
- CTA secundário: `Rever a trilha` → `#trilha`.
- Cupom preservado; `expiration: null`; nenhuma certificação criada.

## Caso real HORA.city

A seção usa sete partes ordenadas: Contexto, Anomalia, Flow selecionado, Payload, Investigação, Evidências e Estado atual. O flow é descrito como comportamento observável associado ao `HeartCreated`, sem `Send Heart`, `create/join` ou nome técnico não confirmado.

## Estratégia editorial do caso

`publicNarrative.sourceStrategy` é `shared-confirmed-facts`. A narrativa utiliza projeto, escala, anomalia temporal, payload, métodos, autoridade e status confirmados. Não declara bug resolvido, origem comprovada, autoridade definitiva ou restauração concluída.

Fatos sem confirmação e informações divergentes são registrados separadamente em `publicNarrative.omissions` e na documentação 15.

## Variantes preservadas

`editorialVariants.rendered` e `editorialVariants.audited` permanecem integralmente na fonte server-side. O smoke confirma que as duas copies completas continuam na fonte e não são renderizadas no HTML. `editorialResolution` permanece `unresolved`.

## Navegação e CTAs

- Header e Hero permanecem idênticos à Sprint 4.
- CTA da Demo: `Começar pela formação` → `#formacao`.
- Formação: Udemy e `#trilha`.
- Caso: `#lablog` e `#demo`.
- CTA Começar do Header continua em `#trilha`.
- Footer continua independente.

## Conteúdo preservado

Hero, Dor, Competências, Trilha, Demo exceto CTA final, O LAB, Métodos, Ecossistema, LabLog, Sobre, CTA final e Footer mantêm componentes e conteúdo. Anchors, Udemy, YouTube, campanha, conteúdo histórico e áreas futuras permanecem.

## Matriz de migração

Registra reposicionamento, nova Formação, CTA da Demo, narrativa pública, sete partes, fatos usados, omissões por falta de confirmação, omissões por divergência e pendências da Sprint 6.

## Acessibilidade

- exatamente um H1;
- Formação e Caso em H2; blocos em H3;
- listas semânticas e ordem DOM/visual equivalente;
- links internos e externos corretos;
- foco, reduced motion, Escape e retorno de foco preservados;
- nenhum novo Client Component;
- nenhuma informação depende apenas de cor ou hover.

## Contraste

As novas composições reutilizam tokens e combinações já validadas pela fundação. Não foram adicionadas cores literais ou tokens novos. O CTA de contraste mantém 6,12:1 e o verde legível mantém 5,80:1.

## Responsividade

| Viewport | Sprint 4 | Sprint 5 | Diferença | Overflow |
| --- | ---: | ---: | ---: | ---: |
| 360×800 | 24.661 px | 26.185 px | +1.524 px | 0 |
| 390×844 | 23.590 px | 25.046 px | +1.456 px | 0 |
| 768×1024 | 15.928 px | 16.485 px | +557 px | 0 |
| 1024×768 | 13.533 px | 14.518 px | +985 px | 0 |
| 1280×800 | 11.881 px | 12.781 px | +900 px | 0 |
| 1440×900 | 11.854 px | 12.754 px | +900 px | 0 |

Screenshots temporários nas seis larguras confirmaram a sequência, CTAs, sete partes, painel técnico e transição para O LAB. O baseline oficial não foi sobrescrito.

## Performance

| Métrica | Sprint 4 | Sprint 5 | Diferença |
| --- | ---: | ---: | ---: |
| Rota `/` | 7,03 kB | 7,03 kB | 0 |
| First Load JS | 94,3 kB | 94,3 kB | 0 |
| Shared JS | 87,2 kB | 87,2 kB | 0 |
| Client Components | 1 | 1 | 0 |
| HTML estático | 199.171 bytes | 207.783 bytes | +8.612 bytes |
| CSS gerado | 30.797 bytes | 28.636 bytes | -2.161 bytes |

O crescimento está restrito ao HTML da narrativa. O JavaScript não cresceu e o CSS diminuiu com a substituição das composições antigas. Não há dependência, imagem, vídeo ou runtime novo.

## Validações

| Comando ou verificação | Resultado | Observações |
| --- | --- | --- |
| `npm.cmd run lint` | aprovado | sem warnings/erros |
| `npm.cmd exec tsc -- --noEmit` | aprovado | sem erros |
| `npm.cmd run build` | aprovado | sete rotas estáticas; JavaScript inalterado |
| `npm.cmd run verify:homepage` | aprovado | ordem, Formação, 7 partes, CTAs e variantes |
| `npm.cmd run verify:foundation` | aprovado | tokens e Server Components protegidos |
| Runtime em seis viewports | aprovado | zero overflow e anchors ausentes |
| Console/hydration | aprovado | nenhuma exceção ou erro |
| Menu mobile | aprovado | Escape fecha e devolve foco |
| `git diff --check` | aprovado | sem erro de whitespace |

O ambiente continuou emitindo os warnings de cache Webpack já conhecidos. Em desenvolvimento, também ocorreu uma falha de restauração do mesmo cache com `hasStartTime`; não afetou compilação, HTTP 200 ou runtime.

## Diferenças visuais esperadas

- Formação e HORA.city movidos imediatamente depois da Demo;
- nova hierarquia da Formação;
- caso em sete partes e painel técnico compacto;
- CTA final da Demo atualizado;
- transição do caso para O LAB;
- aumento proporcional da altura.

## Áreas não alteradas

Header, Hero, Dor, Competências, Trilha, estrutura da Demo, O LAB, Métodos, Ecossistema, LabLog, Sobre, CTA final, Footer, metadata, analytics, assets, dependências e páginas reservadas.

## Problemas encontrados

1. `Send Heart` e `create/join` não existem na fonte canônica e foram omitidos.
2. Duração, aulas, materiais e acesso do curso não estão confirmados e foram omitidos.
3. O cache Webpack mantém warnings preexistentes e apresentou uma falha de restauração em dev.

## Riscos remanescentes

- decisão editorial HORA.city continua pendente;
- nome técnico do flow e schema não estão confirmados;
- leitor de tela real não foi executado;
- YouTube, validade do cupom, dependências e deploy continuam fora do escopo.

## Recomendação para a Sprint 6

Apresentar Congelar, Mapear, Detectar e Restaurar como procedimento depois do caso; em seguida, contextualizar os cinco métodos e conectar Track Mode, Trace Engineer e Software System Investigation. Reutilizar as fontes tipadas atuais e não reabrir a entrada, Trilha, Demo, Formação ou narrativa pública do caso.
