# Auditoria de AI-friendliness do Payload Journey LAB

**Data da auditoria:** 20 de julho de 2026  
**Estado local auditado:** `refactor/homepage-v0.2.0` em `1ae665afa7b8c8000f4bf952d5d0adfb7ee10b3e` (`pages`)  
**Domínio observado:** `https://payloadjourneylab.com` e destino público efetivo `https://www.payloadjourneylab.com`  
**Natureza:** avaliação somente; nenhuma recomendação deste documento foi implementada

## 1. Sumário executivo

O Payload Journey LAB é **muito AI-friendly**, com nota geral ponderada de **78/100**. Um crawler ou agente que consuma apenas o HTML inicial consegue descobrir as 12 rotas, ler o conteúdo essencial, seguir links HTML, extrair os nove nós da demonstração, os 12 elementos e as quatro lentes da USMT, distinguir método, procedimento e prática investigativa, identificar Valéria dos Santos Reiser como criadora do LAB e da USMT e reconhecer que HORA.city continua em investigação.

A resposta à pergunta final é **sim, com ressalvas**. O sistema consegue compreender corretamente o núcleo do LAB e separar fatos confirmados de possibilidades e estados não resolvidos. As ressalvas que impedem a classificação “AI-ready robusto” são: sinais canônicos de host contraditórios em produção; expansão inconsistente do nome USMT (`Universal System Model Template` versus `Universal System Modeling Template`); definições e proveniência ainda distribuídas entre páginas; JSON-LD válido, porém genérico; ausência de datas/versões editoriais públicas; e alguns títulos de seção que repetem o `h1`.

Não há bloqueador P0. A política `OAI-SearchBot: allowed`, `ChatGPT-User: allowed` e `GPTBot: disallowed` é coerente e deliberada: descoberta em respostas, acesso iniciado pelo utilizador e treinamento são controles independentes. O bloqueio de `GPTBot` não reduz a nota.

### Duas camadas auditadas

1. **AI-readiness estrutural do repositório e do build local.** Foram inspecionados código, arquitetura Server/Client, HTML estático produzido, metadata, JSON-LD, grafo de links e gates locais.
2. **AI-readiness observada no domínio público.** Foram medidos status HTTP, redirects, tipos de conteúdo, charset, headers de indexação, canonicals entregues, robots, sitemap, arquivos auxiliares e respostas por user-agent.

O HTML público corresponde materialmente ao commit auditado: as 12 páginas têm os mesmos tamanhos em bytes do build local e coincidem em título, canonical, idioma, contagem de `h1`, nós da demonstração e lentes da USMT. Não foi encontrada divergência de conteúdo entre repositório e produção. A divergência observada é de configuração de host: o código declara o domínio sem `www`, mas a infraestrutura pública redireciona permanentemente para `www`.

## 2. Escopo

Foram auditadas as rotas reais encontradas em `content/routes.ts:1-79` e `content/routes.ts:150-153`:

| Rota | Responsabilidade principal | HTML local (bytes) | Pública |
| --- | --- | ---: | --- |
| `/` | síntese, demonstração e entradas temáticas | 105.017 | 200 após 308 |
| `/payload-journey` | aprendizagem do percurso e demonstração completa | 90.652 | 200 após 308 |
| `/learn` | progressão e formação | 67.874 | 200 após 308 |
| `/cases` | caso HORA.city e estado investigativo | 54.994 | 200 após 308 |
| `/usmt` | USMT completa, 12 elementos e quatro lentes | 79.027 | 200 após 308 |
| `/method` | visão integrada dos métodos | 59.546 | 200 após 308 |
| `/protocol` | Congelar → Mapear → Detectar → Restaurar | 72.535 | 200 após 308 |
| `/investigation` | prática investigativa, Track Mode e Trace Engineer | 57.384 | 200 após 308 |
| `/lab` | natureza e propósito do LAB | 36.070 | 200 após 308 |
| `/ecosystem` | quatro áreas e possibilidades de colaboração | 61.546 | 200 após 308 |
| `/lablog` | canal e temas acompanhados | 38.615 | 200 após 308 |
| `/about` | origem, autoria e informações confirmadas | 41.209 | 200 após 308 |

Também foram observados `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/llms-full.txt`, `/feed.xml`, `/rss.xml`, `/atom.xml`, `/manifest.webmanifest`, `/manifest.json`, variantes HTTP/HTTPS e `www`/apex, uma URL com barra final e uma URL inexistente.

Não foram avaliados backlinks, métricas de indexação de consoles privados, logs reais de crawlers, ranking, analytics, renderização visual pixel a pixel ou alegações externas não presentes nas fontes do projeto.

## 3. Estado técnico auditado

| Item | Estado encontrado | Evidência |
| --- | --- | --- |
| Branch | `refactor/homepage-v0.2.0` | `git branch --show-current` |
| Commit | `1ae665afa7b8c8000f4bf952d5d0adfb7ee10b3e` | `git show -s` |
| Commit anterior relevante | `a8e14c9` (Sprint 9), com `81fec0b` como baseline histórico da Sprint 7 | histórico Git |
| Framework | Next.js 14.2.35 efetivamente usado no build; pacote declara `^14.2.23` | `package.json`; saída do build |
| React | `^18.3.1` | `package.json` |
| Renderização | 12 rotas públicas estaticamente geradas; conteúdo principal em Server Components | saída `next build`; `app/**/page.tsx` |
| Fronteira Client | somente `components/layout/MobileNavigation.tsx:1` | diretiva `"use client"` |
| Metadata global | título, description, canonical, OG, Twitter, robots, `lang="pt-BR"` | `app/layout.tsx:8-41`, `app/layout.tsx:50` |
| Metadata temática | função central por rota | `lib/metadata.ts:10-28` |
| Robots | arquivo dinâmico Next, política geral e três user-agents OpenAI | `app/robots.ts:4-27` |
| Sitemap | as 12 rotas públicas | `app/sitemap.ts:5-9` |
| JSON-LD | `Organization`, `WebSite`, `WebPage` na home; `WebPage` nas temáticas | `lib/structured-data.ts:11-68` |
| Arquivos especiais | sem llms, feed, RSS, Atom ou manifest público | árvore local e respostas públicas 404 |
| Client JS | 94,3 kB de First Load JS nas rotas públicas; 87,2 kB compartilhados | saída `next build` |
| Git inicial | staging vazio; `auditoria.md` e `sprint 10.md` já estavam untracked | `git status --porcelain` |

### Gates executados

| Gate | Resultado | Observação |
| --- | --- | --- |
| `npm run lint` | passou | sem erros |
| `npm run verify:homepage` | passou | 12 rotas, um `h1`, metadata, 9 flow nodes, links e guardrails |
| `npm run verify:foundation` | passou | fundação visual e composição Server verificadas |
| `npm exec tsc -- --noEmit` | passou | execução sequencial final limpa |
| `npm run build` | passou | 18 páginas estáticas; dois avisos de cache Webpack não impeditivos |

Uma primeira execução de TypeScript em paralelo com um smoke test que regenerava `.next` encontrou apenas imports temporariamente ausentes em `.next/types`. Ela foi considerada inconclusiva por corrida de artefatos, não falha do código. Após um build limpo, o mesmo typecheck passou.

## 4. Metodologia

A auditoria combinou:

- inventário de rotas, componentes, conteúdo, metadata e arquivos públicos;
- inspeção do HTML estático em `.next/server/app/*.html` sem executar JavaScript;
- extração de headings, landmarks, links, listas, imagens, JSON-LD e sinais conceituais;
- construção do grafo de links internos e detecção de páginas órfãs;
- requests HTTP com redirects manuais para registrar cada salto e os headers efetivamente entregues;
- requests públicos usando `OAI-SearchBot`, `ChatGPT-User` e `GPTBot` como user-agent;
- comparação local/público por bytes e sinais estruturais;
- teste de extração baseado exclusivamente no conteúdo público;
- simulação de navegação iniciada na homepage;
- avaliação de riscos de alucinação e recomendações sem alterar a aplicação.

Para políticas de crawlers foram usadas fontes primárias atuais: [OpenAI Crawlers](https://developers.openai.com/api/docs/bots) e [Publishers and Developers FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq). Para canonicalização e headers de indexação foram usadas [Canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) e [Robots meta/X-Robots-Tag](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), ambas do Google Search Central.

## 5. Mapa das rotas e relações semânticas

Todas as páginas são descobertas diretamente a partir da homepage. Todas as páginas temáticas possuem retorno à home por `PageIntro`, Header e Footer. Não há página órfã.

| Origem | Relações contextuais encontradas |
| --- | --- |
| `/` | todas as 11 páginas temáticas |
| `/payload-journey` | USMT e protocolo |
| `/learn` | Payload Journey e LabLog |
| `/cases` | investigação e LabLog; o caso também remete à demonstração |
| `/usmt` | Payload Journey e protocolo |
| `/method` | protocolo e investigação |
| `/protocol` | métodos e investigação |
| `/investigation` | protocolo e casos |
| `/lab` | ecossistema e Sobre |
| `/ecosystem` | LAB e formação |
| `/lablog` | casos e formação |
| `/about` | LAB e ecossistema |

Entradas temáticas mais relevantes: `/usmt` recebe links contextuais de `/` e `/payload-journey`; `/investigation`, de `/cases`, `/method` e `/protocol`; `/payload-journey`, de `/`, `/learn`, `/cases` e `/usmt`; `/protocol`, de `/`, `/payload-journey`, `/usmt`, `/method` e `/investigation`.

As responsabilidades de `/method`, `/protocol` e `/investigation` são distinguíveis no conteúdo e na navegação: visão integrada dos instrumentos, sequência operacional e prática investigativa, respectivamente. A frase em `content/methods.ts:26-29` explicita que procedimento e métodos não são a mesma coisa.

## 6. Pontuação por dimensão

As notas usam a escala 0–5 do briefing. A coluna “local” mede capacidade existente no repositório/build; “público” mede o que o domínio realmente entrega. A nota efetiva alimenta o resultado ponderado.

| Dimensão | Peso | Local | Público | Efetiva | Fundamentação resumida |
| --- | ---: | ---: | ---: | ---: | --- |
| Descoberta | 10% | 4 | 3 | 4 | sitemap completo e grafo sem órfãs; host canônico contraditório |
| Acesso ao conteúdo | 10% | 5 | 5 | 5 | conteúdo essencial em HTML estático, sem hidratação |
| HTML semântico | 7% | 4 | 4 | 4 | um `h1`, landmarks e listas; repetição de alguns títulos |
| Clareza conceitual | 10% | 4 | 4 | 4 | definições fortes; nomenclatura USMT inconsistente e conceitos distribuídos |
| Identidade | 8% | 4 | 4 | 4 | LAB, autora e relações claros; natureza jurídica não explicitada |
| Metadata | 7% | 4 | 3 | 3 | títulos/descrições únicos; canonical contradiz destino público |
| Dados estruturados | 6% | 3 | 3 | 3 | JSON-LD válido e conservador, mas genérico e pouco ligado à autoria |
| Arquitetura interna | 7% | 4 | 4 | 4 | todas as rotas conectadas e responsabilidades distintas |
| Citabilidade | 8% | 4 | 4 | 4 | unidades curtas, listas e estados; faltam datas/versões públicas |
| Autoridade/proveniência | 6% | 3 | 3 | 3 | autoria textual clara; pouca proveniência estruturada e editorial |
| Acessibilidade | 5% | 4 | 4 | 4 | DOM, foco, labels e reduced motion fortes; sem teste assistivo completo |
| Suporte a agentes | 5% | 4 | 4 | 4 | Server HTML, robots e sitemap; arquivos auxiliares ausentes, mas opcionais |
| Controle de ambiguidade | 5% | 4 | 4 | 4 | guardrails editoriais fortes; “Universal” e `Organization` exigem contexto |
| Consistência editorial | 3% | 4 | 4 | 4 | LabLog usa “Investigação em movimento”; pequena duplicação hierárquica |
| Manutenção | 3% | 4 | 4 | 4 | conteúdo centralizado e verificadores; host demanda decisão compartilhada |

### 7. Pontuação geral

**78/100 — Muito AI-friendly.**

Não foi usada média cega. Descoberta, acesso, clareza conceitual, identidade, arquitetura e citabilidade somam 60% porque determinam se uma resposta pode ser encontrada e extraída corretamente. Metadata e dados estruturados somam 13%; acessibilidade e suporte a agentes, 10%; autoridade, ambiguidade, consistência e manutenção, 17%. O resultado bruto ponderado foi arredondado para 78.

## 8. Classificação final

**Muito AI-friendly (75–89).** O site oferece boa descoberta, conteúdo server-rendered, relações internas e material citável. Ainda não é “AI-ready robusto” porque alguns sinais técnicos e editoriais não são totalmente consistentes ou verificáveis entre si.

## 9. Aspectos já fortes

1. **Conteúdo legível sem JavaScript.** As 12 rotas são estáticas; headings, cards, diagramas textuais, listas, fatos e links aparecem no HTML inicial.
2. **Demonstração preservada e compartilhada.** `PayloadFlowDemoSection` é a única implementação usada na home e em `/payload-journey` (`app/page.tsx:23`; `app/payload-journey/page.tsx`). A fonte de verdade contém **nove** nós: `Clique → Structured Payload → Request → API → Domain → Repository → Response → Projection → UI` (`content/payload-journey-lab.ts:269-352`). O componente usa uma lista ordenada (`components/sections/PayloadFlowDemoSection.tsx:44-50`).
3. **USMT integral e extraível.** `/usmt` entrega 12 elementos em `<ol>`, quatro lentes em `<ol>` e a transição para o protocolo (`content/usmt.ts:18-180`; `components/sections/UsmtSection.tsx:45-67`, `77-107`, `149-159`).
4. **Estado do caso protegido.** HORA.city é descrito como “Investigação em andamento”; a fonte mantém `editorialResolution: "unresolved"` e declara que não há origem comprovada nem restauração concluída (`content/hora-city.ts:38-39`, `115-120`, `140-146`).
5. **Identidade conservadora.** `/about` apresenta somente Valéria dos Santos Reiser como criadora do LAB e da USMT, com contexto confirmado (`content/payload-journey-lab.ts:749-758`; `components/sections/AboutSection.tsx:44-59`).
6. **Colaboração sem parceria inventada.** Universidades, laboratórios, equipes e organizações aparecem como públicos ou possibilidades, não como relações atuais; o verificador rejeita “parcerias ativas”, “pilotos ativos” e “contratos ativos” (`scripts/verify-homepage.mjs:279`).
7. **Páginas legais inexistentes não são renderizadas.** O Footer entrega aviso institucional real e mantém rotas legais ausentes somente como pendência server-side (`content/site.ts:235-238`; `components/layout/SiteFooter.tsx:59-65`).
8. **Acessibilidade estrutural.** Há `header`, `nav`, `main`, `section` e `footer`, foco global visível (`app/globals.css:119-122`), reduced motion (`app/globals.css:189-200`), menu móvel com nome, estado, controle por Escape e retorno de foco (`components/layout/MobileNavigation.tsx:18-76`).
9. **Política de IA intencional.** Robots separa busca, ação do utilizador e treinamento (`app/robots.ts:11-23`). A documentação da OpenAI declara explicitamente que esses controles são independentes.
10. **Conteúdo histórico não enviado.** Copies históricas e pendências continuam na fonte server-side, mas os verificadores e a inspeção dos HTMLs não encontraram políticas legais inexistentes nem apresentações históricas não usadas no HTML público/bundle da única fronteira Client.

## 10. Bloqueadores

**Nenhum P0.** Todas as rotas prioritárias retornam 200 após redirect, o conteúdo é legível, o sitemap é completo, o caso não resolvido é explícito e não há exclusão involuntária de indexação.

## 11. Riscos de interpretação e alucinação

| Inferência incorreta possível | Fonte/estrutura | Prob. | Impacto | Página | Mitigação futura |
| --- | --- | ---: | ---: | --- | --- |
| Payload Journey é apenas ferramenta de observabilidade | uso de “observabilidade”, embora seja definido como método | baixa | média | `/method`, `/cases` | acrescentar frase de escopo e relação com tracing/debugging |
| USMT é UML, SysML ou padrão estabelecido | nome “Universal” e ausência de comparação explícita | média | alta | `/usmt` | declarar natureza autoral e o que não pretende substituir |
| LAB é empresa/consultoria formal | JSON-LD `Organization` e CTA de colaboração | média | alta | `/`, `/ecosystem` | definir natureza institucional/jurídica real antes de enriquecer Schema |
| existem clientes, parceiros ou pilotos ativos | públicos de colaboração são listados | baixa | alta | `/ecosystem` | manter verbos de possibilidade e declarar estado quando houver fatos |
| protocolo é certificação | sequência formal e oferta de formação | baixa | média | `/protocol`, `/learn` | definir protocolo como procedimento operacional, sem credencial implícita |
| HORA.city é produto comercial finalizado | é chamado sistema real, mas não produto final | baixa | média | `/cases` | manter escopo factual e estado editorial |
| HORA.city está resolvido | descrição detalhada pode parecer conclusão | muito baixa | alta | `/cases` | preservar status visível e, futuramente, estruturá-lo |
| método substitui debugging/tracing/observabilidade | benefícios são amplos e não há seção de limites | média | média | `/method`, `/investigation` | explicar complementaridade e limites |
| USMT garante compreensão universal/infalível | expansão “Universal” | média | alta | `/usmt` | explicitar escopo, hipóteses e limitações |
| quatro pilares são departamentos formais | cards institucionais | baixa | média | `/ecosystem` | manter “áreas” e “possibilidades”, já usado na metadata |
| curso é formação acadêmica oficial | “formação” e “pilotos acadêmicos” próximos no ecossistema | baixa | alta | `/learn`, `/ecosystem` | manter Udemy e natureza da oferta explícitas |
| fundadora possui títulos/vínculos não declarados | identidade pessoal curta pode incentivar preenchimento externo | baixa | alta | `/about` | não ampliar biografia sem fonte confirmada |

## 12. Auditoria de metadata

Todas as rotas têm título e description próprios, canonical absoluto gerado a partir de `siteConfig.url`, OG `website`, locale `pt_BR`, Twitter `summary`, viewport e robots `index, follow`. Não foram encontrados títulos ou descriptions duplicados.

| Rota | Title | Description | Canonical | OG/Twitter | Clareza | Problemas |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | Payload Journey LAB — Siga o flow. Entenda o sistema. | define laboratório e foco | apex | completos | forte | host não é o destino final público |
| `/payload-journey` | Siga a informação através do sistema | flow e transformações | apex + rota | completos | forte | poderia nomear “Payload Journey” no title |
| `/learn` | Aprenda a seguir o flow | progressão e formação | apex + rota | completos | forte | “flow” depende do vocabulário do site |
| `/cases` | Casos acompanhados pelo LAB | evidências e estado | apex + rota | completos | forte | title não nomeia HORA.city |
| `/usmt` | Universal System Model Template | modelo estrutural | apex + rota | completos | forte | conflita com “Modeling” em outras copies |
| `/method` | Métodos diferentes para perguntas diferentes | instrumentos integrados | apex + rota | completos | forte | title não contém o nome do LAB |
| `/protocol` | Congelar, Mapear, Detectar e Restaurar | sequência operacional | apex + rota | completos | forte | nenhum além do host |
| `/investigation` | Do Track Mode à investigação de sistemas | prática e evidência | apex + rota | completos | forte | nenhum além do host |
| `/lab` | Formação, pesquisa e investigação aplicada | natureza do LAB | apex + rota | completos | forte | nenhum além do host |
| `/ecosystem` | Quatro áreas conectadas pelo mesmo propósito | áreas e possibilidades | apex + rota | completos | forte | nenhum além do host |
| `/lablog` | Acompanhe o LAB em movimento | registros e métodos | apex + rota | completos | forte | nenhum além do host |
| `/about` | Origem, visão e autoria | origem e fundadora | apex + rota | completos | forte | nenhum além do host |

O problema comum é público: cada request a `https://payloadjourneylab.com/...` recebe 308 para `https://www.payloadjourneylab.com/...`, mas o HTML final aponta canonical para `https://payloadjourneylab.com/...`. Redirect e `rel=canonical` são ambos sinais fortes; combiná-los em direções opostas reduz a clareza de canonicalização. O sitemap também lista somente URLs apex, que redirecionam.

## 13. Auditoria de dados estruturados

Os blocos JSON-LD são sintaticamente válidos. A home declara um grafo com `Organization`, `WebSite` e `WebPage`; páginas temáticas declaram `WebPage` e referenciam IDs persistentes de website e organização (`lib/structured-data.ts:6-68`). Nomes, URLs, idioma e descriptions correspondem ao conteúdo público.

Pontos fortes:

- tipos conservadores e demonstráveis;
- IDs estáveis e reutilizados;
- nenhuma parceria, certificação, pessoa, curso ou resultado inventado;
- JSON seguro contra fechamento de script em `components/seo/JsonLd.tsx`.

Lacunas:

- `Organization` pode ser interpretado como entidade formal sem que a natureza jurídica seja explicitada;
- autoria textual de Valéria não se conecta a uma entidade `Person` ou propriedade de autoria;
- páginas temáticas usam `about` apontando genericamente para o LAB, não para o conceito principal específico;
- não há representação estruturada do estado `unresolved` do caso;
- não há BreadcrumbList, datas editoriais ou relações semânticas mais granulares.

Essas ausências não tornam o JSON-LD incorreto. `Person`, `BreadcrumbList`, `Course`, `Article`, `VideoObject` e `DefinedTerm` só devem ser considerados após confirmar uma entidade/conteúdo público que satisfaça cada tipo; não são recomendações automáticas.

## 14. Auditoria semântica do HTML

Cada rota possui exatamente um `h1`, `header`, `nav`, `main`, seções e `footer`. Sequências usam `<ol>` e enumerações usam `<ul>`; fatos do caso usam `<dl>`. Links são anchors reais; ações usam botões. Ícones decorativos usam `aria-hidden`; os logos têm tratamento coerente: vazio quando o link já tem nome acessível e descritivo no Footer.

O conteúdo dos cards e diagramas relevantes está no DOM. A demonstração não depende da linha ou do layout visual para existir. A USMT contém títulos, descrições e perguntas como texto. O diagrama da prática investigativa também recebe passos textuais.

Lacunas semânticas:

- `/protocol` repete “Congelar, Mapear, Detectar e Restaurar” no `h1` e no primeiro `h2`;
- `/lab`, `/ecosystem` e `/lablog` repetem ou quase repetem o título da introdução na primeira seção;
- não há `<article>` para conteúdo editorial nem `<aside>`; isso só é problema se a intenção futura exigir unidades independentes ou conteúdo tangencial;
- o menu móvel fecha por Escape e restaura foco, mas não implementa ciclo de foco modal. Como o painel não é declarado modal e permanece numa navegação curta, trata-se de melhoria, não falha grave;
- não foi executado leitor de ecrã nem auditoria automatizada de contraste/axe, portanto a nota 4 não equivale a conformidade WCAG certificada.

## 15. Auditoria pública de crawlability e HTTP

Medição realizada em 20 de julho de 2026.

### Páginas HTML

Todas as 12 rotas tiveram a mesma cadeia:

`https://payloadjourneylab.com/<rota>` → **308** → `https://www.payloadjourneylab.com/<rota>` → **200**.

| Campo | Resultado nas 12 páginas finais |
| --- | --- |
| Status | `200` |
| Content-Type | `text/html; charset=utf-8` |
| Charset | `utf-8` |
| Content-Language | ausente; o HTML entrega `lang="pt-BR"` |
| X-Robots-Tag | ausente |
| Header Link | ausente |
| Canonical no HTML | URL equivalente sem `www` |
| Meta robots | `index, follow`; Googlebot `index, follow` |
| JavaScript necessário ao conteúdo | não |

`Content-Language`, `X-Robots-Tag` e `Link` não são obrigatórios neste caso. A ausência de `X-Robots-Tag` significa que não há restrição adicional no header; regras HTML permanecem aplicáveis. Uma URL inexistente retorna 404 correto, mas herda canonical da homepage e metadata indexável; o status 404 reduz o risco de indexação, embora a sinalização seja editorialmente imprecisa.

### Redirects adicionais

| Entrada | Cadeia observada |
| --- | --- |
| `http://payloadjourneylab.com/` | 308 para HTTPS apex; 308 para HTTPS `www`; 200 |
| `http://www.payloadjourneylab.com/` | 308 para HTTPS `www`; 200 |
| `https://www.payloadjourneylab.com/` | 200 direto |
| `https://payloadjourneylab.com/usmt/` | 308 para `www` com barra; 308 para `/usmt`; 200 |
| rota inexistente | 308 para `www`; 404 |

HTTPS e remoção de barra final são estáveis. O salto duplo partindo de HTTP apex é funcional, mas pode ser condensado quando o host canônico for decidido.

### Robots público

`/robots.txt` retorna **200**, `Content-Type: text/plain`, sem charset declarado, `Content-Language`, `X-Robots-Tag` ou `Link`:

```text
User-Agent: *
Allow: /

User-Agent: OAI-SearchBot
Allow: /

User-Agent: ChatGPT-User
Allow: /

User-Agent: GPTBot
Disallow: /

Host: https://payloadjourneylab.com
Sitemap: https://payloadjourneylab.com/sitemap.xml
```

Efeito técnico separado:

- **Descoberta/inclusão em respostas:** permitida via `OAI-SearchBot`. A documentação oficial informa que este user-agent é o controle para aparecer nas respostas de busca do ChatGPT.
- **Acesso iniciado pelo utilizador:** declarado como permitido para `ChatGPT-User`; a OpenAI explica que ele é usado em certas ações solicitadas por utilizadores e não em crawling automático. A própria documentação alerta que regras de robots podem não se aplicar do mesmo modo a essas ações.
- **Treinamento:** `GPTBot` está bloqueado, sinalizando que o conteúdo não deve ser usado para treinar modelos fundacionais. A OpenAI documenta explicitamente que é possível permitir OAI-SearchBot e bloquear GPTBot.

Requests de observação com os três user-agents receberam o mesmo 308 → 200. Isso comprova ausência de bloqueio HTTP/CDN por user-agent, não que GPTBot ignoraria robots; crawlers conformes devem respeitar a política declarada.

### Sitemap público

`/sitemap.xml` retorna **200**, `Content-Type: application/xml`, sem charset no header, com declaração XML `encoding="UTF-8"`. Contém exatamente as 12 rotas e nenhuma rota inexistente. Todas as URLs são apex e, por isso, redirecionam para `www`; precisam ser alinhadas à decisão de host.

### Arquivos para agentes, feeds e manifestos

| Recurso | Status | Avaliação |
| --- | ---: | --- |
| `/llms.txt` | 404 | opcional/experimental; ausência não é erro |
| `/llms-full.txt` | 404 | opcional/experimental; ausência não é erro |
| `/feed.xml` | 404 | útil somente com publicações datadas reais |
| `/rss.xml` | 404 | idem |
| `/atom.xml` | 404 | idem |
| `/manifest.webmanifest` | 404 | não é requisito de AI-readiness |
| `/manifest.json` | 404 | não é requisito de AI-readiness |

Os 404 retornam HTML com canonical da homepage. A inexistência é correta; a canonical herdada é uma pequena lacuna de higiene.

### Local versus publicado

Não há evidência de que produção esteja noutro commit. Para cada uma das 12 rotas, o tamanho público do HTML é idêntico ao arquivo local; títulos, canonicals, idioma e contagem de `h1` coincidem. A home e `/payload-journey` contêm os mesmos nove IDs do flow; `/usmt` contém as mesmas quatro lentes. Portanto, capacidades e problemas foram atribuídos às duas camadas conforme sua origem:

- conteúdo, metadata e JSON-LD coincidem com o repositório;
- o redirect obrigatório para `www` é comportamento de publicação;
- a contradição canônica é uma integração entre `siteConfig.url` local (apex) e o host efetivo do deploy (`www`), não um defeito exclusivo de uma única camada.

## 16. Clareza conceitual e conteúdo citável

| Conceito | Página principal | Definição explícita | Clareza | Risco de ambiguidade |
| --- | --- | ---: | ---: | --- |
| Payload Journey LAB | `/` ou `/lab` | sim | alta | baixa |
| Payload Journey | `/method` e `/payload-journey` | sim, mais explícita em `/method` | alta | baixa |
| Reverse Payload Journey | `/method` | sim | alta | baixa |
| USMT | `/usmt` | sim | alta | média pela expansão do nome |
| Universal System Model Template | `/usmt` | sim | alta | média: outras fontes dizem “Modeling” |
| Operational Payload Path | `/method` | sim | alta | baixa |
| Software System Investigation | `/investigation` | sim | alta | média: prática autoral precisa de limites |
| payload tracing | `/payload-journey` | operacional, não lexical | média | média |
| Congelar | `/protocol` | sim por ação, pergunta e resultado | alta | baixa |
| Mapear | `/protocol` | sim | alta | baixa |
| Detectar | `/protocol` | sim | alta | baixa |
| Restaurar | `/protocol` | sim | alta | baixa |
| checkpoint | `/payload-journey` | sim: ponto de observação para evidência | alta | baixa |
| evidência | `/investigation` | sim no contexto da prática | alta | baixa |
| comportamento esperado | `/usmt` | relacional | alta | baixa |
| comportamento observado | `/usmt` | relacional | alta | baixa |
| investigação aplicada | `/cases` e `/lab` | contextual | média | média |
| HORA.city | `/cases` | sim, como ambiente/caso real | alta | baixa |
| LabLog | `/lablog` | sim | alta | baixa |

As melhores unidades citáveis incluem:

- Payload Journey como método de observação progressiva (`content/methods.ts:35-47`);
- Reverse Payload Journey como reconstrução reversa de uma anomalia (`content/methods.ts:75-86`);
- Operational Payload Path como instrumento operacional de Mapping (`content/methods.ts:93-105`);
- relação USMT/observado/evidência/investigação (`content/usmt.ts:141-170`);
- Software System Investigation como prática estrutural (`content/methods.ts:340-360`);
- estado atual do HORA.city (`content/hora-city.ts:115-120`).

As páginas distinguem hipótese, evidência e resultado. O caso não anuncia descoberta que não ocorreu. A principal lacuna de citabilidade é temporal: não há data pública de atualização, versão do método ou histórico editorial verificável nas páginas.

## 17. Identidade, autoridade e proveniência

O site comunica que o Payload Journey LAB é um laboratório de formação, pesquisa e investigação aplicada (`content/site.ts:35-43`), que Valéria dos Santos Reiser criou o LAB e a USMT (`content/payload-journey-lab.ts:749-758`) e que a USMT integra o trabalho metodológico do LAB (`content/payload-journey-lab.ts:760-761`). O site não inventa entidade jurídica, equipe, contrato, parceiro ou afiliação.

Os dois destinos atuais de YouTube são preservados e têm `resolutionStatus: "unresolved"` (`content/site.ts:50-55`, `176-204`). O LabLog usa `https://www.youtube.com/@PayloadJourneyLAB`; o Footer usa `https://www.youtube.com/@Lab-Log`. Uma IA deve tratá-los como canais confirmados com resolução canônica pendente, não como equivalentes já conciliados.

Pontos a melhorar no futuro:

- ligar autoria textual a dados estruturados somente com propriedades confirmadas;
- declarar, se houver decisão humana, a natureza organizacional/jurídica do LAB;
- publicar datas de criação/revisão e versões metodológicas quando relevantes;
- separar claramente fonte primária do LAB de referências externas e exemplos;
- nunca ampliar a biografia da fundadora além do que as fontes confirmarem.

## 18. Teste de extração

As respostas abaixo foram extraídas apenas do conteúdo público correspondente ao build auditado.

| Pergunta | Melhor URL | Resposta extraível | Confiança | Risco |
| --- | --- | --- | ---: | ---: |
| O que é o Payload Journey LAB? | `/lab` | laboratório de formação, pesquisa e investigação aplicada dedicado a compreender sistemas pelo fluxo da informação | alta | baixo |
| O que é Payload Journey? | `/method` | método de observação progressiva que acompanha a informação entre camadas, representações e efeitos | alta | baixo |
| O que é USMT? | `/usmt` | modelo/template estrutural que explicita estados, eventos, regras, invariantes, camadas e limites verificáveis | alta | médio pelo nome |
| Quem criou a USMT? | `/about` | Valéria dos Santos Reiser | alta | baixo |
| Quais são os 12 elementos? | `/usmt` | Descrição, Delimitação, Estados, Eventos, Transições permitidas, Transições proibidas, Invalidação, Terminação, Invariantes, Camadas, Métricas e Spec | alta | baixo |
| O que significam WHERE, HOW, LOGIC e SAFE? | `/usmt` | localizam responsabilidade; acompanham comportamento; interpretam regras; validam invariantes/limites | alta | baixo |
| Payload Journey versus Reverse Payload Journey? | `/method` | o primeiro acompanha progressivamente o percurso; o segundo parte da anomalia e reconstrói o percurso em sentido reverso | alta | baixo |
| O que é Operational Payload Path? | `/method` | instrumento de Mapping que organiza zonas, fronteiras, componentes, representações, autoridades e checkpoints | alta | baixo |
| O que significa Congelar, Mapear, Detectar e Restaurar? | `/protocol` | preservar o caso; reconstruir o caminho; localizar divergência por evidências; corrigir/validar a autoridade ou regra | alta | baixo |
| Como checkpoints são usados? | `/payload-journey` + `/protocol` | são pontos de observação para produzir e comparar evidências ao longo do flow | média-alta | médio por combinar páginas |
| O que é investigado em HORA.city? | `/cases` | anomalia temporal em `createdAt` associada ao payload `HeartCreated`, buscando a autoridade temporal | alta | baixo |
| HORA.city já foi resolvido? | `/cases` | não; está em investigação, sem origem comprovada ou restauração concluída | alta | muito baixo |
| Que formação o LAB oferece? | `/learn` | progressão prática e curso do Payload Journey LAB disponível na Udemy | alta | baixo |
| O que é o LabLog? | `/lablog` | registro público de flows, anomalias, decisões, checkpoints, mappings e desenvolvimento dos métodos | alta | baixo |
| Quem criou o LAB? | `/about` | Valéria dos Santos Reiser | alta | baixo |
| O LAB possui parceiros/clientes ativos? | `/ecosystem` | o conteúdo não confirma parceiros ou clientes ativos; apresenta públicos e possibilidades | média-alta | médio: resposta depende de ausência controlada |
| Como Payload Journey, USMT e protocolo se relacionam? | `/method` + `/usmt` | USMT modela o esperado, Payload Journey observa o real, protocolo organiza a confrontação e restauração | alta | baixo |
| Qual fonte principal de cada conceito? | rotas temáticas | método: `/method`; USMT: `/usmt`; protocolo: `/protocol`; prática: `/investigation`; caso: `/cases`; autoria: `/about` | alta | baixo |

## 19. Teste de navegação por agente

Simulação iniciada somente em `/`, usando links HTML e sem executar JavaScript:

1. `/`: identifica propósito no `h1`, descrição e entradas; abre Payload Journey.
2. `/payload-journey`: encontra estratégia, flow e os nove nós; usa continuação para USMT.
3. `/usmt`: encontra os 12 elementos, as quatro lentes e relação esperado/observado; usa continuação para protocolo.
4. `/protocol`: encontra as quatro etapas; usa a navegação global para casos.
5. `/cases`: encontra HORA.city, evidências e “Investigação em andamento”; abre `/about` pela navegação global.
6. `/about`: identifica Valéria e a autoria; abre `/learn` pela navegação global.
7. `/learn`: encontra progressão e formação; usa continuação para `/lablog`.
8. `/lablog`: encontra o conteúdo publicado e temas; regressa à home pelo link de marca/PageIntro.

**Resultado:** 8 transições, 8 páginas temáticas/home visitadas, 12 objetivos cumpridos, nenhum beco sem saída e nenhuma página órfã. Não foi necessário adivinhar URLs. As únicas ambiguidades foram escolher `/method` como definição mais explícita de Payload Journey, embora `/payload-journey` seja a página temática nominal, e interpretar “conteúdo publicado” num LabLog que hoje funciona principalmente como apresentação/canal, sem entradas editoriais datadas.

## 20. Recomendações priorizadas

### P0 — bloqueador (0)

Nenhuma.

### P1 — alta (4)

| Recomendação | Impacto | Esforço | Risco | Páginas/arquivos prováveis | Dependências e decisão humana |
| --- | --- | --- | --- | --- | --- |
| Escolher um host canônico e alinhar redirects, `siteConfig.url`, canonical, sitemap, robots e deploy | alto | médio | médio | `config/site.ts`, configuração de hosting/DNS, `app/robots.ts`, `app/sitemap.ts` | decisão humana entre apex e `www`; coordenação de deploy |
| Fixar uma única expansão oficial para USMT e corrigir todas as ocorrências | alto | baixo-médio | médio | `content/usmt.ts`, `content/methods.ts`, `content/payload-journey-lab.ts`, metadata | decisão editorial/autoral: “Model” ou “Modeling” |
| Criar uma camada pública de definições curtas e limites para os conceitos autorais, sem duplicar conteúdo | alto | médio | baixo | `/method`, `/usmt`, `/investigation`, componentes/content correspondentes | revisão da autora; incluir o que os métodos não substituem |
| Reforçar proveniência verificável e autoria, incluindo datas/versões e Schema somente onde fatos públicos sustentarem | alto | médio-alto | médio | `/about`, páginas conceituais, `lib/structured-data.ts` | decisão editorial e confirmação de dados; não inventar entidade jurídica |

### P2 — média (6)

| Recomendação | Impacto | Esforço | Risco | Páginas/arquivos prováveis | Dependências e decisão humana |
| --- | --- | --- | --- | --- | --- |
| Diferenciar os primeiros `h2` dos `h1` repetidos | médio | baixo | baixo | `/protocol`, `/lab`, `/ecosystem`, `/lablog`; componentes de seção | revisão editorial |
| Tornar o estado HORA.city também legível por máquina, sem declarar resolução | médio | médio | médio | `/cases`, `content/hora-city.ts`, possível JSON-LD adequado | escolher representação Schema comprovável |
| Melhorar links contextuais entre caso, método e protocolo | médio | baixo | baixo | `/cases`, `app/cases/page.tsx`, `CaseStudySection` | nenhuma |
| Tratar metadata da página 404 para não herdar canonical da home e `index, follow` | médio | baixo | baixo | `app/not-found.tsx` ou metadata equivalente | nenhuma |
| Explicitar natureza do LabLog e só então modelar entradas datadas | médio | médio | baixo | `/lablog`, `content/site.ts` | calendário/editorial real |
| Rever titles de `/payload-journey` e `/cases` para incluir os termos próprios, preservando legibilidade | médio | baixo | baixo | `content/routes.ts` | revisão editorial |

### P3 — opcional/experimental (3)

| Recomendação | Impacto | Esforço | Risco | Páginas/arquivos prováveis | Dependências e decisão humana |
| --- | --- | --- | --- | --- | --- |
| Avaliar `llms.txt` gerado a partir das rotas canônicas | baixo/incerto | médio | médio de desatualização | novo endpoint/arquivo somente em sprint futura | confirmar benefício e processo de geração; não é padrão fundamental |
| Criar RSS/Atom apenas quando existirem entradas públicas, datadas e estáveis do LabLog | baixo-médio | médio | baixo | LabLog e feed futuro | requer modelo editorial real |
| Avaliar `DefinedTerm`, `BreadcrumbList`, `Article`/`Course` apenas caso o conteúdo público satisfaça cada tipo | variável | médio-alto | alto se supertipado | `lib/structured-data.ts` e páginas aplicáveis | validação Schema e decisão humana por entidade |

## 21. Plano sugerido de implementação futura

1. **Decisão de identidade técnica:** escolher apex ou `www`, documentar a escolha e alinhar hosting, canonicals, sitemap e robots. Repetir requests em todas as variantes.
2. **Decisão terminológica:** aprovar a expansão oficial de USMT e um glossário mínimo autoral com definições, escopo e limites.
3. **Proveniência editorial:** definir quais páginas terão autora, data de criação, data de revisão, versão e estado editorial.
4. **Correções semânticas leves:** remover títulos repetidos, corrigir 404 e fortalecer links caso → método/protocolo.
5. **Dados estruturados orientados por fatos:** só depois das decisões anteriores, representar entidades e relações comprovadas e validar o HTML público.
6. **Camada opcional para agentes:** testar necessidade de llms/feed, geração automática e estratégia anti-desatualização antes de publicar.
7. **Regressão:** manter gates atuais e acrescentar testes de host canônico, sitemap sem redirect, 404, definições oficiais e estado `unresolved`.

## 22. Arquivos provavelmente afetados por melhorias futuras

Nenhum destes arquivos foi alterado nesta auditoria. Possíveis alvos futuros:

- `config/site.ts`
- configuração externa de domínio/hosting
- `app/layout.tsx`
- `app/robots.ts`
- `app/sitemap.ts`
- `app/not-found.tsx` ou equivalente futuro
- `content/routes.ts`
- `content/methods.ts`
- `content/usmt.ts`
- `content/hora-city.ts`
- `content/payload-journey-lab.ts`
- `content/site.ts`
- `lib/metadata.ts`
- `lib/structured-data.ts`
- `components/sections/CaseStudySection.tsx`
- `components/sections/InvestigationCycleSection.tsx`
- `components/sections/LabLogSection.tsx`
- `components/sections/AboutSection.tsx`
- verificadores em `scripts/`

## 23. Evidências principais

| Conclusão | Evidência concreta |
| --- | --- |
| 12 rotas públicas | `content/routes.ts:1-79`, `150-153`; sitemap público |
| uma fronteira Client | `components/layout/MobileNavigation.tsx:1` |
| conteúdo Server/static | `app/**/page.tsx`; build com rotas estáticas; HTML em `.next/server/app` |
| nove nós, não oito | `content/payload-journey-lab.ts:269-352`; `verify:homepage` reportou `flowNodes: 9` |
| componente único do flow | `components/sections/PayloadFlowDemoSection.tsx:21-62`; imports em home e `/payload-journey` |
| USMT 12 + quatro lentes | `content/usmt.ts:18-140`; `UsmtSection.tsx:45-107` |
| protocolo em quatro etapas | `content/methods.ts:132-235`; `/protocol` |
| HORA unresolved | `content/hora-city.ts:38-39`, `115-120`; HTML de `/cases` |
| YouTube unresolved e dois destinos | `content/site.ts:50-55`, `199-204` |
| fundadora e autoria | `content/payload-journey-lab.ts:749-758`; `/about` |
| sem parcerias ativas inventadas | `content/payload-journey-lab.ts:484-497`; `verify-homepage.mjs:279` |
| legais ausentes não renderizadas | `content/site.ts:235-238`; Footer HTML |
| LabLog editorialmente coerente | `content/routes.ts:65-70`; `content/site.ts:176-181` |
| robots deliberado | `app/robots.ts:11-23`; `/robots.txt` público |
| canonicals por rota | `lib/metadata.ts:10-28`; HTML local e público |
| host contraditório | requests públicos 308 apex → `www` e canonical entregue apex |
| JSON-LD atual | `lib/structured-data.ts:11-68`; scripts no HTML |
| acessibilidade base | `MobileNavigation.tsx:18-76`; `globals.css:119-122`, `189-200` |
| gates verdes | lint, verificadores, typecheck sequencial e build executados em 20/07/2026 |

## 24. Limitações

- A correspondência produção/commit é inferida por igualdade dos HTMLs e sinais, pois o domínio não expõe hash Git em header ou página.
- Não houve acesso a Search Console, logs do CDN, analytics ou índices privados de mecanismos de resposta.
- Requests com user-agent verificam disponibilidade HTTP, não inclusão efetiva em índices nem conformidade futura de terceiros com robots.
- Não foram usados browser visual, leitor de ecrã, axe, Lighthouse ou ferramentas adicionais, em respeito à proibição de instalar dependências.
- A auditoria não valida alegações externas sobre a autora, HORA.city, curso ou métodos; usa somente fontes do projeto e conteúdo público.
- `llms.txt` permanece experimental e não foi tratado como requisito.
- Resultados HTTP são uma fotografia de 20/07/2026 e podem mudar com o deploy.

## 25. Conclusão

**Sim, com ressalvas:** se um sistema de IA encontrar o Payload Journey LAB hoje, conseguirá compreender o que é o LAB, o que é Payload Journey, o que é a USMT, como método, protocolo e prática se relacionam, quem é a autora/criadora e quais afirmações estão confirmadas ou não resolvidas. Isso é sustentado por HTML estático completo, definições explícitas, rotas temáticas, links rastreáveis e linguagem editorial conservadora.

O caminho para “AI-ready robusto” não exige liberar treinamento nem adicionar indiscriminadamente Schema ou arquivos para LLMs. Exige primeiro coerência de host canônico, nomenclatura única da USMT, proveniência editorial verificável, escopo explícito dos conceitos e correções semânticas pontuais. A política atual de crawlers pode permanecer deliberadamente aberta para descoberta e ações do utilizador, mas fechada para treinamento.

## Resumo operacional

- **Branch:** `refactor/homepage-v0.2.0`
- **Commit:** `1ae665afa7b8c8000f4bf952d5d0adfb7ee10b3e`
- **Rotas auditadas:** 12
- **Nota geral:** 78/100
- **Classificação:** Muito AI-friendly
- **Cinco forças:** HTML estático; grafo sem órfãs; demonstração de 9 nós; USMT integral; HORA.city inequivocamente não resolvido
- **Cinco lacunas:** host canônico; nome USMT inconsistente; proveniência/datas; JSON-LD genérico; títulos semânticos repetidos
- **Recomendações:** P0 0; P1 4; P2 6; P3 3
- **Relatório:** `docs/ai-readiness/01-pjl-ai-friendliness-audit.md`
- **Aplicação modificada:** não
