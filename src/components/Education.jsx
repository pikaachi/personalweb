import { useEffect, useRef } from "react";
import "../styles/education.css";

const EDUCATION = [
  {
    id: "ut-austin",
    logo: "/logos/ut-austin.png",
    alt: "UT Austin logo",
    title: "Post-Graduate Program in AI & Machine Learning",
    institution: "The University of Texas at Austin",
    link: null,
  },
  {
    id: "uta",
    logo: "/logos/uta.png",
    alt: "UT Arlington logo",
    title: "B.S. in Mechanical Engineering",
    institution: "The University of Texas at Arlington",
    badge: null,
    link: null,
  },
];

const CERTIFICATIONS = [
  {
    id: "aws",
    logo: "/logos/aws.png",
    alt: "AWS logo",
    title: "AWS AI Certified Practitioner",
    institution: "Amazon Web Services · Early Adopter",
    link: "https://www.credly.com/badges/eb5bbfd4-bd26-48ff-9395-19b6dcab5fb0/public_url",
  },
  {
    id: "cspo",
    logo: "/logos/scrum-alliance.png",
    alt: "Scrum Alliance logo",
    title: "Certified Scrum Product Owner (CSPO)",
    institution: "Scrum Alliance",
    link: "https://bcert.me/syjadithd",
  },
  {
    id: "pmdojo",
    logo: "/logos/pmdojo.png",
    alt: "PMDojo logo",
    title: "Certified Product Manager",
    institution: "PMDojo",
    badge: null,
    link: null,
  },
];

function EduCard({ item, delay }) {
  return (
    <div className="edu-card reveal" style={{ transitionDelay: delay }}>
      <div className="edu-card-top" />
      <img src={item.logo} alt={item.alt} className="edu-logo" />
      <div className="edu-card-body">
        <div className="edu-card-title-row">
          <div className="edu-title">{item.title}</div>
          {item.badge && (
            <span className={`edu-badge edu-badge--${item.badgeType}`}>
              {item.badge}
            </span>
          )}
        </div>
        <div className="edu-meta">{item.institution}</div>
        {item.link && (
          <a
            className="credential-link"
            href={item.link}
            target="_blank"
            rel="noreferrer"
          >
            Verify Credential →
          </a>
        )}
      </div>
    </div>
  );
}

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
    <section className="section" id="education" ref={sectionRef}>
      <div className="section-inner">

        <div className="edu-eyebrow reveal">Credentials</div>
        <h2 className="section-title reveal" style={{ transitionDelay: "60ms" }}>
          Education & Certifications
        </h2>
        <p className="section-subtitle reveal" style={{ transitionDelay: "120ms" }}>
          Deliberately building toward AI product leadership — an engineering foundation, a machine learning graduate program, and hands-on AI certifications.
        </p>

        <div className="edu-grid">

          {/* LEFT: EDUCATION */}
          <div className="edu-column">
            <div className="edu-col-label reveal" style={{ transitionDelay: "140ms" }}>
              Education
            </div>
            {EDUCATION.map((item, idx) => (
              <EduCard key={item.id} item={item} delay={`${180 + idx * 70}ms`} />
            ))}
          </div>

          {/* RIGHT: CERTIFICATIONS */}
          <div className="edu-column">
            <div className="edu-col-label reveal" style={{ transitionDelay: "140ms" }}>
              Certifications
            </div>
            {CERTIFICATIONS.map((item, idx) => (
              <EduCard key={item.id} item={item} delay={`${180 + idx * 70}ms`} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}