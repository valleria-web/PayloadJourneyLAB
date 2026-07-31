# Sprint 3 — Descoberta, metadata e estrutura AI-friendly

Implemente o terceiro sprint do website institucional do Payload Journey LAB.

Os Sprints 1 e 2 consolidaram:

* a arquitetura narrativa da homepage;
* o conteúdo institucional;
* as definições dos métodos;
* a hierarquia semântica;
* os estados dos CTAs;
* a separação entre conteúdo disponível e conteúdo futuro.

Neste Sprint 3, o objetivo é tornar o website tecnicamente compreensível, rastreável e indexável por:

* mecanismos de busca;
* crawlers;
* agentes de IA;
* ferramentas de compartilhamento;
* futuros sistemas de pesquisa e citação.

Não faça redesign visual.

Não crie novas páginas de conteúdo.

Não implemente analytics, CMS, autenticação ou backend.

Não faça deploy, commit ou push.

---

# Objetivo do sprint

Ao final deste sprint, o website deve possuir:

1. uma única fonte de verdade para nome, domínio e descrição institucional;
2. metadata completa e consistente;
3. URL canônica;
4. Open Graph básico;
5. metadata básica para Twitter/X;
6. `robots.txt` gerado pelo App Router;
7. política explícita para crawlers de busca e IA;
8. `sitemap.xml` contendo somente páginas reais;
9. JSON-LD válido para Organization, WebSite e WebPage;
10. conteúdo essencial disponível no HTML renderizado;
11. diagramas e fluxos acompanhados por contexto textual;
12. ausência de dados estruturados fictícios;
13. validação local dos artefatos produzidos.

Este sprint não garante que uma IA citará o website. Ele deve garantir que o conteúdo seja tecnicamente fácil de descobrir, interpretar e relacionar.

---

# Preparação obrigatória

Antes de modificar arquivos:

1. Confirme a branch atual.
2. Confirme que as alterações dos Sprints 1 e 2 estão presentes.
3. Leia:

   * `package.json`
   * `app/layout.tsx`
   * `app/page.tsx`
   * `content/payload-journey-lab.ts`
   * `types/content.ts`
   * todos os componentes renderizados pela homepage
   * `next.config.*`, caso exista
   * conteúdo atual de `public/`
4. Procure por:

   * metadata já existente;
   * canonical já existente;
   * arquivos `robots.txt`, `robots.ts`, `sitemap.xml` ou `sitemap.ts`;
   * JSON-LD já existente;
   * Open Graph;
   * Twitter metadata;
   * favicon, logo ou imagem social existente;
   * URLs sociais reais;
   * URLs placeholder;
   * referências ao domínio antigo ou localhost.
5. Não crie implementações duplicadas.
6. Caso exista um arquivo estático conflitante em `public/`, preserve ou substitua somente após confirmar que a versão dinâmica será a fonte oficial.

---

# Estado técnico esperado

O projeto utiliza:

* Next.js 14 com App Router;
* React;
* TypeScript;
* Tailwind CSS;
* homepage em `app/page.tsx`;
* layout raiz em `app/layout.tsx`;
* conteúdo institucional centralizado;
* domínio oficial `payloadjourneylab.com`.

Utilize apenas APIs compatíveis com a versão atual instalada no repositório.

Não faça upgrade de Next.js neste sprint.

Não adicione bibliotecas para SEO, schema ou metadata.

---

# 1. Configuração central do site

Crie ou consolide uma única fonte de verdade para os dados técnicos do site.

Preferência:

```text
config/site.ts
```

Caso o repositório já possua uma estrutura equivalente, reutilize-a.

A configuração deve conter, no mínimo:

```text
name
tagline
title
description
url
language
locale
```

Valores oficiais:

```text
name:
Payload Journey LAB
```

```text
tagline:
Siga o flow. Entenda o sistema.
```

```text
title:
Payload Journey LAB — Siga o flow. Entenda o sistema.
```

```text
description:
Laboratório de formação, pesquisa e investigação aplicada dedicado a compreender como payloads, estados, eventos e decisões atravessam sistemas complexos.
```

```text
url:
https://payloadjourneylab.com
```

```text
language:
pt-BR
```

```text
locale:
pt_BR
```

Regras:

* não duplicar o domínio em muitos arquivos sem necessidade;
* exportar uma constante ou objeto tipado;
* não utilizar `any`;
* não depender de variável de ambiente para o domínio canônico;
* o domínio de produção é fixo e conhecido;
* não utilizar `www` como canonical;
* não adicionar barra final ao valor-base, salvo se o padrão existente exigir;
* não mover todo o conteúdo editorial para esse arquivo;
* manter separação entre configuração técnica e conteúdo da homepage.

A configuração pode reutilizar textos já existentes no conteúdo centralizado, mas deve evitar dependências circulares.

---

# 2. Metadata do layout raiz

Atualize:

```text
app/layout.tsx
```

Utilize o tipo `Metadata` do Next.js.

Configure:

## metadataBase

```text
https://payloadjourneylab.com
```

Por exemplo, utilizando a configuração central:

```text
metadataBase: new URL(siteConfig.url)
```

## Title

Utilize estrutura com título padrão e template:

```text
default:
Payload Journey LAB — Siga o flow. Entenda o sistema.
```

```text
template:
%s | Payload Journey LAB
```

O título da homepage não deve resultar em repetição como:

```text
Payload Journey LAB | Payload Journey LAB
```

## Description

Utilize a descrição institucional oficial.

## Application name

```text
Payload Journey LAB
```

## Creator e publisher

É permitido utilizar:

```text
creator:
Payload Journey LAB
```

```text
publisher:
Payload Journey LAB
```

Não adicionar nome pessoal, empresa jurídica ou instituição que ainda não esteja publicada oficialmente no website.

## Alternates

Defina canonical da homepage:

```text
/
```

O resultado final deve resolver para:

```text
https://payloadjourneylab.com/
```

Não criar alternates de idiomas inexistentes.

## Open Graph

Configure:

```text
type:
website
```

```text
locale:
pt_BR
```

```text
url:
/
```

```text
siteName:
Payload Journey LAB
```

Utilize o título e a descrição oficiais.

Não inventar imagem Open Graph.

Se houver uma imagem real e apropriada no repositório:

* confirme dimensões e finalidade;
* utilize URL absoluta ou relativa resolvida por `metadataBase`;
* forneça `alt`;
* não reutilize uma imagem inadequada apenas para preencher metadata.

Se não houver imagem pronta, omita `images` e registre essa pendência para o Sprint 4.

## Twitter metadata

Sem imagem social real, utilize:

```text
card:
summary
```

Utilize título e descrição oficiais.

Não inventar:

* usuário;
* creator handle;
* site handle.

Caso exista futuramente uma imagem social adequada, `summary_large_image` poderá ser configurado no Sprint 4.

## Robots metadata da página

Configure a homepage para:

```text
index: true
follow: true
```

Inclua configuração equivalente para Googlebot somente quando compatível com o tipo `Metadata` instalado.

Não adicionar restrições como:

* `noarchive`;
* `nosnippet`;
* `noimageindex`;

sem uma decisão explícita do projeto.

## Outros cuidados

* preservar `<html lang="pt-BR">`;
* preservar classes e comportamento visual existentes;
* não mover o conteúdo da homepage para o layout;
* não transformar o layout em Client Component;
* não introduzir `use client`.

---

# 3. robots.txt

Crie:

```text
app/robots.ts
```

Utilize:

```text
MetadataRoute.Robots
```

## Política geral

Permitir indexação pública do website:

```text
User-agent: *
Allow: /
```

Adicionar:

```text
Sitemap: https://payloadjourneylab.com/sitemap.xml
Host: https://payloadjourneylab.com
```

## Política de crawlers da OpenAI

A política inicial do Payload Journey LAB será:

### OAI-SearchBot

Permitir.

Objetivo:

* possibilitar descoberta em experiências de busca do ChatGPT.

### ChatGPT-User

Permitir.

Objetivo:

* permitir acesso iniciado por uma solicitação do usuário.

### GPTBot

Bloquear temporariamente.

Objetivo:

* separar descoberta pública da decisão futura sobre utilização de conteúdo para treinamento.

A configuração deve gerar uma política equivalente a:

```text
User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: GPTBot
Disallow: /
```

Além da regra geral.

Regras:

* não bloquear Googlebot;
* não bloquear Bingbot;
* não bloquear crawlers gerais;
* não adicionar agentes que não tenham sido deliberadamente avaliados;
* não criar regras para áreas privadas inexistentes;
* não bloquear `/_next/`;
* não adicionar `crawlDelay` sem necessidade;
* não criar `public/robots.txt` se `app/robots.ts` for a fonte oficial;
* verificar se não existe conflito entre versão estática e dinâmica.

Adicione um comentário curto no código explicando que a política separa descoberta por busca da decisão de treinamento.

Não criar longos textos de política dentro do código.

---

# 4. sitemap.xml

Crie:

```text
app/sitemap.ts
```

Utilize:

```text
MetadataRoute.Sitemap
```

O sitemap deve conter apenas URLs reais e renderizáveis.

Neste momento, incluir somente:

```text
https://payloadjourneylab.com/
```

Não incluir:

* âncoras da homepage;
* `/usmt`;
* `/methods/...`;
* `/white-papers`;
* `/case-study/hora-city`;
* políticas legais;
* páginas futuras;
* URLs desativadas;
* URLs que retornam 404.

Não inventar `lastModified`.

Somente incluir `lastModified` se existir uma fonte real e estável para esse dado.

`priority` pode ser:

```text
1
```

`changeFrequency` é opcional. Caso utilizado, escolha um valor conservador e coerente. Não apresente precisão falsa.

A implementação deve permitir que páginas reais sejam adicionadas facilmente no futuro.

Não criar um sistema complexo ou CMS para isso.

---

# 5. JSON-LD

Implemente dados estruturados na homepage.

Utilize JSON-LD renderizado como:

```text
<script type="application/ld+json">
```

## Estrutura

Criar um grafo contendo:

* Organization;
* WebSite;
* WebPage.

Pode ser um único objeto com:

```text
@context
@graph
```

## Organization

Utilizar:

```text
@type:
Organization
```

```text
@id:
https://payloadjourneylab.com/#organization
```

Campos permitidos:

```text
name:
Payload Journey LAB
```

```text
url:
https://payloadjourneylab.com
```

```text
description:
descrição institucional oficial
```

Não adicionar ainda:

* legalName;
* logo, se não existir arquivo oficial;
* founder;
* employee;
* address;
* telephone;
* email;
* contactPoint;
* sameAs com URLs ausentes;
* instituições parceiras;
* data de fundação;
* credenciais;
* identificadores jurídicos.

## WebSite

Utilizar:

```text
@type:
WebSite
```

```text
@id:
https://payloadjourneylab.com/#website
```

Campos:

```text
url
name
description
inLanguage
publisher
```

`publisher` deve referenciar:

```text
https://payloadjourneylab.com/#organization
```

Não adicionar `SearchAction`, pois o site ainda não possui busca funcional.

## WebPage

Utilizar:

```text
@type:
WebPage
```

```text
@id:
https://payloadjourneylab.com/#webpage
```

Campos:

```text
url
name
description
inLanguage
isPartOf
about
```

`isPartOf` deve referenciar o WebSite.

`about` deve referenciar a Organization.

Não adicionar:

* datePublished;
* dateModified;
* author pessoal;
* breadcrumb;
* primaryImageOfPage;

sem fonte real.

## Implementação segura

Crie uma estrutura pequena e reutilizável, por exemplo:

```text
components/seo/JsonLd.tsx
```

ou utilize a organização equivalente já existente.

Requisitos:

* Server Component;
* sem dependências externas;
* sem `any`;
* receber dados serializáveis;
* utilizar `JSON.stringify`;
* escapar caracteres `<` no JSON serializado para evitar injeção acidental;
* não duplicar o mesmo JSON-LD;
* não inserir dados estruturados invisíveis que contradigam o conteúdo visível.

Uma abordagem aceitável para sanitização é substituir:

```text
<
```

por sua representação Unicode escapada no resultado serializado.

Renderize o JSON-LD apenas uma vez na homepage.

Preferencialmente, gere o objeto em:

```text
lib/structured-data.ts
```

ou em configuração equivalente.

Evite colocar um objeto muito grande diretamente em `app/page.tsx`.

---

# 6. Auditoria de conteúdo renderizado

Revise a homepage sem reescrever novamente o conteúdo aprovado no Sprint 2.

Confirme:

* existe exatamente um `h1`;
* títulos de seção são `h2`;
* títulos de cards e métodos são `h3`;
* o conteúdo institucional principal está presente como texto HTML;
* as definições dos métodos não existem somente em SVG;
* o fluxo do ecossistema possui equivalente textual;
* diagramas possuem contexto ou descrição textual próxima;
* nomes como USMT são acompanhados pelo nome completo em sua primeira ocorrência;
* a página possui `header`, `nav`, `main` e `footer`;
* links de navegação por âncoras continuam funcionais;
* CTAs futuros continuam semanticamente desativados;
* nenhum conteúdo essencial depende de hover;
* nenhum conteúdo essencial aparece somente depois de JavaScript no cliente.

Não adicione blocos ocultos de palavras-chave.

Não duplique conteúdo invisível apenas para SEO.

Não introduza `meta keywords`.

Não faça keyword stuffing.

A clareza deve vir da estrutura e do conteúdo real.

---

# 7. Relações semânticas e links internos

A homepage é atualmente single page.

Preserve os links internos reais:

```text
#lab
#metodos
#case-study
#formacao
#white-papers
#sobre
#contato
```

Não transformar futuras rotas em links antes de elas existirem.

Não adicionar páginas vazias para preencher sitemap ou JSON-LD.

Não criar redirects para rotas futuras.

Quando as páginas específicas forem desenvolvidas, elas serão incluídas posteriormente em:

* sitemap;
* canonical individual;
* breadcrumbs;
* JSON-LD específico;
* links internos.

---

# 8. Assets e identidade

Audite os assets existentes.

Caso exista:

* favicon;
* símbolo do LAB;
* logo;
* imagem institucional;

documente quais podem ser usados futuramente.

Neste sprint:

* não redesenhar logo;
* não gerar imagem Open Graph;
* não criar imagem placeholder;
* não utilizar screenshot da homepage como imagem social;
* não usar imagem remota;
* não adicionar banco de imagens.

Se já existir favicon configurado e correto, preserve.

Se não existir, registrar como pendência do Sprint 4.

---

# 9. Arquivos esperados

A implementação provavelmente modificará ou criará:

```text
app/layout.tsx
app/robots.ts
app/sitemap.ts
app/page.tsx
config/site.ts
components/seo/JsonLd.tsx
lib/structured-data.ts
```

Essa lista é orientativa.

Não crie todos os arquivos obrigatoriamente se uma solução menor e consistente já existir.

Evite:

* duplicação;
* abstrações excessivas;
* arquivos com uma única constante sem benefício;
* refatoração ampla de componentes.

Pode ser necessário modificar:

```text
content/payload-journey-lab.ts
types/content.ts
```

somente para eliminar duplicação ou suportar a configuração técnica.

Não alterar os textos editoriais aprovados sem necessidade.

---

# 10. Não implementar neste sprint

Não implementar:

* Google Analytics;
* Google Search Console;
* Bing Webmaster Tools;
* tags de verificação sem valores reais;
* cookies;
* banner de consentimento;
* newsletter;
* formulário;
* backend;
* CMS;
* autenticação;
* Open Graph image nova;
* Twitter image nova;
* páginas futuras;
* BreadcrumbList;
* Course schema;
* Article schema;
* TechArticle schema;
* VideoObject schema;
* Person schema;
* FAQ schema;
* `SearchAction`;
* `llms.txt`;
* feed RSS;
* PWA;
* service worker;
* analytics de IA;
* scripts de terceiros;
* dependências de schema;
* deploy;
* commit;
* push.

Esses elementos só devem ser adicionados quando existir conteúdo ou infraestrutura real correspondente.

---

# 11. Critérios de aceitação

Considere o Sprint 3 concluído somente se:

1. `metadataBase` utilizar `https://payloadjourneylab.com`;
2. a homepage possuir canonical correto;
3. título e descrição estiverem consistentes;
4. Open Graph básico estiver configurado;
5. Twitter metadata básica estiver configurada;
6. nenhuma imagem social fictícia tiver sido adicionada;
7. `/robots.txt` for gerado corretamente;
8. `/sitemap.xml` for gerado corretamente;
9. o sitemap contiver somente a homepage;
10. OAI-SearchBot estiver permitido;
11. ChatGPT-User estiver permitido;
12. GPTBot estiver bloqueado;
13. crawlers gerais permanecerem permitidos;
14. JSON-LD possuir Organization;
15. JSON-LD possuir WebSite;
16. JSON-LD possuir WebPage;
17. todos os IDs do grafo utilizarem o domínio canônico;
18. nenhum dado organizacional fictício tiver sido adicionado;
19. JSON-LD for JSON válido;
20. não houver duplicação de JSON-LD;
21. existir apenas um `h1`;
22. conteúdo essencial permanecer no HTML;
23. não existirem links futuros falsamente ativos;
24. não existirem URLs localhost na build;
25. não existirem referências a domínio incorreto;
26. lint passar;
27. TypeScript passar;
28. build passar;
29. responsividade não for alterada;
30. nenhum redesign visual tiver sido introduzido.

---

# 12. Validação técnica

Execute:

```text
npm run lint
```

Execute:

```text
npx tsc --noEmit
```

Execute:

```text
npm run build
```

Corrija apenas erros relacionados ao Sprint 3.

Não alterar problemas antigos fora do escopo.

## Validação local adicional

Quando viável:

1. execute a build local;
2. inicie a aplicação localmente;
3. verifique:

   * `/`;
   * `/robots.txt`;
   * `/sitemap.xml`;
4. inspecione o HTML da homepage;
5. confirme a presença de:

   * `<title>`;
   * meta description;
   * canonical;
   * Open Graph;
   * Twitter metadata;
   * JSON-LD;
6. extraia o conteúdo do script JSON-LD;
7. confirme que `JSON.parse` funciona;
8. confirme que o HTML não contém:

   * `localhost`;
   * `payloadjourneylab.example`;
   * `href="#"`;
   * URLs fictícias.

Se não for possível executar o servidor local, valide os arquivos gerados pela build e explique a limitação.

## Resultado esperado de rotas

A build deve reconhecer:

```text
/
/robots.txt
/sitemap.xml
```

Não deve criar páginas futuras.

---

# 13. Revisão manual

Após a validação automática, confirme manualmente:

* domínio canônico correto;
* português do Brasil como idioma;
* title sem repetição;
* description coerente com o Hero;
* JSON-LD coerente com o conteúdo visível;
* ausência de afirmações institucionais não verificadas;
* política de crawler implementada exatamente como solicitada;
* sitemap sem rotas inexistentes;
* nenhuma mudança visual perceptível;
* nenhum conteúdo do Sprint 2 removido.

---

# 14. Relatório final

Ao concluir, informe:

1. branch utilizada;
2. arquivos criados;
3. arquivos modificados;
4. configuração central criada ou reutilizada;
5. metadata implementada;
6. canonical final;
7. configuração Open Graph;
8. configuração Twitter;
9. conteúdo final de `/robots.txt`;
10. conteúdo final de `/sitemap.xml`;
11. tipos JSON-LD implementados;
12. campos deliberadamente omitidos por falta de dados reais;
13. resultado da auditoria semântica;
14. resultado do lint;
15. resultado do TypeScript;
16. resultado do build;
17. resultado da validação local dos endpoints;
18. pendências transferidas para o Sprint 4;
19. limitações encontradas.

Não faça deploy.

Não crie commit.

Não faça push.
