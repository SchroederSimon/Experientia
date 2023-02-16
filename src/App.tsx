import { useState } from 'react'
import About from './pages/About/About'


// Pages import
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Navbar from './pages/Navbar/Navbar'
import News from './pages/News/News'


function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <News />
    </>
  )
}

export default App
