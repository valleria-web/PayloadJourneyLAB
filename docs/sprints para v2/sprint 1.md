# Sprint 1 — Arquitetura de informação e migração do conteúdo

## Contexto

Este repositório contém o site oficial do Payload Journey LAB.

A Sprint 0 foi concluída e documentou o estado atual da homepage sem alterar a aplicação.

O projeto encontra-se atualmente com as seguintes características confirmadas:

* aplicação em Next.js App Router;
* homepage controlada por `app/page.tsx`;
* nove seções editoriais, além de header, CTA final e footer;
* conteúdo parcialmente centralizado;
* duplicações relevantes no Hero, Study Case, LabLog e Footer;
* anchors internos atualmente válidos;
* comportamento responsivo funcional entre 360 px e 1440 px;
* menu mobile funcional;
* ausência de erros de hydration e overflow horizontal;
* conteúdo futuro existente no código, mas ainda não renderizado;
* ausência de testes automatizados;
* links e configurações externas dispersos;
* dois handles diferentes de YouTube;
* cupom e informações temporárias hardcoded;
* dados do caso HORA.city repetidos;
* Google Analytics hardcoded;
* versão atual do projeto: `0.2.0`.

A documentação produzida na Sprint 0 está localizada em:

```text
docs/homepage-refactor/
```

Antes de iniciar qualquer alteração, leia integralmente:

```text
docs/homepage-refactor/00-project-audit.md
docs/homepage-refactor/01-homepage-structure.md
docs/homepage-refactor/02-content-inventory.md
docs/homepage-refactor/03-assets-and-links.md
docs/homepage-refactor/04-technical-baseline.md
docs/homepage-refactor/05-refactor-risks.md
```

Consulte também os screenshots armazenados em:

```text
docs/homepage-refactor/baseline/
```

---

# Objetivo da sprint

Preparar a arquitetura de informação e a base de conteúdo para a futura repaginação da homepage.

Resultado esperado:

**Conteúdo reorganizado, centralizado e semanticamente preparado, sem redesenhar ainda a página.**

Ao final desta sprint:

* todo conteúdo relevante deverá possuir uma fonte claramente identificável;
* textos, links e dados repetidos deverão estar centralizados;
* cada conteúdo atual deverá possuir um destino definido na nova arquitetura;
* conteúdos temporários deverão estar isolados;
* a homepage deverá continuar visualmente e funcionalmente equivalente ao estado atual;
* nenhum conceito deverá ser perdido;
* o projeto deverá permanecer compilável e sincronizado com a arquitetura existente.

---

# Regra central

## Reorganizar internamente sem redesenhar externamente

Nesta sprint, não implementar ainda:

* novo Hero;
* nova ordem visual das seções;
* nova navegação;
* nova trilha;
* demonstração do payload;
* novos cards;
* nova identidade visual;
* animações;
* grandes alterações de CSS;
* remoção de seções;
* nova experiência editorial;
* nova hierarquia visual.

O objetivo não é modificar o que o visitante vê.

O objetivo é preparar corretamente o conteúdo e a arquitetura para que as próximas sprints possam modificar a homepage sem perda semântica, duplicação ou hardcoding.

Mudanças visuais acidentais devem ser evitadas e corrigidas antes da conclusão.

---

# Etapa 1 — Validar o estado inicial

Antes de editar:

1. Confirme a branch ativa.
2. Confirme que a working tree está limpa.
3. Confirme a versão `0.2.0`.
4. Confirme que a documentação da Sprint 0 está presente.
5. Execute os comandos de baseline disponíveis:

   * lint;
   * typecheck;
   * build.

Não faça pull, merge, rebase, commit, push ou deploy sem instrução explícita do usuário.

Caso a working tree não esteja limpa, não descarte nem sobrescreva alterações externas. Documente o estado e preserve arquivos não relacionados.

---

# Etapa 2 — Ler e reconciliar a auditoria

Utilize os documentos da Sprint 0 como fonte principal.

Confirme no código:

* ordem atual das seções;
* componentes utilizados;
* textos hardcoded;
* arrays locais;
* links externos;
* dados do HORA.city;
* conteúdo do LabLog;
* informações de formação;
* conteúdos institucionais;
* conteúdos não renderizados;
* anchors;
* CTAs;
* footer;
* metadados.

Caso exista divergência entre documentação e código, considere o código como estado operacional atual e registre a divergência.

Não altere a documentação da Sprint 0 para ocultar divergências. Crie um registro específico desta sprint.

---

# Etapa 3 — Criar a matriz definitiva de migração

Crie o documento:

```text
docs/homepage-refactor/06-content-migration-matrix.md
```

A matriz deverá mapear todo conteúdo atual para a futura arquitetura.

Utilize a seguinte estrutura:

| ID | Conteúdo atual | Localização atual | Destino futuro | Tratamento | Fonte canônica | Status | Observações |
| -- | -------------- | ----------------- | -------------- | ---------- | -------------- | ------ | ----------- |

Os tratamentos permitidos são:

* preservar;
* mover;
* dividir;
* combinar;
* condensar;
* transformar em conteúdo expansível;
* transformar em dado configurável;
* arquivar para uso futuro;
* remover apenas duplicação.

Não classifique nenhum conteúdo relevante como eliminado sem justificar que se trata exclusivamente de duplicação.

---

# Nova arquitetura de destino

Todos os conteúdos atuais deverão ser associados a um dos seguintes destinos:

1. Header
2. Hero
3. Dor e estratégia de entrada
4. Competências ensinadas
5. Trilha progressiva
6. Demonstração resumida
7. Formação fundamental
8. Caso real HORA.city
9. Procedimento investigativo
10. Métodos e instrumentos
11. Prática investigativa e Trace Engineer
12. O LAB expandido
13. LabLog
14. Sobre o LAB e fundadora
15. CTA final
16. Footer
17. Conteúdo reservado para páginas futuras

Nesta sprint, os conteúdos ainda não devem ser visualmente movidos para esses destinos.

A matriz deverá apenas preparar a migração.

---

# Etapa 4 — Definir fontes canônicas

Identifique e estabeleça uma única fonte canônica para cada domínio de conteúdo.

No mínimo:

## Identidade do LAB

* nome oficial;
* tagline;
* descrição curta;
* descrição institucional;
* assinatura;
* mensagens principais.

## Navegação

* labels;
* anchors;
* ordem;
* CTAs do header.

Nesta sprint, preserve os anchors atuais para evitar regressão.

A futura navegação poderá utilizar novos labels, mas os anchors existentes não devem ser removidos agora.

## Formação

* nome do curso;
* descrição;
* público;
* URL da Udemy;
* cupom;
* estado beta;
* CTA;
* informações temporárias.

## HORA.city

* nome do caso;
* identificação;
* anomalia;
* payload;
* números apresentados;
* status;
* links relacionados;
* terminologia técnica.

## Métodos

* Payload Journey;
* USMT;
* Reverse Payload Journey;
* Operational Payload Path;
* Track to Origin.

## Procedimento investigativo

* Congelar;
* Mapear;
* Detectar;
* Restaurar.

## Prática investigativa

* Track Mode;
* Trace Engineer;
* Software System Investigation;
* evidências;
* autoridade;
* restauração.

## Ecossistema

* formação;
* pesquisa metodológica;
* investigação aplicada;
* colaboração.

## LabLog

* descrição;
* URL oficial;
* CTA;
* handles encontrados.

## Redes e links externos

* YouTube;
* Udemy;
* LinkedIn;
* site;
* contato;
* e-mail;
* demais destinos.

## Footer

* nome;
* links;
* redes;
* informações institucionais;
* copyright;
* informações legais.

---

# Etapa 5 — Criar uma camada central de conteúdo

Crie uma estrutura central de conteúdo coerente com as convenções existentes no projeto.

Não presuma que o projeto utiliza uma pasta `src`.

Escolha o local mais apropriado após analisar a arquitetura existente.

Exemplos aceitáveis:

```text
content/
data/
config/
lib/content/
app/content/
```

A estrutura poderá ser dividida em arquivos como:

```text
homepage-content.ts
site-navigation.ts
site-links.ts
site-identity.ts
training-content.ts
hora-city-case.ts
methods-content.ts
investigation-cycle.ts
lab-content.ts
```

Evite criar fragmentação excessiva.

Prefira poucos arquivos semanticamente claros.

---

# Requisitos da camada de conteúdo

## Tipagem

Sempre que o projeto utilizar TypeScript, defina tipos explícitos.

Exemplo conceitual:

```ts
type LearningMethod = {
  id: string;
  title: string;
  summary: string;
  purpose: string;
  currentSection: string;
  futureSection: string;
};
```

Não use `any` para simplificar a implementação.

## Identificadores estáveis

Defina IDs estáveis para conceitos importantes:

```text
payload-journey
usmt
reverse-payload-journey
operational-payload-path
track-to-origin
freeze
map
detect
restore
track-mode
trace-engineer
hora-city
lablog
```

Esses IDs deverão ser independentes do texto exibido.

## Preservação textual

Nesta sprint:

* preserve os textos atuais;
* não reescreva a proposta;
* não resuma conteúdos sem necessidade;
* não traduza termos;
* não modifique capitalização editorial deliberada;
* não substitua vocabulário técnico.

Caso existam versões duplicadas do mesmo conteúdo, selecione uma como canônica e preserve as outras na matriz de migração ou em documentação.

---

# Etapa 6 — Centralizar links externos

Crie uma fonte única para os links externos.

Exemplo conceitual:

```ts
export const siteLinks = {
  website: "...",
  udemy: {
    course: "...",
    coupon: "...",
  },
  youtube: {
    primary: "...",
    legacy: "...",
  },
  linkedin: "...",
};
```

Adapte a estrutura ao código real.

## Dois handles de YouTube

A auditoria identificou dois destinos diferentes de YouTube.

Nesta sprint:

* não escolha arbitrariamente um como oficial;
* preserve ambos;
* identifique onde cada um é utilizado;
* defina um campo provisório claramente nomeado;
* registre a pendência em documentação;
* evite continuar espalhando os dois links pelo código.

Crie um registro como:

```text
canonicalYouTubeUrl: unresolved
```

ou uma solução tipada equivalente que não quebre a aplicação.

A homepage atual deve continuar apontando para os destinos que já utiliza.

Não altere o comportamento externo ainda.

---

# Etapa 7 — Isolar dados temporários

Dados temporários não devem permanecer misturados a conteúdo institucional permanente.

Isole:

* cupom Udemy;
* estado beta;
* mensagens promocionais;
* datas de campanha;
* textos de primeiro círculo;
* URLs temporárias;
* chamadas de campanha.

Utilize uma estrutura configurável.

Exemplo conceitual:

```ts
export const campaignConfig = {
  udemyCoupon: {
    code: "...",
    url: "...",
    active: true,
  },
};
```

Não invente datas de validade.

Caso não exista validade confirmada, registre:

```text
expiration: null
```

Não remova o cupom atual nem altere seu comportamento na homepage.

---

# Etapa 8 — Centralizar o caso HORA.city

A auditoria identificou repetição relevante no Study Case.

Crie uma fonte canônica para:

* título;
* ID do caso;
* codebase;
* crescimento apresentado;
* anomalia;
* comportamento observado;
* payload;
* método aplicado;
* missão;
* autoridade investigada;
* status;
* links;
* CTAs.

Exemplo conceitual:

```ts
export const horaCityCase = {
  id: "RPJ-HORA-001",
  project: "HORA.city",
  payload: "HeartCreated",
  anomaly: "...",
  status: "...",
};
```

Utilize somente dados já existentes no código ou na documentação.

Não invente fatos nem atualize o estado da investigação.

Substitua duplicações hardcoded pela fonte central quando isso puder ser feito sem alterar visualmente a página.

---

# Etapa 9 — Centralizar métodos e procedimento

Crie uma fonte canônica para os cinco métodos:

1. Payload Journey
2. USMT
3. Reverse Payload Journey
4. Operational Payload Path
5. Track to Origin

Cada método deverá conter, conforme disponível:

* ID;
* título;
* descrição atual;
* função;
* CTA;
* destino atual;
* futuro destino;
* ordem atual;
* ordem futura.

Crie também uma fonte para:

1. Congelar
2. Mapear
3. Detectar
4. Restaurar

Preserve a semântica atual.

Não reescreva Detectar nesta sprint. Apenas centralize o conteúdo existente e registre futuras necessidades editoriais na matriz.

---

# Etapa 10 — Preservar conteúdo não renderizado

A auditoria identificou componentes e conteúdos futuros ainda não renderizados.

Localize-os e registre:

* caminho;
* tipo;
* propósito provável;
* conteúdo;
* dependências;
* risco de perda;
* possível destino futuro.

Não remova esses arquivos.

Não os renderize ainda.

Não os trate automaticamente como código morto.

Crie no documento de migração uma categoria:

```text
Conteúdo reservado para páginas ou seções futuras
```

---

# Etapa 11 — Refatorar o consumo de conteúdo

Depois de criar a camada central, atualize os componentes atuais para consumir os novos dados quando isso for seguro.

Prioridades:

1. links externos;
2. dados do HORA.city;
3. métodos;
4. ciclo investigativo;
5. identidade;
6. CTAs;
7. LabLog;
8. footer.

## Regra de equivalência

Após a refatoração:

* a ordem da homepage deve continuar igual;
* os textos exibidos devem continuar equivalentes;
* os links devem continuar equivalentes;
* os CTAs devem continuar equivalentes;
* o comportamento responsivo deve continuar equivalente;
* as classes visuais devem permanecer;
* nenhuma seção deve ser movida;
* nenhuma seção deve ser removida.

---

# Etapa 12 — Preservar anchors

Todos os anchors internos atualmente válidos devem continuar funcionando.

Crie uma fonte central para os IDs das seções, caso isso seja coerente com o projeto.

Exemplo:

```ts
export const homepageAnchors = {
  lab: "o-lab",
  methods: "metodos",
  caseStudy: "study-case",
  training: "formacao",
};
```

Utilize os IDs reais encontrados.

Não altere os IDs existentes nesta sprint.

Se algum anchor futuro precisar de outro nome, registre a proposta sem implementá-la.

---

# Etapa 13 — Smoke validation

O projeto não possui testes automatizados.

Crie uma validação mínima e proporcional para detectar regressões estruturais.

Prioridades:

* homepage continua renderizando;
* anchors principais continuam presentes;
* links de navegação continuam apontando para anchors existentes;
* menu mobile continua utilizável;
* conteúdo essencial permanece disponível;
* nenhuma fonte canônica necessária está ausente.

## Restrição

Não instale um framework grande de testes apenas para esta sprint.

Utilize, nesta ordem:

1. ferramentas já existentes no projeto;
2. Node.js e APIs nativas;
3. scripts leves;
4. validação manual documentada.

Caso não seja viável automatizar sem adicionar dependências desnecessárias, documente a validação manual.

Se criar um script, utilize um nome claro, por exemplo:

```text
npm run verify:homepage
```

Não altere o comportamento da aplicação para facilitar o teste.

---

# Etapa 14 — Documentar decisões e pendências

Crie:

```text
docs/homepage-refactor/07-content-architecture.md
```

O documento deverá conter:

## 1. Arquitetura criada

* arquivos;
* responsabilidade de cada arquivo;
* tipos;
* dependências.

## 2. Fontes canônicas

Liste a fonte oficial para:

* identidade;
* navegação;
* formação;
* HORA.city;
* métodos;
* procedimento;
* LabLog;
* redes;
* footer.

## 3. Decisões tomadas

Inclua:

* estrutura escolhida;
* nível de granularidade;
* critérios de tipagem;
* estratégia de preservação;
* estratégia de anchors.

## 4. Pendências editoriais

Inclua:

* YouTube oficial não confirmado;
* política do cupom não confirmada;
* textos duplicados que precisarão de reconciliação;
* conteúdo futuro não renderizado;
* qualquer informação ambígua.

## 5. Riscos remanescentes

Inclua riscos que deverão ser tratados nas próximas sprints.

---

# Etapa 15 — Atualizar a documentação da sprint

Crie:

```text
docs/homepage-refactor/08-sprint-1-report.md
```

Utilize o seguinte formato:

# Sprint 1 — Relatório

## Objetivo

## Estado inicial

## Arquivos criados

## Arquivos modificados

## Conteúdos centralizados

## Duplicações removidas do código

## Conteúdos preservados

## Anchors preservados

## Pendências editoriais

## Validações executadas

## Problemas encontrados

## Riscos remanescentes

## Recomendação para a Sprint 2

---

# Validações obrigatórias

Ao concluir, execute:

```text
npm run lint
npm exec tsc -- --noEmit
npm run build
```

Execute também:

* testes existentes, caso tenham surgido;
* script de verificação da homepage, se criado;
* execução local;
* inspeção do console;
* verificação dos anchors;
* verificação do menu mobile;
* verificação dos links principais;
* verificação visual nas larguras de baseline.

Larguras mínimas:

* 360 px;
* 390 px;
* 768 px;
* 1024 px;
* 1280 px;
* 1440 px.

Compare a página com os screenshots da Sprint 0.

A expectativa é não haver mudanças visuais intencionais.

---

# Critérios de aceite

A Sprint 1 estará concluída somente quando:

* todos os documentos da Sprint 0 tiverem sido lidos;
* a matriz de migração estiver completa;
* cada conteúdo relevante possuir um destino futuro;
* identidade, links e CTAs possuírem fontes canônicas;
* dados do HORA.city estiverem centralizados;
* os cinco métodos estiverem centralizados;
* os quatro verbos estiverem centralizados;
* dados de formação estiverem centralizados;
* cupom e mensagens temporárias estiverem isolados;
* os dois destinos de YouTube estiverem preservados e documentados;
* anchors atuais continuarem válidos;
* conteúdos não renderizados estiverem identificados e preservados;
* componentes atuais consumirem conteúdo central quando seguro;
* a homepage continuar visualmente equivalente;
* menu mobile continuar funcional;
* nenhum conteúdo relevante tiver sido perdido;
* lint passar;
* typecheck passar;
* build passar;
* working tree final estiver documentada;
* nenhuma publicação ou deploy tiver sido realizado.

---

# Fora do escopo

Não realizar nesta sprint:

* nova ordem das seções;
* novo Hero;
* nova navegação;
* nova trilha;
* novo flow visual;
* demonstração do payload;
* nova redação;
* alteração de CTAs;
* alteração de anchors;
* redesign;
* animações;
* otimização do logo;
* correção das vulnerabilidades do npm;
* atualização de dependências;
* refatoração do Google Analytics;
* criação de páginas internas;
* integração com YouTube;
* integração com Udemy;
* deploy;
* publicação;
* alteração da versão do pacote.

Esses itens deverão permanecer para sprints futuras ou tarefas técnicas separadas.

---

# Restrições de segurança

* Não expor tokens, credenciais ou variáveis de ambiente.
* Não registrar valores secretos na documentação.
* Não apagar arquivos não relacionados.
* Não sobrescrever alterações externas.
* Não realizar ações destrutivas no Git.
* Não alterar serviços externos.
* Não criar tags.
* Não trocar de branch.
* Não realizar commit ou push sem instrução explícita.
* Não fazer deploy.
* Não afirmar que algo foi validado quando não foi possível validar.

Quando uma validação não for possível, documente:

1. o que não foi validado;
2. por que não foi validado;
3. como deverá ser validado posteriormente.

---

# Relatório final no chat

Ao concluir a execução, responda com:

## 1. Resumo

Estado final da Sprint 1.

## 2. Arquivos criados

Lista completa.

## 3. Arquivos modificados

Lista completa e finalidade.

## 4. Conteúdo centralizado

Resumo por domínio.

## 5. Matriz de migração

Número de itens mapeados e principais destinos.

## 6. Duplicações tratadas

Indique o que deixou de estar hardcoded ou repetido.

## 7. Pendências

Especialmente:

* YouTube oficial;
* cupom;
* conteúdo futuro;
* divergências editoriais.

## 8. Validações

Apresente uma tabela:

| Comando/verificação | Resultado | Observações |
| ------------------- | --------- | ----------- |

## 9. Equivalência visual

Informe se a homepage permaneceu visualmente equivalente ao baseline.

## 10. Recomendação para a Sprint 2

Indique o que está pronto para a criação da fundação técnica e visual.

---

# Resultado esperado

Ao final desta sprint, o visitante ainda deverá encontrar a mesma homepage.

Internamente, porém, o projeto deverá estar preparado para a refatoração:

* conteúdo organizado;
* fontes canônicas definidas;
* links centralizados;
* dados temporários isolados;
* HORA.city centralizado;
* métodos estruturados;
* anchors protegidos;
* conteúdo futuro preservado;
* matriz de migração pronta.

A Sprint 2 deverá poder iniciar sem precisar descobrir novamente onde estão os conteúdos, quais versões são válidas ou quais elementos devem ser preservados.
