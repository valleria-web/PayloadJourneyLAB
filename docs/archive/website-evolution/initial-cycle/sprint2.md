# Sprint 2 — Conteúdo final e narrativa institucional

Implemente o segundo sprint da homepage institucional do Payload Journey LAB.

O Sprint 1 já reorganizou a arquitetura da homepage. Neste sprint, o foco é consolidar o conteúdo editorial e a narrativa institucional.

Não faça ainda o refinamento visual definitivo.

Não adicione animações, novos diagramas complexos, bibliotecas visuais ou alterações profundas de layout.

O objetivo é garantir que a página:

* comunique com clareza o que é o Payload Journey LAB;
* apresente seus métodos sem redundância;
* diferencie laboratório, métodos, prática, formação e Case Study;
* seja compreensível por visitantes, mecanismos de busca e agentes de IA;
* utilize linguagem institucional, precisa e verificável;
* não apresente conteúdos futuros como concluídos.

---

# Preparação

Antes de modificar arquivos:

1. Confirme a branch atual.
2. Confirme que as alterações do Sprint 1 estão presentes.
3. Leia:

   * `app/page.tsx`
   * `content/payload-journey-lab.ts`
   * `types/content.ts`, caso exista
   * todos os componentes em `components/sections`
   * componentes genéricos usados por essas seções
4. Identifique:

   * quais textos já estão centralizados;
   * quais textos ainda estão diretamente nos componentes;
   * quais campos do conteúdo precisam ser atualizados;
   * quais tipos TypeScript precisam ser ajustados;
   * quais CTAs estão ativos ou marcados como futuros.
5. Preserve a arquitetura aprovada no Sprint 1.

Não altere a ordem das seções, salvo se existir uma inconsistência técnica clara.

---

# Estrutura atual esperada

A homepage deve continuar nesta ordem:

1. Header
2. Hero
3. O LAB
4. Métodos
5. Ecossistema conceitual
6. Case Study HORA.city
7. Formação e colaboração
8. White Papers
9. Sobre o LAB
10. Contato
11. Footer

---

# Objetivo editorial

A narrativa da homepage deve seguir este percurso:

```text
O que é o LAB?
→ Por que ele existe?
→ Como trabalha?
→ Como seus conceitos se relacionam?
→ Onde os métodos estão sendo aplicados?
→ Como alguém pode aprender ou colaborar?
→ O que está sendo documentado?
→ Qual problema de longo prazo o LAB procura resolver?
→ Qual é o próximo passo?
```

Cada seção deve responder a uma única pergunta principal.

Evite que duas seções expliquem a mesma coisa com palavras diferentes.

---

# Princípios de conteúdo

## Clareza

Utilize frases diretas.

Evite excesso de abstrações na mesma frase.

Evite termos promocionais genéricos como:

* revolucionário;
* disruptivo;
* inovador sem evidência;
* líder de mercado;
* solução definitiva;
* método comprovado, quando ainda não houver publicação ou validação formal.

## Precisão

Diferencie claramente:

* laboratório;
* método;
* instrumento;
* prática;
* papel profissional;
* estado operacional;
* Case Study;
* formação;
* publicação.

## Consistência terminológica

Utilize sempre os mesmos nomes:

* Payload Journey LAB
* Payload Journey
* Reverse Payload Journey
* Operational Payload Path
* Track to Origin
* Track Mode
* USMT
* Universal System Modeling Template
* Trace Engineer
* Software System Investigation
* HORA.city
* HeartCreated
* createdAt

Não alternar entre nomes semelhantes sem necessidade.

## Estado dos conteúdos

Utilize estados explícitos:

* Em preparação
* Investigação em andamento
* Página em desenvolvimento
* Conteúdo futuro
* Data a definir

Não apresentar como disponível algo que ainda não possui página ou publicação real.

---

# Requisito de conteúdo AI-friendly

A homepage deve ser compreensível sem depender do layout visual.

Implemente o conteúdo de modo que mecanismos de busca e agentes de IA consigam identificar:

* o nome do laboratório;
* seu propósito;
* os métodos desenvolvidos;
* a relação entre esses métodos;
* o Case Study utilizado;
* o estado atual da investigação;
* os caminhos de formação e colaboração.

Regras:

1. O conteúdo essencial deve existir como texto HTML.
2. Nenhuma definição principal deve existir apenas em imagem, SVG ou ícone.
3. Diagramas devem possuir texto de apoio ou descrição próxima.
4. Utilizar apenas um `h1` na página.
5. Utilizar `h2` para títulos das seções.
6. Utilizar `h3` para métodos, pilares, conceitos, publicações e caminhos de participação.
7. Não utilizar headings apenas para alterar tamanho visual.
8. Cada método deve possuir uma definição explícita e autocontida.
9. A primeira ocorrência de uma sigla deve apresentar seu nome completo.
10. Evitar textos vagos como “saiba mais sobre isso” sem identificar o assunto.
11. Manter o idioma principal da página em português do Brasil.
12. Não implementar JSON-LD, sitemap ou robots neste sprint; isso pertence ao Sprint 3.

---

# Conteúdo da homepage

## 1. Hero

### Pergunta respondida

O que é o Payload Journey LAB?

### Eyebrow ou categoria opcional

```text
Software System Investigation
```

### Título principal

```text
PAYLOAD
JOURNEY LAB
```

### Frase de identidade

```text
Siga o flow. Entenda o sistema.
```

### Descrição

Utilize:

```text
Laboratório de formação, pesquisa e investigação aplicada dedicado a compreender como payloads, estados, eventos e decisões atravessam sistemas complexos.
```

### CTAs

CTA primário:

```text
Explorar o LAB
```

Destino:

```text
#lab
```

CTA secundário:

```text
Conhecer o Case Study
```

Destino:

```text
#case-study
```

Não incluir no Hero uma lista extensa de métodos.

---

## 2. O LAB

### Pergunta respondida

O que o laboratório faz?

### Título

```text
O LAB
```

### Texto introdutório

Utilize:

```text
O Payload Journey LAB desenvolve métodos, artefatos pedagógicos e investigações aplicadas para observar, modelar, rastrear e compreender sistemas de software.
```

### Complemento opcional

```text
O trabalho do LAB combina formação, pesquisa metodológica e aplicação em codebases reais, especialmente em sistemas cuja expansão tornou a compreensão estrutural mais difícil.
```

### Quatro pilares

#### Formação

```text
Desenvolvimento de visão estrutural, capacidade de tracing e compreensão de sistemas através de experiências educacionais.
```

#### Pesquisa

```text
Criação, documentação e refinamento de métodos para observar, modelar e investigar sistemas de software.
```

#### Investigação aplicada

```text
Aplicação dos métodos do LAB em anomalias, fluxos e codebases reais.
```

#### Colaboração

```text
Construção de pilotos, estudos e parcerias com estudantes, pesquisadores, instituições e organizações.
```

Não explicar nesta seção o problema de longo prazo causado pela velocidade dos agentes de IA. Isso pertence à seção Sobre.

---

## 3. Métodos

### Pergunta respondida

Como o Payload Journey LAB trabalha?

### Título

```text
Métodos para compreender sistemas
```

### Introdução

```text
O LAB organiza observação, modelagem e investigação em métodos complementares. Cada método responde a uma necessidade específica, desde seguir uma informação através das camadas até reconstruir a origem de uma anomalia.
```

Apresentar os cinco elementos abaixo.

### Payload Journey

```text
Método de observação progressiva que acompanha como uma informação nasce, atravessa camadas, assume diferentes representações e produz efeitos no sistema.
```

Categoria sugerida:

```text
Observação
```

### USMT

Nome completo na primeira ocorrência:

```text
Universal System Modeling Template
```

Definição:

```text
Template de modelagem estrutural que organiza fenômenos, estados, eventos, transições permitidas e proibidas, invariantes, camadas, métricas e condições de término.
```

Complemento curto:

```text
A USMT é composta por 12 elementos metodológicos.
```

Categoria sugerida:

```text
Modelagem
```

CTA futuro:

```text
Conhecer a USMT
```

Estado:

```text
Página em desenvolvimento
```

Não renderizar os 12 passos completos na homepage.

### Reverse Payload Journey

```text
Método de investigação que parte de uma anomalia observável e reconstrói, em sentido reverso, o caminho percorrido pelo payload.
```

Categoria sugerida:

```text
Investigação
```

### Operational Payload Path

```text
Instrumento operacional de Mapping que organiza zonas, fronteiras, componentes, representações, responsabilidades, autoridades e checkpoints ao longo de uma operação.
```

Complemento opcional:

```text
Ele transforma a arquitetura abstrata em uma rota investigável.
```

Categoria sugerida:

```text
Mapping
```

### Track to Origin

```text
Processo investigativo que conduz o rastreamento até a origem técnica, semântica ou temporal e até o primeiro ponto de decisão relevante.
```

Categoria sugerida:

```text
Origem e autoridade
```

### Relação entre os métodos

Adicionar após os cards uma frase curta:

```text
Payload Journey observa o percurso. A USMT modela a estrutura. Reverse Payload Journey reconstrói a anomalia. Operational Payload Path organiza o Mapping. Track to Origin conduz a investigação até a origem.
```

Evitar explicações longas adicionais.

---

## 4. Ecossistema conceitual

### Pergunta respondida

Como os conceitos do LAB se relacionam?

### Título

```text
Um ecossistema para compreender sistemas
```

### Introdução

```text
Os métodos do LAB não funcionam de forma isolada. Eles fazem parte de uma prática de investigação estrutural orientada por evidências.
```

### Fluxo principal

Representar em texto visível:

```text
Track Mode
→ Reverse Payload Journey
→ Track to Origin
→ Evidência
→ Restauração
```

Adicionar uma breve explicação:

```text
O Track Mode suspende mudanças e prioriza observação. O Reverse Payload Journey reconstrói o caminho. Track to Origin conduz a investigação até a origem. A evidência permite restaurar autoridade e compreensão.
```

### Conceitos principais

#### Trace Engineer

```text
Profissional ou função investigativa dedicada a seguir payloads, estados, eventos e decisões através das camadas de um sistema.
```

#### Track Mode

```text
Estado operacional no qual mudanças são suspensas e a prioridade passa a ser observar, delimitar, registrar e compreender.
```

#### Software System Investigation

```text
Prática de investigação estrutural de sistemas baseada em tracing, modelagem, evidências e reconstrução de decisões.
```

Não repetir nesta seção as definições completas de todos os métodos.

Não renderizar One Bit Machine como conceito institucional principal.

Preservar One Bit Machine em `futureArtifacts`, formação ou conteúdo futuro.

---

## 5. Case Study HORA.city

### Pergunta respondida

Onde os métodos estão sendo aplicados?

### Eyebrow

```text
Saving HORA.city
```

### Título

```text
Case Study
```

### Texto principal

```text
O HORA.city é um sistema geolocalizado utilizado pelo Payload Journey LAB como caso real de investigação aplicada. Após uma expansão acelerada com agentes de IA, o sistema passou de aproximadamente 6 mil para 40 mil linhas de código e perdeu parte de sua observabilidade estrutural.
```

### Segundo parágrafo

```text
A investigação atual acompanha uma anomalia temporal em createdAt, associada ao payload HeartCreated. O objetivo é reconstruir o caminho operacional, identificar a autoridade temporal e rastrear o primeiro ponto relevante de decisão.
```

### Dados do caso

#### Sistema inicial

```text
Aproximadamente 6 mil linhas
```

#### Expansão

```text
Aproximadamente 40 mil linhas
```

#### Anomalia observada

```text
createdAt incorreto
```

#### Payload associado

```text
HeartCreated
```

#### Método aplicado

```text
Reverse Payload Journey
```

#### Missão

```text
Track to Origin
```

### Ficha investigativa

```text
Case ID: RPJ-HORA-001
Anomalia: createdAt incorreto
Payload associado: HeartCreated
Estado: Investigação em andamento
```

### Etapas

```text
Contexto
Anomalia
Investigação
Aprendizados
```

Não apresentar Aprendizados como concluídos. Pode aparecer como etapa futura ou em desenvolvimento.

### CTAs

```text
Explorar o Case Study
Assistir ao LabLog
```

Se ainda não houver URLs reais:

* manter como indisponíveis;
* marcar como “Em preparação”;
* utilizar `aria-disabled`;
* não utilizar `href="#"`.

---

## 6. Formação e colaboração

### Pergunta respondida

Como alguém pode aprender, aplicar ou colaborar?

### Título

```text
Do método à prática
```

### Introdução

```text
O Payload Journey LAB transforma seus métodos em experiências de formação, investigações aplicadas e oportunidades de colaboração.
```

### Aprender

```text
Cursos, vídeos, LabLogs e experiências pedagógicas para desenvolver visão estrutural e capacidade de tracing.
```

Links ou referências futuras:

* Curso
* LabLogs
* Workshops

### Investigar

```text
Aplicação de Payload Journey, Reverse Payload Journey, Operational Payload Path e Track to Origin em sistemas reais.
```

Referência futura:

* Programa Trace Engineer

### Colaborar

```text
Pilotos acadêmicos, estudos, pesquisa aplicada e parcerias com estudantes, universidades, laboratórios e organizações.
```

Referência futura:

* Pilotos acadêmicos

Não inventar datas, instituições ou programas já disponíveis.

---

## 7. White Papers

### Pergunta respondida

O que o LAB está documentando?

### Título

```text
White Papers
```

### Introdução

```text
Publicações destinadas a documentar os conceitos, métodos, experimentos e descobertas desenvolvidos no Payload Journey LAB.
```

### White Paper 01

Título:

```text
Payload Journey: seguindo a informação através das camadas
```

Resumo:

```text
Estrutura inicial para documentar o método de observação progressiva do payload e suas transformações através do sistema.
```

Status:

```text
Em preparação
```

Tipo:

```text
Placeholder editorial
```

Data:

```text
Data a definir
```

### White Paper 02

Título:

```text
Reverse Payload Journey e investigação estrutural de sistemas
```

Resumo:

```text
Base metodológica para reconstruir o caminho de uma anomalia observável através de payloads, representações e checkpoints.
```

Status:

```text
Em preparação
```

Tipo:

```text
Placeholder editorial
```

Data:

```text
Data a definir
```

### White Paper 03

Título:

```text
Trace Engineer na era dos agentes de IA
```

Resumo:

```text
Discussão inicial sobre tracing, autoria, observabilidade e preservação da compreensão estrutural em sistemas expandidos por agentes de IA.
```

Status:

```text
Em preparação
```

Tipo:

```text
Placeholder editorial
```

Data:

```text
Data a definir
```

### CTA

```text
Ver todos os White Papers
```

Estado:

```text
Página em desenvolvimento
```

Não utilizar “Ler publicação” enquanto não existir publicação real.

---

## 8. Sobre o LAB

### Pergunta respondida

Qual problema de longo prazo o LAB procura resolver?

### Título

```text
Sobre o Payload Journey LAB
```

### Texto principal

```text
Agentes de IA podem expandir sistemas mais rapidamente do que pessoas conseguem compreendê-los. Quando a velocidade de produção supera a velocidade de compreensão, torna-se mais difícil preservar rastreabilidade, autoridade, observabilidade e capacidade de decisão.
```

### Segundo parágrafo

```text
O Payload Journey LAB nasce para investigar essa diferença de velocidade e desenvolver métodos que ajudem estudantes, engenheiros e organizações a compreender sistemas complexos antes de modificá-los.
```

### Visão

```text
A visão do LAB é consolidar uma prática de Software System Investigation que conecte formação, pesquisa metodológica e investigação aplicada.
```

### Áreas futuras

Manter como estrutura futura:

* Fundadora
* Pesquisadores
* Colaboradores
* Instituições parceiras

Não inventar nomes, parceiros, cargos ou credenciais.

Caso a área vazia prejudique a homepage, não renderizá-la ainda. Preservar apenas na estrutura de conteúdo.

---

## 9. Contato

### Pergunta respondida

Qual é o próximo passo?

### Título

```text
Vamos seguir o flow
```

### Texto

```text
Para colaborações, pilotos acadêmicos, pesquisa aplicada ou desenvolvimento do programa Trace Engineer, entre em contato com o Payload Journey LAB.
```

### CTA

```text
Entrar em contato
```

Se o e-mail ainda for placeholder:

* não apresentar o placeholder como endereço institucional real;
* utilizar estado “Contato em configuração”;
* ou manter o botão desativado de forma acessível.

### Canais

* LinkedIn
* YouTube
* GitHub

Somente transformar em links quando URLs reais existirem no conteúdo.

---

## 10. Footer

Manter:

```text
Payload Journey LAB
Siga o flow. Entenda o sistema.
```

Links internos:

* O LAB
* Métodos
* Case Study
* Formação
* White Papers
* Sobre
* Contato

Redes:

* LinkedIn
* YouTube
* GitHub

Legal:

* Política de privacidade
* Termos de uso

Se os links legais ainda não existirem, não utilizar links quebrados.

Manter o ano dinâmico.

---

# Centralização do conteúdo

Todo o conteúdo editorial deve permanecer centralizado em:

```text
content/payload-journey-lab.ts
```

ou na estrutura equivalente já existente.

Não espalhar textos longos diretamente pelos componentes.

É permitido manter textos puramente funcionais nos componentes, como:

* aria-label;
* texto de menu;
* mensagem técnica;
* fallback visual.

Caso seja necessário modificar tipos, atualizar:

```text
types/content.ts
```

Preservar tipagem explícita.

Evitar `any`.

---

# Regras para os componentes

Os componentes devem receber os conteúdos por props ou utilizar a estrutura centralizada já existente.

Não transformar o Sprint 2 em uma refatoração completa.

Modificar apenas o necessário para:

* suportar os novos campos;
* eliminar conteúdo duplicado;
* representar estados futuros;
* manter semântica HTML correta;
* evitar links falsos.

Não redesenhar cards, espaçamentos ou cores neste sprint.

---

# CTAs e links

Classificar cada CTA como:

```text
active
future
disabled
external
anchor
```

Caso o projeto ainda não possua esse modelo, implemente a solução mínima e tipada necessária.

Regras:

* não usar `href="#"`;
* não usar URL inventada;
* links externos devem possuir URL real;
* elementos desativados não devem parecer links funcionais;
* utilizar `aria-disabled` quando apropriado;
* botões que não navegam não devem ser renderizados como links falsos;
* âncoras internas devem funcionar.

---

# Conteúdo que deve permanecer preservado, mas não renderizado integralmente

Preservar no projeto:

* os 12 elementos detalhados da USMT;
* conteúdo completo da antiga seção USMT;
* One Bit Machine;
* conteúdos futuros de pesquisadores e parceiros;
* detalhes ainda não publicados dos métodos;
* placeholders de futuras páginas;
* material de formação futura.

Não apagar esses conteúdos.

Organizá-los como:

* conteúdo futuro;
* conteúdo de rota específica;
* artefato pedagógico;
* metadata editorial;
* seção não renderizada.

---

# Não fazer neste sprint

Não implementar:

* sitemap;
* robots.txt;
* JSON-LD;
* Open Graph completo;
* analytics;
* CMS;
* banco de dados;
* formulário funcional;
* autenticação;
* novas páginas de métodos;
* página da USMT;
* páginas de White Papers;
* página completa do Case Study;
* redesign visual;
* novas animações;
* dependências adicionais;
* deploy;
* commit;
* push.

Esses itens pertencem aos próximos sprints ou a etapas futuras.

---

# Critérios de aceitação

Considere o Sprint 2 concluído somente se:

1. cada seção responder a uma pergunta única;
2. não houver repetição significativa entre O LAB, Métodos, Ecossistema e Sobre;
3. os métodos possuírem definições explícitas;
4. Operational Payload Path estiver representado corretamente como instrumento operacional de Mapping;
5. USMT estiver resumida na homepage;
6. Trace Engineer, Track Mode e Software System Investigation estiverem semanticamente distintos;
7. HORA.city estiver apresentado como Case Study em andamento;
8. nenhuma investigação for apresentada como concluída;
9. White Papers estiverem marcados como em preparação;
10. nenhuma URL fictícia for introduzida;
11. não existirem `href="#"`;
12. os headings estiverem semanticamente corretos;
13. existir apenas um `h1`;
14. o conteúdo essencial estiver disponível em texto HTML;
15. todos os textos principais estiverem centralizados;
16. TypeScript compilar;
17. lint passar;
18. build passar, quando viável;
19. a responsividade existente não for quebrada;
20. nenhuma alteração visual profunda tiver sido introduzida.

---

# Validação

Ao finalizar:

1. execute o lint;
2. execute o typecheck;
3. execute o build;
4. corrija erros relacionados ao Sprint 2;
5. não altere problemas antigos fora do escopo;
6. verifique manualmente:

   * navegação por âncoras;
   * headings;
   * CTAs;
   * estados desativados;
   * ausência de links falsos;
   * ausência de textos duplicados;
   * conteúdo mobile.

---

# Relatório final

Informe:

1. branch utilizada;
2. arquivos modificados;
3. textos principais alterados;
4. definições finais dos métodos;
5. repetições removidas;
6. conteúdos preservados, mas não renderizados;
7. CTAs ativos;
8. CTAs futuros ou desativados;
9. resultado de lint;
10. resultado de typecheck;
11. resultado de build;
12. limitações encontradas;
13. sugestões que devem aguardar o Sprint 3 ou Sprint 4.

Não faça deploy.

Não crie commit.

Não faça push.
