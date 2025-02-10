import { useState } from "react";
import githubDark from "../../../public/icons/github-dark.png";
import githubLight from "../../../public/icons/github-light.png";
import linkedinDark from "../../../public/icons/linkedin-dark.png";
import linkedinLight from "../../../public/icons/linkedin-light.png";
import moon from "../../../public/icons/moon.png";
import sun from "../../../public/icons/sun.png";
import { useTheme } from "../../utils/ThemeContext";
import "./Hero.css";

const images = [
  "/photos-of-me/mtl.png",
  "/photos-of-me/graduation.jpg",
  "/photos-of-me/raleigh.jpg",
  "/photos-of-me/stanford.png",
  "/photos-of-me/xmas.jpg",
  "/photos-of-me/hhh.png",
  "/photos-of-me/le-mouv.PNG",
];

export function Hero() {
  const { theme, toggleTheme } = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section id="hero" className="hero-container">
      <div className="hero-color-mode">
        <div className="carousel-container">
          <img
            className="colorMode"
            src={themeIcon}
            alt="Color mode icon"
            onClick={toggleTheme}
          />
          <img
            className="carousel-image"
            src={images[currentImageIndex]}
            alt={`Evelyn Bart - Image ${currentImageIndex + 1}`}
          />
          <button className="carousel-arrow prev" onClick={prevImage}>
            ←
          </button>
          <button className="carousel-arrow next" onClick={nextImage}>
            →
          </button>
          <div className="carousel-dots">
            {images.map((_, index) => (
              <div
                key={index}
                className={`carousel-dot ${
                  index === currentImageIndex ? "active" : ""
                }`}
                onClick={() => goToImage(index)}
              />
            ))}
          </div>
        </div>
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
