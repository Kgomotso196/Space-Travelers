import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';


const NavBar = () =>
  <nav>
    <ul>
      <li className="nav-item"><NavLink to="/" activeclassname="active">Rockets</NavLink></li>
      <li className="nav-item"><NavLink to="/missions" activeclassname="active"><p>Missions</p></NavLink></li>
      <li className="nav-item"><NavLink to="/profile" activeclassname="active"><p>My Profile</p></NavLink></li>
    </ul>
  </nav>;

export default NavBar;
