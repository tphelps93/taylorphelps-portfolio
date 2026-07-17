import { aboutStyles } from "./about.styles";
import portfolioPicture from "../../../assets/portfolio-picture.png";

export const About = () => {
  return (
    <div style={aboutStyles.aboutContainer}>
      <div style={aboutStyles.inner}>
        <header style={aboutStyles.header}>
          <h2 style={aboutStyles.title}>
            About <span style={aboutStyles.accent}>Me</span>
          </h2>
        </header>

        <div style={aboutStyles.content}>
          <div style={aboutStyles.leftColumn}>
            <h3 style={aboutStyles.headline}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </h3>
            <p style={aboutStyles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vitae justo nec sapien fringilla fermentum. Curabitur auctor diam
              vel ipsum convallis, vitae malesuada justo sollicitudin.
            </p>
            <p style={aboutStyles.paragraph}>
              Integer eget nulla at risus aliquet ornare. Duis ultricies ligula
              sed orci aliquet, eu tempor nisi vestibulum.
            </p>
            <div style={aboutStyles.actions}>
              <a href="/contact" style={aboutStyles.primaryButton}>
                Get In Touch
              </a>
              <a href="/resume" style={aboutStyles.secondaryButton}>
                Resume
              </a>
            </div>
          </div>

          <div style={aboutStyles.rightColumn}>
            <img
              src={portfolioPicture}
              alt="About placeholder"
              style={aboutStyles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
