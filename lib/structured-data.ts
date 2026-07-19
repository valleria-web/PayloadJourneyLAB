import { siteConfig } from "@/config/site";

type JsonPrimitive = string | number | boolean | null;
export type JsonLdValue = JsonPrimitive | JsonLdValue[] | { [key: string]: JsonLdValue };

const organizationId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;
const webpageId = `${siteConfig.url}/#webpage`;
const homepageUrl = `${siteConfig.url}/`;

export function getHomePageStructuredData(): JsonLdValue {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        publisher: {
          "@id": organizationId,
        },
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: homepageUrl,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        isPartOf: {
          "@id": websiteId,
        },
        about: {
          "@id": organizationId,
        },
      },
    ],
  };
}

export function getThematicPageStructuredData(
  path: string,
  name: string,
  description: string,
): JsonLdValue {
  const url = `${siteConfig.url}${path}`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: siteConfig.language,
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
  };
}
