// Hobbies.jsx
import { useEffect, useMemo, useRef } from "react";
import "../styles/hobbies.css";

import trav1  from "../photos/trav1.png";
import trav2  from "../photos/trav2.png";
import trav3  from "../photos/trav3.png";
import trav4  from "../photos/trav4.png";
import trav5  from "../photos/trav5.png";
import trav6  from "../photos/trav6.png";
import trav7  from "../photos/trav7.png";
import trav8  from "../photos/trav8.png";
import trav9  from "../photos/trav9.png";
import trav10 from "../photos/trav10.png";

const TAGS = ["Travel", "Hiking", "Photography", "Always Planning the Next One"];

export default function Hobbies() {
  const sectionRef  = useRef(null);
  const scrollerRef = useRef(null);

  // Scroll reveal
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
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const photos = useMemo(
    () => [trav1, trav2, trav3, trav4, trav5, trav6, trav7, trav8, trav9, trav10],
    []
  );

  const scrollByCard = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const first = el.querySelector(".hobby-slide");
    const cardWidth = first ? first.getBoundingClientRect().width : 300;
    el.scrollBy({ left: dir * (cardWidth + 14), behavior: "smooth" });
  };

  return (
    <section className="section" id="hobbies" ref={sectionRef}>
      <div className="section-inner">

        <div className="hobbies-eyebrow reveal">Personal</div>
        <h2 className="section-title reveal" style={{ transitionDelay: "60ms" }}>
          Outside of Work
        </h2>
        <p className="section-subtitle reveal" style={{ transitionDelay: "120ms" }}>
          The things that keep me curious, grounded, and always planning the next adventure.
        </p>

        <article className="hobby-card reveal" style={{ transitionDelay: "180ms" }}>
          <div className="hobby-card-top" />

          {/* ── GALLERY ── */}
          <div className="hobby-gallery">
            <button
              className="hobby-arrow hobby-arrow--prev"
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollByCard(-1)}
            >‹</button>

            <div className="hobby-track" ref={scrollerRef}>
              {photos.map((src, i) => (
                <div className="hobby-slide" key={i}>
                  <img
                    src={src}
                    alt={`Travel photo ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>

            <button
              className="hobby-arrow hobby-arrow--next"
              type="button"
              aria-label="Scroll right"
              onClick={() => scrollByCard(1)}
            >›</button>

            {/* Scroll hint overlay */}
            <div className="hobby-gallery-hint" aria-hidden="true">Scroll →</div>
          </div>

          {/* ── CONTENT ── */}
          <div className="hobby-content">

            <div className="hobby-head">
              <h3 className="hobby-title">Travel &amp; Hiking</h3>
              <p className="hobby-org">Exploring the world one trip at a time</p>
            </div>

            {/* Stat pills */}
            <div className="hobby-stats">
              <div className="hobby-stat">
                <span className="hstat-val">40+</span>
                <span className="hstat-label">US States visited</span>
              </div>
              <div className="hobby-stat-divider" />
              <div className="hobby-stat">
                <span className="hstat-val">9+</span>
                <span className="hstat-label">Countries explored</span>
              </div>
              <div className="hobby-stat-divider" />
              <div className="hobby-stat">
                <span className="hstat-val">∞</span>
                <span className="hstat-label">More to go</span>
              </div>
            </div>

            {/* Body */}
            <p className="hobby-body">
              I've been to 40+ states across the US and traveled through 9+ countries,
              and honestly I'm still nowhere close to done. There's something about getting
              out of your bubble and seeing how different people live, eat, celebrate, and
              just go about their day that never gets old for me.
            </p>

            {/* Tags */}
            <div className="hobby-tags">
              {TAGS.map((t) => (
                <span className="chip" key={t}>{t}</span>
              ))}
            </div>

          </div>
        </article>
      </div>
    </section>
  );
}