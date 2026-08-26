export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-heading">
        <p className="eyebrow">ABOUT ME</p>
        <h2>Developer who enjoys <span>solving problems.</span></h2>
      </div>

      <div className="about-grid">
        <div>
          <p>
            I'm Vedhasree M, a BCA graduate from Calicut University with hands-on
            experience in MERN Stack development. I completed a MERN Stack
            internship and an AI/ML Developer course, and I enjoy building
            practical applications with modern web technologies.
          </p>
          <p>
            My interests include responsive frontend development, REST APIs,
            database driven applications and applying machine learning to
            real-world problems.
          </p>
        </div>

        <div className="stats">
          <div><strong>BCA</strong><span>Calicut University</span></div>
          <div><strong>MERN Stack Internship</strong><span>Techolas Technologies</span></div>
          <div><strong>AI/ML Developer Course</strong><span>ASAP Kerala</span></div>
          <div><strong>∞</strong><span>Always Learning</span></div>
        </div>
      </div>
    </section>
  );
}
