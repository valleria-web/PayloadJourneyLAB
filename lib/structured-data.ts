import { absoluteSiteUrl, siteConfig } from "@/config/site";

type JsonPrimitive = string | number | boolean | null;
export type JsonLdValue = JsonPrimitive | JsonLdValue[] | { [key: string]: JsonLdValue };

const websiteId = `${siteConfig.origin}/#website`;
const founderId = absoluteSiteUrl(siteConfig.founder.idPath);
const usmtId = absoluteSiteUrl(siteConfig.usmt.idPath);

function getWebsiteNode(): JsonLdValue {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: absoluteSiteUrl(),
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
  };
}

function getFounderNode(): JsonLdValue {
  return {
    "@type": "Person",
    "@id": founderId,
    name: siteConfig.founder.name,
    url: founderId,
    description: `Criadora do ${siteConfig.name} e da ${siteConfig.usmt.name} — ${siteConfig.usmt.alternateName}.`,
  };
}

function getUsmtNode(): JsonLdValue {
  return {
    "@type": "CreativeWork",
    "@id": usmtId,
    name: siteConfig.usmt.name,
    alternateName: siteConfig.usmt.alternateName,
    description: siteConfig.usmt.description,
    url: absoluteSiteUrl("/usmt"),
    inLanguage: siteConfig.language,
    creator: { "@id": founderId },
    isPartOf: { "@id": websiteId },
  };
}

function getWebPageNode(path: string, name: string, description: string): Record<string, JsonLdValue> {
  const url = absoluteSiteUrl(path);

  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: siteConfig.language,
    isPartOf: { "@id": websiteId },
  };
}

export function getHomePageStructuredData(): JsonLdValue {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getWebsiteNode(),
      getWebPageNode("/", siteConfig.title, siteConfig.description),
    ],
  };
}

export function getThematicPageStructuredData(
  path: string,
  name: string,
  description: string,
): JsonLdValue {
  const page = getWebPageNode(path, name, description);
  const graph: JsonLdValue[] = [getWebsiteNode(), page];

  if (path === "/lab") {
    page.mentions = { "@id": founderId };
    graph.push(getFounderNode());
  }

  if (path === "/usmt") {
    page.mainEntity = { "@id": usmtId };
    graph.push(getFounderNode(), getUsmtNode());
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
