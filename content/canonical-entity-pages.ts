import { canonicalMethodDefinitions, investigativePracticePresentation } from "@/content/methods";
import { createdArchitectureEntities, type ArchitectureEntity } from "@/content/public-information-architecture";
export const entityPageDefinitions: Record<string, string> = {"payload-tracing": canonicalMethodDefinitions.payloadTracing,"reverse-payload-journey": canonicalMethodDefinitions.reversePayloadJourney,"operational-payload-path": canonicalMethodDefinitions.operationalPayloadPath,"track-to-origin": canonicalMethodDefinitions.trackToOrigin,"trace-engineering": canonicalMethodDefinitions.traceEngineering};
export const entityPageSections: Record<string, {title: string; paragraphs: readonly string[]}[]> = {
  "payload-tracing": [
    {
      "title": "Atividade e método",
      "paragraphs": [
        "Payload Tracing acompanha representações operacionais e as fronteiras que atravessam o sistema. Ajuda a perguntar de onde vem um valor, onde uma representação muda e onde uma decisão acontece.",
        "Payload Tracing não é sinônimo de Payload Journey. Payload Journey é o método estruturado do LAB para acompanhar representações, camadas, interpretações, decisões, estados e efeitos. O LAB não afirma ter inventado tracing; payload tracing também não equivale a logging, distributed tracing ou observabilidade como um todo."
      ]
    }
  ],
  "reverse-payload-journey": [
    {
      "title": "Da anomalia à origem sustentada",
      "paragraphs": [
        "Comece pelo efeito observável e delimite a operação associada. Reconstrua o caminho e confronte as representações com evidências para procurar a primeira divergência sustentada. Congelar, Mapear, Detectar e Restaurar orientam a investigação quando aplicáveis.",
        "A ordem reversa não prova causalidade. Sintoma não é automaticamente origem; payload associado não é automaticamente causa. A origem exige evidência, e a investigação pode permanecer inconclusiva."
      ]
    }
  ],
  "operational-payload-path": [
    {
      "title": "Estados de conhecimento do caminho",
      "paragraphs": [
        "Expected / esperado: percurso definido pelo modelo, sem estabelecer execução observada.",
        "Probable / provável: hipótese inferida de fontes e estrutura; não é confirmação em runtime.",
        "Observed / observado: segmento capturado em uma execução delimitada.",
        "Confirmed / confirmado: afirmação sustentada por evidências identificadas dentro do recorte declarado; não generaliza o percurso para toda execução.",
        "Unknown / desconhecido: segmento ainda sem evidência suficiente.",
        "Registre componentes, camadas, operações, fronteiras e checkpoints com o estado de conhecimento de cada segmento. O caso HORA.city oferece uma pergunta de mapeamento e limites documentais, não um caminho público confirmado em runtime."
      ]
    }
  ],
  "track-to-origin": [
    {
      "title": "Aparição, transformação, decisão e autoridade",
      "paragraphs": [
        "Onde um valor aparece: a representação observável num ponto do sistema.",
        "Onde um valor muda: a transformação entre representações.",
        "Onde um valor é decidido: o ponto em que uma regra determina o resultado.",
        "Onde reside a autoridade: a responsabilidade que governa aquela decisão.",
        "Esses pontos podem ser diferentes. A missão procura o primeiro ponto sustentado por evidência e não promete causa única ou definitiva. No caso HORA.city, a autoridade temporal continua não estabelecida."
      ]
    }
  ],
  "trace-engineering": [
    {
      "title": "Prática dentro de Software System Investigation",
      "paragraphs": [
        "Trace Engineering opera dentro do contexto mais amplo de Software System Investigation. As capacidades apoiam perguntas delimitadas, comparação entre esperado e observado e explicações proporcionais às evidências.",
        "Não é profissão estabelecida, padrão ocupacional reconhecido, certificação ou disciplina externamente padronizada. As capacidades permanecem em formalização e confronto com casos."
      ]
    }
  ]
};
entityPageSections["trace-engineering"].push({title: "Capacidades investigativas", paragraphs: investigativePracticePresentation.traceEngineering.capabilities});
export function getEntityRoute(id: string) {
 const entity: ArchitectureEntity = createdArchitectureEntities.find(item => item.id === id)!;
 return {path: entity.canonicalPath, title: entity.name, eyebrow: entity.lifecycle, description: entityPageDefinitions[id], metadataTitle: entity.name + " | Payload Journey LAB", metadataDescription: entity.primaryQuestion, introAction: {label: entity.primaryCta, href: entity.primaryCtaHref}, introSecondaryAction: entity.secondaryCta && entity.secondaryCtaHref ? {label: entity.secondaryCta, href: entity.secondaryCtaHref} : undefined};
}
