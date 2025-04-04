import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'

function App() {
  
  return (
    <>
      <header><Navbar/></header>
      <Hero/>
      <About/>
      <Projects/>
    </>
  )
}

export default App
