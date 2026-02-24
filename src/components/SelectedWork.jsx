import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/selectedWork.css";

const WORK_ITEMS = [
  {
    id: "optic",
    tag: "SemiAgentic Workflow Enhancement",
    title: "OPTIC",
    subtitle: "From 1–2 Hours to 15 Seconds",
    bullets: [
      "RAG-powered AI system that delivers expert-level parameter recommendations in under 15 seconds.",
      "Replaced a 1–2 hour SME escalation chain for recipe tuning in semiconductor manufacturing.",
      "Includes results table, guardrails, and lessons learned.",
    ],
    stack: ["Generative AI", "RAG", "HITL Guardrails", "Workflow Modernization"],
    detailsPath: "/work/optic",
  },
  {
    id: "fullmapper",
    tag: "Predictive Analytics Model",
    title: "Fullmapper",
    subtitle: "From 16% Chip Coverage to 100%",
    bullets: [
      "Predictive analytics model fills 67 missing measurement points from historical data.",
      "Achieved full wafer coverage at near-zero marginal cost (no additional tools).",
      "Includes outcomes, tradeoffs, and measured impact.",
    ],
    stack: ["Predictive Analytics", "XGBoost", "MLOps", "Cross-Org Leadership"],
    detailsPath: "/work/fullmapper",
  },
  {
    id: "genai-program",
    tag: "Enterprise Program",
    title: "GenAI Adoption",
    subtitle: "From Zero GenAI Awareness to 200+ Daily Users",
    bullets: [
      "Self-initiated GenAI adoption program: education, use cases, product delivery, and self-serve capability.",
      "Shipped 3 products, enabled 60+ self-serve RAG agents, reached 200+ daily active users.",
      "Includes disciplined pauses and program-level results.",
    ],
    stack: ["Program Leadership", "Change Management", "LLMs", "RAG", "Org Transformation"],
    detailsPath: "/work/genai-adoption",
  },
];

export default function SelectedWork() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

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
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section" id="work" ref={sectionRef}>
      <div className="section-inner">
        <h2 className="section-title reveal">Highlighted Work</h2>
        <p className="section-subtitle reveal" style={{ transitionDelay: "80ms" }}>
          Click on “View Details” to explore in depth. Each project includes the problem context, solution architecture, and measured impact.
        </p>

        <div className="work-list">
          {WORK_ITEMS.map((item, idx) => {
            return (
              <article
                key={item.id}
                className="work-card reveal"
                style={{ transitionDelay: `${140 + idx * 70}ms` }}
              >
                {/* Not clickable */}
                <div className="work-header" role="group" aria-label={`${item.title} summary`}>
                  <div className="work-meta">
                    <span className="work-tag">{item.tag}</span>
                    <h3 className="work-title">{item.title}</h3>
                    <p className="work-subtitle">{item.subtitle}</p>

                    <div className="work-chips">
                      {item.stack.map((s) => (
                        <span key={s} className="chip">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Always visible preview */}
                <div className="work-body show">
                  <ul>
                    {item.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>

                  <div className="work-actions">
                    <button
                      className="secondary-btn"
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(item.detailsPath);
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}