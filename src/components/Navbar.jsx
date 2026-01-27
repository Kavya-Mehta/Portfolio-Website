import { useState } from "react";
import { config } from "../config";

const LINKS = [
  { href: "#about", id: "about" },
  { href: "#experience", id: "experience" },
  { href: "#education", id: "education" },
  { href: "#skills", id: "skills" },
  { href: "#projects", id: "projects" },
  { href: "#contact", id: "contact" },
];

const LABELS = {
  about: "About",
  experience: "Experience",
  education: "Education",
  skills: "Skills",
  projects: "Projects",
  contact: "Contact",
};

export default function Navbar({ scrolled, activeSection, theme, setTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      role="banner"
    >
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo">
          <span className="navbar__logo-icon">✨</span>
          <span className="navbar__logo-text">KM</span>
        </a>
        <button
          type="button"
          className={`navbar__toggle ${open ? "navbar__toggle--open" : ""}`}
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`navbar__nav ${open ? "navbar__nav--open" : ""}`}>
          {LINKS.map(({ href, id }) => (
            <a
              key={id}
              href={href}
              className={`navbar__link ${activeSection === id ? "navbar__link--active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {LABELS[id]}
            </a>
          ))}
          <button
            type="button"
            className="navbar__theme-toggle"
            aria-label="Toggle theme"
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </nav>
      </div>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 1.5rem;
          transition: all 0.3s ease;
          background: rgba(12, 15, 20, 0.75);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
        }
        .navbar--scrolled {
          background: rgba(12, 15, 20, 0.92);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        .navbar__inner {
          max-width: 1140px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar__logo {
          font-family: var(--font-head);
          font-weight: 800;
          font-size: 1.35rem;
          color: var(--text);
          transition: all 0.2s ease;
          letter-spacing: -0.02em;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .navbar__logo-icon {
          font-size: 1.5rem;
          display: inline-block;
          transition: transform 0.3s ease;
        }
        .navbar__logo-text {
          background: linear-gradient(135deg, var(--accent), var(--accent-hover));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transition: all 0.2s ease;
        }
        .navbar__logo:hover {
          transform: translateY(-2px);
        }
        .navbar__logo:hover .navbar__logo-icon {
          transform: rotate(20deg) scale(1.15);
          filter: drop-shadow(0 0 12px var(--accent-glow));
        }
        .navbar__logo:hover .navbar__logo-text {
          filter: drop-shadow(0 0 12px var(--accent-glow));
        }
        .navbar__theme-toggle {
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px 10px;
          font-size: 1.3rem;
          transition: all 0.2s ease;
          color: var(--text);
          border-radius: 8px;
        }
        .navbar__theme-toggle:hover {
          transform: scale(1.15) rotate(20deg);
          filter: drop-shadow(0 0 12px var(--accent-glow));
          background: var(--accent-muted);
        }
        .navbar__toggle {
          display: flex;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          color: var(--text);
        }
        .navbar__toggle span {
          width: 22px;
          height: 2px;
          background: currentColor;
          transition: transform 0.3s ease, opacity 0.2s ease;
          border-radius: 2px;
        }
        .navbar__toggle--open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .navbar__toggle--open span:nth-child(2) { opacity: 0; }
        .navbar__toggle--open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
        .navbar__nav {
          display: none;
          flex-direction: column;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--bg-card);
          padding: 1rem;
          gap: 0.5rem;
          border-bottom: 1px solid var(--border);
        }
        .navbar__nav--open { display: flex; }
        .navbar__link {
          color: var(--text-muted);
          padding: 0.5rem;
          transition: color 0.2s, transform 0.15s, background 0.2s, box-shadow 0.2s;
          border-radius: 6px;
          position: relative;
        }
        .navbar__link:hover { color: var(--accent); }
        .navbar__link--active {
          color: var(--accent);
          font-weight: 700;
          background: var(--accent-muted);
          box-shadow: 0 4px 16px var(--accent-glow);
        }
        @media (min-width: 768px) {
          .navbar__toggle { display: none; }
          .navbar__nav {
            display: flex;
            flex-direction: row;
            position: static;
            background: none;
            border: none;
            padding: 0;
            gap: 0.25rem;
          }
          .navbar__link {
            padding: 0.5rem 0.75rem;
          }
          .navbar__link--active {
            background: var(--accent-muted);
          }
        }
      `}</style>
    </header>
  );
}
