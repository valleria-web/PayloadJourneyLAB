# Sprint 1 — Homepage: urgência, público e capacidade

Execute a Sprint 1 do Refactor Narrativo V3 do Payload Journey LAB.

Esta sprint deve refatorar exclusivamente a arquitetura narrativa da homepage, preservando a identidade visual, os conteúdos autorais relevantes e os contratos editoriais congelados na Sprint 0.

# Documento obrigatório de referência

Antes de qualquer alteração, leia integralmente:

`docs/sprints para v3/Sprint 0 - Contrato Editorial e Mapa de Preservacao e Migracao.md`

Esse documento é a fonte de verdade da Sprint 1.

Não inicie a implementação se:

* a Sprint 0 não estiver concluída;
* o documento não existir;
* o documento estiver marcado como não aprovado;
* o Mapa de Preservação e Migração estiver incompleto;
* os conteúdos da homepage não possuírem identificadores rastreáveis;
* ou existirem decisões humanas pendentes que bloqueiem a homepage.

Nesse caso, informe o bloqueio e não altere ficheiros.

# Local da documentação da Sprint 1

Crie:

`docs/sprints para v3/Sprint 1 - Homepage.md`

Esse documento deve registrar:

* baseline;
* itens do Mapa de Preservação e Migração utilizados;
* arquitetura anterior;
* arquitetura implementada;
* conteúdos preservados;
* conteúdos movidos;
* conteúdos condensados;
* claims reformulados;
* ficheiros alterados;
* validações;
* limitações;
* decisões ainda pendentes.

# Objetivo da Sprint 1

Fazer com que um visitante compreenda, nos primeiros segundos da homepage:

1. por que compreender sistemas se tornou especialmente relevante agora;
2. para quem o Payload Journey LAB está sendo construído;
3. qual problema o LAB investiga;
4. qual capacidade pretende desenvolver;
5. por que payload, flow, tracing e runtime são centrais;
6. que benefícios ainda são hipóteses investigativas;
7. que evidências e casos já existem;
8. como começar a aprender progressivamente.

A homepage deve deixar de começar apenas pelo método.

Ela deve começar pela realidade que tornou o método necessário.

# Tese canônica obrigatória

A homepage deve materializar, sem necessariamente repetir palavra por palavra, a seguinte tese:

`À medida que agentes de inteligência artificial aceleram a produção e a modificação de código, a compreensão do sistema pode tornar-se um dos principais gargalos da engenharia de software.`

`O Payload Journey LAB investiga se — e até que ponto — métodos baseados em flow, payload tracing, causalidade, modelagem, checkpoints e evidências de runtime podem ajudar estudantes de Engenharia de Software e developers a desenvolver mais cedo a capacidade de compreender codebases grandes, complexas ou pouco conhecidas.`

Essa tese deve aparecer cedo.

Não a posicione depois de demonstrações, catálogo de métodos, ecossistema ou formação.

# Narrativa central da homepage

A homepage deve seguir esta progressão:

`o código acelera`

→

`a compreensão pode não acompanhar`

→

`estudantes e developers precisam aprender a compreender sistemas que não construíram`

→

`o LAB investiga uma progressão payload a payload`

→

`flow, causalidade e evidências de runtime tornam operações complexas investigáveis`

→

`casos reais avaliam até que ponto os métodos contribuem para essa capacidade`

→

`o visitante pode começar por uma operação concreta`

# Escopo autorizado

A Sprint 1 pode alterar:

* `app/page.tsx`;
* componentes utilizados exclusivamente ou principalmente pela homepage;
* conteúdos estruturados da homepage;
* tipos necessários para esses conteúdos;
* metadata específica da homepage;
* JSON-LD específico da homepage, se necessário;
* CTAs da homepage;
* ordem das secções;
* verificadores automatizados relacionados com a homepage;
* testes ou scripts que protegem a narrativa da homepage;
* documentação da Sprint 1.

A Sprint 1 não deve alterar editorialmente:

* `/lab`;
* `/payload-journey`;
* `/learn`;
* `/method`;
* `/protocol`;
* `/investigation`;
* `/cases`;
* `/usmt`;
* `/lablog`;
* `/ecosystem`.

São permitidos apenas microajustes técnicos fora da homepage quando forem indispensáveis para:

* tipagem;
* imports;
* componentes realmente partilhados;
* links;
* ou compatibilidade de build.

Qualquer alteração fora da homepage deve ser documentada e justificada.

# Fora de escopo

Não realizar:

* redesign visual;
* nova identidade gráfica;
* nova rota;
* criação de blog;
* criação de páginas próprias para métodos;
* mudança global de Header ou Footer;
* refactor completo de `/lab`;
* expansão da trilha mission-critical;
* criação de claims de mercado;
* promessa de empregabilidade;
* promessa de redução de onboarding;
* publicação de evidências inexistentes;
* correção de problemas técnicos não relacionados;
* introdução de novas dependências.

# Princípio de preservação

Não reescreva a homepage do zero.

Utilize o Mapa de Preservação e Migração para classificar cada unidade existente como:

* preservar integralmente;
* preservar com microajuste;
* condensar;
* mover;
* dividir;
* reformular;
* fundir;
* remover por redundância;
* manter como hipótese;
* manter como ambição;
* aguardar evidência.

Nenhum conteúdo relevante pode ser removido sem que o documento da Sprint 1 registre:

* o identificador do mapa;
* o conteúdo removido;
* a razão;
* o conteúdo equivalente preservado;
* o novo destino;
* e o critério de validação.

# Arquitetura narrativa recomendada

A homepage deve ser reorganizada segundo as funções abaixo.

Os nomes exactos dos componentes podem variar conforme a arquitetura real do repositório.

## 1. Hero — o problema contemporâneo

A primeira área deve apresentar a tensão central.

Eyebrow recomendado:

`PAYLOAD JOURNEY LAB`

H1 recomendado:

`O código acelera. A compreensão precisa acompanhar.`

Texto recomendado:

`Agentes de inteligência artificial podem produzir e modificar código em uma velocidade muito maior do que a leitura e a compreensão humana conseguem acompanhar.`

`O Payload Journey LAB investiga como estudantes de Engenharia de Software e developers podem aprender, desde cedo, a seguir operações, payloads e decisões para compreender sistemas grandes, complexos ou pouco conhecidos.`

A homepage pode preservar uma frase autoral forte já existente, como:

`Siga o payload. Entenda o sistema.`

Ela deve funcionar como síntese do método, não como substituta da tese institucional.

### CTAs do hero

CTA principal:

`Começar pelo Payload Journey`

Destino:

`/payload-journey`

CTA secundário:

`Ver o caso HORA.city`

Destino:

`/cases`

Evite iniciar a jornada pelo CTA comercial da Udemy.

A formação comercial pode continuar presente mais abaixo.

## 2. Por que isso importa agora

Criar ou adaptar uma área que explique a dor sem linguagem alarmista.

Eyebrow recomendado:

`POR QUE AGORA`

Título recomendado:

`Produzir código ficou mais rápido. Explicá-lo continua exigindo investigação.`

Conteúdo obrigatório:

* a IA pode acelerar produção, alteração e expansão do código;
* nenhuma pessoa mantém toda uma codebase grande na memória;
* alterações tecnicamente plausíveis podem ser aceitas sem compreensão completa do flow;
* a dificuldade central pode deslocar-se de escrever para compreender, verificar e explicar;
* a IA deve ampliar a compreensão humana, não substituir a autoridade dos engenheiros.

Formulação central obrigatória:

`A IA deve ampliar a capacidade de compreensão dos engenheiros, não substituir sua autoridade sobre o sistema.`

Não use:

* “explosão de código” como facto universal;
* “ninguém entende o sistema”;
* “a IA destrói a engenharia”;
* “a formação tradicional tornou-se inútil”;
* “observabilidade não funciona”.

## 3. Para quem o LAB está sendo construído

Eyebrow:

`PARA QUEM`

Título:

`Compreender sistemas mais cedo`

Conteúdo recomendado:

`O Payload Journey LAB está sendo construído prioritariamente para estudantes de Engenharia de Software, developers em início de carreira e profissionais que precisam entrar em codebases grandes, complexas, legadas ou pouco conhecidas.`

`O LAB investiga se — e até que ponto — aprender flow, payload tracing, causalidade, checkpoints e evidências de runtime pode ajudar esses profissionais a construir mais cedo um modelo mental confiável do sistema.`

`A hipótese é que essa capacidade pode contribuir para perguntas melhores, maior autonomia progressiva, verificação mais consciente de alterações produzidas por IA e participação mais responsável em equipes modernas de desenvolvimento.`

Deve ficar explícito que:

* isso é uma hipótese investigativa;
* não é resultado comprovado;
* não é promessa de emprego;
* não elimina formação interna;
* não transforma imediatamente um junior em senior;
* não substitui conhecimentos fundamentais de engenharia.

## 4. A proposta do LAB

Eyebrow:

`A PROPOSTA`

Título recomendado:

`Compreender uma operação, payload a payload`

Explicar a cadeia:

`intenção ou ocorrência`

→

`evento`

→

`payload`

→

`interpretação`

→

`decisão`

→

`estado`

→

`efeito observável`

Texto recomendado:

`Em vez de tentar compreender toda a codebase de uma vez, o LAB começa por uma operação concreta e segue as representações que ela assume durante a execução.`

`O payload funciona como fio condutor. O tracing reconstrói a causalidade. Os checkpoints produzem evidências. O domínio explica por que determinada decisão foi autorizada.`

A progressão deve demonstrar que o método reduz o recorte investigativo, não a complexidade real do sistema.

## 5. Demonstração existente

Preserve a demonstração visual ou operacional já existente na homepage, desde que ela continue funcional e coerente.

A demonstração deve aparecer depois de o visitante compreender:

* por que isso importa;
* para quem o LAB existe;
* e qual é a proposta.

A demonstração deve ser enquadrada como:

`Veja como uma intenção atravessa o sistema`

Não deve aparecer como decoração.

Deve conectar claramente:

* interação;
* representação;
* transporte;
* interpretação;
* decisão;
* persistência;
* resposta;
* efeito observável.

Não altere profundamente a implementação visual se ela já estiver funcional.

## 6. Métodos como resposta

Preserve os métodos centrais, mas evite apresentá-los como um catálogo desconectado.

Título recomendado:

`Instrumentos para investigar o flow`

Cada método deve responder a uma pergunta específica:

* Payload Journey: por onde a operação passa?
* USMT: que comportamento era esperado?
* Reverse Payload Journey: de onde veio a anomalia?
* Operational Payload Path: qual é o caminho operacional?
* Track to Origin: onde nasce a decisão?
* Protocolo: como congelar, mapear, detectar e restaurar?

Não é obrigatório exibir todos com a mesma profundidade.

A homepage deve orientar para `/method`, não tentar substituir essa página.

## 7. Evidência e hipótese

Criar ou adaptar uma área que diferencie claramente:

### O que já existe

* métodos documentados;
* protocolo;
* USMT;
* caso HORA.city em investigação;
* checkpoints e evidências produzidos;
* curso e conteúdos iniciais;
* construção pública do LAB.

### O que ainda está sendo investigado

* eficácia pedagógica;
* transferibilidade;
* redução do tempo de compreensão;
* autonomia progressiva;
* aplicação em codebases externas;
* progressão para sistemas distribuídos e críticos.

Título recomendado:

`O LAB não presume a resposta. Investiga.`

Texto recomendado:

`O caso HORA.city demonstra que os métodos estão sendo aplicados numa codebase real. Ainda não demonstra, por si só, que reduzem onboarding, aumentam produtividade ou funcionam da mesma forma em qualquer sistema.`

`Por isso, o LAB documenta casos, hipóteses, checkpoints, limitações e evidências antes de declarar resultados.`

CTA:

`Ver as evidências do caso`

Destino:

`/cases`

## 8. Aprendizagem progressiva

Eyebrow:

`APRENDER PROGRESSIVAMENTE`

Título:

`Começar por um payload. Avançar para o sistema.`

Apresentar uma progressão curta:

### 01 — Uma operação

Evento, payload, decisão, estado e efeito.

### 02 — Um flow entre camadas

UI, application, interpretation, domain, persistence e projection.

### 03 — Uma investigação estruturada

Modelo, invariantes, checkpoints, evidências, divergência e restauração.

### 04 — Sistemas mais complexos

Múltiplos componentes, eventos, mensagens, concorrência e estados distribuídos.

### 05 — Direção futura

Requisitos, timing, CAN, DBC, SysML/MBSE, V-Model, requirements-to-runtime traceability e contextos mission-critical.

Os níveis 4 e 5 devem estar visualmente marcados como:

* aprofundamento futuro;
* trilha em construção;
* ou horizonte de pesquisa.

Não podem parecer conteúdo já disponível ou competência demonstrada.

## 9. Formação e próxima ação

Preserve a área de formação, curso, YouTube ou conteúdos existentes.

Ela deve aparecer depois de o visitante compreender:

* problema;
* proposta;
* hipótese;
* evidência;
* progressão.

CTA principal recomendado:

`Começar a aprender`

Destino:

`/learn`

CTA comercial para Udemy pode permanecer como secundário.

## 10. Ecossistema

Preserve a apresentação do ecossistema, mas posicione-a depois da proposta central.

O ecossistema deve responder:

`De que formas o LAB transforma a investigação em aprendizagem, pesquisa, aplicação e colaboração?`

Evite que o ecossistema apareça antes de o visitante compreender por que o LAB existe.

# Ordem mínima da homepage

A implementação final deve respeitar esta sequência narrativa, mesmo que alguns blocos sejam combinados:

1. Hero e tese.
2. Por que agora.
3. Para quem.
4. Proposta.
5. Demonstração.
6. Métodos.
7. Evidência e hipótese.
8. Progressão pedagógica.
9. Formação.
10. Ecossistema ou continuidade institucional.

Não é obrigatório criar dez componentes.

É obrigatório preservar essa lógica.

# Densidade textual

A homepage não deve se transformar numa página institucional excessivamente longa.

Priorize:

* headings claros;
* parágrafos curtos;
* blocos respirados;
* listas apenas quando úteis;
* progressão visual;
* CTAs coerentes;
* links para aprofundamento.

Conteúdos extensos sobre:

* fundadora;
* piloto de seis meses;
* construção pública;
* compromissos;
* visão institucional;
* relação detalhada entre IA e autoria;

devem permanecer em `/lab`.

# Política de claims

Toda frase relevante deve ser confrontada com a taxonomia da Sprint 0.

## Factos permitidos

Somente quando houver evidência localizada.

## Observações de caso

Devem ser limitadas ao HORA.city ou ao caso correspondente.

## Hipóteses

Devem usar formulações como:

* `o LAB investiga`;
* `a hipótese é`;
* `pode contribuir`;
* `benefício esperado`;
* `pretende avaliar`;
* `até que ponto`.

## Ambições futuras

Devem usar:

* `direção futura`;
* `horizonte`;
* `trilha em construção`;
* `pretende conectar`;
* `planeja estudar`.

# Claims proibidos

Não declarar que o LAB:

* reduz comprovadamente onboarding;
* forma profissionais de alto valor;
* aumenta empregabilidade;
* reduz custos;
* reduz bugs;
* aumenta produtividade;
* já validou capacidade transferível;
* já possui método universalmente reproduzível;
* já forma Trace Engineers reconhecidos;
* domina sistemas mission-critical;
* substitui observabilidade;
* substitui arquitetura;
* substitui debugging;
* elimina treinamento interno;
* torna juniors equivalentes a seniors.

# Relação com observabilidade e debugging

Quando necessário, use a distinção:

`Logs, métricas, traces e APM oferecem sinais sobre a execução.`

`Software System Investigation utiliza esses sinais, modelos, checkpoints e evidências para reconstruir como uma operação foi interpretada e por que determinado estado ou efeito ocorreu.`

Não apresente ferramentas de observabilidade como inadequadas ou inferiores.

# Política linguística

A Sprint 1 deve aplicar PT-BR aos textos alterados na homepage.

Padronizar:

* objetivo;
* atuação;
* arquitetura;
* equipe;
* navegação;
* início.

Preservar os termos técnicos canônicos:

* payload;
* tracing;
* flow;
* runtime;
* checkpoint;
* Track Mode;
* mission-critical.

Não realize ainda uma normalização linguística completa das demais rotas.

# Metadata da homepage

Revise:

* title;
* description;
* Open Graph;
* Twitter;
* canonical;
* JSON-LD relacionado.

Descrição recomendada:

`Laboratório de Software System Investigation que pesquisa como flow, payload tracing, modelagem, checkpoints e evidências de runtime podem ajudar estudantes e developers a compreender codebases complexas mais cedo.`

A metadata deve:

* identificar o LAB;
* comunicar o problema;
* mencionar o público;
* evitar claims de eficácia;
* evitar linguagem comercial excessiva.

Não altere entidades ou structured data sem necessidade demonstrada.

# CTAs

A homepage deve possuir uma progressão coerente.

## CTA inicial

`Começar pelo Payload Journey`

→ `/payload-journey`

## CTA de evidência

`Ver o caso HORA.city`

→ `/cases`

## CTA de métodos

`Conhecer os métodos`

→ `/method`

## CTA de formação

`Começar a aprender`

→ `/learn`

## CTA institucional

`Conhecer o LAB`

→ `/lab`

Evite múltiplos CTAs com a mesma função.

Não use `Saiba mais` quando puder indicar claramente a próxima ação.

# Acessibilidade

Validar:

* apenas um H1;
* ordem lógica dos headings;
* landmarks;
* labels;
* foco de teclado;
* contraste;
* nomes acessíveis;
* navegação mobile;
* CTAs compreensíveis fora de contexto;
* ausência de headings usados apenas para estilo;
* termos em inglês marcados adequadamente quando necessário.

Corrija na homepage formas sem acento que estiverem dentro do escopo, como:

* `Navegacao`;
* `inicio`.

Não faça refactor global de acessibilidade fora da homepage nesta sprint.

# Responsividade

Verificar no mínimo:

* 320 px;
* 375 px;
* 768 px;
* 1024 px;
* 1440 px.

Confirmar:

* ausência de overflow horizontal;
* leitura adequada;
* cards sem alturas artificiais problemáticas;
* CTAs utilizáveis;
* demonstração funcional;
* progressão visual compreensível;
* textos sem linhas excessivamente longas.

# Performance

Não introduzir:

* bibliotecas novas;
* animações pesadas;
* vídeos automáticos;
* imagens sem otimização;
* Client Components desnecessários;
* dependências para efeitos puramente editoriais.

Preserve a arquitetura server-first.

Se um novo Client Component for realmente necessário, documente a razão.

# Verificadores automatizados

Atualize os verificadores para proteger:

* H1 canônico;
* tese sobre código e compreensão;
* presença do público prioritário;
* linguagem de hipótese;
* ausência de claims proibidos;
* CTAs esperados;
* ordem narrativa mínima;
* links internos;
* IDs únicos;
* H1 único;
* preservação da demonstração;
* presença do caso HORA.city;
* distinção entre evidência e hipótese;
* termos mission-critical apenas como direção futura.

Não proteja parágrafos inteiros palavra por palavra quando isso gerar fragilidade desnecessária.

Prefira verificar:

* headings canônicos;
* conceitos obrigatórios;
* links;
* estrutura;
* claims proibidos;
* invariantes editoriais.

# Evidências da implementação

No documento:

`docs/sprints para v3/Sprint 1 - Homepage.md`

registre:

## Baseline

* data;
* timezone;
* branch;
* commit inicial;
* git status;
* versões relevantes;
* gates iniciais.

## Fonte da decisão

* IDs do Mapa de Preservação e Migração;
* claims da Sprint 0;
* decisões humanas aplicáveis;
* conteúdo preservado.

## Antes

* ordem anterior;
* headings anteriores;
* CTAs anteriores;
* metadata anterior;
* problemas identificados.

## Depois

* nova ordem;
* headings;
* CTAs;
* conteúdos movidos;
* conteúdos condensados;
* claims reformulados;
* metadata final.

## Ficheiros

Para cada ficheiro alterado:

* caminho;
* razão;
* tipo de alteração;
* risco;
* validação.

## Claims

Para cada claim alterado:

* texto anterior;
* categoria;
* texto novo;
* categoria final;
* evidência;
* razão da mudança.

## Preservação

Liste explicitamente:

* conteúdos preservados;
* conteúdos condensados;
* conteúdos movidos;
* conteúdos removidos por redundância;
* destinos equivalentes.

# Validação técnica

Execute sequencialmente:

```powershell
npm.cmd run lint
npx.cmd tsc --noEmit
npm.cmd run build
npm.cmd run verify:foundation
npm.cmd run verify:ai-readiness
npm.cmd run verify:homepage
```

Não execute builds concorrentes sobre `.next`.

Registre:

* comando;
* resultado;
* warnings;
* falhas;
* correções realizadas.

Não corrija warnings preexistentes fora do escopo.

# Validação visual

Compare a homepage anterior e a nova em:

* desktop;
* tablet;
* mobile.

Verifique:

* primeiro viewport;
* sequência narrativa;
* densidade;
* legibilidade;
* contraste;
* CTAs;
* demonstração;
* continuidade com `/payload-journey`, `/cases`, `/method`, `/learn` e `/lab`.

A homepage deve responder claramente:

1. Por que este LAB existe agora?
2. Para quem ele está sendo construído?
3. Qual problema investiga?
4. Qual capacidade pretende desenvolver?
5. Por que payload e tracing são centrais?
6. O que já existe?
7. O que ainda é hipótese?
8. Como posso começar?

# Critérios de conclusão

A Sprint 1 estará concluída quando:

* a tese aparecer no início da homepage;
* o público prioritário estiver explícito;
* a dor contemporânea estiver clara;
* a proposta do LAB estiver conectada à dor;
* payload e tracing forem apresentados como resposta investigativa;
* a demonstração existente estiver preservada e contextualizada;
* os métodos estiverem apresentados como instrumentos;
* evidência e hipótese estiverem diferenciadas;
* a progressão pedagógica estiver visível;
* systems distributed e mission-critical aparecerem apenas como direção futura;
* CTAs conduzirem a próximos passos distintos;
* metadata estiver alinhada;
* verificadores estiverem atualizados;
* acessibilidade e responsividade estiverem validadas;
* o documento da Sprint 1 estiver completo;
* nenhuma rota fora do escopo tiver sido refatorada editorialmente.

# Resposta final do Codex

Ao concluir, apresente:

1. caminho do documento da Sprint 1;
2. branch e commits inicial e final;
3. resumo da nova arquitetura da homepage;
4. conteúdos preservados;
5. conteúdos condensados ou movidos;
6. claims reformulados;
7. ficheiros alterados;
8. resultado de lint;
9. resultado de TypeScript;
10. resultado de build;
11. resultado dos verificadores;
12. resultado da validação visual;
13. limitações ou decisões pendentes;
14. confirmação de que nenhuma Sprint posterior foi iniciada.

Não avance para a Sprint 2.

Status final:

`Sprint 1 concluída. Aguardando aprovação humana antes da Sprint 2.`
