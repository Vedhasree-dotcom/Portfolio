const projects = [
  {
    number: "01",
    title: "CraftMate",
    type: "MERN / Community Marketplace",
    description:
      "A full stack craft-learning platform where users can purchase tutorials, watch learning content and share their own craft work in a community. Community posts can be liked, creating an interactive learning experience.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    frontendGithub: "https://github.com/Vedhasree-dotcom/CRAFTAPP_FRONT",
    backendGithub: "https://github.com/Vedhasree-dotcom/CRAFTAPP_BACK",
    live: "https://craftapp-front.vercel.app/"
  },
  {
    number: "02",
    title: "Ladies Salon Booking",
    type: "React Web Application",
    description:
      "A responsive salon appointment platform that lets customers explore services and choose available appointment time slots. Designed to make booking simple and convenient.",
    tech: ["React", "JavaScript", "CSS", "Bootstrap"],
    github: "https://github.com/Vedhasree-dotcom/Grace-and-Gloss-Salon",
    live: "https://grace-and-gloss-salon.vercel.app/"
  },
  {
    number: "03",
    title: "Employee Attrition Prediction",
    type: "AI / Machine Learning",
    description:
      "A machine-learning project that analyzes employee data and predicts attrition risk. Includes data preprocessing, exploratory analysis, model training and evaluation.",
    tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"]
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <p className="eyebrow">SELECTED WORK</p>
        <h2>Projects that show <span>what I can do.</span></h2>
      </div>

      <div className="project-list">
        {projects.map(project => (
          <article className="project-card" key={project.number}>
            <div className="project-number">{project.number}</div>
            <div className="project-content">
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tags">
                {project.tech.map(t => <span key={t}>{t}</span>)}
              </div>

              <div className="project-links">

                {project.frontendGithub && (
                  <a
                    href={project.frontendGithub}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Frontend ↗
                  </a>
                )}

                {project.backendGithub && (
                  <a
                    href={project.backendGithub}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Backend ↗
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>
                )}

              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}