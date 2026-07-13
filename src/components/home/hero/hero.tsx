import { heroStyles } from "./hero.styles";
import { Link } from "react-router-dom";

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

          <div style={heroStyles.statsRow}>
            <div style={heroStyles.statsCard}>
              <strong>5+</strong>
              <span>years delivering and maintaining</span>
              <span>production systems</span>
            </div>
            <div style={heroStyles.statsCard}>
              <strong>React • TypeScript</strong>
              <span>Frontend & UI engineering</span>
            </div>
            <div style={heroStyles.statsCard}>
              <strong>Azure • CI/CD</strong>
              <span>Cloud & pipeline automation</span>
            </div>
            <div style={heroStyles.statsCard}>
              <strong>.NET • C#</strong>
              <span>Backend & server engineering</span>
            </div>
          </div>
        </div>

        <aside style={heroStyles.highlightCard} className="home-hero__panel">
          <p style={heroStyles.panelLabel}>Recent roles</p>
          <ul style={heroStyles.list}>
            <li>
              Software Development Engineer II — CloudFit Software (Jan 2026 –
              Present)
            </li>
            <li>
              Software Development Engineer — CloudFit Software (Dec 2022 – Jan
              2026)
            </li>
            <li>
              Site Reliability Engineer — CloudFit Software (May 2021 – Dec
              2022)
            </li>
          </ul>
          <div style={heroStyles.panelFooter}>
            <span>Based in Lynchburg, VA</span>
          </div>
        </aside>
      </section>
    </div>
  );
};
