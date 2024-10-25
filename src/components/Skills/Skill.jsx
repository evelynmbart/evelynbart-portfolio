import "./Skills.css";
import checkMarkDark from "../../assets/check-dark.png";
import checkMarkLight from "../../assets/check-light.png";
import { SkillList } from "../../utils/SkillList";

const SKILLS_1 = [
  {
    skill: "html",
    src: checkMarkDark,
  },
  {
    skill: "css",
    src: checkMarkDark,
  },

  {
    skill: "javascript",
    src: checkMarkDark,
  },
  {
    skill: "Typescript",
    src: checkMarkDark,
  },
  {
    skill: "node",
    src: checkMarkDark,
  },
];

const SKILLS_2 = [
  {
    skill: "react.js",
    src: checkMarkDark,
  },
  {
    skill: "git",
    src: checkMarkDark,
  },
  {
    skill: "postSQL",
    src: checkMarkDark,
  },
];

const SKILLS_3 = [
  {
    skill: "tailwind css",
    src: checkMarkDark,
  },
  {
    skill: "figma",
    src: checkMarkDark,
  },
  {
    skill: "UNIX command line",
    src: checkMarkDark,
  },
];

export function Skills() {
  return (
    <section className="skills-container" id="skills">
      <h1 className="sectionTitle">Skills</h1>
      <div className="skills-list">
        {SKILLS_1.map((skill, index) => (
          <SkillList key={index} skill={skill} />
        ))}
      </div>
      <hr />
      <div className="skills-list">
        {SKILLS_2.map((skill, index) => (
          <SkillList key={index} skill={skill} />
        ))}
      </div>
      <hr />
      <div className="skills-list">
        {SKILLS_3.map((skill, index) => (
          <SkillList key={index} skill={skill} />
        ))}
      </div>
      <hr />
    </section>
  );
}
