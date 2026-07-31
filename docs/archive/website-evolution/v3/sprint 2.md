# Sprint 2 — LAB: missão, hipótese, origem e compromisso

Execute a Sprint 2 do Refactor Narrativo V3 do Payload Journey LAB.

Esta sprint deve refatorar exclusivamente a arquitetura narrativa e editorial da rota:

`/lab`

O objetivo é consolidar `/lab` como a página institucional canônica do Payload Journey LAB.

A página deve explicar:

* por que o LAB surgiu;
* qual problema investiga;
* quem está construindo;
* qual é o papel da inteligência artificial;
* o que já existe;
* o que ainda está em construção;
* o que significa o piloto;
* qual é a visão de longo prazo;
* e qual compromisso público orienta o trabalho.

A Sprint 2 não deve transformar `/lab` numa repetição da homepage, numa página de venda ou num catálogo completo de métodos.

# Gate obrigatório

Antes de qualquer alteração, leia integralmente:

* `docs/sprints para v3/Sprint 0 - Contrato Editorial e Mapa de Preservacao e Migracao.md`
* `docs/sprints para v3/Sprint 1 - Homepage.md`

Confirme também que as dez decisões humanas da Sprint 0 estão registradas no documento principal ou numa seção documental aprovada.

Não implemente a Sprint 2 se:

* a Sprint 0 não estiver concluída;
* a Sprint 1 não estiver concluída;
* o contrato editorial não estiver aprovado;
* as decisões humanas continuarem marcadas como bloqueadoras;
* a rota `/lab` não estiver mapeada;
* ou existirem alterações não documentadas que modifiquem a tese, o público ou o estatuto dos claims.

Nesse caso, registre o bloqueio e não altere arquivos.

# Documento obrigatório da Sprint 2

Crie:

`docs/sprints para v3/Sprint 2 - LAB.md`

O documento deve registrar:

* baseline;
* branch e commit;
* documentos lidos;
* IDs do Mapa de Preservação e Migração;
* arquitetura anterior de `/lab`;
* arquitetura implementada;
* conteúdos preservados;
* conteúdos movidos;
* conteúdos condensados;
* conteúdos reformulados;
* claims reclassificados;
* CTAs;
* metadata;
* arquivos alterados;
* validações técnicas;
* validações visuais;
* limitações;
* decisões futuras.

# Objetivo da Sprint 2

Fazer com que `/lab` responda claramente:

1. O que é o Payload Journey LAB?
2. Por que ele surgiu?
3. Qual problema contemporâneo investiga?
4. Qual é sua hipótese pedagógica e metodológica?
5. Quem é o público prioritário?
6. Qual é a relação entre direção humana e assistência por IA?
7. O que já foi construído?
8. O que ainda está em desenvolvimento?
9. O que significa o piloto?
10. Como será possível avaliar se o piloto existe?
11. Qual é a visão futura?
12. Qual compromisso público orienta o LAB?
13. Quem é a fundadora e qual é seu papel?
14. Como continuar explorando o ecossistema?

# Papel narrativo de `/lab`

A homepage já deve responder:

* por que compreender sistemas se tornou urgente;
* para quem o LAB existe;
* qual capacidade está sendo investigada;
* como começar.

A página `/lab` deve aprofundar:

* origem;
* missão;
* hipótese;
* construção pública;
* autoria;
* autoridade humana;
* estado atual;
* piloto;
* compromisso;
* visão institucional.

Evite repetir integralmente os textos da homepage.

Quando uma ideia já estiver apresentada na homepage, `/lab` deve aprofundá-la, contextualizá-la ou conectá-la à história e ao compromisso do laboratório.

# Tese institucional canônica

A página deve preservar a seguinte tese:

`À medida que agentes de inteligência artificial aceleram a produção e a modificação de código, a compreensão do sistema pode tornar-se um dos principais gargalos da engenharia de software.`

`O Payload Journey LAB investiga se — e até que ponto — métodos baseados em flow, payload tracing, causalidade, modelagem, checkpoints e evidências de runtime podem ajudar estudantes de Engenharia de Software e developers a desenvolver mais cedo a capacidade de compreender codebases grandes, complexas ou pouco conhecidas.`

Essa formulação deve permanecer como:

* tese institucional;
* hipótese investigativa;
* problema de pesquisa;
* direção pedagógica.

Não deve ser apresentada como:

* conclusão científica;
* resultado já demonstrado;
* verdade universal;
* promessa de empregabilidade;
* garantia de produtividade;
* ou validação externa dos métodos.

# Definição canônica do LAB

A página deve apresentar explicitamente:

`O Payload Journey LAB é um laboratório autoral de formação, pesquisa metodológica e investigação aplicada em sistemas de software.`

O LAB trabalha com:

* codebases reais;
* flows operacionais;
* payloads;
* modelagem;
* checkpoints;
* runtime;
* evidências;
* documentação;
* e casos de investigação.

Seu objetivo não é apenas produzir conteúdo.

O objetivo é investigar, formalizar, aplicar e ensinar uma capacidade de compreender sistemas por meio da execução e da causalidade.

# Arquitetura narrativa recomendada

## 1. Hero institucional

Eyebrow recomendado:

`PAYLOAD JOURNEY LAB`

H1 recomendado:

`Um laboratório para investigar como sistemas realmente funcionam`

Texto recomendado:

`O Payload Journey LAB é um laboratório autoral de formação, pesquisa metodológica e investigação aplicada dedicado a compreender como intenções, payloads, decisões e estados atravessam sistemas de software.`

`O LAB surgiu de uma experiência real: uma codebase expandida com agentes de inteligência artificial cresceu mais rapidamente do que sua própria capacidade humana de ser explicada.`

`Essa perda de compreensão transformou-se em uma pergunta investigativa, em métodos e em um laboratório.`

CTA principal:

`Conhecer os métodos`

Destino:

`/method`

CTA secundário:

`Ver o caso HORA.city`

Destino:

`/cases`

Não utilizar a Udemy como CTA do hero.

## 2. Missão

Eyebrow:

`MISSÃO`

Título recomendado:

`Recuperar compreensão e autoridade sobre o sistema`

Texto central:

`A missão do Payload Journey LAB é ensinar estudantes de Engenharia de Software e developers a seguir payloads, localizar causalidade e compreender como uma operação se transforma em decisão, estado e efeito observável.`

`O LAB investiga se começar esse desenvolvimento mais cedo pode ajudar profissionais a entrar em codebases grandes ou pouco conhecidas com maior clareza, autonomia progressiva e responsabilidade técnica.`

A seção deve deixar claro:

* quem é o público;
* qual é a capacidade;
* qual é a hipótese;
* que o benefício ainda está sendo investigado.

Não afirmar que a missão já foi cumprida.

## 3. Por que o LAB surgiu

Eyebrow:

`ORIGEM`

Título recomendado:

`Quando produzir ficou mais rápido do que compreender`

A narrativa deve explicar:

* a codebase real cresceu;
* agentes de IA aceleraram produção e alteração;
* funcionalidades podiam ser implementadas sem que todo o flow permanecesse compreendido;
* surgiram dificuldades para explicar decisões, payloads e estados;
* corrigir sintomas não resolvia a perda de compreensão;
* a investigação do flow tornou-se necessária.

Formulação recomendada:

`O LAB não nasceu de uma teoria abstrata. Nasceu da necessidade de compreender um sistema real que continuava funcionando, crescendo e mudando, mas já não podia ser explicado com segurança apenas pela leitura fragmentada da codebase.`

Não dramatizar como colapso total.

Não declarar que toda a codebase era incompreensível.

Apresente a origem como experiência localizada.

## 4. Do problema aos métodos

Título recomendado:

`Transformar perda de compreensão em método`

Explique como a experiência produziu:

* Payload Journey;
* USMT;
* Reverse Payload Journey;
* Operational Payload Path;
* Track to Origin;
* Congelar, Mapear, Detectar e Restaurar;
* checkpoints;
* documentação de evidências;
* definição inicial de Software System Investigation;
* função investigativa do Trace Engineer.

A página não deve explicar todos os métodos profundamente.

Cada elemento deve aparecer como resposta a uma pergunta:

* Payload Journey: por onde a operação passa?
* USMT: o que deveria acontecer?
* Reverse Payload Journey: de onde veio a anomalia?
* Operational Payload Path: qual caminho está sendo investigado?
* Track to Origin: onde nasce a decisão?
* Protocolo: como investigar sem modificar prematuramente?
* Evidências: o que sustenta a conclusão?

CTA:

`Explorar os métodos`

Destino:

`/method`

## 5. Direção humana e assistência por IA

Eyebrow:

`HUMAN DIRECTION · AI ASSISTANCE`

Título recomendado:

`Uma mulher assessorada pela IA, não substituída por ela`

Texto obrigatório:

`A inteligência artificial participa da construção do LAB como assessoria técnica, interlocutora metodológica, apoio à exploração de codebases e aceleradora da documentação.`

`A direção do trabalho, as perguntas investigativas, os critérios de evidência, a criação dos métodos e a responsabilidade sobre as conclusões permanecem humanas.`

Formulação central:

`A IA deve ampliar a capacidade de compreensão dos engenheiros, não substituir sua autoridade sobre o sistema.`

Evitar:

* apresentar a IA como criadora autônoma;
* ocultar a participação da IA;
* reduzir a fundadora a operadora da ferramenta;
* antropomorfizar excessivamente a IA;
* transformar a seção numa discussão genérica sobre IA.

## 6. A fundadora

Eyebrow:

`FOUNDER`

Título recomendado:

`Uma experiência pessoal transformada em campo de investigação`

A seção deve preservar:

* nome da fundadora;
* autoria do Payload Journey LAB;
* autoria da USMT;
* relação com HORA.city;
* papel na direção metodológica e pedagógica;
* percurso como estudante de Engenharia de Software;
* experiência anterior relevante apenas quando possuir função narrativa.

A narrativa deve demonstrar:

* a fundadora não começou como especialista com todas as respostas;
* criou os métodos enquanto investigava problemas reais;
* utiliza o LAB também como ambiente de formação da própria prática;
* assume publicamente a responsabilidade pelas hipóteses e conclusões.

Evitar:

* biografia excessivamente longa;
* detalhes pessoais sem função institucional;
* narrativa heroica;
* afirmações de autoridade não demonstrada;
* transformar vulnerabilidade em falta de rigor.

Formulação recomendada:

`O LAB é construído por uma engenheira em formação que transforma sua própria necessidade de compreender sistemas em método, documentação e experiência pedagógica para outras pessoas.`

## 7. O que já existe

Eyebrow:

`ESTADO ATUAL`

Título recomendado:

`Uma visão que já possui instrumentos, casos e documentação`

Inventarie o repositório e apresente apenas elementos confirmados.

Pode incluir, se localizados:

* site institucional;
* curso publicado;
* canal ou conteúdos;
* USMT;
* Payload Journey;
* Reverse Payload Journey;
* Operational Payload Path;
* Track to Origin;
* protocolo;
* Case Brief;
* Checkpoint Plan;
* Freeze Record;
* Detection Report;
* Trace Evidence Record;
* Trace Evidence Package;
* USMT Evidence-Aligned;
* HORA.city como caso aplicado;
* LabLogs;
* publicações;
* código ou artefatos.

Cada item deve receber estado real:

* disponível;
* publicado;
* documentado;
* em aplicação;
* em investigação;
* em construção.

Não classificar como concluído algo apenas desenhado.

## 8. O que está sendo construído

Eyebrow:

`LAB EM CONSTRUÇÃO`

Título recomendado:

`Do método autoral a uma capacidade transferível`

A seção deve explicar que o LAB está trabalhando para consolidar:

* definições;
* método;
* protocolo;
* instrumentos;
* casos completos;
* evidências;
* formação;
* transferência para outras pessoas.

A capacidade transferível deve aparecer como objetivo, não como resultado.

Texto recomendado:

`O LAB deixará de ser apenas uma metodologia pessoal quando outra pessoa conseguir utilizar seus instrumentos para investigar uma operação desconhecida, produzir evidências e explicar o comportamento do sistema com conclusões tecnicamente justificadas.`

## 9. Horizonte inicial do piloto

A âncora deve permanecer:

`id="pilot"`

Eyebrow:

`DO ZERO AO PILOTO`

Título recomendado:

`Um horizonte inicial de seis meses`

Texto:

`O primeiro horizonte do LAB é consolidar, em seis meses, um piloto verificável.`

`O objetivo não é declarar uma nova disciplina consolidada, mas produzir evidências de que o LAB possui um objeto de estudo, métodos, instrumentos, casos e capacidade de formar outras pessoas.`

O prazo deve permanecer:

* como horizonte institucional;
* sem data final inventada;
* sem countdown;
* sem aparecer na homepage como mensagem principal;
* sujeito a revisão futura.

## 10. Seis compromissos do piloto

Preservar os seis compromissos já aprovados:

### 01 — Definir

`Estabelecer uma definição clara de Software System Investigation e da função investigativa do Trace Engineer.`

### 02 — Formalizar

`Consolidar os métodos, o protocolo e o conjunto documental que sustentam uma investigação verificável.`

### 03 — Aplicar

`Executar o protocolo completo num flow de uma codebase real, da delimitação do caso à restauração validada.`

### 04 — Evidenciar

`Produzir checkpoints, registros, mapas operacionais, relatórios de detecção e pacotes de evidência.`

### 05 — Ensinar

`Transformar o conhecimento produzido em formação, vídeos, LabLogs, materiais e experiências pedagógicas.`

### 06 — Transferir

`Permitir que outra pessoa utilize o protocolo para investigar um flow que não conhecia previamente.`

Não transformar os compromissos em resultados concluídos.

Se algum compromisso já possuir evidência parcial, indicar:

* em andamento;
* evidência parcial;
* ainda não validado.

## 11. O verdadeiro teste do piloto

Utilizar um bloco de destaque.

Título:

`O verdadeiro teste do piloto`

Texto:

`O piloto estará demonstrado quando uma pessoa de fora conseguir entrar numa codebase desconhecida, selecionar uma operação, identificar o payload, posicionar checkpoints, seguir o flow entre as camadas, confrontar comportamento e modelo, detectar uma divergência ou explicar o comportamento e documentar sua conclusão com base em evidências.`

Acrescentar a precisão aprovada:

### Evidência inicial de transferibilidade

Pode ser declarada quando uma pessoa externa aplicar o protocolo em uma investigação documentada, com registro do nível de assistência.

### Piloto de capacidade transferível

Pode ser declarado quando pelo menos:

* duas pessoas externas;
* em duas investigações distintas;
* produzirem evidências revisáveis;
* e chegarem a conclusões tecnicamente justificadas.

Não apresentar esses critérios como já atingidos.

## 12. Trace Engineer

Eyebrow:

`TRACE ENGINEERING`

Título recomendado:

`Uma função investigativa em desenvolvimento`

Definição aprovada:

`Trace Engineer é a função investigativa exercida por quem segue operações, payloads, transformações e decisões para compreender e explicar o comportamento de um sistema com base em evidências.`

Competências em desenvolvimento:

* delimitar operações;
* seguir payloads;
* identificar transformações;
* localizar autoridades de decisão;
* observar runtime;
* posicionar checkpoints;
* confrontar modelo e execução;
* identificar divergências;
* validar restaurações;
* documentar conclusões.

Deixar claro:

* não é profissão consolidada;
* não é cargo reconhecido pelo mercado;
* não é certificação oficial;
* é um perfil e uma função em desenvolvimento no universo do LAB.

CTA:

`Conhecer Software System Investigation`

Destino:

`/investigation`

## 13. Visão de longo prazo

Eyebrow:

`LONG-TERM VISION`

Título recomendado:

`Construir uma capacidade para a engenharia de software contemporânea`

A visão pode incluir:

* formar pessoas capazes de investigar sistemas complexos;
* preparar estudantes para codebases grandes;
* apoiar equipes que perderam visibilidade sobre flows;
* produzir casos tecnicamente verificáveis;
* desenvolver requirements-to-runtime traceability;
* conectar modelagem, arquitetura, observabilidade, domínio e runtime;
* colaborar com universidades, educadores, equipes e organizações;
* contribuir para que o Brasil desenvolva força em investigação de sistemas e rastreabilidade.

Todos esses elementos devem ser apresentados como:

* visão;
* ambição;
* direção;
* horizonte;
* possibilidade futura.

Não como resultado comprovado.

## 14. Sistemas distribuídos e mission-critical

Criar uma subseção curta, sem exagerar sua presença.

Título recomendado:

`Da operação concreta aos sistemas críticos`

Texto:

`O LAB pretende aprofundar progressivamente sua abordagem em direção a sistemas distribuídos, requisitos, mensagens, timing e contextos industriais ou mission-critical.`

Podem ser mencionados como trilha futura:

* concorrência;
* mensagens;
* estados distribuídos;
* timing;
* CAN;
* DBC;
* SysML/MBSE;
* V-Model;
* requirements-to-runtime traceability;
* safety invariants.

Status visual obrigatório:

`Direção futura de pesquisa e formação`

Não declarar:

* experiência demonstrada;
* serviço disponível;
* aplicação validada;
* especialização atual;
* domínio desses contextos.

## 15. Compromisso público

Utilizar um bloco final de forte presença visual.

Eyebrow:

`PUBLIC COMMITMENT`

Título:

`Compreender antes de modificar`

Texto:

`O Payload Journey LAB assume o compromisso de investigar sistemas com rigor, distinguir hipótese de evidência, não ampliar fatos não confirmados e documentar o caminho que sustenta cada conclusão.`

`O LAB existe para ensinar pessoas a recuperar autoridade sobre sistemas que se tornaram maiores do que sua compreensão inicial.`

Frase final:

`Siga o payload. Encontre a causalidade. Recupere a compreensão.`

## 16. Continuidade

A seção final deve conduzir para:

* `/payload-journey`;
* `/method`;
* `/investigation`;
* `/cases`;
* `/learn`.

Título possível:

`Continue explorando o LAB`

Evitar CTAs duplicados ou genéricos.

# Ordem mínima da página

A página deve seguir aproximadamente:

1. Hero institucional.
2. Missão.
3. Origem.
4. Do problema aos métodos.
5. Direção humana e assistência por IA.
6. Fundadora.
7. Estado atual.
8. O que está sendo construído.
9. Piloto e compromissos.
10. Teste do piloto.
11. Trace Engineer.
12. Visão futura.
13. Sistemas distribuídos e mission-critical.
14. Compromisso público.
15. Continuidade.

Não é obrigatório criar quinze componentes.

É obrigatório preservar a lógica e evitar sobreposição.

# Controle de densidade

A auditoria identificou que `/lab` já era excessivamente longa.

A Sprint 2 deve reduzir densidade sem perder conteúdo autoral.

Utilize:

* parágrafos curtos;
* headings informativos;
* alternância de fundos;
* cards apenas quando representarem unidades distintas;
* blocos de destaque;
* grids compactos;
* links para aprofundamento;
* conteúdo colapsável apenas se já existir padrão acessível no projeto.

Evite:

* sequência contínua de cards;
* paredes de texto;
* repetição da mesma tese;
* repetição completa dos métodos;
* repetição da homepage;
* excesso de autobiografia;
* excesso de slogans.

# Conteúdo a preservar obrigatoriamente

Confronte com o Mapa de Preservação e Migração e preserve:

* definição do LAB;
* origem da perda de compreensão;
* relação entre IA e autoridade humana;
* narrativa da fundadora;
* autoria da USMT;
* HORA.city como caso real;
* métodos e protocolo;
* piloto;
* seis compromissos;
* teste de transferibilidade;
* visão de longo prazo;
* compromisso público;
* direção futura para sistemas distribuídos e críticos.

Nenhuma remoção pode ocorrer sem:

* ID do mapa;
* justificativa;
* conteúdo equivalente preservado;
* destino;
* validação.

# Claims a revisar

A Sprint 2 deve localizar e reformular frases que afirmem ou sugiram que:

* os métodos já são reproduzíveis externamente;
* o LAB já forma outras pessoas;
* estudantes se tornam mais preparados como resultado comprovado;
* autonomia é acelerada;
* formação tradicional é insuficiente;
* Trace Engineer é profissão estabelecida;
* capacidade transferível já existe;
* sistemas mission-critical já fazem parte da competência atual;
* o LAB já alcançou o piloto.

Use:

* `o LAB investiga`;
* `a hipótese é`;
* `pode contribuir`;
* `pretende avaliar`;
* `está construindo`;
* `direção futura`;
* `evidência parcial`;
* `resultado ainda não demonstrado`.

# Política linguística

Aplicar PT-BR em todos os textos alterados de `/lab`.

Padronizar:

* objetivo;
* atuação;
* arquitetura;
* equipe;
* direção;
* compreensão;
* investigação;
* código;
* página;
* início.

Manter termos técnicos canônicos:

* payload;
* tracing;
* flow;
* runtime;
* checkpoint;
* Trace Engineer;
* Trace Engineering;
* Software System Investigation;
* mission-critical;
* requirements-to-runtime traceability.

Não realizar ainda normalização global das demais páginas.

# Metadata de `/lab`

Revisar:

* title;
* description;
* Open Graph;
* Twitter;
* canonical;
* JSON-LD aplicável.

Descrição recomendada:

`Conheça a missão, a origem e a construção do Payload Journey LAB, um laboratório de formação, pesquisa metodológica e investigação aplicada em sistemas de software.`

Uma segunda frase pode incluir:

`O LAB pesquisa como flow, payload tracing, modelagem, checkpoints e evidências de runtime podem ajudar estudantes e developers a compreender codebases complexas.`

A metadata não deve:

* declarar eficácia;
* anunciar profissão consolidada;
* prometer transferibilidade;
* apresentar mission-critical como competência atual.

# Conteúdo estruturado e tipagem

Preserve a arquitetura orientada a conteúdo.

Atualize, quando necessário:

* `content/payload-journey-lab.ts`;
* `content/routes.ts`;
* `types/content.ts`;
* componentes de seção;
* metadata da rota;
* verificadores.

Não hardcode grandes blocos de conteúdo em componentes se já existir sistema estruturado.

Prefira estruturas capazes de distinguir:

* seção;
* status;
* claim;
* fato;
* hipótese;
* ambição;
* evidência;
* CTA;
* âncora.

# Design

* preservar identidade visual;
* reutilizar componentes existentes;
* não criar nova linguagem gráfica;
* não introduzir dependências;
* preservar arquitetura server-first;
* evitar Client Components desnecessários;
* manter alternância de fundos;
* garantir ritmo entre narrativa, cards e destaques;
* preservar `id="pilot"`;
* evitar componentes excessivamente específicos quando puderem ser reutilizados.

# Acessibilidade

Validar:

* H1 único;
* ordem lógica de headings;
* âncora `/lab#pilot`;
* foco de teclado;
* contraste;
* links compreensíveis;
* listas semânticas;
* status comunicados por texto, não apenas cor;
* termos em inglês sem comprometer leitura;
* ausência de headings decorativos;
* labels acessíveis.

# Responsividade

Validar no mínimo:

* 320 px;
* 375 px;
* 768 px;
* 1024 px;
* 1440 px.

Confirmar:

* ausência de overflow;
* leitura confortável;
* grids adaptáveis;
* cards sem alturas artificiais;
* piloto facilmente localizável;
* texto da fundadora sem coluna excessivamente estreita;
* CTAs utilizáveis;
* continuidade clara.

# Performance

Não introduzir:

* bibliotecas novas;
* animações pesadas;
* imagens sem otimização;
* vídeos automáticos;
* Client Components desnecessários.

Registre impacto no First Load JS.

# Verificadores automatizados

Atualize verificadores para proteger:

* H1 institucional;
* definição do LAB;
* missão;
* origem;
* IA como assistência;
* autoridade humana;
* fundadora;
* `id="pilot"`;
* seis compromissos;
* teste do piloto;
* Trace Engineer como função em desenvolvimento;
* mission-critical como direção futura;
* compromisso público;
* ausência de claims proibidos;
* CTAs;
* links;
* IDs únicos;
* H1 único;
* headings;
* conteúdo preservado.

Não proteja parágrafos completos palavra por palavra.

Prefira invariantes editoriais e estruturais.

# Evidências da Sprint 2

No documento:

`docs/sprints para v3/Sprint 2 - LAB.md`

registre:

## Baseline

* data;
* timezone;
* branch;
* commit inicial;
* git status;
* versões;
* gates iniciais.

## Fonte das decisões

* documentos lidos;
* IDs do mapa;
* decisões humanas;
* claims aplicáveis.

## Arquitetura anterior

* ordem;
* headings;
* CTAs;
* metadata;
* densidade;
* claims de risco.

## Arquitetura final

* ordem;
* componentes;
* headings;
* CTAs;
* âncoras;
* conteúdo preservado;
* conteúdo condensado;
* conteúdo movido;
* conteúdo reformulado.

## Claims

Para cada claim alterado:

* texto anterior;
* classificação;
* evidência;
* texto final;
* classificação final;
* justificativa.

## Preservação

Liste:

* conteúdo preservado integralmente;
* conteúdo preservado com microajuste;
* conteúdo condensado;
* conteúdo movido;
* conteúdo removido por redundância;
* destino equivalente.

## Ficheiros

Para cada arquivo alterado:

* caminho;
* razão;
* alteração;
* risco;
* validação.

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

Se existir ou for criado verificador específico para `/lab`, execute-o também.

Não executar builds concorrentes sobre `.next`.

Registrar:

* comando;
* resultado;
* warnings;
* falhas;
* correções;
* escopo.

Warnings preexistentes devem ser documentados, não corrigidos fora do escopo.

# Validação visual

Compare `/lab` antes e depois em:

* mobile;
* tablet;
* desktop.

Verifique:

* primeiro viewport;
* missão;
* origem;
* densidade;
* narrativa da fundadora;
* IA e autoridade humana;
* piloto;
* visão futura;
* compromisso;
* CTAs;
* legibilidade;
* alternância de fundos;
* acessibilidade;
* overflow;
* consistência com a homepage.

A página deve responder claramente:

1. O que é o LAB?
2. Por que surgiu?
3. Qual é sua missão?
4. O que investiga?
5. Qual é o papel da IA?
6. Quem assume a responsabilidade?
7. O que já existe?
8. O que está sendo construído?
9. O que significa o piloto?
10. Como será avaliada a transferibilidade?
11. O que é Trace Engineer?
12. Qual é a visão futura?
13. Qual é o compromisso público?

# Critérios de conclusão

A Sprint 2 estará concluída quando:

* `/lab` funcionar como página institucional canônica;
* missão e hipótese estiverem claras;
* a origem estiver contextualizada;
* IA e autoridade humana estiverem diferenciadas;
* a fundadora estiver presente sem dominar toda a página;
* estado atual e construção futura estiverem separados;
* o piloto estiver explícito;
* os seis compromissos estiverem preservados;
* os critérios de transferibilidade estiverem presentes;
* Trace Engineer estiver classificado corretamente;
* sistemas distribuídos e mission-critical estiverem apenas como direção futura;
* o compromisso público estiver preservado;
* a densidade estiver reduzida;
* metadata estiver alinhada;
* verificadores estiverem atualizados;
* responsividade e acessibilidade estiverem validadas;
* nenhuma outra rota tiver sido refatorada editorialmente;
* o documento da Sprint 2 estiver completo.

# Resposta final do Codex

Ao concluir, apresente:

1. caminho do documento da Sprint 2;
2. branch;
3. commit inicial e final;
4. confirmação da leitura das Sprints 0 e 1;
5. resumo da nova arquitetura de `/lab`;
6. conteúdos preservados;
7. conteúdos condensados ou movidos;
8. claims reformulados;
9. critérios do piloto preservados;
10. ficheiros alterados;
11. resultado de lint;
12. resultado de TypeScript;
13. resultado de build;
14. resultado dos verificadores;
15. resultado visual;
16. impacto em First Load JS;
17. limitações;
18. decisões pendentes;
19. confirmação de que nenhuma Sprint 3 foi iniciada.

Status final:

`Sprint 2 concluída. Aguardando aprovação humana antes da Sprint 3.`
