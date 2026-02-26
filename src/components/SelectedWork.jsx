import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/selectedWork.css";

const WORK_ITEMS = [
  {
    id: "optic",
    tag: "Agentic AI · Knowledge Automation",
    title: "OPTIC",
    subtitle: "Replacing Senior Expert Escalation Chains With AI",
    metrics: [
      { val: "92%", label: "Cycle time cut" },
      { val: "15 sec", label: "AI latency" },
      { val: "200+", label: "Daily users" },
    ],
    bullets: [
      "Built a GenAI system that captures senior expert reasoning and delivers it as AI recommendations in 15 seconds — eliminating a 1 to 2 hour escalation chain.",
      "Designed production-grade HITL guardrails ensuring every AI recommendation is reviewed before high-stakes use.",
      "Live in production with 90%+ automated resolution rate across 200+ daily users.",
    ],
    stack: ["Generative AI", "RAG", "HITL Guardrails", "Workflow Modernization"],
    detailsPath: "/work/optic",
  },
  {
    id: "fullmapper",
    tag: "Predictive Analytics · Cost Elimination",
    title: "Fullmapper",
    subtitle: "From Incomplete Data to Full Coverage — No Additional Infrastructure",
    metrics: [
      { val: "$1.2M", label: "Annual savings" },
      { val: "80%", label: "Infrastructure cut" },
      { val: "30 hrs", label: "Freed per week" },
    ],
    bullets: [
      "Built a predictive ML model that fills critical data gaps using historical patterns — eliminating the need for $1M+ capital equipment.",
      "Achieved 100% data coverage at near-zero marginal cost, with model accuracy validated daily above the 90% threshold.",
      "Saved $1.2M annually, freed 30 engineering hours per week, and reduced infrastructure utilization by 80%.",
    ],
    stack: ["Predictive Analytics", "XGBoost", "MLOps", "Cross-Org Leadership"],
    detailsPath: "/work/fullmapper",
  },
  {
    id: "genai-program",
    tag: "Enterprise Program · Org Transformation",
    title: "GenAI Adoption Program",
    subtitle: "Building an Enterprise AI Capability From Zero in a Change-Resistant Organization",
    metrics: [
      { val: "200+", label: "Daily active users" },
      { val: "60+", label: "Self-serve AI tools" },
      { val: "3 of 5", label: "Use cases shipped" },
    ],
    bullets: [
      "Self-initiated a full GenAI adoption program with no prior mandate, budget, or team, taking a 300+ person organization vertical from zero AI deployment to 200+ daily active users.",
      "Built the education program, use case discovery process, product delivery pipeline, and self-serve infrastructure that allowed teams to build AI tools independently.",
      "Shipped 3 production products and paused 2 with documented rationale — demonstrating disciplined product judgment across the full program.",
    ],
    stack: ["Program Leadership", "Change Management", "LLMs", "RAG", "Org Transformation"],
    detailsPath: "/work/genai-adoption",
  },
];

export default function SelectedWork() {
  const sectionRef = useRef(null);
  const navigate   = useNavigate();

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
    <section className="section" id="work" ref={sectionRef}>
      <div className="section-inner">

        <div className="work-eyebrow reveal">Selected Work</div>
        <h2 className="section-title reveal" style={{ transitionDelay: "60ms" }}>
          Highlighted Work
        </h2>
        <p className="section-subtitle reveal" style={{ transitionDelay: "120ms" }}>
          Each project includes the problem context, solution architecture, key decisions, and measured impact.
        </p>

        <div className="work-list">
          {WORK_ITEMS.map((item, idx) => (
            <article
              key={item.id}
              className="work-card reveal"
              style={{ transitionDelay: `${160 + idx * 80}ms` }}
            >
              {/* Top accent bar */}
              <div className="work-card-top" />

              <div className="work-inner">
                {/* LEFT — meta */}
                <div className="work-meta">
                  <span className="work-tag">{item.tag}</span>
                  <h3 className="work-title">{item.title}</h3>
                  <p className="work-subtitle">{item.subtitle}</p>

                  {/* Metric pills */}
                  <div className="work-metrics">
                    {item.metrics.map(({ val, label }) => (
                      <div key={label} className="work-metric-pill">
                        <span className="wm-val">{val}</span>
                        <span className="wm-label">{label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stack chips */}
                  <div className="work-chips">
                    {item.stack.map((s) => (
                      <span key={s} className="chip">{s}</span>
                    ))}
                  </div>
                </div>

                {/* RIGHT — bullets + CTA */}
                <div className="work-body">
                  <ul>
                    {item.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>

                  <div className="work-actions">
                    <button
                      className="work-details-btn"
                      type="button"
                      onClick={() => navigate(item.detailsPath)}
                    >
                      View Full Details →
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}