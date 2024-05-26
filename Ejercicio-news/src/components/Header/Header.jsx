import React from 'react'
import { Link } from "react-router-dom";

import './Header.scss'
import '../../App.scss'


const Header = () => {
  return (
    <div className='navContainer'>
    <div className="logo">
      <img src="https://cdn-icons-png.flaticon.com/512/2965/2965879.png" alt="Logo" />
    </div>
    <nav>
  
    
      <ul>
        <Link to="/">Home</Link>
        <Link to="/writeUs">Something to say?</Link>
        <Link to="/articles">News</Link>
      <li className="search">
    <input type="text" placeholder="Search..."/>
    </li>
      </ul>
      
    </nav>
    </div>
  )
}

export default Header