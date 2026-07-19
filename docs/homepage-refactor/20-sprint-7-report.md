# Sprint 7 — Relatório

Data de conclusão: 19 de julho de 2026  
Branch observada: `refactor/homepage-v0.2.0`  
Versão: `0.2.0`

## Objetivo

Consolidar O LAB, o Ecossistema institucional, LabLog, Sobre e fundadora, CTA final e Footer como encerramento da homepage, depois da progressão pedagógica, do caso real e da metodologia.

## Estado inicial

- commit: `b1b24d153598d3bef4d2b272768502a19855ca22`;
- branch e versão confirmadas e preservadas;
- único arquivo preexistente fora do índice: `docs/sprints para v2/sprint 7.md`;
- lint, typecheck, build, smoke e fundação aprovados antes das edições;
- baseline: rota `/` 7,03 kB; First Load JS 94,3 kB; Shared JS 87,2 kB; um Client Component; HTML 269.715 bytes; CSS 28.699 bytes;
- dois warnings preexistentes `Webpack cache PackFileCacheStrategy`.

Nenhum staging, commit, push, pull, merge, rebase, tag, deploy, checkout, troca de branch, alteração de versão ou atualização de dependência foi realizado.

## Estado da pasta de sprints

Os oito documentos oficiais foram preservados byte a byte e permaneceram fora de staging.

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

`sprint 7.md` continuou untracked, sem alteração e fora de staging.

## Arquivos criados

1. `docs/homepage-refactor/19-institutional-ecosystem-and-closing.md`.
2. `docs/homepage-refactor/20-sprint-7-report.md`.

## Arquivos modificados

1. `components/layout/SiteFooter.tsx` — identidade, navegação, canais confirmados e informação real.
2. `components/sections/AboutSection.tsx` — origem, visão, valores, fundadora e USMT.
3. `components/sections/BetaCtaSection.tsx` — promessa final e dois CTAs.
4. `components/sections/ConceptEcosystemSection.tsx` — quatro pilares institucionais.
5. `components/sections/LabLogSection.tsx` — narrativa, temas e CTA.
6. `components/sections/LabOverviewSection.tsx` — missão, princípio e transição institucional.
7. `content/payload-journey-lab.ts` — fontes públicas e apresentações históricas server-side.
8. `content/site.ts` — LabLog e Footer tipados, canais e pendências legais.
9. `types/content.ts` — contratos institucionais aditivos e explícitos.
10. `scripts/verify-homepage.mjs` — conteúdo, pilares, links, guardrails e decisões pendentes.
11. `scripts/verify-design-foundation.mjs` — seis Server Components da Sprint 7 protegidos.
12. `docs/homepage-refactor/06-content-migration-matrix.md` — migrações, condensações e pendências da Sprint 7.

Nenhum arquivo foi removido. `app/page.tsx`, Header, lockfile e dependências não foram alterados.

## Nova ordem da homepage

```text
Header → Hero → Dor → Competências → Trilha → Demo → Formação → HORA.city
→ Procedimento → Métodos → Prática investigativa → O LAB → Ecossistema
→ LabLog → Sobre → CTA final → Footer
```

A ordem já correspondia ao resultado esperado; componentes não foram movidos desnecessariamente.

## O LAB

- eyebrow: `O laboratório`;
- título: `Formação, pesquisa e investigação aplicada`;
- missão: conectar educação, desenvolvimento metodológico, investigação de sistemas, aplicação em casos reais e possibilidades de colaboração;
- princípio: compreender antes de modificar;
- relação metodológica: referência curta à prática anterior, sem repetir procedimento, métodos, Track Mode, Trilha ou Demo.

## Ecossistema institucional

O Ecossistema apresenta quatro áreas conectadas pelo propósito de transformar investigação de sistemas em aprendizagem, pesquisa metodológica, aplicação prática e colaboração.

## Quatro pilares

1. Formação — cursos, trilhas, vídeos e materiais educacionais.
2. Pesquisa metodológica — USMT, Payload Journey, Reverse Payload Journey, Operational Payload Path, Track to Origin e procedimento.
3. Investigação aplicada — flows, mappings, checkpoints, evidências, anomalias e casos.
4. Colaboração — estudantes, educadores, universidades, laboratórios, equipes e organizações como públicos possíveis.

Nenhuma parceria, piloto ou contrato ativo foi alegado.

## LabLog

- eyebrow coerente no singular: `Investigação em movimento`;
- título: `Acompanhe o LAB em movimento`;
- nove temas confirmados;
- CTA: `Assistir ao LabLog`;
- URL: `https://www.youtube.com/@PayloadJourneyLAB`;
- status editorial: `current`;
- YouTube canônico: `null`, `resolutionStatus: "unresolved"`.

O Footer preserva `https://www.youtube.com/@Lab-Log`.

## Sobre e fundadora

Sobre foi organizado em origem, visão e fundadora. Valéria dos Santos Reiser é apresentada apenas como criadora do Payload Journey LAB, da USMT e dos métodos que estruturam a prática do LAB, com o contexto já existente sobre observação de payloads, estados, eventos e decisões. Nenhuma informação acadêmica, profissional ou biográfica adicional foi inventada. O link profissional permanece ausente porque `linkedin` é `null`.

## Colaboração e contato

Universidades, laboratórios, equipes, organizações, estudantes e educadores aparecem como públicos possíveis. Pilotos e estudos aparecem como possibilidades. `contact`, `email` e `linkedin` continuam `null`; por isso não há CTA, formulário, modal ou anchor de contato. `ContactSection` foi preservado e continua não renderizado.

## CTA final

- eyebrow: `Comece agora`;
- título: `Comece por um único flow`;
- principal: `Entrar na formação` → Udemy atual;
- secundário: `Ver o payload atravessar o sistema` → `#demo`;
- campanha: informação secundária;
- cupom: `expiration: null`.

## Footer

- identidade, tagline e descrição curta;
- navegação independente do Header;
- canais confirmados: Udemy e YouTube atual do Footer;
- informação institucional e copyright reais;
- zero links vazios;
- nenhum nome de página legal inexistente no HTML.

Os nomes históricos de Política de Privacidade e Termos de uso permanecem apenas na fonte server-side; `privacy-policy` e `terms-of-use` são registrados como rotas ausentes.

## Conteúdo condensado

- pilares detalhados movidos da apresentação pública de O LAB para o Ecossistema;
- metodologia substituída por referência curta em O LAB;
- Track Mode, Trace Engineer e Software System Investigation não são repetidos no Ecossistema;
- LabLog usa temas, não contratos completos de métodos;
- Sobre concentra origem, visão e autoria;
- campanha deixa de ser o título do CTA final;
- Footer remove placeholders legais e o link interno redundante da coluna de canais.

## Conteúdo preservado

Copies anteriores de O LAB, Ecossistema, LabLog, Sobre/fundadora e CTA final foram mantidas em campos `historicalPresentation`. Nomes legais anteriores foram mantidos em `historicalPolicies`. Esses dados permanecem na fonte server-side e não entram no HTML público nem em nova fronteira client.

Header, Hero, Dor, Competências, Trilha, Demo, Formação, HORA.city, Procedimento, Métodos e Prática investigativa permaneceram intactos. HORA.city continua `unresolved`; YouTube continua `unresolved`; cupom continua com `expiration: null`.

## Matriz de migração

A matriz registra individualmente O LAB, os quatro pilares, colaboração sem destino, LabLog, dois YouTubes, Sobre, fundadora, link profissional pendente, CTA final, Footer, rotas legais ausentes, ContactSection reservado, condensações e Sprint 8.

## Acessibilidade

- um H1;
- seções finais em H2 e blocos internos em H3;
- listas semânticas para pilares, atividades, públicos, temas, valores e contexto confirmado;
- 50 IDs DOM únicos;
- zero links vazios e zero destinos internos ausentes;
- links externos seguros;
- foco visível e reduced motion preservados;
- menu mobile abre, Escape fecha e foco retorna;
- conteúdo completo sem hover;
- um único Client Component: `MobileNavigation`.

Leitor de tela real não foi executado.

## Contraste

Não foram introduzidas cores literais nem tokens novos. A implementação reutiliza verde legível em 5,80:1, CTA de contraste em 6,12:1 e as combinações protegidas pela fundação.

## Responsividade

| Viewport | Sprint 6 | Sprint 7 | Diferença | Overflow |
| --- | ---: | ---: | ---: | --- |
| 360×800 | 34.994 px | 37.903 px | +2.909 px | não |
| 390×844 | 33.377 px | 36.120 px | +2.743 px | não |
| 768×1024 | 24.009 px | 26.688 px | +2.679 px | não |
| 1024×768 | 19.331 px | 20.828 px | +1.497 px | não |
| 1280×800 | 17.607 px | 18.822 px | +1.215 px | não |
| 1440×900 | 17.607 px | 18.770 px | +1.163 px | não |

Screenshots temporários foram capturados nas seis larguras fora de `baseline/`. Não houve corte, sobreposição, links legais visíveis ou overflow.

## Performance

| Métrica | Sprint 6 | Sprint 7 | Diferença |
| --- | ---: | ---: | ---: |
| Rota `/` | 7,03 kB | 7,03 kB | 0 |
| First Load JS | 94,3 kB | 94,3 kB | 0 |
| Shared JS | 87,2 kB | 87,2 kB | 0 |
| Client Components | 1 | 1 | 0 |
| HTML estático | 269.715 bytes | 297.200 bytes | +27.485 bytes |
| CSS gerado | 28.699 bytes | 28.747 bytes | +48 bytes |

O crescimento é conteúdo institucional estático e semântico. JavaScript, Shared JS e fronteiras client não cresceram. Nenhuma dependência, API, vídeo, imagem, animação ou runtime de layout foi adicionado.

## Validações

| Comando ou verificação | Resultado | Observações |
| --- | --- | --- |
| `npm.cmd run lint` | aprovado | sem warnings ou erros |
| `npm.cmd exec tsc -- --noEmit` | aprovado | sem erros |
| `npm.cmd run build` | aprovado | sete rotas estáticas; JavaScript inalterado |
| `npm.cmd run verify:homepage` | aprovado | 70 conteúdos, 40 IDs estáveis, quatro pilares e guardrails |
| `npm.cmd run verify:foundation` | aprovado | seis Server Components da Sprint 7 protegidos |
| Chrome headless em seis viewports | aprovado | HTTP 200, zero overflow e zero erros browser |
| Menu mobile | aprovado | abriu, Escape fechou e foco retornou em 360, 390 e 768 px |
| Links e legal | aprovado | zero links vazios; nomes legais inexistentes ausentes do HTML |
| `git diff --check` | aprovado | sem erro de whitespace; avisos LF→CRLF do ambiente |
| Hashes da pasta de sprints | aprovado | hashes iniciais e finais idênticos |

O build manteve os dois warnings preexistentes de cache Webpack. O servidor de produção registrou o aviso informativo de que `sharp` é opcional para otimização de imagens; nenhuma dependência foi adicionada.

## Diferenças visuais esperadas

- O LAB mais curto e orientado por missão/princípio;
- Ecossistema com quatro cards institucionais detalhados;
- LabLog com temas confirmados;
- Sobre em origem, visão e autoria;
- CTA final com duas ações;
- Footer sem placeholders de páginas legais;
- aumento moderado da altura total.

## Áreas não alteradas

Header, Hero, Dor, Competências, Trilha, Demo, Formação, HORA.city, Procedimento, Métodos, Prática investigativa, metadata, analytics, assets, dependências, baseline oficial e documentos oficiais de sprint.

## Problemas encontrados

1. O primeiro teste browser disparou Escape no alvo errado; a verificação foi corrigida para o `document` e confirmou o comportamento existente.
2. Os warnings preexistentes de cache Webpack continuaram.
3. O runtime de produção informou que `sharp` é opcional; atualização de dependências permaneceu fora do escopo.

## Riscos remanescentes

- YouTube oficial não resolvido;
- validade e owner do cupom não confirmados;
- HORA.city editorialmente `unresolved`;
- contato, e-mail e LinkedIn ausentes;
- páginas legais inexistentes;
- leitor de tela real não executado;
- revisão textual final, SEO, metadata, performance aprofundada e publicação pendentes.

## Recomendação para a Sprint 8

Executar QA integral, leitor de tela, SEO e metadata, revisão textual, validação de links externos, análise de performance, screenshots finais, comparação antes/depois e preparação controlada da versão. Resolver decisões editoriais somente com fontes confirmadas. Release, tag, deploy e publicação devem ocorrer apenas depois desses gates.
