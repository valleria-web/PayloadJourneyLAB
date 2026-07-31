# Sprint 6 — Procedimento investigativo, métodos e prática do Trace Engineer

## Contexto

Este repositório contém o site oficial do Payload Journey LAB.

As Sprints 0 a 5 foram concluídas.

A homepage já apresenta uma progressão compreensível para estudantes e developers:

```text
Dor
→ Competências
→ Trilha
→ Demo pedagógica
→ Formação fundamental
→ Caso real HORA.city
```

A Sprint 5 reposicionou a Formação e o HORA.city, produzindo a seguinte ordem:

```text
Header
Hero
Dor e estratégia
Competências
Trilha progressiva
Demo pedagógica
Formação fundamental
HORA.city
O LAB
Métodos
Ecossistema
LabLog
Sobre
CTA final
Footer
```

O estado funcional confirmado ao final da Sprint 5 é:

```text
branch: refactor/homepage-v0.2.0
version: 0.2.0

rota /: 7,03 kB
First Load JS: 94,3 kB
Shared JS: 87,2 kB
Client Components: 1

HTML estático: 207.783 bytes
CSS gerado: 28.636 bytes
```

A narrativa pública do HORA.city utiliza:

```text
sourceStrategy: shared-confirmed-facts
editorialResolution: unresolved
```

As variantes `rendered` e `audited` continuam preservadas na fonte server-side e não devem ser resolvidas nesta sprint.

Antes de editar, leia integralmente:

```text
docs/homepage-refactor/00-project-audit.md
docs/homepage-refactor/01-homepage-structure.md
docs/homepage-refactor/02-content-inventory.md
docs/homepage-refactor/03-assets-and-links.md
docs/homepage-refactor/04-technical-baseline.md
docs/homepage-refactor/05-refactor-risks.md
docs/homepage-refactor/06-content-migration-matrix.md
docs/homepage-refactor/07-content-architecture.md
docs/homepage-refactor/08-sprint-1-report.md
docs/homepage-refactor/09-design-foundation.md
docs/homepage-refactor/10-sprint-2-report.md
docs/homepage-refactor/11-entry-experience.md
docs/homepage-refactor/12-sprint-3-report.md
docs/homepage-refactor/13-learning-path-and-flow-demo.md
docs/homepage-refactor/14-sprint-4-report.md
docs/homepage-refactor/15-training-and-case-study.md
docs/homepage-refactor/16-sprint-5-report.md
```

A pasta:

```text
docs/sprints para v2/
```

faz parte oficialmente do repositório.

Seus documentos devem ser preservados e não modificados durante a implementação, salvo instrução explícita.

---

# Objetivo da sprint

Apresentar a profundidade metodológica do Payload Journey LAB somente depois de o visitante já compreender a habilidade, a Trilha, a Formação e o caso real.

Resultado principal:

**O visitante entende como o LAB investiga sistemas, quais instrumentos utiliza e qual é o papel do Trace Engineer.**

A Sprint 6 deverá implementar ou refatorar:

1. O procedimento Congelar, Mapear, Detectar e Restaurar.
2. Os cinco métodos do LAB.
3. A relação entre os métodos e o procedimento.
4. Track Mode.
5. Trace Engineer.
6. Software System Investigation.
7. Evidência, autoridade e restauração.
8. A transição entre HORA.city e a dimensão metodológica do LAB.
9. A nova organização das seções posteriores ao caso real.

---

# Princípio central

## A metodologia aparece depois da experiência concreta

O visitante já viu:

```text
o problema
→ a habilidade
→ a progressão
→ o flow
→ a formação
→ a aplicação real
```

Agora a página deverá responder:

```text
Como uma investigação é conduzida?
↓
Que instrumentos sustentam cada etapa?
↓
Como os métodos se relacionam?
↓
O que faz um Trace Engineer?
↓
O que significa investigar um sistema com evidência?
```

A metodologia não deve reaparecer como uma coleção de nomes desconectados.

O procedimento deverá funcionar como eixo organizador.

Os métodos deverão aparecer como instrumentos utilizados em momentos específicos da investigação.

---

# Escopo da Sprint 6

## Dentro do escopo

* criar ou refatorar a seção do procedimento investigativo;
* apresentar Congelar, Mapear, Detectar e Restaurar;
* refatorar a seção dos cinco métodos;
* explicar a função de cada método;
* conectar métodos às etapas investigativas;
* criar ou refatorar a seção de prática investigativa;
* apresentar Track Mode;
* apresentar Trace Engineer;
* apresentar Software System Investigation;
* reposicionar as seções metodológicas após HORA.city;
* centralizar a nova copy;
* atualizar tipos;
* atualizar anchors;
* atualizar CTAs internos;
* reduzir duplicações;
* preservar conteúdo histórico;
* atualizar testes;
* atualizar matriz e documentação;
* validar acessibilidade, responsividade e performance.

## Fora do escopo

Não implementar nesta sprint:

* resolução editorial do HORA.city;
* confirmação do flow técnico do caso;
* schema real do payload;
* demo aprofundada;
* logs reais;
* checkpoints executáveis;
* protocolo documental completo;
* Freeze Record completo;
* Checkpoint Plan completo;
* Detection Report completo;
* Trace Evidence Record completo;
* Trace Evidence Package completo;
* restauração real do caso;
* refatoração completa do LabLog;
* refatoração completa de Sobre;
* nova página de métodos;
* nova página de Trace Engineer;
* integração com vídeo;
* integração com YouTube;
* definição do canal oficial;
* definição de validade do cupom;
* atualização de dependências;
* correção das vulnerabilidades do npm;
* refatoração do Google Analytics;
* deploy;
* alteração da versão.

---

# Etapa 1 — Preflight

Antes de qualquer edição:

1. Confirmar a branch ativa:

```text
refactor/homepage-v0.2.0
```

2. Confirmar a versão:

```text
0.2.0
```

3. Confirmar o commit atual.

4. Confirmar o estado Git real.

5. Identificar alterações preexistentes.

6. Não descartar, sobrescrever ou incluir silenciosamente alterações externas.

7. Confirmar a presença dos documentos 00 a 16.

8. Confirmar que os documentos em `docs/sprints para v2/` são oficiais e rastreados.

9. Registrar seus hashes iniciais para demonstrar preservação, caso exista diff preexistente.

10. Executar:

```bash
npm.cmd run lint
npm.cmd exec tsc -- --noEmit
npm.cmd run build
npm.cmd run verify:homepage
npm.cmd run verify:foundation
```

11. Registrar:

```text
rota /: 7,03 kB
First Load JS: 94,3 kB
Shared JS: 87,2 kB
Client Components: 1
HTML estático: 207.783 bytes
CSS gerado: 28.636 bytes
```

12. Registrar os warnings preexistentes do cache Webpack separadamente.

Não iniciar a implementação caso exista regressão não compreendida.

Não realizar:

* staging;
* commit;
* push;
* pull;
* merge;
* rebase;
* tag;
* deploy;
* checkout;
* troca de branch;
* atualização de dependências.

---

# Etapa 2 — Definir a nova ordem da homepage

Atualizar `app/page.tsx` para esta progressão:

```text
Header
Hero
Dor e estratégia
Competências
Trilha progressiva
Demo pedagógica
Formação fundamental
HORA.city
Procedimento investigativo
Métodos e instrumentos
Prática investigativa
O LAB
Ecossistema
LabLog
Sobre
CTA final
Footer
```

## Regras

* Procedimento investigativo deve aparecer imediatamente após HORA.city.
* Métodos devem aparecer depois do procedimento.
* Prática investigativa deve aparecer depois dos métodos.
* O LAB e Ecossistema devem aparecer depois da prática.
* LabLog, Sobre, CTA final e Footer devem manter sua ordem relativa.
* Nenhuma seção deve ser removida.
* Nenhum anchor antigo deve ser removido.
* Conteúdo atualmente existente em O LAB, Métodos e Ecossistema deve ser migrado, preservado ou explicitamente registrado.

---

# Etapa 3 — Atualizar contratos e fontes de conteúdo

Atualizar:

```text
types/content.ts
content/methods.ts
content/payload-journey-lab.ts
content/site.ts
```

ou as fontes canônicas correspondentes.

Criar contratos explícitos para:

## Procedimento investigativo

* ID;
* número;
* verbo;
* nome em inglês, quando já existente;
* pergunta investigativa;
* descrição;
* entrada;
* atividade;
* resultado;
* evidência produzida;
* métodos relacionados.

## Métodos

* ID;
* título;
* categoria;
* propósito;
* quando utilizar;
* pergunta respondida;
* resultado;
* etapas relacionadas;
* relação com os outros métodos;
* CTA interno, quando existir.

## Prática investigativa

* Track Mode;
* Trace Engineer;
* Software System Investigation;
* evidência;
* autoridade;
* restauração;
* observação antes de modificação;
* sequência operacional.

Não utilizar `any`.

Não duplicar tipos existentes.

Não transformar a camada de conteúdo numa engine genérica de workflow.

---

# Etapa 4 — Criar o procedimento investigativo

Adicionar uma fonte canônica para:

```text
Congelar
→ Mapear
→ Detectar
→ Restaurar
```

Utilizar IDs estáveis:

```text
freeze
map
detect
restore
```

Preservar os termos anteriores em inglês quando já fizerem parte da identidade:

```text
Freeze
Map
Detect
Restore
```

Os verbos em português devem ser os títulos principais.

---

## Etapa 01 — Congelar

### ID

```text
freeze
```

### Número

```text
01
```

### Título

```text
Congelar
```

### Pergunta investigativa

```text
Qual comportamento precisa ser preservado antes de qualquer alteração?
```

### Descrição

```text
Delimite o caso, registre o comportamento observável e preserve as condições necessárias para reproduzi-lo.
```

### Entrada

* anomalia ou comportamento observado;
* flow selecionado;
* comportamento esperado, quando conhecido.

### Atividade

* delimitar o caso;
* interromper alterações especulativas;
* registrar contexto;
* preservar evidências iniciais;
* definir o recorte investigável.

### Resultado

```text
Um caso estável e reproduzível, pronto para ser investigado.
```

### Evidência produzida

Utilizar linguagem genérica:

```text
registro do estado observado
```

Não apresentar ainda o template completo do Freeze Record.

---

## Etapa 02 — Mapear

### ID

```text
map
```

### Número

```text
02
```

### Título

```text
Mapear
```

### Pergunta investigativa

```text
Por onde o payload realmente atravessa o sistema?
```

### Descrição

```text
Reconstrua o caminho operacional, identifique fronteiras, representações, transformações, transportes e pontos de decisão.
```

### Atividade

* localizar a origem da interação;
* identificar o payload;
* seguir componentes reais;
* registrar mudanças de representação;
* posicionar checkpoints candidatos;
* construir o Operational Payload Path.

### Resultado

```text
Um caminho operacional explícito e verificável.
```

### Evidência produzida

```text
mapa do flow e checkpoints candidatos
```

---

## Etapa 03 — Detectar

### ID

```text
detect
```

### Número

```text
03
```

### Título

```text
Detectar
```

### Pergunta investigativa

```text
Em que ponto o comportamento observado diverge do esperado ou do modelo?
```

### Descrição

```text
Confronte evidências produzidas nos checkpoints, compare representações e determine onde surgiu a divergência relevante.
```

### Atividade

* executar ou observar o flow;
* recolher evidências;
* comparar checkpoints;
* confrontar observado e esperado;
* identificar a primeira divergência relevante;
* localizar decisão, transformação ou autoridade envolvida.

### Resultado

```text
Uma divergência sustentada por evidências, não apenas uma hipótese.
```

### Evidência produzida

```text
registro da divergência detectada
```

## Regra semântica obrigatória

Detectar não pode ser descrito como:

* procurar uma linha errada;
* encontrar rapidamente o bug;
* adivinhar a causa;
* apontar o arquivo suspeito.

Detectar significa:

```text
confrontar evidências
→ reconhecer a divergência
→ localizar o ponto investigativo relevante
```

---

## Etapa 04 — Restaurar

### ID

```text
restore
```

### Número

```text
04
```

### Título

```text
Restaurar
```

### Pergunta investigativa

```text
Que autoridade, regra ou comportamento precisa ser corrigido e validado?
```

### Descrição

```text
Aplique a mudança mínima necessária, restaure o comportamento desejado e percorra novamente o flow para validar o resultado.
```

### Atividade

* corrigir a autoridade ou regra;
* evitar mudanças fora do recorte;
* reexecutar checkpoints;
* comparar antes e depois;
* confirmar invariantes;
* documentar o resultado.

### Resultado

```text
Um comportamento restaurado e validado através do mesmo flow investigado.
```

### Evidência produzida

```text
validação do comportamento restaurado
```

Não afirmar que restauração é apenas correção de código.

---

# Etapa 5 — Implementar a seção do procedimento

Criar:

```text
components/sections/InvestigationCycleSection.tsx
```

ou nome equivalente coerente com o projeto.

## ID sugerido

```text
procedimento
```

Adicionar o anchor à fonte canônica.

## Eyebrow

```text
Procedimento investigativo
```

## Título

```text
Congelar, Mapear, Detectar e Restaurar
```

## Descrição

```text
Uma investigação confiável preserva o comportamento, reconstrói o flow, confronta evidências e somente então modifica o sistema.
```

## Requisitos

A seção deverá:

* utilizar `Section`;
* utilizar `Container`;
* utilizar `SectionHeader`;
* utilizar lista ordenada;
* renderizar quatro etapas a partir da fonte central;
* utilizar `h2` na seção;
* utilizar `h3` nas etapas;
* apresentar pergunta, atividade, resultado e evidência;
* permanecer Server Component;
* funcionar sem JavaScript;
* não depender de hover;
* não usar acordeão obrigatório;
* não apresentar templates documentais completos;
* evitar excesso de texto visível simultaneamente.

## Responsividade

### Mobile

* uma etapa por linha;
* ordem 01–04;
* pergunta destacada;
* resultado facilmente identificável;
* nenhuma linha conectora atravessando o conteúdo.

### Tablet

* uma ou duas colunas;
* sequência inequívoca.

### Desktop

* quatro etapas apenas se a leitura permanecer confortável;
* duas colunas são aceitáveis;
* não comprimir perguntas e resultados.

---

# Etapa 6 — Refatorar os cinco métodos

Os cinco métodos oficiais são:

```text
Payload Journey
USMT
Reverse Payload Journey
Operational Payload Path
Track to Origin
```

Utilizar IDs estáveis:

```text
payload-journey
usmt
reverse-payload-journey
operational-payload-path
track-to-origin
```

Preservar todo conteúdo histórico e técnico já centralizado.

Criar uma apresentação pública clara.

---

## Payload Journey

### Categoria

```text
Observar
```

### Propósito

```text
Seguir a informação através das camadas e representações de um flow.
```

### Quando utilizar

```text
Quando é necessário compreender como uma interação percorre o sistema de ponta a ponta.
```

### Pergunta respondida

```text
Por onde o payload atravessa e como muda ao longo do caminho?
```

### Resultado

```text
Uma visão operacional do flow.
```

### Relação principal

* Entenda o Payload;
* Payload Journey;
* Mapear.

---

## USMT

### Categoria

```text
Modelar
```

### Propósito

```text
Organizar estados, eventos, transições, invariantes, camadas, métricas e condições de término.
```

### Quando utilizar

```text
Quando é necessário tornar explícito o modelo que orienta a interpretação das evidências.
```

### Pergunta respondida

```text
Que estados, regras e invariantes definem o comportamento esperado?
```

### Resultado

```text
Um modelo estrutural para confrontar sistema e evidência.
```

### Relação principal

* Congelar;
* Detectar;
* Restaurar.

Não apresentar toda a USMT de doze passos nesta sprint.

---

## Reverse Payload Journey

### Categoria

```text
Investigar
```

### Propósito

```text
Partir de um comportamento observável e reconstruir o caminho em sentido reverso.
```

### Quando utilizar

```text
Quando existe uma anomalia e sua origem ainda não é conhecida.
```

### Pergunta respondida

```text
De onde veio o comportamento que chegou à interface?
```

### Resultado

```text
Uma investigação orientada pela anomalia e pelo flow.
```

### Relação principal

* Congelar;
* Mapear;
* Detectar.

---

## Operational Payload Path

### Categoria

```text
Mapear
```

### Propósito

```text
Registrar a trajetória concreta do payload através de componentes, fronteiras e representações reais.
```

### Quando utilizar

```text
Quando a arquitetura abstrata precisa ser convertida num caminho operacional investigável.
```

### Pergunta respondida

```text
Quais componentes reais transportam, transformam ou decidem?
```

### Resultado

```text
Um mapa explícito com pontos candidatos a checkpoints.
```

### Relação principal

* Mapear;
* Payload Journey;
* Reverse Payload Journey.

---

## Track to Origin

### Categoria

```text
Rastrear a origem
```

### Propósito

```text
Conduzir a investigação até a primeira decisão técnica, temporal ou semântica relevante.
```

### Quando utilizar

```text
Quando a divergência já foi localizada, mas ainda é necessário identificar sua autoridade de origem.
```

### Pergunta respondida

```text
Onde nasceu a decisão que determinou o comportamento?
```

### Resultado

```text
Uma origem investigativa sustentada por evidências.
```

### Relação principal

* Detectar;
* Restaurar;
* autoridade.

Não afirmar que Track to Origin sempre encontra uma única linha ou arquivo.

---

# Etapa 7 — Refatorar a seção dos métodos

Modificar o componente atual:

```text
components/sections/MethodsSection.tsx
```

e, quando necessário:

```text
components/sections/UsmtSection.tsx
```

ou os componentes reais identificados.

## ID

Preservar:

```text
metodos
```

## Eyebrow

```text
Métodos e instrumentos
```

## Título

```text
Cada método responde a uma pergunta diferente
```

## Descrição

```text
Os métodos do LAB não competem entre si. Eles sustentam momentos diferentes da compreensão, do mapping e da investigação.
```

## Requisitos

A seção deverá:

* consumir conteúdo centralizado;
* apresentar os cinco métodos;
* mostrar categoria;
* mostrar propósito;
* mostrar quando utilizar;
* mostrar pergunta respondida;
* mostrar resultado;
* relacionar cada método ao procedimento;
* evitar cinco descrições que pareçam sinônimos;
* permanecer Server Component;
* evitar hover obrigatório;
* não incluir a USMT completa;
* não incluir protocolo documental completo.

## Composição visual

Pode utilizar:

* cards;
* lista estruturada;
* matriz simples;
* grupos por função.

Não utilizar tabela larga no mobile.

Não criar filtro ou tabs interativas.

---

# Etapa 8 — Criar relação entre procedimento e métodos

A interface deve deixar explícito que:

```text
Procedimento = sequência investigativa
Métodos = instrumentos utilizados durante a sequência
```

Não apresentar:

```text
Payload Journey
USMT
Reverse Payload Journey
Operational Payload Path
Track to Origin
Congelar
Mapear
Detectar
Restaurar
```

como nove elementos no mesmo nível.

## Relação recomendada

### Congelar

Métodos relacionados:

* USMT;
* Reverse Payload Journey.

### Mapear

Métodos relacionados:

* Payload Journey;
* Operational Payload Path;
* Reverse Payload Journey.

### Detectar

Métodos relacionados:

* Reverse Payload Journey;
* USMT;
* Track to Origin.

### Restaurar

Métodos relacionados:

* Track to Origin;
* USMT;
* Payload Journey para validação do flow.

A relação deve aparecer textualmente ou por labels.

Não depender apenas de cor ou linhas gráficas.

---

# Etapa 9 — Criar a prática investigativa

Criar uma fonte pública tipada para:

```text
Track Mode
Trace Engineer
Software System Investigation
```

---

## Track Mode

### Título

```text
Track Mode
```

### Definição

```text
Um estado operacional no qual a prioridade deixa de ser modificar o sistema e passa a ser observar, mapear e produzir evidências.
```

### Princípio

```text
Observe antes de modificar.
```

### Ações

* suspender mudanças especulativas;
* selecionar um flow;
* acompanhar o payload;
* registrar checkpoints;
* confrontar evidências;
* preservar o recorte investigativo.

Não apresentar Track Mode como ferramenta, produto ou funcionalidade automática.

---

## Trace Engineer

### Título

```text
Trace Engineer
```

### Definição

```text
Uma função investigativa dedicada a reconstruir flows, seguir payloads, confrontar evidências e rastrear decisões até sua origem.
```

### Responsabilidades

* delimitar casos;
* selecionar flows;
* produzir mapas operacionais;
* posicionar checkpoints;
* interpretar evidências;
* identificar divergências;
* rastrear autoridade;
* validar restaurações;
* documentar a investigação.

Não apresentar Trace Engineer como cargo reconhecido formalmente pelo mercado ou certificação existente.

Utilizar linguagem como:

```text
função investigativa proposta e desenvolvida pelo LAB
```

quando necessário.

---

## Software System Investigation

### Título

```text
Software System Investigation
```

### Definição

```text
Uma prática estrutural de investigação baseada em tracing, modelagem, checkpoints, evidências e reconstrução de decisões.
```

### Elementos

* payload;
* flow;
* modelo;
* checkpoints;
* evidências;
* divergência;
* autoridade;
* restauração;
* validação.

### Resultado

```text
Compreensão investigativa suficiente para modificar o sistema com menor incerteza.
```

Não apresentar o termo como disciplina formalmente padronizada fora do contexto do LAB.

---

# Etapa 10 — Implementar a seção de prática investigativa

Criar:

```text
components/sections/InvestigationPracticeSection.tsx
```

ou nome equivalente.

## ID sugerido

```text
pratica-investigativa
```

Adicionar o anchor à fonte central.

## Eyebrow

```text
Prática investigativa
```

## Título

```text
Da observação à restauração
```

## Descrição

```text
O Payload Journey LAB reúne procedimento, métodos e evidências numa prática dedicada a compreender sistemas antes de modificá-los.
```

## Progressão operacional

Apresentar:

```text
Track Mode
→ Reverse Payload Journey
→ Track to Origin
→ Evidência
→ Restauração
```

Essa progressão não deve substituir o ciclo oficial.

Ela representa a prática operacional.

## Blocos principais

1. Track Mode.
2. Trace Engineer.
3. Software System Investigation.

## Requisitos

* usar conteúdo centralizado;
* permanecer Server Component;
* utilizar `h2` e `h3`;
* evitar claims de certificação;
* evitar claims de reconhecimento externo;
* apresentar evidência e autoridade como conceitos centrais;
* funcionar no mobile;
* não criar interação obrigatória;
* não duplicar integralmente os métodos.

---

# Etapa 11 — Refatorar O LAB e Ecossistema apenas quando necessário

As seções atuais:

```text
O LAB
Ecossistema
```

devem permanecer depois da prática investigativa.

Nesta sprint, realizar apenas ajustes necessários para evitar duplicação direta com as novas seções.

## Permitido

* remover repetição literal;
* condensar explicações já apresentadas;
* transferir conteúdo para a nova seção;
* atualizar transições;
* preservar os quatro pilares;
* preservar formação, pesquisa, investigação aplicada e colaboração.

## Não permitido

* redesenhar integralmente O LAB;
* refatorar completamente o ecossistema;
* remover pilares;
* introduzir novas áreas institucionais;
* alterar a missão do LAB.

Cada migração deve ser registrada na matriz.

---

# Etapa 12 — Atualizar navegação e CTAs

O Header atual possui:

```text
Aprender
Trilha
Demo
Formação
Caso real
O LAB
```

Preservar o Header, salvo necessidade clara.

Não aumentar novamente o número de links.

## Acesso ao procedimento e métodos

Os novos conteúdos devem estar acessíveis através de:

* fluxo natural da página;
* Footer;
* links internos nas seções;
* anchors existentes.

O Footer deve continuar independente.

## CTA do caso HORA.city

Preservar:

```text
Acompanhar o caso no LabLog → #lablog
Rever o flow → #demo
```

Não adicionar terceiro CTA.

## CTA ao final da prática investigativa

Utilizar um destino já existente.

Opção recomendada:

```text
Conhecer o LAB
```

Destino:

```text
#lab
```

Texto de apoio:

```text
Veja como formação, pesquisa e investigação aplicada se conectam.
```

Não criar destino novo sem conteúdo.

---

# Etapa 13 — Atualizar anchors

Adicionar à fonte canônica:

```text
procedimento
pratica-investigativa
```

Preservar:

```text
inicio
aprender
competencias
trilha
demo
formacao
case-study
lab
metodos
lablog
```

e todos os demais anchors existentes.

Verificar:

* IDs únicos;
* links válidos;
* `scroll-margin-top`;
* sticky header;
* Footer independente;
* nenhum destino ausente.

---

# Etapa 14 — Atualizar smoke tests

Atualizar:

```text
scripts/verify-homepage.mjs
scripts/verify-design-foundation.mjs
```

quando necessário.

Validar no mínimo:

## Ordem

```text
#case-study
antes de
#procedimento
antes de
#metodos
antes de
#pratica-investigativa
antes de
#lab
```

## Procedimento

* quatro etapas existem;
* ordem 01–04;
* IDs `freeze`, `map`, `detect`, `restore`;
* cada etapa possui pergunta;
* cada etapa possui resultado;
* Detectar menciona confronto de evidências;
* Restaurar menciona validação;
* nenhuma etapa foi apresentada como debugging aleatório.

## Métodos

* cinco métodos existem;
* IDs estáveis;
* categorias distintas;
* propósito;
* pergunta;
* resultado;
* relação com o procedimento;
* USMT não foi expandida integralmente;
* Track to Origin não promete uma linha única.

## Prática

* Track Mode existe;
* Trace Engineer existe;
* Software System Investigation existe;
* função investigativa não é apresentada como certificação;
* evidência e autoridade aparecem;
* CTA aponta para `#lab`.

## Preservação

* exatamente um H1;
* Header permanece válido;
* Footer independente;
* HORA.city continua `unresolved`;
* Formação preservada;
* Demo preservada;
* links Udemy e YouTube preservados;
* cupom continua com `expiration: null`;
* Client Components continuam em 1;
* variantes HORA.city permanecem fora do HTML.

Não criar snapshots rígidos de classes.

Não instalar framework novo.

---

# Etapa 15 — Atualizar a matriz de migração

Atualizar:

```text
docs/homepage-refactor/06-content-migration-matrix.md
```

Registrar:

* procedimento implementado;
* quatro verbos reposicionados;
* métodos refatorados;
* relação procedimento/métodos implementada;
* Track Mode reposicionado;
* Trace Engineer reposicionado;
* Software System Investigation reposicionada;
* conteúdo antigo do Hero reaproveitado;
* conteúdo duplicado removido das seções posteriores;
* O LAB preservado;
* Ecossistema preservado;
* templates documentais ainda pendentes;
* demo aprofundada ainda pendente;
* HORA.city ainda unresolved;
* LabLog e Sobre ainda não refatorados integralmente.

Não marcar itens das Sprints 7 e 8 como concluídos.

---

# Etapa 16 — Documentação

Criar:

```text
docs/homepage-refactor/17-investigation-methodology.md
docs/homepage-refactor/18-sprint-6-report.md
```

## `17-investigation-methodology.md`

Deve conter:

### 1. Objetivo

Explicar por que a metodologia aparece depois de Formação e caso real.

### 2. Procedimento

Documentar:

* Congelar;
* Mapear;
* Detectar;
* Restaurar;
* perguntas;
* resultados;
* evidências.

### 3. Semântica de Detectar

Explicar explicitamente:

```text
detectar não é adivinhar
detectar é confrontar evidências
```

### 4. Métodos

Documentar os cinco métodos:

* propósito;
* momento de uso;
* pergunta respondida;
* resultado;
* relação com o procedimento.

### 5. Prática investigativa

Documentar:

* Track Mode;
* Trace Engineer;
* Software System Investigation;
* evidência;
* autoridade;
* restauração.

### 6. Limites editoriais

Registrar:

* ausência de certificação;
* ausência de reconhecimento externo alegado;
* ausência de templates completos;
* ausência de protocolo completo;
* HORA.city ainda unresolved.

### 7. Acessibilidade

Documentar:

* headings;
* listas;
* labels;
* ordem de leitura;
* contraste;
* reduced motion.

### 8. Responsividade

Documentar as seis larguras.

### 9. Preparação para a Sprint 7

Explicar como O LAB, Ecossistema, LabLog, Sobre e CTA final serão consolidados.

---

## `18-sprint-6-report.md`

Utilizar:

```text
# Sprint 6 — Relatório

## Objetivo

## Estado inicial

## Arquivos criados

## Arquivos modificados

## Nova ordem da homepage

## Procedimento investigativo

## Semântica de Detectar

## Métodos e instrumentos

## Relação procedimento/métodos

## Track Mode

## Trace Engineer

## Software System Investigation

## Navegação e CTAs

## Conteúdo preservado

## Matriz de migração

## Acessibilidade

## Contraste

## Responsividade

## Performance

## Validações

## Diferenças visuais esperadas

## Áreas não alteradas

## Problemas encontrados

## Riscos remanescentes

## Recomendação para a Sprint 7
```

---

# Etapa 17 — Acessibilidade

Validar:

* exatamente um `h1`;
* Procedimento, Métodos e Prática em `h2`;
* cards e blocos internos em `h3`;
* listas semanticamente corretas;
* ordem DOM igual à ordem visual;
* perguntas e resultados associados às etapas;
* nenhuma relação depende apenas de cor;
* links e botões semanticamente corretos;
* foco visível;
* contraste WCAG AA;
* reduced motion;
* sticky header;
* menu mobile;
* Escape;
* retorno de foco;
* nenhuma nova fronteira Client Component;
* conteúdo compreensível sem hover.

Não adicionar ARIA redundante.

---

# Etapa 18 — Responsividade

Validar:

```text
360×800
390×844
768×1024
1024×768
1280×800
1440×900
```

## Procedimento

### Mobile

* etapas em sequência vertical;
* pergunta e resultado legíveis;
* detalhes sem densidade excessiva;
* sem conectores atravessando texto.

### Tablet

* uma ou duas colunas;
* ordem 01–04 preservada.

### Desktop

* duas ou quatro colunas conforme legibilidade;
* nenhuma etapa excessivamente estreita.

## Métodos

### Mobile

* um método por bloco;
* categoria visível;
* propósito e pergunta legíveis;
* relação com o procedimento com wrapping natural.

### Desktop

* grid equilibrado;
* nenhuma tabela larga;
* cards com alturas naturais.

## Prática investigativa

### Mobile

* Track Mode, Trace Engineer e Software System Investigation em sequência;
* progressão operacional legível;
* CTA acessível.

### Desktop

* composição equilibrada;
* sem excesso de blocos;
* hierarquia clara entre função, prática e procedimento.

---

# Etapa 19 — Performance

Comparar com a Sprint 5:

```text
rota /: 7,03 kB
First Load JS: 94,3 kB
Shared JS: 87,2 kB
Client Components: 1
HTML: 207.783 bytes
CSS: 28.636 bytes
```

É esperado crescimento de HTML e CSS devido às novas seções.

Não aceitar:

* aumento injustificado de JavaScript;
* nova dependência;
* nova biblioteca de ícones;
* nova biblioteca de animação;
* tabs interativas;
* acordeões client-side;
* runtime para layout;
* novo Client Component;
* envio de conteúdo histórico desnecessário ao client.

A quantidade de Client Components deverá permanecer:

```text
1
```

---

# Etapa 20 — Validação visual

Capturar screenshots temporários nas seis larguras.

Não sobrescrever:

```text
docs/homepage-refactor/baseline/
```

Validar:

* Hero;
* entrada;
* Trilha;
* Demo;
* Formação;
* HORA.city;
* Procedimento;
* Métodos;
* Prática investigativa;
* transição para O LAB;
* página completa;
* Header;
* menu mobile;
* Footer;
* foco;
* CTAs;
* ausência de overflow.

## Mudanças visuais esperadas

* procedimento inserido;
* métodos reorganizados;
* prática investigativa inserida;
* O LAB deslocado;
* Ecossistema deslocado;
* redução de duplicações;
* aumento da altura total.

## Áreas que devem permanecer preservadas

* Header;
* Hero;
* Dor;
* Competências;
* Trilha;
* Demo;
* Formação;
* HORA.city;
* conteúdo factual do caso;
* LabLog;
* Sobre;
* CTA final;
* Footer.

---

# Etapa 21 — Validação final

Executar:

```bash
npm.cmd run lint
npm.cmd exec tsc -- --noEmit
npm.cmd run build
npm.cmd run verify:homepage
npm.cmd run verify:foundation
npm.cmd run dev
git diff --check
git status --short --branch
```

Validar também:

* HTTP 200;
* console;
* hydration;
* exatamente um H1;
* ordem das seções;
* menu desktop;
* menu mobile;
* Escape;
* retorno de foco;
* anchors;
* CTAs;
* links externos;
* contraste;
* overflow;
* bundle;
* HTML;
* CSS;
* Shared JS;
* Client Components;
* HORA.city unresolved;
* Formação preservada;
* Demo preservada;
* documentos oficiais das sprints preservados.

Registrar warnings preexistentes separadamente.

---

# Critérios de aceite

A Sprint 6 estará concluída somente quando:

* os documentos anteriores tiverem sido lidos;
* Procedimento estiver imediatamente após HORA.city;
* Métodos estiverem depois do Procedimento;
* Prática investigativa estiver depois dos Métodos;
* O LAB estiver depois da Prática;
* quatro etapas estiverem presentes;
* ordem Congelar → Mapear → Detectar → Restaurar estiver preservada;
* cada etapa possuir pergunta, descrição, resultado e evidência;
* Detectar estiver semanticamente alinhado ao confronto de evidências;
* Restaurar incluir validação do mesmo flow;
* cinco métodos estiverem presentes;
* cada método possuir categoria, propósito, momento de uso, pergunta e resultado;
* relação entre procedimento e métodos estiver explícita;
* métodos não aparecerem como sinônimos;
* Track Mode estiver apresentado como estado operacional;
* Trace Engineer estiver apresentado como função investigativa proposta pelo LAB;
* Software System Investigation estiver apresentada como prática do LAB;
* nenhuma certificação inexistente tiver sido alegada;
* nenhuma padronização externa inexistente tiver sido alegada;
* templates completos não tiverem sido introduzidos;
* HORA.city permanecer `unresolved`;
* Header continuar válido;
* Footer continuar independente;
* anchors antigos permanecerem;
* novos anchors estiverem válidos;
* exatamente um H1 permanecer;
* não existir overflow nas seis larguras;
* não existir nova dependência;
* não existir novo Client Component;
* lint passar;
* typecheck passar;
* build passar;
* smoke tests passarem;
* desempenho permanecer proporcional;
* matriz e documentação estiverem atualizadas;
* seções fora do escopo permanecerem preservadas;
* documentos oficiais das sprints permanecerem preservados;
* nenhum staging, commit, push, tag, deploy ou troca de branch tiver sido realizado.

---

# Restrições finais

* Não implementar a Sprint 7.
* Não refatorar integralmente LabLog.
* Não refatorar integralmente Sobre.
* Não resolver HORA.city.
* Não declarar origem comprovada no caso.
* Não criar protocolo documental completo.
* Não criar templates completos.
* Não criar demo aprofundada.
* Não incorporar vídeo.
* Não criar nova página.
* Não criar tabs.
* Não criar acordeão client-side.
* Não criar novo Client Component.
* Não escolher YouTube oficial.
* Não inventar validade do cupom.
* Não atualizar dependências.
* Não alterar a versão.
* Não modificar serviços externos.
* Não expor variáveis de ambiente.
* Não remover conteúdo histórico.
* Não modificar os documentos oficiais das sprints.
* Não realizar ações destrutivas no Git.
* Não realizar staging, commit, push, tag ou deploy.

Quando uma validação não puder ser realizada, documentar:

1. o que não foi validado;
2. por que não foi validado;
3. o que será necessário para validar posteriormente.

---

# Relatório final no chat

Ao concluir, responder com:

## 1. Resumo

Resultado geral da Sprint 6.

## 2. Estado da pasta de sprints

Confirmar preservação.

## 3. Arquivos criados

Lista completa.

## 4. Arquivos modificados

Lista completa e finalidade.

## 5. Nova ordem da homepage

Apresentar a sequência final.

## 6. Procedimento investigativo

Apresentar:

* quatro etapas;
* perguntas;
* atividades;
* resultados;
* evidências.

## 7. Semântica de Detectar

Explicar a implementação.

## 8. Métodos

Apresentar os cinco métodos e suas funções.

## 9. Relação procedimento/métodos

Explicar como foram conectados.

## 10. Prática investigativa

Apresentar:

* Track Mode;
* Trace Engineer;
* Software System Investigation;
* evidência;
* autoridade;
* restauração.

## 11. Navegação e CTAs

Apresentar destinos alterados ou preservados.

## 12. Conteúdo preservado

Explicar o que permaneceu intacto.

## 13. Acessibilidade

Apresentar resultados objetivos.

## 14. Responsividade

Apresentar resultado nas seis larguras.

## 15. Performance

Comparar:

| Métrica | Sprint 5 | Sprint 6 |
| ------- | -------: | -------: |

## 16. Validações

| Comando ou verificação | Resultado | Observações |
| ---------------------- | --------- | ----------- |

## 17. Diferenças visuais

Separar:

* mudanças intencionais;
* áreas preservadas;
* regressões encontradas e corrigidas.

## 18. Pendências

Listar itens para a Sprint 7.

## 19. Recomendação para a Sprint 7

Explicar como consolidar:

* O LAB;
* formação, pesquisa, investigação aplicada e colaboração;
* LabLog;
* Sobre;
* fundadora;
* CTA final;
* Footer.

---

# Resultado esperado

Ao final da Sprint 6, a homepage deverá comunicar:

```text
Você aprendeu a seguir o payload.
Você viu o flow.
Você encontrou a Formação.
Você viu a aplicação no HORA.city.

Agora veja como uma investigação é conduzida.
```

O visitante deverá compreender:

```text
Congelar preserva o caso.
Mapear torna o caminho visível.
Detectar confronta evidências.
Restaurar corrige e valida o comportamento.
```

Também deverá entender:

```text
O procedimento define a sequência.
Os métodos fornecem os instrumentos.
O Trace Engineer conduz a investigação.
A Software System Investigation organiza a prática.
```

A Sprint 7 poderá então consolidar a dimensão institucional, o LabLog, a apresentação do LAB e o encerramento da homepage sem precisar refazer a metodologia.
