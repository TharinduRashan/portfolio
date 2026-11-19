import { ArrowDown, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  const { introBand, about, personal } = portfolioData;

  return (
    <>
      <section className="intro-band">
        <div className="container intro-inner">
          <span className="section-kicker">{introBand.kicker}</span>
          <p>
            {introBand.quotePrefix}
            <span>{introBand.quoteHighlight}</span>
            {introBand.quoteSuffix}
          </p>
          <a className="round-link" href={introBand.linkHref} aria-label="Read about me">
            <ArrowDown size={18} />
          </a>
        </div>
      </section>

      <section className="section container" id="about">
        <div className="section-heading">
          <span className="section-kicker">{about.kicker}</span>
          <h2>
            {about.heading.main}
            <br />
            <span className="muted">{about.heading.muted}</span>
          </h2>
        </div>
        <div className="about-grid">
          <div className="about-main">
            <p className="large-copy">
              I&apos;m an IT undergraduate at <strong>SLIIT</strong> &amp; <strong>BIT at UoM</strong> in Sri Lanka, focused on learning how technology can make everyday work simpler, smarter, and more reliable.
            </p>
            <p>
              Alongside my studies, I co-build{" "}
              <a href="https://www.cloudzyne.com" target="_blank" rel="noopener noreferrer">
                Cloudzyne
              </a>
              , a software venture where I get to explore real product development, client needs, and the decisions that turn an idea into a working solution.
            </p>
            <p>
              I enjoy working across the stack, learning how systems fit together, and getting hands-on with new tools. I&apos;m especially interested in software products, AI, cloud technologies, and cybersecurity.
            </p>
          </div>
          <aside className="about-aside">
            {about.highlights.map((item) => (
              <div className="aside-item" key={item.number}>
                <span>{item.number}</span>
                <div>
                  <strong>{item.label}</strong>
                  <p>
                    {Array.isArray(item.value) ? (
                      item.value.map((line, idx) => (
                        <span key={idx}>
                          {idx > 0 && <br />}
                          {line}
                        </span>
                      ))
                    ) : (
                      item.value
                    )}
                  </p>
                </div>
              </div>
            ))}
            <a className="resume-link" href={personal.resumePath} target="_blank" rel="noopener noreferrer">
              {about.resume.label} <ArrowUpRight size={15} />
            </a>
            <small className="resume-note">{personal.resumeNote}</small>
          </aside>
        </div>
      </section>
    </>
  );
}
