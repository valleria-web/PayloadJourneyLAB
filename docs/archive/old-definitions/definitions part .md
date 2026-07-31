Implemente uma actualização localizada nas **LAB Definitions** para introduzir formalmente o conceito de **Operação**.

Esta alteração deve fortalecer a conexão conceptual entre:

**intenção → operação → sistema → payload → caminho → decisão → resultado → tracing**

A implementação deve ser aditiva, mínima e rigorosa.

## Objectivo conceptual

A definição de Operação deve estabelecer que:

**A operação é a unidade causal completa que liga uma origem a um resultado dentro de um sistema de software.**

Ela é mais ampla do que:

* um payload;
* uma função;
* uma request;
* um evento;
* um command;
* uma chamada;
* ou um componente isolado.

Uma mesma operação pode atravessar diferentes componentes e produzir ou consumir vários payloads durante a sua execução.

O payload representa partes da operação.

O sistema fornece a estrutura, os componentes, as regras, o runtime e os mecanismos de transporte.

O caminho é a sequência percorrida.

A operação é a travessia concreta e causal que conecta origem e resultado.

## Regra crítica de preservação

Antes de alterar qualquer ficheiro:

1. inspeccione a implementação actual de `/lab-definitions`;
2. localize a fonte tipada das definições;
3. localize os componentes que renderizam o glossário;
4. localize os verificadores que esperam actualmente 20 definições;
5. identifique todas as referências editoriais à sequência entre intenção, payload, sistema, tracing e resultado.

Não eliminar nenhuma definição.

Não substituir a definição completa de outro conceito.

Não alterar a hero.

Não alterar o menu principal.

Não modificar a posição da secção LAB Definitions na homepage.

Não realizar redesign.

Não adicionar dependências.

Não converter Server Components em Client Components.

Não criar estado React.

Não alterar conteúdos não relacionados.

Não fazer refactorizações gerais.

A alteração deve limitar-se à nova definição e às microactualizações necessárias para integrá-la semanticamente ao glossário existente.

## Nome canónico

Manter obrigatoriamente:

**Trace Engineering**

Não introduzir `Tracing Engineering`.

Manter Trace Engineer como função e perfil investigativo em desenvolvimento, não como profissão consolidada.

## Localização editorial da nova definição

Adicionar **Operação** ao glossário completo da página `/lab-definitions`.

Posicionar a definição:

**depois de Expectativa e antes de Payload.**

A ordem conceptual deverá ficar equivalente a:

1. Intenção
2. Expectativa
3. Operação
4. Payload
5. Significado operacional
6. Payload Journey

Esta posição é obrigatória porque:

* a intenção explica por que algo começa;
* a expectativa descreve o comportamento desejado;
* a operação é a execução concreta iniciada;
* o payload representa e transporta partes dessa operação.

Não adicionar obrigatoriamente um novo card à homepage.

A homepage deve continuar breve e visualmente leve.

A definição completa de Operação deve permanecer na página interna, salvo se já existir um mecanismo editorial breve que permita mencionar Operação sem aumentar o número actual de cards ou alterar a composição visual.

## Definição oficial de Operação

Adicionar o seguinte conteúdo, adaptando apenas pontuação, ortografia e estrutura de dados ao padrão actual do projecto:

### Operação

Uma operação é uma execução concreta iniciada para realizar uma intenção, responder a um evento ou produzir um resultado dentro de um sistema de software.

A operação é a unidade causal completa que liga uma origem a um resultado.

Ela começa quando o sistema reconhece uma intenção, uma solicitação, um evento ou outra condição de activação.

Durante a sua execução, a operação pode atravessar componentes, interfaces, boundaries, runtimes, processos e mecanismos de transporte.

Ela pode mudar de representação, consultar estados, activar regras, produzir decisões, alterar dados e gerar efeitos observáveis.

A operação não é um único payload, uma única função, uma única request ou uma única chamada.

Funções e componentes executam partes de uma operação.

Requests, DTOs, commands, eventos, documentos persistidos, responses e projections podem representar diferentes momentos da mesma operação.

Uma mesma operação pode produzir e consumir vários payloads enquanto atravessa o sistema.

O que conecta essas representações é a continuidade causal, semântica e temporal da operação.

A intenção explica por que a operação começa.

O sistema fornece a estrutura, os componentes, as regras, o runtime e os mecanismos de execução e transporte.

O caminho indica a sequência percorrida.

O payload transporta uma representação operacional durante a travessia.

A decisão resulta da aplicação de regras aos dados e estados encontrados.

O resultado é o efeito ou estado produzido ao final da execução.

No modelo esperado do HORA.city, Send Heart é uma operação.

Ela começa com uma intenção de envio, recebe os dados necessários, atravessa os caminhos do sistema, consulta o estado actual, encontra uma decisão entre Create e Join e termina num resultado observável.

Create e Join devem permanecer identificados como modelo esperado ou exemplo conceptual.

Não apresentar essa sequência como descrição confirmada da implementação actual da codebase.

Compreender uma operação significa conseguir explicar:

* onde começou;
* o que a activou;
* qual identidade a acompanha;
* que payloads foram produzidos;
* por quais componentes passou;
* que boundaries atravessou;
* que mecanismos realizaram o transporte;
* que estados consultou;
* que regras activou;
* onde ocorreu a decisão;
* que estado foi alterado;
* e que resultado foi produzido.

## Distinções obrigatórias

A implementação deve preservar claramente as seguintes distinções.

### Operação não é payload

O payload é uma representação transportável utilizada durante a operação.

A operação é mais ampla e pode incluir vários payloads.

### Operação não é função

Uma função pode executar uma parte da operação.

A operação pode atravessar diversas funções, componentes, processos e contextos de execução.

### Operação não é request

Uma request é uma representação ou mecanismo de entrada utilizado em determinado trecho do caminho.

A operação pode começar antes da request e continuar depois da response.

### Operação não é evento

Um evento regista que algo aconteceu.

Uma operação é a execução causal completa iniciada ou influenciada por esse acontecimento.

### Operação não é command

Um command representa uma solicitação interpretada para executar uma acção.

A operação é a execução completa desencadeada ou coordenada a partir dessa solicitação.

### Operação não é decisão

A decisão acontece dentro da operação quando uma regra é aplicada a dados e estados concretos.

### Operação não é resultado

O resultado é o estado ou efeito produzido pela operação.

## Microactualizações semânticas necessárias

Não reescrever integralmente as definições existentes.

Faça apenas as alterações mínimas necessárias para que Operação não fique isolada.

### Definição de Sistema

Confirmar que a definição de Sistema deixa claro que o sistema torna operações executáveis.

A definição deve conter uma formulação equivalente a:

**O sistema é a estrutura completa que permite que operações sejam recebidas, executadas, transportadas, decididas, persistidas e apresentadas.**

Manter as referências existentes a:

* componentes;
* responsabilidades;
* estados;
* eventos;
* regras;
* contratos;
* interfaces;
* boundaries;
* runtime;
* comunicação;
* execução;
* transporte.

Não remover a afirmação de que o payload não se transporta sozinho.

### Definição de Payload

Confirmar que a definição de Payload contém uma formulação equivalente a:

**O payload é uma representação operacional produzida, transportada ou transformada durante a execução de uma operação.**

Adicionar ou preservar explicitamente:

**Uma mesma operação pode produzir e consumir diferentes payloads enquanto atravessa o sistema.**

Não definir payload como a operação completa.

### Definição de Caminho

Confirmar que Caminho permanece definido como:

**a sequência percorrida por uma operação dentro do sistema.**

Não definir Caminho como sinónimo de Operação.

### Definição de Payload Journey

Confirmar que Payload Journey acompanha uma operação através das suas sucessivas representações.

Usar uma formulação equivalente a:

**Payload Journey é a jornada observável de uma operação através dos payloads, componentes, boundaries, estados, regras e decisões que participam da sua execução.**

### Definição de Tracing

Confirmar que o objecto principal da investigação é uma operação concreta.

Usar uma formulação equivalente a:

**Tracing é o acto de seguir e reconstruir uma operação durante a sua execução.**

### Definição de Trace Engineering

Confirmar que Trace Engineering:

* conhece o percurso esperado;
* observa o percurso executado;
* correlaciona as diferentes representações;
* e verifica a continuidade causal, semântica e temporal da operação.

### Definição de Compreensão

Confirmar que compreender um software inclui reconstruir uma operação completa entre origem e resultado.

Preservar:

**o que ele faz, por que faz e onde decide.**

### Definição de Evidência

Confirmar que evidências isoladas representam pontos da operação e que um conjunto causalmente conectado permite reconstruí-la.

## Síntese final

Actualizar a síntese da página para incluir explicitamente Operação.

A sequência final deve ficar semanticamente equivalente a:

Uma intenção origina uma operação.

A expectativa descreve o comportamento que deveria acontecer.

A Engenharia de Software constrói o sistema completo e torna a operação executável.

O sistema fornece componentes, responsabilidades, regras, estados, contratos, runtimes e mecanismos de transporte.

O caminho é a sequência percorrida pela operação.

O payload representa e transporta partes da operação através desse caminho.

Os componentes interpretam e transformam essas representações.

O domínio aplica regras aos dados e estados encontrados.

A decisão produz uma alteração de estado.

O sistema devolve e apresenta o resultado.

A Trace Engineering acompanha, reconstrói e verifica a operação entre a sua origem e o seu resultado.

O Trace Engineer entra no flow sem perder de vista o sistema.

Compreender o sistema é conseguir explicar o que a operação fez, por que produziu determinado resultado e onde ocorreu a decisão.

## Frase institucional

Adicionar à área de frases institucionais, sem eliminar as existentes:

**A operação é a unidade causal completa que liga origem e resultado.**

Adicionar também, caso não gere redundância visual:

**O payload representa partes da operação. O tracing reconstrói a operação completa.**

Não remover nem substituir as frases institucionais já existentes.

## Estrutura de dados e contagem

A implementação actual possui 20 definições completas.

Após esta alteração, o glossário deverá possuir:

**21 definições completas.**

Actualizar:

* a fonte tipada;
* os verificadores de conteúdo;
* os verificadores de ordem;
* as expectativas de quantidade;
* os testes de semântica;
* qualquer snapshot ou documentação técnica que mantenha a contagem canónica.

Não alterar a contagem de seis definições resumidas da homepage, salvo se a implementação actual exigir tecnicamente essa mudança. A preferência é manter os seis resumos existentes.

## Verificador dedicado

Actualizar `scripts/verify-lab-definitions.mjs` para confirmar pelo menos:

1. existência da definição `Operação`;
2. posição depois de `Expectativa`;
3. posição antes de `Payload`;
4. total de 21 definições completas;
5. permanência de seis definições resumidas na homepage;
6. presença da frase:
   `A operação é a unidade causal completa que liga uma origem a um resultado`
   ou equivalente canónico sem perda semântica;
7. distinção explícita entre operação e payload;
8. afirmação de que uma operação pode produzir ou consumir vários payloads;
9. tratamento de Create/Join como modelo esperado ou exemplo conceptual;
10. uso exclusivo de `Trace Engineering`;
11. ausência de `Tracing Engineering`;
12. preservação do CTA e da rota `/lab-definitions`.

Actualizar também os verificadores gerais apenas quando a nova contagem ou o novo conceito tornar isso necessário.

Não enfraquecer testes existentes para fazê-los passar.

## Validações obrigatórias

Após implementar:

1. executar `npm run lint`;
2. executar `tsc --noEmit`;
3. executar `npm run verify:lab-definitions`;
4. executar `npm run verify:homepage`;
5. executar `npm run verify:navigation-discovery`;
6. executar `npm run verify:ai-readiness`;
7. executar `npm run verify:foundation`;
8. executar `npm run verify:refactor-v3`;
9. executar `npm run build`;
10. executar `git diff --check`.

Caso algum script possua outro nome real no `package.json`, utilizar o nome existente correspondente.

Não afirmar que uma validação passou sem executar o comando.

## Inspecção final obrigatória

Confirmar que:

* nenhuma definição anterior foi removida;
* o glossário possui 21 definições;
* Operação aparece depois de Expectativa e antes de Payload;
* a homepage continua com seis resumos;
* a secção permanece na posição actual;
* a rota `/lab-definitions` continua estática;
* o sitemap permanece correcto;
* não existem dependências novas;
* não existem Client Components desnecessários;
* não há warnings de hydration introduzidos;
* Create/Join não foi apresentado como facto confirmado da codebase actual;
* `Trace Engineering` permanece como nome canónico;
* Trace Engineer continua apresentado como função e perfil em desenvolvimento.

## Entrega final

Ao concluir, apresentar:

1. resumo exacto da implementação;
2. ficheiros modificados;
3. confirmação da nova ordem editorial;
4. confirmação de 21 definições completas;
5. confirmação de seis resumos na homepage;
6. microactualizações realizadas em Sistema, Payload, Caminho, Payload Journey, Tracing, Trace Engineering, Compreensão e Evidência;
7. verificadores actualizados;
8. resultados individuais de lint, TypeScript, testes e build;
9. limitações encontradas;
10. confirmação de que nenhum conteúdo existente foi eliminado.

Não realizar deployment.

Não criar commit.

Não modificar ficheiros fora do escopo sem necessidade demonstrável.
