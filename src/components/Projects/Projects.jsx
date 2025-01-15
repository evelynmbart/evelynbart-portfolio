import blog from "../../../public/assets/project-images/blogwoohoo.png";
import budget from "../../../public/assets/project-images/budget-app.png";
import farkle from "../../../public/assets/project-images/farkle.png";
import gridddle from "../../../public/assets/project-images/gridddle.png";
import hangman from "../../../public/assets/project-images/hangman.png";
import memory from "../../../public/assets/project-images/hole-in-one.png";
import jaipur from "../../../public/assets/project-images/jaipur.png";
import mappi from "../../../public/assets/project-images/mappi.png";
import pomodoro from "../../../public/assets/project-images/pomodoro.png";
import pupProgress from "../../../public/assets/project-images/pup-progress.png";
import recipes from "../../../public/assets/project-images/recipes-app.png";
import tileSlider from "../../../public/assets/project-images/tile-slider.png";

import { ProjectCard } from "../../utils/ProjectCard";
import "./Projects.css";

const PROJECTS = [
  {
    title: "Mappi",
    src: mappi,
    link: "https://github.com/evelynmbart/mappi",
    description:
      "Use Mappi to locate your must-have items and find the perfect neighborhood for you and your lifestyle.",
  },
  {
    title: "Gridddle",
    src: gridddle,
    link: "https://gridddle.vercel.app/",
    description:
      "A pixel art themed daily art challenge, with new prompts daily and history of past submissions.",
  },
  // {
  //   title: "ithasbeendays",
  //   src: "../public/assets/project-images/ithasbeendays.png",
  //   link: "https://github.com/evelynmbart/ithasbeendays",
  //   description:
  //     "A habit/achievement tracker, tracking how many days since your last input/update.",
  // },
  {
    title: "Blog Woohoo!",
    src: blog,
    link: "https://evelynmbart.github.io/Blog/",
    description:
      "My first version (HTML) blog following my progression as a frontend web-developer",
  },
  {
    title: "Budgeting App",
    src: budget,
    link: "https://personal-budgeting.levelynup.com/",
    description:
      "Keep track of your budgets with this easy to use, dynamic expense tracker.",
  },
  {
    title: "Tile Slider",
    src: tileSlider,
    link: "https://tile-sliders.levelynup.com/",
    description:
      "Slide the tiles and find their numerical home. Once all are in ascending order you win!",
  },
  {
    title: "Jaipur Score Keeper",
    src: jaipur,
    link: "https://jaipur-score.levelynup.com/",
    description: "Track your Jaipur score easier than ever with this web app.",
  },
  {
    title: "Farkle",
    src: farkle,
    link: "http://farkle.levelynup.com/",
    description: "Web app farkle.",
  },
  {
    title: "Recipe Finder",
    src: recipes,
    link: "https://recipe-lookups.levelynup.com/",
    description: "Search for all types of recipes with this recipe finder app.",
  },
  {
    title: "Hole-in-One Memory Game",
    src: memory,
    link: "https://holeinone.levelynup.com/",
    description: "Dynamic donut themed memory card game.",
  },
  {
    title: "Hangman",
    src: hangman,
    link: "https://hangman.levelynup.com/",
    description: "Web app hangman game.",
  },
  {
    title: "Pomodoro",
    src: pomodoro,
    link: "https://pomodoro.levelynup.com/",
    description: "Tomato themed pomodoro studying timer and todo list.",
  },
  {
    title: "Pup Progress",
    src: pupProgress,
    link: "https://pup-progress.levelynup.com/",
    description: "Chapter/freestyle based dog training app home page.",
  },
];

// FIX ME: add link to projects (to their websites which will have a link to the github)

export function Projects() {
  return (
    <section id="projects" className="projects-container">
      <h1 className="sectionTitle">Projects</h1>
      <div className="projects-content">
        {PROJECTS.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </section>
  );
}
