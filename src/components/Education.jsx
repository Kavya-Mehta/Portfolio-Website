import { useInView } from "../hooks/useInView";

const EDUCATION = [
  {
    school: "Northeastern University",
    degree: "Master of Science",
    field: "Information Systems",
    period: "2024 - 2026",
    location: "Boston, MA",
    highlights: [
      "Data Science Engineering",
      "Program Structures & Algorithms",
      "Cloud Computing",
      "Web Development",
      "Application Engineering",
    ],
  },
  {
    school: "St Francis Institute of Technology",
    degree: "Bachelor of Engineering",
    field: "Electronics and Telecommunications",
    period: "2022 - 2024",
    location: "Mumbai, India",
    highlights: [
      "Database Management Systems",
      "Cloud Computing and Security",
      "Data Compression and Cryptography",
      "Digital Signal Processing",
    ],
  },
];

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      className={`education ${inView ? "section--in-view" : ""}`}
      id="education"
      ref={ref}
    >
      <h2 className="section-title">
        <span>Education</span>
      </h2>
      <div className="education__list">
        {EDUCATION.map((item, i) => (
          <div key={i} className="education__card" style={{ "--i": i }}>
            <div className="education__header">
              <div className="education__info">
                <h3 className="education__degree">{item.degree}</h3>
                <p className="education__school">{item.school}</p>
                <p className="education__location">{item.location}</p>
              </div>
              <span className="education__period">{item.period}</span>
            </div>
            <p className="education__field">{item.field}</p>
            {item.gpa && <p className="education__gpa">GPA: {item.gpa}</p>}
            {item.highlights && (
              <ul className="education__highlights">
                {item.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <style>{`
        .education__list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .education__card {
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
        .education__card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, var(--accent), var(--spot), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .education__card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 0% 0%, var(--accent-glow), transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .section--in-view .education__card {
          opacity: 1;
          transform: translateY(0);
        }
        .education__card:hover {
          background: rgba(34, 211, 238, 0.05);
          border-color: var(--accent);
          transform: translateY(-10px);
          box-shadow: 0 20px 48px var(--accent-glow);
          transition-delay: 0s;
        }
        .education__card:hover::before {
          opacity: 1;
        }
        .education__card:hover::after {
          opacity: 0.1;
        }
        @media (prefers-reduced-motion: reduce) {
          .education__card {
            opacity: 1;
            transform: none;
            transition: none;
          }
          .section--in-view .education__card {
            transition: none;
          }
        }
        .education__header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 0.65rem;
          flex-wrap: wrap;
        }
        .education__info {
          flex: 1;
          min-width: 0;
        }
        .education__degree {
          font-size: 1.1rem;
          color: var(--text);
          font-weight: 700;
          margin-bottom: 0.3rem;
          letter-spacing: -0.01em;
        }
        .education__school {
          color: var(--accent);
          font-size: 0.9rem;
          font-weight: 600;
        }
        .education__location {
          color: var(--text-muted);
          font-size: 0.85rem;
          margin-top: 0.25rem;
        }
        .education__period {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .education__field {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }
        .education__gpa {
          color: var(--accent);
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          display: inline-block;
          padding: 0.3rem 0.65rem;
          background: var(--accent-muted);
          border-radius: 8px;
        }
        .education__highlights {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .education__highlights li {
          padding: 0.45rem 0.8rem;
          background: var(--accent-muted);
          border: 1px solid var(--accent);
          border-radius: 10px;
          font-size: 0.8rem;
          color: var(--accent);
          font-weight: 600;
          transition: all 0.2s ease;
        }
        .education__highlights li:hover {
          background: var(--accent);
          color: #0c0f14;
          transform: scale(1.05);
        }
        @media (max-width: 640px) {
          .education__card {
            padding: 1.25rem;
          }
          .education__degree {
            font-size: 1rem;
          }
          .education__header {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
}
