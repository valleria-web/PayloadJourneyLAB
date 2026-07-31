# Sprint 9 — Relatório

Data de conclusão: 19 de julho de 2026  
Branch observada: `refactor/homepage-v0.2.0`  
Versão: `0.2.0`

## Objetivo

Reincorporar a USMT à homepage como componente estrutural que conecta o comportamento observado pelo Payload Journey ao modelo esperado e ao procedimento investigativo.

## Estado inicial

- commit: `81fec0b87c74320a07b10bc1c97ba1c926a69a6d` (`sprint7`);
- branch e versão preservadas;
- único arquivo preexistente fora do índice: `docs/sprints para v2/sprint 9.md`;
- não existe relatório da Sprint 8 no repositório;
- lint, typecheck, build, smoke e fundação aprovados;
- rota `/`: 7,03 kB; First Load JS 94,3 kB; Shared JS 87,2 kB; um Client Component; HTML 297.200 bytes; CSS 28.747 bytes;
- dois warnings preexistentes de cache Webpack.

## Estado da pasta de sprints

| Documento | Bytes | SHA-256 inicial e final |
| --- | ---: | --- |
| `sprint 0.md` | 15.045 | `055002994063C71EAC6087CAB2D02B489BBBDEC41A9D5BA5A9F35872F59A9FCD` |
| `sprint 1.md` | 21.732 | `C983EF730F258033C83744E595A9D1C95BAB66B11B2E1702CF0885287F412352` |
| `sprint 2.md` | 21.018 | `553C7E881BCFA841B9AADF7666C2391B218EE9CC16EC698E1FDA87B771B4990F` |
| `sprint 3.md` | 30.849 | `13D2F7450CE13BF64A66B0CC961D61DE404891AA66BD54A2C5A4D57ADD3A8BFF` |
| `sprint 4.md` | 35.936 | `D61B90CDCA6F373C196492101CA7A095665024DEA4F8B48FD0B531ABEBDD9FC4` |
| `sprint 5.md` | 33.076 | `142F96B3E3DDEB9FD8796DE20E82FCDA4913444FC9B90F9AFF7F653931E02EFC` |
| `sprint 6.md` | 40.205 | `7F5EA3148E8BB56194D37790DE52C89AA743A6FDE7A27802A732F9F427E720C0` |
| `sprint 7.md` | 39.660 | `C7B90C1803F86CE62A07B4CE85531985235D931D4065C87D1E028BE51BB6B187` |
| `sprint 9.md` | 17.142 | `A0D0ABEC1AD84EE811835B0DB1E1FE851DD8D7FF2B5E82982532A688A265095D` |

`sprint 9.md` permaneceu untracked, fora de staging e byte a byte igual.

## Arquivos criados

1. `content/usmt.ts` — apresentação pública tipada.
2. `docs/homepage-refactor/21-usmt-homepage-section.md` — especificação da seção.
3. `docs/homepage-refactor/22-sprint-9-report.md` — este relatório.
4. `docs/homepage-refactor/sprint9-usmt-desktop.png` — captura desktop.
5. `docs/homepage-refactor/sprint9-usmt-tablet.png` — captura tablet.
6. `docs/homepage-refactor/sprint9-usmt-mobile.png` — captura mobile.

## Arquivos modificados

1. `app/page.tsx` — insere a USMT antes do Procedimento.
2. `components/sections/UsmtSection.tsx` — nova composição pública.
3. `content/site.ts` — anchor canônico `usmt`.
4. `types/content.ts` — contratos dos elementos, lentes, conexão e seção.
5. `scripts/verify-homepage.mjs` — ordem, conteúdo, SEO, links e preservação.
6. `scripts/verify-design-foundation.mjs` — proteção do Server Component e design system.
7. `docs/homepage-refactor/06-content-migration-matrix.md` — migração completa da USMT.

Nenhum arquivo foi removido. `UsmtDiagram.tsx`, Header, Footer, outras seções, dependências e lockfile não foram alterados.

## Ordem final

```text
Header → Hero → Dor → Competências → Trilha → Demo → Formação → HORA.city
→ USMT → Procedimento → Métodos → Prática investigativa → O LAB
→ Ecossistema → LabLog → Sobre → CTA final → Footer
```

## Implementação

A seção contém introdução, pergunta central, grade compacta dos doze elementos, quatro lentes investigativas, relação modelo/flow/evidência/investigação e transição ao protocolo. O conteúdo é renderizado integralmente no servidor e permanece indexável.

## CTA

Nenhum CTA foi renderizado. Não existe paper, documentação ou rota pública. `deepDiveCta: null` protege a ativação futura sem criar navegação falsa.

## Conteúdo preservado

Os doze passos extensos anteriores, emojis, CTA futuro e copy antiga permanecem em `siteContent.usmt` como histórico server-side. `UsmtDiagram.tsx` permanece reservado. Nenhum desses conteúdos é enviado ao HTML público.

## Acessibilidade e responsividade

- um H1 na homepage;
- USMT em H2, blocos em H3 e itens em H4;
- 71 IDs DOM únicos;
- 12 elementos e quatro lentes em ordem;
- zero links vazios, falsos ou sem destino;
- zero overflow nas seis larguras;
- menu mobile abre, Escape fecha e foco retorna;
- zero erro de console ou hydration;
- um Client Component;
- conteúdo independente de hover, imagem ou cor.

| Viewport | Altura final | Overflow |
| --- | ---: | --- |
| 360×800 | 44.344 px | não |
| 390×844 | 42.309 px | não |
| 768×1024 | 30.762 px | não |
| 1024×768 | 23.775 px | não |
| 1280×800 | 21.363 px | não |
| 1440×900 | 21.283 px | não |

## Performance

| Métrica | Baseline | Sprint 9 | Diferença |
| --- | ---: | ---: | ---: |
| Rota `/` | 7,03 kB | 7,03 kB | 0 |
| First Load JS | 94,3 kB | 94,3 kB | 0 |
| Shared JS | 87,2 kB | 87,2 kB | 0 |
| Client Components | 1 | 1 | 0 |
| HTML | 297.200 bytes | 344.107 bytes | +46.907 bytes |
| CSS | 28.747 bytes | 30.265 bytes | +1.518 bytes |

O crescimento é HTML e CSS estáticos da nova seção. Nenhum JavaScript, dependência, imagem de runtime, biblioteca ou fronteira client foi adicionado.

## Validações

| Verificação | Resultado | Observações |
| --- | --- | --- |
| `npm.cmd run lint` | aprovado | sem warnings ou erros |
| `npm.cmd exec tsc -- --noEmit` | aprovado | sem erros |
| `npm.cmd run build` | aprovado | sete rotas estáticas; JavaScript estável |
| `npm.cmd run verify:homepage` | aprovado | 84 conteúdos, 60 IDs estáveis, 12 elementos e quatro lentes |
| `npm.cmd run verify:foundation` | aprovado | USMT protegida como Server Component |
| Chrome headless | aprovado | seis viewports, zero overflow e zero erros browser |
| Teclado | aprovado | Escape e retorno de foco em 360, 390 e 768 px |
| Links | aprovado | zero links vazios e zero CTA falso da USMT |
| `git diff --check` | aprovado | sem erro de whitespace; avisos LF→CRLF do ambiente |
| Hashes | aprovado | documentos oficiais preservados |

O build manteve os dois warnings preexistentes de cache Webpack. O runtime informou que `sharp` é opcional; nenhuma dependência foi instalada.

## Riscos e pendências

- paper e documentação completa da USMT ainda não existem;
- rota `/usmt` permanece futura;
- conteúdo histórico longo ainda precisa de decisão antes de uma página dedicada;
- leitor de tela real não foi executado;
- não existe relatório da Sprint 8 no estado atual;
- HORA.city, YouTube e validade do cupom continuam com as decisões anteriores.

## Commit sugerido

```text
feat(homepage): reincorporate USMT framework section
```

O commit não foi realizado.
