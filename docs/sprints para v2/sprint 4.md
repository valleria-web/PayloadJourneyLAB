# Sprint 4 — Trilha progressiva e demonstração visual do payload

## Contexto

Este repositório contém o site oficial do Payload Journey LAB.

As Sprints 0, 1, 2 e 3 foram concluídas.

A Sprint 0 produziu:

* auditoria técnica e semântica;
* inventário integral da homepage;
* baseline visual entre 360 px e 1440 px;
* documentação de riscos;
* registro dos problemas preexistentes.

A Sprint 1 produziu:

* matriz de migração com 69 itens;
* camada central de conteúdo;
* fontes canônicas;
* centralização de HORA.city;
* centralização dos cinco métodos;
* centralização do ciclo investigativo;
* isolamento de campanha e cupom;
* preservação das variantes editoriais;
* smoke test reproduzível.

A Sprint 2 produziu:

* tokens visuais centralizados;
* Tailwind conectado às custom properties;
* componentes reutilizáveis consolidados;
* contratos tipados para os elementos visuais;
* responsividade validada;
* acessibilidade da fundação;
* apenas uma fronteira Client Component.

A Sprint 3 implementou:

* Header simplificado;
* novo Hero;
* seção da dor e estratégia de entrada;
* seção com oito competências;
* novos anchors `#aprender` e `#competencias`;
* contraste acessível nas novas composições;
* preservação individual dos conteúdos retirados do Hero anterior.

O estado confirmado ao final da Sprint 3 é:

```text
branch: refactor/homepage-v0.2.0
version: 0.2.0

rota /: 7,03 kB
First Load JS: 94,3 kB
Shared JS: 87,2 kB
Client Components: 1
```

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
```

Consulte também os screenshots do baseline original em:

```text
docs/homepage-refactor/baseline/
```

O diretório:

```text
docs/sprints para v2/
```

é externo ao escopo da implementação, permanece untracked e deve ser integralmente preservado.

---

# Objetivo da sprint

Implementar a progressão pedagógica do Payload Journey LAB e tornar visualmente compreensível o percurso de um payload através do sistema.

Resultado principal:

**O visitante compreende como evolui dentro do LAB e consegue ver um payload atravessando um flow antes de entrar nos detalhes metodológicos.**

A Sprint 4 deverá implementar:

1. Trilha progressiva com quatro etapas.
2. Demonstração resumida do flow do payload.
3. Distinção visual entre transportar, transformar e decidir.
4. Integração da Trilha e da Demo com o Header e o Hero.
5. Flow responsivo e acessível.
6. Preparação explícita para uma futura demonstração aprofundada, sem criar destinos inexistentes.

---

# Princípio central

## Mostrar antes de aprofundar

A homepage já explica:

* o que é ensinado;
* qual dor é resolvida;
* qual estratégia pode ser utilizada;
* quais competências serão desenvolvidas.

Agora ela deverá responder:

```text
Como essa aprendizagem evolui?
↓
Como um payload realmente atravessa o sistema?
↓
Onde ele é transportado?
↓
Onde ele é transformado?
↓
Onde uma decisão acontece?
```

O visitante deve compreender o conceito funcionando antes de encontrar:

* metodologia completa;
* USMT detalhada;
* protocolo documental;
* investigação avançada;
* Detection Report;
* Trace Evidence Package;
* autoridade semântica aprofundada.

---

# Escopo da Sprint 4

## Dentro do escopo

* criar a seção da Trilha progressiva;
* criar a seção da demonstração resumida;
* adicionar anchors `#trilha` e `#demo`;
* atualizar a navegação do Header;
* atualizar os CTAs do Hero;
* criar conteúdo tipado para Trilha e Demo;
* implementar o flow de forma estática e acessível;
* distinguir transportar, transformar e decidir;
* reutilizar componentes e tokens existentes;
* criar componentes específicos apenas quando houver consumidor real;
* atualizar smoke tests;
* atualizar a matriz de migração;
* documentar a nova progressão;
* validar responsividade, contraste, semântica e performance.

## Fora do escopo

Não implementar nesta sprint:

* vídeo longo ou incorporado;
* demonstração aprofundada com código real;
* execução animada automática do payload;
* timeline controlada por JavaScript;
* logs reais ou checkpoints executáveis;
* modal de demonstração;
* nova página para a demo;
* protocolo documental completo;
* Freeze Record;
* Detection Report;
* Trace Evidence Package;
* USMT completa;
* refatoração da formação;
* refatoração do HORA.city;
* refatoração dos métodos;
* reposicionamento do ciclo investigativo;
* páginas internas;
* decisão sobre o YouTube oficial;
* decisão sobre variantes editoriais do HORA.city;
* validade do cupom;
* atualização de dependências;
* deploy;
* alteração da versão.

---

# Etapa 1 — Preflight

Antes de qualquer alteração:

1. Confirmar a branch ativa:

```text
refactor/homepage-v0.2.0
```

2. Confirmar a versão:

```text
0.2.0
```

3. Confirmar que a working tree tracked está limpa ou contém apenas alterações deliberadamente trazidas da Sprint 3 ainda não commitadas, conforme o estado real do repositório.

4. Não sobrescrever ou descartar mudanças existentes.

5. Confirmar que:

```text
docs/sprints para v2/
```

permanece untracked e intacto.

6. Confirmar a presença dos documentos 00 a 12.

7. Executar:

```bash
npm run lint
npm exec tsc -- --noEmit
npm run build
npm run verify:homepage
npm run verify:foundation
```

8. Registrar o baseline:

```text
rota /: 7,03 kB
First Load JS: 94,3 kB
Shared JS: 87,2 kB
Client Components: 1
```

9. Registrar os warnings preexistentes do cache Webpack separadamente.

Não iniciar a implementação caso exista uma regressão não compreendida.

Não realizar pull, merge, rebase, commit, push, tag, deploy ou troca de branch.

---

# Etapa 2 — Atualizar conteúdo, tipos e anchors

## Tipos

Atualizar `types/content.ts` ou a fonte tipada correspondente para incluir contratos explícitos para:

* Trilha progressiva;
* etapa de aprendizagem;
* resultado de etapa;
* conceitos ensinados;
* demonstração do payload;
* node do flow;
* papel operacional;
* representação;
* responsabilidade;
* pergunta investigativa;
* CTA interno da demo.

Não utilizar `any`.

## IDs estáveis da Trilha

Utilizar:

```text
understand-payload
payload-journey
reverse-payload-journey
track-to-origin
```

## IDs estáveis do flow

Utilizar IDs independentes dos labels visuais, por exemplo:

```text
interaction
structured-payload
request
api
domain
repository
response
projection
ui
```

## Papéis operacionais

Definir um tipo fechado:

```text
transport
transform
decide
present
```

O papel `present` pode ser utilizado para interação e UI quando necessário.

Não classificar todas as etapas artificialmente como transportar, transformar ou decidir.

## Anchors

Adicionar à fonte canônica:

```text
trilha
demo
```

Preservar todos os anchors anteriores.

Não alterar:

```text
inicio
aprender
competencias
formacao
case-study
metodos
lab
```

nem qualquer outro anchor já existente.

---

# Etapa 3 — Criar o conteúdo centralizado da Trilha

Adicionar a Trilha à camada central de conteúdo, preferencialmente junto de `homepageEntry` ou numa composição semanticamente coerente.

Não hardcode os textos diretamente no componente.

A estrutura deverá representar quatro etapas.

---

## Etapa 01 — Entenda o Payload

### ID

```text
understand-payload
```

### Número

```text
01
```

### Título

```text
Entenda o Payload
```

### Descrição

```text
Aprenda a reconhecer a informação produzida por uma interação e as diferentes representações que ela assume ao atravessar o sistema.
```

### Conceitos

* payload;
* estados e eventos;
* camadas;
* representações;
* continuidade semântica.

### Resultado

```text
Você passa a enxergar informação atravessando o sistema.
```

---

## Etapa 02 — Payload Journey

### ID

```text
payload-journey
```

### Número

```text
02
```

### Título

```text
Payload Journey
```

### Descrição

```text
Siga um payload de ponta a ponta e identifique quem o transporta, quem o transforma e onde decisões são tomadas.
```

### Conceitos

* origem;
* caminho operacional;
* fronteiras;
* transporte;
* transformação;
* decisão;
* checkpoints.

### Resultado

```text
Você consegue reconstruir um flow de ponta a ponta.
```

---

## Etapa 03 — Reverse Payload Journey

### ID

```text
reverse-payload-journey
```

### Número

```text
03
```

### Título

```text
Reverse Payload Journey
```

### Descrição

```text
Parta de um comportamento observável e reconstrua o caminho em sentido reverso para localizar onde surgiu a divergência.
```

### Conceitos

* anomalia observável;
* congelamento;
* mapping;
* checkpoints;
* evidências;
* divergência.

### Resultado

```text
Você deixa de adivinhar e começa a investigar.
```

---

## Etapa 04 — Track to Origin

### ID

```text
track-to-origin
```

### Número

```text
04
```

### Título

```text
Track to Origin
```

### Descrição

```text
Conduza a investigação até a primeira decisão técnica, temporal ou semântica relevante.
```

### Conceitos

* origem;
* autoridade;
* modelo;
* evidência;
* restauração;
* validação.

### Resultado

```text
Você consegue explicar onde e por que uma decisão ocorreu.
```

---

# Etapa 4 — Implementar a seção da Trilha

Criar:

```text
components/sections/LearningPathSection.tsx
```

ou nome equivalente coerente com o projeto.

## ID da seção

```text
trilha
```

## Eyebrow

```text
Progressão de aprendizagem
```

## Título

```text
Seu caminho no Payload Journey LAB
```

## Descrição

```text
Comece entendendo o payload, aprenda a seguir o flow, investigue comportamentos observáveis e avance até a origem das decisões.
```

## Requisitos estruturais

A seção deverá:

* utilizar `Section`;
* utilizar `Container`;
* utilizar `SectionHeader`;
* utilizar `Card` ou composição equivalente;
* renderizar as quatro etapas a partir dos dados;
* utilizar lista ordenada quando semanticamente apropriado;
* manter a ordem de 01 a 04;
* apresentar resultado em cada etapa;
* apresentar os conceitos sem excesso de densidade;
* funcionar sem JavaScript;
* permanecer Server Component;
* não depender de hover;
* não utilizar acordeão obrigatório.

## Composição visual

No mobile:

* uma etapa por linha;
* ordem vertical clara;
* número visível;
* título antes dos detalhes;
* resultado destacado;
* sem scroll horizontal.

Em desktop:

* utilizar grid progressivo;
* duas colunas quando necessário;
* quatro colunas apenas se a leitura continuar confortável;
* preservar sequência visual;
* não comprimir descrições excessivamente;
* evitar linhas conectoras complexas que prejudiquem responsividade.

## Nomenclatura

Não utilizar:

* Level 1;
* Level 2;
* Level 3;
* Level 4;
* certificado;
* certificação;
* Foundation Certification;
* Practitioner;
* Expert.

Utilizar:

* etapa;
* progressão;
* caminho;
* trilha.

---

# Etapa 5 — Criar o conteúdo centralizado da demonstração

A demo deverá apresentar um flow pedagógico resumido:

```text
Clique
→ Structured Payload
→ Request
→ API
→ Domain
→ Repository
→ Response
→ Projection
→ UI
```

Cada etapa deverá possuir:

* ID;
* ordem;
* label;
* representação;
* responsabilidade;
* papel operacional;
* pergunta investigativa;
* exemplo curto, quando já sustentado pelo conteúdo existente.

Não inventar nomes de arquivos, funções, endpoints ou estruturas não confirmadas.

Esta demo não deve fingir ser uma execução real da codebase.

Ela deve ser identificada como uma representação pedagógica do caminho operacional.

---

## Node 01 — Clique

### ID

```text
interaction
```

### Label

```text
Clique
```

### Representação

```text
Interação do usuário
```

### Papel

```text
present
```

### Responsabilidade

```text
Iniciar um comportamento observável no sistema.
```

### Pergunta investigativa

```text
Qual interação deu origem ao flow?
```

---

## Node 02 — Structured Payload

### ID

```text
structured-payload
```

### Label

```text
Structured Payload
```

### Representação

```text
Dados estruturados pela aplicação
```

### Papel

```text
transform
```

### Responsabilidade

```text
Converter a interação em informação que o sistema consegue transportar e interpretar.
```

### Pergunta investigativa

```text
Qual informação foi produzida?
```

---

## Node 03 — Request

### ID

```text
request
```

### Label

```text
Request
```

### Representação

```text
Mensagem de transporte
```

### Papel

```text
transport
```

### Responsabilidade

```text
Levar o payload através da fronteira de rede.
```

### Pergunta investigativa

```text
O que realmente saiu do frontend?
```

---

## Node 04 — API

### ID

```text
api
```

### Label

```text
API
```

### Representação

```text
Entrada recebida
```

### Papel

```text
transform
```

### Responsabilidade

```text
Receber, validar e encaminhar a informação.
```

### Pergunta investigativa

```text
Como a entrada foi interpretada?
```

---

## Node 05 — Domain

### ID

```text
domain
```

### Label

```text
Domain
```

### Representação

```text
Ação interpretada
```

### Papel

```text
decide
```

### Responsabilidade

```text
Aplicar regras e determinar o comportamento do sistema.
```

### Pergunta investigativa

```text
Onde a decisão foi tomada?
```

---

## Node 06 — Repository

### ID

```text
repository
```

### Label

```text
Repository
```

### Representação

```text
Operação de persistência
```

### Papel

```text
transport
```

### Responsabilidade

```text
Transportar a decisão do domínio até a persistência.
```

### Pergunta investigativa

```text
O que foi enviado para persistência?
```

Não afirmar que o Repository decide regras de domínio.

---

## Node 07 — Response

### ID

```text
response
```

### Label

```text
Response
```

### Representação

```text
Resultado transportado
```

### Papel

```text
transport
```

### Responsabilidade

```text
Levar o resultado da operação de volta à aplicação.
```

### Pergunta investigativa

```text
O que retornou do sistema?
```

---

## Node 08 — Projection

### ID

```text
projection
```

### Label

```text
Projection
```

### Representação

```text
Estado preparado para apresentação
```

### Papel

```text
transform
```

### Responsabilidade

```text
Converter a resposta numa representação adequada à interface.
```

### Pergunta investigativa

```text
Como o resultado foi preparado para a UI?
```

---

## Node 09 — UI

### ID

```text
ui
```

### Label

```text
UI
```

### Representação

```text
Comportamento visível
```

### Papel

```text
present
```

### Responsabilidade

```text
Apresentar ao usuário o estado resultante do flow.
```

### Pergunta investigativa

```text
O que o usuário finalmente observa?
```

---

# Etapa 6 — Implementar a demonstração resumida

Criar:

```text
components/sections/PayloadFlowDemoSection.tsx
```

ou nome equivalente coerente com o projeto.

## ID

```text
demo
```

## Eyebrow

```text
Demonstração visual
```

## Título

```text
Veja o payload atravessar o sistema
```

## Descrição

```text
Uma única interação pode atravessar várias camadas, mudar de representação e chegar aos pontos onde o sistema toma decisões.
```

## Mensagem de contexto

Exibir claramente que se trata de:

```text
Uma representação pedagógica de um flow operacional.
```

Não apresentar a demo como log real ou execução em tempo real.

---

# Etapa 7 — Implementar o flow responsivo

## Estrutura semântica

Preferir:

```html
<ol>
  <li>...</li>
</ol>
```

O flow deve continuar compreensível:

* sem CSS;
* sem JavaScript;
* por leitor de tela;
* por teclado;
* no mobile.

## Desktop

O flow poderá ser:

* horizontal;
* dividido em duas linhas;
* apresentado em sequência contínua;
* conectado visualmente por setas ou linhas discretas.

Não reduzir o texto a pontos ilegíveis para forçar uma única linha.

## Mobile

O flow deverá:

* ser vertical;
* preservar a ordem;
* evitar scroll horizontal obrigatório;
* mostrar representação e responsabilidade;
* apresentar papel operacional;
* manter perguntas investigativas legíveis.

## Interação

A primeira versão deve funcionar sem interação.

Não exigir:

* hover;
* clique;
* expansão;
* JavaScript;
* carrossel;
* drag;
* scroll controlado.

Caso o volume de informação torne necessário ocultar detalhes, preferir uma composição visual mais simples antes de recorrer a acordeões.

Não criar um Client Component apenas para alternar detalhes.

---

# Etapa 8 — Criar distinção visual dos papéis

A demo deve permitir reconhecer:

* transportar;
* transformar;
* decidir;
* apresentar.

## Labels recomendados

```text
Transporta
Transforma
Decide
Apresenta
```

## Requisitos

* não transmitir a diferença apenas por cor;
* apresentar texto explícito;
* utilizar cor como apoio;
* garantir contraste;
* preservar a identidade do LAB;
* usar tokens semânticos;
* não espalhar hexadecimais nos componentes;
* evitar uma paleta excessivamente colorida.

## Hierarquia recomendada

`Decide` deve receber destaque visual superior, porque representa o ponto onde regras ou autoridade são aplicadas.

Esse destaque não deve fazer parecer que apenas o Domain é importante.

Transportar e transformar também devem permanecer claramente legíveis.

---

# Etapa 9 — Componentes reutilizáveis permitidos

Agora existe consumidor real para componentes específicos do flow.

É permitido criar, quando trouxer benefício real:

```text
components/ui/FlowNode.tsx
components/ui/RoleBadge.tsx
components/ui/NumberedCard.tsx
```

ou nomes equivalentes.

## FlowNode

Pode receber:

* número;
* label;
* representação;
* responsabilidade;
* papel;
* pergunta investigativa.

Deve permanecer Server Component.

## RoleBadge

Pode receber apenas os papéis tipados:

```text
transport
transform
decide
present
```

Não aceitar strings arbitrárias.

## NumberedCard

Criar apenas se também for utilizado pela Trilha ou por mais de um consumidor.

Não criar abstrações para esconder uma única composição pequena.

Não criar:

* timeline engine;
* stepper interativo;
* carousel;
* flow controller;
* estado global;
* hook de animação.

---

# Etapa 10 — Integrar Trilha e Demo à homepage

Atualizar `app/page.tsx` para esta sequência:

```text
Header
Hero
Dor e estratégia
Competências
Trilha progressiva
Demonstração visual
Restante da homepage existente
Footer
```

A ordem relativa das seções antigas deve permanecer intacta.

Não reorganizar nesta sprint:

* O LAB;
* Métodos;
* Ecossistema;
* HORA.city;
* Formação;
* LabLog;
* Sobre;
* CTA final;
* Footer.

A transição da Demo para a primeira seção antiga deverá ser visualmente clara.

---

# Etapa 11 — Atualizar Header e Hero

Agora que `#trilha` e `#demo` existem, atualizar a navegação.

## Navegação recomendada

```text
Aprender → #aprender
Trilha → #trilha
Demo → #demo
Formação → #formacao
Caso real → #case-study
O LAB → #lab
```

O link `Métodos` pode sair do Header, mas:

* o anchor `#metodos` deve permanecer;
* o Footer deve continuar independente;
* os métodos devem continuar acessíveis;
* a remoção deve ser registrada na matriz.

## CTA do Header

Atualizar:

```text
Começar → #trilha
```

## CTAs do Hero

### CTA principal

```text
Ver o payload atravessar o sistema
```

Destino:

```text
#demo
```

### CTA secundário

```text
Explorar a trilha
```

Destino:

```text
#trilha
```

A formação continua acessível diretamente pelo Header.

## Regra

Não criar no Hero ou na Demo um CTA com textos como:

```text
Assistir à demonstração completa
Ver demonstração completa
Acompanhar o flow completo
```

quando não existir uma página, vídeo ou experiência aprofundada correspondente.

Não apontar para destino genérico ou enganoso.

---

# Etapa 12 — CTA da Demo

Ao final da demonstração resumida, utilizar um CTA para um destino já existente.

CTA recomendado:

```text
Ver o caso real HORA.city
```

Destino:

```text
#case-study
```

Texto de apoio:

```text
Veja como a investigação é aplicada numa codebase real.
```

Não afirmar que o Study Case já oferece a demonstração completa do flow se essa experiência ainda não estiver implementada.

---

# Etapa 13 — Acessibilidade

Validar:

* exatamente um `h1`;
* Trilha e Demo utilizam `h2`;
* cards internos utilizam `h3` quando apropriado;
* listas possuem semântica correta;
* ordem de leitura acompanha a ordem visual;
* labels de papel estão presentes em texto;
* nenhuma distinção depende apenas de cor;
* foco visível;
* links e botões corretos;
* menu mobile continua funcional;
* fechamento por Escape preservado;
* retorno de foco preservado;
* `aria-expanded` e `aria-controls` preservados;
* nenhum componente novo necessita `aria` redundante;
* flow compreensível por leitor de tela;
* reduced motion preservado;
* scroll não bloqueado;
* links internos não ficam ocultos pelo header sticky.

Utilizar `scroll-margin-top` nos novos anchors quando necessário.

---

# Etapa 14 — Responsividade

Validar:

```text
360×800
390×844
768×1024
1024×768
1280×800
1440×900
```

## Trilha

### Mobile

* uma etapa por linha;
* número, título, descrição e resultado legíveis;
* chips ou conceitos com wrapping natural;
* nenhum overflow;
* ordem 01–04 preservada.

### Tablet

* uma ou duas colunas;
* largura de leitura adequada;
* resultados não comprimidos.

### Desktop

* duas ou quatro colunas apenas se a composição continuar legível;
* progressão visual inequívoca;
* nenhum card excessivamente estreito.

## Demo

### Mobile

* flow vertical;
* cada node claramente separado;
* conectores não sobrepõem conteúdo;
* perguntas investigativas legíveis;
* sem scroll horizontal.

### Tablet

* flow vertical ou dividido em grupos coerentes;
* não forçar uma única linha.

### Desktop

* flow horizontal ou em duas linhas;
* sequência inequívoca;
* setas e conectores discretos;
* sem sobreposição;
* Domain visualmente identificável como decisão.

---

# Etapa 15 — Performance

Comparar com o baseline da Sprint 3:

```text
rota /: 7,03 kB
First Load JS: 94,3 kB
Shared JS: 87,2 kB
Client Components: 1
```

É aceitável um aumento proporcional de HTML e CSS devido às duas novas seções.

Não aceitar:

* dependências novas;
* bibliotecas de diagramas;
* bibliotecas de animação;
* runtime para layout;
* novo Client Component;
* carrossel;
* canvas;
* SVG excessivamente complexo;
* imagens pesadas;
* vídeo;
* dados duplicados em client bundles.

A quantidade de Client Components deve continuar em:

```text
1
```

salvo necessidade técnica indispensável e explicitamente justificada.

---

# Etapa 16 — Atualizar smoke tests

Atualizar:

```text
scripts/verify-homepage.mjs
scripts/verify-design-foundation.mjs
```

quando necessário.

Validar no mínimo:

* homepage responde HTTP 200;
* exatamente um `h1`;
* `#trilha` existe;
* `#demo` existe;
* quatro etapas existem;
* ordem 01–04 está preservada;
* IDs estáveis da Trilha existem;
* nove nodes do flow existem;
* ordem do flow está preservada;
* papéis operacionais estão tipados;
* Header aponta apenas para anchors válidos;
* CTA do Header aponta para `#trilha`;
* CTA principal do Hero aponta para `#demo`;
* CTA secundário aponta para `#trilha`;
* CTA da Demo aponta para `#case-study`;
* anchors antigos continuam presentes;
* conteúdo das seções antigas continua preservado;
* links Udemy e YouTube continuam preservados;
* decisões editoriais unresolved continuam unresolved;
* Client Components continuam em 1.

Não criar snapshots rígidos de classes CSS.

Não instalar framework de testes.

---

# Etapa 17 — Atualizar a matriz de migração

Atualizar:

```text
docs/homepage-refactor/06-content-migration-matrix.md
```

Registrar:

* Trilha implementada;
* quatro etapas implementadas;
* Payload Journey inserido na progressão;
* Reverse Payload Journey inserido na progressão;
* Track to Origin inserido na progressão;
* demo resumida implementada;
* flow pedagógico implementado;
* conteúdo técnico antigo do Hero relacionado ao flow;
* atualização da navegação;
* atualização dos CTAs;
* item Métodos removido apenas do Header;
* Demo aprofundada ainda pendente;
* demonstração com código real ainda pendente;
* vídeo específico ainda pendente;
* HORA.city ainda não refatorado.

Não marcar como concluídos itens pertencentes às Sprints 5 a 8.

---

# Etapa 18 — Documentação

Criar:

```text
docs/homepage-refactor/13-learning-path-and-flow-demo.md
docs/homepage-refactor/14-sprint-4-report.md
```

## `13-learning-path-and-flow-demo.md`

Deve conter:

### 1. Objetivo

Explicar por que Trilha e Demo aparecem depois de dor e competências.

### 2. Trilha

Documentar:

* quatro etapas;
* conceitos;
* resultados;
* nomenclatura;
* progressão pedagógica.

### 3. Demonstração

Documentar:

* caráter pedagógico;
* nove nodes;
* representações;
* responsabilidades;
* papéis operacionais;
* perguntas investigativas.

### 4. Transportar, transformar e decidir

Explicar os critérios utilizados.

### 5. Semântica e acessibilidade

Documentar:

* listas;
* headings;
* ordem de leitura;
* labels;
* contraste;
* reduced motion.

### 6. Responsividade

Documentar:

* mobile;
* tablet;
* desktop;
* flow vertical e horizontal.

### 7. CTAs

Documentar:

* Header;
* Hero;
* Demo;
* ausência deliberada de “demonstração completa”.

### 8. Preparação para futuras sprints

Registrar como a demonstração poderá futuramente receber:

* checkpoints reais;
* componentes reais;
* request e response reais;
* vídeo;
* codebase;
* flow do Send Heart.

Não implementar esses elementos agora.

---

## `14-sprint-4-report.md`

Utilizar:

```text
# Sprint 4 — Relatório

## Objetivo

## Estado inicial

## Arquivos criados

## Arquivos modificados

## Trilha progressiva

## Demonstração visual

## Papéis operacionais

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

## Recomendação para a Sprint 5
```

---

# Etapa 19 — Validação visual

A Sprint 4 altera intencionalmente a página entre Competências e o conteúdo anterior.

Capturar screenshots temporários nas seis larguras.

Não sobrescrever:

```text
docs/homepage-refactor/baseline/
```

Validar:

* primeira dobra;
* Hero atualizado;
* entrada completa;
* Trilha completa;
* Demo completa;
* transição entre Demo e conteúdo antigo;
* página completa;
* Header desktop;
* menu mobile;
* anchors;
* sticky header;
* foco;
* ausência de overflow;
* legibilidade do flow;
* conectores;
* labels operacionais;
* resultado das etapas.

## Diferenças esperadas

* novos links Trilha e Demo;
* novo destino do CTA Começar;
* novos CTAs do Hero;
* nova seção da Trilha;
* nova seção da Demo;
* aumento da altura total;
* novos componentes de flow;
* novas cores semânticas, caso necessárias.

## Áreas que devem permanecer preservadas

* Dor e estratégia;
* Competências;
* O LAB;
* Métodos;
* Ecossistema;
* HORA.city;
* Formação;
* LabLog;
* Sobre;
* CTA final;
* Footer.

Não exigir equivalência byte a byte nas áreas intencionalmente alteradas.

---

# Etapa 20 — Validação final

Executar:

```bash
npm run lint
npm exec tsc -- --noEmit
npm run build
npm run verify:homepage
npm run verify:foundation
npm run dev
git diff --check
git status --short --branch
```

Validar também:

* HTTP 200;
* console;
* hydration;
* exatamente um H1;
* menu desktop;
* menu mobile;
* fechamento por Escape;
* retorno de foco;
* anchors;
* CTAs;
* links;
* contraste;
* listas;
* ordem semântica;
* flow responsivo;
* overflow;
* bundle;
* Shared JS;
* Client Components;
* conteúdo antigo preservado;
* working tree;
* pasta untracked preservada.

Registrar warnings preexistentes separadamente.

---

# Critérios de aceite

A Sprint 4 estará concluída somente quando:

* a documentação anterior tiver sido lida;
* `#trilha` estiver implementado;
* `#demo` estiver implementado;
* quatro etapas estiverem presentes;
* a ordem 01–04 estiver preservada;
* cada etapa possuir descrição, conceitos e resultado;
* nomenclatura de certificação não tiver sido utilizada;
* nove nodes do flow estiverem presentes;
* o flow estiver semanticamente ordenado;
* cada node possuir representação, responsabilidade e pergunta;
* transportar, transformar, decidir e apresentar estiverem explicitamente identificados;
* a diferença não depender apenas de cor;
* Domain estiver identificado como ponto de decisão;
* Repository não estiver descrito como autoridade de domínio;
* demo estiver identificada como representação pedagógica;
* demo não estiver apresentada como execução real;
* Header incluir Trilha e Demo;
* Header apontar apenas para destinos existentes;
* CTA Começar apontar para `#trilha`;
* CTA principal do Hero apontar para `#demo`;
* CTA secundário apontar para `#trilha`;
* CTA da Demo apontar para `#case-study`;
* nenhum CTA prometer demonstração aprofundada inexistente;
* anchors antigos permanecerem válidos;
* Footer permanecer independente;
* exatamente um H1 permanecer;
* flow for vertical e legível no mobile;
* não existir overflow nas seis larguras;
* não existir nova dependência;
* não existir nova fronteira Client Component;
* lint passar;
* typecheck passar;
* build passar;
* smoke tests passarem;
* performance permanecer proporcional;
* matriz e documentação estiverem atualizadas;
* seções antigas permanecerem preservadas;
* `docs/sprints para v2/` permanecer intacto e untracked;
* nenhum commit, push, tag, deploy ou troca de branch tiver sido realizado.

---

# Restrições finais

* Não implementar a Sprint 5.
* Não refatorar Formação.
* Não refatorar HORA.city.
* Não criar uma demo aprofundada.
* Não incorporar vídeo.
* Não criar nova página.
* Não apresentar logs como reais.
* Não inventar componentes da codebase.
* Não criar animação automática.
* Não criar carrossel.
* Não criar novo Client Component.
* Não utilizar biblioteca de diagramas.
* Não resolver o YouTube oficial.
* Não decidir entre as variantes HORA.city.
* Não inventar validade do cupom.
* Não atualizar dependências.
* Não alterar a versão.
* Não modificar serviços externos.
* Não expor variáveis de ambiente.
* Não excluir conteúdo reservado.
* Não modificar `docs/sprints para v2/`.
* Não realizar ações destrutivas no Git.
* Não fazer commit, push, tag ou deploy.

Quando uma validação não puder ser realizada, documentar:

1. o que não foi possível validar;
2. por que não foi possível;
3. como deverá ser validado posteriormente.

---

# Relatório final no chat

Ao concluir, responder com:

## 1. Resumo

Resultado geral da Sprint 4.

## 2. Arquivos criados

Lista completa.

## 3. Arquivos modificados

Lista completa e finalidade.

## 4. Trilha progressiva

Apresentar:

* quatro etapas;
* conteúdo;
* resultados;
* responsividade.

## 5. Demonstração visual

Apresentar:

* nove nodes;
* estrutura;
* caráter pedagógico;
* flow mobile e desktop.

## 6. Papéis operacionais

Apresentar:

* transportar;
* transformar;
* decidir;
* apresentar;
* critérios de classificação.

## 7. Navegação e CTAs

Apresentar:

* Header;
* Hero;
* Demo;
* destinos.

## 8. Conteúdo preservado

Explicar quais seções e conteúdos permaneceram intactos.

## 9. Acessibilidade

Resultados de:

* headings;
* listas;
* labels;
* teclado;
* foco;
* contraste;
* reduced motion.

## 10. Responsividade

Resultado nas seis larguras.

## 11. Performance

Comparação:

| Métrica | Sprint 3 | Sprint 4 |
| ------- | -------: | -------: |

## 12. Validações

| Comando ou verificação | Resultado | Observações |
| ---------------------- | --------- | ----------- |

## 13. Diferenças visuais

Separar:

* mudanças intencionais;
* áreas preservadas;
* regressões encontradas e corrigidas.

## 14. Pendências

Itens destinados à Sprint 5 e às demonstrações futuras.

## 15. Recomendação para a Sprint 5

Explicar como integrar e refatorar:

* formação fundamental;
* caso real HORA.city;
* relação entre Demo, formação e aplicação;
* CTA de conversão;
* narrativa do study case.

---

# Resultado esperado

Ao final desta sprint, a homepage deverá comunicar esta progressão:

```text
Aprenda o que é o payload.
↓
Siga um flow de ponta a ponta.
↓
Reconstrua uma anomalia.
↓
Rastreie a decisão até a origem.
```

O visitante também deverá conseguir ver:

```text
Clique
→ Structured Payload
→ Request
→ API
→ Domain
→ Repository
→ Response
→ Projection
→ UI
```

e compreender:

```text
Aqui o payload é transportado.
Aqui ele é transformado.
Aqui uma decisão é tomada.
Aqui o resultado volta a ser apresentado.
```

A Sprint 5 deverá conseguir conectar essa aprendizagem à formação fundamental e ao caso real HORA.city sem precisar refazer a nova entrada, a Trilha ou a demonstração visual.
