import { ArrowUpRight, Github } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section className="work-section" id="work">
      <div className="container section">
        <div className="section-heading work-heading">
          <span className="section-kicker">{projects.kicker}</span>
          <h2>
            {projects.heading.main}
            <br />
            <span className="muted">{projects.heading.muted}</span>
          </h2>
          <p className="heading-note">{projects.note}</p>
        </div>
        <div className="project-list">
          {projects.items.map((project) => (
            <article className="project" key={project.number}>
              <div className={`project-visual ${project.visual}`}>
                {project.visual === "pos" && (
                  <div className="mock-pos">
                    <div className="mock-top">
                      <span>cloudzyne</span>
                      <span>● ● ●</span>
                    </div>
                    <div className="mock-body">
                      <div className="mock-sidebar">
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                      <div className="mock-content">
                        <b>Good morning.</b>
                        <span>Today&apos;s overview</span>
                        <div className="mock-stats">
                          <i />
                          <i />
                          <i />
                        </div>
                        <div className="mock-chart" />
                      </div>
                    </div>
                  </div>
                )}
                {project.visual === "salon" && (
                  <div className="mock-salon">
                    <span>THE STUDIO</span>
                    <b>
                      Beauty
                      <br />
                      in every
                      <br />
                      <i>detail.</i>
                    </b>
                    <small>BOOKING · CARE · CONFIDENCE</small>
                  </div>
                )}
                {project.visual === "control" && (
                  <div className="mock-terminal">
                    <div>
                      <i />
                      <i />
                      <i />
                    </div>
                    <code>
                      <span>~</span> system.status
                      <br />
                      &nbsp; cpu&nbsp;&nbsp;&nbsp;&nbsp; 12%
                      <br />
                      &nbsp; memory&nbsp; 6.4 GB
                      <br />
                      &nbsp; mode&nbsp;&nbsp;&nbsp; balanced
                      <br />
                      <em>› ready_</em>
                    </code>
                  </div>
                )}
              </div>
              <div className="project-info">
                <div className="project-topline">
                  <span>
                    {project.number} / {project.type}
                  </span>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <ArrowUpRight size={19} />
                  </a>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="github-more">
          <a href={projects.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github size={17} /> More on GitHub <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
