# Sprint 3 — Nova porta de entrada da homepage

## Contexto

Este repositório contém o site oficial do Payload Journey LAB.

As Sprints 0, 1 e 2 foram concluídas.

A Sprint 0 produziu:

* auditoria técnica e semântica;
* inventário completo da homepage;
* baseline visual entre 360 px e 1440 px;
* documentação de riscos e problemas preexistentes.

A Sprint 1 produziu:

* matriz de migração com 69 itens;
* centralização dos conteúdos;
* fontes canônicas para identidade, links, formação, HORA.city, métodos, ciclo investigativo, LabLog e Footer;
* isolamento de campanha e cupom;
* preservação das variantes editoriais;
* smoke test reproduzível.

A Sprint 2 produziu:

* tokens visuais centralizados em `app/globals.css`;
* Tailwind conectado às mesmas custom properties;
* componentes compartilhados consolidados;
* contratos tipados para `Container`, `Section`, `SectionHeader`, `Button`, `Card` e `Badge`;
* responsividade validada;
* bundle preservado;
* fundação acessível;
* nenhuma nova fronteira Client Component.

O projeto encontra-se em:

```text
branch: refactor/homepage-v0.2.0
version: 0.2.0
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
```

Consulte também:

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

Implementar a nova porta de entrada da homepage para que estudantes de Engenharia de Software e developers junior compreendam imediatamente:

* o que o Payload Journey LAB ensina;
* qual problema o conteúdo resolve;
* como começar;
* que competências poderão desenvolver;
* qual é a ação seguinte.

Resultado principal:

**A primeira parte da homepage passa a comunicar Payload Tracing como uma estratégia concreta de entrada em codebases grandes.**

A Sprint 3 deverá implementar:

1. Header simplificado.
2. Novo Hero.
3. Seção da dor e estratégia de entrada.
4. Seção de competências ensinadas.
5. Nova progressão inicial da homepage.
6. Resolução dos problemas de contraste diretamente afetados pela nova composição.

Esta é a primeira sprint em que mudanças visuais e editoriais intencionais serão realizadas.

---

# Princípio central

## Começar pelo que a pessoa aprenderá

A homepage atual apresenta a profundidade institucional e metodológica do LAB antes de apresentar uma entrada simples.

A nova primeira experiência deverá seguir esta ordem:

```text
O que posso aprender?
↓
Que problema isso resolve?
↓
Como essa abordagem funciona?
↓
O que serei capaz de fazer?
↓
Onde começo?
```

A primeira tela não deve exigir que o visitante já compreenda:

* Software System Investigation;
* USMT;
* Reverse Payload Journey;
* Operational Payload Path;
* Track to Origin;
* Trace Engineer;
* Track Mode;
* autoridade semântica;
* o protocolo documental;
* o ciclo investigativo completo.

Esses conceitos permanecem no site, mas são apresentados progressivamente em seções posteriores e nas próximas sprints.

---

# Escopo da Sprint 3

## Dentro do escopo

* atualizar o Header;
* simplificar a navegação inicial;
* redesenhar o Hero;
* reescrever a mensagem inicial;
* criar a seção da dor;
* criar a seção de competências;
* atualizar a composição de `app/page.tsx`;
* criar conteúdo centralizado para as novas seções;
* preservar conteúdos removidos do Hero em seus destinos atuais ou futuros;
* melhorar contraste nas novas composições;
* atualizar smoke tests;
* validar responsividade, acessibilidade e performance;
* documentar as mudanças.

## Fora do escopo

Não implementar nesta sprint:

* trilha de quatro etapas;
* demonstração visual do payload;
* Payload Journey interativo;
* nova organização da formação;
* nova organização do HORA.city;
* reposicionamento completo dos métodos;
* nova seção do ciclo Congelar, Mapear, Detectar e Restaurar;
* nova seção de Trace Engineer;
* nova seção institucional do LAB;
* nova seção do LabLog;
* novo Footer;
* páginas internas;
* integração com vídeos;
* resolução dos dois handles do YouTube;
* decisão editorial sobre as variantes HORA.city;
* validade do cupom;
* atualização de dependências;
* correção das vulnerabilidades do npm;
* refatoração do Google Analytics;
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

3. Confirmar que a working tree não contém alterações tracked não relacionadas.

4. Confirmar que:

```text
docs/sprints para v2/
```

continua untracked e intacto.

5. Confirmar que os arquivos das Sprints 0, 1 e 2 estão presentes.

6. Executar:

```bash
npm run lint
npm exec tsc -- --noEmit
npm run build
npm run verify:homepage
npm run verify:foundation
```

7. Registrar o baseline atual:

```text
rota /: 6,46 kB
First Load JS: 93,7 kB
Shared JS: 87,2 kB
Client Components: 1
```

8. Registrar separadamente os warnings preexistentes de cache Webpack.

Não iniciar a implementação caso exista uma regressão não compreendida.

Não realizar pull, merge, rebase, commit, push, tag, deploy ou troca de branch.

---

# Etapa 2 — Atualizar a arquitetura inicial da homepage

A nova ordem inicial deverá ser:

```text
Header
Hero
Dor e estratégia de entrada
Competências ensinadas
Restante da homepage existente
```

As seções restantes deverão manter, nesta sprint, sua ordem relativa atual.

Não reorganizar ainda:

* formação;
* caso real;
* métodos;
* USMT;
* ecossistema;
* LabLog;
* Sobre;
* Footer.

A Sprint 3 altera apenas a porta de entrada.

---

# Etapa 3 — Atualizar a camada de conteúdo

Adicionar as novas mensagens à camada central existente.

Não hardcode os novos textos diretamente nos componentes.

Utilize os arquivos de conteúdo já criados na Sprint 1, adaptando sua organização sem fragmentação desnecessária.

Criar ou atualizar uma estrutura conceitualmente equivalente a:

```ts
homepageEntry: {
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    description: string;
    primaryCta: {...};
    secondaryCta: {...};
    signature: string;
  };
  problem: {
    eyebrow: string;
    title: string;
    description: string;
    steps: [...];
    result: string;
    comparison: {...};
  };
  learningOutcomes: {
    eyebrow: string;
    title: string;
    description: string;
    items: [...];
  };
}
```

Definir tipos explícitos.

Não utilizar `any`.

Usar IDs estáveis para cada competência e etapa.

---

# Etapa 4 — Implementar o novo Header

## Objetivo

Reduzir a carga cognitiva e orientar o visitante para as rotas principais.

## Navegação da Sprint 3

A navegação não deve apontar para seções ainda inexistentes.

Utilizar apenas destinos válidos no estado atual da página.

Estrutura recomendada:

```text
Aprender
Formação
Caso real
Métodos
O LAB
```

CTA destacado:

```text
Começar
```

### Destinos

* Aprender → nova seção da dor ou competências.
* Formação → anchor atual da formação.
* Caso real → anchor atual do HORA.city.
* Métodos → anchor atual dos métodos.
* O LAB → anchor institucional atual.
* Começar → nova seção `#aprender` ou formação, conforme a arquitetura mais coerente encontrada.

Não adicionar ainda:

* Trilha;
* Demo.

Esses itens entrarão na Sprint 4 quando os destinos realmente existirem.

## Requisitos do Header

* utilizar conteúdo centralizado;
* preservar logo e identidade;
* reduzir o número de links;
* manter comportamento sticky, caso já exista;
* manter menu mobile;
* manter navegação por teclado;
* preservar `aria-expanded` e `aria-controls`;
* garantir foco visível;
* não criar nova fronteira Client Component;
* `MobileNavigation` deve continuar sendo a única fronteira client, salvo necessidade técnica comprovada;
* impedir scroll quando o menu mobile estiver aberto apenas se o comportamento atual já fizer isso ou se puder ser implementado sem regressão;
* não introduzir dropdowns.

## Compatibilidade

Os anchors antigos não devem ser removidos nesta sprint.

Mesmo que deixem de aparecer no Header, devem continuar disponíveis para links externos ou internos existentes.

---

# Etapa 5 — Implementar o novo Hero

## Objetivo

Explicar em poucos segundos:

* o que se aprende;
* qual problema é resolvido;
* para quem é;
* qual resultado é possível;
* qual ação realizar.

## Conteúdo obrigatório

### Eyebrow

```text
Payload Tracing para estudantes e developers
```

### H1

```text
Aprenda a seguir o payload
```

### Mensagem principal

```text
Reduza uma codebase grande a um único flow investigável.
```

### Descrição

```text
Aprenda a acompanhar como a informação nasce, atravessa camadas, muda de representação e chega aos pontos onde o sistema toma decisões.
```

### Assinatura

```text
Siga o flow. Entenda o sistema.
```

## CTAs da Sprint 3

Como a demonstração visual será criada apenas na Sprint 4, não criar um CTA para um destino inexistente.

Utilizar:

### CTA principal

```text
Começar a aprender
```

Destino:

```text
#aprender
```

### CTA secundário

```text
Conhecer a formação
```

Destino:

anchor atual da formação.

Na Sprint 4, o CTA principal poderá ser revisto para apontar à demonstração.

## Composição visual

A composição deverá:

* usar a fundação da Sprint 2;
* reduzir ruído visual;
* evitar múltiplos blocos técnicos concorrentes;
* manter a identidade terminal como apoio, não como conteúdo dominante;
* priorizar H1, mensagem e CTA;
* utilizar espaço em branco;
* manter contraste forte;
* funcionar sem animação;
* não exigir interação para compreensão;
* ser legível em 360 px;
* evitar linhas excessivamente longas em desktop.

## Conteúdo removido do Hero atual

Retirar do primeiro Hero:

* apresentação institucional extensa;
* formação, pesquisa e investigação aplicada;
* os quatro verbos;
* Track Mode;
* Trace Engineer;
* sequência técnica completa;
* lista de métodos;
* explicação aprofundada do ecossistema.

## Preservação

Nenhum conteúdo conceitual removido do Hero pode ser apagado da camada de conteúdo.

Para cada item removido:

* confirmar se já está representado em uma seção posterior;
* marcar seu destino na matriz de migração;
* preservar a versão histórica quando necessário;
* não duplicá-lo novamente na nova entrada.

Caso exista conteúdo exclusivo do Hero sem destino atual, registrá-lo como conteúdo reservado para uma seção posterior.

Não criar conteúdo invisível apenas para fingir preservação.

---

# Etapa 6 — Criar a seção da dor

## ID

```text
aprender
```

O ID deverá ser centralizado na fonte de anchors.

## Objetivo

Fazer estudantes e developers junior reconhecerem o problema de entrar numa codebase grande sem estratégia.

## Eyebrow

```text
Estratégia de entrada
```

## Título

```text
Não abra arquivos aleatoriamente
```

## Texto principal

```text
Uma codebase grande não precisa ser compreendida inteira de uma vez.

Quando não existe uma estratégia de entrada, cada arquivo parece importante. O payload oferece um ponto concreto para começar.
```

## Progressão

Apresentar quatro passos:

### 01

```text
Escolha um flow
```

Descrição:

```text
Comece por uma interação concreta que possa ser observada.
```

### 02

```text
Encontre o payload
```

Descrição:

```text
Identifique a informação produzida ou transportada por essa interação.
```

### 03

```text
Siga as transformações
```

Descrição:

```text
Observe como a informação muda de forma e significado entre as camadas.
```

### 04

```text
Localize a decisão
```

Descrição:

```text
Descubra onde o sistema interpreta, valida ou altera o comportamento.
```

## Resultado destacado

```text
Transforme milhares de arquivos numa rota investigável.
```

## Comparação

Apresentar duas abordagens:

### Sem tracing

* abrir arquivos aleatoriamente;
* procurar pelo sistema inteiro;
* formular hipóteses vagas;
* modificar antes de compreender.

### Com tracing

* selecionar um flow;
* seguir um payload;
* produzir checkpoints;
* observar antes de modificar.

## Implementação visual

Pode utilizar:

* cards numerados;
* progressão linear;
* comparação em dois painéis;
* composição vertical no mobile.

Não criar uma tabela HTML se ela comprometer a experiência mobile.

Não utilizar ícones desnecessários.

Cada passo deve ser compreensível sem hover.

---

# Etapa 7 — Criar a seção de competências ensinadas

## ID

```text
competencias
```

## Objetivo

Transformar conceitos abstratos em capacidades profissionais concretas.

## Eyebrow

```text
O que você aprenderá
```

## Título

```text
Uma estratégia para compreender sistemas pelo flow
```

## Descrição

```text
O Payload Journey LAB desenvolve a capacidade de seguir a informação através do sistema, reconhecer transformações e localizar os pontos onde decisões realmente acontecem.
```

## Competências obrigatórias

### 01 — Identificar o payload

```text
Reconhecer a informação produzida por uma interação, evento ou operação.
```

### 02 — Reconhecer representações

```text
Observar as diferentes formas assumidas pela mesma semântica ao atravessar as camadas.
```

### 03 — Seguir o flow

```text
Reconstruir o caminho operacional entre interface, aplicação, domínio, persistência e resposta.
```

### 04 — Distinguir responsabilidades

```text
Identificar quem transporta, quem transforma e quem decide.
```

### 05 — Posicionar checkpoints

```text
Escolher pontos de observação capazes de produzir evidências úteis.
```

### 06 — Documentar o caminho

```text
Registrar componentes, representações, operações e fronteiras do flow.
```

### 07 — Reconstruir anomalias

```text
Partir de um comportamento observável e rastrear onde surgiu a divergência.
```

### 08 — Rastrear a origem

```text
Encontrar a primeira decisão técnica, temporal ou semântica relevante.
```

## Requisitos visuais

* usar cards simples;
* número visível;
* título curto;
* descrição concisa;
* sem excesso de sombras;
* sem animações narrativas;
* grid responsivo;
* uma coluna em mobile;
* duas colunas quando houver espaço;
* quatro colunas apenas se a largura de leitura continuar adequada;
* todos os cards com altura natural;
* não forçar alturas iguais quando isso gerar espaços artificiais.

---

# Etapa 8 — Resolver contraste nas novas composições

A Sprint 2 registrou duas limitações preexistentes:

```text
branco sobre rosa: 3,11:1
verde técnico sobre papel: 2,70:1
```

Na Sprint 3, corrigir essas combinações quando forem utilizadas nas novas áreas.

## CTA rosa

Não utilizar branco sobre o rosa atual quando o contraste permanecer insuficiente.

Soluções aceitáveis:

* fundo rosa mais escuro;
* texto escuro sobre rosa claro;
* variante visual diferente usando tokens existentes ou novos tokens semânticos;
* borda rosa com fundo claro e texto escuro.

A solução deverá preservar a identidade do LAB.

## Verde técnico

Não utilizar o verde técnico atual como texto pequeno sobre fundo claro.

Soluções aceitáveis:

* verde mais escuro para texto;
* verde atual apenas como elemento decorativo, borda ou fundo;
* texto principal escuro acompanhado de acento verde;
* variante de token `terminal-text` com contraste suficiente.

Não alterar SVGs ou elementos gráficos isolados sem necessidade.

## Meta mínima

Texto normal deverá atingir contraste adequado segundo WCAG AA.

Texto grande pode utilizar os critérios específicos aplicáveis, desde que documentado.

---

# Etapa 9 — Usar a fundação da Sprint 2

As novas seções devem consumir:

* `Container`;
* `Section`;
* `SectionHeader`;
* `Button`;
* `Card`;
* `Badge`, quando necessário;
* tokens de cor;
* gutters;
* espaçamento de seção;
* tipografia;
* sombras;
* raios;
* movimento reduzido.

Não criar versões paralelas desses componentes.

Não introduzir:

* novos sistemas de botão;
* novos containers;
* novos tokens duplicados;
* valores hexadecimais locais sem justificativa;
* valores mágicos repetidos;
* bibliotecas de animação;
* dependências externas.

## Novos componentes permitidos

Criar apenas componentes diretamente utilizados nesta sprint, por exemplo:

```text
ProblemStepCard
LearningOutcomeCard
EntryComparison
```

Antes de criar um componente específico, confirmar que:

* melhora a legibilidade;
* reduz repetição;
* possui responsabilidade clara;
* não duplica `Card`;
* não precisa ser Client Component.

É aceitável compor diretamente `Card` nos componentes de seção se uma nova abstração não trouxer benefício real.

---

# Etapa 10 — Atualizar `app/page.tsx`

A composição da página deverá refletir:

```tsx
<SiteHeader />
<HeroSection />
<ProblemSection />
<LearningOutcomesSection />
{/* seções existentes na ordem relativa atual */}
<SiteFooter />
```

Os nomes devem respeitar as convenções do repositório.

Não mover as demais seções nesta sprint.

Não criar placeholders para Trilha ou Demo.

Não incluir seções vazias.

---

# Etapa 11 — Atualizar anchors e navegação

Adicionar os novos anchors à fonte canônica:

```text
aprender
competencias
```

Preservar todos os anchors anteriores.

Verificar:

* nenhum link interno aponta para destino inexistente;
* nenhum ID está duplicado;
* links antigos continuam funcionando;
* o Header mobile e desktop usam a mesma fonte;
* o CTA do Hero aponta corretamente;
* o CTA secundário aponta à formação;
* navegação por teclado desloca corretamente o foco ou a viewport;
* o header sticky não cobre completamente o heading de destino.

Caso necessário, utilizar `scroll-margin-top` nas seções com anchor.

Não implementar scroll suave global se não existir atualmente ou se prejudicar `prefers-reduced-motion`.

---

# Etapa 12 — Acessibilidade

Validar:

* exatamente um `h1`;
* Hero utiliza `h1`;
* novas seções utilizam `h2`;
* cards usam `h3` quando apropriado;
* ordem semântica coerente;
* links e botões corretos;
* foco visível;
* contraste;
* áreas de toque;
* menu por teclado;
* sem dependência exclusiva de hover;
* reduced motion;
* landmarks semânticos;
* conteúdo compreensível sem CSS;
* nenhum texto importante renderizado apenas em pseudo-elementos;
* nenhuma informação transmitida apenas por cor.

Não adicionar ARIA redundante.

---

# Etapa 13 — Responsividade

Implementar mobile-first.

Validar:

```text
360×800
390×844
768×1024
1024×768
1280×800
1440×900
```

## Hero

No mobile:

* H1 legível;
* CTAs empilhados ou adaptados;
* nenhuma quebra artificial de palavras;
* nenhum terminal decorativo dominando a primeira tela;
* conteúdo principal visível sem rolagem excessiva;
* sem overflow.

No desktop:

* largura de leitura controlada;
* composição equilibrada;
* CTA principal claramente identificável;
* espaço em branco suficiente;
* Hero não excessivamente alto.

## Dor

* quatro passos em coluna no mobile;
* possível grid em desktop;
* ordem sempre preservada;
* comparação em coluna no mobile.

## Competências

* uma coluna em 360 e 390 px;
* duas colunas em larguras intermediárias;
* mais colunas apenas quando apropriado;
* textos sem cortes;
* cards sem largura mínima causadora de overflow.

---

# Etapa 14 — Performance

Comparar com o baseline:

```text
rota /: 6,46 kB
First Load JS: 93,7 kB
Shared JS: 87,2 kB
Client Components: 1
```

A Sprint 3 poderá aumentar o HTML e o CSS da página por adicionar novas seções.

O aumento deverá ser proporcional e documentado.

Não aceitar:

* nova dependência de runtime;
* nova biblioteca de ícones;
* nova biblioteca de animação;
* novos Client Components sem necessidade;
* JavaScript para layout;
* imagens pesadas sem otimização;
* vídeo incorporado nesta sprint.

A quantidade de Client Components deve permanecer em 1, salvo necessidade indispensável e explicitamente justificada.

---

# Etapa 15 — Atualizar smoke tests

Atualizar:

```text
scripts/verify-homepage.mjs
```

ou criar uma validação leve específica, caso necessário.

Verificar no mínimo:

* homepage responde HTTP 200;
* existe exatamente um `h1`;
* H1 contém a nova mensagem;
* `#aprender` existe;
* `#competencias` existe;
* Header aponta apenas para IDs válidos;
* CTA principal aponta para `#aprender`;
* CTA secundário aponta para formação;
* competências essenciais aparecem no HTML;
* anchors antigos continuam presentes;
* conteúdo essencial das seções posteriores permanece;
* links Udemy e YouTube continuam preservados;
* nenhum domínio canônico necessário desapareceu.

Não criar snapshots rígidos de classes CSS.

Adicionar script novo ao `package.json` somente se realmente necessário.

---

# Etapa 16 — Comparação visual

A Sprint 3 altera intencionalmente a primeira parte da página.

Portanto, não buscar equivalência byte a byte com o baseline nas áreas modificadas.

A validação deverá separar:

## Diferenças esperadas

* novo Header;
* novo Hero;
* nova seção da dor;
* nova seção de competências;
* alteração da altura total da página;
* novas cores de contraste;
* novos espaçamentos iniciais.

## Áreas que devem permanecer equivalentes

A partir da primeira seção antiga não incluída na Sprint 3:

* conteúdo;
* ordem;
* textos;
* links;
* anchors;
* estilos;
* responsividade;
* comportamento.

Capturar screenshots temporários nas seis larguras.

Criar comparações:

* primeira dobra;
* nova área inicial completa;
* transição para o conteúdo antigo;
* página completa;
* menu desktop;
* menu mobile.

Não sobrescrever:

```text
docs/homepage-refactor/baseline/
```

---

# Etapa 17 — Atualizar a matriz de migração

Atualizar:

```text
docs/homepage-refactor/06-content-migration-matrix.md
```

Registrar:

* itens migrados para o novo Hero;
* itens retirados do Hero antigo;
* destino dos conteúdos institucionais removidos;
* novos conteúdos da seção da dor;
* competências introduzidas;
* anchors novos;
* itens que permanecem reservados;
* status da futura Trilha;
* status da futura Demo.

Não declarar como concluídos itens pertencentes às Sprints 4 a 8.

---

# Etapa 18 — Documentação

Criar:

```text
docs/homepage-refactor/11-entry-experience.md
docs/homepage-refactor/12-sprint-3-report.md
```

## `11-entry-experience.md`

Deve conter:

### 1. Objetivo da nova entrada

Explicar a mudança de:

```text
instituição e metodologia primeiro
```

para:

```text
habilidade e estratégia de entrada primeiro
```

### 2. Público prioritário

* estudantes de Engenharia de Software;
* developers junior;
* developers entrando em codebases desconhecidas;
* pessoas trabalhando com sistemas expandidos por IA.

### 3. Arquitetura inicial

* Header;
* Hero;
* dor;
* competências.

### 4. Conteúdo

Registrar a copy implementada.

### 5. Hierarquia

Documentar:

* H1;
* H2;
* CTAs;
* anchors;
* ordem de leitura.

### 6. Contraste

Registrar:

* tokens utilizados;
* combinações corrigidas;
* resultados.

### 7. Responsividade

Documentar decisões por largura.

### 8. Preparação para a Sprint 4

Explicar como:

* Trilha;
* Demonstração;
* CTA do Hero;

deverão ser integrados posteriormente.

---

## `12-sprint-3-report.md`

Utilizar:

```text
# Sprint 3 — Relatório

## Objetivo

## Estado inicial

## Arquivos criados

## Arquivos modificados

## Nova navegação

## Novo Hero

## Seção da dor

## Competências ensinadas

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

## Recomendação para a Sprint 4
```

---

# Etapa 19 — Validação final

Executar:

```bash
npm run lint
npm exec tsc -- --noEmit
npm run build
npm run verify:homepage
npm run verify:foundation
npm run dev
```

Validar também:

* HTTP 200;
* console;
* hydration;
* exatamente um H1;
* menu desktop;
* menu mobile;
* teclado;
* foco;
* anchors;
* CTAs;
* links;
* contraste;
* overflow;
* responsividade;
* bundle;
* Client Components;
* conteúdo posterior preservado;
* working tree;
* `git diff --check`.

Registrar warnings preexistentes separadamente.

---

# Critérios de aceite

A Sprint 3 estará concluída somente quando:

* a documentação anterior tiver sido lida;
* Header simplificado estiver implementado;
* navegação apontar apenas para destinos existentes;
* novo Hero estiver implementado;
* H1 for `Aprenda a seguir o payload`;
* mensagem de redução da codebase a um flow estiver visível;
* público prioritário estiver claro;
* CTA principal apontar para `#aprender`;
* CTA secundário apontar para formação;
* seção da dor estiver implementada;
* quatro passos estiverem presentes;
* comparação sem tracing/com tracing estiver presente;
* resultado destacado estiver presente;
* seção de competências estiver implementada;
* oito competências estiverem presentes;
* novo conteúdo estiver centralizado;
* nenhum conteúdo relevante do Hero anterior tiver sido apagado sem destino;
* anchors antigos permanecerem válidos;
* `#aprender` e `#competencias` estiverem válidos;
* exactly um H1 permanecer;
* contraste das novas composições cumprir o requisito definido;
* menu mobile funcionar por teclado;
* não existir overflow nas seis larguras;
* seções posteriores permanecerem semanticamente e visualmente preservadas;
* nenhuma nova dependência tiver sido adicionada;
* nenhuma nova fronteira Client Component tiver sido criada sem justificativa;
* lint passar;
* typecheck passar;
* build passar;
* smoke tests passarem;
* performance permanecer proporcional;
* documentação estiver completa;
* `docs/sprints para v2/` permanecer intacto e untracked;
* nenhum commit, push, tag, deploy ou troca de branch tiver sido realizado.

---

# Restrições finais

* Não implementar a Sprint 4.
* Não criar Trilha.
* Não criar Demo.
* Não adicionar CTA para destino inexistente.
* Não reorganizar formação ou HORA.city.
* Não resolver as variantes editoriais do HORA.city.
* Não escolher o YouTube oficial.
* Não inventar validade para o cupom.
* Não atualizar dependências.
* Não criar animações narrativas.
* Não criar componentes sem consumidor.
* Não alterar a versão.
* Não alterar serviços externos.
* Não expor variáveis de ambiente.
* Não excluir conteúdo reservado.
* Não modificar `docs/sprints para v2/`.
* Não realizar ações destrutivas no Git.
* Não fazer commit, push, tag ou deploy.

Quando uma validação não puder ser realizada, documentar:

1. o que não foi possível validar;
2. a razão;
3. o que seria necessário para validar posteriormente.

---

# Relatório final no chat

Ao concluir, responder com:

## 1. Resumo

Resultado geral da Sprint 3.

## 2. Arquivos criados

Lista completa.

## 3. Arquivos modificados

Lista completa e finalidade.

## 4. Nova navegação

Labels, destinos e comportamento.

## 5. Novo Hero

Copy, CTAs e composição.

## 6. Seção da dor

Estrutura, passos e comparação.

## 7. Competências

Quantidade, organização e responsividade.

## 8. Conteúdo preservado

Explicar o destino do conteúdo retirado do Hero anterior.

## 9. Acessibilidade e contraste

Resultados objetivos.

## 10. Responsividade

Resultado nas seis larguras.

## 11. Performance

Comparação:

| Métrica | Sprint 2 | Sprint 3 |
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

Itens destinados à Sprint 4.

## 15. Recomendação para a Sprint 4

Explicar como integrar:

* Trilha progressiva;
* demonstração resumida;
* flow responsivo;
* novo CTA de demonstração.

---

# Resultado esperado

Ao final desta sprint, o visitante deverá compreender imediatamente:

```text
Aqui eu posso aprender Payload Tracing.
```

Deverá também entender:

```text
Não preciso compreender toda a codebase de uma vez.
Posso escolher um flow, encontrar o payload, seguir suas transformações e localizar onde o sistema decide.
```

A homepage continuará contendo toda a profundidade do Payload Journey LAB, mas a entrada passará a ser orientada por uma habilidade concreta e acessível.

A Sprint 4 deverá poder adicionar a progressão de aprendizagem e a demonstração visual sem precisar refazer o Header, o Hero, a seção da dor ou a fundação visual.
