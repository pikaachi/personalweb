import { useEffect, useRef } from "react";
import "../styles/philosophy.css";

const PRINCIPLES = [
  {
    title: "Systems Thinking",
    text:
      "I approach problems as interconnected systems, aligning engineering constraints, operational realities, and business objectives to drive durable outcomes.",
  },
  {
    title: "AI with Business Value",
    text:
      "I focus on AI initiatives that create measurable impact — cost savings, speed improvements, and operational reliability — not experimentation without outcomes.",
  },
  {
    title: "Execution Discipline",
    text:
      "From roadmap definition to deployment, I emphasize structured delivery, KPI tracking, and cross-functional alignment to ensure initiatives ship successfully.",
  },
];

export default function Philosophy() {
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
    <section className="section" id="philosophy" ref={sectionRef}>
      <div className="section-inner">
        <h2 className="section-title reveal">How I Work</h2>
        <p className="section-subtitle reveal" style={{ transitionDelay: "80ms" }}>
          Principles guiding AI, product, and platform execution.
        </p>

        <div className="philosophy-grid">
          {PRINCIPLES.map((p, idx) => (
            <div
              key={idx}
              className="philosophy-card reveal"
              style={{ transitionDelay: `${140 + idx * 80}ms` }}
            >
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
