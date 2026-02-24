import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/caseStudy.css";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "The Problem" },
  { id: "role", label: "My Role" },
  { id: "how", label: "How It Works" },
  { id: "results", label: "Production Impact" },
  { id: "skills", label: "Skills Demonstrated" },
  { id: "lessons", label: "What I Learned" },
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
          <div className="case-top">
            <Link className="case-back" to="/#work">← Back to Selected Work</Link>
            <h1 className="case-title">OPTIC</h1>
            <p className="case-subtitle">
              AI-powered recipe parameter optimizer that acts as a senior engineer that's available 24/7
            </p>
          </div>

          <div className="case-callout">
            OPTIC was not a feature request. It was a use case I identified through direct field research with domain engineers and analysts,
            proposed to leadership with a full ROI case, and built from the ground up as a production AI product.
          </div>

          <div className="case-metrics">
            <div className="case-metric"><div className="k">Reduction in tuning time</div><div className="v">92%</div></div>
            <div className="case-metric"><div className="k">Param optimization latency</div><div className="v">15 sec</div></div>
            <div className="case-metric"><div className="k">Automated success rate</div><div className="v">90%+</div></div>
            <div className="case-metric"><div className="k">Engineers & analysts impacted</div><div className="v">~200</div></div>
          </div>

          <div className="case-layout">
            <div className="case-main">
              <div className="case-body">
                <section id="overview" className="case-section">
                  <h2>From 1–2 Hours to 15 Seconds</h2>
                  <p>
                    In semiconductor manufacturing, production recipes require precise parameter tuning to ensure quality. When parameters fail,
                    the escalation chain runs from analysts to junior engineers to senior SMEs, a process that consumes 1–2 hours per recipe and
                    grinds to a halt when senior engineers aren't available. OPTIC replaced that escalation chain with a RAG-powered AI system that
                    delivers expert-level parameter recommendations in under 15 seconds.
                  </p>

                  <div className="case-details">
                    <div className="case-detail"><div className="k">Industry</div><div className="v">Semiconductor Manufacturing</div></div>
                    <div className="case-detail"><div className="k">Users</div><div className="v">Metrology Inspection Engineers + Analysts</div></div>
                    <div className="case-detail"><div className="k">AI Method</div><div className="v">RAG + system prompts + HITL guardrails</div></div>
                    <div className="case-detail"><div className="k">Delivery</div><div className="v">Structured tuned parameters surfaced via a frontend application</div></div>
                  </div>
                </section>

                <section id="problem" className="case-section">
                  <h2>A Bottleneck Built on Tribal Knowledge</h2>
                  <p>
                    The Inspection team tuned 100+ production recipes daily. Of these, 10–15 required SME-level escalation when standard
                    parameters failed, consuming 1–2 hours of senior engineer time per recipe. Senior engineers weren't available around the clock,
                    creating production delays with direct manufacturing cost implications.
                  </p>
                  <p>
                    The deeper problem was structural: optimization knowledge lived in engineers' heads, undocumented and untransferable. New analysts
                    required 3 months of training before operating independently. The organization was one resignation away from significant capability loss.
                  </p>
                  <ul>
                    <li>100+ recipes tuned daily across the team</li>
                    <li>10–15 recipes per day required senior engineer escalation</li>
                    <li>Each escalation consumed 1–2 hours of high-value engineering time</li>
                    <li>No 24/7 coverage — production halted when engineers were unavailable</li>
                    <li>3-month onboarding time for new analysts before independent operation</li>
                  </ul>
                </section>

                <section id="role" className="case-section">
                  <h2>Technical Product Manager - End to End</h2>
                  <p>
                    I sourced this use case independently through structured interviews with analysts and engineers across experience levels. I mapped the
                    current-state workflow, quantified the cost of escalations, and built the ROI framing that secured leadership buy-in. From there I owned
                    the entire product lifecycle. From knowledge infrastructure design through production launch.
                  </p>
                  <ul>
                    <li>Conducted stakeholder discovery across engineers, analysts, and leadership to define and validate the problem</li>
                    <li>Designed and executed a 2-month knowledge base initiative, securing engineering manager buy-in to carve out dedicated time for knowledge capture</li>
                    <li>Led RAG system development alongside Data Scientists and SWEs, driving decisions on chunking strategy, retrieval tuning, and output structure</li>
                    <li>Designed HITL guardrails as a core safety layer — parameters the system flagged as low-confidence were routed for human review before any production use</li>
                    <li>Ran a 3-week controlled testing window to validate model performance before committing to full product development</li>
                    <li>Wrote the PRD, development timeline, and resource plan for the production build</li>
                    <li>Modernized analyst workflow from fragmented Excel spreadsheets to a structured, database-backed application</li>
                  </ul>
                </section>

                <section id="how" className="case-section">
                  <h2>The System Architecture</h2>
                  <p>
                    When a new recipe is created, raw parameters are automatically ingested as a structured prompt. The prompt flows through the RAG pipeline,
                    which retrieves relevant context from the curated knowledge base — historical optimal parameters, research papers, and tool manuals. System prompts
                    with built-in guardrails generate a structured list of tuned parameters, surfaced to analysts via a frontend application within 15 seconds.
                  </p>
                </section>

                <section id="results" className="case-section">
                  <h2>Production Impact</h2>

                  <div className="case-table-wrap">
                    <table className="case-table">
                      <thead>
                        <tr>
                          <th>Metric</th>
                          <th>Before OPTIC</th>
                          <th>After OPTIC</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>Recipe tuning time (escalations)</td><td>1–2 hours per recipe</td><td>&lt; 5 minutes</td></tr>
                        <tr><td>Parameter optimization latency</td><td>Hours (engineer availability)</td><td>~15 seconds</td></tr>
                        <tr><td>Automated resolution rate</td><td>—</td><td>&gt; 90% of recipes</td></tr>
                        <tr><td>Analyst onboarding time</td><td>3 months</td><td>Significantly reduced</td></tr>
                        <tr><td>Knowledge accessibility</td><td>Tribal / undocumented</td><td>Centralized, auditable database</td></tr>
                        <tr><td>Analyst workflow</td><td>Excel + memory</td><td>Structured frontend app</td></tr>
                        <tr><td>Production users impacted</td><td>—</td><td>~200 (engineers + analysts)</td></tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="skills" className="case-section">
                  <h2>Skills Demonstrated</h2>

                  <div className="case-skills">
                    <div className="case-skill-card">
                      <h3>AI/ML Product Skills</h3>
                      <ul>
                        <li>RAG system product definition</li>
                        <li>Knowledge base design & governance</li>
                        <li>HITL guardrail architecture</li>
                        <li>AI success metric definition</li>
                        <li>Prompt & output structure design</li>
                        <li>MLOps quality control processes</li>
                      </ul>
                    </div>

                    <div className="case-skill-card">
                      <h3>Leadership & PM Skills</h3>
                      <ul>
                        <li>0-to-1 use case discovery</li>
                        <li>Executive buy-in through ROI framing</li>
                        <li>Cross-functional team leadership</li>
                        <li>PRD & product roadmap authorship</li>
                        <li>Controlled production rollout design</li>
                        <li>Change management & workflow modernization</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="lessons" className="case-section">
                  <h2>What I Learned</h2>
                  <div className="case-callout">
                    One key lesson: I initially did not require senior engineer audit of knowledge base entries. Inaccurate data slowed the testing phase and
                    introduced production risk. I corrected this by establishing a weekly senior engineer audit cadence — turning a mistake into a permanent
                    quality control process.
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