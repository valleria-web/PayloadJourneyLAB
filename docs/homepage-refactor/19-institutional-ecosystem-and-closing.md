# Ecossistema institucional e encerramento da homepage

Data: 19 de julho de 2026  
Versão de referência: `0.2.0`

## 1. Objetivo

A dimensão institucional aparece depois da aprendizagem, da demonstração, da Formação, do caso HORA.city, do procedimento, dos métodos e da Prática investigativa. Essa posição permite apresentar o Payload Journey LAB como ampliação natural do valor já demonstrado, sem fazer a instituição dominar a entrada da homepage.

```text
aprender → observar → aplicar → investigar → conhecer o LAB → agir
```

## 2. O LAB

### Missão e apresentação

O LAB é apresentado como um laboratório que desenvolve maneiras de ensinar, modelar e investigar software seguindo o fluxo da informação. Sua missão conecta educação, desenvolvimento metodológico, investigação de sistemas, aplicação em casos reais e possibilidades de colaboração.

### Relação com a metodologia

A seção faz uma referência curta à prática anterior: a metodologia conhecida pelo visitante faz parte de um laboratório dedicado a formação, métodos e investigação aplicada. Track Mode, Trace Engineer, Software System Investigation, o procedimento, os cinco métodos, a Trilha e a Demo não são reapresentados integralmente.

### Limites editoriais

- nenhum reconhecimento externo, parceria ou validação científica foi alegado;
- compreender antes de modificar permanece como princípio;
- a copy anterior, o terminal e os quatro cards foram preservados em `historicalPresentation` na fonte server-side;
- a apresentação histórica não é enviada ao HTML público.

## 3. Ecossistema

O Ecossistema assume a apresentação detalhada das quatro áreas institucionais.

### Formação

Experiências educacionais para desenvolver visão estrutural, tracing e estratégias de entrada em codebases grandes. Atividades confirmadas: cursos, trilhas, vídeos e materiais educacionais. O resultado buscado é formar engenheiros mais capazes de compreender sistemas antes de modificá-los.

### Pesquisa metodológica

Criação, documentação, teste e refinamento dos métodos do LAB: USMT, Payload Journey, Reverse Payload Journey, Operational Payload Path, Track to Origin e o procedimento investigativo. A seção não declara validação científica formal.

### Investigação aplicada

Aplicação dos métodos em codebases, flows, anomalias e decisões reais, por meio de seleção de flows, mapping, checkpoints, confronto de evidências, estudo de anomalias e documentação de casos. HORA.city permanece apresentado na seção própria.

### Colaboração

Estudantes, educadores, universidades, laboratórios, equipes e organizações são públicos possíveis. Pilotos de aprendizagem, estudos compartilhados e pesquisa aplicada são possibilidades, não atividades ou parcerias atuais confirmadas.

Não existe CTA de colaboração porque `contact`, `email` e `linkedin` permanecem `null`.

## 4. LabLog

- papel: registrar flows, anomalias, decisões, checkpoints, mappings e o desenvolvimento público dos métodos;
- eyebrow: `Investigação em movimento`;
- título: `Acompanhe o LAB em movimento`;
- temas: Payload Journey, Mapping, Checkpoints, HORA.city, codebases, anomalias, Track Mode, investigação de sistemas e Formação;
- CTA: `Assistir ao LabLog`;
- URL atual: `https://www.youtube.com/@PayloadJourneyLAB`;
- status editorial: `current`.

O Footer continua usando `https://www.youtube.com/@Lab-Log`. `canonical` permanece `null` e `resolutionStatus` permanece `unresolved`. Nenhum destino foi escolhido como oficial.

## 5. Sobre e fundadora

### Origem e visão

O LAB nasce da necessidade de recuperar visão estrutural, rastreabilidade e confiança antes de modificar sistemas cuja produção de código avança mais rapidamente que a capacidade de explicá-los. Sua visão é tornar investigação de sistemas uma capacidade ensinável, praticável e documentável.

### Autoria e fatos utilizados

Valéria dos Santos Reiser é apresentada somente como:

- criadora do Payload Journey LAB;
- criadora da Universal System Modeling Template (USMT);
- criadora dos métodos que estruturam a prática de investigação aplicada do LAB;
- autora de trabalho voltado a observar payloads, estados, eventos e decisões em sistemas complexos.

### Fatos omitidos e limites biográficos

Não foram acrescentados cargo, formação acadêmica, instituição, prêmio, certificação, patente, adoção de mercado, reconhecimento externo ou link profissional. `siteLinks.linkedin` permanece `null`. A copy histórica completa foi preservada na fonte server-side e não é renderizada.

## 6. CTA final

O encerramento retoma a promessa inicial:

- eyebrow: `Comece agora`;
- título: `Comece por um único flow`;
- CTA principal: `Entrar na formação` → URL atual da Udemy;
- CTA secundário: `Ver o payload atravessar o sistema` → `#demo`.

O cupom continua na configuração ativa, com `expiration: null`. Ele aparece apenas como informação secundária, sem urgência ou validade inventada. Não existe terceiro CTA.

## 7. Footer

O Footer contém:

- identidade, assinatura e descrição curta do LAB;
- navegação independente: O LAB, Métodos, Study Case, Formação e LabLog;
- canais confirmados: Udemy e o YouTube atual do Footer;
- informação institucional real;
- copyright anual e `Todos os direitos reservados`.

Não existem rotas de Política de Privacidade ou Termos de uso. Esses nomes históricos permanecem apenas em `historicalPolicies`, e os identificadores ausentes estão em `missingLegalRoutes`; nenhum deles é renderizado. LinkedIn e contato também não são exibidos porque não possuem destino.

## 8. Redução de duplicações

- os quatro pilares saíram da apresentação pública de O LAB e passaram ao Ecossistema;
- O LAB deixou de repetir a metodologia e passou a apresentar missão e princípio;
- o Ecossistema não repete Track Mode, Trace Engineer ou Software System Investigation;
- LabLog apresenta temas sem repetir os métodos completos;
- Sobre concentra origem, visão e autoria sem repetir HORA.city;
- CTA final deixou de repetir a campanha como mensagem principal;
- Footer removeu o link interno redundante de LabLog da coluna de canais e não mostra placeholders legais.

As copies substituídas permanecem nomeadas em `historicalPresentation` ou `historicalPolicies`, disponíveis apenas no servidor.

## 9. Acessibilidade

- exatamente um `h1` na homepage;
- O LAB, Ecossistema, LabLog, Sobre e CTA final usam `h2`;
- missões, pilares, temas e blocos internos usam `h3` ou listas com labels textuais;
- IDs e ordem do DOM são estáveis;
- nenhum link vazio e todos os anchors internos possuem destino;
- links externos abrem com `noopener noreferrer`;
- foco visível, reduced motion, sticky header, Escape e retorno de foco foram preservados;
- conteúdo é compreensível sem hover e não depende somente de cor;
- `MobileNavigation` continua sendo o único Client Component.

Leitor de tela real não foi executado; a validação cobriu semântica, headings, teclado, foco, contraste já protegido pela fundação e conteúdo integral no DOM.

## 10. Responsividade

| Viewport | Altura total | Overflow horizontal | Menu |
| --- | ---: | --- | --- |
| 360×800 | 37.903 px | não | abriu; Escape fechou; foco retornou |
| 390×844 | 36.120 px | não | abriu; Escape fechou; foco retornou |
| 768×1024 | 26.688 px | não | abriu; Escape fechou; foco retornou |
| 1024×768 | 20.828 px | não | desktop |
| 1280×800 | 18.822 px | não | desktop |
| 1440×900 | 18.770 px | não | desktop |

O LAB usa uma coluna no mobile; o Ecossistema apresenta um pilar por linha e duas colunas no desktop; LabLog equilibra narrativa e temas em desktop; Sobre mantém origem, visão e fundadora em sequência; os CTAs empilham quando necessário; e o Footer usa grupos legíveis sem compressão.

## 11. Preparação para a Sprint 8

A Sprint 8 deve concentrar-se em QA integral, leitor de tela, revisão textual, SEO, metadata, performance, links externos, screenshots finais, comparação antes/depois e preparação da release. Permanecem fora desta sprint: resolução de HORA.city, YouTube oficial, validade do cupom, páginas legais, contato, integrações, deploy, tag e publicação.
