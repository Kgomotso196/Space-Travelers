import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/planet.png';


const NavBar = () => (
  <nav>
    <img src={logo} alt='planet logo'/>
    <h1>Space Travelers&apos; Hub</h1>
    <ul>
      <li className="nav-item"><NavLink to="/rockets" activeclassname="active">Rockets</NavLink></li>
      <li className="nav-item"><NavLink to="/missions" activeclassname="active">Missions</NavLink></li>
      <li className="nav-item"><NavLink to="/profile" activeclassname="active">My Profile</NavLink></li>
    </ul>
  </nav>
);

export default NavBar;
