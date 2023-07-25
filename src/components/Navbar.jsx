import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <>
    <div className="navbar">
      <Link className="logo" to="/">T0D0</Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
    </>
  )
}

export default Navbar
