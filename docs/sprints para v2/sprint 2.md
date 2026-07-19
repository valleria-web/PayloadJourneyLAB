# Sprint 2 — Fundação técnica e sistema visual

## Contexto

Este repositório contém o site oficial do Payload Journey LAB.

As Sprints 0 e 1 foram concluídas.

A Sprint 0 produziu:

* auditoria técnica;
* inventário integral da homepage;
* baseline visual entre 360 px e 1440 px;
* documentação de riscos;
* registro dos problemas preexistentes.

A Sprint 1 produziu:

* matriz de migração com 69 itens;
* camada central de conteúdo;
* fontes canônicas para os principais domínios;
* centralização do caso HORA.city;
* centralização dos cinco métodos;
* centralização das quatro etapas investigativas;
* isolamento de campanha e cupom;
* preservação dos dois handles de YouTube como pendência;
* preservação dos conteúdos futuros;
* smoke test reproduzível;
* equivalência visual integral com o baseline.

O projeto encontra-se atualmente em:

```text
branch: refactor/homepage-v0.2.0
version: 0.2.0
```

Antes de iniciar qualquer edição, leia integralmente:

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
```

Consulte também os screenshots em:

```text
docs/homepage-refactor/baseline/
```

O diretório:

```text
docs/sprints para v2/
```

é externo ao escopo do projeto, permanece untracked e deve ser integralmente preservado.

---

# Objetivo da sprint

Construir a fundação técnica e visual reutilizável necessária para a futura repaginação da homepage.

Resultado esperado:

**Base técnica, componentes compartilhados, tokens visuais, containers, grids e comportamentos responsivos preparados, sem implementar ainda a nova narrativa da homepage.**

Ao final desta sprint:

* a aplicação deverá possuir componentes visuais reutilizáveis;
* os principais tokens deverão estar centralizados;
* os padrões de container, seção, heading, botões, cards e navegação deverão estar definidos;
* a responsividade deverá estar preparada para as próximas sprints;
* componentes atuais poderão consumir gradualmente a nova fundação quando isso não provocar alteração perceptível;
* a homepage deverá permanecer visual e funcionalmente equivalente ao baseline;
* não deverá existir regressão de performance, acessibilidade ou bundle.

---

# Regra central

## Preparar a fundação sem iniciar o redesign

Nesta sprint, não implementar:

* nova ordem das seções;
* novo Hero;
* nova navegação editorial;
* nova seção de dor;
* novas competências;
* trilha progressiva;
* demonstração do flow;
* nova seção de formação;
* nova organização do HORA.city;
* reposicionamento dos métodos;
* novo CTA final;
* nova narrativa institucional;
* reescrita textual;
* alteração dos anchors;
* remoção de seções;
* animações avançadas;
* páginas internas.

A Sprint 2 prepara os instrumentos que serão utilizados na Sprint 3 e nas seguintes.

A homepage deverá continuar percebida como a mesma página ao final desta execução.

---

# Etapa 1 — Preflight

Antes de editar:

1. Confirmar a branch ativa.
2. Confirmar a versão `0.2.0`.
3. Confirmar o estado da working tree.
4. Confirmar que os arquivos da Sprint 1 estão presentes.
5. Confirmar que `docs/sprints para v2/` permanece untracked.
6. Executar:

```bash
npm run lint
npm exec tsc -- --noEmit
npm run build
npm run verify:homepage
```

7. Registrar o tamanho atual da rota `/` e do First Load JS.
8. Registrar warnings preexistentes separadamente.

Não começar a implementação caso exista regressão não compreendida.

Não descartar alterações externas.

Não realizar pull, merge, rebase, commit, push, tag ou deploy.

---

# Etapa 2 — Auditar o sistema visual atual

Mapear no código:

* variáveis CSS;
* Tailwind config, caso exista;
* classes utilitárias;
* estilos globais;
* estilos inline;
* valores repetidos;
* breakpoints;
* larguras máximas;
* paddings;
* margins;
* gaps;
* tamanhos tipográficos;
* line-heights;
* cores;
* bordas;
* sombras;
* raios;
* estados de hover;
* estados de foco;
* backgrounds;
* estilos de cards;
* estilos de botões;
* estilos de headings;
* estilos de labels;
* estilos de seções escuras;
* estilos de seções claras;
* padrões de grid;
* padrões de container.

Produzir um inventário breve dos padrões existentes antes de consolidá-los.

Não substituir valores arbitrariamente.

---

# Etapa 3 — Criar tokens visuais

Criar ou consolidar uma camada central para tokens visuais.

A localização deverá respeitar a arquitetura real do projeto.

Exemplos possíveis:

```text
styles/tokens.css
styles/design-tokens.css
config/design.ts
lib/design-tokens.ts
```

Evitar duplicar tokens em TypeScript e CSS sem necessidade.

## Tokens mínimos

### Cores

Preservar a identidade existente:

* fundo principal claro;
* texto principal;
* texto secundário;
* verde terminal;
* rosa pontual;
* fundos técnicos escuros;
* bordas;
* superfícies;
* estados de foco;
* estados de hover;
* estados desabilitados;
* cores de sucesso, aviso ou erro apenas se já utilizadas.

Não introduzir uma nova paleta.

### Espaçamento

Definir uma escala coerente para:

* espaços internos;
* gaps;
* separação entre seções;
* paddings de container;
* paddings de cards;
* distâncias entre título, texto e conteúdo.

### Tipografia

Definir:

* família principal;
* família técnica ou monoespaçada;
* tamanhos;
* line-height;
* pesos;
* tracking;
* escala responsiva.

Preservar as fontes e fallbacks atuais.

Não instalar novas fontes nesta sprint.

### Layout

Definir:

* largura máxima do conteúdo;
* largura de leitura;
* gutters;
* breakpoints;
* grids;
* stacks;
* largura de cards;
* raio de borda;
* sombras;
* bordas.

### Movimento

Definir tokens básicos para:

* duração;
* easing;
* transições discretas.

Respeitar:

```css
prefers-reduced-motion
```

Não criar animações narrativas nesta sprint.

---

# Etapa 4 — Criar componentes estruturais compartilhados

Criar componentes reutilizáveis de baixo acoplamento.

Os nomes devem respeitar as convenções reais do projeto.

Estrutura conceitual possível:

```text
components/ui/
  Container.tsx
  Section.tsx
  SectionHeader.tsx
  Button.tsx
  Card.tsx
  Badge.tsx
  Stack.tsx
  Grid.tsx
  VisuallyHidden.tsx
```

Não é obrigatório criar todos os componentes se alguns forem artificiais ou desnecessários.

Prefira uma fundação pequena e útil.

---

## 4.1. Container

Responsabilidades:

* largura máxima;
* padding lateral responsivo;
* centralização;
* opção de largura de leitura;
* opção de full width quando necessário.

API conceitual:

```tsx
<Container>
  ...
</Container>
```

Possíveis variantes:

```text
default
wide
reading
full
```

Não criar variantes sem uso previsto.

---

## 4.2. Section

Responsabilidades:

* espaçamento vertical;
* fundo;
* contraste;
* ID;
* atributos semânticos;
* controle de largura via Container.

Possíveis variantes:

```text
light
dark
muted
transparent
```

A variante deve representar função real, não apenas decoração.

---

## 4.3. SectionHeader

Responsabilidades:

* eyebrow opcional;
* título;
* descrição;
* alinhamento;
* largura de leitura;
* associação semântica.

Exemplo conceitual:

```tsx
<SectionHeader
  eyebrow="..."
  title="..."
  description="..."
/>
```

Requisitos:

* não gerar múltiplos `h1`;
* permitir escolher o nível do heading;
* manter hierarquia semântica;
* evitar headings definidos apenas por CSS.

---

## 4.4. Button ou LinkButton

Criar uma solução consistente para CTAs.

Distinguir corretamente:

* navegação por link;
* ação por botão.

Variantes possíveis:

```text
primary
secondary
ghost
text
```

Tamanhos possíveis apenas se realmente necessários.

Requisitos:

* foco visível;
* contraste;
* estados hover, active e disabled;
* suporte a links externos;
* preservação de `target` e `rel`;
* área de toque adequada.

Não transformar links em botões sem necessidade.

---

## 4.5. Card

Criar uma base reutilizável para cards.

A API deverá permitir:

* fundo;
* borda;
* padding;
* heading;
* conteúdo;
* footer opcional.

Evitar um componente excessivamente genérico ou com dezenas de props.

Não migrar todos os cards atuais automaticamente.

---

## 4.6. Badge ou Eyebrow

Criar apenas se existir repetição real.

Utilizar para:

* categorias;
* labels;
* números de etapa;
* mensagens técnicas curtas.

Não utilizar como decoração gratuita.

---

## 4.7. Grid e Stack

Criar apenas se reduzirem repetição real.

Devem facilitar:

* layouts em coluna;
* grids responsivos;
* gaps consistentes;
* alinhamento.

Não criar abstrações que escondam completamente o CSS.

---

# Etapa 5 — Preparar padrões para componentes futuros

Sem renderizar novas seções, preparar interfaces ou componentes base para:

* cards numerados;
* competências;
* etapas da trilha;
* nodes de flow;
* métodos;
* comparação;
* accordion;
* CTA duplo.

Exemplos conceituais:

```text
NumberedCard
LearningOutcomeCard
MethodCard
FlowNode
ComparisonPanel
Accordion
```

Nesta sprint:

* podem ser implementados componentes base;
* podem ser incluídos em Storybook apenas se o projeto já possuir Storybook;
* podem ser demonstrados em testes isolados;
* não devem ser inseridos na homepage se alterarem a experiência atual.

Não instalar Storybook.

---

# Etapa 6 — Acessibilidade da fundação

Garantir que os componentes compartilhados suportem:

* foco visível;
* navegação por teclado;
* headings semânticos;
* links e botões corretos;
* `aria-expanded` quando aplicável;
* `aria-controls` quando aplicável;
* estados disabled;
* contraste suficiente;
* leitores de tela;
* `prefers-reduced-motion`;
* texto alternativo quando o componente aceitar imagem;
* ausência de dependência exclusiva de hover.

Criar um utilitário `VisuallyHidden` apenas se necessário.

Não adicionar ARIA redundante a elementos semânticos nativos.

---

# Etapa 7 — Responsividade

A fundação deverá ser validada nas larguras:

* 360 px;
* 390 px;
* 768 px;
* 1024 px;
* 1280 px;
* 1440 px.

Definir comportamentos para:

* gutters;
* largura de container;
* headings fluidos;
* grids;
* cards;
* stacks;
* botões;
* navegação;
* seções;
* conteúdos monoespaçados;
* diagramas futuros.

## Regras

* mobile-first;
* evitar valores mágicos;
* evitar scroll horizontal obrigatório;
* evitar texto cortado;
* evitar botões excessivamente estreitos;
* garantir áreas de toque adequadas;
* permitir que flows futuros se tornem verticais no mobile;
* não depender exclusivamente de media queries específicas para um único componente.

---

# Etapa 8 — Migrar consumidores de baixo risco

Depois da criação da fundação, migrar apenas componentes atuais de baixo risco quando isso não causar alteração perceptível.

Ordem sugerida:

1. Container global repetido.
2. Botões com estilos idênticos.
3. SectionHeader repetido.
4. Badges ou eyebrows repetidos.
5. Wrappers de seção idênticos.
6. Cards estruturalmente equivalentes.

## Gate de migração

Antes de migrar cada componente:

* comparar classes e markup;
* preservar texto;
* preservar espaçamento;
* preservar cores;
* preservar responsividade;
* preservar estados;
* executar typecheck;
* inspecionar diff;
* comparar screenshot.

Não migrar componentes de alto risco apenas para aumentar a adoção da nova fundação.

---

# Etapa 9 — Não alterar a arquitetura editorial

Durante toda a sprint, preservar:

* ordem atual das seções;
* headings atuais;
* textos atuais;
* links atuais;
* anchors atuais;
* CTAs atuais;
* conteúdo do HORA.city;
* variantes editoriais;
* métodos;
* quatro etapas;
* LabLog;
* footer;
* menu;
* comportamento mobile.

Não utilizar a Sprint 2 para antecipar decisões da Sprint 3.

---

# Etapa 10 — Testes e validação

Atualizar o smoke test apenas se necessário para cobrir a fundação.

Não transformar o teste em snapshot frágil de classes CSS.

Validar:

* homepage responde HTTP 200;
* exatamente um `h1`;
* anchors continuam presentes;
* menu continua funcional;
* links continuam equivalentes;
* conteúdo essencial continua renderizado;
* novos componentes compilam;
* não existem imports quebrados;
* não existem componentes não utilizados;
* não existem warnings novos.

Caso existam testes unitários leves e sem novas dependências, priorizar:

* Button;
* SectionHeader;
* Container;
* Accordion, caso implementado.

Não instalar um framework grande de testes apenas para esta sprint.

---

# Etapa 11 — Performance

Comparar com o baseline da Sprint 1:

```text
rota /: 6,46 kB
First Load JS: 93,7 kB
```

A fundação não deverá provocar crescimento material sem justificativa.

Evitar:

* bibliotecas novas;
* runtime JavaScript para layout;
* componentes client desnecessários;
* animações por JavaScript;
* dependências para funções resolvíveis com CSS;
* imports globais pesados.

Componentes puramente visuais devem permanecer server components quando possível.

Se um componente precisar de `"use client"`, justificar no relatório.

---

# Etapa 12 — Documentação

Criar:

```text
docs/homepage-refactor/09-design-foundation.md
docs/homepage-refactor/10-sprint-2-report.md
```

---

## 09-design-foundation.md

Deve conter:

### 1. Objetivo

Explicar a finalidade da fundação.

### 2. Tokens

Documentar:

* cores;
* espaçamento;
* tipografia;
* layout;
* bordas;
* sombras;
* movimento;
* breakpoints.

### 3. Componentes

Para cada componente:

* propósito;
* props;
* variantes;
* exemplos de uso;
* restrições;
* acessibilidade.

### 4. Padrões

Documentar:

* container;
* seção;
* header de seção;
* CTA;
* card;
* grid;
* stack;
* fluxo responsivo futuro.

### 5. Decisões

Registrar:

* o que foi centralizado;
* o que permaneceu local;
* abstrações rejeitadas;
* componentes não migrados;
* justificativas.

### 6. Uso nas próximas sprints

Explicar como a Sprint 3 deverá utilizar a fundação.

---

## 10-sprint-2-report.md

Utilizar:

# Sprint 2 — Relatório

## Objetivo

## Estado inicial

## Arquivos criados

## Arquivos modificados

## Tokens criados ou consolidados

## Componentes compartilhados

## Componentes atuais migrados

## Componentes deliberadamente não migrados

## Acessibilidade

## Responsividade

## Performance

## Validações

## Equivalência visual

## Problemas encontrados

## Riscos remanescentes

## Recomendação para a Sprint 3

---

# Etapa 13 — Validação visual

Executar a homepage localmente e comparar com o baseline.

Larguras:

* 360 px;
* 390 px;
* 768 px;
* 1024 px;
* 1280 px;
* 1440 px.

Validar:

* primeira tela;
* largura total;
* altura;
* espaçamento;
* headings;
* cards;
* botões;
* menu mobile;
* footer;
* ausência de overflow;
* ausência de mudança textual;
* ausência de alteração de ordem;
* ausência de regressão de foco;
* ausência de regressão de contraste.

Capturas de comparação devem ser armazenadas temporariamente.

Não sobrescrever:

```text
docs/homepage-refactor/baseline/
```

Qualquer diferença perceptível deverá ser investigada e corrigida.

---

# Etapa 14 — Validação final

Executar:

```bash
npm run lint
npm exec tsc -- --noEmit
npm run build
npm run verify:homepage
npm run dev
```

Validar também:

* HTTP 200;
* console;
* hydration;
* anchors;
* menu mobile;
* links;
* CTAs;
* overflow;
* bundle;
* First Load JS;
* screenshots;
* working tree.

Registrar warnings preexistentes separadamente.

---

# Critérios de aceite

A Sprint 2 estará concluída somente quando:

* a documentação anterior tiver sido lida;
* tokens visuais estiverem centralizados ou claramente consolidados;
* Container reutilizável estiver disponível;
* Section reutilizável estiver disponível;
* SectionHeader reutilizável estiver disponível;
* CTAs possuírem base consistente;
* cards possuírem uma base reutilizável quando apropriado;
* padrões de grid e stack estiverem definidos quando necessários;
* foco, contraste e teclado estiverem contemplados;
* responsividade estiver preparada para 360–1440 px;
* componentes futuros tiverem uma base clara;
* nenhuma nova narrativa tiver sido implementada;
* nenhuma seção tiver sido movida;
* nenhum texto tiver sido reescrito;
* nenhum anchor tiver sido alterado;
* nenhuma URL tiver sido alterada;
* homepage permanecer visualmente equivalente;
* smoke test passar;
* lint passar;
* typecheck passar;
* build passar;
* bundle não apresentar crescimento material injustificado;
* conteúdo futuro permanecer preservado;
* `docs/sprints para v2/` permanecer intacto e untracked;
* nenhum commit, push, tag, deploy ou troca de branch tiver sido realizado.

---

# Fora do escopo

Não realizar:

* Sprint 3;
* novo Hero;
* novo header editorial;
* nova navegação;
* nova seção de dor;
* competências;
* trilha;
* demonstração;
* reorganização da formação;
* reorganização do HORA.city;
* reescrita dos métodos;
* reordenação das seções;
* alteração de anchors;
* integração com APIs externas;
* otimização do logo;
* atualização de dependências;
* correção das vulnerabilidades do npm;
* refatoração do Google Analytics;
* resolução dos handles do YouTube;
* definição de validade do cupom;
* deploy;
* commit;
* push;
* tag;
* alteração da versão.

---

# Restrições técnicas

* Não adicionar dependências sem necessidade indispensável.
* Não transformar componentes server em client sem justificativa.
* Não adicionar `"use client"` por conveniência.
* Não utilizar JavaScript para resolver layout possível em CSS.
* Não criar abstrações excessivamente genéricas.
* Não criar componentes sem consumidor ou uso futuro claramente documentado.
* Não modificar conteúdo editorial.
* Não ocultar regressões por meio de screenshots diferentes.
* Não expor variáveis de ambiente.
* Não apagar arquivos não relacionados.
* Não alterar a pasta untracked externa.
* Não executar ações destrutivas no Git.

---

# Relatório final no chat

Ao concluir, apresentar:

## 1. Resumo

Resultado geral da Sprint 2.

## 2. Arquivos criados

Lista completa.

## 3. Arquivos modificados

Lista completa e finalidade.

## 4. Tokens visuais

Resumo das escalas e decisões.

## 5. Componentes criados

Para cada componente:

* propósito;
* variantes;
* onde foi utilizado.

## 6. Migração realizada

Componentes atuais que passaram a usar a nova fundação.

## 7. Acessibilidade

Resultados de:

* foco;
* teclado;
* semântica;
* contraste;
* reduced motion.

## 8. Responsividade

Resultado nas seis larguras.

## 9. Performance

Comparação entre:

* rota `/`;
* First Load JS;
* warnings;
* dependências.

## 10. Validações

Tabela:

| Comando ou verificação | Resultado | Observações |
| ---------------------- | --------- | ----------- |

## 11. Equivalência visual

Indicar objetivamente:

* diferenças encontradas;
* diferenças corrigidas;
* resultado final.

## 12. Pendências

Listar o que permanece para a Sprint 3.

## 13. Recomendação para a Sprint 3

Explicar como utilizar a fundação para implementar:

* novo Header;
* novo Hero;
* dor;
* competências.

---

# Resultado esperado

Ao final desta sprint, o visitante ainda deverá encontrar essencialmente a mesma homepage.

Internamente, o projeto deverá possuir uma fundação visual e estrutural estável para iniciar a nova experiência.

A Sprint 3 deverá conseguir implementar a nova porta de entrada utilizando componentes, tokens, containers, grids e padrões já validados, sem precisar criar o sistema visual enquanto reorganiza o conteúdo.