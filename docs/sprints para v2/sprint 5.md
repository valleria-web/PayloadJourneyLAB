# Sprint 5 — Formação fundamental e HORA.city reposicionados

## Contexto

Este repositório contém o site oficial do Payload Journey LAB.

As Sprints 0 a 4 foram concluídas.

A homepage já possui:

* Header simplificado;
* Hero orientado a estudantes e developers;
* seção da dor e estratégia de entrada;
* oito competências;
* Trilha progressiva com quatro etapas;
* Demo pedagógica com nove nodes;
* distinção entre transportar, transformar, decidir e apresentar;
* conteúdo metodológico, institucional e aplicado anterior ainda preservado.

O estado funcional ao final da Sprint 4 é:

```text
branch: refactor/homepage-v0.2.0
version: 0.2.0

rota /: 7,03 kB
First Load JS: 94,3 kB
Shared JS: 87,2 kB
Client Components: 1
```

A sequência atual da homepage é:

```text
Header
Hero
Dor e estratégia
Competências
Trilha progressiva
Demo pedagógica
O LAB
Métodos
Ecossistema investigativo
HORA.city
Formação
LabLog
Sobre
CTA final
Footer
```

A Sprint 5 deverá reposicionar a Formação e o caso HORA.city para que apareçam imediatamente depois da Demo.

A nova progressão pretendida é:

```text
Aprender
↓
Ver como o flow funciona
↓
Começar a formação
↓
Ver a aplicação numa codebase real
↓
Descobrir a metodologia e o ecossistema completo
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
docs/homepage-refactor/13-learning-path-and-flow-demo.md
docs/homepage-refactor/14-sprint-4-report.md
```

A pasta:

```text
docs/sprints para v2/
```

faz parte oficialmente do repositório.

Seus documentos devem ser tratados como conteúdo versionado e preservado.

Não alterar arquivos dessa pasta durante a implementação, salvo instrução explícita.

---

# Objetivo da sprint

Reposicionar e refatorar a apresentação da Formação fundamental e do caso real HORA.city.

Resultado principal:

**O visitante entende como começar a aprender e vê imediatamente uma prova de aplicação numa codebase real.**

A Sprint 5 deverá:

1. Mover a Formação para imediatamente depois da Demo.
2. Refatorar sua narrativa para uma entrada fundamental e acessível.
3. Mover HORA.city para imediatamente depois da Formação.
4. Refatorar o caso como prova de aplicação do Payload Tracing.
5. Conectar Demo, Formação e Caso Real.
6. Reduzir repetições editoriais.
7. Preservar integralmente fatos, links e variantes ainda não resolvidas.
8. Manter as seções metodológicas e institucionais posteriores intactas.

---

# Princípio central

## Da compreensão à ação e da ação à evidência

Depois da Sprint 4, o visitante já sabe:

* qual problema o LAB resolve;
* o que aprenderá;
* como evolui;
* como um payload atravessa o sistema.

Agora a página deverá responder:

```text
Onde começo a aprender?
↓
Como essa aprendizagem é organizada?
↓
Isso já foi aplicado numa codebase real?
↓
Que tipo de problema pode ser investigado?
```

A Formação deverá ser apresentada como a entrada acessível.

HORA.city deverá ser apresentada como prova de aplicação.

Nem a Formação nem HORA.city devem parecer blocos isolados do restante da narrativa.

---

# Escopo da Sprint 5

## Dentro do escopo

* reposicionar Formação e HORA.city em `app/page.tsx`;
* refatorar a seção de Formação;
* refatorar a seção HORA.city;
* criar nova conexão narrativa entre Demo, Formação e Caso Real;
* centralizar novos textos;
* preservar URLs, cupom e dados temporários;
* preservar as variantes editoriais de HORA.city;
* selecionar somente fatos confirmados;
* reduzir duplicações visíveis;
* melhorar hierarquia visual;
* atualizar CTAs;
* atualizar smoke tests;
* atualizar matriz de migração;
* documentar decisões;
* validar responsividade, acessibilidade e performance.

## Fora do escopo

Não implementar nesta sprint:

* resolução editorial definitiva de HORA.city;
* escolha silenciosa entre `rendered` e `audited`;
* atualização do estado real da investigação;
* demonstração aprofundada;
* código real da Demo;
* logs reais;
* checkpoints executáveis;
* vídeo específico;
* protocolo documental completo;
* refatoração dos cinco métodos;
* reposicionamento de Congelar, Mapear, Detectar e Restaurar;
* refatoração do ecossistema;
* refatoração do LabLog;
* refatoração de Sobre;
* nova página do curso;
* nova página do caso;
* integração com Udemy;
* integração com YouTube;
* decisão sobre o canal oficial;
* definição de validade do cupom;
* atualização de dependências;
* correção das vulnerabilidades do npm;
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

3. Confirmar o estado Git real.

4. Identificar alterações tracked ou untracked já existentes.

5. Não descartar nem sobrescrever alterações anteriores.

6. Confirmar que os documentos das Sprints 0–4 estão presentes.

7. Confirmar que `docs/sprints para v2/` é conteúdo oficial rastreado.

8. Registrar os hashes iniciais dos documentos dessa pasta, caso necessário para demonstrar preservação.

9. Executar:

```bash
npm.cmd run lint
npm.cmd exec tsc -- --noEmit
npm.cmd run build
npm.cmd run verify:homepage
npm.cmd run verify:foundation
```

10. Registrar:

```text
rota /: 7,03 kB
First Load JS: 94,3 kB
Shared JS: 87,2 kB
Client Components: 1
```

11. Registrar os warnings preexistentes do cache Webpack separadamente.

Não iniciar a implementação caso exista regressão não compreendida.

Não realizar:

* pull;
* merge;
* rebase;
* commit;
* push;
* tag;
* deploy;
* checkout;
* troca de branch;
* staging não solicitado.

---

# Etapa 2 — Definir a nova ordem da homepage

Atualizar `app/page.tsx` para esta ordem:

```text
Header
Hero
Dor e estratégia
Competências
Trilha progressiva
Demo pedagógica
Formação fundamental
Caso real HORA.city
O LAB
Métodos
Ecossistema investigativo
LabLog
Sobre
CTA final
Footer
```

## Regras

* Formação deve aparecer imediatamente após a Demo.
* HORA.city deve aparecer imediatamente após a Formação.
* O LAB, Métodos e Ecossistema passam a aparecer depois do Caso Real.
* A ordem relativa entre O LAB, Métodos e Ecossistema deve permanecer.
* LabLog, Sobre, CTA final e Footer devem permanecer na mesma ordem relativa.
* Nenhuma seção deve ser removida.
* Nenhum anchor deve ser removido.
* Nenhum conteúdo deve ser apagado apenas por ter sido movido.

---

# Etapa 3 — Atualizar os contratos de conteúdo

Atualizar `types/content.ts` ou a fonte equivalente.

Criar contratos explícitos para:

## Formação

* ID;
* eyebrow;
* título;
* descrição;
* público;
* promessa;
* competências relacionadas;
* formato;
* estado atual;
* CTA principal;
* CTA secundário;
* campanha;
* cupom;
* observações temporárias.

## Caso real

* ID;
* projeto;
* contexto;
* dimensão da codebase;
* problema estrutural;
* anomalia;
* flow selecionado;
* payload;
* investigação;
* evidências;
* autoridade investigada;
* status;
* CTA;
* variantes editoriais;
* resolução editorial.

## Relação entre Demo, Formação e Caso

Criar conteúdo tipado para pequenas transições editoriais, quando necessário.

Não utilizar `any`.

Não duplicar tipos existentes.

Não criar estruturas excessivamente abstratas.

---

# Etapa 4 — Refatorar o conteúdo centralizado da Formação

Utilizar os dados existentes em:

```text
content/site.ts
content/payload-journey-lab.ts
```

ou nas fontes canônicas equivalentes.

Não hardcode a nova copy diretamente no componente.

## ID

Preservar o anchor atual:

```text
formacao
```

## Eyebrow

```text
Formação fundamental
```

## Título

```text
Comece a aprender Payload Tracing
```

## Descrição principal

```text
Uma entrada prática para estudantes e developers que precisam de uma estratégia para compreender codebases grandes através do fluxo da informação.
```

## Produto

Preservar o nome oficial existente:

```text
Payload Journey LAB: Siga o flow, entenda o sistema
```

## Mensagem de resultado

```text
Aprenda a escolher um flow, encontrar o payload, acompanhar suas transformações e localizar onde o sistema toma decisões.
```

## Público

Apresentar de forma clara:

* estudantes de Engenharia de Software;
* developers junior;
* developers entrando em codebases desconhecidas;
* pessoas trabalhando com sistemas expandidos por IA;
* profissionais que ainda não possuem uma estratégia estruturada de tracing.

## O que a Formação oferece

Organizar os conteúdos confirmados em poucos blocos:

* fundamentos de payload;
* estados e eventos;
* camadas;
* representações;
* Payload Journey;
* estratégia de entrada;
* visão estrutural;
* tracing de flows.

Não inventar módulos ou conteúdos que não existam.

## Formato

Utilizar somente informações existentes no conteúdo atual.

Preservar quando confirmados:

* curso na Udemy;
* formato online;
* estado beta;
* primeiro círculo;
* duração atual;
* quantidade de aulas ou seções;
* materiais educacionais;
* acesso.

Não acrescentar certificações inexistentes.

## CTA principal

```text
Entrar na formação
```

Destino:

URL atual da Udemy.

## CTA secundário

```text
Rever a trilha
```

Destino:

```text
#trilha
```

## Campanha e cupom

Preservar:

```text
expiration: null
```

Não inventar validade.

Se o cupom estiver ativo na configuração atual, preservar a apresentação.

Se a interface atual não consegue confirmar sua validade, evitar afirmar que está válido por tempo limitado.

Não alterar URL ou código do cupom.

---

# Etapa 5 — Implementar a nova seção de Formação

Refatorar:

```text
components/sections/EducationSection.tsx
```

ou o componente real da Formação.

## Requisitos visuais

A seção deverá:

* utilizar `Section`;
* utilizar `Container`;
* utilizar `SectionHeader`;
* utilizar `Button`;
* utilizar `Card` quando apropriado;
* permanecer Server Component;
* apresentar a Formação como entrada acessível;
* possuir um CTA principal inequívoco;
* possuir um CTA secundário interno;
* evitar excesso de cartões;
* evitar listas longas;
* priorizar promessa, público, conteúdo e ação.

## Composição sugerida

### Bloco principal

* eyebrow;
* título;
* descrição;
* nome do curso;
* mensagem de resultado;
* CTAs.

### Bloco de apoio

Pode conter três grupos:

1. Para quem é.
2. O que você aprenderá.
3. Como começar.

Evitar transformar a seção numa página completa do curso.

## Linguagem

Não posicionar o curso como:

* formação para investigadores experts;
* certificação formal;
* treinamento corporativo avançado;
* programa completo de Trace Engineer.

A Formação é a entrada fundamental.

---

# Etapa 6 — Criar transição entre Demo e Formação

A Demo termina apontando atualmente para o caso real.

Nesta Sprint, rever essa ligação narrativa.

## Nova lógica

A sequência deverá comunicar:

```text
Você viu como o payload atravessa o sistema.
Agora aprenda a seguir esse flow.
Depois veja a aplicação numa codebase real.
```

## CTA final da Demo

Atualizar para:

```text
Começar pela formação
```

Destino:

```text
#formacao
```

## Texto de apoio

```text
Aprenda a reconstruir esse caminho com uma estratégia de entrada clara.
```

O caso HORA.city continuará acessível imediatamente depois da Formação.

## Regra

Não remover o acesso ao caso real do Header.

Não prometer demonstração aprofundada.

Não afirmar que a Formação cobre todo o protocolo avançado.

---

# Etapa 7 — Preservar as variantes editoriais de HORA.city

A Sprint 1 centralizou duas variantes:

* `rendered`;
* `audited`.

Também preservou:

```text
editorialResolution: "unresolved"
```

A Sprint 5 não deverá resolver essa pendência.

## Regra obrigatória

Não selecionar silenciosamente uma variante como verdade editorial definitiva.

A nova seção deve utilizar:

* fatos comuns às duas variantes;
* fatos confirmados no conteúdo atual;
* textos neutros;
* dados estruturais não controversos.

Quando uma informação existir apenas numa variante:

* não a promover como fato canônico;
* preservá-la na fonte;
* registrar sua ausência deliberada na nova copy;
* manter a pendência na matriz e no relatório.

---

# Etapa 8 — Definir a narrativa neutra de HORA.city

## ID

Preservar:

```text
case-study
```

## Eyebrow

```text
Caso real
```

## Título

```text
Veja o Payload Tracing aplicado numa codebase real
```

## Introdução

```text
HORA.city funciona como ambiente de investigação aplicada do Payload Journey LAB. Em vez de tentar compreender toda a codebase de uma vez, o trabalho começa pela seleção de um único flow observável.
```

## Mensagem principal

```text
Uma codebase grande pode ser reduzida a uma rota investigável quando seguimos o payload, registramos checkpoints e confrontamos evidências.
```

## Estrutura narrativa

Organizar o caso em sete partes.

### 1. Contexto

Preservar somente fatos confirmados:

* HORA.city;
* sistema real;
* codebase em expansão;
* crescimento aproximado apresentado no site;
* necessidade de recuperar visão estrutural.

### 2. Anomalia

Apresentar de forma neutra:

```text
Um Heart apresentado como recém-criado exibia informações temporais que não correspondiam ao comportamento esperado.
```

Não simplificar a anomalia de forma que contradiga as variantes existentes.

### 3. Flow selecionado

```text
Send Heart
```

ou o nome real atualmente utilizado pelo site e pela fonte canônica.

Explicar:

* interação concreta;
* botão principal;
* payload produzido;
* fronteiras atravessadas.

### 4. Payload

Preservar quando confirmado:

```text
HeartCreated
```

e os dados atualmente reconhecidos pela fonte canônica.

Não inventar schema adicional.

### 5. Investigação

Apresentar:

* Reverse Payload Journey;
* Track to Origin;
* seleção do flow;
* observação;
* checkpoints;
* confronto entre UI, resposta e domínio.

### 6. Evidências

Mostrar apenas evidências já confirmadas:

* crescimento da codebase;
* anomalia observável;
* bifurcação create/join, quando presente em ambas as variantes ou confirmada na fonte canônica;
* payload;
* autoridade temporal sob investigação;
* estado do caso.

### 7. Estado atual

Usar linguagem neutra:

```text
Caso documentado como investigação aplicada do LAB.
```

ou o status exato já centralizado.

Não declarar:

* bug resolvido;
* origem comprovada;
* restauração concluída;
* autoridade definitiva;

caso isso não esteja confirmado na fonte canônica.

---

# Etapa 9 — Refatorar o conteúdo centralizado de HORA.city

Atualizar:

```text
content/hora-city.ts
```

ou a fonte canônica correspondente.

## Preservar integralmente

* variante `rendered`;
* variante `audited`;
* `editorialResolution: "unresolved"`;
* ID do caso;
* nome do projeto;
* anomalia;
* payload;
* números;
* métodos;
* autoridade investigada;
* links;
* status;
* conteúdos históricos.

## Adicionar

Uma nova camada de apresentação neutra, por exemplo:

```ts
publicNarrative: {
  eyebrow: "...",
  title: "...",
  introduction: "...",
  context: {...},
  anomaly: {...},
  selectedFlow: {...},
  payload: {...},
  investigation: {...},
  evidence: [...],
  currentStatus: "...",
  ctas: [...]
}
```

Essa camada não deverá substituir nem apagar as variantes anteriores.

Ela deverá ser explicitamente marcada como:

```text
sourceStrategy: "shared-confirmed-facts"
```

ou estrutura tipada equivalente.

---

# Etapa 10 — Refatorar a seção HORA.city

Modificar:

```text
components/sections/CaseStudySection.tsx
```

## Requisitos

A seção deverá:

* consumir `publicNarrative`;
* permanecer Server Component;
* utilizar `Section`;
* utilizar `Container`;
* utilizar `SectionHeader`;
* utilizar cards ou painéis somente quando melhorarem a compreensão;
* evitar repetição do mesmo dado;
* apresentar uma sequência clara;
* funcionar em mobile;
* preservar o anchor;
* preservar links existentes;
* preservar o acesso ao LabLog ou estudo relacionado, quando já disponível;
* não renderizar simultaneamente as duas variantes completas.

## Composição sugerida

### Cabeçalho

* eyebrow;
* título;
* introdução;
* mensagem principal.

### Fluxo do caso

Cards ou blocos numerados:

1. Contexto.
2. Anomalia.
3. Flow selecionado.
4. Payload.
5. Investigação.
6. Evidências.
7. Estado atual.

### Painel técnico

Pode apresentar somente dados confirmados:

```text
Caso
Projeto
Flow
Payload
Métodos
Status
```

Evitar exibir campos vazios.

### CTA principal

```text
Acompanhar o caso no LabLog
```

Usar o destino atualmente associado ao caso, sem alterar o handle.

### CTA secundário

```text
Rever o flow
```

Destino:

```text
#demo
```

Não criar link para um estudo completo inexistente.

---

# Etapa 11 — Conectar Formação e HORA.city

Entre as duas seções, a narrativa deve ser clara:

```text
Formação:
Aprenda a estratégia.

HORA.city:
Veja a estratégia aplicada.
```

## Possível transição editorial no início do caso

```text
Da aprendizagem à investigação aplicada
```

Não é obrigatório criar uma seção intermediária.

Preferir uma boa transição visual e textual entre as duas seções.

Não criar um novo componente apenas para uma frase de transição.

---

# Etapa 12 — Atualizar o Header

A navegação atual é:

```text
Aprender
Trilha
Demo
Formação
Caso real
O LAB
```

Preservar essa navegação.

## Verificações

* Formação aponta para `#formacao`.
* Caso real aponta para `#case-study`.
* Header desktop e mobile usam a mesma fonte.
* CTA Começar continua apontando para `#trilha`, salvo decisão fundamentada.

Não alterar novamente o Header sem necessidade.

## CTA Começar

Manter:

```text
Começar → #trilha
```

A Trilha continua sendo a melhor entrada pedagógica após o Hero.

---

# Etapa 13 — Revisar CTAs do Hero

Os CTAs atuais são:

```text
Ver o payload atravessar o sistema → #demo
Explorar a trilha → #trilha
```

Preservar ambos.

A Formação já está acessível:

* no Header;
* depois da Demo;
* pelo CTA final da Demo.

Não sobrecarregar o Hero com um terceiro CTA.

---

# Etapa 14 — Atualizar os testes

Atualizar:

```text
scripts/verify-homepage.mjs
scripts/verify-design-foundation.mjs
```

quando necessário.

Validar no mínimo:

## Ordem

```text
#demo
antes de
#formacao
antes de
#case-study
antes de
#lab
```

## Formação

* anchor existe;
* novo título existe;
* nome oficial do curso existe;
* CTA Udemy existe;
* URL permanece inalterada;
* CTA secundário aponta para `#trilha`;
* campanha continua tipada;
* `expiration` continua `null`;
* nenhuma certificação inexistente foi introduzida.

## HORA.city

* anchor existe;
* título novo existe;
* narrativa neutra existe;
* flow selecionado existe;
* payload existe;
* métodos existem;
* variantes `rendered` e `audited` continuam disponíveis na fonte;
* `editorialResolution` continua `unresolved`;
* seção pública utiliza fatos compartilhados;
* nenhuma variante foi removida;
* CTA principal preserva o destino atual;
* CTA secundário aponta para `#demo`.

## Preservação

* exatamente um `h1`;
* Header possui destinos válidos;
* Footer permanece independente;
* O LAB, Métodos e Ecossistema continuam presentes;
* links Udemy e YouTube permanecem;
* Client Components continuam em 1;
* nenhum conteúdo futuro foi removido.

Não criar snapshots rígidos de classes CSS.

Não instalar framework novo.

---

# Etapa 15 — Atualizar a matriz de migração

Atualizar:

```text
docs/homepage-refactor/06-content-migration-matrix.md
```

Registrar:

* Formação reposicionada;
* Formação fundamental refatorada;
* Demo conectada à Formação;
* HORA.city reposicionado;
* narrativa pública neutra criada;
* variantes `rendered` e `audited` preservadas;
* resolução editorial continua pendente;
* CTA da Demo atualizado;
* CTA da Formação atualizado;
* CTA do caso atualizado;
* O LAB e Métodos movidos apenas na composição;
* metodologia completa ainda não refatorada;
* ecossistema ainda não refatorado;
* demo aprofundada ainda pendente.

Não marcar como concluídos itens das Sprints 6–8.

---

# Etapa 16 — Documentação

Criar:

```text
docs/homepage-refactor/15-training-and-case-study.md
docs/homepage-refactor/16-sprint-5-report.md
```

## `15-training-and-case-study.md`

Deve conter:

### 1. Objetivo

Explicar a sequência:

```text
Demo → Formação → Caso real
```

### 2. Formação

Documentar:

* público;
* promessa;
* conteúdo;
* formato;
* CTAs;
* campanha;
* ausência de certificação formal.

### 3. HORA.city

Documentar:

* contexto;
* narrativa pública;
* fatos utilizados;
* fatos omitidos;
* variantes preservadas;
* estratégia `shared-confirmed-facts`;
* resolução editorial pendente.

### 4. Conexão pedagógica

Explicar:

```text
ver → aprender → aplicar
```

### 5. Acessibilidade

Documentar:

* headings;
* listas;
* cards;
* CTAs;
* contraste;
* ordem de leitura.

### 6. Responsividade

Documentar comportamento nas seis larguras.

### 7. Preparação para a Sprint 6

Explicar como o procedimento, os métodos e o Trace Engineer serão apresentados depois do Caso Real.

---

## `16-sprint-5-report.md`

Utilizar:

```text
# Sprint 5 — Relatório

## Objetivo

## Estado inicial

## Arquivos criados

## Arquivos modificados

## Nova ordem da homepage

## Formação fundamental

## Caso real HORA.city

## Estratégia editorial do caso

## Variantes preservadas

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

## Recomendação para a Sprint 6
```

---

# Etapa 17 — Acessibilidade

Validar:

* exatamente um `h1`;
* Formação e Caso Real em `h2`;
* blocos internos em `h3`;
* ordem semântica corresponde à ordem visual;
* listas utilizam semântica adequada;
* CTAs externos e internos são links;
* foco visível;
* contraste WCAG AA;
* nenhuma informação depende apenas de cor;
* conteúdo compreensível sem hover;
* links externos possuem `target` e `rel` adequados, quando aplicável;
* reduced motion preservado;
* sticky header não cobre headings;
* menu mobile continua funcionando;
* Escape e retorno de foco permanecem;
* nenhum novo Client Component.

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

## Formação

### Mobile

* CTA principal visível;
* CTA secundário não compete;
* conteúdo em uma coluna;
* listas legíveis;
* sem cards excessivamente densos;
* sem overflow.

### Tablet

* possível divisão entre bloco principal e apoio;
* largura de leitura controlada.

### Desktop

* composição equilibrada;
* CTA principal claramente dominante;
* informações de formato não dispersas;
* sem excesso de largura.

## HORA.city

### Mobile

* narrativa em sequência;
* sete partes legíveis;
* painel técnico em coluna;
* sem tabelas largas;
* sem scroll horizontal.

### Tablet

* cards em uma ou duas colunas;
* ordem investigativa preservada.

### Desktop

* cabeçalho e painel técnico equilibrados;
* cards ou blocos com leitura confortável;
* sem alturas artificiais;
* status e CTAs claramente separados.

---

# Etapa 19 — Performance

Comparar com a Sprint 4:

```text
rota /: 7,03 kB
First Load JS: 94,3 kB
Shared JS: 87,2 kB
Client Components: 1

HTML estático: 199.171 bytes
CSS gerado: 30.797 bytes
```

É esperado crescimento de HTML devido à nova narrativa.

Não aceitar:

* crescimento de JavaScript sem justificativa;
* nova dependência;
* nova imagem pesada;
* vídeo;
* runtime para layout;
* nova fronteira Client Component;
* duplicação integral das duas variantes editoriais no HTML;
* envio de dados históricos desnecessários ao client.

As variantes podem permanecer na fonte server-side sem serem integralmente renderizadas.

A quantidade de Client Components deve permanecer:

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
* Dor;
* Competências;
* Trilha;
* Demo;
* Formação;
* HORA.city;
* transição para O LAB;
* página completa;
* Header;
* menu mobile;
* Footer;
* foco;
* CTAs;
* ausência de overflow.

## Mudanças visuais esperadas

* Formação movida;
* HORA.city movido;
* nova hierarquia da Formação;
* nova hierarquia do caso;
* CTA da Demo alterado;
* novos CTAs internos;
* aumento ou redução da altura das duas seções;
* mudança da transição para O LAB.

## Áreas que devem permanecer preservadas

* Hero;
* Dor;
* Competências;
* Trilha;
* Demo, exceto CTA final;
* O LAB;
* Métodos;
* Ecossistema;
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
* variantes HORA.city preservadas;
* conteúdo posterior preservado;
* documentos da pasta de sprints preservados.

Registrar os warnings preexistentes separadamente.

---

# Critérios de aceite

A Sprint 5 estará concluída somente quando:

* os documentos anteriores tiverem sido lidos;
* Formação estiver imediatamente após a Demo;
* HORA.city estiver imediatamente após a Formação;
* O LAB estiver depois de HORA.city;
* Formação estiver apresentada como entrada fundamental;
* público prioritário estiver explícito;
* nome oficial do curso estiver preservado;
* CTA principal da Formação apontar para a Udemy;
* URL da Udemy permanecer inalterada;
* CTA secundário apontar para `#trilha`;
* cupom continuar isolado;
* `expiration` continuar `null`;
* nenhuma certificação inexistente tiver sido introduzida;
* CTA final da Demo apontar para `#formacao`;
* HORA.city estiver apresentado como aplicação real;
* narrativa do caso seguir sequência clara;
* sete partes do caso estiverem presentes;
* fatos utilizados forem confirmados;
* variantes `rendered` e `audited` permanecerem;
* `editorialResolution` continuar `unresolved`;
* nenhuma variante tiver sido declarada canônica;
* nenhuma informação divergente tiver sido promovida silenciosamente;
* CTA principal do caso preservar o destino atual;
* CTA secundário apontar para `#demo`;
* Header continuar válido;
* Footer continuar independente;
* anchors antigos permanecerem;
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
* pasta oficial de sprints permanecer preservada;
* nenhum commit, push, tag, deploy ou troca de branch tiver sido realizado.

---

# Restrições finais

* Não implementar a Sprint 6.
* Não refatorar Métodos.
* Não reposicionar o ciclo investigativo.
* Não refatorar Trace Engineer.
* Não resolver HORA.city editorialmente.
* Não declarar o caso concluído sem evidência.
* Não escolher um YouTube oficial.
* Não inventar validade para cupom.
* Não criar página interna.
* Não criar demo aprofundada.
* Não incorporar vídeo.
* Não adicionar logs reais.
* Não criar checkpoints executáveis.
* Não atualizar dependências.
* Não alterar a versão.
* Não modificar serviços externos.
* Não expor variáveis de ambiente.
* Não remover conteúdo histórico.
* Não modificar os documentos oficiais das sprints.
* Não realizar ações destrutivas no Git.
* Não realizar commit, push, tag ou deploy.

Quando uma validação não puder ser realizada, documentar:

1. o que não foi validado;
2. por que não foi validado;
3. o que será necessário para validar posteriormente.

---

# Relatório final no chat

Ao concluir, responder com:

## 1. Resumo

Resultado geral da Sprint 5.

## 2. Estado da pasta de sprints

Confirmar sua preservação.

## 3. Arquivos criados

Lista completa.

## 4. Arquivos modificados

Lista completa e finalidade.

## 5. Nova ordem da homepage

Apresentar a sequência final.

## 6. Formação fundamental

Apresentar:

* título;
* promessa;
* público;
* conteúdo;
* formato;
* CTAs;
* campanha.

## 7. HORA.city

Apresentar:

* narrativa;
* sete partes;
* fatos utilizados;
* flow;
* payload;
* investigação;
* evidências;
* estado.

## 8. Estratégia editorial

Explicar:

* variantes;
* fatos compartilhados;
* informações omitidas;
* estado `unresolved`.

## 9. Navegação e CTAs

Apresentar todos os destinos alterados.

## 10. Conteúdo preservado

Explicar o que permaneceu intacto.

## 11. Acessibilidade

Apresentar resultados objetivos.

## 12. Responsividade

Apresentar resultado nas seis larguras.

## 13. Performance

Comparar:

| Métrica | Sprint 4 | Sprint 5 |
| ------- | -------: | -------: |

## 14. Validações

| Comando ou verificação | Resultado | Observações |
| ---------------------- | --------- | ----------- |

## 15. Diferenças visuais

Separar:

* mudanças intencionais;
* áreas preservadas;
* regressões encontradas e corrigidas.

## 16. Pendências

Listar itens para a Sprint 6.

## 17. Recomendação para a Sprint 6

Explicar como apresentar:

* Congelar;
* Mapear;
* Detectar;
* Restaurar;
* cinco métodos;
* Track Mode;
* Trace Engineer;
* Software System Investigation.

---

# Resultado esperado

Ao final da Sprint 5, a homepage deverá apresentar esta progressão:

```text
Entenda a dor.
↓
Conheça as competências.
↓
Veja a trilha.
↓
Observe o payload atravessar o sistema.
↓
Comece a formação.
↓
Veja a aplicação numa codebase real.
↓
Descubra a metodologia completa do LAB.
```

A Formação deverá responder:

```text
É aqui que eu começo a aprender.
```

HORA.city deverá responder:

```text
É assim que essa aprendizagem é aplicada num sistema real.
```

A Sprint 6 poderá então apresentar o procedimento investigativo, os cinco métodos e a prática de Trace Engineer sem precisar refazer a entrada, a Trilha, a Demo, a Formação ou o Caso Real.
