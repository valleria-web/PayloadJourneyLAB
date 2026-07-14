Sprint 1 — Arquitetura da homepage e hierarquia do conteúdo
Implemente o primeiro sprint da landing page institucional do Payload Journey LAB.
O objetivo deste sprint é reorganizar a homepage para que ela tenha uma narrativa institucional clara, progressiva e extensível.
Neste momento, não faça o refinamento visual definitivo e não reescreva profundamente todo o conteúdo. O foco é arquitetura da informação, ordem das seções, responsabilidades de cada seção, navegação e CTAs.
Antes de modificar qualquer arquivo
Examine o repositório e identifique:
stack atual;
framework e versão;
estrutura de rotas;
organização dos componentes;
sistema de estilos;
componentes reutilizáveis existentes;
estrutura atual da homepage;
localização atual dos textos;
links e CTAs já configurados;
existência de menu mobile;
existência de conteúdo detalhado da USMT, White Papers e Case Study.
Reutilize os padrões existentes.
Não substitua a stack.
Não adicione dependências sem necessidade.
Não altere arquivos sem relação com a landing page.
Objetivo estratégico da homepage
A homepage deve apresentar:
o que é o Payload Journey LAB;
por que ele existe;
quais métodos desenvolve;
como os conceitos se relacionam;
onde os métodos estão sendo aplicados;
como alguém pode aprender, investigar ou colaborar;
quais publicações estão sendo preparadas;
qual é a visão institucional do LAB;
como entrar em contato.
A homepage não deve tentar ensinar integralmente todos os métodos.
Ela deve:
apresentar;
posicionar;
demonstrar evidência;
conduzir o visitante ao próximo passo.
Estrutura final da homepage
Reorganize a página para seguir esta ordem:
Header
Hero
O LAB
Métodos
Ecossistema conceitual
Case Study HORA.city
Formação e colaboração
White Papers
Sobre o LAB
Contato
Footer
Cada seção deve possuir um único objetivo narrativo.
Responsabilidade de cada seção
1. Header
O header deve conter:
identidade Payload Journey LAB;
navegação por âncoras;
comportamento sticky, caso isso já seja compatível com o projeto;
menu mobile acessível.
Navegação sugerida:
Início
O LAB
Métodos
Case Study
Formação
White Papers
Sobre
Contato
Não é obrigatório incluir todas as seções intermediárias no menu.
A seção Ecossistema pode ser acessada pelo fluxo natural da página sem necessariamente aparecer no header.
Utilize IDs consistentes:
inicio
lab
metodos
ecossistema
case-study
formacao
white-papers
sobre
contato
2. Hero
O Hero deve responder:
O que é este projeto?
Manter como conteúdo principal:
Título:
PAYLOAD
JOURNEY LAB
Frase:
Siga o flow. Entenda o sistema.
Descrição:
Laboratório de formação, pesquisa e investigação aplicada dedicado a compreender como payloads, estados, eventos e decisões atravessam sistemas complexos.
CTAs:
Explorar o LAB → #lab
Conhecer o Case Study → #case-study
O Hero não deve tentar explicar todos os métodos.
3. O LAB
Esta seção deve responder:
Por que o LAB existe e quais são suas áreas de atuação?
Manter:
descrição institucional curta;
Formação;
Pesquisa;
Investigação aplicada;
Colaboração.
Evitar repetir o texto da seção Sobre o LAB.
O LAB deve explicar o que a organização faz hoje.
Sobre o LAB deve explicar o problema de longo prazo e sua visão.
4. Métodos
Esta seção deve responder:
Como o Payload Journey LAB trabalha?
Apresentar quatro métodos principais:
Payload Journey
Reverse Payload Journey
Operational Payload Path
Track to Origin
USMT
Caso seja necessário manter apenas quatro cards por equilíbrio visual, utilize:
Payload Journey
Reverse Payload Journey
Track to Origin
USMT
E apresente Operational Payload Path como instrumento operacional do Reverse Payload Journey.
Não apresentar nesta homepage todas as etapas detalhadas da USMT.
A seção USMT atual, caso esteja extensa, deve ser reduzida para:
nome;
definição curta;
breve referência aos seus 12 elementos;
CTA futuro para uma página específica.
Não apagar o conteúdo detalhado já existente. Apenas removê-lo do fluxo principal da homepage e preservá-lo para uma futura rota /usmt.
5. Ecossistema conceitual
Esta seção deve responder:
Como os conceitos se relacionam?
Apresentar:
Trace Engineer
Track Mode
Payload Journey
Reverse Payload Journey
Track to Origin
Software System Investigation
Representar visualmente, mesmo que de forma simples:
Track Mode
→ Reverse Payload Journey
→ Track to Origin
→ Evidência
→ Restauração
Não posicionar One Bit Machine no mesmo nível dos métodos e papéis institucionais principais.
Caso One Bit Machine já esteja presente, movê-la para uma área futura relacionada a formação, experimentos ou artefatos pedagógicos.
Não apagar seu conteúdo.
6. Case Study HORA.city
Esta seção deve responder:
Onde os métodos estão sendo aplicados?
Manter como elementos principais:
Saving HORA.city;
sistema inicial com aproximadamente 6 mil linhas;
expansão para aproximadamente 40 mil linhas;
anomalia em createdAt;
payload associado HeartCreated;
método Reverse Payload Journey;
missão Track to Origin;
estado Investigação em andamento.
Manter a ficha investigativa:
Case ID;
anomalia;
payload;
estado.
Não afirmar que o caso foi concluído.
CTAs:
Explorar o Case Study;
Assistir ao LabLog.
Se os links reais ainda não existirem no projeto, não inventar URLs.
Utilizar placeholders claramente identificados ou manter os botões desativados de forma acessível.
7. Formação e colaboração
Esta seção deve responder:
Como alguém pode participar?
Estruturar três caminhos:
Aprender;
Investigar;
Colaborar.
Manter referências futuras a:
Curso;
LabLogs;
Workshops;
Pilotos acadêmicos;
Programa Trace Engineer.
Evitar criar uma lista extensa sem hierarquia.
Dar prioridade visual aos três caminhos principais.
8. White Papers
Esta seção deve responder:
O que o LAB está documentando?
Manter no máximo três cards na homepage:
Payload Journey: seguindo a informação através das camadas;
Reverse Payload Journey e investigação estrutural de sistemas;
Trace Engineer na era dos agentes de IA.
Os itens devem continuar marcados como:
Em preparação;
Placeholder editorial;
Data a definir.
Não apresentar nenhuma publicação como concluída.
Adicionar CTA:
Ver todos os White Papers.
Não criar as páginas dos White Papers neste sprint.
9. Sobre o LAB
Esta seção deve responder:
Qual problema de longo prazo o Payload Journey LAB procura resolver?
Usar como núcleo:
Agentes de IA podem expandir sistemas mais rapidamente do que pessoas conseguem compreendê-los. O Payload Journey LAB nasce para investigar essa diferença de velocidade e desenvolver métodos que preservem rastreabilidade, compreensão estrutural e capacidade de decisão.
Preservar uma área futura para:
Fundadora;
Pesquisadores;
Colaboradores;
Instituições parceiras.
Não inventar nomes, cargos, credenciais ou instituições.
10. Contato
Esta seção deve responder:
Qual é o próximo passo?
Título:
Vamos seguir o flow
Texto:
Para colaborações, pilotos acadêmicos, pesquisa aplicada ou desenvolvimento do programa Trace Engineer, entre em contato com o Payload Journey LAB.
Manter:
botão de contato;
e-mail placeholder;
LinkedIn;
YouTube;
GitHub.
Não criar backend ou formulário funcional neste sprint.
11. Footer
Manter:
Payload Journey LAB;
Siga o flow. Entenda o sistema.;
links principais;
redes;
política de privacidade;
termos de uso;
ano dinâmico.
Rotas futuras
Não é necessário implementar estas páginas agora, mas a arquitetura da homepage deve preparar a futura expansão para:
/usmt
/methods/payload-journey
/methods/reverse-payload-journey
/methods/operational-payload-path
/methods/track-to-origin
/case-study/hora-city
/white-papers
Não criar páginas vazias apenas para simular progresso.
Não criar links quebrados.
Quando uma página ainda não existir:
utilizar CTA sem navegação;
marcar como em preparação;
ou direcionar para uma seção existente da homepage.
Regras de implementação
reutilizar componentes existentes;
preservar convenções de nomes;
evitar componentes excessivamente pequenos;
não adicionar dependências;
não alterar a identidade visual de forma profunda;
não redesenhar ainda os diagramas;
não substituir o sistema de estilos;
não fazer deploy;
não criar commit;
não apagar conteúdo de pesquisa ou conteúdo metodológico detalhado;
remover conteúdo apenas da renderização da homepage quando ele pertencer melhor a uma futura página própria;
preservar conteúdo detalhado de forma segura no projeto;
evitar duplicação entre seções;
manter HTML semântico;
manter responsividade existente;
não introduzir links fictícios.
Resultado esperado
Ao final deste sprint, a homepage deve possuir uma narrativa clara:
Hero
→ identidade
O LAB
→ propósito atual
Métodos
→ forma de trabalho
Ecossistema
→ relação entre conceitos
Case Study
→ evidência aplicada
Formação
→ participação
White Papers
→ documentação
Sobre
→ visão de longo prazo
Contato
→ próximo passo
Critérios de aceitação
Considere o sprint concluído somente se:
a ordem das seções estiver correta;
cada seção possuir uma responsabilidade clara;
não existirem grandes repetições entre O LAB, Métodos e Sobre;
a USMT detalhada não dominar a homepage;
o Case Study estiver claramente marcado como investigação em andamento;
One Bit Machine não estiver posicionada como método institucional principal;
os CTAs principais estiverem definidos;
a navegação por âncoras funcionar;
não existirem links quebrados;
a página continuar responsiva;
o projeto continuar compilando;
nenhum conteúdo relevante tiver sido perdido.
Validação
Ao finalizar:
execute o lint, caso exista;
execute o typecheck, caso exista;
execute o build, caso seja viável;
corrija erros relacionados às mudanças realizadas;
não corrija problemas antigos fora do escopo sem necessidade.
Relatório final
Ao concluir, informe:
quais arquivos foram modificados;
qual é a nova ordem das seções;
quais conteúdos deixaram de ser renderizados na homepage;
onde esses conteúdos foram preservados;
quais CTAs estão funcionais;
quais CTAs ainda dependem de URLs futuras;
quais páginas futuras foram preparadas conceitualmente;
resultado de lint, typecheck e build;
qualquer limitação encontrada no repositório.
Não faça deploy.
Não crie commit.
