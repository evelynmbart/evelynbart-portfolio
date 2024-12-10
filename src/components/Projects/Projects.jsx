import { ProjectCard } from "../../utils/ProjectCard";
import "./Projects.css";

const PROJECTS = [
  {
    title: "Mappi",
    src: "../src/assets/project-images/mappi.png",
    link: "https://github.com/evelynmbart/mappi",
    description:
      "Use Mappi to locate your wishlist items and find the perfect neighborhood for you and your lifestyle.",
  },
  {
    title: "Gridddle",
    src: "../src/assets/project-images/gridddle.png",
    link: "https://github.com/evelynmbart/Gridddle",
    description:
      "A pixel art themed daily art challenge, with new prompts daily and history of past submissions.",
  },
  {
    title: "ithasbeendays",
    src: "../src/assets/project-images/ithasbeendays.png",
    link: "https://github.com/evelynmbart/ithasbeendays",
    description:
      "A habit/achievement tracker, tracking how many days since your last input/update.",
  },
  {
    title: "Blog Woohoo!",
    src: "../src/assets/project-images/blogwoohoo.png",
    link: "https://evelynmbart.github.io/Blog/",
    description:
      "My first version (HTML) blog following my progression as a frontend web-developer",
  },
  {
    title: "Budgeting App",
    src: "../src/assets/project-images/budget-app.png",
    link: "https://github.com/evelynmbart/budget-app",
    description:
      "Keep track of your budgets with this easy to use, dynamic expense tracker.",
  },
  {
    title: "Tile Slider",
    src: "../src/assets/project-images/tile-slider.png",
    link: "https://github.com/evelynmbart/Slider-game",
    description:
      "Slide the tiles and find their numerical home. Once all are in ascending order you win!",
  },
  {
    title: "Jaipur Score Keeper",
    src: "../src/assets/project-images/jaipur.png",
    link: "https://github.com/evelynmbart/jaipur-score",
    description: "Track your Jaipur score easier than ever with this web app.",
  },
  {
    title: "Farkle",
    src: "../src/assets/project-images/farkle.png",
    link: "https://github.com/evelynmbart/farkle",
    description: "Web app farkle.",
  },

  {
    title: "Recipe Finder",
    src: "../src/assets/project-images/recipes-app.png",
    link: "https://github.com/evelynmbart/recipe-app",
    description: "Search for all types of recipes with this recipe finder app.",
  },
  {
    title: "Hole-in-One Memory Game",
    src: "../src/assets/project-images/hole-in-one.png",
    link: "https://github.com/evelynmbart/Memory-Game",
    description: "Dynamic donut themed memory card game.",
  },
  {
    title: "Hangman",
    src: "../src/assets/project-images/hangman.png",
    link: "https://github.com/evelynmbart/hangman",
    description: "Web app hangman game.",
  },
  {
    title: "Pomodoro",
    src: "../src/assets/project-images/pomodoro.png",
    link: "https://github.com/evelynmbart/pomodoro",
    description: "Tomato themed pomodoro studying timer and todo list.",
  },
  {
    title: "Pup Progress",
    src: "../src/assets/project-images/pup-progress.png",
    link: "https://github.com/evelynmbart/Pup-Progress",
    description: "Chapter/freestyle based dog training app.",
  },
];

// FIX ME: add link to projects (to their websites which will have a link to the github)

export function Projects() {
  //   const [projects, setProjects] = useState(PROJECTS);
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
