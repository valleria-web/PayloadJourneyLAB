# Sprint 7 — Metadata, Structured Data e Validação Final

Execute a Sprint 7 do Refactor Narrativo V3 do Payload Journey LAB.

Esta é a sprint final do ciclo principal de refactorização.

O objetivo é consolidar tecnicamente a arquitetura narrativa implementada nas Sprints 1–6, garantindo que:

* títulos e descrições representem corretamente cada página;
* metadata e conteúdo visível não apresentem mensagens divergentes;
* structured data descreva somente entidades e conteúdos realmente existentes;
* sitemap, robots, canonical e redirects estejam coerentes;
* todos os verificadores funcionem como um conjunto integrado de guardrails;
* artefatos temporários sejam tratados corretamente;
* todas as 11 rotas sejam validadas editorial, técnica, visual e semanticamente;
* nenhuma hipótese seja promovida a fato;
* nenhuma ambição futura seja apresentada como competência atual.

A Sprint 7 não deve introduzir uma nova narrativa.

Ela deve proteger e finalizar a narrativa já aprovada.

# Gate obrigatório

Antes de qualquer alteração, leia integralmente:

* `docs/sprints para v3/Sprint 0 - Contrato Editorial e Mapa de Preservacao e Migracao.md`;
* `docs/sprints para v3/decisoes humanas.md`;
* `docs/sprints para v3/Sprint 1 - Homepage.md`;
* `docs/sprints para v3/Sprint 2 - LAB.md`;
* `docs/sprints para v3/Sprint 3 - Formacao e Progressao Pedagogica.md`;
* `docs/sprints para v3/Sprint 4 - Metodo e Pratica Investigativa.md`;
* `docs/sprints para v3/Sprint 5 - Casos Evidencias e Proveniencia.md`;
* `docs/sprints para v3/Sprint 6 - Navegacao Canais e Descoberta.md`;
* o plano aprovado da Sprint 7, caso já exista;
* `config/site.ts`;
* `content/routes.ts`;
* `content/site.ts`;
* `lib/metadata.ts`;
* `lib/structured-data.ts`;
* `app/sitemap.ts`;
* `app/robots.ts`;
* `next.config.mjs`;
* todos os verificadores existentes;
* `package.json`;
* `.gitignore`;
* artefatos temporários ou de captura existentes no repositório.

Não implemente a Sprint 7 se:

* a Sprint 6 não estiver concluída e aprovada;
* existirem alterações não atribuídas no worktree;
* houver divergência entre documentos aprovados e implementação atual;
* uma rota canônica estiver ausente;
* algum canal externo for apresentado como oficial sem decisão confirmada;
* ou a sprint exigir inventar entidades, datas, resultados ou evidências.

Nesse caso, documente o bloqueio e não altere implementação.

# Documento obrigatório

Crie:

`docs/sprints para v3/Sprint 7 - Metadata Structured Data e Validacao Final.md`

O documento deve registrar:

* baseline;
* branch e commits;
* documentos lidos;
* inventário das 11 rotas;
* metadata anterior e final;
* structured data anterior e final;
* canonical;
* sitemap;
* robots;
* redirects;
* canais externos;
* verificadores consolidados;
* artefatos temporários;
* arquivos alterados;
* validações técnicas;
* validações editoriais;
* validações visuais;
* performance;
* acessibilidade;
* limitações;
* pendências pós-refactor;
* resultado final do ciclo V3.

# Objetivo da Sprint 7

Ao final, deve ser possível responder:

1. Cada rota possui título e descrição próprios?
2. A metadata corresponde ao conteúdo realmente renderizado?
3. O público e o propósito de cada página estão claros?
4. Claims de hipótese continuam condicionais?
5. Conteúdos futuros continuam identificados como futuros?
6. O canonical de cada página está correto?
7. O sitemap contém apenas rotas públicas válidas?
8. Robots está coerente com o ambiente público?
9. Redirects apontam para destinos e âncoras existentes?
10. Structured data descreve somente entidades reais?
11. Fundadora, LAB, páginas, casos e conteúdos estão tipados corretamente?
12. Os canais externos estão confirmados ou ocultos?
13. Todos os verificadores passam juntos?
14. Existem verificações redundantes, contraditórias ou frágeis?
15. O repositório contém artefatos temporários desnecessários?
16. As 11 rotas continuam acessíveis e responsivas?
17. O refactor alterou significativamente First Load JS?
18. O site está pronto para deploy e validação pública?
19. Quais claims ainda não podem ser publicados?
20. Que trabalho fica fora do Refactor V3?

# Escopo autorizado

A Sprint 7 pode alterar:

* metadata das 11 rotas;
* metadata compartilhada;
* Open Graph;
* Twitter metadata;
* canonical;
* JSON-LD;
* structured data;
* sitemap;
* robots;
* redirects;
* configurações centrais relacionadas;
* verificadores;
* scripts npm;
* `.gitignore`;
* organização de evidências técnicas;
* documentação;
* microajustes editoriais estritamente necessários para alinhar conteúdo e metadata;
* correções técnicas de links, headings, labels ou IDs encontradas durante a validação final.

Pode alterar rotas ou componentes já aprovados somente quando houver:

* contradição comprovada;
* erro de metadata;
* link quebrado;
* heading inválido;
* claim incompatível com o contrato;
* acessibilidade quebrada;
* overflow;
* ou regressão causada pelo refactor.

Toda alteração editorial deve ser mínima e documentada.

# Fora de escopo

Não:

* criar nova narrativa;
* criar novas rotas;
* criar novos métodos;
* criar novos casos;
* criar entradas LabLog;
* criar novo canal social;
* criar formulário de colaboração;
* resolver YouTube por inferência;
* criar newsletter;
* adicionar CMS;
* criar autenticação;
* criar analytics novos;
* adicionar trackers;
* redesenhar páginas;
* alterar a tese central;
* promover Trace Engineer a profissão;
* declarar transferibilidade;
* declarar eficácia;
* apresentar mission-critical como competência atual;
* criar schema.org não sustentado pelo conteúdo;
* executar deploy sem autorização explícita.

# Arquitetura canônica das 11 rotas

Confirme as rotas públicas reais:

1. `/`
2. `/payload-journey`
3. `/learn`
4. `/cases`
5. `/usmt`
6. `/method`
7. `/protocol`
8. `/investigation`
9. `/lab`
10. `/ecosystem`
11. `/lablog`

Confirmar também:

* redirect `/about`;
* destino `/lab#sobre`;
* âncoras `/lab#pilot` e `/lab#founder`;
* nenhuma rota nova criada nas Sprints 1–6;
* nenhuma rota órfã;
* nenhuma rota pública ausente do sitemap sem justificativa.

# Matriz obrigatória de metadata

Crie uma matriz para as 11 rotas com:

* rota;
* função narrativa;
* público;
* H1;
* title;
* metadata description;
* Open Graph title;
* Open Graph description;
* Twitter title;
* Twitter description;
* canonical;
* tipo de página;
* entidade principal;
* claims presentes;
* status;
* fonte;
* validação.

Metadata não deve repetir automaticamente o mesmo texto em todas as páginas.

Ela deve refletir a pergunta principal de cada rota.

# Metadata recomendada por rota

As formulações podem ser microajustadas para respeitar limites, padrões existentes e o conteúdo real.

## Homepage `/`

### Title recomendado

`Payload Journey LAB — Compreender sistemas pelo flow`

### Description recomendada

`Laboratório de Software System Investigation que pesquisa como flow, payload tracing, modelagem, checkpoints e evidências de runtime podem ajudar estudantes e developers a compreender codebases complexas.`

Deve comunicar:

* LAB;
* problema;
* público;
* abordagem;
* hipótese prudente.

Não declarar eficácia.

## `/payload-journey`

### Title recomendado

`Payload Journey — Siga o payload, entenda o sistema`

### Description recomendada

`Aprenda a seguir uma operação por eventos, payloads, camadas, decisões, estados e efeitos observáveis para construir uma compreensão progressiva do sistema.`

## `/learn`

### Title recomendado

`Aprender Software System Investigation — Payload Journey LAB`

### Description recomendada

`Aprenda progressivamente a seguir flows, payloads, decisões e evidências de runtime, do primeiro evento à investigação estruturada de sistemas de software.`

Não apresentar os níveis futuros como formação disponível.

## `/cases`

### Title recomendado

`Casos e Evidências — Payload Journey LAB`

### Description recomendada

`Explore casos reais do LAB com flows, estados, hipóteses, evidências, limitações e conclusões proporcionais ao que foi observado.`

Não mencionar múltiplos casos se apenas um estiver publicado, salvo uso genérico da página como registro.

## `/usmt`

### Title recomendado

`USMT — Modelo esperado de sistemas de software`

### Description recomendada

`Use a USMT para explicitar estados, eventos, transições, regras, invariantes e limites e confrontar o modelo esperado com o comportamento observado.`

## `/method`

### Title recomendado

`Métodos do Payload Journey LAB`

### Description recomendada

`Conheça os instrumentos do LAB e as perguntas que Payload Journey, USMT, Reverse Payload Journey, Operational Payload Path e Track to Origin ajudam a investigar.`

## `/protocol`

### Title recomendado

`Congelar, Mapear, Detectar e Restaurar`

### Description recomendada

`Conheça o protocolo do LAB para delimitar flows, preservar comportamentos, produzir evidências, localizar divergências e validar restaurações.`

Não afirmar garantia de causa raiz.

## `/investigation`

### Title recomendado

`Software System Investigation e Trace Engineering`

### Description recomendada

`Compreenda a prática que combina modelagem, payload tracing, checkpoints, runtime e evidências para explicar como operações se transformam em decisões e estados.`

Não apresentar Trace Engineer como profissão consolidada.

## `/lab`

### Title recomendado

`Sobre o Payload Journey LAB`

### Description recomendada

`Conheça a missão, a origem e a construção do Payload Journey LAB, um laboratório autoral de formação, pesquisa metodológica e investigação aplicada em sistemas de software.`

Uma segunda frase pode mencionar a hipótese, se compatível com os limites da metadata.

## `/ecosystem`

### Title recomendado

`Ecossistema do Payload Journey LAB`

### Description recomendada

`Conheça como o LAB conecta formação, pesquisa metodológica, investigação aplicada, casos e futuras possibilidades de colaboração.`

Não apresentar colaboração como disponível sem canal funcional.

## `/lablog`

### Title recomendado

`LabLog — Investigação em andamento`

### Description recomendada

`Acompanhe o espaço destinado a registros datados de investigação, checkpoints, hipóteses, decisões e evidências do Payload Journey LAB.`

Como não existem entradas estruturadas, a descrição não deve sugerir histórico já publicado.

# Limites técnicos de metadata

Verificar:

* comprimento de titles;
* comprimento de descriptions;
* repetição;
* truncamento;
* caracteres especiais;
* PT-BR;
* canonical absoluto;
* consistência entre metadata e H1;
* ausência de claims extras;
* ausência de paths locais;
* ausência de caracteres corrompidos.

Não otimizar apenas por contagem de caracteres.

Priorize precisão.

# Open Graph e Twitter

Verificar:

* título;
* descrição;
* URL;
* site name;
* locale;
* tipo;
* imagem, somente se existir artefato aprovado;
* alt da imagem;
* dimensões;
* origem;
* consistência entre rotas.

Não:

* inventar imagem;
* usar imagem pessoal sem autorização;
* utilizar screenshot temporário;
* usar caminho local;
* declarar `article` em página que não é artigo;
* declarar datas sem fonte.

Se houver apenas uma imagem global aprovada:

* reutilize-a;
* documente a decisão;
* não simule imagens específicas de cada rota.

# Canonical

Cada rota deve possuir canonical próprio e absoluto.

Confirmar:

* domínio oficial;
* HTTPS;
* ausência de barra inconsistente;
* nenhuma canonical apontando para homepage por engano;
* `/about` não deve possuir canonical concorrente;
* redirect permanente deve convergir para `/lab#sobre` ou `/lab`, conforme a implementação real;
* hashes não devem ser usados como canonical de páginas independentes.

# Sitemap

Auditar `app/sitemap.ts`.

O sitemap deve:

* incluir as 11 rotas canônicas públicas;
* excluir redirect `/about`;
* excluir paths temporários;
* excluir arquivos de evidência;
* excluir rotas inexistentes;
* utilizar domínio oficial;
* utilizar datas somente quando confiáveis;
* evitar prioridades ou frequências inventadas;
* não incluir anchors;
* não incluir links externos.

Se `lastModified` não possuir fonte confiável, utilize uma política conservadora ou omita.

Documente a decisão.

# Robots

Auditar `app/robots.ts`.

Confirmar:

* ambiente de produção;
* permissões;
* sitemap;
* ausência de bloqueio acidental das rotas;
* ausência de referência local;
* ausência de regras desnecessárias;
* ausência de caminhos privados inexistentes.

Não criar regras apenas por aparência de completude.

# Redirects

Auditar `next.config.mjs`.

Confirmar:

* `/about`;
* status permanente;
* destino;
* âncora;
* ausência de loop;
* ausência de redirect chain;
* compatibilidade com navegação e canonical.

Registrar qualquer redirect adicional encontrado.

Não criar novos redirects sem necessidade real.

# Structured data

Auditar `lib/structured-data.ts`, componentes JSON-LD e entidades.

# Princípio de structured data

`Structured data deve descrever o conteúdo real da página, não a ambição futura do LAB.`

# Entidades permitidas

## WebSite

Permitido para o site geral.

Deve incluir apenas:

* nome;
* URL;
* descrição;
* idioma;
* publisher ou creator, quando sustentado;
* referências reais.

Não criar `SearchAction` sem busca interna real.

## WebPage

Permitido para cada rota.

Deve refletir:

* nome;
* descrição;
* URL;
* `isPartOf`;
* `about`, quando apropriado;
* idioma.

## Person

Permitido para a fundadora.

Pode conter somente informações públicas, confirmadas e necessárias:

* nome;
* papel;
* URL institucional;
* `sameAs`, somente URLs confirmadas;
* autoria da USMT e do LAB, quando representável e sustentado.

Não incluir:

* dados privados;
* endereço;
* idade;
* informações familiares;
* claims profissionais não demonstrados.

## Organization

Não criar ou preservar automaticamente uma entidade `Organization` se esse estatuto não estiver aprovado no contrato editorial.

Caso exista atualmente:

* audite;
* determine se descreve corretamente o LAB;
* mantenha somente se o documento da Sprint 0 autorizar;
* caso contrário, remova ou substitua por estrutura mais prudente.

## CollectionPage

Pode ser usado em:

* `/cases`;
* `/lablog`;

somente quando representar corretamente uma coleção real.

Como `/lablog` possui zero entradas estruturadas:

* não criar `ItemList` vazio artificialmente;
* não criar `Blog` com publicações inexistentes;
* usar `CollectionPage` somente se semanticamente justificável.

## ItemList

Somente para itens reais publicados.

Em `/cases`, pode conter HORA.city se realmente renderizado como caso.

Não incluir casos futuros.

## Course

Pode ser utilizado somente se:

* o curso real estiver descrito no site;
* URL e provider forem confirmados;
* conteúdo corresponder ao curso existente;
* não houver claims de certificação ou resultado não demonstrado.

Não é obrigatório introduzir `Course` nesta sprint.

Audite antes de decidir.

## Article ou BlogPosting

Somente para entradas reais completas e datadas.

Como não há LabLogs estruturados, não criar.

# IDs canônicos em JSON-LD

Centralizar e verificar IDs como:

* `/#website`;
* `/lab#founder`;
* IDs de páginas;
* IDs de casos, quando aplicável.

Confirmar:

* ausência de duplicação;
* ausência de IDs locais;
* URLs absolutas;
* referências válidas;
* consistência entre `@id`, `url` e canonical.

# HORA.city

Structured data do caso deve ser prudente.

Pode representar:

* item de uma coleção;
* caso de investigação;
* CreativeWork, se semanticamente adequado;
* ou apenas conteúdo da WebPage.

Não declarar:

* estudo científico;
* pesquisa validada;
* software auditado externamente;
* resultado comprovado;
* eficácia do método.

# Canais externos

Conservar as decisões da Sprint 6:

## YouTube

* permanecer oculto enquanto não houver URL canônica confirmada;
* não incluir em `sameAs`;
* não incluir em Footer;
* não incluir em JSON-LD;
* não escolher por inferência.

## LinkedIn institucional

Usar apenas se URL confirmada.

Pode aparecer em:

* canais institucionais;
* `sameAs` do LAB, somente se entidade adequada existir.

## LinkedIn pessoal

Usar apenas no contexto da fundadora.

Pode aparecer em:

* `sameAs` da Person;
* seção da fundadora.

Não confundir com o LAB.

## Udemy

Permanece canal formativo secundário.

Pode aparecer:

* em `/learn`;
* Footer;
* eventualmente structured data de curso, se confirmado.

O HTTP 403 automatizado deve continuar registrado como limitação de validação, não como link inválido.

## Colaboração

Sem CTA ou structured data de contato enquanto não houver canal funcional.

# Limpeza de artefatos temporários

Auditar:

* `.tmp/`;
* capturas;
* backups;
* diretórios `before-reconstruction`;
* ficheiros temporários;
* outputs de scripts;
* artefatos não rastreados;
* caminhos locais;
* caches;
* evidências intermediárias.

# Regra

Distinguir:

## Evidência que deve permanecer

* documentos finais das sprints;
* capturas finais necessárias para auditoria;
* relatórios;
* artefatos explicitamente referenciados;
* evidências com função documental.

## Artefato temporário

* cópias intermediárias;
* capturas inválidas;
* backups reproduzíveis;
* outputs não referenciados;
* ficheiros gerados apenas para comparação local;
* conteúdo duplicado.

Artefatos temporários devem ser:

* removidos;
* movidos para local adequado;
* ou ignorados com regra proporcional no `.gitignore`.

Não adicionar regra ampla que esconda evidências importantes.

# Diretório `.tmp/sprint6-before-reconstruction`

Resolver explicitamente:

1. identificar se está versionado;
2. identificar se é referenciado no documento da Sprint 6;
3. verificar se contém evidência única;
4. decidir preservar, mover, remover ou ignorar;
5. registrar a decisão.

Se os arquivos forem apenas reconstruções reproduzíveis:

* removê-los;
* ou ignorar `.tmp/`, caso não existam evidências legítimas no diretório.

Se contiverem evidência necessária:

* mover para diretório documental claro;
* preservar somente o mínimo;
* atualizar referências.

# Consolidação dos verificadores

Inventariar:

* `verify:foundation`;
* `verify:ai-readiness`;
* `verify:homepage`;
* `verify:lab`;
* `verify:learn`;
* `verify:method-practice`;
* `verify:cases-evidence`;
* `verify:navigation-discovery`;
* outros scripts.

Para cada verificador, registrar:

* escopo;
* rotas;
* invariantes;
* sobreposição;
* fragilidade;
* custo;
* dependências;
* decisão.

# Objetivo

Os verificadores devem formar uma pirâmide clara:

## Fundação

Estrutura, rotas, server-first, H1, links, componentes e dependências.

## AI-readiness

Contratos editoriais, entidades, proveniência e legibilidade por agentes.

## Específicos por área

* homepage;
* LAB;
* learn;
* method-practice;
* cases-evidence;
* navigation-discovery.

## Validação final integrada

Criar um novo verificador:

`scripts/verify-refactor-v3.mjs`

Adicionar:

`verify:refactor-v3`

Esse verificador não deve duplicar todos os testes.

Ele deve:

* executar ou coordenar os verificadores existentes;
* validar coerência transversal;
* confirmar as 11 rotas;
* confirmar metadata;
* confirmar canonical;
* confirmar sitemap;
* confirmar robots;
* confirmar redirects;
* confirmar JSON-LD;
* confirmar canais;
* confirmar ausência de claims proibidos;
* confirmar ausência de paths locais;
* confirmar ausência de novas rotas;
* confirmar ausência de dados sensíveis;
* confirmar ausência de artefatos temporários não autorizados;
* produzir resumo final.

Pode utilizar subprocessos Node, desde que seja simples e portável para o ambiente existente.

Não adicionar dependência.

# Invariantes editoriais transversais

O verificador final deve proteger:

* código e compreensão;
* público prioritário;
* Payload Journey como entrada;
* hipótese pedagógica;
* autoridade humana;
* aplicação diferente de eficácia;
* Trace Engineer como função em desenvolvimento;
* transferibilidade ainda não demonstrada;
* sistemas distribuídos e mission-critical como futuros;
* HORA.city como caso interno;
* zero evidências externas enquanto isso permanecer verdadeiro;
* ausência de empregabilidade garantida;
* ausência de redução comprovada de onboarding;
* ausência de certificação;
* ausência de profissão consolidada.

Não proteja textos completos palavra por palavra.

Proteja conceitos, estados e ausência de claims proibidos.

# Validação editorial das 11 rotas

Para cada rota, registrar:

* H1;
* pergunta principal;
* público;
* status dos claims;
* CTA principal;
* CTA secundário;
* continuidade;
* metadata;
* structured data;
* canonical;
* presença no sitemap;
* profundidade;
* coerência.

A rota deve responder à função definida nas sprints:

## `/`

Por que agora, para quem e qual capacidade.

## `/payload-journey`

Por que o payload é o fio condutor.

## `/learn`

Como a capacidade é desenvolvida progressivamente.

## `/cases`

Que casos, evidências e limitações existem.

## `/usmt`

Como explicitar o modelo esperado.

## `/method`

Que instrumentos existem.

## `/protocol`

Como uma investigação é executada.

## `/investigation`

O que é a prática e quais capacidades exige.

## `/lab`

Missão, origem, construção e compromisso.

## `/ecosystem`

Como formação, pesquisa, aplicação e colaboração se conectam.

## `/lablog`

Como o trabalho investigativo pode ser registrado no tempo.

# Validação de acessibilidade

Executar validação final de:

* landmarks;
* H1 único;
* headings;
* foco;
* navegação por teclado;
* menu mobile;
* Escape;
* retorno de foco;
* `aria-current`;
* labels;
* links;
* contraste;
* zoom equivalente a 200%;
* status não dependentes apenas de cor;
* CTAs compreensíveis;
* Footer;
* âncoras;
* skip link, se existir.

Não declarar conformidade WCAG total sem auditoria específica.

Formulação permitida:

`Os critérios de acessibilidade definidos para o refactor foram validados.`

# Validação responsiva

Validar as 11 rotas em:

* 320 px;
* 375 px;
* 768 px;
* 1024 px;
* 1440 px.

Total potencial:

55 combinações.

Pode utilizar estratégia automatizada e amostragem visual, desde que:

* todas as combinações tenham métricas;
* as rotas principais possuam capturas;
* qualquer falha seja reproduzível;
* `scrollWidth === clientWidth`;
* não exista overflow;
* Header, Footer e continuidade sejam verificados;
* cards e timelines sejam legíveis;
* estados futuros sejam claros;
* nenhuma informação essencial desapareça.

# Validação técnica

Executar sequencialmente:

```powershell
npm.cmd run lint
npx.cmd tsc --noEmit
npm.cmd run build
npm.cmd run verify:foundation
npm.cmd run verify:ai-readiness
npm.cmd run verify:homepage
npm.cmd run verify:lab
npm.cmd run verify:learn
npm.cmd run verify:method-practice
npm.cmd run verify:cases-evidence
npm.cmd run verify:navigation-discovery
npm.cmd run verify:refactor-v3
```

Não executar builds concorrentes sobre `.next`.

Registrar:

* comando;
* duração;
* resultado;
* warnings;
* falhas;
* correções.

Warnings preexistentes devem permanecer documentados se estiverem fora do escopo.

# Validação de produção

A Sprint 7 não deve realizar deploy sem autorização explícita.

Distinguir:

## Pronto para deploy

* build passa;
* verificadores passam;
* rotas funcionam localmente;
* metadata renderiza;
* structured data é válido na fonte;
* layout foi observado.

## Validado em produção

Somente após:

* deploy;
* acesso ao domínio público;
* verificação de canonical;
* sitemap;
* robots;
* redirects;
* cards sociais;
* links externos;
* comportamento público.

Se não houver deploy, concluir:

`Refactor V3 validado localmente e pronto para deploy. Validação pública permanece pendente.`

# Validação externa pós-deploy recomendada

Registrar como trabalho posterior:

* abrir as 11 rotas públicas;
* validar canonical renderizado;
* validar sitemap público;
* validar robots público;
* testar `/about`;
* testar `/lab#pilot`;
* testar `/lab#founder`;
* testar Open Graph;
* testar Twitter cards;
* testar JSON-LD em ferramenta apropriada;
* confirmar LinkedIn institucional;
* confirmar Udemy manualmente;
* resolver YouTube;
* observar erros de console;
* verificar performance pública;
* verificar analytics, apenas se já existir;
* verificar cache e headers.

Não executar essas tarefas nesta sprint sem autorização e deploy.

# Performance

Comparar:

* First Load JS das 11 rotas;
* shared JS;
* Client Components;
* dependências;
* tamanho de build;
* páginas estáticas;
* regressões.

Objetivo:

* nenhuma nova dependência;
* nenhuma nova client boundary;
* nenhuma regressão material;
* metadata e JSON-LD server-first;
* nenhuma imagem pesada;
* nenhum widget externo.

Registrar qualquer variação.

# Segurança e privacidade

Auditar:

* paths locais;
* emails;
* tokens;
* segredos;
* device IDs;
* IPs;
* URLs privadas;
* logs;
* dados pessoais;
* metadata;
* JSON-LD;
* screenshots;
* documentos;
* links.

Confirmar:

* ausência de credenciais;
* ausência de informações privadas;
* ausência de caminhos `C:\`;
* ausência de `/Users/`;
* ausência de localhost no conteúdo público;
* ausência de artefatos sensíveis versionados.

# Política linguística

Executar auditoria final de PT-BR nas áreas alteradas pelas Sprints 1–6.

Mapear ocorrências restantes de:

* objectivo;
* actuação;
* arquitectura;
* equipa;
* direcção;
* navegação sem acento;
* início sem acento;
* seleccionar;
* detectar, quando a forma estiver em contexto divergente;
* outras variantes PT-PT.

Não realizar substituição cega.

Preservar:

* citações;
* nomes técnicos;
* documentos históricos;
* textos não renderizados quando a alteração puder corromper evidência.

Corrigir somente conteúdo público e contratos editoriais ativos quando seguro.

# Auditoria de consistência terminológica

Verificar:

* Payload Journey;
* Payload Tracing;
* Software System Investigation;
* Trace Engineering;
* Trace Engineer;
* USMT;
* Operational Payload Path;
* Reverse Payload Journey;
* Track to Origin;
* Track Mode;
* flow;
* runtime;
* checkpoint;
* causalidade;
* autoridade;
* evidência;
* restauração;
* mission-critical;
* requirements-to-runtime traceability.

Confirmar:

* capitalização;
* definição;
* uso;
* ausência de variantes conflitantes;
* ausência de redefinição entre páginas.

# Arquivos previstos

A lista real deve surgir da auditoria.

Possíveis alterações:

* `config/site.ts`;
* `content/routes.ts`;
* `content/site.ts`;
* `lib/metadata.ts`;
* `lib/structured-data.ts`;
* `app/sitemap.ts`;
* `app/robots.ts`;
* `next.config.mjs`;
* `package.json`;
* `.gitignore`;
* `scripts/verify-refactor-v3.mjs`;
* verificadores existentes;
* metadata de páginas;
* documentos;
* arquivos de evidência.

Não alterar todos por padrão.

Alterar somente os necessários.

# Auditoria de escopo

Ao final, confirmar:

* nenhuma nova rota;
* nenhuma nova dependência;
* nenhuma reestruturação narrativa ampla;
* nenhuma nova claim;
* nenhuma nova entidade não aprovada;
* nenhuma antecipação de trabalho futuro;
* nenhuma resolução inferida de YouTube;
* nenhuma criação de colaboração;
* nenhuma evidência externa inventada;
* nenhum deploy não autorizado.

# Critérios de conclusão

A Sprint 7 estará concluída quando:

* as 11 rotas possuírem metadata coerente;
* Open Graph e Twitter estiverem alinhados;
* canonical estiver correto;
* sitemap estiver correto;
* robots estiver correto;
* redirects estiverem válidos;
* JSON-LD descrever somente conteúdo real;
* Person e outras entidades estiverem prudentes;
* YouTube permanecer oculto se não confirmado;
* LinkedIn pessoal e institucional estiverem diferenciados;
* Udemy continuar como canal secundário;
* artefatos temporários estiverem resolvidos;
* `.tmp/sprint6-before-reconstruction` possuir decisão documentada;
* verificadores estiverem consolidados;
* `verify:refactor-v3` passar;
* as 11 rotas estiverem editorialmente coerentes;
* acessibilidade definida estiver validada;
* 55 combinações responsivas estiverem verificadas;
* links e âncoras estiverem válidos;
* performance estiver preservada;
* segurança e privacidade estiverem auditadas;
* PT-BR estiver consistente nas áreas ativas;
* o documento final estiver completo;
* o site estiver pronto para deploy;
* validação pública estiver declarada como pendente se não houver deploy.

# Resposta final do Codex

Ao concluir, apresente:

1. caminho do documento da Sprint 7;
2. branch;
3. commit inicial e final;
4. confirmação da leitura das Sprints 0–6;
5. quantidade de rotas auditadas;
6. resumo da metadata final;
7. resumo de Open Graph e Twitter;
8. resultado da auditoria de canonical;
9. resultado do sitemap;
10. resultado de robots;
11. resultado dos redirects;
12. entidades JSON-LD preservadas, alteradas ou removidas;
13. decisão sobre `Organization`;
14. decisão sobre `CollectionPage`, `ItemList`, `Course` e `Article`;
15. decisão sobre YouTube;
16. decisão sobre LinkedIn;
17. decisão sobre Udemy;
18. decisão sobre colaboração;
19. decisão sobre `.tmp/sprint6-before-reconstruction`;
20. artefatos removidos, movidos ou ignorados;
21. verificadores consolidados;
22. resultado de `verify:refactor-v3`;
23. resultado de lint;
24. resultado de TypeScript;
25. resultado de build;
26. resultado de todos os verificadores;
27. resultado da auditoria de links;
28. resultado da validação editorial;
29. resultado da validação de acessibilidade;
30. resultado das 55 combinações responsivas;
31. impacto em First Load JS;
32. resultado da auditoria de segurança e privacidade;
33. limitações;
34. pendências pós-deploy;
35. confirmação de que nenhuma nova sprint foi iniciada.

Status final:

`Sprint 7 concluída. Refactor Narrativo V3 validado localmente e pronto para deploy. Validação pública pós-deploy permanece pendente.`
