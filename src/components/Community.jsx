import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "../styles/community.css";

export default function Community() {
  const sectionRef = useRef(null);

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
    () => [
      new URL("../photos/vol1.jpeg", import.meta.url).href,
      new URL("../photos/vol2.jpeg", import.meta.url).href,
      new URL("../photos/vol3.jpeg", import.meta.url).href,
      new URL("../photos/vol4.jpeg", import.meta.url).href,
      new URL("../photos/vol5.jpeg", import.meta.url).href,
    ],
    []
  );

  const [current, setCurrent] = useState(0);
  const [fading,  setFading]  = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback(
    (idx) => {
      if (idx === current) return;
      setFading(true);
      setTimeout(() => {
        setCurrent(idx);
        setFading(false);
      }, 280);
    },
    [current]
  );

  const prev = useCallback(() => goTo((current - 1 + photos.length) % photos.length), [current, goTo, photos.length]);
  const next = useCallback(() => goTo((current + 1) % photos.length),                [current, goTo, photos.length]);

  // Auto-advance every 4 s
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % photos.length);
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, [photos.length]);

  // Pause on hover
  const pause  = () => clearInterval(timerRef.current);
  const resume = useCallback(() => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % photos.length);
    }, 4000);
  }, [photos.length]);

  const TAGS = [
    "Community Leadership",
    "Event Programming",
    "Professional Networking",
    "Diaspora Advocacy",
  ];

  return (
    <section className="section" id="community" ref={sectionRef}>
      <div className="section-inner">

        <div className="community-eyebrow reveal">Beyond Work</div>
        <h2 className="section-title reveal" style={{ transitionDelay: "60ms" }}>
          Community &amp; Leadership
        </h2>
        <p className="section-subtitle reveal" style={{ transitionDelay: "120ms" }}>
          Building community outside my formal roles — creating spaces where professionals grow, connect, and support each other.
        </p>

        <article className="community-card reveal" style={{ transitionDelay: "180ms" }}>
          <div className="community-card-top" />

          {/* ── CAROUSEL ── */}
          <div
            className="community-carousel"
            onMouseEnter={pause}
            onMouseLeave={resume}
            aria-label="TGND event photos"
          >
            <div className={`carousel-slide${fading ? " is-fading" : ""}`}>
              <img
                src={photos[current]}
                alt={`TGND event photo ${current + 1}`}
                loading="lazy"
                decoding="async"
              />
              {/* Gradient overlay at bottom for dot readability */}
              <div className="carousel-overlay" />
            </div>

            {/* Prev / Next arrows */}
            <button className="carousel-arrow carousel-arrow--prev" onClick={prev} aria-label="Previous photo" type="button">‹</button>
            <button className="carousel-arrow carousel-arrow--next" onClick={next} aria-label="Next photo"     type="button">›</button>

            {/* Dot navigation */}
            <div className="carousel-dots" role="tablist">
              {photos.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={idx === current}
                  aria-label={`Photo ${idx + 1}`}
                  className={`carousel-dot${idx === current ? " is-active" : ""}`}
                  onClick={() => goTo(idx)}
                />
              ))}
            </div>
          </div>

          {/* ── CONTENT ── */}
          <div className="community-content">

            {/* Header */}
            <div className="community-head">
              <div>
                <h3 className="community-title">
                  Austin Chapter Leader —{" "}
                  <a
                    href="https://www.thegreatnepalidiaspora.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="community-link"
                  >
                    The Great Nepali Diaspora (TGND)
                  </a>
                </h3>
                <p className="community-org">Non-profit · Austin, TX</p>
              </div>
            </div>

            {/* Stat pills */}
            <div className="community-stats">
              <div className="community-stat">
                <span className="cstat-val">13 → 70+</span>
                <span className="cstat-label">Attendees per event</span>
              </div>
              <div className="community-stat-divider" />
              <div className="community-stat">
                <span className="cstat-val">13+</span>
                <span className="cstat-label">Events organized</span>
              </div>
              <div className="community-stat-divider" />
              <div className="community-stat">
                <span className="cstat-val">Austin</span>
                <span className="cstat-label">Chapter founded</span>
              </div>
            </div>

            {/* Bullets */}
            <ul className="community-bullets">
              <li>
                Organize professional networking mixers, happy hours, and panel discussions connecting Nepali professionals across industries in Austin.
              </li>
              <li>
                Grew event attendance from 13 to 70+ by the sixth event — through consistent programming and word-of-mouth trust.
              </li>
              <li>
                Created a platform for local Nepali-owned businesses to showcase products and services, contributing to diaspora economic visibility.
              </li>
            </ul>

            {/* Tags */}
            <div className="community-tags">
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