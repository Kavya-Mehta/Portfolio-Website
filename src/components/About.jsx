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
      <div className="about__container">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>
        <div className="about__text">
          <p className="about__lead">
            I&apos;m a passionate <strong>software engineer</strong> and{" "}
            <strong>data enthusiast</strong> with hands-on experience in{" "}
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
        </div>
      </div>
      <style>{`
        .about {
          margin-top: 3.5rem;
        }
        .about__container {
          max-width: 900px;
          margin: 0 auto;
        }
        .about__text {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .about__lead {
          font-size: 1.05rem;
          color: var(--text);
          font-weight: 600;
          line-height: 1.7;
        }
        .about__lead strong {
          color: var(--accent);
        }
        .about__text p {
          color: var(--text-muted);
          line-height: 1.7;
        }
      `}</style>
    </section>
  );
}
