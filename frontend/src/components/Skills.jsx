const groups = {
  "Frontend": ["HTML", "CSS", "JavaScript", "React.js", "Responsive Design"],
  "Backend": ["Node.js", "Express.js", "REST APIs", "JWT", "Nodemailer"],
  "Database": ["MongoDB", "MySQL"],
  "AI / ML": ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
  "Tools": ["Git", "GitHub", "VS Code", "Postman"]
};

export default function Skills() {
  return (
    <section id="skills" className="section soft">
      <div className="section-heading">
        <p className="eyebrow">TECH STACK</p>
        <h2>Tools I use to <span>build.</span></h2>
      </div>

      <div className="skills-grid">
        {Object.entries(groups).map(([name, items]) => (
          <div className="skill-card" key={name}>
            <h3>{name}</h3>
            <div className="tags">
              {items.map(item => <span key={item}>{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
