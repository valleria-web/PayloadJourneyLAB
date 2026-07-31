# Sprint 2 — LAB

## Estado

Sprint 2 implementada em 22 de julho de 2026. A rota `/lab` foi consolidada como página institucional canônica do Payload Journey LAB. A implementação ficou restrita à rota, seu conteúdo, tipos, metadata, dados estruturados, verificadores e evidências de validação.

Nenhuma atividade da Sprint 3 foi iniciada.

## Baseline

| Campo | Valor |
|---|---|
| Data | 2026-07-22 |
| Timezone | Europe/Berlin |
| Branch | `refactor/homepage-v0.2.0` |
| Commit inicial | `fce173295dd6e6c5023c351008201cfa45b16c5e` |
| Commit final | Não criado; o `HEAD` permanece `fce173295dd6e6c5023c351008201cfa45b16c5e` |
| Commit baseline | `sprint1 com decisao humana` |
| Worktree inicial | Apenas `docs/sprints para v3/plano-sprint2.md` não rastreado; documento autorizado e atribuído a esta sprint |
| Node.js | `v22.19.0` |
| npm | `11.6.3` |
| Next.js no build | `14.2.35` |
| First Load JS inicial de `/lab` | 94,3 kB |

Os seis gates existentes passaram antes da implementação: lint, TypeScript, build, foundation, AI-readiness e homepage. O build baseline produziu 17 páginas estáticas e os dois warnings de cache já conhecidos.

## Gate documental

Documentos lidos e aplicados:

- `Sprint 0 - Contrato Editorial e Mapa de Preservacao e Migracao.md`;
- `decisoes humanas.md`;
- `Sprint 1 - Homepage.md`;
- `sprint 2.md`;
- `plano-sprint2.md`;
- auditoria narrativa aplicável a `/lab`.

O gate foi considerado apto porque:

- Sprint 0 estava encerrada;
- as dez decisões humanas estavam congeladas;
- Sprint 1 estava concluída e commitada;
- `/lab` estava mapeada;
- não existia alteração não atribuída da tese, do público ou dos claims;
- as decisões sobre piloto, Trace Engineer, transferibilidade e mission-critical estavam resolvidas para esta sprint.

## Fonte das decisões

### IDs principais do mapa

| ID | Tratamento na Sprint 2 |
|---|---|
| `V3-MAP-LAB-001` | Abertura institucional reescrita com definição, missão e hipótese. |
| `V3-MAP-LAB-002` | Narrativa da fundadora preservada e condensada; relato localizado e autoria humana explícita. |
| `V3-MAP-LAB-003` | Estado atual separado do que está sendo construído; Trace Engineering deixou de ser “prática profissional”. |
| `V3-MAP-LAB-004` | Direção humana e assistência por IA preservadas como seção central. |
| `V3-MAP-LAB-005` | Benefícios pedagógicos reclassificados como hipótese ainda em avaliação. |
| `V3-MAP-LAB-006` | Horizonte, seis compromissos e teste preservados com status e critérios aprovados. |
| `V3-MAP-LAB-007` | Visão futura separada da competência atual; mission-critical marcado como futuro. |
| `V3-MAP-LAB-008` | Compromisso público preservado e qualificado como direção pedagógica. |
| `V3-MAP-INV-003–004` | Trace Engineer e Software System Investigation mantidos no estatuto autoral correto. |
| `V3-MAP-GLOBAL-007` | Guardrails migrados de frases antigas para invariantes da Sprint 2. |

### Claims aplicáveis

Foram revisados `CL-001`, `CL-004–012`, `CL-016`, `CL-017` e `CL-019`, com atenção especial a formação, autonomia, produtividade, reprodução externa, piloto, Trace Engineer e sistemas críticos.

## Arquitetura anterior

### Estrutura

1. `PageIntro` genérico com H1 “Formação, pesquisa e investigação aplicada”.
2. Apresentação do LAB como ensino.
3. Origem, missão, princípio, visão e valores.
4. Biografia longa da fundadora.
5. LAB em construção e três dimensões.
6. IA e direção humana.
7. Formação inicial dentro da seção do piloto.
8. Horizonte de seis meses, compromissos e teste.
9. Visão de longo prazo.
10. Compromisso público.
11. Continuidade com três destinos.

### CTAs anteriores

- retorno genérico à homepage no primeiro viewport;
- continuidade para `/usmt`, `/method` e `/cases`;
- nenhuma jornada institucional explícita para Payload Journey, investigação e aprendizagem.

### Metadata anterior

- title/H1: `Formação, pesquisa e investigação aplicada`;
- descrição: escopo institucional expandido com Software System Investigation e Trace Engineering;
- canonical `/lab`;
- JSON-LD com `WebSite`, `WebPage` e `Person`.

### Riscos identificados

- definição institucional aparecia depois da introdução;
- origem, missão e hipótese não formavam um percurso claro;
- biografia apresentava autonomia rápida e “Trace Engineers: profissionais”;
- formação tradicional era descrita como insuficiente sem evidência comparativa;
- IA era associada a produtividade sem métrica;
- método reproduzível e capacidade formativa podiam parecer estados presentes;
- uma aplicação externa era tratada como capacidade transferível;
- visão futura podia sugerir competência atual em sistemas críticos;
- página longa, com sobreposição entre cards e prosa;
- verificadores protegiam vários parágrafos antigos palavra por palavra.

## Arquitetura implementada

1. Hero institucional.
2. Missão e hipótese.
3. Origem localizada.
4. Do problema aos métodos.
5. Direção humana e assistência por IA.
6. Fundadora e autoria.
7. Estado atual confirmado.
8. LAB em construção.
9. Horizonte, seis compromissos e teste do piloto.
10. Trace Engineer.
11. Visão de longo prazo.
12. Sistemas distribuídos e mission-critical como direção futura.
13. Compromisso público.
14. Continuidade com cinco destinos.

As etapas foram agrupadas em oito componentes server-first, sem criar quinze componentes e sem introduzir nova boundary cliente.

## Headings, CTAs e âncoras

### Hero

- eyebrow: `PAYLOAD JOURNEY LAB`;
- H1: `Um laboratório para investigar como sistemas realmente funcionam`;
- CTA primário: `Conhecer os métodos` → `/method`;
- CTA secundário: `Ver o caso HORA.city` → `/cases`;
- Udemy ausente do Hero.

### Continuidade

- `/payload-journey` — começar pelo instrumento de entrada;
- `/method` — explorar os métodos;
- `/investigation` — conhecer Software System Investigation;
- `/cases` — examinar o caso;
- `/learn` — ver a trilha de aprendizagem.

### Compatibilidade

Foram preservados:

- `id="sobre"`, destino de `/about → /lab#sobre`;
- `id="founder"`, identidade usada pelo JSON-LD;
- `id="pilot"`, âncora institucional estável;
- IDs equivalentes para missão, princípio, origem, métodos, construção, visão e compromisso.

## Inventário de artefatos

Somente elementos localizados no repositório ou destinos configurados foram apresentados como existentes.

| Elemento público | Evidência localizada | Status publicado |
|---|---|---|
| Site institucional | 11 rotas, sitemap e verificadores | Disponível |
| USMT e cinco métodos | Conteúdo estruturado e rotas `/usmt`, `/payload-journey`, `/method` | Documentado |
| Protocolo | Conteúdo e rota `/protocol` | Documentado |
| HORA.city | Conteúdo do caso e rota `/cases` | Em investigação |
| Formação beta | Rota `/learn` e destino externo configurado | Disponível |
| LabLog | Rota `/lablog` e destino de canal configurado | Disponível |

Não foram localizados como ficheiros canônicos:

- Case Brief;
- Checkpoint Plan;
- Freeze Record;
- Detection Report;
- Trace Evidence Record;
- Trace Evidence Package;
- USMT Evidence-Aligned.

Esses nomes não foram apresentados em “O que já existe”. O conjunto documental de evidências foi classificado como `Em construção`.

## Compromissos do piloto

Os seis compromissos foram preservados sem serem tratados como concluídos.

| Nº | Compromisso | Status | Evidência concreta usada |
|---:|---|---|---|
| 01 | Definir | Evidência parcial | Definições autorais públicas em `/investigation`; validação externa ausente. |
| 02 | Formalizar | Evidência parcial | Métodos e protocolo documentados; conjunto documental incompleto. |
| 03 | Aplicar | Em investigação | HORA.city em andamento; restauração validada não localizada. |
| 04 | Evidenciar | Em construção | Tipos de artefato definidos como objetivo; conjunto canônico não localizado. |
| 05 | Ensinar | Evidência parcial | Trilha, formação e LabLog existem; eficácia pedagógica não avaliada. |
| 06 | Transferir | Ainda não validado | Nenhuma aplicação externa documentada localizada. |

### Critérios preservados

- **Evidência inicial de transferibilidade:** uma pessoa externa, uma investigação documentada e registro da assistência recebida.
- **Piloto de capacidade transferível:** pelo menos duas pessoas externas, em duas investigações distintas, com evidências revisáveis e conclusões tecnicamente justificadas.

O teste recebe status visível `Ainda não validado`.

## Claims reformulados

| Claim anterior | Classificação anterior | Formulação ou tratamento final | Classificação final | Justificativa |
|---|---|---|---|---|
| “Trace Engineers: profissionais...” | Ambição com aparência de profissão atual | Função e perfil investigativo em desenvolvimento; ressalvas explícitas | Definição autoral em construção | Não existe profissão, cargo ou certificação reconhecida. |
| “conquistar autonomia mais rapidamente” | Benefício pedagógico forte | Pode contribuir para autonomia progressiva; benefício em investigação | Hipótese investigativa | Não há avaliação educacional concluída. |
| Formação tradicional “já não é suficiente” | Generalização educacional | O LAB investiga uma capacidade complementar | Hipótese pedagógica | Nenhum estudo comparativo foi localizado. |
| “mais preparados estarão” | Resultado sugerido | Começar cedo pode contribuir; efeito ainda investigado | Hipótese investigativa | Evita promessa de preparação ou onboarding. |
| IA torna o processo “mais produtivo” | Observação sem métrica | IA apoia exploração, confronto de hipóteses e documentação | Descrição institucional | Produtividade não foi medida. |
| “método reproduzível” e capacidade de formar | Ambição apresentada dentro do piloto | Objetivos avaliáveis, com evidência parcial ou não validada | Construção/piloto | Não existe reprodução externa documentada. |
| Uma pessoa externa produz capacidade transferível | Critério excessivo | Uma pessoa gera somente evidência inicial; 2×2 é requisito do piloto | Critério futuro | Aplica a decisão humana congelada. |
| “Formar Trace Engineers” | Ambição com aparência de resultado | Desenvolver capacidades do perfil Trace Engineer | Visão futura | Estatuto profissional não demonstrado. |
| Sistemas distribuídos e mission-critical | Ambição com risco de competência atual | Status `Direção futura de pesquisa e formação` | Direção futura | Nenhuma aplicação validada localizada. |
| Recuperar autoridade | Possível promessa | Compromisso e direção pedagógica, não garantia individual | Compromisso público | Mantém o princípio sem prometer resultado. |

## Preservação

### Preservado integralmente ou semanticamente

- definição autoral do LAB;
- tese sobre aceleração de código e gargalo de compreensão;
- público prioritário;
- origem na experiência real;
- relação entre IA e autoridade humana;
- nome e autoria da fundadora;
- autoria da USMT;
- relação com HORA.city;
- cinco métodos e protocolo;
- horizonte inicial de seis meses;
- seis compromissos;
- verdadeiro teste do piloto;
- visão futura;
- compromisso público e frase final.

### Preservado com microajuste

- “runtime” permanece na tese institucional, mas a descrição operacional usa também “execução observada” para evitar confusão probatória;
- origem deixou de dramatizar toda a codebase como caixa-preta;
- formação passou a ser hipótese complementar;
- visão futura ganhou status explícito;
- biografia foi reduzida sem remover autoria ou responsabilidade.

### Movido

- definição do LAB foi levada ao Hero;
- missão e hipótese foram colocadas antes da origem detalhada;
- IA passou a anteceder a fundadora;
- estado atual foi separado do LAB em construção;
- Trace Engineer ganhou seção própria depois do piloto;
- sistemas críticos foram isolados numa subseção futura;
- aprendizagem foi levada à continuidade, não ao centro do piloto.

### Condensado ou removido por redundância

- lista antiga de valores foi distribuída entre missão, métodos, piloto e compromisso;
- explicações profundas dos métodos foram substituídas por perguntas e CTA para `/method`;
- perspectivas de leitura, arquitetura, observabilidade e tracing foram condensadas na proposta institucional;
- repetições sobre formação e autonomia foram fundidas na hipótese;
- conteúdo sem artefato verificável foi removido do inventário presente e mantido como objetivo de construção.

Nenhum conteúdo canônico foi removido sem destino ou tratamento equivalente.

## Conteúdo estruturado e tipagem

A tipagem foi mantida simples:

- um único union type `LabStatus`;
- um tipo reutilizável `LabStatusItem`;
- estruturas explícitas para as seções de `LabPresentation`;
- nenhum sistema abstrato de taxonomia, registro ou resolução de claims;
- nenhum estado derivado complexo em componentes.

Os status permitidos são:

`Disponível`, `Documentado`, `Em investigação`, `Em construção`, `Evidência parcial`, `Ainda não validado` e `Direção futura`.

## Metadata e JSON-LD

- title/H1: `Um laboratório para investigar como sistemas realmente funcionam`;
- description: `Conheça a missão, a origem e a construção do Payload Journey LAB, um laboratório de formação, pesquisa metodológica e investigação aplicada em sistemas de software.`;
- canonical: `/lab`;
- Open Graph e Twitter derivados da mesma metadata;
- JSON-LD preserva `WebSite`, `WebPage` e `Person`;
- fundadora permanece em `https://www.payloadjourneylab.com/lab#founder`;
- nenhuma entidade `Organization` foi criada;
- LinkedIn não confirmado permanece `null` na fonte e não é renderizado.

## Ficheiros alterados

| Caminho | Alteração | Risco | Validação |
|---|---|---|---|
| `app/lab/page.tsx` | Composição institucional específica, server-first | Alto | todos os gates e browser |
| `components/sections/LabOverviewSection.tsx` | Hero, missão/origem, métodos, IA e fundadora | Alto editorial | lint, TypeScript, verify:lab e visual |
| `components/sections/LabConstructionSection.tsx` | Estado, construção, piloto, Trace Engineer, visão e compromisso | Alto editorial | status protegidos e visual |
| `content/payload-journey-lab.ts` | Fonte estruturada integral da nova narrativa | Alto editorial | verificadores e HTML |
| `content/routes.ts` | Título e metadata de `/lab` | Médio SEO | AI-readiness e JSON-LD |
| `types/content.ts` | `LabStatus`, `LabStatusItem` e `LabPresentation` simples | Médio | TypeScript |
| `package.json` | Inclusão de `verify:lab` | Baixo | execução aprovada |
| `scripts/verify-lab.mjs` | Guardrail específico da Sprint 2 | Médio | execução final aprovada |
| `scripts/verify-homepage.mjs` | Invariantes novas e ordem institucional | Médio | corpus completo passou |
| `scripts/verify-ai-readiness.mjs` | Metadata e proveniência de `/lab` | Médio | execução passou |
| `scripts/verify-design-foundation.mjs` | Contrato server-first específico de `/lab` | Baixo | foundation passou |
| `scripts/capture-home-responsive.mjs` | Captura genérica por rota e amostras opcionais | Baixo | Edge DevTools |
| `docs/sprints para v3/plano-sprint2.md` | Plano aprovado | Documental | revisão humana |
| `docs/sprints para v3/sprint2-before-lab-*.png` | Baseline visual em cinco larguras | Evidência | dimensões e inspeção |
| `docs/sprints para v3/sprint2-after-lab-*.png` | Evidência visual final em cinco larguras | Evidência | dimensões e inspeção |
| Este documento | Relatório final | Documental | auditoria de escopo |

## Validação técnica final

Executada integralmente depois da última alteração de implementação e guardrail:

| Ordem | Comando | Resultado |
|---:|---|---|
| 1 | `npm.cmd run lint` | Passou; zero warnings e errors do ESLint |
| 2 | `npx.cmd tsc --noEmit` | Passou; zero errors |
| 3 | `npm.cmd run build` | Passou; 17 páginas estáticas |
| 4 | `npm.cmd run verify:foundation` | Passou; zero novas Client Components e contrato visual preservado |
| 5 | `npm.cmd run verify:ai-readiness` | Passou; 11 rotas canônicas e JSON-LD coerente |
| 6 | `npm.cmd run verify:homepage` | Passou; corpus, links, decisões e rotas preservados |
| 7 | `npm.cmd run verify:lab` | Passou; todos os invariantes da Sprint 2 protegidos |

### Resultado do build

- `/lab`: 1,33 kB de route size;
- First Load JS: 94,3 kB;
- First Load JS compartilhado: 87,2 kB;
- variação frente ao baseline: 0 kB reportável;
- novas dependências: nenhuma;
- novas Client Components: nenhuma.

### Falhas intermediárias e correções

1. `verify:homepage` esperava capitalização antiga de “Human direction”; o guardrail foi alinhado ao novo eyebrow.
2. `verify:foundation` exigia `SitePage` em todas as rotas. O contrato foi restringido: nove rotas continuam usando `SitePage`; `/lab` deve preservar Header, Footer, JSON-LD e continuidade numa composição institucional server-first.
3. `verify:homepage` detectou a remoção do campo-fonte do LinkedIn não confirmado. `professionalLink: siteLinks.linkedin` foi restaurado, permanece `null` e não é renderizado.

Todas as correções ficaram dentro do escopo.

### Warnings preexistentes

O build continua emitindo duas ocorrências:

`[webpack.cache.PackFileCacheStrategy] Caching failed for pack: Error: Unable to snapshot resolve dependencies`

Os warnings já existiam no baseline e não foram corrigidos nesta sprint.

Também permanece:

- `hostingRedirect: requires-public-validation-after-deploy`;
- política local do PowerShell que exige `npx.cmd`, não `npx.ps1`.

## Classificação das evidências

| Classe | Evidência usada | Limite |
|---|---|---|
| Fonte | Conteúdo, tipos, componentes, diff e verificadores | Não prova renderização nem execução. |
| Conteúdo renderizado | HTML local com headings, status, links, metadata e JSON-LD | Não prova interação ou produção. |
| Build | Compilação e prerenderização de 17 páginas | Não é evidência de comportamento runtime. |
| Execução observada | Next dev e Edge com DOM, viewport e screenshots | Não prova ambiente público ou comportamento real de usuários. |
| Produção | Não executada | Requer deploy posterior. |

Build e renderização estática não foram tratados como evidência runtime. Quando `runtime` aparece no conteúdo, é conceito investigativo do LAB, não classificação dos gates.

## Validação visual e responsiva

### Matriz final

| Largura | `innerWidth` | `clientWidth` | `scrollWidth` | Overflow |
|---:|---:|---:|---:|---:|
| 320 | 320 | 320 | 320 | 0 px |
| 375 | 375 | 375 | 375 | 0 px |
| 768 | 768 | 768 | 768 | 0 px |
| 1024 | 1024 | 1024 | 1024 | 0 px |
| 1440 | 1440 | 1440 | 1440 | 0 px |

Capturas finais:

- `sprint2-after-lab-320.png`;
- `sprint2-after-lab-375.png`;
- `sprint2-after-lab-768.png`;
- `sprint2-after-lab-1024.png`;
- `sprint2-after-lab-1440.png`.

Resultado da inspeção:

- Hero legível e CTAs alcançáveis no mobile;
- grids passam de uma para duas, três ou cinco colunas conforme espaço;
- cards não possuem alturas fixas artificiais;
- narrativa da fundadora mantém coluna de leitura confortável;
- status são visíveis por texto, não somente cor;
- piloto é localizável pela âncora e por contraste;
- teste do piloto tem destaque próprio;
- Trace Engineer inclui ressalvas junto da definição;
- visão futura e mission-critical têm status explícito;
- compromisso e continuidade permanecem claros;
- alternância de fundos reduz monotonia da página longa;
- headings não saltam níveis e links possuem nomes acessíveis;
- foco utiliza os estilos compartilhados já protegidos pela foundation.

Dez capturas temporárias usadas para revisar amostras do meio e fim da página foram removidas depois da inspeção. Elas eram reproduzíveis e não faziam parte da entrega final.

## Respostas institucionais entregues

1. O LAB é um laboratório autoral de formação, pesquisa e investigação aplicada.
2. Surgiu de uma perda localizada de compreensão num sistema real.
3. Investiga o gargalo entre aceleração do código e capacidade de explicação.
4. A hipótese pedagógica e metodológica está explicitamente condicionada.
5. O público prioritário é estudantes e developers diante de codebases complexas ou pouco conhecidas.
6. IA presta assistência; direção, critérios e conclusões permanecem humanas.
7. Estado atual lista somente site, métodos, protocolo, HORA.city, formação e LabLog localizados.
8. Construção futura separa evidência parcial, investigação, construção e ausência de validação.
9. Piloto é horizonte de seis meses, não conclusão.
10. Avaliação usa critérios 1×1 e 2×2.
11. Trace Engineer é função e perfil em desenvolvimento.
12. Sistemas distribuídos e críticos são somente direção futura.
13. Compromisso público exige rigor e distinção entre hipótese e evidência.
14. Continuidade conduz a cinco próximos passos distintos.

## Limitações e decisões futuras

- não houve verificação externa do curso, canal ou HORA.city; foram usados somente repositório e destinos configurados;
- não existe pacote canônico de evidências localizado para o piloto;
- nenhuma aplicação externa documentada foi localizada;
- eficácia pedagógica, produtividade e autonomia não foram avaliadas;
- prazo de seis meses continua sem data final inventada e exige revisão futura;
- URL canônica do YouTube e canal de colaboração continuam reservados para Sprint 6;
- redirect do hosting continua dependente de validação pública após deploy;
- nenhuma nova rota de método foi criada;
- não houve deploy nem commit nesta sprint.

## Auditoria de escopo

- alteração editorial: somente `/lab`;
- conteúdo compartilhado alterado: apenas `siteContent.lab` dentro da fonte existente;
- metadata alterada: somente `thematicRoutes.lab`;
- componentes alterados: somente seções de `/lab`;
- microajustes técnicos: verificadores e helper de captura;
- homepage permanece aprovada pela Sprint 1;
- todas as outras rotas passaram no verificador geral;
- nenhuma dependência foi adicionada;
- nenhuma atividade da Sprint 3 foi iniciada.

## Conclusão

Sprint 2 concluída. Aguardando aprovação humana antes da Sprint 3.
