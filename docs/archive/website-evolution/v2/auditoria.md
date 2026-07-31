# AUDITORIA — AI-FRIENDLINESS DO PAYLOAD JOURNEY LAB

## MISSÃO

Avaliar tecnicamente o nível de AI-friendliness do site Payload Journey LAB após a execução das Sprints 8 e 9.

A auditoria deve determinar até que ponto o site pode ser:

* descoberto por crawlers e sistemas de inteligência artificial;
* lido sem perda de conteúdo;
* interpretado semanticamente;
* compreendido como uma entidade coerente;
* citado corretamente por mecanismos de resposta;
* diferenciado de conceitos genéricos ou homónimos;
* navegado por agentes automatizados;
* utilizado como fonte sobre Payload Journey, USMT e investigação de sistemas.

Esta etapa é exclusivamente de avaliação.

Não modificar arquivos.

Não implementar melhorias.

Não instalar dependências.

Não alterar metadata, conteúdo, rotas, componentes, sitemap, robots ou dados estruturados.

Ao final, entregar um diagnóstico fundamentado e um plano de recomendações priorizadas.

---

# CONTEXTO

O site deixou de ser uma single page extensa e passou a possuir uma arquitetura modular.

Estado esperado:

* homepage sintética;
* demonstração integral do Payload Journey na homepage;
* páginas temáticas com o conteúdo completo;
* USMT completa em `/usmt`;
* métodos, protocolo e investigação separados por responsabilidade;
* conteúdo público preservado;
* rotas estáticas;
* apenas uma fronteira Client Component;
* metadata e canonical próprios;
* sitemap e dados estruturados;
* navegação interna sem links quebrados.

A auditoria deve respeitar essa arquitetura.

Não interpretar modularização como fragmentação negativa sem analisar as ligações semânticas e a navegação entre as páginas.

---

# DEFINIÇÃO OPERACIONAL DE AI-FRIENDLINESS

Para esta auditoria, considerar AI-friendly um site que permite que sistemas automatizados consigam:

1. descobrir as páginas;
2. acessar o conteúdo;
3. identificar a entidade responsável;
4. compreender o tema principal de cada página;
5. reconhecer relações entre conceitos;
6. distinguir conteúdo factual, metodológico, educacional e institucional;
7. identificar autoria e origem;
8. encontrar definições explícitas;
9. extrair afirmações sem depender de inferências excessivas;
10. citar URLs específicas e estáveis;
11. compreender a hierarquia do site;
12. evitar interpretações incorretas causadas por ambiguidades;
13. verificar a consistência das informações;
14. navegar entre conceitos relacionados;
15. identificar conteúdos ainda em investigação ou não resolvidos.

---

# BASELINE

Antes de realizar a avaliação:

1. Registrar:

   * branch atual;
   * commit atual;
   * status do Git;
   * framework e versão;
   * estratégia de renderização;
   * rotas públicas;
   * Client Components;
   * arquivos de metadata;
   * sitemap;
   * robots;
   * dados estruturados;
   * manifestos ou arquivos especiais existentes.

2. Executar:

   * lint;
   * typecheck;
   * testes existentes;
   * build de produção.

3. Confirmar que a auditoria está sendo realizada sobre o estado posterior às Sprints 8 e 9.

4. Não incluir arquivos untracked no escopo da implementação, salvo quando forem documentos necessários para compreender os requisitos.

---

# ROTAS A AUDITAR

Auditar todas as rotas públicas existentes.

Como referência, verificar especialmente:

* `/`
* `/payload-journey`
* `/learn`
* `/cases` ou rota equivalente do caso HORA.city
* `/usmt`
* `/method`
* `/protocol`
* `/investigation`
* `/lab`
* `/ecosystem`
* `/lablog`
* `/about`

Usar as rotas reais encontradas no projeto como fonte de verdade.

Não assumir que esta lista está completa.

---

# DIMENSÃO 1 — DESCOBERTA E CRAWLABILITY

Avaliar:

* existência e validade de `robots.txt`;
* existência e validade de sitemap;
* presença de todas as páginas públicas no sitemap;
* exclusões involuntárias;
* diretivas `noindex`;
* uso de canonical;
* estabilidade das URLs;
* links internos rastreáveis;
* páginas órfãs;
* navegação dependente exclusivamente de JavaScript;
* conteúdo disponível no HTML inicial;
* conteúdo oculto atrás de interações;
* dependência de canvas, animação ou imagem para comunicar conceitos;
* status HTTP;
* redirects;
* erros 404;
* URLs duplicadas;
* parâmetros desnecessários;
* capacidade de descoberta a partir da homepage.

Responder:

* Um crawler consegue encontrar todas as páginas?
* Um agente sem executar JavaScript consegue acessar o conteúdo essencial?
* Existe algum conteúdo público que só aparece após hidratação ou interação?
* Há páginas importantes com poucos links de entrada?

---

# DIMENSÃO 2 — RENDERIZAÇÃO E CONTEÚDO NO HTML

Inspecionar o HTML de produção de cada rota.

Avaliar:

* presença do conteúdo principal no HTML inicial;
* proporção entre conteúdo útil e markup;
* conteúdo enviado ao cliente desnecessariamente;
* headings renderizados;
* textos de cards e diagramas;
* demonstração do Payload Journey;
* elementos da USMT;
* quatro lentes:

  * WHERE;
  * HOW;
  * LOGIC;
  * SAFE;
* protocolo:

  * Congelar;
  * Mapear;
  * Detectar;
  * Restaurar;
* conteúdo dependente de CSS para existir semanticamente;
* textos visualmente presentes, mas ausentes da árvore semântica;
* conteúdo duplicado entre páginas.

Confirmar se sistemas que consomem HTML conseguem compreender as páginas sem reproduzir a interface visual.

---

# DIMENSÃO 3 — SEMÂNTICA DO HTML

Avaliar:

* existência de um único `h1` por página;
* hierarquia coerente entre `h1`, `h2`, `h3` e níveis seguintes;
* uso de `main`;
* uso de `header`, `nav`, `section`, `article`, `aside` e `footer`;
* listas reais para sequências e enumerações;
* tabelas reais quando o conteúdo for tabular;
* links semanticamente claros;
* botões usados apenas para ações;
* anchors usados para navegação;
* labels acessíveis;
* nomes acessíveis de ícones;
* textos alternativos;
* landmarks;
* ordem de leitura;
* relações entre títulos e seções.

Identificar componentes visualmente claros para humanos, mas semanticamente ambíguos para máquinas.

---

# DIMENSÃO 4 — CLAREZA CONCEITUAL

Avaliar se cada conceito central possui uma definição explícita, curta e citável.

Conceitos prioritários:

* Payload Journey LAB;
* Payload Journey;
* Reverse Payload Journey;
* USMT;
* Universal System Model Template;
* Operational Payload Path;
* software system investigation;
* payload tracing;
* Congelar;
* Mapear;
* Detectar;
* Restaurar;
* checkpoint;
* evidência;
* comportamento esperado;
* comportamento observado;
* investigação aplicada;
* HORA.city;
* LabLog.

Para cada conceito, verificar:

* existe uma definição explícita?
* em qual URL aparece?
* aparece antes de explicações mais complexas?
* a definição depende de contexto anterior?
* há termos diferentes usados para representar a mesma coisa?
* há termos semelhantes usados com sentidos diferentes?
* uma IA conseguiria extrair uma resposta curta e correta?
* existe risco de a IA confundir método, ferramenta, laboratório, curso e protocolo?

Criar uma tabela:

| Conceito | Página principal | Definição explícita | Clareza | Risco de ambiguidade |
| -------- | ---------------- | ------------------: | ------: | -------------------- |

---

# DIMENSÃO 5 — IDENTIDADE E ENTIDADES

Avaliar se o site comunica claramente:

* o que é o Payload Journey LAB;
* quem criou o LAB;
* quem criou a USMT;
* relação entre o LAB, a USMT e o Payload Journey;
* relação entre o LAB e HORA.city;
* diferença entre projeto, método, protocolo, curso, caso e canal;
* identidade da fundadora;
* nome utilizado de maneira consistente;
* entidade jurídica, caso exista;
* ausência de entidade jurídica inventada;
* localização ou atuação, quando realmente relevante;
* canais oficiais;
* domínio oficial.

Verificar consistência entre:

* homepage;
* página Sobre;
* metadata;
* dados estruturados;
* Footer;
* conteúdo institucional;
* links externos;
* LabLog;
* formação.

Identificar afirmações que possam induzir uma IA a inventar:

* empresa formal;
* parceiros;
* clientes;
* contratos;
* certificações;
* pilotos ativos;
* equipe;
* afiliações institucionais;
* resultados ainda não comprovados.

---

# DIMENSÃO 6 — METADATA

Auditar cada rota quanto a:

* `title`;
* meta description;
* canonical;
* Open Graph;
* Twitter/X cards, caso existam;
* idioma;
* viewport;
* robots;
* favicon e identidade;
* consistência entre metadata e conteúdo real;
* títulos duplicados;
* descrições duplicadas;
* títulos excessivamente genéricos;
* títulos excessivamente longos;
* ausência de palavras essenciais;
* metadata que prometa mais do que a página entrega.

Criar uma matriz por rota:

| Rota | Title | Description | Canonical | OG | Clareza temática | Problemas |
| ---- | ----- | ----------- | --------- | -- | ---------------- | --------- |

---

# DIMENSÃO 7 — DADOS ESTRUTURADOS

Identificar todos os blocos JSON-LD ou outros dados estruturados.

Avaliar:

* validade sintática;
* tipos Schema.org utilizados;
* correspondência com o conteúdo público;
* consistência de nomes;
* URLs;
* imagens;
* autor;
* organização ou pessoa;
* website;
* breadcrumbs;
* course;
* article;
* video;
* educational organization;
* creative work;
* software application;
* learning resource;
* outros tipos existentes.

Não recomendar tipos apenas porque parecem desejáveis.

Cada tipo sugerido deve corresponder a uma entidade real e publicamente demonstrável.

Verificar especialmente se o site poderia representar corretamente:

* `WebSite`;
* `WebPage`;
* `Person`;
* `BreadcrumbList`;
* `Course`, quando aplicável;
* `Article` ou `BlogPosting`, quando aplicável;
* `VideoObject`, quando aplicável;
* `DefinedTerm` ou estruturas equivalentes, caso sejam realmente adequadas.

Identificar:

* propriedades ausentes;
* propriedades contraditórias;
* valores inventados;
* tipos excessivos;
* duplicação de entidades;
* entidade principal mal definida;
* falta de ligação entre páginas.

---

# DIMENSÃO 8 — ARQUITETURA SEMÂNTICA E LINKS INTERNOS

Avaliar se a arquitetura modular permite compreender as relações:

* homepage → Payload Journey;
* homepage → USMT;
* homepage → protocolo;
* método → protocolo;
* método → investigação;
* USMT → Payload Journey;
* Payload Journey → checkpoints;
* investigação → evidências;
* caso HORA.city → método;
* formação → conteúdo metodológico;
* LabLog → casos e conceitos;
* Sobre → autoria.

Avaliar:

* textos dos links;
* links contextuais;
* breadcrumbs;
* navegação de continuidade;
* páginas relacionadas;
* páginas sem entrada ou saída;
* uso excessivo de “saiba mais” sem contexto;
* anchors obsoletos;
* páginas que competem pela mesma intenção;
* sobreposição entre `/method`, `/protocol` e `/investigation`.

Criar um mapa das relações semânticas encontradas.

---

# DIMENSÃO 9 — CONTEÚDO CITÁVEL

Avaliar se as páginas contêm unidades de informação que uma IA possa citar de forma segura.

Verificar:

* definições autocontidas;
* parágrafos com uma ideia principal;
* headings descritivos;
* listas com contexto;
* sequências operacionais claras;
* identificação da fonte;
* autoria;
* data de publicação ou atualização, quando relevante;
* distinção entre hipótese, metodologia, exemplo e resultado;
* distinção entre comportamento esperado e observado;
* marcação clara de conteúdo ainda não resolvido.

Verificar especialmente se HORA.city continua identificado como investigação não resolvida quando aplicável.

Preservar e avaliar o significado de:

`resolutionStatus: "unresolved"`

A IA não deve conseguir interpretar um caso em andamento como um problema já solucionado.

---

# DIMENSÃO 10 — AUTORIDADE E PROVENIÊNCIA

Avaliar se um sistema automatizado consegue responder:

* Quem afirma isto?
* Onde o conceito foi definido?
* Quem é a autora ou criadora?
* Qual é a fonte principal?
* Existe uma página canónica para o conceito?
* O conteúdo é metodologia autoral, documentação, opinião, ensino ou relato de caso?
* Há referências externas quando necessárias?
* Há afirmações sem sustentação?
* Existem datas ou versões?
* O conteúdo possui histórico ou estado editorial?

Não avaliar autoridade apenas com base em backlinks, pois essa informação pode não estar disponível no repositório.

Focar na autoridade e proveniência comunicadas pelo próprio site.

---

# DIMENSÃO 11 — ACESSIBILIDADE COMO SUPORTE À IA

Avaliar:

* alt text;
* labels;
* headings;
* landmarks;
* ordem do DOM;
* conteúdo dependente de hover;
* conteúdo dependente de cor;
* conteúdo visual sem equivalente textual;
* diagramas;
* animações;
* reduced motion;
* menus;
* foco;
* elementos escondidos.

Considerar que boa acessibilidade também melhora a leitura por agentes e sistemas automatizados.

---

# DIMENSÃO 12 — ARQUIVOS ESPECÍFICOS PARA AGENTES E LLMS

Verificar se existem:

* `llms.txt`;
* `llms-full.txt`;
* documentação textual equivalente;
* índice de conceitos;
* feed;
* RSS ou Atom;
* manifestos;
* arquivos Markdown públicos;
* documentação API;
* endpoints estruturados;
* políticas específicas de crawlers;
* referências a agentes.

Caso não existam, não classificar automaticamente como erro.

Avaliar:

* se seriam úteis neste site;
* qual problema resolveriam;
* se duplicariam conteúdo;
* se poderiam ficar desatualizados;
* como seriam gerados e mantidos;
* se os benefícios justificariam a manutenção.

Distinguir claramente:

* requisitos fundamentais;
* boas práticas consolidadas;
* melhorias experimentais;
* tendências ainda não padronizadas.

---

# DIMENSÃO 13 — ROBOTS E CRAWLERS DE IA

Inspecionar as políticas declaradas para crawlers.

Avaliar:

* bloqueios globais;
* bloqueios específicos;
* divergência entre robots e intenção pública do site;
* assets necessários bloqueados;
* páginas relevantes excluídas;
* ausência de política explícita;
* consistência entre indexação tradicional e agentes de IA.

Não modificar políticas.

Não assumir que permitir todos os crawlers é necessariamente a decisão correta.

Apenas documentar o estado e os seus efeitos.

---

# DIMENSÃO 14 — RISCO DE ALUCINAÇÃO

Identificar pontos nos quais um modelo poderia concluir incorretamente que:

* Payload Journey é apenas uma ferramenta de observabilidade;
* USMT é UML, SysML ou outro padrão já existente;
* o LAB é uma empresa de consultoria;
* o LAB possui clientes ou parceiros ativos;
* o protocolo é uma certificação;
* HORA.city é um produto comercial finalizado;
* a investigação HORA.city está resolvida;
* o método substitui debugging, tracing ou observabilidade;
* a USMT garante compreensão universal ou infalível;
* os quatro pilares representam departamentos formais;
* o curso é uma formação académica oficial;
* a fundadora possui títulos ou vínculos não declarados.

Para cada risco, registrar:

* texto ou estrutura que pode causar a interpretação;
* probabilidade;
* impacto;
* página;
* recomendação futura.

---

# DIMENSÃO 15 — TESTE DE EXTRAÇÃO

Criar um conjunto de perguntas que uma IA poderia fazer ao site.

Exemplos:

1. O que é o Payload Journey LAB?
2. O que é Payload Journey?
3. O que é USMT?
4. Quem criou a USMT?
5. Quais são os 12 elementos da USMT?
6. O que significam WHERE, HOW, LOGIC e SAFE?
7. Qual é a diferença entre Payload Journey e Reverse Payload Journey?
8. O que é Operational Payload Path?
9. O que significa Congelar, Mapear, Detectar e Restaurar?
10. Como checkpoints são utilizados?
11. O que é investigado no caso HORA.city?
12. O caso HORA.city já foi resolvido?
13. Que formação o LAB oferece?
14. O que é o LabLog?
15. Quem criou o Payload Journey LAB?
16. O LAB possui parceiros ou clientes ativos?
17. Como Payload Journey, USMT e protocolo se relacionam?
18. Qual página é a fonte principal de cada conceito?

Para cada pergunta:

* localizar a melhor URL;
* extrair a resposta apenas do conteúdo público;
* indicar se a resposta é inequívoca;
* indicar se exige combinar várias páginas;
* indicar risco de resposta errada;
* indicar ausência de fonte clara.

Criar uma tabela:

| Pergunta | Melhor URL | Resposta extraível | Confiança | Risco |
| -------- | ---------- | ------------------ | --------: | ----: |

---

# DIMENSÃO 16 — TESTE DE AGENTE

Simular a navegação de um agente automatizado iniciando apenas pela homepage.

O agente deve tentar:

1. identificar o propósito do site;
2. encontrar a definição de Payload Journey;
3. encontrar a USMT;
4. encontrar os 12 elementos;
5. encontrar as quatro lentes;
6. encontrar o protocolo;
7. encontrar um caso aplicado;
8. identificar a fundadora;
9. encontrar formação;
10. encontrar conteúdo publicado;
11. determinar se o caso HORA.city está resolvido;
12. regressar à homepage.

Registrar:

* número de passos;
* links utilizados;
* ambiguidades;
* becos sem saída;
* páginas órfãs;
* labels pouco descritivos;
* necessidade de adivinhação.

---

# SISTEMA DE PONTUAÇÃO

Atribuir uma nota de 0 a 5 para cada dimensão.

## 0 — Ausente

A dimensão não está implementada ou impede compreensão.

## 1 — Muito fraca

Existem barreiras graves de acesso ou interpretação.

## 2 — Parcial

A informação existe, mas depende de inferência, contexto ou execução adicional.

## 3 — Adequada

O site é compreensível, mas contém lacunas relevantes.

## 4 — Forte

A informação é clara, acessível e semanticamente bem estruturada.

## 5 — Excelente

A dimensão está implementada de forma explícita, consistente, verificável e robusta.

Calcular notas para:

* descoberta;
* acesso ao conteúdo;
* HTML semântico;
* clareza conceitual;
* identidade;
* metadata;
* dados estruturados;
* arquitetura interna;
* citabilidade;
* autoridade;
* acessibilidade;
* suporte a agentes;
* controle de ambiguidade;
* consistência editorial;
* manutenção.

Calcular também uma pontuação geral de 0 a 100.

Não produzir uma média cega.

Explicar os pesos utilizados.

---

# CLASSIFICAÇÃO FINAL

Classificar o site numa destas categorias:

## 0–39 — Pouco AI-friendly

Conteúdo difícil de descobrir, acessar ou interpretar.

## 40–59 — Parcialmente AI-friendly

Acesso possível, mas com ambiguidade ou estrutura insuficiente.

## 60–74 — AI-friendly funcional

O site pode ser compreendido, mas ainda apresenta lacunas relevantes.

## 75–89 — Muito AI-friendly

Boa descoberta, semântica, arquitetura e citabilidade.

## 90–100 — AI-ready robusto

O site oferece conteúdo altamente acessível, estruturado, citável e semanticamente consistente.

Não conceder nota alta apenas porque o site possui metadata ou JSON-LD.

A classificação deve considerar a experiência completa de descoberta, interpretação e extração.

---

# CLASSIFICAÇÃO DAS RECOMENDAÇÕES

Para cada recomendação futura, indicar:

* prioridade;
* impacto;
* esforço;
* risco;
* arquivos provavelmente envolvidos;
* páginas afetadas;
* dependências;
* necessidade de alteração editorial;
* necessidade de decisão humana.

Categorias de prioridade:

## P0 — Bloqueador

Impede descoberta ou provoca interpretação gravemente incorreta.

## P1 — Alta

Melhora substancialmente compreensão, indexação ou citabilidade.

## P2 — Média

Aprimora consistência e navegação.

## P3 — Opcional

Melhoria experimental ou de baixo impacto.

Não implementar nenhuma recomendação nesta etapa.

---

# EVIDÊNCIAS OBRIGATÓRIAS

Toda conclusão deve apontar para evidências concretas:

* arquivo;
* componente;
* rota;
* linha aproximada;
* HTML gerado;
* metadata;
* JSON-LD;
* link;
* heading;
* teste;
* captura, quando necessário.

Evitar afirmações genéricas como:

* “SEO está bom”;
* “a página está otimizada para IA”;
* “o conteúdo é semântico”;
* “os dados estruturados estão corretos”.

Cada afirmação deve ser demonstrável.

---

# RELATÓRIO FINAL

Criar:

`docs/ai-readiness/01-pjl-ai-friendliness-audit.md`

O relatório deve conter:

1. Sumário executivo.
2. Escopo.
3. Estado técnico auditado.
4. Metodologia.
5. Mapa das rotas.
6. Pontuação por dimensão.
7. Pontuação geral.
8. Classificação final.
9. Aspectos já fortes.
10. Bloqueadores.
11. Riscos de interpretação.
12. Auditoria de metadata.
13. Auditoria de dados estruturados.
14. Auditoria semântica.
15. Auditoria de crawlability.
16. Auditoria de conteúdo citável.
17. Teste de extração.
18. Teste de navegação por agente.
19. Recomendações P0–P3.
20. Plano sugerido de implementação futura.
21. Arquivos provavelmente afetados.
22. Evidências.
23. Limitações da auditoria.
24. Conclusão.

---

# RESUMO PARA O TERMINAL

Ao finalizar, apresentar:

* branch;
* commit auditado;
* rotas auditadas;
* nota geral;
* classificação;
* cinco pontos mais fortes;
* cinco maiores lacunas;
* quantidade de recomendações P0;
* quantidade de recomendações P1;
* quantidade de recomendações P2;
* quantidade de recomendações P3;
* caminho do relatório;
* confirmação de que nenhum arquivo de aplicação foi modificado.

---

# GUARDRAILS

Não alterar o site.

Não executar uma refatoração.

Não criar `llms.txt`.

Não modificar `robots.txt`.

Não adicionar Schema.org.

Não reescrever conteúdo.

Não alterar metadata.

Não criar novas rotas.

Não instalar ferramentas.

Não atualizar dependências.

Não fazer commit, push ou deploy.

A auditoria deve avaliar o site tal como ele existe.

Qualquer sugestão deve permanecer apenas no relatório.

---

# PERGUNTA FINAL DA AUDITORIA

O relatório deve responder de forma inequívoca:

> Se um sistema de inteligência artificial encontrar o Payload Journey LAB hoje, conseguirá compreender corretamente o que é o LAB, o que é Payload Journey, o que é a USMT, como os métodos se relacionam, quem é a autora e quais afirmações estão confirmadas ou ainda não resolvidas?

Responder:

* sim;
* parcialmente;
* ou não.

Justificar a resposta com evidências e indicar o caminho necessário para alcançar um nível AI-ready robusto.
