import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useInView } from "../hooks/useInView";
import { projects } from "../data/projects";

function ProjectCard({ project, index, inView, onReadMore }) {
  const summary = project.summary || project.highlights?.[0];

  return (
    <article
      className={`project-card project-card--${project.size} project-card--${project.id} ${inView ? "project-card--visible" : ""}`}
      style={{ "--i": index }}
    >
      <div className="project-card__surface">
        <div className="project-card__header">
          <span className="project-card__period">{project.period}</span>
          <h3 className="project-card__title">{project.title}</h3>
          <div className="project-card__tech">
            {project.tech.map((t) => (
              <span key={t} className="project-card__tag">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="project-card__body">
          {summary && <p className="project-card__summary">{summary}</p>}
        </div>
        <div className="project-card__footer">
          <button
            type="button"
            className="project-card__readmore"
            onClick={() => onReadMore(project)}
          >
            Read more
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.08 });
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (activeProject) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [activeProject]);

  return (
    <section
      className={`projects ${inView ? "section--in-view" : ""}`}
      id="projects"
      ref={ref}
    >
      <div className="projects__layout">
        <div className="projects__intro">
          <h2 className="section-title projects__title">
            <span>Projects</span>
          </h2>
        </div>
        <div className="projects__grid">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={i}
              inView={inView}
              onReadMore={setActiveProject}
            />
          ))}
        </div>
      </div>
      {activeProject &&
        createPortal(
          <div
            className="projects__modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeProject.title} details`}
            onClick={() => setActiveProject(null)}
          >
            <div
              className="projects__modal-card"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="projects__modal-close"
                onClick={() => setActiveProject(null)}
                aria-label="Close"
              >
                ×
              </button>
              <div className="projects__modal-header">
                <h3 className="projects__modal-title">{activeProject.title}</h3>
                <span className="projects__modal-period">
                  {activeProject.period}
                </span>
              </div>
              {activeProject.tech?.length > 0 && (
                <div className="projects__modal-tech">
                  {activeProject.tech.map((t) => (
                    <span key={t} className="project-card__tag">
                      {t}
                    </span>
                  ))}
                </div>
              )}
              {activeProject.highlights?.length > 0 && (
                <ul className="projects__modal-list">
                  {activeProject.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}
              <div className="projects__modal-links">
                {activeProject.unifiedRepos?.length > 0 ? (
                  <div className="project-card__segmented">
                    {activeProject.unifiedRepos.map(({ label, url }) => (
                      <a
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__segmented-link"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                ) : activeProject.links?.length > 0 ? (
                  activeProject.links.map(({ label, url }) => (
                    <a
                      key={url}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link"
                    >
                      {label}
                    </a>
                  ))
                ) : (
                  <span className="project-card__coming">Link coming soon</span>
                )}
              </div>
            </div>
          </div>,
          document.body,
        )}
      <style>{`
        body.modal-open {
          overflow: hidden;
        }
        .projects__layout {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .projects__intro {
          position: relative;
        }
        .projects__title { margin-bottom: 2rem; }
        .projects__grid {
          display: grid;
          gap: 1.25rem;
          grid-template-columns: 1fr;
          grid-auto-rows: 1fr;
        }
        @media (min-width: 640px) {
          .projects__grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: auto;
          }
          .project-card--large { grid-column: span 2; }
          .project-card--medium { grid-column: span 2; }
        }
        @media (min-width: 900px) {
          .projects__grid {
            grid-template-columns: 1fr 1fr;
            grid-auto-rows: auto;
            gap: 1.5rem;
          }
          .project-card--large { grid-column: span 1; }
          .project-card--movie { grid-row: span 1 !important; }
          .project-card--medium { grid-column: span 1; grid-row: span 1; }
        }
        .project-card {
          opacity: 0;
          transform: translateY(24px) scale(0.98);
          transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          transition-delay: calc(var(--i, 0) * 0.08s);
        }
        .project-card--visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        @media (prefers-reduced-motion: reduce) {
          .project-card { transition: none; opacity: 1; transform: none; }
          .project-card--visible { opacity: 1; transform: none; }
          .project-card__surface { transition: none; }
        }
        .project-card__surface {
          height: 100%;
          display: flex;
          flex-direction: column;
          background: linear-gradient(180deg, rgba(96, 165, 250, 0.08), transparent 60%), var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 2rem;
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
          box-shadow: 0 12px 24px rgba(15, 23, 42, 0.12);
        }
        .project-card__surface::before {
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
        .project-card__surface::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, var(--accent-glow), transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .project-card:hover .project-card__surface {
          border-color: var(--accent);
          box-shadow: 0 14px 26px rgba(15, 23, 42, 0.14);
          background: var(--bg-card-hover);
        }
        .project-card:hover .project-card__surface::before {
          opacity: 1;
        }
        .project-card:hover .project-card__surface::after {
          opacity: 0.1;
        }
        .project-card__header {
          margin-bottom: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .project-card__period {
          font-size: 0.8rem;
          position: relative;
          font-weight: 500;
          display: block;
          color: var(--accent);
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }
        .project-card__title {
          font-size: 1.15rem;
          margin-bottom: 0.5rem;
          color: var(--text);
          line-height: 1.3;
        }
        .project-card__tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .project-card__tag {
          font-size: 0.75rem;
          padding: 0.3rem 0.6rem;
          background: var(--accent-muted);
          color: var(--accent);
          border-radius: 8px;
          border: 1px solid var(--accent);
          font-weight: 500;
          transition: all 0.2s ease;
          cursor: default;
        }
        .project-card__tag:hover {
          background: var(--accent);
          color: #fff;
          transform: translateY(-2px);
        }
        .project-card__body { 
          flex: 1; 
          overflow: visible;
          display: flex;
          flex-direction: column;
        }
        .project-card__summary {
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.6;
          margin-bottom: 0.85rem;
        }
        .project-card__footer {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        .project-card__readmore {
          font-size: 0.85rem;
          padding: 0.35rem 0.75rem;
          background: var(--accent-muted);
          color: var(--accent);
          border-radius: 8px;
          border: 1px solid var(--accent);
          cursor: pointer;
          transition: background 0.2s, transform 0.2s, color 0.2s;
        }
        .project-card__readmore:hover {
          background: var(--accent);
          color: #fff;
          transform: translateY(-1px);
        }
        .project-card__unified {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .project-card__unified-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .project-card__segmented {
          display: inline-flex;
          gap: 0.5rem;
          width: fit-content;
        }
        .project-card__segmented-link {
          font-size: 0.85rem;
          padding: 0.35rem 0.65rem;
          background: var(--accent-muted);
          color: var(--accent);
          border-radius: 8px;
          transition: background 0.2s, transform 0.2s, color 0.2s;
        }
        .project-card__segmented-link:hover {
          background: var(--accent);
          color: #fff;
          transform: translateY(-1px);
        }
        .project-card__link {
          font-size: 0.85rem;
          padding: 0.35rem 0.65rem;
          background: var(--accent-muted);
          color: var(--accent);
          border-radius: 8px;
          transition: background 0.2s, transform 0.2s, color 0.2s;
        }
        .project-card__link:hover {
          background: var(--accent);
          color: #fff;
          transform: translateY(-1px);
        }
        .project-card__coming {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-style: italic;
        }

        .projects__modal {
          position: fixed;
          inset: 0;
          background: rgba(2, 6, 23, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.5rem;
          z-index: 2000;
          backdrop-filter: blur(8px);
        }
        .projects__modal-card {
          width: min(860px, 100%);
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 2rem;
          position: relative;
          box-shadow: var(--shadow-lg);
          max-height: 80vh;
          overflow: auto;
        }
        .projects__modal-close {
          position: absolute;
          top: 0.9rem;
          right: 0.9rem;
          border: none;
          background: var(--accent-muted);
          color: var(--accent);
          width: 32px;
          height: 32px;
          border-radius: 999px;
          cursor: pointer;
          font-size: 1.2rem;
          line-height: 1;
        }
        .projects__modal-header {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          margin-bottom: 1rem;
        }
        .projects__modal-title {
          font-size: 1.35rem;
          color: var(--text);
        }
        .projects__modal-period {
          color: var(--accent);
          font-size: 0.9rem;
          font-weight: 600;
        }
        .projects__modal-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1rem;
        }
        .projects__modal-list {
          list-style: none;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.25rem;
          padding: 0;
        }
        .projects__modal-list li {
          position: relative;
          padding-left: 1rem;
          margin-bottom: 0.45rem;
        }
        .projects__modal-list li::before {
          content: '●';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-size: 0.5rem;
          top: 0.4em;
        }
        .projects__modal-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          align-items: center;
        }
        
        /* Compact styling for Movie Analytics Data Pipeline card */
        .project-card--movie .project-card__surface {
          padding: 1.5rem;
        }
        .project-card--movie .project-card__header {
          margin-bottom: 0.75rem;
        }
        .project-card--movie .project-card__period {
          margin-bottom: 0.3rem;
        }
        .project-card--movie .project-card__title {
          margin-bottom: 0.4rem;
        }
        .project-card--movie .project-card__tech {
          gap: 0.35rem;
        }
        .project-card--movie .project-card__tag {
          padding: 0.25rem 0.5rem;
        }
        .project-card--movie .project-card__footer {
          margin-top: 0.75rem;
          padding-top: 0.75rem;
        }
      `}</style>
    </section>
  );
}
