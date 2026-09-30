---
document_id: PJL-OPS-PROP-REPORT-20260930-001
title: Reporte objetivo da homepage antes de Comece Aqui
version: 1.0
status: review-ready
authority: operations
owner: Payload Journey LAB
last_reviewed: 2026-09-30
---

# Reporte objetivo — Payload Journey LAB

**Decisão: “Comece Aqui” é parcialmente necessária.** O site já oferece uma entrada conceitual e acesso ao caso HORA.city; falta reunir visão institucional, curso e conteúdo audiovisual em uma orientação curta. Recomenda-se um bloco compacto após o hero, reutilizando os destinos existentes, sem criar outra trilha ou repetir o catálogo de métodos.

## Escopo e evidência

Atende ao [ticket](../tasks/reporte-objetivo.md), que solicita somente diagnóstico. Nenhuma mudança de interface, conteúdo público, campanha ou configuração foi realizada.

Base principal: checkout local `8b7135f`, em 30/09/2026. Foram lidos os componentes efetivamente montados em `app/page.tsx`, seus conteúdos, navegação, rodapé, estilos e páginas de destino. Componentes antigos ou apenas exportados não foram contabilizados como seções visíveis.

A consulta à [homepage pública](https://www.payloadjourneylab.com/) encontrou conteúdo textual compatível com a estrutura local e com o cupom SIGA-O-FLOW. O extrator indicou rastreamento de três semanas antes: isso corrobora o diagnóstico, mas não comprova paridade de deploy em tempo real. O inventário detalhado abaixo deriva do código local, não da extração externa.

Limites: a captura em Chrome headless falhou na inicialização da GPU e não produziu imagem. Assim, a avaliação visual deriva de CSS e componentes; não certifica enquadramento da primeira dobra, ausência de overflow ou comportamento em dispositivos. As consultas externas à Udemy e ao YouTube não conseguiram obter as páginas. Não foram confirmados checkout, validade do cupom, vídeos publicados ou identidade visual desses perfis. Ausência de resposta da ferramenta não significa link quebrado. Não há URL de LinkedIn configurada para comparação.

Fontes locais, com caminhos relativos à raiz do repositório:

- [Composição da homepage](../../../../app/page.tsx), [conteúdo do LAB e hero](../../../../content/payload-journey-lab.ts), [resumos e rotas](../../../../content/routes.ts).
- [CTAs, canais e campanha](../../../../content/site.ts), [configuração](../../../../config/site.ts), [header](../../../../components/layout/SiteHeader.tsx), [rodapé](../../../../components/layout/SiteFooter.tsx).
- [Estilos globais](../../../../app/globals.css), [tokens Tailwind](../../../../tailwind.config.ts), [botões](../../../../components/ui/Button.tsx), [layout e fontes](../../../../app/layout.tsx).
- [Formação](../../../../app/learn/page.tsx), [apresentação do curso](../../../../components/sections/EducationSection.tsx), [LabLog condicionado](../../../../app/lablog/page.tsx), [fatos do caso](../../../../content/hora-city.ts).

## 1. Estrutura geral da homepage

O header fixo contém marca, navegação e “Começar”; no mobile, a navegação e esse CTA ficam no menu. A ordem de conteúdo é:

| Ordem | Seção / título | Âncora |
| --- | --- | --- |
| 1 | Hero — O código acelera. A compreensão precisa acompanhar. | `#inicio` |
| 2 | Por que agora — Produzir código ficou mais rápido. Construir compreensão continua sendo trabalho humano. | `#why-now` |
| 3 | Para quem — Uma hipótese de aprendizagem para quem precisa entrar no sistema | `#audience-investigation` |
| 4 | A proposta — Siga uma operação concreta até tornar sua causalidade visível | `#proposal` |
| 5 | LAB Definitions | `#lab-definitions` |
| 6 | Demonstração visual — Veja como uma intenção atravessa o sistema | `#demo` |
| 7 | Métodos como resposta — Instrumentos para investigar o flow | `#method-overview` |
| 8 | Evidência e hipótese — O LAB não presume a resposta. Investiga. | `#evidence-hypothesis` |
| 9 | Progressão pedagógica — Da leitura de um payload à investigação de sistemas | `#pedagogical-progression` |
| 10 | Formação — Transforme a investigação em prática de aprendizagem | `#formation` |
| 11 | Ecossistema do LAB — Quatro pilares, um propósito comum | `#ecosystem-overview` |
| 12 | O LAB — Formação, pesquisa e investigação aplicada | `#lab-overview` |

O rodapé encerra a página com identidade e cinco grupos de links. Não há seção autônoma de LabLog, LinkedIn ou case study detalhado na homepage atual. `HomeLearningSection` existe no código, mas não é montada em `app/page.tsx`. O caso é apresentado por chamadas para `/cases`.

## 2. Clareza da primeira dobra

| Pergunta do visitante | Avaliação do conteúdo do hero |
| --- | --- |
| O que é o LAB? | Parcial. Explica que investiga flow, payload e evidências, mas a definição direta de laboratório autoral de formação e investigação aparece melhor em `/lab`. |
| Para quem é? | Razoável. Menciona estudantes e developers. Início de carreira, sistemas legados e codebases desconhecidas ficam explícitos na terceira seção. |
| Qual problema aborda? | Forte. Crescimento do código acima da capacidade humana de compreender decisões e comportamento. O benefício é apresentado como investigação, sem promessa de eficácia comprovada. |
| Qual próximo passo? | Claro para aprender o conceito ou examinar HORA.city. Fraco para quem procura imediatamente o curso ou um vídeo. “Começar” no header leva ao conceito, não à Udemy. |

O título e o lead contextualizam bem o problema, mas termos como flow, payload e evidências exigem repertório inicial. Uma frase institucional curta e uma escolha por intenção ajudariam quem chega por redes sociais.

**Primeira dobra real ainda não validada:** header de 64 px, título grande, espaçamentos verticais e dois parágrafos podem empurrar os botões para baixo em telas estreitas. É uma hipótese baseada no layout, não um defeito observado em screenshot.

## 3. CTAs existentes

Inventário de todos os links da homepage, incluindo navegação e rodapé. “Claro” avalia rótulo e destino; não comprova disponibilidade externa. Links relativos são internos.

**U** = `https://www.udemy.com/course/payload-journey-lab-siga-o-flow-entenda-o-sistema/?couponCode=SIGA-O-FLOW`

**Y** = `https://www.youtube.com/@PayloadJourneyLAB`

| Local | Texto / nome acessível | Destino | Avaliação |
| --- | --- | --- | --- |
| Header | Payload Journey LAB — início | `/` | Claro; retorno à home |
| Header/menu móvel | Início | `/` | Claro |
| Header/menu móvel | Aprender | `/learn` | Claro |
| Header/menu móvel | Métodos | `/method` | Claro |
| Header/menu móvel | Casos | `/cases` | Claro |
| Header/menu móvel | LAB | `/lab` | Razoável; “Sobre o LAB” seria mais explícito |
| Header/menu móvel | Começar | `/payload-journey` | Fraco isoladamente: não especifica o que começa |
| Hero | Começar pelo Payload Journey | `/payload-journey` | Claro como entrada conceitual; exige reconhecer o termo |
| Hero | Ver o caso HORA.city | `/cases` | Claro; abre a apresentação de casos, não diretamente o case file |
| Para quem | Conhecer os métodos | `/method` | Claro |
| Para quem | Ver a investigação aplicada | `/cases` | Razoável; “HORA.city” tornaria o destino mais concreto |
| LAB Definitions | Explorar todas as definições | `/lab-definitions` | Claro |
| Demonstração | Começar pela formação | `/learn#formacao` | Claro como formação; não é ingresso direto no curso |
| Métodos: USMT | Conhecer a USMT | `/usmt` | Claro no contexto do card |
| Métodos: Payload Journey | Explorar o Payload Journey | `/payload-journey` | Claro |
| Métodos: protocolo | Ver o protocolo investigativo | `/protocol` | Claro |
| Métodos | Ver todos os métodos | `/method` | Claro |
| Evidência e hipótese | Examinar o caso HORA.city | `/cases` | Claro |
| Progressão | Explorar a progressão completa | `/learn` | Claro |
| Formação | Explorar a trilha de aprendizagem | `/learn` | Claro; prioridade visual sobre o curso |
| Formação | Conhecer a formação na Udemy | U | Claro sobre a plataforma; não explicita “beta” |
| Ecossistema | Explorar o ecossistema | `/ecosystem` | Razoável; abstrato para um visitante novo |
| O LAB | Conhecer o LAB | `/lab` | Claro |
| Rodapé / Começar | Payload Journey | `/payload-journey` | Claro como navegação conceitual |
| Rodapé / Começar | Aprender | `/learn` | Claro |
| Rodapé / Investigar | Métodos | `/method` | Claro |
| Rodapé / Investigar | Protocolo | `/protocol` | Claro no grupo |
| Rodapé / Investigar | Software System Investigation | `/investigation` | Preciso, mas exige repertório |
| Rodapé / Investigar | USMT | `/usmt` | Fraco fora do contexto; sigla sem expansão |
| Rodapé / Evidências | Casos | `/cases` | Claro |
| Rodapé / LAB | Sobre o LAB | `/lab` | Claro |
| Rodapé / LAB | Ecossistema | `/ecosystem` | Abstrato, porém coerente com o destino |
| Rodapé / LAB | LAB Definitions | `/lab-definitions` | Razoável; alterna idioma |
| Rodapé / LAB | AI Welcome | `/ai-welcome` | Fraco para iniciantes; destino especializado |
| Rodapé / Canais | Formação na Udemy | U | Claro |
| Rodapé / Canais | YouTube · LAB Log | Y | Claro como canal; não promete um episódio específico |

O menu móvel também tem “Abrir navegação” / “Fechar navegação”: são controles sem destino, não CTAs de conversão. Cards de definições, etapas e pilares não devem ser confundidos com links.

**Placeholders e incompletudes:** não foram encontrados `href="#"`, URLs vazias ou links fictícios nos CTAs montados da homepage. Os destinos internos inventariados têm arquivos de rota; `/learn#formacao` corresponde à seção `EducationSection`. Isso é verificação estática, não teste HTTP completo.

LinkedIn pessoal e institucional, contato e e-mail estão `null` e não aparecem como links clicáveis. São ausências de configuração, não links quebrados. O cupom do ticket, `FOLLOW-THE-FLOW`, difere de `SIGA-O-FLOW` no texto e na URL atuais. A configuração declara campanha ativa e expiração desconhecida; não comprova validade na Udemy. Não trocar automaticamente sem confirmar a campanha correta.

`labLogPublic: false` remove a rota interna da navegação pública; `/lablog` chama `notFound()`. O canal Y continua acessível pelo rodapé. Não recomendar `/lablog` como CTA enquanto esse estado persistir. CTAs históricos como “Entrar no LAB Beta” existem nos dados, mas não no hero efetivamente renderizado.

## 4. Função “Comece Aqui”

| Intenção | Caminho disponível | Cobertura |
| --- | --- | --- |
| Entender a visão | Hero, proposta e `/lab` pelo menu | Boa, mas a síntese institucional está dispersa |
| Entrar no curso beta | Formação, rodapé ou `/learn#formacao` → Udemy | Parcial: destino existe, porém aparece tarde e “beta” é mais explícito em `/learn` |
| Assistir ao LabLog / método em ação | Rodapé → canal do YouTube | Parcial: canal não equivale a vídeo ou playlist guiada; conteúdo externo não validado |
| Conhecer HORA.city | Hero → `/cases` → `/cases/rpj-hora-001` | Boa: caminho já começa no hero |

Pedagogicamente, `/learn` já contém progressão e “Seis passos possíveis para começar”. Criar outra trilha paralela tenderia a duplicar orientação. A lacuna é a escolha inicial entre conhecer, estudar, assistir e examinar um caso.

## 5. Consistência visual

| Critério | Evidência e avaliação |
| --- | --- |
| Base branca | Predominantemente clara, mas o fundo real é off-white `#F8F7F4`, com cards brancos, superfícies suaves e blocos escuros em Formação e rodapé. |
| Verde terminal | Presente: verde da marca `#2FAE42`, verde legível `#147028` e terminal `#78E65D`. Há papéis distintos para texto e decoração. |
| Rosa como acento | Presente em botões, traço do hero, foco e fundos blush. |
| Monoespaçada / terminal | Labels e assinatura usam a família mono; corpo usa sans. São declaradas Space Grotesk/Inter e IBM Plex Mono, mas não há carregamento dessas fontes em `app/layout.tsx` ou `@font-face` no CSS lido. Aparência exata depende das fontes locais e fallbacks. |
| Elegância minimalista | Tokens, bordas e cards são coerentes. A densidade de 12 seções, glossário e nove nós da demonstração reduz a concisão editorial. Julgamento visual final depende de renderização. |
| Coerência entre canais | Paleta local é consistente. Coerência com banners, thumbnails e página do curso não verificada; LinkedIn sem URL. Não afirmar alinhamento externo apenas pela presença de links. |

Contrastes calculados em Node a partir dos RGB definidos, pela luminância relativa sRGB, sem transparência:

| Combinação | Razão aproximada | Leitura |
| --- | --- | --- |
| Ink sobre paper | 17,76:1 | Forte |
| Graphite sobre paper | 8,14:1 | Forte |
| Verde legível sobre paper | 5,80:1 | Adequado para texto normal |
| Verde da marca sobre paper | 2,70:1 | Insuficiente até para referência de texto grande de 3:1 |
| Ink sobre rosa | 6,12:1 | Bom para CTAs atuais com variante `contrast` |
| Branco sobre rosa | 3,11:1 | Abaixo de 4,5:1 para texto normal |
| Terminal sobre ink | 12,03:1 | Forte |

O nome da marca no header usa o verde de menor contraste; sendo logotipo/nome de marca, isso não estabelece sozinho uma infração normativa, mas merece melhoria de legibilidade. A variante genérica `primary` usa branco no rosa, porém os botões principais montados na homepage usam `contrast`. Em `/learn`, o badge do cupom usa branco no rosa: merece revisão no tamanho efetivo. Não extrapolar esse cálculo para uma certificação completa de acessibilidade, hover, foco ou fundos compostos.

## 6. Conteúdo institucional

| Tema | Avaliação |
| --- | --- |
| Autoria | Valéria dos Santos Reiser é explicitamente identificada em `/lab`, com responsabilidade investigativa, metodológica e pedagógica. A homepage visível não destaca seu nome; metadados não substituem essa apresentação humana. |
| Natureza do LAB | Formação, pesquisa metodológica e investigação aplicada são claras no fechamento e em `/lab`; “independente” não é explicitado no hero. |
| Missão | Bem sustentada: compreender operações e decisões antes de modificar sistemas. |
| Métodos | Há síntese com USMT, Payload Journey e protocolo, além de catálogo e rotas dedicadas para Reverse Payload Journey, Operational Payload Path, Track to Origin e Trace Engineering. A profundidade existe; a seleção inicial pode ser mais simples. |
| Formação beta | Disponível em `/learn`, incluindo público, tópicos e limites. A homepage enfatiza trilha e plataforma, com pouca saliência do estágio beta. |
| Prova viva / study case | HORA.city é acessível desde o hero e documentado como investigação em andamento, inclusive a anomalia `createdAt` / `HeartCreated`. Caso real sustenta contexto e aplicação, não comprovação geral de eficácia pedagógica ou investigação concluída. |
| Links oficiais | Udemy e YouTube configurados; LinkedIn ausente. O estado “confirmed” no código não substitui validação externa atual. |

## 7. Cinco gaps principais

1. **Campanha inconsistente com o briefing:** cupom diferente e LinkedIn ausente. Risco de desencontro entre divulgação e landing page; validade comercial ainda desconhecida.
2. **Orientação inicial incompleta:** bom caminho para conceito/caso, mas curso e vídeo dependem de descoberta posterior; “Começar” é genérico.
3. **Carga cognitiva antes da ação:** vocabulário técnico, glossário e demonstração extensa antecedem a formação direta. O iniciante precisa distinguir muitos conceitos cedo.
4. **Identidade e autoria pouco imediatas:** definição institucional e criadora ficam sobretudo em `/lab`, apesar de serem relevantes para confiança de quem chega pelas redes.
5. **Acabamento visual sem validação completa:** combinações específicas de baixo contraste, fontes dependentes de fallback e falta de evidência de viewport/canais externos impedem concluir consistência visual integral.

## 8. Recomendações priorizadas

| Prioridade | Ação recomendada | Critério de conclusão |
| --- | --- | --- |
| P0 | Reconciliar cupom e oferta com a campanha realmente vigente na Udemy | Texto e `couponCode` iguais ao cupom confirmado; ausência de promessa de desconto não validada |
| P0 | Verificar destinos externos antes de ampliar a divulgação | Curso e canal corretos; LinkedIn somente com URL oficial confirmada; nenhum novo CTA apontando para `/lablog` desativado |
| P1 | Acrescentar orientação curta após o hero | Visão, beta, vídeo/canal e HORA.city identificáveis sem percorrer glossário e método |
| P1 | Tornar natureza e autoria explícitas perto da entrada | Uma frase institucional concisa, atribuição a Valéria e acesso a `/lab`, preservando os limites de pesquisa |
| P1 | Ajustar contraste nos usos identificados e estabilizar fontes se forem parte obrigatória da marca | Avaliação no tamanho efetivo; fontes realmente carregadas ou fallbacks assumidos como escolha de design |
| P1 | Validar desktop e mobile em navegador | Hero, acesso aos CTAs, menu, teclado, foco, quebra de linha e ausência de rolagem horizontal documentados |
| P2 | Escolher vídeo ou playlist introdutória e comparar identidade dos canais | Destino editorial verificado, com expectativa clara do que será visto; comparação visual com Udemy/YouTube/LinkedIn |
| P2 | Observar uso e reduzir repetição editorial | Medir seleção das entradas e testar compreensão com iniciantes antes de expandir novas seções |

P0 significa prioridade de alinhamento antes da próxima campanha, não evidência de indisponibilidade do site. Nenhuma dessas recomendações foi implementada neste ticket.

## 9. Decisão final

**Sim, implementar futuramente uma versão compacta de “Comece Aqui”, após o hero e antes de “Por que agora”.** A necessidade é parcial: os conteúdos já existem, mas faltam escolhas iniciais agrupadas. Uma página nova ou segunda trilha completa não é necessária neste momento.

Conteúdo mínimo: título, uma frase explicando o LAB e seu público, atribuição breve à criadora e quatro opções com uma linha de expectativa cada. Manter uma entrada pedagógica recomendada (“Começar pelo Payload Journey”, já no hero) e explicitar os demais caminhos como escolhas, não pré-requisitos obrigatórios.

| CTA proposto | Destino existente | Expectativa |
| --- | --- | --- |
| Entender a visão do LAB | `/lab` | Missão, origem e autoria |
| Conhecer o curso beta na Udemy | U, após confirmação da campanha | Formação externa introdutória; cupom apenas se confirmado |
| Acompanhar o LabLog no YouTube | Y | Canal oficial; usar “Assistir ao LabLog” quando houver vídeo/playlist introdutória validada |
| Conhecer o caso HORA.city | `/cases` | Caso fundador e acesso ao case file, com estado e limites da investigação |

Reutilizar `/learn` como referência da progressão completa. Não inserir LinkedIn como etapa pedagógica obrigatória; quando confirmado, tratá-lo como canal institucional. A melhoria deve reduzir o esforço de escolher o primeiro passo e preservar a distinção entre método documentado, hipótese pedagógica e evidência do caso.
