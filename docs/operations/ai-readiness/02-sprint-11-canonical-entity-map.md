# Sprint 11 — mapa de canonicalização e entidades

## Baseline

- branch: `refactor/homepage-v0.2.0`
- commit: `794da9700e6154712e9b7811318c4daa147a8add` (`fundadora`)
- versão: `0.2.0`
- data: 20 de julho de 2026
- rotas indexáveis: 11
- rota de compatibilidade: `/about` → `/lab#sobre`
- host público efetivo: `https://www.payloadjourneylab.com`
- host declarado pelo código e pelo deploy anterior: `https://payloadjourneylab.com`

O inventário foi produzido antes das alterações. Documentos históricos foram excluídos das contagens operacionais porque preservam deliberadamente evidências anteriores.

## Ocorrências operacionais

| Sinal | Antes | Depois | Resultado |
| --- | ---: | ---: | --- |
| URL absoluta apex `https://payloadjourneylab.com` | 3 | 0 | removida de fontes operacionais e testes ativos |
| URL absoluta canônica `https://www.payloadjourneylab.com` | 0 | 4 | origem, redirect e gate centralizados |
| expansão incorreta `Universal System Model Template` | 3 | 0 | eliminada do conteúdo, metadata e testes ativos |
| expansão oficial `Universal System Modeling Template` | 4 | 7 | forma única preservada |

As três ocorrências apex anteriores estavam em `content/site.ts` e em duas expectativas do verificador da homepage. As três expansões incorretas estavam em `content/routes.ts`, `content/usmt.ts` e `scripts/verify-homepage.mjs`.

## Configuração canônica

`config/site.ts` é a fonte operacional de:

- nome, tagline, title e description;
- origem `https://www.payloadjourneylab.com`;
- idioma `pt-BR` e locale `pt_BR`;
- nome e ID público da fundadora;
- nome oficial, sigla, descrição e ID público da USMT;
- resolução de URLs absolutas por `absoluteSiteUrl()`.

`content/site.ts` continua responsável por navegação, campanha e destinos externos. A propriedade duplicada `siteLinks.website` foi removida.

## Mapa de páginas

| Página | URL canônica | `@id` da página | Fonte pública principal | Observações |
| --- | --- | --- | --- | --- |
| homepage | `https://www.payloadjourneylab.com` | `https://www.payloadjourneylab.com/#webpage` | `/` | síntese e entradas temáticas |
| Payload Journey | `https://www.payloadjourneylab.com/payload-journey` | `…/payload-journey#webpage` | `/payload-journey` | demonstração compartilhada preservada |
| formação | `https://www.payloadjourneylab.com/learn` | `…/learn#webpage` | `/learn` | formação pública |
| casos | `https://www.payloadjourneylab.com/cases` | `…/cases#webpage` | `/cases` | HORA.city permanece não resolvido |
| USMT | `https://www.payloadjourneylab.com/usmt` | `…/usmt#webpage` | `/usmt` | fonte principal da USMT |
| métodos | `https://www.payloadjourneylab.com/method` | `…/method#webpage` | `/method` | visão integrada dos métodos do LAB |
| protocolo | `https://www.payloadjourneylab.com/protocol` | `…/protocol#webpage` | `/protocol` | processo operacional do LAB |
| investigação | `https://www.payloadjourneylab.com/investigation` | `…/investigation#webpage` | `/investigation` | prática investigativa do LAB |
| LAB | `https://www.payloadjourneylab.com/lab` | `…/lab#webpage` | `/lab` | fonte institucional e de autoria |
| ecossistema | `https://www.payloadjourneylab.com/ecosystem` | `…/ecosystem#webpage` | `/ecosystem` | áreas e possibilidades, sem parceria presumida |
| LabLog | `https://www.payloadjourneylab.com/lablog` | `…/lablog#webpage` | `/lablog` | registro editorial do LAB |

`/about` não é uma página indexável e não possui canonical próprio. Ela permanece exclusivamente como redirect 308 para `/lab#sobre`.

## Mapa de entidades

| Entidade | Tipo | URL / `@id` | Fonte pública | Relações |
| --- | --- | --- | --- | --- |
| site oficial | `WebSite` | `https://www.payloadjourneylab.com/#website` | todas as páginas | recebe `isPartOf` de cada `WebPage` |
| página atual | `WebPage` | URL canônica + `#webpage` | rota correspondente | `isPartOf` → `WebSite` |
| Valéria dos Santos Reiser | `Person` | `https://www.payloadjourneylab.com/lab#founder` | `/lab#founder` | mencionada por `/lab`; creator da USMT |
| Universal System Modeling Template | `CreativeWork` | `https://www.payloadjourneylab.com/usmt#usmt` | `/usmt#usmt` | creator → `Person`; `isPartOf` → `WebSite`; mainEntity de `/usmt` |

## Decisão sobre `Organization`

`Organization` foi removida. O conteúdo público confirma o LAB como laboratório de formação, pesquisa metodológica e investigação aplicada, mas não confirma pessoa jurídica, equipe, sede ou estrutura empresarial. O tipo genérico anterior acrescentava ambiguidade sem oferecer uma relação necessária que não pudesse ser expressa pelo grafo mínimo.

Nenhum subtipo institucional foi inventado. O grafo final utiliza somente `WebSite`, `WebPage`, `Person` e `CreativeWork` nas páginas que sustentam essas entidades.

## Camadas de redirect

| Camada | Estado | Evidência |
| --- | --- | --- |
| aplicação — apex genérico | implementada | regra host-based 308 preserva path e query |
| aplicação — apex `/about` | implementada | regra específica entrega diretamente `https://www…/lab#sobre`, evitando cadeia dentro da aplicação |
| aplicação — `www/about` | implementada | 308 relativo para `/lab#sobre` |
| hosting — apex → `www` | configurada antes da sprint | Vercel responde 308 para o mesmo path no host `www` |
| hosting — apex `/about` sem cadeia | pendente | Vercel atualmente envia apex `/about` para `www/about`, que então redireciona para `/lab#sobre` |
| produção com novos sinais canônicos | pendente de deploy | canonical, robots, sitemap e OG públicos continuam no apex |

Testes com `Host` comprovam somente o comportamento da aplicação. Não comprovam a precedência ou a configuração pública da Vercel.
