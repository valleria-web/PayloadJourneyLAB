# Sprint 7 — Metadata, Structured Data e Validação Final

## Estado

Sprint 7 implementada e validada localmente em 23 de julho de 2026, timezone Europe/Berlin.

Status:

`Sprint 7 concluída. Refactor Narrativo V3 validado localmente e pronto para deploy. Validação pública pós-deploy permanece pendente.`

Nenhum deploy foi realizado. Nenhum novo ciclo ou sprint foi iniciado por esta execução.

## 1. Repositório e autorização

| Item | Estado |
|---|---|
| Hash do plano aprovado | `8A2CB576F1D55247D61F5020CEE266FAB309D3B0B5E6C2958DE8A0B62DF20C48` |
| Hash observado antes de editar | corresponde |
| Branch inicial/final | `refactor/homepage-v0.2.0` |
| Commit inicial/final | `f2f48915a74582d998cbab4466c5e53e66f36940` |
| Commits criados | nenhum |
| Alterações iniciais atribuídas | `sprint 7.md` e `plano-sprint7.md` |

Depois do baseline apareceu no worktree:

`docs/sprints para v3/sprint 8.md`

Esse ficheiro:

- não foi criado por esta execução;
- apareceu depois do início da Sprint 7;
- não foi lido;
- não foi alterado;
- não foi usado como fonte;
- permaneceu fora do escopo.

Estado observado:

- tamanho: 1.390 bytes;
- criado em 23 de julho de 2026 às 15:22:14;
- última escrita às 15:25:03;
- SHA-256: `C656E530AC6238F39F27539E359E5FF97CD898104E597E4E3AA3F100EF23C901`.

Sua presença não representa início da Sprint 8 por esta execução.

## 2. Gate documental

Foram preservados como contratos:

- `Sprint 0 - Contrato Editorial e Mapa de Preservacao e Migracao.md`;
- `decisoes humanas.md`;
- `Sprint 1 - Homepage.md`;
- `Sprint 2 - LAB.md`;
- `Sprint 3 - Formacao e Progressao Pedagogica.md`;
- `Sprint 4 - Metodo e Pratica Investigativa.md`;
- `Sprint 5 - Casos Evidencias e Proveniencia.md`;
- `Sprint 6 - Navegacao Canais e Descoberta.md`;
- `sprint 7.md`;
- `plano-sprint7.md`.

Contratos protegidos:

- código acelerado não equivale a compreensão;
- estudantes e developers permanecem público prioritário;
- Payload Journey permanece entrada;
- a hipótese pedagógica continua condicional;
- autoridade humana permanece explícita;
- aplicação não equivale a eficácia;
- Trace Engineer continua função e perfil investigativo em desenvolvimento;
- transferibilidade não foi demonstrada;
- sistemas distribuídos e mission-critical continuam direção futura;
- HORA.city continua caso interno;
- zero evidência externa;
- zero promessa de empregabilidade, onboarding, certificação ou profissão consolidada.

## 3. Baseline

Antes das alterações passaram:

1. lint;
2. TypeScript;
3. build;
4. foundation;
5. AI-readiness;
6. homepage;
7. LAB;
8. learn;
9. method-practice;
10. cases-evidence;
11. navigation-discovery.

| Métrica | Baseline |
|---|---:|
| páginas estáticas | 17 |
| tamanho por rota temática | 1,44 kB |
| First Load JS temático | 94,4 kB |
| JS compartilhado | 87,2 kB |
| Client Component boundaries | 1 |
| dependências de runtime | 4 |
| dependências de desenvolvimento | 8 |

Warnings preexistentes:

- `webpack.cache.PackFileCacheStrategy: Unable to snapshot resolve dependencies`;
- conversão futura LF → CRLF indicada pelo Git.

Eles foram registados e não corrigidos.

## 4. Inventário das 11 rotas

| Rota | Função narrativa | Público | H1 preservado |
|---|---|---|---|
| `/` | por que agora, para quem e qual capacidade | estudantes e developers | O código acelera. A compreensão precisa acompanhar. |
| `/payload-journey` | payload como fio condutor | estudantes e developers | Siga a informação através do sistema |
| `/learn` | progressão pedagógica | pessoas em formação | Começar por um payload. Avançar para o sistema. |
| `/cases` | casos, evidências e limites | públicos técnicos | Investigações reais, conclusões proporcionais às evidências |
| `/usmt` | modelo esperado | estudantes, developers e pesquisadores | USMT — Universal System Modeling Template |
| `/method` | instrumentos e perguntas | estudantes e practitioners | Instrumentos diferentes para perguntas diferentes |
| `/protocol` | execução da investigação | practitioners | Congelar. Mapear. Detectar. Restaurar. |
| `/investigation` | prática e capacidades | practitioners e pesquisadores | Compreender antes de modificar |
| `/lab` | missão, origem e compromisso | todos os públicos | Um laboratório para investigar como sistemas realmente funcionam |
| `/ecosystem` | conexão entre áreas | públicos do ecossistema | Quatro áreas conectadas pelo mesmo propósito |
| `/lablog` | espaço para registro temporal | pessoas que acompanham o LAB | A investigação enquanto acontece |

Os H1 não foram reescritos. A Sprint 7 alterou somente a camada de descoberta e um microajuste responsivo comprovadamente necessário.

## 5. Metadata anterior

O baseline:

- reutilizava vários H1 como title;
- dependia implicitamente de `metadataBase` para canonical e `og:url`;
- deixava o template global participar dos títulos;
- não declarava imagem social;
- possuía descriptions genéricas em algumas rotas;
- sugeria plural maior que o inventário em `/cases`;
- sugeria registros já existentes em `/lablog`.

## 6. Metadata final

| Rota | Title final | Description final |
|---|---|---|
| `/` | Payload Journey LAB — Compreender sistemas pelo flow | Laboratório de Software System Investigation que pesquisa como flow, payload tracing, modelagem, checkpoints e evidências de runtime podem ajudar estudantes e developers a compreender codebases complexas. |
| `/payload-journey` | Payload Journey — Siga o payload, entenda o sistema | Aprenda a seguir uma operação por eventos, payloads, camadas, decisões, estados e efeitos observáveis para construir uma compreensão progressiva do sistema. |
| `/learn` | Aprender Software System Investigation — Payload Journey LAB | Aprenda progressivamente a seguir flows, payloads, decisões e evidências de runtime, do primeiro evento à investigação estruturada de sistemas de software. |
| `/cases` | Casos e Evidências — Payload Journey LAB | Explore o caso HORA.city com flows, estados, hipóteses, evidências, limitações e conclusões proporcionais ao que foi observado. |
| `/usmt` | USMT — Modelo esperado de sistemas de software | Use a USMT para explicitar estados, eventos, transições, regras, invariantes e limites e confrontar o modelo esperado com o comportamento observado. |
| `/method` | Métodos do Payload Journey LAB | Conheça os instrumentos do LAB e as perguntas que Payload Journey, USMT, Reverse Payload Journey, Operational Payload Path e Track to Origin ajudam a investigar. |
| `/protocol` | Congelar, Mapear, Detectar e Restaurar | Conheça o protocolo do LAB para delimitar flows, preservar comportamentos, produzir evidências, localizar divergências e validar restaurações. |
| `/investigation` | Software System Investigation e Trace Engineering | Compreenda a prática que combina modelagem, payload tracing, checkpoints, runtime e evidências para explicar como operações se transformam em decisões e estados. |
| `/lab` | Sobre o Payload Journey LAB | Conheça a missão, a origem e a construção do Payload Journey LAB, um laboratório de formação, pesquisa metodológica e investigação aplicada em sistemas de software. |
| `/ecosystem` | Ecossistema do Payload Journey LAB | Conheça como o LAB conecta formação, pesquisa metodológica, investigação aplicada, casos e futuras possibilidades de colaboração. |
| `/lablog` | LabLog — Investigação em andamento | Conheça o espaço destinado a registros datados de investigação, checkpoints, hipóteses, decisões e evidências do Payload Journey LAB. |

Resultados:

- 11 titles únicos;
- 11 descriptions únicas;
- titles entre 27 e 60 caracteres;
- PT-BR;
- nenhuma claim exclusiva da metadata;
- `/cases` descreve HORA.city no singular;
- `/lablog` descreve um espaço destinado a registros, não entradas publicadas;
- `/learn` não promove níveis futuros;
- `/protocol` não promete causa raiz;
- `/investigation` não promove Trace Engineer a profissão;
- `/ecosystem` mantém colaboração como possibilidade.

## 7. Open Graph e Twitter

Nas 11 rotas foram validados:

- title;
- description;
- URL absoluta;
- `siteName`;
- locale `pt_BR`;
- type `website`;
- Twitter `summary`;
- imagem;
- alt;
- dimensões.

Imagem global:

`public/brand/logo.png`

| Campo | Valor |
|---|---|
| dimensões | 1.254 × 1.254 px |
| tamanho | 409.531 bytes |
| SHA-256 | `0637AEE8C6D8E60F6FBE66D91E8C56983842CA758DD8C955307E24D877F661AA` |
| alt | Logo do Payload Journey LAB |

O logo já existia, era utilizado no Header/Footer e é permitido pelo README de marca.

Não foram criadas imagens específicas por rota, usadas screenshots temporárias ou adicionados assets.

## 8. Canonical

Resultado:

- 11 canonicals próprios;
- absolutos;
- HTTPS;
- domínio `www`;
- sem hash;
- sem apontar indevidamente para homepage;
- sem canonical de `/about`;
- `og:url` idêntico ao canonical;
- WebPage JSON-LD alinhada ao canonical.

A raiz renderiza canonical sem barra final; o sitemap representa a raiz com a barra padrão de URL. Não existe duplicação de página.

## 9. Sitemap

Resultado:

- 11 URLs;
- somente rotas canônicas;
- `/about` excluído;
- nenhum anchor;
- nenhum link externo;
- nenhuma evidência;
- nenhuma rota inexistente;
- domínio oficial;
- nenhum `priority`;
- nenhum `changeFrequency`;
- nenhum `lastModified`.

Os valores `1` e `0.8` foram removidos porque não possuíam fonte confiável. Nenhum novo sinal foi inventado.

## 10. Robots

A política deliberada da Sprint 0 foi preservada integralmente:

- crawling geral permitido;
- `OAI-SearchBot` permitido;
- `ChatGPT-User` permitido;
- `GPTBot` bloqueado;
- Host oficial;
- Sitemap oficial.

Busca e treino permanecem decisões distintas.

## 11. Redirects

Três configurações foram preservadas e validadas:

1. `/about` no apex → `https://www.payloadjourneylab.com/lab#sobre`;
2. apex → `www`, preservando path e query;
3. `/about` local → `/lab#sobre`.

Resultados:

- HTTP 308;
- `#sobre` preservado;
- sem loop;
- sem chain na aplicação;
- `/lab#sobre` existente;
- `/lab#pilot` existente;
- `/lab#founder` existente.

O comportamento do host em produção ainda depende de deploy e hospedagem.

## 12. Structured data anterior e final

Tipos finais:

- `WebSite`;
- `WebPage`;
- `Person`;
- `CreativeWork`.

### Preservados

- WebSite global;
- WebPage nas 11 rotas;
- Person da fundadora em `/lab`;
- CreativeWork da USMT em `/usmt`;
- creator da USMT;
- `/#website`;
- `/lab#founder`;
- `/usmt#usmt`.

### Alterado

- WebPage agora recebe title e description da matriz de metadata;
- a URL da WebPage raiz foi normalizada para corresponder ao canonical;
- IDs, URLs e descriptions foram validados transversalmente.

### Decisões por tipo

| Tipo | Decisão |
|---|---|
| `Organization` | omitido; estatuto não aprovado |
| `CollectionPage` | não introduzido; WebPage continua representação suficiente e prudente |
| `ItemList` | não introduzido; evitar complexidade e lista artificial |
| `CreativeWork` HORA.city | não introduzido; a página já descreve o caso sem ampliar entidade |
| `Course` | não introduzido; dados externos não suficientemente confirmados |
| `Article` | não introduzido |
| `BlogPosting` | não introduzido |
| `Blog` | não introduzido |
| `SearchAction` | não introduzido; não existe busca interna |

Não existe `sameAs`.

## 13. HORA.city e LabLog

HORA.city permanece:

- único caso publicado;
- caso interno;
- investigação em andamento;
- aplicação, não prova de eficácia;
- sem restauração validada;
- sem transferibilidade;
- sem evidência externa.

LabLog permanece:

- zero entradas estruturadas;
- zero artigos;
- zero ItemList;
- espaço editorial documentado;
- sem histórico simulado.

## 14. Canais externos

### YouTube

- dois candidatos divergentes preservados somente na fonte;
- canonical `null`;
- status `unresolved`;
- zero links na UI;
- zero links na metadata;
- zero links no JSON-LD;
- zero `sameAs`;
- nenhuma escolha por inferência.

### LinkedIn

- pessoal e institucional continuam separados;
- ambos `null`;
- nenhum link público;
- nenhum `sameAs`.

### Udemy

- canal formativo secundário;
- presente em `/learn` e Footer;
- ausente do Header;
- não promovida a entidade Course.

Limitação preservada:

`O pedido HEAD automatizado recebeu HTTP 403.`

Isso não foi interpretado como:

- link inválido;
- autoria confirmada;
- curso indisponível;
- cupom válido;
- resultado comercial.

### Colaboração

- sem CTA;
- sem email;
- sem formulário;
- sem ContactPoint;
- continua possibilidade futura.

## 15. Artefatos temporários

### `.tmp/sprint6-before-reconstruction`

- não existia no início da Sprint 7;
- não está versionado;
- não reapareceu;
- as evidências necessárias já estão em `docs`;
- nenhuma reconstrução foi repetida.

### `.tmp/edge-sprint3-debug`

- localizado vazio;
- não versionado;
- removido após validação do target exato;
- não continha evidência.

### `.gitignore`

Adicionado:

`.tmp/`

A regra não oculta documentos, PNG ou JSON de evidência.

### Evidências preservadas

- 68 PNG e dois JSON da Sprint 6;
- evidências das Sprints anteriores;
- documentos finais;
- relatórios referenciados.

### Evidências finais da Sprint 7

- 40 PNG;
- um JSON de métricas;
- nenhuma captura diagnóstica intermediária.

Um JSON diagnóstico temporário criado durante a investigação do overflow foi removido após cumprir sua função.

## 16. Verificadores consolidados

| Verificador | Resultado | Papel |
|---|---|---|
| foundation | passou | estrutura, design system e server-first |
| AI-readiness | passou | crawler policy, entidades e proveniência |
| homepage | passou | rotas, conteúdo global e preservação |
| LAB | passou | contrato institucional |
| learn | passou | progressão e claims pedagógicos |
| method-practice | passou | métodos, protocolo e investigação |
| cases-evidence | passou | caso, evidências e LabLog |
| navigation-discovery | passou | rotas, canais, foco e descoberta |

Foram atualizadas somente as expectations afetadas pela metadata aprovada.

## 17. `verify:refactor-v3`

Foi criado:

`scripts/verify-refactor-v3.mjs`

O comando:

`npm.cmd run verify:refactor-v3`

Coordena sequencialmente os oito verificadores e depois valida coerência transversal.

Resultado:

- oito subprocessos aprovados;
- duração individual registada;
- 11 rotas;
- 11 titles;
- 11 descriptions;
- 11 canonicals;
- 11 OG;
- 11 Twitter;
- quatro tipos JSON-LD;
- sitemap com 11;
- política de crawler preservada;
- três redirects;
- zero YouTube;
- zero LinkedIn;
- zero CTA de colaboração;
- zero path local no HTML;
- zero padrão sensível no HTML;
- zero artefato temporário não autorizado;
- zero rota;
- zero dependência;
- produção: `pending-deploy`.

## 18. Validação editorial

As 11 rotas foram comparadas com:

- H1;
- pergunta principal;
- público;
- CTA;
- continuidade;
- metadata;
- structured data;
- canonical;
- sitemap;
- profundidade;
- status dos claims.

Resultado:

- nenhuma hipótese promovida a fato;
- nenhuma ambição promovida a competência;
- nenhuma eficácia declarada;
- nenhuma transferibilidade declarada;
- nenhuma profissão consolidada;
- nenhuma certificação;
- nenhuma nova narrativa;
- nenhuma reescrita ampla.

## 19. PT-BR e terminologia

A auditoria das áreas ativas não encontrou variantes PT-PT públicas que exigissem correção.

`inicio` em `homepageAnchors.home` foi preservado porque é ID técnico sem acento, não texto público.

Foram validados:

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

## 20. Links

Passaram:

- 11 rotas HTTP 200;
- `/about` HTTP 308;
- anchors do LAB;
- sitemap;
- robots;
- zero `href="#"`;
- zero URL vazia;
- links externos seguros;
- zero YouTube e LinkedIn públicos;
- Udemy classificada separadamente.

Profundidade máxima global:

`1 clique`

O limite era dois.

## 21. Acessibilidade

Foram validados:

- landmarks;
- H1 único;
- headings;
- foco visível;
- teclado;
- menu mobile;
- Escape;
- retorno de foco;
- `aria-current`;
- labels;
- estados além de cor;
- CTAs descritivos;
- Footer;
- anchors;
- zoom equivalente a 200%.

Formulação proporcional:

`Os critérios de acessibilidade definidos para o refactor foram validados.`

Não é declarada conformidade WCAG total nem teste manual com tecnologia assistiva.

## 22. Validação responsiva

Matriz:

- 11 rotas;
- 320, 375, 768, 1024 e 1440 px;
- 55 combinações;
- 22 ciclos mobile;
- seis amostras equivalentes a 200%;
- 40 capturas;
- zero overflow final.

### Correção encontrada

Em `/lab`, o badge:

`Direção futura de pesquisa e formação`

excedia em 8 px o viewport CSS equivalente a 200%.

Correção mínima:

- largura máxima;
- quebra de linha;
- alinhamento central;
- nenhum texto alterado;
- nenhum redesign.

A matriz passou após a correção.

O elemento decorativo deslocado da Hero foi observado como geometria visual, mas não produziu scroll estrutural.

## 23. Performance

| Métrica | Baseline | Final | Variação |
|---|---:|---:|---:|
| páginas estáticas | 17 | 17 | 0 |
| tamanho por rota temática | 1,44 kB | 1,44 kB | 0 |
| First Load JS temático | 94,4 kB | 94,4 kB | 0 |
| JS compartilhado | 87,2 kB | 87,2 kB | 0 |
| Client Components | 1 | 1 | 0 |
| dependências runtime | 4 | 4 | 0 |
| dependências dev | 8 | 8 | 0 |

Metadata e JSON-LD permanecem server-first.

## 24. Segurança e privacidade

### Superfície pública renderizada

Confirmado:

- zero `C:\Users`;
- zero `/Users/`;
- zero `file://`;
- zero localhost;
- zero IP privado;
- zero segredo;
- zero token;
- zero credential;
- zero email;
- zero URL privada;
- zero canal não confirmado.

### Fonte técnica

Os scripts de captura contêm o path local genérico do executável do Edge. Ele:

- não contém username;
- é fonte de automação;
- não é renderizado;
- não é metadata nem JSON-LD.

### Documentos históricos

`docs/sprints para v3/sprint 0.md` contém dois paths locais fornecidos na especificação histórica, incluindo `VdSR2`.

Eles foram preservados porque:

- o utilizador exigiu preservação integral dos contratos das Sprints 0–6;
- não são renderizados pelo site;
- não entram no build público;
- alterá-los reescreveria uma especificação histórica.

Limitação:

Se o repositório completo for publicado, esses dois paths devem receber decisão humana de redação. Isso não bloqueia o deploy da aplicação, mas impede declarar que todo o histórico documental está livre de identificadores locais.

## 25. Ficheiros alterados

### Metadata e indexação

- `config/site.ts`;
- `content/routes.ts`;
- `lib/metadata.ts`;
- `lib/structured-data.ts`;
- `app/layout.tsx`;
- `app/sitemap.ts`;
- `app/learn/page.tsx`;
- `app/lab/page.tsx`;
- `components/pages/SitePage.tsx`.

### Correção responsiva

- `components/sections/LabConstructionSection.tsx`.

### Verificação

- `scripts/verify-ai-readiness.mjs`;
- `scripts/verify-learn.mjs`;
- `scripts/validate-navigation-responsive.mjs`;
- `scripts/verify-refactor-v3.mjs`;
- `package.json`.

### Artefatos e documentação

- `.gitignore`;
- 40 PNG finais;
- um JSON final;
- este documento.

Não foram alterados:

- `app/robots.ts`;
- `next.config.mjs`;
- canais;
- casos;
- entradas LabLog;
- métodos;
- analytics;
- dependências.

## 26. Gates finais

| Gate | Resultado |
|---|---|
| `npm.cmd run lint` | passou |
| `npx.cmd tsc --noEmit` | passou |
| `npm.cmd run build` | passou |
| `npm.cmd run verify:foundation` | passou |
| `npm.cmd run verify:ai-readiness` | passou |
| `npm.cmd run verify:homepage` | passou |
| `npm.cmd run verify:lab` | passou |
| `npm.cmd run verify:learn` | passou |
| `npm.cmd run verify:method-practice` | passou |
| `npm.cmd run verify:cases-evidence` | passou |
| `npm.cmd run verify:navigation-discovery` | passou |
| `npm.cmd run verify:refactor-v3` | passou |

Os comandos foram executados sequencialmente. Nenhum build concorrente foi iniciado.

## 27. Classes de evidência

### Fonte

Configuração, matriz SEO, helper, JSON-LD, sitemap, robots, redirects e scripts.

### Conteúdo renderizado

HTML local com title, description, canonical, OG, Twitter, JSON-LD, headings e links.

### Build

Compilação e prerenderização de 17 páginas. Não prova interação ou produção.

### Execução local observada

HTTP local e Edge headless:

- redirects;
- anchors;
- menu;
- foco;
- estado ativo;
- 55 combinações;
- zoom equivalente;
- overflow;
- HTML e endpoints técnicos.

### Pronto para deploy

Significa:

- build passa;
- verificadores passam;
- rotas funcionam localmente;
- metadata e JSON-LD renderizam;
- layout foi observado;
- performance foi preservada.

### Validado em produção

Não foi alcançado.

Exige deploy e observação do domínio público.

### Evidência externa

Somente o HTTP 403 automatizado da Udemy, classificado como limitação e não como prova de autoria, validade ou disponibilidade.

## 28. Limitações

- nenhum deploy;
- nenhuma observação do domínio público;
- nenhum teste real de cards sociais;
- nenhuma ferramenta pública de validação schema.org;
- nenhuma tecnologia assistiva real;
- Udemy não confirmada manualmente;
- YouTube não resolvido;
- LinkedIn ausente;
- colaboração sem canal;
- warnings preexistentes;
- dois paths locais em especificação histórica;
- `sprint 8.md` externo ao escopo apareceu durante a execução.

## 29. Pendências pós-deploy

Após autorização e deploy:

1. abrir as 11 rotas públicas;
2. validar canonical;
3. validar sitemap;
4. validar robots;
5. testar `/about`;
6. testar `/lab#pilot`;
7. testar `/lab#founder`;
8. testar Open Graph;
9. testar Twitter cards;
10. validar JSON-LD em ferramenta pública;
11. confirmar Udemy manualmente;
12. resolver YouTube por decisão humana;
13. confirmar LinkedIn institucional e pessoal separadamente;
14. observar console;
15. medir performance pública;
16. verificar cache e headers;
17. confirmar analytics existente, sem criar tracker novo.

## 30. Resultado final do ciclo V3

O Refactor Narrativo V3 está localmente consolidado:

- narrativa preservada;
- rotas completas;
- metadata coerente;
- structured data prudente;
- indexação conservadora;
- canais proporcionais à evidência;
- guardrails integrados;
- responsividade e acessibilidade definida validadas;
- performance preservada;
- zero deploy não autorizado.

Status final:

`Sprint 7 concluída. Refactor Narrativo V3 validado localmente e pronto para deploy. Validação pública pós-deploy permanece pendente.`
