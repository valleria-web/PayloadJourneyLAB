# SPRINT 11 — CANONICALIZAÇÃO E PROVENIÊNCIA SEMÂNTICA

## MISSÃO

Implementar as correções prioritárias identificadas pela auditoria de AI-friendliness do Payload Journey LAB.

Auditoria de origem:

`docs/ai-readiness/01-pjl-ai-friendliness-audit.md`

Resultado auditado:

* pontuação geral: `78/100`;
* classificação: `Muito AI-friendly`;
* recomendações P0: `0`;
* recomendações P1: `4`;
* recomendações P2: `6`;
* recomendações P3: `3`.

Esta sprint deverá atuar exclusivamente sobre as quatro lacunas prioritárias:

1. inconsistência entre o host público `www` e as URLs canônicas sem `www`;
2. inconsistência na expansão oficial da sigla USMT;
3. proveniência editorial insuficientemente explícita;
4. JSON-LD válido, porém genérico e pouco conectado às entidades e aos conceitos reais do LAB.

O objetivo não é adicionar volume de metadata ou marcação estruturada.

O objetivo é fazer com que humanos, mecanismos de busca e sistemas de IA recebam sinais:

* únicos;
* coerentes;
* verificáveis;
* semanticamente conectados;
* sustentados pelo conteúdo público.

---

# RESULTADO ESPERADO

Ao final desta sprint:

* `https://www.payloadjourneylab.com` deverá ser o host canônico único;
* todas as URLs absolutas deverão usar o host canônico;
* o domínio sem `www` deverá redirecionar permanentemente para `www`;
* canonical, sitemap, robots, Open Graph e JSON-LD deverão concordar;
* USMT deverá possuir uma expansão oficial única;
* autoria e origem deverão estar explícitas nas páginas correspondentes;
* os dados estruturados deverão representar as entidades reais sem inventar empresa, equipa, clientes, certificações ou relações jurídicas;
* nenhuma política de crawler deverá ser alterada indevidamente;
* nenhuma nova dependência ou fronteira Client deverá ser criada;
* o conteúdo continuará disponível no HTML inicial;
* as recomendações P1 deverão ser resolvidas ou justificadamente reduzidas.

---

# RELAÇÃO COM A SPRINT 10

Esta sprint não deve executar implicitamente a unificação de `/lab` e `/about`.

Antes de iniciar, verificar o estado atual do repositório.

## Caso a Sprint 10 já esteja implementada

Usar `/lab` como fonte institucional canônica para:

* identidade do LAB;
* origem;
* missão;
* visão;
* princípio;
* atuação;
* fundadora;
* autoria.

Garantir que `/about` permaneça apenas como redirect permanente, caso essa tenha sido a decisão implementada.

## Caso a Sprint 10 ainda não esteja implementada

Não incorporar o seu escopo nesta sprint.

Preservar as rotas institucionais existentes e aplicar apenas as correções de canonicalização e proveniência que forem possíveis sem unificá-las.

Registrar no relatório que a consolidação institucional permanece dependente da Sprint 10.

Não modificar nem adicionar ao staging documentos untracked das Sprints 10 ou 11.

---

# REGRA CENTRAL

## UMA ENTIDADE, UMA FONTE CANÔNICA, UMA FORMA OFICIAL

A implementação deve seguir três princípios:

### Uma entidade

Cada entidade pública deve ser representada de maneira consistente:

* Payload Journey LAB;
* Valéria dos Santos Reiser;
* Universal System Modeling Template — USMT;
* site oficial;
* páginas temáticas.

### Uma fonte canônica

Cada página e conceito deve ter uma URL principal inequívoca.

### Uma forma oficial

Nomes e relações não podem variar entre:

* conteúdo visível;
* metadata;
* sitemap;
* robots;
* Open Graph;
* JSON-LD;
* Header;
* Footer;
* links internos.

---

# FASE 1 — CONGELAMENTO DO BASELINE

Antes de modificar qualquer arquivo:

1. Registrar:

   * branch;
   * commit;
   * versão;
   * status;
   * arquivos modificados;
   * arquivos untracked;
   * arquivos staged;
   * dependências;
   * rotas públicas;
   * Server Components;
   * Client Components.

2. Confirmar:

   * se a Sprint 10 foi implementada;
   * qual é a rota institucional atual;
   * quais redirects existem;
   * qual domínio a produção utiliza;
   * qual domínio os canonicals utilizam;
   * qual domínio o sitemap utiliza;
   * qual domínio o robots utiliza;
   * qual domínio o JSON-LD utiliza;
   * qual domínio o Open Graph utiliza.

3. Ler integralmente:

   * a auditoria de AI-friendliness;
   * a documentação das Sprints 8 e 9;
   * a documentação da Sprint 10, caso esteja implementada;
   * os arquivos atuais de metadata, sitemap, robots e JSON-LD.

4. Executar:

   * lint;
   * TypeScript;
   * verificadores existentes;
   * testes;
   * build de produção.

5. Guardar o HTML inicial de todas as rotas públicas para comparação.

6. Registrar todas as ocorrências de:

   * `payloadjourneylab.com`;
   * `www.payloadjourneylab.com`;
   * `USMT`;
   * `Universal System Model Template`;
   * `Universal System Modeling Template`;
   * nomes alternativos ou traduções da USMT;
   * autoria;
   * creator;
   * founder;
   * author;
   * publisher.

Não iniciar alterações antes de concluir esse inventário.

---

# FASE 2 — HOST CANÔNICO ÚNICO

## DECISÃO CANÔNICA

Adotar como origem oficial:

`https://www.payloadjourneylab.com`

Essa decisão corresponde ao comportamento materialmente observado na produção durante a auditoria.

O domínio sem `www` deverá funcionar apenas como origem alternativa de entrada e redirecionar permanentemente para o host canônico.

## REGRA

Depois da implementação, não devem existir sinais contraditórios entre:

* host entregue em produção;
* canonical;
* sitemap;
* robots;
* metadata;
* Open Graph;
* JSON-LD;
* URLs absolutas;
* redirects.

---

# FASE 3 — CONFIGURAÇÃO CENTRALIZADA DO SITE

Identificar se já existe uma única fonte de verdade para os dados do site.

Caso exista, reutilizá-la.

Caso não exista, criar uma configuração server-side simples, sem dependências, que concentre informações como:

* nome do site;
* origem canônica;
* domínio;
* idioma;
* descrição institucional;
* nome confirmado da fundadora;
* nome oficial da USMT;
* perfis externos confirmados.

Exemplo conceitual:

```ts
export const siteConfig = {
  name: "Payload Journey LAB",
  origin: "https://www.payloadjourneylab.com",
  language: "pt-BR",
  usmtName: "Universal System Modeling Template",
};
```

O exemplo não deve ser copiado sem verificar:

* estrutura atual;
* idioma real declarado;
* nomes públicos;
* arquivos existentes;
* convenções do projeto.

Não criar uma segunda configuração concorrente.

Não mover informações para Client Components.

Não expor dados históricos ou internos desnecessariamente no bundle.

---

# FASE 4 — REDIRECT DO DOMÍNIO RAIZ PARA `WWW`

Configurar redirect permanente:

`https://payloadjourneylab.com/*`

para:

`https://www.payloadjourneylab.com/*`

Preservar:

* path;
* query string;
* fragmento quando suportado pelo navegador;
* protocolo seguro.

Usar redirect permanente apropriado, preferencialmente `308`, salvo restrição fundamentada da infraestrutura.

## IMPLEMENTAÇÃO

Primeiro identificar onde o redirect deve ser configurado:

* framework;
* middleware;
* configuração do hosting;
* arquivo de redirects;
* plataforma de deploy;
* DNS ou proxy.

Preferir a camada mais externa e eficiente disponível no projeto.

Não criar redirect client-side.

Não renderizar a página antes de redirecionar.

Não gerar cadeia de redirects.

## CASO A INFRAESTRUTURA NÃO ESTEJA NO REPOSITÓRIO

Se o redirect depender de configuração externa não acessível:

1. implementar no repositório todos os sinais canônicos;
2. documentar a configuração exata necessária na infraestrutura;
3. criar um teste ou verificador que detecte a divergência pública;
4. não afirmar que o redirect de produção foi corrigido antes do deploy e da configuração externa.

A implementação deve distinguir:

* correção concluída no código;
* ação ainda necessária no hosting;
* validação pública pendente de deploy.

---

# FASE 5 — METADATA CANÔNICA

Atualizar a configuração global de metadata e a metadata de cada rota.

Garantir:

* `metadataBase` apontando para `https://www.payloadjourneylab.com`, quando aplicável;
* canonical absoluto ou corretamente resolvido;
* uma URL própria para cada página;
* Open Graph utilizando o host canônico;
* imagens Open Graph utilizando URLs canônicas;
* títulos coerentes;
* descriptions coerentes;
* ausência de URLs sem `www`;
* ausência de canonical duplicado;
* ausência de canonical apontando para outra rota sem justificativa.

## ROTAS

Auditar todas as rotas públicas reais.

Como referência:

* `/`
* `/payload-journey`
* `/learn`
* `/cases`
* `/usmt`
* `/method`
* `/protocol`
* `/investigation`
* `/lab`
* `/ecosystem`
* `/lablog`
* `/about`, caso ainda exista como página pública

Usar o estado atual do repositório como fonte de verdade.

---

# FASE 6 — SITEMAP

Atualizar o sitemap para utilizar exclusivamente:

`https://www.payloadjourneylab.com`

Garantir:

* todas as rotas indexáveis presentes;
* nenhuma rota de redirect presente como página indexável;
* nenhuma URL sem `www`;
* nenhuma rota 404;
* nenhuma rota interna ou técnica;
* nenhuma página órfã;
* ausência de duplicação;
* datas de modificação apenas quando houver fonte real e mantida.

Não utilizar a data do build como falsa data editorial.

Caso `/about` seja um redirect decorrente da Sprint 10, removê-lo do sitemap.

---

# FASE 7 — ROBOTS

Preservar a intenção atual da política de crawlers.

Estado auditado:

* crawlers gerais: permitidos;
* `OAI-SearchBot`: permitido;
* `ChatGPT-User`: permitido;
* `GPTBot`: bloqueado.

Não alterar essa decisão nesta sprint.

Atualizar apenas os elementos necessários para a canonicalização, especialmente:

`Sitemap: https://www.payloadjourneylab.com/sitemap.xml`

Validar:

* sintaxe;
* grupos;
* diretivas;
* ausência de bloqueios acidentais;
* host canônico;
* conteúdo servido com tipo adequado.

Não interpretar bloqueio de treinamento como bloqueio de busca ou de acesso iniciado pelo utilizador.

---

# FASE 8 — NORMALIZAÇÃO OFICIAL DA USMT

## FORMA OFICIAL

Utilizar consistentemente:

**USMT — Universal System Modeling Template**

A expansão oficial contém:

**System Modeling Template**

Não utilizar:

* Universal System Model Template;
* Universal Systems Modeling Template;
* Universal Software Modeling Template;
* outras expansões;
* traduções apresentadas como nome oficial.

## REGRAS DE USO

Na primeira ocorrência significativa de cada página relevante, utilizar:

**Universal System Modeling Template — USMT**

ou:

**USMT — Universal System Modeling Template**

Depois da primeira definição, a sigla `USMT` pode ser utilizada isoladamente.

## AUDITAR

Verificar:

* homepage;
* `/usmt`;
* `/method`;
* `/protocol`;
* `/investigation`;
* `/lab`;
* `/about`, se aplicável;
* `/learn`;
* metadata;
* Open Graph;
* JSON-LD;
* Header;
* Footer;
* textos de links;
* alt text;
* testes;
* documentação gerada pelo site;
* dados de conteúdo.

## PRESERVAÇÃO

Corrigir apenas a expansão inconsistente do nome.

Não alterar:

* os 12 elementos;
* WHERE, HOW, LOGIC e SAFE;
* definição metodológica;
* exemplos;
* autoria;
* estrutura da USMT;
* terminologia congelada.

Registrar no relatório todas as ocorrências modificadas.

---

# FASE 9 — PROVENIÊNCIA EDITORIAL

## OBJETIVO

Permitir que visitantes e sistemas automatizados consigam responder:

* Quem criou o Payload Journey LAB?
* Quem criou a USMT?
* Qual página é a fonte principal da USMT?
* Qual conteúdo é metodologia autoral?
* Qual conteúdo é estudo de caso?
* Qual conteúdo é investigação em andamento?
* Qual conteúdo é formação?
* Qual conteúdo é publicação editorial do LabLog?

## PRINCÍPIO

Proveniência deve ser explícita no conteúdo público, não apenas inferida a partir do JSON-LD.

Adicionar ou consolidar informações de proveniência apenas quando forem sustentadas pelo conteúdo confirmado do site.

---

# PROVENIÊNCIA INSTITUCIONAL

Na página institucional canônica, garantir que esteja explícito:

* Payload Journey LAB;
* Valéria dos Santos Reiser;
* relação da fundadora com o LAB;
* relação da fundadora com a USMT;
* natureza educacional, metodológica e investigativa do LAB.

Não apresentar o LAB como:

* empresa formal;
* consultoria;
* universidade;
* entidade certificadora;
* organização jurídica;
* equipa estabelecida;
* instituição pública;
* laboratório universitário.

A menos que alguma dessas condições esteja publicamente confirmada em fonte autoritativa do próprio projeto, não adicioná-la.

---

# PROVENIÊNCIA DA USMT

Na rota `/usmt`, garantir uma unidade editorial clara, por exemplo:

* nome oficial;
* definição;
* autoria confirmada;
* relação com o LAB;
* URL canônica;
* natureza metodológica.

A informação deve ser autocontida e extraível sem depender da página Sobre.

Não é necessário repetir biografia extensa.

---

# PROVENIÊNCIA DOS MÉTODOS

Nas páginas de método, protocolo e investigação:

* identificar a relação do conteúdo com o Payload Journey LAB;
* diferenciar método, protocolo e prática investigativa;
* não atribuir individualmente cada conceito à fundadora sem fonte pública suficiente;
* usar apenas as afirmações já confirmadas no conteúdo institucional.

Exemplo de distinção conceitual:

* `/method`: visão integrada dos métodos;
* `/protocol`: processo operacional;
* `/investigation`: aplicação investigativa.

Não reescrever essas páginas além do necessário para tornar a proveniência inequívoca.

---

# PROVENIÊNCIA DE HORA.CITY

Preservar explicitamente:

`resolutionStatus: "unresolved"`

Garantir que o caso continue sendo reconhecido como:

* estudo ou investigação aplicada;
* caso em andamento ou não resolvido;
* evidência de prática investigativa;
* não como produto finalizado;
* não como caso concluído;
* não como sucesso comercial comprovado.

Não alterar o estado editorial do caso.

---

# PROVENIÊNCIA DO LABLOG

Garantir que o LabLog seja identificável como conteúdo editorial ou registro do LAB.

Não permitir confusão com:

* documentação normativa;
* especificação oficial;
* resultado científico validado;
* notícia externa;
* publicação independente sem relação com o LAB.

Não reescrever o conteúdo integral do LabLog.

---

# DATAS E VERSÕES

Adicionar datas de publicação ou atualização apenas quando:

* já existirem em fonte confiável;
* forem mantidas como dado editorial;
* representarem a data real do conteúdo.

Não utilizar:

* data do build;
* data do deploy;
* data atual;
* timestamp de geração;

como falsa data de publicação ou modificação.

Caso a origem temporal não seja verificável, omitir a data.

---

# FASE 10 — JSON-LD SEMÂNTICO

## OBJETIVO

Substituir ou refinar o grafo genérico atual por uma representação mínima, conectada e sustentada pelo conteúdo público.

Não adicionar tipos apenas para aumentar cobertura.

## ENTIDADES A AVALIAR

### `WebSite`

Representar o site oficial:

* nome;
* URL canônica;
* idioma;
* publisher ou creator apenas quando corretamente sustentado;
* `@id` estável.

Referência de ID:

`https://www.payloadjourneylab.com/#website`

### `WebPage`

Cada rota pública poderá representar sua própria página:

* URL;
* nome;
* description;
* `isPartOf` apontando para o `WebSite`;
* `about` ou `mainEntity` somente quando apropriado;
* `@id` estável.

### `Person`

A fundadora poderá ser representada como `Person` quando o conteúdo público confirmar:

* nome;
* relação com o LAB;
* criação da USMT;
* perfis oficiais confirmados.

Não adicionar:

* endereço;
* data de nascimento;
* cargo não confirmado;
* nacionalidade;
* employer;
* alumni;
* awards;
* credentials;
* relações privadas.

Referência possível de ID:

`https://www.payloadjourneylab.com/lab#founder`

Usar a rota institucional real encontrada após verificar a Sprint 10.

### `CreativeWork`

Avaliar a representação da USMT como `CreativeWork` amplo e conservador.

Propriedades possíveis, quando sustentadas:

* `name`;
* `alternateName: "USMT"`;
* `description`;
* `url`;
* `creator`;
* `isPartOf`;
* `inLanguage`.

Referência possível de ID:

`https://www.payloadjourneylab.com/usmt#usmt`

Não representar a USMT como:

* software;
* produto comercial;
* padrão internacional;
* certificação;
* curso;
* artigo científico;

sem sustentação pública.

## ORGANIZATION

A auditoria identificou utilização atual de `Organization`.

Reavaliar criticamente esse tipo.

`Organization` não deve implicar:

* pessoa jurídica;
* empresa;
* equipa;
* clientes;
* sede;
* funcionários;
* atividade comercial.

Opções aceitáveis:

1. manter `Organization` de forma mínima e explicitamente alinhada ao LAB como iniciativa educacional e metodológica, caso a marcação continue semanticamente correta; ou
2. remover a entidade genérica caso ela crie mais ambiguidade do que clareza.

A decisão deve ser justificada no relatório.

Não substituir automaticamente por `EducationalOrganization`, universidade, instituto de pesquisa ou outro subtipo formal.

## GRAFO

Preferir um único grafo conectado, sem entidades duplicadas.

Garantir:

* IDs absolutos;
* host `www`;
* relações estáveis;
* ausência de IDs contraditórios;
* ausência de duplicação de `Person`;
* ausência de duas entidades concorrentes para o LAB;
* correspondência entre JSON-LD e conteúdo visível.

---

# FASE 11 — OPEN GRAPH E COMPARTILHAMENTO

Auditar e corrigir:

* `og:url`;
* `og:title`;
* `og:description`;
* `og:site_name`;
* imagem;
* URL da imagem;
* tipo de página;
* Twitter/X cards, quando existentes.

Todos os URLs absolutos devem usar:

`https://www.payloadjourneylab.com`

Não inventar perfis sociais.

Não adicionar handles não confirmados.

---

# FASE 12 — LINKS INTERNOS

Verificar todas as rotas e componentes.

Garantir:

* links absolutos internos, quando necessários, usando `www`;
* links relativos preservados quando forem suficientes;
* ausência de URLs hardcoded sem `www`;
* ausência de páginas órfãs;
* ausência de links para redirects quando o destino canônico já é conhecido;
* textos de link semanticamente claros;
* página `/usmt` tratada como fonte principal da USMT;
* página institucional tratada como fonte principal da autoria.

Não criar novos links em excesso.

Não transformar a navegação numa malha artificial para SEO.

---

# FASE 13 — TESTES AUTOMATIZADOS

Criar ou atualizar verificadores para impedir regressões.

## CANONICALIZAÇÃO

Verificar:

* nenhuma URL pública absoluta utiliza o domínio sem `www`;
* canonical de todas as rotas utiliza `www`;
* sitemap utiliza `www`;
* robots referencia sitemap com `www`;
* JSON-LD utiliza `www`;
* Open Graph utiliza `www`;
* não existem canonicals duplicados;
* cada rota possui canonical coerente.

## REDIRECT

Verificar:

* domínio raiz redireciona para `www`, quando testável localmente ou pela infraestrutura;
* path preservado;
* query string preservada;
* status permanente;
* ausência de loop;
* ausência de cadeia.

## USMT

Verificar:

* forma oficial presente;
* expansões incorretas ausentes;
* `/usmt` permanece acessível;
* 12 elementos preservados;
* WHERE, HOW, LOGIC e SAFE preservados.

## PROVENIÊNCIA

Verificar que o HTML público permite identificar:

* Payload Journey LAB;
* fundadora;
* criação da USMT;
* página canônica da USMT;
* relação entre USMT e LAB;
* estado não resolvido de HORA.city.

## JSON-LD

Verificar:

* JSON válido;
* URLs absolutas;
* IDs únicos;
* relações resolvíveis;
* ausência de propriedades vazias;
* ausência de tipos não sustentados;
* correspondência com conteúdo público.

---

# FASE 14 — VALIDAÇÃO TÉCNICA

Executar:

1. lint;
2. TypeScript;
3. verificadores existentes;
4. testes automatizados;
5. build;
6. smoke de todas as rotas;
7. validação de metadata;
8. validação de canonical;
9. validação de sitemap;
10. validação de robots;
11. validação de JSON-LD;
12. inspeção do HTML inicial;
13. verificação sem JavaScript;
14. links internos;
15. rotas 404 deliberadas;
16. desktop;
17. tablet;
18. mobile;
19. teclado;
20. foco;
21. Escape;
22. overflow;
23. console;
24. hydration;
25. `git diff --check`.

---

# FASE 15 — COMPARAÇÃO COM A AUDITORIA

Reavaliar especificamente as quatro recomendações P1.

Para cada uma, registrar:

| Recomendação P1 | Estado anterior | Implementação | Evidência | Estado final |
| --------------- | --------------- | ------------- | --------- | ------------ |

Estados permitidos:

* resolvida;
* parcialmente resolvida;
* bloqueada por infraestrutura;
* dependente da Sprint 10;
* não implementada, com justificativa.

Não alterar a auditoria original.

Não reescrever retroativamente a nota de `78/100`.

Realizar uma reavaliação focada e estimar o impacto provável, sem manipular a pontuação.

A meta é melhorar a qualidade real dos sinais semânticos, não alcançar um número predeterminado.

---

# CRITÉRIOS DE ACEITAÇÃO

A Sprint 11 será considerada concluída quando:

* `www` for o host canônico único no código;
* canonicals utilizarem `www`;
* sitemap utilizar `www`;
* robots apontar para sitemap com `www`;
* Open Graph utilizar `www`;
* JSON-LD utilizar `www`;
* URLs absolutas estiverem consistentes;
* redirect permanente do domínio raiz estiver implementado ou tecnicamente documentado como ação externa pendente;
* não houver loop ou cadeia de redirects;
* a expansão oficial da USMT estiver normalizada;
* nenhuma expansão incorreta permanecer no conteúdo público;
* autoria do LAB estiver explicitamente sustentada;
* autoria da USMT estiver explicitamente sustentada;
* `/usmt` for a fonte canônica clara da USMT;
* proveniência de método, protocolo, caso e LabLog estiver diferenciada;
* HORA.city permanecer não resolvido;
* JSON-LD estiver conectado e sustentado pelo conteúdo;
* nenhuma entidade jurídica for inventada;
* nenhuma equipa, parceria, cliente ou certificação for inventada;
* política de crawlers permanecer inalterada;
* nenhuma dependência for adicionada;
* nenhuma nova fronteira Client for criada;
* conteúdo continuar disponível no HTML inicial;
* todas as rotas continuarem acessíveis;
* lint, TypeScript, testes e build forem aprovados;
* as quatro recomendações P1 forem reavaliadas com evidências.

---

# FORA DO ESCOPO

Não faz parte desta sprint:

* criar `llms.txt`;
* criar `llms-full.txt`;
* criar feed RSS ou Atom;
* implementar as recomendações P2 e P3, salvo dependência técnica mínima;
* alterar a política de GPTBot;
* permitir treinamento;
* bloquear OAI-SearchBot;
* bloquear ChatGPT-User;
* executar a Sprint 10;
* criar novas páginas de conteúdo;
* reescrever integralmente páginas metodológicas;
* criar biografia extensa;
* inventar datas editoriais;
* inventar autores;
* inventar organização jurídica;
* adicionar breadcrumbs sem necessidade;
* adicionar Course, Article, VideoObject ou outros tipos sem conteúdo público correspondente;
* instalar dependências;
* fazer deploy;
* fazer commit;
* fazer push.

---

# DOCUMENTAÇÃO

Preservar integralmente:

`docs/ai-readiness/01-pjl-ai-friendliness-audit.md`

Criar, usando os próximos nomes livres:

* mapa de canonicalização e entidades;
* matriz de proveniência;
* relatório final da Sprint 11.

Sugestão, caso estejam disponíveis:

* `docs/ai-readiness/02-sprint-11-canonical-entity-map.md`
* `docs/ai-readiness/03-sprint-11-provenance-matrix.md`
* `docs/ai-readiness/04-sprint-11-report.md`

Não sobrescrever documentos existentes.

## MAPA CANÔNICO

Registrar:

| Entidade ou página | URL canônica | `@id` | Fonte pública | Observações |
| ------------------ | ------------ | ----- | ------------- | ----------- |

## MATRIZ DE PROVENIÊNCIA

Registrar:

| Afirmação | Página | Conteúdo visível | JSON-LD | Sustentação | Risco |
| --------- | ------ | ---------------- | ------- | ----------- | ----- |

---

# ENTREGÁVEIS

Ao concluir, entregar:

1. baseline completo;
2. mapa de ocorrências `www` e sem `www`;
3. mapa de expansões da USMT;
4. mapa canônico de entidades;
5. matriz de proveniência;
6. lista de arquivos modificados;
7. configuração canônica centralizada;
8. implementação ou especificação do redirect;
9. metadata atualizada;
10. sitemap atualizado;
11. robots atualizado;
12. Open Graph atualizado;
13. JSON-LD refinado;
14. testes de regressão;
15. resultado de lint;
16. resultado de TypeScript;
17. resultado dos verificadores;
18. resultado dos testes;
19. resultado do build;
20. métricas antes e depois;
21. comparação do HTML;
22. comparação das quatro recomendações P1;
23. ações externas pendentes;
24. confirmação de política de crawlers preservada;
25. confirmação de HORA.city como não resolvido;
26. confirmação de ausência de dependências;
27. confirmação de ausência de nova fronteira Client;
28. relatório final.

---

# RESUMO PARA O TERMINAL

Ao finalizar, apresentar:

* branch;
* commit auditado;
* versão;
* host canônico;
* rotas verificadas;
* quantidade de URLs sem `www` antes e depois;
* quantidade de expansões inconsistentes da USMT antes e depois;
* entidades JSON-LD antes e depois;
* recomendações P1 resolvidas;
* recomendações P1 parciais;
* ações externas pendentes;
* lint;
* TypeScript;
* testes;
* build;
* Client Components antes e depois;
* First Load JS antes e depois;
* arquivos criados;
* arquivos modificados;
* arquivos removidos;
* staging;
* caminho do relatório.

---

# COMMIT SUGERIDO

`fix(site): canonicalize domain and strengthen semantic provenance`

Não realizar commit, push ou deploy sem autorização explícita.

---

# REGRA DE PROTEÇÃO FINAL

Esta sprint não deve tornar o site artificialmente otimizado para IA.

Ela deve tornar explícito o que já é verdadeiro.

Não criar entidades para preencher Schema.org.

Não criar autoria onde não existe confirmação.

Não converter o LAB numa empresa por conveniência semântica.

Não converter a USMT num produto, padrão ou certificação.

Não alterar o estado de HORA.city.

Não alterar a política deliberada de crawlers.

Ao final, todo sistema automatizado deverá receber a mesma resposta inequívoca para cinco perguntas:

1. Qual é o site oficial?
2. O que é o Payload Journey LAB?
3. Quem criou o LAB?
4. O que é a USMT e quem a criou?
5. Qual página é a fonte principal de cada conceito?

As respostas devem estar sustentadas pelo conteúdo público, pela metadata e pelos dados estruturados, sem contradições.
