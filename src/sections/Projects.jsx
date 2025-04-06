import styles from "./styles/Projects.module.css"
import ProjectCard from "../components/ProjectCard"

export default function Projects(){
    const ICON_PATH = "./images/ProjIcons/";
    const projectData = {
        title: "SURF OR PAY, 2024",
        image: {
          src: "./images/ProjImages/surf-2.svg",
          alt: "Surf or Pay Slideshow"
        },
        description: [
          "A task management app using monetary forfeit to enforce productivity and penalize procrastination!",
          "Hackathon project-turned passion venture with 3 collaborators",
          "Worked on UI design in Figma and front-end components using CSS and React"
        ],
        skills: ["REACT.JS", "CSS", "HTML", "FIGMA"],
        links: [
          {
            name: "WEBSITE",
            icon: ICON_PATH+"Link.svg",
            url: "https://surf-or-pay-deployment.vercel.app/"
          },
          {
            name: "DEVPOST",
            icon: ICON_PATH+"Devpost.svg",
            url: "https://devpost.com/software/surf-or-pay"
          },
          {
            name: "GITHUB",
            icon: ICON_PATH+"Github.svg",
            url: "https://github.com/kimxw/Surf_Or_Pay"
          }
        ]
      };
    
    return(
        <section>
            <h1 className = {styles.mainTitle}>PROJECTS</h1>
            <div className = {styles.projectContainer}>
              <ProjectCard {...projectData} />
              <ProjectCard {...projectData} />
              <ProjectCard {...projectData} />
            </div>
        </section>
    )
}
