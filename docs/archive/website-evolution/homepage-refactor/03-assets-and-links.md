# Inventário de assets, links e integrações

## Assets locais e recursos visuais

| Asset | Caminho ou origem | Onde é utilizado | Dimensão/tamanho | Observações |
| --- | --- | --- | --- | --- |
| Logo principal | `public/brand/logo.png` | Header e footer via `next/image` | 1254×1254 px; 409.531 bytes | Arquivo quadrado exibido em caixas 80×44 e 224×96 com `object-cover`; ocorre recorte e há custo maior que o tamanho visual necessário |
| Ícone da aplicação | `app/icon.svg` | Rota metadata automática `/icon.svg` | viewBox 64×64; 601 bytes | Tem `role="img"` e `aria-label`; usa cores legadas `#0f766e/#0a0a0a`, distintas dos tokens atuais |
| Ícones de interface | Pacote `lucide-react` | CTAs, menu, pilares, métodos e conteúdo futuro | Vetores em runtime | Ícones visíveis decorativos usam `aria-hidden`; ícones dos pilares estão dentro de cards textuais |
| Diagrama de fluxo | `components/diagrams/FlowDiagram.tsx` | Ecossistema | HTML/CSS | Renderizado; lista ordenada de cinco etapas, sem imagem externa |
| Payload Journey diagram | `components/diagrams/PayloadJourneyDiagram.tsx` | Não utilizado | SVG inline, viewBox 460×260 | Acessível por `role="img"`/label, mas não entra na homepage |
| USMT diagram | `components/diagrams/UsmtDiagram.tsx` | Não utilizado | HTML/CSS | Placeholder acessível, não renderizado |
| Fundo pontilhado do Study Case | CSS inline arbitrário Tailwind | Study Case | radial-gradient 14×14 | Decorativo, `pointer-events-none` |
| Utilitário terminal grid | `app/globals.css` | Não localizado em componentes atuais | CSS gradients 32×32 | Asset lógico aparentemente não utilizado |
| Utilitário soft noise | `app/globals.css` | Não localizado em componentes atuais | CSS radial-gradient 18×18 | Asset lógico aparentemente não utilizado |
| Technical corners | `app/globals.css` | `HighlightPanel` | Quatro linear-gradients | Renderizado no Hero e Study Case |
| Fontes preferenciais | `Space Grotesk`, `Inter`, `IBM Plex Mono` | Toda a página por Tailwind | Não há arquivos/imports | O navegador reporta a família CSS, mas cai em fontes instaladas/fallbacks quando Space Grotesk/Inter não existem |

## Imagens: acessibilidade e carregamento

| Uso | Alt | Dimensões declaradas | Resultado observado |
| --- | --- | --- | --- |
| Header | `alt=""` | `fill`, container 80×44, `sizes="80px"` | Adequado como imagem decorativa porque o link pai tem `aria-label` com a marca; `priority` carrega no início |
| Footer | `alt="Payload Journey LAB"` | 224×96, `sizes="224px"` | Texto alternativo presente; carregamento lazy por estar abaixo da dobra |

Não existem thumbnails, fotografias, vídeo local, iframe ou `<video>` na homepage. O único arquivo raster é reutilizado duas vezes.

## Assets aparentemente não utilizados ou inconsistentes

- `PayloadJourneyDiagram`, `UsmtDiagram` e os utilitários `.terminal-grid`/`.soft-noise` não possuem consumidor atual.
- `public/brand/README.md` instrui usar `/brand/logo.svg`, porém o arquivo existente e o código usam `/brand/logo.png`.
- Não existe `public/brand/logo.svg`.
- O conteúdo possui emojis/ícones textuais para os 12 passos da USMT, mas a seção não é renderizada.
- `app/icon.svg` é usado automaticamente pelo App Router; não deve ser classificado como órfão.
- Nenhum arquivo duplicado por hash/nome foi encontrado; a duplicação é de uso do mesmo logo.

## Links renderizados

| Origem | Destino | Componente | Tipo/comportamento | Segurança | Verificação |
| --- | --- | --- | --- | --- | --- |
| Marca do header | `#inicio` | `SiteHeader` | Âncora, mesma aba | Não aplicável | ID existe |
| Nav “Início” | `#inicio` | Header/mobile | Âncora | Não aplicável | ID existe |
| Nav “O LAB” | `#lab` | Header/mobile/footer | Âncora | Não aplicável | ID existe |
| Nav “Métodos” | `#metodos` | Header/mobile/footer | Âncora | Não aplicável | ID existe |
| Nav “Study Case” | `#case-study` | Header/mobile/footer | Âncora | Não aplicável | ID existe |
| Nav “Formação” | `#formacao` | Header/mobile/footer | Âncora | Não aplicável | ID existe |
| Nav “LabLog” | `#lablog` | Header/mobile/footer | Âncora | Não aplicável | ID existe |
| Nav “Sobre” | `#sobre` | Header/mobile | Âncora | Não aplicável | ID existe |
| Entrar no LAB / Beta / curso | `https://www.udemy.com/course/payload-journey-lab-siga-o-flow-entenda-o-sistema/?couponCode=FOLLOW-THE-FLOW` | Header, Hero, Formação, CTA final, Footer | Udemy, nova aba | `noopener noreferrer` | HTTP 200 em 19/07/2026 |
| Assistir ao LabLog | `https://www.youtube.com/@PayloadJourneyLAB` | Hero e LabLog | YouTube, nova aba | `noopener noreferrer` | HTTP 200 em 19/07/2026 |
| Explorar o estudo | `#case-study` | Study Case | Self-link | Não aplicável | Funciona, mas não muda de contexto |
| Acompanhar no LabLog | `#lablog` | Study Case | Âncora | Não aplicável | ID existe |
| YouTube do footer | `https://www.youtube.com/@Lab-Log` | Footer | YouTube, nova aba | `noopener noreferrer` | HTTP 200 em 19/07/2026; handle difere do CTA principal |

Todos os links externos que usam `target="_blank"` possuem `rel="noopener noreferrer"`. O componente `Button` também aplica essa proteção automaticamente quando necessário.

## Links não acionáveis e futuros

- Badges de trilhas futuras não são links: Curso, LabLogs, Workshops, Programa Trace Engineer e Pilotos acadêmicos.
- Política de privacidade e Termos de uso são spans com `aria-disabled="true"`.
- CTAs de USMT, White Papers, Study Case completo e contato estão modelados como futuros; em geral não são renderizados.
- Canais LinkedIn, YouTube e GitHub do `ContactSection` são spans desabilitados e a seção não entra na página.
- As rotas futuras declaradas em `preservedFutureContent.futureRoutes` não existem no App Router atual.

## Integrações

| Integração | Origem | Comportamento | Configuração | Risco/observação |
| --- | --- | --- | --- | --- |
| Google Analytics | `https://www.googletagmanager.com/gtag/js` | Carregado `afterInteractive`; inicializa `dataLayer` e envia config | ID `G-8HW6J5BBY2` hardcoded em `app/layout.tsx` | Não separa dev/preview/produção; auditoria local não validou recepção no painel |
| Udemy | Link externo | Curso com query de cupom | URL centralizada em constante privada do conteúdo | Cupom é temporal e deve ter owner/validade |
| YouTube | Links externos | Abre canal, sem embed | Dois handles no código | Confirmar qual é o oficial antes da refatoração |
| schema.org | JSON-LD local | Organization, WebSite e WebPage | `lib/structured-data.ts` | Sem chamada externa; serialização escapa `<` |
| Vercel | Detectado no domínio público, não no código | Hospedagem/deploy | Nenhum arquivo versionado | Processo/branch/variáveis não auditáveis somente pelo repo |

Não foram encontradas APIs de aplicação, formulários funcionais, envio de e-mail, webhooks, players incorporados ou SDKs sociais.

## Limites da verificação de links

- HTTP 200 confirma resposta do destino, não que o canal/curso seja editorialmente o pretendido.
- O conteúdo e a validade comercial do cupom não foram alterados nem testados por compra/login.
- Os dois handles de YouTube responderam 200, mas a identidade oficial precisa ser confirmada pelo responsável do LAB.
- Não foram feitas ações autenticadas, inscrições, analytics ou alterações em serviços externos.

