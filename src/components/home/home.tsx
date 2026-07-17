import { homeStyles } from "./home.styles";
import "./home.css";
import { Hero } from "./hero/hero";
import { About } from "./about/about";
import { Skills } from "./skills/skills";
import { ProjectsSummary } from "./projects-summary/projectsSummary";

export const Home = () => {
  return (
    <div style={homeStyles.homeContainer} className="home-bg-pan">
      <Hero />
      <div style={homeStyles.sectionDivider} aria-hidden="true">
        <div style={homeStyles.sectionDividerLine} />
      </div>
      <About />
      <Skills />
      <ProjectsSummary />
    </div>
  );
};
