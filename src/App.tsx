import './App.css'
import { AboutMe } from './components/about-me/about-me';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';
import { Projects } from './components/projects/projects';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const stars = [
    { top: '10%', left: '8%', size: '2px', opacity: 0.8, delay: '0s' },
    { top: '18%', left: '24%', size: '3px', opacity: 0.9, delay: '0.8s' },
    { top: '14%', left: '56%', size: '2px', opacity: 0.7, delay: '1.2s' },
    { top: '22%', left: '72%', size: '2px', opacity: 0.85, delay: '0.4s' },
    { top: '32%', left: '12%', size: '4px', opacity: 0.95, delay: '1.6s' },
    { top: '36%', left: '82%', size: '2px', opacity: 0.75, delay: '2s' },
    { top: '44%', left: '38%', size: '2px', opacity: 0.7, delay: '0.6s' },
    { top: '54%', left: '66%', size: '3px', opacity: 0.9, delay: '1.4s' },
    { top: '60%', left: '20%', size: '2px', opacity: 0.8, delay: '2.4s' },
    { top: '68%', left: '88%', size: '2px', opacity: 0.82, delay: '1.8s' },
    { top: '76%', left: '44%', size: '2px', opacity: 0.78, delay: '0.9s' },
    { top: '84%', left: '16%', size: '3px', opacity: 0.9, delay: '1.1s' },
  ];

  return (
    <div id="app-container">
      <div className="app-background" aria-hidden="true">
        <div className="app-stars">
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
              }}
            />
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
  )
}

export default App;
