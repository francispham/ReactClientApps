import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
  const { user } = props;
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      |
      <NavLink exact to="/products">
        Products
      </NavLink>
      |
      <NavLink exact to="/products/new">
        New Product
      </NavLink>
      |
      {user ? (
        <span>Hello, {user.full_name}</span>
      ) : (
        <NavLink exact to="/sign_in">
          Sign In
        </NavLink>
      )}
    </nav>
  );
}

export default NavBar;
