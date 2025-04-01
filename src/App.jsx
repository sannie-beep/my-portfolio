import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
    </>
  )
}

export default App
