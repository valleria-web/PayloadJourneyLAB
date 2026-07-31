# Riscos para a refatoração da homepage

Escala qualitativa: impacto e probabilidade classificados como baixo, médio ou alto com base no estado atual; não representam medição estatística.

| Risco | Evidência | Impacto | Probabilidade | Mitigação recomendada |
| --- | --- | --- | --- | --- |
| Perda de conteúdo não renderizado | USMT completa, White Papers, One Bit Machine, contato, rotas futuras e listas reservadas existem no conteúdo/componentes, mas não em `app/page.tsx` | Alto | Alto | Criar matriz de migração “preservar/mover/arquivar/publicar” antes de remover qualquer bloco |
| Divergência entre conteúdo e apresentação | Study Case repete descrições, facts e estados no arquivo central e no componente | Alto | Alto | Definir fonte canônica e gerar views a partir dela na Sprint 1 |
| Quebra de âncoras | Header, menu mobile, footer e CTAs dependem de sete IDs | Alto | Médio | Congelar contrato de anchors e criar teste automatizado de existência/destino |
| Regressão mobile | Página chega a 14.395 px em 360; várias seções mudam grid em `sm/md/lg/xl` | Alto | Alto | Refatorar seção por seção e comparar screenshots 360/390/768 a cada etapa |
| Regressão visual | Classes Tailwind estão embutidas em todos os componentes e há tokens duplicados | Alto | Alto | Criar baseline de screenshot e checklist de tokens antes de mudar layouts |
| Conteúdo misturado com UI | Arrays locais no Hero e Study Case; copy hardcoded em LabLog/Footer | Médio | Alto | Migrar conteúdo apenas depois do inventário e com diff editorial explícito |
| Fonte tipográfica não determinística | Space Grotesk/Inter/IBM Plex Mono são declaradas, mas não carregadas | Médio | Alto | Escolher e carregar fontes oficiais ou documentar fallbacks; medir quebra de linha antes/depois |
| URLs externas inconsistentes | `@PayloadJourneyLAB` e `@Lab-Log` são usados como YouTube | Médio | Alto | Confirmar handle oficial com owner e centralizar URL única |
| CTA sem resultado percebido | “Explorar o estudo” aponta para a própria seção; políticas e trilhas são não interativas | Médio | Alto | Modelar estado/disabled/future de modo explícito e não apresentar self-link como avanço |
| Promoção temporária obsoleta | Cupom `FOLLOW-THE-FLOW` aparece na URL e UI | Médio | Médio | Dar owner, validade e fallback ao conteúdo promocional |
| SEO divergente da UI | Identidade/descrição estão em `config/site.ts`, `siteContent` e hardcodes | Alto | Médio | Eleger fonte canônica e testar metadata/JSON-LD junto com conteúdo |
| Analytics misturado a ambientes | GA ID hardcoded no layout | Médio | Alto | Configurar analytics por ambiente e documentar consentimento/privacidade antes de alterar |
| Ausência de testes | Não há test runner nem arquivos de teste | Alto | Alto | Antes da refatoração ampla, adicionar smoke tests de estrutura, anchors e menu; depois testes visuais |
| Dependências vulneráveis | `npm audit`: 4 altas e 1 moderada, incluindo Next 14 | Alto | Alto | Planejar upgrade isolado; não misturar upgrade major com redesign sem matriz de compatibilidade |
| Build cache instável | Webpack não conseguiu snapshot de dependências, embora build tenha passado | Médio | Médio | Reproduzir em CI limpa e registrar se é específico de Windows/lock de arquivo |
| Lock de binário no Windows | Primeiro `npm ci` falhou com `EPERM` no SWC após build | Médio | Médio | Garantir encerramento de processos Next/Node antes de instalação limpa em Windows |
| Asset de logo superdimensionado | PNG de 409 KB/1254² exibido em 80×44 e 224×96 com recorte | Médio | Alto | Preparar variantes otimizadas e validar identidade/recorte antes de substituir |
| Documento de marca divergente | README pede `logo.svg`, implementação usa `logo.png` | Baixo | Alto | Atualizar convenção somente após confirmação do asset oficial |
| Componentes sem consumidor confundirem escopo | `UsmtSection`, `ContactSection`, `WhitePapersSection`, diagramas e `FeatureCard` não são usados | Médio | Alto | Não apagar; registrar decisão por componente e cobertura de conteúdo |
| `WhitePapersSection` semanticamente enganosa | Componente retorna `LabLogSection`, sem White Papers | Médio | Médio | Não reutilizar como seção de papers sem implementar contrato editorial real |
| Navegação mobile incompleta | Fecha por click no link, mas não há Escape, click-outside ou gestão explícita de foco | Médio | Médio | Incluir requisitos de acessibilidade e teste de teclado na nova navegação |
| Ruptura da hierarquia semântica | A estrutura atual possui um H1 e sequência H2/H3 consistente | Alto | Médio | Preservar um H1 e auditar heading outline após reordenação |
| Regressão de performance | Refatoração pode adicionar imagens, fontes, animações e Client Components | Alto | Médio | Definir budgets usando baseline: `/` 6,46 kB e First Load JS 93,7 kB |
| Crescimento de hidratação | Hoje somente `MobileNavigation` é Client Component | Médio | Médio | Manter conteúdo estático em Server Components e justificar cada nova fronteira client |
| Estados futuros serem publicados como ativos | Tipos `future/disabled` existem, mas componentes nem sempre os consomem | Médio | Alto | Tornar estados parte do contrato de renderização de CTA |
| Conteúdo legal permanecer incompleto | Políticas são spans sem destino | Alto | Médio | Definir responsável e rotas legais antes de promover links na nova UI |
| Domínio/deploy não reproduzível | Não há workflow nem configuração Vercel no repositório | Alto | Médio | Documentar production branch, comandos, variáveis e rollback fora da alteração visual |

## Riscos prioritários para a Sprint 1

1. **Perda editorial:** o conteúdo fora da árvore renderizada precisa entrar na matriz de migração antes de qualquer limpeza.
2. **Fonte canônica:** HORA.city, LabLog, identidade e CTAs precisam de contratos claros para impedir novas divergências.
3. **Arquitetura de informação:** a nova progressão deve mapear cada etapa para conteúdo atual sem quebrar anchors nem duplicar conceitos.
4. **Mobile:** a nova ordem deve ser prototipada primeiro em 360/390, onde a página atual já é muito longa.
5. **Cobertura:** smoke tests estruturais e screenshots devem existir antes da primeira mudança ampla.
6. **Separação de mudanças:** upgrade de Next/dependências, analytics e otimização de assets devem ser tratados em mudanças próprias, evitando confundir regressões com o redesign.

## Mitigação por gates

### Antes de editar a homepage

- Aprovar matriz de conteúdo atual → destino futuro.
- Confirmar URL oficial do YouTube e política do cupom.
- Congelar anchors que precisam manter compatibilidade.
- Definir quais estados futuros continuarão visíveis.

### Durante a refatoração

- Migrar uma seção/etapa narrativa por vez.
- Executar lint, typecheck, build e smoke de anchors a cada marco.
- Comparar 360, 390, 768, 1024 e 1440 px.
- Revisar diff editorial separadamente do diff de layout.

### Antes de publicar

- Validar metadata, canonical, JSON-LD, robots e sitemap.
- Testar teclado, leitor de tela, foco do menu e reduced motion.
- Confirmar CTAs externos, cupom, políticas e analytics por ambiente.
- Medir bundle, imagens, fontes e layout shift contra este baseline.

