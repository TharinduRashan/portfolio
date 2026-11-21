export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO 8601 date string, e.g. "2026-11-19"
  tags: string[];
  readingTime: string; // e.g. "5 min read"
  category?: string;
  draft?: boolean;
}

/**
 * Articles data source.
 * Add new articles here — the blog listing and individual pages
 * are generated automatically from this array.
 *
 * Keep `draft: true` for work-in-progress articles; they will be
 * hidden from the listing but the slug will still resolve.
 */
export const articles: Article[] = [
  {
    slug: "building-offline-first-pos-system",
    title: "Building an Offline-First POS System: Architecture, Challenges and Lessons Learned",
    description:
      "A developer's experience building an offline-first POS system, exploring retail workflows, multi-terminal consistency, data synchronization and software architecture.",
    date: "2026-11-19",
    tags: ["Offline-First", "POS Systems", "TypeScript", "Node.js", "Software Architecture", "Data Consistency"],
    readingTime: "9 min read",
    category: "Software Engineering",
  },
];

/**
 * Returns all published (non-draft) articles sorted newest-first.
 */
export function getPublishedArticles(): Article[] {
  return articles
    .filter((a) => !a.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Looks up an article by its slug. Returns undefined if not found.
 */
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

/**
 * Formats an ISO date string into a readable label, e.g. "November 19, 2026".
 */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
