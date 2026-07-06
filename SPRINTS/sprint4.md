# Sprint 4 — Acabamento visual, responsividade, acessibilidade e assets de publicação

Implemente o quarto sprint do website institucional do Payload Journey LAB.

Os sprints anteriores estabeleceram:

* Sprint 1: arquitetura da homepage;
* Sprint 2: conteúdo institucional e narrativa semântica;
* Sprint 3: metadata, canonical, robots, sitemap e JSON-LD.

Neste Sprint 4, o objetivo é transformar a página em uma primeira versão visualmente estável, responsiva, acessível e pronta para publicação inicial.

O foco é acabamento, não reescrita editorial.

Não alterar a estratégia de conteúdo consolidada no Sprint 2.

Não alterar a estrutura de descoberta consolidada no Sprint 3, salvo para conectar assets reais criados neste sprint.

Não criar novas páginas institucionais.

Não fazer deploy, commit ou push sem autorização final.

---

# 0. Preparação da branch

Antes de implementar:

1. Atualize `main`:

```bash
git switch main
git pull --ff-only origin main
```

2. Confirme que `main` contém:

* Sprint 1;
* limpeza de `.next`;
* Sprint 2;
* Sprint 3.

3. Confirme que `.gitignore` contém:

```text
node_modules
.next/
*.tsbuildinfo
```

4. Confirme que o status está limpo:

```bash
git status --short
```

5. Crie a branch do sprint:

```bash
git switch -c sprint4
```

6. Não implemente nada até confirmar que a branch `sprint4` nasceu do `main` atualizado.

---

# 1. Objetivo do sprint

Ao final deste sprint, a homepage deve parecer uma primeira presença institucional real do Payload Journey LAB.

Ela deve transmitir:

* pesquisa aplicada;
* engenharia de software;
* investigação de sistemas;
* precisão;
* autoria intelectual;
* clareza pedagógica;
* sobriedade técnica.

A página não deve parecer:

* landing page comercial genérica;
* site de startup com excesso de efeitos;
* template visual aleatório;
* página acadêmica pesada demais;
* wireframe inacabado.

---

# 2. Escopo permitido

Este sprint pode modificar:

* estilos globais;
* tokens de design;
* componentes UI reutilizáveis;
* layout das seções;
* espaçamento;
* grids;
* responsividade;
* estados de foco;
* estados desativados;
* header mobile;
* footer;
* cards;
* botões;
* badges;
* diagramas existentes;
* assets mínimos de publicação;
* metadata apenas para conectar assets reais criados neste sprint.

Arquivos prováveis:

```text
app/globals.css
app/layout.tsx
app/page.tsx
app/icon.svg
app/opengraph-image.tsx
components/layout/SiteHeader.tsx
components/layout/SiteFooter.tsx
components/sections/*.tsx
components/ui/*.tsx
components/diagrams/*.tsx
config/site.ts
content/payload-journey-lab.ts
```

Essa lista é orientativa.

Não modifique todos esses arquivos se não for necessário.

---

# 3. Não fazer neste sprint

Não implementar:

* novas páginas de conteúdo;
* rota `/usmt`;
* rotas `/methods/...`;
* rota `/case-study/hora-city`;
* rota `/white-papers`;
* blog;
* CMS;
* analytics;
* cookies;
* banner de consentimento;
* newsletter;
* formulário funcional;
* backend;
* autenticação;
* banco de dados;
* busca interna;
* redirects;
* internacionalização;
* dark mode;
* animações complexas;
* dependências novas;
* imagens remotas;
* banco de imagens;
* dados fictícios;
* parceiros fictícios;
* email fictício;
* links sociais fictícios;
* legal pages fictícias;
* deploy;
* commit;
* push.

Não alterar a política do `robots.ts`.

Não alterar o sitemap para incluir páginas futuras.

Não adicionar dados estruturados falsos.

---

# 4. Direção visual

A estética deve permanecer:

```text
editorial
científica
tecnológica
minimalista
técnica
clara
```

Use:

* fundo branco;
* texto preto ou quase preto;
* cinzas suaves;
* bordas finas;
* muito espaço em branco;
* grid consistente;
* cartões retangulares simples;
* tipografia sans-serif;
* ícones lineares;
* diagramas abstratos em HTML/SVG/CSS;
* uma cor de acento usada com moderação.

Evite:

* gradientes fortes;
* sombras pesadas;
* glassmorphism;
* efeitos neon;
* excesso de ícones;
* animações chamativas;
* fundos escuros dominantes;
* imagens genéricas;
* blobs decorativos;
* excesso de cards competindo entre si.

O visual deve parecer um artefato de engenharia e pesquisa aplicada.

---

# 5. Sistema visual mínimo

Revise e consolide os seguintes elementos.

## Cores

Defina ou organize tokens para:

```text
paper / background
ink / text primary
muted / text secondary
line / border
soft / subtle background
accent / cor principal
accent-muted / fundo suave da cor principal
danger / usado apenas se já existir necessidade real
```

A cor de acento deve ser usada com moderação:

* botões principais;
* pequenos badges;
* linhas de diagrama;
* detalhes de foco;
* elementos de destaque.

Não transformar toda a página em uma página colorida.

## Tipografia

Garantir:

* `h1` forte e claro;
* `h2` consistente;
* `h3` legível;
* parágrafos com largura confortável;
* line-height adequado;
* textos pequenos ainda legíveis.

Não adicionar fontes externas novas neste sprint.

Se o projeto já usa uma fonte local ou padrão, preserve.

## Espaçamento

Consolidar:

* padding vertical consistente entre seções;
* largura máxima da página;
* espaçamento interno de cards;
* espaçamento entre título, subtítulo e conteúdo;
* grid com gaps previsíveis.

Evitar seções excessivamente coladas ou vazias sem intenção.

## Cards

Padronizar:

* borda fina;
* fundo branco ou cinza muito suave;
* cantos discretos;
* sem sombra pesada;
* estados hover discretos somente se já fizer sentido;
* mesma lógica visual para pilares, métodos, conceitos, white papers e caminhos de formação.

## Botões

Garantir variações claras:

* primário;
* secundário;
* futuro/desativado.

Botões futuros ou desativados devem ser visualmente reconhecíveis e acessíveis.

Eles não devem parecer links funcionais.

---

# 6. Header e navegação

Revise o `SiteHeader`.

Requisitos:

* header limpo e estável;
* navegação por âncoras funcionando;
* comportamento sticky se já existir ou se puder ser mantido sem complexidade;
* boa leitura no desktop;
* menu mobile acessível;
* foco visível nos links;
* área de toque confortável em mobile;
* não quebrar em larguras intermediárias;
* não cobrir conteúdo ao navegar por âncoras.

Se necessário, adicione `scroll-margin-top` nas seções para compensar o header sticky.

Não adicionar navegação para rotas futuras inexistentes.

---

# 7. Hero

Refinar o Hero sem alterar sua mensagem principal.

Deve comunicar imediatamente:

```text
PAYLOAD
JOURNEY LAB

Siga o flow. Entenda o sistema.
```

Objetivos:

* o título deve ter presença;
* a descrição deve ser legível;
* os CTAs devem ser claros;
* o painel visual abstrato deve parecer técnico e não decorativo demais;
* o Hero deve funcionar bem em mobile.

O visual do Hero pode sugerir:

* payload;
* camadas;
* checkpoints;
* rota;
* origem;
* fluxo.

Mas tudo deve ser minimalista.

Não incluir imagem externa.

Não transformar o Hero em uma ilustração pesada.

---

# 8. Seções da homepage

Preserve a ordem consolidada:

```text
Hero
O LAB
Métodos
Ecossistema conceitual
Case Study HORA.city
Formação e colaboração
White Papers
Sobre o LAB
Contato
```

Ajuste visualmente cada seção para que:

* a responsabilidade narrativa fique clara;
* não haja excesso de densidade visual;
* os cards tenham hierarquia;
* o Case Study se destaque sem parecer publicidade;
* White Papers pareçam publicações futuras, não conteúdo já lançado;
* Contato em configuração não pareça erro.

Não reescrever o conteúdo aprovado, exceto microcopy necessária para acessibilidade ou clareza visual.

---

# 9. Diagramas e artefatos visuais

Revise diagramas existentes.

Objetivos:

* não causar overflow horizontal;
* manter legibilidade em mobile;
* representar relações de forma simples;
* possuir texto de apoio próximo;
* não depender apenas de cor para compreensão;
* não introduzir animações obrigatórias.

Se existir um fluxo visual, deve haver texto visível equivalente.

Por exemplo, se houver:

```text
Track Mode → Reverse Payload Journey → Track to Origin → Evidência → Restauração
```

Esse fluxo também deve existir como texto HTML legível.

Não criar diagramas complexos novos neste sprint.

Apenas melhorar os existentes se necessário.

---

# 10. Responsividade

Testar e ajustar para:

* mobile pequeno;
* mobile grande;
* tablet;
* desktop;
* tela larga.

Critérios:

## Mobile

* menu não deve quebrar;
* cards devem virar uma coluna;
* textos não devem ficar estreitos demais;
* botões devem ser fáceis de tocar;
* hero não deve causar overflow;
* diagramas não devem passar da viewport;
* footer deve permanecer legível;
* nenhum texto deve ficar cortado.

## Tablet

* grids devem ter 2 colunas quando fizer sentido;
* espaçamento deve ser confortável;
* header não deve ficar apertado.

## Desktop

* largura máxima consistente;
* seções com bom ritmo;
* hero equilibrado;
* cards alinhados;
* footer organizado.

## Telas largas

* conteúdo não deve se espalhar demais;
* manter max-width institucional;
* não deixar linhas de texto excessivamente longas.

---

# 11. Acessibilidade

Revise a homepage com atenção.

Requisitos:

* exatamente um `h1`;
* `h2` para títulos de seções;
* `h3` para cards e itens;
* `header`, `nav`, `main`, `section`, `footer` semânticos;
* foco visível em links e botões;
* navegação por teclado;
* botões desativados com `aria-disabled` quando apropriado;
* links reais como `<a>`;
* ações desativadas não devem ser links falsos;
* contraste suficiente;
* ícones decorativos com `aria-hidden` quando apropriado;
* botões de menu mobile com `aria-label`, `aria-expanded`, `aria-controls`;
* respeitar `prefers-reduced-motion` caso existam animações;
* não depender só de cor para indicar estado;
* textos clicáveis com tamanho adequado.

Não adicionar atributos ARIA desnecessários.

Usar HTML nativo sempre que possível.

---

# 12. AI-friendly e SEO preservation

Não desfazer Sprint 3.

Confirmar que continuam corretos:

* `metadataBase`;
* canonical;
* Open Graph;
* Twitter metadata;
* robots;
* sitemap;
* JSON-LD;
* idioma `pt-BR`;
* conteúdo essencial no HTML;
* sem `href="#"`;
* sem `mailto` placeholder;
* sem `payloadjourneylab.example`;
* sem `localhost` em HTML de produção.

Se este sprint criar assets reais de marca, pode conectar esses assets à metadata.

Mas não inventar dados institucionais.

---

# 13. Assets mínimos de publicação

Este sprint deve criar assets mínimos somente se puderem ser produzidos de forma honesta, simples e institucional.

## Favicon / icon

Criar um ícone mínimo oficial inicial para o LAB.

Preferência:

```text
app/icon.svg
```

ou a convenção equivalente do Next.js já usada no projeto.

Direção:

* fundo branco ou transparente;
* símbolo geométrico simples;
* referência abstrata a payload, rota, checkpoint ou camadas;
* sem ilustração complexa;
* sem imagem externa;
* sem marca de terceiros;
* legível em tamanho pequeno.

Se o projeto já possui símbolo, reutilizar.

Se não possui, criar um placeholder institucional minimalista, mas tratá-lo como asset oficial inicial, não como imagem genérica.

## Open Graph image

Criar uma imagem social institucional mínima, se viável sem dependências novas.

Opção preferida em Next App Router:

```text
app/opengraph-image.tsx
```

Usar `ImageResponse` se for compatível com a versão instalada.

A imagem deve ter:

```text
1200 x 630
```

Conteúdo sugerido:

```text
Payload Journey LAB
Siga o flow. Entenda o sistema.
Software System Investigation
```

Visual:

* fundo claro;
* texto escuro;
* linhas finas;
* pequenos nós/checkpoints;
* sem foto;
* sem banco de imagem;
* sem claims exagerados.

Se `ImageResponse` gerar complexidade ou conflito, não insistir.

Alternativa aceitável:

* criar apenas favicon neste sprint;
* registrar OG image como pendência.

Não adicionar imagem social se ela for tecnicamente frágil ou visualmente ruim.

## Metadata de assets

Se uma imagem OG real for criada e validada:

* conectar no metadata;
* adicionar `alt`;
* usar URL correta resolvida por `metadataBase`;
* preservar Twitter card coerente.

Se não for criada:

* manter Open Graph sem imagem;
* reportar pendência.

---

# 14. Performance

Não introduzir dependências.

Não importar bibliotecas visuais pesadas.

Evitar Client Components desnecessários.

Evitar JavaScript para efeitos puramente visuais.

Preferir CSS, HTML e SVG leves.

Garantir que assets sejam pequenos.

Não adicionar imagens grandes sem compressão.

---

# 15. Validação automática

Executar:

```bash
npm run lint
```

Executar:

```bash
npx tsc --noEmit
```

Executar:

```bash
npm run build
```

Corrigir apenas problemas relacionados ao Sprint 4.

Não alterar problemas antigos fora do escopo.

---

# 16. Validação local

Quando viável, executar o site localmente e revisar:

```text
/
robots.txt
sitemap.xml
```

Verificar no HTML:

* title;
* meta description;
* canonical;
* Open Graph;
* Twitter metadata;
* JSON-LD;
* favicon/icon se criado;
* imagem OG se criada;
* ausência de `localhost`;
* ausência de `payloadjourneylab.example`;
* ausência de `href="#"`;
* ausência de `mailto:` placeholder.

Testar visualmente:

* mobile;
* tablet;
* desktop;
* tela larga.

Testar teclado:

* tab navigation;
* foco visível;
* menu mobile;
* CTAs desativados;
* links internos.

---

# 17. Git hygiene

Antes de entregar o relatório, confirme:

```bash
git status --short
```

Não devem aparecer:

* `.next`;
* `tsconfig.tsbuildinfo`;
* `node_modules`.

Se aparecerem apenas como ignorados, está correto.

Não incluir arquivos gerados indevidos.

Não incluir screenshots temporários.

Não incluir arquivos de editor.

Não incluir assets experimentais rejeitados.

---

# 18. Critérios de aceitação

Considere o Sprint 4 concluído somente se:

1. a página parecer institucional e estável;
2. a identidade visual estiver mais consistente;
3. não houver redesign exagerado;
4. a homepage continuar na mesma ordem;
5. o conteúdo do Sprint 2 estiver preservado;
6. metadata e JSON-LD do Sprint 3 continuarem válidos;
7. mobile não apresentar overflow horizontal;
8. desktop estiver visualmente equilibrado;
9. header funcionar em mobile e desktop;
10. foco de teclado estiver visível;
11. CTAs futuros continuarem acessíveis e não funcionais;
12. não houver links falsos;
13. não houver email fictício;
14. não houver dados institucionais inventados;
15. `robots.txt` continuar correto;
16. `sitemap.xml` continuar com apenas a homepage;
17. favicon ou icon inicial tiver sido criado, se viável;
18. imagem OG tiver sido criada apenas se tecnicamente sólida;
19. lint passar;
20. TypeScript passar;
21. build passar;
22. `.next` e `tsconfig.tsbuildinfo` permanecerem fora do Git;
23. não houver novas dependências;
24. não houver deploy;
25. não houver commit ou push sem autorização.

---

# 19. Relatório final

Ao concluir, informe:

1. branch utilizada;
2. arquivos criados;
3. arquivos modificados;
4. principais melhorias visuais;
5. melhorias de responsividade;
6. melhorias de acessibilidade;
7. assets criados;
8. assets deliberadamente não criados e motivo;
9. mudanças feitas na metadata, se houver;
10. confirmação de que Sprint 2 content foi preservado;
11. confirmação de que Sprint 3 metadata/discovery foi preservado;
12. resultado de lint;
13. resultado de TypeScript;
14. resultado de build;
15. resultado da validação local;
16. resultado da revisão mobile/tablet/desktop;
17. resultado da revisão por teclado;
18. status do Git;
19. arquivos que devem ser revisados antes do commit;
20. pendências para deploy.

Não faça commit.

Não faça push.

Não faça deploy.
