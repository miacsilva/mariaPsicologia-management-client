import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { loggedIn, user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <NavLink className={"teste"} to="/">
          Home
        </NavLink>
      </div>
      <div className="navbar__right">
        <NavLink to="/about">About | </NavLink>
        <NavLink to="/books">Books | </NavLink>
        <NavLink to="/monthly-subject">Monthly Subject | </NavLink>
        <NavLink to="/appointments">Appointments | </NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
