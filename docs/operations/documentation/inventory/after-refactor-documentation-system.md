---
document_id: PJL-OPS-DOC-SNAPSHOT-AFTER-001
title: Payload Journey LAB Documentation System — After Refactor
version: 1.0
status: stable
authority: operations
owner: Payload Journey LAB
snapshot_date: 2026-07-31
supersedes: null
superseded_by: null
---

# Sistema documental do Payload Journey LAB — snapshot posterior à refatoração

> Este snapshot descreve a arquitetura resultante da Documentation System Refactor v1. É um registro operacional e não substitui a autoridade de `governance/`.

## Arquitetura final

```text
docs/
├── README.md                         ← entrada para humanos e agentes
├── governance/                       ← autoridade atual
│   └── semantic-identity/            ← charter canônico v1.0
├── methods/                          ← índices e futuras especificações versionadas
│   ├── payload-journey/              ← index only; especificação autônoma ausente
│   ├── usmt/                         ← index only; especificação autônoma ausente
│   ├── reverse-payload-journey/      ← index only; especificação autônoma ausente
│   ├── operational-payload-path/     ← index only; especificação autônoma ausente
│   ├── track-to-origin/              ← index only; especificação autônoma ausente
│   └── trace-engineering/            ← index only; prática em desenvolvimento
├── cases/
│   └── RPJ-HORA-001/                 ← caso ativo; não concluído
├── research/                         ← saída corrente ainda não identificada
├── operations/
│   ├── ai-readiness/                 ← auditoria e proveniência
│   ├── documentation/                ← manifesto, snapshots, task e plano
│   ├── propagation/                  ← baselines, tarefas e implementações
│   └── publishing/                   ← destino de novas validações visuais
├── product/                          ← documentação ativa ainda não identificada
└── archive/                          ← memória histórica não autoritativa
    ├── website-evolution/
    │   ├── initial-cycle/
    │   ├── v2/
    │   ├── v3/
    │   └── homepage-refactor/
    ├── old-definitions/
    ├── completed-tasks/
    └── historical-prompts/
```

## Hierarquia de autoridade

```text
governance
    ↓
current versioned method specifications
    ↓
active case records
    ↓
research outputs
    ↓
current operational records
    ↓
current product documentation
    ↓
archive
```

```text
archive/ cannot override governance/
```

## Governança

Autoridade canônica existente:

- [Semantic Identity Charter v1.0](../../../governance/semantic-identity/semantic-identity-charter-v1.0.md)

Lacunas de políticas autônomas:

- terminologia;
- modelo de evidência;
- governança de casos;
- publicação;
- citação.

O charter contém autoridade atual para parte desses temas, mas nenhuma política autônoma foi sintetizada durante a migração.

## Métodos

Os seis domínios esperados possuem READMEs de navegação. Todos declaram:

```text
Document status: index only
Canonical standalone specification: not yet published
```

Nenhum sprint histórico foi promovido a especificação.

## Caso ativo

Entrada documental atual:

- [Founding Reference Case 001 — HORA.city](../../../cases/RPJ-HORA-001/README.md)

```text
Investigation ID: RPJ-HORA-001
Lifecycle: Active investigation
```

A avaliação de 2026-07-27 permanece dentro do baseline histórico de propagação e é apenas referenciada pelo caso atual.

## Operações e arquivo

- [Documentation operations](../README.md)
- [Propagation](../../propagation/README.md)
- [AI readiness](../../ai-readiness/README.md)
- [Publishing operations](../../publishing/README.md)
- [Archive](../../../archive/README.md)

## Contagens finais

| Medida | Quantidade |
|---|---:|
| Artefatos do baseline | 359 |
| Documentos textuais do baseline | 118 |
| Novos documentos organizacionais e de migração | 22 |
| Artefatos finais em `docs/` | 381 |
| Documentos textuais finais | 140 |
| Markdown final | 137 |
| PNG preservados | 235 |
| JSON preservados | 5 |
| CSV preservado | 1 |
| Documentos apagados | 0 |

Os detalhes estão no [relatório da refatoração](../2026-07-31-documentation-system-refactor-report.md) e no [manifesto de migração](../2026-07-31-documentation-system-refactor.md).

## Invariantes preservados

```text
CURRENT AUTHORITY != HISTORICAL MEMORY
deleted documents = 0
HORA.city lifecycle = Active Investigation
promotions = 0
```
