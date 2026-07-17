import "./App.css";
import { AboutMe } from "./components/about-me/about-me";
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import { Contact } from "./components/contact/contact";
import { Projects } from "./components/projects/projects";
import { Route, Routes } from "react-router-dom";
import { stars, starTileOffsets } from "./components/common/data";

const App = () => {
  return (
    <div id="app-container">
      <div className="app-background" aria-hidden="true">
        <div className="app-stars">
          {starTileOffsets.map((offset, tileIndex) => (
            <div
              key={tileIndex}
              className="app-stars-tile"
              style={{ top: offset.top, left: offset.left }}
            >
              {stars.map((star, index) => (
                <span
                  key={index}
                  className="app-star"
                  style={{
                    top: star.top,
                    left: star.left,
                    width: star.size,
                    height: star.size,
                    opacity: star.opacity,
                    animationDelay: star.delay,
                    background: star.color || "var(--text-color)",
                    boxShadow:
                      star.boxShadow ||
                      "0 0 0 1px color-mix(in srgb, var(--text-color) 20%, transparent), 0 0 10px color-mix(in srgb, var(--text-color) 35%, transparent)",
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
