import type { EvidenceLevel } from "@/types/content";

export const evidenceLevels = [
  {
    level: 1,
    id: "conceptual",
    name: "Conceptual Evidence",
    definition:
      "Modelos esperados, definições, diagramas, representações pedagógicas ou estruturas conceituais.",
    boundary:
      "Descreve o que um sistema ou método deve representar; não estabelece execução observada.",
    examples: ["modelos esperados", "definições", "diagramas", "representações pedagógicas"],
  },
  {
    level: 2,
    id: "documentary",
    name: "Documentary Evidence",
    definition:
      "Registros de repositório, notas de investigação, declarações de caso, documentos autorais ou outras afirmações documentadas.",
    boundary:
      "Estabelece que algo foi registrado ou declarado; não estabelece por si só comportamento em runtime.",
    examples: ["registros de repositório", "notas de investigação", "declarações de caso", "documentos autorais"],
  },
  {
    level: 3,
    id: "runtime",
    name: "Runtime Evidence",
    definition:
      "Artefatos de uma execução observada dentro de um contexto de evidência delimitado.",
    boundary:
      "Estabelece execução observada somente dentro do contexto delimitado pelos artefatos coletados.",
    examples: ["traces", "capturas de checkpoints", "logs", "snapshots de payloads", "capturas de request/response", "observações de estado em runtime"],
  },
  {
    level: 4,
    id: "implementation",
    name: "Implementation Evidence",
    definition:
      "Código-fonte, configuração, diffs, commits ou artefatos equivalentes que mostram uma mudança implementada ou um estado de implementação.",
    boundary:
      "Não prova por si só que o resultado pretendido ocorreu em runtime.",
    examples: ["código-fonte", "configuração", "diffs", "commits"],
  },
  {
    level: 5,
    id: "verification",
    name: "Verification Evidence",
    definition:
      "Replay, teste, reprodução ou execução delimitada que demonstra o resultado observado depois de uma implementação ou restauração.",
    boundary:
      "Estabelece que um resultado declarado foi verificado no flow definido, sem generalizá-lo para outros contextos.",
    examples: ["replay", "teste", "reprodução delimitada", "execução delimitada"],
  },
  {
    level: 6,
    id: "external",
    name: "External or Independent Evidence",
    definition:
      "Evidência produzida, reproduzida, revisada ou confirmada fora do contexto fundador e interno da investigação.",
    boundary:
      "É distinta de consistência ou verificação interna e não implica automaticamente revisão científica por pares.",
    examples: ["reprodução externa", "revisão externa", "confirmação independente"],
  },
] as const satisfies readonly EvidenceLevel[];
