import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
  return (
    <nav>
      <ul>
        <li className = 'nav-item'><NavLink to="/" activeClassName="active">Rockets</NavLink></li>
        <li className = 'nav-item'><NavLink to="/missions" activeClassName="active"><p>Missions</p></NavLink></li>
        <li className = 'nav-item'><NavLink to="/profile" activeClassName="active"><p>My Profile</p></NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar;