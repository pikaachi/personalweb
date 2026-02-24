import { useEffect, useRef } from "react";
import "../styles/education.css";

export default function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const items = root.querySelectorAll(".reveal");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          requestAnimationFrame(() => {
            entry.target.classList.add("is-visible");
          });

          io.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section" id="education" ref={sectionRef}>
      <div className="section-inner">
        <h2 className="section-title reveal">Education & Certifications</h2>
        <p className="section-subtitle reveal" style={{ transitionDelay: "80ms" }}>
          Formal training and professional credentials supporting AI, product, and platform leadership.
        </p>

        <div className="edu-grid">

          {/* LEFT: EDUCATION */}
          <div className="edu-column">
            <h3 className="edu-heading reveal" style={{ transitionDelay: "120ms" }}>
              Education
            </h3>

            <div className="edu-card reveal" style={{ transitionDelay: "160ms" }}>
              <img
                src="/logos/ut-austin.png"
                alt="UT Austin logo"
                className="edu-logo"
              />
              <div>
                <div className="edu-title">
                  Post Graduate Degree in AI / ML
                </div>
                <div className="edu-meta">
                  The University of Texas at Austin
                </div>
              </div>
            </div>

            <div className="edu-card reveal" style={{ transitionDelay: "220ms" }}>
              <img
                src="/logos/uta.png"
                alt="UT Arlington logo"
                className="edu-logo"
              />
              <div>
                <div className="edu-title">
                  B.S. in Mechanical Engineering
                </div>
                <div className="edu-meta">
                  The University of Texas at Arlington
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: CERTIFICATIONS */}
          <div className="edu-column">
            <h3 className="edu-heading reveal" style={{ transitionDelay: "120ms" }}>
              Certifications
            </h3>

            <div className="edu-card reveal" style={{ transitionDelay: "160ms" }}>
              <img
                src="/logos/aws.png"
                alt="AWS logo"
                className="edu-logo"
              />
              <div>
                <div className="edu-title">
                  AWS AI Certified Practitioner (Early Adopter)
                </div>
                <div className="edu-meta">
                  Amazon Web Services
                </div>
                <a
                  className="credential-link"
                  href="https://www.credly.com/badges/eb5bbfd4-bd26-48ff-9395-19b6dcab5fb0/public_url"
                  target="_blank"
                  rel="noreferrer"
                >
                  Verify Credential →
                </a>

              </div>
            </div>

            <div className="edu-card reveal" style={{ transitionDelay: "220ms" }}>
              <img
                src="/logos/scrum-alliance.png"
                alt="Scrum Alliance logo"
                className="edu-logo"
              />
              <div>
                <div className="edu-title">
                  Certified Scrum Product Owner (CSPO)
                </div>
                <div className="edu-meta">
                  Scrum Alliance
                </div>
                <a
                  className="credential-link"
                  href="https://bcert.me/syjadithd"
                  target="_blank"
                  rel="noreferrer"
                >
                  Verify Credential →
                </a>

              </div>
            </div>

            <div className="edu-card reveal" style={{ transitionDelay: "280ms" }}>
              <img
                src="/logos/pmdojo.png"
                alt="PMDojo logo"
                className="edu-logo"
              />
              <div>
                <div className="edu-title">
                  Certified Product Manager
                </div>
                <div className="edu-meta">
                  PMDojo
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
