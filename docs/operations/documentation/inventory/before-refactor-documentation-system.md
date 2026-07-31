---
document_id: PJL-OPS-DOC-SNAPSHOT-BEFORE-001
title: Payload Journey LAB Documentation System — Before Refactor
version: 1.0
status: historical-snapshot
authority: operations
owner: Payload Journey LAB
snapshot_date: 2026-07-31
supersedes: null
superseded_by: null
---

# Sistema documental do Payload Journey LAB — snapshot anterior à refatoração

> **Snapshot histórico:** este documento preserva a estrutura observada antes da Documentation System Refactor v1. Ele não descreve a arquitetura atual e não possui autoridade sobre `governance/`.

> Estado inventariado em 31 de julho de 2026. Escopo: somente documentos existentes em `docs/`.

## Reconciliation note

The original inventory below catalogued 115 source documents. At the authorized execution gate, three additional documentation-system records existed—the inventory itself, the refactor task and its execution plan—bringing the controlled baseline to **118 textual documents and 359 total artefacts**. The total includes 235 PNG evidence assets, five JSON files and one CSV file.

The tree and per-file descriptions below intentionally preserve the pre-refactor organization. Only metadata, this reconciliation note and link destinations were updated; those changes are recorded in the migration manifest.

## 1. Visão do sistema

```text
docs/
├── governance/                  ← autoridade institucional vigente
│   └── semantic-identity/       ← nome, descrição, missão e identidade canônica
│
├── ai-readiness/                ← auditoria, entidades e proveniência semântica
├── lab-propagation/             ← baseline, evidências e registros de propagação
├── PropagationBaseline/         ← tarefa e plano original do baseline
│
├── homepage-refactor/           ← memória documental da evolução da homepage
├── sprints para v3/             ← ciclo narrativo V3: especificações, planos e entregas
├── sprints para v2/             ← ciclo de refatoração V2
├── sprints/                     ← ciclo inicial da homepage
│
├── files/                       ← definições e planos documentais anteriores
└── prompts/                     ← briefs de diagnóstico, design, hero e estudo de caso
```

Fluxo de leitura recomendado:

```text
AUTORIDADE
governance/semantic-identity
        │
        ▼
VALIDAÇÃO E RASTREABILIDADE
ai-readiness ──► lab-propagation ──► PropagationBaseline
        │
        ▼
MEMÓRIA DE DECISÃO E EVOLUÇÃO
homepage-refactor ──► sprints para v2 ──► sprints para v3
        │
        ▼
INSUMOS HISTÓRICOS
files ──► prompts ──► sprints
```

Legenda:

- **Autoridade**: define o que o LAB é e como deve ser identificado.
- **Validação**: comprova consistência, proveniência, rotas, links e evidências.
- **Memória**: registra decisões, preservações, relatórios e mudanças por ciclo.
- **Insumos**: guarda briefs, definições e planos usados para orientar trabalho.

## 2. Estrutura física e quantidade

```text
docs/                                              [115 documentos]
├── governance/                                     [1]
│   └── semantic-identity/                           [1]
├── ai-readiness/                                    [4]
├── lab-propagation/                                [23]
│   └── 2026-07-27-baseline/                        [19]
│       └── evidence/                                [9]
│           ├── case-file-001/                       [1]
│           ├── commands/                            [3]
│           ├── documents/                           [1]
│           ├── links/                               [2]
│           ├── metadata/                            [1]
│           └── routes/                              [1]
├── PropagationBaseline/                             [2]
├── homepage-refactor/                              [30]
├── sprints para v3/                                [29]
├── sprints para v2/                                [14]
├── sprints/                                         [4]
├── files/                                           [4]
└── prompts/                                         [4]
```

## 3. Conteúdo de cada documento

### `governance/` — autoridade institucional

```text
governance/
└── semantic-identity/
    └── semantic-identity-charter-v1.0.md
```

- [`semantic-identity/semantic-identity-charter-v1.0.md`](../../../governance/semantic-identity/semantic-identity-charter-v1.0.md) — carta canônica com nome oficial, descrições curta e institucional, missão, visão, domínio, entidade fundadora, relações e termos oficiais do LAB.

**Lacunas visíveis no núcleo de governança:** ainda não existem, nesta pasta, documentos próprios para terminologia, modelo de evidência, política de publicação, governança de casos ou política de citação. Esses assuntos aparecem de forma distribuída nos registros de auditoria, propagação e sprints.

### `ai-readiness/` — legibilidade por máquinas e proveniência

```text
ai-readiness/
├── 01-pjl-ai-friendliness-audit.md
├── 02-sprint-11-canonical-entity-map.md
├── 03-sprint-11-provenance-matrix.md
└── 04-sprint-11-report.md
```

- [`01-pjl-ai-friendliness-audit.md`](../../ai-readiness/01-pjl-ai-friendliness-audit.md) — auditoria do conteúdo e da arquitetura semântica, com escopo, achados, riscos e recomendações para AI-friendliness.
- [`02-sprint-11-canonical-entity-map.md`](../../ai-readiness/02-sprint-11-canonical-entity-map.md) — mapa de entidades e ocorrências, suas fontes canônicas e a configuração institucional adotada.
- [`03-sprint-11-provenance-matrix.md`](../../ai-readiness/03-sprint-11-provenance-matrix.md) — matriz que relaciona afirmações públicas, origem, autoridade e guardrails de proveniência.
- [`04-sprint-11-report.md`](../../ai-readiness/04-sprint-11-report.md) — relatório final da canonicalização, registrando baseline, resultado e estado observado antes e depois.

### `lab-propagation/` — baseline, evidência e propagação institucional

```text
lab-propagation/
├── Codex Task Implement Payload Journey LAB AI Welcome Page.md
├── Codex Task AI Welcome Semantic Hardening v1.0.1.md
├── 2026-07-29-ai-welcome-implementation.md
├── 2026-07-29-ai-welcome-v1-0-1-semantic-hardening.md
└── 2026-07-27-baseline/
    ├── README.md
    ├── executive-summary.md
    ├── technical-discovery-audit.md
    ├── semantic-consistency-audit.md
    ├── route-and-link-map.md
    ├── asset-inventory.md
    ├── case-file-001-status.md
    ├── findings-register.md
    ├── external-verification-checklist.md
    ├── next-actions.md
    └── evidence/
        ├── case-file-001/evidence-assessment.md
        ├── commands/discovery-counts.txt
        ├── commands/initial-state.txt
        ├── commands/validation-results.txt
        ├── documents/document-discovery.md
        ├── links/link-discovery.md
        ├── links/public-verification.md
        ├── metadata/metadata-discovery.md
        └── routes/route-discovery.md
```

- [`Codex Task Implement Payload Journey LAB AI Welcome Page.md`](../../propagation/tasks/ai-welcome/Codex%20Task%20Implement%20Payload%20Journey%20LAB%20AI%20Welcome%20Page.md) — especificação da página de boas-vindas para sistemas de IA, incluindo rota canônica, conteúdo e critérios de aceitação.
- [`Codex Task AI Welcome Semantic Hardening v1.0.1.md`](../../propagation/tasks/ai-welcome/Codex%20Task%20AI%20Welcome%20Semantic%20Hardening%20v1.0.1.md) — tarefa de endurecimento semântico da página, com autoridade interna, ontologia e regras de clareza.
- [`2026-07-29-ai-welcome-implementation.md`](../../propagation/implementations/ai-welcome/2026-07-29-ai-welcome-implementation.md) — registro documental da entrega da AI Welcome, de seu propósito, composição e validação.
- [`2026-07-29-ai-welcome-v1-0-1-semantic-hardening.md`](../../propagation/implementations/ai-welcome/2026-07-29-ai-welcome-v1-0-1-semantic-hardening.md) — registro da versão 1.0.1 e das mudanças de autoridade, ontologia e apresentação semântica.
- [`2026-07-27-baseline/README.md`](../../propagation/baselines/2026-07-27/README.md) — porta de entrada do baseline, delimitando propósito, escopo e conjunto documental.
- [`2026-07-27-baseline/executive-summary.md`](../../propagation/baselines/2026-07-27/executive-summary.md) — resumo do que existia, ativos mais fortes, principais lacunas e leitura executiva.
- [`2026-07-27-baseline/technical-discovery-audit.md`](../../propagation/baselines/2026-07-27/technical-discovery-audit.md) — auditoria de descoberta da estrutura, superfícies públicas e características técnicas relevantes à propagação.
- [`2026-07-27-baseline/semantic-consistency-audit.md`](../../propagation/baselines/2026-07-27/semantic-consistency-audit.md) — registro de conflitos, não conflitos e observações sobre consistência semântica.
- [`2026-07-27-baseline/route-and-link-map.md`](../../propagation/baselines/2026-07-27/route-and-link-map.md) — mapa das rotas, navegação, destinos internos e externos e seu estado.
- [`2026-07-27-baseline/asset-inventory.md`](../../propagation/baselines/2026-07-27/asset-inventory.md) — inventário indexado dos ativos documentais e visuais encontrados.
- [`2026-07-27-baseline/case-file-001-status.md`](../../propagation/baselines/2026-07-27/case-file-001-status.md) — classificação de ciclo de vida e de evidência do caso fundador HORA.city.
- [`2026-07-27-baseline/findings-register.md`](../../propagation/baselines/2026-07-27/findings-register.md) — registro central de observações, inconsistências e riscos identificados.
- [`2026-07-27-baseline/external-verification-checklist.md`](../../propagation/baselines/2026-07-27/external-verification-checklist.md) — checklist de verificação externa para publicação, busca, implantação, analytics e tráfego.
- [`2026-07-27-baseline/next-actions.md`](../../propagation/baselines/2026-07-27/next-actions.md) — ações seguintes ordenadas por criticidade e horizonte de execução.
- [`2026-07-27-baseline/evidence/case-file-001/evidence-assessment.md`](../../propagation/baselines/2026-07-27/evidence/case-file-001/evidence-assessment.md) — avaliação do que pode e do que não pode ser comprovado sobre o Case File 001.
- [`2026-07-27-baseline/evidence/commands/discovery-counts.txt`](../../propagation/baselines/2026-07-27/evidence/commands/discovery-counts.txt) — contagens brutas coletadas durante a descoberta documental.
- [`2026-07-27-baseline/evidence/commands/initial-state.txt`](../../propagation/baselines/2026-07-27/evidence/commands/initial-state.txt) — captura textual do estado inicial usado como baseline.
- [`2026-07-27-baseline/evidence/commands/validation-results.txt`](../../propagation/baselines/2026-07-27/evidence/commands/validation-results.txt) — resultados brutos das verificações executadas no fechamento do baseline.
- [`2026-07-27-baseline/evidence/documents/document-discovery.md`](../../propagation/baselines/2026-07-27/evidence/documents/document-discovery.md) — evidência da busca e localização dos documentos relevantes.
- [`2026-07-27-baseline/evidence/links/link-discovery.md`](../../propagation/baselines/2026-07-27/evidence/links/link-discovery.md) — evidência dos links, CTAs e destinos encontrados.
- [`2026-07-27-baseline/evidence/links/public-verification.md`](../../propagation/baselines/2026-07-27/evidence/links/public-verification.md) — evidência de verificação pública, recuperações bem-sucedidas, incertezas e divergências.
- [`2026-07-27-baseline/evidence/metadata/metadata-discovery.md`](../../propagation/baselines/2026-07-27/evidence/metadata/metadata-discovery.md) — evidência da metadata e dos dados estruturados encontrados.
- [`2026-07-27-baseline/evidence/routes/route-discovery.md`](../../propagation/baselines/2026-07-27/evidence/routes/route-discovery.md) — evidência das rotas descobertas e distinções relevantes entre elas.

### `PropagationBaseline/` — origem do ciclo de propagação

```text
PropagationBaseline/
├── Codex-Task-Payload-Journey-LAB-Propagation-Baseline.md
└── Plano-de-Execucao-Propagation-Baseline.md
```

- [`Codex-Task-Payload-Journey-LAB-Propagation-Baseline.md`](../../propagation/tasks/propagation-baseline/Codex-Task-Payload-Journey-LAB-Propagation-Baseline.md) — tarefa-mãe com contexto, objetivo, entregáveis e critérios para construir o baseline.
- [`Plano-de-Execucao-Propagation-Baseline.md`](../../propagation/tasks/propagation-baseline/Plano-de-Execucao-Propagation-Baseline.md) — decomposição operacional da tarefa em princípios, etapas, verificações e entregas.

### `homepage-refactor/` — memória da refatoração da homepage

```text
homepage-refactor/
├── 00-project-audit.md
├── 01-homepage-structure.md
├── 02-content-inventory.md
├── 03-assets-and-links.md
├── 04-technical-baseline.md
├── 05-refactor-risks.md
├── 06-content-migration-matrix.md
├── 07-content-architecture.md
├── 08-sprint-1-report.md
├── 09-design-foundation.md
├── 10-sprint-2-report.md
├── 11-entry-experience.md
├── 12-sprint-3-report.md
├── 13-learning-path-and-flow-demo.md
├── 14-sprint-4-report.md
├── 15-training-and-case-study.md
├── 16-sprint-5-report.md
├── 17-investigation-methodology.md
├── 18-sprint-6-report.md
├── 19-institutional-ecosystem-and-closing.md
├── 20-sprint-7-report.md
├── 21-usmt-homepage-section.md
├── 22-sprint-9-report.md
├── 23-sprint-8-content-inventory.md
├── 24-sprint-8-route-map.md
├── 25-sprint-8-preservation-matrix.md
├── 26-sprint-8-report.md
├── 27-sprint-10-institutional-content-inventory.md
├── 28-sprint-10-preservation-matrix.md
└── 29-sprint-10-report.md
```

- [`00-project-audit.md`](../../../archive/website-evolution/homepage-refactor/00-project-audit.md) — auditoria inicial do projeto e baseline da homepage.
- [`01-homepage-structure.md`](../../../archive/website-evolution/homepage-refactor/01-homepage-structure.md) — mapa da estrutura e da ordem narrativa então publicadas.
- [`02-content-inventory.md`](../../../archive/website-evolution/homepage-refactor/02-content-inventory.md) — inventário semântico e editorial dos conceitos e conteúdos.
- [`03-assets-and-links.md`](../../../archive/website-evolution/homepage-refactor/03-assets-and-links.md) — inventário de ativos, acessibilidade, links e integrações.
- [`04-technical-baseline.md`](../../../archive/website-evolution/homepage-refactor/04-technical-baseline.md) — baseline de comportamento, responsividade e validação.
- [`05-refactor-risks.md`](../../../archive/website-evolution/homepage-refactor/05-refactor-risks.md) — riscos prioritários identificados antes da refatoração.
- [`06-content-migration-matrix.md`](../../../archive/website-evolution/homepage-refactor/06-content-migration-matrix.md) — matriz de origem, destino, preservação e tratamento do conteúdo.
- [`07-content-architecture.md`](../../../archive/website-evolution/homepage-refactor/07-content-architecture.md) — arquitetura de conteúdo criada e fontes canônicas usadas.
- [`08-sprint-1-report.md`](../../../archive/website-evolution/homepage-refactor/08-sprint-1-report.md) — relatório da Sprint 1, com objetivo, estado e entregas.
- [`09-design-foundation.md`](../../../archive/website-evolution/homepage-refactor/09-design-foundation.md) — fundação visual, tokens e princípios de apresentação.
- [`10-sprint-2-report.md`](../../../archive/website-evolution/homepage-refactor/10-sprint-2-report.md) — relatório da Sprint 2 e consolidação da fundação.
- [`11-entry-experience.md`](../../../archive/website-evolution/homepage-refactor/11-entry-experience.md) — definição da experiência inicial, público e arquitetura da entrada.
- [`12-sprint-3-report.md`](../../../archive/website-evolution/homepage-refactor/12-sprint-3-report.md) — relatório da Sprint 3 e mudanças na porta de entrada.
- [`13-learning-path-and-flow-demo.md`](../../../archive/website-evolution/homepage-refactor/13-learning-path-and-flow-demo.md) — definição da trilha progressiva e da demonstração do fluxo de payload.
- [`14-sprint-4-report.md`](../../../archive/website-evolution/homepage-refactor/14-sprint-4-report.md) — relatório da Sprint 4 e entregas da trilha/demonstração.
- [`15-training-and-case-study.md`](../../../archive/website-evolution/homepage-refactor/15-training-and-case-study.md) — estrutura da formação fundamental e apresentação do caso HORA.city.
- [`16-sprint-5-report.md`](../../../archive/website-evolution/homepage-refactor/16-sprint-5-report.md) — relatório da Sprint 5 e preservação dos documentos oficiais.
- [`17-investigation-methodology.md`](../../../archive/website-evolution/homepage-refactor/17-investigation-methodology.md) — procedimento investigativo e suas etapas de congelar, mapear, detectar e prosseguir.
- [`18-sprint-6-report.md`](../../../archive/website-evolution/homepage-refactor/18-sprint-6-report.md) — relatório da Sprint 6 e entrega da metodologia.
- [`19-institutional-ecosystem-and-closing.md`](../../../archive/website-evolution/homepage-refactor/19-institutional-ecosystem-and-closing.md) — missão, ecossistema, limites editoriais e encerramento institucional.
- [`20-sprint-7-report.md`](../../../archive/website-evolution/homepage-refactor/20-sprint-7-report.md) — relatório da Sprint 7 e fechamento institucional da homepage.
- [`21-usmt-homepage-section.md`](../../../archive/website-evolution/homepage-refactor/21-usmt-homepage-section.md) — papel narrativo da USMT, pergunta central e seus doze elementos.
- [`22-sprint-9-report.md`](../../../archive/website-evolution/homepage-refactor/22-sprint-9-report.md) — relatório da reincorporação da USMT na homepage.
- [`23-sprint-8-content-inventory.md`](../../../archive/website-evolution/homepage-refactor/23-sprint-8-content-inventory.md) — inventário integral do conteúdo público no baseline da Sprint 8.
- [`24-sprint-8-route-map.md`](../../../archive/website-evolution/homepage-refactor/24-sprint-8-route-map.md) — mapa da arquitetura publicada e responsabilidade de cada rota.
- [`25-sprint-8-preservation-matrix.md`](../../../archive/website-evolution/homepage-refactor/25-sprint-8-preservation-matrix.md) — matriz de preservação e rastreabilidade do conteúdo reorganizado.
- [`26-sprint-8-report.md`](../../../archive/website-evolution/homepage-refactor/26-sprint-8-report.md) — relatório final da modularização e preservação da Sprint 8.
- [`27-sprint-10-institutional-content-inventory.md`](../../../archive/website-evolution/homepage-refactor/27-sprint-10-institutional-content-inventory.md) — inventário do conteúdo institucional antes da unificação.
- [`28-sprint-10-preservation-matrix.md`](../../../archive/website-evolution/homepage-refactor/28-sprint-10-preservation-matrix.md) — matriz de preservação do conteúdo institucional migrado.
- [`29-sprint-10-report.md`](../../../archive/website-evolution/homepage-refactor/29-sprint-10-report.md) — relatório final da unificação institucional e arquitetura resultante.

### `sprints para v3/` — ciclo narrativo V3

```text
sprints para v3/
├── README.md
├── sprints sequency.md
├── auditoria refactor site v3.md
├── resultado auditoria narrativa site v3.md
├── decisoes humanas.md
├── sprint 0.md
├── Sprint 0 - Contrato Editorial e Mapa de Preservacao e Migracao.md
├── sprint 1.md
├── Sprint 1 - Homepage.md
├── sprint 2.md
├── Sprint 2 - LAB.md
├── plano-sprint2.md
├── sprint 3.md
├── Sprint 3 - Formacao e Progressao Pedagogica.md
├── sprint 4.md
├── Sprint 4 - Metodo e Pratica Investigativa.md
├── plano-sprint4.md
├── sprint 5.md
├── Sprint 5 - Casos Evidencias e Proveniencia.md
├── plano-sprint5.md
├── sprint 6.md
├── Sprint 6 - Navegacao Canais e Descoberta.md
├── plano-sprint6.md
├── sprint 7.md
├── Sprint 7 - Metadata Structured Data e Validacao Final.md
├── plano-sprint7.md
├── sprint 8.md
├── Sprint 8 - Encerramento do Ciclo Release Candidate e Handoff.md
└── plano-sprint8.md
```

- [`README.md`](../../../archive/website-evolution/v3/README.md) — índice oficial do ciclo V3, seu estado, sprints, documentos transversais e continuidade.
- [`sprints sequency.md`](../../../archive/website-evolution/v3/sprints%20sequency.md) — sequência resumida dos temas previstos para as Sprints 0–7.
- [`auditoria refactor site v3.md`](../../../archive/website-evolution/v3/auditoria%20refactor%20site%20v3.md) — briefing da auditoria narrativa, seu contexto, objetivo e superfícies a investigar.
- [`resultado auditoria narrativa site v3.md`](../../../archive/website-evolution/v3/resultado%20auditoria%20narrativa%20site%20v3.md) — resultado da auditoria, baseline e diagnóstico narrativo/estrutural.
- [`decisoes humanas.md`](../../../archive/website-evolution/v3/decisoes%20humanas.md) — decisões humanas congeladas sobre tese, hero, posicionamento e limites editoriais.
- [`sprint 0.md`](../../../archive/website-evolution/v3/sprint%200.md) — especificação e local obrigatório da entrega do contrato editorial.
- [`Sprint 0 - Contrato Editorial e Mapa de Preservacao e Migracao.md`](../../../archive/website-evolution/v3/Sprint%200%20-%20Contrato%20Editorial%20e%20Mapa%20de%20Preservacao%20e%20Migracao.md) — entrega da Sprint 0 com contrato editorial, baseline e mapa de preservação/migração.
- [`sprint 1.md`](../../../archive/website-evolution/v3/sprint%201.md) — especificação da homepage, urgência, público, capacidade e referência obrigatória.
- [`Sprint 1 - Homepage.md`](../../../archive/website-evolution/v3/Sprint%201%20-%20Homepage.md) — relatório/entrega da Sprint 1 com baseline e fonte das decisões.
- [`sprint 2.md`](../../../archive/website-evolution/v3/sprint%202.md) — especificação da narrativa do LAB: missão, hipótese, origem e compromisso.
- [`Sprint 2 - LAB.md`](../../../archive/website-evolution/v3/Sprint%202%20-%20LAB.md) — entrega da Sprint 2 e seu gate documental.
- [`plano-sprint2.md`](../../../archive/website-evolution/v3/plano-sprint2.md) — plano de implementação da Sprint 2, baseline e documentos obrigatórios.
- [`sprint 3.md`](../../../archive/website-evolution/v3/sprint%203.md) — especificação da formação e da progressão pedagógica.
- [`Sprint 3 - Formacao e Progressao Pedagogica.md`](../../../archive/website-evolution/v3/Sprint%203%20-%20Formacao%20e%20Progressao%20Pedagogica.md) — entrega e validação documental da Sprint 3.
- [`sprint 4.md`](../../../archive/website-evolution/v3/sprint%204.md) — especificação do método e da prática investigativa.
- [`Sprint 4 - Metodo e Pratica Investigativa.md`](../../../archive/website-evolution/v3/Sprint%204%20-%20Metodo%20e%20Pratica%20Investigativa.md) — entrega da Sprint 4 com gates e fontes documentais.
- [`plano-sprint4.md`](../../../archive/website-evolution/v3/plano-sprint4.md) — plano, objetivo e limites de execução da Sprint 4.
- [`sprint 5.md`](../../../archive/website-evolution/v3/sprint%205.md) — especificação de casos, evidências e proveniência.
- [`Sprint 5 - Casos Evidencias e Proveniencia.md`](../../../archive/website-evolution/v3/Sprint%205%20-%20Casos%20Evidencias%20e%20Proveniencia.md) — entrega da Sprint 5, baseline e gate documental.
- [`plano-sprint5.md`](../../../archive/website-evolution/v3/plano-sprint5.md) — plano de implementação de casos, evidências e proveniência.
- [`sprint 6.md`](../../../archive/website-evolution/v3/sprint%206.md) — especificação de navegação, canais e descoberta.
- [`Sprint 6 - Navegacao Canais e Descoberta.md`](../../../archive/website-evolution/v3/Sprint%206%20-%20Navegacao%20Canais%20e%20Descoberta.md) — entrega da Sprint 6 e seu gate documental.
- [`plano-sprint6.md`](../../../archive/website-evolution/v3/plano-sprint6.md) — plano de implementação da navegação, canais e descoberta.
- [`sprint 7.md`](../../../archive/website-evolution/v3/sprint%207.md) — especificação de metadata, dados estruturados e validação final.
- [`Sprint 7 - Metadata Structured Data e Validacao Final.md`](../../../archive/website-evolution/v3/Sprint%207%20-%20Metadata%20Structured%20Data%20e%20Validacao%20Final.md) — entrega e registro de validação da Sprint 7.
- [`plano-sprint7.md`](../../../archive/website-evolution/v3/plano-sprint7.md) — plano da Sprint 7 e correspondência com a especificação.
- [`sprint 8.md`](../../../archive/website-evolution/v3/sprint%208.md) — especificação de encerramento, release candidate e handoff.
- [`Sprint 8 - Encerramento do Ciclo Release Candidate e Handoff.md`](../../../archive/website-evolution/v3/Sprint%208%20-%20Encerramento%20do%20Ciclo%20Release%20Candidate%20e%20Handoff.md) — entrega final e linha temporal comprovável da Sprint 8.
- [`plano-sprint8.md`](../../../archive/website-evolution/v3/plano-sprint8.md) — plano de fechamento, autorização e atribuições da Sprint 8.

### `sprints para v2/` — ciclo de refatoração V2

```text
sprints para v2/
├── auditoria.md
├── sprint 0.md
├── sprint 1.md
├── sprint 2.md
├── sprint 3.md
├── sprint 4.md
├── sprint 5.md
├── sprint 6.md
├── sprint 7.md
├── sprint 8.md
├── sprint 9.md
├── sprint 10.md
├── sprint 11.md
└── sprint 12.md
```

- [`auditoria.md`](../../../archive/website-evolution/v2/auditoria.md) — briefing de auditoria de AI-friendliness do LAB.
- [`sprint 0.md`](../../../archive/website-evolution/v2/sprint%200.md) — auditoria e baseline da homepage.
- [`sprint 1.md`](../../../archive/website-evolution/v2/sprint%201.md) — arquitetura da informação e migração do conteúdo.
- [`sprint 2.md`](../../../archive/website-evolution/v2/sprint%202.md) — fundação técnica e sistema visual.
- [`sprint 3.md`](../../../archive/website-evolution/v2/sprint%203.md) — nova porta de entrada da homepage.
- [`sprint 4.md`](../../../archive/website-evolution/v2/sprint%204.md) — trilha progressiva e demonstração visual do payload.
- [`sprint 5.md`](../../../archive/website-evolution/v2/sprint%205.md) — formação fundamental e reposicionamento do HORA.city.
- [`sprint 6.md`](../../../archive/website-evolution/v2/sprint%206.md) — procedimento investigativo, métodos e prática do Trace Engineer.
- [`sprint 7.md`](../../../archive/website-evolution/v2/sprint%207.md) — ecossistema institucional e encerramento da homepage.
- [`sprint 8.md`](../../../archive/website-evolution/v2/sprint%208.md) — modularização da homepage com preservação integral do conteúdo.
- [`sprint 9.md`](../../../archive/website-evolution/v2/sprint%209.md) — reincorporação da USMT na homepage.
- [`sprint 10.md`](../../../archive/website-evolution/v2/sprint%2010.md) — unificação institucional das superfícies do LAB e About.
- [`sprint 11.md`](../../../archive/website-evolution/v2/sprint%2011.md) — canonicalização e proveniência semântica.
- [`sprint 12.md`](../../../archive/website-evolution/v2/sprint%2012.md) — contexto e objetivo do ciclo posterior de implementação.

### `sprints/` — ciclo inicial da homepage

```text
sprints/
├── sprint1.md
├── sprint2.md
├── sprint3.md
└── sprint4.md
```

- [`sprint1.md`](../../../archive/website-evolution/initial-cycle/sprint1.md) — briefing da arquitetura narrativa da homepage, suas seções, responsabilidades e CTAs.
- [`sprint2.md`](../../../archive/website-evolution/initial-cycle/sprint2.md) — briefing de conteúdo final e narrativa institucional.
- [`sprint3.md`](../../../archive/website-evolution/initial-cycle/sprint3.md) — briefing de descoberta, metadata e estrutura AI-friendly.
- [`sprint4.md`](../../../archive/website-evolution/initial-cycle/sprint4.md) — briefing de acabamento visual, responsividade, acessibilidade e ativos de publicação.

### `files/` — definições e planos documentais anteriores

```text
files/
├── LAB Definitions.md
├── definitions part .md
├── files-structure.md
└── plano-implementacao-lablog-youtube-documentacao.md
```

- [`LAB Definitions.md`](../../../archive/old-definitions/LAB%20Definitions.md) — definição institucional, objetivo e regras críticas de preservação do LAB.
- [`definitions part .md`](../../../archive/old-definitions/definitions%20part%20.md) — definições conceituais complementares e regras de preservação.
- [`files-structure.md`](../../../archive/completed-tasks/files-structure.md) — especificação documental para visibilidade do LabLog, canal oficial e distinção entre materiais públicos e internos.
- [`plano-implementacao-lablog-youtube-documentacao.md`](../../../archive/completed-tasks/plano-implementacao-lablog-youtube-documentacao.md) — plano de execução derivado da especificação de LabLog, YouTube e documentação interna.

### `prompts/` — briefs históricos

```text
prompts/
├── 01-diagnostico.md
├── 02-design-system.md
├── 03-hero-section.md
└── 04-study-case.md
```

- [`01-diagnostico.md`](../../../archive/historical-prompts/01-diagnostico.md) — prompt de diagnóstico inicial do projeto e da experiência.
- [`02-design-system.md`](../../../archive/historical-prompts/02-design-system.md) — prompt para definição e aplicação do sistema visual.
- [`03-hero-section.md`](../../../archive/historical-prompts/03-hero-section.md) — prompt para objetivo, mensagem e composição da seção hero.
- [`04-study-case.md`](../../../archive/historical-prompts/04-study-case.md) — prompt para estruturar e apresentar o estudo de caso.

## 4. Leitura de maturidade da governança

```text
EXISTE COMO AUTORIDADE CENTRAL
└── identidade semântica

EXISTE, MAS ESTÁ DISTRIBUÍDO
├── terminologia          → charter, AI-readiness e sprints V3
├── modelo de evidência   → lab-propagation e Sprint 5 V3
├── política de publicação→ files, propagação e sprints V3
├── governança de casos   → Case File 001, homepage-refactor e Sprint 5 V3
└── política de citação   → proveniência e matrizes, sem política autônoma
```

O próximo passo documental natural, caso se deseje consolidar governança, é transformar os cinco temas distribuídos em documentos canônicos próprios dentro de `docs/governance/`, preservando os arquivos atuais como evidência histórica e memória de decisão.
