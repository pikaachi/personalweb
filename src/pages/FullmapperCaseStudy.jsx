import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/caseStudy.css";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "The Problem" },
  { id: "role", label: "My Role" },
  { id: "tradeoffs", label: "Tradeoffs" },
  { id: "results", label: "Measured Outcomes" },
  { id: "skills", label: "Skills Demonstrated" },
  { id: "lessons", label: "What I Learned" },
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
          <div className="case-top">
            <Link className="case-back" to="/#work">← Back to Selected Work</Link>
            <h1 className="case-title">Fullmapper</h1>
            <p className="case-subtitle">
              Predictive analytics tool that achieves 100% wafer measurement coverage without a single additional physical tool
            </p>
          </div>

          <div className="case-callout">
            I served as both Technical Product Manager and domain Subject Matter Expert bridging optical engineering requirements and data science
            capabilities in a role that required fluency in both languages.
          </div>

          <div className="case-metrics">
            <div className="case-metric"><div className="k">Annual cost savings</div><div className="v">$1.2M</div></div>
            <div className="case-metric"><div className="k">Reduction in tool utilization</div><div className="v">80%</div></div>
            <div className="case-metric"><div className="k">Weekly engineering hours saved</div><div className="v">30 hrs</div></div>
            <div className="case-metric"><div className="k">Predictive model accuracy</div><div className="v">R² &gt; 0.90</div></div>
          </div>

          <div className="case-layout">
            <div className="case-main">
              <div className="case-body">
                <section id="overview" className="case-section">
                  <h2>From 16% Wafer Coverage to 100%</h2>
                  <p>
                    Semiconductor fabs can only physically measure 13 of 80 points per wafer during standard in-line qualification — leaving 84% of each wafer's
                    measurement data as a blind spot. Acquiring additional measurement tools costs over $1M each. Fullmapper solved this by building a predictive
                    analytics model that fills in the missing 67 data points from historical data, achieving full wafer coverage at near-zero marginal cost.
                  </p>

                  <div className="case-details">
                    <div className="case-detail"><div className="k">Industry</div><div className="v">Semiconductor Manufacturing — Optical Metrology</div></div>
                    <div className="case-detail"><div className="k">Method</div><div className="v">Predictive model to infer unmeasured wafer points from historical measurement + telemetry</div></div>
                    <div className="case-detail"><div className="k">Constraint</div><div className="v">Software solution required (additional tools cost &gt; $1M each)</div></div>
                  </div>
                </section>

                <section id="problem" className="case-section">
                  <h2>A $1M+ Problem With a Data Science Solution</h2>
                  <p>
                    Standard in-line qualification measured only 13 of 80 optical points per wafer, leaving critical process shifts, emerging defects, and
                    customer-requested quality metrics undetected. Full 80-point scans required dedicating expensive tool time that was needed for production,
                    creating a direct conflict between quality coverage and throughput.
                  </p>
                  <p>
                    Adding physical measurement tools was not viable as each unit costs over $1M. The facility's KPI was $40M in operational savings. The solution
                    had to be software, not hardware.
                  </p>
                  <ul>
                    <li>13 of 80 measurement points covered during standard qualification (16% coverage)</li>
                    <li>67 unmeasured points per wafer leading to invisible process shifts, defects, and quality gaps</li>
                    <li>Full 80-point scans consumed production tool time, creating throughput vs. quality tradeoffs</li>
                    <li>New foundry tool qualification required full 80-point data, bottlenecking new process adoption</li>
                    <li>Additional physical tools cost &gt;$1M each which is not financially viable</li>
                  </ul>
                </section>

                <section id="role" className="case-section">
                  <h2>TPM + SME — Bridging Two Technical Worlds</h2>
                  <p>
                    My background in optical metrology meant I could translate between optical engineering requirements and data science specifications — and
                    drive decisions that both groups trusted.
                  </p>
                  <ul>
                    <li>Defined the problem and built the ROI case that formed the cross-org business argument — securing DS and SWE team resourcing</li>
                    <li>Negotiated cross-border data access with the company's Korea-based engineering teams to build the training dataset</li>
                    <li>Aggregated and structured three data streams: in-line measurement data, historical wafer records, and equipment telemetry</li>
                    <li>Translated optical engineering requirements into ML feature specifications</li>
                    <li>Led vendor negotiation to allow elevated tool utilization during data collection unblocking the training pipeline</li>
                    <li>Defined model success thresholds (R² &gt; 0.90) in collaboration with optical engineers</li>
                    <li>Designed the Spotfire MLOps monitoring dashboard with automated ±3σ drift alerts</li>
                  </ul>
                </section>

                <section id="tradeoffs" className="case-section">
                  <h2>Tradeoffs I Navigated</h2>
                  <p>Two scoping decisions defined the project's success:</p>

                  <h3>Data Window: 2-Week Cap</h3>
                  <p>
                    Rather than training on all available historical data, I capped the training window to the 2 most recent weeks of production data.
                  </p>

                  <h3>Scope: Same Device, Cross-Process (V1)</h3>
                  <p>
                    Instead of building predictive models across all device types, V1 was restricted to same-device, cross-process prediction.
                  </p>
                </section>

                <section id="results" className="case-section">
                  <h2>Measured Outcomes</h2>
                  <div className="case-table-wrap">
                    <table className="case-table">
                      <thead>
                        <tr>
                          <th>Metric</th>
                          <th>Before Fullmapper</th>
                          <th>After Fullmapper</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>Wafer measurement coverage</td><td>13 of 80 points (16%)</td><td>80 of 80 points — predicted</td></tr>
                        <tr><td>Annual cost savings</td><td>—</td><td>$1.2M (vs. $40M facility target)</td></tr>
                        <tr><td>Tool utilization</td><td>Baseline</td><td>Reduced 80%</td></tr>
                        <tr><td>Weekly engineering hours</td><td>Baseline</td><td>30 hours/week saved</td></tr>
                        <tr><td>Model accuracy</td><td>—</td><td>R² &gt; 0.90 (validated daily)</td></tr>
                        <tr><td>Weekly returning users</td><td>—</td><td>90% retention</td></tr>
                        <tr><td>Support ticket reduction</td><td>Baseline</td><td>80% reduction</td></tr>
                        <tr><td>External customer inquiries</td><td>Baseline</td><td>+40% increase (tool enabling new analysis)</td></tr>
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
                        <li>Predictive model definition (XGBoost)</li>
                        <li>ML success metric design (R², RMSE)</li>
                        <li>Feature engineering requirements</li>
                        <li>MLOps monitoring & drift detection</li>
                        <li>Training data scoping & quality gates</li>
                        <li>Cross-border data governance</li>
                      </ul>
                    </div>
                    <div className="case-skill-card">
                      <h3>Leadership & PM Skills</h3>
                      <ul>
                        <li>Cross-org team assembly via ROI case</li>
                        <li>Influence without formal authority</li>
                        <li>Vendor SLA negotiation</li>
                        <li>Global stakeholder management (US + Korea)</li>
                        <li>Audience-segmented communication</li>
                        <li>MVP scoping under constraint</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="lessons" className="case-section">
                  <h2>What I Learned</h2>
                  <p>
                    Technical excellence is a prerequisite, not a persuasion tool. An R² of 0.92 means nothing to a VP of Operations. $1.2M does.
                  </p>
                  <p>
                    Communication architecture is a product decision. I designed different update formats for different stakeholder groups.
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