import menuDark from "../../assets/menu-dark.png";
import menuLight from "../../assets/menu-light.png";
import { useTheme } from "../../utils/ThemeContext";
import "./Navbar.css";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const menuIcon = theme === "light" ? menuLight : menuDark;

  return (
    <div className="navbar-container" id="navbar">
      <h3>Welcome to my Web Dev Porfolio!</h3>
      <div className="links">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="menu">
        <img src={menuIcon} />
      </div>
    </div>
  );
}
