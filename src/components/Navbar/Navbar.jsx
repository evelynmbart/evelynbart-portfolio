import "./Navbar.css";

export function Navbar() {
  return (
    <div className="navbar-container" id="navbar">
      <h3>Welcome to my Web Dev Porfolio!</h3>
      <div className="links">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
