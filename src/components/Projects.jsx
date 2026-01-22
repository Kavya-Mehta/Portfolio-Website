import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { projects } from "../data/projects";

function ProjectCard({ project, index, inView }) {
  const [expanded, setExpanded] = useState(project.alwaysExpanded || false);
  const hasHighlights = project.highlights?.length > 0;
  const showMore =
    !project.alwaysExpanded &&
    hasHighlights &&
    project.highlights.length > 2 &&
    !expanded;
  const previewCount = Math.min(2, project.highlights?.length ?? 0);
  const hasUnified = project.unifiedRepos?.length > 0;
  const hasLinks = project.links?.length > 0;

  return (
    <article
      className={`project-card project-card--${project.size} project-card--${project.id} ${inView ? "project-card--visible" : ""}`}
      style={{ "--i": index }}
    >
      <div className="project-card__inner">
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
          {hasHighlights && (
            <ul className="project-card__highlights">
              {(expanded
                ? project.highlights
                : project.highlights.slice(0, previewCount)
              ).map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          )}
          {showMore && (
            <button
              type="button"
              className="project-card__more"
              onClick={() => setExpanded(true)}
              aria-expanded={expanded}
            >
              Read more
            </button>
          )}
        </div>
        <div className="project-card__links">
          {hasUnified ? (
            <div className="project-card__unified">
              <span className="project-card__unified-label">
                2 repos · 1 project
              </span>
              <div className="project-card__segmented">
                {project.unifiedRepos.map(({ label, url }) => (
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
            </div>
          ) : hasLinks ? (
            project.links.map(({ label, url }) => (
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
    </article>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.08 });

  return (
    <section
      className={`projects ${inView ? "section--in-view" : ""}`}
      id="projects"
      ref={ref}
    >
      <h2 className="section-title projects__title">
        <span>Projects</span>
      </h2>
      <div className="projects__grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} inView={inView} />
        ))}
      </div>
      <style>{`
        .projects__inner {
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .projects__title { margin-bottom: 2rem; }
        .projects__grid {
          display: grid;
          gap: 1.25rem;
          grid-template-columns: 1fr;
          grid-auto-rows: auto;
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
        }
        .project-card__inner {
          height: 100%;
          display: flex;
          flex-direction: column;
          background: rgba(19, 24, 31, 0.4);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          backdrop-filter: blur(12px);
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .project-card__inner::before {
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
        .project-card__inner::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, var(--accent-glow), transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .project-card:hover .project-card__inner {
          border-color: var(--accent);
          box-shadow: 0 24px 56px var(--accent-glow);
          transform: translateY(-12px);
          background: rgba(34, 211, 238, 0.06);
        }
        .project-card:hover .project-card__inner::before {
          opacity: 1;
        }
        .project-card:hover .project-card__inner::after {
          opacity: 0.1;
        }
        .project-card__header { margin-bottom: 1rem; }
        .project-card__period {
          font-size: 0.8rem;
          color: var(--accent);
          font-weight: 500;
          display: block;
          margin-bottom: 0.35rem;
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
          border-radius: 6px;
          border: 1px solid var(--accent);
          font-weight: 500;
          transition: all 0.2s ease;
          cursor: default;
        }
        .project-card__tag:hover {
          background: var(--accent);
          color: #0c0f14;
          transform: scale(1.05);
        }
        .project-card__body { 
          flex: 1; 
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .project-card__highlights {
          list-style: none;
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.55;
          overflow: hidden;
          margin: 0;
          padding: 0;
        }
        .project-card__highlights li {
          position: relative;
          padding-left: 1rem;
          margin-bottom: 0.4rem;
        }
        .project-card__highlights li::before {
          content: '●';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-size: 0.5rem;
          top: 0.4em;
        }
        .project-card__more {
          margin-top: 0.5rem;
          background: none;
          border: none;
          color: var(--accent);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          padding: 0;
          text-decoration: underline;
          transition: color 0.2s;
        }
        .project-card__more:hover { color: var(--accent-hover); }
        .project-card__links {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          align-items: center;
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
          color: white;
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
          color: white;
          transform: translateY(-1px);
        }
        .project-card__coming {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-style: italic;
        }
        
        /* Compact styling for Movie Analytics Data Pipeline card */
        .project-card--movie .project-card__inner {
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
        .project-card--movie .project-card__highlights {
          line-height: 1.5;
        }
        .project-card--movie .project-card__highlights li {
          margin-bottom: 0.35rem;
        }
        .project-card--movie .project-card__more {
          margin-top: 0.4rem;
        }
        .project-card--movie .project-card__links {
          margin-top: 0.75rem;
          padding-top: 0.75rem;
        }
      `}</style>
    </section>
  );
}
