import { absoluteSiteUrl, siteConfig } from "@/config/site";
import type { AiWelcomeFaqEntry } from "@/types/content";

type JsonPrimitive = string | number | boolean | null;
export type JsonLdValue = JsonPrimitive | JsonLdValue[] | { [key: string]: JsonLdValue };

const websiteId = `${siteConfig.origin}/#website`;
const organizationId = `${siteConfig.origin}/#organization`;
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
    publisher: { "@id": organizationId },
  };
}

function getOrganizationNode(): JsonLdValue {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.name,
    url: siteConfig.origin,
    description: siteConfig.description,
    sameAs: [siteConfig.channels.youtube],
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
  const url = path === "/" ? siteConfig.origin : absoluteSiteUrl(path);

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

type HomePageStructuredDataInput = {
  title: string;
  description: string;
};

export function getHomePageStructuredData({
  title,
  description,
}: HomePageStructuredDataInput): JsonLdValue {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationNode(),
      getWebsiteNode(),
      getWebPageNode("/", title, description),
    ],
  };
}

export function getThematicPageStructuredData(
  path: string,
  name: string,
  description: string,
): JsonLdValue {
  const page = getWebPageNode(path, name, description);
  const graph: JsonLdValue[] = [getOrganizationNode(), getWebsiteNode(), page];

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

export function getAiWelcomeStructuredData(
  path: string,
  name: string,
  description: string,
  faqEntries: readonly AiWelcomeFaqEntry[],
): JsonLdValue {
  const url = absoluteSiteUrl(path);
  const faqId = `${url}#faq`;
  const page = getWebPageNode(path, name, description);

  page.publisher = { "@id": organizationId };
  page.about = { "@id": organizationId };
  page.mentions = { "@id": founderId };
  page.mainEntity = { "@id": faqId };

  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationNode(),
      getWebsiteNode(),
      getFounderNode(),
      page,
      {
        "@type": "FAQPage",
        "@id": faqId,
        url,
        inLanguage: siteConfig.language,
        isPartOf: { "@id": websiteId },
        mainEntity: faqEntries.map((entry) => ({
          "@type": "Question",
          name: entry.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: entry.answer,
          },
        })),
      },
    ],
  };
}
