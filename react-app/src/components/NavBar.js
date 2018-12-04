import React from 'react';
import './styles/NavBar.css'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return <div id="#nav-container">
        <NavLink to="/">
       	  Home
        </NavLink>
        <NavLink to="/editor">
          Editor
        </NavLink>
        <NavLink to="/Analytics">
          Analytics
        </NavLink>
    </div>
}

export default NavBar