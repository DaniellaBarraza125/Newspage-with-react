import React from 'react'
import './Header.scss'


const Header = () => {
  return (
    <nav>
       <div className="logo">
      <img src="https://cdn-icons-png.flaticon.com/512/2965/2965879.png" alt="Logo"/>
    </div>
    
      <ul>
        <li>Home</li>
        <li>Something to say?</li>
        <li>News</li>
      <li className="search">
    <input type="text" placeholder="Search..."/>
    </li>
      </ul>
      
    </nav>
  )
}

export default Header