import React from 'react'
import './App.css'
import './index.css'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element = {<Home />}/>
        <Route exact path="/about" element = {<About />}/>
        <Route exact path="/projects" element = {<Projects />}/>
      </Routes>
    </div>
  )
}

export default App


//USEFUL LINKS

//https://keyframes.app/animate

//https://animatedbackgrounds.me/fluid.html

//https://chartscss.org/

//https://www.html-code-generator.com/css/triangle-generator

//https://www.svgrepo.com/