import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
       <nav className="navbar">
                <div className="logo"><img src="https://i.gifer.com/origin/b9/b9b3c90a6e423029ca9977873d2a6ba4_w200.gif" alt="" height='70px' width="70px" /></div>
                <ul className="nav-links">
                    <li><Link to="/e200">200</Link></li>
                    <li><Link to="/e301">301</Link></li>
                    <li><Link to="/e404">404</Link></li>
                    <li><Link to="/e500">500</Link></li>
                </ul>
               
            </nav>
            <Outlet />
    </>
  )
}

export default Navbar
