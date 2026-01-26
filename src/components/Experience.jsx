import { useInView } from "../hooks/useInView";

const EXPERIENCE = [
  {
    company: "Shreeji Woodcraft",
    role: "Data Engineer",
    type: "Internship",
    period: "Jan 2024 - Jun 2024",
  },
  {
    company: "Vartak Computers",
    role: "Web Development Intern",
    type: "Internship",
    period: "May 2021 - Oct 2021",
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
      <h2 className="section-title">
        <span>Experience</span>
      </h2>
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
          </div>
        ))}
      </div>
      <style>{`
        .experience__list { 
          display: flex; 
          flex-direction: column; 
          gap: 1.25rem; 
        }
        .experience__card {
          background: rgba(19, 24, 31, 0.5);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 1.5rem;
          transition: all 0.3s ease;
          transition-delay: calc(var(--i, 0) * 0.1s);
          opacity: 0;
          transform: translateY(16px);
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
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
          background: rgba(34, 211, 238, 0.08);
          border-color: var(--accent);
          transform: translateY(-6px);
          box-shadow: 0 12px 40px var(--accent-glow);
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
