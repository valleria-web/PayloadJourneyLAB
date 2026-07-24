Preciso ajustar o site oficial do Payload Journey LAB para refletir corretamente o estado atual do LabLog, do canal oficial do YouTube e do conjunto documental interno do Protocolo Oficial do Trace Engineer.

Antes de alterar qualquer código:

1. Localize os arquivos, componentes, rotas, configurações e textos relacionados a:

   * `/lablog`
   * navegação principal
   * rodapé
   * links para YouTube
   * sitemap
   * metadata e JSON-LD
   * seções que apresentam documentos, publicações, investigações ou materiais produzidos
   * textos que afirmem que documentos ou entradas não existem

2. Informe:

   * os arquivos encontrados;
   * as linhas aproximadas que serão modificadas;
   * o comportamento atual;
   * a alteração proposta em cada arquivo.

3. Aguarde minha aprovação antes de implementar.

## Objetivo 1 — Ocultar temporariamente o LabLog

A página LabLog ainda não possui Case Files, investigações ou entradas públicas suficientes para publicação.

O LabLog deve ficar temporariamente oculto, mas seu código e estrutura devem ser preservados para ativação futura.

Implemente preferencialmente uma feature flag central:

```ts
labLogPublic: false
```

Enquanto essa flag estiver desativada:

* remover o link LabLog da navegação principal;
* remover o link LabLog do rodapé;
* remover cards, CTAs e links internos que direcionem para `/lablog`;
* excluir `/lablog` do sitemap público;
* impedir indexação da rota;
* ao acessar diretamente `/lablog`, retornar `notFound()` ou comportamento equivalente a uma página não publicada;
* não apagar os componentes, conteúdos ou estruturas existentes do LabLog;
* não redirecionar `/lablog` para o YouTube.

O LabLog será ativado futuramente quando existir pelo menos uma investigação pública estruturada.

Quando ativado, o LabLog deverá representar:

* Case Files publicados;
* investigações públicas;
* papers e notas metodológicas publicadas;
* registros de experimentos;
* conteúdos relacionados ao canal oficial;
* evidências que possam ser apresentadas publicamente.

O LabLog não deve representar documentos internos de trabalho nem materiais restritos do protocolo.

## Objetivo 2 — Definir o canal oficial do YouTube

O único canal oficial do Payload Journey LAB deve ser:

```text
https://www.youtube.com/@PayloadJourneyLAB
```

Crie ou atualize uma configuração canônica central para esse endereço, evitando URLs duplicadas ou hardcoded em vários componentes.

O canal oficial deve aparecer publicamente:

* no rodapé, dentro da área de canais ou ecossistema;
* em qualquer seção existente que apresente os canais oficiais do LAB;
* na página institucional, caso já exista uma seção de canais;
* no JSON-LD ou campo `sameAs`, caso o site utilize dados estruturados de Organization, Person ou EducationalOrganization.

Utilizar um texto visível coerente, por exemplo:

```text
YouTube · LAB Log
```

ou:

```text
Canal oficial no YouTube
```

O link externo deve:

* utilizar a URL exata fornecida;
* abrir de forma segura;
* incluir `rel="noopener noreferrer"` quando aplicável;
* possuir `aria-label` descritivo;
* não utilizar o canal alternativo `@Lab-Log`.

Pesquise no projeto por URLs antigas ou alternativas do YouTube e remova qualquer ambiguidade.

## Objetivo 3 — Corrigir o estado do conjunto documental

O site não deve afirmar que os documentos do Protocolo Oficial do Trace Engineer são inexistentes.

Os seguintes documentos já foram produzidos:

### Arquitetura e protocolos

* Arquitectura Oficial do Conjunto Documental
* Protocolo Oficial do Trace Engineer
* Protocolo Geral do Trace Engineer
* Protocolo Geral do Trace Engineer — HORA.city

### Registros e evidências

* Freeze Record
* Checkpoint Plan
* Trace Evidence Record
* Trace Evidence Package
* Detection Report

### Modelagem e alinhamento

* USMT Draft — template
* Operational Payload Path Draft — template
* USMT Evidence-Aligned

Esses documentos são materiais internos do LAB.

Eles não devem possuir:

* botão de download público;
* URL pública para arquivos;
* link direto para armazenamento;
* conteúdo integral exposto;
* indicação de acesso livre;
* afirmação de que estão disponíveis para qualquer visitante.

O estado público correto deve ser apresentado como:

```text
Produzido
Em validação interna
Acesso restrito
Não publicado para download público
```

Não utilizar apenas a palavra `Completo`, porque o conjunto documental permanece sujeito a validação, aplicação em casos reais e evolução metodológica.

## Objetivo 4 — Separar material público de material interno

Atualize a arquitetura editorial da página para distinguir claramente duas categorias.

### Material público

Pode incluir:

* páginas institucionais e metodológicas;
* formação disponível na Udemy;
* canal oficial do YouTube;
* futuros Case Files publicados;
* futuras investigações públicas;
* papers ou notas metodológicas publicadas;
* demonstrações e conteúdos autorizados.

### Material interno e restrito

Inclui:

* documentos do Protocolo Oficial do Trace Engineer;
* templates operacionais;
* registros de evidência;
* documentos de casos ainda em investigação;
* artefatos de pilotos;
* materiais destinados aos grupos da Udemy;
* materiais destinados a investigadores autorizados.

Adicionar uma mensagem pública semelhante a:

```text
O conjunto documental do Protocolo Oficial do Trace Engineer já foi produzido e encontra-se em validação interna e aplicação controlada. O acesso está atualmente restrito aos grupos de formação, pilotos e investigadores autorizados. Estes materiais não estão disponíveis para download público.
```

Ajuste o texto ao idioma e ao estilo editorial já utilizados no projeto, sem alterar o significado.

## Objetivo 5 — Estado dos documentos

Caso a página apresente documentos individualmente, utilizar uma estrutura de dados explícita, semelhante a:

```ts
type DocumentVisibility = "public" | "restricted";
type DocumentStatus =
  | "planned"
  | "produced"
  | "internal-validation"
  | "published";

type ProtocolDocument = {
  title: string;
  status: DocumentStatus;
  visibility: DocumentVisibility;
  downloadable: boolean;
};
```

Para os documentos já existentes, o estado inicial deverá ser equivalente a:

```ts
{
  status: "internal-validation",
  visibility: "restricted",
  downloadable: false
}
```

A interface poderá apresentar:

```text
Produzido · Validação interna · Acesso restrito
```

Não criar links falsos, placeholders de download ou botões desativados para documentos restritos.

## Objetivo 6 — Não misturar LabLog com documentação interna

Corrigir qualquer texto que sugira que:

* a ausência de entradas no LabLog significa ausência de documentação;
* os documentos internos deveriam aparecer como entradas do LabLog;
* um template interno equivale a uma publicação pública;
* uma investigação em curso já é um Case File publicado.

A separação conceitual deve permanecer:

```text
Documentação interna
→ sustenta a investigação

Investigação concluída e autorizada
→ transforma-se em Case File ou publicação

Case File ou publicação
→ pode aparecer no LabLog
```

## Critérios de aceitação

Após a implementação, verificar que:

1. LabLog não aparece na navegação.
2. LabLog não aparece no rodapé.
3. `/lablog` não é indexável nem listado no sitemap.
4. O código do LabLog continua preservado.
5. O canal oficial aponta exclusivamente para:
   `https://www.youtube.com/@PayloadJourneyLAB`
6. Nenhum canal alternativo é apresentado como oficial.
7. O site deixa de afirmar que o conjunto documental não existe.
8. Os documentos são apresentados como produzidos, internos e restritos.
9. Nenhum documento interno pode ser descarregado publicamente.
10. Material público e material interno aparecem claramente separados.
11. Não há links quebrados.
12. Build, lint e testes existentes continuam passando.

Depois da minha aprovação, implemente as alterações e apresente:

* resumo dos arquivos alterados;
* descrição objetiva das mudanças;
* resultado das verificações;
* eventuais inconsistências encontradas que não tenham sido modificadas.
