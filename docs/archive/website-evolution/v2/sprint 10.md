# SPRINT 10 — UNIFICAÇÃO INSTITUCIONAL DE `/LAB` E `/ABOUT`

## MISSÃO

Unificar as páginas institucionais atuais:

* `/lab`
* `/about`

numa única página canônica:

* `/lab`

A página `/lab` deverá passar a concentrar integralmente:

* definição do Payload Journey LAB;
* origem;
* motivação;
* missão;
* princípio;
* visão;
* forma de atuação;
* autoria;
* informações confirmadas sobre a fundadora;
* relação entre o LAB e a USMT.

A rota `/about` não deverá continuar como uma segunda página institucional independente.

Ela deverá redirecionar permanentemente para `/lab`.

---

# CONTEXTO

Após a modularização realizada na Sprint 8, foram criadas duas páginas institucionais:

## `/lab`

Conteúdo principal:

* O LAB;
* formação, pesquisa e investigação aplicada;
* missão;
* princípio;
* relação entre educação, metodologia e investigação.

## `/about`

Conteúdo principal:

* origem;
* visão;
* motivação;
* autoria;
* fundadora;
* criação do LAB;
* criação da USMT;
* desenvolvimento dos métodos.

Após avaliação editorial e da experiência do visitante, concluiu-se que essas páginas não representam dois territórios suficientemente distintos.

Ambas respondem essencialmente às mesmas perguntas:

* O que é o Payload Journey LAB?
* Por que ele existe?
* Qual é sua missão?
* Como trabalha?
* Quem o criou?

A separação atual acrescenta navegação e repetição, mas não acrescenta compreensão suficiente.

---

# OBJETIVO

Transformar `/lab` na fonte institucional única e canônica do Payload Journey LAB.

A nova página deverá construir uma narrativa contínua:

**O que é o LAB**
→ **Por que existe**
→ **Missão e princípio**
→ **Visão**
→ **Como trabalha**
→ **Fundadora e autoria**

A implementação deverá:

1. preservar 100% do conteúdo público existente em `/lab`;
2. preservar 100% do conteúdo público existente em `/about`;
3. eliminar repetição desnecessária apenas quando os textos forem literalmente duplicados;
4. não eliminar ideias ou informações exclusivas;
5. manter a autoria e a origem claramente identificadas;
6. atualizar a navegação interna;
7. redirecionar `/about` permanentemente para `/lab`;
8. consolidar metadata, canonical e dados estruturados;
9. impedir que existam duas fontes institucionais concorrentes.

---

# REGRA CENTRAL DE PRESERVAÇÃO

Todo conteúdo publicamente visível em `/lab` e `/about` antes desta sprint deve continuar publicamente acessível em `/lab` após a implementação.

Não eliminar:

* títulos conceituais;
* parágrafos;
* missão;
* princípio;
* visão;
* listas;
* informações sobre a fundadora;
* autoria do LAB;
* autoria da USMT;
* relação entre a USMT e o LAB;
* descrições sobre investigação aplicada;
* descrições sobre formação;
* descrições sobre desenvolvimento metodológico;
* elementos visuais;
* ícones;
* links válidos;
* interações;
* textos alternativos.

A unificação é arquitetural e editorial.

Não deve representar redução destrutiva de conteúdo.

---

# CONTEÚDO ATUAL A PRESERVAR

## Conteúdo atual de `/lab`

Preservar integralmente:

### O LAB

**Formação, pesquisa e investigação aplicada**

O Payload Journey LAB organiza aprendizagem e prática investigativa em torno do fluxo da informação.

### O laboratório

**Formação, pesquisa e investigação aplicada**

O Payload Journey LAB desenvolve maneiras de ensinar, modelar e investigar software seguindo o fluxo da informação.

A prática que você acabou de conhecer faz parte de um laboratório dedicado a desenvolver formação, métodos e investigação aplicada.

### Missão

O LAB conecta educação, desenvolvimento metodológico, investigação de sistemas, aplicação em casos reais e possibilidades de colaboração.

### Princípio

Compreender antes de modificar: seguir o flow, produzir evidências e tornar as decisões do sistema visíveis.

---

## Conteúdo atual de `/about`

Preservar integralmente:

### Sobre

**Origem, visão e autoria**

A origem do Payload Journey LAB, sua motivação e as informações confirmadas sobre sua fundadora.

### Sobre o LAB

**Criado para ensinar a compreender sistemas**

Sistemas podem crescer mais rapidamente do que a nossa capacidade de explicá-los. O LAB nasce da necessidade de recuperar visão estrutural, rastreabilidade e confiança antes de modificar software complexo.

### Por que o LAB existe

Quando a produção de código avança sem compreensão estrutural equivalente, torna-se mais difícil preservar rastreabilidade, autoridade, observabilidade e capacidade de decisão.

### Visão

O Payload Journey LAB trabalha para tornar investigação de sistemas uma capacidade ensinável, praticável e documentável.

### Forma de atuação

* Seguir o flow
* Compreender antes de modificar
* Produzir evidência
* Tornar decisões visíveis
* Desenvolver visão estrutural
* Compartilhar métodos

### Fundadora

**Valéria dos Santos Reiser**

Criadora do Payload Journey LAB e da USMT.

* Criou o Payload Journey LAB.
* Criou a Universal System Modeling Template — USMT.
* A USMT integra o trabalho metodológico do LAB como instrumento para explicitar estados, regras, invariantes e o comportamento esperado.
* Desenvolvimento de maneiras de observar payloads, estados, eventos e decisões em sistemas complexos.
* Desenvolvimento dos métodos que estruturam a prática de investigação aplicada do LAB.

O inventário real do repositório deve ser utilizado como fonte de verdade.

Não confiar apenas nesta transcrição caso o código contenha elementos adicionais.

---

# FASE 1 — CONGELAMENTO DO BASELINE

Antes de modificar qualquer arquivo:

1. Registrar:

   * branch;
   * commit;
   * versão;
   * status do Git;
   * arquivos modificados;
   * arquivos untracked;
   * rotas públicas;
   * componentes utilizados por `/lab`;
   * componentes utilizados por `/about`;
   * metadata das duas rotas;
   * canonical;
   * JSON-LD;
   * sitemap;
   * navegação de Header e Footer;
   * links internos que apontam para `/about`;
   * links internos que apontam para `/lab`.

2. Executar:

   * lint;
   * typecheck;
   * testes existentes;
   * build;
   * smoke das rotas atuais.

3. Capturar:

   * `/lab` desktop;
   * `/lab` mobile;
   * `/about` desktop;
   * `/about` mobile;
   * HTML inicial de ambas as rotas.

4. Criar um inventário de preservação contendo todos os elementos das duas páginas.

Não iniciar a unificação antes de concluir o inventário.

---

# FASE 2 — DEFINIÇÃO DA PÁGINA CANÔNICA

A rota institucional canônica deverá ser:

`/lab`

A página deverá ser identificada na navegação como:

**O LAB**

Evitar manter simultaneamente no Header ou Footer:

* O LAB
* Sobre
* Sobre o LAB

como destinos separados.

A página `/lab` deverá ser a fonte principal para consultas sobre:

* identidade do LAB;
* origem;
* missão;
* visão;
* princípio;
* atuação;
* autoria;
* fundadora;
* relação com a USMT.

---

# FASE 3 — NOVA ARQUITETURA DE `/LAB`

Organizar o conteúdo da página numa sequência editorial coerente.

## 1. INTRODUÇÃO

Eyebrow:

**O LAB**

Título:

**Formação, pesquisa e investigação aplicada**

Texto introdutório:

O Payload Journey LAB organiza aprendizagem e prática investigativa em torno do fluxo da informação.

Adicionar uma introdução breve que conecte a identidade da página com o restante do site.

Evitar duplicar imediatamente o mesmo título e subtítulo em dois blocos consecutivos.

Caso existam duas introduções equivalentes, preservar todas as ideias, mas organizar a apresentação para evitar repetição visual.

---

## 2. O LABORATÓRIO

Título:

**Criado para ensinar a compreender sistemas**

Preservar e articular:

* desenvolvimento de maneiras de ensinar;
* modelagem de sistemas;
* investigação de software;
* fluxo da informação;
* formação;
* métodos;
* investigação aplicada.

Integrar o texto atual:

A prática que você acabou de conhecer faz parte de um laboratório dedicado a desenvolver formação, métodos e investigação aplicada.

---

## 3. POR QUE O LAB EXISTE

Preservar integralmente as ideias relacionadas a:

* sistemas crescendo mais rapidamente do que a capacidade de explicá-los;
* necessidade de recuperar visão estrutural;
* rastreabilidade;
* confiança antes de modificar;
* autoridade;
* observabilidade;
* capacidade de decisão.

Essa seção deve explicar a motivação do LAB sem criar afirmações comerciais ou exageradas.

---

## 4. MISSÃO E PRINCÍPIO

Apresentar missão e princípio com peso equivalente.

### Missão

O LAB conecta educação, desenvolvimento metodológico, investigação de sistemas, aplicação em casos reais e possibilidades de colaboração.

### Princípio

Compreender antes de modificar: seguir o flow, produzir evidências e tornar as decisões do sistema visíveis.

Esses blocos podem ser apresentados:

* lado a lado no desktop;
* em sequência vertical no mobile.

Não alterar o significado dos textos.

---

## 5. VISÃO

Preservar:

O Payload Journey LAB trabalha para tornar investigação de sistemas uma capacidade ensinável, praticável e documentável.

A visão deve aparecer depois da missão e do princípio ou numa posição editorial igualmente coerente.

---

## 6. COMO O LAB TRABALHA

Apresentar os seis elementos:

1. Seguir o flow
2. Compreender antes de modificar
3. Produzir evidência
4. Tornar decisões visíveis
5. Desenvolver visão estrutural
6. Compartilhar métodos

Usar lista semântica real.

Não transformar os itens exclusivamente em elementos decorativos.

Cada item deve continuar legível no HTML inicial.

---

## 7. FUNDAÇÃO E AUTORIA

Título recomendado:

**Fundadora e autoria**

Apresentar:

### Valéria dos Santos Reiser

**Criadora do Payload Journey LAB e da USMT**

Preservar as afirmações confirmadas:

* criou o Payload Journey LAB;
* criou a Universal System Modeling Template;
* a USMT integra o trabalho metodológico do LAB;
* a USMT explicita estados, regras, invariantes e comportamento esperado;
* desenvolvimento de maneiras de observar payloads, estados, eventos e decisões;
* desenvolvimento dos métodos que estruturam a investigação aplicada do LAB.

Não adicionar:

* títulos profissionais não confirmados;
* cargos institucionais;
* certificações;
* afiliações;
* equipe;
* parceiros;
* clientes;
* contratos;
* entidades jurídicas;
* biografia extensa não presente nas fontes públicas atuais.

---

## 8. CONTINUIDADE DE NAVEGAÇÃO

Ao final da página, incluir caminhos reais para áreas relacionadas.

Exemplos possíveis:

* Explorar a USMT
* Conhecer o método
* Ver a investigação aplicada
* Acessar a formação
* Acompanhar o LabLog

Usar apenas rotas reais.

Não criar CTAs falsos.

Não sobrecarregar a página com todos os destinos do site.

---

# FASE 4 — REDIRECT DE `/ABOUT`

A rota:

`/about`

deverá redirecionar permanentemente para:

`/lab`

Usar o mecanismo de redirect apropriado ao framework.

Preferir status permanente compatível com a arquitetura utilizada, como:

* `308 Permanent Redirect`; ou
* outra implementação equivalente corretamente suportada pelo framework.

Não manter uma página intermediária com mensagem de redirecionamento se não houver necessidade técnica.

Não usar redirect client-side.

Não depender de JavaScript.

Não criar redirect temporário.

---

# PRESERVAÇÃO DE LINKS ANTIGOS

Todos os links internos que apontam para `/about` devem ser atualizados para `/lab`.

Isso inclui:

* Header;
* Footer;
* homepage;
* páginas temáticas;
* CTAs;
* cards;
* breadcrumbs;
* sitemap;
* JSON-LD;
* metadata;
* testes;
* documentação técnica gerada automaticamente, quando aplicável.

Mesmo com o redirect, os links internos devem apontar diretamente para `/lab`.

Evitar cadeias de redirecionamento.

---

# ANCHORS E LINKS PROFUNDOS

Verificar se `/about` possui anchors ou fragmentos utilizados publicamente.

Exemplos:

* `/about#founder`
* `/about#vision`
* `/about#origin`

Caso existam:

1. criar anchors equivalentes em `/lab`;
2. avaliar redirects específicos preservando o fragmento quando tecnicamente possível;
3. atualizar links internos;
4. documentar qualquer limitação.

Usar IDs estáveis e semanticamente claros, como:

* `#origin`
* `#mission`
* `#principle`
* `#vision`
* `#how-the-lab-works`
* `#founder`

Não alterar IDs existentes sem necessidade.

---

# SEO

## `/lab`

Atualizar a metadata para representar a página institucional completa.

O título deve comunicar:

* Payload Journey LAB;
* identidade institucional;
* missão ou investigação de sistemas.

A descrição deve abranger:

* formação;
* pesquisa metodológica;
* investigação aplicada;
* origem;
* autoria.

Não usar descrições excessivamente longas.

Não prometer serviços não existentes.

## `/about`

Não manter canonical próprio concorrente.

A rota deve redirecionar para `/lab`.

## Canonical

`/lab` deve possuir canonical apontando para sua própria URL pública.

## Sitemap

Remover `/about` do sitemap caso esteja listado como rota indexável.

Manter `/lab`.

## Open Graph

Atualizar dados de compartilhamento da página `/lab`, caso existam.

---

# DADOS ESTRUTURADOS

Auditar os dados estruturados associados a `/lab` e `/about`.

Depois da unificação:

* `/lab` deve ser a página institucional principal;
* não devem existir duas entidades ou páginas concorrentes;
* URLs e `@id` devem apontar para a fonte canônica correta;
* não criar uma organização jurídica inexistente;
* não inventar propriedades;
* não adicionar tipos Schema.org sem sustentação pública.

Caso exista informação sobre a fundadora em JSON-LD:

* confirmar que corresponde ao conteúdo público;
* usar apenas afirmações verificáveis;
* evitar duplicação de entidade.

Não ampliar dados estruturados além do necessário para esta unificação.

---

# NAVEGAÇÃO

Atualizar a navegação principal para conter apenas uma entrada institucional.

Preferência:

**O LAB**

Essa entrada deve apontar para:

`/lab`

No Footer, decidir entre:

* manter também O LAB; ou
* utilizar Sobre o LAB como label textual apontando para `/lab`.

Não manter dois links que aparentem levar a páginas diferentes, mas apontem para o mesmo conteúdo, salvo quando houver uma justificativa clara de navegação.

---

# HOMEPAGE

Verificar como os blocos de síntese institucional estão representados na homepage.

A homepage deve:

* manter uma síntese curta;
* apontar para `/lab`;
* não continuar apontando para `/about`;
* evitar oferecer dois CTAs institucionais concorrentes;
* preservar a narrativa criada na Sprint 8.

Não expandir novamente a homepage.

Não transferir o conteúdo completo de volta para `/`.

---

# COMPONENTIZAÇÃO

Preferir:

* reutilizar componentes existentes;
* mover componentes de `/about` para `/lab`;
* extrair componentes compartilhados quando necessário;
* manter Server Components;
* preservar a única fronteira Client Component existente.

Não:

* duplicar conteúdo entre arquivos;
* criar versões independentes dos mesmos textos;
* esconder uma página usando CSS;
* manter `/about` renderizando o conteúdo antes de redirecionar;
* adicionar dependências.

Sempre que possível, manter uma única fonte de verdade para o conteúdo institucional.

---

# AI-FRIENDLINESS

A página `/lab` deverá tornar mais fácil para mecanismos de busca e sistemas de IA identificar:

* o que é o Payload Journey LAB;
* por que ele existe;
* qual é sua missão;
* qual é sua visão;
* qual é seu princípio;
* como trabalha;
* quem o criou;
* quem criou a USMT;
* como LAB e USMT se relacionam.

Garantir:

* H1 único;
* headings descritivos;
* ordem semântica;
* parágrafos autocontidos;
* lista semântica;
* autoria explícita;
* canonical único;
* ausência de conflito entre `/lab` e `/about`.

Não criar conteúdo artificial para SEO ou IA.

---

# ACESSIBILIDADE

Validar:

* um único H1;
* hierarquia de headings;
* landmarks;
* ordem de leitura;
* contraste;
* foco;
* links descritivos;
* lista semântica;
* conteúdo acessível sem JavaScript;
* mobile;
* reduced motion;
* ausência de conteúdo transmitido apenas por cor.

A unificação não pode reduzir a acessibilidade existente.

---

# PERFORMANCE

A implementação não deve:

* aumentar o First Load JS;
* criar nova fronteira Client Component;
* adicionar dependências;
* introduzir hidratação desnecessária;
* duplicar conteúdo no HTML;
* carregar duas páginas institucionais completas.

Registrar as métricas antes e depois.

---

# TESTES OBRIGATÓRIOS

Executar:

1. lint;
2. TypeScript;
3. testes automatizados;
4. build;
5. smoke de todas as rotas públicas;
6. `/lab` retornando `200`;
7. `/about` redirecionando permanentemente para `/lab`;
8. ausência de cadeia de redirects;
9. links internos sem referência obsoleta a `/about`;
10. `/about` removido do sitemap;
11. `/lab` presente no sitemap;
12. canonical correto;
13. H1 único;
14. metadata válida;
15. JSON-LD válido, caso exista;
16. navegação por teclado;
17. desktop;
18. tablet;
19. mobile;
20. overflow horizontal;
21. console;
22. hydration;
23. `git diff --check`;
24. comparação do conteúdo antes e depois;
25. matriz de preservação com cobertura de 100%.

---

# TESTES DE CONTEÚDO

Verificar automaticamente ou manualmente que `/lab` contém:

* formação, pesquisa e investigação aplicada;
* origem do LAB;
* motivação;
* missão;
* princípio;
* visão;
* seis formas de atuação;
* nome da fundadora;
* criação do LAB;
* criação da USMT;
* relação da USMT com o LAB;
* desenvolvimento dos métodos;
* investigação aplicada.

Verificar que nenhum conteúdo exclusivo de `/about` desapareceu.

---

# CRITÉRIOS DE ACEITAÇÃO

A Sprint 10 estará concluída quando:

* `/lab` for a página institucional canônica;
* todo o conteúdo de `/lab` estiver preservado;
* todo o conteúdo de `/about` estiver preservado em `/lab`;
* a narrativa estiver organizada de forma contínua;
* não houver repetição visual desnecessária;
* `/about` redirecionar permanentemente para `/lab`;
* todos os links internos apontarem diretamente para `/lab`;
* `/about` não estiver no sitemap;
* `/lab` possuir metadata e canonical próprios;
* Header e Footer apresentarem uma única entrada institucional coerente;
* a homepage possuir apenas um caminho institucional principal;
* nenhum conteúdo tiver sido inventado;
* nenhuma informação confirmada tiver sido removida;
* nenhum Client Component tiver sido criado;
* nenhuma dependência tiver sido adicionada;
* não houver links quebrados;
* não houver regressão de performance;
* testes, lint, TypeScript e build forem aprovados;
* a matriz de preservação demonstrar cobertura de 100%.

---

# FORA DO ESCOPO

Não faz parte desta sprint:

* reescrever toda a narrativa institucional;
* criar uma biografia extensa;
* adicionar fotografia da fundadora;
* criar página pessoal;
* criar página de equipe;
* criar página de parceiros;
* criar página jurídica;
* alterar páginas metodológicas;
* alterar o conteúdo da USMT;
* alterar o protocolo;
* alterar o caso HORA.city;
* modificar a homepage além dos links e da síntese institucional necessária;
* adicionar novas rotas;
* alterar branding;
* instalar dependências;
* fazer deploy.

---

# DOCUMENTAÇÃO

Antes de criar arquivos, verificar a numeração atual da documentação.

Criar os próximos nomes disponíveis, sem sobrescrever documentos existentes.

Como referência:

* inventário de unificação;
* matriz de preservação;
* relatório final da Sprint 10.

Exemplo, caso estejam disponíveis:

* `27-sprint-10-institutional-content-inventory.md`
* `28-sprint-10-preservation-matrix.md`
* `29-sprint-10-report.md`

Caso esses números já estejam ocupados, usar os próximos números livres.

Registrar no relatório:

* baseline;
* arquivos alterados;
* conteúdo migrado;
* estrutura final;
* redirect;
* mudanças de navegação;
* mudanças de SEO;
* resultado dos testes;
* métricas;
* matriz de preservação;
* capturas;
* eventuais limitações.

---

# ENTREGÁVEIS

Entregar:

1. Inventário do conteúdo de `/lab` e `/about`.
2. Matriz de preservação.
3. Estrutura final de `/lab`.
4. Lista de arquivos modificados.
5. Lista de componentes movidos ou extraídos.
6. Implementação do redirect.
7. Atualização de links internos.
8. Atualização de sitemap.
9. Atualização de metadata e canonical.
10. Resultado de lint.
11. Resultado de TypeScript.
12. Resultado dos testes.
13. Resultado do build.
14. Métricas antes e depois.
15. Captura desktop de `/lab`.
16. Captura mobile de `/lab`.
17. Prova do redirect de `/about`.
18. Confirmação de preservação de 100%.
19. Confirmação de que nenhuma dependência foi adicionada.
20. Confirmação de que nenhuma nova fronteira Client foi criada.
21. Relatório final da Sprint 10.

---

# COMMIT SUGERIDO

`refactor(site): unify lab and about pages`

Não realizar commit, push ou deploy sem autorização explícita.

---

# REGRA DE PROTEÇÃO FINAL

Esta sprint não autoriza eliminar o conteúdo de `/about`.

Ela autoriza eliminar apenas a duplicação arquitetural entre duas páginas institucionais.

A rota `/lab` deve tornar-se a fonte institucional completa, coerente e canônica do Payload Journey LAB.

Ao final, o visitante não deverá mais precisar decidir entre O LAB e Sobre.

Ele deverá encontrar numa única página:

**identidade, origem, missão, princípio, visão, atuação e autoria.**
