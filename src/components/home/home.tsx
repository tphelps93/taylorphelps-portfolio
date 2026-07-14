import { homeStyles } from "./home.styles";
import "./home.css";
import { Hero } from "./hero/hero";
import { About } from "./about/about";

export const Home = () => {
  return (
    <div style={homeStyles.homeContainer} className="home-bg-pan">
      <Hero />
      <About />
    </div>
  );
};
