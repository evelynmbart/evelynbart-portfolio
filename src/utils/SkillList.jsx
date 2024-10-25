export function SkillList({ skill, checkMark }) {
  return (
    <span>
      <img src={checkMark} alt="Checkmark icon" />
      <p>{skill.skill}</p>
    </span>
  );
}
