# Sprint 8 — Mapa de rotas

Data: 19 de julho de 2026

## Arquitetura publicada

```text
Homepage sintética
├── /payload-journey
├── /learn
├── /cases
├── /usmt
├── /method
├── /protocol
├── /investigation
├── /lab
├── /ecosystem
├── /lablog
└── /about
```

## Responsabilidade de cada rota

| Rota | Responsabilidade exclusiva | Conteúdo completo reutilizado | Continuidade |
| --- | --- | --- | --- |
| `/` | apresentação, demonstração, mapa e navegação | Hero, Demo e CTA final | todas as áreas principais |
| `/payload-journey` | estratégia para seguir o payload e compreender o flow | Dor, Competências e Demo | USMT e Protocolo |
| `/learn` | progressão de aprendizagem e formação disponível | Trilha e Formação | Payload Journey e LabLog |
| `/cases` | investigações aplicadas com fatos confirmados | HORA.city | Prática e LabLog |
| `/usmt` | modelo estrutural completo da Sprint 9 | USMT | Payload Journey e Protocolo |
| `/method` | visão integrada dos métodos do LAB e relação com o procedimento | Métodos | Protocolo e Prática |
| `/protocol` | processo operacional Congelar → Mapear → Detectar → Restaurar | Procedimento | Métodos e Prática |
| `/investigation` | prática autônoma: Track Mode, Trace Engineer e Software System Investigation | Prática investigativa | Protocolo e Casos |
| `/lab` | missão, princípio e posição institucional | O LAB | Ecossistema e Sobre |
| `/ecosystem` | quatro pilares e possibilidades de colaboração | Ecossistema | LAB e Formação |
| `/lablog` | registros e temas acompanhados | LabLog | Casos e Formação |
| `/about` | origem, visão e autoria confirmada | Sobre e fundadora | LAB e Ecossistema |

## Separação entre método, protocolo e investigação

- `/method` responde quais métodos existem, a que pergunta cada um responde, quando usar e como se relacionam com o procedimento.
- `/protocol` responde qual sequência operacional organiza a investigação e que evidência cada etapa produz.
- `/investigation` responde como a prática se organiza em Track Mode, função Trace Engineer, Software System Investigation e conceitos centrais.

Nenhum texto foi movido entre essas três áreas para preencher páginas. Cada rota reutiliza o componente que já possuía conteúdo público completo e independente.

## Homepage sintética

```text
Header
→ Hero integral
→ Demo integral
→ visão compacta: USMT / Payload Journey / Protocolo
→ investigação aplicada
→ quatro pilares
→ formação e LabLog
→ Sobre
→ CTA final integral
→ Footer
```

As sínteses da homepage são componentes próprios. Nenhuma seção completa é ocultada por CSS e nenhum componente completo recebeu modo `compact`.

## Demonstração compartilhada

`PayloadFlowDemoSection` é importado diretamente por:

- `app/page.tsx`;
- `app/payload-journey/page.tsx`.

Assim, a homepage e a página temática exibem a mesma implementação e a mesma fonte de conteúdo. Os nove nós públicos, incluindo Projection, permanecem na mesma ordem.

## Navegação

Header:

- Método → `/method`;
- Aprender → `/learn`;
- Casos → `/cases`;
- O LAB → `/lab`;
- Sobre → `/about`;
- Começar → `/learn`.

Footer, mantido independente:

- O LAB → `/lab`;
- Métodos → `/method`;
- Study Case → `/cases`;
- Formação → `/learn`;
- LabLog → `/lablog`;
- Udemy e o destino próprio de YouTube continuam externos.

## SEO e estrutura compartilhada

Todas as páginas usam `SitePage`, que fornece Header, introdução temática com H1, continuidade contextual e Footer. Cada rota possui metadata própria, descrição, canonical e JSON-LD `WebPage`. O sitemap contém as 12 rotas públicas.

Todos os conteúdos continuam HTML real. Somente `MobileNavigation` cria uma fronteira client.

## Rotas deliberadamente ausentes

- `/mapping`;
- `/reverse-payload-journey`;
- `/resources`;
- `/privacy-policy`;
- `/terms-of-use`.

As três primeiras não possuem conteúdo público completo e independente no inventário. As duas últimas não existem e seus nomes não são renderizados. O verificador exige HTTP 404 para todas elas.
