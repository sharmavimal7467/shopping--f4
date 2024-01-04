// NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <nav>
      <p>Shopping Cart</p>
      <div>
        <NavLink to='/'>
          <FontAwesomeIcon icon={faHome} /> Home Page
        </NavLink>
        <NavLink to='/cart'>
          <FontAwesomeIcon icon={faShoppingCart} /> Cart Page
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
