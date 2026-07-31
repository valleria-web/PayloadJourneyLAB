# Plano de implementação — LabLog, YouTube e documentação interna

## Origem e estado

Este plano responde aos requisitos registrados em `files-structure.md`.

A auditoria foi concluída sem alterações no código da aplicação. A implementação deve permanecer pausada até aprovação explícita.

## Diagnóstico atual

- A navegação principal já não apresenta um item direto para o LabLog.
- O rodapé ainda contém um link para `/lablog`.
- A homepage, a página de casos e conteúdos auxiliares ainda possuem CTAs para `/lablog`.
- A rota `/lablog` está pública, indexável e incluída automaticamente no sitemap.
- Existem dois destinos concorrentes de YouTube no código:
  - `https://www.youtube.com/@PayloadJourneyLAB`
  - `https://www.youtube.com/@Lab-Log`
- Os testes atuais exigem que o YouTube permaneça oculto porque o destino está marcado como `unresolved`.
- A página `/protocol` afirma incorretamente que vários documentos do protocolo não foram localizados.
- A página institucional também contém afirmações de que o conjunto documental canônico não foi localizado.
- O JSON-LD não possui um `sameAs` para o canal oficial e ainda não representa o LAB com um nó institucional próprio.
- Não existe atualmente uma seção de canais ativa na página institucional. O grupo `Canais` do rodapé é a superfície pública existente mais adequada.

## Arquivos auditados e alterações propostas

### Configuração, tipos e dados compartilhados

#### `config/site.ts` — aproximadamente linhas 1–21

Comportamento atual:

- Contém apenas a configuração institucional geral.
- Não possui feature flags nem a configuração canônica dos canais.

Alteração proposta:

- Adicionar uma configuração central:

```ts
featureFlags: {
  labLogPublic: false;
}
```

- Adicionar o canal oficial:

```ts
channels: {
  youtube: "https://www.youtube.com/@PayloadJourneyLAB";
}
```

#### `types/content.ts` — aproximadamente linhas 29–43, 213–230, 524–542 e 741–797

Comportamento atual:

- Os tipos de YouTube suportam dois destinos e um estado de resolução.
- Os artefatos do protocolo utilizam estados como `Não localizado`.
- Links do rodapé não possuem um campo explícito para rótulo acessível.

Alteração proposta:

- Simplificar os tipos para um único canal canônico.
- Permitir `ariaLabel` nos links externos.
- Adicionar um modelo que separe existência, validação, visibilidade e possibilidade de download:

```ts
type ProtocolDocument = {
  title: string;
  existence: "planned" | "produced";
  validation:
    | "not-started"
    | "internal-validation"
    | "applied-validation"
    | "validated";
  visibility: "public" | "restricted";
  downloadable: boolean;
};
```

#### `content/site.ts` — aproximadamente linhas 48–64

Comportamento atual:

- Configura `@PayloadJourneyLAB` e `@Lab-Log`.
- Define o canal como `unresolved`.

Alteração proposta:

- Utilizar exclusivamente a URL canônica definida em `siteConfig`.
- Remover o canal alternativo e o estado editorial ambíguo.

#### `content/site.ts` — aproximadamente linhas 242–330

Comportamento atual:

- O rodapé apresenta um link para o LabLog.
- O grupo `Canais` apresenta somente a Udemy.
- O canal do YouTube permanece oculto.

Alteração proposta:

- Excluir o link do LabLog enquanto `labLogPublic` for `false`.
- Adicionar `YouTube · LAB Log` ao grupo `Canais`.
- Configurar URL canônica, link externo seguro e `aria-label` descritivo.
- Atualizar `externalChannels` para apresentar o YouTube como canal confirmado.

#### `content/site.ts` — aproximadamente linhas 332–386

Comportamento atual:

- A continuação da página `/cases` direciona para `/lablog`.

Alteração proposta:

- Construir continuações e CTAs condicionados pela feature flag.
- Preservar a continuação própria da rota `/lablog` para ativação futura.

### Descoberta, rota e dados estruturados

#### `content/routes.ts` — aproximadamente linhas 170–240

Comportamento atual:

- A homepage afirma que existem registros públicos no LabLog.
- A homepage oferece CTAs para `/lablog`.

Alteração proposta:

- Remover as afirmações e os CTAs públicos enquanto a flag estiver desligada.
- Manter formação, casos e YouTube como materiais públicos disponíveis.
- Preservar a definição editorial da rota do LabLog.

#### `content/routes.ts` — aproximadamente linhas 258–261

Comportamento atual:

- Todas as rotas temáticas entram em `publicRoutePaths`, incluindo `/lablog`.

Alteração proposta:

- Filtrar `/lablog` com base em `labLogPublic`.

#### `app/lablog/page.tsx` — aproximadamente linhas 1–24

Comportamento atual:

- Renderiza normalmente e publica metadata indexável.

Alteração proposta:

- Executar `notFound()` quando `labLogPublic` for `false`.
- Confiar no comportamento do `notFound()` do Next.js, que retorna 404 e injeta `noindex`.
- Preservar toda a página e seus componentes para ativação futura.
- Não redirecionar para o YouTube.

#### `app/robots.ts` — aproximadamente linhas 4–27

Comportamento atual:

- Permite rastreamento geral.

Alteração proposta:

- Não modificar.
- Não bloquear `/lablog`, permitindo que crawlers recebam o 404 e o `noindex` gerados por `notFound()`.

#### `app/sitemap.ts` — aproximadamente linhas 1–9

Comportamento atual:

- Publica todas as entradas recebidas de `publicRoutePaths`.

Alteração proposta:

- Continuar consumindo a lista central, que passará a excluir `/lablog`.
- Evitar uma segunda regra divergente dentro do sitemap.

#### `lib/metadata.ts` — aproximadamente linhas 4–49

Comportamento atual:

- Produz a metadata comum das páginas públicas.

Alteração proposta:

- Não modificar apenas para o LabLog.
- O `noindex` necessário será produzido pelo `notFound()`; uma extensão desse helper só deverá ser considerada se surgir outra necessidade real e compartilhada.

#### `lib/structured-data.ts` — aproximadamente linhas 10–42

Comportamento atual:

- Os nós `WebSite` e `Person` não informam canais oficiais.
- Não existe atualmente um nó `Organization` canônico.

Alteração proposta:

- Primeiro verificar qual entidade existente funciona como identidade canônica do LAB.
- Incluir somente o canal oficial em `sameAs` na entidade institucional adequada.
- Criar um nó `Organization` apenas se ele não duplicar ou fragmentar a identidade semântica existente.
- Se criado, relacionar o `WebSite`, a fundadora e a organização de forma coerente.

### Navegação e superfícies públicas

#### `components/layout/SiteHeader.tsx` e `components/layout/MobileNavigation.tsx`

Comportamento atual:

- Ambos consomem `siteNavigation`.
- A navegação principal já não contém um item direto para o LabLog.

Alteração proposta:

- Nenhuma alteração visual obrigatória.
- Confirmar por teste que uma alteração futura nos dados não exponha o LabLog com a flag desativada.

#### `components/layout/SiteFooter.tsx` — aproximadamente linhas 29–48

Comportamento atual:

- Links externos recebem `target="_blank"` e `rel="noopener noreferrer"`.
- Não há suporte explícito a `aria-label` configurável.

Alteração proposta:

- Renderizar o `aria-label` do canal oficial.
- Preservar as proteções já existentes para links externos.

#### `components/sections/HomePathwaysSections.tsx` — aproximadamente linhas 9–44 e 81–105

Comportamento atual:

- Renderiza CTAs do LabLog provenientes de `homepageSummaries`.

Alteração proposta:

- Consumir apenas itens públicos já filtrados pela feature flag.
- Evitar elementos vazios quando o CTA secundário não existir.

### Documentação interna e protocolo

#### `content/methods.ts` — aproximadamente linhas 243–264

Comportamento atual:

- `Documentos de investigação` aparece como `Não localizado`.

Alteração proposta:

- Informar que o conjunto foi produzido.
- Apresentar validação interna, acesso restrito e indisponibilidade para download público.

#### `content/methods.ts` — aproximadamente linhas 516–576

Comportamento atual:

- O inventário chama documentos produzidos de inexistentes ou não localizados.

Alteração proposta:

- Substituir o inventário pelo conjunto documental explícito.
- Organizar os documentos em:
  - Arquitetura e protocolos;
  - Registros e evidências;
  - Modelagem e alinhamento.
- Atribuir a existência, a visibilidade e a possibilidade de download comuns:

```ts
{
  existence: "produced",
  visibility: "restricted",
  downloadable: false
}
```

Os requisitos enumeram expressamente 12 documentos. A implementação utilizará exatamente esses 12 títulos, sem inventar um documento adicional.

O estágio de validação deverá ser definido conscientemente por documento. Na ausência de evidência que sustente diferenças individuais, a interface comunicará o estado agregado do conjunto — sob aplicação e validação controladas — sem afirmar que cada documento está necessariamente no mesmo estágio.

Princípios editoriais:

```text
Título público ≠ conteúdo público
Documento produzido ≠ documento disponível
```

#### `components/sections/InvestigationCycleSection.tsx` — aproximadamente linhas 54–70

Comportamento atual:

- Mostra apenas o status e uma evidência textual de cada artefato.

Alteração proposta:

- Renderizar:

```text
Produzido · Acesso restrito
```

- Não criar links, botões de download, URLs públicas ou placeholders.
- Apresentar o estágio de validação individual somente quando houver fonte suficiente para sustentá-lo.
- Adicionar a mensagem institucional:

```text
O conjunto documental do Protocolo Oficial do Trace Engineer foi produzido e encontra-se sob aplicação e validação controladas. O acesso está restrito aos grupos de formação, pilotos e investigadores autorizados. Os materiais não estão disponíveis para download público.
```

#### `components/sections/MethodsSection.tsx` — aproximadamente linhas 90–104

Comportamento atual:

- Repete o estado `Não localizado`.

Alteração proposta:

- Apresentar o estado restrito correto.
- Explicar a diferença entre documentos internos e publicações.

#### `content/payload-journey-lab.ts` — aproximadamente linhas 824–909

Comportamento atual:

- A página institucional afirma que o conjunto canônico não foi localizado.

Alteração proposta:

- Informar que o conjunto foi produzido e está em validação interna e aplicação controlada.
- Preservar as ressalvas legítimas sobre eficácia, transferibilidade e validação em casos reais.

#### `content/payload-journey-lab.ts` — aproximadamente linhas 1222–1322

Comportamento atual:

- Mistura vídeos, LabLogs, materiais e canais ainda em configuração.

Alteração proposta:

- Separar material público de material interno.
- Reconhecer o YouTube oficial.
- Não apresentar LabLog como publicação disponível enquanto estiver oculto.

### Casos e separação conceitual

#### `content/cases.ts` — aproximadamente linhas 132–229

Comportamento atual:

- Possui CTAs para o LabLog.
- O estado de zero entradas pode ser interpretado como ausência documental.

Alteração proposta:

- Condicionar os links pela feature flag.
- Explicar que a ausência de entradas públicas no LabLog não significa ausência de documentação interna.
- Preservar o conteúdo editorial futuro da página.

#### `components/sections/CasesPageSections.tsx` — aproximadamente linhas 150–155

Comportamento atual:

- Declara artefatos técnicos como não localizados.

Alteração proposta:

- Distinguir templates e documentos internos produzidos de evidências específicas do caso que ainda não foram publicadas ou confirmadas publicamente.
- Não afirmar que uma investigação em curso já é um Case File.

#### `components/sections/LabLogPageSections.tsx` — aproximadamente linhas 30–50

Comportamento atual:

- O texto de zero entradas pode sugerir ausência documental.

Alteração proposta:

- Declarar explicitamente que documentos internos não são entradas do LabLog.
- Preservar o componente para ativação futura.

#### `content/hora-city.ts` — aproximadamente linhas 128–211

Comportamento atual:

- Contém ações futuras para `/lablog`.

Alteração proposta:

- Preservar essas definições futuras.
- Impedir que sejam incluídas em qualquer ação pública enquanto a flag estiver desligada.

#### `components/sections/LabLogSection.tsx`

Comportamento atual:

- Componente preservado com CTA direto para `/lablog`.

Alteração proposta:

- Preservar o componente.
- Garantir que nenhum ponto de composição o renderize enquanto a flag estiver desligada.

#### `components/sections/ContactSection.tsx`

Comportamento atual:

- Seção não utilizada com canais desativados.

Alteração proposta:

- Não publicar uma nova seção institucional apenas para atender ao requisito.
- Se a seção voltar a ser utilizada, fazer com que o YouTube consuma o canal canônico.

## Arquitetura editorial resultante

### Material público

- Páginas institucionais e metodológicas;
- formação disponível na Udemy;
- canal oficial do YouTube;
- casos, papers, notas e investigações que forem concluídos e autorizados;
- futuras entradas publicadas do LabLog.

### Material interno e restrito

- documentos do Protocolo Oficial do Trace Engineer;
- templates operacionais;
- registros de evidência;
- documentos de investigações em andamento;
- artefatos de pilotos;
- materiais de grupos de formação;
- materiais destinados a investigadores autorizados.

Fluxo editorial:

```text
Documentação interna
→ sustenta a investigação

Investigação concluída e autorizada
→ transforma-se em Case File ou publicação

Case File ou publicação
→ pode aparecer no LabLog
```

## Critério objetivo para ativação futura do LabLog

`labLogPublic` somente poderá ser alterado para `true` quando existir pelo menos um Case File ou uma publicação que:

- esteja concluído ou publicado com evidência parcial explicitamente declarada;
- tenha autorização para exposição pública;
- possua título e data;
- apresente uma pergunta investigativa;
- identifique o sistema e o flow;
- inclua um resumo das evidências;
- declare seus limites;
- possua uma URL canônica própria.

Um vídeo no canal oficial poderá acompanhar a entrada, mas não será condição obrigatória. Um Case File textual, paper ou nota metodológica que satisfaça os critérios também poderá inaugurar o LabLog.

## Atualização das verificações

Os seguintes scripts possuem expectativas incompatíveis com os novos requisitos:

- `scripts/verify-homepage.mjs`
- `scripts/verify-navigation-discovery.mjs`
- `scripts/verify-refactor-v3.mjs`
- `scripts/verify-cases-evidence.mjs`
- `scripts/verify-ai-readiness.mjs`
- `scripts/verify-learn.mjs`
- `scripts/validate-navigation-responsive.mjs`
- `scripts/verify-design-foundation.mjs`
- `scripts/verify-cycle-closure.mjs`
- `scripts/verify-method-practice.mjs`
- `scripts/verify-lab.mjs`

As verificações deverão confirmar:

1. LabLog ausente da navegação, do rodapé e dos CTAs.
2. `/lablog` retorna uma página não publicada/404.
3. `/lablog` não aparece no sitemap e o acesso direto recebe 404 com `noindex`.
4. O código e os componentes do LabLog continuam preservados.
5. `@Lab-Log` não aparece no código público nem na saída renderizada.
6. O canal canônico aparece no rodapé com segurança e acessibilidade.
7. O JSON-LD contém o `sameAs` correto sem duplicar a identidade institucional.
8. Os documentos aparecem como produzidos e restritos; o estágio de validação apresentado é sustentado pelos dados.
9. Nenhum documento restrito possui link ou download.
10. Material público e interno aparecem separados.
11. Não existem links internos quebrados.

## Sequência de implementação

1. Adicionar a feature flag e a configuração canônica do YouTube.
2. Atualizar tipos compartilhados.
3. Ocultar LabLog das superfícies públicas.
4. Aplicar `notFound()` e excluir a rota do sitemap, sem bloqueio específico em `robots.ts` ou extensão desnecessária de metadata.
5. Publicar o canal oficial no rodapé e no JSON-LD.
6. Modelar o inventário documental restrito.
7. Atualizar as páginas de protocolo, métodos, LAB e casos.
8. Corrigir a separação conceitual entre documentação interna, investigação e publicação.
9. Atualizar os scripts de verificação.
10. Executar lint, build e todas as verificações existentes.

## Estado de aprovação

O plano foi aprovado conceitualmente, condicionado à incorporação dos microajustes registrados nesta revisão. As correções foram incorporadas; a implementação permanece como a próxima etapa autorizável.
