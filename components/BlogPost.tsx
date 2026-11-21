import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock, Calendar, Tag, User } from "lucide-react";
import { Article, formatDate } from "@/data/blog";
import { portfolioData } from "@/data/portfolio";

interface BlogPostProps {
  article: Article;
  children?: React.ReactNode;
}

/**
 * Layout wrapper for an individual blog article page.
 * The actual article body is passed via `children`; when no
 * content exists yet, a sensible placeholder is shown.
 */
export default function BlogPost({ article, children }: BlogPostProps) {
  const { personal, socialLinks } = portfolioData;

  return (
    <article>
      {/* ── Back link ─────────────────────────────────────────── */}
      <div className="blog-post-nav container">
        <Link href="/blog" className="blog-back-link">
          <ArrowLeft size={14} /> All articles
        </Link>
      </div>

      {/* ── Article header ────────────────────────────────────── */}
      <header className="blog-post-header container">
        {article.category && (
          <span className="blog-post-category">{article.category}</span>
        )}
        <h1 className="blog-post-title">{article.title}</h1>
        <p className="blog-post-desc">{article.description}</p>

        <div className="blog-post-byline">
          <span className="blog-byline-item">
            <User size={13} />
            <Link href="/about" className="blog-author-link">{personal.name}</Link>
          </span>
          <span className="blog-byline-sep">·</span>
          <span className="blog-byline-item">
            <Calendar size={13} />
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </span>
          <span className="blog-byline-sep">·</span>
          <span className="blog-byline-item">
            <Clock size={13} />
            {article.readingTime}
          </span>
        </div>

        <div className="blog-post-tags">
          <Tag size={12} />
          {article.tags.map((t) => (
            <span key={t} className="blog-tag-pill">{t}</span>
          ))}
        </div>
      </header>

      <div className="page-rule" />

      {/* ── Body ──────────────────────────────────────────────── */}
      <div className="blog-post-body container">
        {children ?? (
          <div className="blog-post-placeholder">
            <p className="blog-placeholder-label">Article in progress</p>
            <p>
              This article is on its way. The skeleton is here but the full
              content hasn&apos;t been published yet.
            </p>
          </div>
        )}
      </div>

      <div className="page-rule" />

      {/* ── Footer CTA ────────────────────────────────────────── */}
      <div className="blog-post-footer container">
        <Link href="/blog" className="blog-back-link">
          <ArrowLeft size={14} /> Back to all articles
        </Link>
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          GitHub <ArrowUpRight size={13} />
        </a>
      </div>
    </article>
  );
}
