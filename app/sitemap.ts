import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { publicRoutePaths } from "@/content/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutePaths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    priority: path === "/" ? 1 : 0.8,
  }));
}
