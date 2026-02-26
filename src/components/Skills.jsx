// Skills.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import "../styles/skills.css";

export default function Skills() {
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
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const data = useMemo(
    () => ({
      technical: {
        title: "Technical & AI",
        subtitle: "Engineering depth that makes AI shippable.",
        items: [
          { id: "python",           label: "Python" },
          { id: "sql",              label: "SQL" },
          { id: "sklearn",          label: "Scikit-learn" },
          { id: "xgboost",          label: "XGBoost" },
          { id: "feature_eng",      label: "Feature Engineering" },
          { id: "data_validation",  label: "Data Quality & Validation" },
          { id: "rag_arch",         label: "RAG Architecture" },
          { id: "prompt_eng",       label: "Prompt Engineering" },
          { id: "langchain",        label: "LangChain" },
          { id: "openai",           label: "OpenAI" },
          { id: "huggingface",      label: "Hugging Face" },
          { id: "bedrock",          label: "AWS Bedrock" },
          { id: "sagemaker",        label: "Amazon SageMaker" },
          { id: "mlops_monitoring", label: "MLOps & Drift Monitoring" },
          { id: "pipelines",        label: "Data Pipeline Design" },
          { id: "dashboards",       label: "Spotfire / Tableau" },
        ],
      },
      product: {
        title: "Product & Leadership",
        subtitle: "Product judgment that turns AI capability into outcomes.",
        items: [
          { id: "discovery",       label: "Product Discovery & Validation" },
          { id: "prd",             label: "PRD Authoring" },
          { id: "roadmap",         label: "Roadmap Development" },
          { id: "mvp",             label: "MVP Definition & Scoping" },
          { id: "agile",           label: "Agile / Scrum / Kanban" },
          { id: "jira",            label: "JIRA" },
          { id: "stakeholders",    label: "Stakeholder Requirements" },
          { id: "rollout",         label: "Controlled Testing & Rollout" },
          { id: "hitl",            label: "HITL Guardrail Design" },
          { id: "ai_metrics",      label: "AI Success Metrics" },
          { id: "tradeoffs",       label: "Model Eval & Tradeoffs" },
          { id: "kb_governance",   label: "Knowledge Governance" },
          { id: "responsible_ai",  label: "Responsible AI & Risk" },
          { id: "exec_comms",      label: "Executive Communication" },
          { id: "change_mgmt",     label: "Change Management" },
          { id: "org_training",    label: "Org-wide Training Design" },
        ],
      },
      links: {
        python:           { highlights: ["discovery", "ai_metrics", "tradeoffs", "rollout"],           title: "From analysis to shipped outcomes",    text: "Use Python/analytics to validate signals, define success metrics, and support go/no-go decisions for production rollouts." },
        sql:              { highlights: ["stakeholders", "ai_metrics", "kb_governance", "roadmap"],    title: "Data clarity → product clarity",        text: "Use SQL to audit data, define KPI sources of truth, and align stakeholders on what 'good' looks like." },
        sklearn:          { highlights: ["tradeoffs", "ai_metrics", "responsible_ai"],                 title: "Evaluation discipline",                 text: "Model evaluation frameworks translate into product-level tradeoffs (accuracy/latency/cost) and Responsible AI gating." },
        xgboost:          { highlights: ["ai_metrics", "tradeoffs", "rollout"],                        title: "Predictive systems in production",       text: "Strong baselines enable measurable impact and controlled deployment with clear monitoring criteria." },
        feature_eng:      { highlights: ["ai_metrics", "tradeoffs", "stakeholders"],                   title: "Feature choices are product choices",    text: "Feature definitions shape behavior, interpretability, and business outcomes—aligned through stakeholder requirements." },
        data_validation:  { highlights: ["responsible_ai", "kb_governance", "rollout"],                title: "Trust starts with data",                text: "Validation and quality checks reduce risk, improve reliability, and support safe production releases." },
        rag_arch:         { highlights: ["kb_governance", "hitl", "responsible_ai", "discovery"],      title: "RAG systems that users trust",           text: "RAG architecture is inseparable from governance, HITL guardrails, and responsible deployment decisions." },
        prompt_eng:       { highlights: ["hitl", "ai_metrics", "rollout"],                             title: "Prompting with production discipline",   text: "Prompting improves outputs only when paired with guardrails, metrics, and controlled rollout practices." },
        langchain:        { highlights: ["kb_governance", "hitl", "rollout"],                          title: "From prototype to platform",            text: "Frameworks like LangChain scale when backed by governance, safety patterns, and release discipline." },
        openai:           { highlights: ["tradeoffs", "responsible_ai", "ai_metrics"],                 title: "Capability + constraints",              text: "Model selection involves tradeoffs and risk management—measured by latency, quality, and adoption." },
        huggingface:      { highlights: ["tradeoffs", "ai_metrics", "roadmap"],                        title: "Open models → roadmap leverage",         text: "Open-source model options enable roadmap flexibility and clearer cost/latency/quality positioning." },
        bedrock:          { highlights: ["responsible_ai", "rollout", "exec_comms"],                   title: "Enterprise readiness",                  text: "Enterprise GenAI requires security posture, governance, and crisp executive communication on risk and value." },
        sagemaker:        { highlights: ["rollout", "ai_metrics", "tradeoffs"],                        title: "ML systems you can operate",            text: "Operational ML requires reproducible training, evaluation, and deployment controls tied to success metrics." },
        mlops_monitoring: { highlights: ["ai_metrics", "responsible_ai", "rollout"],                   title: "Monitoring is product quality",          text: "Drift detection and monitoring make AI reliable at scale—supporting safer rollouts and clear KPIs." },
        pipelines:        { highlights: ["stakeholders", "kb_governance", "roadmap"],                  title: "Pipelines enable product velocity",      text: "Clean pipelines reduce time-to-insight and unblock teams—powering roadmap execution with fewer surprises." },
        dashboards:       { highlights: ["exec_comms", "ai_metrics", "stakeholders"],                  title: "Storytelling with data",                text: "Dashboards turn complex operations into executive-ready narratives and measurable outcome tracking." },
        discovery:        { highlights: ["python", "sql", "dashboards", "data_validation"],            title: "Discovery grounded in evidence",         text: "Use interviews + data analysis to validate signal strength and define measurable outcomes." },
        prd:              { highlights: ["pipelines", "rag_arch", "mlops_monitoring"],                 title: "PRDs that engineers can build",          text: "Translate requirements into technical constraints: data needs, latency targets, monitoring, and guardrails." },
        roadmap:          { highlights: ["pipelines", "bedrock", "sagemaker", "huggingface"],          title: "Roadmaps with feasibility built-in",     text: "Roadmapping includes platform choices, build vs buy, and operational complexity." },
        mvp:              { highlights: ["python", "langchain", "prompt_eng", "data_validation"],      title: "MVPs that ship",                        text: "Define a minimal slice that is safe, measurable, and operable—not just a demo." },
        agile:            { highlights: ["pipelines", "dashboards"],                                   title: "Delivery rhythm",                       text: "Instrumentation and dashboards keep sprint execution outcome-focused and transparent." },
        jira:             { highlights: ["pipelines", "mlops_monitoring"],                             title: "Operational clarity",                   text: "Tracking work and incidents ties directly to operational ML needs like monitoring and retraining." },
        stakeholders:     { highlights: ["sql", "dashboards", "data_validation"],                      title: "Alignment with proof",                  text: "Use analytics and validation to align stakeholders on requirements and readiness." },
        rollout:          { highlights: ["sagemaker", "mlops_monitoring", "data_validation"],          title: "Controlled release discipline",          text: "Production rollouts require monitoring, data checks, and clear thresholds for success/failure." },
        hitl:             { highlights: ["rag_arch", "prompt_eng", "langchain"],                       title: "Guardrails by design",                  text: "HITL guardrails are implemented through architecture patterns and workflow-aware prompting." },
        ai_metrics:       { highlights: ["sklearn", "xgboost", "mlops_monitoring", "dashboards"],      title: "Define what 'good' is",                 text: "Success metrics connect model performance to user adoption, latency, and business outcomes." },
        tradeoffs:        { highlights: ["openai", "huggingface", "bedrock", "sagemaker"],             title: "Model tradeoffs in context",             text: "Choose models based on constraints—cost, latency, accuracy, and governance needs." },
        kb_governance:    { highlights: ["rag_arch", "pipelines", "data_validation"],                  title: "Knowledge as a product",                text: "RAG systems succeed when knowledge sources are curated, validated, and owned with clear policies." },
        responsible_ai:   { highlights: ["data_validation", "mlops_monitoring", "bedrock"],            title: "Risk-managed AI",                       text: "Responsible AI requires monitoring, quality gates, and enterprise-ready platform controls." },
        exec_comms:       { highlights: ["dashboards", "sql"],                                         title: "Executive-ready narrative",             text: "Clear metrics and visual reporting build buy-in and accelerate decisions." },
        change_mgmt:      { highlights: ["dashboards", "pipelines"],                                   title: "Adoption at scale",                     text: "Adoption improves when you reduce friction, show impact, and measure behavior change." },
        org_training:     { highlights: ["bedrock", "openai", "rag_arch"],                             title: "Enablement with guardrails",             text: "Training works best when paired with safe platforms, reusable patterns, and clear governance." },
      },
    }),
    []
  );

  const [active, setActive] = useState({ side: "product", id: "discovery" });

  const activeNode   = data.links[active.id];
  const leftIsActive = active.side === "technical";

  const leftHighlights  = leftIsActive ? [active.id] : activeNode?.highlights || [];
  const rightHighlights = leftIsActive ? activeNode?.highlights || [] : [active.id];

  return (
    <section className="section" id="skills" ref={sectionRef}>
      <div className="section-inner">

        <div className="skills-eyebrow reveal">Capabilities</div>
        <h2 className="section-title reveal" style={{ transitionDelay: "60ms" }}>
          Skills
        </h2>
        <p className="section-subtitle reveal" style={{ transitionDelay: "120ms" }}>
          Two sides of the same PM. Click any skill to see how technical depth and product judgment connect.
        </p>

        {/* Dual panels */}
        <div className="skills-dual reveal" style={{ transitionDelay: "180ms" }}>

          {/* LEFT: TECH */}
          <div className="skills-panel">
            <div className="skills-panel-top" />
            <div className="skills-panel-head">
              <div className="skills-panel-label">Technical & AI</div>
              <p>{data.technical.subtitle}</p>
            </div>
            <div className="skills-chip-grid">
              {data.technical.items.map((item) => {
                const isSelected    = active.side === "technical" && active.id === item.id;
                const isHighlighted = leftHighlights.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={[
                      "skill-chip",
                      isSelected    ? "is-selected"    : "",
                      !isSelected && isHighlighted  ? "is-highlighted" : "",
                      !isSelected && !isHighlighted ? "is-dimmed"      : "",
                    ].join(" ")}
                    onClick={() => setActive({ side: "technical", id: item.id })}
                    aria-pressed={isSelected}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* CONNECTOR */}
          <div className="skills-connector" aria-hidden="true">
            <div className="skills-connector-line" />
            <div className="skills-connector-icon">↔</div>
            <div className="skills-connector-line" />
          </div>

          {/* RIGHT: PRODUCT */}
          <div className="skills-panel">
            <div className="skills-panel-top" />
            <div className="skills-panel-head">
              <div className="skills-panel-label">Product & Leadership</div>
              <p>{data.product.subtitle}</p>
            </div>
            <div className="skills-chip-grid">
              {data.product.items.map((item) => {
                const isSelected    = active.side === "product" && active.id === item.id;
                const isHighlighted = rightHighlights.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={[
                      "skill-chip",
                      isSelected    ? "is-selected"    : "",
                      !isSelected && isHighlighted  ? "is-highlighted" : "",
                      !isSelected && !isHighlighted ? "is-dimmed"      : "",
                    ].join(" ")}
                    onClick={() => setActive({ side: "product", id: item.id })}
                    aria-pressed={isSelected}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* INSIGHT PANEL */}
        <div className="skills-insight reveal" style={{ transitionDelay: "260ms" }}>
          <div className="skills-insight-top" />
          <div className="skills-insight-header">
            <span className="skills-insight-label">How these connect</span>
            <span className="skills-insight-title">{activeNode?.title || "—"}</span>
          </div>
          <p className="skills-insight-text">
            {activeNode?.text || "Click any skill above to see the connection."}
          </p>
          {(activeNode?.highlights || []).length > 0 && (
            <div className="skills-insight-pills">
              <span className="skills-insight-pills-label">Linked to →</span>
              {(activeNode.highlights).slice(0, 8).map((id) => {
                const opp =
                  active.side === "technical"
                    ? data.product.items.find((x) => x.id === id)?.label
                    : data.technical.items.find((x) => x.id === id)?.label;
                if (!opp) return null;
                return (
                  <span key={id} className="skills-mini-pill">
                    {opp}
                  </span>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}