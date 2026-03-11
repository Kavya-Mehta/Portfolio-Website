import { useInView } from "../hooks/useInView";

const EXPERIENCE = [
  {
    company: "Shreeji Woodcraft",
    role: "Data Engineer",
    type: "Internship",
    period: "Jan 2024 - Jun 2024",
    highlights: [
      "Built and maintained scalable ETL/ELT pipelines consolidating 5 data sources including relational databases and REST APIs, processing 10K+ monthly records with automated data validation and governance controls.",
      "Designed dimensional data warehouse schemas for 18 months of transactional sales data across 50+ SKUs, reducing query complexity and enabling self-serve analytics for 3 business teams.",
      "Implemented CDC-based incremental replication across 5+ warehouse tables, eliminating full-refresh overhead and improving real-time data availability for downstream consumers.",
      "Enforced pre-ingestion data quality and cleansing rules across all source feeds, cutting inconsistent warehouse loads by 25% and strengthening data reliability.",
      "Standardized 12 KPI definitions through reusable SQL reporting views adopted across all business teams, eliminating ad-hoc query duplication and ensuring consistent metric output.",
      "Collaborated with business stakeholders to translate data requirements into SQL-optimized pipeline solutions, accelerating production execution by 25%.",
    ],
  },
  {
    company: "Vartak Computers",
    role: "Web Development Intern",
    type: "Internship",
    period: "May 2021 - Oct 2021",
    highlights: [
      "Developed backend infrastructure for 3 client applications serving 500+ users, implementing REST APIs between MySQL databases and product operations to support structured data storage and retrieval.",
      "Authored SQL extraction queries processing 50K+ monthly records, converting raw application data into dashboard-ready datasets for operational reporting.",
      "Built Python automation scripts eliminating repetitive backend workflows across 3 applications, saving 6+ hours of manual effort weekly.",
      "Optimized relational database performance through indexing strategies, reducing data retrieval latency across all client-facing production environments.",
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <section
      className={`experience ${inView ? "section--in-view" : ""}`}
      id="experience"
      ref={ref}
    >
      <div className="experience__layout">
        <div className="experience__intro">
          <h2 className="section-title">
            <span>Experience</span>
          </h2>
        </div>
        <div className="experience__list">
          {EXPERIENCE.map((item, i) => (
            <div key={i} className="experience__card" style={{ "--i": i }}>
              <div className="experience__header">
                <h3 className="experience__role">{item.role}</h3>
                <span className="experience__type">{item.type}</span>
              </div>
              <p className="experience__company">{item.company}</p>
              {item.period !== "—" && (
                <p className="experience__period">{item.period}</p>
              )}
              {item.highlights?.length > 0 && (
                <ul className="experience__highlights">
                  {item.highlights.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .experience__layout {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .experience__intro {
          position: relative;
        }
        .experience__list { 
          display: flex; 
          flex-direction: column; 
          gap: 1.25rem; 
        }
        .experience__card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 1.5rem;
          transition: all 0.25s ease;
          transition-delay: calc(var(--i, 0) * 0.1s);
          opacity: 0;
          transform: translateY(16px);
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);
        }
        .experience__card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, var(--accent), var(--spot), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .section--in-view .experience__card {
          opacity: 1;
          transform: translateY(0);
        }
        .experience__card:hover {
          background: var(--bg-card-hover);
          border-color: var(--accent);
          transform: translateY(-4px);
          box-shadow: 0 14px 26px rgba(15, 23, 42, 0.14);
          transition-delay: 0s;
        }
        .experience__card:hover::before {
          opacity: 1;
        }
        @media (prefers-reduced-motion: reduce) {
          .experience__card { opacity: 1; transform: none; transition: none; }
          .section--in-view .experience__card { transition: none; }
        }
        .experience__header {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.35rem;
        }
        .experience__role {
          font-size: 1.1rem;
          color: var(--text);
          font-weight: 700;
        }
        .experience__type {
          font-size: 0.75rem;
          padding: 0.3rem 0.6rem;
          background: var(--accent-muted);
          color: var(--accent);
          border-radius: 6px;
          border: 1px solid var(--accent);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .experience__company {
          color: var(--accent);
          font-size: 0.95rem;
          font-weight: 600;
        }
        .experience__period {
          color: var(--text-muted);
          font-size: 0.85rem;
          margin-top: 0.25rem;
        }
        .experience__highlights {
          margin-top: 0.9rem;
          padding-left: 1.1rem;
          display: grid;
          gap: 0.45rem;
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.5;
        }
        .experience__highlights li::marker {
          color: var(--accent);
        }
        @media (max-width: 640px) {
          .experience__card {
            padding: 1.25rem;
          }
          .experience__role {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
