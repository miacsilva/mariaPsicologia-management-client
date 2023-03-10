import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { loggedIn, user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <NavLink className={"navbar__navlinks"} to="/">
          Home
        </NavLink>
      </div>
      <div className="navbar__right">
        <NavLink className={"navbar__navlinks"} to="/about">
          About
        </NavLink>
        <NavLink className={"navbar__navlinks"} to="/books">
          Books
        </NavLink>
        <NavLink className={"navbar__navlinks"} to="/monthly-subject">
          Monthly Subject
        </NavLink>
        <NavLink className={"navbar__navlinks"} to="/appointments">
          Appointments
        </NavLink>
        <NavLink className={"navbar__navlinks"} to="/contacts">
          Contacts
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
