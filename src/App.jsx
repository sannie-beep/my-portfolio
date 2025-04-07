// App.jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import ImageCarousel from './components/ImageCarousel.jsx'
import Education from './sections/Education.jsx'
import education from './constants/education.jsx'

function App() {
  const images = [
    './images/ProjImages/SurfOrPay.svg',
    './images/ProjImages/surf-2.svg',
  ];

  return (
    <>
      <header>
        <Navbar/>
      </header>
      <section id="home">
        <Hero/>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="projects">
        <Projects/>
      </section>
      <section id="edu-exp">
        <Education educationData={education} />
      </section>
    </>
  )
}

export default App
