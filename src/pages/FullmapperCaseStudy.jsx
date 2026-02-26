import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/caseStudy.css";

const SECTIONS = [
  { id: "overview",   label: "Overview" },
  { id: "problem",    label: "The Problem" },
  { id: "role",       label: "What I Did" },
  { id: "tradeoffs",  label: "Key Decisions" },
  { id: "results",    label: "Results" },
  { id: "skills",     label: "Skills" },
  { id: "lessons",    label: "What I Learned" },
];

export default function FullmapperCaseStudy() {
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
              <span className="case-tag">Predictive Analytics</span>
              <span className="case-tag">XGBoost</span>
              <span className="case-tag">MLOps</span>
              <span className="case-tag">Cost Elimination</span>
            </div>
            <h1 className="case-title">Fullmapper</h1>
            <p className="case-subtitle">From Incomplete Data to Full Coverage. No Additional Infrastructure.</p>
          </div>

          {/* HERO CALLOUT */}
          <div className="case-callout case-callout--hero">
            <span className="callout-accent">Most organizations collect a fraction of the data they actually need.</span>{" "}
            Adding more infrastructure to fix that costs millions. Fullmapper took a different approach.
            <br /><br />
            It uses historical data patterns to predict what missing data points would say. The result is full data coverage at near-zero marginal cost.
            <br /><br />
            <span className="callout-accent">$1.2M saved. 80% infrastructure reduction. 30 hours freed every week.</span>
          </div>

          {/* METRICS */}
          <div className="case-metrics">
            <div className="case-metric">
              <div className="k">Annual Cost Savings</div>
              <div className="v">$1.2M</div>
            </div>
            <div className="case-metric">
              <div className="k">Infrastructure Reduction</div>
              <div className="v">80%</div>
            </div>
            <div className="case-metric">
              <div className="k">Weekly Hours Freed</div>
              <div className="v">30 hrs</div>
            </div>
            <div className="case-metric">
              <div className="k">Model Accuracy</div>
              <div className="v">R² 0.90+</div>
            </div>
          </div>

          {/* BODY + TOC */}
          <div className="case-layout">
            <div className="case-main">
              <div className="case-body">

                {/* OVERVIEW */}
                <section id="overview" className="case-section">
                  <div className="section-label">Overview</div>
                  <h2>Predicting What You Cannot Afford to Measure</h2>
                  <p>The team could only collect data at 16% of the required monitoring points. Closing that gap with physical infrastructure cost over $1M per unit.</p>
                  <p>Fullmapper uses a predictive ML model trained on historical patterns to fill in the missing data points. 100% coverage. Near-zero marginal cost.</p>
                  <div className="case-details">
                    <div className="case-detail"><div className="k">My Role</div><div className="v">Technical Product Manager and domain expert — bridged engineering and data science across the full lifecycle</div></div>
                    <div className="case-detail"><div className="k">Team Built</div><div className="v">3 domain engineers, 2 data scientists, 2 software engineers, 2 technicians</div></div>
                    <div className="case-detail"><div className="k">AI Stack</div><div className="v">XGBoost, cloud data pipeline, Spotfire MLOps monitoring dashboard</div></div>
                    <div className="case-detail"><div className="k">Timeline</div><div className="v">MVP in 3 months. V1 in 5 months.</div></div>
                    <div className="case-detail"><div className="k">Business Context</div><div className="v">$1.2M contribution toward a $40M operational savings target</div></div>
                  </div>
                </section>

                {/* PROBLEM */}
                <section id="problem" className="case-section">
                  <div className="section-label">The Problem</div>
                  <h2>The Data Gap Was Real. The Hardware Solution Was Not Viable.</h2>
                  <p>Standard operations only collected data at 16% of the points needed for full process monitoring. Full data collection required dedicating expensive, capacity-constrained infrastructure — creating a direct conflict between daily operations and data quality.</p>
                  <p>The business target was cost reduction, not capital investment. The answer had to be software.</p>
                  <div className="case-insight">
                    Each additional physical data collection unit cost over $1M. Buying more equipment moved in the wrong direction.
                  </div>
                  <div className="stat-row">
                    <div className="stat-pill"><span className="stat-val">16%</span><span className="stat-desc">data coverage at baseline</span></div>
                    <div className="stat-pill"><span className="stat-val">84%</span><span className="stat-desc">blind spots per cycle</span></div>
                    <div className="stat-pill"><span className="stat-val">$1M+</span><span className="stat-desc">per hardware unit</span></div>
                    <div className="stat-pill"><span className="stat-val">$40M</span><span className="stat-desc">savings target</span></div>
                  </div>
                </section>

                {/* ROLE */}
                <section id="role" className="case-section">
                  <div className="section-label">What I Did</div>
                  <h2>TPM and Domain Expert — Bridging Two Technical Worlds</h2>
                  <p>I served as both product manager and domain expert. That dual role closed the translation gap between engineering requirements and data science specifications — without needing a separate layer of interpretation at every step.</p>
                  <div className="step-list">
                    <div className="step-item">
                      <div className="step-num">01</div>
                      <div className="step-content">
                        <div className="step-title">Built the ROI Case</div>
                        <div className="step-desc">Assembled a cross-functional team across two separate organizations using a structured business argument — no formal mandate</div>
                      </div>
                    </div>
                    <div className="step-item">
                      <div className="step-num">02</div>
                      <div className="step-content">
                        <div className="step-title">Secured Cross-Border Data Access</div>
                        <div className="step-desc">Negotiated data access with a partner organization in another country to build the training dataset — navigating compliance and organizational dynamics</div>
                      </div>
                    </div>
                    <div className="step-item">
                      <div className="step-num">03</div>
                      <div className="step-content">
                        <div className="step-title">Resolved Vendor Conflict</div>
                        <div className="step-desc">Unblocked the data collection phase by directly negotiating a vendor contract constraint that was halting progress</div>
                      </div>
                    </div>
                    <div className="step-item">
                      <div className="step-num">04</div>
                      <div className="step-content">
                        <div className="step-title">Translated Requirements to ML Specs</div>
                        <div className="step-desc">Converted domain engineering requirements into ML feature specifications the data science team could model against</div>
                      </div>
                    </div>
                    <div className="step-item">
                      <div className="step-num">05</div>
                      <div className="step-content">
                        <div className="step-title">Defined Model Success Thresholds</div>
                        <div className="step-desc">Set accuracy validation criteria in collaboration with domain engineers — establishing R² above 0.90 as the production threshold</div>
                      </div>
                    </div>
                    <div className="step-item">
                      <div className="step-num">06</div>
                      <div className="step-content">
                        <div className="step-title">Designed MLOps Monitoring</div>
                        <div className="step-desc">Built a live monitoring dashboard with automated drift alerts — model health tracked continuously against daily ground truth</div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* TRADEOFFS */}
                <section id="tradeoffs" className="case-section">
                  <div className="section-label">Key Decisions</div>
                  <h2>Scope Discipline Made the Project Succeed</h2>
                  <p>Two deliberate constraints defined the outcome.</p>
                  <div className="decision-cards">
                    <div className="decision-card">
                      <div className="decision-label">Decision 01</div>
                      <div className="decision-title">Training data window: 2-week cap</div>
                      <div className="decision-body">Unlimited historical data would have overloaded cloud infrastructure without proportional accuracy gains. Capping to 2 weeks kept the system fast, cost-efficient, and responsive to recent operational patterns.</div>
                      <div className="decision-outcome">Outcome: lower compute cost, faster retraining, more relevant predictions</div>
                    </div>
                    <div className="decision-card">
                      <div className="decision-label">Decision 02</div>
                      <div className="decision-title">V1 scope: one product family only</div>
                      <div className="decision-body">Restricting V1 to a single product family simplified the data pipeline and allowed the team to ship on schedule. Cross-product expansion was placed on the V2 roadmap with a clear proof point already in hand.</div>
                      <div className="decision-outcome">Outcome: on-time delivery, high-quality proof point, clear V2 path</div>
                    </div>
                  </div>
                </section>

                {/* RESULTS */}
                <section id="results" className="case-section">
                  <div className="section-label">Results</div>
                  <h2>Measured Outcomes</h2>
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
                        <tr><td>Data coverage</td><td className="td-before">16% of required points</td><td className="td-after">100% via AI prediction</td></tr>
                        <tr><td>Annual cost savings</td><td className="td-before">Baseline</td><td className="td-after">$1.2M</td></tr>
                        <tr><td>Infrastructure utilization</td><td className="td-before">Baseline</td><td className="td-after">Reduced 80%</td></tr>
                        <tr><td>Weekly specialist hours freed</td><td className="td-before">Baseline</td><td className="td-after">30 hours per week</td></tr>
                        <tr><td>Model accuracy</td><td className="td-before">N/A</td><td className="td-after">Above 90%, validated daily</td></tr>
                        <tr><td>Weekly active users</td><td className="td-before">N/A</td><td className="td-after">90% return rate</td></tr>
                        <tr><td>Support request volume</td><td className="td-before">Baseline</td><td className="td-after">80% reduction</td></tr>
                        <tr><td>External customer inquiries</td><td className="td-before">Baseline</td><td className="td-after">+40% increase</td></tr>
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
                        <li>Predictive model definition</li>
                        <li>ML success metric design</li>
                        <li>MLOps monitoring and drift detection</li>
                        <li>Training data scoping and quality gates</li>
                        <li>Cross-border data governance</li>
                        <li>Feature engineering requirements</li>
                      </ul>
                    </div>
                    <div className="case-skill-card">
                      <h3>Product Leadership</h3>
                      <ul>
                        <li>Cross-org team assembly via ROI case</li>
                        <li>Influence without formal authority</li>
                        <li>Vendor SLA negotiation</li>
                        <li>Global stakeholder management</li>
                        <li>Audience-segmented communication</li>
                        <li>MVP scoping under constraint</li>
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
                        <div className="lesson-title">Technical results need business translation</div>
                        <div className="lesson-body">A model accuracy score means nothing to an executive. $1.2M in annual savings tied to a $40M target means everything. Model performance earns the right to ship. Business framing earns the budget.</div>
                      </div>
                    </div>
                    <div className="lesson-card">
                      <div className="lesson-icon">📡</div>
                      <div className="lesson-content">
                        <div className="lesson-title">Communication architecture is a product decision</div>
                        <div className="lesson-body">I designed different update formats for different stakeholder groups — technical drift reports for engineers, cost savings summaries for leadership. Information that lands wrong does not land at all.</div>
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
