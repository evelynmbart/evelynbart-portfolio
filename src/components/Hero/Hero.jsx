import avatar from "../../../public/assets/Adobe Express - file.png";
import githubDark from "../../../public/assets/github-dark.png";
import githubLight from "../../../public/assets/github-light.png";
import linkedinDark from "../../../public/assets/linkedin-dark.png";
import linkedinLight from "../../../public/assets/linkedin-light.png";
import moon from "../../../public/assets/moon.png";
import sun from "../../../public/assets/sun.png";
import { useTheme } from "../../utils/ThemeContext";
import "./Hero.css";

export function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className="hero-container">
      {/* <img src="/src/assets/bubble.png" /> */}
      <div className="hero-color-mode">
        <img
          className="avatar"
          src={avatar}
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
          New to the game and hungry for impactful opportunities. I'm fully
          self-taught and make up for my limited experience with curiosity,
          adaptability, and determination. My biggest passion is for developing
          intentional, accessible, and memorable React web apps. Let&apos;s work
          together!
        </p>
        <a href="/assets/Evelyn Bart 2025 Resume.pdf" download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}
