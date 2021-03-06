import React from 'react';
import './styles/NavBar.css'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return <div id="nav-container">
          <div id="links-container">
            <div id="styles-container">
            <NavLink to="/">
       	      Home
            </NavLink>
            </div>
            <div id="styles-container">
            <NavLink to="/editor">
              Editor
            </NavLink>
            </div>
            <div id="styles-container">
            <NavLink to="/text_search">
              Text Search
            </NavLink>
            </div>
            <div id="styles-container">
            <NavLink to="/first_letter">
              First Letter
            </NavLink>
            </div>
        </div>
      </div>
}

export default NavBar