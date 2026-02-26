import { useEffect, useRef } from "react";
import "../styles/experience.css";

const EXPERIENCE = [
  {
    id: "samsung",
    company: "Samsung Semiconductor",
    role: "Technical Product Manager — AI & Data",
    period: "Sep 2022 – Present",
    current: true,
    summary:
      "Leading AI product strategy and delivery across a 300+ person engineering organization. End-to-end ownership from use case discovery to production deployment and org-wide adoption.",
    bullets: [
      "Built and shipped three production AI products — a GenAI knowledge automation system, a predictive ML model, and a self-serve AI platform — collectively driving $3M+ in annual savings and 200+ daily active users.",
      "Managed a $4M product portfolio and delivered a $4.2M platform-critical infrastructure upgrade on schedule with 99.9% uptime across 5+ cross-functional teams.",
      "Initiated and led a 300+ person enterprise GenAI adoption program with no prior budget or mandate — taking the organization from zero AI deployment to 60+ self-serve AI tools in under 18 months.",
      "Developed GenAI RAG pipelines that reduced expert investigation cycles by 92%, freeing 12+ analyst hours per week.",
    ],
    tags: ["AI/ML Product", "GenAI", "RAG", "MLOps", "Platform", "Program Leadership"],
    logo: "/logos/samsung.png",
  },
  {
    id: "jnj",
    company: "Johnson & Johnson",
    role: "Product Owner — Digital Systems",
    period: "Mar 2020 – Aug 2022",
    current: false,
    summary:
      "Owned a digital systems product across a regulated medical device environment. Drove feature delivery, roadmap prioritization, and cross-functional alignment from requirements through release.",
    bullets: [
      "Defined and owned product requirements, user stories, and acceptance criteria, translating complex cross-functional stakeholder needs into a coherent, deliverable backlog.",
      "Maintained roadmap health through iterative agile delivery cycles, balancing technical debt, compliance constraints, and business priorities.",
      "Partnered with engineering, compliance, and business stakeholders to ship product improvements reliably and maintaining delivery cadence in a high-accountability regulated environment.",
    ],
    tags: ["Product Ownership", "Agile", "Regulated Environments", "Roadmap", "Stakeholder Management"],
    logo: "/logos/jnj.png",
  },
  {
    id: "medtronic",
    company: "Medtronic",
    role: "R&D Engineer",
    period: "May 2019 – Nov 2019",
    current: false,
    summary:
      "Early-career engineering role in medical device R&D. Built the technical foundation, structured analysis, cross-functional collaboration, quality standards, that now underpins how I work with data scientists and engineers as a PM.",
    bullets: [
      "Conducted engineering analysis and testing support in a regulated R&D environment with rigorous documentation and quality standards.",
      "Collaborated directly with engineers across development workflows, building the cross-functional working style that carries into every PM role since.",
    ],
    tags: ["R&D", "Engineering", "Medical Devices", "Quality Systems"],
    logo: "/logos/medtronic.png",
  },
];

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const items = root.querySelectorAll(".reveal");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          requestAnimationFrame(() => entry.target.classList.add("is-visible"));
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section" id="experience" ref={sectionRef}>
      <div className="section-inner">

        <div className="exp-eyebrow reveal">Career</div>
        <h2 className="section-title reveal" style={{ transitionDelay: "60ms" }}>
          Professional Experience
        </h2>
        <p className="section-subtitle reveal" style={{ transitionDelay: "120ms" }}>
          From R&D engineering to enterprise AI product leadership — a clear progression toward building things that scale.
        </p>

        <div className="timeline">
          {EXPERIENCE.map((job, idx) => (
            <div
              key={job.id}
              className="timeline-item reveal"
              style={{ transitionDelay: `${160 + idx * 90}ms` }}
            >
              {/* Timeline dot — pulsing for current role */}
              <div className={`timeline-marker${job.current ? " timeline-marker--current" : ""}`} />

              <div className="timeline-content">

                {/* Header */}
                <div className="timeline-header">
                  {job.logo && (
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="company-logo"
                    />
                  )}
                  <div className="timeline-titleblock">
                    <div className="timeline-company-row">
                      <span className="timeline-company">{job.company}</span>
                      {job.current && (
                        <span className="timeline-current-badge">Current</span>
                      )}
                    </div>
                    <h3 className="timeline-role">{job.role}</h3>
                    <div className="timeline-meta">{job.period}</div>
                  </div>
                </div>

                {/* Summary */}
                <p className="timeline-summary">{job.summary}</p>

                {/* Bullets */}
                <ul className="timeline-bullets">
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="timeline-tags">
                  {job.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}