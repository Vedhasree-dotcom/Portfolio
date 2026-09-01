export default function Footer() {
  return (
    <footer className="footer footer-animate">
      <div>
        <strong>
          Vedhasree M<span>.</span>
        </strong>

        <p>MERN Stack Developer • AI/ML Enthusiast</p>
      </div>

      <p>
        © {new Date().getFullYear()} Vedhasree M. Built with React.
      </p>
    </footer>
  );
}