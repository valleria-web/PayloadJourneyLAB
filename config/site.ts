import { siteIdentity, siteLinks } from "@/content/site";

export const siteConfig = {
  name: siteIdentity.name,
  tagline: siteIdentity.tagline,
  title: siteIdentity.title,
  description: siteIdentity.shortDescription,
  url: siteLinks.website,
  language: siteIdentity.language,
  locale: siteIdentity.locale,
} as const;
