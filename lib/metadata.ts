import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMetadataInput = {
  path: string;
  title: string;
  description: string;
};

export function createPageMetadata({ path, title, description }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: path,
      siteName: siteConfig.name,
      title,
      description,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
