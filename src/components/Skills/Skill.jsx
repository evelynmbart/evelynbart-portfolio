import "./Skills.css";
import checkMarkDark from "../../assets/check-dark.png";
import checkMarkLight from "../../assets/check-light.png";

export function Skills() {
  return (
    <section className="skills-container" id="skills">
      <h1 className="sectionTitle">Skills</h1>
      <div className="skills-list">
        <span>
          <img src={checkMarkDark} alt="Checkmark icon" />
          <p>html</p>
        </span>
      </div>
    </section>
  );
}
