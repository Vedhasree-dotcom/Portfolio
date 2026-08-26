import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Experience", "experience"],
    ["Contact", "contact"]
  ];

  return (
    <header className="navbar">
      <a href="#home" className="brand">V<span>.</span></a>

      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        ☰
      </button>

      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's Talk</a>
      </nav>
    </header>
  );
}
