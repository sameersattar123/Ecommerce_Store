import React from 'react'
import navLogo from "../../assets/nav-logo.svg"
import navProfile from "../../assets/nav-profile.svg"
import "./Navbar.css"


const Navbar = () => {
  return (
    <div className='navbar'>
<img src={navLogo} alt="" className='nav_logo' />
<img src={navProfile} alt="" className='nav_profile' />
    </div>
  )
}

export default Navbar