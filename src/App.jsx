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
    date: "Jan 2026 - Present",
    title: "Teaching Assistant - Software Engineering Patterns and Principles",
    degree: "National University of Singapore",
    subtext: "",
    details: [
      "Preparing for and conducting weekly tutorial sessions on SWE principles, patterns and best practices for a class of 15 students.",
      "Mentoring student teams on semester-long full-stack software engineering projects."
    ]
  },
  {
    date: "May 2025 - Aug 2025",
    title: "Software Engineering Intern - Simulation and Data Pipeline",
    degree: "Vilota AI, Singapore",
    subtext: "Tech Stack: Python, OpenGL, Kaolin, MCAP, Scipy, Bash Scripting",
    details: [
      "Built an internal developer platform off an existing rendering engine to automate robot camera calibration and algorithm validation workflows, reducing end-to-end validation time by >10×.",
      "Implemented a multi-camera simulation interface with a configurable frontend UI for real-time visualization and backend services managing data streaming, synchronization and export.",
      "Engineered modular Python backend components with GPU-accelerated rendering pipelines using PyTorch and high-throughput data processing with the Foxglove MCAP API."
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
