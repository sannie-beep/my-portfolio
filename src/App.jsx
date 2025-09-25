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
import Experience from './sections/Experience.jsx'

const experienceData = [
  {
    date: "May 2025 - Aug 2025",
    title: "Spatial Algorithm Verification Intern",
    degree: "Vilota AI, Singapore",
    subtext: "Tech Stack: Python, OpenGL, Kaolin, MCAP, Scipy, Bash Scripting",
    details: [
      "Extended an open-source rendering software to support an end-to-end test run simulation pipeline that generates reproducible timesynced image streams for validating the algorithms of visual–inertial devices.",
      "Designed and implemented ray-generation functions and software modules to simulate multi-camera (including fisheye) views from company's device in a scene generated from images using Gaussian splatting.",
      "Automated calibration parsing, virtual device placement and image stream generation from  user-defined trajectories using Kaolin, MCAP libraries and scipy and OpenGL modules.",
      "Reduced need for physical calibration and testing runs, laying the groundwork for a fully automated testbed for company's devices.",
      
    ]
  }
];



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
      <section id="experience">
        <Experience experienceData={experienceData}/>
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
