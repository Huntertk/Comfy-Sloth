import React, { useState } from 'react'
import logo from '../src/assets/Images/logo.svg'
import './header.css'
const Header = () => {
    const [isOpen, setOpen] = useState(false)

    const openNavBar = () => {
        setOpen((prev) => {
            return prev ? false : true
        })
    }
  return (
    <nav className='header-nav'>
        <img src={logo} alt="logo" className='header-logo' />
        <i className="fa-solid fa-bars sidebar-icon-open" onClick={openNavBar}></i>
        <div className={`navlink-container  ${isOpen ? 'sidebar-open' : 'sidebar-close'}`}>
            <i className="fa-solid fa-x sidebar-icon-close" onClick={openNavBar}></i>
            <img src={logo} alt="logo" className='header-logo sidebar-logo' />
            <span className='nav-links'>Home</span>
            <span className='nav-links'>Product</span>
            <span className='nav-links'>About</span>
        </div>
    </nav>
  )
}

export default Header
