# Baseline técnico, responsivo e visual

Data: 19 de julho de 2026  
Ambiente: Windows, Node.js 22.19.0, npm 11.6.3, Edge Headless 150.0.4078.83.

## Comandos executados

| Comando | Resultado | Duração aproximada | Observações |
| --- | --- | --- | --- |
| `npm ci` | Falha inicial preexistente de ambiente | 8 s | `EPERM` ao remover `next-swc.win32-x64-msvc.node`; três processos Node do build anterior mantinham o binário bloqueado |
| `npm ci` após encerrar os três processos bloqueadores | Sucesso | 2 min | 383 pacotes; warnings de pacotes deprecated; 5 vulnerabilidades reportadas |
| `npm run lint` | Sucesso | 13,5 s | `✔ No ESLint warnings or errors` |
| `npm exec tsc -- --noEmit` | Sucesso | 10,2 s | Não há script `typecheck`; compilador executado diretamente |
| Testes | Script não configurado no projeto | — | Nenhum arquivo `test/spec` foi encontrado |
| `npm run build` | Sucesso | ~38 s | Compilação, lint, tipos e 7 páginas/rotas estáticas concluídos |
| `npm run dev -- --hostname 127.0.0.1 --port 3000` | Sucesso | Ready em 3,4 s | `/` respondeu HTTP 200 |
| `npm audit --json` | Sucesso após liberar rede | 8,7 s | 1 vulnerabilidade moderada e 4 altas; nenhuma correção aplicada |

O primeiro `npm audit` não conseguiu acessar o endpoint dentro do sandbox. A consulta foi repetida com acesso de rede somente para leitura. Nenhum `npm audit fix` foi executado.

## Resultado do build

```text
Route (app)                              Size     First Load JS
┌ ○ /                                    6.46 kB        93.7 kB
├ ○ /_not-found                          873 B          88.1 kB
├ ○ /icon.svg                            0 B                0 B
├ ○ /robots.txt                          0 B                0 B
└ ○ /sitemap.xml                         0 B                0 B
+ First Load JS shared by all            87.2 kB
```

Todas as rotas foram classificadas como estáticas. O build emitiu duas vezes:

```text
[webpack.cache.PackFileCacheStrategy] Caching failed for pack:
Error: Unable to snapshot resolve dependencies
```

O warning não impediu compilação, verificação de tipos, geração estática ou exit code 0. Deve ser tratado como problema de cache/ambiente até haver reprodução fora desta máquina.

## Dependências e segurança

`npm audit` reportou 5 vulnerabilidades:

| Dependência afetada | Direta | Severidade agregada | Natureza resumida | Correção indicada pelo npm |
| --- | --- | --- | --- | --- |
| `next@14.2.35` | Sim | Alta | Advisories de DoS/RSC, cache, image optimizer, request smuggling, SSRF e XSS em faixas que incluem esta versão | Upgrade major para Next 16.2.10 |
| `eslint-config-next@14.2.35` | Sim | Alta | Cadeia por `@next/eslint-plugin-next`/`glob` | Upgrade major para 16.2.10 |
| `@next/eslint-plugin-next` | Não | Alta | Afetado via `glob` | Via upgrade de `eslint-config-next` |
| `glob@10.3.10` | Não | Alta | Command injection na CLI para faixa `<10.5.0` | Via upgrade major indicado |
| `postcss` interno do Next | Não | Moderada | Escape insuficiente ao serializar `</style>` | Via upgrade do Next |

Nenhuma dependência foi atualizada nesta sprint. Como a correção automática proposta é major, deve ser planejada e testada separadamente.

Warnings de instalação registrados: `inflight`, `@humanwhocodes/config-array`, `@humanwhocodes/object-schema`, `rimraf@3`, `glob@7/10` e `eslint@8` deprecated.

## Verificação de runtime

- URL local: `http://127.0.0.1:3000/`.
- Status: HTTP 200.
- Título: `Payload Journey LAB — Siga o flow. Entenda o sistema.`
- Idioma do documento: `pt-BR`.
- Exceções JavaScript: nenhuma observada.
- Warnings/erros de hydration: nenhum observado.
- Console: somente a mensagem informativa de React DevTools esperada em desenvolvimento.
- CLS observado na janela de coleta: `0` em todas as larguras.
- Font Loading API: estado `loaded`; isso não confirma que Space Grotesk/Inter foram baixadas, pois não há fonte declarada no projeto.
- Imagem do header: carregada e completa.
- Imagem do footer: lazy; não estava carregada na primeira dobra e foi forçada pela rolagem antes da captura full-page.

## Matriz responsiva medida

| Largura × altura | Largura do DOM | Altura total | Overflow horizontal | Navegação | Menu mobile |
| --- | --- | --- | --- | --- | --- |
| 360×800 | 360 | 14.395 px | Não | Desktop oculta | Abriu; 7 links; `aria-expanded=true` |
| 390×844 | 390 | 13.852 px | Não | Desktop oculta | Abriu; 7 links; `aria-expanded=true` |
| 768×1024 | 768 | 10.377 px | Não | Desktop oculta | Abriu; 7 links; `aria-expanded=true` |
| 1024×768 | 1024 | 8.272 px | Não | Desktop visível | Não aplicável |
| 1280×800 | 1280 | 7.538 px | Não | Desktop visível | Não aplicável |
| 1440×900 | 1440 | 7.538 px | Não | Desktop visível | Não aplicável |

O breakpoint `lg` troca o menu exatamente em 1024 px. Os sete anchors do menu e todos os anchors repetidos no footer/CTAs possuem destino existente.

## Comportamento e interação

| Item | Resultado |
| --- | --- |
| Carregamento inicial | OK; conteúdo renderizado e hidratado |
| Menu desktop | Visível ≥1024 px; links por âncora |
| Menu mobile | Abre/fecha; 7 links; fecha ao escolher link |
| CTAs externos | Atributos de nova aba e segurança presentes |
| CTAs internos | Anchors válidos; “Explorar o estudo” aponta para a própria seção |
| Imagens | Logo sem deformação geométrica, mas recortado por `object-cover` conforme design atual |
| Vídeos | Nenhum embed; apenas links YouTube |
| Accordions | Não existem |
| Animações | Não existem animações contínuas; hover/transitions e smooth scroll; reduced motion configurado |
| Foco | Outline global e `focus-visible` nos buttons/links por CSS; ordem completa não foi auditada manualmente por teclado |
| Dependência de hover | Cards usam hover como realce, mas o conteúdo não depende do hover para ficar disponível |

## Observações visuais

- A homepage é muito longa no mobile: aproximadamente 14,4 mil px em 360 px.
- A hierarquia H1/H2/H3 permaneceu legível e sem corte nos seis viewports emulados.
- Os grids empilham corretamente em 360/390; em 768, vários grids passam a duas colunas; em 1440, métodos ocupam cinco colunas.
- Não foram observados cortes, sobreposição ou deformação de cards nas capturas.
- Header sticky mantém logo, nome truncável e botão mobile acessível em 360 px.
- A densidade do Study Case é alta no mobile por combinar narrativa, microfatos, terminal e tabela técnica.
- A página tem muitos textos mono com tamanhos calculados (`calc(... + 5px/10px)`), o que eleva densidade e altura; não foi classificado como bug nesta sprint.
- Não há conteúdo que dependa exclusivamente de hover.

## Baseline visual capturado

Primeira tela nas seis larguras:

- [360 px](baseline/viewport-360.png)
- [390 px](baseline/viewport-390.png)
- [768 px](baseline/viewport-768.png)
- [1024 px](baseline/viewport-1024.png)
- [1280 px](baseline/viewport-1280.png)
- [1440 px](baseline/viewport-1440.png)

Página completa:

- [Mobile 390 px](baseline/full-mobile-390.png)
- [Tablet 768 px](baseline/full-tablet-768.png)
- [Desktop 1440 px](baseline/full-desktop-1440.png)

As capturas finais foram produzidas via Chrome DevTools Protocol com device metrics exatos. Tentativas anteriores por `--window-size` foram descartadas porque o navegador impõe largura mínima de janela em desktop e pode recortar, em vez de emular, 360/390 px.

## Limitações da verificação

1. Não houve teste manual com leitor de tela ou tecnologias assistivas.
2. A navegação por teclado completa, trap/retorno de foco e fechamento do menu por Escape não foram automatizados.
3. CLS foi observado durante uma janela curta após o load; não substitui coleta de campo.
4. Não houve throttling de CPU/rede, Lighthouse ou perfil detalhado de performance.
5. Links externos foram verificados por HTTP sem autenticação; curso, cupom e identidade dos canais não foram validados por ação de usuário.
6. Google Analytics foi identificado no código, mas não se verificou o recebimento no painel.
7. O runtime validado foi desenvolvimento local; diferenças de variáveis/headers/configuração de produção não são reproduzíveis pelo repositório.
8. Mensagens do Edge headless sobre task provider/USB foram do ambiente do navegador e não apareceram no console da página.

