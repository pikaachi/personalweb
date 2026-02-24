import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/caseStudy.css";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "The Problem" },
  { id: "phases", label: "What I Did" },
  { id: "usecases", label: "Use Case Summary" },
  { id: "results", label: "Program Results" },
  { id: "skills", label: "Skills Demonstrated" },
  { id: "lessons", label: "What I Learned" },
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
          <div className="case-top">
            <Link className="case-back" to="/#work">← Back to Selected Work</Link>
            <h1 className="case-title">GenAI Adoption Program</h1>
            <p className="case-subtitle">
              Building a department-wide GenAI capability from zero — in a change-resistant manufacturing environment
            </p>
          </div>

          <div className="case-callout">
            This program started with no mandate, no budget, no team, and no executive champion. Every resource was secured through demonstrated value and a clear vision.
            Three products shipped. One department transformed.
          </div>

          <div className="case-metrics">
            <div className="case-metric"><div className="k">Daily active users</div><div className="v">100+</div></div>
            <div className="case-metric"><div className="k">Self-serve RAG agents built</div><div className="v">60+</div></div>
            <div className="case-metric"><div className="k">Onboarding time saved</div><div className="v">3 wks</div></div>
            <div className="case-metric"><div className="k">Use cases shipped</div><div className="v">3 of 5</div></div>
          </div>

          <div className="case-layout">
            <div className="case-main">
              <div className="case-body">
                <section id="overview" className="case-section">
                  <h2>From Zero GenAI Awareness to 200+ Daily Users</h2>
                  <p>
                    When GenAI adoption was accelerating across industries, the Metrology department, operating in a high-stakes semiconductor manufacturing environment, still
                    hadn't moved at all. Changing the status quo in manufacturing carries real production risk, and leadership lacked both the vocabulary and the vision to evaluate
                    where AI could help. I self-initiated a full GenAI adoption program: from education and infrastructure to use case development, product delivery, and ongoing
                    self-service capability.
                  </p>

                  <div className="case-details">
                    <div className="case-detail"><div className="k">Industry</div><div className="v">Semiconductor Manufacturing</div></div>
                    <div className="case-detail"><div className="k">Constraint</div><div className="v">Enterprise ban on external AI services (Claude, OpenAI) for data security reasons</div></div>
                    <div className="case-detail"><div className="k">Goal</div><div className="v">Org-wide capability transfer vs. central bottleneck</div></div>
                  </div>
                </section>

                <section id="problem" className="case-section">
                  <h2>A Change-Resistant Environment With Untapped Potential</h2>
                  <p>
                    Manufacturing environments resist change by design as process stability is a production value, not just an organizational preference. When I identified the opportunity
                    to deploy GenAI across the Metrology department, the barriers were significant: near-zero awareness of what LLMs could actually do, an enterprise ban on external AI
                    services like ChatGPT and Claude, deep cultural skepticism, and no established product team or infrastructure.
                  </p>
                  <p>
                    The entire department's concept of GenAI was asking ChatGPT questions. Nobody, including technical leaders, could articulate use cases pertaining to the industry.
                  </p>
                  <ul>
                    <li>Department-wide concept of GenAI limited to consumer chatbot interactions</li>
                    <li>Enterprise ban on external AI services (Claude, OpenAI) for data security reasons</li>
                    <li>No internal GenAI infrastructure, product team, or deployment precedent</li>
                    <li>Cultural resistance rooted in production stability requirements</li>
                    <li>Leadership skepticism as technical leaders couldn't visualize applicable use cases</li>
                  </ul>
                </section>

                <section id="phases" className="case-section">
                  <h2>Five Phases — From Idea to Institutional Capability</h2>

                  <h3>Phase 1 — Proof-of-Concept to Unlock Leadership Buy-In</h3>
                  <p>
                    Explaining RAG architectures to manufacturing executives wasn't going to work. I built a working RAG prototype independently and demonstrated it directly to technical leaders,
                    showing their own process data being queried intelligently in real time. Seeing it converted skepticism into curiosity. I received departmental green light to lead the program.
                  </p>

                  <h3>Phase 2 — Department-Wide Education (150+ Attendees)</h3>
                  <p>
                    Before any product work could begin, I had to address the foundational knowledge gap. I designed and delivered a multi-session education program attended by 150+ people across
                    engineering, analyst, and technician roles. The curriculum covered what LLMs actually are, real-world industry use cases, prompt engineering fundamentals, the difference between
                    RAG and model training, and how to design guardrails for high-stakes environments.
                  </p>

                  <h3>Phase 3 — Use Case Discovery & Prioritization</h3>
                  <p>
                    Following the education sessions, I conducted structured user interviews with SMEs across Metrology teams to identify workflows where GenAI could provide genuine value. I brought
                    use cases to the Data Science team with structured requirements and assembled a cross-functional product team. From all ideas, 5 use cases were prioritized, evaluated on data availability,
                    workflow impact, and technical risk.
                  </p>

                  <h3>Phase 4 — Three Shipped Products</h3>
                  <p><strong>OPTIC — RAG-Powered Parameter Optimizer</strong></p>
                  <p>
                    A RAG system trained on historical parameter data, research papers, and tool manuals that delivers expert-level recipe parameter recommendations in under 15 seconds, replacing a 1–2 hour SME
                    escalation chain. Full case study available separately.
                  </p>

                  <p><strong>RAGSaaS — Self-Serve RAG Platform</strong></p>
                  <p>
                    Rather than centralizing all AI capability in the DS team, which would have created a permanent bottleneck, I built RAGSaaS as a self-serve platform that empowered any engineer to build their
                    own document-grounded AI assistant. I trained users on chunking strategy, retrieval tuning, indexing configuration, and guardrail setup. Result: 60+ RAG agents independently created by engineers
                    across the department. RAGSaaS transferred AI capability from a central team to every engineer, a force multiplier that no single product could achieve.
                  </p>

                  <p><strong>SOP & Manual Agent — Onboarding Accelerator</strong></p>
                  <p>
                    A RAG agent trained on the full library of Standard Operating Procedures and equipment manuals. Previously, finding accurate procedural information required manually searching hundreds of documents —
                    costly during onboarding and daily operations. The agent reduced new engineer and technician onboarding by 3 weeks. With 5 engineers and 7 technicians onboarded annually on average, this translates
                    to ~360 person-hours of onboarding time saved per year. Adoption was verified by comparing document access rates vs. agent query volume.
                  </p>

                  <h3>Phase 5 — Two Disciplined Pauses</h3>
                  <p>Two use cases did not ship and those decisions were as important as the three that did.</p>
                  <ul>
                    <li>
                      Image QC Classifier: A multimodal LLM to classify good vs. bad measurement images was paused due to insufficient historical data labeling. Relabeling the full image dataset was too large a scope
                      to pursue without guaranteed model improvement. Paused with documented data labeling requirements as prerequisites for any future attempt.
                    </li>
                    <li>
                      Parameter Extraction from Tool Images: Inconsistent image formats across tool generations made reliable parameter extraction infeasible with current multimodal capabilities. Paused with documented
                      technical constraints and placed on a future roadmap contingent on improved multimodal accuracy.
                    </li>
                  </ul>

                  <div className="case-callout" style={{ marginTop: 14 }}>
                    Knowing when not to ship is a senior product judgment. In a manufacturing environment, an unreliable AI tool is worse than no tool at all.
                    Both pauses protected production quality — and preserved the department's trust in the program.
                  </div>
                </section>

                <section id="usecases" className="case-section">
                  <h2>Use Case Summary</h2>
                  <div className="case-table-wrap">
                    <table className="case-table">
                      <thead>
                        <tr>
                          <th>Use Case</th>
                          <th>Outcome</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>OPTIC</td><td>Recipe tuning: 1–2 hrs → &lt;5 min. 90%+ automated resolution. ~200 users.</td><td>SHIPPED</td></tr>
                        <tr><td>RAGSaaS</td><td>60+ self-serve RAG agents built independently by engineers across the dept.</td><td>SHIPPED</td></tr>
                        <tr><td>SOP Agent</td><td>3-week onboarding reduction. ~360 hrs/year saved. Verified via access rate data.</td><td>SHIPPED</td></tr>
                        <tr><td>Image QC Classifier</td><td>Paused — incomplete data labeling at scale. Requirements documented for V2.</td><td>PAUSED</td></tr>
                        <tr><td>Parameter Extraction</td><td>Paused — inconsistent image formats across tool generations. V2 roadmap.</td><td>PAUSED</td></tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="results" className="case-section">
                  <h2>Program Results</h2>
                  <div className="case-table-wrap">
                    <table className="case-table">
                      <thead>
                        <tr>
                          <th>Before the Program</th>
                          <th>After the Program</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>GenAI = ChatGPT for asking questions</td><td>150+ people trained on LLMs, RAG, and prompt engineering</td></tr>
                        <tr><td>0 daily GenAI users</td><td>100+ daily active users across engineers, analysts, technicians</td></tr>
                        <tr><td>0 AI products in production</td><td>3 AI products live in production</td></tr>
                        <tr><td>All AI capability in central DS team</td><td>60+ self-serve RAG agents built independently by engineers</td></tr>
                        <tr><td>3-month analyst onboarding</td><td>3 weeks saved per cohort via SOP Agent</td></tr>
                        <tr><td>Leadership skeptical of AI applicability</td><td>Technical leaders actively sponsoring new AI use cases</td></tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="skills" className="case-section">
                  <h2>Skills Demonstrated</h2>

                  <div className="case-skills">
                    <div className="case-skill-card">
                      <h3>AI/ML Program Skills</h3>
                      <ul>
                        <li>GenAI use case discovery & prioritization</li>
                        <li>RAG system & platform architecture</li>
                        <li>Prompt engineering curriculum design</li>
                        <li>Multimodal LLM evaluation & risk assessment</li>
                        <li>AI adoption metrics design</li>
                        <li>Responsible AI go/no-go judgment</li>
                        <li>Self-serve AI platform product definition</li>
                      </ul>
                    </div>

                    <div className="case-skill-card">
                      <h3>Leadership & Program Skills</h3>
                      <ul>
                        <li>0-to-1 program creation without mandate</li>
                        <li>Org-wide change management</li>
                        <li>Proof-of-concept as persuasion strategy</li>
                        <li>Cross-functional team assembly via business case</li>
                        <li>Capability transfer vs. centralization thinking</li>
                        <li>Stakeholder education at scale</li>
                        <li>Disciplined scope management</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="lessons" className="case-section">
                  <h2>What I Learned</h2>
                  <p>
                    Technology adoption is a human problem before it is a technical one. The internal LLM infrastructure already existed before I started this program.
                    The barrier was imagination — not access. Closing that gap required education, demonstration, and a proof-of-concept that made the abstract tangible.
                  </p>
                  <p>
                    The highest-leverage decision I made was building RAGSaaS as a self-serve platform rather than a centrally-managed service. A centralized model would have made
                    the Data Science team a permanent bottleneck. RAGSaaS transferred capability to end users — and the 60+ agents engineers built independently are proof that the right
                    infrastructure decision multiplies impact far beyond what any single team can deliver.
                  </p>
                  <p>
                    The two paused use cases weren't failures. They were honest assessments of where current AI capabilities met the limits of available data quality. Shipping a tool that
                    doesn't work reliably in a manufacturing environment is worse than not shipping at all. The department's continued trust — and leadership's active sponsorship of new AI exploration —
                    is partly a result of those disciplined pauses.
                  </p>
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