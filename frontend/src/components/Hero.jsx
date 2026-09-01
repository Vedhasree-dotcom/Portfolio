import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Hero() {
  const heroRef = useScrollAnimation();

  return (
    <section id="home" className="hero section">
      <div className="hero-copy" ref={heroRef}>
        <p className="eyebrow hero-animate hero-delay-1">
          HELLO, I'M VEDHASREE M
        </p>

        <h1 className="hero-animate hero-delay-2">
          Building <span>clean digital experiences</span> with code.
        </h1>

        <p className="hero-text hero-animate hero-delay-3">
          BCA graduate and developer focused on MERN Stack development and
          AI/ML. I enjoy turning ideas into responsive, user-friendly web
          applications.
        </p>

        <div className="hero-actions hero-animate hero-delay-4">
          <a className="btn primary" href="#projects">
            View Projects
          </a>

          <a className="btn secondary" href="#contact">
            Contact Me
          </a>
        </div>

        <div className="socials hero-animate hero-delay-5">
          <a
            href="https://github.com/Vedhasree-dotcom"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/vedha-sree-a1b01b2a0/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="/Vedhasree-resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>
        </div>
      </div>

      <div className="hero-photo-wrap hero-photo-animation">
        <div className="hero-photo-glow"></div>

        <img
          className="hero-photo"
          src="/profile-photo.png"
          alt="Vedhasree - AI/ML & MERN Stack Developer"
        />
      </div>
    </section>
  );
}