import { useRef } from "react";
import "../styles/horizontalScroller.css";

export default function HorizontalScroller({ children, ariaLabel = "Horizontal scroller" }) {
  const scrollerRef = useRef(null);

  const scrollByAmount = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;

    // scroll by ~80% of visible width
    const amount = Math.floor(el.clientWidth * 0.8) * direction;

    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="hs-wrap" aria-label={ariaLabel}>
      <button
        type="button"
        className="hs-btn left"
        onClick={() => scrollByAmount(-1)}
        aria-label="Scroll left"
      >
        ‹
      </button>

      <div className="hs-scroller" ref={scrollerRef}>
        {children}
      </div>

      <button
        type="button"
        className="hs-btn right"
        onClick={() => scrollByAmount(1)}
        aria-label="Scroll right"
      >
        ›
      </button>
    </div>
  );
}
