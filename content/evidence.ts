import type { EvidenceLevel } from "@/types/content";

export const evidenceLevels = [
  {
    id: "conceptual",
    title: "Conceptual evidence",
    definition:
      "Modelos esperados, definições, diagramas ou representações pedagógicas usados para explicitar uma hipótese, uma estrutura ou um comportamento esperado.",
  },
  {
    id: "documentary",
    title: "Documentary evidence",
    definition:
      "Registros de repositório, notas de investigação ou declarações documentadas que demonstram o que foi registrado, sem equivaler por si mesmos a uma execução observada.",
  },
  {
    id: "runtime",
    title: "Runtime evidence",
    definition:
      "Artefatos de uma execução observada, como traces, capturas de checkpoints, logs estruturados ou snapshots de payloads.",
  },
  {
    id: "implementation",
    title: "Implementation evidence",
    definition:
      "Código, diffs, commits ou configuração que demonstram que uma mudança foi implementada, sem provar isoladamente o resultado em execução.",
  },
  {
    id: "verification",
    title: "Verification evidence",
    definition:
      "Replay, teste ou reprodução delimitada que demonstra o resultado depois de uma restauração ou intervenção.",
  },
  {
    id: "external",
    title: "External or independent evidence",
    definition:
      "Evidência produzida ou confirmada fora do contexto fundador e interno do LAB, com origem e limites identificados.",
  },
] as const satisfies readonly EvidenceLevel[];
