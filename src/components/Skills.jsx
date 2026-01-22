import { useInView } from "../hooks/useInView";

const SKILL_GROUPS = [
  {
    title: "Data Engineering",
    items: [
      "Python",
      "SQL",
      "PySpark",
      "ETL/ELT",
      "Pandas",
      "Databricks",
      "Alteryx",
      "Power BI",
      "Tableau",
      "Snowflake",
      "Apache Airflow",
      "PyMC",
    ],
  },
  {
    title: "Web & Cloud",
    items: [
      "HTML/CSS",
      "JavaScript",
      "React",
      "AWS",
      "S3",
      "Lambda",
      "EC2",
      "Azure",
      "Terraform",
      "GitHub Actions",
      "Packer",
    ],
  },
  {
    title: "Tools & Other",
    items: [
      "Git",
      "Linux",
      "R",
      "MySQL",
      "PostgreSQL",
      "Docker",
      "ER Studio",
      "Jupyter",
      "VS Code",
      "REST APIs",
    ],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <section
      className={`skills ${inView ? "section--in-view" : ""}`}
      id="skills"
      ref={ref}
    >
      <h2 className="section-title">
        <span>Skills</span>
      </h2>
      <div className="skills__grid">
        {SKILL_GROUPS.map((group, i) => (
          <div key={i} className="skills__group" style={{ "--i": i }}>
            <h3 className="skills__title">{group.title}</h3>
            <ul className="skills__list">
              {group.items.map((skill, j) => (
                <li key={j} className="skills__item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <style>{`
        .skills__grid {
          display: grid;
          gap: 1.25rem;
        }
        @media (min-width: 640px) {
          .skills__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 900px) {
          .skills__grid { grid-template-columns: repeat(3, 1fr); }
        }
        .skills__group {
          background: rgba(19, 24, 31, 0.4);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 1.5rem;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          transition-delay: calc(var(--i, 0) * 0.1s);
          opacity: 0;
          transform: translateY(16px);
          backdrop-filter: blur(12px);
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .skills__group::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .skills__group::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top right, var(--accent-glow), transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .section--in-view .skills__group {
          opacity: 1;
          transform: translateY(0);
        }
        .skills__group:hover {
          border-color: var(--accent);
          transform: translateY(-10px);
          box-shadow: 0 20px 48px var(--accent-glow);
          background: rgba(34, 211, 238, 0.05);
          transition-delay: 0s;
        }
        .skills__group:hover::before {
          opacity: 1;
        }
        .skills__group:hover::after {
          opacity: 0.1;
        }
        @media (prefers-reduced-motion: reduce) {
          .skills__group { opacity: 1; transform: none; transition: none; }
          .section--in-view .skills__group { transition: none; }
        }
        .skills__title {
          font-size: 1rem;
          color: var(--accent);
          margin-bottom: 1rem;
          font-weight: 700;
          letter-spacing: 0.02em;
        }
        .skills__list {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .skills__item {
          padding: 0.45rem 0.75rem;
          background: var(--accent-muted);
          border: 1px solid var(--accent);
          border-radius: 10px;
          font-size: 0.8rem;
          color: var(--accent);
          font-weight: 500;
          transition: all 0.2s ease;
          cursor: default;
          position: relative;
        }
        .skills__item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--accent);
          border-radius: 10px;
          opacity: 0;
          z-index: -1;
          transition: opacity 0.2s ease;
        }
        .skills__item:hover {
          background: var(--accent);
          color: #0c0f14;
          transform: scale(1.05);
          font-weight: 600;
        }
        @media (max-width: 640px) {
          .skills__group {
            padding: 1.25rem;
          }
          .skills__title {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
}
