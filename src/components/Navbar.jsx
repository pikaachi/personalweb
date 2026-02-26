import { useEffect, useState } from "react";
import "../styles/navbar.css";

const links = [
  { id: "home",       label: "Home"       },
  { id: "about",      label: "About"      },
  { id: "impact",     label: "Impact"     },
  { id: "work",       label: "AI Work"    },
  { id: "experience", label: "Experience" },
  { id: "education",  label: "Education"  },
  { id: "skills",     label: "Skills"     },
  { id: "community",  label: "Community"  },
  { id: "hobbies",    label: "Hobbies"    },
  { id: "contact",    label: "Contact"    },
];

export default function Navbar() {
  const [activeId,   setActiveId]   = useState("home");
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [scrolled,   setScrolled]   = useState(false);

  // ── Active section tracking ──────────────────────────────
  useEffect(() => {
    const getNavH = () => document.querySelector(".nav")?.offsetHeight || 0;

    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        root: null,
        threshold: [0.05, 0.12, 0.2, 0.35, 0.5],
        rootMargin: "-15% 0px -70% 0px",
      }
    );

    sections.forEach((s) => io.observe(s));

    let ticking = false;

    const computeActiveFromScroll = () => {
      ticking = false;
      const navH = getNavH();
      const y = window.scrollY + navH + 24;

      let bestId  = links[0].id;
      let bestTop = -Infinity;

      for (const l of links) {
        const el = document.getElementById(l.id);
        if (!el) continue;
        const top = el.offsetTop;
        if (top <= y && top > bestTop) { bestTop = top; bestId = l.id; }
      }

      setActiveId(bestId);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(computeActiveFromScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    computeActiveFromScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      io.disconnect();
    };
  }, []);

  // ── Scroll opacity ───────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Close menu on outside click ──────────────────────────
  useEffect(() => {
    if (!menuOpen) return;
    const close = (e) => {
      if (!e.target.closest(".nav-links") && !e.target.closest(".nav-burger")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [menuOpen]);

  // ── Smooth scroll + close menu ───────────────────────────
  const onNavClick = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const navH = document.querySelector(".nav")?.offsetHeight || 0;
    const y = el.getBoundingClientRect().top + window.scrollY - (navH + 12);
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <header className={`nav${scrolled ? " nav--scrolled" : ""}`}>
      <div className="nav-inner">

        {/* Brand */}
        <button
          className="nav-brand"
          type="button"
          onClick={() => onNavClick("home")}
        >
          Sandesh KC
        </button>

        {/* Desktop + mobile-open links */}
        <nav
          className={`nav-links${menuOpen ? " open" : ""}`}
          aria-label="Primary"
        >
          {menuOpen && <div className="nav-menu-bar" aria-hidden="true" />}

          {links.map((l) => (
            <button
              key={l.id}
              type="button"
              className={`nav-link${activeId === l.id ? " active" : ""}`}
              onClick={() => onNavClick(l.id)}
              aria-current={activeId === l.id ? "page" : undefined}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="nav-right">
          <button
            className="nav-cta"
            type="button"
            onClick={() => onNavClick("contact")}
          >
            Get in Touch
          </button>

          {/* Burger — mobile only */}
          <button
            className={`nav-burger${menuOpen ? " open" : ""}`}
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>

      </div>
    </header>
  );
}