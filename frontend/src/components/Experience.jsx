import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Experience() {
  const headingRef = useScrollAnimation();

  return (
    <section id="experience" className="section soft">
      <div
        className="section-heading scroll-reveal"
        ref={headingRef}
      >
        <p className="eyebrow">EXPERIENCE & EDUCATION</p>

        <h2>
          My <span>journey.</span>
        </h2>
      </div>

      <div className="timeline">
        <div
          className="timeline-item timeline-animate"
          style={{ "--delay": "0s" }}
        >
          <span>2025 - 2026</span>

          <div>
            <h3>AI/ML Developer Course</h3>
            <p>ASAP Kerala</p>

            <p>
              Developed practical knowledge of Python, data analysis,
              machine learning and model development.
            </p>
          </div>
        </div>

        <div
          className="timeline-item timeline-animate"
          style={{ "--delay": "0.15s" }}
        >
          <span>2025 - 2026</span>

          <div>
            <h3>MERN Stack Developer Intern</h3>
            <p>Techolas Technologies</p>

            <p>
              Worked with React, Node.js, Express.js and MongoDB while
              building web applications and strengthening full-stack
              development skills.
            </p>
          </div>
        </div>

        <div
          className="timeline-item timeline-animate"
          style={{ "--delay": "0.3s" }}
        >
          <span>2022 - 2025</span>

          <div>
            <h3>Bachelor of Computer Applications</h3>
            <p>Calicut University</p>

            <p>
              Built a foundation in programming, databases, web development
              and software engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}