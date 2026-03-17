import { useInView } from "../hooks/useInView";

const EDUCATION = [
  {
    school: "Northeastern University",
    degree: "Master of Science",
    field: "Information Systems",
    period: "Sep 2024 - Apr 2026",
    location: "Boston, MA",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzaMQkzC-6tzQj8T8EJnGoWzDtNGsiI9i-6A&s",
    highlights: [
      "Specialization in data engineering, cloud infrastructure, and scalable data systems",
      "Advanced coursework in database design, algorithms, and application development",
    ],
  },
  {
    school: "St Francis Institute of Technology",
    degree: "Bachelor of Engineering",
    field: "Electronics and Telecommunications",
    period: "2021 - 2024",
    location: "Mumbai, India",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWFvTad6gAX0GtUSqjXKmiQ9sJx9z1i5YY6g&s",
    highlights: [
      "Comprehensive foundation in database systems, cloud computing, and security",
      "Strong technical background in data structures, algorithms, and signal processing",
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
      <div className="education__layout">
        <div className="education__intro">
          <h2 className="section-title">
            <span>Education</span>
          </h2>
        </div>
        <div className="education__list">
          {EDUCATION.map((item, i) => (
            <div key={i} className="education__card" style={{ "--i": i }}>
              <div className="education__header">
                <button
                  type="button"
                  className="education__logo"
                  aria-label={`${item.school} logo`}
                >
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt=""
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ) : (
                    <span>{item.school?.[0]}</span>
                  )}
                </button>
                <div className="education__info">
                  <h3 className="education__degree">
                    {item.degree} {item.field ? `- ${item.field}` : ""}
                  </h3>
                  <p className="education__school">{item.school}</p>
                  <p className="education__meta">
                    <span>{item.location}</span>
                    <span className="education__dot">•</span>
                    <span>{item.period}</span>
                    {item.gpa && (
                      <>
                        <span className="education__dot">•</span>
                        <span className="education__gpa-inline">GPA: {item.gpa}</span>
                      </>
                    )}
                  </p>
                </div>
              </div>
              {item.highlights && (
                <ul className="education__highlights">
                  {item.highlights.map((h, j) => (
                    <li key={j}>
                      <span className="education__bullet" aria-hidden="true">
                        ▸
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .education__layout {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .education__intro {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          width: 100%;
        }
        .education__list {
          display: flex;
          flex-direction: column;
          gap: 1.35rem;
          max-width: 900px;
          margin: 0 auto;
          width: 100%;
        }
        .education__card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 1.6rem 1.8rem;
          transition: all 0.25s ease;
          transition-delay: calc(var(--i, 0) * 0.1s);
          opacity: 0;
          transform: translateY(16px);
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.1);
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
          background: var(--bg-card-hover);
          border-color: var(--accent);
          transform: translateY(-4px);
          box-shadow: 0 14px 26px rgba(15, 23, 42, 0.14);
          transition-delay: 0s;
        }
        .education__logo {
          cursor: pointer;
          border: none;
        }
        .education__logo:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 3px;
        }
        .education__logo:focus img,
        .education__logo:focus-visible img {
          filter: brightness(1.05) saturate(1.05);
        }
        .education__logo:hover img {
          filter: brightness(1.05) saturate(1.05);
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
          align-items: flex-start;
          gap: 1.25rem;
          margin-bottom: 0.45rem;
          flex-wrap: wrap;
        }
        .education__logo {
          width: 52px;
          height: 52px;
          border-radius: 999px;
          background: rgba(148, 163, 184, 0.12);
          border: 1px solid rgba(148, 163, 184, 0.25);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          flex: 0 0 auto;
          margin-top: 0.1rem;
        }
        .education__logo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.75) saturate(0.9);
          transition: filter 0.25s ease;
        }
        .education__logo span {
          color: var(--text-muted);
          font-weight: 700;
        }
        .education__info {
          flex: 1;
          min-width: 0;
        }
        .education__degree {
          font-size: 1.08rem;
          color: var(--text);
          font-weight: 700;
          margin-bottom: 0.3rem;
          letter-spacing: -0.01em;
        }
        .education__school {
          color: var(--accent);
          font-size: 0.92rem;
          font-weight: 600;
        }
        .education__meta {
          color: var(--text-muted);
          font-size: 0.86rem;
          margin-top: 0.3rem;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          flex-wrap: wrap;
        }
        .education__dot {
          color: rgba(148, 163, 184, 0.6);
        }
        .education__gpa-inline {
          color: var(--accent);
          font-weight: 600;
        }
        .education__highlights {
          list-style: none;
          display: grid;
          gap: 0.5rem;
          margin-top: 0.65rem;
        }
        .education__highlights li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 500;
        }
        .education__bullet {
          color: var(--accent);
          font-size: 0.9rem;
        }
        @media (max-width: 640px) {
          .education__card {
            padding: 1.25rem;
          }
          .education__degree {
            font-size: 1rem;
          }
          .education__header {
            flex-direction: row;
            gap: 0.85rem;
          }
          .education__logo {
            width: 46px;
            height: 46px;
          }
        }
      `}</style>
    </section>
  );
}
