import { useEffect, useRef } from "react";
import "../styles/about.css";
import sandeshPhoto from "../photos/sandesh.jpg";

function animateCount(el, targetValue, duration = 900) {
  if (!el) return;

  const raw = String(targetValue).trim();

  // Extract prefix/suffix (supports "$3M+", "10+", "7+")
  const hasDollar = raw.startsWith("$");
  const hasPlus = raw.endsWith("+");

  // Pull numeric core, allow decimals
  const numericMatch = raw.match(/[\d.]+/);
  const numeric = numericMatch ? parseFloat(numericMatch[0]) : 0;

  // Determine unit multiplier (M/K)
  const hasM = /M/i.test(raw);
  const hasK = /K/i.test(raw);
  const multiplier = hasM ? 1_000_000 : hasK ? 1_000 : 1;

  const target = numeric * multiplier;

  // Determine display unit formatting
  const format = (n) => {
    let display = n;

    // Keep the same unit style as original string
    if (hasM) display = n / 1_000_000;
    else if (hasK) display = n / 1_000;

    const isInt = Math.abs(display - Math.round(display)) < 1e-6;
    const numStr = isInt ? String(Math.round(display)) : display.toFixed(1);

    const unit = hasM ? "M" : hasK ? "K" : "";
    const prefix = hasDollar ? "$" : "";
    const suffix = `${unit}${hasPlus ? "+" : ""}`;

    return `${prefix}${numStr}${suffix}`;
  };

  const start = performance.now();
  const startVal = 0;

  const tick = (now) => {
    const t = Math.min(1, (now - start) / duration);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - t, 3);
    const current = startVal + (target - startVal) * eased;

    el.textContent = format(current);

    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = raw; // ensure exact final formatting
  };

  requestAnimationFrame(tick);
}

export default function About() {
  const sectionRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reveal + count-up
    const items = root.querySelectorAll(".reveal");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");

          // Trigger count-up only for metric values
          const isMetricValue = entry.target.classList.contains("metric-value");
          if (!prefersReduced && isMetricValue) {
            const finalText = entry.target.getAttribute("data-target");
            if (finalText) animateCount(entry.target, finalText, 900);
          }

          io.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const photoEl = photoRef.current;
    if (!photoEl) return;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    let rafId = null;

    const onScroll = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        rafId = null;

        const rect = photoEl.getBoundingClientRect();
        const vh = window.innerHeight || 1;

        // progress: -0.2 to 1.2 range, clamped
        const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)));

        // Subtle lift: moves up a bit as it comes into view
        const lift = (progress - 0.5) * -18; // px
        const tilt = (progress - 0.5) * -1.2; // deg

        photoEl.style.transform = `translateY(${lift}px) rotate(${tilt}deg)`;
      });
    };

    onScroll(); // set initial
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="section about-section" id="about" ref={sectionRef}>
      <div className="section-inner about-container">
        {/* LEFT — Photo */}
        <div className="about-photo-wrapper reveal" ref={photoRef}>
          <img src={sandeshPhoto} alt="Sandesh K.C." className="about-photo" />
        </div>

        {/* RIGHT — Content */}
        <div className="about-content">
          <h2 className="section-title reveal">About</h2>

          <p className="about-text reveal">
            I'm a Technical Product Manager specializing in AI/ML products. From defining
            the use case to building systems to driving adoption at scale. I've led GenAI
            and predictive analytics initiatives that replaced manual workflows, unlocked
            organizational capabilities, and delivered measurable cost savings.
          </p>

          <p className="about-text reveal">
            I bring a rare combination: the technical depth to work directly with data
            scientists and engineers, and the strategic fluency to translate that work into
            business impact that leadership can act on.
          </p>

          <div className="about-metrics">
            <div className="metric-card reveal">
              <div className="metric-label">Years Experience</div>
              <div className="metric-value reveal" data-target="7+">
                0
              </div>
            </div>

            <div className="metric-card reveal">
              <div className="metric-label">Products Shipped</div>
              <div className="metric-value reveal" data-target="10+">
                0
              </div>
            </div>

            <div className="metric-card reveal">
              <div className="metric-label">Cost Savings Delivered</div>
              <div className="metric-value reveal" data-target="$M+">
                $0
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}