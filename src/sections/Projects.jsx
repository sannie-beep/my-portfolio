
const ICON_PATH = "./images/ProjIcons/";
const PROJECTS = [
    {
        title: "SURF OR PAY (2025-now)",
        image: {
        src: "./images/ProjImages/SurfOrPay.svg",
        alt: "Surf or Pay image"
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
    },
    {
        title: "POCKET EXPLORER (2024-now)",
        image: {
        src: "./images/ProjImages/PocketExplorer.svg",
        alt: "Pocket Exploerer image"
        },
        description: [
        "A Pokemon-style snapshot capture game to create and sustain interest about Singapore's wildlife",
        "Initiated as a summer software development project (Orbital) and evolved into a long-term venture",
        "Contributed to full-stack development in Unity, handling asset creation, coding, and data management"
        ],
        skills: ["UNITY", "C#", "GAME DESIGN"],
        links: [
            {
                name: "ITCH.IO",
                icon: ICON_PATH+"Itch.svg",
                url: "https://wildevs.itch.io/pocket-explorer"
            },
            {
                name: "VIDEO",
                icon: ICON_PATH+"Video.svg",
                url: "https://www.youtube.com/watch?v=DuY7AIcL46c"
            },
            {
                name: "GITHUB",
                icon: ICON_PATH+"Github.svg",
                url: "https://github.com/wildevs-project/PocketExplorer"
            }
        ]   
    },
    {
        title: "OPTIMEET (DESIGN, 2024-now)",
        image: {
        src: "./images/ProjImages/Optimeet.svg",
        alt: "Optimeet image"
        },
        description: [
        "An aLL-in one managment app with AI-assisted meeting tools",
        "Done with a team of two other software developer peers",
        "Worked on design for landing page and dashboard in Figma"
        ],
        skills: ["FIGMA"],
        links: [
            {
                name: "FIGMA",
                icon: ICON_PATH+"Figma.svg",
                url: "https://www.figma.com/proto/tMlC8sXJNZCYU6MomvxQII/OptiMeet?node-id=4-547&node-type=canvas&t=24SekyLssYLSm1ia-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A547"
            },
            {
                name: "WEBSITE",
                icon: ICON_PATH+"Link.svg",
                url: "https://optimeet.vercel.app/"
            }
        ]   
    },
    {
        title: "My portfolio (2025-now)",
        image: {
        src: "./images/ProjImages/MyPortfolio.svg",
        alt: "My portfolio image"
        },
        description: [
        "This website you are on now :3",
        "Prototyped in Figma",
        "Made with React and CSS using Vite's build system"
        ],
        skills: ["REACT.JS", "HTML", "CSS"],
        links: [
            {
                name: "FIGMA",
                icon: ICON_PATH+"Figma.svg",
                url: "https://www.figma.com/proto/orxXtYsaMRZjicByipDJOD/Sanchita's-Portfolio!?page-id=0%3A1&node-id=1-168&p=f&viewport=507%2C396%2C0.19&t=p0voKNnxBs6MIzmo-1&scaling=scale-down&content-scaling=fixed"
            },
            {
                name: "GITHUB",
                icon: ICON_PATH+"Github.svg",
                url: "https://github.com/sannie-beep/my-portfolio"
            }
        ]   
    },
    {
        title: "SpaceX launches browser",
        image: {
        src: "./images/ProjImages/SpaceX.svg",
        alt: "SpaceX browser Image"
        },
        description: [
        "Developed a SpaceX Launches Browser in Unity using C#, integrating SpaceX’s REST API to fetch and display real-time launch data",
        "Parsed and organized key mission details into a clean, readable format with asynchronous data handling",
        "Used Postman to test endpoints and ensure smooth API integration throughout the development process"
        ],
        skills: ["REST APIS", "POSTMAN", "UNITY", "C#"],
        links: [
            {
                name: "BUILD",
                icon: ICON_PATH+"Web.svg",
                url: "https://play.unity.com/en/games/b8af5687-af26-4fe4-abed-a1ccaf1c57e4/webgl-builds/edit"
            },
            {
                name: "GITHUB",
                icon: ICON_PATH+"Github.svg",
                url: "https://github.com/sannie-beep/SpaceXProject"
            }
        ]   
    },
];


import styles from "./styles/Projects.module.css";
import ProjectCard from "../components/ProjectCard";


export default function Projects() {
  return (
    <section>
      <h1 className={styles.mainTitle}>PROJECTS</h1>
      <div className={styles.projectContainer}>
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
