import { heroStyles } from "./hero.styles";
import { Link } from "react-router-dom";
import "./hero.css";

export const Hero = () => {
  return (
    <div style={heroStyles.heroContainer}>
      <section className="home-hero">
        <div className="home-hero__content">
          <p style={heroStyles.eyebrow}>Software Development Engineer II</p>
          <h1 style={heroStyles.name}>
            I build maintainable, secure cloud-native applications.
          </h1>
          <p style={heroStyles.blurb}>
            Software Development Engineer II with experience delivering
            full-stack features, modernizing CI/CD pipelines, and supporting
            secure cloud-native solutions in regulated environments. Strong
            track record developing customer-facing applications, automating
            high-effort workflows, and improving reliability through root-cause
            remediation and preventive engineering.
          </p>

          <div style={heroStyles.ctaRow}>
            <Link
              to="/projects"
              style={heroStyles.primaryButton}
              className="home-hero__button"
            >
              Explore projects
            </Link>
            <Link
              to="/contact"
              style={heroStyles.secondaryButton}
              className="home-hero__button home-hero__button--secondary"
            >
              Contact
            </Link>
          </div>
        </div>

        <aside style={heroStyles.highlightCard} className="home-hero__panel">
            <div style={{ ...heroStyles.statsCard, gridColumn: "span 4" }}>
              <strong>5+</strong>
              <span>years delivering and maintaining</span>
              <span>production systems</span>
            </div>
            <div style={{ ...heroStyles.statsCard, gridColumn: "span 2" }}>
              <strong>React • TypeScript</strong>
              <span>Frontend & UI engineering</span>
            </div>
            <div style={{ ...heroStyles.statsCard, gridColumn: "span 2" }}>
              <strong>.NET • C#</strong>
              <span>Backend & server engineering</span>
            </div>
            <div style={{ ...heroStyles.statsCard, gridColumn: "span 4" }}>
              <strong>Azure • CI/CD</strong>
              <span>Cloud & pipeline automation</span>
            </div>
        </aside>
      </section>
    </div>
  );
};
