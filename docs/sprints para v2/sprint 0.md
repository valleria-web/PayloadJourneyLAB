# Sprint 0 — Auditoria e baseline da homepage

## Contexto

Este repositório contém o site oficial do Payload Journey LAB.

A homepage será posteriormente refatorada para apresentar uma progressão mais clara para estudantes de Engenharia de Software e developers junior:

dor → habilidade → aprendizagem → demonstração → formação → aplicação → metodologia → ecossistema do LAB.

Nesta sprint, porém, não deve ser realizada nenhuma mudança visual, textual ou estrutural na página.

O objetivo é compreender e documentar integralmente o estado atual antes de iniciar a refatoração.

---

# Objetivo da sprint

Auditar o projeto e produzir um baseline técnico, visual e semântico confiável da homepage atual.

Resultado esperado:

**Estado atual compreendido e documentado.**

Ao final da sprint, deve ser possível responder com precisão:

* como o projeto está estruturado;
* onde a homepage é construída;
* quais componentes participam dela;
* onde os conteúdos estão armazenados;
* quais estilos e assets são utilizados;
* quais links externos existem;
* quais problemas técnicos já existem;
* quais conteúdos deverão ser preservados durante a futura refatoração.

---

# Regra principal

## Não modificar a experiência atual

Nesta sprint, não:

* alterar textos;
* mudar a ordem das seções;
* redesenhar componentes;
* modificar cores ou tipografia;
* remover conteúdo;
* criar a nova homepage;
* alterar navegação;
* substituir imagens;
* mudar CTAs;
* introduzir animações;
* realizar otimizações não relacionadas à auditoria;
* corrigir problemas sem antes documentá-los.

Somente mudanças estritamente necessárias para produzir documentação ou executar a auditoria são permitidas.

Caso seja necessário criar arquivos de documentação, colocá-los numa pasta apropriada, como:

```text
docs/homepage-refactor/
```

Adapte o caminho às convenções existentes no repositório.

---

# Etapa 1 — Inspecionar o projeto

Identifique e documente:

## Estrutura técnica

* framework utilizado;
* versão do framework;
* versão relevante do runtime;
* package manager;
* router utilizado;
* linguagem principal;
* sistema de estilos;
* bibliotecas de UI;
* bibliotecas de animação;
* sistema de ícones;
* fontes utilizadas;
* sistema de configuração;
* forma de gerenciamento de assets;
* estratégia de SEO;
* ferramentas de lint;
* ferramentas de teste;
* processo de build;
* processo de deploy, quando identificável no repositório.

## Arquivos principais

Localize:

* entrypoint da aplicação;
* arquivo da homepage;
* layout global;
* header;
* footer;
* estilos globais;
* configuração de metadados;
* sitemap;
* robots;
* manifest;
* arquivos de configuração de domínio ou deploy;
* componentes diretamente utilizados pela homepage;
* arquivos de conteúdo;
* arquivos de constantes;
* assets visuais.

Não presuma nomes ou caminhos. Registre os caminhos reais encontrados.

---

# Etapa 2 — Mapear a homepage atual

Percorra a homepage completa e registre sua ordem real.

Para cada seção, documente:

* nome ou identificação;
* posição na página;
* arquivo responsável;
* componente responsável;
* conteúdo principal;
* CTA presente;
* links;
* imagens;
* vídeos;
* dados dinâmicos;
* dependências;
* comportamento responsivo;
* interações;
* animações;
* âncora ou ID da seção, quando existir.

Produza uma tabela semelhante a:

| Ordem | Seção atual | Arquivo/componente | Conteúdo principal | CTA/links | Observações |
| ----- | ----------- | ------------------ | ------------------ | --------- | ----------- |

A tabela deve refletir o código real, não apenas o que visualmente parece existir.

---

# Etapa 3 — Criar inventário semântico

Mapeie todos os conceitos e conteúdos relevantes atualmente presentes na homepage.

O inventário deve contemplar, quando encontrados:

* Payload Journey LAB;
* Payload Journey;
* Payload Tracing;
* Software System Investigation;
* USMT;
* Reverse Payload Journey;
* Operational Payload Path;
* Track to Origin;
* Track Mode;
* Trace Engineer;
* Congelar;
* Mapear;
* Detectar;
* Restaurar;
* formação;
* pesquisa metodológica;
* investigação aplicada;
* colaboração;
* HORA.city;
* study case;
* LabLog;
* apresentação institucional;
* visão do LAB;
* apresentação da fundadora;
* CTAs;
* links para Udemy;
* links para YouTube;
* links para redes;
* mensagens temporárias;
* cupões;
* estatísticas;
* informações legais.

Para cada item, registre:

| Conteúdo/conceito | Texto ou resumo atual | Localização | Arquivo | Repetições | Observações |
| ----------------- | --------------------- | ----------- | ------- | ---------- | ----------- |

Não reescreva os textos nesta sprint.

O objetivo é garantir que nenhum conteúdo relevante desapareça durante a futura refatoração.

---

# Etapa 4 — Identificar conteúdo hardcoded e duplicações

Localize:

* textos escritos diretamente nos componentes;
* arrays declarados dentro da homepage;
* URLs externas repetidas;
* CTAs duplicados;
* informações temporárias espalhadas pelo código;
* dados institucionais repetidos;
* conteúdos semelhantes apresentados em mais de uma seção;
* constantes que deveriam futuramente ser centralizadas;
* componentes que repetem a mesma estrutura.

Produza uma lista com:

* caminho do arquivo;
* conteúdo identificado;
* tipo de problema;
* impacto;
* recomendação futura.

Não realize a centralização nesta sprint.

---

# Etapa 5 — Inventariar assets

Documente todos os assets utilizados pela homepage:

* imagens;
* logos;
* ícones;
* vídeos;
* thumbnails;
* SVGs;
* fontes;
* backgrounds;
* arquivos públicos;
* recursos externos.

Para cada asset, registrar:

| Asset | Caminho ou origem | Onde é utilizado | Dimensão/tamanho, se disponível | Observações |
| ----- | ----------------- | ---------------- | ------------------------------- | ----------- |

Identifique também:

* assets não utilizados aparentemente relacionados à homepage;
* imagens sem texto alternativo;
* imagens sem dimensões explícitas;
* arquivos duplicados;
* recursos carregados externamente.

Não remover assets nesta sprint.

---

# Etapa 6 — Auditar links e integrações

Mapeie todos os links e integrações utilizados na homepage.

Classifique-os como:

* navegação interna;
* âncora;
* link externo;
* Udemy;
* YouTube;
* LinkedIn;
* contato;
* e-mail;
* redes sociais;
* vídeo incorporado;
* analytics;
* APIs;
* ferramentas de terceiros.

Para cada link, registrar:

* origem;
* destino;
* componente;
* comportamento;
* se abre nova aba;
* se utiliza atributos de segurança apropriados;
* se parece funcional ou potencialmente quebrado.

Não alterar URLs sem autorização.

Evite chamadas destrutivas ou qualquer ação que modifique serviços externos.

---

# Etapa 7 — Executar baseline técnico

Execute os comandos existentes e apropriados do projeto.

Priorize os scripts definidos no `package.json` ou equivalente.

Quando disponíveis, execute:

```text
install
lint
typecheck
test
build
```

Não invente scripts que não existem.

Registre:

* comando utilizado;
* resultado;
* warnings;
* erros;
* duração aproximada, se disponível automaticamente;
* se o erro já existia antes de qualquer mudança;
* arquivos envolvidos;
* impacto percebido.

Caso algum comando não exista, registre explicitamente:

```text
Script não configurado no projeto.
```

Caso a instalação ou execução dependa de variável de ambiente ausente, registre:

* nome da variável;
* onde é referenciada;
* impacto;
* sem expor valores sensíveis.

Nunca incluir segredos, tokens ou credenciais na documentação.

---

# Etapa 8 — Verificar o comportamento da homepage

Quando o ambiente permitir, execute a aplicação localmente e verifique:

* carregamento inicial;
* console do navegador;
* erros de runtime;
* warnings de hydration;
* links;
* âncoras;
* menu desktop;
* menu mobile;
* CTAs;
* imagens;
* vídeos;
* accordions;
* animações;
* layout;
* footer.

Verifique pelo menos as seguintes larguras aproximadas:

* 360 px;
* 390 px;
* 768 px;
* 1024 px;
* 1280 px;
* 1440 px.

Documente problemas como:

* overflow horizontal;
* cortes;
* sobreposição;
* texto ilegível;
* navegação inacessível;
* dependência exclusiva de hover;
* elementos sem foco;
* layout shift;
* imagens deformadas;
* seções excessivamente densas.

Não corrigir nesta sprint.

---

# Etapa 9 — Capturar baseline visual

Quando houver suporte no ambiente, capture screenshots da homepage atual.

Larguras mínimas:

* mobile;
* tablet;
* desktop.

Inclua:

* primeira tela;
* página completa;
* seções importantes;
* problemas visuais encontrados.

Armazene as imagens numa pasta de documentação, por exemplo:

```text
docs/homepage-refactor/baseline/
```

Não substituir assets oficiais do site.

Caso o ambiente não permita screenshots, registre essa limitação claramente.

---

# Etapa 10 — Identificar riscos da futura refatoração

Produza uma lista de riscos, incluindo quando aplicável:

* homepage excessivamente acoplada;
* conteúdo misturado com apresentação;
* componentes grandes;
* estilos globais frágeis;
* duplicação de conteúdo;
* links hardcoded;
* dados temporários dispersos;
* responsividade dependente de regras específicas;
* animações acopladas ao layout;
* dependências não utilizadas;
* componentes sem testes;
* SEO definido em múltiplos locais;
* risco de perda de conteúdo;
* risco de quebra de âncoras;
* risco de regressão no mobile;
* risco de regressão visual;
* risco de regressão de performance.

Para cada risco, registrar:

| Risco | Evidência | Impacto | Probabilidade | Mitigação recomendada |
| ----- | --------- | ------- | ------------- | --------------------- |

Não implementar as mitigações ainda.

---

# Documentos a produzir

Criar os seguintes documentos, adaptando a extensão ao padrão do repositório:

```text
docs/homepage-refactor/
  00-project-audit.md
  01-homepage-structure.md
  02-content-inventory.md
  03-assets-and-links.md
  04-technical-baseline.md
  05-refactor-risks.md
```

## 00-project-audit.md

Deve conter:

* stack;
* estrutura;
* principais arquivos;
* convenções;
* processo de build;
* processo de deploy identificável;
* resumo executivo.

## 01-homepage-structure.md

Deve conter:

* ordem atual das seções;
* componentes;
* dependências;
* comportamento;
* mapa estrutural da homepage.

## 02-content-inventory.md

Deve conter:

* inventário semântico;
* textos e conceitos;
* localização;
* repetições;
* conteúdos temporários;
* conteúdos que obrigatoriamente deverão ser preservados.

## 03-assets-and-links.md

Deve conter:

* assets;
* imagens;
* vídeos;
* logos;
* URLs;
* integrações;
* possíveis problemas.

## 04-technical-baseline.md

Deve conter:

* comandos executados;
* resultados;
* erros;
* warnings;
* comportamento responsivo;
* problemas de runtime;
* limitações do ambiente.

## 05-refactor-risks.md

Deve conter:

* riscos;
* impacto;
* probabilidade;
* evidências;
* recomendações para as próximas sprints.

---

# Relatório final da sprint

Ao concluir, apresente um relatório no seguinte formato:

## 1. Resumo

Explique brevemente o estado atual da homepage e da arquitetura.

## 2. Arquivos criados

Liste todos os arquivos de documentação criados.

## 3. Arquivos modificados

Liste arquivos modificados e explique por que foram alterados.

O esperado é que apenas arquivos de documentação tenham sido criados ou modificados.

## 4. Estado dos comandos

Apresente:

* instalação;
* lint;
* typecheck;
* testes;
* build;
* execução local.

Use uma tabela:

| Comando | Resultado | Observações |
| ------- | --------- | ----------- |

## 5. Principais descobertas

Liste as descobertas mais relevantes sobre:

* arquitetura;
* conteúdo;
* duplicações;
* responsividade;
* performance;
* acessibilidade;
* SEO;
* manutenção.

## 6. Problemas preexistentes

Separe claramente problemas já existentes de qualquer problema introduzido durante a sprint.

## 7. Riscos para a refatoração

Resuma os riscos mais importantes.

## 8. Recomendação para a Sprint 1

Indique o que deverá ser tratado primeiro na arquitetura de informação e na migração de conteúdo.

---

# Critérios de aceite

A Sprint 0 estará concluída somente quando:

* o framework e a estrutura do projeto estiverem identificados;
* a homepage estiver completamente mapeada;
* todas as seções atuais estiverem documentadas;
* todos os conceitos importantes estiverem inventariados;
* assets e links estiverem registrados;
* conteúdos hardcoded estiverem identificados;
* duplicações estiverem registradas;
* build, lint, typecheck e testes tiverem sido executados quando disponíveis;
* problemas preexistentes estiverem documentados;
* comportamento mobile e desktop estiver registrado;
* riscos da refatoração estiverem listados;
* nenhum conteúdo da homepage tiver sido alterado;
* nenhum componente visual tiver sido redesenhado;
* nenhum conteúdo tiver sido removido;
* o repositório permanecer no mesmo estado funcional anterior à auditoria.

---

# Restrições

* Não implementar a Sprint 1.
* Não começar a refatoração da homepage.
* Não alterar o conteúdo editorial.
* Não modificar identidade visual.
* Não eliminar código considerado redundante.
* Não atualizar dependências sem necessidade direta para a auditoria.
* Não alterar configurações de produção.
* Não criar ou modificar dados externos.
* Não expor variáveis de ambiente.
* Não publicar ou fazer deploy.
* Não realizar commit ou push sem instrução explícita do usuário.
* Não ocultar erros encontrados.
* Não afirmar que algo foi validado se o ambiente não permitiu a validação.

Quando uma verificação não puder ser realizada, documente:

1. o que não foi possível verificar;
2. por que não foi possível;
3. o que seria necessário para verificar posteriormente.

---

# Resultado esperado

Ao final desta execução, o site deverá permanecer visual e funcionalmente igual.

A única mudança relevante deverá ser a criação de uma documentação confiável que permita iniciar a próxima sprint sem adivinhações, sem perda de conteúdo e com conhecimento preciso do estado atual do projeto.
