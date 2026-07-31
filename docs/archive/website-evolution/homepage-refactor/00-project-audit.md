# Auditoria do projeto — baseline da homepage

Data da auditoria: 19 de julho de 2026  
Branch: `v0.2.0`  
Commit-base anterior à documentação: `0ffa7a03e9ec68412eb346698c2c97e17d353843`  
Escopo: leitura, execução e documentação. Nenhum componente, texto, estilo ou comportamento da homepage foi alterado.

## Resumo executivo

O site é uma aplicação pequena, estática e de página única construída com Next.js App Router. A rota `/` compõe header, nove seções de conteúdo, CTA final e footer. A maior parte do conteúdo editorial está centralizada em `content/payload-journey-lab.ts`, mas ainda há textos e dados importantes hardcoded em componentes, sobretudo no Hero, Study Case, LabLog e Footer.

A arquitetura atual é simples de rastrear e o build está saudável. Lint, TypeScript e build passaram. Não há testes automatizados, manifest, configuração de deploy versionada ou scripts próprios de typecheck/test. A aplicação usa somente um Client Component (`MobileNavigation`); o restante da homepage é renderizado no servidor e pré-renderizado como conteúdo estático.

Os principais riscos antes da refatoração são perda de conteúdo que hoje não é renderizado, divergência entre conteúdo centralizado e cópias hardcoded, ausência de testes de regressão, URLs duplicadas/inconsistentes e dependências com advisories conhecidos.

## Stack identificada

| Área | Estado encontrado | Evidência |
| --- | --- | --- |
| Framework | Next.js, declarado como `^14.2.23`, resolvido em `14.2.35` | `package.json`, `package-lock.json`, `npm ls` |
| Runtime local | Node.js `22.19.0` | `node --version` |
| UI runtime | React e React DOM `18.3.1` | `package.json`, `npm ls` |
| Package manager | npm `11.6.3`, lockfile v3 | `npm --version`, `package-lock.json` |
| Router | App Router | Diretório `app/`, exports de `MetadataRoute` |
| Linguagem | TypeScript/TSX, modo `strict`, `noEmit` | `tsconfig.json` |
| Estilos | Tailwind CSS `3.4.19`, PostCSS e CSS global | `tailwind.config.ts`, `postcss.config.mjs`, `app/globals.css` |
| Biblioteca de UI | Componentes internos em `components/ui`; não há framework de componentes externo | `components/ui/` |
| Ícones | Lucide React `0.468.0` | imports em conteúdo e componentes |
| Animação | Nenhuma biblioteca; apenas transitions/hover CSS e smooth scroll | classes Tailwind, `app/globals.css` |
| Fontes | Pilhas CSS `Space Grotesk`, `Inter`, Arial/Helvetica e `IBM Plex Mono`/Courier; não há import, download ou arquivo de fonte | `tailwind.config.ts` |
| Configuração | Arquivos TypeScript/ESM; alias `@/*`; nenhuma variável de ambiente referenciada | `tsconfig.json`, `next.config.mjs`, busca por `process.env` |
| Assets | Arquivos locais em `public/` e `app/icon.svg`; `next/image` para o logo; SVG/CSS inline para diagramas e fundos | `public/`, `app/icon.svg`, componentes |
| SEO | Metadata API, canonical, Open Graph, Twitter, robots, sitemap e JSON-LD | `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`, `lib/structured-data.ts` |
| Analytics | Google Analytics via `next/script`, ID hardcoded | `app/layout.tsx` |
| Lint | ESLint 8 + `eslint-config-next`, presets Core Web Vitals e TypeScript | `.eslintrc.json` |
| Testes | Não configurados; nenhum arquivo de teste localizado | `package.json`, busca por `test/spec` |
| Build | `next build`; rota `/` e rotas metadata pré-renderizadas estaticamente | `package.json`, baseline técnico |
| Deploy | Não há workflow ou configuração de deploy versionada. O domínio público responde por Vercel, mas a integração não é reproduzível somente pelo repositório | ausência de `.github/`, `vercel.json` e similares |

## Estrutura relevante

```text
app/
  globals.css             estilos globais e utilitários próprios
  icon.svg                ícone da aplicação
  layout.tsx              layout raiz, metadata e Google Analytics
  page.tsx                composição da homepage
  robots.ts               política de crawlers
  sitemap.ts              sitemap de uma rota
components/
  diagrams/               diagramas em HTML/SVG
  layout/                 header, navegação mobile e footer
  sections/               seções renderizadas e seções preservadas
  seo/                    emissor de JSON-LD
  ui/                     primitives visuais internas
config/
  site.ts                 domínio, nome, título, descrição e locale
content/
  payload-journey-lab.ts  conteúdo editorial e estados de CTA
lib/
  structured-data.ts      grafo schema.org da homepage
public/
  brand/logo.png          logo usado no header e footer
types/
  content.ts              tipos de conteúdo e CTA
docs/
  prompts/                diagnósticos/prompts históricos
  sprints/                instruções históricas de sprints
```

## Arquivos principais

| Responsabilidade | Caminho real | Observação |
| --- | --- | --- |
| Entrypoint do App Router | `app/layout.tsx` | Layout global para todas as rotas |
| Homepage | `app/page.tsx` | Única página de conteúdo encontrada |
| Layout global | `app/layout.tsx` | Metadata, analytics, idioma e classes do `body` |
| Header | `components/layout/SiteHeader.tsx` | Sticky; desktop e gatilho da navegação mobile |
| Navegação mobile | `components/layout/MobileNavigation.tsx` | Único Client Component; estado local `open` |
| Footer | `components/layout/SiteFooter.tsx` | Links, legal e ano dinâmico |
| Estilos globais | `app/globals.css` | Tokens CSS, reset leve, foco, reduced motion e utilitários |
| Tema Tailwind | `tailwind.config.ts` | Cores semânticas e pilhas tipográficas |
| Metadata | `app/layout.tsx`, `config/site.ts` | Metadata base, canonical, OG e Twitter |
| Dados estruturados | `lib/structured-data.ts`, `components/seo/JsonLd.tsx` | Organization, WebSite e WebPage |
| Sitemap | `app/sitemap.ts` | Apenas `/` |
| Robots | `app/robots.ts` | Permite busca; bloqueia `GPTBot` |
| Manifest | Não encontrado | Não há `manifest.ts/json/webmanifest` |
| Deploy/domínio | `config/site.ts` contém o domínio | Não há configuração do provedor no repositório |
| Conteúdo | `content/payload-journey-lab.ts` | Fonte principal, mas não exclusiva |
| Tipos de conteúdo | `types/content.ts` | Inclui estados de CTA e modelos editoriais |
| Assets visuais | `public/brand/logo.png`, `app/icon.svg` | Inventário completo em `03-assets-and-links.md` |

## Convenções observadas

- Imports internos usam o alias `@/`.
- Componentes são funções nomeadas; a página é o único default export de UI.
- Componentes são Server Components por padrão; apenas o menu mobile declara `"use client"`.
- Conteúdo central usa `satisfies` para validar arrays e CTAs sem perder inferência literal.
- Layout e responsividade são expressos diretamente por classes Tailwind.
- `Section`, `Container`, `Card`, `Button`, `SectionHeader`, `TechnicalLabel` e `TerminalChip` formam o design system local.
- IDs de seção são usados como contrato de navegação interna.
- CTAs futuros são modelados com estado/status, mas nem todos os componentes consomem esses estados.

## Processo de build e execução

```text
npm ci
npm run dev
npm run lint
npm exec tsc -- --noEmit
npm run build
npm start
```

Somente `dev`, `build`, `start` e `lint` são scripts do projeto. Typecheck foi executado diretamente pelo compilador instalado; test não existe. Resultados e limitações estão em `04-technical-baseline.md`.

## Estado funcional observado

- `/` responde HTTP 200 localmente.
- A página é pré-renderizada estaticamente.
- Header e footer estão fora de `<main>`; as nove seções editoriais ficam dentro de `<main>`.
- Todas as sete âncoras de navegação apontam para IDs existentes.
- Navegação desktop aparece a partir de 1024 px; abaixo disso, o menu mobile abre e fecha por estado React.
- Não foi observado overflow horizontal entre 360 e 1440 px.
- Não foram observadas exceções de runtime, warnings de hydration ou layout shift na janela de auditoria.

## Ausências e limites arquiteturais

- Não há suíte de testes, Storybook, teste visual ou teste de acessibilidade automatizado.
- Não há arquivos de fonte; as famílias preferenciais dependem da disponibilidade no dispositivo.
- Não há API, formulário funcional, CMS ou carregamento dinâmico de conteúdo.
- Não há configuração versionada de CI/CD ou do projeto Vercel.
- Não há manifest de PWA.
- Não há configuração de ambientes; o ID do Google Analytics está no código.
- Há conteúdo futuro e componentes não renderizados que precisam ser tratados como acervo, não como código descartável.

