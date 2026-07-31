# Plano da Sprint 8 — Encerramento do Ciclo, Release Candidate e Handoff

## Estado e autorização

Plano produzido em 23 de julho de 2026, timezone Europe/Berlin.

Esta entrega é exclusivamente documental e preparatória. A autorização humana atual permite criar este plano, executar `git diff --check`, calcular o seu SHA-256 e aguardar aprovação.

Não estão autorizados nesta fase:

- execução da Sprint 8;
- alteração de ficheiros de implementação;
- alteração, incorporação, renomeação ou substituição de `sprint 8.md`;
- limpeza ou remoção de artefatos;
- criação do documento final ou do índice;
- criação ou alteração de scripts;
- mudança de versão;
- stage, commit, tag, merge, push, pull request, release ou deploy;
- início de Sprint 9 ou de outro ciclo.

## 1. Atribuição obrigatória de `sprint 8.md`

### 1.1 Identidade observada

| Campo | Evidência |
|---|---|
| caminho | `docs/sprints para v3/sprint 8.md` |
| extensão solicitada ao final da autorização | `.mde`, inexistente; tratada como erro material de digitação, sem criar ou renomear ficheiro |
| criação no sistema de ficheiros | 23 de julho de 2026, 15:22:14 +02:00 |
| proprietário do sistema de ficheiros | `VdSR\VdSR2` |
| estado observado durante a Sprint 7 | não rastreado, 1.390 bytes, última escrita 15:25:03 |
| SHA-256 observado durante a Sprint 7 | `C656E530AC6238F39F27539E359E5FF97CD898104E597E4E3AA3F100EF23C901` |
| incorporação ao Git | commit `b8a746f86631277d8ecc6d9f01f37d129fbf4365`, criado em 23 de julho de 2026, 16:22:13 +02:00 |
| autor e committer do commit | `VdSR <valleria@gmail.com>` |
| assunto do commit | `sprint 7` |
| blob incorporado | `683b25366b9f585343c3ce0c4adc5423fbafdd4e`, 1.358 bytes |
| estado atual no Git antes deste plano | rastreado e modificado, não staged |
| última escrita atual | 23 de julho de 2026, 16:23:07 +02:00 |
| tamanho atual | 24.208 bytes |
| SHA-256 atual | `6067798BEDA5430A6565C474D616D061CE64E508AF00655E454B2BAF299A2EA1` |
| delta atual contra `HEAD` | 984 linhas adicionadas e 21 removidas |

### 1.2 Origem que pode ser afirmada

O ficheiro apareceu no workspace por uma ação externa à execução da Sprint 7. A Sprint 7 registou que não o criou, leu ou alterou. Posteriormente, uma versão foi incluída no commit `b8a746f` e a cópia no disco voltou a ser modificada.

Os metadados permitem atribuir:

- o proprietário local do ficheiro;
- o autor e o committer declarados pelo Git;
- os momentos de criação, commit e última escrita;
- as versões observadas e os respetivos estados.

Esses dados não demonstram, isoladamente, quem redigiu o conteúdo ou qual ferramenta realizou cada escrita. O plano não atribui autoria além do que é comprovável.

### 1.3 Divergência entre as versões

A versão incorporada no commit `b8a746f` não é uma especificação da Sprint 8. Ela contém a autorização de execução da Sprint 7 e foi adicionada com o nome `sprint 8.md`.

A versão modificada atualmente no disco substitui esse conteúdo por uma especificação extensa de:

`Sprint 8 — Encerramento do Ciclo, Release Candidate e Handoff`

Portanto:

- o blob em `HEAD` está semanticamente incorreto para o nome do ficheiro;
- a versão atual é uma alteração não staged posterior ao commit;
- nenhuma das duas versões será modificada nesta fase;
- a resolução Git desse delta pertence à futura execução aprovada e exige revisão humana antes de stage ou commit.

### 1.4 Correspondência com a autorização humana atual

| Tema | Especificação atual no disco | Autorização humana atual | Decisão do plano |
|---|---|---|---|
| finalidade | encerramento, RC e handoff | igual | corresponde |
| primeira entrega | `plano-sprint8.md` | igual | corresponde |
| estado atual | prevê plano antes da execução | somente planejamento | aplicar o escopo mais restrito |
| consolidação | Sprints 0–7, documentos e evidências | exigida | corresponde |
| limpeza | controlada e documentada | exigida | corresponde |
| Git | auditoria, estratégia de commit e tag condicionada | auditoria; nenhuma mutação agora | corresponde com gate humano |
| release candidate | estado local preparado, sem equivaler a produção | exigida | corresponde |
| deploy | handoff, sem execução não autorizada | não executar | corresponde |
| Sprint 9 | proibida | proibida | corresponde |

Não foi localizada divergência de objetivo entre a especificação atual e a autorização humana desta mensagem. Há uma diferença de fase: a especificação descreve a execução futura, enquanto a autorização atual termina obrigatoriamente no plano e na sua validação.

Há ainda duas qualificações herdadas e obrigatórias:

- o item pós-deploy “LinkedIn” só poderá ser validado se um destino concreto for confirmado; LinkedIn institucional e perfil pessoal permanecem entidades distintas;
- qualquer correção mínima de implementação admitida pela especificação exigirá autorização de execução da Sprint 8 e evidência de que desbloqueia um gate. Não está autorizada por este plano.

## 2. Baseline congelada para o planejamento

| Item | Estado observado |
|---|---|
| branch | `refactor/homepage-v0.2.0` |
| upstream | `origin/refactor/homepage-v0.2.0` |
| divergência do upstream | `+0/-0` |
| `HEAD` | `b8a746f86631277d8ecc6d9f01f37d129fbf4365` |
| parent de `HEAD` | `f2f48915a74582d998cbab4466c5e53e66f36940` |
| versão do projeto | `0.2.0` |
| Node observado | `v22.19.0` |
| npm observado | `11.6.3` |
| Next.js declarado | `^14.2.23` |
| React declarado | `^18.3.1` |
| mudanças staged | nenhuma |
| mudança preexistente não staged | somente `docs/sprints para v3/sprint 8.md` |
| tag em `HEAD` | nenhuma |
| padrão de tag localizado | `v0.1.0` |
| `CHANGELOG.md` | não localizado |
| `.tmp/` | existente, vazio e ignorado |
| caches ignorados | `.next/`, `node_modules/`, `tsconfig.tsbuildinfo` |
| `git diff --check` de baseline | passou, sem saída |

O commit `b8a746f` possui assunto `sprint 7`, altera 61 ficheiros, adiciona 4.646 linhas e remove 52. Ele contém a implementação, documentação e evidências da Sprint 7, além da versão curta e incorreta de `sprint 8.md`.

O estado da Sprint 7 a preservar é:

`Sprint 7 concluída. Refactor Narrativo V3 validado localmente e pronto para deploy. Validação pública pós-deploy permanece pendente.`

Isso não significa deploy executado nem validação em produção.

## 3. Imutabilidade das Sprints 0–7

Os documentos finais localizados e os hashes que formarão a baseline de preservação são:

| Documento | SHA-256 |
|---|---|
| `decisoes humanas.md` | `344BDD93D50E3E884C42AA4B9ED0D45451A33CE3DEFFF0F9AEB3EF43721C5FAB` |
| `Sprint 0 - Contrato Editorial e Mapa de Preservacao e Migracao.md` | `F2752F8CB761F79081E269FBFE52718A00F8040506969D12E2630FE868668BFF` |
| `Sprint 1 - Homepage.md` | `CF2D68EAE5B3A711AA760A9A15D0E91C459C5087933C2B98088263E0973F6889` |
| `Sprint 2 - LAB.md` | `12F7B87EE5FD4471E75450102D4638CB8C832626AD837E8699BB07E118F24535` |
| `Sprint 3 - Formacao e Progressao Pedagogica.md` | `C184FF601E9D358FC3EED1D1D6AB8C454D6257A9EA90EF00FE4D8FD3FE6CA9AE` |
| `Sprint 4 - Metodo e Pratica Investigativa.md` | `0A9E14AF68D2A83A896315E41DCCCB757126B96CA5C9620D4B2BE7BF9837B2DC` |
| `Sprint 5 - Casos Evidencias e Proveniencia.md` | `69D2D64D130EAA2E60C7A457562987CC0C4F7ED7DB544415D68F2E84380C6B3B` |
| `Sprint 6 - Navegacao Canais e Descoberta.md` | `9F3C6CCB59C032474C08902E2FE53986DEE1797A38A435B425F2A395FEE69A7E` |
| `Sprint 7 - Metadata Structured Data e Validacao Final.md` | `9896BCC6B0F197F3BDADEFAAC1897B818B49EECC6459A6DF33686402FAC796BA` |

Antes da futura execução, recalcular os nove hashes. Qualquer diferença deve bloquear a Sprint 8 até ser atribuída. A Sprint 8 não deve “normalizar”, resumir ou corrigir retroativamente esses documentos.

Os dois paths locais já registados na especificação histórica da Sprint 0 permanecem um risco de privacidade conhecido. A futura auditoria deve propor uma decisão humana, sem alterar silenciosamente um contrato histórico aprovado.

## 4. Gate documental

Na execução autorizada, ler integralmente e nesta ordem:

1. `Sprint 0 - Contrato Editorial e Mapa de Preservacao e Migracao.md`;
2. `decisoes humanas.md`;
3. os documentos finais das Sprints 1–7;
4. as especificações `sprint 0.md` a `sprint 8.md`;
5. os planos aprovados realmente localizados;
6. este plano, verificando primeiro o SHA-256 aprovado;
7. `README.md`, `.gitignore`, `package.json`, `next.config.mjs` e `tsconfig.json`;
8. todos os verificadores e o relatório responsivo;
9. o estado e o histórico Git relevantes.

Inventário real de planos dedicados:

- `plano-sprint2.md`;
- `plano-sprint4.md`;
- `plano-sprint5.md`;
- `plano-sprint6.md`;
- `plano-sprint7.md`;
- `plano-sprint8.md`, após aprovação.

Não foram localizados ficheiros dedicados `plano-sprint0.md`, `plano-sprint1.md` ou `plano-sprint3.md`. A execução deve identificar o planejamento preservado nas próprias especificações ou no histórico, sem criar documentos retroativos para preencher ausências.

## 5. Gate técnico

A execução somente poderá começar quando:

- este plano estiver aprovado e o seu hash corresponder;
- a aprovação humana da Sprint 7 continuar válida;
- os hashes das Sprints 0–7 corresponderem à baseline;
- branch, `HEAD`, upstream, staged, unstaged, untracked e ignored forem registados novamente;
- toda alteração preexistente estiver atribuída;
- o delta de `sprint 8.md` tiver decisão humana explícita de preservação e futura incorporação;
- não houver processo de build concorrente sobre `.next`;
- nenhuma ação remota tiver sido implicitamente autorizada.

Mudança externa após esta baseline exige pausa, nova atribuição e atualização do registo antes de continuar.

## 6. Escopo da futura execução

### 6.1 Entregas principais

Após autorização específica de execução:

- criar `docs/sprints para v3/Sprint 8 - Encerramento do Ciclo Release Candidate e Handoff.md`;
- criar ou atualizar `docs/sprints para v3/README.md`;
- consolidar o inventário documental das Sprints 0–8;
- congelar o snapshot técnico e editorial;
- auditar e resolver resíduos de modo controlado;
- auditar o Git e preparar um diff final revisável;
- preparar, sem publicar, uma release candidate;
- preparar o handoff e a matriz de validação pública;
- registar backlog fora do Refactor Narrativo V3;
- encerrar o ciclo sem iniciar Sprint 9.

### 6.2 Alterações condicionais

Somente após aprovação da execução e necessidade comprovada:

- criar `scripts/verify-cycle-closure.mjs`;
- adicionar `verify:cycle-closure` ao `package.json`;
- ajustar `.gitignore`;
- corrigir labels ou comentários factualmente incorretos;
- aplicar uma correção mínima de regressão causada pelas Sprints 1–7 que bloqueie um gate.

Cada alteração condicional deve ter causa, ficheiro, diff, evidência, gate afetado e resultado registados. Nenhuma delas autoriza refactor adicional.

### 6.3 Fora de escopo

- nova narrativa, claim, método, caso, LabLog, rota, canal ou entidade;
- redesign, CMS, analytics, dependência, formulário ou funcionalidade;
- inferência de YouTube, LinkedIn, colaboração ou qualquer destino ausente;
- promoção de HORA.city a prova de eficácia ou transferibilidade;
- promoção de Trace Engineer a profissão consolidada;
- promoção de sistemas distribuídos ou mission-critical a competência atual;
- correção editorial retroativa das Sprints 0–7;
- deploy, merge, pull request ou publicação;
- Sprint 9.

## 7. Inventário a consolidar

### 7.1 Rotas e superfícies

Confirmar exatamente as 11 rotas canónicas:

1. `/`;
2. `/payload-journey`;
3. `/learn`;
4. `/cases`;
5. `/usmt`;
6. `/method`;
7. `/protocol`;
8. `/investigation`;
9. `/lab`;
10. `/ecosystem`;
11. `/lablog`.

Inventariar também `/about`, `/lab#sobre`, `/lab#pilot`, `/lab#founder`, Header, menu mobile, Footer, sitemap, robots, canonical, Open Graph, Twitter, JSON-LD e caminhos de continuidade.

Para cada rota, o documento final terá: função, estado, H1, CTA, metadata, canonical, structured data, sitemap, verificador, evidência visual e limitação.

### 7.2 Claims e evidências

Consolidar cada claim como:

- fato confirmado;
- observação derivada de caso;
- hipótese investigativa;
- ambição futura;
- removido;
- proibido.

Preservar o baseline enquanto continuar comprovado:

- um caso real interno, HORA.city, ainda em investigação;
- duas fontes documentais internas;
- zero artefatos técnicos públicos;
- zero evidências externas;
- zero LabLogs estruturados.

Não converter validação local em evidência externa, eficácia, transferibilidade, validação científica ou validação pública.

### 7.3 Classes de evidência

Todo resultado deve ser classificado separadamente:

- fonte;
- conteúdo renderizado;
- build;
- execução local observada;
- pronto para deploy;
- produção;
- evidência externa.

Build e renderização estática não serão descritos como comportamento runtime. “Execução observada” exige processo em execução e observação identificada. “Pronto para deploy” não significa “validado em produção”.

## 8. Estratégia de limpeza controlada

Produzir uma tabela para cada artefato com caminho, origem, estado Git, referência documental, sensibilidade, decisão, justificativa e recuperação.

### Preservar

- documentos e planos aprovados;
- evidências únicas e referenciadas;
- hashes, relatórios e amostras necessários à reprodução;
- o conjunto mínimo de capturas que sustente a validação final.

### Candidatos a remover ou ignorar

- outputs reproduzíveis sem referência;
- caches;
- duplicações;
- tentativas falhadas;
- backups intermediários;
- artefatos vazios ou inválidos;
- ficheiros temporários sem valor documental.

### Política de capturas

A baseline possui 40 PNGs finais e um relatório JSON da Sprint 7. Não remover em massa. Primeiro mapear cada imagem às 55 combinações validadas e selecionar:

- amostras permanentes representativas;
- evidências de interações e larguras críticas;
- comparações explicitamente citadas;
- relatório JSON como índice reproduzível.

Qualquer remoção futura deve ser enumerada, aprovada, recuperável pelo Git quando aplicável e feita somente após remover ou atualizar referências. Não gerar dezenas de novas capturas se o código renderizado não tiver mudado.

### `.tmp/`

O diretório está vazio e ignorado. A decisão prevista é manter a regra `.tmp/` em `.gitignore` e não versionar o diretório vazio. Se reaparecer conteúdo, atribuir item a item antes de remover.

## 9. Consolidação documental

### 9.1 Índice do ciclo

Criar `docs/sprints para v3/README.md` com uma linha verificável por Sprint 0–8:

- objetivo;
- especificação;
- plano realmente localizado;
- documento final;
- dependência;
- estado;
- resultado;
- limitações.

Não inventar planos ausentes nem transformar o índice em narrativa promocional.

### 9.2 Documento final

O documento da Sprint 8 deve responder às 22 perguntas da especificação, conter os inventários de rotas, claims, evidências, verificadores e artefatos, e registar:

- snapshot Git e técnico;
- delta integral do ciclo;
- decisões de limpeza;
- warnings preexistentes sem correção oportunista;
- estado da RC;
- decisão sobre commit, versão, tag e changelog;
- checklist e matriz pós-deploy;
- backlog fora do ciclo;
- limitações e bloqueios.

### 9.3 README e changelog

O `README.md` raiz está localizado; `CHANGELOG.md` não está localizado.

Não criar changelog global automaticamente. Registar o encerramento no documento final e no índice. Qualquer atualização do README raiz deve ser proposta em diff separado e ocorrer apenas se indispensável para corrigir informação comprovadamente obsoleta; ela não é entrega obrigatória deste plano.

## 10. Verificador de encerramento

O conjunto canónico atual possui nove comandos:

- `verify:foundation`;
- `verify:ai-readiness`;
- `verify:homepage`;
- `verify:lab`;
- `verify:learn`;
- `verify:method-practice`;
- `verify:cases-evidence`;
- `verify:navigation-discovery`;
- `verify:refactor-v3`.

`validate-navigation-responsive.mjs` é um auxiliar de validação, não um décimo comando `verify:*`.

Na execução, confirmar a necessidade de `verify:cycle-closure`. A recomendação é criá-lo como orquestrador leve de contratos de encerramento, sem duplicar os verificadores anteriores. Deve validar:

- presença e coerência do índice e dos documentos finais;
- conjunto exato das 11 rotas;
- resultado de `verify:refactor-v3`;
- ausência de novas rotas, canais, claims e artefatos temporários não autorizados;
- ausência de paths locais em conteúdo público;
- estado explícito da produção;
- integridade do conjunto.

O verificador não deve apagar ficheiros, modificar conteúdo, executar deploy ou tratar documentação histórica como conteúdo público.

## 11. Auditoria Git

Registar antes e depois:

- branch, upstream e ahead/behind;
- commit anterior à Sprint 7, `HEAD` e eventual commit final autorizado;
- commits do ciclo;
- staged, unstaged, untracked e ignored;
- autor de cada alteração preexistente quando comprovável;
- `git diff --stat`, `--numstat`, `--name-status` e `--check`;
- ficheiros adicionados, modificados, removidos e binários;
- segredos, paths e dados sensíveis no diff;
- tags e padrão de versionamento existente.

Rever separadamente:

1. implementação consolidada em `b8a746f`;
2. documentos das Sprints 0–7;
3. evidências visuais;
4. versão incorporada e delta atual de `sprint 8.md`;
5. entregas documentais da Sprint 8;
6. qualquer script condicional de encerramento.

Não usar reset destrutivo, checkout de descarte ou limpeza ampla. Não stagear tudo por padrão.

## 12. Estratégia de release candidate

Uma RC somente poderá ser declarada quando:

- lint, TypeScript, build e todos os verificadores passarem;
- as 11 rotas estiverem cobertas;
- documentação e inventários estiverem completos;
- alterações e artefatos estiverem atribuídos;
- segurança e privacidade não tiverem bloqueios;
- o diff candidato estiver congelado por commit exato ou manifesto de hashes;
- produção continuar classificada como pendente.

Formulação permitida:

`O estado local está preparado como release candidate do Refactor Narrativo V3.`

Não declarar versão publicada, release pública, deploy ou validação em produção.

### Versão

O projeto declara `0.2.0` e foi localizada a tag `v0.1.0`. Isso não basta para inferir uma nova versão. A execução deve auditar a política real e apresentar patch, minor, major ou RC interna como decisão humana. Sem decisão, não alterar `package.json`.

### Commit

Preparar grupos de stage explícitos e uma revisão final. Não criar commit sem autorização adicional inequívoca.

Mensagem candidata, sujeita ao padrão do repositório:

`refactor: conclude Payload Journey LAB narrative v3`

### Tag

Não inventar nome nem criar tag. Após eventual commit autorizado, propor nome, mensagem e commit alvo conforme o padrão real e aguardar autorização separada.

## 13. Handoff de deploy

### Pré-deploy

- confirmar commit ou manifesto exato da RC;
- rever diff, versão, branch de destino e variáveis reais;
- executar todos os gates sequencialmente;
- confirmar domínio, redirects, sitemap, robots, canonical e imagens sociais;
- confirmar zero segredo e zero path local em superfície pública;
- confirmar apenas canais reais;
- registar responsável, janela e rollback sem inventar provider.

### Deploy

Não executar na Sprint 8 sem autorização humana específica. O runbook deve usar apenas provider e workflow efetivamente localizados.

### Pós-deploy

Preparar matriz com item, URL, expectativa, ferramenta, evidência, responsável, resultado e estado. Até observação pública real, todas as linhas ficam:

`Pendente de deploy`

Cobrir 11 rotas, `/about`, âncoras, canonical, sitemap, robots, metadata, cards sociais, JSON-LD, navegação, links, console, network, cache, 404, performance, responsividade e acessibilidade básica.

Udemy requer validação manual; o HTTP 403 automatizado permanece limitação. YouTube permanece ausente até URL canónica confirmada. LinkedIn institucional e perfil pessoal continuam separados e só entram como URL se confirmados.

## 14. Validação técnica e visual

Executar sequencialmente, sem builds concorrentes:

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

O último comando só entra após criação aprovada e bem-sucedida do verificador. Caso o plano de execução decida justificadamente não o criar, registar a decisão e executar os nove comandos existentes.

Para cada comando, registar início, duração, exit code, resultado, warnings preexistentes, correção efetuada e repetição.

### Visual e acessibilidade

Reutilizar a matriz válida da Sprint 7 se nenhum ficheiro renderizado mudar:

- 11 rotas;
- 320, 375, 768, 1024 e 1440 px;
- 55 combinações;
- 40 capturas e um relatório JSON preservados.

Se houver alteração renderizada, revalidar somente a superfície afetada e o impacto transversal comprovável. Confirmar landmarks, H1, headings, foco, teclado, menu mobile, Escape, retorno de foco, `aria-current`, zoom, contraste, links, status, Footer e continuidade. Não declarar certificação WCAG.

### Performance

A baseline da Sprint 7 é:

| Métrica | Estado |
|---|---:|
| páginas estáticas | 17 |
| tamanho por rota temática | 1,44 kB |
| First Load JS temático | 94,4 kB |
| JS compartilhado | 87,2 kB |
| Client Components | 1 |
| dependências runtime | 4 |
| dependências de desenvolvimento | 8 |

Recalcular após qualquer alteração técnica. Build demonstra compilação e prerenderização, não runtime nem produção.

## 15. Segurança e privacidade

Auditar conteúdo público, documentos de entrega, diff e staged quanto a:

- secrets, tokens e credenciais;
- paths locais e localhost;
- dados pessoais e identificadores;
- logs e screenshots;
- metadata e JSON-LD;
- canais e URLs não confirmados;
- artefatos ignorados;
- histórico a incluir na RC.

Não publicar material privado para satisfazer um inventário. Uma ocorrência histórica deve ser classificada e submetida à decisão humana; uma ocorrência pública bloqueia a RC.

## 16. Riscos e mitigação

| Risco | Sinal | Mitigação |
|---|---|---|
| atribuição incorreta | mudança externa sem origem comprovada | pausar, recolher hash/timestamp/Git e pedir decisão |
| perda da Sprint 7 | hash ou diff inesperado | comparar hashes e bloquear alterações retroativas |
| claim drift | metadata, JSON-LD ou texto amplia promessa | matriz final e `verify:refactor-v3` |
| evidence drift | contagens maiores sem fonte | inventário por caminho e estado de acesso |
| documentation drift | documento não corresponde à fonte | ligar cada conclusão a ficheiro e hash |
| link drift | canal ausente ou 403 | manter estado ausente/manual/limitado |
| navigation drift | rota nova ou caminho inacessível | inventário exato e verificadores |
| validation drift | script órfão ou gate não chamado | mapa comando–script–contrato |
| production drift | local tratado como público | matriz pós-deploy pendente |
| limpeza destrutiva | remoção ampla ou não atribuída | decisão item a item e rollback pelo Git |
| RC ambígua | candidato sem commit ou manifesto | fixar referência exata e hashes |
| expansão de escopo | correção vira nova refatoração | diff mínimo, gate associado e aprovação |

## 17. Rollback

- documentação nova não staged: remover apenas após confirmar caminho exato e autorização;
- documentação tracked: reverter por novo diff explícito, nunca por reset amplo;
- artefato versionado removido: restaurar a partir do commit identificado;
- script condicional: reverter somente o ficheiro e a entrada correspondente em `package.json`;
- correção mínima: manter patch isolado para reversão;
- RC sem commit: usar manifesto de hashes para retornar à baseline;
- commit autorizado: registar parent e preparar `git revert`, sem executar automaticamente;
- tag ou deploy: fora desta execução e sujeitos a runbook e autorização próprios.

## 18. Sequência de execução proposta

1. Verificar o hash aprovado deste plano.
2. Repetir a atribuição de `sprint 8.md` e de qualquer mudança externa.
3. Confirmar hashes e imutabilidade das Sprints 0–7.
4. Completar o gate documental integral.
5. Congelar branch, commits, ferramentas, versão e worktree.
6. Inventariar documentos, planos, verificadores, rotas, claims e evidências.
7. Auditar temporários, ignored, capturas e referências.
8. Submeter decisões destrutivas ou ambíguas ao gate humano.
9. Criar o índice e o documento final da Sprint 8.
10. Criar o verificador de encerramento somente se a necessidade for confirmada.
11. Executar segurança, privacidade e `git diff --check`.
12. Executar gates técnicos sequenciais.
13. Reutilizar ou atualizar evidência visual conforme o delta renderizado.
14. Congelar métricas, warnings e classes de evidência.
15. Preparar manifesto da RC, proposta de commit e decisão de versão/tag.
16. Preparar handoff, rollback e matriz pós-deploy.
17. Rever o diff integral e confirmar ausência de Sprint 9.
18. Completar o documento final e aguardar decisões humanas sobre Git e deploy.

## 19. Gates finais

| Gate | Critério |
|---|---|
| autorização | plano aprovado por hash e execução explicitamente autorizada |
| atribuição | zero alteração sem origem ou decisão |
| preservação | hashes das Sprints 0–7 explicados e intactos |
| documental | índice e documento final completos |
| editorial | claims e limitações proporcionais |
| evidências | apenas artefatos localizados e estados comprovados |
| rotas | exatamente 11 rotas canónicas e contratos auxiliares |
| navegação | descoberta, foco e mobile preservados |
| metadata | sem claim novo e coerente com conteúdo |
| técnico | lint, TypeScript e build aprovados |
| verificadores | nove atuais e closure, se criado, aprovados |
| visual | 55 combinações válidas ou deltas revalidados |
| acessibilidade | contratos observados sem alegação de certificação |
| performance | baseline comparada e regressões explicadas |
| segurança | zero exposição pública bloqueadora |
| limpeza | todos os artefatos classificados e decisões registadas |
| Git | diff revisto, `diff --check` limpo e mutações autorizadas |
| RC | candidato identificado sem alegação de produção |
| handoff | checklist, responsável, rollback e matriz pendente |
| proteção | nenhum deploy, Sprint 9 ou novo ciclo não autorizado |

## 20. Critérios de encerramento

A Sprint 8 só poderá ser concluída quando todos os gates aplicáveis passarem, o documento final estiver completo, a RC estiver identificada, o Git estiver integralmente atribuído e o handoff puder ser reproduzido.

Sem deploy, o único estado final permitido é:

`Refactor Narrativo V3 encerrado localmente. Release candidate preparada. Deploy e validação pública permanecem pendentes de autorização humana.`

Se um gate falhar:

`Sprint 8 não concluída. O Refactor Narrativo V3 permanece aberto até a resolução dos bloqueios registrados.`

## 21. Proteção contra Sprint 9

- não criar `sprint 9.md`, plano, branch, issue, rota ou backlog com estatuto de sprint;
- classificar trabalho futuro apenas em `Fora do Refactor Narrativo V3`;
- não associar datas, promessas ou execução automática às pendências;
- terminar a Sprint 8 no handoff e aguardar autorização humana para qualquer novo ciclo.

## 22. Saída desta fase de planejamento

Esta fase termina quando:

- somente `plano-sprint8.md` tiver sido criado por esta execução;
- `sprint 8.md` permanecer sem alteração por esta execução;
- nenhum ficheiro de implementação tiver sido alterado;
- `git diff --check` passar;
- o SHA-256 do plano for comunicado;
- nenhuma mutação Git ou remota ocorrer;
- a execução aguardar aprovação humana.

