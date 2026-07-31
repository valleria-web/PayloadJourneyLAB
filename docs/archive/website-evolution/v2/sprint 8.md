# SPRINT 8 — MODULARIZAÇÃO DA HOMEPAGE E PRESERVAÇÃO INTEGRAL DO CONTEÚDO

## MISSÃO

Refatorar a homepage atual do Payload Journey LAB, implementada até a Sprint 7, transformando-a de uma single page extensa numa homepage sintética conectada a páginas temáticas próprias.

A homepage atual contém seções com conteúdo conceitual, metodológico, educacional e institucional de alta qualidade. Esse conteúdo não deve ser eliminado, resumido dentro das páginas derivadas, reescrito ou simplificado.

O objetivo deste sprint é:

1. Preservar integralmente o conteúdo atual.
2. Mover as explicações extensas para páginas temáticas próprias.
3. Manter na homepage apenas sínteses curtas e caminhos de navegação.
4. Preservar na homepage a demonstração visual do fluxo:

   * Click
   * Structured Payload
   * Request
   * API
   * Domain
   * Repository
   * Response
   * UI
5. Aumentar a legibilidade e permitir posteriormente o aumento das fontes.
6. Reduzir aproximadamente pela metade a extensão vertical da homepage.
7. Criar uma arquitetura de site navegável, sem perder nenhum conteúdo produzido nas Sprints anteriores.

---

# REGRA CENTRAL

## PRESERVAÇÃO DE 100% DO CONTEÚDO

Todo o conteúdo existente na homepage antes desta refatoração deve continuar disponível publicamente após a conclusão do sprint.

Isso inclui:

* títulos;
* subtítulos;
* parágrafos;
* listas;
* labels;
* cards;
* explicações;
* microcopies;
* diagramas;
* fluxos;
* exemplos;
* CTAs válidos;
* elementos visuais;
* imagens;
* ícones;
* dados;
* sequências narrativas;
* conteúdos responsivos;
* interações;
* textos alternativos;
* informações institucionais;
* conteúdo metodológico;
* conteúdo educacional.

Não apagar conteúdo.

Não reescrever conteúdo.

Não parafrasear conteúdo.

Não condensar o conteúdo transferido.

Não combinar dois textos num único texto.

Não alterar a terminologia existente.

Não corrigir estilo, ortografia ou redação durante a migração, salvo erro técnico que impeça a renderização. Caso algum erro textual seja identificado, apenas registrá-lo no relatório final, sem modificá-lo neste sprint.

A mudança deve ser essencialmente arquitetural:

**o conteúdo muda de localização, mas não muda de significado, redação ou profundidade.**

---

# PRINCÍPIO DA NOVA ARQUITETURA

A homepage deixa de funcionar como documentação completa do LAB.

Ela passa a funcionar como:

* apresentação;
* demonstração;
* mapa do ecossistema;
* ponto de entrada;
* sistema de navegação;
* convite ao aprofundamento.

Cada conceito importante deverá ter:

1. Uma síntese curta na homepage.
2. Um CTA claro.
3. Uma página própria contendo integralmente o conteúdo completo que hoje está na homepage.

A estrutura deve seguir a lógica:

**Homepage sintética → página temática completa**

---

# FASE 1 — CONGELAMENTO DO ESTADO ATUAL

Antes de modificar qualquer arquivo:

1. Ler toda a documentação das Sprints 1 a 7 relacionada à homepage.
2. Ler especialmente o relatório final da Sprint 7.
3. Inspecionar integralmente a homepage atual.
4. Identificar todos os componentes usados pela homepage.
5. Identificar todo o conteúdo proveniente de:

   * arquivos TypeScript ou JavaScript;
   * JSX ou TSX;
   * arquivos de configuração;
   * objetos de conteúdo;
   * Markdown;
   * JSON;
   * CMS ou fonte externa, caso exista.
6. Registrar:

   * branch atual;
   * commit atual;
   * arquivos modificados;
   * arquivos não rastreados;
   * versão do projeto;
   * ordem atual das seções;
   * rotas existentes;
   * componentes compartilhados;
   * dependências utilizadas.
7. Executar e registrar o baseline:

   * lint;
   * typecheck;
   * testes;
   * build;
   * métricas da homepage;
   * capturas desktop;
   * capturas tablet;
   * capturas mobile.

Não iniciar a migração sem concluir este inventário.

---

# FASE 2 — INVENTÁRIO FORMAL DO CONTEÚDO

Criar um documento de inventário, por exemplo:

`docs/homepage-refactor/21-sprint-8-content-inventory.md`

O inventário deve listar todas as seções atuais na ordem em que aparecem.

Para cada seção, registrar:

* ID ou âncora atual;
* nome visual;
* componente responsável;
* arquivo de origem;
* textos existentes;
* elementos gráficos;
* interações;
* links;
* destino futuro;
* conteúdo que permanecerá na homepage;
* conteúdo que será transferido;
* status da migração.

Exemplo de estrutura:

| Seção atual         | Origem           | Destino               | Homepage após Sprint 8 | Status   |
| ------------------- | ---------------- | --------------------- | ---------------------- | -------- |
| Demonstração visual | componente atual | permanece na homepage | conteúdo integral      | pendente |
| O LAB               | componente atual | `/lab`                | síntese + CTA          | pendente |
| Método              | componente atual | página temática       | síntese + CTA          | pendente |
| Ecossistema         | componente atual | `/ecosystem`          | síntese + CTA          | pendente |

O inventário deve contemplar 100% das seções existentes.

Nenhuma seção pode ser omitida por parecer repetitiva, secundária ou pouco importante.

---

# FASE 3 — DEFINIÇÃO DAS PÁGINAS TEMÁTICAS

Criar páginas temáticas para receber o conteúdo completo atualmente distribuído pela homepage.

A estrutura exata deve respeitar o conteúdo real encontrado no repositório.

Usar como referência inicial:

* `/lab`
* `/payload-journey`
* `/method`
* `/protocol`
* `/mapping`
* `/reverse-payload-journey`
* `/ecosystem`
* `/cases`
* `/learn`
* `/lablog`
* `/about`
* `/resources`

Não criar páginas vazias apenas para satisfazer esta lista.

Não duplicar páginas equivalentes que já existam.

Antes de criar uma nova rota:

1. Verificar se já existe uma página com a mesma função.
2. Verificar se a rota pertence à arquitetura atual.
3. Verificar padrões de nomenclatura e idioma.
4. Evitar sobreposição entre páginas.

Caso uma seção atual não corresponda exatamente a uma das rotas sugeridas, criar uma rota semanticamente apropriada e registrar a decisão.

---

# REGRA DE GRANULARIDADE

Uma página temática pode receber mais de uma seção atual quando essas seções pertencem claramente ao mesmo assunto.

Porém:

* não misturar assuntos independentes;
* não fundir os textos;
* não eliminar títulos intermediários;
* não transformar conteúdos diferentes num único resumo;
* não alterar a ordem interna dos conteúdos transferidos.

Quando duas ou mais seções forem movidas para a mesma página, preservar a sequência relativa em que apareciam na homepage, salvo quando a estrutura temática exigir outra organização.

Qualquer alteração de ordem deve ser registrada e justificada no relatório.

---

# FASE 4 — MIGRAÇÃO DO CONTEÚDO

Mover o conteúdo completo das seções extensas para suas páginas correspondentes.

## O QUE SIGNIFICA MOVER

Mover significa:

* reutilizar o componente existente numa nova página; ou
* extrair o conteúdo para um componente compartilhado; ou
* transferir o componente para a nova rota.

Preferir reutilização e extração a duplicação.

Ao final, deve existir uma única fonte de verdade para cada conteúdo sempre que tecnicamente possível.

## PROIBIÇÕES

Não copiar o conteúdo completo para a página derivada e manter outra cópia completa na homepage.

Não manter duas versões independentes que possam divergir futuramente.

Não reescrever o texto ao extrair componentes.

Não modificar nomes técnicos.

Não mudar os exemplos.

Não reduzir listas.

Não remover elementos visuais por conveniência.

Não remover interações existentes.

Não substituir diagramas por texto.

Não substituir texto por imagens.

Não transformar conteúdo indexável em canvas ou imagem.

---

# PÁGINAS DERIVADAS

Cada página derivada deve conter:

1. Header consistente com o site.
2. Identificação clara do tema.
3. O conteúdo completo transferido da homepage.
4. Navegação de retorno ou continuidade.
5. CTA contextual para a próxima área relevante.
6. Footer consistente.
7. Metadata própria.
8. Título de página adequado.
9. Descrição para mecanismos de busca.
10. URL canônica quando aplicável.
11. Responsividade.
12. Acessibilidade.

As páginas derivadas não precisam receber um novo redesign editorial profundo neste sprint.

A prioridade é:

* preservar;
* organizar;
* disponibilizar;
* conectar.

Utilizar o design system já implementado na Sprint 7.

---

# FASE 5 — NOVA HOMEPAGE SINTÉTICA

Depois de transferir os conteúdos completos, reconstruir a homepage com uma narrativa curta.

Usar como estrutura de referência:

1. Header
2. Hero
3. Demonstração visual do fluxo
4. Visão geral do método
5. Caso ou investigação aplicada
6. Ecossistema
7. Formação e conteúdo
8. Sobre
9. CTA final
10. Footer

A ordem pode ser ajustada apenas quando o estado real da homepage ou a documentação das Sprints anteriores demonstrar uma sequência mais coerente.

A homepage deve continuar representando os quatro pilares:

* Formação
* Pesquisa metodológica
* Investigação aplicada
* Colaboração

Nenhum pilar pode desaparecer.

---

# ELEMENTO QUE DEVE PERMANECER INTEGRALMENTE NA HOMEPAGE

## DEMONSTRAÇÃO VISUAL DO PAYLOAD JOURNEY

A demonstração visual atualmente implementada deve permanecer na homepage.

Preservar:

* conceito;
* sequência;
* aparência;
* conteúdo;
* interação;
* responsividade;
* animações úteis;
* legibilidade;
* conexão entre os elementos.

Sequência principal:

**Click → Structured Payload → Request → API → Domain → Repository → Response → UI**

Essa demonstração é um dos elementos centrais da homepage.

Não movê-la exclusivamente para uma página interna.

Ela pode também aparecer ou ser reutilizada na página completa do Payload Journey, desde que exista uma única fonte de verdade para sua implementação.

A homepage deve permitir que o visitante compreenda visualmente o conceito antes de acessar as explicações detalhadas.

---

# VISÃO GERAL DO MÉTODO NA HOMEPAGE

Após a demonstração, criar uma apresentação compacta dos principais componentes metodológicos.

Usar como referência:

## Modelar

**USMT**

Compreender estados, eventos, regras, invariantes, camadas e limites do sistema.

CTA:

**Conhecer a USMT**

## Rastrear

**Payload Journey**

Seguir o comportamento real do payload através das camadas do sistema.

CTA:

**Explorar o Payload Journey**

## Investigar

**Congelar → Mapear → Detectar → Restaurar**

Produzir evidências, localizar divergências e validar a restauração.

CTA:

**Ver o protocolo investigativo**

Neste sprint, não implementar ainda toda a seção detalhada da USMT prevista para a Sprint 9.

A homepage deve apenas preparar o espaço arquitetural para essa reincorporação.

---

# RESUMOS DA HOMEPAGE

Para cada conteúdo transferido, criar uma síntese curta na homepage.

Cada síntese deve conter, no máximo:

* um eyebrow ou label;
* um título;
* um parágrafo de duas ou três linhas;
* um elemento visual compacto, quando necessário;
* um CTA para a página completa.

A síntese não substitui o conteúdo original.

Ela é uma nova camada de navegação.

O conteúdo original permanece integralmente na página temática.

## REGRA DE REDAÇÃO DOS RESUMOS

Os novos resumos podem ser escritos neste sprint, mas devem:

* representar fielmente o conteúdo da página;
* usar linguagem direta;
* evitar superlativos;
* evitar afirmações não verificadas;
* evitar promessas comerciais;
* evitar inventar parceiros, clientes, contratos, pilotos ou resultados;
* não adicionar conceitos metodológicos que não existam;
* não substituir nomes oficiais por termos genéricos.

---

# EXEMPLO DE ARQUITETURA DA HOMEPAGE

## HERO

Título principal atual ou uma versão consolidada já aprovada.

Breve posicionamento.

CTA principal.

CTA secundário.

---

## DEMONSTRAÇÃO

Manter a demonstração visual completa:

**Click → Structured Payload → Request → API → Domain → Repository → Response → UI**

Breve conclusão.

CTA para `/payload-journey`.

---

## MÉTODO

Três entradas compactas:

* USMT
* Payload Journey
* Protocolo investigativo

Cada entrada direciona à sua página correspondente.

---

## INVESTIGAÇÃO APLICADA

Uma síntese de caso ou do processo de investigação.

CTA para `/cases` ou para o caso principal existente.

---

## ECOSSISTEMA

Apresentar os quatro pilares em formato compacto:

* Formação
* Pesquisa metodológica
* Investigação aplicada
* Colaboração

CTA para `/ecosystem` ou `/lab`.

---

## FORMAÇÃO E CONTEÚDO

Apresentar os principais caminhos:

* curso;
* LabLog;
* materiais;
* trilhas.

CTA para `/learn`, `/lablog` ou `/resources`.

---

## SOBRE

Síntese breve sobre a origem do LAB e a fundadora.

CTA para `/about`.

---

## CTA FINAL

Manter ou adaptar o CTA final existente, sem inventar novas ofertas.

---

# TAMANHO E LEGIBILIDADE

A nova homepage deve ser significativamente menor que a versão da Sprint 7.

Objetivo:

* reduzir aproximadamente entre 45% e 55% da extensão vertical atual em desktop;
* permitir aumento do tamanho das fontes;
* reduzir densidade de texto;
* melhorar ritmo visual;
* evitar blocos comprimidos;
* evitar microtexto.

## REFERÊNCIA DE LEGIBILIDADE

Avaliar o design system atual antes de definir valores finais.

Como referência:

* texto principal: aproximadamente `18px` em desktop;
* texto secundário: aproximadamente `16px`;
* labels: não reduzir indevidamente para compensar falta de espaço;
* line-height confortável;
* largura de leitura controlada;
* contraste suficiente.

Não aumentar a fonte de forma isolada antes de reduzir a densidade do conteúdo.

A redução deve ocorrer através da arquitetura, não através de tipografia pequena.

---

# NAVEGAÇÃO

Atualizar a navegação principal para refletir as novas páginas.

Evitar adicionar todas as páginas diretamente ao Header.

Criar uma navegação clara, com agrupamento quando necessário.

Exemplo de agrupamentos possíveis:

* Método
* Aprender
* Casos
* LAB
* Sobre

Não implementar menus complexos sem necessidade.

No mobile:

* manter navegação acessível;
* preservar foco;
* evitar menus que dependam apenas de hover;
* permitir fechar o menu com teclado e interação touch;
* bloquear corretamente o scroll quando aplicável.

---

# LINKS E CTAS

Todos os resumos da homepage devem apontar para páginas reais.

Não utilizar:

* `href="#"`;
* rotas inexistentes;
* botões sem ação;
* links temporários quebrados;
* textos que aparentem ser clicáveis sem interação;
* CTAs fictícios de contato ou colaboração.

Caso alguma página ainda não possa ser implementada:

* manter o conteúdo atual temporariamente;
* ou ocultar o CTA;
* ou registrar o bloqueio.

Nunca substituir uma página real por um link falso.

---

# SEO

A migração não deve reduzir a capacidade de indexação do conteúdo.

Para cada página temática:

* criar metadata própria;
* usar apenas um `h1`;
* preservar headings existentes de forma hierárquica;
* manter conteúdo como HTML real;
* definir descrição coerente;
* considerar canonical;
* atualizar sitemap, se houver;
* atualizar robots apenas se necessário;
* garantir links internos a partir da homepage;
* evitar páginas órfãs.

Quando um conteúdo deixar de estar integralmente na homepage, garantir que continue indexável na nova rota.

---

# ACESSIBILIDADE

Preservar e validar:

* hierarquia de headings;
* landmarks;
* navegação por teclado;
* foco visível;
* textos alternativos;
* labels;
* contraste;
* ordem lógica;
* responsividade;
* conteúdo acessível sem hover;
* suporte a `prefers-reduced-motion`;
* ausência de informação transmitida apenas por cor.

A migração não pode reduzir a acessibilidade já existente.

---

# PERFORMANCE

A modularização não deve causar regressão relevante.

Preferir:

* Server Components;
* carregamento de JavaScript apenas onde necessário;
* componentes compartilhados;
* CSS existente;
* lazy loading de elementos pesados abaixo da dobra;
* imagens otimizadas;
* ausência de novas dependências.

Não adicionar bibliotecas para:

* diagramas simples;
* grids;
* sliders;
* animações;
* layout;
* roteamento já suportado pelo framework.

---

# PRESERVAÇÃO VISUAL

Ao mover uma seção para uma página própria, preservar sua identidade visual.

Não é necessário que a nova página reproduza exatamente a posição original na homepage, mas deve preservar:

* composição;
* cores;
* tipografia;
* hierarquia;
* cards;
* diagramas;
* ícones;
* interações;
* espaçamento interno;
* relação entre texto e visual.

O contexto externo da seção pode ser adaptado para uma página completa, mas o conteúdo interno não deve ser redesenhado de forma destrutiva.

---

# COMPONENTIZAÇÃO

Quando necessário:

1. Extrair a seção existente para um componente reutilizável.
2. Renderizar a versão completa apenas na página temática.
3. Criar um novo componente resumido para a homepage.
4. Não usar props que alterem silenciosamente o texto completo.
5. Não criar um modo `compact` que simplesmente esconda partes do mesmo componente usando CSS.

O conteúdo completo deve existir realmente na página temática.

A homepage deve conter componentes de síntese próprios.

---

# VALIDAÇÃO DE PRESERVAÇÃO

Depois da migração, realizar uma auditoria comparativa.

Para cada seção do inventário, confirmar:

* onde estava;
* para onde foi;
* se todos os textos foram preservados;
* se todos os elementos foram preservados;
* se todas as interações foram preservadas;
* se todos os links válidos foram preservados;
* se imagens e ícones foram preservados;
* se o conteúdo continua acessível;
* se o conteúdo continua indexável.

Criar uma matriz de rastreabilidade:

| Conteúdo original | Página de destino | Componente atual | Preservado | Observações |
| ----------------- | ----------------- | ---------------- | ---------- | ----------- |

A coluna `Preservado` deve estar marcada para 100% dos itens antes da conclusão do sprint.

---

# TESTES OBRIGATÓRIOS

Executar:

1. lint;
2. typecheck;
3. testes automatizados;
4. build de produção;
5. validação de todas as novas rotas;
6. verificação de links internos;
7. verificação de rotas 404;
8. navegação por teclado;
9. inspeção de headings;
10. inspeção de metadata;
11. inspeção desktop;
12. inspeção tablet;
13. inspeção mobile;
14. verificação de overflow horizontal;
15. verificação de hidratação;
16. verificação do console;
17. comparação visual da demonstração;
18. comparação do conteúdo antes e depois;
19. auditoria da matriz de preservação;
20. medição da altura aproximada da homepage antes e depois.

---

# CRITÉRIOS DE ACEITAÇÃO

O Sprint 8 será considerado concluído quando:

* todas as seções extensas da homepage tiverem páginas próprias adequadas;
* 100% do conteúdo existente antes da refatoração continuar disponível;
* nenhum texto transferido tiver sido reescrito;
* nenhuma explicação tiver sido eliminada;
* nenhum elemento visual relevante tiver sido perdido;
* nenhuma interação válida tiver sido perdida;
* a demonstração visual permanecer na homepage;
* a sequência Click → Structured Payload → Request → API → Domain → Repository → Response → UI permanecer visível;
* a homepage tiver sido transformada numa síntese navegável;
* cada síntese possuir CTA para uma página real;
* a extensão vertical da homepage tiver sido reduzida aproximadamente pela metade;
* a legibilidade tiver melhorado;
* não houver textos indevidamente pequenos;
* as novas páginas forem responsivas;
* as novas páginas forem acessíveis;
* o Header e o Footer funcionarem em todas as rotas;
* não existirem links falsos;
* não existirem páginas órfãs;
* não existirem regressões relevantes de performance;
* lint, testes, typecheck e build passarem;
* a matriz de preservação demonstrar cobertura de 100%.

---

# FORA DO ESCOPO

Não faz parte deste sprint:

* escrever novamente o conteúdo das seções;
* simplificar o conteúdo transferido;
* eliminar conteúdo considerado repetitivo;
* redefinir os métodos;
* alterar terminologia oficial;
* implementar o paper completo da USMT;
* implementar a seção detalhada da USMT prevista para a Sprint 9;
* criar novos produtos;
* criar novos cursos;
* inventar parcerias;
* modificar branding;
* redesenhar completamente todas as páginas;
* adicionar CMS;
* adicionar dependências desnecessárias;
* alterar funcionalidades não relacionadas;
* refatorar backend;
* modificar integrações externas sem necessidade direta.

---

# ENTREGÁVEIS

Ao concluir, entregar:

1. Inventário completo das seções originais.
2. Mapa das novas rotas.
3. Matriz de rastreabilidade do conteúdo.
4. Lista de arquivos criados.
5. Lista de arquivos modificados.
6. Lista de componentes extraídos.
7. Lista de páginas criadas.
8. Descrição da nova homepage.
9. Comparação da ordem antiga e nova.
10. Comparação da altura da homepage.
11. Comparação das métricas de performance.
12. Resultado de lint.
13. Resultado de typecheck.
14. Resultado dos testes.
15. Resultado do build.
16. Capturas da homepage:

    * desktop;
    * tablet;
    * mobile.
17. Capturas de cada nova página:

    * pelo menos desktop;
    * pelo menos mobile.
18. Confirmação explícita de preservação de 100% do conteúdo.
19. Registro de qualquer item que não tenha podido ser preservado, com justificativa técnica.
20. Relatório final em:

`docs/homepage-refactor/22-sprint-8-report.md`

---

# COMMITS SUGERIDOS

Caso seja conveniente dividir o trabalho:

`docs(homepage): inventory sprint 7 content`

`feat(site): create thematic content routes`

`refactor(homepage): replace full sections with summaries`

`test(site): validate content preservation and routes`

Ou, num único commit:

`refactor(homepage): modularize content into thematic pages`

---

# REGRA DE PROTEÇÃO FINAL

Este sprint não autoriza eliminar conteúdo.

Este sprint não autoriza resumir as páginas derivadas.

Este sprint não autoriza reinterpretar os textos existentes.

Este sprint não autoriza substituir explicações completas por cards curtos.

Os cards e resumos curtos pertencem apenas à homepage.

As páginas derivadas devem preservar integralmente o conteúdo completo criado até a Sprint 7.

A demonstração visual deve permanecer na homepage.

Ao final, o site deve possuir duas camadas complementares:

**Homepage curta para compreender e navegar.**

**Páginas completas para estudar e aprofundar.**
