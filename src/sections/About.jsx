import styles from './about.module.css'
import SkillCard from '../components/SkillCard'
export default function About() {
    return(<>
        <section className={styles.container}>
            <div className={styles.topSection}>
                <div className ={styles.leftInfo}>
                    <h1>ABOUT ME</h1>
                    <p>Hi! I’m Sanchita! A Year 2 Computer Science Student at NUS, with a passion for web design, game design and front-end development! </p>
                    <p>I love c about developing creative solutions that not only make lives easier, but also provide a unique, creative and pleasant user experience!</p>
                </div>
                <img className={styles.myImg} src="./images/AboutMeImg.png"/>
            </div>
            <div className={styles.skillsSection}>
                <h2>MY TECH STACK</h2>
                <ul className={styles.skills}>
                    <li><SkillCard
                        icon= ".."
                        />
                    </li>
                </ul>
            </div>
        </section>
    </>)
}