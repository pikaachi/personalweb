import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/caseStudy.css";

const SECTIONS = [
  { id: "overview",  label: "Overview" },
  { id: "problem",   label: "The Problem" },
  { id: "phases",    label: "What I Did" },
  { id: "usecases",  label: "Use Cases" },
  { id: "results",   label: "Program Results" },
  { id: "skills",    label: "Skills" },
  { id: "lessons",   label: "What I Learned" },
];

export default function GenAIAdoptionCaseStudy() {
  const [activeId, setActiveId] = useState("overview");

  useEffect(() => {
    const targets = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!targets.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length) setActiveId(visible[0].target.id);
      },
      { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0.01 }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <section className="section case" id="top">
        <div className="bg-grid" />
        <div className="case-inner">

          {/* HEADER */}
          <div className="case-top">
            <Link className="case-back" to="/#work">← Back to Selected Work</Link>
            <div className="case-tag-row">
              <span className="case-tag">Program Leadership</span>
              <span className="case-tag">Change Management</span>
              <span className="case-tag">LLMs</span>
              <span className="case-tag">Org Transformation</span>
            </div>
            <h1 className="case-title">GenAI Adoption Program</h1>
            <p className="case-subtitle">Building an Enterprise AI Capability From Zero in a Change-Resistant Organization</p>
          </div>

          {/* HERO CALLOUT */}
          <div className="case-callout case-callout--hero">
            <span className="callout-accent">No mandate. No budget. No team. No executive sponsor.</span>
            <br /><br />
            I took a 300+ person organization from zero AI deployment to 200+ daily active users. Three production products. 60+ self-serve AI tools built independently by the team.
            <br /><br />
            <span className="callout-accent">The technology was the easy part. The people were the real challenge.</span>
          </div>

          {/* METRICS */}
          <div className="case-metrics">
            <div className="case-metric">
              <div className="k">Daily Active Users</div>
              <div className="v">200+</div>
            </div>
            <div className="case-metric">
              <div className="k">Self-Serve AI Tools Built</div>
              <div className="v">60+</div>
            </div>
            <div className="case-metric">
              <div className="k">Onboarding Time Saved</div>
              <div className="v">3 wks</div>
            </div>
            <div className="case-metric">
              <div className="k">Use Cases Shipped</div>
              <div className="v">3 of 5</div>
            </div>
          </div>

          {/* BODY + TOC */}
          <div className="case-layout">
            <div className="case-main">
              <div className="case-body">

                {/* OVERVIEW */}
                <section id="overview" className="case-section">
                  <div className="section-label">Overview</div>
                  <h2>From Zero to Org-Wide AI Capability</h2>
                  <p>AI adoption fails when organizations skip the human work. This organization had strong domain expertise and zero AI vocabulary. Leadership could not evaluate AI applicability because they had no frame of reference for it.</p>
                  <p>External AI services were blocked for security reasons. Internal infrastructure existed but was unused. The gap was awareness and leadership — not technology.</p>
                  <div className="case-details">
                    <div className="case-detail"><div className="k">My Role</div><div className="v">Self-initiated GenAI Adoption Lead — identified the opportunity, built the program, led the delivery</div></div>
                    <div className="case-detail"><div className="k">Scope</div><div className="v">300+ person organization across engineering, analyst, and technician roles</div></div>
                    <div className="case-detail"><div className="k">Products Shipped</div><div className="v">OPTIC, Self-Serve AI Platform, Knowledge Base Agent</div></div>
                    <div className="case-detail"><div className="k">Use Cases</div><div className="v">5 evaluated — 3 shipped, 2 paused with documented rationale</div></div>
                    <div className="case-detail"><div className="k">AI Stack</div><div className="v">Open-source LLMs, RAG, Prompt Engineering, Multimodal LLM</div></div>
                  </div>
                </section>

                {/* PROBLEM */}
                <section id="problem" className="case-section">
                  <div className="section-label">The Problem</div>
                  <h2>Strong Domain Expertise. Zero AI Vocabulary.</h2>
                  <p>Change-resistant operational environments resist AI by design — process stability is a core value, not just a preference. The barriers here were compounded by a security policy blocking all external AI services.</p>
                  <div className="case-insight">
                    The internal AI infrastructure already existed. The barrier was imagination, not access.
                  </div>
                  <div className="stat-row">
                    <div className="stat-pill"><span className="stat-val">0</span><span className="stat-desc">AI products at start</span></div>
                    <div className="stat-pill"><span className="stat-val">300+</span><span className="stat-desc">person organization</span></div>
                    <div className="stat-pill"><span className="stat-val">0</span><span className="stat-desc">leadership sponsors</span></div>
                    <div className="stat-pill"><span className="stat-val">0</span><span className="stat-desc">budget at start</span></div>
                  </div>
                </section>

                {/* PHASES */}
                <section id="phases" className="case-section">
                  <div className="section-label">What I Did</div>
                  <h2>Five Phases — From Zero to Institutional Capability</h2>

                  <div className="step-list">
                    <div className="step-item">
                      <div className="step-num">01</div>
                      <div className="step-content">
                        <div className="step-title">Proof-of-Concept to Unlock Buy-In</div>
                        <div className="step-desc">Built a working prototype independently and demonstrated it live using real organizational data. Watching it work converted skepticism into curiosity. Leadership approved the program the same day.</div>
                      </div>
                    </div>
                    <div className="step-item">
                      <div className="step-num">02</div>
                      <div className="step-content">
                        <div className="step-title">Education Program — 150+ Attendees</div>
                        <div className="step-desc">Designed and delivered a multi-session curriculum covering how LLMs work, prompt engineering, RAG versus model training, and guardrail design. Goal: give every person enough understanding to identify where AI could help their own work.</div>
                      </div>
                    </div>
                    <div className="step-item">
                      <div className="step-num">03</div>
                      <div className="step-content">
                        <div className="step-title">Use Case Discovery and Prioritization</div>
                        <div className="step-desc">Conducted structured interviews with domain experts across every team. Evaluated each idea against data availability, operational impact, and technical feasibility. Five use cases prioritized for development.</div>
                      </div>
                    </div>
                    <div className="step-item">
                      <div className="step-num">04</div>
                      <div className="step-content">
                        <div className="step-title">Three Shipped Products</div>
                        <div className="step-desc">OPTIC eliminated a 1 to 2 hour expert escalation chain. The Self-Serve AI Platform enabled 60+ independent AI tools. The Knowledge Base Agent reduced onboarding by 3 weeks per cohort.</div>
                      </div>
                    </div>
                    <div className="step-item">
                      <div className="step-num">05</div>
                      <div className="step-content">
                        <div className="step-title">Two Disciplined Pauses</div>
                        <div className="step-desc">Two use cases did not ship — and those decisions were as important as the three that did. Both were paused with documented technical prerequisites, not abandoned.</div>
                      </div>
                    </div>
                  </div>

                  <div className="case-insight" style={{ marginTop: 18 }}>
                    Shipping an AI tool that fails unpredictably is worse than not shipping at all. Both pauses protected organizational trust — and that trust is why leadership now sponsors new AI initiatives.
                  </div>
                </section>

                {/* USE CASES */}
                <section id="usecases" className="case-section">
                  <div className="section-label">Use Cases</div>
                  <h2>5 Evaluated. 3 Shipped. 2 Paused.</h2>

                  <div className="usecase-grid">
                    <div className="usecase-card usecase-card--shipped">
                      <div className="usecase-status">SHIPPED</div>
                      <div className="usecase-name">OPTIC</div>
                      <div className="usecase-desc">Expert knowledge automation. 1 to 2 hour escalation chain replaced by AI recommendation in 15 seconds. 90%+ automated resolution. 200+ daily users.</div>
                    </div>
                    <div className="usecase-card usecase-card--shipped">
                      <div className="usecase-status">SHIPPED</div>
                      <div className="usecase-name">Self-Serve AI Platform</div>
                      <div className="usecase-desc">Any team member can build their own AI assistant without engineering support. 60+ tools built independently across the organization.</div>
                    </div>
                    <div className="usecase-card usecase-card--shipped">
                      <div className="usecase-status">SHIPPED</div>
                      <div className="usecase-name">Knowledge Base Agent</div>
                      <div className="usecase-desc">AI assistant trained on all operational documentation. Reduced new team member onboarding by 3 weeks. ~360 hours saved annually.</div>
                    </div>
                    <div className="usecase-card usecase-card--paused">
                      <div className="usecase-status">PAUSED</div>
                      <div className="usecase-name">Image QC Classifier</div>
                      <div className="usecase-desc">Paused due to insufficient data labeling at scale. Prerequisites documented. Placed on V2 roadmap.</div>
                    </div>
                    <div className="usecase-card usecase-card--paused">
                      <div className="usecase-status">PAUSED</div>
                      <div className="usecase-name">Parameter Extraction</div>
                      <div className="usecase-desc">Paused due to inconsistent input formats across tool generations. Technical constraints documented for V2.</div>
                    </div>
                  </div>
                </section>

                {/* RESULTS */}
                <section id="results" className="case-section">
                  <div className="section-label">Program Results</div>
                  <h2>Before and After</h2>
                  <div className="case-table-wrap">
                    <table className="case-table case-table--compare">
                      <thead>
                        <tr>
                          <th>Before</th>
                          <th className="th-after">After</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="td-before">AI = consumer chatbots</td><td className="td-after">150+ people trained on LLMs, RAG, and prompt engineering</td></tr>
                        <tr><td className="td-before">Zero daily AI users</td><td className="td-after">200+ daily active users</td></tr>
                        <tr><td className="td-before">Zero AI products in production</td><td className="td-after">3 AI products live in daily use</td></tr>
                        <tr><td className="td-before">All AI dependent on a small technical team</td><td className="td-after">60+ self-serve tools built independently</td></tr>
                        <tr><td className="td-before">New hires needed months to reach independence</td><td className="td-after">Onboarding reduced by 3 weeks per cohort</td></tr>
                        <tr><td className="td-before">Leadership skeptical of AI applicability</td><td className="td-after">Leadership actively sponsoring new AI initiatives</td></tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* SKILLS */}
                <section id="skills" className="case-section">
                  <div className="section-label">Skills Demonstrated</div>
                  <h2>What This Required</h2>
                  <div className="case-skills">
                    <div className="case-skill-card">
                      <h3>AI/ML Program</h3>
                      <ul>
                        <li>GenAI use case discovery and prioritization</li>
                        <li>RAG system and platform architecture</li>
                        <li>Prompt engineering curriculum design</li>
                        <li>Multimodal LLM evaluation and risk</li>
                        <li>AI adoption metrics design</li>
                        <li>Responsible AI go/no-go judgment</li>
                      </ul>
                    </div>
                    <div className="case-skill-card">
                      <h3>Program Leadership</h3>
                      <ul>
                        <li>0-to-1 program creation without mandate</li>
                        <li>Org-wide change management</li>
                        <li>Proof-of-concept as persuasion strategy</li>
                        <li>Cross-functional team assembly</li>
                        <li>Capability transfer over centralization</li>
                        <li>Stakeholder education at scale</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* LESSONS */}
                <section id="lessons" className="case-section">
                  <div className="section-label">What I Learned</div>
                  <h2>Honest Reflection</h2>
                  <div className="lesson-cards">
                    <div className="lesson-card">
                      <div className="lesson-icon">🧠</div>
                      <div className="lesson-content">
                        <div className="lesson-title">Adoption is a human problem before a technical one</div>
                        <div className="lesson-body">The AI infrastructure existed before I started. The barrier was imagination, not access. Closing that gap required education, demonstration, and a proof-of-concept that made the abstract tangible.</div>
                      </div>
                    </div>
                    <div className="lesson-card">
                      <div className="lesson-icon">⚡</div>
                      <div className="lesson-content">
                        <div className="lesson-title">The self-serve platform was the highest-leverage decision</div>
                        <div className="lesson-body">It transferred capability to every person in the organization. The 60+ tools they built independently are the proof. Centralization would have made the technical team a permanent bottleneck.</div>
                      </div>
                    </div>
                    <div className="lesson-card">
                      <div className="lesson-icon">🛑</div>
                      <div className="lesson-content">
                        <div className="lesson-title">Knowing when not to ship is a product skill</div>
                        <div className="lesson-body">The two paused use cases protected organizational trust. That trust compounds. Leadership's active sponsorship of new AI initiatives is partly a result of those disciplined pauses.</div>
                      </div>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            <aside className="case-toc" aria-label="Table of contents">
              <div className="toc-card">
                <div className="toc-title">On this page</div>
                <nav className="toc-links">
                  {SECTIONS.map((s) => (
                    <a key={s.id} href={`#${s.id}`} className={activeId === s.id ? "is-active" : ""}>
                      {s.label}
                    </a>
                  ))}
                </nav>
                <a className="toc-top" href="#top">Back to top ↑</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
