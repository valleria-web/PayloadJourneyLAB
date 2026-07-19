# Sprint 6 — Metodologia de investigação

## 1. Objetivo

A metodologia aparece depois da Formação e do caso HORA.city para partir de uma experiência concreta. O visitante primeiro aprende a seguir o payload, observa um flow pedagógico, encontra a formação e vê a aplicação num caso real; depois compreende como o LAB conduz uma investigação.

## 2. Procedimento

O procedimento define uma sequência investigativa. Os métodos são instrumentos usados durante essa sequência.

### 01 — Congelar / Freeze

- Pergunta: Qual comportamento precisa ser preservado antes de qualquer alteração?
- Resultado: um caso estável e reproduzível, pronto para ser investigado.
- Evidência: registro do estado observado.
- Métodos relacionados: USMT e Reverse Payload Journey.

### 02 — Mapear / Map

- Pergunta: Por onde o payload realmente atravessa o sistema?
- Resultado: um caminho operacional explícito e verificável.
- Evidência: mapa do flow e checkpoints candidatos.
- Métodos relacionados: Payload Journey, Operational Payload Path e Reverse Payload Journey.

### 03 — Detectar / Detect

- Pergunta: Em que ponto o comportamento observado diverge do esperado ou do modelo?
- Resultado: uma divergência sustentada por evidências, não apenas uma hipótese.
- Evidência: registro da divergência detectada.
- Métodos relacionados: Reverse Payload Journey, USMT e Track to Origin.

### 04 — Restaurar / Restore

- Pergunta: Que autoridade, regra ou comportamento precisa ser corrigido e validado?
- Resultado: um comportamento restaurado e validado através do mesmo flow investigado.
- Evidência: validação do comportamento restaurado.
- Métodos relacionados: Track to Origin, USMT e Payload Journey para validação do flow.

## 3. Semântica de Detectar

Detectar não é adivinhar uma causa, procurar aleatoriamente uma linha ou apontar um arquivo suspeito. Detectar é confrontar evidências produzidas nos checkpoints, reconhecer a primeira divergência relevante e localizar a decisão, transformação ou autoridade que precisa ser investigada.

Restaurar também não significa apenas corrigir código: exige mudança mínima, reexecução dos checkpoints, comparação antes/depois, confirmação de invariantes e validação pelo mesmo flow.

## 4. Métodos

| Método | Propósito | Quando utilizar | Pergunta | Resultado | Relação com o procedimento |
| --- | --- | --- | --- | --- | --- |
| Payload Journey | Seguir a informação entre camadas e representações | Para compreender uma interação de ponta a ponta | Por onde o payload atravessa e como muda? | Visão operacional do flow | Mapear e validar o flow em Restaurar |
| USMT | Organizar estados, eventos, transições, invariantes, camadas, métricas e término | Para explicitar o modelo que orienta a evidência | Que estados, regras e invariantes definem o esperado? | Modelo estrutural para comparação | Congelar, Detectar e Restaurar |
| Reverse Payload Journey | Reconstruir o caminho a partir do comportamento observável | Quando a anomalia existe e a origem é desconhecida | De onde veio o comportamento que chegou à interface? | Investigação orientada pela anomalia e pelo flow | Congelar, Mapear e Detectar |
| Operational Payload Path | Registrar a trajetória em componentes, fronteiras e representações reais | Para converter arquitetura abstrata em rota investigável | Quais componentes transportam, transformam ou decidem? | Mapa com checkpoints candidatos | Mapear; conecta Payload Journey e Reverse Payload Journey |
| Track to Origin | Rastrear a primeira decisão técnica, temporal ou semântica relevante | Depois de localizar a divergência | Onde nasceu a decisão que determinou o comportamento? | Origem investigativa sustentada por evidências | Detectar, Restaurar e autoridade |

A homepage não expande os doze elementos da USMT nem promete que Track to Origin sempre termina numa única linha ou arquivo.

## 5. Prática investigativa

A progressão operacional é Track Mode → Reverse Payload Journey → Track to Origin → Evidência → Restauração. Ela complementa, sem substituir, Congelar → Mapear → Detectar → Restaurar.

- Track Mode: estado operacional em que observar, mapear e produzir evidências têm prioridade sobre mudanças especulativas.
- Trace Engineer: função investigativa proposta e desenvolvida pelo LAB para reconstruir flows, seguir payloads, confrontar evidências e rastrear decisões.
- Software System Investigation: prática estrutural desenvolvida no contexto do LAB, baseada em tracing, modelagem, checkpoints, evidências e reconstrução de decisões.
- Evidência: permite comparar o comportamento observado de forma verificável.
- Autoridade: identifica onde uma regra ou decisão relevante é definida.
- Restauração: corrige o recorte necessário e valida o comportamento pelo mesmo flow.

## 6. Limites editoriais

- Trace Engineer não é apresentado como profissão reconhecida, cargo padronizado ou certificação.
- Software System Investigation não é apresentada como disciplina ou standard externo.
- Templates, protocolo documental completo, logs, schemas e demonstração aprofundada permanecem fora do escopo.
- As variantes editoriais de HORA.city permanecem na fonte server-side e `editorialResolution` continua `unresolved`.
- A USMT completa permanece reservada para rota futura.

## 7. Acessibilidade

As seções usam `h2`, os blocos usam `h3`, e etapas e métodos usam listas ordenadas na mesma ordem do DOM e da apresentação visual. Perguntas, resultados, evidências e relações são expressos em texto. A interface funciona sem hover e sem JavaScript adicional, mantém foco visível, contraste AA, reduced motion, sticky header, Escape e retorno de foco no menu mobile.

## 8. Responsividade

O procedimento usa uma coluna no mobile e duas colunas quando existe espaço de leitura. Os métodos usam um bloco por linha no mobile e duas colunas no desktop. A prática mantém Track Mode, Trace Engineer e Software System Investigation em sequência, com progressão e CTA adaptáveis. A validação final cobre 360×800, 390×844, 768×1024, 1024×768, 1280×800 e 1440×900.

## 9. Preparação para a Sprint 7

Com a metodologia consolidada, a Sprint 7 pode trabalhar O LAB, Ecossistema, LabLog, Sobre, fundadora, CTA final e Footer sem reabrir o procedimento. Formação, pesquisa, investigação aplicada e colaboração permanecem como os quatro pilares institucionais.
