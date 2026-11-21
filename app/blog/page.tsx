import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import BlogList from "@/components/BlogList";
import { portfolioData } from "@/data/portfolio";

const { personal } = portfolioData;

export const metadata: Metadata = {
  title: `Blog – ${personal.name}`,
  description: `Technical articles, tutorials, and dev notes by ${personal.name} — covering software development, AI, cloud, cybersecurity, and the journey of building real products as a student.`,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: `Blog – ${personal.name}`,
    description: `Technical articles, tutorials, and dev notes by ${personal.name}.`,
    url: `${personal.websiteUrl}/blog`,
    siteName: personal.name,
    type: "website",
    images: [
      {
        url: personal.ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${personal.name} — Blog`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog – ${personal.name}`,
    description: `Technical articles, tutorials, and dev notes by ${personal.name}.`,
    images: [personal.ogImageUrl],
  },
};

export default function Blog() {
  return (
    <PageShell>
      <BlogList />
    </PageShell>
  );
}
