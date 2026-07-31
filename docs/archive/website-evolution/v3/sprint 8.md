# Sprint 8 — Encerramento do Ciclo, Release Candidate e Handoff

Execute a Sprint 8 do Refactor Narrativo V3 do Payload Journey LAB.

Esta sprint encerra formalmente o ciclo iniciado na Sprint 0.

O seu objetivo não é continuar refatorando o site.

O objetivo é:

* congelar o estado final aprovado;
* consolidar as evidências das Sprints 0–7;
* verificar a integridade do conjunto;
* eliminar resíduos temporários;
* organizar a documentação final;
* preparar uma release candidate;
* definir claramente o que está concluído;
* registrar o que permanece pendente;
* preparar o handoff para deploy e validação pública;
* encerrar o Refactor Narrativo V3 sem iniciar uma Sprint 9.

# Princípio central

`Um ciclo não está encerrado apenas quando o código funciona. Ele está encerrado quando o estado final, as decisões, as evidências, as limitações e os próximos passos podem ser compreendidos e reproduzidos.`

A Sprint 8 deve produzir um encerramento verificável.

Não deve criar uma nova narrativa, novas funcionalidades ou novos claims.

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
* `docs/sprints para v3/Sprint 7 - Metadata Structured Data e Validacao Final.md`;
* todos os planos aprovados das Sprints 0–7;
* todos os verificadores;
* `package.json`;
* `.gitignore`;
* configuração do projeto;
* documentação principal;
* estado atual do Git;
* artefatos temporários e capturas existentes.

A Sprint 8 somente pode ser implementada quando:

* a Sprint 7 estiver concluída;
* a Sprint 7 estiver aprovada humanamente;
* todos os gates da Sprint 7 tiverem passado;
* o site estiver declarado localmente pronto para deploy;
* validação em produção continuar separada da validação local;
* nenhuma alteração não atribuída permanecer no worktree.

Se a Sprint 7 ainda não estiver concluída ou aprovada:

* crie apenas o plano da Sprint 8;
* registre o bloqueio;
* não altere implementação;
* não declare o ciclo encerrado.

# Primeira entrega obrigatória: plano

Antes da execução, crie:

`docs/sprints para v3/plano-sprint8.md`

O plano deve conter:

* gate documental;
* gate técnico;
* baseline;
* atribuição do worktree;
* inventário das Sprints 0–7;
* inventário de documentos;
* inventário de verificadores;
* inventário de artefatos temporários;
* estratégia de limpeza;
* estratégia de consolidação documental;
* estratégia de release candidate;
* estratégia de commit;
* estratégia de tag, sem executar tag sem autorização;
* estratégia de handoff;
* critérios de encerramento;
* riscos;
* rollback;
* proteção contra Sprint 9.

Depois de criar o plano:

* execute `git diff --check`;
* calcule o SHA-256 do plano;
* informe o caminho e o hash;
* não altere ficheiros de implementação;
* aguarde aprovação humana.

# Documento final obrigatório

Após aprovação e execução, crie:

`docs/sprints para v3/Sprint 8 - Encerramento do Ciclo Release Candidate e Handoff.md`

Este documento será o registro oficial de encerramento do Refactor Narrativo V3.

# Índice do ciclo

Criar ou atualizar:

`docs/sprints para v3/README.md`

O índice deve apresentar:

* Sprint 0 — contrato e preservação;
* Sprint 1 — homepage;
* Sprint 2 — LAB;
* Sprint 3 — formação;
* Sprint 4 — método e prática;
* Sprint 5 — casos e evidências;
* Sprint 6 — navegação e canais;
* Sprint 7 — metadata e validação;
* Sprint 8 — encerramento e handoff.

Para cada sprint, registrar:

* objetivo;
* documento final;
* estado;
* dependência;
* resultado principal;
* limitações relevantes.

Não transformar o índice em uma nova narrativa promocional.

# Objetivos da Sprint 8

Ao final, deve ser possível responder:

1. Qual era o estado inicial do site?
2. Que problema narrativo foi identificado?
3. Que decisões humanas governaram o refactor?
4. Que rotas foram alteradas?
5. Que rotas foram preservadas?
6. Que claims foram removidos ou condicionados?
7. Que claims permanecem autorizados?
8. Que evidências existem?
9. Que limitações continuam explícitas?
10. Que verificadores protegem o novo estado?
11. Qual é o estado técnico das 11 rotas?
12. O repositório está limpo?
13. Existem ficheiros temporários ou não atribuídos?
14. Qual é o diff final do ciclo?
15. Qual versão está atualmente declarada no projeto?
16. Existe uma release candidate preparada?
17. Foi criado algum commit?
18. Foi criada alguma tag?
19. O site foi implantado?
20. O que ainda deve ser validado em produção?
21. Que trabalho pertence a um ciclo futuro?
22. O Refactor Narrativo V3 pode ser formalmente encerrado?

# Escopo autorizado

A Sprint 8 pode alterar:

* documentação final;
* índice das sprints;
* `.gitignore`;
* ficheiros temporários;
* scripts de validação final;
* scripts de relatório;
* `package.json`, apenas para scripts de encerramento;
* comentários ou labels incorretos identificados durante o fechamento;
* pequenos erros comprovados que impeçam os gates finais.

Pode corrigir regressões críticas encontradas durante a validação final, desde que:

* sejam diretamente causadas pelas Sprints 1–7;
* a correção seja mínima;
* a correção seja documentada;
* todos os verificadores sejam reexecutados.

# Fora de escopo

Não:

* reescrever páginas;
* alterar a tese;
* criar nova arquitetura narrativa;
* criar nova rota;
* criar novo método;
* criar novo caso;
* criar LabLog;
* criar canal social;
* resolver YouTube por inferência;
* criar colaboração;
* criar formulário;
* adicionar CMS;
* adicionar analytics;
* adicionar dependências;
* realizar redesign;
* alterar funcionalidades do produto;
* realizar deploy;
* criar tag sem aprovação humana;
* fazer merge;
* abrir pull request;
* iniciar Sprint 9;
* iniciar novo ciclo evolutivo.

# Congelamento do estado final

A Sprint 8 deve criar um snapshot documental do estado final.

Registrar:

* data;
* timezone;
* branch;
* commit de baseline;
* commit final, caso exista;
* versão em `package.json`;
* Node;
* npm;
* Next.js;
* React;
* quantidade de páginas estáticas;
* First Load JS;
* shared JS;
* número de Client Components;
* número de rotas;
* número de verificadores;
* número de ficheiros alterados no ciclo;
* linhas adicionadas e removidas;
* estado do worktree.

Não confundir snapshot documental com runtime em produção.

# Inventário das rotas

Confirmar as 11 rotas canônicas:

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
* `/lab#sobre`;
* `/lab#pilot`;
* `/lab#founder`;
* Header;
* mobile;
* Footer;
* sitemap;
* robots;
* canonical;
* JSON-LD;
* caminhos de continuidade.

Para cada rota, registrar no fechamento:

* função;
* estado;
* H1;
* CTA principal;
* metadata;
* canonical;
* structured data;
* sitemap;
* verificador responsável;
* validação visual;
* limitação.

# Inventário dos claims finais

Criar uma matriz final com:

* claim;
* categoria;
* rota;
* estado;
* evidência;
* limitação;
* verificador;
* decisão final.

Categorias:

* fato confirmado;
* observação derivada de caso;
* hipótese investigativa;
* ambição futura;
* claim removido;
* claim proibido.

# Claims autorizados

Confirmar, sem necessariamente usar estas frases literalmente:

* o Payload Journey LAB existe como laboratório autoral;
* o LAB trabalha com formação, pesquisa metodológica e investigação aplicada;
* Payload Journey é o instrumento inicial;
* USMT modela comportamento esperado;
* OPP representa o caminho operacional;
* Reverse Payload Journey investiga divergências a partir do efeito observado;
* Track to Origin busca origem e autoridade;
* Freeze, Map, Detect e Restore organizam o protocolo;
* HORA.city é um caso interno real em investigação;
* IA auxilia exploração, documentação e confronto;
* a autoridade metodológica e a conclusão permanecem humanas.

# Claims que continuam não autorizados

Confirmar ausência de:

* eficácia pedagógica demonstrada;
* transferibilidade demonstrada;
* redução comprovada de onboarding;
* aumento comprovado de produtividade;
* redução comprovada de bugs;
* validação científica;
* profissão Trace Engineer consolidada;
* certificação profissional;
* garantia de empregabilidade;
* competência atual mission-critical;
* competência atual em sistemas distribuídos industriais;
* validação externa;
* múltiplos casos comprovados;
* restauração validada do caso HORA.city, enquanto não houver evidência.

# Inventário das evidências

Registrar o estado final das evidências:

* casos reais;
* fontes documentais;
* artefatos técnicos públicos;
* evidências externas;
* LabLogs;
* validações locais;
* validações de produção.

Preservar o baseline conhecido, caso continue verdadeiro:

* um caso real interno;
* duas fontes documentais internas;
* zero artefatos técnicos públicos;
* zero evidências externas;
* zero entradas LabLog estruturadas.

Caso o estado tenha mudado durante a Sprint 7, usar o estado comprovado mais recente.

Não aumentar números por inferência.

# Limpeza do repositório

Auditar:

* `.tmp/`;
* backups;
* capturas before/after;
* ficheiros de reconstrução;
* outputs de scripts;
* caches;
* relatórios duplicados;
* ficheiros não rastreados;
* ficheiros ignorados;
* paths locais;
* documentos incompletos;
* planos duplicados;
* versões obsoletas.

Para cada artefato, decidir:

* preservar;
* mover;
* remover;
* ignorar;
* substituir;
* documentar.

# Regra de preservação

Preservar quando o artefato for:

* evidência única;
* documento aprovado;
* parte da auditoria;
* necessário para reprodução;
* referenciado por documento final.

Remover ou ignorar quando for:

* reproduzível;
* temporário;
* duplicado;
* inválido;
* cópia intermediária;
* output sem referência;
* artefato de ferramenta sem valor documental.

# Capturas

Definir política final para capturas:

## Capturas permanentes

* evidências finais selecionadas;
* amostras representativas;
* comparações necessárias;
* resultados referenciados.

## Capturas temporárias

* screenshots de depuração;
* duplicações;
* tentativas falhadas;
* séries completas não necessárias;
* capturas reproduzíveis por script.

Não versionar dezenas de capturas sem função documental clara.

# Verificadores

Confirmar o conjunto final:

* `verify:foundation`;
* `verify:ai-readiness`;
* `verify:homepage`;
* `verify:lab`;
* `verify:learn`;
* `verify:method-practice`;
* `verify:cases-evidence`;
* `verify:navigation-discovery`;
* `verify:refactor-v3`.

Auditar:

* scripts órfãos;
* scripts duplicados;
* scripts temporários;
* verificadores que não são executados;
* dependências circulares;
* mensagens inconsistentes;
* exit codes;
* portabilidade.

Não reescrever verificadores aprovados sem necessidade.

# Verificador de encerramento

Criar, se o plano confirmar necessidade:

`scripts/verify-cycle-closure.mjs`

Adicionar:

`verify:cycle-closure`

Este verificador deve validar:

* existência dos documentos das Sprints 0–8;
* existência dos planos aprovados;
* existência do índice;
* presença das 11 rotas;
* execução bem-sucedida de `verify:refactor-v3`;
* ausência de rotas novas;
* ausência de paths locais em conteúdo público;
* ausência de ficheiros temporários não autorizados;
* ausência de canais não confirmados;
* ausência de claims proibidos;
* ausência de alterações de implementação fora do escopo;
* estado conhecido da validação de produção;
* status final de encerramento.

Não deve duplicar todos os verificadores anteriores.

Deve confirmar que o ciclo está íntegro como conjunto.

# Estado do Git

Registrar:

* branch;
* upstream;
* commit inicial do ciclo;
* commit atual;
* commits criados durante o ciclo;
* alterações staged;
* alterações unstaged;
* ficheiros untracked;
* ficheiros ignored;
* diff stat;
* diff check.

# Política de commit

A Sprint 8 deve preparar uma estratégia de commit final.

Antes de qualquer commit:

* todos os gates devem passar;
* o diff deve ser revisto;
* ficheiros temporários devem estar resolvidos;
* a documentação deve estar completa;
* nenhum segredo deve existir;
* o commit deve possuir escopo claro;
* a criação do commit deve estar autorizada pela pessoa responsável.

Não criar commit automaticamente apenas porque a Sprint 8 terminou.

Se houver autorização explícita no contexto de execução:

* criar um commit final coeso;
* registrar o hash;
* não realizar push;
* não criar tag;
* não fazer merge.

Mensagem recomendada, sujeita ao padrão real do repositório:

`refactor: conclude Payload Journey LAB narrative v3`

Se não houver autorização:

* não criar commit;
* apresentar a mensagem proposta;
* deixar o worktree pronto para revisão humana.

# Política de versão

Auditar a versão atual em:

* `package.json`;
* documentação;
* branch;
* tags;
* releases existentes.

Não inventar número de versão.

Classificar a mudança com base no padrão existente:

* patch;
* minor;
* major;
* versão editorial;
* release candidate interna.

Se não existir política de versionamento:

* registrar a ausência;
* não alterar a versão;
* propor decisão humana.

# Release candidate

A Sprint 8 deve declarar um estado de release candidate somente quando:

* lint passar;
* TypeScript passar;
* build passar;
* todos os verificadores passarem;
* as 11 rotas forem validadas;
* o worktree estiver atribuído;
* artefatos temporários estiverem resolvidos;
* documentação estiver completa;
* não houver segredo;
* deploy continuar separado.

Formulação autorizada:

`O estado local está preparado como release candidate do Refactor Narrativo V3.`

Não declarar:

* versão publicada;
* release em produção;
* site validado publicamente;
* deploy concluído.

# Tag

Não criar tag sem autorização explícita.

Pode propor:

* nome;
* mensagem;
* commit alvo;
* conteúdo da release.

O nome deve seguir o padrão existente no repositório.

Se não houver padrão:

* registrar decisão pendente;
* não inventar tag oficial.

# Changelog

Auditar se existe `CHANGELOG.md`.

## Se existir

Atualizar com:

* escopo do Refactor V3;
* rotas;
* principais mudanças;
* claims;
* guardrails;
* limitações;
* estado de deploy.

## Se não existir

Não criar automaticamente um changelog global.

Registrar o encerramento no documento da Sprint 8 e no índice das sprints.

Pode propor um changelog para decisão futura.

# Handoff de deploy

O documento final deve conter um checklist de deploy.

## Pré-deploy

* revisar diff;
* revisar commit;
* confirmar domínio;
* confirmar variáveis;
* executar gates;
* confirmar sitemap;
* confirmar robots;
* confirmar redirects;
* confirmar canais;
* confirmar imagens sociais;
* confirmar ausência de secrets;
* confirmar branch de destino.

## Deploy

Não executar nesta sprint sem autorização.

Registrar o processo esperado com base no projeto real.

Não inventar provider ou workflow.

## Pós-deploy

Validar publicamente:

* as 11 rotas;
* `/about`;
* âncoras;
* canonical;
* sitemap;
* robots;
* metadata;
* Open Graph;
* Twitter;
* JSON-LD;
* Header;
* mobile;
* Footer;
* links externos;
* Udemy manualmente;
* LinkedIn;
* ausência de YouTube;
* console;
* network;
* performance;
* acessibilidade básica;
* responsividade;
* erros 404;
* redirects;
* cache.

# Matriz de validação pública

Preparar tabela com:

* item;
* URL;
* condição esperada;
* ferramenta;
* evidência a capturar;
* resultado;
* responsável;
* estado.

Todos os resultados devem permanecer:

`Pendente de deploy`

até que sejam realmente verificados em produção.

# Backlog pós-refactor

Criar uma seção clara:

`Fora do Refactor Narrativo V3`

Pode incluir somente pendências já conhecidas:

* validação pública;
* resolução do YouTube canônico;
* validação manual da Udemy;
* produção de artefatos técnicos públicos;
* criação de LabLogs reais;
* segundo caso externo;
* validação de transferibilidade;
* canal funcional de colaboração;
* validação externa;
* futura direção em tracing distribuído e mission-critical;
* evolução de conteúdo e formação.

Não transformar pendências em promessa ou roadmap datado.

# Riscos finais

Auditar pelo menos:

## Claim drift

Metadata, conteúdo ou JSON-LD voltam a ampliar claims.

## Documentation drift

Código muda e documentos deixam de representar o estado real.

## Link drift

Canais externos mudam ou ficam indisponíveis.

## Evidence drift

O site passa a prometer evidências que não foram publicadas.

## Navigation drift

Novas rotas são adicionadas sem integração.

## Validation drift

Verificadores deixam de cobrir contratos importantes.

## Production drift

O estado implantado diverge do estado local validado.

Para cada risco, registrar:

* sinal;
* impacto;
* prevenção;
* verificador;
* ação futura.

# Guardrails pós-ciclo

Definir regras para mudanças futuras:

1. Toda nova rota deve declarar função narrativa.
2. Todo novo claim deve indicar categoria e evidência.
3. Todo novo caso deve possuir identidade, estado, fontes e limitações.
4. Toda nova evidência deve indicar origem e acesso.
5. Todo novo canal deve ser confirmado.
6. Toda mudança em método deve atualizar definições canônicas.
7. Toda mudança em navegação deve preservar descoberta.
8. Toda mudança em metadata deve corresponder ao conteúdo.
9. Toda competência futura deve continuar marcada como futura.
10. Todo deploy deve executar `verify:refactor-v3` e `verify:cycle-closure`.

# Validação técnica final

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
npm.cmd run verify:cycle-closure
```

Se `verify:cycle-closure` não for necessário segundo o plano aprovado, justificar e executar o conjunto existente.

Não executar builds concorrentes sobre `.next`.

Registrar:

* comando;
* duração;
* resultado;
* warnings;
* correções;
* repetição necessária.

# Validação visual final

Validar as 11 rotas em:

* 320 px;
* 375 px;
* 768 px;
* 1024 px;
* 1440 px.

Total:

55 combinações.

A Sprint 8 pode reutilizar evidências válidas da Sprint 7 quando:

* o código renderizado não tiver mudado;
* as capturas forem identificáveis;
* as dimensões estiverem registradas;
* a evidência estiver preservada;
* a reutilização estiver documentada.

Não repetir 55 capturas apenas para produzir volume.

Se qualquer componente renderizado mudar:

* revalidar as rotas afetadas;
* atualizar evidências;
* documentar o delta.

# Acessibilidade final

Confirmar:

* landmarks;
* H1;
* headings;
* foco;
* teclado;
* menu mobile;
* Escape;
* retorno de foco;
* `aria-current`;
* zoom;
* contraste;
* links;
* status;
* Footer;
* continuidade.

Não declarar certificação WCAG.

# Performance final

Registrar:

* First Load JS por rota;
* JS compartilhado;
* páginas estáticas;
* Client Components;
* dependências;
* regressões;
* comparação com Sprint 1 e Sprint 7, quando disponível.

# Segurança e privacidade

Executar auditoria final de:

* secrets;
* tokens;
* credenciais;
* paths locais;
* localhost;
* dados pessoais;
* identificadores;
* logs;
* screenshots;
* JSON-LD;
* metadata;
* documentos;
* ficheiros ignorados;
* histórico staged.

Confirmar zero exposição antes de considerar o ciclo encerrado.

# Critérios de conclusão

A Sprint 8 estará concluída quando:

* a Sprint 7 estiver concluída e aprovada;
* o índice das Sprints 0–8 estiver completo;
* o estado final estiver congelado documentalmente;
* as 11 rotas estiverem inventariadas;
* claims finais estiverem classificados;
* limitações estiverem preservadas;
* evidências estiverem inventariadas;
* artefatos temporários estiverem resolvidos;
* o Git estiver auditado;
* o plano de commit estiver definido;
* nenhum commit não autorizado tiver sido criado;
* a política de versão estiver documentada;
* a release candidate estiver preparada;
* o checklist de deploy estiver completo;
* a matriz pós-deploy estiver preparada;
* todos os gates passarem;
* segurança e privacidade estiverem validadas;
* o backlog futuro estiver separado;
* nenhuma Sprint 9 tiver sido criada;
* o documento final estiver completo.

# Estado final autorizado

Caso todos os critérios sejam cumpridos e não exista deploy:

`Refactor Narrativo V3 encerrado localmente. Release candidate preparada. Deploy e validação pública permanecem pendentes de autorização humana.`

Caso um gate falhe:

`Sprint 8 não concluída. O Refactor Narrativo V3 permanece aberto até a resolução dos bloqueios registrados.`

Não utilizar formulação intermediária ambígua.

# Resposta final do Codex

Ao concluir, apresente:

1. caminho do plano da Sprint 8;
2. SHA-256 do plano aprovado;
3. caminho do documento final;
4. caminho do índice das sprints;
5. branch;
6. commit inicial;
7. commit final;
8. commits criados;
9. estado do worktree;
10. confirmação da leitura das Sprints 0–7;
11. confirmação da aprovação da Sprint 7;
12. quantidade de rotas auditadas;
13. quantidade de documentos consolidados;
14. quantidade de verificadores;
15. estado dos claims;
16. estado das evidências;
17. artefatos preservados;
18. artefatos removidos;
19. artefatos ignorados;
20. decisão sobre `.tmp`;
21. decisão sobre capturas;
22. decisão sobre changelog;
23. versão atual;
24. decisão sobre alteração de versão;
25. estado da release candidate;
26. mensagem de commit proposta ou criada;
27. decisão sobre tag;
28. resultado de lint;
29. resultado de TypeScript;
30. resultado de build;
31. resultado de todos os verificadores;
32. resultado de `verify:cycle-closure`;
33. resultado visual;
34. resultado de acessibilidade;
35. impacto em First Load JS;
36. resultado de segurança e privacidade;
37. checklist de deploy;
38. pendências pós-deploy;
39. backlog fora do Refactor V3;
40. limitações;
41. confirmação de que não houve deploy;
42. confirmação de que nenhuma Sprint 9 foi iniciada.

Status final:

`Sprint 8 concluída. Refactor Narrativo V3 encerrado localmente. Release candidate preparada. Deploy e validação pública permanecem pendentes de autorização humana.`
