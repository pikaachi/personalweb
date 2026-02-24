import { useMemo } from "react";
import "../styles/community.css";

export default function Community() {
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

    return (
        <section className="section" id="community">
            <div className="section-inner">
                <h2 className="section-title">Community &amp; Leadership</h2>
                <p className="section-subtitle">
                    Work I care about outside my formal roles: Building community, enabling
                    professionals, and creating spaces where people grow together.
                </p>

                <article className="community-card">
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
                            <p className="community-org">Non-profit Org</p>
                        </div>
                    </div>

                    <div className="community-grid">
                        <div className="community-copy">
                            <ul className="community-bullets">
                                <li>
                                    Lead and grow the Austin chapter of TGND by organizing professional
                                    networking mixers, happy hours, and panel discussions that connect Nepali
                                    professionals across industries in the Austin area.
                                </li>
                                <li>
                                    Grew event attendance from 13 attendees at the inaugural event to 70+ by
                                    the sixth event — building community momentum through consistent
                                    programming and word-of-mouth trust.
                                </li>
                                <li>
                                    Created a platform for local Nepali-owned businesses to showcase their
                                    products and services, directly contributing to economic visibility and
                                    community support within the diaspora.
                                </li>
                            </ul>

                            <div className="community-tags">
                                {[
                                    "Community Leadership",
                                    "Event Programming",
                                    "Professional Networking",
                                    "Diaspora Advocacy",
                                ].map((t) => (
                                    <span className="chip" key={t}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="community-gallery" aria-label="TGND gallery">
                            <div className="gallery-track">
                                {photos.map((src, idx) => (
                                    <figure className="gallery-item" key={src}>
                                        <img
                                            src={src}
                                            alt={`TGND event photo ${idx + 1}`}
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </figure>
                                ))}
                            </div>

                            <div className="gallery-hint">Scroll →</div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}