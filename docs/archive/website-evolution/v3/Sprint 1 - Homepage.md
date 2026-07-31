# Sprint 1 — Homepage

## Estado

Sprint 1 concluída em 22 de julho de 2026. A implementação ficou restrita à homepage, aos seus dados e verificadores e a microajustes técnicos partilhados necessários para acessibilidade e responsividade. Nenhuma atividade da Sprint 2 foi iniciada.

## Baseline

| Campo | Valor |
|---|---|
| Data | 2026-07-22 |
| Timezone | Europe/Berlin (CEST) |
| Branch | `refactor/homepage-v0.2.0` |
| Commit inicial | `fc7cdbb73384030c4d6e92b39e07798dac4a2fb5` |
| Commit final | Não criado; o `HEAD` permanece `fc7cdbb73384030c4d6e92b39e07798dac4a2fb5` |
| Estado Git inicial | Implementação rastreada sem alterações; diretório `docs/sprints para v3/` não rastreado |
| Node.js | `v22.19.0` |
| npm | `11.6.3` |
| Next.js observado no build | `14.2.35` |

Os seis gates iniciais passaram antes da implementação: lint, TypeScript, build, foundation, AI-readiness e homepage. O build inicial já emitia duas ocorrências do warning de cache do Webpack `Unable to snapshot resolve dependencies`.

## Fonte da decisão

A implementação segue as dez decisões congeladas em `decisoes humanas.md`, o contrato da Sprint 0 e os seguintes itens do mapa:

- `V3-MAP-HOME-001` a `V3-MAP-HOME-009`: Hero, demo, métodos, caso, ecossistema, público, aprendizagem, síntese institucional e formação;
- `V3-MAP-PJ-004`: preservação integral dos nove nós da demonstração pedagógica;
- `V3-MAP-CASE-001` a `003`: HORA.city como caso real em investigação, não prova geral;
- `V3-MAP-METHOD-001`: métodos como instrumentos distintos;
- `V3-MAP-LAB-001` e `007`: síntese institucional e direção futura;
- `V3-MAP-GLOBAL-007`: verificadores orientados a contrato;
- `CL-011`, `CL-012`, `CL-014`, `CL-016` e `CL-019`: transferibilidade, Trace Engineer, HORA.city e contextos futuros.

Decisões humanas aplicadas:

- H1 canônico adotado sem alteração;
- urgência contemporânea e autoridade humana colocadas no primeiro percurso;
- Udemy removida do Hero e mantida como CTA secundário da formação;
- prazo do piloto de seis meses mantido fora da homepage;
- nenhuma nova rota ou página de método criada;
- divergência do YouTube e canal de colaboração mantidos para a Sprint 6;
- HORA.city apresentado como caso real documentado, sem eficácia universal;
- transferibilidade não declarada como resultado;
- sistemas distribuídos e mission-critical nomeados somente como direção futura;
- narrativa completa da fundadora preservada em `/lab`.

## Antes

### Ordem anterior

1. Hero metodológico;
2. demonstração;
3. métodos;
4. investigação aplicada;
5. ecossistema;
6. público e hipótese;
7. formação e LabLog;
8. síntese do LAB;
9. CTA final com Udemy primária.

### Headings e CTAs anteriores

- H1: “Aprenda a seguir o payload”.
- CTA primário do Hero: âncora para a demonstração.
- CTA secundário do Hero: `/learn#trilha`.
- CTA primário final: curso externo na Udemy.
- O público e a prudência editorial só apareciam depois de demonstração, métodos, caso e ecossistema.

### Metadata anterior

A homepage herdava o título e a descrição institucionais globais de `siteConfig`. O JSON-LD usava os mesmos valores globais, sem posicionamento específico para a tese e a pesquisa da homepage.

### Problemas identificados

- a homepage começava pelo método, não pelo problema contemporâneo;
- público, hipótese e limites estavam enterrados;
- demo e instrumentos antecediam a razão para usá-los;
- evidência existente e perguntas em investigação não tinham separação visual;
- progressão pedagógica de cinco níveis não estava presente;
- Udemy tinha peso excessivo no fechamento;
- o header impunha largura mínima acima do viewport móvel;
- os verificadores protegiam parágrafos completos e o H1 antigo, dificultando a evolução editorial contratada.

## Depois

### Nova arquitetura narrativa

1. Hero / tese;
2. Por que agora;
3. Para quem;
4. Proposta operacional;
5. Demonstração;
6. Métodos;
7. Evidência versus hipótese;
8. Progressão pedagógica;
9. Formação;
10. Ecossistema e continuidade institucional.

O fechamento institucional mantém duas pontes curtas, `/ecosystem` e `/lab`, dentro do décimo estágio de continuidade.

### Headings e CTAs finais

- H1: “O código acelera. A compreensão precisa acompanhar.”
- Hero primário: “Começar pelo Payload Journey” → `/payload-journey`.
- Hero secundário: “Ver o caso HORA.city” → `/cases`.
- Métodos: CTA de síntese → `/method`.
- Evidência: caso → `/cases`; registros → `/lablog`.
- Progressão e formação primária → `/learn`.
- Udemy: CTA externo secundário apenas na seção de formação.
- Continuidade → `/ecosystem` e `/lab`.

### Conteúdo novo ou reformulado

- princípio obrigatório sobre IA e autoridade humana;
- público prioritário e estatuto de hipótese no início;
- cadeia `intenção → evento → payload → interpretação → decisão → estado → efeito`;
- payload como fio condutor, checkpoints como evidência e autoridade de domínio como destino investigativo;
- título contextual da demo: “Veja como uma intenção atravessa o sistema”;
- bloco “O LAB não presume a resposta. Investiga.” com duas categorias explícitas;
- cinco níveis pedagógicos, com níveis 4 e 5 marcados “Horizonte futuro”;
- sistemas distribuídos e mission-critical declarados apenas como direção futura.

### Metadata final

- Título: `Payload Journey LAB — O código acelera. A compreensão precisa acompanhar.`
- Descrição: `Laboratório de Software System Investigation que pesquisa como flow, payload tracing, modelagem, checkpoints e evidências de runtime podem ajudar estudantes e developers a compreender codebases complexas mais cedo.`
- canonical: `/`;
- Open Graph, Twitter e JSON-LD usam a mesma apresentação específica da homepage.

O termo `runtime` na metadata descreve o objeto de pesquisa do LAB. Não é uma classificação dos gates desta sprint.

## Claims alterados

| Texto anterior | Categoria anterior | Texto ou tratamento final | Categoria final | Evidência e razão |
|---|---|---|---|---|
| “Aprenda a seguir o payload” | Entrada metodológica | “O código acelera. A compreensão precisa acompanhar.” | Tese institucional aprovada | Decisão humana 1 e `V3-MAP-HOME-001`; traz a urgência para o H1. |
| “Reduza uma codebase grande a um único flow investigável.” | Benefício pedagógico | Crescimento do software contraposto à capacidade humana de explicá-lo | Problema investigado, sem promessa de resultado | Decisão humana 1; evita apresentar redução como eficácia demonstrada. |
| Métodos podem gerar autonomia e reduzir períodos de explicação | Hipótese com benefício forte | Métodos “podem ajudar” a formar modelo verificável; sem promessa de empregabilidade, onboarding ou autonomia | Hipótese investigativa explícita | `V3-MAP-HOME-006`; não há avaliação externa de resultado. |
| “Um caso real torna o método observável” | Fato sobre aplicação com risco de generalização | HORA.city listado no que existe; eficácia e reprodução permanecem no que o LAB investiga | Fato documental + hipótese separada | Decisão humana 7, `CL-014`; caso real não prova eficácia universal. |
| Formação externa como CTA principal final | Oferta real com peso comercial dominante | `/learn` é primário e Udemy é secundária | Fato sobre caminhos disponíveis | Decisão humana 2 e `V3-MAP-HOME-009`. |
| Transferência como etapa pedagógica sem limite explícito | Ambição futura | Nível 5 futuro, dependente de contextos externos e critérios comparáveis | Direção futura | Decisão humana 8 e `CL-011`; não existe execução externa documentada. |
| Contextos distribuídos e mission-critical implícitos | Ambição futura | Explicitamente “permanecem direção futura” | Direção futura, não competência atual | Decisão humana 9 e `CL-016`. |

## Preservação e migração

### Preservado

- assinatura “Siga o flow. Entenda o sistema.”;
- demonstração pedagógica completa, com nove nós, papéis, perguntas e CTA;
- USMT, Payload Journey e protocolo como três entradas complementares;
- HORA.city e link para `/cases`;
- quatro pilares do ecossistema;
- links para `/learn`, `/lablog`, `/ecosystem` e `/lab`;
- campanha e destino reais da Udemy, agora secundários;
- todas as rotas existentes; nenhuma rota nova foi criada;
- política de YouTube, ausência de CTA falso de contato e decisões editoriais não resolvidas.

### Condensado

- a síntese institucional do LAB permanece curta na homepage e remete a `/lab`;
- os pilares são apresentados como visão geral e remetem a `/ecosystem`;
- a formação é descrita como progressão e remete a `/learn`.

### Movido

- público e hipótese: da sexta seção para o início do percurso;
- demonstração: do segundo bloco para depois da proposta;
- ecossistema: do início para o fechamento;
- Udemy: de CTA primário final para CTA secundário de formação;
- LabLog: do bloco genérico de aprendizagem para o bloco de evidência.

### Removido por redundância

- `HomeLearningSection` deixou de ser renderizada na homepage; seus destinos continuam em progressão/formação (`/learn`) e evidência (`/lablog`);
- o antigo enquadramento comercial do CTA final foi substituído, preservando a oferta real;
- nenhum conteúdo canônico foi apagado das rotas de destino.

## Ficheiros

| Caminho | Razão e tipo | Risco | Validação |
|---|---|---|---|
| `app/page.tsx` | Nova composição, ordem, metadata e JSON-LD da homepage | Alto | lint, TypeScript, build, verificadores e browser |
| `content/payload-journey-lab.ts` | Hero e formação final | Alto editorial | invariantes do homepage verifier |
| `content/routes.ts` | Conteúdo das dez etapas e metadata | Alto editorial | homepage e AI-readiness |
| `components/sections/HomeNarrativeSections.tsx` | Novos blocos Why Now, proposta e progressão | Médio | lint, TypeScript, render e browser |
| `components/sections/HeroSection.tsx` | Tipografia e CTAs responsivos | Médio | capturas 320–1440 |
| `components/sections/HomeMethodOverviewSection.tsx` | CTA canônico `/method` | Baixo | links validados |
| `components/sections/HomePathwaysSections.tsx` | Separação evidência/hipótese | Médio | conceitos, links e render |
| `components/sections/PayloadFlowDemoSection.tsx` | Título contextual opcional só na homepage | Baixo | demo preservada em `/` e `/payload-journey` |
| `components/sections/BetaCtaSection.tsx` | `/learn` primário, Udemy secundária e ID de formação | Médio | link interno/externo e ordem |
| `components/layout/SiteHeader.tsx` | Acentos acessíveis e flex responsivo | Baixo partilhado | todas as rotas, browser e overflow zero |
| `components/layout/MobileNavigation.tsx` | Impedir compressão do botão móvel | Baixo partilhado | 320 e 375 px |
| `types/content.ts` | CTAs finais aceitam interno ou externo | Baixo técnico | TypeScript |
| `lib/structured-data.ts` | JSON-LD recebe metadata específica da homepage | Médio SEO | AI-readiness |
| `scripts/verify-homepage.mjs` | Invariantes da Sprint 1 por conceito, estrutura e claims proibidos | Médio | execução aprovada |
| `scripts/verify-ai-readiness.mjs` | Metadata/JSON-LD e proveniência da homepage | Médio | execução aprovada |
| `scripts/capture-home-responsive.mjs` | Emulação reproduzível das cinco larguras e medição de overflow | Baixo, ferramenta de validação | Edge DevTools |
| `docs/sprints para v3/sprint1-validated-home-*.png` | Evidência visual final em cinco larguras | Nenhum runtime | inspeção visual |
| Este documento | Registro da execução | Nenhum runtime | revisão de escopo |

Os microajustes de `SiteHeader` e `MobileNavigation` afetam o shell partilhado, mas não alteram editorialmente nenhuma rota. A apresentação opcional da demo mantém o comportamento padrão de `/payload-journey`.

## Validação técnica final

Executada sequencialmente, sem builds concorrentes sobre `.next`:

| Ordem | Comando | Resultado |
|---:|---|---|
| 1 | `npm.cmd run lint` | Passou; zero warnings ou errors do ESLint |
| 2 | `npx.cmd tsc --noEmit` | Passou; zero errors |
| 3 | `npm.cmd run build` | Passou; 17 páginas estáticas; homepage com 94,3 kB First Load JS |
| 4 | `npm.cmd run verify:foundation` | Passou |
| 5 | `npm.cmd run verify:ai-readiness` | Passou; 11 rotas canônicas e metadata/JSON-LD coerentes |
| 6 | `npm.cmd run verify:homepage` | Passou; 11 rotas, H1/metadata, links, demo e decisões protegidas |

### Warnings técnicos preexistentes

- duas ocorrências no build: `[webpack.cache.PackFileCacheStrategy] Caching failed for pack: Error: Unable to snapshot resolve dependencies`;
- a política do PowerShell bloqueia `npx.ps1`; a execução oficial usou `npx.cmd`, como especificado no plano;
- `hostingRedirect` permanece `requires-public-validation-after-deploy`, pois não houve deploy nesta sprint;
- o modo simples `--window-size` do Edge no Windows impõe largura mínima interna e produziu tentativas recortadas em 320/375 px. Esses artefatos intermediários foram removidos e substituídos por capturas via emulação DevTools.

Nenhum desses warnings foi corrigido fora do escopo.

## Classificação das evidências

| Classe | O que foi observado | O que não prova |
|---|---|---|
| Evidência de fonte | Diff, conteúdo, tipos, componentes e invariantes nos verificadores | Não prova renderização nem comportamento do browser |
| Conteúdo renderizado | HTML servido localmente com H1, ordem, conceitos, metadata, JSON-LD e links | Não prova interação, layout visual ou produção pública |
| Build | Compilação otimizada e prerenderização estática de 17 páginas | Não é evidência de comportamento runtime |
| Execução observada | Next dev servido localmente e homepage aberta no Edge; DOM medido e capturas inspecionadas | Não prova ambiente de produção, analytics ou comportamento de utilizadores reais |

Nenhum resultado de build ou renderização estática foi rotulado como evidência runtime. A única execução observada foi a sessão local no navegador. Não houve validação em produção.

## Validação visual

### Matriz final

| Largura | `innerWidth` | `clientWidth` | `scrollWidth` | Overflow horizontal |
|---:|---:|---:|---:|---:|
| 320 | 320 | 320 | 320 | 0 px |
| 375 | 375 | 375 | 375 | 0 px |
| 768 | 768 | 768 | 768 | 0 px |
| 1024 | 1024 | 1024 | 1024 | 0 px |
| 1440 | 1440 | 1440 | 1440 | 0 px |

Capturas finais:

- `sprint1-validated-home-320.png`;
- `sprint1-validated-home-375.png`;
- `sprint1-validated-home-768.png`;
- `sprint1-validated-home-1024.png`;
- `sprint1-validated-home-1440.png`.

Resultado da inspeção:

- primeiro viewport comunica tese, problema, hipótese e dois próximos passos;
- H1 quebra de forma legível em mobile e mantém hierarquia em tablet/desktop;
- CTAs empilham em mobile e permanecem distintos;
- header preserva logo, nome truncado quando necessário e menu acessível;
- contraste permanece dentro dos gates da foundation;
- a demo mantém nove nós e passa a responder à proposta anterior;
- progressão separa presente e futuro;
- continuidade com `/payload-journey`, `/cases`, `/method`, `/learn` e `/lab` foi confirmada pelos links e verificadores.

## Respostas que a homepage entrega

1. O LAB existe agora porque produção acelerada não garante compreensão.
2. Prioriza estudantes, developers em início de carreira e pessoas diante de codebases desconhecidas ou legadas.
3. Investiga a perda de causalidade, clareza e autoridade sobre sistemas em crescimento.
4. Pretende desenvolver compreensão investigativa baseada em flow, payload e evidências.
5. Payload é o fio condutor para seguir transformações, decisões, estado e efeito.
6. Já existem métodos, demo, trilha, LabLog e o caso HORA.city.
7. Benefícios pedagógicos, transferência e generalização continuam hipóteses.
8. O percurso pode começar por Payload Journey, caso, métodos ou `/learn`.

## Auditoria de escopo e pendências

- Alterações editoriais autorizadas: somente homepage.
- Microajustes partilhados: header/mobile navigation e API opcional da demo; nenhum conteúdo de outra rota foi alterado.
- Nenhuma rota criada ou removida.
- Nenhum warning preexistente corrigido.
- Nenhum commit criado e nenhum deploy realizado.
- Pendente para Sprint 6: unificação do canal oficial do YouTube e eventual canal real de colaboração.
- Pendente de evidência externa: transferibilidade, eficácia educacional e validade fora do caso atual.
- Pendente de produção: validação do redirect no hosting após deploy.
- Sprint 2 não iniciada.

## Conclusão

Sprint 1 concluída. Aguardando aprovação humana antes da Sprint 2.
