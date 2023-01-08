import React from 'react'
import "./index.scss"
import {Link, NavLink} from "react-router-dom"

const Header = () => {
  return (
    <div id='header'>
        <Link  to={"/"}>AF202</Link>
        <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <NavLink to={"/customer"}>Customer</NavLink>
        </nav>
    </div>
  )
}

export default Header