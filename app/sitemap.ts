import type { MetadataRoute } from "next";
import { portfolioData } from "@/data/portfolio";
import { getPublishedArticles } from "@/data/blog";

const base = portfolioData.personal.websiteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getPublishedArticles();

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...articles.map((article) => ({
      url: `${base}/blog/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
