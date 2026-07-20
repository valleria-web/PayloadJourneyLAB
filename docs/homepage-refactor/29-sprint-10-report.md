# Sprint 10 — relatório final de unificação institucional

## Resultado executivo

A Sprint 10 foi implementada integralmente. `/lab` é a única página institucional pública, indexável e operacional do Payload Journey LAB. Todo o conteúdo antes renderizado por `/lab` e `/about` foi consolidado numa narrativa contínua, sem inventar fatos e sem ampliar a biografia da fundadora. `/about` agora é exclusivamente uma rota de compatibilidade permanente para `/lab#sobre`.

O inventário foi concluído antes de qualquer remoção, e a matriz final comprova 100% de preservação das informações públicas. As fontes runtime duplicadas foram removidas somente depois dessa comprovação.

## Baseline

- branch observada: `refactor/homepage-v0.2.0`;
- commit observado: `1ae665afa7b8c8000f4bf952d5d0adfb7ee10b3e` (`pages`);
- aplicação: `0.2.0`;
- Next.js: `14.2.35`;
- data da execução: 20 de julho de 2026;
- staging inicial: vazio;
- páginas estáticas antes: 18;
- rotas indexáveis antes: 12;
- HTML estático antes: `/lab` 36.070 bytes; `/about` 41.209 bytes;
- First Load JS antes em `/lab` e `/about`: 94,3 kB;
- JS compartilhado antes: 87,2 kB;
- Client Components antes: 1 (`MobileNavigation`).

## Arquitetura final

A estrutura pública institucional passou a ser:

1. introdução e H1 único;
2. `#lab` — definição do laboratório;
3. `#sobre` — origem, visão e autoria;
4. `#origin` — origem e problema motivador;
5. `#mission` e `#principle` — missão e princípio;
6. `#vision` — visão;
7. `#how-the-lab-works` — seis formas de atuação em `<ol>`;
8. `#founder` — fundadora, autoria e relação com a USMT;
9. continuidade para USMT, método e investigação aplicada;
10. Footer independente.

`LabOverviewSection` continua sendo Server Component. O LAB, a síntese da homepage, CTA final e Footer permanecem server-side. Nenhuma fronteira Client foi criada: o total continua em 1.

## Conteúdo e autoria

Foram integrados em `siteContent.lab` a origem, o problema motivador, missão, princípio, visão, as seis formas de atuação, os fatos confirmados sobre Valéria dos Santos Reiser e a relação LAB–USMT. A apresentação permanece restrita a:

- criadora do Payload Journey LAB;
- criadora da Universal System Modeling Template (USMT);
- desenvolvimento de maneiras de observar payloads, estados, eventos e decisões em sistemas complexos;
- desenvolvimento dos métodos que estruturam a prática de investigação aplicada do LAB.

Nenhuma formação, cargo, vínculo, parceria, instituição ou atividade corrente foi inferida. `siteContent.about`, `AboutPresentation`, `thematicRoutes.about`, `AboutSection` e a página antiga foram removidos do runtime depois da migração integral. Conteúdo histórico não utilizado não é enviado ao HTML nem ao bundle client.

## Homepage, Header e Footer

- a homepage agora contém uma única síntese institucional `O LAB`, com destino `/lab`;
- o Header desktop e mobile contém somente `O LAB` como entrada institucional;
- o Footer continua com `O LAB` e permanece alimentado por sua fonte própria;
- nenhum link interno renderizado aponta para `/about`;
- não foram adicionadas páginas legais inexistentes: `/privacy-policy` e `/terms-of-use` continuam 404 deliberados e permanecem pendências, sem nomes fictícios no Footer.

## Redirect e contrato HTTP

O redirect foi implementado na configuração do Next.js:

```text
/about → /lab#sobre
```

A resposta de produção local é `308 Permanent Redirect` e entrega `Location: /lab#sobre`. O cliente chega a `/lab#sobre`, e o ID `#sobre` existe na página final. Isso não depende de o servidor receber um fragmento antigo: fragmentos não integram requisições HTTP.

Não foram encontrados parâmetros funcionais, links parametrizados ou documentação de query strings para `/about`; portanto, query strings não faziam parte do contrato público da rota antiga e nenhuma lógica específica foi criada para transportá-las. O comportamento padrão observado do framework preservou uma query arbitrária antes do fragmento (`/lab?source=unknown#sobre`), mas a implementação não assume nem promete esse comportamento como contrato funcional.

## Rotas, sitemap e SEO

As classes finais são explicitamente distintas:

- 11 rotas indexáveis com `200`: `/`, `/payload-journey`, `/learn`, `/cases`, `/usmt`, `/method`, `/protocol`, `/investigation`, `/lab`, `/ecosystem`, `/lablog`;
- 1 rota de compatibilidade com `308`: `/about`;
- 5 rotas deliberadamente inexistentes com `404`: `/mapping`, `/reverse-payload-journey`, `/resources`, `/privacy-policy`, `/terms-of-use`.

`/about` não foi reinserida em `thematicRoutes`, `publicRoutePaths` ou qualquer coleção indexável. O sitemap responde `200`, contém exatamente as 11 rotas indexáveis, inclui `/lab` e exclui `/about`. Metadata, canonical e JSON-LD institucionais são emitidos apenas pela página canônica `/lab`.

## Acessibilidade

- um único `h1` em `/lab`;
- hierarquia de headings preservada;
- IDs `#lab` e `#sobre` preservados, com `scroll-margin` apropriado nos destinos internos;
- seis formas de atuação em lista ordenada semântica, com seis itens;
- listas de contexto da fundadora continuam semanticamente marcadas;
- links e botões mantêm estilos de foco do design foundation;
- nenhum novo controle interativo ou requisito de JavaScript foi introduzido;
- navegação mobile existente permanece a única fronteira Client;
- regras existentes de movimento reduzido não foram alteradas.

## Responsividade e QA visual

O QA automatizado por navegador mediu a página completa nos quatro viewports finais:

| Viewport | largura útil | largura do conteúdo | altura total | Overflow horizontal |
| --- | ---: | ---: | ---: | --- |
| 1440 × 900 | 1425 px | 1425 px | 3.786 px | não |
| 768 × 1024 | 768 px | 768 px | 4.327 px | não |
| 390 × 844 | 390 px | 390 px | 5.297 px | não |
| 360 × 800 | 360 px | 360 px | 5.606 px | não |

No desktop, a narrativa usa colunas para visão/formas de atuação e para os fatos da fundadora. Em telas pequenas, conteúdo, cards, lista, CTAs e Footer empilham sem corte ou rolagem lateral.

Capturas produzidas:

- baseline: `sprint10-before-lab-desktop.png`, `sprint10-before-lab-mobile.png`, `sprint10-before-about-desktop.png`, `sprint10-before-about-mobile.png`;
- final: `sprint10-after-lab-desktop.png`, `sprint10-after-lab-tablet.png`, `sprint10-after-lab-mobile.png`, `sprint10-after-lab-mobile-360.png`;
- redirect: `sprint10-about-redirect-proof.png`, carregado em `/lab#sobre`.

## Performance e build

| Métrica | Antes | Depois | Variação |
| --- | ---: | ---: | ---: |
| páginas estáticas | 18 | 17 | −1 página duplicada |
| rotas institucionais indexáveis | 2 | 1 | consolidação concluída |
| First Load JS de `/lab` | 94,3 kB | 94,3 kB | 0 kB |
| JS compartilhado | 87,2 kB | 87,2 kB | 0 kB |
| Client Components | 1 | 1 | 0 |
| HTML de `/lab` | 36.070 bytes | 52.099 bytes | conteúdo de duas páginas consolidado |

O aumento do HTML de `/lab` corresponde ao conteúdo institucional que antes exigia uma segunda navegação. Não houve regressão de JavaScript, dependência nova ou nova hidratação. O build final passou; os únicos avisos foram os dois avisos preexistentes do cache Webpack. O teste de produção local também mostrou o aviso opcional e não bloqueante sobre `sharp`; nenhuma dependência foi instalada por causa dele.

## Verificações executadas

- `npm run lint` — aprovado;
- `npx tsc --noEmit` — aprovado;
- `npm run verify:foundation` — aprovado;
- `npm run verify:homepage` — aprovado;
- `npm run build` — aprovado;
- smoke HTTP de produção local — 11×`200`, 1×`308`, 5×`404`;
- redirect seguido — chegada em `/lab#sobre`;
- sitemap — 11 URLs, `/lab` presente e `/about` ausente;
- QA responsivo — quatro viewports, zero overflow horizontal;
- matriz de preservação — 100%.

## Documentação

- `27-sprint-10-institutional-content-inventory.md` — inventário congelado antes das remoções;
- `28-sprint-10-preservation-matrix.md` — rastreabilidade item a item e cobertura;
- `29-sprint-10-report.md` — este relatório final.

## Arquivos da Sprint 10

### Criados

- `docs/homepage-refactor/27-sprint-10-institutional-content-inventory.md`
- `docs/homepage-refactor/28-sprint-10-preservation-matrix.md`
- `docs/homepage-refactor/29-sprint-10-report.md`
- `docs/homepage-refactor/sprint10-before-lab-desktop.png`
- `docs/homepage-refactor/sprint10-before-lab-mobile.png`
- `docs/homepage-refactor/sprint10-before-about-desktop.png`
- `docs/homepage-refactor/sprint10-before-about-mobile.png`
- `docs/homepage-refactor/sprint10-after-lab-desktop.png`
- `docs/homepage-refactor/sprint10-after-lab-tablet.png`
- `docs/homepage-refactor/sprint10-after-lab-mobile.png`
- `docs/homepage-refactor/sprint10-after-lab-mobile-360.png`
- `docs/homepage-refactor/sprint10-about-redirect-proof.png`

### Modificados

- `app/lab/page.tsx`
- `app/page.tsx`
- `components/sections/HomePathwaysSections.tsx`
- `components/sections/LabOverviewSection.tsx`
- `content/payload-journey-lab.ts`
- `content/routes.ts`
- `content/site.ts`
- `next.config.mjs`
- `scripts/verify-design-foundation.mjs`
- `scripts/verify-homepage.mjs`
- `types/content.ts`

### Removidos

- `app/about/page.tsx`
- `components/sections/AboutSection.tsx`

Nenhum arquivo temporário integra o resultado. Nenhuma dependência foi atualizada. Não houve staging, commit, push, pull, merge, rebase, tag, deploy, checkout ou troca de branch.

## Integridade documental

`docs/sprints para v2/sprint 10.md` permaneceu untracked, fora de staging e byte a byte inalterado:

- tamanho: 22.611 bytes;
- SHA-256: `9680A33F8833676CB36419649D1DEAB617CF209EF08EA4478E613DED51D1C5B7`.

Também foram preservados os arquivos preexistentes fora do escopo:

- `auditoria.md`: 23.225 bytes, SHA-256 `84140390D7DD216AAEE2CBA919A591F14CDB6A7A8102CC8802C741BF3DD72577`;
- `sprint 11.md`: 27.883 bytes, SHA-256 `50AAB832F2A76598EB009E1A72CF517DD2B6AAD51F5ADB931665899321F2E998`.

O staging final permanece vazio.
