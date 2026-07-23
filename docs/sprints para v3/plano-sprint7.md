# Plano de Implementação — Sprint 7

## Metadata, Structured Data e Validação Final

## 1. Estado

Este documento planeja a Sprint 7 sem iniciar sua implementação.

A execução depende de:

1. aprovação humana explícita deste plano;
2. confirmação de que a Sprint 6 está aprovada;
3. repetição do gate documental e técnico;
4. confirmação de que o worktree continua integralmente atribuído;
5. preservação da política de crawlers e das decisões editoriais congeladas;
6. ausência de deploy, salvo nova autorização explícita.

Nenhum ficheiro de metadata, structured data, sitemap, robots, redirects, verificador ou implementação foi alterado durante a elaboração deste plano.

## 2. Correspondência com a especificação

O plano cobre `docs/sprints para v3/sprint 7.md`:

- gate das Sprints 0–6;
- matriz das 11 rotas;
- metadata própria por rota;
- Open Graph e Twitter;
- canonical absoluto;
- sitemap;
- robots;
- redirects;
- structured data prudente;
- canais externos;
- inventário e tratamento de artefatos temporários;
- consolidação dos oito verificadores existentes;
- `verify:refactor-v3`;
- auditoria editorial, linguística, terminológica, de acessibilidade, links, segurança e privacidade;
- 55 combinações responsivas;
- performance;
- documento final;
- distinção entre validação local e produção;
- encerramento do ciclo V3 sem iniciar nova sprint.

## 3. Origem da especificação

`docs/sprints para v3/sprint 7.md`:

- origem atribuída: especificação fornecida pelo utilizador;
- estado: não rastreado no Git;
- criado em 23 de julho de 2026 às 14:48:33;
- última escrita às 14:53:05;
- tamanho: 31.628 bytes;
- SHA-256: `253F3D39EBEB6195693EB2507ABF36774406CC5D4DBC575471F725722092FBC5`.

O ficheiro deverá permanecer inalterado.

## 4. Baseline do repositório

| Item | Estado |
|---|---|
| Branch | `refactor/homepage-v0.2.0` |
| HEAD | `f2f48915a74582d998cbab4466c5e53e66f36940` |
| Alterações no worktree | somente `sprint 7.md`, não rastreado |
| Plano Sprint 7 anterior | não localizado |
| Rotas canônicas | 11 |
| Redirect de compatibilidade | `/about` → `/lab#sobre` |
| Node do último gate | 22.19.0 |
| npm do último gate | 11.6.3 |
| Next.js | 14.2.35 |
| Páginas estáticas no último build | 17 |
| First Load JS temático | 94,4 kB |
| JS compartilhado | 87,2 kB |
| Client Component boundaries | 1 |

O commit atual já contém a entrega aprovada da Sprint 6. O documento final da Sprint 6 possui SHA-256:

`9F3C6CCB59C032474C08902E2FE53986DEE1797A38A435B425F2A395FEE69A7E`

## 5. Gate documental

Antes de editar, ler integralmente e registrar hash/estado de:

1. `Sprint 0 - Contrato Editorial e Mapa de Preservacao e Migracao.md`;
2. `decisoes humanas.md`;
3. `Sprint 1 - Homepage.md`;
4. `Sprint 2 - LAB.md`;
5. `Sprint 3 - Formacao e Progressao Pedagogica.md`;
6. `Sprint 4 - Metodo e Pratica Investigativa.md`;
7. `Sprint 5 - Casos Evidencias e Proveniencia.md`;
8. `Sprint 6 - Navegacao Canais e Descoberta.md`;
9. `sprint 7.md`;
10. `plano-sprint7.md`;
11. `config/site.ts`;
12. `content/routes.ts`;
13. `content/site.ts`;
14. `lib/metadata.ts`;
15. `lib/structured-data.ts`;
16. `app/layout.tsx`;
17. `app/sitemap.ts`;
18. `app/robots.ts`;
19. `next.config.mjs`;
20. todos os verificadores;
21. `package.json`;
22. `.gitignore`;
23. artefatos em `.tmp`, `docs` e outputs de captura.

Contratos especialmente relevantes:

- `V3-MAP-GLOBAL-003` — metadata por página;
- `V3-MAP-GLOBAL-004` — structured data;
- `V3-MAP-GLOBAL-005` — política de crawlers;
- `V3-MAP-GLOBAL-006` — redirects;
- `V3-MAP-GLOBAL-007–009` — guardrails;
- `HUM-005` — YouTube não resolvido;
- decisões congeladas sobre público, hipótese, Udemy, HORA.city e limites de claims.

Interromper a implementação se:

- Sprint 6 não estiver aprovada;
- surgirem alterações não atribuídas;
- uma das 11 rotas estiver ausente;
- metadata exigir claim não visível;
- structured data exigir entidade não sustentada;
- um canal exigir inferência;
- a política de crawlers divergir do contrato;
- a limpeza ameaçar evidência documental única.

## 6. Baseline técnico obrigatório

Executar sequencialmente antes das alterações:

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

Registrar:

- duração;
- resultado;
- warnings;
- 17 páginas esperadas;
- tamanho e First Load JS das 11 rotas;
- JS compartilhado;
- Client Components;
- estado de `.next` antes de qualquer captura.

Não executar builds concorrentes.

## 7. Inventário canônico das rotas

| Rota | Função | Público prioritário | Tipo planejado |
|---|---|---|---|
| `/` | por que agora, para quem e qual capacidade | estudantes e developers | `WebPage` |
| `/payload-journey` | payload como fio condutor | estudantes e developers | `WebPage` |
| `/learn` | progressão pedagógica | estudantes e developers em formação | `WebPage` |
| `/cases` | caso, evidência e limites | todos os públicos técnicos | `CollectionPage` se a auditoria semântica confirmar |
| `/usmt` | modelo esperado | developers, estudantes e pesquisadores | `WebPage` + `CreativeWork` |
| `/method` | instrumentos e perguntas | practitioners e estudantes | `WebPage` |
| `/protocol` | execução da investigação | practitioners | `WebPage` |
| `/investigation` | prática e capacidades | practitioners e pesquisadores | `WebPage` |
| `/lab` | missão, origem e compromisso | todos os públicos | `WebPage` + `Person` |
| `/ecosystem` | relação entre áreas | públicos do ecossistema | `WebPage` |
| `/lablog` | espaço para registros datados | pessoas que acompanham o trabalho | `CollectionPage` somente se semanticamente correto, sem itens |

Confirmar ainda:

- `/about` é apenas redirect;
- `/about` não possui canonical concorrente;
- `/lab#sobre`, `/lab#pilot` e `/lab#founder` existem;
- cinco 404 deliberados continuam ausentes;
- nenhuma rota órfã;
- nenhuma nova rota.

## 8. Baseline de metadata

O helper atual:

- recebe path, title e description;
- usa canonical e `og:url` relativos, tornados absolutos por `metadataBase`;
- replica title/description em Open Graph e Twitter;
- usa `website`;
- usa Twitter `summary`;
- não configura imagem;
- deixa o template global do layout participar dos títulos.

Problemas concretos a resolver:

- vários titles são o H1, não um título editorial de descoberta;
- a homepage ainda usa a formulação anterior;
- títulos podem receber sufixo implícito e redundante;
- payload journey, USMT e ecosystem não têm descriptions específicas;
- `/cases` pode sugerir plural maior que o inventário real;
- `/lablog` pode sugerir registros já publicados, embora existam zero entradas;
- canonical absoluto depende implicitamente de `metadataBase`;
- não existe matriz tipada única de SEO;
- o único asset possível de Open Graph ainda não está declarado.

## 9. Matriz final planejada de metadata

Criar uma estrutura tipada única, provavelmente em `content/routes.ts`, separando:

- conteúdo visível da rota;
- `seo.title`;
- `seo.description`;
- público;
- função narrativa;
- entidade/tipo principal;
- fonte e status dos claims.

O H1 não precisa repetir literalmente o title, mas ambos devem responder à mesma pergunta.

| Rota | Title planejado | Description planejada |
|---|---|---|
| `/` | `Payload Journey LAB — Compreender sistemas pelo flow` | `Laboratório de Software System Investigation que pesquisa como flow, payload tracing, modelagem, checkpoints e evidências de runtime podem ajudar estudantes e developers a compreender codebases complexas.` |
| `/payload-journey` | `Payload Journey — Siga o payload, entenda o sistema` | `Aprenda a seguir uma operação por eventos, payloads, camadas, decisões, estados e efeitos observáveis para construir uma compreensão progressiva do sistema.` |
| `/learn` | `Aprender Software System Investigation — Payload Journey LAB` | `Aprenda progressivamente a seguir flows, payloads, decisões e evidências de runtime, do primeiro evento à investigação estruturada de sistemas de software.` |
| `/cases` | `Casos e Evidências — Payload Journey LAB` | `Explore o caso HORA.city com flows, estados, hipóteses, evidências, limitações e conclusões proporcionais ao que foi observado.` |
| `/usmt` | `USMT — Modelo esperado de sistemas de software` | `Use a USMT para explicitar estados, eventos, transições, regras, invariantes e limites e confrontar o modelo esperado com o comportamento observado.` |
| `/method` | `Métodos do Payload Journey LAB` | `Conheça os instrumentos do LAB e as perguntas que Payload Journey, USMT, Reverse Payload Journey, Operational Payload Path e Track to Origin ajudam a investigar.` |
| `/protocol` | `Congelar, Mapear, Detectar e Restaurar` | `Conheça o protocolo do LAB para delimitar flows, preservar comportamentos, produzir evidências, localizar divergências e validar restaurações.` |
| `/investigation` | `Software System Investigation e Trace Engineering` | `Compreenda a prática que combina modelagem, payload tracing, checkpoints, runtime e evidências para explicar como operações se transformam em decisões e estados.` |
| `/lab` | `Sobre o Payload Journey LAB` | `Conheça a missão, a origem e a construção do Payload Journey LAB, um laboratório autoral de formação, pesquisa metodológica e investigação aplicada em sistemas de software.` |
| `/ecosystem` | `Ecossistema do Payload Journey LAB` | `Conheça como o LAB conecta formação, pesquisa metodológica, investigação aplicada, casos e futuras possibilidades de colaboração.` |
| `/lablog` | `LabLog — Investigação em andamento` | `Conheça o espaço destinado a registros datados de investigação, checkpoints, hipóteses, decisões e evidências do Payload Journey LAB.` |

Cuidados:

- `/cases` usa HORA.city no singular na description;
- `/lablog` descreve um espaço destinado a registros, não um histórico existente;
- `/learn` não promove níveis futuros a oferta atual;
- `/protocol` não promete causa raiz;
- `/investigation` não transforma Trace Engineer em profissão;
- `/ecosystem` mantém colaboração como possibilidade futura;
- homepage mantém a hipótese no condicional;
- nenhum title terá sufixo duplicado.

## 10. Implementação planejada de metadata

### Fonte

- adicionar tipo proporcional para metadata de rota;
- fazer as 11 rotas consumirem `seo`;
- manter o conteúdo visível separado;
- usar title absoluto no helper quando necessário para obter exatamente a matriz aprovada.

### Canonical e OG URL

- usar `absoluteSiteUrl(path)` explicitamente;
- HTTPS;
- domínio `https://www.payloadjourneylab.com`;
- sem barra divergente;
- sem hash;
- sem canonical para `/about`.

### Layout

Auditar `app/layout.tsx` e:

- preservar `metadataBase`;
- alinhar default title/description à homepage;
- evitar template redundante;
- preservar creator e robots declarativos somente se coerentes;
- não alterar Google Analytics existente, exceto se a auditoria encontrar falha técnica ou exposição.

## 11. Open Graph e Twitter

Por rota:

- type `website`;
- title e description da matriz;
- URL absoluta;
- site name;
- locale `pt_BR`;
- Twitter `summary`;
- mesmos title e description.

### Imagem

O único asset aprovado localizado é:

`public/brand/logo.png`

Baseline:

- 1.254 × 1.254 px;
- 409.531 bytes;
- já utilizado no Header e Footer;
- README de marca permite PNG.

Decisão planejada:

- reutilizar apenas esse logo como imagem global de OG/Twitter;
- declarar URL absoluta, dimensões e alt institucional;
- não criar imagem por rota;
- não usar screenshots das sprints;
- não inventar asset;
- se a validação do arquivo mostrar incompatibilidade técnica com o card, omitir a imagem e documentar, sem gerar substituto.

Não declarar `article` nem datas.

## 12. Structured data

Princípio:

`Structured data descreve conteúdo real, não ambição futura.`

### Preservar

- `WebSite` no site;
- `WebPage` nas rotas;
- `Person` em `/lab`, com dados mínimos;
- `CreativeWork` para a USMT;
- IDs absolutos `/#website`, `/lab#founder`, `/usmt#usmt`.

### Auditar e ajustar

- `@id`, `url` e canonical;
- descrição do `WebSite`;
- coerência entre WebPage e metadata;
- creator da USMT;
- ausência de `sameAs` não confirmado;
- nomes e relações `isPartOf`, `mainEntity`, `mentions`;
- serialização segura do JSON-LD.

### Decisões planejadas por tipo

| Tipo | Decisão |
|---|---|
| `Organization` | não criar; omissão deliberada permanece |
| `CollectionPage` em `/cases` | utilizar somente se a página renderizada representar corretamente a coleção real |
| `ItemList` em `/cases` | no máximo um item real, HORA.city; sem futuros |
| `CreativeWork` para HORA.city | permitido somente com nome, URL, estado e descrição prudentes já visíveis |
| `CollectionPage` em `/lablog` | possível para o espaço editorial, sem simular entradas |
| `ItemList` em `/lablog` | não criar, pois existem zero entradas |
| `Course` | não introduzir; Udemy é externa e HTTP 403 não confirma dados suficientes do provider |
| `Article` / `BlogPosting` | não criar |
| `Blog` | não criar |
| `SearchAction` | não criar |

Antes de adicionar `CollectionPage`, `ItemList` ou `CreativeWork` do caso, comparar o ganho semântico com a complexidade. Se `WebPage` já for a representação mais prudente, manter o baseline e documentar a decisão.

## 13. Sitemap

Preservar:

- 11 rotas;
- domínio oficial;
- ausência de `/about`;
- ausência de anchors, evidências e links externos.

Auditar `priority`.

Como não foi localizada fonte confiável para pesos `1` e `0.8`, a decisão planejada é:

- remover prioridades inventadas;
- não adicionar `changeFrequency`;
- não adicionar `lastModified` sem proveniência;
- manter somente `url`.

Essa alteração preserva a política e o conjunto de rotas de `V3-MAP-GLOBAL-005`, removendo sinal sem fonte.

## 14. Robots

A política atual é deliberada e protegida pela Sprint 0:

- crawling geral permitido;
- `OAI-SearchBot` permitido;
- `ChatGPT-User` permitido;
- `GPTBot` bloqueado;
- sitemap e host oficiais.

Decisão planejada:

- preservar integralmente a política;
- validar HTML público, `/robots.txt`, host e sitemap;
- não simplificar por aparência;
- não adicionar paths privados inexistentes;
- não misturar busca com decisão de treino.

## 15. Redirects

Auditar os três redirects configurados:

1. `/about` no apex → `https://www.payloadjourneylab.com/lab#sobre`;
2. apex → `www`;
3. `/about` geral → `/lab#sobre`.

Confirmar:

- status 308;
- precedência;
- ausência de loop;
- ausência de chain local;
- âncora real;
- ausência de canonical concorrente;
- comportamento do host somente como fonte/configuração local.

Não criar redirect novo.

Produção permanece pendente porque a hospedagem pública não será testada sem deploy autorizado.

## 16. Canais externos

### YouTube

- manter dois candidatos somente na fonte;
- `canonical: null`;
- `unresolved`;
- ausente de UI, metadata, OG, JSON-LD e `sameAs`;
- nenhuma inferência.

### LinkedIn

- preservar `personal` e `institutional` separados;
- ambos `null`;
- nenhum `sameAs`;
- não usar perfil pessoal como entidade do LAB.

### Udemy

- manter canal formativo secundário;
- preservar em `/learn` e Footer;
- não adicionar `Course`;
- conservar HTTP 403 automatizado como limitação;
- não concluir que o link está inválido ou que autoria foi confirmada.

### Colaboração

- sem CTA;
- sem email, formulário ou structured data de contato;
- manter possibilidade futura.

## 17. Artefatos temporários

### Inventário atual

| Categoria | Quantidade/estado |
|---|---|
| Markdown em `docs/sprints para v3` | 23 |
| PNG documentais | 146 |
| PNG da Sprint 6 | 68 |
| JSON da Sprint 6 | 2 |
| `.tmp/sprint6-before-reconstruction` | não existe |
| `.tmp/edge-sprint3-debug` | diretório vazio, não versionado |
| `.next` | cache/build ignorado |
| `*.tsbuildinfo` | ignorado |

### Decisão planejada

- preservar documentos finais;
- preservar as 68 capturas e dois JSON da Sprint 6, pois são referenciados e documentais;
- preservar evidências das sprints anteriores;
- registrar que `sprint6-before-reconstruction` já foi removido após a geração das evidências;
- remover apenas `.tmp/edge-sprint3-debug`, após confirmar novamente que continua vazio;
- adicionar `.tmp/` ao `.gitignore`, pois não existe evidência legítima nesse diretório;
- não usar regra que oculte `docs`, PNG ou JSON documentais;
- não apagar captura somente por ser reproduzível quando ela está referenciada em relatório aprovado.

Qualquer remoção deverá:

- resolver o path absoluto;
- confirmar que está dentro do workspace;
- confirmar que o alvo exato continua vazio ou temporário;
- ser registrada no documento final.

## 18. Consolidação dos verificadores

| Verificador | Papel | Decisão |
|---|---|---|
| `verify:foundation` | estrutura, design system, server-first e dependências | preservar |
| `verify:ai-readiness` | rotas, crawler policy, entidades e proveniência | atualizar para metadata/JSON-LD finais |
| `verify:homepage` | HTTP, conteúdo global e preservação | reduzir fragilidade de strings apenas onde necessário |
| `verify:lab` | contrato institucional | preservar |
| `verify:learn` | progressão e claims pedagógicos | preservar |
| `verify:method-practice` | método, protocolo e investigação | preservar |
| `verify:cases-evidence` | caso, LabLog e proveniência | preservar |
| `verify:navigation-discovery` | rotas, canais, foco e descoberta | preservar |
| `validate-navigation-responsive` | execução visual e interação | generalizar somente se necessário para Sprint 7 |

Regras:

- não apagar cobertura útil;
- não alterar expectativa apenas para fazer teste passar;
- trocar strings exatas por invariantes conceituais quando a metadata aprovada mudar;
- preservar checks negativos de claims;
- manter fonte, HTML, build e execução observada separados;
- evitar que vários scripts validem integralmente o mesmo contrato.

## 19. Novo verificador integrado

Criar:

`scripts/verify-refactor-v3.mjs`

Adicionar:

`verify:refactor-v3`

### Coordenação

O comando padrão deverá:

- coordenar os oito verificadores existentes sequencialmente;
- interromper em falha;
- registrar duração e status de cada subprocesso;
- não executar build;
- não adicionar dependência;
- funcionar em Windows com `npm.cmd`.

### Coerência transversal própria

Sem duplicar todos os checks, validar:

- 11 rotas e nenhum diretório novo;
- 11 conjuntos de metadata únicos;
- title, description, OG, Twitter e canonical por rota;
- H1 coerente com função narrativa;
- JSON-LD parseável e compatível com canonical;
- tipos permitidos;
- ausência de `Organization`, `SearchAction`, `Article` e `BlogPosting`;
- ausência de ItemList LabLog;
- zero `sameAs` não confirmado;
- sitemap exato;
- robots e crawler policy;
- redirects;
- YouTube oculto;
- LinkedIn separado e oculto;
- Udemy secundária;
- colaboração sem CTA;
- claims condicionais;
- estados futuros;
- Trace Engineer em desenvolvimento;
- HORA.city interno;
- zero evidência externa;
- zero path local, localhost público, segredo ou dado sensível;
- zero artefato temporário não autorizado;
- zero nova dependência;
- zero nova Client Component boundary.

Produzir JSON final com:

- resultados dos filhos;
- duração;
- cobertura;
- rotas;
- entidades;
- performance lida do build quando disponível;
- limitações públicas.

## 20. Auditoria editorial

Para cada uma das 11 rotas, preencher no documento final:

- H1;
- pergunta principal;
- público;
- CTA principal;
- CTA secundário;
- continuidade;
- claims;
- estado dos claims;
- metadata;
- structured data;
- canonical;
- sitemap;
- profundidade;
- coerência.

Proteger conceitualmente:

- código acelerado não equivale a compreensão;
- público prioritário;
- Payload Journey como entrada;
- hipótese pedagógica;
- autoridade humana;
- aplicação diferente de eficácia;
- Trace Engineer como função/perfil em desenvolvimento;
- transferibilidade não demonstrada;
- sistemas distribuídos e mission-critical como futuros;
- HORA.city como caso interno;
- zero evidência externa;
- zero empregabilidade garantida;
- zero redução comprovada de onboarding;
- zero certificação;
- zero profissão consolidada.

Não congelar parágrafos completos.

## 21. Auditoria PT-BR e terminológica

### PT-BR

Pesquisar nas áreas públicas ativas:

- objectivo;
- actuação;
- arquitectura;
- equipa;
- direcção;
- seleccionar;
- navegação/início sem acento;
- variantes equivalentes.

Não substituir cegamente:

- documentos históricos;
- citações;
- nomes técnicos;
- conteúdo não renderizado quando for evidência.

### Terminologia

Validar capitalização e uso de:

- Payload Journey;
- Payload Tracing;
- Software System Investigation;
- Trace Engineering;
- Trace Engineer;
- USMT;
- Operational Payload Path;
- Reverse Payload Journey;
- Track to Origin;
- Track Mode;
- flow;
- runtime;
- checkpoint;
- causalidade;
- autoridade;
- evidência;
- restauração;
- mission-critical;
- requirements-to-runtime traceability.

Microajustes editoriais só serão permitidos quando houver contradição real entre conteúdo público, metadata ou definição canônica.

## 22. Links, acessibilidade, segurança e privacidade

### Links

- 11 respostas 200;
- `/about` 308;
- anchors do LAB;
- sitemap e robots;
- zero hash vazio;
- zero URL vazia;
- links externos seguros;
- Udemy classificada separadamente de autoria/acessibilidade;
- zero YouTube e LinkedIn públicos.

### Acessibilidade

- landmarks;
- H1 único;
- headings sem salto;
- foco visível;
- teclado;
- menu mobile;
- Escape;
- retorno de foco;
- `aria-current`;
- labels;
- estados não dependentes só de cor;
- CTAs descritivos;
- Footer;
- anchors;
- zoom equivalente a 200%.

Conclusão permitida:

`Os critérios de acessibilidade definidos para o refactor foram validados.`

Não declarar conformidade WCAG total.

### Segurança e privacidade

Auditar fonte, HTML, JSON-LD, metadata, documentos e screenshots para:

- `C:\`;
- `/Users/`;
- `file://`;
- localhost no conteúdo público;
- emails;
- tokens;
- segredos;
- IDs de dispositivo;
- IPs;
- URLs privadas;
- logs;
- dados pessoais desnecessários.

Paths técnicos dentro de scripts locais devem ser classificados como fonte de automação, não como conteúdo público, e avaliados separadamente.

## 23. Validação responsiva

### Matriz

Visitar as 11 rotas em:

- 320;
- 375;
- 768;
- 1024;
- 1440 px.

Total: 55 combinações.

Para todas:

- `scrollWidth === clientWidth`;
- Header;
- Footer;
- continuidade;
- H1;
- cards;
- timelines;
- estados futuros;
- informação essencial;
- item ativo;
- links.

### Interação

Em 320 e 375 px, nas 11 rotas:

- abrir menu por teclado;
- primeiro foco;
- `aria-current`;
- Escape;
- retorno;
- fechar ao navegar.

### Capturas

Preservar evidência final mínima:

- todas as 11 rotas em 320 e 1440 px;
- homepage, `/learn`, `/cases`, `/method`, `/lab` e `/lablog` nas larguras intermediárias;
- capturas adicionais somente se reproduzirem falha.

Não criar novo conjunto “before reconstruction”. O baseline aprovado já está documentado na Sprint 6.

### Zoom

Validar amostra representativa em equivalência a 200%, identificando claramente:

- viewport CSS;
- device scale;
- natureza da simulação;
- ausência de teste manual de tecnologia assistiva.

## 24. Performance

Comparar antes/depois:

- 11 rotas;
- First Load JS;
- JS compartilhado;
- tamanho por rota;
- páginas estáticas;
- Client Components;
- dependências;
- tamanho do logo social;
- ausência de widget externo.

Metas:

- 17 páginas estáticas;
- zero nova dependência;
- uma Client Component boundary;
- metadata e JSON-LD server-first;
- nenhuma regressão material;
- nenhum novo asset pesado.

## 25. Evidências separadas

### Fonte

Configuração, conteúdo tipado, metadata, JSON-LD, sitemap, robots, redirects e verificadores.

### Conteúdo renderizado

HTML local com title, meta tags, canonical, OG, Twitter, JSON-LD, headings e links.

### Build

Compilação e prerenderização. Não prova interação, produção, card social externo ou canal.

### Execução local observada

HTTP local, browser, foco, menu, redirects, anchors, visual e responsive.

### Pronto para deploy

Build, verificadores, rotas, metadata e layout aprovados localmente.

### Produção

Não observada sem deploy. Canonical público, headers, cards e redirects de host permanecem pendentes.

### Evidência externa

Udemy 403 automatizado; não prova link inválido ou autoria. YouTube e LinkedIn não serão testados como oficiais enquanto não confirmados.

## 26. Ficheiros previstos

Alterar somente após auditoria confirmar necessidade:

### Prováveis

- `config/site.ts`;
- `content/routes.ts`;
- `lib/metadata.ts`;
- `lib/structured-data.ts`;
- `app/layout.tsx`;
- `app/sitemap.ts`;
- `package.json`;
- `.gitignore`;
- `scripts/verify-refactor-v3.mjs`;
- `scripts/verify-ai-readiness.mjs`;
- `scripts/verify-homepage.mjs`;
- `scripts/validate-navigation-responsive.mjs`;
- documento final da Sprint 7.

### Condicionais

- páginas que precisem consumir nova estrutura SEO;
- verificadores específicos afetados por metadata;
- `app/robots.ts`, apenas se houver contradição técnica;
- `next.config.mjs`, apenas se redirect falhar;
- `components/seo/JsonLd.tsx`, apenas se serialização precisar de correção;
- `content/cases.ts`, somente para uma entidade de caso sustentada;
- ficheiros com erro real de PT-BR, heading, label, ID ou link.

### Fora de alteração por padrão

- narrativa principal das Sprints 1–6;
- métodos;
- casos;
- entradas LabLog;
- canais;
- componentes visuais;
- dependências;
- analytics existente;
- rotas.

## 27. Sequência de implementação

### Etapa 1 — Gate

- confirmar aprovação;
- registrar branch, HEAD, status e hashes;
- confirmar Sprint 6;
- confirmar somente `sprint 7.md` não rastreado.

### Etapa 2 — Baseline técnico

- executar 11 gates;
- registrar duração, warnings e performance.

### Etapa 3 — Inventário

- 11 rotas;
- metadata;
- H1;
- OG/Twitter;
- canonical;
- JSON-LD;
- sitemap;
- robots;
- redirects;
- canais;
- artefatos.

### Etapa 4 — Baseline visual

- reutilizar evidência aprovada da Sprint 6 como comparação documental;
- não reconstruir novamente o before;
- medir estado inicial se necessário sem duplicar capturas.

### Etapa 5 — Contrato SEO tipado

- criar matriz única;
- títulos absolutos;
- descriptions prudentes;
- público, função e tipo.

### Etapa 6 — Metadata compartilhada

- helper;
- canonical absoluto;
- OG/Twitter;
- logo global aprovado;
- default do layout.

### Etapa 7 — Metadata das 11 rotas

- aplicar matriz;
- conferir HTML;
- evitar title duplicado;
- nenhuma divergência com H1.

### Etapa 8 — Structured data

- preservar entidades;
- decidir conservadoramente casos/coleções;
- validar IDs e relações;
- excluir tipos não sustentados.

### Etapa 9 — Sitemap, robots e redirects

- remover sinais sem fonte;
- preservar crawler policy;
- validar redirects sem criar novos.

### Etapa 10 — Artefatos

- confirmar `.tmp`;
- remover somente diretório vazio;
- adicionar ignore proporcional;
- preservar evidências documentais.

### Etapa 11 — Verificadores existentes

- atualizar contratos afetados;
- reduzir fragilidade;
- manter checks negativos.

### Etapa 12 — Integrador

- criar `verify-refactor-v3`;
- coordenar verificadores;
- adicionar checks transversais;
- produzir resumo.

### Etapa 13 — Auditorias finais

- editorial;
- PT-BR;
- terminologia;
- links;
- acessibilidade;
- segurança;
- privacidade.

### Etapa 14 — Responsivo

- 55 combinações;
- 22 interações mobile;
- zoom equivalente;
- capturas mínimas finais.

### Etapa 15 — Gates finais

- executar 12 comandos sequencialmente;
- nenhuma concorrência em `.next`.

### Etapa 16 — Documento

- criar relatório obrigatório;
- preencher matriz antes/final;
- classificar evidências;
- registrar limitações e pós-deploy.

### Etapa 17 — Escopo

- `git diff --check`;
- zero rota;
- zero dependência;
- zero narrativa nova;
- zero canal inferido;
- zero deploy;
- nenhuma nova sprint.

## 28. Gates finais

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
npm.cmd run verify:refactor-v3
```

O integrador poderá repetir os verificadores por coordenação. Essa repetição será registrada como validação integrada, não como build adicional.

## 29. Documento final obrigatório

Criar:

`docs/sprints para v3/Sprint 7 - Metadata Structured Data e Validacao Final.md`

Conteúdo:

- estado;
- branch e commits;
- documentos e hashes;
- baseline;
- matriz das 11 rotas;
- metadata anterior/final;
- OG/Twitter;
- canonical;
- sitemap;
- robots;
- redirects;
- structured data;
- decisões por tipo schema.org;
- canais;
- artefatos;
- verificadores;
- links;
- editorial;
- PT-BR e terminologia;
- acessibilidade;
- responsivo;
- performance;
- segurança e privacidade;
- classes de evidência;
- limitações;
- pronto para deploy;
- pendências públicas;
- resultado do ciclo V3.

## 30. Riscos e mitigação

| Risco | Mitigação |
|---|---|
| metadata introduzir claim novo | derivar somente de conteúdo visível |
| title duplicado pelo template | usar política explícita de title absoluto |
| LabLog sugerir entradas | description de espaço destinado |
| casos sugerirem escala | citar HORA.city no singular |
| Organization implícita | não criar entidade |
| schema excessivo | manter WebPage quando dúvida |
| Course não confirmado | não adicionar |
| YouTube em `sameAs` | check negativo |
| LinkedIn pessoal/institucional misturado | contratos separados |
| sitemap com sinais inventados | omitir priority/datas sem fonte |
| robots alterado por simplificação | preservar política deliberada |
| apagar evidência | inventário e alvo exato antes de remover |
| `.tmp` reaparecer | ignore proporcional |
| verificador frágil | conceitos e estados, não parágrafos |
| integrador lento | subprocessos sequenciais e resumo de duração |
| falsa validação runtime | separar build, HTML e browser |
| declarar produção | status explícito de validação local |
| regressão visual | matriz 55 e amostra capturada |
| alterar narrativa | microajustes somente com contradição comprovada |

## 31. Critérios de conclusão

A Sprint 7 estará concluída quando:

- 11 rotas tiverem metadata própria;
- H1 e metadata forem semanticamente coerentes;
- OG e Twitter estiverem alinhados;
- canonical absoluto estiver correto;
- sitemap tiver somente 11 rotas e nenhum sinal sem fonte;
- robots preservar a política deliberada;
- redirects passarem sem loop ou chain;
- JSON-LD descrever somente entidades reais;
- Organization continuar ausente;
- decisões de CollectionPage, ItemList, Course e Article estiverem registradas;
- YouTube continuar oculto;
- LinkedIn pessoal/institucional continuar separado;
- Udemy continuar secundária;
- colaboração continuar sem CTA;
- `.tmp/sprint6-before-reconstruction` estiver registrado como já removido;
- `.tmp/edge-sprint3-debug` estiver resolvido;
- evidências documentais permanecerem;
- verificadores estiverem consolidados;
- `verify:refactor-v3` passar;
- 12 gates passarem;
- links e anchors passarem;
- auditorias editorial, PT-BR e terminológica passarem;
- critérios de acessibilidade definidos passarem;
- 55 combinações passarem;
- performance permanecer proporcional;
- privacidade e segurança passarem;
- nenhuma rota, dependência, claim, canal ou narrativa nova surgir;
- documento final estiver completo;
- o site estiver localmente pronto para deploy;
- produção continuar explicitamente pendente;
- nenhuma nova sprint for iniciada.

## 32. Entrega final prevista

A resposta futura seguirá os 35 itens da especificação, incluindo:

- documento;
- branch e commits;
- 11 rotas;
- metadata, OG/Twitter e canonical;
- sitemap, robots e redirects;
- tipos JSON-LD;
- canais;
- `.tmp` e artefatos;
- verificadores e integrador;
- 12 gates;
- links, editorial, acessibilidade e 55 combinações;
- performance;
- segurança e privacidade;
- limitações e pós-deploy;
- confirmação de nenhuma nova sprint.

Status futuro, somente após implementação:

`Sprint 7 concluída. Refactor Narrativo V3 validado localmente e pronto para deploy. Validação pública pós-deploy permanece pendente.`

Estado atual:

`Plano da Sprint 7 concluído. Implementação não iniciada.`
