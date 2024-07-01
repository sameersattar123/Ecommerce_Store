import React from 'react'
import navLogo from "../../assets/nav-logo.svg"
import navProfile from "../../assets/nav-profile.svg"
import "./Navbar.css"


const Navbar = () => {
  return (
    <div className='navbar'>
<img src={navLogo} alt="" />
<img src={navProfile} alt="" />
    </div>
  )
}

export default Navbar