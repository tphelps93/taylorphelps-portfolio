import { homeStyles } from "./home.styles";
import "./home.css";
import { Hero } from "./hero/hero";
import { About } from "./about/about";
import { Skills } from "./Skills/skills";

export const Home = () => {
  return (
    <div style={homeStyles.homeContainer} className="home-bg-pan">
      <Hero />
      {/* <div style={homeStyles.sectionDivider} aria-hidden="true">
        <div style={homeStyles.sectionDividerLine} />
      </div> */}
      <Skills />
    </div>
  );
};
