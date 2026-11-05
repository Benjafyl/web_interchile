import type { MetadataRoute } from "next";
import { absoluteUrl, routes } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route.path),
  }));
}
