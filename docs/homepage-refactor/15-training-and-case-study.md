# Formação fundamental e caso real HORA.city

Data: 19 de julho de 2026  
Versão de referência: `0.2.0`

## 1. Objetivo

A Sprint 5 estabelece a sequência `Demo → Formação → Caso real`. Depois de ver uma representação pedagógica do payload, o visitante encontra uma entrada concreta para aprender a estratégia e, logo em seguida, uma aplicação documentada numa codebase real.

```text
Ver como o payload atravessa o sistema
↓
Aprender a reconstruir esse caminho
↓
Observar a estratégia numa investigação aplicada
```

## 2. Formação

### Público

- estudantes de Engenharia de Software;
- developers junior;
- developers entrando em codebases desconhecidas;
- pessoas trabalhando com sistemas expandidos por IA;
- profissionais sem estratégia estruturada de tracing.

### Promessa e conteúdo

A Formação é apresentada como entrada fundamental. A promessa é aprender a escolher um flow, encontrar o payload, acompanhar transformações e localizar decisões. Os conteúdos confirmados são fundamentos de payload, estados e eventos, camadas, representações, Payload Journey, estratégia de entrada, visão estrutural e tracing de flows.

### Produto e formato

`Payload Journey LAB: Siga o flow, entenda o sistema` é a nova copy de apresentação aprovada pela Sprint 5. O label anterior `Formação Beta na Udemy` permanece preservado separadamente em `trainingContent.name` e `trainingPresentation.product.historicalLabel`.

Somente Udemy e estado beta são apresentados como formato confirmado. Duração, quantidade de aulas/seções, materiais e condições de acesso foram omitidos por não existirem nas fontes canônicas.

### CTAs e campanha

| CTA | Destino |
| --- | --- |
| Entrar na formação | URL Udemy existente com o mesmo cupom |
| Rever a trilha | `#trilha` |

O cupom `FOLLOW-THE-FLOW` permanece derivado de `campaignConfig`. `expiration` continua `null`; nenhuma validade ou urgência promocional foi inventada. Não há certificação formal.

## 3. HORA.city

### Narrativa pública

`horaCityCase.publicNarrative` usa `sourceStrategy: "shared-confirmed-facts"`. A camada é aditiva e não substitui as variantes editoriais anteriores.

A narrativa possui sete partes:

1. Contexto — sistema real, expansão aproximada de 6 mil para 40 mil linhas e necessidade de visão estrutural.
2. Anomalia — Heart apresentado como recém-criado com informações temporais inesperadas.
3. Flow selecionado — comportamento observável associado ao payload, sem nome técnico inventado.
4. Payload — `HeartCreated` como ponto concreto de observação.
5. Investigação — Reverse Payload Journey, Track to Origin, checkpoints e autoridade temporal.
6. Evidências — escala, anomalia, payload e estado investigativo confirmados.
7. Estado atual — investigação aplicada em andamento, sem declarar solução ou origem comprovada.

### Fatos utilizados

- projeto HORA.city;
- caso `RPJ-HORA-001`;
- crescimento aproximado de 6 mil para 40 mil linhas;
- anomalia temporal associada a `createdAt`;
- payload `HeartCreated`;
- Reverse Payload Journey;
- Track to Origin;
- autoridade temporal sob investigação;
- estado `Investigação em andamento`.

### Fatos omitidos por ausência de confirmação

- nome técnico do flow selecionado;
- `Send Heart`;
- bifurcação `create/join`;
- interação ou botão específico;
- schema interno do payload;
- origem comprovada da anomalia;
- bug resolvido ou restauração concluída.

Esses elementos não aparecem como campos vazios nem como mensagens de indisponibilidade; simplesmente não são renderizados.

### Fatos omitidos por divergência editorial

- título e subtítulo definitivos do caso;
- redação integral de contexto;
- redação integral da investigação.

Esses textos divergem entre `editorialVariants.rendered` e `editorialVariants.audited`. As duas variantes permanecem completas na fonte server-side, mas nenhuma é declarada canônica ou enviada integralmente ao HTML. `editorialResolution` continua `unresolved`.

### CTAs

| CTA | Destino |
| --- | --- |
| Acompanhar o caso no LabLog | `#lablog` |
| Rever o flow | `#demo` |

`#lablog` foi confirmado na fonte canônica e na seção renderizada antes da configuração do CTA. O self-link histórico e os CTAs futuros continuam preservados na fonte, mas não compõem a nova narrativa pública.

## 4. Conexão pedagógica

A progressão é `ver → aprender → aplicar`:

- Demo: mostra uma representação do caminho;
- Formação: ensina uma estratégia para reconstruí-lo;
- HORA.city: demonstra como a estratégia orienta uma investigação real.

O LAB, Métodos e Ecossistema aparecem depois do caso para aprofundar a estrutura institucional e metodológica.

## 5. Acessibilidade

- Formação e HORA.city usam `h2`.
- Blocos internos usam `h3`.
- Público, conteúdos e sete partes usam listas semânticas.
- CTAs externos e internos são links.
- O CTA Udemy conserva `target="_blank"` e `rel="noopener noreferrer"`.
- A ordem visual acompanha a ordem do DOM.
- Conteúdo não depende de hover ou cor.
- Foco, reduced motion, Escape e retorno de foco permanecem protegidos.
- As duas seções continuam Server Components.

## 6. Responsividade

- Mobile: conteúdo em uma coluna, CTAs empilhados, sete partes lineares e painel técnico em lista.
- Tablet: blocos de apoio e caso em duas colunas, mantendo ordem semântica.
- Desktop: Formação equilibra promessa e CTAs; caso usa duas colunas e painel técnico compacto.
- Não existem tabelas largas, min-width local ou scroll horizontal obrigatório.

## 7. Preparação para a Sprint 6

A Sprint 6 poderá apresentar Congelar, Mapear, Detectar e Restaurar depois do caso, conectando o problema observado ao procedimento. Os cinco métodos, Track Mode, Trace Engineer e Software System Investigation permanecem nas fontes atuais e devem ser refatorados sem reabrir Hero, Trilha, Demo, Formação ou narrativa pública HORA.city.
