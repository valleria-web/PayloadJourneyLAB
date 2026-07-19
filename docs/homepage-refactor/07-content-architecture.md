# Arquitetura de conteúdo da homepage

Data: 19 de julho de 2026

Versão de referência: `0.2.0`

## 1. Arquitetura criada

A Sprint 1 mantém `content/payload-journey-lab.ts` como fachada compatível com os componentes existentes e introduz três módulos de domínio. Isso evita uma fragmentação por seção visual e permite que as próximas sprints reorganizem a homepage sem duplicar conceitos.

| Arquivo | Responsabilidade | Tipos e contratos | Dependências principais |
| --- | --- | --- | --- |
| `content/site.ts` | Identidade, anchors, navegação, links externos, CTAs, formação, campanha, LabLog e footer | `HomepageAnchors`, `SiteIdentity`, `SiteLinks`, `CampaignConfig`, `NavItem`, `CtaItem` | `types/content.ts` |
| `content/methods.ts` | Cinco métodos, ciclo investigativo, painel do Hero, prática investigativa e fluxo do ecossistema | `LearningMethod`, `InvestigationStep`, `InvestigativePractice`, `CtaItem` | `types/content.ts` |
| `content/hora-city.ts` | Fatos, estado técnico, CTAs e variantes editoriais do caso HORA.city | `HoraCityCase`, `CtaItem` | `content/site.ts`, `types/content.ts` |
| `content/payload-journey-lab.ts` | Fachada da homepage e conteúdo futuro ainda não extraído | `CardItem`, `CtaItem`, `Pillar`, `WhitePaper` | Os três módulos acima e `lucide-react` |
| `types/content.ts` | Contratos compartilhados e IDs estáveis | Tipos de identidade, links, campanha, método, procedimento, prática e HORA.city | `lucide-react` somente para `LucideIcon` |
| `config/site.ts` | Adaptador de metadata/SEO para a identidade e o domínio canônicos | Objeto literal derivado | `content/site.ts` |
| `scripts/verify-homepage.mjs` | Smoke test estrutural reproduzível sem framework adicional | Node.js e APIs nativas | Next local já instalado |

O sentido das dependências é conteúdo de domínio → fachada/consumidores. Os módulos de domínio não importam componentes. O único acoplamento entre domínios é HORA.city usar os anchors existentes para seus CTAs internos.

## 2. Fontes canônicas

| Domínio | Fonte | Observação |
| --- | --- | --- |
| Identidade | `content/site.ts#siteIdentity` | Alimenta Hero, marca e `config/site.ts` |
| Navegação e anchors | `content/site.ts#siteNavigation` e `homepageAnchors` | Os IDs atuais permanecem congelados |
| Formação | `content/site.ts#trainingContent`, `siteCtas` e `campaignConfig` | A oferta e a campanha temporária ficam separadas |
| Links externos | `content/site.ts#siteLinks` | Valores ausentes são `null`, não foram inventados |
| HORA.city | `content/hora-city.ts#horaCityCase` | Fatos comuns são únicos; variantes editoriais são paralelas |
| Métodos | `content/methods.ts#methodsContent` | Cinco IDs independentes dos títulos exibidos |
| Procedimento | `content/methods.ts#investigationCycle` | `freeze`, `map`, `detect`, `restore` |
| Prática investigativa | `content/methods.ts#investigativePractice` | Track Mode, Trace Engineer e Software System Investigation |
| LabLog | `content/site.ts#labLogContent` | Mantém o destino já usado pela seção e pelo Hero |
| Redes | `content/site.ts#siteLinks` | Os dois handles do YouTube continuam separados |
| Footer | `content/site.ts#footerContent` | Copy, headings, links, legal e sufixo de copyright |
| Conteúdo editorial restante | `content/payload-journey-lab.ts#siteContent` | Fachada atual e reserva para migrações posteriores |

### IDs estáveis

- Métodos: `payload-journey`, `usmt`, `reverse-payload-journey`, `operational-payload-path`, `track-to-origin`.
- Procedimento: `freeze`, `map`, `detect`, `restore`.
- Prática: `track-mode`, `trace-engineer`, `software-system-investigation`.
- Caso e mídia: `hora-city`, `lablog`.
- Anchors preservados: `inicio`, `lab`, `metodos`, `ecossistema`, `case-study`, `formacao`, `lablog`, `sobre`.

## 3. Decisões tomadas

### Estrutura e granularidade

Foram escolhidos três módulos por domínio, em vez de um arquivo por componente. Identidade, links e campanha convivem em `site.ts` porque formam a configuração pública do site; método, procedimento e prática convivem em `methods.ts` porque compartilham a mesma taxonomia; o caso real possui módulo próprio por reunir dados, estado e copy com alto risco de divergência.

### Tipagem

Os contratos importantes são explícitos, sem `any`. IDs e destinos futuros usam uniões literais. `satisfies` verifica os objetos sem apagar a inferência literal. CTAs mantêm estado explícito (`external`, `anchor`, `future`, entre outros), e decisões não confirmadas usam `null` ou `unresolved`.

### Preservação editorial

O estado renderizado no início da sprint é o contrato operacional. Copy visível, capitalização, ordem, classes, links e comportamento não foram reescritos. Conteúdo anterior que não era renderizado permanece na fachada ou em variantes nomeadas.

HORA.city tem duas variantes tipadas independentes:

- `editorialVariants.rendered`: “STUDY CASE / HORA.city” e os dois parágrafos compactos que a homepage já exibia;
- `editorialVariants.audited`: “Study Case / Saving HORA.city” e os dois parágrafos extensos que existiam no objeto de conteúdo.

`editorialResolution` permanece `unresolved`. A variante renderizada continua alimentando a UI apenas para preservar o baseline; isso não a declara oficial nem elimina a variante auditada.

A formação também preserva separadamente “Entrar no LAB Beta”, já renderizado, e “Começar com cupom FOLLOW-THE-FLOW”, anteriormente modelado mas substituído no componente.

### Anchors

Todos os IDs atuais foram centralizados sem renomeação. Header, seções, CTAs internos e o componente USMT reservado derivam do mesmo mapa. Propostas de novos labels ou IDs ficam para a mudança visual futura.

### Compatibilidade

Os componentes passaram a consumir os novos módulos diretamente quando o domínio era claro. `siteContent` continua existindo como fachada para reduzir o tamanho do diff e preservar conteúdo não renderizado. Não houve alteração de CSS, ordem de seções ou fronteira Server/Client.

## 4. Conteúdo reservado para páginas ou seções futuras

Nenhum item abaixo foi removido ou ativado.

| Caminho | Tipo | Propósito provável | Conteúdo/dependências | Risco de perda | Destino possível |
| --- | --- | --- | --- | --- | --- |
| `components/sections/UsmtSection.tsx` | Seção não renderizada | Página ou seção expandida da USMT | 12 elementos e 12 passos de `siteContent.usmt`; `Section`, `Button`, `SectionHeader` | Alto: conteúdo metodológico extenso | Rota `/usmt` / Métodos e instrumentos |
| `components/sections/ContactSection.tsx` | Seção não renderizada | Contato e redes | Estados futuros de `siteContent.contact`; ícones Lucide e UI compartilhada | Médio: canais ainda sem destinos | Footer ou página de contato |
| `components/sections/WhitePapersSection.tsx` | Adaptador provisório não renderizado | Futura listagem de White Papers | Atualmente retorna `LabLogSection`, não consome `siteContent.whitePapers` | Alto: nome não corresponde ao comportamento | Rota `/white-papers` |
| `components/diagrams/PayloadJourneyDiagram.tsx` | Diagrama SVG/HTML não consumido | Visualizar percurso entre UI, Application, Domain e Persistence | Sem dados externos | Médio | Demonstração resumida / método Payload Journey |
| `components/diagrams/UsmtDiagram.tsx` | Diagrama HTML não consumido | Placeholder estrutural da USMT | Conteúdo local de estados, eventos e camadas | Médio | Rota `/usmt` |
| `components/ui/FeatureCard.tsx` | Componente de UI não consumido | Card linkável para conteúdo futuro | `Card`, `TerminalChip`, Lucide | Baixo | Trilha, métodos ou biblioteca de UI |
| `siteContent.usmt` | Conteúdo não renderizado na homepage | Detalhamento completo da USMT | 12 elementos, 12 passos e CTA futuro | Alto | `/usmt` |
| `siteContent.whitePapers` | Conteúdo não renderizado | Três publicações planejadas | Três placeholders, datas e estados | Alto | `/white-papers` |
| `siteContent.ecosystem.futureArtifacts` | Conteúdo não renderizado | One Bit Machine | Título e descrição preservados | Médio | Formação/experimentos futuros |
| `siteContent.about.reserved` | Lista não renderizada | Expandir pessoas e instituições | Fundadora, pesquisadores, colaboradores e instituições parceiras | Médio | O LAB expandido |
| `siteContent.contact` | Conteúdo não renderizado | Colaborações e canais | CTA e LinkedIn/YouTube/GitHub em configuração | Médio | Footer/página futura |
| `siteContent.preservedFutureContent` | Registro de arquitetura | Sete rotas e seis áreas futuras | Strings de destino; nenhuma rota existe ainda | Alto | Backlog das próximas sprints |

`FlowDiagram.tsx` continua renderizado no ecossistema; apenas seu contrato foi ampliado para aceitar o array `readonly` vindo da fonte tipada.

## 5. Pendências editoriais

1. O handle oficial do YouTube não está confirmado. A homepage/LabLog continuam usando `@PayloadJourneyLAB`; o Footer continua usando `@Lab-Log`; `siteLinks.youtube.canonical` é `null` e o status é `unresolved`.
2. Não há validade, owner ou política de fallback confirmada para `FOLLOW-THE-FLOW`. `expiration` permanece `null`.
3. As duas variantes de HORA.city precisam de decisão editorial explícita antes de qualquer consolidação. Nenhuma foi declarada canônica nesta sprint.
4. O estado técnico do caso (“active investigation”, “in progress”, “temporal authority under review”) não possui owner/data de revisão.
5. “Explorar o estudo” ainda aponta para a própria seção; políticas legais e trilhas futuras continuam não interativas.
6. LinkedIn, contato e e-mail não possuem destinos confirmados.
7. White Papers, USMT completa, One Bit Machine, contato, colaboradores e rotas futuras continuam reservados e não renderizados.
8. Google Analytics continua hardcoded em `app/layout.tsx`; ficou fora do escopo para evitar misturar conteúdo, ambiente e deploy.

## 6. Smoke test reproduzível

Execute a partir da raiz do repositório:

```text
npm run verify:homepage
```

Por padrão, o script inicia `next dev` via CLI local em `127.0.0.1:3210`, aguarda até 60 segundos, faz a verificação e encerra o processo. Ele valida HTTP 200, um H1, oito IDs de seção, sete anchors de navegação, conteúdo essencial, três destinos externos, 14 IDs estáveis, estado inicial do menu mobile e as três decisões protegidas (`HORA.city: unresolved`, `YouTube: unresolved`, `campaign expiration: null`).

Para verificar uma aplicação já iniciada ou construída:

```text
$env:HOMEPAGE_VERIFY_URL = "http://127.0.0.1:3000"
npm run verify:homepage
```

O fluxo de build/produção reproduzível é:

```text
npm run build
npm run start -- --hostname 127.0.0.1 --port 3000
```

Depois, use `HOMEPAGE_VERIFY_URL` como acima. O script usa apenas Node.js nativo e não adiciona dependências.

## 7. Riscos remanescentes

- A fachada `siteContent` ainda concentra blocos editoriais grandes; extrações futuras devem ser incrementais e protegidas pelo smoke/baseline.
- O teste estrutural não substitui teste browser permanente, navegação completa por teclado, leitor de tela ou teste visual em CI.
- A captura full-page é sensível ao instante de estados de animação/intersection; as dimensões e a inspeção visual devem acompanhar a comparação exata dos viewports.
- Fontes não carregadas explicitamente, cache Webpack instável e dependências vulneráveis continuam como riscos já registrados na Sprint 0.
- A futura troca de ordem/arquitetura pode quebrar anchors, SEO ou conteúdo reservado se a matriz de 69 itens não for usada como checklist.
- Não existe fonte confirmada para produção/deploy dentro do repositório; essa divergência operacional permanece fora desta sprint.
