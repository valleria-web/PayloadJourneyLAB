import type { Metadata } from "next";
import { absoluteSiteUrl, siteConfig } from "@/config/site";

type PageMetadataInput = {
  path: string;
  title: string;
  description: string;
  metadataTitle?: string;
  metadataDescription?: string;
};

export const siteSocialImage = {
  url: absoluteSiteUrl("/brand/logo.png"),
  width: 1254,
  height: 1254,
  alt: "Logo do Payload Journey LAB",
} as const;

export function createPageMetadata({
  path,
  title,
  description,
  metadataTitle,
  metadataDescription,
}: PageMetadataInput): Metadata {
  const resolvedTitle = metadataTitle ?? title;
  const resolvedDescription = metadataDescription ?? description;
  const canonical = absoluteSiteUrl(path);

  return {
    title: { absolute: resolvedTitle },
    description: resolvedDescription,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonical,
      siteName: siteConfig.name,
      title: resolvedTitle,
      description: resolvedDescription,
      images: [siteSocialImage],
    },
    twitter: {
      card: "summary",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [siteSocialImage.url],
    },
  };
}
