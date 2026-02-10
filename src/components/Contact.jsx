import { config } from "../config";
import { useInView } from "../hooks/useInView";

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const githubUrl = config.githubUrl || `https://github.com/${config.github}`;

  return (
    <section
      className={`contact ${inView ? "section--in-view" : ""}`}
      id="contact"
      ref={ref}
    >
      <div className="contact__layout">
        <div className="contact__intro">
          <h2 className="section-title">
            Get in <span>Touch</span>
          </h2>
          <p className="contact__subtitle">
            Let&apos;s connect and explore how we can work together.
          </p>
        </div>
        <div className="contact__grid">
          <a
            href={`mailto:${config.email}`}
            className="contact__card"
            aria-label="Send an email"
          >
            <span className="contact__icon">✉️</span>
            <div>
              <h3>Email</h3>
              <p>{config.email}</p>
            </div>
          </a>
          <div className="contact__card" aria-label="Location">
            <span className="contact__icon">📍</span>
            <div>
              <h3>Location</h3>
              <p>{config.location || "United States"}</p>
            </div>
          </div>
          <a
            href={config.linkedin}
            className="contact__card"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn"
          >
            <span className="contact__icon">in</span>
            <div>
              <h3>LinkedIn</h3>
              <p>Connect on LinkedIn</p>
            </div>
          </a>
          <a
            href={githubUrl}
            className="contact__card"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub"
          >
            <span className="contact__icon">🐙</span>
            <div>
              <h3>GitHub</h3>
              <p>View repositories</p>
            </div>
          </a>
        </div>
        <a href={`mailto:${config.email}`} className="contact__cta">
          Send Me an Email
        </a>
        <footer className="contact__footer">
          <p>
            © {new Date().getFullYear()} {config.name}. Built with React + Vite.
          </p>
        </footer>
      </div>
      <style>{`
        .contact__layout {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          align-items: center;
        }
        .contact__intro {
          position: relative;
          text-align: center;
        }
        .contact__subtitle {
          color: var(--text-muted);
          font-size: 1rem;
          margin-top: -0.5rem;
        }
        .contact__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          width: min(900px, 100%);
        }
        @media (min-width: 720px) {
          .contact__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .contact__card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 18px;
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);
          color: var(--text);
          transition: all 0.25s ease;
        }
        .contact__card:hover {
          border-color: var(--accent);
          background: var(--bg-card-hover);
          transform: translateY(-3px);
        }
        .contact__card h3 {
          margin-bottom: 0.2rem;
          font-size: 1rem;
        }
        .contact__card p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }
        .contact__icon {
          width: 44px;
          height: 44px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          background: rgba(20, 184, 166, 0.12);
          color: var(--spot);
          font-weight: 700;
        }
        .contact__cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          background: var(--spot);
          color: #03111d;
          font-weight: 700;
          box-shadow: 0 10px 24px rgba(20, 184, 166, 0.35);
        }
        .contact__footer {
          text-align: center;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border);
          color: var(--text-muted);
          font-size: 0.85rem;
        }
        @media (max-width: 640px) {
          .contact__card {
            padding: 1.1rem 1.2rem;
          }
          .contact__cta {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
