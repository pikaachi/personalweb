// Hobbies.jsx
import { useMemo, useRef } from "react";
import "../styles/hobbies.css";

import trav1 from "../photos/trav1.png";
import trav2 from "../photos/trav2.png";
import trav3 from "../photos/trav3.png";
import trav4 from "../photos/trav4.png";
import trav5 from "../photos/trav5.png";
import trav6 from "../photos/trav6.png";
import trav7 from "../photos/trav7.png";
import trav8 from "../photos/trav8.png";
import trav9 from "../photos/trav9.png";
import trav10 from "../photos/trav10.png";

export default function Hobbies() {
  const scrollerRef = useRef(null);

  const photos = useMemo(
    () => [trav1, trav2, trav3, trav4, trav5, trav6, trav7, trav8, trav9, trav10],
    []
  );

  const scrollByCard = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;

    const first = el.querySelector(".hobby-slide");
    const cardWidth = first ? first.getBoundingClientRect().width : 520;
    const gap = 16;

    el.scrollBy({
      left: dir * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section className="section" id="hobbies">
      <div className="section-inner">
        <h2 className="section-title">Outside of Work</h2>
        <p className="section-subtitle">
          Few things that keep me curious and consistent.
        </p>

        <article className="hobby-card">
          {/* Top: Text */}
          <div className="hobby-top">
            <div className="hobby-meta">
              <h3 className="hobby-title">Travel &amp; Hiking</h3>

              <p className="hobby-body">
                I&apos;ve been to 40+ states across the US and traveled through 9+ countries,
                and honestly I&apos;m still nowhere close to done. There&apos;s something
                about getting out of your bubble and seeing how different people live,
                eat, celebrate, and just go about their day that never gets old for me.
            
              </p>

              <div className="hobby-tags">
                <span className="pill">40+ US States</span>
                <span className="pill">9+ Countries</span>
                <span className="pill">Hiking</span>
                <span className="pill">Always Planning the Next One</span>
              </div>
            </div>
          </div>

          {/* Bottom: Large gallery */}
          <div className="hobby-gallery">
            <button
              className="gallery-arrow left"
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollByCard(-1)}
            >
              ‹
            </button>

            <div className="gallery-track" ref={scrollerRef}>
              {photos.map((src, i) => (
                <div className="hobby-slide" key={i}>
                  <img src={src} alt={`Travel photo ${i + 1}`} loading="lazy" />
                </div>
              ))}
            </div>

            <button
              className="gallery-arrow right"
              type="button"
              aria-label="Scroll right"
              onClick={() => scrollByCard(1)}
            >
              ›
            </button>
          </div>

          <div className="gallery-hint">Scroll →</div>
        </article>
      </div>
    </section>
  );
}