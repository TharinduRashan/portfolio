import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section className="section container" id="skills">
      <div className="section-heading">
        <span className="section-kicker">{skills.kicker}</span>
        <h2>
          {skills.heading.main}
          <br />
          <span className="muted">{skills.heading.muted}</span>
        </h2>
      </div>
      <div className="skills-layout">
        <p className="skills-intro">{skills.intro}</p>
        <div className="skill-groups">
          {skills.categories.map((skill, index) => (
            <div className="skill-row" key={skill.group}>
              <span className="skill-number">0{index + 1}</span>
              <div>
                <h3>{skill.group}</h3>
                <div className="skill-pills">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
