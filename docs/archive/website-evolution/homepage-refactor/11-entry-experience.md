# Nova experiência de entrada da homepage

Data: 19 de julho de 2026  
Versão de referência: `0.2.0`

## 1. Objetivo da nova entrada

A homepage deixa de exigir compreensão prévia da instituição e de sua taxonomia metodológica. A progressão inicial muda de “instituição e metodologia primeiro” para “habilidade e estratégia de entrada primeiro”.

O visitante encontra, nesta ordem:

1. o que pode aprender;
2. qual problema essa habilidade resolve;
3. como iniciar uma investigação;
4. quais competências concretas poderá desenvolver;
5. onde continuar.

A profundidade institucional e metodológica permanece nas seções posteriores.

## 2. Público prioritário

- estudantes de Engenharia de Software;
- developers junior;
- developers entrando em codebases desconhecidas;
- pessoas trabalhando com sistemas expandidos por IA.

## 3. Arquitetura inicial

```text
SiteHeader
HeroSection                 #inicio
ProblemSection              #aprender
LearningOutcomesSection     #competencias
LabOverviewSection          #lab
restante da homepage anterior
```

As seções antigas mantêm a ordem relativa: O LAB, Métodos, Ecossistema, HORA.city, Formação, LabLog, Sobre e CTA final.

## 4. Conteúdo

### Hero

- Eyebrow: `Payload Tracing para estudantes e developers`
- H1: `Aprenda a seguir o payload`
- Lead: `Reduza uma codebase grande a um único flow investigável.`
- Descrição: `Aprenda a acompanhar como a informação nasce, atravessa camadas, muda de representação e chega aos pontos onde o sistema toma decisões.`
- Assinatura: `Siga o flow. Entenda o sistema.`
- CTA principal: `Começar a aprender` → `#aprender`
- CTA secundário: `Conhecer a formação` → `#formacao`

### Estratégia de entrada

`Não abra arquivos aleatoriamente` introduz quatro passos:

1. Escolha um flow.
2. Encontre o payload.
3. Siga as transformações.
4. Localize a decisão.

O resultado destacado é `Transforme milhares de arquivos numa rota investigável.` A comparação contrapõe abrir/procurar/modificar sem compreensão a selecionar um flow, seguir um payload, produzir checkpoints e observar antes de modificar.

### Competências

Oito outcomes com IDs estáveis cobrem identificação do payload, representações, flow, responsabilidades, checkpoints, documentação, reconstrução de anomalias e origem.

## 5. Hierarquia e navegação

- exatamente um `h1`, emitido diretamente pelo Hero;
- `ProblemSection` e `LearningOutcomesSection` usam `h2` via `SectionHeader`;
- cada passo e competência usa `h3`;
- cards estão em listas ordenadas;
- o Header usa Aprender, Formação, Caso real, Métodos e O LAB;
- o CTA “Começar” aponta para `#aprender`;
- Header desktop e mobile compartilham `siteNavigation`;
- o Footer usa `footerContent.navigation`, preservando seus cinco labels/destinos anteriores de forma independente;
- todos os anchors antigos continuam presentes;
- `Section` fornece `scroll-mt-24` para compensar o Header sticky.

## 6. Contraste

Os estilos anteriores não foram alterados. A Sprint 3 adiciona:

| Token/variante | Uso | Contraste medido |
| --- | --- | ---: |
| `--color-accent-text` / `accent-readable` | texto verde pequeno sobre papel | 5,80:1 |
| `--color-cta-contrast-text` | texto ink sobre rosa do CTA | 6,12:1 |
| `Button variant="contrast"` | Header e Hero novos | 6,12:1 no estado base |
| `TechnicalLabel tone="readable"` | eyebrows e números novos | 5,80:1 sobre papel |

Os defaults `Button.primary` e `TechnicalLabel.technical` continuam idênticos para evitar mudança perceptível nas seções antigas. O script `verify:foundation` protege essa separação.

## 7. Responsividade

As novas seções são mobile-first:

- Hero: CTAs empilhados no mobile e lado a lado a partir de `sm`;
- dor: uma coluna abaixo de `md`, duas em `md` e quatro somente em `xl`;
- comparação: uma coluna no mobile e duas em `md`;
- competências: uma coluna abaixo de `md`, duas em `md` e quatro em `xl`;
- cards usam altura natural, sem `min-width` local;
- todas as seções reutilizam gutters e espaçamento da fundação.

Medição headless em iframe de viewport CSS exato:

| Viewport | Altura da página | Overflow horizontal |
| --- | ---: | ---: |
| 360×800 | 17.853 px | 0 |
| 390×844 | 17.279 px | 0 |
| 768×1024 | 12.147 px | 0 |
| 1024×768 | 10.549 px | 0 |
| 1280×800 | 9.303 px | 0 |
| 1440×900 | 9.303 px | 0 |

Screenshots temporários foram capturados sem sobrescrever `baseline/`. Em 360 e 390 px, uma moldura de iframe compensou a largura ocupada pela scrollbar do navegador desktop e entregou largura CSS interna exata.

## 8. Preparação para a Sprint 4

A Sprint 4 poderá inserir Trilha e Demonstração entre a entrada e o conteúdo antigo sem refazer os contratos atuais. `heroInvestigationPanel`, `investigationCycle` e seus IDs continuam preservados para esse uso.

Quando a demonstração existir:

- avaliar se o CTA principal do Hero passa de `#aprender` para a Demo;
- manter `#aprender` como entrada textual acessível;
- não duplicar os quatro passos da dor como uma segunda Trilha;
- reutilizar os mesmos tokens, Server Components e regras de reduced motion.
