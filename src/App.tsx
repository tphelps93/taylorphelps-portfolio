import './App.css'
import { AboutMe } from './components/about-me/about-me';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';
import { Projects } from './components/projects/projects';

const App = () => {
  return (
    <div id="app-container">
      <Header />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;
