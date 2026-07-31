# Sprint 6 — Navegação, Canais e Descoberta

## Estado

Sprint 6 implementada e validada em 23 de julho de 2026, timezone Europe/Berlin.

Resultado:

`Sprint 6 concluída. Aguardando aprovação humana antes da Sprint 7.`

Nenhuma atividade da Sprint 7 foi iniciada.

## 1. Repositório

| Item | Estado |
|---|---|
| Branch inicial/final | `refactor/homepage-v0.2.0` |
| HEAD inicial/final | `fce173295dd6e6c5023c351008201cfa45b16c5e` |
| Commits criados | nenhum |
| Node | 22.19.0 |
| npm | 11.6.3 |
| Next.js | 14.2.35 |
| Rotas canônicas | 11 |
| Redirect de compatibilidade | `/about` → `/lab#sobre`, HTTP 308 |

O worktree já continha as alterações atribuídas às Sprints 2–5. Elas foram preservadas. A Sprint 6 foi executada sobre esse estado acumulado, sem reset, checkout destrutivo ou alteração de branch.

## 2. Gate documental

Foram consultados como contratos:

- `Sprint 0 - Contrato Editorial e Mapa de Preservacao e Migracao.md`;
- `decisoes humanas.md`;
- `Sprint 1 - Homepage.md`;
- `Sprint 2 - LAB.md`;
- `Sprint 3 - Formacao e Progressao Pedagogica.md`;
- `Sprint 4 - Metodo e Pratica Investigativa.md`;
- `Sprint 5 - Casos Evidencias e Proveniencia.md`;
- `sprint 6.md`;
- `plano-sprint6.md`;
- fontes de rotas, navegação, canais, Header, mobile, Footer e continuidades.

IDs protegidos:

- `V3-MAP-GLOBAL-001`;
- `V3-MAP-GLOBAL-002`;
- `V3-MAP-ECO-002`;
- `V3-MAP-LABLOG-001`;
- `V3-MAP-HOME-005`;
- `V3-MAP-HOME-007`;
- `HUM-005`.

A especificação `sprint 6.md` permaneceu inalterada, com SHA-256:

`075B4DA103303AEAD78EB1AB57020831590A00EDFBCA1EDCC8EECFC7E494DFAC`

O plano aprovado possui SHA-256:

`B05DDBC266DC5C6BAD38ACBDBE619F87B10FD2EC93BB704AC6E6EF7273D834F4`

## 3. Baseline técnico

Antes das alterações da Sprint 6 passaram:

1. lint;
2. TypeScript;
3. build;
4. foundation;
5. AI-readiness;
6. homepage;
7. LAB;
8. learn;
9. method-practice;
10. cases-evidence.

O baseline compilou 17 páginas estáticas. As rotas temáticas apresentavam:

- tamanho por rota: 1,33 kB;
- First Load JS: 94,3 kB;
- JS compartilhado: 87,2 kB.

## 4. Arquitetura anterior

### Header

- quatro escolhas: Método, Aprender, Casos e O LAB;
- ausência de Início;
- CTA Começar apontava para `/learn`;
- nenhum estado ativo;
- rotas profundas não ativavam sua área narrativa.

### Mobile

- mesmos quatro itens;
- Escape e retorno ao trigger já existiam;
- o primeiro item não recebia foco ao abrir;
- nenhum estado ativo;
- foco visível do trigger não seguia explicitamente o padrão do design system.

### Footer

- um grupo plano de navegação;
- cinco links internos;
- Udemy e um YouTube;
- rotas profundas ausentes;
- “Study Case” divergente do idioma editorial.

### Continuidade

- arrays distribuídos;
- alguns blocos excediam quatro opções;
- labels e relações variavam entre rotas;
- não existia mapa canônico único para a experiência renderizada.

## 5. Header implementado

Ordem única em desktop e mobile:

1. Início → `/`;
2. Aprender → `/learn`;
3. Métodos → `/method`;
4. Casos → `/cases`;
5. LAB → `/lab`.

CTA global:

`Começar` → `/payload-journey`

O Header permanece server-first. `SitePage` transmite o path canônico ao `SiteHeader`; somente o menu mobile permanece Client Component.

### Estado ativo

| Área | Rotas associadas |
|---|---|
| Início | `/` |
| Aprender | `/payload-journey`, `/learn` |
| Métodos | `/method`, `/protocol`, `/investigation`, `/usmt` |
| Casos | `/cases`, `/lablog` |
| LAB | `/lab`, `/ecosystem` |

O item ativo recebe:

- `aria-current="page"`;
- texto de alto contraste;
- fundo;
- borda inferior.

O estado não depende apenas de cor.

## 6. Navegação mobile

O mobile consome a mesma fonte, ordem, CTA e função de correspondência do desktop.

Foram preservados ou adicionados:

- trigger com `aria-expanded` e `aria-controls`;
- área de toque mínima de 44 px;
- foco visível;
- foco movido para Início ao abrir;
- estado ativo com `aria-current`;
- Escape para fechar;
- retorno de foco ao trigger;
- fechamento ao selecionar um destino;
- ordem de teclado equivalente ao desktop;
- ausência de nova biblioteca, focus trap complexo ou scroll lock.

Foram observados 22 ciclos completos de interação, nas 11 rotas em 320 e 375 px.

## 7. Footer implementado

### Começar

- Payload Journey;
- Aprender.

### Investigar

- Métodos;
- Protocolo;
- Software System Investigation;
- USMT.

### Evidências

- Casos;
- LabLog.

### LAB

- Sobre o LAB;
- Ecossistema.

### Canais

- Formação na Udemy.

O Footer alcança as dez rotas não raiz e funciona como mapa expandido independente do Header.

## 8. Continuidade contextual

O mapa renderizado foi centralizado em `routeContinuations`, com no máximo quatro itens por rota.

| Rota | Destinos |
|---|---|
| `/payload-journey` | USMT; métodos; aprender |
| `/learn` | Payload Journey; HORA.city; métodos |
| `/method` | protocolo; investigation; Payload Journey; USMT |
| `/protocol` | métodos; investigation; HORA.city |
| `/investigation` | métodos; protocolo; aprender; HORA.city |
| `/usmt` | Payload Journey; protocolo; métodos |
| `/cases` | LabLog; métodos; protocolo |
| `/lablog` | HORA.city; LAB; protocolo |
| `/lab` | métodos; investigation; HORA.city; aprender |
| `/ecosystem` | aprender; HORA.city; LAB |

A homepage conserva os CTAs editoriais consolidados.

## 9. Descoberta

O verificador construiu o grafo a partir dos links internos renderizados e calculou a distância com BFS.

| Métrica | Resultado |
|---|---:|
| rotas alcançáveis | 11/11 |
| profundidade máxima global | 1 clique |
| limite aprovado | até 2 cliques |
| rotas dependentes apenas de sitemap | 0 |
| novas rotas | 0 |

A profundidade global de 1 clique decorre do Footer expandido. Isso não significa que todas as rotas tenham a mesma função na jornada narrativa.

## 10. Canais

### YouTube

Foram localizados dois candidatos divergentes:

- `@PayloadJourneyLAB`;
- `@Lab-Log`.

Decisão:

- nenhum foi escolhido por inferência;
- `canonical` permanece `null`;
- `resolutionStatus` permanece `unresolved`;
- os dois candidatos continuam documentados na fonte;
- nenhum link de YouTube é renderizado publicamente;
- uma resposta HTTP isolada não será tratada como prova de autoria.

`HUM-005` permanece pendente de decisão humana.

### LinkedIn

O contrato agora distingue explicitamente:

- `linkedin.personal`;
- `linkedin.institutional`.

Ambos permanecem `null`. Nenhum perfil pessoal foi apresentado como institucional e nenhum link foi renderizado.

### Udemy

- única URL configurada;
- preservada como canal formativo secundário;
- ausente do Header;
- presente na formação e no grupo Canais do Footer;
- link externo usa `target="_blank"` e `rel="noopener noreferrer"`.

Uma tentativa externa automatizada com método HEAD recebeu HTTP 403. Portanto:

- sintaxe e configuração local: confirmadas;
- resposta do host externo: observada;
- acessibilidade pública para uma pessoa: não confirmada por esse teste;
- autoria e disponibilidade comercial: não inferidas.

### Colaboração

Não foi localizado destino real e confirmado.

Resultado:

- nenhum CTA criado;
- nenhum email, formulário ou promessa de resposta inventados;
- o conteúdo descritivo do ecossistema foi preservado.

## 11. Auditoria de rotas, links e âncoras

Passaram:

- 11 rotas canônicas com HTTP 200;
- `/about` com HTTP 308;
- destino `/lab#sobre`;
- sitemap com 11 URLs canônicas;
- `/about` ausente do sitemap;
- todas as rotas presentes no Footer;
- `#sobre`, `#pilot` e `#founder` preservados;
- zero `href="#"`;
- zero path local;
- zero URI `file://`;
- zero URL pública vazia;
- zero padrão de credencial;
- zero link público para os YouTubes divergentes;
- zero LinkedIn não confirmado;
- links externos abertos com relação segura.

## 12. Tipagem e fonte canônica

Foram adicionados tipos proporcionais:

- `CanonicalRoutePath`;
- `NavigationArea`;
- `PrimaryNavigationItem`;
- `FooterGroup`;
- `ExternalChannel`;
- `ChannelStatus`;
- `RouteContinuationMap`.

Não foi criado registry dinâmico, framework genérico ou dependência nova.

## 13. Ficheiros de implementação da Sprint 6

### Navegação e tipos

- `types/content.ts`;
- `content/site.ts`;
- `components/layout/SiteHeader.tsx`;
- `components/layout/MobileNavigation.tsx`;
- `components/layout/SiteFooter.tsx`;
- `components/pages/SitePage.tsx`.

### Paths e continuidade

- `app/page.tsx`;
- `app/payload-journey/page.tsx`;
- `app/learn/page.tsx`;
- `app/cases/page.tsx`;
- `app/usmt/page.tsx`;
- `app/method/page.tsx`;
- `app/protocol/page.tsx`;
- `app/investigation/page.tsx`;
- `app/lab/page.tsx`;
- `app/ecosystem/page.tsx`;
- `app/lablog/page.tsx`.

### Canais

- `content/cases.ts`;
- `content/payload-journey-lab.ts`;
- `components/sections/LabLogPageSections.tsx`;
- `components/sections/LabLogSection.tsx`.

As alterações nesses ficheiros foram limitadas a links, estado de canal, continuidade e passagem do path. O conteúdo editorial principal consolidado nas Sprints 1–5 não foi reescrito.

### Verificação

- `scripts/verify-navigation-discovery.mjs`;
- `scripts/validate-navigation-responsive.mjs`;
- `scripts/verify-homepage.mjs`, apenas expectativas de canais/navegação alteradas;
- `scripts/verify-cases-evidence.mjs`, apenas expectativa do estado público do YouTube;
- `package.json`.

### Documentação e evidências

- este documento;
- `sprint6-before-reconstructed-responsive-validation.json`;
- `sprint6-after-responsive-validation.json`;
- 34 capturas de baseline reconstruído;
- 34 capturas posteriores.

## 14. Validação visual

### Baseline

O build de baseline deixou de ser reutilizável depois que os verificadores herdados iniciaram `next dev`. Por isso, o “before” visual foi reconstruído numa cópia temporária isolada a partir da arquitetura auditada.

Classificação correta:

- não é gravação histórica de runtime anterior;
- é execução local observada de uma reconstrução fiel do Header, mobile e Footer do baseline;
- a cópia temporária foi removida após gerar as evidências;
- os ficheiros usam o prefixo `before-reconstructed`.

Resultado:

- 55 combinações;
- 34 capturas;
- 22 interações mobile;
- zero overflow.

### Estado posterior

Foram observadas as 11 rotas em:

- 320 px;
- 375 px;
- 768 px;
- 1024 px;
- 1440 px.

Resultado:

- 55 combinações;
- 34 capturas permanentes;
- 22 interações mobile;
- foco inicial aprovado;
- Escape e retorno de foco aprovados;
- estado ativo aprovado;
- Footer aprovado;
- zero overflow.

Também passaram quatro amostras representativas em viewport CSS de 720 px com `deviceScaleFactor: 2`, equivalentes ao espaço CSS disponível numa referência física de 1440 px a 200%. Essa classificação é uma simulação responsiva equivalente, não uma observação de zoom manual de uma pessoa.

## 15. Gates finais

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

O novo verificador confirmou:

- 11 rotas canônicas;
- um redirect permanente;
- 11 URLs no sitemap;
- cinco escolhas primárias;
- cinco grupos no Footer;
- Udemy como único canal externo público;
- YouTube canônico `null`;
- contextos de LinkedIn separados;
- zero CTA de colaboração;
- 11 estados ativos;
- contrato de foco mobile;
- máximo de quatro continuidades;
- profundidade global máxima de 1;
- zero path local;
- zero padrão sensível;
- zero nova rota.

## 16. Build e performance

| Métrica | Baseline | Final | Variação |
|---|---:|---:|---:|
| páginas estáticas | 17 | 17 | 0 |
| tamanho por rota temática | 1,33 kB | 1,44 kB | +0,11 kB |
| First Load JS temático | 94,3 kB | 94,4 kB | +0,1 kB |
| JS compartilhado | 87,2 kB | 87,2 kB | 0 |
| Client Component boundaries | 1 | 1 | 0 |
| dependências | baseline | baseline | 0 |

O build valida compilação e prerenderização estática. Não é evidência de interação runtime.

## 17. Classes de evidência

### Fonte

Tipos, mapas, componentes, paths e scripts inspecionados diretamente no repositório.

### Conteúdo renderizado

HTML local servido e auditado para Header, Footer, links, H1, estado ativo, canais, paths e segurança.

### Build

Compilação e prerenderização de 17 páginas estáticas. Não demonstra foco, menu, redirect observado no browser ou acessibilidade de canal externo.

### Execução local observada

Edge headless conectado por DevTools Protocol:

- 55 combinações posteriores;
- 22 interações mobile;
- foco;
- Escape;
- retorno ao trigger;
- fechamento;
- item ativo;
- overflow;
- Footer.

### Produção

Não houve deploy nem observação da aplicação em produção. Nenhuma afirmação de comportamento em produção é feita.

### Evidência externa

O host da Udemy respondeu HTTP 403 a um pedido HEAD automatizado. Isso não comprova autoria, disponibilidade para browser humano, validade do cupom ou estado comercial do curso.

## 18. Metadata

Nenhuma metadata editorial, JSON-LD, canonical, robots ou sitemap foi alterado pela Sprint 6.

O sitemap e o redirect foram apenas validados.

## 19. Warnings preexistentes

Foram observados e não corrigidos:

- `webpack.cache.PackFileCacheStrategy: Unable to snapshot resolve dependencies`;
- avisos Git de futura conversão LF → CRLF.

Esses warnings não impediram os gates.

## 20. Limitações e decisões pendentes

- YouTube canônico continua pendente de decisão humana;
- LinkedIn pessoal continua não configurado;
- LinkedIn institucional continua não configurado;
- canal público de colaboração continua não configurado;
- acessibilidade externa da Udemy não foi confirmada pelo pedido automatizado;
- produção não foi observada;
- o baseline visual anterior é reconstruído, não captura histórica;
- não houve teste manual por tecnologia assistiva real.

## 21. Proteções finais

- nenhuma rota metodológica nova;
- nenhuma nova entrada, caso ou evidência;
- nenhum canal inferido;
- nenhum CTA de colaboração inventado;
- Udemy mantida como canal secundário;
- conteúdo editorial principal das Sprints 1–5 preservado;
- metadata preservada;
- nenhuma atividade da Sprint 7.

## 22. Conclusão

A Sprint 6 estabeleceu navegação global coerente, equivalente entre desktop e mobile, acessível por categoria, com Footer expandido, continuidades controladas e descoberta completa das 11 rotas em até dois cliques — concretamente, em um clique global pelo Footer.

Os canais públicos foram tratados proporcionalmente à evidência:

- Udemy publicada como formação secundária;
- YouTube oculto até decisão canônica;
- LinkedIn pessoal e institucional separados e ausentes;
- colaboração sem CTA enquanto não existe destino confirmado.

`Sprint 6 concluída. Aguardando aprovação humana antes da Sprint 7.`
