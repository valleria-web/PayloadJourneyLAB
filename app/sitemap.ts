import type { MetadataRoute } from "next";
import { absoluteSiteUrl } from "@/config/site";
import { publicRoutePaths } from "@/content/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutePaths.map((path) => ({
    url: absoluteSiteUrl(path),
  }));
}
