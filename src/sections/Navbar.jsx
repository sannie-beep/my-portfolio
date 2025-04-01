export default function Navbar() {
    return(
        <>
        <div className="navbar">
            <ul className="nav-buttons">
                <li><button>HOME</button></li>
                <li><button>ABOUT</button></li>
                <li><button>PROJECTS</button></li>
                <li><button>EDU/EXP</button></li>
                <li><button>CONTACT</button></li>
            </ul> 
            <div className="nav-socials">
                <a href="https://github.com/sannie-beep" target="_blank">
                    <img src="./images/mdi_github.svg" alt="Link to my Github."/>
                </a>
                <a href="https://www.linkedin.com/in/sanchita-dhareshwar-58954125a/" target="_blank">
                    <img src="./images/mdi_linkedin.svg" alt="Link to my LinkedIn."/>
                </a>
                <a href= "mailto:sanchita.dhareshwar@u.nus.edu">
                    <img src="./images/ic_baseline-email.svg" alt="My Email Address."/>
                </a>
                <a className="nav-resume" href= "./public/resume.pdf" download="Sanchita_Dhareshwar_Resume">
                    <img src="./images/Vector.svg" alt="Download my Resume."/>
                </a>
            </div>
        </div>
        </>
    )
}