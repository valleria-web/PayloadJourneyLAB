Implemente uma seção compacta “Comece Aqui” na homepage do Payload Journey LAB, com base no reporte objetivo de 2026-09-30.

Contexto:
O reporte concluiu que “Comece Aqui” é parcialmente necessário. O site já possui conteúdo suficiente, mas falta uma orientação inicial agrupada para visitantes vindos de redes sociais.

Objetivo:
Adicionar uma seção compacta logo após o hero e antes da seção “Por que agora”, sem criar uma nova trilha paralela e sem repetir o catálogo completo de métodos.

Antes de implementar:
1. Confirmar no código qual cupom oficial está vigente.
2. Reconciliar divergência entre FOLLOW-THE-FLOW e SIGA-O-FLOW.

NOVO CUPOM VALIDO: LAB-CUPOM
 Eliminar os anteriores.

3. Usar somente o cupom confirmado.
4. Configurar ou deixar preparado o link oficial da LinkedIn Page, se já existir.
5. Não apontar para /lablog enquanto labLogPublic estiver false.

Seção:
Título:
Comece aqui

Subtítulo:
Escolha a melhor porta de entrada para conhecer o Payload Journey LAB.

Texto institucional curto:
O Payload Journey LAB é um laboratório independente de formação e investigação aplicada em engenharia de software, criado por Valéria dos Santos Reiser para ajudar estudantes e desenvolvedores a recuperar visão estrutural sobre sistemas complexos.

Cards / opções:

1. Entender a visão do LAB
Destino: /lab
Texto: Conheça a missão, a origem e a autoria do Payload Journey LAB.

2. Conhecer o curso beta na Udemy
Destino: URL oficial da Udemy com o cupom confirmado
Texto: Comece pela formação introdutória e aprenda a seguir o payload através das camadas.

3. Acompanhar o LabLog no YouTube
Destino: canal oficial do YouTube atualmente configurado
Texto: Veja o método em movimento nos episódios e investigações do LAB.
Observação: usar “Acompanhar o LabLog” e não “Assistir ao episódio” enquanto não houver playlist ou vídeo introdutório validado.

4. Conhecer o caso HORA.city
Destino: /cases
Texto: Explore o study case fundador e a investigação aplicada do Reverse Payload Journey.

Requisitos visuais:
- Manter base branca/off-white atual.
- Usar verde terminal como acento técnico.
- Usar rosa apenas como destaque discreto.
- Manter design minimalista e elegante.
- A seção deve ser curta, escaneável e responsiva.
- Evitar carga conceitual excessiva.
- Não duplicar textos longos de /learn, /lab ou /method.
- Não transformar LinkedIn em etapa pedagógica obrigatória.

Requisitos técnicos:
- Reutilizar componentes existentes de card, botão ou seção quando possível.
- Todos os links externos devem abrir em nova aba com target="_blank" e rel="noopener noreferrer".
- Validar desktop e mobile.
- Verificar contraste dos botões e badges.
- Não criar placeholders.
- Não adicionar rota nova.
- Não alterar copy de outras seções sem necessidade.

Critério de conclusão:
Ao chegar na homepage, o visitante deve conseguir escolher rapidamente entre:
- entender o LAB,
- entrar no curso beta,
- acompanhar o LabLog,
- conhecer o caso HORA.city.

Entregar também um breve resumo das alterações realizadas e dos links finais usados.