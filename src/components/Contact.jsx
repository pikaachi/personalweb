import { useEffect, useRef } from "react";
import "../styles/contact.css";

const ROLES = ["AI Product Manager", "Senior Technical PM", "Platform PM"];
const FOCUS = ["AI Adoption & Deployment", "Enterprise AI Platforms", "Data & Analytics Products"];

export default function Contact() {
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
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section" id="contact" ref={sectionRef}>
      <div className="section-inner">

        <div className="contact-eyebrow reveal">Get In Touch</div>
        <h2 className="section-title reveal" style={{ transitionDelay: "60ms" }}>
          Let's Connect
        </h2>
        <p className="section-subtitle reveal" style={{ transitionDelay: "120ms" }}>
          If you're building something at the intersection of AI and enterprise scale, I'd love to hear about it.
        </p>

        {/* Unified card */}
        <div className="contact-card reveal" style={{ transitionDelay: "180ms" }}>
          <div className="contact-card-top" />

          <div className="contact-inner">

            {/* LEFT — pitch */}
            <div className="contact-pitch">
              <p className="contact-text">
                Whether you have a specific role in mind or just want to explore, feel free to reach out.
                I'm most energized by problems that sit at the intersection of people, data, and real business
                impact. And I bring both the technical depth and the product judgment to ship them.
              </p>

              <div className="contact-attrs">
                <div className="contact-attr">
                  <span className="contact-attr-label">Open to</span>
                  <div className="contact-attr-pills">
                    {ROLES.map((r) => (
                      <span key={r} className="contact-role-pill">{r}</span>
                    ))}
                  </div>
                </div>

                <div className="contact-attr">
                  <span className="contact-attr-label">Focus areas</span>
                  <div className="contact-attr-pills">
                    {FOCUS.map((f) => (
                      <span key={f} className="contact-focus-pill">{f}</span>
                    ))}
                  </div>
                </div>

                <div className="contact-attr">
                  <span className="contact-attr-label">Location</span>
                  <span className="contact-attr-value">Austin, TX · Open to Remote & Hybrid</span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="contact-divider" />

            {/* RIGHT — actions */}
            <div className="contact-actions">

              <a className="contact-link" href="mailto:sandeshkc2876@gmail.com">
                <span className="contact-link-icon">✉</span>
                <span className="contact-link-body">
                  <span className="contact-link-label">Email</span>
                  <span className="contact-link-value">sandeshkc2876@gmail.com</span>
                </span>
                <span className="contact-link-arrow">→</span>
              </a>

              <a
                className="contact-link"
                href="https://www.linkedin.com/in/sandesh-k-c/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-icon">in</span>
                <span className="contact-link-body">
                  <span className="contact-link-label">LinkedIn</span>
                  <span className="contact-link-value">linkedin.com/in/sandesh-k-c</span>
                </span>
                <span className="contact-link-arrow">→</span>
              </a>

              <a className="contact-link contact-link--muted" href="tel:9728769328">
                <span className="contact-link-icon">☎</span>
                <span className="contact-link-body">
                  <span className="contact-link-label">Phone</span>
                  <span className="contact-link-value">972-876-9328</span>
                </span>
              </a>

              {/* Primary CTA buttons */}
              <div className="contact-cta-row">
                <a className="contact-btn-primary" href="mailto:sandeshkc2876@gmail.com">
                  Email Me
                </a>
                <a
                  className="contact-btn-secondary"
                  href="https://www.linkedin.com/in/sandesh-k-c/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn →
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}