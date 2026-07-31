# Sprint 11 — matriz de proveniência

## Princípio

A proveniência foi aplicada de forma contextual. Não existe um bloco genérico repetido em todas as páginas. Cada afirmação permanece próxima do conteúdo que a sustenta, e o JSON-LD acrescenta somente relações que também aparecem no HTML público.

| Afirmação | Página canônica | Conteúdo visível | JSON-LD | Sustentação | Risco residual |
| --- | --- | --- | --- | --- | --- |
| o Payload Journey LAB é um laboratório de formação, pesquisa e investigação aplicada | `/lab` | hero, missão, origem e atuação | `WebSite` e `WebPage` | conteúdo institucional consolidado na Sprint 10 | baixo |
| Valéria dos Santos Reiser fundou/criou o LAB | `/lab#founder` | narrativa da experiência prática e origem do LAB | `Person` mencionada pela página | copy fornecida e confirmada no conteúdo institucional | baixo |
| Valéria criou a USMT | `/lab#founder` e `/usmt` | narrativa de origem e definição autoral | `CreativeWork.creator` → `Person` | relação explícita nas duas fontes públicas | baixo |
| a forma oficial é `USMT — Universal System Modeling Template` | `/usmt` | H1 e seção completa | `CreativeWork.name` + `alternateName` | configuração central e conteúdo público | baixo |
| a USMT é um template metodológico autoral do LAB | `/usmt` | definição positiva destacada | `CreativeWork.description` e `isPartOf` | copy aprovada para a Sprint 11 | baixo |
| `/usmt` é a fonte principal da USMT | `/usmt` | página autocontida com definição, 12 elementos e quatro lentes | `WebPage.mainEntity` → `CreativeWork` | arquitetura temática e conteúdo integral | baixo |
| `/method` oferece a visão integrada dos métodos | `/method` | “Os métodos do LAB…” e distinção método/procedimento | `WebPage` | conteúdo metodológico existente | baixo |
| `/protocol` representa o processo operacional do LAB | `/protocol` | description específica + quatro etapas | `WebPage` | copy contextual e sequência operacional | baixo |
| `/investigation` representa a prática investigativa do LAB | `/investigation` | “O Payload Journey LAB reúne procedimento, métodos e evidências…” | `WebPage` | conteúdo existente da prática | baixo |
| HORA.city é investigação aplicada do LAB | `/cases` | introdução, narrativa e estado atual | `WebPage` | fatos confirmados do caso | baixo |
| HORA.city continua não resolvido | `/cases` | “Investigação em andamento”, ausência de conclusão | não foi criado tipo adicional | `editorialResolution: "unresolved"` | baixo |
| LabLog é registro editorial do LAB | `/lablog` | “O LabLog registra…” | `WebPage` | descrição pública existente | baixo |
| formação é uma oferta de aprendizagem do LAB | `/learn` | trilha e oferta Udemy | `WebPage` | conteúdo público da formação | baixo |
| universidades, laboratórios, equipes e organizações são públicos ou possibilidades | `/ecosystem` | linguagem de possibilidade | `WebPage` | guardrails editoriais preservados | médio por inferência externa possível |

## Guardrails mantidos fora da copy

Os seguintes controles permanecem em testes e revisão editorial, sem virar uma lista artificial de negações em `/usmt`:

- não apresentar a USMT como certificação;
- não apresentá-la como padrão internacional;
- não apresentá-la como produto comercial ou software;
- não inferir empresa, equipe, sede, clientes ou estrutura jurídica para o LAB;
- não inferir parcerias ou pilotos ativos;
- não atribuir individualmente cada método à fundadora sem fonte específica;
- não inventar datas, versões, credenciais ou perfis sociais;
- não tratar HORA.city como resolvido.

## Correspondência HTML ↔ JSON-LD

| Nó/propriedade | Evidência no HTML | Resultado |
| --- | --- | --- |
| `Person.name` | heading `Valéria dos Santos Reiser` em `/lab#founder` | correspondente |
| descrição de `Person` | origem do LAB e da USMT em `/lab` | correspondente |
| `CreativeWork.name` | `USMT — Universal System Modeling Template` | correspondente |
| `CreativeWork.description` | definição positiva em `/usmt` | correspondente |
| `CreativeWork.creator` | autoria em `/lab` e `/usmt` | correspondente |
| `CreativeWork.isPartOf` | “desenvolvido no Payload Journey LAB” | correspondente |
| `WebPage.mainEntity` em `/usmt` | página integral dedicada à USMT | correspondente |
| `WebSite` | nome, URL, idioma e descrição globais | correspondente |

Não há propriedades vazias, IDs concorrentes, `Organization`, datas inventadas ou relações privadas.
