import { ProjectCard } from "../../utils/ProjectCard";
import projectOne from "../../assets/project-cover.png";
import "./Projects.css";
import { useState } from "react";

const PROJECTS = [
  {
    title: "Project One",
    src: "./src/assets/project-cover.png",
    description: "description",
  },
  {
    title: "Project Two",
    src: "./src/assets/project-cover.png",
    description: "description",
  },
  {
    title: "Project Three",
    src: "./src/assets/project-cover.png",
    description: "description",
  },
  {
    title: "Project Four",
    src: "./src/assets/project-cover.png",
    description: "description",
  },
];

export function Projects() {
  const [projects, setProjects] = useState(PROJECTS);
  return (
    <section id="projects" className="projects-container">
      <h1 className="sectionTitle">Projects</h1>
      <div className="projects-content">
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </section>
  );
}
