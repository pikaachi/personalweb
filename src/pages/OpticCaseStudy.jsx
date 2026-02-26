import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/caseStudy.css";

const SECTIONS = [
  { id: "overview",  label: "Overview" },
  { id: "problem",   label: "The Problem" },
  { id: "role",      label: "What I Did" },
  { id: "how",       label: "How It Works" },
  { id: "results",   label: "Results" },
  { id: "skills",    label: "Skills" },
  { id: "lessons",   label: "What I Learned" },
];

export default function OpticCaseStudy() {
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
              <span className="case-tag">Agentic AI</span>
              <span className="case-tag">Knowledge Automation</span>
              <span className="case-tag">RAG</span>
              <span className="case-tag">Live in Production</span>
            </div>
            <h1 className="case-title">OPTIC</h1>
            <p className="case-subtitle">Replacing Senior Expert Escalation Chains With AI</p>
          </div>

          {/* HERO CALLOUT */}
          <div className="case-callout case-callout--hero">
            <span className="callout-accent">Every organization has this problem.</span>{" "}
            A small group of senior experts hold critical knowledge. Everyone else waits for them. When they are unavailable, work stops.
            <br /><br />
            OPTIC solves it. Expert decision-making logic, delivered as AI recommendations in 15 seconds. Available to the whole team. 24 hours a day.
            <br /><br />
            <span className="callout-accent">This is not a prototype. It is live in production.</span>
          </div>

          {/* METRICS */}
          <div className="case-metrics">
            <div className="case-metric">
              <div className="k">Cycle Time Reduction</div>
              <div className="v">92%</div>
            </div>
            <div className="case-metric">
              <div className="k">AI Recommendation Latency</div>
              <div className="v">15 sec</div>
            </div>
            <div className="case-metric">
              <div className="k">Automated Resolution Rate</div>
              <div className="v">90%+</div>
            </div>
            <div className="case-metric">
              <div className="k">Daily Users</div>
              <div className="v">200+</div>
            </div>
          </div>

          {/* BODY + TOC */}
          <div className="case-layout">
            <div className="case-main">
              <div className="case-body">

                {/* OVERVIEW */}
                <section id="overview" className="case-section">
                  <div className="section-label">Overview</div>
                  <h2>From Escalation Chain to 15-Second AI</h2>
                  <p>Every knowledge-intensive organization has the same vulnerability. Critical expertise concentrated in a few senior people. No scalable way to distribute it.</p>
                  <p>OPTIC captures expert decision-making logic and delivers it as AI recommendations in 15 seconds. No waiting. No escalation. Around the clock.</p>
                  <div className="case-details">
                    <div className="case-detail"><div className="k">My Role</div><div className="v">Technical Product Manager and domain expert — end-to-end owner from discovery to production</div></div>
                    <div className="case-detail"><div className="k">AI Stack</div><div className="v">Generative AI, Retrieval-Augmented Generation (RAG), Human-in-the-Loop guardrails</div></div>
                    <div className="case-detail"><div className="k">Timeline</div><div className="v">4 to 5 months — discovery through production launch</div></div>
                    <div className="case-detail"><div className="k">Team</div><div className="v">Data scientists, software engineers, domain specialists</div></div>
                  </div>
                </section>

                {/* PROBLEM */}
                <section id="problem" className="case-section">
                  <div className="section-label">The Problem</div>
                  <h2>A Bottleneck Built on Tribal Knowledge</h2>
                  <p>The team ran 100+ complex workflows daily. When standard approaches failed, junior staff escalated to specialists. Each escalation took 1 to 2 hours.</p>
                  <p>Senior experts were not available around the clock. Work stalled. New hires needed 3 months before they could operate independently.</p>
                  <div className="case-insight">
                    The fix was not more headcount. It was capturing expert knowledge in a system that could scale.
                  </div>
                  <div className="stat-row">
                    <div className="stat-pill"><span className="stat-val">100+</span><span className="stat-desc">workflows daily</span></div>
                    <div className="stat-pill"><span className="stat-val">10–15</span><span className="stat-desc">escalations per day</span></div>
                    <div className="stat-pill"><span className="stat-val">1–2 hrs</span><span className="stat-desc">per escalation</span></div>
                    <div className="stat-pill"><span className="stat-val">3 mo</span><span className="stat-desc">to onboard new staff</span></div>
                  </div>
                </section>

                {/* ROLE */}
                <section id="role" className="case-section">
                  <div className="section-label">What I Did</div>
                  <h2>End-to-End Ownership</h2>
                  <p>I identified this problem through direct field research. No one assigned it to me.</p>
                  <div className="step-list">
                    <div className="step-item">
                      <div className="step-num">01</div>
                      <div className="step-content">
                        <div className="step-title">Discovery</div>
                        <div className="step-desc">Conducted structured interviews to map the full workflow and identify where AI would create the most leverage</div>
                      </div>
                    </div>
                    <div className="step-item">
                      <div className="step-num">02</div>
                      <div className="step-content">
                        <div className="step-title">Knowledge Capture</div>
                        <div className="step-desc">Led a 2-month initiative organizing years of undocumented expert reasoning into a structured, searchable database</div>
                      </div>
                    </div>
                    <div className="step-item">
                      <div className="step-num">03</div>
                      <div className="step-content">
                        <div className="step-title">RAG System Development</div>
                        <div className="step-desc">Drove build alongside data scientists — making tradeoff decisions on retrieval architecture, chunking strategy, and output format</div>
                      </div>
                    </div>
                    <div className="step-item">
                      <div className="step-num">04</div>
                      <div className="step-content">
                        <div className="step-title">HITL Guardrail Design</div>
                        <div className="step-desc">Designed Human-in-the-Loop safety as a core product feature — outputs below confidence threshold always routed for human review</div>
                      </div>
                    </div>
                    <div className="step-item">
                      <div className="step-num">05</div>
                      <div className="step-content">
                        <div className="step-title">Controlled Testing</div>
                        <div className="step-desc">Ran a production test window before committing to full build — generating the evidence base needed for leadership approval</div>
                      </div>
                    </div>
                    <div className="step-item">
                      <div className="step-num">06</div>
                      <div className="step-content">
                        <div className="step-title">Production Launch</div>
                        <div className="step-desc">Wrote PRD, development timeline, and resource plan — then shipped and monitored adoption across 200+ users</div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* HOW IT WORKS */}
                <section id="how" className="case-section">
                  <div className="section-label">How It Works</div>
                  <h2>The System Architecture</h2>
                  <div className="flow-steps">
                    <div className="flow-step">
                      <div className="flow-icon">①</div>
                      <div className="flow-text"><strong>Task initiated</strong> — relevant inputs packaged as a structured prompt</div>
                    </div>
                    <div className="flow-arrow">↓</div>
                    <div className="flow-step">
                      <div className="flow-icon">②</div>
                      <div className="flow-text"><strong>RAG pipeline</strong> — retrieves matching expert reasoning from the curated knowledge base</div>
                    </div>
                    <div className="flow-arrow">↓</div>
                    <div className="flow-step">
                      <div className="flow-icon">③</div>
                      <div className="flow-text"><strong>AI recommendation</strong> — structured output returned to the user in under 15 seconds</div>
                    </div>
                    <div className="flow-arrow">↓</div>
                    <div className="flow-step flow-step--split">
                      <div className="flow-branch flow-branch--green">
                        <div className="flow-icon">✓</div>
                        <div className="flow-text"><strong>High confidence</strong> — recommendation applied directly</div>
                      </div>
                      <div className="flow-branch flow-branch--amber">
                        <div className="flow-icon">⚠</div>
                        <div className="flow-text"><strong>Low confidence</strong> — flagged for human review before use</div>
                      </div>
                    </div>
                  </div>
                  <p style={{ marginTop: 14 }}>AI augments judgment. It does not replace it.</p>
                </section>

                {/* RESULTS */}
                <section id="results" className="case-section">
                  <div className="section-label">Results</div>
                  <h2>Production Impact</h2>
                  <div className="case-table-wrap">
                    <table className="case-table case-table--compare">
                      <thead>
                        <tr>
                          <th>Metric</th>
                          <th>Before</th>
                          <th className="th-after">After</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>Expert escalation time</td><td className="td-before">1 to 2 hours per case</td><td className="td-after">Under 5 minutes</td></tr>
                        <tr><td>AI recommendation speed</td><td className="td-before">Not available</td><td className="td-after">Under 15 seconds</td></tr>
                        <tr><td>Cases resolved without escalation</td><td className="td-before">0%</td><td className="td-after">90%+ automated</td></tr>
                        <tr><td>New staff onboarding</td><td className="td-before">3 months to independence</td><td className="td-after">Significantly reduced</td></tr>
                        <tr><td>Knowledge accessibility</td><td className="td-before">Held by individuals, undocumented</td><td className="td-after">Centralized and searchable</td></tr>
                        <tr><td>Team workflow</td><td className="td-before">Manual, tribal knowledge</td><td className="td-after">Structured AI-assisted app</td></tr>
                        <tr><td>Daily active users</td><td className="td-before">N/A</td><td className="td-after">200+</td></tr>
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
                      <h3>AI/ML Product</h3>
                      <ul>
                        <li>RAG system product definition</li>
                        <li>Knowledge base design and governance</li>
                        <li>HITL guardrail architecture</li>
                        <li>AI success metric definition</li>
                        <li>Prompt and output structure design</li>
                        <li>MLOps quality control processes</li>
                      </ul>
                    </div>
                    <div className="case-skill-card">
                      <h3>Product Leadership</h3>
                      <ul>
                        <li>0-to-1 discovery and validation</li>
                        <li>Executive buy-in through ROI framing</li>
                        <li>Cross-functional team leadership</li>
                        <li>PRD and roadmap authorship</li>
                        <li>Controlled production rollout</li>
                        <li>Change management and workflow modernization</li>
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
                      <div className="lesson-icon">💡</div>
                      <div className="lesson-content">
                        <div className="lesson-title">The knowledge base was the real product</div>
                        <div className="lesson-body">The AI system was only as good as the expert knowledge underneath it. Organizing that knowledge took 2 months. Building the AI took less.</div>
                      </div>
                    </div>
                    <div className="lesson-card">
                      <div className="lesson-icon">🛡</div>
                      <div className="lesson-content">
                        <div className="lesson-title">HITL was a product decision, not a fallback</div>
                        <div className="lesson-body">In high-stakes environments, AI should support human judgment, not replace it without oversight. Designed in from day one.</div>
                      </div>
                    </div>
                    <div className="lesson-card lesson-card--amber">
                      <div className="lesson-icon">⚠</div>
                      <div className="lesson-content">
                        <div className="lesson-title">One mistake I made</div>
                        <div className="lesson-body">I did not require senior expert audit of knowledge base entries during the initial build. Inaccurate entries slowed testing. Fixed by building a weekly audit cadence into the product's operating model.</div>
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
