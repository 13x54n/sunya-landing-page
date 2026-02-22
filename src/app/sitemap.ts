import type { MetadataRoute } from "next";
import { siteDetails } from "@/data/siteDetails";

const docsRoutes = [
  "/docs",
  "/docs/installation",
  "/docs/quick-start",
  "/docs/project-structure",
  "/docs/configuration",
  "/docs/parsers",
  "/docs/example-workflow",
  "/docs/contributing",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteDetails.siteUrl;

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...docsRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "/docs" || route === "/docs/installation" ? 0.9 : 0.8,
    })),
  ];

  return staticPages;
}
