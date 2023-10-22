import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Contact from "./components/contact";
import Projects from "./components/projects";
import "./style/index.scss";
import Skills from "./components/skills";
import AboutMe from "./components/aboutMe";
import ArrowUp from "./components/arrowUp";

const App = () => {
  return (
    <div>
      <section id="Accueil">
        <ArrowUp />
        <Navbar />
        <Hero />
      </section>
      <section id="Compétences">
        <Skills />
      </section>
      <section id="Projets">
        <Projects />
      </section>
      <section id="Contact">
        <Contact />
      </section>
      <section id="A propos">
        <AboutMe />
      </section>
    </div>
  );
};

export default App;
