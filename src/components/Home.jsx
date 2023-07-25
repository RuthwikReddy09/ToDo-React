import React from 'react'
import Card from "./Card"
import About from './About'
import {Routes,Route } from 'react-router-dom'
function Home() {
  return (
    <div className='home'>
        <Routes>
          <Route path="/" element={<Card/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<About/>}/>
      </Routes>
    </div>
  )
}

export default Home
