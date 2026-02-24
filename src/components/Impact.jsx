import { useEffect, useRef } from "react";
import "../styles/impact.css";

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
                <h2 className="section-title reveal">Proven Impact</h2>
                <p className="section-subtitle reveal" style={{ transitionDelay: "80ms" }}>
                    Delivering measurable business outcomes through AI, platform engineering, and product leadership.
                </p>

                <div className="impact-grid">
                    <div className="impact-card reveal" style={{ transitionDelay: "140ms" }}>
                        <div className="impact-metric">$3M+</div>
                        <div className="impact-heading">Annual Cost Savings</div>
                        <p>
                            Deployed predictive ML models that reduced physical measurement tool dependency by 80% in semiconductor
                            manufacturing.
                        </p>
                    </div>

                    <div className="impact-card reveal" style={{ transitionDelay: "220ms" }}>
                        <div className="impact-metric">92%</div>
                        <div className="impact-heading">Cycle Time Reduction</div>
                        <p>
                            Built a Agentic RAG system that optmizes recipe parameter tuning workflow from 1–2 hours to under 5 minutes and live in
                            production.
                        </p>
                    </div>

                    <div className="impact-card reveal" style={{ transitionDelay: "300ms" }}>
                        <div className="impact-metric">60+</div>
                        <div className="impact-heading">RAG Agents Deployed</div>
                        <p>
                            Launched a self-serve RAG platform adopted across a 300+ person department, enabling engineers to build
                            their own AI assistants independently.
                        </p>
                    </div>

                    <div className="impact-card reveal" style={{ transitionDelay: "380ms" }}>
                        <div className="impact-metric">150+</div>
                        <div className="impact-heading">People Trained on GenAI</div>
                        <p>
                            Designed and delivered an enterprise AI education program that shifted a change-resistant manufacturing
                            org from zero GenAI awareness to 100+ daily active users.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
