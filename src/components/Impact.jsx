import { useEffect, useRef } from "react";
import "../styles/impact.css";

const CARDS = [
  {
    metric: "$3M+",
    heading: "Annual Cost Savings",
    icon: "💰",
    delay: "140ms",
    body: "Replaced manual data collection with AI-generated predictions. Eliminated 80% of capital tooling costs.",
  },
  {
    metric: "92%",
    heading: "Cycle Time Reduction",
    icon: "⚡",
    delay: "220ms",
    body: "Built a GenAI system that delivers expert-level recommendations in 15 seconds. Cut a 1 to 2 hour process to under 5 minutes.",
  },
  {
    metric: "60+",
    heading: "AI RAG Agents Deployed",
    icon: "🤖",
    delay: "300ms",
    body: "Built a self-serve AI platform. Teams created 60+ custom AI tools independently — no data science support needed.",
  },
  {
    metric: "200+",
    heading: "Daily Active Users",
    icon: "🚀",
    delay: "380ms",
    body: "Designed and delivered an enterprise AI education program. Took a change-resistant org from zero GenAI awareness to 200+ daily active users.",
  },
];

export default function Impact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const items = root.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section" id="impact" ref={sectionRef}>
      <div className="section-inner">

        <div className="impact-eyebrow reveal">Proven Impact</div>
        <h2 className="section-title reveal" style={{ transitionDelay: "60ms" }}>
          Measurable Outcomes. Every Time.
        </h2>
        <p className="section-subtitle reveal" style={{ transitionDelay: "120ms" }}>
          Delivering business results through AI, platform engineering, and product leadership.
        </p>

        <div className="impact-grid">
          {CARDS.map(({ metric, heading, icon, delay, body }) => (
            <div
              key={heading}
              className="impact-card reveal"
              style={{ transitionDelay: delay }}
            >
              <div className="impact-card-top" />
              <div className="impact-card-icon">{icon}</div>
              <div className="impact-metric">{metric}</div>
              <div className="impact-heading">{heading}</div>
              <p>{body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}