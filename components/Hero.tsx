import { ArrowDown, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { hero, personal } = portfolioData;

  return (
    <section className="hero container" id="home">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="status-dot" /> {hero.status}
        </div>
        <h1>
          {hero.heading.main}
          <br />
          <span className="muted">{hero.heading.muted}</span>
        </h1>
        <p className="hero-lede">
          I&apos;m <strong>{personal.name}</strong> — {personal.roleDescription}
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href={hero.actions.primary.href}>
            {hero.actions.primary.label} <ArrowDown size={16} />
          </a>
          <a className="text-link" href={hero.actions.secondary.href}>
            {hero.actions.secondary.label} <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="hero-meta">
          <span>{hero.meta.location}</span>
          <span className="meta-line" />
          <span>{hero.meta.tagline}</span>
        </div>
      </div>
      <div className="hero-art" aria-label="Abstract layered blue glass shapes">
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />
        <div className="art-glow" />
        <div className="art-card card-back" />
        <div className="art-card card-front">
          <div className="card-top">
            <span>{hero.card.yearTag}</span>
            <span className="card-cross">{hero.card.cross}</span>
          </div>
          <div className="card-monogram">
            {hero.card.monogram.first}
            <span>{hero.card.monogram.second}</span>
          </div>
          <div className="card-bottom">
            <span>
              {hero.card.lines[0]}
              <br />
              {hero.card.lines[1]}
            </span>
            <span className="card-index">{hero.card.index}</span>
          </div>
        </div>
        <div className="art-caption">{hero.card.caption}</div>
      </div>
    </section>
  );
}
