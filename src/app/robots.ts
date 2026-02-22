import type { MetadataRoute } from "next";
import { siteDetails } from "@/data/siteDetails";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${siteDetails.siteUrl}/sitemap.xml`,
  };
}
