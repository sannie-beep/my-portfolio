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
    // Or use objects for more control
    // { src: '/path/to/image1.jpg', alt: 'Description of image 1' }
  ];
  return (
    <>
      <header><Navbar/></header>
      <Hero/>
      <About/>
      <Projects/>
      <Education
        educationData={education}
      />
    </>
  )
}

export default App
