# Plano de Execução — Payload Journey LAB Propagation Baseline

## Referência

Este plano operacionaliza a tarefa descrita em:

`docs/PropagationBaseline/Codex-Task-Payload-Journey-LAB-Propagation-Baseline.md`

Data de referência da baseline: **27 de julho de 2026**.

## Contexto confirmado

- Repositório: `PayloadJourneyLAB`
- Raiz: `C:\Users\VdSR2\Desktop\PJLAB\CODE v2`
- Branch observada durante o planejamento: `files`
- Stack: Next.js 14, App Router, React, TypeScript e Tailwind CSS
- Gerenciador de pacotes: npm
- Rotas preliminarmente observáveis: 12 páginas no diretório `app/`, além do redirecionamento `/about`
- Documentação existente: aproximadamente 328 arquivos
- Estado preexistente: `docs/PropagationBaseline/` aparece como não rastreado e deve ser preservado
- Nenhum `AGENTS.md` aplicável foi encontrado
- Escopo desta tarefa: investigação, inventário, documentação e evidências; nenhuma mudança de produção

## Princípios de execução

1. Não inferir publicação pública apenas pela existência de um arquivo.
2. Distinguir:
   - presente no repositório;
   - conectado a uma rota;
   - incluído no build;
   - publicamente acessível;
   - indexável;
   - externamente verificado.
3. Usar evidências por caminho, rota, arquivo de configuração, linha ou seção, resultado de comando ou URL efetivamente verificada.
4. Usar `External verification required.` quando a evidência não estiver disponível.
5. Não modificar comportamento, conteúdo, lógica, estilo, rotas ou configuração de produção.
6. Não instalar dependências.
7. Não registrar valores de segredos ou variáveis de ambiente.
8. Tratar **HORA.city** como **Payload Journey LAB — Founding Reference Case 001**.
9. Separar explicitamente implementação confirmada, modelo conceitual, método proposto, rascunho, hipótese, achado e restauração.
10. Não fazer commit ou push.

## Plano de execução

### 1. Registrar e congelar o estado inicial

Capturar evidências de:

- raiz, nome e remoto do repositório;
- branch e último commit;
- `git status --short`;
- stack, scripts e dependências;
- árvore de diretórios;
- arquivos rastreados e não rastreados;
- GitHub metadata disponível;
- repositórios irmãos acessíveis;
- limitações do workspace.

Salvar resultados sanitizados em `evidence/commands/`. Não coletar valores de variáveis de ambiente.

### 2. Criar a estrutura documental

Criar exclusivamente:

```text
docs/
└── lab-propagation/
    └── 2026-07-27-baseline/
        ├── README.md
        ├── executive-summary.md
        ├── asset-inventory.md
        ├── asset-inventory.csv
        ├── asset-inventory.json
        ├── technical-discovery-audit.md
        ├── route-and-link-map.md
        ├── semantic-consistency-audit.md
        ├── external-verification-checklist.md
        ├── case-file-001-status.md
        ├── next-actions.md
        └── evidence/
            ├── commands/
            ├── routes/
            ├── metadata/
            ├── links/
            ├── documents/
            └── case-file-001/
```

O diretório `docs/` é apropriado porque já concentra auditorias, sprints, baselines e documentação técnica.

### 3. Executar descoberta sistemática

Examinar:

- `app/`: páginas, layouts, sitemap e robots;
- `components/`: navegação, CTAs, conteúdo renderizado e JSON-LD;
- `content/`: definições, métodos, casos e HORA.city;
- `config/`: domínio, canais e entidades canônicas;
- `lib/`: metadata e structured data;
- `public/`: marca e ativos públicos;
- `docs/`: auditorias, planos, relatórios, imagens e documentos históricos;
- `scripts/`: verificações já existentes;
- `next.config.mjs`: redirects e regras de publicação;
- arquivos de configuração e metadata do GitHub, se existentes.

Excluir `node_modules/` e `.next/` da análise semântica. Usar `.next/` apenas como evidência auxiliar de build, nunca como fonte canônica.

### 4. Construir o inventário de ativos

Localizar ativos e ocorrências relacionados a:

- Payload Journey LAB;
- Payload Journey;
- Payload Tracing;
- Software System Investigation;
- USMT e SMT Core;
- Reverse Payload Journey;
- Track to Origin e Track Mode;
- Trace Engineering e Trace Engineer;
- HORA.city e Case File 001;
- LabLog;
- Udemy, YouTube, LinkedIn e GitHub;
- papers, relatórios, glossário e materiais de curso;
- diagramas, música ou playlists;
- perfil de autoria, newsletter, Instagram, contato e páginas institucionais.

Cada ativo deve receber:

- ID estável, como `PJL-ROUTE-001`, `PJL-DOC-001` ou `PJL-CASE-001`;
- os 24 campos obrigatórios definidos no payload;
- estado e prioridade controlados;
- evidência por arquivo, rota e linha ou seção;
- nível de confiança;
- indicação explícita de verificação externa.

As versões Markdown, CSV e JSON devem representar exatamente o mesmo conjunto de registros.

### 5. Mapear rotas e relacionamentos de links

Produzir a tabela de rotas a partir de:

- `app/**/page.tsx`;
- `content/routes.ts`;
- header, footer e navegação móvel;
- CTAs em componentes e conteúdos;
- redirects do Next.js;
- sitemap e robots.

Para cada rota, determinar:

- origem;
- finalidade;
- entradas e saídas;
- presença na navegação;
- condição de página órfã;
- canonical;
- indexabilidade configurada;
- publicação observável no repositório;
- necessidade de verificação pública.

Criar um diagrama Mermaid para os caminhos:

```text
método → investigação → caso HORA.city → formação/curso
```

### 6. Auditar metadata, structured data e search-readiness

Verificar página por página:

- title e description;
- canonical;
- Open Graph e Twitter;
- imagens sociais;
- autoria e datas;
- idioma e alternates;
- favicon e marca;
- sitemap e robots;
- redirects;
- `noindex`;
- headers;
- JSON-LD;
- analytics e tags de verificação;
- suporte a IndexNow.

Catalogar os schemas encontrados, como:

- `Organization`;
- `WebSite`;
- `WebPage`;
- `Person`;
- `ProfilePage`;
- `Article`;
- `VideoObject`;
- `Course`;
- `BreadcrumbList`.

Não confundir presença no código com validação ou indexação pública.

### 7. Auditar links e CTAs

Extrair e classificar:

- links internos;
- URLs externas;
- Udemy;
- YouTube;
- LinkedIn;
- GitHub;
- contato e publicações.

Verificar localmente:

- destinos internos inexistentes;
- anchors ausentes;
- rotas antigas;
- placeholders;
- URLs Udemy divergentes;
- páginas sem progressão;
- CTAs duplicados, excessivos ou irrelevantes.

Verificar links externos apenas quando houver acesso de rede. Caso contrário, registrar `External verification required.`.

### 8. Auditar consistência semântica

Pesquisar formas canônicas e concorrentes, registrando arquivo e linha ou seção:

- `Payload Journey LAB` e outras capitalizações;
- `Trace Engineering` e `Tracing Engineering`;
- `HORA.city` e `Aura.city`;
- USMT, SMT Core, RPJ e Track to Origin;
- operação, payload, estado, evento, checkpoint e authority;
- conceitos apresentados como implementação;
- hipóteses apresentadas como fatos;
- definições duplicadas ou conflitantes;
- documentos provisórios apresentados como finais.

O relatório não deve decidir novas definições canônicas. Deve encaminhar conflitos para decisão humana.

### 9. Consolidar HORA.city — Case File 001

Usar principalmente:

- `README.md`;
- `content/hora-city.ts`;
- `content/cases.ts`;
- `content/lab-definitions.ts`;
- páginas `/cases`, `/lablog`, `/investigation`, `/method` e `/protocol`;
- documentação histórica relevante.

Classificar cada elemento como:

- evidência confirmada;
- interpretação;
- hipótese;
- restauração proposta;
- restauração implementada;
- resultado verificado;
- não determinado.

Não declarar o caso encerrado sem evidência suficiente de restauração e verificação.

Avaliar a prontidão das quatro edições:

1. Executive Case Dossier;
2. Full Technical Investigation Record;
3. Evidence Repository;
4. Teaching Edition.

Para cada edição, registrar o que já existe e o que está ausente.

### 10. Separar verificações externas

Criar checklist para:

- Google Search Console;
- Bing Webmaster Tools;
- analytics e tráfego;
- LinkedIn;
- YouTube;
- Udemy;
- visibilidade do GitHub;
- ORCID;
- Zenodo;
- DEV Community;
- Medium;
- Instagram;
- backlinks;
- referências universitárias e institucionais.

Cada item deve conter:

- o que verificar;
- onde verificar;
- evidência necessária;
- responsável pelo acesso;
- prioridade;
- relação com o ciclo de propagação de 30 dias.

Nada será marcado como verificado apenas por existir uma URL no código.

### 11. Calcular métricas reproduzíveis

Contar somente elementos observáveis no repositório:

- ativos;
- rotas públicas;
- páginas canônicas;
- entradas de glossário;
- case files;
- papers e relatórios;
- páginas com metadata completa;
- páginas com structured data;
- links para Udemy;
- links para HORA.city;
- páginas órfãs;
- links internos quebrados;
- conflitos terminológicos;
- documentos provisórios;
- artefatos de HORA.city;
- achados críticos não resolvidos.

Métricas externas devem receber:

`Not measured from repository on 27 July 2026.`

### 12. Redigir síntese e próximas ações

Preparar:

- `executive-summary.md` com no máximo aproximadamente duas páginas;
- cinco ativos existentes mais fortes;
- cinco lacunas mais urgentes;
- status fundamentado do Case File 001;
- ações Critical, High, Medium e Low.

Cada ação deve incluir:

- motivo;
- evidência;
- tipo de responsável;
- esforço estimado;
- dependência;
- critério de conclusão.

### 13. Validar e encerrar

Executar:

- validação sintática do JSON;
- validação de colunas e registros do CSV;
- comparação entre os três formatos do inventário;
- verificação dos links Markdown locais;
- verificações relevantes disponíveis em `scripts/`;
- build do projeto, se puder ser executado sem alterar produção;
- `git diff --stat`;
- `git status --short`.

Confirmar ao final:

- somente documentação e evidências foram criadas ou alteradas;
- nenhuma fonte ou configuração de produção mudou;
- todo achado crítico possui referência de evidência;
- hipóteses estão separadas de achados;
- nenhuma métrica externa foi fabricada;
- nenhum commit ou push foi realizado.

## Ordem recomendada dos entregáveis

1. Evidências de descoberta.
2. Inventário de ativos em JSON.
3. Inventários equivalentes em CSV e Markdown.
4. Auditoria técnica.
5. Mapa de rotas e links.
6. Auditoria semântica.
7. Status do Case File 001.
8. Checklist externo.
9. Métricas da baseline.
10. Próximas ações.
11. Resumo executivo.
12. README e validação final.

Essa ordem reduz retrabalho porque os relatórios narrativos serão derivados das evidências e do inventário já consolidados.

## Critérios de conclusão

A execução estará concluída somente quando:

- a estrutura documental estiver completa;
- o repositório tiver sido sistematicamente inspecionado;
- todos os ativos observáveis relacionados ao LAB estiverem inventariados;
- rotas e links públicos estiverem mapeados;
- conflitos semânticos estiverem registrados;
- search-readiness estiver avaliada;
- o status do HORA.city Case File 001 estiver documentado;
- verificações externas estiverem explicitamente separadas;
- métricas não contiverem estimativas inventadas;
- somente documentação e evidências tiverem sido criadas;
- o relatório final estiver fundamentado por evidências.

