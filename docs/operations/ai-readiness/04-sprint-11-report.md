# Sprint 11 — relatório final de canonicalização e proveniência semântica

## Resultado executivo

A implementação local da Sprint 11 foi concluída. As 11 páginas indexáveis agora concordam sobre `https://www.payloadjourneylab.com`; a USMT possui uma forma oficial única; a proveniência é explícita e contextual; e o JSON-LD usa um grafo mínimo sustentado por conteúdo público.

A infraestrutura e a produção são reportadas separadamente. A Vercel já redireciona o domínio apex para `www`, mas o deploy público ainda entrega os sinais canônicos anteriores e mantém uma cadeia para apex `/about`. Como nenhum deploy foi autorizado, esses itens continuam pendentes de validação pública pós-deploy.

## Baseline congelado

- branch: `refactor/homepage-v0.2.0`;
- commit: `794da9700e6154712e9b7811318c4daa147a8add` (`fundadora`);
- versão: `0.2.0`;
- Next.js efetivo: `14.2.35`;
- worktree e staging iniciais: limpos;
- rotas indexáveis: 11;
- redirect de compatibilidade: 1;
- rotas 404 deliberadas: 5;
- Client Components: 1 (`MobileNavigation`);
- páginas estáticas no build: 17;
- First Load JS: 94,3 kB;
- JS compartilhado: 87,2 kB.

Todos os gates do baseline passaram. O HTML inicial das 11 rotas foi guardado temporariamente para comparação e removido ao concluir o QA.

## Estado público observado antes e depois da implementação local

| Sinal público | Estado observado | Classificação |
| --- | --- | --- |
| apex `/` | 308 para `https://www.payloadjourneylab.com/` | hosting configurado |
| `www/` | 200 | produção disponível |
| apex `/about` | 308 para `https://www…/about` | primeiro salto da cadeia |
| `www/about` | 308 para `/lab#sobre` | redirect da aplicação já publicado |
| canonical da homepage | apex | deploy anterior |
| `og:url` | apex | deploy anterior |
| robots Host/Sitemap | apex | deploy anterior |
| sitemap | 11 URLs apex | deploy anterior |

A página pública tinha o mesmo tamanho da homepage local do baseline, 104.509 bytes, confirmando que o deploy ainda representa o código anterior à Sprint 11. A validação foi repetida após a implementação local e permaneceu inalterada, como esperado sem deploy.

## Configuração canônica

`config/site.ts` tornou-se a fonte operacional única de identidade técnica e semântica. Ele agora concentra origem, nome, idioma, fundadora e USMT, além do helper de URL absoluta.

Foram alinhados:

- `metadataBase`;
- canonical global e por rota;
- Open Graph;
- sitemap;
- robots Host e Sitemap;
- URLs e IDs JSON-LD;
- testes ativos.

Resultado operacional: URLs apex absolutas `3 → 0`. Documentos históricos não foram alterados nem incluídos no gate.

## Redirects

### Aplicação

Foram implementadas três regras:

1. apex `/about` → `https://www.payloadjourneylab.com/lab#sobre`;
2. apex `/:path*` → mesmo path em `www`;
3. `www/about` → `/lab#sobre`.

O gate local com cabeçalho `Host` comprovou `308`, preservação de path/query e ausência de cadeia dentro da aplicação. Esse teste não é usado como prova do hosting.

### Hosting

A Vercel já executa apex → `www` antes da aplicação. Esse comportamento está publicamente confirmado. Entretanto, a precedência atual produz dois saltos para apex `/about`.

### Produção após deploy

Pendente. Após um futuro deploy, será necessário:

- confirmar canonical, OG, robots, sitemap e JSON-LD `www`;
- repetir as variantes HTTP/HTTPS e apex/`www`;
- decidir na Vercel como eliminar a cadeia específica de apex `/about`, se a camada de domínio continuar interceptando antes da regra da aplicação.

## USMT

A forma oficial é:

`USMT — Universal System Modeling Template`

Foram corrigidos o título da rota, o conteúdo principal e os testes. A definição pública adicionada foi exclusivamente positiva:

> A USMT é um template metodológico autoral desenvolvido no Payload Journey LAB para modelar estados, eventos, regras, invariantes, camadas e comportamento esperado.

Não foi adicionada uma lista pública de negações. Os controles contra interpretações como certificação, padrão ou produto permanecem no gate e na matriz editorial.

- expansões incorretas operacionais: `3 → 0`;
- 12 elementos: preservados;
- WHERE, HOW, LOGIC e SAFE: preservados;
- exemplos, conexões e sequência metodológica: preservados.

## Proveniência contextual

- `/lab`: origem, fundadora e autoria permanecem na narrativa institucional fornecida;
- `/usmt`: definição autoral, autoria e relação com o LAB;
- `/method`: métodos do LAB e distinção em relação ao procedimento;
- `/protocol`: processo operacional do Payload Journey LAB;
- `/investigation`: prática que reúne procedimento, métodos e evidências no LAB;
- `/cases`: ambiente de investigação aplicada do LAB e estado em andamento;
- `/lablog`: registro editorial e desenvolvimento público dos métodos do LAB.

Não foi criado componente repetitivo de proveniência. Conteúdo existente foi reutilizado quando já era inequívoco; somente `/usmt` e a description do protocolo receberam copy operacional nova.

## JSON-LD

### Antes

- homepage: `Organization`, `WebSite`, `WebPage`;
- páginas temáticas: `WebPage` isolada com referências genéricas a `Organization`.

### Depois

- todas as páginas: `WebSite` + `WebPage` conectadas;
- `/lab`: acrescenta `Person`;
- `/usmt`: acrescenta `Person` + `CreativeWork` e define a USMT como `mainEntity`;
- `CreativeWork.creator` aponta para `/lab#founder`;
- todos os IDs usam `www`;
- zero `Organization`.

`Organization` foi removida porque não acrescentava clareza suficiente e podia sugerir estrutura formal não confirmada. Nenhum subtipo institucional foi inventado.

## Robots e indexabilidade

A política foi preservada byte por intenção:

- crawlers gerais: permitidos;
- `OAI-SearchBot`: permitido;
- `ChatGPT-User`: permitido;
- `GPTBot`: bloqueado.

O sitemap local contém exatamente as 11 rotas indexáveis com `www`. `/about`, rotas 404 e rotas técnicas permanecem ausentes.

## HORA.city e guardrails editoriais

- `editorialResolution: "unresolved"` preservado;
- “Investigação em andamento” permanece no HTML;
- nenhum resultado, origem ou restauração foi inventado;
- dois destinos de YouTube e `resolutionStatus: "unresolved"` preservados;
- cupom com `expiration: null` preservado;
- páginas legais inexistentes continuam ausentes;
- públicos de colaboração continuam possibilidades, não relações atuais;
- nenhuma data, versão, equipe, cliente, credencial ou parceria foi inventada.

## Testes e QA

| Verificação | Resultado |
| --- | --- |
| ESLint | aprovado, zero warnings/erros |
| TypeScript | aprovado |
| `verify:foundation` | aprovado |
| `verify:homepage` | aprovado: 11×200, 1×308, 5×404 |
| `verify:ai-readiness` | aprovado |
| build de produção | aprovado: 17 páginas estáticas |
| smoke de produção local | aprovado nas 11 rotas |
| canonical + Open Graph | `www` nas 11 rotas |
| sitemap | 11 URLs `www`, sem `/about` |
| robots | política preservada e sitemap `www` |
| JSON-LD | JSON válido, IDs únicos e relações resolvíveis |
| HTML sem JavaScript | conteúdo e proveniência presentes |
| responsividade | quatro viewports sem overflow |
| menu mobile | Escape fecha e devolve foco |
| console/hydration | zero erro |

Um primeiro smoke de produção encontrou um processo Next antigo na porta 3212, que mantinha `.next` aberto. O listener foi identificado e encerrado, o build foi regenerado e o smoke limpo passou na porta 3213. Isso foi uma interferência ambiental, não uma falha da aplicação.

Uma execução paralela dos dois verificadores que iniciam `next dev` também disputou `.next`, produzindo um 404 transitório e referências temporárias ausentes no typecheck. Os gates foram repetidos sequencialmente; homepage, build e TypeScript passaram no estado final. Essa ordem sequencial é a evidência válida.

## QA responsivo de `/usmt`

| Viewport | largura útil | scrollWidth | altura | Overflow |
| --- | ---: | ---: | ---: | --- |
| 1440×900 | 1425 | 1425 | 3.750 | não |
| 768×1024 | 753 | 753 | 5.459 | não |
| 390×844 | 390 | 390 | 8.073 | não |
| 360×800 | 360 | 360 | 8.378 | não |

Em todos os viewports: um H1, 12 elementos, quatro lentes e canonical `https://www.payloadjourneylab.com/usmt`.

## Performance e HTML

| Rota | HTML antes | HTML depois | Diferença |
| --- | ---: | ---: | ---: |
| `/` | 104.509 | 103.762 | −747 |
| `/payload-journey` | 90.258 | 90.956 | +698 |
| `/learn` | 67.480 | 68.178 | +698 |
| `/cases` | 54.600 | 55.298 | +698 |
| `/usmt` | 78.633 | 81.734 | +3.101 |
| `/method` | 59.152 | 59.850 | +698 |
| `/protocol` | 72.141 | 72.989 | +848 |
| `/investigation` | 56.990 | 57.688 | +698 |
| `/lab` | 53.840 | 55.109 | +1.269 |
| `/ecosystem` | 61.152 | 61.850 | +698 |
| `/lablog` | 38.221 | 38.919 | +698 |

O incremento comum corresponde ao `WebSite` conectado em cada grafo. Os incrementos específicos de `/lab` e `/usmt` correspondem a `Person`, `CreativeWork` e à definição pública. Não houve aumento de JavaScript:

- First Load JS: 94,3 kB → 94,3 kB;
- JS compartilhado: 87,2 kB → 87,2 kB;
- Client Components: 1 → 1;
- dependências: nenhuma alteração.

## Reavaliação das quatro P1

| P1 | Estado anterior | Implementação local | Evidência | Estado final |
| --- | --- | --- | --- | --- |
| host canônico | produção em `www`, sinais apex | siteConfig, metadata, sitemap, robots, OG, JSON-LD e redirects alinhados | gate local e build | parcialmente resolvida: código concluído; deploy e cadeia do hosting pendentes |
| expansão USMT | `Model` e `Modeling` | forma oficial única | zero ocorrência incorreta operacional | resolvida no código; confirmação pública pendente de deploy |
| definições e fontes principais | conceitos distribuídos | definição positiva da USMT e proveniência contextual | HTML das sete rotas relevantes | resolvida no código; confirmação pública pendente de deploy |
| proveniência e Schema | JSON-LD genérico | `Person`, `CreativeWork`, páginas conectadas e HTML correspondente | parse do grafo e matriz | resolvida no código; confirmação pública pendente de deploy |

Resumo: quatro P1 resolvidas na aplicação; nenhuma pode ser declarada publicamente concluída antes do deploy. Uma ação específica de hosting permanece para eliminar a cadeia apex `/about`.

## Arquivos criados

- `docs/ai-readiness/02-sprint-11-canonical-entity-map.md`
- `docs/ai-readiness/03-sprint-11-provenance-matrix.md`
- `docs/ai-readiness/04-sprint-11-report.md`
- `scripts/verify-ai-readiness.mjs`

## Arquivos modificados

- `app/layout.tsx`
- `app/robots.ts`
- `app/sitemap.ts`
- `components/sections/UsmtSection.tsx`
- `config/site.ts`
- `content/payload-journey-lab.ts`
- `content/routes.ts`
- `content/site.ts`
- `content/usmt.ts`
- `lib/structured-data.ts`
- `next.config.mjs`
- `package.json`
- `scripts/verify-homepage.mjs`
- `types/content.ts`

## Arquivos removidos

Nenhum.

Nenhum arquivo temporário integra o resultado. `package-lock.json` e dependências permaneceram inalterados. Não houve staging, commit, push ou deploy.

## Integridade documental

Arquivos protegidos no baseline:

- `docs/ai-readiness/01-pjl-ai-friendliness-audit.md`: 45.549 bytes — SHA-256 `88E8DF76596D8FF4AEFB859EE4B0264FC8D13E5199F02EA2902DF76831C28F09`;
- `sprint 10.md`: 22.611 bytes — SHA-256 `9680A33F8833676CB36419649D1DEAB617CF209EF08EA4478E613DED51D1C5B7`;
- `sprint 11.md`: 27.883 bytes — SHA-256 `50AAB832F2A76598EB009E1A72CF517DD2B6AAD51F5ADB931665899321F2E998`;
- `auditoria.md`: 23.225 bytes — SHA-256 `84140390D7DD216AAEE2CBA919A591F14CDB6A7A8102CC8802C741BF3DD72577`.

Os hashes devem coincidir na verificação final. A auditoria original não foi reescrita e a nota `78/100` permanece histórica.
