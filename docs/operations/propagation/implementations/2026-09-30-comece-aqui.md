# Implementação — Comece aqui

Ticket: [Implementar-Comece-Aqui.md](../tasks/Implementar-Comece-Aqui.md).

Adicionada uma seção compacta entre o hero e “Por que agora”, com a apresentação institucional e as quatro opções solicitadas. Reutiliza `Section` e `Card`, sem nova rota ou componente cliente. A grade usa uma coluna no mobile, duas a partir de 640 px e quatro a partir de 1280 px.

Links finais:

| Opção | Destino |
| --- | --- |
| Entender a visão do LAB | `/lab` |
| Conhecer o curso beta na Udemy | `https://www.udemy.com/course/payload-journey-lab-siga-o-flow-entenda-o-sistema/?couponCode=LAB-CUPOM` |
| Acompanhar o LabLog no YouTube | `https://www.youtube.com/@PayloadJourneyLAB` |
| Conhecer o caso HORA.city | `/cases` |

Os dois links externos da seção usam `target="_blank"` e `rel="noopener noreferrer"`. Nenhuma chamada aponta para `/lablog`.

`LAB-CUPOM` foi confirmado pelo próprio ticket e passou a ser a única configuração de cupom do site. URLs e textos de campanha compartilham essa fonte. Referências antigas permanecem somente em documentação histórica, incluindo o relatório anterior, para preservar o registro do estado auditado. Não foi realizada compra ou validação de checkout na Udemy.

LinkedIn institucional continua preparado em `siteLinks.linkedin.institutional`, sem URL e sem placeholder público. Nenhuma URL oficial foi fornecida ou encontrada nas configurações públicas do projeto.

Mantidos os fundos claros, cards brancos e verde legível como acento técnico. O rosa aparece no foco, sem competir com as opções. O badge existente do cupom em `/learn` passou a usar texto escuro sobre rosa, com contraste de aproximadamente 6,12:1; verde legível sobre o fundo claro tem 5,80:1.

## Validação

- `npm.cmd run build`: aprovado, com 25 páginas geradas. Houve avisos de cache do webpack sem impedir a compilação.
- `npm.cmd run lint`: aprovado, sem avisos ou erros.
- `verify-homepage.mjs` contra o build local: aprovado; 18 rotas indexáveis, links internos, ordem das seções e ausência de chamadas para `/lablog` verificados.
- Verificação da base visual (`verify-design-foundation.mjs`): aprovada.
- Busca no código público e scripts: nenhum cupom antigo remanescente.
- Verificação de espaços e conflitos (`git diff --check`): aprovada.
- Chrome/Playwright em 1440, 768, 390 e 320 px: quatro opções e destinos corretos; links externos protegidos; navegação por Tab; áreas de interação de pelo menos 44 px; nenhuma rolagem horizontal. Grade observada: 4, 2, 1 e 1 coluna, respectivamente.
- Capturas desktop e mobile revisadas. Evidências locais temporárias em `.tmp/comece-aqui-validation.json` e `.tmp/comece-aqui-{largura}.png`; não integram o produto. O recorte alto no mobile inclui o header sticky sobreposto durante a captura, sem indicar sobreposição estrutural dos cards.
