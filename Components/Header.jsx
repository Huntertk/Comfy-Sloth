import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

import logo from '../src/assets/Images/logo.svg'


const Header = () => {
    const [isOpen, setOpen] = useState(false)

    const openNavBar = () => {
        setOpen((prev) => {
            return prev ? false : true
        })
    }
  return (
    <nav className='header-nav'>
        <NavLink to='/' >
            <img src={logo} alt="logo" className='header-logo' />
            
        </NavLink>
        <i className="fa-solid fa-bars sidebar-icon-open" onClick={openNavBar}></i>
        <div className={`navlink-container  ${isOpen ? 'sidebar-open' : 'sidebar-close'}`}>
            <i className="fa-solid fa-x sidebar-icon-close" onClick={openNavBar}></i>
            <NavLink to='/'>
                <img src={logo} alt="logo" className='header-logo sidebar-logo'  onClick={() => {return setOpen(false)}}/>
            </NavLink>

            <NavLink to='/'>
                <span className='nav-links'  onClick={() => {return setOpen(false)}}>Home</span>
            </NavLink>

            <NavLink to="products">
                <span className='nav-links'  onClick={() => {return setOpen(false)}}>Product</span>
            </NavLink>

            <NavLink to="about">
                <span className='nav-links'  onClick={() => {return setOpen(false)}}>About</span>
            </NavLink>
        </div>
    </nav>
  )
}

export default Header
