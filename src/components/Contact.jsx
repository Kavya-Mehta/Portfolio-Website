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
      <h2 className="section-title">
        Get in <span>Touch</span>
      </h2>
      <div className="contact__box">
        <p className="contact__text">
          I&apos;m open to collaborations, internships, and full-time
          opportunities. Reach out via email or connect on LinkedIn.
        </p>
        <div className="contact__links">
          <a
            href={`mailto:${config.email}`}
            className="contact__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          <a
            href={config.linkedin}
            className="contact__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={githubUrl}
            className="contact__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <footer className="contact__footer">
        <p>
          © {new Date().getFullYear()} {config.name}. Built with React + Vite.
        </p>
      </footer>
      <style>{`
        .contact__box {
          background: rgba(19, 24, 31, 0.4);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 2.5rem 2rem;
          text-align: center;
          max-width: 580px;
          margin: 0 auto 2rem;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          backdrop-filter: blur(12px);
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .contact__box::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .contact__box::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, var(--accent-glow), transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .contact__box:hover {
          border-color: var(--accent);
          box-shadow: 0 20px 48px var(--accent-glow);
          background: rgba(34, 211, 238, 0.06);
          transform: translateY(-8px);
        }
        .contact__box:hover::before {
          opacity: 1;
        }
        .contact__box:hover::after {
          opacity: 0.1;
        }
        .contact__text {
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          font-size: 1rem;
          line-height: 1.65;
          position: relative;
          z-index: 1;
          font-weight: 500;
        }
        .contact__links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.65rem;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }
        .contact__link {
          padding: 0.6rem 1.2rem;
          background: linear-gradient(135deg, var(--accent-muted), rgba(34, 211, 238, 0.2));
          border: 1.5px solid var(--accent);
          border-radius: 10px;
          font-weight: 700;
          color: var(--accent);
          font-size: 0.9rem;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
        }
        .contact__link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: var(--accent);
          transition: left 0.3s ease;
          z-index: -1;
        }
        .contact__link:hover::before {
          left: 0;
        }
        .contact__link:hover {
          color: #0c0f14;
          transform: translateY(-4px);
          box-shadow: 0 10px 24px var(--accent-glow);
          border-color: var(--accent-hover);
        }
        .contact__footer {
          text-align: center;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border);
          color: var(--text-muted);
          font-size: 0.85rem;
        }
        @media (max-width: 640px) {
          .contact__box {
            padding: 2rem 1.5rem;
            margin-bottom: 1.5rem;
          }
          .contact__text {
            font-size: 0.95rem;
            margin-bottom: 1.25rem;
          }
          .contact__links {
            margin-bottom: 1.25rem;
            gap: 0.5rem;
          }
          .contact__link {
            padding: 0.5rem 1rem;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}
