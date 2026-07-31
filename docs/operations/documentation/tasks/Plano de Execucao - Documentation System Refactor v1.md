---
document_id: PJL-OPS-DOC-PLAN-001
title: Plano de Execução — Documentation System Refactor v1
version: 1.0
status: working
authority: operations
owner: Payload Journey LAB
created_at: 2026-07-31
last_reviewed: 2026-07-31
supersedes: null
superseded_by: null
---

# Plano de Execução — Documentation System Refactor v1

## 1. Objetivo

Executar a migração controlada definida em `Codex Task — Payload Journey LAB Documentation System Refactor v1`, separando autoridade atual, métodos, casos, pesquisa, operações, produto e memória histórica sem perder arquivos, evidências, vínculos, proveniência ou comportamento público.

Invariantes obrigatórios:

```text
CURRENT AUTHORITY != HISTORICAL MEMORY
archive/ cannot override governance/
deleted documents = 0
HORA.city lifecycle = Active Investigation
```

Este plano não autoriza a criação de políticas ou afirmações metodológicas canônicas que ainda dependam de decisão humana.

## 2. Baseline observado em 31 de julho de 2026

### 2.1 Inventário

O número aproximado de 115 documentos usado pela tarefa não deve ser adotado como contador final sem reconciliação. O estado atual observado é:

| Medida | Quantidade |
|---|---:|
| Documentos textuais (`.md`, `.mdx`, `.txt`) | 118 |
| Markdown (`.md`) | 115 |
| Evidências textuais (`.txt`) | 3 |
| Artefatos totais dentro de `docs/` | 359 |
| Imagens históricas (`.png`) | 235 |
| Arquivos estruturados (`.json`) | 5 |
| Inventário tabular (`.csv`) | 1 |
| Links locais Markdown verificados | 157 |
| Links locais quebrados no baseline | 0 |

Distribuição de todos os 359 artefatos:

| Origem atual | Artefatos |
|---|---:|
| raiz de `docs/` | 1 |
| `ai-readiness/` | 4 |
| `files/` | 4 |
| `governance/` | 1 |
| `homepage-refactor/` | 79 |
| `lab-propagation/` | 26 |
| `prompts/` | 6 |
| `PropagationBaseline/` | 2 |
| `sprints/` | 4 |
| `sprints para v2/` | 14 |
| `sprints para v3/` | 218 |
| **Total** | **359** |

O gate de paridade deverá reconciliar documentos e artefatos separadamente. Imagens, JSON e CSV devem acompanhar o conjunto histórico ou operacional ao qual pertencem.

### 2.2 Estado Git a preservar

O início da execução encontra mudanças não rastreadas e, portanto, potencialmente pertencentes ao usuário:

```text
diagrama-geral.md
docs/DIAGRAMA-SISTEMA-DOCUMENTAL-LAB.md
docs/governance/semantic-identity/semantic-identity-charter-v1.0.md
docs/prompts/Codex Task Payload Journey LAB Documentation System Refactor v1.md
docs/prompts/Plano de Execucao - Documentation System Refactor v1.md
```

Antes de migrar:

1. registrar novamente `git status --short`;
2. distinguir arquivos rastreados e não rastreados no manifesto;
3. não sobrescrever nem descartar nenhum item não rastreado;
4. tratar `diagrama-geral.md`, fora de `docs/`, como alteração fora do escopo;
5. não fazer commit nem push.

### 2.3 Dependências de caminhos já identificadas

Três verificadores usam diretamente `docs/sprints para v3`:

| Dependência | Uso atual | Ação no lote de migração V3 |
|---|---|---|
| `scripts/capture-home-responsive.mjs` | destino de novas capturas | apontar para um destino operacional ou de evidência atual, sem gravar no arquivo histórico |
| `scripts/validate-navigation-responsive.mjs` | leitura/gravação de validação responsiva | separar saída operacional corrente da memória V3 arquivada |
| `scripts/verify-cycle-closure.mjs` | contrato de presença e leitura dos documentos V3 | atualizar para a nova raiz do arquivo histórico e preservar as mesmas asserções |

O scan completo deverá ser repetido imediatamente antes e depois da migração. As referências encontradas agora são baseline, não uma lista permanentemente fechada.

### 2.4 Dependências internas relevantes

- O inventário `DIAGRAMA-SISTEMA-DOCUMENTAL-LAB.md` contém links para os documentos atuais e terá todos os destinos alterados pela migração.
- O baseline de propagação possui links relativos entre Markdown, JSON, CSV, TXT e diretórios de evidência; esse conjunto deve ser movido como uma unidade.
- `homepage-refactor/` e `sprints para v3/` contêm evidências visuais ligadas ao contexto histórico. Imagens e relatórios devem permanecer juntos.
- O baseline atual tem zero links locais Markdown quebrados. Esse número é um gate de não regressão.

## 3. Estratégia de execução

A execução será feita em lotes pequenos, cada um com inventário, movimentação, reparo de referências e verificação. Nenhum diretório de origem será removido antes de o lote atingir todos os seus gates.

```text
Fase 0  Congelar e classificar
   ↓ gate: 100% dos artefatos têm destino proposto
Fase 1  Criar o esqueleto e o modelo de autoridade
   ↓ gate: índices deixam claras autoridade e lacunas
Fase 2  Migrar conjuntos de baixo risco
   ↓ gate: links e contagens reconciliados
Fase 3  Migrar propagação e AI readiness
   ↓ gate: baseline e evidências continuam íntegros
Fase 4  Migrar arquivo histórico e dependências V3
   ↓ gate: hashes, imagens e verificadores passam
Fase 5  Estabelecer casos, métodos, pesquisa e produto
   ↓ gate: nenhuma autoridade foi inventada
Fase 6  Fechar categorias antigas e validar tudo
   ↓ gate: zero perdas, zero links quebrados
Fase 7  Emitir relatório final
```

## 4. Fase 0 — inventário e classificação antes de mover

### 4.1 Congelar o baseline

Produzir arquivos temporários de controle, sem modificar o conteúdo histórico:

- lista ordenada de todos os caminhos dentro de `docs/`;
- classificação tracked/untracked;
- tamanho e SHA-256 de cada artefato;
- contagem por extensão e diretório;
- inventário de todos os links Markdown locais;
- referências a caminhos documentais em aplicação, conteúdo, scripts, configuração, READMEs e ferramentas;
- lista de arquivos que podem alimentar ou publicar URLs públicas.

### 4.2 Criar o manifesto antes da migração

Preparar `docs/operations/documentation/2026-07-31-documentation-system-refactor.md` com uma linha para cada um dos 359 artefatos:

| Campo | Regra |
|---|---|
| Old path | caminho exato no baseline |
| New path | destino proposto ou `unchanged` |
| Documentary class | `canonical`, `active`, `supporting`, `historical`, `superseded`, `deprecated` ou `unknown` |
| Domain | `governance`, `method`, `case`, `research`, `operation`, `product` ou `archive` |
| Git state | tracked ou untracked |
| Content policy | byte-identical ou link-update-required |
| Reason | justificativa curta e verificável |
| Link status | pending, updated, unchanged ou not-applicable |
| Hash before/after | prova de preservação |

### 4.3 Gate de classificação

Não iniciar movimentos até que:

- 359 de 359 artefatos tenham destino proposto;
- 118 de 118 documentos textuais tenham classificação e domínio primários;
- toda classificação `unknown` esteja destacada para decisão humana;
- documentos atuais candidatos a autoridade tenham fonte explícita;
- nenhum documento histórico tenha sido promovido por inferência.

## 5. Mapa de migração proposto

### 5.1 Mapeamentos de alta confiança

| Origem | Destino | Tratamento |
|---|---|---|
| `governance/semantic-identity/` | mesmo caminho | manter o charter como autoridade canônica |
| `ai-readiness/` | `operations/ai-readiness/` | mover como auditoria, proveniência e validação; não promover a governança |
| `lab-propagation/2026-07-27-baseline/` | `operations/propagation/baselines/2026-07-27/` | mover a árvore inteira, incluindo evidências e inventários |
| dois registros AI Welcome | `operations/propagation/implementations/ai-welcome/` | manter separados os registros de entrega e hardening |
| duas tarefas AI Welcome | `operations/propagation/tasks/ai-welcome/` | preservar especificações como tarefas |
| `PropagationBaseline/` | `operations/propagation/tasks/propagation-baseline/` | preservar tarefa e plano como documentos distintos |
| `sprints/` | `archive/website-evolution/initial-cycle/` | mover integralmente e preservar nomes |
| `sprints para v2/` | `archive/website-evolution/v2/` | mover integralmente e preservar nomes |
| `sprints para v3/` | `archive/website-evolution/v3/` | mover documentos, JSON e imagens como unidade histórica |
| `homepage-refactor/` | `archive/website-evolution/homepage-refactor/` | mover documentos e imagens como unidade histórica |
| `files/LAB Definitions.md` | `archive/old-definitions/` | tratar como definição histórica, salvo prova de autoridade corrente |
| `files/definitions part .md` | `archive/old-definitions/` | tratar como definição histórica, salvo prova de autoridade corrente |
| prompts `01`–`04` | `archive/historical-prompts/` | preservar briefs históricos |
| task deste refactor | `operations/documentation/tasks/` | manter como especificação operacional corrente |
| este plano | `operations/documentation/tasks/` | manter junto da task que ele operacionaliza |
| diagrama/inventário documental | `operations/documentation/inventory/` | atualizar caminhos e contagens após a migração |

### 5.2 Classificações que exigem decisão baseada em estado atual

| Documento | Alternativas | Critério de decisão |
|---|---|---|
| `files/files-structure.md` | `product/lablog/`, `operations/publishing/` ou `archive/completed-tasks/` | comparar requisitos com comportamento e decisões atuais; classificar como atual somente se ainda reger publicação |
| `files/plano-implementacao-lablog-youtube-documentacao.md` | `product/lablog/` ou `archive/completed-tasks/` | verificar se há ações abertas e se o plano ainda orienta operação corrente |
| documentos V3 citados por verificadores | arquivo histórico, com verificador atualizado | não manter fora do arquivo só por dependência técnica; reparar a dependência no mesmo lote |
| eventuais claims metodológicos em sprints | permanecer no arquivo ou servir apenas como referência | nunca extrair/promover como especificação sem autoridade humana |

Se a ambiguidade persistir, classificar como `unknown`, preservar no contexto histórico e registrar a pendência. Preservação tem precedência sobre movimentação agressiva.

## 6. Fase 1 — criar a arquitetura e os índices

Criar somente diretórios que recebam conteúdo ou README:

```text
docs/
├── README.md
├── governance/
├── methods/
├── cases/
├── research/
├── operations/
├── product/
└── archive/
```

Criar READMEs concisos para os sete domínios. Cada um deverá declarar:

- finalidade;
- nível de autoridade;
- o que pertence e não pertence ao domínio;
- estados de ciclo de vida aceitos;
- entradas canônicas existentes;
- lacunas conhecidas;
- relação com `archive/`.

O `docs/README.md` deve ser criado primeiro como índice provisório e fechado por último após todos os destinos existirem.

Ordem de precedência a declarar:

```text
1. governance
2. current method specifications
3. active case records
4. research outputs
5. current operational records
6. current product documentation
7. archive
```

## 7. Fase 2 — governança, documentação operacional e itens de baixo risco

1. Manter o Semantic Identity Charter no caminho atual.
2. Adicionar metadata apenas se os valores puderem ser comprovados; não alterar claims metodológicos.
3. Criar `governance/README.md` com o charter como entrada canônica.
4. Registrar como lacunas, sem inventar políticas:
   - terminologia;
   - modelo de evidência;
   - governança de casos;
   - política de publicação;
   - política de citação.
5. Criar `operations/documentation/` e mover para lá task, plano, manifesto e inventário.
6. Mover prompts históricos para o arquivo.
7. Classificar individualmente os quatro documentos de `files/` e aplicar a decisão registrada.
8. Verificar contagem, hashes e links antes de remover `files/` e `prompts/` vazios.

Gate da fase:

- charter continua único e canônico;
- nenhum placeholder afirma política inexistente;
- task, plano e inventário são encontráveis pelo índice;
- nenhuma alteração histórica silenciosa.

## 8. Fase 3 — operações, propagação e AI readiness

Criar:

```text
operations/
├── README.md
├── ai-readiness/
└── propagation/
    ├── README.md
    ├── baselines/2026-07-27/
    ├── implementations/ai-welcome/
    └── tasks/
        ├── ai-welcome/
        └── propagation-baseline/
```

Sequência:

1. mover o baseline de 2026-07-27 como árvore indivisível;
2. comparar hashes de todos os artefatos;
3. validar todos os links relativos internos do baseline;
4. mover tarefas, planos e registros para subpastas distintas;
5. mover AI readiness como artefatos de validação operacional;
6. atualizar referências externas ao conjunto;
7. registrar qualquer documento modificado por reparo de link.

Gate da fase:

- baseline completo e navegável;
- JSON, CSV, TXT e Markdown reconciliados;
- evidência de Case File 001 permanece baseline histórico;
- AI readiness não aparece como autoridade superior a governance.

## 9. Fase 4 — arquivo de evolução do website

Mover por diretório completo, nesta ordem:

1. `sprints/` → `archive/website-evolution/initial-cycle/`;
2. `sprints para v2/` → `archive/website-evolution/v2/`;
3. `homepage-refactor/` → `archive/website-evolution/homepage-refactor/`;
4. `sprints para v3/` → `archive/website-evolution/v3/`.

Para cada lote:

- capturar hashes antes;
- mover Markdown e ativos juntos;
- preservar nomes de arquivos históricos;
- reparar somente links obrigatórios;
- atualizar o manifesto;
- recalcular links locais;
- comparar hashes depois;
- registrar qualquer exceção byte a byte.

No lote V3, atualizar simultaneamente os três verificadores dependentes de caminho. As ferramentas que produzem novas capturas não devem continuar gravando dentro de um arquivo histórico. Definir um destino operacional corrente antes de mover V3.

Gate da fase:

- todos os 297 artefatos de `homepage-refactor/` e `sprints para v3/` combinados estão reconciliados;
- imagens históricas continuam junto de seus relatórios;
- `verify-cycle-closure` passa apontando para o arquivo;
- nenhuma ferramenta corrente grava acidentalmente sob `archive/`;
- README do arquivo declara conteúdo histórico e não autoritativo.

## 10. Fase 5 — métodos, caso, pesquisa e produto

### 10.1 Métodos

Criar `methods/README.md` e uma entrada para cada domínio esperado:

- Payload Journey;
- USMT;
- Reverse Payload Journey;
- Operational Payload Path;
- Track to Origin;
- Trace Engineering.

Para cada método:

1. identificar fontes correntes comprováveis;
2. procurar uma especificação autônoma e versionada;
3. se existir autoridade suficiente, referenciá-la sem reescrever claims;
4. se não existir, criar apenas README de lacuna com fontes atuais apontadas;
5. nunca promover um sprint histórico a canonical.

Resultado esperado provável: índices de método com lacunas explicitadas, até que autoridade humana aprove especificações próprias.

### 10.2 Caso ativo

Criar:

```text
cases/
├── README.md
└── RPJ-HORA-001/
    └── README.md
```

O README do caso deve preservar exatamente:

```text
Founding Reference Case 001 — HORA.city
Investigation ID: RPJ-HORA-001
Lifecycle: Active investigation
```

Criar subdiretórios `case-brief`, `evidence`, `findings`, `restoration`, `verification` e `editions` apenas quando houver conteúdo real. O README atual deve ligar para a avaliação histórica preservada no baseline e explicar que ela não é o registro vivo do caso.

Nenhum finding causal, restauração, verificação ou encerramento será inferido.

### 10.3 Pesquisa

Criar `research/README.md`. Se nenhum paper, relatório técnico ou experimento corrente puder ser classificado com segurança, documentar a ausência planejada e não criar árvores vazias.

### 10.4 Produto

Criar `product/README.md`. Criar `website/`, `course/` ou `lablog/` somente quando houver documento ativo correspondente. A memória de construção da homepage permanece em `archive/`; ela não deve ser duplicada como documentação corrente de produto.

Gate da fase:

- todos os seis métodos têm entrada ou lacuna explícita;
- nenhum método novo foi inventado;
- RPJ-HORA-001 é encontrável e continua ativo;
- pesquisa e produto descrevem honestamente o que existe hoje.

## 11. Fase 6 — referências, metadata e fechamento estrutural

### 11.1 Links e caminhos

Depois de todos os lotes:

1. atualizar links Markdown relativos;
2. atualizar referências em scripts e READMEs;
3. pesquisar os caminhos obsoletos:
   - `sprints para v3`;
   - `sprints para v2`;
   - `homepage-refactor`;
   - `PropagationBaseline`;
   - `lab-propagation`;
   - `docs/files`;
   - `docs/prompts`;
4. distinguir menções históricas em texto de referências de caminho ativas;
5. confirmar que nenhum mapeamento de URL pública depende de um caminho removido.

### 11.2 Metadata

Aplicar front matter somente a:

- documentos canônicos de governança;
- READMEs atuais dos domínios;
- READMEs atuais de método;
- README do caso ativo;
- índices operacionais correntes.

Não injetar metadata em massa nos documentos históricos. Quando datas ou autoridade não forem comprováveis, omitir ou marcar a pendência no manifesto em vez de especular.

### 11.3 Remoção de categorias antigas

Remover apenas diretórios que estejam vazios depois de:

- todos os artefatos terem novo caminho confirmado;
- todos os links terem sido reparados;
- referências de ferramentas terem sido atualizadas;
- hashes e contagens terem sido reconciliados.

Nenhum arquivo será apagado.

## 12. Verificação automatizada

### 12.1 Verificador documental recomendado

Criar `scripts/verify-documentation-system.mjs`, sem overengineering, para verificar:

- presença de `docs/README.md` e dos sete domínios;
- links Markdown locais;
- unicidade do Semantic Identity Charter;
- ausência de documentos `canonical` sob `archive/`;
- declaração não autoritativa em `archive/README.md`;
- presença de `cases/RPJ-HORA-001/README.md`;
- lifecycle `Active investigation`;
- ausência das categorias top-level obsoletas;
- ausência de referências ativas aos caminhos antigos;
- paridade com o manifesto.

Adicionar um comando de verificação ao conjunto existente somente depois que o script estiver validado.

### 12.2 Matriz final de verificações

Executar na seguinte ordem:

1. verificador documental;
2. scanner independente de links Markdown;
3. paridade de documentos textuais;
4. paridade de todos os artefatos;
5. comparação de hashes históricos;
6. busca por caminhos obsoletos;
7. TypeScript;
8. build de produção;
9. verificadores existentes, incluindo:
   - homepage;
   - LAB e definições;
   - learning/foundation;
   - AI readiness e AI Welcome;
   - método e prática;
   - casos e evidências;
   - navegação e descoberta;
   - refactor V3 e fechamento do ciclo.

Critérios mínimos:

```text
documentos perdidos = 0
artefatos perdidos = 0
links Markdown quebrados = 0
documentos apagados = 0
canonical sob archive = 0
referências ativas a diretórios removidos = 0
```

Falhas preexistentes de aplicação devem ser distinguidas de regressões introduzidas pela migração.

## 13. Rollback e contenção de risco

Como não haverá commit durante a tarefa, cada lote precisa ser reversível por seu manifesto, não por comandos destrutivos.

Se um gate falhar:

1. parar antes do lote seguinte;
2. conservar os resultados de diagnóstico;
3. reverter somente os caminhos do lote afetado usando o mapa old/new validado;
4. não tocar em alterações preexistentes ou fora do escopo;
5. repetir contagens e hashes;
6. registrar a falha e a decisão no manifesto.

Não usar operações que descartem mudanças do worktree.

## 14. Pontos de decisão humana

A execução deve pausar para autoridade humana se for necessário decidir:

- se `files-structure.md` ainda é política de publicação corrente;
- se o plano de LabLog ainda é operacional ou já é histórico;
- se algum documento contém autoridade metodológica suficiente para promoção;
- valores de metadata que não possam ser comprovados;
- qualquer nova política de terminologia, evidência, casos, publicação ou citação;
- qualquer alteração de lifecycle de Trace Engineering, Trace Engineer ou HORA.city;
- qualquer finding, restauração, verificação ou claim científico do caso.

Ambiguidade não bloqueante deve ser preservada e classificada como `unknown`; ambiguidade que altere autoridade exige decisão humana.

## 15. Relatório final

Ao concluir, produzir o relatório exigido pela task com:

1. resumo da migração;
2. árvores before/after;
3. contagem de documentos e de todos os artefatos;
4. caminho do manifesto completo;
5. governança existente e lacunas;
6. métodos com especificação e métodos ainda sem especificação;
7. confirmação do caso `RPJ-HORA-001` como Active Investigation;
8. prova de preservação de sprints, refactors e prompts;
9. integridade de links antes/depois;
10. resultados de todas as verificações;
11. achados inesperados e itens `unknown`;
12. status Git, confirmando nenhum commit, nenhum push e nenhuma mudança não relacionada.

Contagens devem separar claramente:

```text
documentos originais
artefatos originais
documentos movidos
documentos inalterados
novos READMEs/índices
artefatos históricos byte-idênticos
artefatos modificados apenas para links
documentos apagados = 0
```

## 16. Definition of Ready

A migração física estará pronta para começar quando:

- o manifesto preliminar cobrir 359 de 359 artefatos;
- os 118 documentos textuais estiverem classificados;
- itens ambíguos estiverem explicitamente marcados;
- o destino das saídas correntes dos scripts responsivos estiver decidido;
- dependências públicas de caminhos tiverem sido descartadas ou mitigadas;
- o baseline Git e os hashes estiverem registrados;
- houver confirmação humana para qualquer promoção de autoridade.

## 17. Definition of Done operacional

A execução estará concluída quando `docs/README.md` permitir a um humano ou agente localizar autoridade, métodos, caso ativo, pesquisa, operações, produto e arquivo; quando todas as contagens e hashes estiverem reconciliados; quando nenhum link ou verificador usar um caminho removido; e quando todo o histórico continuar preservado sem adquirir autoridade que não possuía.
