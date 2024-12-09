import { useTheme } from "../../utils/ThemeContext";
import "./Hero.css";
import moon from "../../assets/moon.png";
import sun from "../../assets/sun.png";
import githubLight from "../../assets/github-light.png";
import linkedinLight from "../../assets/linkedin-light.png";
import githubDark from "../../assets/github-dark.png";
import linkedinDark from "../../assets/linkedin-dark.png";

export function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className="hero-container">
      <div className="hero-color-mode">
        <img
          className="avatar"
          src="/src/assets/avatar02.png"
          alt="profile avatar of Evelyn Bart"
        />
        <img
          className="colorMode"
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className="hero-info">
        <h1>Evelyn Bart</h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://github.com/evelynmbart" target="blank">
            <img src={githubIcon} alt="github logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/evelyn-bart-a469a4288/"
            target="blank"
          >
            <img src={linkedinIcon} alt="linkedin logo" />
          </a>
        </span>
        <p className="description">
          With a passion for developing intentional and memorable React web
          apps.
        </p>
        <a href="/src/assets/Evelyn Bart 2024 Resume copy.pdf" download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}
