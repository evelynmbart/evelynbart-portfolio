import "./App.css";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Now } from "./components/Now/Now";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skill";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Now />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
