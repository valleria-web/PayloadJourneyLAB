# Sprint 5 — Casos, Evidências e Proveniência

Execute a Sprint 5 do Refactor Narrativo V3 do Payload Journey LAB.

Esta sprint deve consolidar as rotas:

* `/cases`;
* `/lablog`;

como centro público de evidências, casos aplicados, trabalho investigativo em andamento, limitações e proveniência do Payload Journey LAB.

O objetivo não é aumentar artificialmente a quantidade de casos nem apresentar investigações incompletas como resultados concluídos.

O objetivo é permitir que um visitante compreenda:

* o que foi investigado;
* em que sistema;
* qual flow foi delimitado;
* que comportamento foi observado;
* que evidências existem;
* o que ainda permanece desconhecido;
* qual é o estado da investigação;
* que conclusões são autorizadas;
* e que claims ainda não podem ser feitos.

# Gate obrigatório

Antes de qualquer alteração, leia integralmente:

* `docs/sprints para v3/Sprint 0 - Contrato Editorial e Mapa de Preservacao e Migracao.md`;
* `docs/sprints para v3/decisoes humanas.md`;
* `docs/sprints para v3/Sprint 1 - Homepage.md`;
* `docs/sprints para v3/Sprint 2 - LAB.md`;
* `docs/sprints para v3/Sprint 3 - Formacao e Progressao Pedagogica.md`;
* `docs/sprints para v3/Sprint 4 - Metodo e Pratica Investigativa.md`;
* o plano aprovado da Sprint 5, caso já exista no repositório;
* documentos relacionados ao caso HORA.city;
* documentos de evidência, investigação, checkpoints ou detecção realmente localizados.

Não implemente a Sprint 5 se:

* a Sprint 4 não estiver concluída e aprovada;
* o contrato editorial estiver ausente;
* os critérios de claims tiverem sido alterados sem decisão humana;
* os casos existentes não puderem ser vinculados a fontes concretas;
* houver alterações não atribuídas no worktree;
* ou o estado real de uma investigação exigir uma nova decisão humana.

Nesse caso, registre o bloqueio e não altere arquivos de implementação.

# Documento obrigatório

Crie:

`docs/sprints para v3/Sprint 5 - Casos Evidencias e Proveniencia.md`

O documento deve registrar:

* baseline;
* branch e commits;
* documentos lidos;
* IDs do Mapa de Preservação e Migração;
* inventário real de casos;
* inventário real de evidências;
* arquitetura anterior de `/cases`;
* arquitetura anterior de `/lablog`;
* arquitetura final;
* taxonomia de estados;
* taxonomia de evidências;
* claims reformulados;
* conteúdos preservados;
* conteúdos omitidos por falta de evidência;
* arquivos alterados;
* validações;
* limitações;
* decisões futuras.

# Objetivo da Sprint 5

Ao final, um visitante deve conseguir responder:

1. Que casos reais o LAB está investigando?
2. Qual é o sistema investigado?
3. Qual flow foi selecionado?
4. Qual é a pergunta ou anomalia?
5. O que era esperado?
6. O que foi observado?
7. Que evidências estão disponíveis?
8. Em que etapa do protocolo o caso se encontra?
9. O que já foi confirmado?
10. O que ainda é hipótese?
11. O que permanece desconhecido?
12. Houve restauração?
13. A restauração foi validada?
14. O caso demonstra apenas aplicação ou também eficácia?
15. Como os LabLogs se conectam ao caso?
16. Que trabalho foi realizado em cada data?
17. Que conclusão o público está autorizado a retirar?

# Escopo autorizado

A Sprint 5 pode alterar editorialmente:

* `/cases`;
* `/lablog`.

Pode também alterar, quando necessário:

* conteúdos estruturados dos casos;
* conteúdo HORA.city;
* tipos relacionados a casos e evidências;
* componentes de casos;
* componentes de LabLog;
* metadata;
* JSON-LD;
* links e CTAs;
* verificadores;
* documentação.

Pode realizar microajustes estritamente necessários em:

* `/method`;
* `/protocol`;
* `/investigation`;
* `/lab`;
* `/learn`;
* homepage;

somente para atualizar links, labels de continuidade ou referências ao centro de evidências.

Não refatore editorialmente essas rotas.

# Fora de escopo

Não:

* inventar novos casos;
* criar evidências sintéticas para preencher lacunas;
* declarar investigações concluídas sem artefatos;
* publicar logs sensíveis;
* expor segredos, credenciais ou dados privados;
* apresentar screenshots sem origem;
* declarar eficácia pedagógica;
* declarar redução de onboarding;
* declarar transferibilidade;
* criar profissão ou certificação;
* apresentar mission-critical como competência atual;
* criar plataforma completa de gestão de casos;
* criar banco de dados;
* introduzir CMS;
* criar autenticação;
* adicionar dependências sem necessidade;
* realizar redesign global.

# Princípio editorial central

A Sprint 5 deve materializar esta regra:

`Um caso não existe publicamente apenas porque foi mencionado. Ele existe quando possui identidade, escopo, estado, fontes e evidências rastreáveis.`

E esta segunda regra:

`Aplicar um método em um caso real demonstra aplicação. Não demonstra, por si só, eficácia, transferibilidade ou validade universal.`

# Taxonomia canônica de casos

Cada caso público deve possuir, quando a informação existir:

* identificador;
* título;
* sistema;
* repositório ou origem;
* flow;
* operação;
* pergunta investigativa;
* anomalia declarada;
* comportamento esperado;
* comportamento observado;
* estado do caso;
* etapa atual do protocolo;
* data de abertura;
* última atualização;
* métodos utilizados;
* componentes identificados;
* evidências disponíveis;
* fatos confirmados;
* hipóteses;
* desconhecidos;
* limitações;
* restauração;
* validação;
* próximos passos;
* nível de publicação;
* claims autorizados.

Não exija preenchimento falso.

Campos sem evidência devem receber:

* `Não confirmado`;
* `Ainda não observado`;
* `Não localizado`;
* `Não aplicável`;
* ou ser omitidos quando a ausência não for relevante.

# Estados canônicos de caso

Utilize estados textuais claros.

## Delimitado

O caso, flow ou pergunta foi identificado, mas a investigação ainda não começou.

## Congelado

O comportamento e o contexto inicial foram preservados.

## Em mapeamento

O caminho operacional está sendo reconstruído.

## Em detecção

Checkpoints e evidências estão sendo confrontados.

## Divergência localizada

Existe evidência suficiente para apontar um ponto de divergência.

## Comportamento explicado

O flow foi explicado sem necessidade de classificar o resultado como bug.

## Restauração proposta

Existe uma intervenção tecnicamente justificada, ainda não validada.

## Restauração implementada

A mudança foi aplicada, mas a validação ainda não está completa.

## Restauração validada

O comportamento posterior foi confrontado com o esperado e documentado.

## Suspenso

A investigação foi interrompida por falta de acesso, ambiente, evidência ou decisão.

## Encerrado sem conclusão

O caso foi documentado, mas não produziu conclusão suficiente.

## Encerrado

A pergunta investigativa foi respondida dentro dos limites declarados.

Não usar:

* resolvido;
* corrigido;
* concluído;

sem explicar o critério correspondente.

# Taxonomia canônica de evidências

Cada evidência deve possuir:

* identificador;
* tipo;
* origem;
* data;
* relação com o caso;
* checkpoint, quando aplicável;
* camada;
* operação;
* descrição;
* claim sustentado ou refutado;
* nível de acesso;
* limitações;
* localização;
* status de verificação.

## Tipos possíveis

* trecho de código;
* referência de arquivo e linha;
* commit;
* diff;
* log estruturado;
* trace;
* payload observado;
* request;
* response;
* snapshot de estado;
* registro de banco de dados;
* screenshot;
* vídeo;
* diagrama;
* Operational Payload Path;
* USMT;
* Checkpoint Plan;
* Freeze Record;
* Detection Report;
* Trace Evidence Record;
* Trace Evidence Package;
* teste;
* execução observada;
* documento;
* publicação;
* relato da investigadora.

Somente utilizar tipos que correspondam a evidências realmente existentes.

## Status de evidência

* localizada;
* verificada;
* parcialmente verificada;
* derivada;
* referenciada;
* não localizada;
* não publicável;
* substituída;
* invalidada.

# Hierarquia de força da evidência

A página deve diferenciar:

## Fonte

Código, documento, configuração ou artefato localizado.

## Conteúdo renderizado

HTML, texto, componentes e informações realmente apresentados.

## Build

Compilação e prerenderização bem-sucedidas.

## Execução observada

Comportamento registrado em ambiente real ou local.

## Produção

Comportamento observado no sistema publicado.

## Evidência externa

Aplicação ou avaliação realizada por pessoa que não criou o método.

Não tratar:

* build como runtime;
* screenshot como explicação causal completa;
* log isolado como prova suficiente;
* relato da fundadora como evidência independente;
* caso interno como validação externa.

# Arquitetura de `/cases`

## Papel da página

`/cases` deve funcionar como o registro público dos casos aplicados do LAB.

Não deve funcionar apenas como página promocional do HORA.city.

## 1. Hero

Eyebrow:

`CASOS E EVIDÊNCIAS`

H1 recomendado:

`Investigações reais, conclusões proporcionais às evidências`

Texto recomendado:

`Os casos do Payload Journey LAB mostram como os métodos são aplicados em sistemas reais. Cada investigação separa fatos, hipóteses, desconhecidos, evidências e limites antes de declarar uma conclusão.`

Segundo parágrafo:

`Um caso demonstra o trabalho realizado naquele contexto. Não demonstra automaticamente eficácia geral, transferibilidade ou validade universal.`

CTA principal:

`Explorar o caso HORA.city`

→ âncora do caso.

CTA secundário:

`Acompanhar os LabLogs`

→ `/lablog`

## 2. Como ler um caso

Criar uma seção curta explicando:

* estado;
* protocolo;
* evidências;
* fatos;
* hipóteses;
* desconhecidos;
* conclusão;
* limitações.

Título recomendado:

`O que está confirmado e o que ainda não sabemos`

## 3. Registro de casos

Apresentar todos os casos realmente localizados.

Se apenas HORA.city possuir material suficiente, apresente apenas HORA.city.

Não criar cards vazios para sugerir escala futura.

Cada caso deve mostrar:

* identificador;
* título;
* sistema;
* flow;
* estado;
* última atualização;
* pergunta investigativa;
* método principal;
* evidências públicas;
* limitações;
* CTA.

## 4. Caso HORA.city

Preservar HORA.city como caso real principal.

A página deve distinguir claramente:

### Sistema

O que é HORA.city e qual é o seu papel como codebase real.

### Flow selecionado

Por exemplo:

* Send Heart;
* ou outro flow realmente documentado.

### Pergunta investigativa

Exemplo permitido, quando confirmado:

`Como a intenção de enviar um Heart atravessa a interface, o payload, a API, o domínio, a persistência e a representação final?`

### Anomalia

Apenas quando documentada.

Exemplo:

* ausência ou divergência de `createdAt`;
* outra anomalia realmente registrada.

### Comportamento esperado

Fonte:

* USMT;
* regra de domínio;
* contrato;
* especificação;
* ou descrição documentada.

### Comportamento observado

Somente o que foi realmente observado.

### Estado atual

Utilizar a taxonomia canônica.

### Métodos utilizados

Somente os realmente aplicados:

* Payload Journey;
* Reverse Payload Journey;
* USMT;
* Operational Payload Path;
* checkpoints;
* Track to Origin;
* protocolo.

### Evidências

Listar apenas artefatos localizados.

### Fatos confirmados

Separar de interpretações.

### Hipóteses

Indicar claramente que ainda precisam ser confrontadas.

### Desconhecidos

Preservar lacunas.

### Limitações

Exemplos:

* caso interno;
* criado pela própria fundadora;
* investigação assistida por IA;
* ausência de replicação externa;
* ambiente local;
* artefatos não públicos;
* flow parcial;
* restauração não validada.

### Conclusão autorizada

Exemplo:

`O caso demonstra que os instrumentos do LAB estão sendo aplicados para reconstruir um flow real e produzir evidências sobre uma codebase existente.`

### Conclusões ainda não autorizadas

* redução de onboarding;
* aumento de produtividade;
* transferência para terceiros;
* validade universal;
* eficácia pedagógica;
* aplicabilidade mission-critical.

## 5. Linha de investigação

Apresentar uma linha cronológica baseada em evidências reais:

* caso aberto;
* flow delimitado;
* comportamento congelado;
* OPP iniciado;
* checkpoints executados;
* divergência localizada;
* restauração proposta;
* restauração implementada;
* validação;
* fechamento.

Somente incluir marcos confirmados.

Cada marco deve possuir:

* data;
* estado;
* descrição;
* evidência relacionada.

## 6. Evidências disponíveis

Criar uma seção que apresente:

* tipo;
* identificador;
* descrição;
* data;
* relação com o caso;
* status;
* acesso.

Quando um artefato for mencionado mas não estiver disponível publicamente, indicar:

`Evidência registrada, ainda não publicada`

ou:

`Artefato não localizado no repositório público`

Não criar links quebrados.

## 7. O que o caso ensina

Separar:

### Aprendizado sobre o sistema

O que foi compreendido sobre HORA.city.

### Aprendizado sobre o método

O que o caso revelou sobre os instrumentos.

### Limites do aprendizado

O que ainda não pode ser generalizado.

## 8. Próximos casos

Se não houver casos confirmados, não inventar.

Pode existir uma seção curta:

`Próximos casos dependerão de novas investigações documentadas.`

Não apresentar empresas, parceiros ou codebases sem autorização.

## 9. Continuidade

CTAs:

* `/lablog`;
* `/method`;
* `/protocol`;
* `/investigation`;
* `/learn`.

# Arquitetura de `/lablog`

## Papel da página

`/lablog` deve tornar visível o trabalho investigativo datado.

Não deve prometer um diário de pesquisa se não houver entradas reais.

## 1. Hero

Eyebrow:

`LABLOG`

H1 recomendado:

`A investigação enquanto acontece`

Texto recomendado:

`O LabLog registra decisões, perguntas, checkpoints, evidências, mudanças de hipótese e limites encontrados durante a construção do Payload Journey LAB.`

Segundo parágrafo:

`Uma entrada documenta o estado do trabalho em determinada data. Ela não substitui o caso completo nem transforma uma observação provisória em conclusão.`

CTA principal:

`Ver os casos`

→ `/cases`

CTA secundário:

`Conhecer o protocolo`

→ `/protocol`

## 2. O que é uma entrada de LabLog

Cada entrada deve possuir, quando disponível:

* identificador;
* data;
* título;
* caso relacionado;
* flow;
* etapa do protocolo;
* pergunta;
* trabalho realizado;
* evidência produzida;
* hipótese alterada;
* decisão;
* desconhecidos;
* próximos passos;
* autor;
* participação da IA;
* links relacionados.

## 3. Inventário real de entradas

Inspecione:

* conteúdo atual;
* publicações;
* vídeos;
* documentos;
* registros de sprint;
* páginas;
* logs;
* materiais do curso;
* repositório.

Somente publique entradas sustentadas por material real.

Se não houver entradas suficientemente estruturadas:

* preserve a página;
* explique o estado;
* apresente os temas existentes;
* não simule um histórico.

## 4. Estados de entrada

* nota de investigação;
* checkpoint;
* decisão metodológica;
* atualização de caso;
* hipótese;
* evidência;
* restauração;
* validação;
* retrospectiva;
* publicação.

## 5. Relação com casos

Cada entrada relacionada a um caso deve apontar para o identificador do caso.

O caso agrega a investigação.

O LabLog registra momentos.

Formulação recomendada:

`O caso mostra o conjunto da investigação. O LabLog preserva como ela evoluiu no tempo.`

## 6. Relação com conteúdo externo

YouTube, LinkedIn, Udemy ou outros canais podem ser referenciados apenas quando:

* o destino estiver confirmado;
* o conteúdo corresponder à entrada;
* não existir duplicidade de canal;
* e a fonte estiver acessível.

A decisão final sobre o canal canônico do YouTube permanece reservada para a Sprint 6.

Não resolver antecipadamente links divergentes nesta sprint.

## 7. Proveniência

Cada entrada deve diferenciar:

* texto original;
* resumo editorial;
* evidência técnica;
* interpretação;
* conteúdo assistido por IA;
* conclusão humana.

Não é necessário expor conversas privadas com IA.

É necessário preservar a responsabilidade humana pela publicação.

## 8. Continuidade

CTAs:

* `/cases`;
* `/method`;
* `/protocol`;
* `/learn`;
* `/lab`.

# Conteúdo estruturado e tipos

Preserve a arquitetura orientada a conteúdo.

Revisar ou criar estruturas proporcionais para:

## Case

* id;
* slug interno;
* title;
* system;
* flow;
* operation;
* question;
* anomaly;
* expectedBehavior;
* observedBehavior;
* status;
* protocolStage;
* openedAt;
* updatedAt;
* methods;
* evidenceIds;
* confirmedFacts;
* hypotheses;
* unknowns;
* limitations;
* restoration;
* validation;
* nextSteps;
* authorizedClaims;
* prohibitedClaims;
* cta.

## Evidence

* id;
* caseId;
* type;
* title;
* description;
* source;
* observedAt;
* checkpoint;
* layer;
* operation;
* status;
* access;
* supports;
* refutes;
* limitations;
* location.

## LabLogEntry

* id;
* date;
* title;
* caseId;
* flow;
* protocolStage;
* entryType;
* question;
* workPerformed;
* evidenceIds;
* hypothesisChange;
* decision;
* unknowns;
* nextSteps;
* author;
* aiAssistance;
* links.

Não é obrigatório usar exatamente esses nomes.

É obrigatório preservar as distinções.

Evite criar sistema excessivamente genérico ou complexo.

# Inventário antes da implementação

Antes de escrever o conteúdo, produza um inventário real.

Para cada possível caso, evidência ou entrada:

* fonte;
* caminho;
* data;
* status;
* possibilidade de publicação;
* claim autorizado;
* limitação.

Nenhum item deve ser publicado apenas porque foi citado em documentação anterior.

# Política de privacidade e segurança

Não publicar:

* credenciais;
* tokens;
* dados pessoais;
* IP;
* device IDs completos;
* informações internas sensíveis;
* URLs privadas;
* dados de usuários;
* logs com identificadores;
* paths locais no site público;
* segredos de ambiente;
* informações comerciais confidenciais.

Quando necessário:

* anonimizar;
* truncar;
* resumir;
* omitir;
* ou classificar como não publicável.

# Política de claims

## Permitido

* existe um caso real;
* determinado flow foi selecionado;
* evidências específicas foram produzidas;
* o caso encontra-se em determinado estado;
* uma hipótese foi formulada;
* uma divergência foi localizada, quando sustentada;
* uma restauração foi validada, quando sustentada;
* determinadas limitações permanecem.

## Condicionado

* o caso sugere;
* a observação indica;
* a evidência sustenta naquele contexto;
* o método ajudou a organizar aquela investigação.

## Proibido sem evidência externa

* o método reduz onboarding;
* o método aumenta produtividade;
* o método reduz bugs;
* o método é transferível;
* estudantes aprendem mais rápido;
* o método funciona em qualquer codebase;
* Trace Engineer é profissão consolidada;
* o LAB possui competência mission-critical;
* o caso prova eficácia do LAB.

# Metadata

## `/cases`

Descrição recomendada:

`Explore casos reais do Payload Journey LAB com flows, estados, hipóteses, evidências, limitações e conclusões proporcionais ao que foi observado.`

## `/lablog`

Descrição recomendada:

`Acompanhe registros datados de investigação, checkpoints, hipóteses, decisões e evidências produzidas durante o trabalho do Payload Journey LAB.`

Revisar:

* title;
* description;
* Open Graph;
* Twitter;
* canonical;
* JSON-LD.

Não adicionar claims extras no structured data.

# JSON-LD

Avaliar, sem obrigatoriedade:

* `CollectionPage` para `/cases`;
* `ItemList` somente para casos reais publicados;
* `CollectionPage` para `/lablog`;
* `BlogPosting` ou `Article` somente para entradas reais e completas.

Não criar objetos estruturados para conteúdo inexistente.

Não declarar autorias ou datas sem fonte.

# Componentes

Reutilizar componentes existentes.

Criar componentes específicos quando houver responsabilidade clara.

Possível composição para `/cases`:

* `CasesHeroSection`;
* `CaseReadingGuideSection`;
* `CaseRegistrySection`;
* `HoraCityCaseSection`;
* `CaseTimelineSection`;
* `CaseEvidenceSection`;
* `CaseLearningSection`;
* `CaseLimitsSection`.

Possível composição para `/lablog`:

* `LabLogHeroSection`;
* `LabLogGuideSection`;
* `LabLogEntriesSection`;
* `LabLogProvenanceSection`;
* `LabLogContinuitySection`.

Evitar um componente por parágrafo.

Preservar server-first.

Não criar Client Components sem necessidade.

# Design

* preservar identidade visual;
* evitar aparência de dashboard administrativo;
* utilizar status textuais;
* não depender apenas de cor;
* utilizar cards apenas para unidades independentes;
* destacar fatos, hipóteses, desconhecidos e limitações de formas distintas;
* evitar tabelas largas em mobile;
* manter leitura confortável;
* preservar alternância de fundos;
* não introduzir gráficos decorativos;
* não simular volume de casos.

# Acessibilidade

Validar:

* um H1 por página;
* headings sequenciais;
* status comunicados por texto;
* listas semânticas;
* links compreensíveis;
* datas legíveis;
* tabelas acessíveis ou substituídas;
* foco;
* contraste;
* navegação por teclado;
* evidências não identificadas apenas por ícone;
* ausência de headings decorativos.

# Responsividade

Validar:

* 320 px;
* 375 px;
* 768 px;
* 1024 px;
* 1440 px.

Confirmar:

* ausência de overflow;
* timeline legível;
* cards adaptáveis;
* evidências legíveis;
* status claros;
* datas não quebradas;
* CTAs acessíveis;
* nenhum path local visível;
* nenhuma tabela horizontal problemática.

# Performance

Não introduzir:

* CMS;
* banco;
* bibliotecas de timeline;
* gráficos;
* animações pesadas;
* vídeos automáticos;
* Client Components desnecessários;
* novas dependências sem justificativa.

Registrar First Load JS antes e depois.

# Verificador específico

Criar:

`scripts/verify-cases-evidence.mjs`

Adicionar:

`verify:cases-evidence`

O verificador deve proteger:

## `/cases`

* H1;
* explicação de aplicação versus eficácia;
* registro de casos reais;
* HORA.city;
* estado do caso;
* fatos;
* hipóteses;
* desconhecidos;
* limitações;
* evidências;
* timeline;
* claims autorizados;
* ausência de claims proibidos;
* links válidos.

## `/lablog`

* H1;
* definição de LabLog;
* diferença entre entrada e caso;
* datas;
* estados;
* proveniência;
* ausência de entradas inventadas;
* links válidos.

## Global

* H1 único;
* IDs únicos;
* metadata;
* CTAs;
* PT-BR;
* ausência de paths locais;
* ausência de dados sensíveis;
* ausência de claims de transferibilidade;
* mission-critical apenas como futuro;
* nenhuma rota nova de caso sem aprovação.

Atualizar verificadores anteriores somente quando necessário.

# Evidências da Sprint 5

No documento:

`docs/sprints para v3/Sprint 5 - Casos Evidencias e Proveniencia.md`

registre:

## Baseline

* data;
* timezone;
* branch;
* commit;
* git status;
* versões;
* gates iniciais.

## Inventário real

* casos encontrados;
* evidências encontradas;
* entradas encontradas;
* conteúdos não localizados;
* conteúdos não publicáveis;
* fontes;
* datas;
* status.

## Arquitetura anterior

Para `/cases` e `/lablog`:

* ordem;
* headings;
* CTAs;
* metadata;
* claims;
* lacunas;
* promessas não materializadas.

## Arquitetura final

* ordem;
* componentes;
* headings;
* CTAs;
* estados;
* evidências;
* proveniência;
* metadata.

## Cases

Para cada caso publicado:

* identidade;
* escopo;
* estado;
* evidências;
* claims;
* limitações;
* próximos passos.

## Evidências

Para cada evidência publicada:

* id;
* tipo;
* origem;
* status;
* claim relacionado;
* acesso;
* limitação.

## LabLogs

Para cada entrada publicada:

* id;
* data;
* tipo;
* caso;
* evidências;
* estado;
* proveniência.

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
* omitido;
* não localizado;
* não publicável.

## Arquivos

Para cada arquivo alterado:

* caminho;
* motivo;
* risco;
* validação.

# Validação técnica

Execute sequencialmente:

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
npm.cmd run verify:cases-evidence
```

Não executar builds concorrentes sobre `.next`.

Registrar:

* resultado;
* duração;
* warnings;
* falhas;
* correções.

Warnings preexistentes devem ser documentados, não corrigidos fora do escopo.

# Validação visual

Validar `/cases` e `/lablog` em:

* 320 px;
* 375 px;
* 768 px;
* 1024 px;
* 1440 px.

Verificar:

* primeiro viewport;
* clareza da proveniência;
* estados;
* fatos;
* hipóteses;
* desconhecidos;
* limitações;
* timeline;
* evidências;
* LabLogs;
* CTAs;
* teclado;
* foco;
* overflow;
* legibilidade;
* coerência com as Sprints 1–4.

# Evidências separadas

Classificar no relatório:

* fonte;
* conteúdo renderizado;
* build;
* execução local observada;
* produção;
* evidência externa.

Não tratar build como runtime.

Não tratar caso interno como evidência externa.

# Critérios de conclusão

A Sprint 5 estará concluída quando:

* `/cases` funcionar como registro público de casos aplicados;
* `/lablog` funcionar como registro datado do trabalho;
* somente casos reais forem apresentados;
* HORA.city estiver corretamente delimitado;
* estado, etapa, fatos, hipóteses, desconhecidos e limitações estiverem separados;
* evidências públicas possuírem origem;
* conteúdos não localizados não forem apresentados como disponíveis;
* uma entrada de LabLog não for confundida com caso completo;
* aplicação estiver diferenciada de eficácia;
* claims proibidos estiverem ausentes;
* dados sensíveis estiverem protegidos;
* metadata estiver alinhada;
* verificadores passarem;
* acessibilidade, responsividade e performance estiverem validadas;
* nenhuma atividade da Sprint 6 tiver sido iniciada;
* o documento da Sprint 5 estiver completo.

# Resposta final do Codex

Ao concluir, apresente:

1. caminho do documento da Sprint 5;
2. branch;
3. commit inicial e final;
4. confirmação da leitura das Sprints 0–4;
5. quantidade de casos reais localizados;
6. quantidade de casos publicados;
7. quantidade de evidências localizadas;
8. quantidade de evidências publicadas;
9. quantidade de entradas LabLog localizadas;
10. quantidade de entradas publicadas;
11. resumo da nova arquitetura de `/cases`;
12. resumo da nova arquitetura de `/lablog`;
13. estado do caso HORA.city;
14. conteúdos preservados;
15. conteúdos omitidos por falta de evidência;
16. claims reformulados;
17. arquivos alterados;
18. resultado de lint;
19. resultado de TypeScript;
20. resultado de build;
21. resultado dos verificadores;
22. resultado visual;
23. impacto em First Load JS;
24. limitações;
25. decisões pendentes;
26. confirmação de que nenhuma Sprint 6 foi iniciada.

Status final:

`Sprint 5 concluída. Aguardando aprovação humana antes da Sprint 6.`
