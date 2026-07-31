# Plano de Implementação — Sprint 5

## Casos, Evidências e Proveniência

## 1. Estado do plano

Este documento planeja a Sprint 5 sem iniciar sua implementação.

A execução permanece condicionada a:

1. aprovação humana explícita deste plano;
2. confirmação de que a Sprint 4 pode ser considerada aprovada para avanço;
3. repetição do gate documental e técnico imediatamente antes da primeira edição;
4. atribuição de todas as alterações existentes no worktree;
5. ausência de decisão humana nova sobre fatos, estado ou publicação do caso HORA.city.

Nenhum ficheiro de implementação de `/cases` ou `/lablog` foi alterado durante a elaboração deste plano. Nenhuma atividade da Sprint 6 foi iniciada.

## 2. Correspondência com a especificação autorizável

O plano cobre o escopo de `docs/sprints para v3/sprint 5.md`:

- consolidar somente `/cases` e `/lablog`;
- apresentar somente casos, evidências e entradas realmente localizados;
- separar aplicação de eficácia;
- estruturar estados, fatos, hipóteses, desconhecidos, limitações e claims;
- proteger dados sensíveis e conteúdo não publicável;
- manter o HORA.city como caso real em investigação;
- não fabricar histórico de LabLog;
- preservar as Sprints 0–4;
- criar `verify:cases-evidence`;
- executar os dez gates finais;
- validar as duas rotas em cinco larguras;
- produzir `Sprint 5 - Casos Evidencias e Proveniencia.md`;
- não iniciar a Sprint 6.

## 3. Origem e estado da especificação

`docs/sprints para v3/sprint 5.md`:

- origem atribuída: especificação fornecida pelo utilizador;
- estado atual: não rastreado no Git;
- criado em 23 de julho de 2026 às 11:51:51;
- última escrita em 23 de julho de 2026 às 11:55:33;
- tamanho observado: 28.842 bytes.

O ficheiro deverá permanecer inalterado durante a implementação. O documento operacional será `Sprint 5 - Casos Evidencias e Proveniencia.md`.

## 4. Baseline atual

| Item | Estado observado |
|---|---|
| Branch | `refactor/homepage-v0.2.0` |
| HEAD | `fce173295dd6e6c5023c351008201cfa45b16c5e` |
| Node | `v22.19.0` |
| npm | `11.6.3` |
| Framework | Next.js 14.2.35 |
| Rotas indexáveis | 11 |
| Rota de casos | `/cases` |
| Rota de registros | `/lablog` |
| Caso real localizado preliminarmente | HORA.city, `RPJ-HORA-001` |
| Entradas LabLog estruturadas localizadas preliminarmente | nenhuma |
| Canal externo | configurado, mas conteúdo e canonicidade não auditados nesta fase |

O worktree contém as implementações ainda não commitadas das Sprints 2, 3 e 4, seus documentos, capturas e verificadores. Essas alterações estão atribuídas às sprints anteriores e devem ser preservadas.

O último baseline validado ao concluir a Sprint 4 registrou:

- lint aprovado;
- TypeScript aprovado;
- build aprovado com 17 páginas estáticas;
- foundation, AI-readiness, homepage, LAB, learn e method-practice aprovados;
- 94,3 kB de First Load JS nas rotas temáticas;
- warnings preexistentes de cache Webpack e LF/CRLF.

Esses resultados são referência, não substituem a reexecução dos gates antes da implementação.

## 5. Gate documental obrigatório

Antes da primeira edição, ler integralmente e registrar hash/estado de:

1. `Sprint 0 - Contrato Editorial e Mapa de Preservacao e Migracao.md`;
2. `decisoes humanas.md`;
3. `Sprint 1 - Homepage.md`;
4. `Sprint 2 - LAB.md`;
5. `Sprint 3 - Formacao e Progressao Pedagogica.md`;
6. `Sprint 4 - Metodo e Pratica Investigativa.md`;
7. `sprint 5.md`;
8. `plano-sprint5.md`;
9. `content/hora-city.ts`;
10. `README.md`;
11. documentos e fontes que mencionem HORA.city, evidências, checkpoints, detecção ou LabLog.

IDs do Mapa de Preservação e Migração que deverão ser protegidos:

- `V3-MAP-CASE-001`;
- `V3-MAP-CASE-002`;
- `V3-MAP-CASE-003`;
- `V3-MAP-LABLOG-001`;
- `V3-MAP-HOME-004`;
- `V3-MAP-HOME-007`;
- `V3-MAP-PROTO-002`;
- `V3-MAP-GLOBAL-007`;
- claims `CL-002`, `CL-003`, `CL-014`, `CL-015` e `CL-018`;
- decisões humanas `HUM-005` e `HUM-006`.

Interromper a implementação se:

- não houver autorização de avanço após a Sprint 4;
- alguma alteração do worktree não puder ser atribuída;
- for necessário decidir se um dado privado pode ser publicado;
- o estado do HORA.city contradisser as fontes existentes;
- a publicação de uma evidência depender de acesso externo não confirmado;
- uma conclusão exigir nova decisão humana;
- a única forma de preencher uma seção for inventar conteúdo.

## 6. Baseline técnico inicial

Executar sequencialmente, sem builds concorrentes:

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
```

Registrar para cada comando:

- horário;
- duração;
- exit code;
- resultado;
- warnings;
- First Load JS;
- falhas e sua origem.

Warnings preexistentes deverão ser documentados e não corrigidos fora do escopo.

## 7. Baseline visual

Antes das edições, capturar:

- `sprint5-before-cases-{320,375,768,1024,1440}.png`;
- `sprint5-before-lablog-{320,375,768,1024,1440}.png`.

Registrar:

- primeiro viewport;
- H1;
- CTAs;
- ordem das seções;
- densidade;
- estados;
- proveniência visível;
- overflow;
- First Load JS;
- ausência ou presença real de timeline e entradas.

O script responsivo existente poderá ser reutilizado com `CAPTURE_ROUTE` e `CAPTURE_PREFIX`.

## 8. Arquitetura anterior

### `/cases`

Composição atual:

1. `SitePage`;
2. `PageIntro` genérico;
3. `CaseStudySection`;
4. sete cards narrativos de HORA.city;
5. fatos técnicos;
6. dois CTAs;
7. continuidade.

Forças:

- HORA.city possui ID, projeto, payload, método, missão e status;
- origem e restauração permanecem explicitamente não comprovadas;
- fatos compartilhados estão centralizados em `content/hora-city.ts`;
- os verificadores impedem fatos não confirmados como `Send Heart`.

Lacunas:

- a rota funciona como apresentação única do HORA.city, não como registro público de casos;
- o H1 plural pode sugerir mais casos do que existe;
- não existe guia de leitura;
- estado não usa a taxonomia canônica da Sprint 5;
- fatos, hipóteses, desconhecidos e limitações não formam blocos completos;
- não existe timeline datada sustentada;
- “evidências” são fatos narrados, não inventário de artefatos com origem/status;
- não há conclusão autorizada e conclusões proibidas adjacentes;
- data de abertura e última atualização não estão publicadas;
- a variante editorial continua `unresolved`.

### `/lablog`

Composição atual:

1. `SitePage`;
2. `PageIntro` genérico;
3. `LabLogSection`;
4. descrição;
5. CTA externo;
6. lista de nove temas;
7. continuidade.

Forças:

- rota real e destino externo configurado;
- temas preservados;
- status de resolução do YouTube explicitamente `unresolved`;
- componente server-first.

Lacunas:

- nenhuma entrada datada estruturada foi localizada;
- a rota afirma que o LabLog “registra”, mas mostra somente temas;
- não diferencia entrada de caso;
- não apresenta estado, proveniência, decisão, hipótese ou evidência;
- o canal externo não equivale a inventário de entradas;
- dois destinos YouTube continuam divergentes;
- resolver o canal canônico pertence à Sprint 6.

## 9. Inventário real preliminar

Este inventário é preliminar e deverá ser refeito antes de escrever conteúdo público.

### Casos

| Candidato | Fonte localizada | Estado preliminar | Publicável |
|---|---|---|---|
| HORA.city / `RPJ-HORA-001` | `content/hora-city.ts`, `README.md`, rota `/cases` e documentos de sprint | caso real interno em investigação | sim, com limites |

Nenhum segundo caso suficientemente identificado foi localizado. Não criar cards vazios, placeholders, parceiros ou codebases futuras.

### Evidências e fontes candidatas

| Item | Classe preliminar | Estado | Limite |
|---|---|---|---|
| `content/hora-city.ts` | fonte documental interna | localizada | não é evidência independente |
| `README.md` | documento do repositório | localizada/referenciada | repete fatos internos |
| HTML atual de `/cases` | conteúdo renderizado | verificável localmente | não prova o comportamento do HORA.city |
| screenshots da rota `/cases` | screenshot de apresentação do site | localizadas | não evidenciam a anomalia causal |
| build do site | build | verificável | não é comportamento runtime |
| sessão local do site | execução local observada do site | verificável | não é execução observada do HORA.city |
| logs do HORA.city | possível evidência técnica | não localizada |
| commits do HORA.city | possível evidência técnica | não localizada neste repositório |
| OPP produzido | artefato metodológico | não localizado |
| Checkpoint Plan | artefato metodológico | não localizado |
| Freeze Record | artefato metodológico | não localizado |
| Detection Report | artefato metodológico | não localizado |
| Trace Evidence Record/Package | artefato metodológico | não localizado |
| USMT Evidence-Aligned | artefato metodológico | não localizado |
| restauração validada | resultado | não localizada |

Não publicar screenshots do site como se fossem evidência causal do caso.

### LabLog

| Item | Estado preliminar |
|---|---|
| entradas estruturadas com ID/data/caso/evidência | nenhuma localizada |
| temas editoriais | localizados |
| destino YouTube atual | configurado |
| canal canônico | não resolvido |
| correspondência entre vídeos e possíveis entradas | não auditada |

Documentos de sprint e relatórios históricos serão candidatos, não entradas automáticas. Só poderão virar LabLog se possuírem data, assunto, trabalho realizado, proveniência e relação verificável com caso ou método.

## 10. Política de publicação e segurança

Antes de incluir qualquer evidência:

1. localizar o ficheiro ou destino;
2. confirmar origem;
3. confirmar relação com o caso;
4. classificar status;
5. verificar se pode ser publicado;
6. procurar segredos e dados pessoais;
7. retirar paths locais;
8. limitar o claim ao que a evidência sustenta;
9. registrar limitações;
10. impedir link quebrado.

Nunca publicar:

- credenciais, tokens ou segredos;
- IPs, device IDs ou identificadores completos;
- dados pessoais ou de usuários;
- URLs privadas;
- paths locais;
- logs sensíveis;
- informação comercial confidencial;
- conversas privadas com IA.

Quando necessário, omitir o item e registrar apenas:

- `Não localizado`;
- `Não publicável`;
- `Evidência registrada, ainda não publicada`;
- ou `Ainda não observado`.

## 11. Taxonomia proporcional

Criar tipos explícitos e pequenos, sem plataforma genérica de casos.

### Estado de caso

União textual restrita aos estados necessários:

- `Delimitado`;
- `Congelado`;
- `Em mapeamento`;
- `Em detecção`;
- `Divergência localizada`;
- `Comportamento explicado`;
- `Restauração proposta`;
- `Restauração implementada`;
- `Restauração validada`;
- `Suspenso`;
- `Encerrado sem conclusão`;
- `Encerrado`.

Somente usar no HORA.city o estado sustentado por evidência. Na ausência de correspondência suficiente, manter o estado documental atual até decisão humana.

### Evidência

Usar apenas tipos efetivamente encontrados. O contrato mínimo deverá distinguir:

- ID;
- caso;
- tipo;
- título/descrição;
- origem;
- data, se conhecida;
- status;
- acesso;
- claim relacionado;
- limitação;
- localização pública opcional.

Status permitidos:

- localizada;
- verificada;
- parcialmente verificada;
- derivada;
- referenciada;
- não localizada;
- não publicável;
- substituída;
- invalidada.

### Entrada LabLog

Contrato simples:

- ID;
- data;
- título;
- tipo;
- caso opcional;
- etapa do protocolo opcional;
- pergunta;
- trabalho realizado;
- evidências;
- decisão ou mudança de hipótese;
- desconhecidos;
- próximos passos;
- autoria;
- assistência de IA;
- links confirmados.

Se não existir entrada que satisfaça o contrato mínimo, renderizar estado editorial honesto, não objetos vazios.

## 12. Fonte de conteúdo planejada

Preferência:

- manter `content/hora-city.ts` como fonte do caso;
- criar `content/cases.ts` somente se necessário para registro, taxonomias e apresentação;
- criar `content/lablog.ts` somente se houver responsabilidade própria e entradas verificáveis;
- não sobrecarregar `content/site.ts` com o contrato completo;
- manter apresentação histórica fora do HTML quando não for pública;
- evitar duplicar os fatos canônicos do HORA.city.

Uma estrutura possível e proporcional:

- `horaCityCase`: identidade e estado do caso;
- `caseEvidence`: inventário verificável;
- `caseTimeline`: apenas marcos datados confirmados;
- `caseRegistryPresentation`: arquitetura editorial;
- `labLogEntries`: zero ou mais entradas reais;
- `labLogPresentation`: guia, proveniência e estado atual.

## 13. Arquitetura planejada de `/cases`

### 1. Hero

- eyebrow: `CASOS E EVIDÊNCIAS`;
- H1: `Investigações reais, conclusões proporcionais às evidências`;
- dois parágrafos separando aplicação e eficácia;
- CTA `Explorar o caso HORA.city` para âncora real;
- CTA `Acompanhar os LabLogs` para `/lablog`.

### 2. Como ler um caso

Título: `O que está confirmado e o que ainda não sabemos`.

Explicar:

- estado;
- etapa do protocolo;
- evidência;
- fato;
- hipótese;
- desconhecido;
- conclusão;
- limitação.

### 3. Registro real

Renderizar somente HORA.city, salvo descoberta documental concreta de outro caso.

O card deverá mostrar:

- `RPJ-HORA-001`;
- sistema;
- flow somente se confirmado;
- estado;
- última atualização somente se houver fonte;
- pergunta;
- método;
- evidências públicas;
- limitações;
- CTA para a âncora do caso.

### 4. Caso HORA.city

Blocos:

1. sistema;
2. flow selecionado;
3. pergunta investigativa;
4. anomalia;
5. esperado;
6. observado;
7. estado e etapa;
8. métodos realmente aplicados;
9. fatos;
10. hipóteses;
11. desconhecidos;
12. limitações;
13. restauração e validação;
14. conclusão autorizada;
15. conclusões não autorizadas.

Não publicar `Send Heart`, origem, componentes, checkpoints executados, datas ou restauração sem fonte concreta.

### 5. Linha de investigação

Renderizar somente marcos que possuam:

- data verificável;
- descrição;
- estado;
- evidência relacionada.

Se nenhum marco satisfizer os quatro requisitos, mostrar que a cronologia pública ainda não foi localizada. Não inferir datas de commits do site como datas da investigação.

### 6. Evidências disponíveis

Cada item deverá mostrar tipo, ID, origem, relação, status, acesso e limitação.

Artefatos ausentes permanecerão explicitamente ausentes, sem links.

### 7. Aprendizados

Separar:

- aprendizado documentado sobre o sistema;
- aprendizado documentado sobre a aplicação do método;
- limites de generalização.

### 8. Próximos casos

Mensagem curta:

`Próximos casos dependerão de novas investigações documentadas.`

Sem cards de escala futura.

### 9. Continuidade

- `/lablog`;
- `/method`;
- `/protocol`;
- `/investigation`;
- `/learn`.

## 14. Arquitetura planejada de `/lablog`

### 1. Hero

- eyebrow: `LABLOG`;
- H1: `A investigação enquanto acontece`;
- texto que define entrada como registro datado, não conclusão;
- CTA `/cases`;
- CTA `/protocol`.

### 2. Como ler uma entrada

Explicar:

- data;
- tipo;
- caso;
- etapa;
- trabalho;
- evidência;
- decisão;
- desconhecidos;
- proveniência.

### 3. Inventário real

Se houver entradas verificáveis, renderizá-las em ordem cronológica com todos os campos disponíveis.

Se não houver:

- dizer que nenhuma entrada estruturada foi localizada;
- preservar os temas existentes;
- explicar os requisitos de publicação;
- não simular histórico;
- não apresentar o canal externo como arquivo verificado.

### 4. Relação com casos

Publicar:

`O caso mostra o conjunto da investigação. O LabLog preserva como ela evoluiu no tempo.`

Somente entradas com `caseId` real apontarão para a âncora correspondente em `/cases`.

### 5. Proveniência

Diferenciar:

- fonte original;
- resumo editorial;
- evidência técnica;
- interpretação;
- assistência de IA;
- conclusão humana.

### 6. Conteúdo externo

- preservar o destino atualmente configurado apenas se o link continuar válido;
- não declarar que vídeos específicos sustentam entradas sem inspeção;
- não resolver a divergência dos canais;
- registrar `HUM-005` como pendente para Sprint 6.

### 7. Continuidade

- `/cases`;
- `/method`;
- `/protocol`;
- `/learn`;
- `/lab`.

## 15. Componentes previstos

Reutilizar `SiteHeader`, `SiteFooter`, `JsonLd`, `PageContinuation`, `Section`, `SectionHeader`, `Card`, `Badge`, `Button` e `TechnicalLabel`.

Composição provável, ajustável após o inventário:

### Casos

- `CasesOverviewSection` — hero, guia e registro;
- `HoraCityCaseSection` — caso completo;
- `CaseEvidenceSection` — evidências e timeline;
- `CaseLearningSection` — aprendizados, limites e futuro.

### LabLog

- `LabLogOverviewSection` — hero e guia;
- `LabLogEntriesSection` — entradas reais ou estado vazio honesto;
- `LabLogProvenanceSection` — relação com casos e proveniência.

Evitar:

- componente por parágrafo;
- dashboard;
- tabela larga;
- timeline library;
- Client Components;
- CMS, banco ou autenticação.

## 16. Metadata e JSON-LD

### `/cases`

Descrição:

`Explore casos reais do Payload Journey LAB com flows, estados, hipóteses, evidências, limitações e conclusões proporcionais ao que foi observado.`

Avaliar `CollectionPage` e `ItemList` apenas para o caso realmente publicado.

### `/lablog`

Descrição:

`Acompanhe registros datados de investigação, checkpoints, hipóteses, decisões e evidências produzidas durante o trabalho do Payload Journey LAB.`

Se não houver entradas reais, não usar `BlogPosting`, `Article` ou `ItemList` de entradas.

Validar em ambas:

- title;
- description;
- canonical;
- Open Graph;
- Twitter;
- JSON-LD;
- ausência de datas, autoria ou entidades não sustentadas.

Uma extensão de `getThematicPageStructuredData` somente será feita se os tipos específicos puderem ser derivados de conteúdo real sem duplicar claims.

## 17. Claims a revisar

| Claim atual | Risco | Direção planejada |
|---|---|---|
| “Casos acompanhados pelo LAB” | plural sugere volume | explicitar registro real e quantidade existente |
| “O LabLog registra...” | promete arquivo não materializado | usar presente somente se entradas reais forem localizadas; caso contrário, declarar intenção/estado |
| “Evidências” como fatos narrados | pode sugerir artefatos técnicos | separar fonte interna, conteúdo renderizado e artefato técnico |
| escala de 6k para 40k | medição interna sem fonte independente | “escala registrada pelo caso”, com proveniência e limite |
| perda de observabilidade | causalidade/critério não publicados | observação interna, não conclusão causal |
| `createdAt` incorreto | anomalia documentada internamente | manter como relato/fato documental, sem causa declarada |
| checkpoints executados | não há registros canônicos localizados | não publicar como execução confirmada sem artefato |
| aplicação como evidência de eficácia | generalização proibida | declarar somente aplicação naquele contexto |

Claims proibidos deverão permanecer ausentes:

- redução de onboarding;
- produtividade aumentada;
- redução de bugs;
- transferibilidade;
- aprendizagem acelerada;
- validade universal;
- profissão consolidada;
- competência mission-critical;
- prova de eficácia do LAB.

## 18. Ficheiros previstos

### Alteração principal

- `app/cases/page.tsx`;
- `app/lablog/page.tsx`;
- `content/hora-city.ts`;
- `components/sections/CaseStudySection.tsx`;
- `components/sections/LabLogSection.tsx`;
- `content/routes.ts`;
- `types/content.ts`;
- `package.json`;
- `scripts/verify-cases-evidence.mjs`;
- `scripts/verify-homepage.mjs`;
- `scripts/verify-ai-readiness.mjs`;
- `scripts/verify-design-foundation.mjs`, somente se novos componentes precisarem ser protegidos;
- `docs/sprints para v3/Sprint 5 - Casos Evidencias e Proveniencia.md`.

### Criação somente se justificada pelo inventário

- `content/cases.ts`;
- `content/lablog.ts`;
- componentes específicos agrupados.

### Microajuste somente se indispensável

- homepage;
- `/method`;
- `/protocol`;
- `/investigation`;
- `/lab`;
- `/learn`.

Microajustes ficam limitados a links, labels e continuidade. Não reabrir arquitetura editorial.

### Fora de alteração

- Sprint 6;
- canal canônico do YouTube;
- rotas novas de caso;
- dependências;
- configuração global;
- Header e Footer, salvo falha técnica diretamente causada pela sprint;
- `/payload-journey`;
- `/usmt`;
- `/ecosystem`;
- autenticação, CMS, banco ou gestão de casos.

## 19. Verificador combinado

Criar:

`scripts/verify-cases-evidence.mjs`

Adicionar:

`npm.cmd run verify:cases-evidence`

### Contrato de `/cases`

- H1 canônico;
- um caso real publicado, salvo nova fonte concreta;
- ID `RPJ-HORA-001`;
- aplicação diferente de eficácia;
- estado e etapa textual;
- fatos, hipóteses, desconhecidos e limitações distintos;
- conclusão autorizada;
- claims proibidos ausentes;
- evidências com origem/status/acesso;
- timeline somente com marcos confirmados;
- links válidos;
- artefatos ausentes sem links;
- nenhuma restauração validada sem fonte.

### Contrato de `/lablog`

- H1 canônico;
- definição de entrada;
- entrada diferente de caso;
- zero entradas é permitido e deve ser honesto;
- datas somente em entradas reais;
- proveniência;
- temas preservados;
- canal canônico não resolvido;
- nenhuma entrada inventada;
- links válidos.

### Contrato global

- H1 único;
- IDs únicos;
- headings sequenciais;
- metadata e canonical;
- CTAs corretos;
- PT-BR;
- zero paths locais no HTML;
- zero padrões de segredos;
- zero claims de transferibilidade ou eficácia;
- mission-critical somente futuro, se mencionado;
- zero novas rotas de caso;
- zero novos Client Components;
- ausência de dados pessoais e identificadores sensíveis.

O verificador deverá proteger conceitos e relações, não parágrafos completos.

## 20. Sequência de implementação

### Etapa 1 — Revalidar autorização e worktree

- confirmar aprovação;
- registrar branch, HEAD e status;
- atribuir mudanças;
- confirmar Sprint 4 aprovada;
- confirmar Sprint 6 não iniciada.

### Etapa 2 — Executar baseline técnico

Executar os nove gates herdados e registrar duração, warnings e First Load JS.

### Etapa 3 — Capturar baseline visual

Produzir as dez capturas `before`.

### Etapa 4 — Inventariar casos

- localizar cada candidato;
- exigir identidade, escopo, estado e fonte;
- congelar quantidade publicável;
- registrar omissões.

### Etapa 5 — Inventariar evidências

- localizar ficheiros e destinos;
- classificar força, status, acesso e segurança;
- separar menção de artefato;
- excluir conteúdo sensível.

### Etapa 6 — Inventariar LabLogs

- procurar entradas datadas;
- validar relação com caso ou método;
- não converter automaticamente documentos de sprint;
- decidir entre lista real e estado vazio honesto.

### Etapa 7 — Ajustar tipos e fontes

- introduzir somente contratos necessários;
- manter HORA.city como fonte canônica;
- evitar arquitetura genérica.

### Etapa 8 — Implementar `/cases`

- hero;
- guia;
- registro;
- HORA.city;
- timeline condicionada;
- evidências;
- aprendizados;
- limites;
- continuidade.

Validar a rota isoladamente antes de avançar.

### Etapa 9 — Implementar `/lablog`

- hero;
- guia;
- entradas reais ou estado vazio;
- relação com casos;
- proveniência;
- canal externo com ressalva;
- continuidade.

Validar ausência de entradas inventadas.

### Etapa 10 — Metadata e dados estruturados

- alinhar as duas rotas;
- incluir tipos específicos somente quando sustentados;
- validar canonical, OG, Twitter e JSON-LD.

### Etapa 11 — Criar e alinhar verificadores

- implementar `verify:cases-evidence`;
- remover expectativas antigas dos verificadores existentes;
- preservar guardrails das Sprints 1–4.

### Etapa 12 — Validar privacidade e acessibilidade

- procurar segredos, paths e identificadores;
- revisar headings, listas, links, datas, status e foco;
- testar teclado;
- validar contraste.

### Etapa 13 — Validar responsividade

- capturar as dez imagens `after`;
- medir overflow;
- inspecionar extremos e larguras intermediárias;
- comparar before/after.

### Etapa 14 — Executar gates finais

Executar os dez comandos, sequencialmente.

### Etapa 15 — Documentar e auditar

- concluir `Sprint 5 - Casos Evidencias e Proveniencia.md`;
- registrar inventários e contagens;
- separar fonte, conteúdo renderizado, build, execução observada, produção e evidência externa;
- executar `git diff --check`;
- listar ficheiros;
- confirmar zero novas rotas;
- confirmar Sprint 6 não iniciada.

## 21. Gates finais

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

Todos devem passar. Não executar builds concorrentes sobre `.next`.

## 22. Validação visual

| Rota | 320 | 375 | 768 | 1024 | 1440 |
|---|---:|---:|---:|---:|---:|
| `/cases` | obrigatória | obrigatória | obrigatória | obrigatória | obrigatória |
| `/lablog` | obrigatória | obrigatória | obrigatória | obrigatória | obrigatória |

Inspecionar:

- primeiro viewport;
- função da página;
- proveniência;
- estados;
- fatos;
- hipóteses;
- desconhecidos;
- limitações;
- timeline;
- evidências;
- LabLogs;
- CTAs;
- datas;
- teclado e foco;
- overflow;
- legibilidade;
- ausência de path local;
- ausência de tabela horizontal;
- coerência com as Sprints 1–4.

Capturas finais:

- `sprint5-after-cases-{320,375,768,1024,1440}.png`;
- `sprint5-after-lablog-{320,375,768,1024,1440}.png`.

## 23. Evidências separadas no relatório

### Fonte

Ficheiro, documento, configuração ou artefato localizado. Não prova renderização, execução ou independência.

### Conteúdo renderizado

HTML e conteúdo servidos localmente. Não prova layout, produção ou comportamento do HORA.city.

### Build

Compilação e prerenderização. Não é evidência de comportamento runtime.

### Execução local observada

Servidor e navegador locais com resposta HTTP, DOM, foco, navegação e layout observados. Não equivale a execução observada do sistema HORA.city.

### Produção

Somente se houver deploy e observação explícita. Não está autorizada por este plano.

### Evidência externa

Somente investigação ou avaliação realizada por pessoa externa. Nenhuma foi localizada no baseline.

Quando `runtime` aparecer no conteúdo, deverá designar execução do sistema investigado. Build e renderização estática nunca serão classificados como runtime.

## 24. Riscos e mitigações

| Risco | Mitigação |
|---|---|
| transformar menção em evidência | exigir ficheiro, origem e status |
| publicar apenas um caso sob plural inflado | informar quantidade real e não criar placeholders |
| fabricar timeline | exigir data e evidência por marco |
| tratar canal como LabLog | separar destino externo de entrada verificada |
| converter sprint em entrada sem critério | aplicar contrato mínimo de LabLog |
| expor dado sensível | revisão de segurança e verificador |
| confundir build com runtime | classificação explícita no relatório |
| generalizar HORA.city | conclusão autorizada e claims proibidos adjacentes |
| declarar restauração | exigir artefato e validação observada |
| resolver YouTube antecipadamente | preservar `unresolved` para Sprint 6 |
| reabrir Sprints 1–4 | limitar alterações externas a microajustes |
| aumentar JS | server-first e zero dependências |
| criar plataforma de casos | tipos e componentes específicos, sem abstração genérica |

## 25. Critérios de conclusão

A Sprint 5 estará concluída quando:

- `/cases` funcionar como registro público proporcional ao inventário real;
- `/lablog` mostrar entradas reais ou declarar honestamente sua ausência;
- somente HORA.city for publicado, salvo descoberta concreta;
- identidade, escopo, estado e origem estiverem claros;
- fatos, hipóteses, desconhecidos e limitações estiverem separados;
- evidências publicadas possuírem origem, status, acesso e limites;
- artefatos não localizados continuarem indisponíveis;
- aplicação estiver separada de eficácia;
- timeline não contiver marcos inferidos;
- dados sensíveis e paths locais estiverem ausentes;
- metadata e JSON-LD não ampliarem claims;
- verificadores passarem;
- responsividade, acessibilidade e First Load JS forem validados;
- o relatório final estiver completo;
- nenhuma atividade da Sprint 6 tiver sido iniciada.

## 26. Entrega final prevista

Ao concluir a futura implementação, a resposta deverá apresentar os 26 itens definidos na especificação:

1. documento;
2. branch;
3. commits;
4. leitura das Sprints 0–4;
5. casos localizados;
6. casos publicados;
7. evidências localizadas;
8. evidências publicadas;
9. entradas localizadas;
10. entradas publicadas;
11. arquitetura de `/cases`;
12. arquitetura de `/lablog`;
13. estado do HORA.city;
14. conteúdo preservado;
15. conteúdo omitido;
16. claims;
17. ficheiros;
18. lint;
19. TypeScript;
20. build;
21. verificadores;
22. visual;
23. First Load JS;
24. limitações;
25. decisões pendentes;
26. confirmação de que a Sprint 6 não começou.

Status futuro, somente após implementação e validação:

`Sprint 5 concluída. Aguardando aprovação humana antes da Sprint 6.`

Até aprovação, o estado é:

`Plano da Sprint 5 concluído. Implementação não iniciada.`
