import GlowingButton from "../components/GlowingButton"

export default function Hero(){
    return(
        <section className="hero">  
            <img className="hero-img" src = "images/HeroImage.svg" alt="Space child riding Manta Ray (Hero Img)"/>
            <div className="hero-right">
                <h1>WELCOME TO MY PORTFOLIO!</h1>
                <h3>Sanchita Dhareshwar</h3>
                <p>Web Developer, Designer and Software Engineer.</p>
                <GlowingButton/>
            </div>
        </section>
    )
}