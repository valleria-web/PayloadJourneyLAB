export const siteConfig = {
  name: "Payload Journey LAB",
  tagline: "Siga o flow. Entenda o sistema.",
  title: "Payload Journey LAB — Siga o flow. Entenda o sistema.",
  description:
    "Laboratório de formação, pesquisa e investigação aplicada dedicado a compreender como payloads, estados, eventos e decisões atravessam sistemas complexos.",
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
