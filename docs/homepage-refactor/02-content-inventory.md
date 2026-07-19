# Inventário semântico e editorial

Este documento registra o conteúdo atual sem propor nova redação. “Repetições” considera aparições editoriais ou conceituais, não apenas igualdade literal.

## Conceitos e conteúdos

| Conteúdo/conceito | Texto ou resumo atual | Localização | Arquivo | Repetições | Observações |
| --- | --- | --- | --- | --- | --- |
| Payload Journey LAB | Laboratório de formação, pesquisa e investigação aplicada para compreender payloads, estados, eventos e decisões em sistemas complexos | Header, Hero, O LAB, Sobre, CTA e Footer | `content/payload-journey-lab.ts`, `config/site.ts`, componentes | Alta | Nome, tagline e descrição também alimentam SEO |
| Payload Journey | Método de observação progressiva do nascimento, travessia, representação e efeitos de uma informação | Métodos, CTA Beta, White Papers futuros | `content/payload-journey-lab.ts` | 3+ | Conteúdo obrigatório; rota futura declarada |
| Payload Tracing | Não aparece como expressão literal; aparece como capacidade de tracing/seguir payloads | O LAB, Formação, Sobre | `content/payload-journey-lab.ts` | Várias | Preservar a ideia mesmo sem rótulo único |
| Software System Investigation | Prática estrutural baseada em tracing, modelagem, evidências e reconstrução de decisões | Hero, Ecossistema, Sobre/visão | `content/payload-journey-lab.ts`, `HeroSection.tsx` | 3 | Conceito central e eyebrow do Hero |
| USMT | Universal System Modeling Template; organiza 12 elementos metodológicos | Métodos; conteúdo completo não renderizado | `content/payload-journey-lab.ts`, `UsmtSection.tsx` | Alta | Na homepage atual aparece só como card/resumo; rota futura declarada |
| Reverse Payload Journey | Parte de uma anomalia observável e reconstrói o caminho do payload em sentido reverso | Métodos, Ecossistema, Study Case, Formação, CTA Beta | Conteúdo e `CaseStudySection.tsx` | Alta | Método aplicado ao caso HORA.city |
| Operational Payload Path | Instrumento de Mapping de zonas, fronteiras, componentes, representações, responsabilidades, autoridades e checkpoints | Métodos e Formação | `content/payload-journey-lab.ts` | 2 | Rota futura declarada |
| Track to Origin | Processo até a origem técnica, semântica ou temporal e primeiro ponto de decisão | Métodos, Ecossistema, Study Case, CTA Beta | Conteúdo e `CaseStudySection.tsx` | Alta | Também aparece como “Missão” |
| Track Mode | Estado operacional que suspende mudanças e prioriza observação e compreensão | Hero, Ecossistema, CTA Beta | Conteúdo e `HeroSection.tsx` | Alta | Hero usa “TRACK MODE ACTIVE” e “TRACK MODE” |
| Trace Engineer | Profissional/função investigativa que segue payloads, estados, eventos e decisões | Ecossistema, Formação, Contato futuro, White Paper futuro | `content/payload-journey-lab.ts` | 4+ | Formação promete desenvolver essa visão |
| Congelar | Primeiro verbo operacional do fluxo | Hero | `HeroSection.tsx` | 2 | “FREEZE / PAYLOAD” e frase “Congelar…” |
| Mapear | Segundo verbo operacional | Hero; conceito de Mapping em método | `HeroSection.tsx`, conteúdo | 2+ | “MAP / PATH” |
| Detectar | Terceiro verbo operacional | Hero | `HeroSection.tsx` | 2 | “DETECT / MUTATION” |
| Restaurar | Quarto verbo operacional; restauração de autoridade/compreensão | Hero e Ecossistema | Componente e conteúdo | 3 | “RESTORE / AUTHORITY” |
| Formação | Pilar, oferta beta e experiências pedagógicas | O LAB, Formação, Sobre, CTA | `content/payload-journey-lab.ts` | Alta | Um dos três eixos institucionais |
| Pesquisa metodológica | Criação/documentação/refinamento de métodos | O LAB e Sobre | `content/payload-journey-lab.ts` | 2+ | Eixo institucional |
| Investigação aplicada | Aplicação dos métodos em sistemas reais | Hero, O LAB, Formação, Sobre, Footer | Conteúdo e footer | Alta | Eixo institucional e contexto do Study Case |
| Colaboração | Pilotos, estudos e parcerias com estudantes, universidades, laboratórios e organizações | O LAB, Formação, contato futuro | `content/payload-journey-lab.ts` | 3 | Canal ainda não operacional |
| HORA.city | Sistema geolocalizado usado como caso real de investigação | Study Case | Conteúdo e `CaseStudySection.tsx` | Alta dentro da seção | Título visível é “HORA.city”; “Saving HORA.city” está apenas nos dados |
| Study Case | Caso de expansão de ~6k para ~40k linhas e anomalia temporal em `createdAt` | Study Case, nav, footer | Conteúdo e componente | Alta | CTA completo ainda “em breve” |
| LabLog | Acompanhamento da investigação em movimento no YouTube | Hero, Study Case, Formação, seção própria, nav/footer | Conteúdo e componentes | Alta | Dois handles distintos de YouTube estão no código |
| Apresentação institucional | Laboratório dedicado a compreender fluxos em sistemas complexos | Hero e O LAB | `content/payload-journey-lab.ts` | 2 | Deve sobreviver à reorganização |
| Visão do LAB | Consolidar Software System Investigation conectando formação, pesquisa e investigação aplicada | Sobre | `content/payload-journey-lab.ts` | 1 | Conteúdo estratégico explícito |
| Fundadora | Valéria dos Santos Reiser, criadora do LAB e dos métodos | Sobre | `content/payload-journey-lab.ts` | 1 seção, 2 parágrafos | Segundo parágrafo termina sem ponto no conteúdo atual |
| One Bit Machine | Área futura de formação, experimentos e artefatos pedagógicos | Não renderizado | `content/payload-journey-lab.ts` | 1 | Preservar como conteúdo futuro |
| White Papers | Três placeholders sobre Payload Journey, Reverse Payload Journey e Trace Engineer | Não renderizado | `content/payload-journey-lab.ts` | 3 itens | `WhitePapersSection` não consome os dados; hoje delega a LabLog |
| Curso Beta / Udemy | Primeira formação já disponível; ensina tracing pelas camadas | Hero, header, Formação, CTA final, footer | Conteúdo e componentes | 5 CTAs | Único produto externo ativo |
| Cupom | `FOLLOW-THE-FLOW` | Hero status, Formação e URL Udemy | Conteúdo e `EducationSection.tsx` | 3+ | Informação promocional/temporária |
| Estatísticas | Sistema cresceu de aproximadamente 6 mil para 40 mil linhas | Study Case | Conteúdo e componente | 4+ | Mesmo dado em descrição, facts, microFacts e chip |
| Anomalia temporal | `createdAt incorreto` associado a `HeartCreated` | Study Case | Conteúdo e componente | Alta | Núcleo narrativo do caso atual |
| Informações legais | Política de privacidade; Termos de uso; copyright anual | Footer | Conteúdo e `SiteFooter.tsx` | 1 | Políticas ainda não são links |
| Contato/redes | LinkedIn, YouTube, GitHub e contato em configuração | Não renderizado | `content/payload-journey-lab.ts`, `ContactSection.tsx` | 4 estados futuros | Nenhum endereço real configurado nessa área |

## CTAs e estados atuais

| Rótulo visível | Destino/estado | Localizações | Observação |
| --- | --- | --- | --- |
| Entrar no LAB | Udemy + cupom | Header desktop | Externo, nova aba, seguro |
| Entrar no LAB Beta | Udemy + cupom | Hero e Formação | Mesmo destino, rótulo duplicado |
| Começar com cupom FOLLOW-THE-FLOW | Modelado nos dados, mas não usado como rótulo visível | `siteContent.education.beta.action` | O componente substitui por “Entrar no LAB Beta” |
| Acessar curso beta | Udemy + cupom | CTA final | Externo, nova aba, seguro |
| Assistir ao LabLog | `@PayloadJourneyLAB` | Hero e seção LabLog | Externo, nova aba, seguro |
| Explorar o estudo | `#case-study` | Study Case | Self-link; não abre conteúdo novo |
| Acompanhar no LabLog | `#lablog` | Study Case | Âncora funcional |
| Conhecer a USMT | Futuro/página em desenvolvimento | Dados | Não renderizado |
| Explorar o Study Case | Futuro/em preparação | Dados | Não renderizado; componente usa outro CTA |
| Ver todos os White Papers | Futuro/página em desenvolvimento | Dados | Não renderizado |
| Página USMT em preparação | `#lablog` no componente não renderizado | `UsmtSection.tsx` | Sem rota real |
| Contato em configuração | Desabilitado | Componente não renderizado | Sem destino |

## Conteúdo temporário ou de estado

- Cupom `FOLLOW-THE-FLOW` e sua presença na query string.
- “Detalhes completos em breve.” no Study Case.
- “Em documentação”, “Em investigação”, “Em andamento” e “Etapa futura”.
- “Página em desenvolvimento”, “Em preparação”, “Data a definir”.
- “Contato em configuração” e “Canal em configuração”.
- “validated flow: in progress” e “temporal authority under review”.
- Rotas futuras registradas, mas inexistentes.
- Políticas legais apresentadas sem página ou link.

## Conteúdo hardcoded, duplicações e centralização futura

| Caminho | Conteúdo identificado | Tipo de problema | Impacto | Recomendação futura |
| --- | --- | --- | --- | --- |
| `components/sections/HeroSection.tsx` | `payloadFlow`, terminal command, quatro verbos e chips | Hardcoded fora do conteúdo central | Alterar narrativa exige editar componente | Modelar painel como dados preservando ordem e rótulos |
| `components/sections/HeroSection.tsx` | `title.replace(/\s+/g, " ")` | Transformação editorial no componente | Remove a quebra intencional registrada no conteúdo | Definir explicitamente a política de quebra na Sprint 1 |
| `components/sections/LabOverviewSection.tsx` | “LAB STRUCTURE” e “flow trace origin” | Texto hardcoded | Fonte editorial dividida | Centralizar se esses rótulos continuarem relevantes |
| `components/sections/MethodsSection.tsx` | Eyebrow e “trace stack…” | Texto hardcoded | Conteúdo não inventariado no objeto principal | Mover para schema da seção |
| `components/sections/CaseStudySection.tsx` | Resumos completos de HORA.city | Duplicação de `siteContent.caseStudy.description/secondaryDescription` | Alto risco de divergência editorial | Fazer o componente consumir uma única fonte após definir versão canônica |
| `components/sections/CaseStudySection.tsx` | `technicalRows` e `microFacts` | Arrays locais e dados repetidos | Anomalia, payload, método e missão aparecem várias vezes | Modelar views derivadas a partir de `caseStudy` |
| `components/sections/CaseStudySection.tsx` | região BR, status, authority, mensagens de flow | Hardcoded operacional/temporário | Estado pode ficar obsoleto sem atualização central | Criar estrutura de estado do estudo de caso |
| `components/sections/CaseStudySection.tsx` | CTA próprio e “Detalhes completos em breve.” | Estado temporário espalhado | Self-link pode parecer ação sem resultado | Modelar disponibilidade/estado do CTA |
| `components/sections/EducationSection.tsx` | Eyebrow, “LAB Beta”, cupom, rótulo do botão e “Trilhas futuras” | Hardcoded e duplicação parcial | Dados de CTA existentes não controlam a UI | Consumir labels/status do conteúdo |
| `components/sections/LabLogSection.tsx` | Título e descrição | Conteúdo inteiramente hardcoded | Não existe uma fonte editorial própria para a seção | Criar bloco `labLog` canônico |
| `components/layout/SiteHeader.tsx` | “Entrar no LAB” | Rótulo duplicado/variante | Mesmo destino aparece com nomes diferentes | Manter variantes intencionais documentadas ou centralizá-las |
| `components/layout/SiteFooter.tsx` | `footerLinks`, descrição institucional e headings | Hardcoded | Footer pode divergir do conteúdo e do SEO | Centralizar destinos e resumo institucional |
| `components/layout/SiteFooter.tsx` | `https://www.youtube.com/@Lab-Log` | URL externa duplicada e diferente | Pode levar a identidade distinta do CTA principal | Confirmar handle oficial antes de consolidar |
| `app/layout.tsx` | `G-8HW6J5BBY2` | Integração hardcoded | Mesmo ID em todos os ambientes; configuração não separável | Futuramente usar configuração por ambiente sem expor segredo |
| `config/site.ts` e `siteContent.brand` | Nome/tagline em dois objetos | Duplicação institucional | Risco de metadata e UI divergirem | Eleger fonte canônica de identidade |
| `tailwind.config.ts` e `app/globals.css` | Tokens de cor repetidos | Duplicação de design tokens | Mudança visual pode atualizar apenas um local | Definir uma fonte de tokens na sprint de design system |
| `components/sections/WhitePapersSection.tsx` | Retorna `LabLogSection` | Estrutura provisória/semântica enganosa | Nome sugere conteúdo que não entrega | Decidir rota/seção futura antes de reutilizar |

## Conteúdo semelhante em múltiplas áreas

- A tríade formação/pesquisa/investigação aplicada aparece em Hero, O LAB, Sobre, metadata e footer.
- A formação beta aparece no Header, Hero, Formação, CTA final e Footer.
- LabLog aparece no Hero, Study Case, seção própria, navegação e Footer.
- A narrativa de HORA.city repete escala, anomalia, payload e missão dentro da mesma seção e no arquivo central.
- Payload Journey, USMT, Reverse Payload Journey e Track Mode reaparecem no CTA final como porta de entrada.
- Nome/tagline/descrição existem em `config/site.ts`, `siteContent` e textos hardcoded.

## Conteúdo obrigatório a preservar na refatoração

1. Identidade Payload Journey LAB e tagline.
2. Definição institucional e os eixos formação, pesquisa, investigação aplicada e colaboração.
3. Payload Journey e os métodos complementares: USMT, Reverse Payload Journey, Operational Payload Path e Track to Origin.
4. Software System Investigation, Trace Engineer e Track Mode.
5. Sequência Congelar → Mapear → Detectar → Restaurar.
6. Fluxo Track Mode → Reverse Payload Journey → Track to Origin → Evidência → Restauração.
7. Study Case HORA.city, incluindo escala, `createdAt`, `HeartCreated`, autoridade temporal e estado em andamento.
8. Formação beta, URL Udemy e cupom vigente até decisão editorial explícita.
9. LabLog e destino YouTube oficial após resolver a duplicidade de handles.
10. Visão do LAB e apresentação da fundadora.
11. Conteúdo futuro: 12 elementos da USMT, One Bit Machine, White Papers, pesquisadores/colaboradores/instituições e rotas de métodos.
12. Informações legais e estados temporários, mesmo que sejam migrados para páginas ou configuração próprias.

