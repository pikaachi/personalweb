import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="bg-grid" />

      <div className="hero-container centered">
        <div className="hero-left full">
          
          <h1 className="hero-title">
            Hi, I'm <span className="gradient">Sandesh</span>
            <br />
            I Build <span className="gradient">Enterprise AI Products</span>
          </h1>

          <p className="subtitle">
            Technical PM who turns ambiguous AI opportunities into measurable 
            business outcomes. From identifying pain points and use cases to shipping the 
            product to scaling adoption across organizations.
          </p>

          <div className="tags">
            <span>AI Product Strategy</span>
            <span>GenAI & RAG Systems</span>
            <span>0→1 Products</span>
            <span>Data-Driven Products</span>
            <span>Org-Scale Adoption</span>
          </div>

        </div>
      </div>
    </section>
  );
}