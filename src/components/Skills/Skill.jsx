import checkMarkDark from "../../../public/assets/check-dark.png";
import checkMarkLight from "../../../public/assets/check-light.png";
import { SkillList } from "../../utils/SkillList";
import { useTheme } from "../../utils/ThemeContext";
import "./Skills.css";

const SKILLS_1 = [
  {
    skill: "React.js",
    src: checkMarkDark,
  },
  {
    skill: "Javascript",
    src: checkMarkDark,
  },

  {
    skill: "Typescript",
    src: checkMarkDark,
  },
  {
    skill: "Node.js",
    src: checkMarkDark,
  },
];

const SKILLS_2 = [
  {
    skill: "HTML",
    src: checkMarkDark,
  },
  {
    skill: "css",
    src: checkMarkDark,
  },
  {
    skill: "Tailwind css",
    src: checkMarkDark,
  },
];

const SKILLS_3 = [
  {
    skill: "Git/Github",
    src: checkMarkDark,
  },
  {
    skill: "PostgreSQL",
    src: checkMarkDark,
  },
  {
    skill: "Unix command line",
    src: checkMarkDark,
  },
];
const SKILLS_4 = [
  {
    skill: "Team player",
    src: checkMarkDark,
  },
  {
    skill: "Reliable",
    src: checkMarkDark,
  },

  {
    skill: "Curious",
    src: checkMarkDark,
  },
  {
    skill: "adaptable",
    src: checkMarkDark,
  },
];

export function Skills() {
  const { theme } = useTheme();
  const checkMark = theme === "light" ? checkMarkLight : checkMarkDark;

  return (
    <section className="skills-container" id="skills">
      <h1 className="sectionTitle">Skills</h1>
      <div className="skills-list">
        {SKILLS_1.map((skill, index) => (
          <SkillList key={index} skill={skill} checkMark={checkMark} />
        ))}
      </div>
      <hr />
      <div className="skills-list">
        {SKILLS_2.map((skill, index) => (
          <SkillList key={index} skill={skill} checkMark={checkMark} />
        ))}
      </div>
      <hr />
      <div className="skills-list">
        {SKILLS_3.map((skill, index) => (
          <SkillList key={index} skill={skill} checkMark={checkMark} />
        ))}
      </div>
      <hr />
      <div className="skills-list">
        {SKILLS_4.map((skill, index) => (
          <SkillList key={index} skill={skill} checkMark={checkMark} />
        ))}
      </div>
    </section>
  );
}
