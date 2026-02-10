import { useState } from "react";
import { config } from "../config";

const LINKS = [
  { href: "#hero", id: "hero" },
  { href: "#about", id: "about" },
  { href: "#education", id: "education" },
  { href: "#experience", id: "experience" },
  { href: "#projects", id: "projects" },
  { href: "#skills", id: "skills" },
  { href: "#contact", id: "contact" },
];

const LABELS = {
  hero: "Home",
  about: "About",
  experience: "Experience",
  education: "Education",
  skills: "Skills",
  projects: "Projects",
  contact: "Contact",
};

export default function Navbar({ scrolled, activeSection }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      role="banner"
    >
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo" aria-label="Home" />
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
              <span className="navbar__icon" aria-hidden="true">
                {id === "hero" && (
                  <svg viewBox="0 0 24 24">
                    <path d="M3 11.5 12 4l9 7.5" />
                    <path d="M5 10.5V20h14v-9.5" />
                  </svg>
                )}
                {id === "about" && (
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="3" />
                    <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
                  </svg>
                )}
                {id === "experience" && (
                  <svg viewBox="0 0 24 24">
                    <rect x="4" y="7" width="16" height="12" rx="2" />
                    <path d="M9 7V5h6v2" />
                  </svg>
                )}
                {id === "education" && (
                  <svg viewBox="0 0 24 24">
                    <path d="M12 4 3 9l9 5 9-5-9-5Z" />
                    <path d="M7 12v5a5 5 0 0 0 10 0v-5" />
                  </svg>
                )}
                {id === "skills" && (
                  <svg viewBox="0 0 24 24">
                    <path d="M4 12h7" />
                    <path d="M4 6h12" />
                    <path d="M4 18h10" />
                  </svg>
                )}
                {id === "projects" && (
                  <svg viewBox="0 0 24 24">
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h10" />
                  </svg>
                )}
                {id === "contact" && (
                  <svg viewBox="0 0 24 24">
                    <path d="M4 6h16v12H4z" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                )}
              </span>
              {LABELS[id]}
            </a>
          ))}
        </nav>
      </div>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 0.8rem 1.5rem;
          transition: all 0.3s ease;
          background: transparent;
          border-bottom: 1px solid rgba(148, 163, 184, 0.1);
        }
        .navbar--scrolled {
          background: var(--nav-bg, rgba(11, 16, 32, 0.7));
          backdrop-filter: blur(16px);
          box-shadow: 0 6px 24px rgba(15, 23, 42, 0.12);
        }
        .navbar__inner {
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 1.5rem;
        }
        .navbar__logo {
          width: 0;
          height: 0;
          overflow: hidden;
        }
        .navbar__logo {
          font-family: var(--font-head);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--text);
          transition: all 0.2s ease;
          letter-spacing: -0.02em;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .navbar__logo:hover {
          transform: translateY(-2px);
        }
        .navbar__logo:hover .navbar__logo-text {
          color: var(--accent);
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
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
        }
        .navbar__icon {
          width: 16px;
          height: 16px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: currentColor;
        }
        .navbar__icon svg {
          width: 16px;
          height: 16px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.6;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .navbar__link:hover { color: var(--accent); }
        .navbar__link--active {
          color: var(--accent);
          font-weight: 600;
          background: var(--accent-muted);
        }
        @media (min-width: 768px) {
          .navbar__toggle { display: none; }
          .navbar__nav {
            display: flex;
            flex-direction: row;
            position: static;
            background: rgba(8, 13, 26, 0.8);
            border: 1px solid rgba(148, 163, 184, 0.16);
            padding: 0.4rem;
            gap: 0.2rem;
            border-radius: 999px;
            box-shadow: 0 10px 30px rgba(2, 6, 23, 0.45);
            justify-self: center;
          }
          .navbar__link {
            padding: 0.45rem 1rem;
            border-radius: 999px;
          }
          .navbar__link--active {
            background: var(--accent-muted);
            box-shadow: 0 6px 18px rgba(37, 99, 235, 0.3);
          }
        }
      `}</style>
    </header>
  );
}
