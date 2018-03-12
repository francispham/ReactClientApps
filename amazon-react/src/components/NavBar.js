import React from 'react';
import { NavLink } from  'react-router-dom';

function NavBar (props) {
  return (
    <nav className = "NavBar">
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/products/new">New Product</NavLink>
      <NavLink exact to="/products">Products</NavLink>
    </nav>
  )
}

export default NavBar;
