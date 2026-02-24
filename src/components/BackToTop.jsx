import { useEffect, useState } from "react";
import "../styles/backToTop.css";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      className={`backtop ${show ? "show" : ""}`}
      onClick={goTop}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}
