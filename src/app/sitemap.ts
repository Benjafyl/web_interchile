import type { MetadataRoute } from "next";
import { absoluteUrl, routes } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
