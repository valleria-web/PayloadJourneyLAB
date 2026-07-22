# Sprint 3 — Formação e Progressão Pedagógica

Execute a Sprint 3 do Refactor Narrativo V3 do Payload Journey LAB.

Esta sprint deve reorganizar a experiência de aprendizagem do site para explicar, de maneira clara e progressiva, como estudantes de Engenharia de Software e developers podem desenvolver capacidades de Software System Investigation.

O foco principal é a rota:

`/learn`

A sprint também pode realizar alterações estritamente necessárias em conteúdos, tipos, componentes partilhados, metadata e verificadores relacionados com a formação.

# Gate obrigatório

Antes de qualquer alteração, leia integralmente:

* `docs/sprints para v3/Sprint 0 - Contrato Editorial e Mapa de Preservacao e Migracao.md`
* `docs/sprints para v3/Sprint 1 - Homepage.md`
* `docs/sprints para v3/Sprint 2 - LAB.md`

Não implemente a Sprint 3 se:

* a Sprint 0 não estiver concluída e aprovada;
* a Sprint 1 não estiver concluída;
* a Sprint 2 não estiver concluída;
* o documento da Sprint 2 não existir;
* existirem alterações não documentadas que modifiquem a tese, o público ou o estatuto dos claims;
* ou `/learn` não estiver inventariada no Mapa de Preservação e Migração.

Nesse caso, registre o bloqueio e não altere ficheiros.

# Documento obrigatório da Sprint 3

Crie:

`docs/sprints para v3/Sprint 3 - Formacao e Progressao Pedagogica.md`

O documento deve registrar:

* baseline;
* contrato editorial utilizado;
* IDs do Mapa de Preservação e Migração;
* arquitetura anterior de `/learn`;
* arquitetura implementada;
* conteúdo preservado;
* conteúdo condensado;
* conteúdo movido;
* progressão pedagógica final;
* claims reformulados;
* CTAs;
* metadata;
* ficheiros alterados;
* validações técnicas;
* validações visuais;
* limitações;
* decisões futuras.

# Objetivo da Sprint 3

Fazer com que a página `/learn` responda claramente:

1. O que uma pessoa aprende no Payload Journey LAB?
2. Por que essa aprendizagem começa por uma operação concreta?
3. Como a capacidade evolui payload a payload?
4. Que esforço intelectual e técnico essa aprendizagem exige?
5. Que conhecimentos fundamentais continuam necessários?
6. O que já está disponível no LAB?
7. O que ainda está em construção?
8. Até onde essa progressão pretende chegar?
9. Qual é o primeiro passo recomendado?
10. Como o curso, os casos e os métodos se relacionam?

A página não deve ser apenas um catálogo de conteúdos ou uma landing page da Udemy.

Ela deve funcionar como a arquitetura pedagógica do LAB.

# Tese pedagógica

A Sprint 3 deve materializar a seguinte ideia:

`Compreender sistemas complexos não começa tentando dominar toda a codebase. Começa escolhendo uma operação concreta e seguindo, payload a payload, como ela atravessa eventos, camadas, interpretações, decisões, estados e efeitos observáveis.`

Essa capacidade pode ser construída progressivamente.

Ela não é apresentada como:

* simples;
* automática;
* imediata;
* substituta da formação fundamental;
* ou equivalente à experiência de um profissional senior.

A proposta do LAB é começar mais cedo a desenvolver um raciocínio investigativo que normalmente só é exigido quando o profissional já está diante de codebases grandes, incidentes ou comportamentos difíceis de explicar.

# Público prioritário

A página deve continuar dirigida prioritariamente a:

1. estudantes de Engenharia de Software;
2. developers em início de carreira;
3. developers que entram em codebases grandes, complexas, legadas ou pouco conhecidas;
4. profissionais que trabalham com sistemas expandidos por agentes de IA.

Educadores, equipes e organizações podem aparecer como públicos secundários, sem competir com o público principal.

# Dor pedagógica

A página deve explicar, com prudência, que a formação inicial em software costuma concentrar-se em:

* linguagens;
* estruturas de dados;
* frameworks;
* APIs;
* bancos de dados;
* testes;
* arquitetura;
* e implementação de funcionalidades.

Esses conhecimentos continuam essenciais.

Entretanto, entrar em uma codebase real exige também aprender a:

* compreender código que não foi escrito pelo próprio profissional;
* reconstruir flows;
* localizar decisões;
* interpretar transformações;
* confrontar modelo e runtime;
* distinguir hipótese de evidência;
* e explicar o comportamento do sistema.

Não declare que a formação tradicional é insuficiente de forma universal.

Formulação recomendada:

`O LAB investiga uma capacidade complementar: compreender como operações reais atravessam o sistema durante a execução.`

# Arquitetura narrativa recomendada para `/learn`

## 1. Hero — aprender a compreender sistemas

Eyebrow recomendado:

`APRENDER SOFTWARE SYSTEM INVESTIGATION`

H1 recomendado:

`Começar por um payload. Avançar para o sistema.`

Texto recomendado:

`O Payload Journey LAB organiza a aprendizagem em torno de operações concretas. Em vez de começar tentando compreender toda a codebase, o estudante escolhe um flow, identifica o payload e acompanha como a informação é representada, interpretada, validada, persistida e apresentada.`

Segundo parágrafo:

`A proposta é desenvolver progressivamente uma forma investigativa de pensar software, conectando estrutura, domínio, runtime e evidências.`

CTA principal:

`Começar pelo Payload Journey`

Destino:

`/payload-journey`

CTA secundário:

`Ver o caso HORA.city`

Destino:

`/cases`

A Udemy não deve ser o CTA principal do hero.

## 2. O que significa aprender por flow

Título recomendado:

`Uma operação concreta reduz o recorte, não a complexidade`

Explique que escolher um flow:

* não elimina a complexidade do sistema;
* cria um ponto de entrada investigável;
* permite seguir relações reais;
* ajuda a construir um modelo mental progressivo;
* conecta código e comportamento.

Apresente a cadeia:

`intenção ou ocorrência`

→

`evento`

→

`payload`

→

`interpretação`

→

`decisão`

→

`estado`

→

`efeito observável`

Texto recomendado:

`Cada etapa acrescenta uma pergunta. O que aconteceu? Que representação foi criada? Quem interpretou? Que regra autorizou a decisão? Que estado foi alterado? Que evidência confirma o resultado?`

## 3. Progressão pedagógica canônica

A página deve apresentar cinco níveis claramente diferenciados.

### Nível 1 — Uma operação concreta

Objetivo:

Compreender como uma intenção ou ocorrência se transforma em um efeito observável.

Elementos:

* evento;
* payload;
* request;
* interpretação;
* decisão;
* estado;
* resposta;
* efeito.

Capacidade esperada:

* identificar a origem da operação;
* reconhecer o payload;
* localizar entrada e saída;
* explicar o flow básico.

Claim permitido:

`O estudante começa a construir um modelo operacional do sistema.`

Não declarar domínio completo da codebase.

### Nível 2 — Flow entre camadas

Objetivo:

Compreender como uma operação atravessa responsabilidades diferentes.

Camadas canônicas:

* UI;
* application;
* interpretation;
* domain;
* persistence;
* projection.

Capacidade esperada:

* distinguir representação de significado;
* reconhecer onde a informação muda;
* identificar onde uma ação é interpretada;
* localizar a autoridade de domínio;
* comparar decisão e representação final.

Incluir a formulação:

`O bit pode continuar sendo o mesmo, mas o significado muda conforme a camada o interpreta.`

### Nível 3 — Investigação estruturada

Objetivo:

Passar de observação informal para investigação baseada em evidências.

Elementos:

* modelagem;
* comportamento esperado;
* invariantes;
* Operational Payload Path;
* checkpoints;
* Freeze Record;
* evidências;
* divergência;
* Detection Report;
* restauração;
* validação.

Capacidade esperada:

* formular hipóteses;
* posicionar checkpoints;
* confrontar modelo e runtime;
* localizar divergências;
* justificar uma restauração.

Apresente o protocolo:

`Congelar → Mapear → Detectar → Restaurar`

### Nível 4 — Sistemas complexos

Status obrigatório:

`Aprofundamento em construção`

Elementos:

* múltiplos componentes;
* eventos;
* concorrência;
* mensagens;
* filas;
* dependências;
* estados distribuídos;
* falhas parciais;
* observabilidade;
* tracing distribuído.

Capacidade pretendida:

* seguir causalidade entre componentes;
* reconhecer perda de contexto;
* investigar ordenação;
* observar propagação de falhas;
* reconstruir estados distribuídos.

Não declarar que o LAB já oferece formação completa ou aplicação demonstrada nesse nível.

### Nível 5 — Requisitos e sistemas críticos

Status obrigatório:

`Direção futura de pesquisa e formação`

Elementos:

* requisitos;
* timing;
* deadlines;
* CAN;
* DBC;
* SysML/MBSE;
* V-Model;
* requirements-to-runtime traceability;
* safety invariants;
* sistemas industriais;
* contextos mission-critical.

Capacidade futura pretendida:

* conectar requisito, modelo, implementação, mensagem e efeito;
* investigar comportamento temporal;
* localizar autoridade e responsabilidade;
* confrontar execução com safety constraints;
* produzir evidências de ponta a ponta.

Não declarar competência atual, serviço disponível ou aplicação já validada.

# 4. O esforço que a aprendizagem exige

Criar uma seção explícita.

Eyebrow recomendado:

`SEM ATALHOS DE COMPREENSÃO`

Título recomendado:

`Investigar exige pensar, observar e confrontar`

Conteúdo obrigatório:

Aprender Software System Investigation exige:

* ler código;
* compreender arquitetura;
* estudar domínio;
* formular hipóteses;
* executar o sistema;
* observar runtime;
* posicionar checkpoints;
* revisar evidências;
* reconhecer incerteza;
* e documentar conclusões.

O LAB não promete eliminar esse esforço.

A proposta é:

* organizar o esforço;
* fornecer um ponto de entrada;
* oferecer linguagem;
* criar instrumentos;
* reduzir investigação aleatória;
* e tornar a progressão mais consciente.

Formulação recomendada:

`O método não pensa pelo estudante. Ele organiza onde olhar, o que perguntar e que evidência procurar.`

# 5. Conhecimentos complementares

Explicar que Payload Journey e Software System Investigation não substituem:

* programação;
* algoritmos;
* estruturas de dados;
* arquitetura;
* bancos de dados;
* redes;
* sistemas operacionais;
* testes;
* segurança;
* observabilidade;
* conhecimento de domínio.

Eles conectam esses conhecimentos durante a investigação de operações reais.

Título recomendado:

`Uma capacidade complementar`

Texto recomendado:

`A leitura da codebase mostra estrutura. A arquitetura mostra responsabilidades. Testes verificam comportamentos definidos. Observabilidade oferece sinais. Payload tracing conecta essas perspectivas ao seguir uma operação durante a execução.`

# 6. O que o LAB ensina atualmente

Separar claramente conteúdo disponível de conteúdo futuro.

Inventarie o conteúdo real antes de escrever esta seção.

Pode incluir, somente se confirmado:

* Payload Journey;
* USMT;
* Reverse Payload Journey;
* Operational Payload Path;
* Track to Origin;
* protocolo Congelar, Mapear, Detectar e Restaurar;
* checkpoints;
* documentação de evidências;
* caso HORA.city;
* curso disponível;
* vídeos;
* LabLogs;
* materiais ou templates.

Para cada item, indique:

* o que é;
* o que ajuda a aprender;
* onde começar;
* seu estado real.

Estados permitidos:

* disponível;
* em desenvolvimento;
* aplicado em caso;
* documentado;
* investigação em andamento;
* planejado.

Não marcar como disponível algo apenas mencionado como visão.

# 7. Percurso inicial recomendado

Criar uma trilha curta e acionável.

## Etapa 1 — Ver o flow

Aprender Payload Journey.

Destino:

`/payload-journey`

## Etapa 2 — Explicitar o esperado

Conhecer USMT.

Destino:

`/usmt`

## Etapa 3 — Entender os instrumentos

Conhecer os métodos.

Destino:

`/method`

## Etapa 4 — Investigar com procedimento

Conhecer o protocolo.

Destino:

`/protocol`

## Etapa 5 — Observar um caso real

Analisar HORA.city.

Destino:

`/cases`

## Etapa 6 — Aprofundar a formação

Acessar curso e conteúdos disponíveis.

A Udemy pode aparecer aqui como canal formativo concreto.

O percurso deve orientar, não obrigar.

# 8. Curso e Udemy

A Udemy deve permanecer como parte importante da oferta formativa, porém subordinada à arquitetura pedagógica do LAB.

A seção do curso deve responder:

* para quem é;
* que conceitos cobre;
* qual é o ponto de entrada;
* quais resultados de aprendizagem são pretendidos;
* quais limites possui;
* como se conecta ao restante do LAB.

Não prometer:

* domínio completo de tracing;
* formação profissional concluída;
* certificação reconhecida;
* empregabilidade;
* autonomia imediata;
* domínio de sistemas críticos.

CTA permitido:

`Conhecer o curso`

CTA alternativo:

`Começar a formação`

Evitar linguagem de venda excessiva.

# 9. Casos como aprendizagem

Explicar que os casos não são apenas demonstrações.

Eles servem para:

* praticar delimitação;
* construir modelos;
* identificar flows;
* escolher checkpoints;
* observar runtime;
* registrar evidências;
* reconhecer limitações;
* e revisar conclusões.

O HORA.city deve aparecer como:

`caso real em investigação`

Não como prova definitiva da eficácia dos métodos.

CTA:

`Estudar o caso HORA.city`

Destino:

`/cases`

# 10. Evidência pedagógica

Criar uma seção curta que diferencie:

## O que já pode ser demonstrado

* existência dos métodos;
* existência dos documentos;
* aplicação em um caso real;
* existência de curso e materiais;
* existência de checkpoints ou artefatos produzidos.

## O que ainda precisa ser investigado

* aprendizagem por terceiros;
* redução do tempo de compreensão;
* aumento de autonomia;
* transferibilidade;
* aplicação em codebases externas;
* progressão para sistemas distribuídos;
* impacto em equipes.

Título recomendado:

`Ensinar também é investigar`

Texto recomendado:

`O LAB não presume que um método é eficaz apenas porque foi criado. A proposta pedagógica precisa ser observada em uso, documentada e confrontada com resultados reais.`

# Arquitetura mínima de `/learn`

A página deve seguir esta progressão:

1. Hero.
2. Aprender por flow.
3. Progressão pedagógica.
4. Esforço necessário.
5. Conhecimentos complementares.
6. Conteúdo atualmente disponível.
7. Percurso recomendado.
8. Curso e canais formativos.
9. Casos como aprendizagem.
10. Evidência pedagógica.
11. Próxima ação.

Não é obrigatório criar onze componentes.

É obrigatório preservar essa lógica.

# Conteúdo a preservar

Use o Mapa de Preservação e Migração para identificar e preservar:

* estrutura atual da trilha;
* conceitos Payload Journey;
* Reverse Payload Journey;
* Track to Origin;
* curso;
* resultados pedagógicos prudentes;
* CTAs válidos;
* conteúdos autorais;
* ligações existentes com métodos e casos.

Não remover conteúdos fortes apenas por serem anteriores à nova arquitetura.

Registre qualquer:

* movimento;
* condensação;
* fusão;
* reformulação;
* ou remoção por redundância.

# Conteúdo a evitar

Não transformar `/learn` em:

* manifesto institucional;
* biografia da fundadora;
* página centrada no piloto de seis meses;
* catálogo técnico sem progressão;
* página de venda da Udemy;
* promessa de carreira;
* documentação completa dos métodos;
* duplicação de `/method`;
* duplicação de `/lab`.

# Política de claims

## Factos confirmados

Somente com evidência localizada.

## Observações de caso

Limitadas ao caso correspondente.

## Hipóteses pedagógicas

Usar:

* `o LAB investiga`;
* `pode contribuir`;
* `a hipótese é`;
* `resultado esperado`;
* `pretende avaliar`;
* `até que ponto`.

## Ambições futuras

Usar:

* `direção futura`;
* `aprofundamento em construção`;
* `trilha planejada`;
* `pretende conectar`;
* `horizonte de pesquisa`.

# Claims proibidos

Não declarar que o LAB:

* reduz comprovadamente onboarding;
* acelera comprovadamente a aprendizagem;
* aumenta empregabilidade;
* forma profissionais mais valiosos;
* elimina dependência de mentoria;
* transforma junior em senior;
* possui método universal;
* já comprovou transferibilidade;
* já oferece formação mission-critical;
* substitui conhecimentos fundamentais;
* elimina a necessidade de estudar arquitetura;
* torna a compreensão fácil.

# Metadata de `/learn`

Revisar:

* title;
* description;
* Open Graph;
* Twitter;
* canonical;
* JSON-LD aplicável.

Descrição recomendada:

`Aprenda progressivamente a seguir flows, payloads, decisões e evidências de runtime para compreender sistemas de software, do primeiro evento à investigação estruturada.`

A metadata deve:

* comunicar formação;
* identificar o público;
* mencionar progressão;
* evitar claims de eficácia;
* evitar apresentar conteúdo futuro como disponível.

# Tipagem e conteúdo estruturado

Preserve a arquitetura orientada a conteúdo existente.

Não inserir grandes blocos hardcoded em componentes se o repositório já utiliza:

* `content/routes.ts`;
* `content/payload-journey-lab.ts`;
* `content/methods.ts`;
* `types/content.ts`;
* ou estruturas equivalentes.

Atualize tipos somente quando necessário.

Prefira estruturas que representem explicitamente:

* nível;
* status;
* objetivo;
* elementos;
* capacidade esperada;
* claim permitido;
* CTA;
* estado de disponibilidade.

# Design

* preservar identidade visual;
* reutilizar `Section`, `SectionHeader`, `TechnicalLabel`, `Card`, `HighlightPanel` e componentes equivalentes;
* não introduzir nova linguagem visual;
* não criar excesso de cards;
* evitar página excessivamente longa ou repetitiva;
* diferenciar visualmente conteúdo disponível e direção futura;
* preservar ritmo e alternância de fundos;
* manter leitura adequada em mobile;
* não introduzir novas dependências.

# Acessibilidade

Validar:

* H1 único;
* headings sequenciais;
* labels;
* foco de teclado;
* contraste;
* links compreensíveis;
* status futuros não comunicados apenas por cor;
* progressão pedagógica legível por leitores de tela;
* listas semanticamente corretas;
* ausência de headings usados apenas como decoração.

# Responsividade

Validar no mínimo:

* 320 px;
* 375 px;
* 768 px;
* 1024 px;
* 1440 px.

Confirmar:

* ausência de overflow;
* progressão visual clara;
* cards legíveis;
* CTAs acessíveis;
* textos sem linhas excessivamente longas;
* separação entre níveis atuais e futuros;
* ausência de grids quebrados.

# Performance

Não introduzir:

* dependências;
* animações pesadas;
* vídeos automáticos;
* Client Components desnecessários;
* imagens não otimizadas.

Preservar arquitetura server-first.

# Verificadores automatizados

Atualize os verificadores para proteger:

* H1 canônico;
* cadeia payload → decisão → estado → efeito;
* cinco níveis pedagógicos;
* distinção entre disponível, em construção e futuro;
* presença do esforço intelectual;
* relação complementar com arquitetura e observabilidade;
* CTAs internos;
* Udemy como canal secundário;
* HORA.city como caso real;
* linguagem de hipótese;
* ausência de claims proibidos;
* mission-critical apenas como direção futura;
* H1 único;
* links internos;
* IDs únicos;
* headings;
* conteúdo preservado.

Não proteja parágrafos completos palavra por palavra.

Prefira invariantes editoriais e estruturais.

# Validação técnica

Execute sequencialmente:

```powershell
npm.cmd run lint
npx.cmd tsc --noEmit
npm.cmd run build
npm.cmd run verify:foundation
npm.cmd run verify:ai-readiness
npm.cmd run verify:homepage
```

Se for criado um verificador específico de formação, execute-o também.

Não execute builds concorrentes sobre `.next`.

Registre:

* comando;
* resultado;
* warnings;
* correções realizadas;
* falhas;
* escopo de cada correção.

Warnings preexistentes devem ser documentados, não corrigidos fora do escopo.

# Validação visual

Compare a versão anterior e a nova de `/learn`.

Verifique:

* primeiro viewport;
* público;
* progressão;
* densidade;
* relação entre conteúdo atual e futuro;
* visibilidade da Udemy;
* CTAs;
* casos;
* acessibilidade;
* mobile;
* desktop.

A página deve permitir responder:

1. Para quem esta formação existe?
2. O que significa aprender por flow?
3. Qual é o primeiro nível?
4. Como a aprendizagem progride?
5. Que esforço é necessário?
6. O que o LAB já ensina?
7. O que ainda está em construção?
8. Como o curso se conecta?
9. Onde estão os casos?
10. Como começar?

# Critérios de conclusão

A Sprint 3 estará concluída quando:

* `/learn` possuir uma tese pedagógica clara;
* o público estiver explícito;
* a aprendizagem por flow estiver explicada;
* os cinco níveis estiverem presentes;
* os níveis 4 e 5 estiverem marcados como futuros;
* o esforço intelectual estiver explícito;
* conhecimentos complementares estiverem preservados;
* conteúdo disponível estiver separado de conteúdo planejado;
* o percurso inicial estiver claro;
* Udemy estiver integrada sem dominar a página;
* casos estiverem conectados à aprendizagem;
* evidência pedagógica estiver diferenciada de hipótese;
* metadata estiver alinhada;
* verificadores estiverem atualizados;
* responsividade e acessibilidade estiverem validadas;
* documentação estiver completa;
* nenhuma rota fora do escopo tiver sido refatorada editorialmente.

# Resposta final do Codex

Ao concluir, apresente:

1. caminho do documento da Sprint 3;
2. branch;
3. commit inicial e final;
4. confirmação da leitura das Sprints 0, 1 e 2;
5. resumo da nova arquitetura de `/learn`;
6. progressão pedagógica implementada;
7. conteúdo preservado;
8. conteúdo condensado ou movido;
9. claims reformulados;
10. ficheiros alterados;
11. resultado de lint;
12. resultado de TypeScript;
13. resultado de build;
14. resultado dos verificadores;
15. resultado visual;
16. limitações;
17. decisões pendentes;
18. confirmação de que nenhuma Sprint 4 foi iniciada.

Status final:

`Sprint 3 concluída. Aguardando aprovação humana antes da Sprint 4.`
