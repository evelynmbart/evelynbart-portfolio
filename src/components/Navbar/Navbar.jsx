import moon from "../../assets/moon.png";
import sun from "../../assets/sun.png";
import { useTheme } from "../../utils/ThemeContext";
import "./Navbar.css";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;

  return (
    <div className="navbar-container" id="navbar">
      <h3>Welcome to my Web Dev Porfolio!</h3>
      <div className="links">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact"> Contact</a>
      </div>
      <div className="nav-color-mode">
        <img
          className="nav-colorMode"
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
    </div>
  );
}
