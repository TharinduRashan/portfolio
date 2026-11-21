import { ArrowUpRight, GraduationCap, Briefcase, Code2, Lightbulb } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";

export default function AboutPage() {
  const { personal, about, skills, projects } = portfolioData;

  return (
    <article>
      {/* ── Hero band ─────────────────────────────────────────── */}
      <section className="about-page-hero container">
        <span className="section-kicker">WHO I AM</span>
        <h1 className="about-page-h1">
          {about.heading.main}
          <br />
          <span className="muted">{about.heading.muted}</span>
        </h1>
        <p className="about-page-lead">
          I&apos;m <strong>{personal.name}</strong> — {personal.roleDescription}
        </p>
        <div className="about-page-actions">
          <a
            className="button button-dark"
            href={personal.resumePath}
            target="_blank"
            rel="noopener noreferrer"
          >
            View résumé <ArrowUpRight size={14} />
          </a>
          <a className="text-link" href={`mailto:${personal.email}`}>
            Get in touch <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────────────── */}
      <div className="page-rule" />

      {/* ── Background ────────────────────────────────────────── */}
      <section className="about-page-section container" id="background">
        <div className="about-page-label">
          <GraduationCap size={16} />
          <span>Education</span>
        </div>
        <div className="about-page-body">
          <h2 className="about-page-h2">Academic background</h2>
          <p>
            I&apos;m currently pursuing an <strong>Information Technology undergraduate degree at SLIIT</strong>{" "}
            (Sri Lanka Institute of Information Technology), running alongside the{" "}
            <strong>Bachelor of Information Technology (BIT) external degree programme offered by the
            University of Moratuwa</strong>. These two paths complement each other — SLIIT for the
            hands-on, applied curriculum and the UoM BIT for the depth and academic rigour of a
            recognised national university qualification.
          </p>
          <p>
            Studying both programmes at once means covering a broad range of subjects — from software
            engineering principles and data structures to database management, networks, and operating
            systems — while building practical skills through coursework projects and assignments.
          </p>
          <div className="edu-cards">
            <div className="edu-card">
              <span className="edu-card-tag">Current</span>
              <strong>BSc (Hons) in Information Technology</strong>
              <span>SLIIT · Sri Lanka Institute of Information Technology</span>
            </div>
            <div className="edu-card">
              <span className="edu-card-tag">Current</span>
              <strong>Bachelor of Information Technology (BIT)</strong>
              <span>University of Moratuwa · External Degree Programme</span>
            </div>
          </div>
        </div>
      </section>

      <div className="page-rule" />

      {/* ── Software journey ──────────────────────────────────── */}
      <section className="about-page-section container" id="journey">
        <div className="about-page-label">
          <Code2 size={16} />
          <span>Journey</span>
        </div>
        <div className="about-page-body">
          <h2 className="about-page-h2">How I got into software</h2>
          <p>
            My interest in technology started long before university — I&apos;ve always been drawn to
            understanding how things work under the hood. When I discovered programming, that curiosity
            turned into something I genuinely enjoy building with.
          </p>
          <p>
            Over time I moved from experimenting with small scripts and toy projects to working across
            the full stack — picking up Java and Spring Boot for backend work, JavaScript and TypeScript
            for the web, and exploring systems-level languages like Rust for desktop tooling. I try to
            approach every project as a chance to learn something new rather than just ship something
            that works.
          </p>
          <p>
            Alongside my studies I co-founded{" "}
            <a
              href="https://www.cloudzyne.com"
              target="_blank"
              rel="noopener noreferrer"
              className="about-inline-link"
            >
              Cloudzyne
            </a>
            , a small software venture where I get real-world experience in product thinking, client
            conversations, and the unglamorous but important work of turning an idea into something
            people actually use.
          </p>
        </div>
      </section>

      <div className="page-rule" />

      {/* ── Technical interests ───────────────────────────────── */}
      <section className="about-page-section container" id="interests">
        <div className="about-page-label">
          <Lightbulb size={16} />
          <span>Interests</span>
        </div>
        <div className="about-page-body">
          <h2 className="about-page-h2">What I&apos;m interested in</h2>
          <p>
            I enjoy working across the stack and have a particular interest in a few areas I think will
            shape how software gets built over the next decade.
          </p>
          <div className="interest-grid">
            <div className="interest-item">
              <strong>Artificial Intelligence</strong>
              <p>
                How AI systems reason, how to integrate language models into real products responsibly,
                and what it means to build software in a world where the tool writes some of the code.
              </p>
            </div>
            <div className="interest-item">
              <strong>Cloud &amp; Infrastructure</strong>
              <p>
                Scalable architectures, containerisation, and the craft of deploying software so it
                stays reliable under real conditions.
              </p>
            </div>
            <div className="interest-item">
              <strong>Cybersecurity</strong>
              <p>
                Threat modelling, secure-by-default design, and understanding how attacks actually
                work so defences are grounded in reality rather than compliance checklists.
              </p>
            </div>
            <div className="interest-item">
              <strong>Developer tooling</strong>
              <p>
                Systems that make engineers more productive — editors, CLI tools, build pipelines,
                and anything that removes friction from the feedback loop.
              </p>
            </div>
          </div>
          {/* Skills summary */}
          <h3 className="about-page-h3">Toolkit at a glance</h3>
          <div className="about-skills-grid">
            {skills.categories.map((cat) => (
              <div key={cat.group} className="about-skill-group">
                <span className="about-skill-label">{cat.group}</span>
                <div className="tags">
                  {cat.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="page-rule" />

      {/* ── Projects ──────────────────────────────────────────── */}
      <section className="about-page-section container" id="projects">
        <div className="about-page-label">
          <Briefcase size={16} />
          <span>Projects</span>
        </div>
        <div className="about-page-body">
          <h2 className="about-page-h2">Things I&apos;ve built</h2>
          <p>
            A selection of projects I&apos;ve worked on — ranging from coursework explorations to real
            software products. More are on the way.
          </p>
          <div className="about-project-list">
            {projects.items.map((project) => (
              <a
                key={project.number}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="about-project-row"
              >
                <div>
                  <strong>{project.name}</strong>
                  <span>{project.type}</span>
                </div>
                <div className="tags">
                  {project.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <ArrowUpRight size={15} className="about-project-arrow" />
              </a>
            ))}
          </div>
          <div className="about-cta-row">
            <Link href="/#work" className="button button-dark">
              See full project details <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <div className="page-rule" />

      {/* ── Goals ─────────────────────────────────────────────── */}
      <section className="about-page-section container" id="goals">
        <div className="about-page-label">
          <ArrowUpRight size={16} />
          <span>Goals</span>
        </div>
        <div className="about-page-body">
          <h2 className="about-page-h2">Where I&apos;m headed</h2>
          <p>
            Right now my focus is finishing my degrees, shipping real software through Cloudzyne, and
            deepening my technical depth — particularly in AI and cloud. I&apos;m looking for opportunities
            where I can contribute meaningfully, keep learning fast, and work on problems that actually
            matter to the people using the software.
          </p>
          <p>
            Longer term I want to build products people rely on and to eventually lead engineering
            teams that care as much about the craft as the outcome.
          </p>
          <div className="about-cta-row">
            <a
              className="button button-dark"
              href={`mailto:${personal.email}`}
            >
              Get in touch <ArrowUpRight size={14} />
            </a>
            <a
              className="text-link"
              href={personal.resumePath}
              target="_blank"
              rel="noopener noreferrer"
            >
              View résumé <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
