import { config } from "../config";
import { useInView } from "../hooks/useInView";

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <section
      className={`about ${inView ? "section--in-view" : ""}`}
      id="about"
      ref={ref}
    >
      <h2 className="section-title">
        About <span>Me</span>
      </h2>
      <div className="about__grid">
        <div className="about__image-wrap">
          <img
            src={config.profileImage}
            alt="Kavya Mehta"
            className="about__image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://github.com/${config.github}.png`;
              e.target.alt = "Profile";
            }}
          />
          <div className="about__frame" aria-hidden="true" />
        </div>
        <div className="about__text">
          <p className="about__lead">
            I&apos;m a passionate <strong>software engineer</strong> and{"  "}
            <strong>data enthusiast</strong> with hands-on experience in{"  "}
            <strong>full-stack development</strong> and{" "}
            <strong>scalable data solutions</strong>.
          </p>
          <p>
            Currently pursuing my Master&apos;s in Information Systems at
            Northeastern University, graduating April 2026. Through my
            internships, I&apos;ve built everything from REST APIs and
            responsive web applications to ETL pipelines processing thousands of
            records. I love the challenge of writing clean, efficient code that
            solves real problems&mdash;whether that&apos;s optimizing database
            performance or creating seamless user experiences.
          </p>
          <p>
            I thrive at the intersection of software engineering and data
            science, building solutions that not only work well but also provide
            meaningful insights. When I&apos;m not coding, you&apos;ll find me
            exploring cloud architectures, working on machine learning projects,
            or diving into the latest developments in AI and web technologies.
          </p>
          <p>
            I&apos;m excited to bring my technical expertise in Python,
            JavaScript, SQL, and cloud platforms to tackle complex engineering
            challenges and help build the next generation of innovative software
            solutions.
          </p>
          <a
            href={config.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="about__resume"
          >
            Download Resume →
          </a>
        </div>
      </div>
      <style>{`
        .about__grid {
          display: grid;
          gap: 2.5rem;
          align-items: start;
        }
        @media (min-width: 768px) {
          .about__grid { grid-template-columns: 260px 1fr; gap: 3rem; }
        }
        .about__image-wrap {
          position: relative;
          width: 100%;
          max-width: 260px;
          margin: 0 auto;
          animation: float-image 6s ease-in-out infinite;
        }
        @keyframes float-image {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .about__image {
          width: 100%;
          aspect-ratio: 1;
          object-fit: cover;
          border-radius: 16px;
          display: block;
          box-shadow: 0 8px 32px var(--accent-glow);
          transition: box-shadow 0.3s ease;
        }
        .about__image:hover {
          box-shadow: 0 16px 48px var(--accent-glow);
        }
        .about__frame {
          position: absolute;
          inset: -6px;
          border: 2px solid var(--accent);
          border-radius: 18px;
          opacity: 0.5;
          z-index: -1;
          animation: rotate-border 8s linear infinite;
        }
        @keyframes rotate-border {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .about__text { display: flex; flex-direction: column; gap: 1.2rem; }
        .about__lead { font-size: 1.15rem; color: var(--text); font-weight: 600; line-height: 1.6; }
        .about__lead strong { color: var(--accent); }
        .about__text p { color: var(--text-muted); line-height: 1.7; }
        .about__resume {
          margin-top: 0.5rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          transition: all 0.2s ease;
          padding: 0.6rem 1rem;
          background: var(--accent-muted);
          border-radius: 8px;
          width: fit-content;
          color: var(--accent);
        }
        .about__resume:hover { 
          transform: translateX(6px);
          color: var(--accent-hover);
          background: rgba(34, 211, 238, 0.25);
        }
      `}</style>
    </section>
  );
}
