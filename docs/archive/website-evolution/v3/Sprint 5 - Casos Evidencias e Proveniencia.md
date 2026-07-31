# Sprint 5 — Casos, Evidências e Proveniência

## Estado

Sprint 5 implementada e validada em 23 de julho de 2026, timezone Europe/Berlin. Nenhuma atividade da Sprint 6 foi iniciada.

## Gate documental

Foram lidos integralmente:

- `Sprint 0 - Contrato Editorial e Mapa de Preservacao e Migracao.md`;
- `decisoes humanas.md`;
- `Sprint 1 - Homepage.md`;
- `Sprint 2 - LAB.md`;
- `Sprint 3 - Formacao e Progressao Pedagogica.md`;
- `Sprint 4 - Metodo e Pratica Investigativa.md`;
- `sprint 5.md`;
- `plano-sprint5.md`;
- a fonte do caso HORA.city;
- o documento de apresentação do repositório.

IDs protegidos:

- `V3-MAP-CASE-001–003`;
- `V3-MAP-LABLOG-001`;
- `V3-MAP-HOME-004`;
- `V3-MAP-HOME-007`;
- `V3-MAP-PROTO-002`;
- `V3-MAP-GLOBAL-007`;
- `CL-002`, `CL-003`, `CL-014`, `CL-015`, `CL-018`;
- `HUM-005` e `HUM-006`.

## Baseline

| Item | Estado |
|---|---|
| Branch inicial/final | `refactor/homepage-v0.2.0` |
| Commit inicial/final | `fce173295dd6e6c5023c351008201cfa45b16c5e` |
| Node | 22.19.0 |
| npm | 11.6.3 |
| Next.js | 14.2.35 |
| Rotas indexáveis | 11 |
| First Load JS de `/cases` | 94,3 kB |
| First Load JS de `/lablog` | 94,3 kB |
| JS compartilhado | 87,2 kB |

O worktree já continha alterações atribuídas às Sprints 2–4. Elas foram preservadas.

Antes das edições, lint, TypeScript, build, foundation, AI-readiness, homepage, LAB, learn e method-practice passaram. O build pré-renderizou 17 páginas.

Foram capturadas dez imagens de baseline:

- `sprint5-before-cases-{320,375,768,1024,1440}.png`;
- `sprint5-before-lablog-{320,375,768,1024,1440}.png`.

Todas apresentaram overflow horizontal igual a zero.

## Inventário real

### Casos

| Localizados | Publicados |
|---:|---:|
| 1 | 1 |

Único caso: HORA.city, ID `RPJ-HORA-001`.

Não foi localizado segundo caso com identidade, escopo, estado e fontes suficientes. Nenhum placeholder foi criado.

### Evidências

| Categoria | Localizadas | Publicadas |
|---|---:|---:|
| fontes documentais internas | 2 | 2 |
| artefatos técnicos públicos do caso | 0 | 0 |
| evidência externa | 0 | 0 |

Fontes localizadas:

| ID público | Tipo | Origem apresentada | Status | Acesso | Limite |
|---|---|---|---|---|---|
| `EVD-HORA-DOC-001` | documento | fonte editorial interna do site | localizada | resumo público; sem download | produzida pela própria investigadora |
| `EVD-HORA-DOC-002` | documento | apresentação documental do projeto | referenciada | localização pública não confirmada | repete fatos internos |

Não localizados:

- logs do HORA.city;
- traces;
- payload observado publicável;
- request ou response;
- checkpoints executados com registro;
- OPP produzido;
- Checkpoint Plan;
- Freeze Record;
- Detection Report;
- Trace Evidence Record ou Package;
- USMT Evidence-Aligned;
- teste do comportamento;
- restauração implementada;
- restauração validada;
- execução observada publicável do HORA.city;
- evidência de produção;
- evidência externa.

### LabLog

| Localizadas | Publicadas |
|---:|---:|
| 0 | 0 |

Foram localizados a rota, nove temas e um destino externo configurado. Nenhum desses elementos foi convertido em entrada.

Documentos de sprint não foram transformados automaticamente em LabLog. Não existe timeline simulada.

## Arquitetura anterior

### `/cases`

A rota usava `SitePage` e `CaseStudySection`, apresentando sete cards do HORA.city e fatos técnicos. Não possuía guia, registro de casos, taxonomia de evidência, separação completa de fatos/hipóteses/desconhecidos, conclusão autorizada ou timeline sustentada.

### `/lablog`

A rota usava `SitePage` e `LabLogSection`, mostrando descrição, nove temas e CTA externo. Não possuía entradas, datas, proveniência ou relação estruturada com casos.

## Arquitetura final de `/cases`

1. Hero `CASOS E EVIDÊNCIAS`;
2. aplicação separada de eficácia;
3. guia “O que está confirmado e o que ainda não sabemos”;
4. registro público com um caso;
5. HORA.city como caso interno;
6. sistema, flow, operação, pergunta, anomalia, esperado e observado;
7. estado e etapa do protocolo;
8. fatos, hipóteses e desconhecidos;
9. métodos, componentes, restauração e validação;
10. fontes documentais;
11. ausência explícita de artefatos técnicos;
12. cronologia pública não localizada;
13. conclusões autorizadas e não autorizadas;
14. limitações e próximos passos;
15. continuidade.

## Arquitetura final de `/lablog`

1. Hero `LABLOG`;
2. definição de entrada datada;
3. guia de leitura;
4. inventário real com `0 entradas publicadas`;
5. temas preservados;
6. canal configurado com canonicidade não resolvida;
7. relação entre caso e LabLog;
8. proveniência;
9. responsabilidade humana;
10. continuidade.

## Estado do HORA.city

| Campo | Estado publicado |
|---|---|
| Identidade | caso interno `RPJ-HORA-001` |
| Sistema | HORA.city |
| Flow | comportamento temporal associado a `HeartCreated` |
| Operação | nome técnico não confirmado |
| Anomalia | `createdAt` incorreto, conforme registro interno |
| Estado canônico | `Em mapeamento` |
| Etapa | Mapear |
| Método | Reverse Payload Journey |
| Missão | Track to Origin |
| Componentes | não confirmados publicamente |
| Abertura | não confirmada |
| Atualização | não confirmada |
| Restauração | não localizada |
| Validação | ainda não validada |

`Em mapeamento` descreve o objetivo documental de reconstruir caminho e autoridade. Não declara checkpoints executados, divergência causal localizada ou restauração.

## Claims

| Claim anterior ou risco | Formulação final | Categoria |
|---|---|---|
| plural de casos podia sugerir escala | um caso localizado, sem simular escala | inventário real |
| HORA.city como demonstração ampla | aplicação interna naquele contexto | claim autorizado |
| fontes internas chamadas genericamente de evidências | duas fontes documentais internas, zero artefatos técnicos | proveniência |
| escala de 6k para 40k como medição independente | removida da rota integral da Sprint 5 | omitido por força insuficiente |
| perda de observabilidade como causalidade | hipótese/observação interna limitada | hipótese |
| checkpoints executados | não publicados sem registro | não localizado |
| LabLog “registra” sem entradas | registro condicionado a entrada com data e fonte | estado real |
| canal externo como arquivo | destino configurado, canonicidade e correspondência não resolvidas | pendência |
| caso prova eficácia | explicitamente não autorizado | claim proibido |
| restauração concluída | restauração não localizada; validação ausente | estado real |

## Conteúdo

### Preservado

- identidade HORA.city;
- ID do caso;
- `createdAt`;
- `HeartCreated`;
- Reverse Payload Journey;
- Track to Origin;
- investigação inconclusiva;
- nove temas do LabLog;
- destino externo configurado;
- divergência dos canais YouTube;
- links para métodos, protocolo, prática, aprendizagem e LAB.

### Condensado ou movido

- a narrativa de sete cards foi reorganizada por força de evidência;
- fatos técnicos foram distribuídos entre identidade, fatos e estado;
- desconhecidos históricos passaram a bloco público explícito;
- temas do LabLog foram movidos para o inventário real.

### Omitido ou não localizado

- escala da codebase na nova rota integral;
- nome técnico do flow;
- estrutura interna do payload;
- componentes;
- datas;
- marcos de timeline;
- logs e traces;
- checkpoints;
- origem causal;
- restauração;
- validação;
- entradas LabLog;
- evidência externa.

### Não publicável

Nenhum dado sensível foi localizado nos itens publicados. A política impede credenciais, tokens, IPs, device IDs, dados pessoais, URLs privadas, dados de usuários, logs identificáveis, paths locais e conversas privadas com IA.

## Tipagem

Foram adicionados contratos proporcionais:

- `PublicCaseStatus`;
- `PublicEvidenceStatus`;
- `PublicEvidence`;
- `PublicCaseRecord`;
- `LabLogEntry`.

Não foram criados registry genérico, banco, CMS, autenticação ou plataforma de gestão.

## Metadata e JSON-LD

`/cases` e `/lablog` possuem title/H1, description, canonical, Open Graph e Twitter alinhados.

O JSON-LD permanece como `WebPage` dentro do grafo canônico. `CollectionPage`, `ItemList`, `BlogPosting` e `Article` não foram adicionados:

- existe somente um caso;
- não existem entradas LabLog;
- tipos mais específicos não acrescentariam informação sustentada.

## Ficheiros alterados

| Caminho | Motivo | Risco | Validação |
|---|---|---|---|
| `app/cases/page.tsx` | nova composição | regressão de rota | homepage e cases-evidence |
| `app/lablog/page.tsx` | composição sem entradas inventadas | promessa vazia | cases-evidence |
| `components/sections/CasesPageSections.tsx` | registro e proveniência | densidade | visual e headings |
| `components/sections/LabLogPageSections.tsx` | inventário vazio honesto | simular histórico | verificador |
| `content/cases.ts` | fonte estruturada | claims ampliados | inventário e privacidade |
| `content/routes.ts` | H1 e metadata | SEO | AI-readiness |
| `types/content.ts` | contratos proporcionais | complexidade | TypeScript |
| `components/pages/PageIntro.tsx` | múltiplos parágrafos | regressão global | homepage/foundation |
| `components/pages/SitePage.tsx` | JSON-LD para descrição múltipla | metadata | AI-readiness |
| `scripts/verify-cases-evidence.mjs` | contrato da sprint | falso positivo | execução local |
| `scripts/verify-homepage.mjs` | expectativas atualizadas | regressão | execução local |
| `scripts/verify-ai-readiness.mjs` | proveniência contextual | SEO | execução local |
| `scripts/verify-design-foundation.mjs` | proteger novos Server Components | fronteira client | foundation |
| `scripts/capture-home-responsive.mjs` | validar foco por Tab | captura instável | 10 combinações |
| `package.json` | comando específico | script inválido | execução local |

Foram criadas 20 capturas before/after e este relatório.

`content/hora-city.ts`, os componentes de síntese da homepage e as páginas das Sprints 1–4 não foram reescritos nesta sprint.

## Validação técnica final

| Gate | Resultado | Duração aproximada |
|---|---|---:|
| lint | passou, zero warnings/erros | 7,0 s |
| TypeScript | passou | 4,2 s |
| build | passou, 17 páginas estáticas | 42,5 s |
| foundation | passou | 1,4 s |
| AI-readiness | passou | 30,0 s |
| homepage | passou | 30,0 s |
| LAB | passou | 24,2 s |
| learn | passou | 25,1 s |
| method-practice | passou | 24,5 s |
| cases-evidence | passou | 23,2 s |

O verificador específico confirmou:

- 2 rotas;
- 1 caso publicado;
- 2 fontes documentais localizadas;
- 0 artefatos técnicos públicos;
- 0 entradas LabLog;
- IDs únicos;
- headings sequenciais;
- 0 paths locais;
- 0 padrões sensíveis;
- 0 novas rotas;
- 0 Client Components;
- aplicação separada de eficácia;
- nenhuma evidência externa declarada.

`git diff --check` passou.

### Warnings preexistentes

- duas mensagens Webpack `PackFileCacheStrategy: Unable to snapshot resolve dependencies`;
- avisos Git de futura conversão LF para CRLF;
- redirect de hosting ainda requer validação pública após deploy.

Foram documentados e não corrigidos.

## Validação visual, responsiva e de teclado

Capturas finais:

- `sprint5-after-cases-{320,375,768,1024,1440}.png`;
- `sprint5-after-lablog-{320,375,768,1024,1440}.png`.

Resultados:

- 10/10 combinações sem overflow;
- primeiro viewport comunica função e limites;
- cards adaptam para uma coluna no mobile;
- datas ausentes aparecem como `Não confirmado`;
- estados são textuais;
- nenhuma tabela larga;
- CTAs são links nativos;
- um evento Tab alcançou um link em todas as 10 combinações;
- foco visual permanece protegido por `focus-visible`;
- contraste aprovado pelo foundation;
- nenhum path local visível.

## Performance

Não houve impacto mensurável:

- `/cases`: 1,33 kB e First Load JS 94,3 kB;
- `/lablog`: 1,33 kB e First Load JS 94,3 kB;
- compartilhado: 87,2 kB.

Nenhuma dependência ou Client Component foi adicionado.

## Evidências separadas

### Fonte

Conteúdo, tipos, componentes, documentos e verificadores localizados no repositório. As duas fontes do HORA.city são internas e não independentes.

### Conteúdo renderizado

HTML local confirmou textos, status, IDs, links, metadata e JSON-LD. Isso não prova o comportamento do HORA.city.

### Build

Compilação e prerenderização estática de 17 páginas. Não é evidência de comportamento runtime.

### Execução local observada

Next dev e Edge headless serviram as páginas; viewport, overflow e foco por Tab foram observados. Essa é execução do site local, não execução observada do HORA.city.

### Produção

Não executada. Não houve deploy.

### Evidência externa

Nenhuma localizada. O caso foi conduzido internamente pela criadora do método.

Quando `runtime` aparece na metodologia, refere-se à execução do sistema investigado. Build e renderização estática não foram classificados como runtime.

## Limitações

- caso único e interno;
- fontes produzidas pela própria investigadora;
- assistência de IA;
- sem replicação externa;
- sem artefatos técnicos públicos;
- sem datas públicas da investigação;
- sem timeline;
- sem restauração;
- sem validação;
- sem entradas LabLog;
- sem validação em produção;
- eficácia e transferibilidade não demonstradas.

## Decisões pendentes

- `HUM-005`: canal canônico do YouTube permanece para a Sprint 6;
- `HUM-006`: novos artefatos públicos do HORA.city dependem de localização e aprovação;
- datas e marcos dependem de fonte;
- restauração e validação dependem de evidência;
- qualquer segundo caso depende de investigação documentada;
- produção depende de deploy futuro;
- avanço para a Sprint 6 depende de aprovação humana.

## Conclusão

`/cases` funciona como registro público proporcional ao inventário real. `/lablog` funciona como registro condicionado e declara honestamente que não existem entradas estruturadas publicáveis. HORA.city permanece caso interno em mapeamento, não prova de eficácia ou transferibilidade.

Nenhuma atividade da Sprint 6 foi iniciada.

