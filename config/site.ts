export const siteConfig = {
  name: "Payload Journey LAB",
  tagline: "Siga o flow. Entenda o sistema.",
  title: "Payload Journey LAB — Compreender sistemas pelo flow",
  description:
    "Laboratório de Software System Investigation que pesquisa como flow, payload tracing, modelagem, checkpoints e evidências de runtime podem ajudar estudantes e developers a compreender codebases complexas.",
  origin: "https://www.payloadjourneylab.com",
  language: "pt-BR",
  locale: "pt_BR",
  founder: {
    name: "Valéria dos Santos Reiser",
    idPath: "/lab#founder",
  },
  usmt: {
    name: "Universal System Modeling Template",
    alternateName: "USMT",
    idPath: "/usmt#usmt",
    description:
      "A USMT é um template metodológico autoral desenvolvido no Payload Journey LAB para modelar estados, eventos, regras, invariantes, camadas e comportamento esperado.",
  },
} as const;

export function absoluteSiteUrl(path = "/") {
  return new URL(path, `${siteConfig.origin}/`).toString();
}
