import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../Assests/logo.svg'
import toggleon from '../../Assests/icon-menu.svg'
import toggleoff from '../../Assests/icon-menu-close.svg'

const Navbar = () => {

  const [toggle,setToggle] = useState(false)
  return (

    <div className='navbar__container'>
          
      <img className='navbar-logo' src={logo} alt="logo" />

      <img className="toggle-open" src={toggleon} alt="Open-menu" onClick={()=>{setToggle(!toggle);}}/>

      {toggle && <nav className='toggle__menu-backdrop' onClick={()=>setToggle(!toggle)}></nav>}
      <nav className={toggle ? 'toggle__menu active' : 'toggle__menu'}>
        <img className='toggle__menu-close' style={{height:"1.5rem",cursor:'pointer'}}   src={toggleoff} alt="Close-menu" onClick={()=>setToggle(!toggle)}/>
        <ul className='toggle__menu-links'>
          <li><a href="/#">Home</a></li>
          <li><a href="/#">New</a></li>
          <li><a href="/#">Popular</a></li>
          <li><a href="/#">Trending</a></li>
          <li><a href="/#">Categories</a></li>
        </ul>
      </nav>

      <ul className='links__container'>
        <li><a href="/#">Home</a></li>
        <li><a href="/#">New</a></li>
        <li><a href="/#">Popular</a></li>
        <li><a href="/#">Trending</a></li>
        <li><a href="/#">Categories</a></li>
      </ul>

    </div>
  )
}

export default Navbar