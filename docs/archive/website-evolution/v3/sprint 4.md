# Sprint 4 — Método e Prática Investigativa

Execute a Sprint 4 do Refactor Narrativo V3 do Payload Journey LAB.

Esta sprint deve consolidar a arquitetura metodológica e operacional do site, com foco principal nas rotas:

* `/method`;
* `/protocol`;
* `/investigation`.

O objetivo é estabelecer definições canônicas, relações claras entre os instrumentos, limites de aplicação, procedimento investigativo e estatuto correto de Software System Investigation, Trace Engineering e Trace Engineer.

A Sprint 4 não deve criar novas rotas para métodos individuais.

# Gate obrigatório

Antes de qualquer alteração, leia integralmente:

* `docs/sprints para v3/Sprint 0 - Contrato Editorial e Mapa de Preservacao e Migracao.md`;
* `docs/sprints para v3/decisoes humanas.md`;
* `docs/sprints para v3/Sprint 1 - Homepage.md`;
* `docs/sprints para v3/Sprint 2 - LAB.md`;
* `docs/sprints para v3/Sprint 3 - Formacao e Progressao Pedagogica.md`;
* a especificação aprovada da Sprint 4, se já existir em `docs/sprints para v3`.

Não implemente a Sprint 4 se:

* a Sprint 3 não estiver concluída e aprovada;
* o documento da Sprint 3 não existir;
* houver mudanças não documentadas na tese, nos públicos, nas definições canônicas ou na taxonomia de claims;
* os IDs correspondentes a `/method`, `/protocol` e `/investigation` não estiverem presentes no Mapa de Preservação e Migração;
* ou existirem alterações no worktree cuja origem não possa ser atribuída.

Nesse caso, registre o bloqueio e não altere arquivos.

# Documento obrigatório

Crie:

`docs/sprints para v3/Sprint 4 - Metodo e Pratica Investigativa.md`

O documento deve registrar:

* baseline;
* branch e commits;
* documentos lidos;
* IDs do Mapa de Preservação e Migração;
* arquitetura anterior de cada rota;
* arquitetura final;
* definições canônicas;
* conteúdos preservados;
* conteúdos condensados;
* conteúdos movidos;
* claims reformulados;
* relações entre métodos;
* limites de aplicação;
* CTAs;
* metadata;
* arquivos alterados;
* verificações;
* limitações;
* decisões futuras.

# Objetivo da Sprint 4

Ao final, um visitante deve conseguir responder:

1. O que é Payload Journey?
2. O que é Payload Tracing?
3. O que é Software System Investigation?
4. O que é Trace Engineering?
5. O que significa exercer a função de Trace Engineer?
6. Qual é a diferença entre método, instrumento, prática, protocolo e evidência?
7. Que pergunta cada instrumento responde?
8. Quando cada instrumento deve ser utilizado?
9. Como os instrumentos se conectam numa investigação?
10. Como funciona o protocolo Congelar, Mapear, Detectar e Restaurar?
11. Que evidências são produzidas em cada etapa?
12. Como tracing se relaciona com arquitetura, debugging, testes e observabilidade?
13. Quais são os limites atuais do LAB?
14. O que ainda é direção futura?

# Escopo autorizado

A Sprint 4 pode alterar editorialmente:

* `/method`;
* `/protocol`;
* `/investigation`.

Pode realizar microajustes necessários em:

* conteúdo estruturado;
* tipos;
* componentes compartilhados;
* metadata;
* JSON-LD;
* links e CTAs;
* verificadores;
* documentação.

As rotas:

* `/payload-journey`;
* `/usmt`;

devem ser tratadas como páginas profundas canônicas já existentes.

A Sprint 4 pode ajustar links, títulos de continuidade ou pequenas definições nessas rotas somente quando necessário para manter coerência terminológica.

Não realizar refactor editorial amplo de `/payload-journey` ou `/usmt`.

# Fora de escopo

Não:

* criar páginas individuais para Reverse Payload Journey;
* criar página individual para Operational Payload Path;
* criar página individual para Track to Origin;
* criar página exclusiva para Trace Engineer;
* alterar a homepage;
* alterar editorialmente `/lab`;
* alterar editorialmente `/learn`;
* refatorar `/cases` ou `/lablog`;
* criar certificação;
* apresentar Trace Engineer como profissão consolidada;
* criar novos serviços comerciais;
* declarar aplicação mission-critical;
* introduzir novas dependências;
* realizar redesign global.

# Contrato conceitual obrigatório

A Sprint 4 deve preservar e materializar as seguintes definições.

## Payload Journey

`Payload Journey é o acompanhamento de uma operação através das representações, camadas, interpretações, decisões, estados e efeitos que compõem sua execução.`

## Payload Tracing

`Payload Tracing é a prática de acompanhar um payload e suas transformações para reconstruir o flow e a causalidade de uma operação.`

## Software System Investigation

`Software System Investigation é a prática estruturada de compreender sistemas por meio de modelagem, tracing, checkpoints, runtime e evidências.`

## Trace Engineering

`Trace Engineering é o conjunto de capacidades utilizadas para seguir operações, localizar decisões, confrontar modelo e execução e produzir explicações verificáveis.`

## Trace Engineer

`Trace Engineer é a função investigativa exercida por quem segue operações, payloads, transformações e decisões para compreender e explicar o comportamento de um sistema com base em evidências.`

Deixar explícito que Trace Engineer:

* é uma função;
* é um perfil investigativo em desenvolvimento;
* não é profissão consolidada;
* não é cargo reconhecido;
* não é certificação oficial;
* não representa competência já validada externamente pelo LAB.

## USMT

`A USMT é o instrumento utilizado para explicitar o modelo esperado de estados, eventos, transições, regras, invariantes e limites de um sistema.`

## Operational Payload Path

`O Operational Payload Path representa o caminho operacional provável ou confirmado percorrido por um payload entre componentes e camadas.`

## Reverse Payload Journey

`Reverse Payload Journey é a investigação que parte de uma anomalia ou efeito observado e percorre o flow em direção à sua origem causal.`

## Track to Origin

`Track to Origin é a prática de continuar o tracing até localizar a origem e a autoridade da decisão investigada.`

## Protocolo

`Congelar, Mapear, Detectar e Restaurar é o protocolo geral utilizado para preservar o comportamento observado, reconstruir o flow, localizar divergências e validar uma restauração.`

# Taxonomia metodológica

A Sprint 4 deve diferenciar explicitamente:

## Prática

Software System Investigation.

É o campo de ação no qual o sistema é investigado.

## Capacidades

Trace Engineering.

São as capacidades empregadas durante a investigação.

## Função investigativa

Trace Engineer.

É quem exerce essas capacidades.

## Instrumentos

* Payload Journey;
* USMT;
* Reverse Payload Journey;
* Operational Payload Path;
* Track to Origin;
* checkpoints;
* documentos de evidência.

Cada instrumento responde a uma pergunta específica.

## Protocolo

Congelar, Mapear, Detectar e Restaurar.

Define a sequência geral da investigação.

## Evidência

Logs, snapshots, payloads observados, checkpoints, respostas, estados, documentos, commits e outros registros que sustentam ou refutam uma hipótese.

Essa distinção deve aparecer de forma coerente entre `/method`, `/protocol` e `/investigation`.

# Arquitetura de `/method`

## Papel da página

`/method` deve funcionar como o mapa canônico dos instrumentos do LAB.

Deve responder:

* que instrumentos existem;
* que pergunta cada um responde;
* que entrada utiliza;
* que resultado produz;
* quando é útil;
* como se conecta aos demais;
* quais são seus limites.

## 1. Hero

Eyebrow:

`MÉTODOS DO LAB`

H1 recomendado:

`Instrumentos diferentes para perguntas diferentes`

Texto recomendado:

`O Payload Journey LAB não utiliza um único método para todas as situações. Cada instrumento reduz uma parte diferente da incerteza: o modelo esperado, o caminho da operação, a origem da anomalia, a autoridade da decisão ou a evidência necessária.`

CTA principal:

`Conhecer o protocolo`

→ `/protocol`

CTA secundário:

`Ver a prática investigativa`

→ `/investigation`

## 2. Mapa dos instrumentos

Para cada instrumento, apresentar:

* definição canônica;
* pergunta principal;
* ponto de partida;
* resultado esperado;
* momento de uso;
* relação com os outros instrumentos;
* status real.

### Payload Journey

Pergunta:

`Por onde a operação passa e como suas representações mudam?`

Ponto de partida:

Uma operação concreta.

Resultado:

Mapa progressivo do flow.

Página canônica:

`/payload-journey`

### USMT

Pergunta:

`O que deveria acontecer para que o sistema permaneça válido?`

Ponto de partida:

Comportamento esperado, domínio ou especificação.

Resultado:

Modelo explícito de estados, eventos, transições, regras, invariantes e limites.

Página canônica:

`/usmt`

### Reverse Payload Journey

Pergunta:

`De onde veio a anomalia observada?`

Ponto de partida:

Sintoma, divergência, estado inesperado ou campo incorreto.

Resultado:

Caminho causal reconstruído em direção à origem.

Status:

Instrumento documentado dentro do ecossistema atual, sem nova rota própria.

### Operational Payload Path

Pergunta:

`Qual é o caminho operacional provável ou confirmado desta operação?`

Ponto de partida:

Flow selecionado e codebase real.

Resultado:

Representação dos componentes, camadas, operações e checkpoints.

Status:

Instrumento documentado, sem nova rota própria nesta sprint.

### Track to Origin

Pergunta:

`Onde nasce a decisão e quem possui autoridade sobre ela?`

Ponto de partida:

Payload, decisão, transformação ou divergência.

Resultado:

Origem causal e autoridade identificadas.

Status:

Prática investigativa em desenvolvimento.

### Checkpoints

Pergunta:

`Que evidência deve ser capturada para confirmar ou refutar a hipótese?`

Ponto de partida:

Pontos relevantes do Operational Payload Path.

Resultado:

Observações comparáveis entre camadas e momentos.

### Documentos de investigação

Pergunta:

`Como preservar, confrontar e comunicar o que foi observado?`

Resultado:

Registros, planos, relatórios e pacotes de evidência.

Somente apresentar como disponíveis os documentos realmente localizados.

## 3. Relação entre os instrumentos

Apresentar uma sequência possível, sem tratá-la como única:

`USMT`

→ define o esperado

`Payload Journey`

→ segue a operação

`Operational Payload Path`

→ organiza o caminho

`Checkpoints`

→ capturam evidências

`Reverse Payload Journey`

→ percorre a divergência

`Track to Origin`

→ localiza origem e autoridade

`Protocolo`

→ organiza a investigação completa

Deixar claro que a ordem pode variar conforme o caso.

## 4. Limites

A página deve dizer que:

* os instrumentos não compreendem o sistema automaticamente;
* um mapa inicial pode estar errado;
* um checkpoint pode observar apenas parte do comportamento;
* runtime pode contradizer a documentação;
* uma hipótese precisa ser confrontada;
* tracing não substitui domínio, arquitetura ou testes;
* um caso não demonstra eficácia universal.

## 5. Próxima ação

CTAs:

* `Começar pelo Payload Journey` → `/payload-journey`;
* `Modelar com a USMT` → `/usmt`;
* `Executar o protocolo` → `/protocol`;
* `Ver o caso aplicado` → `/cases`.

# Arquitetura de `/protocol`

## Papel da página

`/protocol` deve explicar como uma investigação é conduzida e validada.

Não deve funcionar como um conjunto de regras universais ou como certificação de processo.

## 1. Hero

Eyebrow:

`PROTOCOLO GERAL`

H1 recomendado:

`Congelar. Mapear. Detectar. Restaurar.`

Texto:

`O protocolo organiza uma investigação para evitar que o sistema seja modificado antes de o comportamento observado, o caminho operacional e as evidências necessárias terem sido preservados.`

CTA principal:

`Ver os métodos`

→ `/method`

CTA secundário:

`Ver um caso`

→ `/cases`

## 2. Entradas mínimas

Antes de iniciar:

* sistema ou codebase acessível;
* flow delimitado;
* comportamento observado;
* comportamento esperado ou pergunta investigativa;
* ambiente de execução;
* possibilidade de registrar evidências.

Não declarar que todos os casos exigem o mesmo conjunto de entradas.

## 3. Fase 1 — Congelar

Objetivo:

Preservar o estado investigável antes de mudanças.

Atividades:

* delimitar o caso;
* registrar comportamento observado;
* identificar versão, branch, commit e ambiente;
* preservar payloads, respostas e estados;
* impedir correções prematuras;
* formular hipóteses iniciais sem tratá-las como conclusão.

Evidências possíveis:

* Case Brief;
* Freeze Record;
* screenshot;
* log;
* payload;
* commit;
* ambiente;
* versão.

Resultado:

Comportamento e contexto preservados.

Critério de saída:

Outro investigador consegue reconhecer o que está sendo investigado.

## 4. Fase 2 — Mapear

Objetivo:

Reconstruir o caminho provável ou confirmado da operação.

Atividades:

* identificar origem causal;
* localizar componentes;
* reconhecer payloads;
* mapear camadas;
* localizar transformações;
* identificar decisões e estados;
* elaborar Operational Payload Path;
* planejar checkpoints.

Evidências possíveis:

* code references;
* OPP;
* Checkpoint Plan;
* diagramas;
* payload schemas;
* chamadas;
* eventos.

Resultado:

Mapa operacional confrontável.

Critério de saída:

Existe uma hipótese de flow suficientemente precisa para ser testada.

## 5. Fase 3 — Detectar

Objetivo:

Confrontar modelo, hipótese e runtime.

Atividades:

* instrumentar checkpoints;
* executar o flow;
* comparar representações;
* verificar invariantes;
* localizar primeiro ponto de divergência;
* seguir causalidade;
* identificar autoridade;
* revisar hipóteses.

Evidências possíveis:

* logs estruturados;
* traces;
* snapshots;
* payloads;
* estados persistidos;
* respostas;
* Trace Evidence Records;
* Detection Report.

Resultado:

Divergência localizada ou comportamento explicado.

Critério de saída:

A conclusão possui evidência suficiente para justificar ou rejeitar uma intervenção.

## 6. Fase 4 — Restaurar

Objetivo:

Modificar o sistema de maneira causalmente justificada e validar o resultado.

Atividades:

* definir restauração mínima;
* preservar invariantes;
* implementar mudança;
* repetir checkpoints;
* comparar antes e depois;
* verificar efeitos colaterais;
* atualizar modelo e documentação.

Evidências possíveis:

* diff;
* testes;
* logs;
* nova execução;
* comparação;
* pacote de evidência;
* USMT Evidence-Aligned.

Resultado:

Coerência restaurada ou nova hipótese necessária.

Critério de saída:

O comportamento restaurado foi confrontado com o esperado e documentado.

## 7. Iteração

Deixar explícito que o protocolo pode retornar:

* de Detectar para Mapear;
* de Restaurar para Detectar;
* de Mapear para Congelar quando o caso estava mal delimitado.

Não apresentar o protocolo como fluxo linear rígido.

## 8. Artefatos e estados reais

Inventariar os artefatos existentes.

Classificar cada um como:

* disponível;
* documentado;
* template;
* em uso;
* em construção;
* não localizado.

Não apresentar como disponível um documento apenas mencionado.

## 9. Limites do protocolo

O protocolo:

* não substitui testes;
* não substitui revisão de código;
* não substitui observabilidade;
* não elimina julgamento humano;
* não garante causa raiz em qualquer investigação;
* não impede toda regressão;
* não é norma certificada;
* ainda está sendo confrontado com casos e uso externo.

## 10. Continuidade

CTAs:

* `/method`;
* `/investigation`;
* `/cases`;
* `/learn`.

# Arquitetura de `/investigation`

## Papel da página

`/investigation` deve definir a prática de Software System Investigation e o perfil de capacidades associado a Trace Engineering.

Não deve funcionar como página de carreira ou vaga profissional.

## 1. Hero

Eyebrow:

`SOFTWARE SYSTEM INVESTIGATION`

H1 recomendado:

`Compreender antes de modificar`

Texto:

`Software System Investigation é a prática estruturada de compreender sistemas por meio de modelagem, tracing, checkpoints, runtime e evidências.`

`Ela começa por uma pergunta, delimita uma operação e reconstrói como o sistema transforma intenção ou ocorrência em decisão, estado e efeito observável.`

CTA principal:

`Conhecer o protocolo`

→ `/protocol`

CTA secundário:

`Ver os métodos`

→ `/method`

Não utilizar CTA comercial no hero.

## 2. O que caracteriza uma investigação

Uma investigação:

* começa com pergunta ou anomalia delimitada;
* distingue observado de esperado;
* registra contexto;
* formula hipóteses;
* segue causalidade;
* produz evidências;
* identifica autoridade;
* reconhece incerteza;
* documenta conclusões;
* valida intervenções.

## 3. Track Mode

Definir Track Mode como postura operacional:

* observar antes de modificar;
* reduzir o recorte;
* seguir uma operação;
* não preencher lacunas com suposição;
* preservar evidências;
* continuar até localizar origem e autoridade.

Não apresentar Track Mode como ferramenta de software ou produto separado.

## 4. Trace Engineering

Apresentar as capacidades:

* delimitação de flows;
* leitura orientada por operação;
* modelagem de comportamento esperado;
* payload tracing;
* interpretação entre camadas;
* identificação de domínio;
* raciocínio causal;
* desenho de checkpoints;
* análise de runtime;
* validação de invariantes;
* documentação de evidências;
* comunicação de incerteza;
* validação de restaurações.

## 5. Trace Engineer

Definição aprovada:

`Trace Engineer é a função investigativa exercida por quem segue operações, payloads, transformações e decisões para compreender e explicar o comportamento de um sistema com base em evidências.`

Status obrigatório:

`Função e perfil investigativo em desenvolvimento`

Ressalvas obrigatórias:

* não é profissão consolidada;
* não é cargo reconhecido;
* não é certificação;
* não representa domínio universal;
* as capacidades ainda estão sendo formalizadas e testadas.

## 6. Perguntas de um Trace Engineer

Apresentar perguntas concretas:

* Qual operação está sendo investigada?
* Qual é sua origem causal?
* Que payload representa a intenção?
* Em que camada o significado muda?
* Quem possui autoridade para decidir?
* Que invariantes devem permanecer verdadeiras?
* Qual foi o primeiro ponto de divergência?
* Que evidência sustenta essa conclusão?
* A restauração foi validada em runtime?
* O modelo precisa ser corrigido?

## 7. Relação com práticas existentes

Criar uma seção explícita.

### Arquitetura

Mostra organização, componentes e responsabilidades.

### Leitura de código

Mostra estrutura e implementação.

### Testes

Verificam comportamentos e contratos definidos.

### Debugging

Localiza e corrige comportamentos problemáticos.

### Observabilidade

Oferece logs, métricas, traces e sinais sobre a execução.

### Software System Investigation

Combina essas fontes com modelagem, causalidade, checkpoints e evidências para reconstruir como uma operação ocorreu.

Formulação obrigatória:

`Tracing conecta perspectivas; não as substitui.`

Não apresentar o LAB como superior às práticas existentes.

## 8. Autoridade e responsabilidade

Explicar que:

* uma decisão deve possuir origem;
* uma transformação deve possuir responsabilidade;
* uma conclusão deve possuir evidência;
* uma alteração deve preservar invariantes;
* a IA pode auxiliar a investigação;
* a autoridade final permanece humana.

## 9. Limites atuais

Explicitar:

* os métodos estão em desenvolvimento;
* a eficácia pedagógica ainda é hipótese;
* transferibilidade ainda não foi demonstrada;
* casos externos ainda são necessários;
* aplicação distribuída está em aprofundamento;
* mission-critical é direção futura;
* o LAB não oferece certificação profissional.

## 10. Direção futura

Mencionar brevemente:

* sistemas distribuídos;
* eventos;
* concorrência;
* timing;
* requisitos;
* requirements-to-runtime traceability;
* sistemas industriais;
* mission-critical.

Status:

`Direção futura de pesquisa e formação`

## 11. Continuidade

CTAs:

* `Ver os métodos` → `/method`;
* `Executar o protocolo` → `/protocol`;
* `Começar a aprender` → `/learn`;
* `Ver os casos` → `/cases`.

# Relação entre as três páginas

As páginas devem possuir funções distintas.

## `/method`

Responde:

`Que instrumentos existem e que pergunta cada um responde?`

## `/protocol`

Responde:

`Como uma investigação é executada e validada?`

## `/investigation`

Responde:

`O que é a prática investigativa e quais capacidades ela exige?`

Evite repetir blocos completos entre elas.

Definições canônicas podem repetir-se de forma curta, mas cada página deve aprofundar sua própria pergunta.

# Política de claims

## Factos

Somente com evidência localizada.

## Observações de caso

Limitadas ao caso correspondente.

## Hipóteses

Usar:

* `o LAB investiga`;
* `pode contribuir`;
* `pretende avaliar`;
* `em desenvolvimento`;
* `ainda não demonstrado`.

## Ambições

Usar:

* `direção futura`;
* `horizonte`;
* `pretende conectar`;
* `trilha em construção`.

# Claims proibidos

Não declarar que:

* Trace Engineer é profissão consolidada;
* o LAB criou um novo cargo de mercado;
* o protocolo garante causa raiz;
* os métodos são universalmente reproduzíveis;
* a transferibilidade já foi validada;
* a prática reduz comprovadamente onboarding;
* a prática reduz custos ou bugs;
* o protocolo substitui debugging;
* tracing substitui observabilidade;
* o LAB domina sistemas distribuídos;
* o LAB oferece competência mission-critical;
* uma investigação sempre encontra uma única causa;
* runtime é a única fonte de verdade;
* documentação ou modelos são irrelevantes.

# Política linguística

Aplicar PT-BR aos textos alterados nas três rotas.

Padronizar:

* objetivo;
* atuação;
* arquitetura;
* equipe;
* direção;
* investigação;
* compreensão;
* código;
* início;
* seção.

Preservar termos técnicos:

* payload;
* tracing;
* flow;
* runtime;
* checkpoint;
* Track Mode;
* Trace Engineer;
* Trace Engineering;
* Software System Investigation;
* mission-critical;
* requirements-to-runtime traceability.

# Conteúdo estruturado e tipos

Preservar arquitetura orientada a conteúdo.

Revisar, quando necessário:

* `content/methods.ts`;
* `content/payload-journey-lab.ts`;
* `content/routes.ts`;
* `types/content.ts`;
* conteúdos relacionados ao protocolo e investigação.

Criar estruturas capazes de representar:

* definição;
* pergunta;
* entrada;
* resultado;
* momento de uso;
* status;
* limites;
* relações;
* CTA;
* claimKind;
* evidência.

Manter a tipagem proporcional.

Não criar framework editorial excessivamente genérico.

# Componentes

Reutilizar os componentes existentes.

Criar componentes específicos apenas quando houver responsabilidade narrativa clara.

Possível composição:

## `/method`

* `MethodHeroSection`;
* `MethodInstrumentMapSection`;
* `MethodRelationshipSection`;
* `MethodLimitsSection`.

## `/protocol`

* `ProtocolHeroSection`;
* `ProtocolPhasesSection`;
* `ProtocolArtifactsSection`;
* `ProtocolLimitsSection`.

## `/investigation`

* `InvestigationHeroSection`;
* `InvestigationPracticeSection`;
* `TraceEngineeringSection`;
* `TraceEngineerSection`;
* `InvestigationRelationsSection`;
* `InvestigationLimitsSection`.

Os nomes podem variar.

Preservar server-first.

Não criar Client Components sem necessidade comprovada.

# Metadata

## `/method`

Descrição recomendada:

`Conheça os instrumentos do Payload Journey LAB e as perguntas que Payload Journey, USMT, Reverse Payload Journey, Operational Payload Path e Track to Origin ajudam a investigar.`

## `/protocol`

Descrição recomendada:

`Conheça o protocolo Congelar, Mapear, Detectar e Restaurar para investigar flows, produzir evidências e validar mudanças em sistemas de software.`

## `/investigation`

Descrição recomendada:

`Software System Investigation combina modelagem, payload tracing, checkpoints, runtime e evidências para compreender como sistemas transformam operações em decisões e estados.`

Revisar:

* title;
* description;
* Open Graph;
* Twitter;
* canonical;
* JSON-LD.

Não incluir claims adicionais em structured data.

# Navegação e CTAs

Criar uma continuidade coerente:

`/method`

→ `/protocol`

→ `/investigation`

→ `/learn` ou `/cases`

Mas permitir entrada por qualquer uma das páginas.

Evitar ciclos de CTAs sem função.

Cada CTA deve nomear claramente a próxima ação.

# Acessibilidade

Validar:

* um H1 por página;
* headings sequenciais;
* listas semânticas;
* status textual;
* foco;
* contraste;
* links compreensíveis;
* landmarks;
* ausência de headings decorativos;
* tabelas acessíveis, caso sejam usadas;
* conteúdo inteligível sem depender de cor.

# Responsividade

Validar:

* 320 px;
* 375 px;
* 768 px;
* 1024 px;
* 1440 px.

Confirmar:

* ausência de overflow;
* cards e fases legíveis;
* relações entre instrumentos compreensíveis;
* CTAs acessíveis;
* títulos sem quebras problemáticas;
* tabelas adaptadas ou substituídas por estruturas responsivas;
* nenhum diagrama obrigatório para compreender o conteúdo.

# Performance

Não introduzir:

* dependências;
* bibliotecas de diagramas;
* animações pesadas;
* vídeos automáticos;
* Client Components desnecessários.

Se a relação entre métodos precisar de representação visual, utilize HTML e CSS existentes.

Registrar First Load JS antes e depois.

# Verificadores

Criar preferencialmente um verificador combinado:

`scripts/verify-method-practice.mjs`

Adicionar:

`verify:method-practice`

O verificador deve proteger:

## `/method`

* H1;
* definições;
* perguntas dos instrumentos;
* links para `/payload-journey` e `/usmt`;
* ausência de novas rotas;
* limites;
* status corretos.

## `/protocol`

* quatro fases na ordem;
* objetivos;
* evidências;
* critérios de saída;
* caráter iterativo;
* limites;
* ausência de garantia universal.

## `/investigation`

* definição de Software System Investigation;
* definição de Trace Engineering;
* Trace Engineer como função em desenvolvimento;
* Track Mode;
* relação complementar;
* `Tracing conecta perspectivas; não as substitui`;
* limites atuais;
* mission-critical como futuro.

## Global

* H1 único;
* IDs únicos;
* links válidos;
* CTAs;
* claims proibidos;
* PT-BR nos textos alterados;
* nenhuma nova rota metodológica.

Atualizar verificadores existentes apenas quando necessário para substituir expectativas antigas.

Não duplicar toda a lógica.

# Evidências da Sprint 4

No documento:

`docs/sprints para v3/Sprint 4 - Metodo e Pratica Investigativa.md`

registre:

## Baseline

* data;
* timezone;
* branch;
* commit;
* git status;
* versões;
* gates iniciais.

## Documentos lidos

* Sprints 0–3;
* decisões humanas;
* IDs do mapa;
* claims aplicáveis.

## Arquitetura anterior

Para cada rota:

* ordem;
* headings;
* CTAs;
* metadata;
* conceitos;
* repetições;
* claims de risco.

## Arquitetura final

Para cada rota:

* função;
* ordem;
* headings;
* definições;
* relações;
* CTAs;
* metadata;
* limites.

## Definições canônicas

Registrar texto final e localização.

## Claims

Para cada claim alterado:

* texto anterior;
* categoria;
* evidência;
* texto final;
* categoria final;
* justificativa.

## Conteúdo

Registrar:

* preservado;
* condensado;
* movido;
* dividido;
* reformulado;
* removido por redundância.

## Arquivos

Para cada arquivo alterado:

* caminho;
* motivo;
* risco;
* validação.

# Validação técnica

Executar sequencialmente:

```powershell
npm.cmd run lint
npx.cmd tsc --noEmit
npm.cmd run build
npm.cmd run verify:foundation
npm.cmd run verify:ai-readiness
npm.cmd run verify:homepage
npm.cmd run verify:lab
npm.cmd run verify:learn
npm.cmd run verify:method-practice
```

Se `verify:learn` não existir porque a Sprint 3 não o criou, registrar explicitamente.

Não executar builds concorrentes sobre `.next`.

Registrar:

* resultados;
* duração;
* warnings;
* falhas;
* correções.

Warnings preexistentes não devem ser corrigidos fora do escopo.

# Validação visual

Validar as três rotas em:

* 320 px;
* 375 px;
* 768 px;
* 1024 px;
* 1440 px.

Verificar:

* primeiro viewport;
* função clara de cada página;
* densidade;
* legibilidade;
* ordem;
* CTAs;
* status;
* relação entre conceitos;
* ausência de repetição excessiva;
* navegação por teclado;
* overflow;
* coerência com homepage, `/lab` e `/learn`.

# Evidências separadas

Classificar:

* fonte;
* conteúdo renderizado;
* build;
* execução local observada;
* produção, somente se houver deploy.

Não tratar build como runtime.

# Critérios de conclusão

A Sprint 4 estará concluída quando:

* `/method` funcionar como mapa canônico dos instrumentos;
* `/protocol` explicar claramente a execução da investigação;
* `/investigation` definir a prática e as capacidades;
* as páginas possuírem funções distintas;
* definições canônicas estiverem consistentes;
* método, prática, capacidade, função, protocolo e evidência estiverem separados;
* os instrumentos responderem a perguntas claras;
* as quatro fases estiverem completas;
* o protocolo for apresentado como iterativo;
* Trace Engineer estiver corretamente classificado;
* tracing estiver conectado a arquitetura, debugging e observabilidade sem substituí-los;
* limites atuais estiverem explícitos;
* sistemas distribuídos e mission-critical permanecerem futuros;
* nenhuma nova rota metodológica tiver sido criada;
* metadata estiver alinhada;
* verificadores passarem;
* acessibilidade, responsividade e performance estiverem validadas;
* nenhuma atividade da Sprint 5 tiver sido iniciada;
* o documento da Sprint 4 estiver completo.

# Resposta final do Codex

Ao concluir, apresente:

1. caminho do documento da Sprint 4;
2. branch;
3. commit inicial e final;
4. confirmação da leitura das Sprints 0–3;
5. resumo da nova arquitetura de `/method`;
6. resumo da nova arquitetura de `/protocol`;
7. resumo da nova arquitetura de `/investigation`;
8. definições canônicas implementadas;
9. conteúdos preservados;
10. conteúdos condensados, movidos ou divididos;
11. claims reformulados;
12. arquivos alterados;
13. resultado de lint;
14. resultado de TypeScript;
15. resultado de build;
16. resultado dos verificadores;
17. resultado visual;
18. impacto em First Load JS;
19. limitações;
20. decisões pendentes;
21. confirmação de que nenhuma Sprint 5 foi iniciada.

Status final:

`Sprint 4 concluída. Aguardando aprovação humana antes da Sprint 5.`
