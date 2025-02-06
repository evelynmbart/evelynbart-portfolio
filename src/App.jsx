import "./App.css";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skill";

function App() {
  return (
    <>
      <div className="border-container">
        <div className="border-line line1"></div>
        <div className="border-line line2"></div>
        <div className="border-line line3"></div>
      </div>
      {/* <div className="squiggle squiggle1"></div>
      <div className="squiggle squiggle2"></div>
      <div className="squiggle squiggle3"></div>
      <div className="squiggle squiggle4"></div>
      <div className="squiggle squiggle5"></div>
      <div className="squiggle squiggle6"></div>
      <div className="squiggle squiggle7"></div>
      <div className="squiggle squiggle8"></div>
      <div className="squiggle squiggle9"></div>
      <div className="squiggle squiggle10"></div> */}
      <Navbar />
      <Hero />
      {/* <Now /> */}
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
