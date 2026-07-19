# Sprint 7 — Ecossistema institucional e encerramento da homepage

## Contexto

Este repositório contém o site oficial do Payload Journey LAB.

As Sprints 0 a 6 deverão estar concluídas antes do início desta execução.

A homepage já deve apresentar uma progressão semelhante a:

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

A Sprint 7 consolidará a parte institucional e o encerramento da página sem alterar o percurso pedagógico e metodológico já construído.

Antes de editar, leia integralmente todos os documentos existentes em:

```text
docs/homepage-refactor/
```

Incluindo, quando presentes:

```text
00-project-audit.md
01-homepage-structure.md
02-content-inventory.md
03-assets-and-links.md
04-technical-baseline.md
05-refactor-risks.md
06-content-migration-matrix.md
07-content-architecture.md
08-sprint-1-report.md
09-design-foundation.md
10-sprint-2-report.md
11-entry-experience.md
12-sprint-3-report.md
13-learning-path-and-flow-demo.md
14-sprint-4-report.md
15-training-and-case-study.md
16-sprint-5-report.md
17-investigation-methodology.md
18-sprint-6-report.md
```

Não presuma métricas, arquivos ou resultados da Sprint 6.

Utilize como baseline o estado real do repositório e o relatório mais recente disponível.

A pasta:

```text
docs/sprints para v2/
```

faz parte do histórico oficial do projeto.

Se existir um novo documento da Sprint 7 ainda untracked ou modificado antes da implementação:

* trate-o como documento oficial preexistente;
* registre seu estado e hash inicial;
* preserve-o byte a byte;
* não o inclua em staging;
* não o altere durante a implementação.

---

# Objetivo da sprint

Consolidar a dimensão institucional do Payload Journey LAB e construir um encerramento claro para a homepage.

Resultado principal:

**Depois de conhecer a aprendizagem, a aplicação e a metodologia, o visitante compreende o que é o LAB, como ele atua, quem o criou, como acompanhar o trabalho e qual ação realizar.**

A Sprint 7 deverá:

1. Refatorar a apresentação institucional de O LAB.
2. Consolidar o Ecossistema em quatro áreas claras.
3. Refatorar o LabLog como investigação e aprendizagem em movimento.
4. Refatorar a seção Sobre e a apresentação da fundadora.
5. Consolidar a chamada para colaboração, quando existir destino confirmado.
6. Refatorar o CTA final.
7. Revisar e consolidar o Footer.
8. Remover repetições visíveis das seções institucionais.
9. Preservar integralmente conteúdos históricos, links e decisões ainda não resolvidas.
10. Preparar a homepage para a validação e publicação final da Sprint 8.

---

# Princípio central

## Revelar o LAB depois de demonstrar o valor

A homepage já deverá ter explicado:

```text
o problema
→ a habilidade
→ a progressão
→ o flow
→ a formação
→ a aplicação real
→ o procedimento
→ os métodos
→ a prática investigativa
```

Agora ela deverá responder:

```text
O que é o Payload Journey LAB?
↓
Que atividades o LAB desenvolve?
↓
Como acompanhar o trabalho?
↓
Quem criou o LAB e por quê?
↓
Qual é o próximo passo?
```

A dimensão institucional não deve voltar a dominar a primeira experiência.

Ela deve aparecer como a ampliação natural de tudo o que o visitante já compreendeu.

---

# Escopo da Sprint 7

## Dentro do escopo

* refatorar a seção O LAB;
* consolidar os quatro pilares institucionais;
* refatorar o Ecossistema;
* reduzir repetições entre O LAB, Ecossistema e Prática Investigativa;
* refatorar LabLog;
* refatorar Sobre;
* organizar a apresentação da fundadora;
* revisar eventual seção de contato ou colaboração;
* refatorar CTA final;
* consolidar Footer;
* centralizar novas copies;
* atualizar tipos;
* preservar anchors;
* preservar links;
* atualizar smoke tests;
* atualizar matriz de migração;
* produzir documentação;
* validar acessibilidade;
* validar responsividade;
* validar performance;
* preparar a Sprint 8.

## Fora do escopo

Não implementar nesta sprint:

* demonstração aprofundada;
* logs reais;
* checkpoints reais ou executáveis;
* protocolo documental completo;
* páginas internas de métodos;
* página interna do HORA.city;
* nova página de Formação;
* integração automática com YouTube;
* API do YouTube;
* feed dinâmico de vídeos;
* escolha do YouTube oficial;
* alteração da URL atual do LabLog;
* validade do cupom;
* resolução editorial do HORA.city;
* atualização do estado da investigação;
* formulário complexo de contato;
* integração de CRM;
* newsletter;
* autenticação;
* busca;
* analytics novo;
* correção de vulnerabilidades;
* atualização de dependências;
* deploy;
* alteração da versão;
* tag de release.

---

# Etapa 1 — Preflight

Antes de qualquer edição:

1. Confirmar a branch ativa.

```text
refactor/homepage-v0.2.0
```

2. Confirmar a versão atual.

```text
0.2.0
```

3. Confirmar o commit atual.

4. Registrar o estado Git completo.

5. Identificar alterações tracked e untracked preexistentes.

6. Não descartar, restaurar ou sobrescrever alterações anteriores.

7. Confirmar a presença dos relatórios das Sprints 0 a 6.

8. Ler integralmente o relatório da Sprint 6.

9. Registrar o baseline real:

* tamanho da rota `/`;
* First Load JS;
* Shared JS;
* quantidade de Client Components;
* tamanho do HTML;
* tamanho do CSS;
* ordem atual das seções;
* anchors;
* warnings preexistentes.

10. Calcular hashes dos documentos oficiais em:

```text
docs/sprints para v2/
```

11. Executar os comandos disponíveis:

```bash
npm.cmd run lint
npm.cmd exec tsc -- --noEmit
npm.cmd run build
npm.cmd run verify:homepage
npm.cmd run verify:foundation
```

12. Registrar warnings preexistentes separadamente.

Não iniciar a implementação caso apareça uma regressão não compreendida.

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

# Etapa 2 — Confirmar a arquitetura institucional atual

Antes de refatorar, localizar e documentar no código:

* seção O LAB;
* seção Ecossistema;
* quatro pilares atuais;
* LabLog;
* Sobre;
* apresentação da fundadora;
* ContactSection ou conteúdo de contato;
* CTA final;
* Footer;
* links sociais;
* links de colaboração;
* links de e-mail;
* navegação do Footer;
* conteúdos institucionais não renderizados;
* conteúdos duplicados;
* copies históricas;
* CTAs sem destino;
* links legais;
* informações de copyright.

Confirmar quais elementos estão atualmente renderizados e quais permanecem reservados.

Não tratar componentes não renderizados automaticamente como código morto.

---

# Etapa 3 — Definir a ordem final da homepage

A ordem esperada após a Sprint 7 é:

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
Ecossistema institucional
LabLog
Sobre o LAB e fundadora
CTA final
Footer
```

## Regras

* O LAB deve continuar depois da Prática Investigativa.
* Ecossistema deve aparecer depois de O LAB.
* LabLog deve aparecer depois do Ecossistema.
* Sobre deve aparecer depois do LabLog.
* CTA final deve aparecer depois de Sobre.
* Footer encerra a página.
* Nenhuma seção anterior deve ser removida.
* Nenhuma seção anterior deve ser reescrita fora do necessário para eliminar repetição institucional.
* A ordem pedagógica das Sprints 3 a 6 deve permanecer intacta.

Se a ordem atual já corresponder à ordem desejada, não mover componentes desnecessariamente.

---

# Etapa 4 — Atualizar contratos de conteúdo

Atualizar aditivamente:

```text
types/content.ts
```

e as fontes canônicas correspondentes.

Criar ou consolidar contratos para:

## O LAB

* eyebrow;
* título;
* descrição;
* missão;
* princípio;
* conexão com a prática investigativa;
* CTA opcional.

## Pilar institucional

* ID;
* título;
* descrição;
* atividades;
* público ou destinatários;
* resultado;
* CTA opcional.

## LabLog

* eyebrow;
* título;
* descrição;
* temas;
* conteúdo destacado;
* CTA;
* URL;
* status editorial.

## Sobre

* origem;
* visão;
* problema que motivou o LAB;
* autoria;
* fundadora;
* relação com a USMT;
* assinatura institucional.

## Fundadora

* nome;
* função;
* criação do LAB;
* criação da USMT;
* contexto profissional confirmado;
* link profissional, quando existente.

## CTA final

* eyebrow opcional;
* título;
* descrição;
* CTA principal;
* CTA secundário.

## Footer

* identidade;
* navegação;
* redes;
* informação legal;
* copyright;
* links existentes;
* links legais confirmados.

Não utilizar `any`.

Não criar uma estrutura genérica para páginas institucionais futuras.

Não duplicar contratos existentes.

---

# Etapa 5 — Refatorar a apresentação de O LAB

Modificar o componente institucional atual, como:

```text
components/sections/LabOverviewSection.tsx
```

ou o componente real encontrado.

## Anchor

Preservar:

```text
lab
```

## Eyebrow

```text
O laboratório
```

## Título

```text
Formação, pesquisa e investigação aplicada
```

## Descrição pública

Utilizar uma copy semanticamente equivalente a:

```text
O Payload Journey LAB desenvolve maneiras de ensinar, modelar e investigar software seguindo o fluxo da informação.
```

## Mensagem institucional

A seção deverá explicar que o LAB conecta:

* educação;
* desenvolvimento metodológico;
* investigação de sistemas;
* aplicação em casos reais;
* colaboração.

## Relação com o conteúdo anterior

A seção não deve repetir integralmente:

* Track Mode;
* Trace Engineer;
* Software System Investigation;
* cinco métodos;
* quatro verbos;
* Trilha;
* Demo.

Ela deve ampliar a narrativa:

```text
A prática que você acabou de conhecer faz parte de um laboratório dedicado a desenvolver formação, métodos e investigação aplicada.
```

## Requisitos

* utilizar conteúdo centralizado;
* utilizar `Section`;
* utilizar `Container`;
* utilizar `SectionHeader`;
* permanecer Server Component;
* não utilizar linguagem excessivamente institucional;
* não reapresentar toda a metodologia;
* não afirmar reconhecimento externo não confirmado;
* não afirmar parcerias existentes sem fonte.

---

# Etapa 6 — Consolidar o Ecossistema institucional

Modificar:

```text
components/sections/ConceptEcosystemSection.tsx
```

ou o componente institucional equivalente.

## Anchor

Preservar o anchor atual, por exemplo:

```text
ecossistema
```

Não alterar sem necessidade.

## Eyebrow

```text
Ecossistema do LAB
```

## Título

```text
Quatro áreas conectadas pelo mesmo propósito
```

## Descrição

```text
O LAB transforma investigação de sistemas em aprendizagem, pesquisa metodológica, aplicação prática e colaboração.
```

## Quatro áreas obrigatórias

### 1. Formação

#### ID

```text
education
```

#### Título

```text
Formação
```

#### Descrição

```text
Experiências educacionais para desenvolver visão estrutural, capacidade de tracing e estratégias de entrada em codebases grandes.
```

#### Atividades

* cursos;
* trilhas;
* vídeos;
* materiais educacionais;
* pilotos de aprendizagem, quando confirmados.

#### Resultado

```text
Engenheiros mais capazes de compreender sistemas antes de modificá-los.
```

Não duplicar os detalhes completos da Formação já apresentados anteriormente.

---

### 2. Pesquisa metodológica

#### ID

```text
methodological-research
```

#### Título

```text
Pesquisa metodológica
```

#### Descrição

```text
Criação, documentação, teste e refinamento dos métodos utilizados pelo Payload Journey LAB.
```

#### Atividades

* desenvolvimento da USMT;
* refinamento do Payload Journey;
* Reverse Payload Journey;
* Operational Payload Path;
* Track to Origin;
* documentação do procedimento investigativo.

#### Resultado

```text
Métodos mais claros, verificáveis e ensináveis.
```

Não afirmar validação científica formal sem fonte.

---

### 3. Investigação aplicada

#### ID

```text
applied-investigation
```

#### Título

```text
Investigação aplicada
```

#### Descrição

```text
Aplicação dos métodos em codebases, flows, anomalias e decisões reais de software.
```

#### Atividades

* seleção de flows;
* mapping;
* checkpoints;
* confronto de evidências;
* estudo de anomalias;
* documentação de casos.

#### Resultado

```text
Casos reais que testam e fortalecem a prática investigativa.
```

HORA.city pode aparecer como exemplo, sem repetir todo o caso.

---

### 4. Colaboração

#### ID

```text
collaboration
```

#### Título

```text
Colaboração
```

#### Descrição

```text
Pilotos, estudos e experiências compartilhadas com estudantes, educadores, universidades, laboratórios, equipes e organizações.
```

#### Resultado

```text
Aprendizagem e investigação desenvolvidas em contato com contextos reais.
```

## Guardrail factual

A linguagem deve apresentar possibilidades e público de colaboração.

Não afirmar que existem parcerias, pilotos ou contratos ativos se isso não estiver confirmado na fonte.

Utilizar formulações como:

```text
O LAB está aberto a...
O LAB pode colaborar com...
Áreas de colaboração incluem...
```

quando necessário.

---

# Etapa 7 — CTA de colaboração

Verificar se existe um destino confirmado:

* e-mail;
* anchor de contato;
* LinkedIn;
* formulário atual;
* outro canal institucional.

## Caso exista destino válido

Adicionar um CTA discreto ao Ecossistema:

```text
Propor uma colaboração
```

ou:

```text
Conversar sobre colaboração
```

Utilizar o destino atual confirmado.

## Caso não exista destino válido

Não criar um CTA sem destino.

Não criar:

* `href="#"`;
* formulário fictício;
* e-mail inventado;
* modal;
* rota vazia.

Registrar a pendência no relatório.

---

# Etapa 8 — Refatorar o LabLog

Modificar:

```text
components/sections/LabLogSection.tsx
```

## Anchor

Preservar:

```text
lablog
```

## Eyebrow

```text
Investigação em movimento
```

## Título

```text
Acompanhe o LAB em movimento
```

## Descrição

Utilizar uma copy semanticamente equivalente a:

```text
O LabLog registra flows, anomalias, decisões, checkpoints, mappings e o desenvolvimento público dos métodos do LAB.
```

## Temas possíveis

Apresentar somente temas confirmados:

* Payload Journey;
* mapping;
* checkpoints;
* HORA.city;
* codebases;
* anomalias;
* Track Mode;
* investigação de sistemas;
* formação.

## CTA principal

```text
Assistir ao LabLog
```

Utilizar o destino atualmente associado ao componente.

## YouTube unresolved

A camada de conteúdo já preserva dois destinos de YouTube.

Nesta sprint:

* não escolher um como oficial;
* não alterar URLs;
* não substituir o link atual;
* não unificar handles;
* preservar `resolutionStatus: "unresolved"`;
* documentar qual destino o LabLog utiliza atualmente;
* preservar o destino utilizado pelo Footer, caso seja diferente.

## Conteúdos destacados

É permitido apresentar conteúdos selecionados manualmente somente quando já existirem na fonte.

Não integrar API do YouTube.

Não buscar vídeos em runtime.

Não adicionar dependência.

Não renderizar cards vazios.

---

# Etapa 9 — Refatorar Sobre o LAB

Modificar:

```text
components/sections/AboutSection.tsx
```

ou o componente correspondente.

## Anchor

Preservar o anchor atual.

Caso não exista anchor semântico, utilizar um ID centralizado como:

```text
sobre
```

somente se isso não quebrar links existentes.

## Estrutura

Organizar a seção em três partes:

1. Por que o LAB existe.
2. Qual visão orienta o LAB.
3. Quem criou o LAB.

---

## Parte 1 — Por que o LAB existe

Utilizar fatos e narrativa já confirmados nas fontes.

Copy conceitual:

```text
Sistemas podem crescer mais rapidamente do que a nossa capacidade de explicá-los. O LAB nasce da necessidade de recuperar visão estrutural, rastreabilidade e confiança antes de modificar software complexo.
```

Não criar estatísticas novas.

Não repetir integralmente a narrativa HORA.city.

---

## Parte 2 — Visão

Copy conceitual:

```text
O Payload Journey LAB trabalha para tornar investigação de sistemas uma capacidade ensinável, praticável e documentável.
```

Apresentar valores como:

* seguir o flow;
* compreender antes de modificar;
* produzir evidência;
* tornar decisões visíveis;
* desenvolver visão estrutural;
* compartilhar métodos.

Não declarar que o LAB já é referência internacional ou nacional sem fonte.

Não apresentar objetivos futuros como conquistas atuais.

---

## Parte 3 — Fundadora

Utilizar somente dados confirmados na fonte atual.

Estrutura conceitual:

```text
Valéria dos Santos Reiser é criadora do Payload Journey LAB e da USMT.
```

Complementar somente com informações já confirmadas no projeto, como:

* Engenharia de Software;
* educação;
* investigação de sistemas;
* HORA.city;
* desenvolvimento dos métodos.

Não criar uma biografia extensa.

Não incluir informações pessoais irrelevantes.

Não transformar a seção numa narrativa curricular completa.

## Título possível

```text
Criado para ensinar a compreender sistemas
```

ou preservar o título atual quando mais apropriado.

## Link profissional

Se já existir link confirmado para LinkedIn ou perfil institucional:

* preservá-lo;
* utilizar texto de link claro;
* manter segurança de links externos.

Não inventar URL.

---

# Etapa 10 — Preservar autoria dos métodos

A seção Sobre pode mencionar:

* Payload Journey LAB;
* USMT;
* métodos desenvolvidos no LAB.

Não deve afirmar, sem suporte:

* patente;
* certificação;
* standard;
* reconhecimento acadêmico formal;
* exclusividade legal;
* adoção pelo mercado;
* validação científica definitiva.

Utilizar linguagem factual:

```text
criado no LAB
desenvolvido pelo LAB
proposto pelo LAB
documentado pelo LAB
```

quando confirmado.

---

# Etapa 11 — Refatorar o CTA final

Modificar:

```text
components/sections/BetaCtaSection.tsx
```

ou o componente final real.

## Objetivo

Retomar a promessa inicial da homepage e oferecer uma ação simples.

## Eyebrow opcional

```text
Comece agora
```

## Título

```text
Comece por um único flow
```

## Descrição

```text
Você não precisa compreender toda a codebase para começar. Escolha uma interação, encontre o payload e siga o caminho.
```

## CTA principal

```text
Entrar na formação
```

Destino:

URL atual da Udemy.

## CTA secundário

```text
Ver o payload atravessar o sistema
```

Destino:

```text
#demo
```

## Regra

Não adicionar um terceiro CTA.

Não utilizar cupom como título principal do encerramento.

A campanha pode aparecer como informação secundária quando já fizer parte da configuração ativa.

Não afirmar validade temporal desconhecida.

---

# Etapa 12 — Consolidar o Footer

Modificar:

```text
components/layout/SiteFooter.tsx
```

e a fonte canônica correspondente somente quando necessário.

## Objetivos

* preservar identidade;
* manter navegação independente do Header;
* remover links duplicados;
* garantir destinos válidos;
* preservar redes atuais;
* preservar informações legais existentes;
* evitar links legais fictícios;
* encerrar a página de forma simples.

## Estrutura recomendada

### Identidade

* nome do LAB;
* assinatura;
* descrição curta.

### Navegação

Preservar links úteis, como:

* O LAB;
* Métodos;
* Caso real;
* Formação;
* LabLog.

A navegação pode permanecer diferente do Header.

### Redes e canais

Preservar:

* YouTube atual do Footer;
* LinkedIn;
* Udemy;
* contato, quando existente.

Não resolver os dois YouTube.

### Legal

Se existirem páginas reais:

* Política de Privacidade;
* Termos;
* Impressum;
* informações legais aplicáveis.

Se não existirem rotas:

* não criar links vazios;
* não inventar páginas;
* registrar pendência.

### Copyright

Utilizar o valor existente ou uma configuração dinâmica já disponível.

Não introduzir runtime client apenas para calcular o ano.

---

# Etapa 13 — Contato e componente reservado

A auditoria inicial identificou conteúdo ou componente de contato possivelmente não renderizado.

Localizar:

```text
ContactSection
```

ou equivalente.

## Possibilidades

### Caso exista destino e conteúdo atual confirmados

Pode ser integrado de forma mínima:

* dentro do Ecossistema;
* antes do CTA final;
* ou como bloco de colaboração.

### Caso permaneça incompleto ou sem destino

* não renderizar;
* preservar o componente;
* documentar como conteúdo reservado;
* não removê-lo.

Não criar formulário novo nesta sprint.

---

# Etapa 14 — Reduzir duplicações institucionais

Comparar:

* Prática Investigativa;
* O LAB;
* Ecossistema;
* LabLog;
* Sobre;
* CTA final;
* Footer.

Identificar repetições de:

* Track Mode;
* Trace Engineer;
* Software System Investigation;
* quatro verbos;
* cinco métodos;
* formação;
* investigação aplicada;
* visão estrutural;
* siga o flow;
* sobre a fundadora;
* CTAs para Udemy e YouTube.

## Regras

* manter cada conceito completo em sua seção principal;
* utilizar referências curtas nas seções seguintes;
* não repetir descrições integrais;
* não apagar conteúdo histórico da fonte;
* registrar cada condensação na matriz;
* não tornar a página vaga apenas para reduzir texto.

---

# Etapa 15 — Atualizar conteúdo e fontes canônicas

Modificar, quando necessário:

```text
content/site.ts
content/payload-journey-lab.ts
content/methods.ts
config/site.ts
types/content.ts
```

ou as fontes reais equivalentes.

Garantir fontes claras para:

* O LAB;
* quatro pilares;
* LabLog;
* Sobre;
* fundadora;
* colaboração;
* CTA final;
* Footer;
* redes;
* links legais;
* copyright.

Não hardcode a nova copy nos componentes.

Preservar copies históricas quando substituídas.

Não apagar conteúdo reservado.

---

# Etapa 16 — Anchors e navegação

Preservar todos os anchors existentes.

Validar especialmente:

```text
#lab
#ecossistema
#lablog
#sobre
#demo
#formacao
#metodos
```

e os demais IDs atuais.

Não modificar o Header sem necessidade.

A navegação do Header deverá continuar limitada e orientada à entrada.

O Footer continuará independente.

Caso um novo anchor de contato seja renderizado, adicioná-lo à fonte central e garantir destino real.

Não criar links para anchors não renderizados.

---

# Etapa 17 — Atualizar smoke tests

Atualizar:

```text
scripts/verify-homepage.mjs
scripts/verify-design-foundation.mjs
```

quando necessário.

Validar no mínimo:

## Ordem

```text
#pratica-investigativa
antes de
#lab
antes de
#ecossistema
antes de
#lablog
antes de
#sobre
antes do CTA final
```

Adaptar os IDs ao estado real do projeto.

## O LAB

* título institucional existe;
* formação, pesquisa e investigação aplicada aparecem;
* não duplica integralmente a Prática Investigativa;
* nenhum claim externo não confirmado foi introduzido.

## Ecossistema

* quatro pilares existem;
* IDs estáveis;
* Formação;
* Pesquisa metodológica;
* Investigação aplicada;
* Colaboração;
* linguagem de colaboração não afirma parcerias inexistentes.

## LabLog

* anchor existe;
* título existe;
* CTA possui destino atual;
* URL não foi alterada;
* YouTube continua unresolved;
* Footer pode continuar utilizando destino diferente.

## Sobre

* origem;
* visão;
* fundadora;
* criação do LAB;
* criação da USMT;
* nenhuma biografia excessiva;
* nenhum claim de patente, standard ou reconhecimento inexistente.

## CTA final

* título existe;
* CTA principal aponta para Udemy;
* URL permanece;
* CTA secundário aponta para `#demo`;
* cupom continua com expiração desconhecida.

## Footer

* navegação independente;
* todos os destinos existem;
* zero links `#` vazios;
* zero links legais fictícios;
* URLs externas seguras.

## Preservação

* exatamente um H1;
* Client Components permanecem no número atual;
* HORA.city continua unresolved;
* Formação preservada;
* Procedimento e Métodos preservados;
* documentos oficiais das sprints preservados.

Não criar snapshots rígidos de classes.

Não instalar framework de testes.

---

# Etapa 18 — Atualizar a matriz de migração

Atualizar:

```text
docs/homepage-refactor/06-content-migration-matrix.md
```

Registrar individualmente:

* O LAB refatorado;
* missão institucional consolidada;
* quatro pilares consolidados;
* Formação institucional condensada;
* Pesquisa metodológica consolidada;
* Investigação aplicada consolidada;
* Colaboração consolidada;
* LabLog refatorado;
* Sobre refatorado;
* fundadora reposicionada;
* CTA final refatorado;
* Footer consolidado;
* links preservados;
* YouTube ainda unresolved;
* colaboração sem destino, caso aplicável;
* ContactSection preservado ou integrado;
* links legais pendentes, caso aplicável;
* conteúdos duplicados condensados;
* conteúdos históricos preservados;
* itens reservados para a Sprint 8.

Não marcar como concluídos:

* demo aprofundada;
* resolução do HORA.city;
* YouTube oficial;
* validade do cupom;
* integrações externas;
* deploy;
* release.

---

# Etapa 19 — Documentação

Criar:

```text
docs/homepage-refactor/19-institutional-ecosystem-and-closing.md
docs/homepage-refactor/20-sprint-7-report.md
```

## `19-institutional-ecosystem-and-closing.md`

Deve conter:

### 1. Objetivo

Explicar por que a dimensão institucional aparece no final da progressão.

### 2. O LAB

Documentar:

* missão;
* apresentação;
* relação com metodologia;
* limites editoriais.

### 3. Ecossistema

Documentar os quatro pilares:

* Formação;
* Pesquisa metodológica;
* Investigação aplicada;
* Colaboração.

### 4. LabLog

Documentar:

* papel;
* temas;
* CTA;
* URL atual;
* pendência do YouTube oficial.

### 5. Sobre e fundadora

Documentar:

* origem;
* visão;
* autoria;
* fatos utilizados;
* fatos omitidos;
* limites biográficos.

### 6. CTA final

Documentar:

* promessa retomada;
* CTA principal;
* CTA secundário;
* campanha.

### 7. Footer

Documentar:

* identidade;
* navegação;
* canais;
* links legais;
* pendências.

### 8. Redução de duplicações

Listar conteúdos condensados e suas fontes preservadas.

### 9. Acessibilidade

Documentar:

* headings;
* landmarks;
* links;
* foco;
* contraste;
* reduced motion.

### 10. Responsividade

Documentar as seis larguras.

### 11. Preparação para a Sprint 8

Explicar o que resta para QA, SEO, performance, validação e release.

---

## `20-sprint-7-report.md`

Utilizar:

```text
# Sprint 7 — Relatório

## Objetivo

## Estado inicial

## Estado da pasta de sprints

## Arquivos criados

## Arquivos modificados

## Nova ordem da homepage

## O LAB

## Ecossistema institucional

## Quatro pilares

## LabLog

## Sobre e fundadora

## Colaboração e contato

## CTA final

## Footer

## Conteúdo condensado

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

## Recomendação para a Sprint 8
```

---

# Etapa 20 — Acessibilidade

Validar:

* exatamente um `h1`;
* O LAB, Ecossistema, LabLog e Sobre em `h2`;
* pilares e blocos internos em `h3`;
* headings em ordem coerente;
* landmarks semânticos;
* links com textos compreensíveis;
* links externos com `target` e `rel` apropriados;
* nenhum link vazio;
* nenhuma distinção depende apenas de cor;
* foco visível;
* contraste WCAG AA;
* reduced motion;
* menu mobile;
* Escape;
* retorno de foco;
* sticky header;
* CTA final acessível;
* Footer navegável por teclado;
* nenhuma nova fronteira Client Component;
* conteúdo compreensível sem hover.

Não adicionar ARIA redundante.

---

# Etapa 21 — Responsividade

Validar pelo menos:

```text
360×800
390×844
768×1024
1024×768
1280×800
1440×900
```

## O LAB

### Mobile

* mensagem institucional curta;
* sem repetição metodológica;
* leitura em uma coluna.

### Desktop

* largura de leitura controlada;
* boa transição da Prática Investigativa.

## Ecossistema

### Mobile

* um pilar por linha;
* atividades com wrapping;
* CTA de colaboração acessível, quando existente.

### Tablet

* uma ou duas colunas.

### Desktop

* duas ou quatro colunas conforme legibilidade;
* cards com altura natural;
* nenhuma descrição comprimida.

## LabLog

### Mobile

* CTA visível;
* conteúdo sem thumbnails obrigatórias;
* sem cards vazios.

### Desktop

* composição equilibrada;
* sem necessidade de integração dinâmica.

## Sobre

### Mobile

* origem, visão e fundadora em sequência;
* sem biografia longa;
* link profissional acessível.

### Desktop

* texto institucional e autoria equilibrados;
* largura de leitura controlada.

## CTA final

* CTA principal dominante;
* CTA secundário legível;
* botões empilhados no mobile quando necessário;
* nenhuma quebra ou overflow.

## Footer

* navegação em coluna ou grupos legíveis;
* links não comprimidos;
* redes e legal separados;
* nenhum overflow.

---

# Etapa 22 — Performance

Comparar com o baseline real da Sprint 6.

Registrar:

| Métrica           | Sprint 6 | Sprint 7 |
| ----------------- | -------: | -------: |
| Rota `/`          |          |          |
| First Load JS     |          |          |
| Shared JS         |          |          |
| Client Components |          |          |
| HTML              |          |          |
| CSS               |          |          |

É esperado:

* possível redução de HTML por condensação;
* crescimento pequeno de conteúdo institucional, quando necessário;
* JavaScript estável.

Não aceitar:

* nova dependência;
* integração dinâmica do YouTube;
* nova biblioteca de ícones;
* nova biblioteca de animação;
* novo Client Component;
* runtime para layout;
* formulário client-side;
* envio de conteúdo histórico desnecessário ao client.

A quantidade de Client Components deve permanecer igual ao baseline da Sprint 6.

---

# Etapa 23 — Validação visual

Capturar screenshots temporários nas seis larguras.

Não sobrescrever:

```text
docs/homepage-refactor/baseline/
```

Validar:

* primeira dobra;
* entrada completa;
* Formação;
* HORA.city;
* Procedimento;
* Métodos;
* Prática Investigativa;
* O LAB;
* Ecossistema;
* LabLog;
* Sobre;
* CTA final;
* Footer;
* página completa;
* menu mobile;
* foco;
* ausência de overflow.

## Mudanças visuais esperadas

* O LAB mais conciso;
* Ecossistema consolidado em quatro pilares;
* LabLog reposicionado narrativamente;
* Sobre reorganizado;
* fundadora apresentada de forma mais clara;
* CTA final simplificado;
* Footer consolidado;
* possível redução da altura institucional.

## Áreas que devem permanecer preservadas

* Header;
* Hero;
* Dor;
* Competências;
* Trilha;
* Demo;
* Formação;
* HORA.city;
* Procedimento;
* Métodos;
* Prática Investigativa;
* estado editorial do caso;
* CTAs anteriores.

---

# Etapa 24 — Validação final

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
* anchors;
* links internos;
* links externos;
* Header;
* menu mobile;
* Escape;
* retorno de foco;
* CTAs;
* contraste;
* overflow;
* bundle;
* HTML;
* CSS;
* Shared JS;
* Client Components;
* HORA.city unresolved;
* YouTube unresolved;
* cupom com expiração desconhecida;
* documentos oficiais das sprints preservados.

Recalcular os hashes da pasta de sprints.

Registrar os warnings preexistentes separadamente.

---

# Critérios de aceite

A Sprint 7 estará concluída somente quando:

* toda a documentação anterior tiver sido lida;
* o estado real da Sprint 6 tiver sido utilizado como baseline;
* O LAB estiver depois da Prática Investigativa;
* Ecossistema estiver depois de O LAB;
* LabLog estiver depois do Ecossistema;
* Sobre estiver depois do LabLog;
* CTA final estiver depois de Sobre;
* Footer encerrar a página;
* O LAB possuir apresentação institucional clara;
* O LAB não repetir integralmente a metodologia;
* quatro pilares estiverem presentes;
* Formação estiver representada;
* Pesquisa metodológica estiver representada;
* Investigação aplicada estiver representada;
* Colaboração estiver representada;
* nenhuma parceria inexistente tiver sido alegada;
* LabLog possuir CTA válido;
* URL do LabLog não tiver sido alterada;
* YouTube permanecer unresolved;
* Sobre estiver organizado em origem, visão e autoria;
* fundadora estiver apresentada somente com fatos confirmados;
* criação do LAB e da USMT estiver preservada;
* nenhuma biografia excessiva tiver sido introduzida;
* nenhuma patente, certificação, standard ou reconhecimento inexistente tiver sido alegado;
* CTA final utilizar `Entrar na formação`;
* CTA secundário apontar para `#demo`;
* Footer permanecer independente do Header;
* Footer não possuir links vazios;
* nenhum link legal fictício tiver sido criado;
* conteúdos duplicados tiverem sido condensados;
* fontes históricas permanecerem preservadas;
* exatamente um H1 permanecer;
* não existir overflow nas seis larguras;
* não existir nova dependência;
* não existir novo Client Component;
* lint passar;
* typecheck passar;
* build passar;
* smoke tests passarem;
* performance permanecer proporcional;
* matriz e documentação estiverem atualizadas;
* seções anteriores permanecerem preservadas;
* documentos oficiais das sprints permanecerem preservados;
* nenhum staging, commit, push, tag, deploy ou troca de branch tiver sido realizado.

---

# Restrições finais

* Não implementar a Sprint 8.
* Não fazer deploy.
* Não criar tag.
* Não alterar a versão.
* Não resolver o YouTube oficial.
* Não alterar links do YouTube.
* Não inventar validade do cupom.
* Não resolver HORA.city.
* Não criar demo aprofundada.
* Não incorporar vídeo automaticamente.
* Não integrar API do YouTube.
* Não criar formulário complexo.
* Não criar newsletter.
* Não criar páginas legais fictícias.
* Não criar páginas internas.
* Não atualizar dependências.
* Não alterar analytics.
* Não expor variáveis de ambiente.
* Não remover conteúdo histórico.
* Não modificar documentos oficiais de sprint.
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

Resultado geral da Sprint 7.

## 2. Estado da pasta de sprints

Confirmar preservação e hashes.

## 3. Arquivos criados

Lista completa.

## 4. Arquivos modificados

Lista completa e finalidade.

## 5. Nova ordem da homepage

Apresentar a sequência final.

## 6. O LAB

Apresentar missão, copy e relação com a metodologia.

## 7. Ecossistema institucional

Apresentar os quatro pilares.

## 8. LabLog

Apresentar narrativa, CTA, URL e status do YouTube.

## 9. Sobre e fundadora

Apresentar estrutura, fatos utilizados e limites editoriais.

## 10. Colaboração e contato

Apresentar destino ou pendência.

## 11. CTA final

Apresentar copy e destinos.

## 12. Footer

Apresentar navegação, redes, legal e pendências.

## 13. Conteúdo condensado

Explicar repetições removidas.

## 14. Conteúdo preservado

Explicar fontes históricas e seções anteriores preservadas.

## 15. Acessibilidade

Apresentar resultados objetivos.

## 16. Responsividade

Apresentar resultado nas seis larguras.

## 17. Performance

Comparar:

| Métrica | Sprint 6 | Sprint 7 |
| ------- | -------: | -------: |

## 18. Validações

| Comando ou verificação | Resultado | Observações |
| ---------------------- | --------- | ----------- |

## 19. Diferenças visuais

Separar:

* mudanças intencionais;
* áreas preservadas;
* regressões encontradas e corrigidas.

## 20. Pendências

Listar itens para a Sprint 8.

## 21. Recomendação para a Sprint 8

Explicar como concluir:

* QA integral;
* SEO;
* metadados;
* performance;
* acessibilidade;
* revisão textual;
* links;
* screenshots finais;
* comparação antes/depois;
* preparação da versão;
* publicação.

---

# Resultado esperado

Ao final da Sprint 7, a homepage deverá comunicar:

```text
Você viu o que pode aprender.
Você acompanhou o flow.
Você encontrou a Formação.
Você viu a aplicação real.
Você compreendeu o procedimento e os métodos.

Agora conheça o LAB que desenvolve essa prática.
```

O visitante deverá entender:

```text
O LAB forma.
O LAB pesquisa métodos.
O LAB investiga sistemas reais.
O LAB colabora.
O LabLog documenta o trabalho em movimento.
```

O encerramento deverá conduzir a uma ação simples:

```text
Comece por um único flow.
```

A Sprint 8 poderá então concentrar-se exclusivamente em validação, acabamento, SEO, performance, preparação da release e publicação.
