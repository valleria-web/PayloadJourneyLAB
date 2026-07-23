# Refactor Narrativo V3 — Índice do ciclo

## Estado

Índice documental do ciclo iniciado na Sprint 0 e encerrado localmente na Sprint 8.

O índice descreve decisões e resultados comprovados. Não constitui uma nova narrativa promocional, não amplia claims e não representa validação em produção.

## Sprints 0–8

| Sprint | Objetivo | Especificação e plano | Documento final | Dependência | Estado | Resultado principal | Limitações relevantes |
|---|---|---|---|---|---|---|---|
| Sprint 0 | congelar o contrato editorial e o mapa de preservação e migração | `sprint 0.md`; planejamento incorporado no próprio ficheiro, sem `plano-sprint0.md` dedicado | `Sprint 0 - Contrato Editorial e Mapa de Preservacao e Migracao.md` | auditoria inicial | concluída e aprovada | tese, taxonomia de claims, arquitetura narrativa, glossário e mapa de preservação congelados | sprint documental; warnings preexistentes; paths locais históricos registados |
| Sprint 1 | reorganizar a homepage conforme o contrato editorial | `sprint 1.md`; execução direta, sem `plano-sprint1.md` dedicado | `Sprint 1 - Homepage.md` | Sprint 0 e decisões humanas | concluída e aprovada | homepage passou a apresentar problema, tese, método, formação, caso e LAB em sequência verificável | nenhuma prova de eficácia, produção ou transferibilidade |
| Sprint 2 | consolidar a rota do LAB e os compromissos do piloto | `sprint 2.md`; `plano-sprint2.md` | `Sprint 2 - LAB.md` | Sprints 0–1 | concluída e aprovada | missão, origem, construção e estados dos artefatos foram separados por evidência | compromissos somente com evidência; artefatos ausentes continuam ausentes |
| Sprint 3 | estruturar formação e progressão pedagógica | `sprint 3.md`; execução direta, sem `plano-sprint3.md` dedicado | `Sprint 3 - Formacao e Progressao Pedagogica.md` | Sprints 0–2 | concluída e aprovada | conteúdo disponível, aprofundamento em construção e direção futura foram distinguidos | eficácia pedagógica e empregabilidade não validadas |
| Sprint 4 | consolidar métodos, protocolo e prática investigativa | `sprint 4.md`; `plano-sprint4.md` | `Sprint 4 - Metodo e Pratica Investigativa.md` | Sprints 0–3 | concluída e aprovada | definições canónicas e três rotas metodológicas foram alinhadas sem criar rotas | Trace Engineer permanece função e perfil em desenvolvimento; direção distribuída e mission-critical permanece futura |
| Sprint 5 | publicar apenas casos, evidências e proveniência localizados | `sprint 5.md`; `plano-sprint5.md` | `Sprint 5 - Casos Evidencias e Proveniencia.md` | Sprints 0–4 | concluída e aprovada | HORA.city foi delimitado como caso interno em investigação e LabLog preservou ausência de entradas | restauração, eficácia, transferibilidade e evidência externa não comprovadas |
| Sprint 6 | consolidar navegação, canais e descoberta | `sprint 6.md`; `plano-sprint6.md` | `Sprint 6 - Navegacao Canais e Descoberta.md` | Sprints 0–5 | concluída e aprovada | 11 rotas ficaram alcançáveis, com equivalência desktop/mobile e canais proporcionais | YouTube não resolvido; LinkedIn ausente; Udemy secundária e limitada por HTTP 403 automatizado |
| Sprint 7 | alinhar metadata, structured data e validação final | `sprint 7.md`; `plano-sprint7.md` | `Sprint 7 - Metadata Structured Data e Validacao Final.md` | Sprints 0–6 | concluída e aprovada | 11 rotas, metadata, JSON-LD, sitemap, redirects, guardrails e matriz responsiva foram validados localmente | nenhum deploy; produção pendente; 403 da Udemy; warnings e paths históricos registados |
| Sprint 8 | encerrar o ciclo, preparar release candidate e handoff | `sprint 8.md`; `plano-sprint8.md` | `Sprint 8 - Encerramento do Ciclo Release Candidate e Handoff.md` | Sprint 7 aprovada | concluída localmente | documentação consolidada, Git auditado, limpeza controlada, RC e handoff preparados | commit, tag, push, merge, deploy e validação pública não executados |

## Documentos transversais

- `decisoes humanas.md`: decisões congeladas que governam o ciclo.
- `README.md`: este índice.
- `Sprint 8 - Encerramento do Ciclo Release Candidate e Handoff.md`: registo oficial do encerramento local.

## Leitura do estado

“Concluída localmente” significa que fonte, conteúdo renderizado, build, execução local observada e verificadores foram avaliados nas classes documentadas. Não significa publicação, execução em produção, validação externa ou eficácia demonstrada.

## Continuidade

Deploy e validação pública dependem de autorização humana específica. Trabalho posterior permanece classificado como `Fora do Refactor Narrativo V3`; nenhuma Sprint 9 foi iniciada.

