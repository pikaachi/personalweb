import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="bg-grid" />

      {/* Ambient glow orbs */}
      <div className="hero-orb hero-orb--tl" />
      <div className="hero-orb hero-orb--br" />

      <div className="hero-container centered">
        <div className="hero-left full">

          {/* Status badge */}
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Open to Senior AI PM Roles
          </div>

          {/* Headline */}
          <h1 className="hero-title">
            Hi, I'm <span className="gradient">Sandesh</span>
            <br />
            I Build <span className="gradient">Enterprise AI Products</span>
          </h1>

          {/* Subtitle */}
          <p className="subtitle">
            Technical PM who turns ambiguous AI opportunities into measurable
            business outcomes. From identifying pain points and use cases to
            shipping the product to scaling adoption across organizations.
          </p>

          {/* CTA buttons */}
          <div className="hero-ctas">
            <a href="#work" className="hero-cta hero-cta--primary">View My Work</a>
            <a href="#contact" className="hero-cta hero-cta--secondary">Get in Touch</a>
          </div>

          {/* Tags */}
          <div className="tags">
            <span>AI Product Strategy</span>
            <span>GenAI & RAG Systems</span>
            <span>0→1 Products</span>
            <span>Data-Driven Products</span>
            <span>Org-Scale Adoption</span>
          </div>

          {/* Metrics bar */}
          <div className="hero-metrics">
            <div className="hero-metric">
              <div className="hero-metric-val">$3M+</div>
              <div className="hero-metric-label">Cost Savings Delivered</div>
            </div>
            <div className="hero-metric-divider" />
            <div className="hero-metric">
              <div className="hero-metric-val">92%</div>
              <div className="hero-metric-label">Cycle Time Reduction</div>
            </div>
            <div className="hero-metric-divider" />
            <div className="hero-metric">
              <div className="hero-metric-val">60+</div>
              <div className="hero-metric-label">AI Tools Deployed</div>
            </div>
            <div className="hero-metric-divider" />
            <div className="hero-metric">
              <div className="hero-metric-val">200+</div>
              <div className="hero-metric-label">Daily Active Users</div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span className="hero-scroll-label">Scroll</span>
      </div>

    </section>
  );
}
