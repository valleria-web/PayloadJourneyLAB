# Plano de Implementação — Sprint 6

## Navegação, Canais e Descoberta

## 1. Estado

Este documento planeja a Sprint 6 sem iniciar sua implementação.

A execução depende de:

1. aprovação humana explícita deste plano;
2. confirmação de que a Sprint 5 está aprovada para avanço;
3. repetição do gate documental e técnico;
4. atribuição integral do worktree;
5. manutenção da decisão humana de não inferir canais oficiais.

Nenhum ficheiro de Header, mobile, Footer, continuidade ou canal foi alterado durante a elaboração deste plano. Nenhuma atividade da Sprint 7 foi iniciada.

## 2. Correspondência com a especificação

O plano cobre `docs/sprints para v3/sprint 6.md`:

- 11 rotas canônicas e redirect `/about`;
- Header desktop com cinco escolhas;
- CTA global para `/payload-journey`;
- estado ativo semântico;
- navegação mobile equivalente;
- Footer como mapa expandido;
- continuidade contextual por rota;
- profundidade máxima de descoberta;
- inventário e decisão de canais;
- auditoria de links, âncoras, redirects e segurança;
- `verify:navigation-discovery`;
- 11 gates finais;
- validação responsiva nas 11 rotas;
- relatório `Sprint 6 - Navegacao Canais e Descoberta.md`;
- proteção contra início da Sprint 7.

## 3. Origem da especificação

`docs/sprints para v3/sprint 6.md`:

- origem atribuída: especificação fornecida pelo utilizador;
- estado: não rastreado no Git;
- criado em 23 de julho de 2026 às 13:28:11;
- última escrita às 13:33:05;
- tamanho: 24.203 bytes;
- SHA-256: `075B4DA103303AEAD78EB1AB57020831590A00EDFBCA1EDCC8EECFC7E494DFAC`.

O ficheiro deverá permanecer inalterado.

## 4. Baseline

| Item | Estado |
|---|---|
| Branch | `refactor/homepage-v0.2.0` |
| HEAD | `fce173295dd6e6c5023c351008201cfa45b16c5e` |
| Node | 22.19.0 |
| npm | 11.6.3 |
| Next.js | 14.2.35 |
| Rotas canônicas esperadas | 11 |
| Redirect legado | `/about` → `/lab#sobre` |
| Header | 4 escolhas; sem `Início`; CTA `/learn` |
| Mobile | mesmo array; Escape e retorno de foco já existem |
| Estado ativo | ausente |
| Footer | navegação plana com 5 links e 2 canais |
| YouTube | 2 URLs divergentes, canonicidade `null` |
| LinkedIn | pessoal/institucional não configurados |
| Colaboração | sem destino funcional |
| Udemy | 1 URL configurada |

O worktree contém as entregas atribuídas das Sprints 2–5. Elas deverão ser preservadas.

O último baseline da Sprint 5 registrou:

- lint e TypeScript aprovados;
- build com 17 páginas estáticas;
- 94,3 kB de First Load JS nas rotas temáticas;
- foundation, AI-readiness, homepage, LAB, learn, method-practice e cases-evidence aprovados;
- warnings preexistentes de cache Webpack e LF/CRLF.

Esses resultados são referência e deverão ser repetidos antes da implementação.

## 5. Gate documental

Ler e registrar hash/estado de:

1. `Sprint 0 - Contrato Editorial e Mapa de Preservacao e Migracao.md`;
2. `decisoes humanas.md`;
3. `Sprint 1 - Homepage.md`;
4. `Sprint 2 - LAB.md`;
5. `Sprint 3 - Formacao e Progressao Pedagogica.md`;
6. `Sprint 4 - Metodo e Pratica Investigativa.md`;
7. `Sprint 5 - Casos Evidencias e Proveniencia.md`;
8. `sprint 6.md`;
9. `plano-sprint6.md`;
10. `content/site.ts`;
11. `content/routes.ts`;
12. `SiteHeader`, `MobileNavigation`, `SiteFooter`, `PageContinuation`;
13. continuidades atuais das 11 rotas;
14. configurações de links externos.

IDs a proteger:

- `V3-MAP-GLOBAL-001`;
- `V3-MAP-GLOBAL-002`;
- `V3-MAP-ECO-002`;
- `V3-MAP-LABLOG-001`;
- `V3-MAP-HOME-005`;
- `V3-MAP-HOME-007`;
- `HUM-005`.

Interromper a execução se:

- Sprint 5 não estiver aprovada;
- houver mudança não atribuída;
- uma rota canônica divergir sem documentação;
- escolher YouTube ou LinkedIn exigir inferência;
- colaboração exigir inventar contato;
- a alteração exigir reescrever conteúdo principal;
- qualquer canal expuser URL privada ou credencial.

## 6. Baseline técnico

Executar sequencialmente:

```powershell
npm.cmd run lint
npx.cmd tsc --noEmit
npm.cmd run build
npm.cmd run verify:foundation
npm.cmd run verify:ai-readiness
npm.cmd run verify:homepage
npm.cmd run verify:lab
npm.cmd run verify:learn
npm.cmd run verify:method-practice
npm.cmd run verify:cases-evidence
```

Registrar duração, resultado, warnings e First Load JS.

## 7. Inventário de rotas

| Rota | Função narrativa | Header atual | Footer atual | Descoberta atual |
|---|---|---:|---:|---|
| `/` | por que importa | logo | não | direta |
| `/payload-journey` | como começar | não | não | Hero e CTAs |
| `/learn` | progressão | sim | sim | direta |
| `/cases` | evidências | sim | sim | direta |
| `/usmt` | modelo | não | não | métodos e CTAs |
| `/method` | instrumentos | sim | sim | direta |
| `/protocol` | procedimento | não | não | métodos e CTAs |
| `/investigation` | prática | não | não | métodos/LAB |
| `/lab` | identidade | sim | sim | direta |
| `/ecosystem` | áreas e colaboração | não | não | homepage/LAB |
| `/lablog` | registros | não | sim | casos/aprendizagem |

Confirmar na execução:

- 11 `app/**/page.tsx`;
- 11 URLs no sitemap;
- `/about` ausente do sitemap;
- redirect permanente preservando `#sobre`;
- `/lab#pilot` e `/lab#founder`;
- todos os anchors da homepage;
- zero nova rota.

## 8. Arquitetura anterior

### Header

- logo aponta para `/`;
- itens: Método, Aprender, Casos, O LAB;
- CTA “Começar” aponta para `/learn`;
- sem item explícito `Início`;
- sem estado ativo;
- rotas profundas não ativam categoria;
- desktop server-first.

### Mobile

- Client Component existente;
- usa o mesmo array;
- fecha ao navegar;
- fecha com Escape;
- devolve foco ao trigger no Escape;
- não move foco para o primeiro item ao abrir;
- não possui estado ativo;
- trigger não usa o padrão explícito `focus-visible` do design system;
- não havia scroll lock, portanto não será adicionado sem necessidade.

### Footer

- identidade;
- grupo único “Navegação”;
- O LAB, Métodos, Study Case, Formação, LabLog;
- grupo “Canais”;
- Udemy e um dos dois YouTubes;
- USMT, protocolo, investigation, payload journey e ecosystem ausentes;
- “Study Case” destoa do PT-BR.

### Continuidade

- várias rotas já possuem `PageContinuation`;
- itens permanecem distribuídos entre páginas e fontes;
- `/cases`, `/lablog` e `/lab` excedem quatro opções;
- `/payload-journey` não aponta para `/learn`;
- `/usmt` não aponta para `/method`;
- labels variam entre “Ver”, “Explorar”, “Rever” e “Conhecer”;
- não existe mapa canônico único.

## 9. Inventário preliminar de canais

| Canal | URL/estado encontrado | Conflito | Decisão planejada |
|---|---|---|---|
| Udemy | uma URL de curso com cupom | nenhum URL alternativo | preservar como canal formativo secundário |
| YouTube A | `@PayloadJourneyLAB` | diverge do Footer | não declarar oficial |
| YouTube B | `@Lab-Log` | diverge do LabLog | não declarar oficial |
| LinkedIn pessoal | `null` | ausência | não renderizar |
| LinkedIn institucional | não localizado | ausência | não renderizar |
| contato/email | `null` | ausência | não renderizar |
| colaboração | sem destino | ausência | manter sem CTA |
| Google Analytics | configuração técnica | não é canal de descoberta | fora da navegação |

### Decisão YouTube proposta

Não existe evidência local suficiente para escolher entre os dois destinos.

Portanto:

- preservar ambos na fonte como candidatos divergentes;
- manter `canonical: null` e `resolutionStatus: "unresolved"`;
- remover/ocultar os links públicos conflitantes do Footer e `/lablog`;
- não apresentar dois canais como equivalentes;
- registrar `HUM-005` como pendente;
- não usar resposta HTTP isolada como prova de autoria.

### Decisão LinkedIn proposta

- perfil pessoal: ausente;
- página institucional: ausente;
- nenhum link público;
- não tratar os dois contextos como intercambiáveis.

### Decisão Udemy proposta

- manter URL única configurada;
- auditar sintaxe e acessibilidade;
- conservar como canal formativo secundário em `/learn` e Footer;
- manter fora do Header;
- não interpretar HTTP 200 como prova adicional de autoria.

### Decisão colaboração proposta

- não criar CTA;
- manter atividades e públicos possíveis;
- publicar, se necessário:
  `O canal público de colaboração ainda está sendo definido.`;
- não criar email, formulário ou promessa de resposta.

## 10. Arquitetura final planejada do Header

Ordem:

1. `Início` → `/`;
2. `Aprender` → `/learn`;
3. `Métodos` → `/method`;
4. `Casos` → `/cases`;
5. `LAB` → `/lab`.

CTA:

`Começar` → `/payload-journey`.

Não incluir:

- protocolo;
- investigation;
- USMT;
- ecosystem;
- LabLog;
- Udemy;
- redes sociais.

### Estado ativo

Criar mapeamento canônico:

| Área | Rotas |
|---|---|
| Início | `/` |
| Aprender | `/payload-journey`, `/learn` |
| Métodos | `/method`, `/protocol`, `/investigation`, `/usmt` |
| Casos | `/cases`, `/lablog` |
| LAB | `/lab`, `/ecosystem` |

Implementação server-first:

- `SiteHeader` recebe `currentPath`;
- `SitePage` encaminha `route.path`;
- homepage, `/learn` e `/lab` passam seus paths explicitamente;
- demais páginas usam `SitePage`;
- desktop e mobile consomem a mesma função de correspondência;
- link ativo recebe `aria-current="page"` e texto/decoração visível, sem depender apenas de cor.

Não converter `SiteHeader` inteiro em Client Component.

## 11. Navegação mobile planejada

Preservar o Client Component existente e acrescentar somente:

- cinco itens e CTA canônicos;
- `currentPath`;
- `aria-current`;
- estado textual/visual ativo;
- foco explícito no primeiro item ao abrir;
- Escape;
- retorno de foco;
- fechamento ao navegar;
- `focus-visible`;
- área de toque mínima;
- ordem de teclado igual ao desktop;
- ausência de overflow.

Não adicionar:

- biblioteca de menu;
- focus-trap complexo;
- animação;
- dropdown;
- scroll lock novo, pois o baseline não possui.

## 12. Footer planejado

### Começar

- Payload Journey → `/payload-journey`;
- Aprender → `/learn`.

### Investigar

- Métodos → `/method`;
- Protocolo → `/protocol`;
- Software System Investigation → `/investigation`;
- USMT → `/usmt`.

### Evidências

- Casos → `/cases`;
- LabLog → `/lablog`.

### LAB

- Sobre o LAB → `/lab`;
- Ecossistema → `/ecosystem`.

### Canais

- Udemy → URL única configurada.

YouTube e LinkedIn ficarão ausentes enquanto não forem confirmados.

O Footer continuará server-first e sem dependências. Os grupos serão tipados e renderizados a partir de uma única fonte.

## 13. Mapa de continuidade planejado

Máximo de quatro itens por bloco:

| Rota | Continuidade final |
|---|---|
| `/payload-journey` | Compreender a USMT; Conhecer os métodos; Começar a aprender |
| `/learn` | Começar pelo Payload Journey; Ver o caso HORA.city; Conhecer os métodos |
| `/method` | Executar o protocolo; Conhecer Software System Investigation; Começar pelo Payload Journey; Compreender a USMT |
| `/protocol` | Conhecer os métodos; Conhecer Software System Investigation; Ver o caso HORA.city |
| `/investigation` | Conhecer os métodos; Executar o protocolo; Começar a aprender; Ver o caso HORA.city |
| `/usmt` | Começar pelo Payload Journey; Executar o protocolo; Conhecer os métodos |
| `/cases` | Acompanhar os LabLogs; Conhecer os métodos; Executar o protocolo |
| `/lablog` | Ver o caso HORA.city; Conhecer o LAB; Executar o protocolo |
| `/lab` | Conhecer os métodos; Conhecer Software System Investigation; Ver o caso HORA.city; Começar a aprender |
| `/ecosystem` | Começar a aprender; Ver o caso HORA.city; Conhecer o LAB |

Homepage permanece com seus CTAs aprovados.

Udemy continua na seção formativa de `/learn`, não como continuidade global.

## 14. Centralização de conteúdo

Estruturas proporcionais em `content/site.ts`:

- `primaryNavigation`;
- `globalStartCta`;
- `navigationAreas`;
- `footerGroups`;
- `externalChannels`;
- `routeContinuations`.

Tipos:

- `CanonicalRoutePath`;
- `NavigationArea`;
- `PrimaryNavigationItem`;
- `FooterGroup`;
- `ExternalChannel`;
- `ChannelStatus`;
- `RouteContinuationMap`.

Evitar:

- framework genérico;
- registry dinâmico;
- duplicar links em componentes;
- misturar metadata e navegação;
- expor estados internos na UI sem necessidade.

`content/routes.ts` continuará canônico para paths e conteúdo editorial. Metadata não será reescrita.

## 15. Descoberta e profundidade

### Matriz atual a medir

Construir grafo real a partir de Header, Footer, homepage e continuidades. Registrar distância mínima desde `/`.

### Meta final

- rotas principais: 1 clique;
- rotas profundas: no máximo 2 cliques;
- Footer torna todas as rotas canônicas descobertas;
- Header mantém somente cinco áreas;
- nenhum destino depende apenas de sitemap ou URL digitada;
- zero ciclos obrigatórios.

O verificador calculará BFS no grafo de links renderizados.

Mesmo que o Footer torne uma rota acessível em um clique técnico, o relatório distinguirá:

- profundidade global;
- profundidade na jornada principal;
- categoria narrativa.

## 16. Links e âncoras

Auditar:

- 11 rotas com HTTP 200;
- `/about` com 308;
- `/about` → `/lab#sobre`;
- `/lab#sobre`;
- `/lab#pilot`;
- `/lab#founder`;
- anchors da homepage;
- fragmentos usados em continuidades;
- IDs únicos;
- links sem hash vazio;
- zero `href="#"`;
- zero `Saiba mais`, `Clique aqui` ou `Ver mais`;
- zero path local;
- zero protocolo inválido;
- zero URL vazia;
- links externos com `rel="noopener noreferrer"` quando `target="_blank"`.

## 17. Ficheiros previstos

### Navegação global

- `content/site.ts`;
- `types/content.ts`;
- `components/layout/SiteHeader.tsx`;
- `components/layout/MobileNavigation.tsx`;
- `components/layout/SiteFooter.tsx`;
- `components/pages/SitePage.tsx`;
- `components/pages/PageContinuation.tsx`, somente se precisar de semântica adicional.

### Paths ativos

- `app/page.tsx`;
- `app/learn/page.tsx`;
- `app/lab/page.tsx`.

As demais páginas recebem o path por `SitePage`.

### Continuidade

- `app/payload-journey/page.tsx`;
- `app/usmt/page.tsx`;
- `app/ecosystem/page.tsx`;
- `content/methods.ts`;
- `content/cases.ts`;
- `content/payload-journey-lab.ts`.

Alterar somente arrays/labels de continuidade.

### Canais/ecossistema

- `components/sections/LabLogPageSections.tsx`, para ocultar YouTube divergente;
- `components/sections/ConceptEcosystemSection.tsx`, somente para estado sem CTA;
- conteúdo correspondente.

### Verificadores e documentação

- `scripts/verify-navigation-discovery.mjs`;
- `scripts/verify-homepage.mjs`;
- `scripts/verify-ai-readiness.mjs`;
- `scripts/verify-design-foundation.mjs`;
- `scripts/capture-home-responsive.mjs`;
- `package.json`;
- `Sprint 6 - Navegacao Canais e Descoberta.md`.

### Fora de alteração

- conteúdo principal das Sprints 1–5;
- metadata e JSON-LD, salvo correção técnica;
- sitemap, salvo falha;
- novas rotas;
- dependências;
- casos e entradas;
- Sprint 7.

## 18. Verificador `verify:navigation-discovery`

Criar:

`scripts/verify-navigation-discovery.mjs`

Adicionar:

`npm.cmd run verify:navigation-discovery`

### Rotas

- 11 rotas 200;
- redirect `/about`;
- destino e fragmento;
- sitemap com 11;
- zero nova rota.

### Header

- Início, Aprender, Métodos, Casos, LAB;
- ordem;
- CTA `/payload-journey`;
- estado ativo por categoria;
- sem Udemy/social;
- desktop e mobile usam a mesma fonte.

### Mobile

- mesmos destinos;
- trigger acessível;
- `aria-expanded`/`aria-controls`;
- Escape;
- retorno de foco;
- primeiro foco ao abrir;
- `aria-current`;
- sem duplicidade inconsistente.

### Footer

- cinco grupos;
- todos os destinos canônicos;
- Udemy como único canal público enquanto YouTube diverge;
- sem placeholder;
- sem link vazio.

### Continuidade

- mapa por rota;
- máximo quatro itens;
- labels específicos;
- sem `Saiba mais`;
- destinos válidos;
- profundidade máxima 2 na jornada e descoberta global completa.

### Canais

- Udemy única;
- YouTube ausente da UI e divergência preservada na fonte;
- LinkedIn ausente;
- colaboração sem CTA;
- distinção institucional/pessoal no contrato.

### Segurança

- sem paths locais;
- sem links privados;
- sem protocolos inválidos;
- sem credenciais;
- sem URL vazia.

### Global

- IDs únicos;
- H1 único;
- claims preservados;
- zero atividade da Sprint 7.

Não duplicar integralmente os verificadores anteriores.

## 19. Sequência de implementação

### Etapa 1 — Gate

- confirmar aprovação;
- registrar branch, HEAD e status;
- ler fontes;
- atribuir alterações;
- confirmar Sprint 7 ausente.

### Etapa 2 — Baseline técnico

Executar os dez gates herdados.

### Etapa 3 — Inventário

- rotas;
- links internos;
- anchors;
- redirects;
- continuidades;
- canais;
- profundidade.

### Etapa 4 — Baseline visual

Executar matriz automatizada e capturas representativas.

### Etapa 5 — Tipagem e fonte canônica

- navegação;
- áreas;
- Footer;
- canais;
- continuidades.

### Etapa 6 — Header desktop

- cinco destinos;
- CTA Payload Journey;
- `aria-current`;
- categorias profundas.

### Etapa 7 — Mobile

- equivalência;
- foco;
- Escape;
- retorno de foco;
- estado ativo.

### Etapa 8 — Footer

- cinco grupos;
- mapa completo;
- canais confirmados.

### Etapa 9 — Canais

- ocultar YouTube divergente;
- preservar pendência;
- manter LinkedIn ausente;
- preservar Udemy;
- colaboração sem CTA.

### Etapa 10 — Continuidades

- centralizar;
- reduzir a quatro;
- padronizar labels;
- aplicar nas dez rotas profundas.

### Etapa 11 — Verificador

- criar navigation-discovery;
- atualizar expectativas antigas estritamente necessárias.

### Etapa 12 — Auditoria de links e profundidade

- HTTP;
- anchors;
- redirects;
- grafo BFS;
- links externos.

### Etapa 13 — Acessibilidade e visual

- teclado;
- foco;
- menu;
- estado ativo;
- Footer;
- zoom;
- cinco larguras.

### Etapa 14 — Gates finais

Executar os 11 comandos sequencialmente.

### Etapa 15 — Relatório e escopo

- completar documento;
- registrar links alterados;
- separar evidências;
- `git diff --check`;
- confirmar zero nova rota e Sprint 7 ausente.

## 20. Gates finais

```powershell
npm.cmd run lint
npx.cmd tsc --noEmit
npm.cmd run build
npm.cmd run verify:foundation
npm.cmd run verify:ai-readiness
npm.cmd run verify:homepage
npm.cmd run verify:lab
npm.cmd run verify:learn
npm.cmd run verify:method-practice
npm.cmd run verify:cases-evidence
npm.cmd run verify:navigation-discovery
```

Não executar builds concorrentes.

## 21. Validação visual

### Matriz automatizada

Visitar as 11 rotas em:

- 320;
- 375;
- 768;
- 1024;
- 1440 px.

Total: 55 combinações before e 55 after.

Para cada combinação registrar em JSON/Markdown:

- viewport;
- overflow;
- Header;
- item ativo;
- CTA;
- Footer;
- quantidade de links;
- foco inicial;
- menu mobile quando aplicável.

### Capturas permanentes

Preservar, antes e depois:

- as 11 rotas em 320 px;
- as 11 rotas em 1440 px;
- homepage, `/method`, `/cases` e `/ecosystem` também em 375, 768 e 1024 px.

Essa amostra cobre os extremos de todas as rotas e larguras intermediárias das quatro famílias narrativas.

### Interação mobile

Em 320 e 375 px, nas 11 rotas:

- abrir por teclado;
- confirmar foco no primeiro item;
- validar item ativo;
- fechar com Escape;
- confirmar retorno ao trigger;
- abrir novamente e navegar;
- confirmar fechamento;
- medir overflow.

### Zoom

Validar uma amostra representativa com zoom equivalente a 200%, sem perda de destino ou scroll horizontal estrutural.

## 22. Evidências separadas

### Fonte

Configuração, componentes, tipos, mapas e verificadores.

### Conteúdo renderizado

HTML servido com Header, Footer, links e estados.

### Build

Compilação/prerenderização. Não valida interação nem canal externo.

### Execução local observada

Browser local, teclado, menu, foco, redirects, links e viewport.

### Produção

Somente após deploy; não autorizada neste plano.

### Canal externo verificado

Distinguir:

- sintaxe válida;
- URL configurada;
- destino acessível;
- autoria oficial confirmada.

Resposta HTTP não prova autoria. Dois URLs acessíveis não resolvem divergência.

## 23. Riscos e mitigação

| Risco | Mitigação |
|---|---|
| escolher YouTube por nome | ocultar e preservar pendência |
| tratar LinkedIn pessoal como LAB | contratos separados e ambos ausentes |
| inventar colaboração | sem CTA |
| Header excessivo | cinco áreas e um CTA |
| converter Header em Client Component | `currentPath` server-first |
| mobile divergir | mesma fonte e função de matching |
| excesso de continuidades | máximo quatro |
| rota profunda escondida | Footer completo e BFS |
| duplicação de links | fonte central |
| reabrir conteúdo | somente arrays, labels e links |
| alterar SEO antecipadamente | metadata fora do escopo |
| aumentar JS | zero dependências e zero novas fronteiras |
| falsa validação externa | classes de evidência separadas |

## 24. Critérios de conclusão

A Sprint 6 estará concluída quando:

- Header tiver cinco escolhas e CTA correto;
- desktop/mobile compartilharem arquitetura;
- `aria-current` funcionar por categoria;
- menu mobile passar foco, Escape e retorno;
- Footer cobrir todas as rotas;
- YouTube divergente não aparecer como oficial;
- LinkedIn ausente não aparecer;
- Udemy permanecer formativa;
- colaboração continuar sem CTA;
- continuidades tiverem no máximo quatro itens;
- todas as rotas forem descobertas;
- profundidade de jornada for no máximo dois;
- links, anchors e redirect passarem;
- nenhuma rota for criada;
- metadata permanecer preservada;
- 11 gates passarem;
- matriz visual e performance forem validadas;
- relatório estiver completo;
- Sprint 7 não tiver começado.

## 25. Entrega final prevista

A futura resposta seguirá os 26 itens da especificação:

1. documento;
2. branch;
3. commits;
4. leitura das Sprints 0–5;
5. rotas auditadas;
6. Header;
7. mobile;
8. Footer;
9. continuidade;
10. profundidade;
11. YouTube;
12. LinkedIn;
13. Udemy;
14. colaboração;
15. links alterados;
16. ficheiros;
17. lint;
18. TypeScript;
19. build;
20. verificadores;
21. links;
22. visual;
23. First Load JS;
24. limitações;
25. decisões pendentes;
26. Sprint 7 não iniciada.

Status futuro, somente após implementação:

`Sprint 6 concluída. Aguardando aprovação humana antes da Sprint 7.`

Estado atual:

`Plano da Sprint 6 concluído. Implementação não iniciada.`
