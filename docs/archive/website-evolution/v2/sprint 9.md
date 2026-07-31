# SPRINT 9 — REINCORPORAÇÃO DA USMT NA HOMEPAGE

## CONTEXTO

A homepage do Payload Journey LAB foi refatorada para apresentar o conceito de forma progressiva, visual e orientada à experiência do visitante.

Durante essa refatoração, a seção dedicada à USMT — Universal System Model Template — deixou de fazer parte da página.

A USMT não deve aparecer apenas como um material secundário ou como um paper isolado. Ela é um dos fundamentos intelectuais e metodológicos do LAB.

O Payload Journey mostra como seguir um fluxo concreto através do sistema.

A USMT mostra como compreender o sistema que esse fluxo atravessa.

Este sprint deve reincorporar a USMT à homepage como uma seção própria, compacta, visual e integrada à narrativa atual, preservando integralmente o trabalho realizado na Sprint 7.

---

# OBJETIVO DO SPRINT

Implementar uma nova seção da homepage dedicada à:

**USMT — Universal System Model Template**

A seção deve apresentar:

1. A função da USMT dentro do Payload Journey LAB.
2. Os 12 elementos estruturais do modelo.
3. As quatro lentes investigativas:

   * WHERE
   * HOW
   * LOGIC
   * SAFE
4. A relação entre a USMT, o Payload Journey e o protocolo:

   * Congelar
   * Mapear
   * Detectar
   * Restaurar
5. Um caminho para aprofundamento futuro por meio de um paper, documentação ou material dedicado.

---

# REGRA CENTRAL

A USMT não deve ser apresentada como uma teoria desconectada, uma lista acadêmica ou um bloco excessivamente textual.

A seção deve responder visualmente à seguinte pergunta:

> Como sabemos se o comportamento observado durante a jornada do payload está correto?

A resposta apresentada pela seção deve ser:

A USMT estabelece o modelo do sistema, incluindo seus estados, eventos, regras, transições, invariantes, camadas e critérios de validade.

A investigação confronta esse modelo com o comportamento real observado no fluxo.

---

# POSICIONAMENTO NA HOMEPAGE

Inserir a seção da USMT:

**Depois da demonstração visual do Payload Journey e antes da apresentação do protocolo Congelar → Mapear → Detectar → Restaurar.**

A progressão narrativa deve ser:

1. O visitante vê o payload atravessar o sistema.
2. O visitante entende que seguir o fluxo não é suficiente.
3. A USMT apresenta o modelo necessário para interpretar o comportamento.
4. O protocolo apresenta o processo investigativo aplicado sobre esse modelo.
5. O restante da página aprofunda método, formação, casos e ecossistema.

A nova seção não deve interromper a experiência da página. Ela deve funcionar como uma ponte conceitual entre a demonstração prática e o protocolo investigativo.

---

# TÍTULO PRINCIPAL DA SEÇÃO

Usar como referência:

## USMT — Universal System Model Template

### Entenda o sistema que o payload atravessa.

O título pode ser ajustado apenas se houver necessidade real de alinhamento com o sistema tipográfico existente, mas o nome completo USMT — Universal System Model Template deve permanecer claramente visível.

---

# COPY PRINCIPAL

Usar uma mensagem curta, direta e compreensível:

> Seguir o payload revela o que aconteceu.
> A USMT ajuda a compreender o que deveria acontecer.

Complemento:

> A USMT transforma um sistema desconhecido em um modelo investigável, tornando visíveis seus estados, eventos, transições, regras, invariantes, camadas e critérios de validade.

Evitar linguagem promocional exagerada.

Evitar apresentar a USMT como uma fórmula universal infalível.

Apresentá-la como um modelo operacional para aquisição de domínio, investigação e confrontação entre comportamento esperado e comportamento observado.

---

# BLOCO 1 — OS 12 ELEMENTOS ESTRUTURAIS

Apresentar os 12 elementos da USMT:

1. Descrição
2. Delimitação
3. Estados
4. Eventos
5. Transições permitidas
6. Transições proibidas
7. Invalidação
8. Terminação
9. Invariantes
10. Camadas
11. Métricas
12. Spec

## DIRETRIZ VISUAL

Não criar doze cards grandes e independentes, pois isso tornaria a seção longa e pesada.

Preferir uma representação compacta, como:

* grade numerada;
* trilha estrutural;
* matriz visual;
* diagrama modular;
* sequência em duas ou três linhas;
* arquitetura visual inspirada em blueprint ou system map.

Cada elemento deve ser legível, mas não precisa conter uma explicação extensa.

Caso sejam incluídas microdescrições, utilizar no máximo uma frase curta por elemento.

Sugestões de microdescrições:

* Descrição — O que é o sistema.
* Delimitação — Onde o sistema começa e termina.
* Estados — Em quais condições pode existir.
* Eventos — O que provoca mudança.
* Permitidas — O que pode acontecer.
* Proibidas — O que não pode acontecer.
* Invalidação — O que torna o estado inválido.
* Terminação — Como o ciclo termina.
* Invariantes — O que deve permanecer verdadeiro.
* Camadas — Onde cada responsabilidade vive.
* Métricas — Como o comportamento é medido.
* Spec — A síntese operacional do modelo.

---

# BLOCO 2 — AS QUATRO LENTES INVESTIGATIVAS

Criar um bloco visual específico para as quatro lentes da USMT.

## WHERE

Onde a responsabilidade vive?

Representa:

* camada;
* componente;
* fronteira;
* localização arquitetural;
* autoridade sobre o dado ou comportamento.

## HOW

Como o comportamento acontece?

Representa:

* fluxo;
* transformação;
* transporte;
* interação entre componentes;
* sequência operacional.

## LOGIC

Qual regra decide o resultado?

Representa:

* regra de domínio;
* condição;
* transição;
* decisão;
* permissão;
* proibição.

## SAFE

O que mantém o sistema válido e seguro?

Representa:

* invariantes;
* limites;
* invalidação;
* terminação;
* proteção contra estados impossíveis ou inconsistentes.

---

# DIRETRIZ VISUAL PARA AS QUATRO LENTES

As quatro lentes devem ter peso visual relevante dentro da seção.

Elas não devem aparecer apenas como quatro palavras pequenas abaixo da lista de elementos.

Criar uma composição que permita compreender que um mesmo sistema pode ser observado através de quatro perspectivas complementares.

Exemplos de direção visual:

* quatro quadrantes;
* quatro lentes sobre um núcleo central;
* quatro camadas de leitura;
* quatro pontos de observação conectados ao modelo;
* composição WHERE / HOW / LOGIC / SAFE ao redor da USMT.

A representação deve comunicar:

* WHERE localiza;
* HOW acompanha;
* LOGIC interpreta;
* SAFE valida.

A ordem deve ser preservada:

**WHERE → HOW → LOGIC → SAFE**

---

# COPY DAS QUATRO LENTES

Utilizar como referência:

## Quatro lentes para investigar qualquer fluxo

**WHERE**
Onde a responsabilidade vive.

**HOW**
Como o payload é transportado e transformado.

**LOGIC**
Qual regra decide o comportamento.

**SAFE**
O que mantém o sistema válido.

Adicionar uma frase de conexão:

> As lentes não substituem o tracing. Elas orientam o que deve ser observado durante o tracing.

---

# BLOCO 3 — CONEXÃO COM O PAYLOAD JOURNEY

Incluir uma representação clara da relação:

**USMT → Payload Journey → Evidência → Investigação**

Ou:

**Modelo esperado → Fluxo observado → Confrontação → Diagnóstico**

A seção deve comunicar que:

* a USMT estabelece uma hipótese estruturada sobre o sistema;
* o Payload Journey segue o comportamento real;
* os checkpoints produzem evidências;
* a investigação confronta modelo e realidade;
* a divergência pode indicar uma anomalia, uma regra desconhecida ou um modelo incompleto.

Copy recomendada:

> A USMT modela o comportamento esperado.
> O Payload Journey revela o comportamento observado.
> A investigação confronta os dois.

---

# BLOCO 4 — CONEXÃO COM O PROTOCOLO

A parte final da seção deve preparar o visitante para a próxima etapa da homepage:

**Congelar → Mapear → Detectar → Restaurar**

Copy recomendada:

> Com o sistema modelado e o fluxo visível, a investigação pode começar.

A transição para a seção seguinte deve parecer natural, evitando a sensação de que dois conteúdos independentes foram colocados lado a lado.

---

# PAPER OU DOCUMENTAÇÃO COMPLETA

A seção deve prever um CTA secundário para aprofundamento.

Exemplos:

* Conheça a USMT
* Explorar o modelo completo
* Ler a documentação da USMT
* Aprofundar a USMT

Não criar um link quebrado.

Se ainda não houver uma rota, página ou documento público disponível:

* deixar o CTA preparado de forma não interativa;
* ocultar temporariamente o CTA;
* ou utilizar uma configuração que permita ativá-lo posteriormente.

Não utilizar href vazio, `#` sem função ou navegação falsa.

O paper será um aprofundamento da seção, não um substituto da presença da USMT na homepage.

---

# REQUISITOS DE DESIGN

A seção deve seguir integralmente o design system e a linguagem visual já estabelecidos na homepage após a Sprint 7.

Preservar:

* base visual predominantemente branca;
* tipografia e hierarquia existentes;
* uso controlado do verde terminal;
* rosa apenas como acento pontual, quando já previsto pelo sistema;
* estética técnica, limpa e editorial;
* espaçamento amplo;
* leitura progressiva;
* ausência de excesso de neon;
* consistência com os componentes existentes;
* responsividade.

Não criar uma linguagem visual paralela.

Não transformar a seção em uma landing page interna.

Não utilizar ilustrações genéricas de inteligência artificial, cérebros, robôs, redes neurais ou imagens de banco.

A visualização deve nascer do próprio conteúdo estrutural da USMT.

---

# REQUISITOS DE IMPLEMENTAÇÃO

Antes de editar:

1. Ler integralmente os documentos existentes relacionados à refatoração da homepage.
2. Ler a documentação das Sprints anteriores, especialmente a Sprint 7.
3. Verificar o estado atual da branch.
4. Registrar:

   * branch atual;
   * commit atual;
   * versão atual;
   * arquivos modificados;
   * arquivos não rastreados.
5. Confirmar a ordem atual das seções da homepage.
6. Identificar os componentes reutilizáveis já existentes.
7. Confirmar os padrões atuais de:

   * container;
   * espaçamento;
   * heading;
   * grid;
   * cards;
   * animações;
   * responsividade;
   * CTA.

Durante a implementação:

1. Criar a seção usando componentes reutilizáveis.
2. Evitar duplicação de estilos.
3. Evitar criar um Client Component sem necessidade.
4. Não adicionar dependências externas para uma visualização que possa ser construída com HTML e CSS.
5. Não usar bibliotecas de diagramas apenas para esta seção.
6. Manter o conteúdo acessível sem JavaScript.
7. Utilizar HTML semântico.
8. Preservar a navegação por teclado.
9. Preservar contraste e legibilidade.
10. Respeitar `prefers-reduced-motion` caso sejam utilizadas animações.
11. Não alterar o conteúdo ou a ordem das demais seções, exceto pela inserção planejada da USMT.
12. Não eliminar conteúdos existentes para compensar a nova seção.

---

# ANIMAÇÕES

Animações são opcionais.

Caso sejam implementadas, devem:

* ser discretas;
* reforçar a leitura;
* não atrasar a renderização;
* não depender de bibliotecas adicionais;
* respeitar `prefers-reduced-motion`;
* não transformar a seção em uma apresentação automática.

Possíveis movimentos:

* aparecimento progressivo dos 12 elementos;
* ativação sequencial das lentes;
* transição visual de modelo esperado para comportamento observado;
* linha conectando USMT, Payload Journey e investigação.

Não utilizar animação contínua ou decorativa sem função semântica.

---

# RESPONSIVIDADE

## Desktop

* Os 12 elementos podem aparecer em grade, matriz ou trilha.
* As quatro lentes podem aparecer lado a lado.
* A conexão com o Payload Journey pode utilizar uma composição horizontal.

## Tablet

* Reduzir colunas preservando hierarquia.
* Evitar textos comprimidos.
* Manter as quatro lentes legíveis.

## Mobile

* Transformar a estrutura em uma progressão vertical.
* Evitar scroll horizontal obrigatório.
* Evitar cards excessivamente estreitos.
* Preservar a ordem:

  * introdução;
  * 12 elementos;
  * quatro lentes;
  * relação com o Payload Journey;
  * transição para o protocolo.

---

# ACESSIBILIDADE

Garantir:

* heading próprio para a seção;
* ordem lógica de leitura;
* contraste suficiente;
* foco visível;
* textos acessíveis sem depender de hover;
* ausência de informações comunicadas exclusivamente por cor;
* ícones decorativos com tratamento apropriado;
* labels compreensíveis para links e botões.

As palavras WHERE, HOW, LOGIC e SAFE devem estar acompanhadas das respectivas explicações. Não presumir que o visitante compreende os termos isoladamente.

---

# SEO E CONTEÚDO INDEXÁVEL

Garantir que os seguintes termos estejam presentes como texto real no HTML:

* USMT
* Universal System Model Template
* software system investigation
* states
* events
* invariants
* layers
* system modeling
* payload tracing

Não inserir palavras-chave artificialmente.

Não esconder o conteúdo principal dentro de canvas, imagem ou elemento não indexável.

---

# TESTES OBRIGATÓRIOS

Executar:

1. lint;
2. typecheck, se aplicável;
3. testes automatizados existentes;
4. build de produção;
5. inspeção visual desktop;
6. inspeção visual tablet;
7. inspeção visual mobile;
8. verificação de navegação por teclado;
9. verificação de links;
10. verificação de ausência de overflow horizontal;
11. verificação de console sem erros;
12. verificação de hidratação;
13. comparação das métricas da rota antes e depois.

Registrar:

* tamanho da rota;
* First Load JS;
* Shared JS;
* quantidade de Client Components;
* tamanho do HTML;
* tamanho do CSS;
* eventuais variações em relação ao baseline atual.

Caso haja regressão relevante, identificar a causa e corrigi-la antes de considerar o sprint concluído.

---

# CRITÉRIOS DE ACEITAÇÃO

O Sprint 9 será considerado concluído quando:

* a USMT voltar a estar claramente presente na homepage;
* existir uma seção própria para a USMT;
* o nome Universal System Model Template estiver visível;
* os 12 elementos estruturais estiverem representados;
* as quatro lentes WHERE, HOW, LOGIC e SAFE estiverem apresentadas;
* cada lente tiver uma explicação compreensível;
* a relação entre USMT e Payload Journey estiver explícita;
* a seção preparar narrativamente o protocolo Congelar → Mapear → Detectar → Restaurar;
* a seção estiver inserida depois da demonstração do fluxo e antes do protocolo;
* o design estiver alinhado à Sprint 7;
* nenhuma seção existente tiver sido eliminada;
* não houver links falsos ou quebrados;
* não houver regressão relevante de performance;
* a página estiver responsiva e acessível;
* lint, testes e build forem concluídos com sucesso.

---

# FORA DO ESCOPO

Não faz parte deste sprint:

* escrever o paper completo da USMT;
* criar uma página documental completa da USMT;
* alterar a definição oficial dos 12 elementos;
* alterar as quatro lentes;
* refatorar novamente toda a homepage;
* reorganizar o protocolo;
* modificar o conteúdo da demonstração visual;
* alterar o branding geral do Payload Journey LAB;
* adicionar novas dependências;
* redesenhar o header ou o footer;
* modificar outras páginas sem necessidade técnica direta.

---

# ENTREGÁVEIS

Ao concluir, entregar:

1. Lista dos arquivos alterados.
2. Resumo da implementação.
3. Justificativa da posição escolhida para a seção.
4. Descrição da composição visual implementada.
5. Resultado de lint, testes e build.
6. Comparação das métricas antes e depois.
7. Capturas da seção em:

   * desktop;
   * tablet;
   * mobile.
8. Confirmação de que nenhuma seção existente foi removida.
9. Confirmação de que não foram adicionadas dependências.
10. Commit sugerido:

`feat(homepage): reincorporate USMT framework section`

---

# REGRA DE PROTEÇÃO FINAL

A implementação deve preservar a refatoração já consolidada.

Não reinterpretar este sprint como autorização para modificar toda a página.

Não remover conteúdo.

Não simplificar os 12 elementos.

Não renomear WHERE, HOW, LOGIC ou SAFE.

Não substituir a USMT por uma menção genérica a system modeling.

A USMT deve regressar à homepage como um componente estrutural do Payload Journey LAB, conectando a observação concreta do fluxo ao processo formal de investigação.
