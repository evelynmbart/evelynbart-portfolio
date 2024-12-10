import wishlist from "../../../public/assets/project-images/mappi.png";
import { ProjectCard } from "../../utils/ProjectCard";
import "./Projects.css";

const PROJECTS = [
  {
    title: "Wishlist",
    src: { wishlist },
    link: "https://github.com/evelynmbart/mappi",
    description:
      "Use Mappi to locate your wishlist items and find the perfect neighborhood for you and your lifestyle.",
  },
  {
    title: "Gridddle",
    src: "../public/assets/project-images/gridddle.png",
    link: "https://gridddle.vercel.app/",
    description:
      "A pixel art themed daily art challenge, with new prompts daily and history of past submissions.",
  },
  {
    title: "ithasbeendays",
    src: "../public/assets/project-images/ithasbeendays.png",
    link: "https://github.com/evelynmbart/ithasbeendays",
    description:
      "A habit/achievement tracker, tracking how many days since your last input/update.",
  },
  {
    title: "Blog Woohoo!",
    src: "../public/assets/project-images/blogwoohoo.png",
    link: "https://evelynmbart.github.io/Blog/",
    description:
      "My first version (HTML) blog following my progression as a frontend web-developer",
  },
  {
    title: "Budgeting App",
    src: "../public/assets/project-images/budget-app.png",
    link: "https://budget-app-pi-lemon.vercel.app/",
    description:
      "Keep track of your budgets with this easy to use, dynamic expense tracker.",
  },
  {
    title: "Tile Slider",
    src: "../public/assets/project-images/tile-slider.png",
    link: "https://tile-slider.vercel.app/",
    description:
      "Slide the tiles and find their numerical home. Once all are in ascending order you win!",
  },
  {
    title: "Jaipur Score Keeper",
    src: "../public/assets/project-images/jaipur.png",
    link: "https://jaipur-score.vercel.app/",
    description: "Track your Jaipur score easier than ever with this web app.",
  },
  {
    title: "Farkle",
    src: "../public/assets/project-images/farkle.png",
    link: "https://farkle-nine.vercel.app/",
    description: "Web app farkle.",
  },
  {
    title: "Recipe Finder",
    src: "../public/assets/project-images/recipes-app.png",
    link: "https://recipe-app-seven-navy.vercel.app/",
    description: "Search for all types of recipes with this recipe finder app.",
  },
  {
    title: "Hole-in-One Memory Game",
    src: "../public/assets/project-images/hole-in-one.png",
    link: "https://memory-game-beryl-tau.vercel.app/",
    description: "Dynamic donut themed memory card game.",
  },
  {
    title: "Hangman",
    src: "../public/assets/project-images/hangman.png",
    link: "https://hangman-one-fawn.vercel.app/",
    description: "Web app hangman game.",
  },
  {
    title: "Pomodoro",
    src: "../public/assets/project-images/pomodoro.png",
    link: "https://pomodoro-chi-beryl.vercel.app/",
    description: "Tomato themed pomodoro studying timer and todo list.",
  },
  {
    title: "Pup Progress",
    src: "../public/assets/project-images/pup-progress.png",
    link: "https://pup-progress.vercel.app/",
    description: "Chapter/freestyle based dog training app home page.",
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
