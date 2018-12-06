import React from 'react';
import './styles/NavBar.css'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return <div id="nav-container">
          <div id="links-container">
            <NavLink to="/">
       	      Home
            </NavLink>
            <NavLink to="/editor">
              Editor
            </NavLink>
            <NavLink to="/text_search">
              Text Search
            </NavLink>
        </div>
      </div>
}

export default NavBar