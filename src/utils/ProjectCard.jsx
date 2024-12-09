export function ProjectCard({ project }) {
  return (
    <a target="blank" href={project.link}>
      <img className="hover" src={project.src} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </a>
  );
}
