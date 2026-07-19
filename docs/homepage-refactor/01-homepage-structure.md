# Estrutura atual da homepage

## Mapa estrutural

```text
Home (`app/page.tsx`)
├─ JsonLd
├─ SiteHeader
│  ├─ marca → #inicio
│  ├─ navegação desktop
│  ├─ CTA Udemy
│  └─ MobileNavigation (Client Component)
├─ main
│  ├─ HeroSection                     #inicio
│  ├─ LabOverviewSection              #lab
│  ├─ MethodsSection                  #metodos
│  ├─ ConceptEcosystemSection         #ecossistema
│  ├─ CaseStudySection                #case-study
│  ├─ EducationSection                #formacao
│  ├─ LabLogSection                   #lablog
│  ├─ AboutSection                    #sobre
│  └─ BetaCtaSection                  sem ID
└─ SiteFooter
```

## Ordem real renderizada

| Ordem | Seção atual | Arquivo/componente | Conteúdo principal | CTA/links | Observações |
| --- | --- | --- | --- | --- | --- |
| 0 | Header sticky | `components/layout/SiteHeader.tsx` / `SiteHeader` | Logo, nome do LAB e navegação | Sete âncoras; Udemy | Fora de `main`; desktop a partir de `lg`; menu controlado por `MobileNavigation` abaixo de `lg` |
| 1 | Hero | `components/sections/HeroSection.tsx` / `HeroSection` | Proposta institucional, tagline, introdução e painel FREEZE/MAP/DETECT/RESTORE | Udemy e YouTube | ID `inicio`; duas colunas em `lg`; painel e passos são hardcoded no componente |
| 2 | O LAB | `components/sections/LabOverviewSection.tsx` / `LabOverviewSection` | Introdução, complemento e pilares Formação/Pesquisa/Investigação/Colaboração | Nenhum | ID `lab`; pilares em duas colunas desde `sm`; hover eleva cards |
| 3 | Métodos | `components/sections/MethodsSection.tsx` / `MethodsSection` | Payload Journey, USMT, Reverse Payload Journey, Operational Payload Path e Track to Origin | Nenhum link acionável | ID `metodos`; cinco cards em uma linha apenas em `xl`; ícone de seta é decorativo |
| 4 | Ecossistema | `components/sections/ConceptEcosystemSection.tsx` / `ConceptEcosystemSection` | Fluxo Track Mode → Reverse → Origin → Evidência → Restauração; três conceitos | Nenhum | ID `ecossistema`; não aparece na navegação principal; `FlowDiagram` vira cinco colunas em `md` |
| 5 | Study Case | `components/sections/CaseStudySection.tsx` / `CaseStudySection` | HORA.city, expansão ~6k→~40k, anomalia `createdAt`, HeartCreated e investigação | `#case-study` e `#lablog` | ID `case-study`; CTA “Explorar” aponta para a própria seção; grande parte do texto duplica o arquivo de conteúdo |
| 6 | Formação | `components/sections/EducationSection.tsx` / `EducationSection` | Curso beta, aprender/investigar/colaborar e trilhas futuras | Udemy | ID `formacao`; CTA externo seguro; badges de trilhas não são links |
| 7 | LabLog | `components/sections/LabLogSection.tsx` / `LabLogSection` | Chamada breve para acompanhar investigação | YouTube | ID `lablog`; texto principal hardcoded; não há vídeo incorporado |
| 8 | Sobre | `components/sections/AboutSection.tsx` / `AboutSection` | Contexto, visão do LAB e apresentação da fundadora | Nenhum | ID `sobre`; conteúdo centralizado |
| 9 | CTA Beta | `components/sections/BetaCtaSection.tsx` / `BetaCtaSection` | Convite ao primeiro círculo de estudantes | Udemy | Sem ID; fundo escuro; CTA empilha no mobile |
| 10 | Footer | `components/layout/SiteFooter.tsx` / `SiteFooter` | Marca, resumo, navegação, links e legal | Âncoras, Udemy e dois destinos YouTube no conjunto da página | Fora de `main`; ano calculado em runtime/build; políticas são texto desabilitado, não links |

## Detalhamento por seção

### Header

- Dependências: `next/image`, `Container`, `Button`, `MobileNavigation`, `siteContent`.
- Logo: `/brand/logo.png`, recortado por `object-cover`; alt vazio porque o link pai tem `aria-label`.
- Desktop: nav e CTA aparecem em `lg` (1024 px).
- Mobile/tablet: botão de 44×44 px alterna ícones Menu/X, `aria-expanded` e `aria-controls`.
- Interação: o menu fecha ao selecionar uma âncora; não há fechamento por Escape, clique externo ou mudança de rota.
- Movimento: transitions de cor; header usa `backdrop-blur`.

### Hero — `#inicio`

- Fonte editorial: `siteContent.hero`; fonte operacional local: `payloadFlow`.
- Conteúdo: eyebrow “Software System Investigation”, H1, tagline, introdução, quatro verbos operacionais e chips Track/Reverse/Origin.
- CTAs: curso Udemy e canal `@PayloadJourneyLAB`, ambos em nova aba com `noopener noreferrer`.
- Responsividade: CTAs empilhados no mobile; duas colunas em `lg`; H1 escala de `text-5xl` a `5.6rem`.
- Imagens/vídeo: nenhum; botão de vídeo somente direciona ao YouTube.
- Animações: hover/transition de buttons; sem animação de entrada.

### O LAB — `#lab`

- Fonte editorial: `siteContent.lab`.
- Conteúdo: definição institucional, complemento e quatro pilares com ícones Lucide.
- Responsividade: uma coluna, pilares em duas a partir de `sm`, composição 0.9/1.1 em `lg`.
- Interação: cards reagem a hover, mas não são links.
- Dados dinâmicos: índice visual `01`–`04` gerado por `map`.

### Métodos — `#metodos`

- Fonte editorial: `siteContent.methods`.
- Cinco métodos e uma frase relacional.
- Responsividade: 1 coluna → 2 em `md` → 5 em `xl`; header muda para linha em `lg`.
- Interação: cards reagem a hover; as setas não são links. O CTA futuro da USMT existe nos dados, mas não é renderizado pelo componente.
- Dependências: `Card`, `Section`, `GitBranch` e `ArrowUpRight`.

### Ecossistema — `#ecossistema`

- Fonte editorial: `siteContent.ecosystem`.
- `FlowDiagram` renderiza lista ordenada de cinco etapas e setas apenas a partir de `md`.
- Três cards conceituais: Trace Engineer, Track Mode e Software System Investigation.
- Não tem CTA, imagem, vídeo ou dado dinâmico externo.
- A área `futureArtifacts` (“One Bit Machine”) não é consumida.

### Study Case — `#case-study`

- Mistura `siteContent.caseStudy.investigation` com strings e arrays locais.
- Coluna editorial: HORA.city, resumo, anomalia, dois botões, aviso temporário e quatro microfatos.
- Coluna técnica: case ID, região, status, payload, flow, authority e tabela de cinco linhas.
- Responsividade: duas colunas em `lg`; fatos e status cards passam a duas colunas em `sm`.
- CTAs: “Explorar o estudo” é um self-link para `#case-study`; “Acompanhar no LabLog” vai para `#lablog`.
- Fundo: radial gradient CSS; nenhuma imagem externa.

### Formação — `#formacao`

- Fonte editorial: `siteContent.education`.
- Curso beta com cupom, três cards de ação e cinco badges de trilhas futuras.
- CTA Udemy abre em nova aba com atributos de segurança.
- Responsividade: CTA do curso fica ao lado em `lg`; cards passam a três colunas em `lg`.
- Badges “Curso”, “LabLogs”, “Workshops”, “Programa Trace Engineer” e “Pilotos acadêmicos” não são interativos.

### LabLog — `#lablog`

- Texto visível hardcoded no componente; URL reutiliza `siteContent.hero.secondaryAction.href`.
- CTA externo seguro para YouTube.
- Sem thumbnail, iframe ou player.
- Layout permanece em uma coluna com largura máxima de 3xl.

### Sobre — `#sobre`

- Fonte editorial: `siteContent.about`.
- Três blocos institucionais e card da fundadora com dois parágrafos.
- Sem CTA, imagem ou interação.
- A lista `about.reserved` não é renderizada.

### CTA Beta e Footer

- CTA Beta reutiliza o curso centralizado e ocupa toda a largura no mobile.
- Footer reutiliza parte da navegação (`slice(1, 6)`), omitindo Início e Sobre.
- O footer contém um link de âncora para LabLog, Udemy e um segundo handle de YouTube (`@Lab-Log`).
- “Política de privacidade” e “Termos de uso” são spans com `aria-disabled`, não destinos legais.

## Contratos de navegação

| Âncora | Seção existente | Navegação principal | Footer | Outros usos |
| --- | --- | --- | --- | --- |
| `#inicio` | Hero | Sim | Não | Marca do header |
| `#lab` | O LAB | Sim | Sim | — |
| `#metodos` | Métodos | Sim | Sim | — |
| `#ecossistema` | Ecossistema | Não | Não | — |
| `#case-study` | Study Case | Sim | Sim | CTA da própria seção |
| `#formacao` | Formação | Sim | Sim | — |
| `#lablog` | LabLog | Sim | Sim | Study Case e footer |
| `#sobre` | Sobre | Sim | Não | — |

Todos os anchors presentes no DOM encontraram IDs válidos durante a verificação automatizada.

## Componentes e conteúdo preservados, mas não renderizados

| Item | Caminho | Estado |
| --- | --- | --- |
| Seção completa da USMT | `components/sections/UsmtSection.tsx` | Não importada por `app/page.tsx` |
| Contact section | `components/sections/ContactSection.tsx` | Não importada; canais modelados como desabilitados |
| White Papers section | `components/sections/WhitePapersSection.tsx` | Não importada; atualmente apenas delega para `LabLogSection` |
| Payload Journey diagram | `components/diagrams/PayloadJourneyDiagram.tsx` | Não referenciado |
| USMT diagram | `components/diagrams/UsmtDiagram.tsx` | Não referenciado |
| Feature card linkável | `components/ui/FeatureCard.tsx` | Não referenciado |
| USMT completa, White Papers, contato, One Bit Machine e rotas futuras | `content/payload-journey-lab.ts` | Dados preservados, parcial ou totalmente fora da homepage |

Esses itens não devem ser removidos automaticamente na refatoração; precisam de decisão explícita de migração, rota ou arquivo histórico.

