import { config } from "../config";
import { useInView } from "../hooks/useInView";

const techChips = [
  "Python",
  "SQL",
  "C#",
  "Typescript",
  "AWS",
  "Tableau",
  "React",
  "Terraform",
];

const socials = [
  {
    label: "GitHub",
    href: config.githubUrl,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.49 0-.24 0-.87 0-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.52 1.02 1.52 1.02.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.02-2.69-.1-.25-.45-1.26.1-2.63 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.9-1.3 2.74-1.02 2.74-1.02.56 1.37.21 2.38.11 2.63.63.7 1.02 1.6 1.02 2.69 0 3.85-2.34 4.7-4.58 4.95.36.31.69.92.69 1.85 0 1.33 0 2.4 0 2.73 0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: config.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.98 3.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5ZM3 9h3.96v12H3V9Zm6.75 0H14v1.71h.05c.59-1.12 2.02-2.3 4.17-2.3 4.46 0 5.28 2.93 5.28 6.74V21H19.5v-5.25c0-1.25-.02-2.86-1.74-2.86-1.75 0-2.02 1.37-2.02 2.77V21h-3.96V9Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${config.email}`,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 6h16v12H4z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="m4 7 8 6 8-6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
];

const Hero = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <>
      <section id="hero" className="hero" ref={ref}>
        <div className="hero__grid" aria-hidden="true">
          {Array.from({ length: 6 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>

        <div className="hero__wrapper">
          <div className="hero__top">
            <div className="hero__main">
              <div className="hero__text hero__text--reveal">
                <h1 className="hero__title">
                  <span className="hero__name">Kavya</span>
                  <span className="hero__name hero__name--accent">Mehta</span>
                </h1>
                <p className="hero__tagline">
                  Data-driven engineer building resilient cloud analytics
                  experiences.
                </p>

                <div
                  className="hero__chips"
                  role="list"
                  aria-label="Core technologies"
                >
                  {techChips.map((chip) => (
                    <span key={chip} role="listitem" className="chip">
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="hero__cta">
                  <a
                    href="#contact"
                    className="btn btn--primary"
                    aria-label="Get in touch"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M4 6h16v12H4z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <path
                        d="m4 7 8 6 8-6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                    <span>Get in Touch</span>
                  </a>
                  <a
                    href="#projects"
                    className="btn btn--ghost"
                    aria-label="View featured projects"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M5 12h14"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <path
                        d="m12 5 7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                    <span>View Featured Projects</span>
                  </a>
                </div>

                <div className="hero__socials" aria-label="Social links">
                  {socials.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn"
                      aria-label={item.label}
                    >
                      {item.icon}
                      <span className="sr-only">{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={`hero__profile ${inView ? "hero__profile--visible" : ""}`}
            >
              <div className="hero__profile-image-wrap">
                <img
                  src={config.profileImage}
                  alt="Kavya Mehta"
                  className="hero__profile-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://github.com/${config.github}.png`;
                    e.target.alt = "Profile";
                  }}
                />
              </div>
              <div className="hero__meta">
                <span>📊 Data Engineering</span>
                <span>📈 Analytics</span>
                <span>☁️ Cloud & DevOps</span>
                <span>🌐 Full Stack Dev</span>
                <span>💻 Software Engineering</span>
              </div>
            </div>
          </div>

        </div>
      </section>
      <style>{`
      .hero {
        position: relative;
        min-height: 90vh;
        padding: 9.5rem 1.5rem 3.5rem;
        display: flex;
        align-items: center;
        overflow: hidden;
      }
      .hero__wrapper {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 3.5rem;
      }
      .hero__top {
        display: flex;
        flex-direction: column-reverse;
        gap: 2.5rem;
        align-items: center;
      }
      .hero__main {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }
      .hero__text {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
      }
      .hero__eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.35rem 0.8rem;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid var(--border);
        border-radius: 999px;
        color: var(--text-muted);
        font-size: 0.95rem;
        width: fit-content;
      }
      .hero__title {
        font-size: clamp(2.8rem, 6vw, 4rem);
        letter-spacing: -0.03em;
        margin: 0;
        line-height: 1.05;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
      }
      .hero__name {
        font-weight: 800;
        color: var(--text);
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }
      .hero__name--accent {
        color: var(--accent);
      }
      .highlight {
        background: linear-gradient(135deg, var(--accent), var(--accent-hover));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .hero__tagline {
        font-size: 1.05rem;
        line-height: 1.7;
        color: var(--text-muted);
        max-width: 640px;
        text-align: center;
      }
      .hero__chips {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
        justify-content: center;
      }
      .chip {
        padding: 0.35rem 0.75rem;
        border-radius: 999px;
        background: rgba(15, 23, 42, 0.4);
        border: 1px solid rgba(148, 163, 184, 0.2);
        color: var(--text-muted);
        font-size: 0.82rem;
        letter-spacing: 0.01em;
        transition: transform 0.2s ease, border-color 0.2s ease, color 0.2s ease;
      }
      .chip:hover {
        transform: translateY(-2px);
        color: var(--accent);
        border-color: var(--accent-muted);
      }
      .hero__cta {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
        justify-content: center;
      }
      .btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.8rem 1.2rem;
        border-radius: 10px;
        font-weight: 700;
        border: 1px solid transparent;
        font-size: 0.95rem;
        transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
      }
      .btn svg { width: 18px; height: 18px; }
      .btn--primary {
        background: linear-gradient(135deg, var(--accent), var(--accent-hover));
        color: #0c0f14;
        box-shadow: 0 10px 30px var(--accent-glow);
        border-color: var(--accent);
      }
      .btn--primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 18px 40px var(--accent-glow);
      }
      .btn--ghost {
        background: rgba(15, 23, 42, 0.5);
        color: var(--text);
        border-color: rgba(148, 163, 184, 0.22);
      }
      .btn--ghost:hover {
        transform: translateY(-2px);
        border-color: var(--accent-muted);
        color: var(--accent);
      }
      .hero__socials {
        display: flex;
        gap: 0.65rem;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 0.25rem;
      }
      .social-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.25rem;
        border-radius: 6px;
        background: transparent;
        border: none;
        color: var(--text-muted);
        font-weight: 600;
        font-size: 0.85rem;
        transition: transform 0.2s ease, color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
      }
      .social-btn svg {
        width: 22px;
        height: 22px;
        fill: currentColor;
      }
      .social-btn:hover {
        color: var(--text);
        transform: translateY(-2px);
      }
      .social-btn:hover {
        color: var(--accent);
        border-color: var(--accent-muted);
        box-shadow: 0 10px 30px var(--accent-glow);
        transform: translateY(-2px);
      }
      
      .hero__profile {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.25rem;
        opacity: 0;
        transform: translateY(16px);
        transition: opacity 0.5s ease, transform 0.5s ease;
      }
      .hero__profile--visible {
        opacity: 1;
        transform: translateY(0);
      }
      .hero__profile-image-wrap {
        position: relative;
        width: 100%;
        max-width: 300px;
        margin: 0 auto;
      }
      .hero__profile-image {
        width: 100%;
        aspect-ratio: 1;
        object-fit: cover;
        border-radius: 50%;
        display: block;
        border: 4px solid rgba(37, 99, 235, 0.4);
        box-shadow: 0 16px 40px rgba(2, 6, 23, 0.45);
        transition: box-shadow 0.3s ease;
      }
      .hero__profile-image:hover {
        box-shadow: 0 16px 48px var(--accent-glow);
      }
      .hero__meta {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.5rem;
      }
      .hero__meta span {
        padding: 0.35rem 0.7rem;
        border-radius: 999px;
        background: var(--accent-muted);
        color: var(--accent);
        font-weight: 600;
        font-size: 0.8rem;
        border: 1px solid var(--accent);
      }
      
      .hero__grid {
        position: absolute;
        inset: 0;
        background-image:
          linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px);
        background-size: 60px 60px;
        opacity: 0.12;
        border-radius: 24px;
        overflow: hidden;
        pointer-events: none;
      }
      .hero__grid span {
        display: block;
        position: absolute;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background: var(--accent-muted);
        filter: blur(60px);
        opacity: 0.12;
      }
      .hero__grid span:nth-child(1) { top: 10%; left: 8%; }
      .hero__grid span:nth-child(2) { top: 20%; right: 12%; animation-duration: 7s; }
      .hero__grid span:nth-child(3) { bottom: 18%; left: 18%; animation-duration: 5.5s; }
      .hero__grid span:nth-child(4) { bottom: 12%; right: 8%; animation-duration: 6.5s; }
      .hero__grid span:nth-child(5) { top: 45%; left: 45%; animation-duration: 7.5s; }
      .hero__grid span:nth-child(6) { top: 55%; right: 30%; animation-duration: 8s; }
      
      @keyframes rotate-grid { 
        0% { transform: rotate(0deg); } 
        100% { transform: rotate(360deg); } 
      }
      
      /* Mobile Responsive */
      @media (max-width: 640px) {
        .hero {
          padding: 7.5rem 1rem 3rem;
          min-height: auto;
        }
        .hero__wrapper {
          gap: 3rem;
        }
        .hero__top {
          gap: 2rem;
        }
        .hero__title {
          font-size: 1.8rem;
        }
        .hero__tagline {
          font-size: 0.95rem;
        }
        .hero__cta {
          flex-direction: column;
        }
        .btn {
          width: 100%;
          justify-content: center;
        }
        .hero__profile-image-wrap {
          max-width: 200px;
        }
        .hero__about-text {
          gap: 0.8rem;
        }
        .hero__about-lead {
          font-size: 0.95rem;
        }
        .hero__about-text p {
          font-size: 0.9rem;
        }
      }
      
      @media (max-width: 768px) {
        .hero {
          padding: 8rem 1.25rem 3.5rem;
        }
        .hero__socials {
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .social-btn {
          padding: 0.45rem 0.7rem;
          font-size: 0.8rem;
        }
      }
      @media (min-width: 900px) {
        .hero__top {
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 4rem;
        }
        .hero__main {
          flex: 1.1;
        }
        .hero__profile {
          flex: 0.9;
        }
        .hero__title,
        .hero__tagline,
        .hero__chips,
        .hero__cta,
        .hero__socials {
          justify-content: flex-start;
          text-align: left;
        }
      }
      @media (min-width: 900px) {
        .hero__top {
          grid-template-columns: minmax(0, 1.4fr) minmax(0, 0.6fr);
        }
        .hero__profile {
          align-items: flex-end;
        }
        .hero__meta {
          justify-content: flex-end;
        }
      }
      
      @media (min-width: 900px) {
        .hero {
          padding: 10.5rem 2rem 5rem;
        }
        .hero__wrapper {
          gap: 5rem;
        }
      }
    `}</style>
    </>
  );
};

export default Hero;
