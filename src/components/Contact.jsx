import { useEffect, useRef } from "react";
import "../styles/contact.css";

export default function Contact() {
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
        <section className="section" id="contact" ref={sectionRef}>
            <div className="section-inner">
                <h2 className="section-title reveal">Let’s Connect</h2>
                <p className="section-subtitle reveal" style={{ transitionDelay: "80ms" }}>
                    If you're looking for someone who can take an AI idea from whiteboard to production, I'd love to hear what you're building.
                </p>

                <div className="contact-grid">
                    <div className="contact-card reveal" style={{ transitionDelay: "140ms" }}>
                        <h3 className="contact-heading">Quick Note</h3>
                        <p className="contact-text">

                            Whether you have a specific role in mind or just want to explore ideas, feel free to reach out. I'm most energized by problems that sit at the intersection of people, data, and real business impact. If that sounds like your world, let's talk.
                        </p>

                        <div className="contact-points">
                            <div className="contact-point">
                                <span className="label">Ideal roles</span>
                                <span className="value">AI Product Manager • Senior Technical PM • Platform PM</span>
                            </div>

                            <div className="contact-point">
                                <span className="label">Focus areas</span>
                                <span className="value">AI adoption • Enterprise platforms • Analytics</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-card reveal" style={{ transitionDelay: "220ms" }}>
                        <h3 className="contact-heading">Contact</h3>

                        <div className="contact-links">
                            <a className="contact-link" href="mailto:sandeshkc2876@gmail.com">
                                <span className="label">Email</span>
                                <span className="value">sandeshkc2876@gmail.com</span>
                            </a>

                            <a className="contact-link" href="tel:9728769328">
                                <span className="label">Phone</span>
                                <span className="value">972-876-9328</span>
                            </a>

                            <a
                                className="contact-link"
                                href="https://www.linkedin.com/in/sandesh-k-c/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="label">LinkedIn</span>
                                <span className="value">Connect with me →</span>
                            </a>
                        </div>

                        <div className="contact-cta">
                            <a className="primary-btn" href="mailto:sandeshkc2876@gmail.com">
                                Email Me
                            </a>

                            <a
                                className="secondary-btn"
                                href="https://www.linkedin.com/in/sandesh-k-c/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
