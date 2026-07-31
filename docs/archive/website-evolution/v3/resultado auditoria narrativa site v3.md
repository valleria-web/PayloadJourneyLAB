# Auditoria narrativa e estrutural — Refactor V3

**Data:** 22 de julho de 2026  
**Branch:** `refactor/homepage-v0.2.0`  
**Commit:** `fc7cdbb73384030c4d6e92b39e07798dac4a2fb5`  
**Escopo:** site público, conteúdo estruturado, navegação, metadata, structured data e verificadores  
**Natureza:** diagnóstico somente; nenhuma mudança de produto implementada

## A. Resumo executivo

O site possui uma base conceitual forte, coerente e tecnicamente bem estruturada. A nova tese institucional já existe, especialmente na homepage e em `/lab`, mas ainda não governa toda a narrativa.

Diagnóstico: **clareza atual forte, porém distribuída e desigual**.

O visitante entende rapidamente que o LAB ensina Payload Tracing e propõe seguir um payload para compreender sistemas. Porém, nos primeiros 30 segundos, ainda não entende com igual clareza:

- por que essa capacidade se tornou especialmente relevante com agentes de IA;
- que o problema central é a produção de código avançando mais rápido que a compreensão;
- quais benefícios são hipóteses em investigação, e não resultados demonstrados;
- como a aprendizagem progride de um flow simples até sistemas distribuídos, requisitos, timing e contextos críticos.

A formulação mais rigorosa da tese aparece apenas depois de demonstração, método, caso e ecossistema na homepage. Em `/lab`, ela é mais completa, mas a página é longa e por vezes transforma benefícios hipotéticos em afirmações mais categóricas.

Recomendação: **Cenário 3 — refactor narrativo avançado, executado incrementalmente e sem redesign visual obrigatório**. O problema principal não é cosmético: envolve ordem da homepage, propósito das páginas, hierarquia dos claims, CTAs, terminologia, metadata e verificadores.

### Baseline técnica

- 11 rotas canônicas;
- 1 redirect permanente;
- 1 Client Component: `MobileNavigation`;
- build aprovado;
- TypeScript aprovado;
- lint aprovado sem warnings ou erros;
- `verify:foundation`, `verify:ai-readiness` e `verify:homepage` aprovados;
- 17 páginas estáticas no build;
- First Load JS de 94,3 kB nas rotas de conteúdo;
- bundle compartilhado de 87,2 kB.

## B. Mapa narrativo das páginas

Legenda:

- **E:** explícito;
- **D:** presente, mas disperso;
- **I:** implícito;
- **A:** ausente;
- **C:** contraditório.

| Superfície | Propósito e público aparente | Mensagem / problema → proposta | Evidência e CTA | Diagnóstico |
| --- | --- | --- | --- | --- |
| `/` | Entrada para estudantes e developers. | “Aprenda a seguir o payload”; codebase grande reduzida a um flow. A tese sobre IA e compreensão aparece somente na sexta seção. | Caso HORA.city como sinal de aplicação. CTAs para demo, formação, métodos e caso. | Clareza alta do método; por que agora: **D**; público: **E**; hipótese: **E**, mas tardia; repetição média. |
| `/payload-journey` | Ensino do instrumento inicial. | Não explorar arquivos aleatoriamente; escolher flow, encontrar payload, seguir transformações e decisões. | Demonstração de nove passos; CTAs para USMT e protocolo. | Muito clara e concreta. IA: **A**; público: **I**; tracing como fio condutor: **E**; repetição média com homepage. |
| `/learn` | Progressão de aprendizagem e conversão para curso. | Payload → Payload Journey → Reverse Payload Journey → Track to Origin. | Resultados pedagógicos projetados; CTA comercial para Udemy. | Progressão inicial: **E**; progressão avançada: **A**; esforço intelectual: **I**; eficácia comprovada: **A**. |
| `/cases` | Evidência de investigação aplicada. | Um flow do HORA.city torna uma codebase grande investigável. | Escala, anomalia, payload e estado da investigação; conclusão e restauração não são inventadas. | Melhor disciplina editorial do site. Evidência do método em uso: **E**; evidência de eficácia: **A**. |
| `/usmt` | Modelo esperado do sistema. | Tornar estados, eventos, regras, invariantes e limites explícitos; confrontar modelo e runtime. | Estrutura autoral com 12 elementos e quatro lentes; CTAs para Payload Journey e protocolo. | Conceitualmente forte; público: **I**; relação com IA: **A**; densidade alta. |
| `/method` | Catálogo dos cinco instrumentos. | Métodos diferentes respondem a perguntas diferentes. | Definições, finalidade, pergunta, resultado e relação com protocolo. | Distinções fortes; faltam páginas profundas e evidências de aplicação por método. |
| `/protocol` | Procedimento operacional. | Congelar → Mapear → Detectar → Restaurar. | Entradas, atividades, evidências e resultados esperados por etapa. | Muito rigoroso; pode parecer normativo antes de haver validação externa. Densidade alta. |
| `/investigation` | Definição da prática, Track Mode e Trace Engineer. | Observar antes de modificar; produzir evidência; localizar autoridade. | Modelo conceitual, sem perfil real ou caso completo concluído. CTA inicial leva diretamente ao curso. | Prática: **E**; Trace Engineer: **E** como função; profissão consolidada: **A**; CTA inicial mistura aprendizagem e conversão. |
| `/lab` | Missão, origem, autoria, piloto e visão. | IA acelera código; compreensão torna-se gargalo; autoridade humana precisa ser preservada. | Experiência da fundadora, projeto piloto e caso em curso. CTAs para USMT, método e casos. | Tese completa, mas página excessivamente longa. Claims variam entre hipótese e afirmação. |
| `/ecosystem` | Organizar formação, pesquisa, aplicação e colaboração. | Quatro áreas conectadas pelo propósito de compreender sistemas. | Atividades e resultados desejados; colaboração sem canal funcional. | Arquitetura institucional clara; evidência e próxima ação de colaboração: **A**. |
| `/lablog` | Mostrar investigação em movimento. | Registro público de flows, anomalias e desenvolvimento dos métodos. | Na página atual há temas e link externo, mas não entradas ou artefatos específicos. | Promessa maior que a evidência disponível na rota; clareza média e baixa densidade informativa. |
| Header/Footer | Orientação global. | Header privilegia Método, Aprender, Casos e LAB. Footer acrescenta LabLog. | CTA “Começar” → `/learn`; canais Udemy e YouTube. | USMT, protocolo, investigação e ecossistema ficam em segundo nível. Destinos de YouTube permanecem divergentes. |

Não existem páginas públicas próprias para Reverse Payload Journey, Operational Payload Path, Track to Origin ou Trace Engineer. Esses conceitos aparecem em `/method`, `/learn` e `/investigation`. Isso é suficiente para descoberta conceitual, mas insuficiente para definições canônicas aprofundadas.

## C. Pontos fortes a preservar

- A homepage declara explicitamente que o benefício educacional ainda é hipótese e que deve ser avaliado por casos e evidências.
- Payload é apresentado de forma concreta como fio condutor de uma operação.
- A demonstração visual conecta interação, representação, transporte, decisão, persistência e efeito.
- `/method` diferencia adequadamente método, instrumento, procedimento e prática.
- `/usmt` conecta modelo esperado e comportamento observado sem substituir tracing.
- `/lab` explica de forma clara a autoridade humana: a IA auxilia, mas direção, critérios e conclusões permanecem humanas.
- `/cases` separa fatos confirmados, estado em andamento e informações ainda desconhecidas.
- A arquitetura modular e os CTAs de continuação conectam as páginas.
- Metadata, canonical, sitemap, robots e JSON-LD estão centralizados.
- A estrutura tipada reduz deriva acidental de conteúdo.
- Os verificadores protegem H1 único, rotas, conteúdo preservado, Client Components e decisões editoriais ainda não resolvidas.

### Fontes centrais

- `content/routes.ts`;
- `content/payload-journey-lab.ts`;
- `content/methods.ts`;
- `content/usmt.ts`;
- `content/hora-city.ts`;
- `content/site.ts`;
- `types/content.ts`.

## D. Lacunas principais

### 1. “Por que agora?” aparece tarde

A homepage começa pelo método e pela demonstração. O efeito dos agentes de IA sobre a capacidade de compreensão aparece somente depois de quatro blocos intermediários.

### 2. A tese não está distribuída pelas páginas

`/payload-journey`, `/learn`, `/method`, `/protocol` e `/usmt` explicam muito bem “como”, mas pouco “por que isso importa agora”.

### 3. A progressão avançada não está ensinada

A trilha termina em Track to Origin. Sistemas distribuídos, mensagens, timing, requisitos e mission-critical aparecem apenas como visão de longo prazo em `/lab`.

### 4. Esforço e limites da aprendizagem estão implícitos

O conteúdo pode sugerir que escolher um flow simplifica a entrada, mas não deixa claro que construir um modelo mental confiável exige prática, confronto de hipóteses e conhecimento complementar.

### 5. Evidência de eficácia ainda não existe

HORA.city comprova que há um caso em investigação; não comprova redução de onboarding, produtividade, autonomia ou transferibilidade dos métodos.

### 6. LabLog não materializa a promessa na própria página

A rota afirma registrar investigação em movimento, mas mostra apenas temas e um link externo.

### 7. Colaboração não possui ação funcional

`/ecosystem` apresenta públicos e possibilidades, mas não há canal confirmado de contato.

### 8. Definições canônicas estão fragmentadas

Trace Engineering está em `/lab`; Trace Engineer em `/investigation`; Payload Tracing é demonstrado, mas não possui uma definição canônica curta e reutilizada.

## E. Contradições e redundâncias

- A homepage usa linguagem prudente — “investiga se”, “hipótese”, “não é resultado comprovado” — enquanto `/lab` afirma que estudantes estarão “mais preparados” e poderão conquistar autonomia “mais rapidamente”.
- `/lab` diz que os métodos são reproduzíveis e que o LAB pode formar outras pessoas, mas o próprio piloto define a demonstração dessa transferibilidade como objetivo futuro.
- A frase “conhecimentos [...] já não são suficientes” generaliza a formação tradicional sem evidência localizada.
- O curso promete desenvolver a visão “necessária para pensar como Trace Engineer”, enquanto o perfil ainda está em construção conceitual.
- Homepage, `/payload-journey` e `/learn` repetem flow, payload, transformação e decisão. A repetição é parcialmente pedagógica, mas falta diferenciação mais nítida entre descobrir, aprender e aprofundar.
- `/lab` acumula origem, missão, método, IA, formação, piloto, visão, compromisso e fundadora. A coerência existe, mas a densidade reduz a força de cada bloco.
- Há alternância entre português brasileiro e europeu: `arquitetura/arquitectura`, `equipes/equipas`, `objetivo/objectivo`, `atuação/actuação`, além de `developer/desenvolvedor/engenheiro`.
- `flow/fluxo`, `Mapping/mapping`, `Payload Tracing/tracing` e termos ingleses da USMT não seguem uma política editorial única.
- Header e labels acessíveis contêm formas sem acento como “Navegacao” e “inicio”.
- Existem dois destinos de YouTube ainda marcados como não resolvidos em `content/site.ts`.

## F. Claims e riscos editoriais

| Claim | Classificação | Risco |
| --- | --- | --- |
| Código pode crescer mais rapidamente que a compreensão. | Hipótese institucional apoiada por experiência interna. | Deve permanecer como observação ou tese, não como lei geral. |
| HORA.city cresceu de aproximadamente 6 mil para 40 mil linhas. | Fato documentado no repositório. | Falta fonte pública independente; apresentar como escala registrada pelo caso. |
| HORA.city perdeu observabilidade estrutural. | Observação derivada do caso. | “Perdeu” exige critério ou evidência explícita. |
| Métodos podem melhorar perguntas, autonomia e entrada em codebases. | Hipótese do LAB. | Deve usar “pode contribuir” até existir avaliação. |
| Estudantes estarão mais preparados quanto mais cedo aprenderem. | Afirmação potencialmente excessiva. | Requer enquadramento como hipótese pedagógica. |
| A formação tradicional já não é suficiente. | Claim amplo sem evidência localizada. | Reformular como lacuna que o LAB pretende investigar. |
| Método reproduzível e capacidade transferível. | Objetivo do piloto. | Não apresentar como demonstrado antes de replicação externa. |
| Trace Engineer como função investigativa. | Definição autoral válida. | Evitar sugerir profissão ou categoria de mercado consolidada. |
| Aplicação industrial e mission-critical. | Ambição futura. | Não há caso ou competência demonstrada nesse nível. |
| Redução de custos, bugs ou onboarding. | Ausente. | Preservar essa ausência até haver evidência. |
| Empregabilidade ou valor de mercado. | Ausente. | O site corretamente não reduz o LAB a empregabilidade. |

## G. Arquitetura narrativa recomendada

- **Homepage:** por que agora → para quem → dor concreta → proposta → demonstração → hipótese e evidência → caminho de aprendizagem → próxima ação.
- **`/lab`:** missão e hipótese → origem → autoridade humana/IA → estado atual → piloto → visão → autoria.
- **`/payload-journey`:** por que payload é o fio condutor e como observar uma operação.
- **`/method`:** mapa dos instrumentos, suas perguntas, limites e relações.
- **`/protocol`:** como uma investigação é executada e validada.
- **`/investigation`:** o que é Software System Investigation e quais competências compõem Trace Engineering.
- **`/learn`:** como a capacidade evolui do evento ao efeito e, depois, para sistemas distribuídos e requisitos.
- **`/cases`:** o que foi observado, quais evidências existem, o que permanece desconhecido e o que o caso ensina.
- **`/usmt`:** como explicitar o modelo esperado e confrontá-lo com runtime.
- **`/lablog`:** evidências datadas e navegáveis do trabalho em andamento.
- **`/ecosystem`:** como aprender, pesquisar, aplicar ou colaborar, com canais reais.

## H. Cenários de refactorização

### Cenário 1 — Microrefactor

**Escopo:** harmonização de prudência, idioma, títulos e CTAs.

**Benefícios:**

- baixo risco;
- execução rápida;
- corrige claims e inconsistências linguísticas mais visíveis.

**Limitações:**

- não resolve a ordem narrativa;
- não distribui a tese;
- não resolve fragmentação conceitual ou progressão pedagógica.

**Impactos:** baixo volume, impacto visual mínimo e baixo risco de SEO.

### Cenário 2 — Refactor narrativo moderado

**Escopo:** reorganização da homepage, redução de `/lab`, revisão da progressão e dos CTAs.

**Benefícios:**

- melhora a compreensão inicial;
- reduz repetição;
- aproxima aprendizagem e evidência.

**Limitações:**

- metadata, tipos e definições canônicas podem continuar parcialmente desalinhados;
- não resolve integralmente a arquitetura de conceitos.

**Impactos:** volume médio, mudanças moderadas em headings e snippets, risco controlável com matriz de preservação.

### Cenário 3 — Refactor narrativo avançado

**Escopo:** fazer a tese governar homepage, páginas, claims, metadata, conteúdo estruturado, navegação e verificadores.

**Benefícios:**

- narrativa institucional única;
- melhor distinção entre hipótese, evidência e ambição;
- progressão pedagógica explícita;
- melhor capacidade de descoberta e citação.

**Riscos:**

- maior volume editorial;
- risco de perda de conteúdo autoral;
- regressões em SEO, links, headings e testes de preservação.

**Impactos:** alto volume; não requer novo design visual, mas altera ordem, densidade, headings e sinais de SEO.

### Recomendação

Adotar o **Cenário 3**, executado em sprints pequenas e protegido por inventário e matriz de preservação. A mudança desejada atravessa arquitetura de informação, conteúdo, semântica e validação; não pode ser resolvida apenas com ajustes textuais.

## I. Plano futuro de implementação

### Sprint 0 — Contrato editorial

- aprovar tese canônica, públicos, glossário e taxonomia de claims;
- definir padrão linguístico PT-BR ou PT-PT;
- criar inventário e matriz de preservação antes de editar;
- classificar cada afirmação como fato, observação, hipótese, ambição ou conteúdo futuro.

### Sprint 1 — Homepage

- antecipar “por que agora”, público e hipótese;
- reorganizar método, demonstração e evidência como resposta à dor;
- reduzir repetição;
- alinhar CTAs à progressão do visitante.

### Sprint 2 — LAB

- separar missão, hipótese, estado atual, piloto e visão;
- reclassificar afirmações de eficácia;
- reduzir densidade sem eliminar conteúdo autoral;
- rever a posição da autoria na narrativa.

### Sprint 3 — Formação

- explicitar `evento → payload → camada → decisão → estado → efeito`;
- projetar a progressão para distribuição, mensagens, timing e requisitos;
- distinguir conteúdo disponível de trilhas futuras;
- explicitar esforço, pré-requisitos e limites pedagógicos.

### Sprint 4 — Método e prática

- criar definições canônicas de Payload Tracing, Trace Engineering e Trace Engineer;
- decidir entre seções profundas ou páginas próprias para cada método;
- explicitar que tracing conecta arquitetura, debugging e observabilidade, mas não os substitui;
- alinhar método, protocolo e prática sem sobreposição.

### Sprint 5 — Evidência

- transformar `/cases` e `/lablog` no centro de proveniência;
- adicionar datas, estado, evidências, limitações e resultados;
- preservar o estado inconclusivo da investigação HORA.city;
- definir o que constituirá evidência de transferibilidade.

### Sprint 6 — Navegação e descoberta

- rever Header, Footer, continuations e CTAs;
- resolver canal oficial de YouTube;
- definir canal de colaboração e contato;
- decidir visibilidade de USMT, protocolo e investigação.

### Sprint 7 — Metadata e validação

- alinhar titles, descriptions e JSON-LD à nova arquitetura;
- atualizar verificadores somente após aprovação do novo contrato;
- reexecutar testes de preservação, acessibilidade, responsividade e AI-readiness;
- comparar a narrativa final com esta auditoria.

## J. Ficheiros possivelmente envolvidos

### Ordem e composição

- `app/page.tsx`;
- `app/*/page.tsx`;
- `components/pages/SitePage.tsx`;
- `components/pages/PageIntro.tsx`;
- `components/pages/PageContinuation.tsx`.

### Conteúdo e contratos

- `content/payload-journey-lab.ts`;
- `content/routes.ts`;
- `content/site.ts`;
- `content/methods.ts`;
- `content/hora-city.ts`;
- `content/usmt.ts`;
- `types/content.ts`.

### Navegação e apresentação

- `components/layout/SiteHeader.tsx`;
- `components/layout/MobileNavigation.tsx`;
- `components/layout/SiteFooter.tsx`;
- `components/sections/*`.

### Metadata e entidades

- `config/site.ts`;
- `app/layout.tsx`;
- `lib/metadata.ts`;
- `lib/structured-data.ts`;
- `app/sitemap.ts`;
- `app/robots.ts`.

### Guardrails

- `scripts/verify-homepage.mjs`;
- `scripts/verify-design-foundation.mjs`;
- `scripts/verify-ai-readiness.mjs`.

## K. Decisões humanas necessárias

1. Qual é o texto canônico e o estatuto formal da nova tese?
2. Qual é o público primário e qual a ordem entre estudantes, juniors e profissionais experientes?
3. Trace Engineer é função, perfil emergente, programa formativo ou aspiração profissional?
4. Quais evidências públicas sustentam o caso e a história da fundadora?
5. Qual é o marco inicial e a atualidade de “seis meses para demonstrar”?
6. O padrão editorial será PT-BR ou PT-PT?
7. Qual deve ser o peso comercial da Udemy na jornada institucional?
8. Devem existir páginas próprias para métodos e Trace Engineer?
9. Qual é o canal oficial de YouTube?
10. Qual canal deve sustentar colaboração e contato?
11. “Sistemas críticos” e “mission-critical” devem permanecer antes de haver aplicação demonstrada?
12. Quais resultados do piloto autorizariam declarar transferibilidade?

## L. Limitações da auditoria

- Não foi realizada validação externa das afirmações biográficas ou institucionais.
- A escala e o estado do caso HORA.city foram tratados como fatos documentados pelo próprio repositório, não como fatos independentemente verificados.
- Não foi executada certificação formal WCAG ou teste completo com leitor de tela real.
- O host público e a infraestrutura de produção não foram auditados nesta etapa.
- Não foram avaliados dados internos do Google Analytics, Udemy ou YouTube.
- Conteúdos futuros preservados no código foram distinguidos de conteúdo atualmente renderizado.

## Conclusão

O site já contém quase todos os elementos da nova tese, mas eles ainda não formam uma narrativa única e progressiva.

O refactor V3 deve priorizar:

1. ordem narrativa;
2. estatuto dos claims;
3. progressão pedagógica;
4. definições canônicas;
5. evidência e proveniência;
6. coerência entre conteúdo, metadata e verificadores.

O sistema visual pode ser amplamente preservado. A necessidade demonstrada é predominantemente narrativa, editorial e estrutural.

**Decisão recomendada:** aprovar o Cenário 3 como direção, definir primeiro o contrato editorial e somente depois autorizar alterações no site.
