import React from 'react'
import { Link } from 'react-router-dom'
import '../Style.css'

function Navbar() {
  return (
    <nav className='navegation-bar'>
      <h1 className='logo'>PlenoNet</h1>
      <div className='links-bar'>
        <a href='#plans' className='link'>Planes</a>
        <a href="#contactForm" className='link'>Contacto</a>
      </div>
    </nav>
  )
}

export default Navbar