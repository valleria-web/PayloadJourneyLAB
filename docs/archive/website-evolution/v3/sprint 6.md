# Sprint 6 — Navegação, Canais e Descoberta

Execute a Sprint 6 do Refactor Narrativo V3 do Payload Journey LAB.

Esta sprint deve consolidar a arquitetura global de navegação, continuidade entre páginas, canais oficiais e caminhos de descoberta do site.

O objetivo é garantir que a narrativa construída nas Sprints 1–5 possa ser percorrida de forma clara, previsível e coerente.

A Sprint 6 não deve reescrever novamente as páginas já consolidadas. Ela deve conectar essas páginas.

# Gate obrigatório

Antes de qualquer alteração, leia integralmente:

* `docs/sprints para v3/Sprint 0 - Contrato Editorial e Mapa de Preservacao e Migracao.md`;
* `docs/sprints para v3/decisoes humanas.md`;
* `docs/sprints para v3/Sprint 1 - Homepage.md`;
* `docs/sprints para v3/Sprint 2 - LAB.md`;
* `docs/sprints para v3/Sprint 3 - Formacao e Progressao Pedagogica.md`;
* `docs/sprints para v3/Sprint 4 - Metodo e Pratica Investigativa.md`;
* `docs/sprints para v3/Sprint 5 - Casos Evidencias e Proveniencia.md`;
* o plano aprovado da Sprint 6, caso já exista;
* `content/site.ts`;
* `content/routes.ts`;
* componentes atuais de Header, navegação mobile, Footer e continuidade;
* configuração atual de links externos e canais.

Não implemente a Sprint 6 se:

* a Sprint 5 não estiver concluída e aprovada;
* existirem alterações não atribuídas no worktree;
* as rotas canônicas tiverem sido alteradas sem documentação;
* houver conflito não resolvido entre URLs oficiais;
* ou a implementação exigir inventar um canal de contato ou colaboração.

Nesse caso, registre o bloqueio e não altere arquivos.

# Documento obrigatório

Crie:

`docs/sprints para v3/Sprint 6 - Navegacao Canais e Descoberta.md`

O documento deve registrar:

* baseline;
* branch e commits;
* documentos lidos;
* inventário de rotas;
* inventário de links internos;
* inventário de canais externos;
* arquitetura anterior de navegação;
* arquitetura final;
* mapa de continuidade;
* decisões sobre canais;
* conteúdos preservados;
* links removidos ou substituídos;
* arquivos alterados;
* verificações;
* limitações;
* decisões pendentes.

# Objetivo da Sprint 6

Ao final, um visitante deve conseguir:

1. compreender as principais áreas do site;
2. identificar por onde começar;
3. navegar entre problema, aprendizagem, métodos, prática, casos e LAB;
4. saber qual página responde a cada pergunta;
5. distinguir canais institucionais de canais formativos;
6. acessar apenas links oficiais e confirmados;
7. encontrar casos e evidências sem depender da homepage;
8. retornar ao percurso principal sem ciclos confusos;
9. navegar adequadamente em desktop e mobile;
10. compreender quando um canal de colaboração ainda não está disponível.

# Princípio central

A navegação deve refletir a arquitetura narrativa consolidada:

`Por que isso importa`

→ homepage

`Como começar`

→ Payload Journey e Learn

`Quais instrumentos existem`

→ Method

`Como investigar`

→ Protocol

`O que é a prática`

→ Investigation

`Que modelo usar`

→ USMT

`Que evidências existem`

→ Cases e LabLog

`O que é o LAB`

→ Lab e Ecosystem

A navegação não deve expor todas as rotas com o mesmo peso.

Ela deve oferecer:

* poucas escolhas principais;
* caminhos claros de aprofundamento;
* continuidade contextual;
* canais confirmados;
* e ausência de links decorativos ou sem destino real.

# Escopo autorizado

A Sprint 6 pode alterar:

* Header;
* navegação desktop;
* navegação mobile;
* Footer;
* componentes de continuidade;
* CTAs globais;
* `content/site.ts`;
* `content/routes.ts`;
* estruturas tipadas de navegação;
* labels e links de continuidade das páginas;
* `/ecosystem`, apenas no que diz respeito a caminhos reais de aprendizagem, aplicação ou colaboração;
* verificadores;
* helper de captura;
* documentação.

Pode realizar microajustes nas rotas consolidadas apenas para:

* alterar um CTA;
* corrigir um link;
* substituir label genérico;
* corrigir âncora;
* remover canal não confirmado;
* alinhar continuidade.

Não refatorar novamente o conteúdo principal de:

* homepage;
* `/lab`;
* `/learn`;
* `/method`;
* `/protocol`;
* `/investigation`;
* `/cases`;
* `/lablog`;
* `/usmt`;
* `/payload-journey`.

# Fora de escopo

Não:

* criar nova rota;
* criar formulário de contato sem infraestrutura real;
* inventar email institucional;
* inventar canal de colaboração;
* criar área de membros;
* criar newsletter;
* criar busca interna;
* criar dropdown complexo sem necessidade;
* alterar novamente a tese editorial;
* reescrever páginas já aprovadas;
* resolver SEO completo, reservado à Sprint 7;
* adicionar dependências;
* realizar redesign global;
* criar novo canal social;
* criar novos casos ou LabLogs.

# Inventário obrigatório antes da implementação

Antes de modificar a navegação, inventarie:

## Rotas canônicas

Confirmar todas as rotas reais em `app/**/page.tsx`.

Esperadas no baseline atual:

* `/`;
* `/payload-journey`;
* `/learn`;
* `/cases`;
* `/usmt`;
* `/method`;
* `/protocol`;
* `/investigation`;
* `/lab`;
* `/ecosystem`;
* `/lablog`.

Confirmar também:

* redirect `/about`;
* destino final de `/about`;
* âncoras utilizadas;
* páginas incluídas em sitemap;
* páginas referenciadas no Header;
* páginas referenciadas no Footer;
* páginas alcançáveis apenas por CTAs internos.

## Links internos

Para cada link, registrar:

* origem;
* label;
* destino;
* função;
* duplicidade;
* estado;
* compatibilidade com a narrativa.

## Links externos

Inventariar:

* Udemy;
* YouTube;
* LinkedIn;
* GitHub, caso exista;
* outros canais;
* links da fundadora;
* links da página institucional;
* links presentes em Footer, LabLog, Learn e Ecosystem.

Para cada link externo:

* URL atual;
* ficheiro;
* ocorrência;
* canal;
* destinatário;
* confirmação;
* conflito;
* decisão.

# Arquitetura global recomendada

## Header desktop

O Header deve apresentar poucas escolhas principais.

Ordem recomendada:

1. `Início` → `/`
2. `Aprender` → `/learn`
3. `Métodos` → `/method`
4. `Casos` → `/cases`
5. `LAB` → `/lab`

CTA principal:

`Começar`

Destino recomendado:

`/payload-journey`

O CTA `Começar` deve conduzir ao instrumento inicial, não diretamente à Udemy.

Não incluir no Header principal:

* todas as páginas metodológicas;
* LabLog;
* Ecosystem;
* Protocol;
* Investigation;
* USMT;
* canais sociais;
* Udemy.

Esses destinos devem ser descobertos por contexto ou Footer.

## Estado ativo

A navegação deve indicar semanticamente a área atual.

Utilizar:

* `aria-current="page"` quando aplicável;
* estado visual compatível;
* nenhum estado comunicado apenas por cor.

Rotas profundas podem ativar a categoria correspondente:

* `/payload-journey` e `/learn` → Aprender;
* `/method`, `/protocol`, `/investigation` e `/usmt` → Métodos;
* `/cases` e `/lablog` → Casos;
* `/lab` e `/ecosystem` → LAB.

Não é obrigatório alterar o label principal para cada subrota.

## Navegação mobile

A navegação mobile deve preservar:

* as cinco escolhas principais;
* CTA `Começar`;
* estado ativo;
* fechamento ao navegar;
* foco visível;
* ordem de teclado;
* labels acessíveis;
* ausência de overflow;
* funcionamento sem mouse.

Verificar:

* abertura por teclado;
* fechamento por Escape, caso o padrão atual suporte;
* retorno de foco;
* bloqueio de scroll, caso já exista;
* ausência de duplicação de links inacessíveis.

Não aumentar a complexidade do Client Component sem necessidade.

# Footer

O Footer deve funcionar como mapa expandido do site.

Agrupamento recomendado:

## Começar

* Payload Journey → `/payload-journey`
* Aprender → `/learn`
* Curso → URL oficial da Udemy, quando confirmada

## Investigar

* Métodos → `/method`
* Protocolo → `/protocol`
* Software System Investigation → `/investigation`
* USMT → `/usmt`

## Evidências

* Casos → `/cases`
* LabLog → `/lablog`

## LAB

* Sobre o LAB → `/lab`
* Ecossistema → `/ecosystem`

## Canais

Somente canais confirmados:

* YouTube;
* LinkedIn;
* Udemy;
* outro canal real localizado.

Não exibir:

* links vazios;
* placeholders;
* canais duplicados;
* URLs divergentes;
* contato inexistente;
* colaboração sem destino funcional.

# Decisão sobre YouTube

A Sprint 0 registrou destinos divergentes de YouTube.

A Sprint 6 deve resolver tecnicamente essa divergência apenas se houver evidência suficiente.

## Evidência aceitável

* URL configurada explicitamente como oficial;
* link utilizado pelo conteúdo publicado mais recente;
* documentação humana aprovada;
* canal identificado de maneira inequívoca;
* redirecionamento público verificado.

## Se houver um canal confirmado

* adotar uma única URL canônica;
* substituir ocorrências divergentes;
* registrar a decisão;
* validar o destino;
* utilizar o mesmo link em Footer, LabLog e demais superfícies.

## Se não houver confirmação suficiente

* não escolher por inferência;
* manter a decisão como pendente;
* remover ou ocultar links conflitantes quando necessário;
* preservar a informação no documento da Sprint 6;
* não apresentar dois canais como equivalentes.

Não inventar URL.

# Decisão sobre LinkedIn

Verificar separadamente:

* perfil da fundadora;
* página do Payload Journey LAB.

O perfil pessoal e a página institucional não devem ser tratados como o mesmo canal.

Uso recomendado:

* página institucional do LAB em áreas institucionais;
* perfil da fundadora apenas quando o contexto for autoria ou fundadora.

Somente aplicar se as URLs estiverem confirmadas.

# Decisão sobre Udemy

A Udemy permanece:

* canal formativo;
* CTA secundário;
* parte de Learn e Footer;
* nunca CTA central do Header;
* nunca substituta da formação no site.

Verificar:

* URL oficial;
* consistência;
* abertura correta;
* label;
* ausência de links duplicados divergentes.

# Colaboração

A Sprint 6 deve auditar `/ecosystem`.

## Se existir canal funcional confirmado

Pode apresentar CTA claro, como:

* `Entrar em contato`;
* `Propor uma colaboração`;
* `Falar com o LAB`.

O destino deve ser real e monitorado.

## Se não existir canal funcional

A página pode explicar:

* públicos de colaboração;
* possibilidades futuras;
* critérios;
* estado atual.

Mas não deve apresentar botão de contato sem destino.

Formulação permitida:

`O canal público de colaboração ainda está sendo definido.`

Não criar email, formulário ou promessa de resposta.

# Continuidade entre páginas

Cada página deve oferecer próximos passos coerentes.

Não é necessário que todas apontem para todas.

## Homepage

Primário:

* `/payload-journey`

Secundários:

* `/cases`;
* `/learn`;
* `/method`;
* `/lab`.

## `/payload-journey`

Próximos passos:

* `/usmt`;
* `/method`;
* `/learn`.

## `/learn`

Próximos passos:

* `/payload-journey`;
* `/cases`;
* Udemy, como canal secundário.

## `/method`

Próximos passos:

* `/protocol`;
* `/investigation`;
* `/payload-journey`;
* `/usmt`.

## `/protocol`

Próximos passos:

* `/method`;
* `/investigation`;
* `/cases`.

## `/investigation`

Próximos passos:

* `/method`;
* `/protocol`;
* `/learn`;
* `/cases`.

## `/usmt`

Próximos passos:

* `/payload-journey`;
* `/protocol`;
* `/method`.

## `/cases`

Próximos passos:

* `/lablog`;
* `/method`;
* `/protocol`.

## `/lablog`

Próximos passos:

* `/cases`;
* `/lab`;
* `/protocol`.

## `/lab`

Próximos passos:

* `/method`;
* `/investigation`;
* `/cases`;
* `/learn`.

## `/ecosystem`

Próximos passos:

* `/learn`;
* `/cases`;
* `/lab`;
* colaboração, somente quando houver canal.

# Regras de continuidade

* evitar mais de quatro CTAs no mesmo bloco;
* evitar CTAs com função idêntica;
* evitar ciclos sem ganho narrativo;
* evitar labels genéricos;
* evitar `Saiba mais`;
* indicar a ação real;
* preservar o contexto da página atual;
* não utilizar Udemy como continuidade padrão de todas as páginas.

# Labels recomendados

Preferir:

* `Começar pelo Payload Journey`;
* `Conhecer os métodos`;
* `Executar o protocolo`;
* `Conhecer Software System Investigation`;
* `Ver o caso HORA.city`;
* `Acompanhar os LabLogs`;
* `Compreender a USMT`;
* `Começar a aprender`;
* `Conhecer o LAB`;
* `Explorar o ecossistema`.

Evitar:

* `Saiba mais`;
* `Clique aqui`;
* `Ver mais`;
* `Explorar`, sem objeto;
* `Começar agora`, quando o destino não estiver claro.

# Descoberta das rotas

A Sprint 6 deve garantir que todas as rotas canônicas sejam descobertas por pelo menos uma destas superfícies:

* Header;
* Footer;
* continuidade de uma página principal;
* mapa de métodos;
* percurso de aprendizagem;
* registro de evidências.

Nenhuma rota canônica deve depender exclusivamente de:

* URL digitada;
* sitemap;
* mecanismo de busca externo;
* link escondido em texto secundário.

# Critério de profundidade

A partir da homepage:

* páginas principais devem estar acessíveis em um clique;
* páginas profundas devem estar acessíveis em no máximo dois cliques;
* nenhuma rota canônica deve exigir percurso circular para ser descoberta.

Registrar a matriz de profundidade antes e depois.

# Links externos

Todos os links externos devem:

* possuir destino confirmado;
* indicar claramente o canal;
* utilizar `rel` adequado quando abrirem nova aba;
* não expor URLs locais;
* não utilizar shorteners desconhecidos;
* não apontar para páginas privadas;
* não misturar canais pessoais e institucionais sem contexto.

Abrir em nova aba apenas quando o padrão atual do projeto justificar.

Não forçar nova aba para links internos.

# Links quebrados e âncoras

Validar:

* todas as rotas internas;
* `/about → /lab#sobre`;
* `/lab#pilot`;
* `/lab#founder`;
* âncoras utilizadas pela homepage;
* IDs únicos;
* ausência de hashes sem destino;
* ausência de links para componentes removidos;
* ausência de paths locais.

# Conteúdo estruturado e tipagem

Centralizar a navegação em estrutura apropriada, preferencialmente em:

* `content/site.ts`;
* `content/routes.ts`;
* tipos correspondentes.

A estrutura deve distinguir:

* navegação principal;
* CTA global;
* grupos do Footer;
* canais externos;
* continuidades por rota;
* status de canal;
* contexto institucional ou pessoal.

Evitar links duplicados hardcoded em vários componentes.

Não criar framework excessivamente genérico.

# Status de canais

Utilizar, internamente, estados proporcionais:

* confirmado;
* divergente;
* pendente;
* indisponível;
* removido;
* reservado.

A interface pública não precisa mostrar todos os estados internos.

Ela deve apenas evitar apresentar canais não confirmados.

# Design

* preservar identidade visual;
* não redesenhar Header ou Footer sem necessidade;
* melhorar hierarquia e legibilidade;
* manter densidade controlada;
* preservar server-first;
* não criar megamenu;
* não criar animações;
* não adicionar ícones externos sem necessidade;
* manter navegação mobile simples;
* preservar o Accent Color e padrões atuais.

# Acessibilidade

Validar:

* landmarks `header`, `nav`, `main` e `footer`;
* labels de navegação;
* `aria-current`;
* foco visível;
* ordem de teclado;
* navegação mobile;
* abertura e fechamento do menu;
* links externos identificáveis;
* labels compreensíveis fora de contexto;
* ausência de links duplicados consecutivos;
* contraste;
* skip link, caso já exista;
* comportamento com zoom.

# Responsividade

Validar:

* 320 px;
* 375 px;
* 768 px;
* 1024 px;
* 1440 px.

Confirmar:

* Header sem overflow;
* logo e CTA preservados;
* menu mobile utilizável;
* Footer sem colunas quebradas;
* labels sem truncamento indevido;
* links com área de toque adequada;
* continuidade sem grids problemáticos;
* ausência de scroll horizontal.

# Performance

Não introduzir:

* novas dependências;
* bibliotecas de menu;
* bibliotecas de ícones;
* Client Components adicionais sem necessidade;
* scripts externos;
* trackers;
* widgets sociais incorporados.

Registrar First Load JS antes e depois.

# Metadata e SEO

A Sprint 7 será responsável pelo alinhamento completo de metadata, JSON-LD e validação final.

Nesta sprint:

* não reescrever metadata global;
* não alterar titles e descriptions por razões editoriais;
* não criar structured data novo;
* não alterar sitemap sem necessidade técnica real;
* não criar nova taxonomia SEO.

São permitidos apenas ajustes necessários para:

* remover URL inválida;
* corrigir canonical quebrado;
* preservar redirect;
* ou alinhar referência de canal oficial.

Documentar qualquer exceção.

# Verificador específico

Criar:

`scripts/verify-navigation-discovery.mjs`

Adicionar:

`verify:navigation-discovery`

O verificador deve proteger:

## Rotas

* todas as rotas canônicas;
* redirect `/about`;
* âncoras obrigatórias;
* ausência de nova rota não aprovada.

## Header

* cinco destinos principais;
* CTA `/payload-journey`;
* labels;
* ordem;
* ausência de Udemy como CTA principal;
* ausência de canais sociais no Header.

## Footer

* grupos canônicos;
* links internos;
* canais somente confirmados;
* ausência de placeholders;
* ausência de links divergentes.

## Mobile

* mesmos destinos principais;
* labels acessíveis;
* ausência de duplicação inconsistente.

## Continuidade

* próximos passos por rota;
* labels específicos;
* ausência de `Saiba mais`;
* rotas profundas alcançáveis;
* ausência de ciclos vazios.

## Canais

* URL única por canal;
* distinção entre LinkedIn pessoal e institucional;
* Udemy como canal formativo;
* YouTube único ou explicitamente ausente;
* colaboração apenas com canal real.

## Segurança

* ausência de paths locais;
* ausência de links privados;
* ausência de protocolos inválidos;
* ausência de credenciais;
* ausência de URLs vazias.

## Global

* links internos válidos;
* IDs únicos;
* H1 único preservado;
* PT-BR;
* nenhuma alteração indevida de claims;
* nenhuma atividade da Sprint 7.

Atualizar verificadores anteriores somente quando necessário.

Não duplicar integralmente suas validações.

# Evidências da Sprint 6

No documento:

`docs/sprints para v3/Sprint 6 - Navegacao Canais e Descoberta.md`

registre:

## Baseline

* data;
* timezone;
* branch;
* commit;
* git status;
* versões;
* gates iniciais.

## Inventário de rotas

* rota;
* função;
* Header;
* Footer;
* continuidade;
* profundidade inicial;
* profundidade final.

## Inventário de canais

* canal;
* URL encontrada;
* ficheiros;
* conflitos;
* evidência;
* decisão;
* status final.

## Arquitetura anterior

* Header;
* mobile;
* Footer;
* CTAs globais;
* continuidades;
* canais;
* rotas pouco descobertas;
* links divergentes.

## Arquitetura final

* Header;
* mobile;
* Footer;
* CTA global;
* continuidades;
* canais;
* profundidade;
* labels.

## Links alterados

Para cada link:

* origem;
* label anterior;
* destino anterior;
* label final;
* destino final;
* justificativa;
* validação.

## Canais

Registrar explicitamente:

* YouTube;
* LinkedIn institucional;
* LinkedIn pessoal;
* Udemy;
* colaboração;
* outros canais.

## Arquivos

Para cada arquivo alterado:

* caminho;
* razão;
* risco;
* validação.

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
```

Não executar builds concorrentes sobre `.next`.

Registrar:

* resultado;
* duração;
* warnings;
* falhas;
* correções.

Warnings preexistentes devem ser documentados, não corrigidos fora do escopo.

# Validação de links

Executar auditoria completa de:

* links internos;
* âncoras;
* redirects;
* links externos confirmados;
* Footer;
* Header;
* mobile;
* continuidades.

Para links externos, distinguir:

* sintaxe válida;
* destino configurado;
* destino acessível;
* destino confirmado como oficial.

Não tratar resposta HTTP isolada como prova de autoria do canal.

# Validação visual

Validar Header, Footer, mobile e continuidades nas 11 rotas em:

* 320 px;
* 375 px;
* 768 px;
* 1024 px;
* 1440 px.

Não é obrigatório produzir 55 capturas permanentes se houver uma estratégia de amostragem reproduzível.

A validação deve cobrir:

* homepage;
* uma página de aprendizagem;
* uma página metodológica;
* protocolo;
* investigação;
* caso;
* LabLog;
* LAB;
* ecossistema;
* USMT;
* Payload Journey.

Verificar:

* overflow;
* foco;
* estado ativo;
* navegação mobile;
* Footer;
* CTAs;
* links;
* labels;
* profundidade.

# Evidências separadas

Classificar:

* fonte;
* conteúdo renderizado;
* build;
* execução local observada;
* produção;
* canal externo verificado.

Não tratar build como validação de link externo.

Não tratar URL acessível como prova automática de que é o canal oficial.

# Critérios de conclusão

A Sprint 6 estará concluída quando:

* Header possuir arquitetura clara e estável;
* mobile refletir a mesma arquitetura;
* Footer funcionar como mapa expandido;
* CTA global conduzir ao Payload Journey;
* todas as rotas canônicas forem descobertas;
* páginas profundas estiverem acessíveis em até dois cliques;
* continuidades forem contextuais;
* labels genéricos forem eliminados;
* YouTube estiver unificado ou mantido honestamente como pendente;
* LinkedIn pessoal e institucional estiverem diferenciados;
* Udemy permanecer como canal formativo secundário;
* colaboração possuir destino real ou permanecer sem CTA;
* links quebrados e âncoras inválidas estiverem ausentes;
* nenhuma nova rota tiver sido criada;
* metadata não tiver sido refatorada prematuramente;
* verificadores passarem;
* acessibilidade, responsividade e performance estiverem validadas;
* nenhuma atividade da Sprint 7 tiver sido iniciada;
* o documento da Sprint 6 estiver completo.

# Resposta final do Codex

Ao concluir, apresente:

1. caminho do documento da Sprint 6;
2. branch;
3. commit inicial e final;
4. confirmação da leitura das Sprints 0–5;
5. quantidade de rotas auditadas;
6. resumo da arquitetura final do Header;
7. resumo da navegação mobile;
8. resumo da arquitetura final do Footer;
9. mapa de continuidade implementado;
10. profundidade máxima das rotas;
11. decisão sobre YouTube;
12. decisão sobre LinkedIn;
13. decisão sobre Udemy;
14. decisão sobre colaboração;
15. links removidos, corrigidos ou unificados;
16. arquivos alterados;
17. resultado de lint;
18. resultado de TypeScript;
19. resultado de build;
20. resultado dos verificadores;
21. resultado da auditoria de links;
22. resultado visual;
23. impacto em First Load JS;
24. limitações;
25. decisões pendentes;
26. confirmação de que nenhuma Sprint 7 foi iniciada.

Status final:

`Sprint 6 concluída. Aguardando aprovação humana antes da Sprint 7.`
