# Fundação técnica e sistema visual

Data: 19 de julho de 2026

Versão de referência: `0.2.0`

## 1. Objetivo

Esta fundação fornece tokens e componentes compartilhados para a nova experiência editorial planejada para as próximas sprints, sem antecipar o redesign. A homepage atual continua sendo o contrato visual e funcional: mesma ordem, copy, anchors, links, breakpoints e comportamento.

`app/globals.css` é a fonte canônica dos valores visuais. `tailwind.config.ts` expõe aliases semânticos que apontam para as custom properties e preservam modificadores de opacidade. Não existe uma segunda paleta literal em TypeScript.

## 2. Inventário anterior à consolidação

- A mesma paleta estava escrita em hexadecimal no Tailwind e em custom properties no CSS global.
- Container, Section, Button, Card e SectionHeader já eram primitives reais e amplamente consumidos.
- `components/sections/SectionHeader.tsx` era apenas um re-export intermediário.
- `SectionHeader` sempre emitia `h2` e não explicitava seu contrato semântico.
- `Button` era tipado somente como anchor, mas simulava disabled com um `span`.
- Sombras importantes estavam repetidas como valores arbitrários em Button, Card, Hero, HighlightPanel e HORA.city.
- Gutters e espaçamento de seção estavam corretos, porém codificados diretamente nos componentes.
- Apenas `MobileNavigation` era Client Component; a fundação visual não dependia de JavaScript.
- Grids atuais possuem composições editoriais diferentes; uma abstração única esconderia CSS sem eliminar repetição real.

## 3. Tokens

### 3.1. Cores

Os valores são armazenados como canais RGB para que o Tailwind possa produzir `rgb(var(...) / <alpha-value>)` e continuar aceitando classes como `bg-surface-card/85`.

| Token CSS | Valor equivalente | Uso semântico |
| --- | --- | --- |
| `--color-paper` | `#f8f7f4` | Fundo principal e superfície da página |
| `--color-ink` | `#101010` | Texto principal e fundos técnicos escuros |
| `--color-graphite` | `#4b4b4b` | Texto secundário |
| `--color-line` | `#d8d6d1` | Bordas e divisores |
| `--color-subtle` | `#f3f1ec` | Fundo claro secundário |
| `--color-soft` | `#e9e7e2` | Superfície suave e disabled |
| `--color-surface-card` | `#ffffff` | Cards |
| `--color-blush` | `#f7d6ea` | Rosa suave |
| `--color-accent` | `#2fae42` | Verde técnico |
| `--color-terminal` | `#78e65d` | Texto terminal sobre fundo escuro |
| `--color-pink` | `#eb5cb8` | CTA e acento principal |
| `--color-pink-dark` | `#c93f99` | Hover e foco de maior contraste |
| `--color-focus` | alias de `--color-pink-dark` | Outline de teclado |
| `--color-accent-muted` | `#e9f8e6` | Fundo técnico suave |
| `--color-danger` | `#b42318` | Estado de erro já previsto |
| `--color-case-section` | `#f6e7eb` | Fundo do Study Case |
| `--color-case-card` | `#fbf1f4` | Card editorial do Study Case |
| `--color-case-panel` | `#fcf7f8` | Painel técnico do Study Case |

Aliases históricos como `ink`, `text-primary`, `graphite`, `muted`, `paper`, `surface-page`, `accent` e `accent-technical` continuam disponíveis no Tailwind, mas apontam para os mesmos tokens CSS.

Valores do `app/icon.svg` e de `PayloadJourneyDiagram.tsx` permanecem locais: SVGs externos/isolados não herdam as custom properties do documento e esses assets não foram redesenhados.

### 3.2. Tipografia

| Token | Valor |
| --- | --- |
| `--font-family-sans` | Space Grotesk, Inter, Arial, Helvetica, sans-serif |
| `--font-family-mono` | IBM Plex Mono, Courier New, monospace |
| `--font-size-technical-sm` | `calc(0.7rem + 5px)` |
| `--font-size-technical` | `calc(0.75rem + 5px)` |
| `--font-size-technical-lg` | `calc(0.875rem + 5px)` |
| `--tracking-technical` | `0.08em` |
| `--tracking-technical-wide` | `0.12em` |

As fontes e fallbacks atuais foram preservados. Nenhuma fonte, arquivo ou dependência foi instalada.

### 3.3. Espaçamento e layout

| Token | Mobile | `sm` ≥640 | `lg` ≥1024 | `xl` ≥1280 |
| --- | --- | --- | --- | --- |
| `--space-container-inline` | 20 px | 32 px | 40 px | 48 px |
| `--space-section-block` | 64 px | 80 px | 96 px | 96 px |

Outros contratos:

- `--container-narrow`: 64 rem, equivalente ao antigo `max-w-5xl`;
- `--container-default`: 80 rem, equivalente ao antigo `max-w-7xl`;
- `--container-wide`: 88 rem;
- `--space-card`: 24 px;
- largura mínima do body: 320 px;
- breakpoints do Tailwind permanecem `sm`, `md`, `lg`, `xl` e `2xl`, sem alteração.

O Hero continua sobrescrevendo o padding padrão da seção com sua escala própria de 80/96/112 px. Como `foundation-section` está na layer de components, utilities específicas do consumidor continuam tendo precedência.

### 3.4. Bordas, raios e sombras

- `--radius-control`: 8 px;
- `--radius-card`: 16 px;
- `--shadow-button-primary`: sombra rosa do CTA;
- `--shadow-card`: elevação neutra;
- `--shadow-card-technical`: hover verde;
- `--shadow-card-cta`: hover rosa;
- `--shadow-highlight`: painéis com cantos técnicos;
- `--shadow-flow`: passos do Hero;
- `--shadow-investigation`: terminal do HORA.city.

Todos preservam os valores anteriores; apenas a origem passou a ser canônica.

### 3.5. Movimento

- `--motion-duration-fast`: 180 ms, usado em links globais;
- `--motion-duration-base`: 200 ms, usado em Button e Card;
- `--motion-easing-standard`: `ease`.

`prefers-reduced-motion: reduce` continua reduzindo animações e transições para `0.001ms`, limitando iterações a uma e desativando smooth scroll.

## 4. Componentes

### 4.1. Container

Propósito: centralizar conteúdo, limitar largura e aplicar gutters responsivos.

Props:

- `size?: "narrow" | "default" | "wide"`;
- `children`;
- atributos nativos de `div`, incluindo `className`, `aria-*` e `data-*`.

Exemplo:

```tsx
<Container size="narrow">...</Container>
```

Restrições: não existem variantes `reading` ou `full` sem consumidor concreto. Utilities passadas em `className` podem especializar o layout.

### 4.2. Section

Propósito: fornecer elemento `section`, espaçamento, contraste, anchor opcional e Container interno.

Props:

- `id?: string`;
- `variant?: "default" | "soft" | "dark" | "blush"`;
- `containerClassName?: string`;
- atributos nativos de `section`.

Exemplo:

```tsx
<Section id="metodos" variant="soft">...</Section>
```

O `id` tornou-se opcional para futuras seções sem contrato de navegação. Todos os anchors atuais continuam presentes.

### 4.3. SectionHeader

Propósito: compor eyebrow, heading e descrição com largura de leitura consistente.

Props:

- `eyebrow?: string`;
- `title: string`;
- `description?: string`;
- `align?: "left" | "center"`;
- `level?: "h2" | "h3" | "h4"`;
- `className?: string`.

O default é `h2`. O tipo não contém e o componente não pode emitir `h1`; a responsabilidade pelo único H1 permanece no Hero.

```tsx
<SectionHeader level="h3" title="Método" description="..." />
```

### 4.4. Button

Propósito: compartilhar apresentação sem misturar navegação e ação.

Contratos:

- `LinkButtonProps`: exige `href`, renderiza `<a>`, aceita atributos de anchor e não expõe `disabled`;
- `ActionButtonProps`: não aceita `href`, renderiza `<button type="button">` e aceita `disabled` nativo;
- variantes visuais: `primary`, `secondary`, `ghost`.

Links externos com `target="_blank"` recebem `rel="noopener noreferrer"` quando o consumidor não fornece outro valor.

```tsx
<Button href="/destino">Abrir</Button>
<Button disabled>Indisponível</Button>
```

Não existe CTA-link “disabled”. Se esse caso surgir, deverá ser modelado como estado não interativo com copy própria, não como anchor parcialmente funcional.

### 4.5. Card

Propósito: base composicional para superfícies com borda, padding e elevação.

Props:

- `hover?: "none" | "technical" | "cta"`;
- `children`;
- atributos nativos de `div`.

Header, body e footer permanecem composição por `children`; não foram criadas props excessivamente genéricas.

### 4.6. Badge

Propósito: categoria ou estado curto.

Props:

- `variant?: "technical" | "cta" | "neutral"`;
- `children`;
- atributos nativos de `span`, incluindo `className`.

Não deve substituir texto estrutural nem ser usado como decoração vazia.

### 4.7. Primitives técnicas

`TechnicalLabel`, `TerminalChip`, `TerminalLine` e `HighlightPanel` passaram a consumir tokens de tipografia, tracking, raio e sombra. Suas APIs e markup permaneceram inalterados.

## 5. Padrões

### Container e seção

Use `Container` diretamente para Header, Footer e blocos sem section. Use `Section` para áreas editoriais; uma seção pode especializar padding e fundo por classes sem alterar o contrato global.

### Header de seção

Use `SectionHeader` quando eyebrow/título/descrição seguirem o padrão atual. Headings editoriais especiais, como o header de Métodos com painel lateral, permanecem locais para evitar alteração visual.

### CTA

Navegação sempre usa `href`; ações usam eventos e botão nativo. A variante visual não determina semântica.

### Card

Cards informativos usam `Card` e conteúdo composto. Hover é realce opcional e nunca a única forma de acessar informação.

### Grid e Stack

Não foram criados componentes `Grid` ou `Stack`. Os grids atuais usam colunas e breakpoints diferentes; abstraí-los esconderia o CSS e criaria props artificiais. A Sprint 3 pode extrair um padrão quando dois layouts novos compartilharem o mesmo contrato.

### Flow responsivo futuro

Flows devem ser coluna única no mobile e podem mudar para grid/flex a partir de `md`. O `FlowDiagram` atual já segue esse comportamento. Não foi criado `FlowNode` sem consumidor.

## 6. Acessibilidade

- `SectionHeader` restringe headings internos a `h2–h4`.
- Links e botões possuem contratos distintos.
- Disabled usa atributo nativo somente em botão real.
- O foco de teclado usa `--color-focus` (`#c93f99`), com contraste 4,21:1 sobre papel e 4,22:1 sobre ink.
- Menu mobile mantém botão nativo, `aria-expanded`, `aria-controls`, sete links e foco visível.
- Reduced motion é protegido globalmente.
- Nenhuma informação depende exclusivamente de hover.
- Nenhuma nova fronteira Client Component foi criada.

Limitações preexistentes preservadas para não redesenhar a página:

- texto branco sobre o rosa do CTA: 3,11:1, abaixo de 4,5:1 para texto pequeno;
- verde técnico sobre papel: 2,70:1 quando usado como texto pequeno;
- leitor de tela real e navegação completa por teclado ainda exigem auditoria humana dedicada.

Essas combinações devem ser corrigidas como decisão visual explícita na Sprint 3, não silenciosamente durante a consolidação.

## 7. Decisões e abstrações rejeitadas

- CSS custom properties são a fonte de valores; Tailwind é a camada de nomes/utilities.
- Nenhum valor de cor hexadecimal permanece no Tailwind.
- Cores exclusivas do HORA.city foram nomeadas, mas sua aparência não foi alterada.
- `components/sections/SectionHeader.tsx` foi removido; consumidores importam o primitive diretamente.
- O header customizado de Métodos não foi migrado, pois seu tracking e composição diferem do `SectionHeader`.
- `Grid`, `Stack`, `VisuallyHidden`, Accordion, ComparisonPanel, MethodCard e FlowNode não foram criados sem consumidor.
- Componentes reservados da Sprint 1 não foram publicados, removidos ou tratados como código morto.
- Nenhuma dependência, fonte, animação JavaScript ou nova diretiva `"use client"` foi adicionada.

## 8. Validação reproduzível

```text
npm run verify:foundation
```

O script usa Node.js nativo e verifica grupos mínimos de tokens, ausência de literais de cor no Tailwind, reduced motion, níveis permitidos do SectionHeader, contratos de Button, ausência de novas fronteiras client e remoção do adapter legado.

O gate completo continua sendo:

```text
npm run lint
npm exec tsc -- --noEmit
npm run build
npm run verify:foundation
npm run verify:homepage
```

## 9. Uso nas próximas sprints

A Sprint 3 deve:

1. reutilizar os tokens existentes antes de criar novas cores ou espaçamentos;
2. construir Header e Hero com `Container`, Button e primitives técnicas;
3. usar `SectionHeader` somente para headings internos;
4. criar Grid/Stack apenas quando a nova narrativa demonstrar repetição concreta;
5. resolver contraste de CTA e verde técnico como decisão visual explícita;
6. manter componentes visuais como Server Components;
7. executar `verify:foundation`, smoke, bundle e comparação nas seis larguras a cada lote.
