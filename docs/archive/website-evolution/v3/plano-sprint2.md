# Plano de implementação — Sprint 2

## 1. Objetivo

Refatorar exclusivamente a arquitetura narrativa e editorial de `/lab`, consolidando-a como página institucional canônica do Payload Journey LAB.

A página deverá aprofundar origem, missão, hipótese, autoria, relação entre direção humana e assistência por IA, estado atual, construção pública, piloto, critérios de transferibilidade, visão futura e compromisso público, sem repetir integralmente a homepage, sem transformar-se em página de venda e sem funcionar como catálogo completo de métodos.

Este documento é apenas o plano de execução. A Sprint 2 não é implementada por sua criação.

## 2. Baseline conhecido ao elaborar o plano

| Campo | Estado observado |
|---|---|
| Data | 2026-07-22 |
| Timezone | Europe/Berlin |
| Branch | `refactor/homepage-v0.2.0` |
| HEAD | `fce173295dd6e6c5023c351008201cfa45b16c5e` |
| Commit | `sprint1 com decisao humana` |
| Worktree rastreada | Limpa no momento da inspeção |
| Sprint 0 | Editorialmente encerrada |
| Decisões humanas | Dez decisões congeladas em `decisoes humanas.md` |
| Sprint 1 | Concluída e documentada |
| Rota `/lab` | Mapeada por `V3-MAP-LAB-001–008` |
| Implementação atual | `SitePage` + `LabOverviewSection` + `LabConstructionSection` |
| First Load JS de referência | 94,3 kB no build da Sprint 1 |

O gate documental está apto no estado observado. Ele deverá ser reavaliado no início da execução porque branch, commit e worktree podem mudar após a aprovação deste plano.

## 3. Documentos obrigatórios

Antes de editar implementação, ler integralmente e registrar no relatório da Sprint 2:

1. `docs/sprints para v3/Sprint 0 - Contrato Editorial e Mapa de Preservacao e Migracao.md`;
2. `docs/sprints para v3/decisoes humanas.md`;
3. `docs/sprints para v3/Sprint 1 - Homepage.md`;
4. `docs/sprints para v3/sprint 2.md`;
5. `docs/sprints para v3/resultado auditoria narrativa site v3.md`, apenas nos trechos relacionados a `/lab` e claims institucionais.

IDs e claims prioritários:

- `V3-MAP-LAB-001–008`;
- `V3-MAP-INV-003–004`;
- `V3-MAP-METHOD-001–006` apenas para sínteses e destinos;
- `V3-MAP-CASE-001–003` para HORA.city;
- `V3-MAP-GLOBAL-007` para guardrails;
- `CL-001`, `CL-004–012`, `CL-016`, `CL-017` e `CL-019`;
- decisões humanas 1, 3, 4, 5, 7, 8, 9 e 10.

## 4. Gate de entrada

### 4.1 Verificações documentais

- confirmar que Sprint 0 e Sprint 1 continuam concluídas;
- confirmar que as dez decisões humanas permanecem congeladas e não bloqueadoras;
- confirmar que a tese, o público prioritário e a taxonomia de claims não foram alterados depois do commit baseline;
- confirmar que `/lab` continua mapeada e que o documento da Sprint 1 não registra pendência bloqueadora para `/lab`;
- atribuir qualquer mudança preexistente no worktree antes de iniciar a Sprint 2.

### 4.2 Baseline técnico

Registrar branch, HEAD, `git status`, Node.js, npm e Next.js. Executar, sequencialmente:

```powershell
npm.cmd run lint
npx.cmd tsc --noEmit
npm.cmd run build
npm.cmd run verify:foundation
npm.cmd run verify:ai-readiness
npm.cmd run verify:homepage
```

Não executar builds concorrentes sobre `.next`.

### 4.3 Baseline visual e de conteúdo

- capturar `/lab` antes da alteração em 320, 375, 768, 1024 e 1440 px;
- guardar ordem de seções, headings, CTAs, metadata, JSON-LD, IDs, densidade e First Load JS;
- medir `innerWidth`, `clientWidth` e `scrollWidth` em navegador real;
- registrar a ordem atual dos IDs:
  `lab`, `sobre`, `origin`, `mission`, `principle`, `vision`, `how-the-lab-works`, `founder`, `lab-construction`, `human-ai`, `pilot`, `long-term-vision`, `public-commitment`;
- verificar a compatibilidade permanente `/about → /lab#sobre`.

### 4.4 Condições de bloqueio

Interromper sem editar implementação se:

- algum documento obrigatório estiver ausente ou contraditório;
- o baseline falhar por regressão não atribuída;
- houver mudança não documentada na tese, público ou estatuto dos claims;
- `HUM-001`, `HUM-002`, `HUM-007` ou `HUM-008` tiver sido reaberta;
- o estado real do piloto exigir uma decisão humana nova;
- artefatos ou resultados forem reivindicados sem fonte local identificável.

Registrar o bloqueio no documento `Sprint 2 - LAB.md`; não corrigir problemas externos ao escopo.

## 5. Inventário de evidências antes da redação

Criar uma matriz interna com as colunas:

| Item | Fonte canônica | Estado verificável | Classe do claim | Pode aparecer como existente? | Observação |
|---|---|---|---|---|---|

Inventariar no mínimo:

- site institucional e suas rotas;
- curso publicado e destino real;
- USMT;
- Payload Journey;
- Reverse Payload Journey;
- Operational Payload Path;
- Track to Origin;
- protocolo Congelar, Mapear, Detectar e Restaurar;
- HORA.city;
- LabLog e canal atualmente configurado;
- código, publicações e documentos de investigação efetivamente localizados.

Durante a elaboração deste plano, `Case Brief`, `Checkpoint Plan`, `Freeze Record`, `Detection Report`, `Trace Evidence Record`, `Trace Evidence Package` e `USMT Evidence-Aligned` foram encontrados como termos em documentação, mas não como ficheiros canônicos claramente identificáveis no inventário do repositório. Na execução:

- repetir a busca no baseline atual;
- não apresentá-los como disponíveis ou concluídos apenas porque são mencionados;
- classificá-los como “em construção” ou omiti-los caso não exista artefato verificável;
- registrar a fonte e a justificativa de cada status publicado.

## 6. Arquitetura narrativa planejada

Usar aproximadamente quinze etapas narrativas, agrupadas em sete ou oito componentes server-first para controlar densidade.

### Bloco A — Identidade, missão e origem

1. **Hero institucional**
   - eyebrow `PAYLOAD JOURNEY LAB`;
   - H1 `Um laboratório para investigar como sistemas realmente funcionam`;
   - definição canônica explícita do LAB;
   - origem localizada, sem dramatização;
   - CTA primário `/method` e secundário `/cases`;
   - nenhuma Udemy no Hero.

2. **Missão e hipótese**
   - público prioritário;
   - capacidade investigada;
   - tese institucional sobre aceleração por IA;
   - benefícios sempre condicionais e ainda em avaliação.

3. **Origem**
   - experiência real e localizada;
   - crescimento da codebase e perda parcial de explicabilidade;
   - leitura fragmentada insuficiente para reconstruir determinados flows;
   - sem alegar colapso total ou incompreensibilidade universal.

### Bloco B — Resposta metodológica

4. **Do problema aos métodos**
   - síntese compacta, orientada a perguntas;
   - Payload Journey, USMT, Reverse Payload Journey, Operational Payload Path, Track to Origin, protocolo e evidências;
   - Software System Investigation e Trace Engineer com estatuto correto;
   - CTA `/method`;
   - nenhum aprofundamento que duplique as páginas canônicas.

### Bloco C — Autoria e autoridade

5. **Direção humana · assistência por IA**
   - preservar os dois textos obrigatórios;
   - incluir o princípio “A IA deve ampliar...”;
   - descrever IA como assessoria, interlocução, exploração e documentação;
   - reservar perguntas, critérios, autoria e conclusões à responsabilidade humana.

6. **Fundadora**
   - nome, autoria do LAB e USMT, relação com HORA.city e direção metodológica/pedagógica;
   - percurso como engenheira em formação;
   - experiência pessoal apresentada como relato localizado;
   - condensar a biografia e remover promessa de autonomia rápida ou profissão consolidada.

### Bloco D — Estado presente e construção

7. **O que já existe**
   - inventário somente de elementos confirmados;
   - status textual por item: disponível, publicado, documentado, em aplicação ou em investigação;
   - HORA.city como caso real em andamento, não validação geral.

8. **O que está sendo construído**
   - definições, protocolo, instrumentos, casos completos, evidências, formação e transferência;
   - status: em construção, evidência parcial ou ainda não validado;
   - capacidade transferível como objetivo, nunca resultado atual.

### Bloco E — Piloto e critérios

9. **Horizonte inicial**
   - preservar `id="pilot"`;
   - seis meses como horizonte institucional, sem datas inventadas ou countdown;
   - explicar que o objetivo é produzir evidências, não declarar disciplina consolidada.

10. **Seis compromissos**
    - Definir, Formalizar, Aplicar, Evidenciar, Ensinar e Transferir;
    - preservar os textos aprovados;
    - acrescentar status textual real a cada compromisso;
    - não confundir compromisso com conclusão.

11. **O verdadeiro teste do piloto**
    - bloco de destaque;
    - separar “evidência inicial de transferibilidade” de “piloto de capacidade transferível”;
    - uma pessoa/uma investigação para evidência inicial;
    - duas pessoas externas/duas investigações para piloto;
    - registrar nível de assistência e exigir evidências revisáveis;
    - declarar explicitamente que os critérios ainda não foram atingidos, salvo evidência nova validada antes da execução.

### Bloco F — Perfil e futuro

12. **Trace Engineer**
    - definição humana aprovada;
    - competências em desenvolvimento;
    - ressalvas explícitas: não é profissão consolidada, cargo reconhecido ou certificação;
    - CTA `/investigation`.

13. **Visão de longo prazo**
    - ambição e direção, não resultados;
    - formação, casos verificáveis, colaboração e requirements-to-runtime traceability;
    - evitar “formar Trace Engineers” como capacidade já comprovada.

14. **Sistemas distribuídos e mission-critical**
    - subseção curta;
    - status visual obrigatório `Direção futura de pesquisa e formação`;
    - nenhuma competência, serviço, especialização ou aplicação validada.

### Bloco G — Compromisso e continuidade

15. **Compromisso público**
    - título `Compreender antes de modificar`;
    - rigor, hipótese versus evidência, não ampliação de fatos e rastreabilidade das conclusões;
    - preservar a frase final aprovada.

16. **Continue explorando o LAB**
    - destinos distintos: `/payload-journey`, `/method`, `/investigation`, `/cases` e `/learn`;
    - labels específicos para a intenção de cada rota;
    - sem CTA genérico ou comercial dominante.

## 7. Compatibilidade de âncoras

Preservar obrigatoriamente:

- `id="pilot"`;
- `id="sobre"`, porque `/about` redireciona permanentemente para `/lab#sobre`;
- `id="founder"`, usado como identificador da fundadora no JSON-LD;
- IDs únicos e ordem coerente de headings.

Para os demais IDs atuais, criar um mapa antes/depois. Manter o ID no conteúdo equivalente sempre que possível. Qualquer remoção exige:

- ID do mapa de preservação;
- motivo;
- destino equivalente;
- verificação de links internos e externos conhecidos.

## 8. Estratégia de conteúdo e tipagem

### 8.1 Fonte de conteúdo

Manter `content/payload-journey-lab.ts` como fonte estruturada, mas reorganizar `siteContent.lab` para distinguir claramente:

- fato documental;
- relato de origem;
- hipótese investigativa;
- estado atual;
- item em construção;
- compromisso;
- ambição futura;
- CTA e âncora.

Não hardcodear grandes parágrafos nos componentes.

### 8.2 Tipos

Revisar `LabPresentation` e tipos auxiliares para suportar:

- `status` visível;
- `claimKind` ou estrutura equivalente;
- itens de inventário com fonte/estado;
- seis compromissos com estado;
- dois níveis de critério de transferibilidade;
- subseção futura explicitamente marcada;
- CTAs internos tipados.

Evitar uma tipagem genérica tão ampla que permita trocar fatos e ambições sem erro estrutural.

### 8.3 PT-BR

Corrigir somente os textos alterados de `/lab`, incluindo ocorrências atuais como `objectivo`, `objecto`, `seleccionar`, `detectar`, `actuação`, `arquitectura`, `equipas` e `direcção`.

Não iniciar normalização linguística global.

## 9. Estratégia de componentes

Preferência de implementação:

- composição específica para `/lab`, ainda server-first;
- reutilizar `Section`, `SectionHeader`, `Card`, `HighlightPanel`, `Badge`, `Button`, `TechnicalLabel`, `PageContinuation`, `SiteHeader`, `SiteFooter` e `JsonLd`;
- dividir os atuais `LabOverviewSection` e `LabConstructionSection` em componentes por responsabilidade narrativa, sem criar um componente para cada heading;
- não introduzir Client Components, dependências, animações ou imagens novas sem necessidade confirmada;
- usar listas semânticas para métodos, inventário, compromissos e competências;
- comunicar status com texto e não apenas por cor.

Composição candidata:

1. `LabHeroSection`;
2. `LabMissionOriginSection`;
3. `LabMethodsBridgeSection`;
4. `LabHumanDirectionFounderSection`;
5. `LabCurrentStateSection`;
6. `LabPilotSection`;
7. `LabTraceVisionSection`;
8. `LabPublicCommitmentSection`.

Os nomes finais podem variar; a responsabilidade e a ordem não.

## 10. Rota, metadata e dados estruturados

### 10.1 Rota

Atualizar `app/lab/page.tsx` sem alterar editorialmente outras rotas. Se `SitePage` não suportar Hero com dois CTAs e narrativa própria sem generalizações, preferir composição específica da rota em vez de expandir o contrato partilhado para todos os temas.

### 10.2 Metadata

Definir em `thematicRoutes.lab`:

- novo H1/título institucional;
- descrição pública prudente;
- `metadataDescription` recomendada pela Sprint 2;
- canonical `/lab`;
- Open Graph e Twitter coerentes.

### 10.3 JSON-LD

Preservar:

- `WebSite`;
- `WebPage` de `/lab`;
- `Person` para a fundadora;
- `@id` da fundadora em `/lab#founder`;
- ausência de `Organization` enquanto esse estatuto não estiver aprovado.

Garantir que JSON-LD e metadata compartilhem título e descrição sem claims adicionais.

## 11. Claims a reformular

Criar uma tabela antes/depois no relatório para, no mínimo:

| Claim atual de risco | Tratamento planejado |
|---|---|
| “Trace Engineers: profissionais...” | Função e perfil investigativo em desenvolvimento; não profissão reconhecida. |
| “conquistar autonomia mais rapidamente” | Hipótese de autonomia progressiva, ainda não demonstrada. |
| formação tradicional “já não é suficiente” | Capacidade complementar que o LAB pretende investigar. |
| “mais preparados estarão” | O LAB investiga se começar mais cedo pode contribuir. |
| IA torna investigação “mais produtiva” | IA apoia exploração, documentação e confronto de hipóteses; sem métrica de produtividade. |
| “método reproduzível” e capacidade de formar | Objetivos avaliados pelo piloto, não estados atuais. |
| uma repetição gera “capacidade transferível” | Uma repetição documentada gera apenas evidência inicial. |
| “Formar Trace Engineers” | Ambição futura de ensinar capacidades do perfil. |
| sistemas distribuídos e mission-critical | Direção futura ainda não demonstrada. |
| “recuperar autoridade” | Compromisso e objetivo pedagógico, não resultado garantido. |

Proibir explicitamente no verificador:

- profissão consolidada;
- cargo reconhecido;
- certificação oficial;
- piloto concluído sem evidência;
- método externamente reproduzível como fato;
- capacidade transferível já existente;
- eficácia educacional, produtividade, onboarding ou autonomia garantidos;
- competência ou serviço mission-critical atual.

## 12. Guardrails automatizados

### 12.1 Verificador específico

Criar `scripts/verify-lab.mjs` e o script npm `verify:lab`, preferencialmente reaproveitando o padrão dos verificadores atuais sem adicionar dependência.

Proteger por conceitos e estrutura, não por parágrafos completos:

- um H1 e H1 institucional aprovado;
- definição canônica do LAB;
- tese/hipótese e público;
- origem localizada;
- IA como assistência e autoridade humana;
- fundadora, autoria do LAB e da USMT;
- separação “já existe” versus “em construção”;
- `id="sobre"`, `id="founder"` e `id="pilot"`;
- seis compromissos, uma única vez e na ordem;
- critérios 1×1 e 2×2 de transferibilidade;
- Trace Engineer como função em desenvolvimento;
- mission-critical com status futuro;
- compromisso público;
- cinco destinos de continuidade;
- ausência de Udemy no Hero;
- IDs únicos, H1 único, headings coerentes e links válidos;
- claims proibidos.

### 12.2 Verificadores existentes

Atualizar `verify-homepage.mjs` e `verify-ai-readiness.mjs` para:

- substituir strings antigas de `/lab` por invariantes da Sprint 2;
- preservar as outras dez rotas sem reformulação editorial;
- manter `/about → /lab#sobre`;
- manter Person/USMT/URLs canônicos;
- não duplicar toda a lógica do novo `verify:lab`.

## 13. Controle de densidade e design

- evitar sequência contínua de cards;
- reservar cards para métodos, inventário, compromissos e competências;
- usar prosa curta para missão, origem, IA, fundadora e compromisso;
- alternar fundos existentes, sem criar linguagem visual nova;
- usar no máximo um bloco visual forte por grande etapa;
- manter largura de leitura confortável para a fundadora;
- condensar métodos em pergunta/resposta e remeter a `/method`;
- condensar formação e remeter a `/learn`;
- não repetir a homepage palavra por palavra;
- não adicionar imagens ou vídeos sem função e fonte aprovadas.

## 14. Sequência de implementação

1. Executar e documentar o gate de entrada.
2. Capturar baseline técnico, editorial e visual de `/lab`.
3. Construir inventário de evidências e status reais.
4. Produzir mapa antes/depois por `V3-MAP-LAB-001–008`.
5. Congelar nova ordem, CTAs, âncoras e matriz de claims.
6. Refatorar tipos e conteúdo estruturado.
7. Implementar os componentes server-first.
8. Compor `/lab`, metadata e JSON-LD.
9. Atualizar verificadores existentes e criar `verify:lab`.
10. Executar checagens rápidas de TypeScript e links durante o trabalho.
11. Executar a sequência final completa sem concorrência.
12. Validar visualmente nas cinco larguras e por teclado.
13. Auditar diff, rotas não autorizadas, dependências e Client Components.
14. Preencher `docs/sprints para v3/Sprint 2 - LAB.md`.
15. Apresentar o resumo final e aguardar aprovação humana.

## 15. Validação final

### 15.1 Técnica

Executar exatamente nesta ordem:

```powershell
npm.cmd run lint
npx.cmd tsc --noEmit
npm.cmd run build
npm.cmd run verify:foundation
npm.cmd run verify:ai-readiness
npm.cmd run verify:homepage
npm.cmd run verify:lab
```

Registrar saída, duração, warnings, falhas e correções. Os warnings preexistentes de cache do Webpack devem ser registrados, não corrigidos fora do escopo.

### 15.2 Evidências separadas

Classificar no relatório:

- **fonte:** diff, conteúdo, tipos e verificadores;
- **conteúdo renderizado:** HTML servido e inspecionado;
- **build:** compilação e prerenderização estática;
- **execução observada:** navegador real, DOM, teclado e layout;
- **produção:** somente se houver deploy e observação pública.

Build e renderização estática não devem ser tratados como evidência de comportamento runtime.

### 15.3 Visual e responsiva

Validar 320, 375, 768, 1024 e 1440 px com métricas reais de dispositivo:

- `scrollWidth === clientWidth`;
- primeiro viewport e dois CTAs do Hero;
- ordem e legibilidade de missão/origem;
- densidade da ponte metodológica;
- equilíbrio entre IA e fundadora;
- status do inventário;
- localização de `#pilot`;
- seis compromissos e teste do piloto;
- Trace Engineer e ressalvas;
- visão futura e status mission-critical;
- compromisso público e continuidade;
- cards sem altura artificial;
- foco visível, menu, links e ordem de teclado.

### 15.4 Performance

- comparar First Load JS antes/depois;
- objetivo: nenhuma nova boundary client e nenhum aumento material por JavaScript de interação;
- registrar qualquer variação, mesmo que pequena;
- confirmar ausência de novas dependências, vídeo automático, animação pesada ou imagem não otimizada.

## 16. Auditoria de escopo

Ao final, comprovar:

- apenas `/lab`, seus dados, tipos, metadata, JSON-LD, verificadores e documentação foram alterados;
- qualquer microajuste partilhado foi estritamente necessário e não mudou editorialmente outra rota;
- homepage permaneceu conforme a Sprint 1;
- nenhuma nova rota de método foi criada;
- Udemy não entrou no Hero institucional;
- YouTube e colaboração não foram resolvidos antecipadamente;
- nenhuma mudança da Sprint 3 foi iniciada;
- nenhum warning técnico preexistente foi corrigido fora do escopo.

Usar `git diff --check`, `git diff --name-only`, comparação de HTML das rotas e auditoria de links para sustentar a conclusão.

## 17. Documento obrigatório da execução

Durante a implementação, criar e manter:

`docs/sprints para v3/Sprint 2 - LAB.md`

O documento deverá conter:

- baseline, branch, commits e worktree;
- documentos lidos e gate;
- IDs do mapa e decisões humanas;
- arquitetura anterior e final;
- inventário de evidências;
- conteúdos preservados, movidos, condensados e reformulados;
- claims antes/depois e classificação;
- CTAs, âncoras, metadata e JSON-LD;
- ficheiros alterados, risco e validação;
- gates técnicos;
- validação visual;
- impacto em First Load JS;
- warnings e limitações;
- decisões futuras;
- confirmação de escopo e de que a Sprint 3 não começou.

## 18. Critérios de aceite

A execução estará pronta para aprovação humana quando:

- `/lab` responder às quatorze perguntas institucionais da especificação;
- definição, missão, hipótese, origem, IA e autoria estiverem claras;
- estado atual e construção futura estiverem separados por status verificável;
- seis compromissos e critérios de transferibilidade estiverem preservados;
- Trace Engineer estiver classificado como função/perfil em desenvolvimento;
- sistemas distribuídos e mission-critical aparecerem somente como futuro;
- compromisso público e continuidade estiverem presentes;
- `#sobre`, `#founder` e `#pilot` funcionarem;
- densidade tiver sido reduzida sem perda autoral não documentada;
- metadata e JSON-LD estiverem alinhados;
- todos os sete gates finais passarem;
- responsividade, acessibilidade e performance estiverem registradas;
- nenhuma rota fora do escopo tiver sido refatorada editorialmente;
- `Sprint 2 - LAB.md` estiver completo.

## 19. Entrega e parada obrigatória

Após a implementação aprovada deste plano, apresentar somente o resumo definido em `sprint 2.md`, finalizar com:

`Sprint 2 concluída. Aguardando aprovação humana antes da Sprint 3.`

Não iniciar a Sprint 3 sem aprovação humana explícita.
