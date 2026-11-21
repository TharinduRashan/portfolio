import Link from "next/link";
import { ArrowUpRight, Rss } from "lucide-react";
import { getPublishedArticles, formatDate } from "@/data/blog";

export default function BlogList() {
  const articles = getPublishedArticles();

  return (
    <article>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="about-page-hero container">
        <span className="section-kicker">WRITING</span>
        <h1 className="about-page-h1">
          Articles &amp; notes.
          <br />
          <span className="muted">Thinking out loud.</span>
        </h1>
        <p className="about-page-lead">
          A space for technical articles, tutorials, dev experiences, and learning notes.
          No fixed schedule — just whenever there&apos;s something worth writing down.
        </p>
      </section>

      <div className="page-rule" />

      {/* ── Article list ──────────────────────────────────────── */}
      <section className="container blog-list-section">
        {articles.length === 0 ? (
          <div className="blog-empty">
            <Rss size={32} className="blog-empty-icon" />
            <h2 className="blog-empty-heading">No articles yet</h2>
            <p className="blog-empty-body">
              The first article is on its way. Check back soon — or{" "}
              <a href="https://github.com/TharinduRashan" target="_blank" rel="noopener noreferrer">
                follow on GitHub
              </a>{" "}
              to see what&apos;s being worked on in the meantime.
            </p>
          </div>
        ) : (
          <ul className="blog-list" role="list">
            {articles.map((article) => (
              <li key={article.slug} className="blog-item">
                <Link href={`/blog/${article.slug}`} className="blog-item-link">
                  <div className="blog-item-meta">
                    {article.category && (
                      <>
                        <span className="blog-category-badge">{article.category}</span>
                        <span className="blog-meta-sep">·</span>
                      </>
                    )}
                    <span>{formatDate(article.date)}</span>
                    <span className="blog-meta-sep">·</span>
                    <span>{article.readingTime}</span>
                  </div>
                  <h2 className="blog-item-title">{article.title}</h2>
                  <p className="blog-item-desc">{article.description}</p>
                  <div className="blog-item-footer">
                    <div className="tags">
                      {article.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <span className="blog-read-more">
                      Read article <ArrowUpRight size={13} />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </article>
  );
}
