import "./Hero.css";

export function Hero() {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-color-mode">
        <img
          className="avatar"
          src="/src/assets/avatar.png"
          alt="profile avatar of Evelyn Bart"
        />
        <img
          className="colorMode"
          src="/src/assets/moon.png"
          alt="Color mode icon"
        />
      </div>
      <div className="hero-info">
        <h1>
          Evelyn <br />
          Bart
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://github.com/evelynmbart" target="blank">
            <img src="/src/assets/github-dark.png" alt="github logo" />
          </a>
          <a href="www.linkedin.com/in/evelyn-bart-a469a4288" target="blank">
            <img src="/src/assets/linkedin-dark.png" alt="linkedin logo" />
          </a>
        </span>
        <p>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href="/src/assets/Evelyn Bart 2024 Resume copy.pdf" download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}
