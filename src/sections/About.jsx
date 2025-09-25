import styles from './about.module.css'
import SkillsCard from '../components/SkillsCard'
export default function About() {
    const BASE_PATH= "/images/SkillsIcons/";
    return(<>
        <section className={styles.container}>
            <div className={styles.topSection}>
                <div className ={styles.leftInfo}>
                    <h1>ABOUT ME</h1>
                    <p>Hi! I’m Sanchita! A Year 3 Computer Science Student at NUS, with a passion for web design, game design and front-end development! </p>
                    <p>I love developing creative solutions that not only make lives easier, but also provide a unique, creative and pleasant user experience!</p>
                </div>
                <img className={styles.myImg} src="/images/AboutMeImg.png" alt="My Image"/>
            </div>
            <div className={styles.skillsSection}>
                <h2>MY SKILLS</h2>
                <ul className={styles.skills}>
                    <li><SkillsCard
                        icon= {BASE_PATH +"PythonIcon.svg"}
                        name= "Python"
                        description= "Programming Language"
                        backgroundColor="#32649245"
                        nameColor="#5280BC"
                        descriptionColor="#2E517F"
                        />
                    </li>
                    <li><SkillsCard
                        icon= {BASE_PATH +"JavaIcon.svg"}
                        name= "Java"
                        description= "Programming Language"
                        backgroundColor="#5382A121"
                        nameColor="#5382A1"
                        descriptionColor="#445374"
                        />
                    </li>
                    <li><SkillsCard
                        icon= {BASE_PATH +"UnityIcon.svg"}
                        name= "Unity"
                        description= "Game Engine"
                        backgroundColor="#222C3785"
                        nameColor="#848B92"
                        descriptionColor="#5C5F67"
                        />
                    </li>
                    <li><SkillsCard
                        icon= {BASE_PATH +"CSharpIcon.svg"}
                        name= "C Sharp"
                        description= "Programming Language"
                        backgroundColor="#0A6B1380"
                        nameColor="#6AA763"
                        descriptionColor="#5C8666"
                        />
                    </li>
                    <li><SkillsCard
                        icon= {BASE_PATH +"ReactIcon.svg"}
                        name= "React.js"
                        description= "Javascript framework"
                        backgroundColor="#00D8FF35"
                        nameColor="#2B8DAD"
                        descriptionColor="#047092"
                        />
                    </li>
                    <li><SkillsCard
                        icon= {BASE_PATH +"HTMLIcon.svg"}
                        name= "HTML 5"
                        description= "Markup Language"
                        backgroundColor="#E44D2645"
                        nameColor="#E44D26"
                        descriptionColor="#B1433797"
                        />
                    </li>
                    <li><SkillsCard
                        icon= {BASE_PATH +"CSSIcon.svg"}
                        name= "Cascading Stylesheets"
                        description= "Styling Language"
                        backgroundColor="#32649245"
                        nameColor="#5280BC"
                        descriptionColor="#2E517F"
                        />
                    </li>
                    <li><SkillsCard
                        icon= {BASE_PATH +"FigmaIcon.svg"}
                        name= "Figma"
                        description= "Design software"
                        backgroundColor="#42086045"
                        nameColor="#6E37AF"
                        descriptionColor="#5A3888"
                        />
                    </li>
                </ul>
            </div>
        </section>
    </>)
}