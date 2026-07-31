# USMT na homepage

Data: 19 de julho de 2026  
Versão de referência: `0.2.0`

## 1. Objetivo

A Sprint 9 reincorpora a USMT — Universal System Model Template à homepage como ponte entre observação de um flow real e investigação formal. O Payload Journey revela o comportamento observado; a USMT explicita o modelo esperado; evidências tornam os dois comparáveis.

## 2. Posição narrativa

```text
Demo → Formação → HORA.city → USMT → Procedimento → Métodos
```

A seção foi inserida depois de HORA.city e imediatamente antes do Procedimento. Essa posição está dentro do intervalo exigido — depois da Demo e antes do protocolo — e preserva a ordem relativa de todas as seções existentes. O fechamento da USMT prepara diretamente Congelar → Mapear → Detectar → Restaurar.

## 3. Pergunta central

> Como sabemos se o comportamento observado durante a jornada do payload está correto?

A resposta pública explica que a USMT estabelece o modelo do sistema e que a investigação confronta esse modelo com o comportamento real observado no flow. A seção não apresenta a USMT como fórmula universal ou teoria infalível.

## 4. Doze elementos

| Nº | Elemento | Microdescrição |
| ---: | --- | --- |
| 01 | Descrição | O que é o sistema. |
| 02 | Delimitação | Onde o sistema começa e termina. |
| 03 | Estados / states | Em quais condições pode existir. |
| 04 | Eventos / events | O que provoca mudança. |
| 05 | Transições permitidas | O que pode acontecer. |
| 06 | Transições proibidas | O que não pode acontecer. |
| 07 | Invalidação | O que torna um estado inválido. |
| 08 | Terminação | Como o ciclo termina. |
| 09 | Invariantes / invariants | O que deve permanecer verdadeiro. |
| 10 | Camadas / layers | Onde cada responsabilidade vive. |
| 11 | Métricas | Como o comportamento é medido. |
| 12 | Spec | A síntese operacional do modelo. |

Os elementos usam uma grade numerada compacta. As microdescrições substituem os doze cards extensos e os emojis do componente reservado anterior. O conteúdo histórico completo permanece server-side em `siteContent.usmt`.

## 5. Quatro lentes

| Ordem | Lente | Ação | Pergunta |
| ---: | --- | --- | --- |
| 01 | WHERE | Localiza | Onde a responsabilidade vive? |
| 02 | HOW | Acompanha | Como o comportamento acontece? |
| 03 | LOGIC | Interpreta | Qual regra decide o resultado? |
| 04 | SAFE | Valida | O que mantém o sistema válido e seguro? |

WHERE apresenta camada, componente, fronteira e autoridade. HOW apresenta flow, transformação, transporte e sequência. LOGIC apresenta regra, condição, decisão e transição. SAFE apresenta invariantes, limites, invalidação e terminação.

As lentes são listas semânticas com explicações textuais. Cor e posição são apenas apoio visual.

## 6. Relação com Payload Journey

```text
Modelo esperado → Flow observado → Evidência → Investigação
```

- A USMT explicita estados, regras, limites e invariantes.
- O Payload Journey acompanha o comportamento real.
- Checkpoints produzem evidências comparáveis.
- A investigação localiza e explica divergências.

Uma divergência pode indicar anomalia, regra desconhecida ou modelo incompleto.

## 7. Conexão com o protocolo

O fechamento usa a mensagem `Com o sistema modelado e o fluxo visível, a investigação pode começar.` e apresenta Congelar, Mapear, Detectar e Restaurar. A seção seguinte permanece responsável por explicar o protocolo completo.

## 8. CTA e aprofundamento

Não existe paper, documento público ou rota `/usmt`. `deepDiveCta` permanece `null`; nenhum botão, `href="#"`, self-link ou redirecionamento para LabLog foi criado. O CTA histórico `Página USMT em preparação` continua preservado apenas na fonte antiga.

## 9. Design e implementação

- `Section`, `SectionHeader` e `Card` reutilizados;
- base branca, verde legível e painel final escuro do sistema atual;
- nenhuma cor literal ou token novo;
- nenhuma imagem, canvas, biblioteca de diagrama ou dependência;
- nenhuma animação contínua;
- conteúdo integral em HTML indexável;
- `UsmtSection` permanece Server Component;
- `UsmtDiagram` placeholder permanece reservado e não renderizado.

## 10. SEO

USMT, Universal System Model Template, software system investigation, system modeling, payload tracing, states, events, invariants e layers aparecem como texto real. Os termos em inglês são associados ao contexto e aos labels equivalentes, sem conteúdo oculto.

## 11. Acessibilidade

- um H2 para a seção;
- H3 para blocos e H4 para itens;
- listas ordenadas para elementos, lentes, relação e protocolo;
- ordem DOM igual à ordem visual;
- WHERE, HOW, LOGIC e SAFE possuem perguntas, ações e descrições;
- zero informação dependente apenas de cor;
- conteúdo disponível sem hover ou JavaScript;
- foco, teclado, reduced motion e sticky header preservados;
- zero link falso ou vazio;
- `MobileNavigation` continua sendo o único Client Component.

## 12. Responsividade

| Viewport | Altura da página | Altura da USMT | Overflow |
| --- | ---: | ---: | --- |
| 360×800 | 44.344 px | 6.441 px | não |
| 390×844 | 42.309 px | 6.189 px | não |
| 768×1024 | 30.762 px | 4.075 px | não |
| 1024×768 | 23.775 px | 2.947 px | não |
| 1280×800 | 21.363 px | 2.541 px | não |
| 1440×900 | 21.283 px | 2.513 px | não |

Mobile usa progressão vertical; tablet apresenta duas colunas; desktop apresenta quatro colunas nos elementos, lentes e conexão. Nenhum texto ficou cortado ou comprimido.

## 13. Capturas

- [Desktop](sprint9-usmt-desktop.png)
- [Tablet](sprint9-usmt-tablet.png)
- [Mobile](sprint9-usmt-mobile.png)

O baseline oficial não foi sobrescrito.
