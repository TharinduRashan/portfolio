import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import BlogPost from "@/components/BlogPost";
import BuildingOfflineFirstPosSystem from "@/components/articles/BuildingOfflineFirstPosSystem";
import { articles, getArticleBySlug } from "@/data/blog";
import { portfolioData } from "@/data/portfolio";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const { personal } = portfolioData;

  // Custom SEO titles and canonical URLs per article
  const isPosArticle = slug === "building-offline-first-pos-system";
  const title = isPosArticle
    ? "Building an Offline-First POS System | Tharindu Rashan"
    : `${article.title} – ${personal.name}`;
  const canonicalUrl = `${personal.websiteUrl}/blog/${article.slug}`;

  return {
    title,
    description: article.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description: article.description,
      url: canonicalUrl,
      siteName: personal.name,
      type: "article",
      publishedTime: article.date,
      authors: [personal.name],
      tags: article.tags,
      images: [
        {
          url: personal.ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${article.title} — ${personal.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: article.description,
      images: [personal.ogImageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article || article.draft) notFound();

  const { personal } = portfolioData;
  const canonicalUrl = `${personal.websiteUrl}/blog/${article.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: personal.name,
      url: personal.websiteUrl,
    },
    publisher: {
      "@type": "Person",
      name: personal.name,
      url: personal.websiteUrl,
    },
    url: canonicalUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    keywords: article.tags.join(", "),
    articleSection: article.category ?? "Software Engineering",
    image: {
      "@type": "ImageObject",
      url: personal.ogImageUrl,
      width: 1200,
      height: 630,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageShell>
        <BlogPost article={article}>
          {slug === "building-offline-first-pos-system" ? (
            <BuildingOfflineFirstPosSystem />
          ) : null}
        </BlogPost>
      </PageShell>
    </>
  );
}
