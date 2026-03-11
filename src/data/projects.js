const GITHUB = "https://github.com/Kavya-Mehta";

export const projects = [
  {
    id: "interview",
    title: "AI-Powered Interview Simulator",
    period: "Feb 2026 – Present",
    tech: [
      "Python",
      "LangChain",
      "OpenAI",
      "Claude",
      "Gemini",
      "FastAPI",
      "React 19",
    ],
    summary:
      "Built an AI-powered mock interview platform that simulates real interview experiences using GPT-4. Supports resume-based personalization, configurable interview types and difficulty levels, and tracks session history across a 4-table PostgreSQL schema. Features JWT authentication, 15+ REST endpoints, and a React 19 frontend with real-time streaming responses.",
    highlights: [
      "Launched a full-stack interview platform using FastAPI and React 19 across Technical, Behavioral, and Mixed modes with 3 levels",
      "Engineered GPT-4 prompt pipelines via LangChain with role-based prompting, few-shot learning, and chain-of-thought reasoning",
      "Implemented real-time streaming response delivery and session completion detection, reducing perceived latency for end users",
      "Secured 15+ REST API endpoints with PyJWT and SHA-256 salted hashing, backed by a 4-table PostgreSQL schema with auto-initialization",
    ],
    alwaysExpanded: true,
    links: [
      { label: "View Code", url: `${GITHUB}/AI-POWERED-INTERVIEW-SIMULATOR` },
    ],
    size: "large",
  },
  {
    id: "movie",
    title: "Movie Analytics Data Pipeline",
    period: "Jan 2026 – Feb 2026",
    tech: ["Databricks", "Alteryx", "ER Studio", "Power BI"],
    summary:
      "Engineered a scalable data pipeline processing 10M+ IMDb records using Databricks Medallion architecture. Designed dimensional data models, implemented data quality frameworks in Alteryx, and built ETL workflows unifying multi-language content across disparate sources. Delivered Power BI dashboards for movie trends, ratings analysis, and regional insights.",
    highlights: [
      "Building end-to-end data pipeline processing 7 IMDb datasets with 10M+ records using Medallion architecture in Databricks",
      "Implementing data profiling and quality validation in Alteryx, tracking lineage from source to target systems",
      "Designing dimensional data model in ER Studio with fact and dimension tables for movie analytics and crew analysis",
      "Developing ETL workflows to unify multi-language titles, regional releases, and crew relationships across disparate sources",
      "Creating Power BI dashboards for movie trends, ratings analysis, genre comparisons, regional insights, episode metrics, etc.",
    ],
    alwaysExpanded: true,
    links: [],
    size: "medium",
  },
  {
    id: "aws",
    title: "AWS Cloud Infrastructure Setup",
    period: "Jan 2025 – Apr 2025",
    tech: ["AWS", "Terraform", "Networking"],
    summary:
      "Built automated CI/CD pipeline with GitHub Actions, Packer, and Terraform, reducing deployment effort by 60%. Provisioned multi-AZ AWS infrastructure with auto-scaling, load balancing across EC2 instances, CloudWatch monitoring, and Route 53 DNS configuration achieving 99.9% fault tolerance.",
    highlights: [
      "Deployed CI/CD pipeline with GitHub Actions, Packer, and Terraform reducing manual deployment effort by 60% and ensuring reliable, production-ready cloud deployments",
      "Provisioned secure AWS infrastructure across 3 availability zones and configured CloudWatch Agent in AMIs for monitoring 15+ metrics",
      "Enabled auto-scaling with Launch Templates and Auto Scaling Groups using CPU utilization-based policies",
      "Deployed Application Load Balancer to evenly distribute HTTP traffic across 4 EC2 instances and ensure 99.9% application fault tolerance",
      "Configured Route 53 with domain and subdomains (dev/demo) for DNS-based access and secure, load balanced routing",
    ],
    alwaysExpanded: true,
    unifiedRepos: [
      { label: "Cloud App", url: `${GITHUB}/Cloud-Native-Webapp` },
      { label: "Infra", url: `${GITHUB}/aws-terraform-infra` },
    ],
    size: "large",
  },
  {
    id: "f1",
    title: "F1 Championship Bayesian Predictor",
    period: "Nov 2025 – Dec 2025",
    tech: ["Python", "PyMC", "Statistical Modeling"],
    summary:
      "Built a Bayesian predictive model using PyMC to forecast F1 Championship standings across 20 drivers and 10 constructors. Processed multi-dimensional race data (qualifying, sprints, weather) and executed Monte Carlo simulations, achieving 72% accuracy in podium predictions.",
    highlights: [
      "Built Bayesian hierarchical model using PyMC to predict 2025 F1 Championship standings for 20 drivers and 10 constructors",
      "Processed season data from 23 races including qualifying, sprint results, and weather conditions, establishing prior distributions updated with real-time data",
      "Executed Monte Carlo simulations generating probabilistic predictions with 72% accuracy for podium finishes",
    ],
    alwaysExpanded: true,
    links: [
      { label: "GitHub", url: `${GITHUB}/F1-Championship-Bayesian-Predictor` },
    ],
    size: "medium",
  },
  {
    id: "cinematic",
    title: "AI-Driven Cinematic Storytelling Pipeline",
    period: "Sep 2025 – Oct 2025",
    tech: ["Python", "Pandas", "NumPy", "OpenCV", "Generative AI", "Jupyter"],
    summary:
      "Built an award-winning Python pipeline that reimagined a fashion film as psychological horror through automated scene sequencing, AI-generated visuals, and emotion-driven data manipulation. Utilized PIL, OpenCV, and rule-based workflows for creative narrative transformation.",
    highlights: [
      "Designed a Python-based creative data pipeline that reimagines a classic fashion film as a psychological horror narrative through logic-driven storytelling",
      "Automated scene sequencing, dialogue transformation, and narrative pacing using Python scripting and rule-based workflows",
      "Generated cinematic visuals using image processing techniques with PIL and OpenCV, enhanced by generative AI models",
      "Applied data manipulation and visualization techniques to support emotion-driven narrative experimentation and creative analysis",
      "Awarded Best Innovation in Creative Coding and Storytelling Excellence as part of INFO 6105 coursework",
    ],
    alwaysExpanded: true,
    links: [
      { label: "View Code", url: `${GITHUB}/Data-Science-Movie-Project` },
    ],
    size: "large",
  },
  {
    id: "portfolio",
    title: "Interactive Portfolio Website",
    period: "Jan 2026",
    tech: ["React", "Vite", "CSS3", "JavaScript"],
    summary:
      "Responsive portfolio built with React + Vite featuring smooth scroll, section tracking, theme persistence, and performance‑focused animations. Modular components with custom hooks for UX polish.",
    highlights: [
      "Built responsive portfolio website with React and Vite featuring smooth scroll animations and section tracking",
      "Implemented dark/light theme toggle with localStorage persistence for seamless user preference management",
      "Designed custom scroll progress indicator and back-to-top navigation for enhanced UX",
      "Created modular component architecture with hooks for intersection observer and active section detection",
      "Optimized performance with lazy loading, CSS animations, and semantic HTML structure",
    ],
    alwaysExpanded: true,
    links: [
      { label: "Live Site", url: "#hero" },
      { label: "GitHub", url: `${GITHUB}/portfolio` },
    ],
    size: "medium",
  },
];
