import { useEffect, useRef } from "react";
import "../styles/experience.css";

const EXPERIENCE = [
  {
    id: "samsung",
    company: "Samsung",
    role: "AI / Product Manager",
    period: "Sep 2022 – Present",
    location: "Data Solutions",
    summary:
      "Led AI-driven digital transformation initiatives across semiconductor manufacturing operations.",
    bullets: [
      "Drove ML-driven automation reducing inefficiencies by 80%, saving $3M+.",
      "Managed a $4M product portfolio supporting 4nm technology transfer across global foundries.",
      "Delivered a $4.2M fab-critical platform upgrade on schedule while sustaining 99.9% uptime across 5+ teams.",
      "Developed GenAI RAG pipelines reducing investigation cycles by 40% and saving analysts 12+ hours/week.",
    ],
    tags: ["AI/ML", "MLOps", "Platform", "Roadmap", "Execution"],
    logo: "/logos/samsung.png",
  },
  {
    id: "jnj",
    company: "Johnson & Johnson",
    role: "Product Owner / Digital Systems",
    period: "Mar 2020 – Aug 2022",
    location: "Digital Systems",
    summary:
      "Owned digital system capabilities, aligning stakeholders and delivering improvements through agile execution.",
    bullets: [
      "Defined product requirements, user stories, and acceptance criteria across cross-functional stakeholders.",
      "Tracked KPIs and refined roadmap through iterative agile delivery cycles.",
      "Partnered with engineering, compliance, and business teams to ship reliable improvements.",
    ],
    tags: ["Product", "Agile", "Stakeholders", "Delivery"],
    logo: "/logos/jnj.png",
  },
  {
    id: "medtronic",
    company: "Medtronic",
    role: "R&D Engineer",
    period: "May 2019 – Nov 2019",
    location: "R&D",
    summary:
      "Supported engineering analysis and documentation in an R&D environment focused on quality and reliability.",
    bullets: [
      "Contributed to analysis, testing support, and documentation improvements.",
      "Collaborated with engineers to support development workflows and build readiness.",
    ],
    tags: ["Engineering", "Quality", "Documentation"],
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

          requestAnimationFrame(() => {
            entry.target.classList.add("is-visible");
          });

          io.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section" id="experience" ref={sectionRef}>
      <div className="section-inner">
        <h2 className="section-title reveal">Professional Experience</h2>
        <p
          className="section-subtitle reveal"
          style={{ transitionDelay: "80ms" }}
        >
          A progression of roles across AI, product delivery, and engineering.
        </p>

        <div className="timeline">
          {EXPERIENCE.map((job, idx) => (
            <div
              key={job.id}
              className="timeline-item reveal"
              style={{ transitionDelay: `${140 + idx * 80}ms` }}
            >
              <div className="timeline-marker" />

              <div className="timeline-content">
                <div className="timeline-header">
                  {job.logo ? (
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="company-logo"
                    />
                  ) : null}

                  <div className="timeline-titleblock">
                    <h3 className="timeline-role">{job.role}</h3>
                    <div className="timeline-meta">
                      {job.company} • {job.period}
                      {job.location ? ` • ${job.location}` : ""}
                    </div>
                  </div>
                </div>

                <p className="timeline-summary">{job.summary}</p>

                <ul className="timeline-bullets">
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                <div className="timeline-tags">
                  {job.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
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