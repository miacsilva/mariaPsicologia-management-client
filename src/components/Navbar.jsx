import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { scroller } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <div className="navbar__left">
        <NavLink
          className={"navbar__navlinks"}
          to="/"
          onClick={() =>
            scroller.scrollTo("App", {
              offset: -70,
              spy: true,
            })
          }
        >
          Home
        </NavLink>
      </div>
      <div className="navbar__right">
        <NavLink
          className={"navbar__navlinks"}
          to="/about"
          onClick={() =>
            scroller.scrollTo("aboutSection", {
              duration: 500,
              offset: -20,
              spy: true,
            })
          }
        >
          About
        </NavLink>
        <NavLink
          className={"navbar__navlinks"}
          to="/books"
          onClick={() =>
            scroller.scrollTo("aboutSection", {
              duration: 500,
              offset: -20,
              spy: true,
            })
          }
        >
          Books
        </NavLink>
        <NavLink
          className={"navbar__navlinks"}
          to="/monthly-subject"
          onClick={() =>
            scroller.scrollTo("aboutSection", {
              duration: 500,
              offset: -20,
              spy: true,
            })
          }
        >
          Monthly Subject
        </NavLink>
        <NavLink
          className={"navbar__navlinks"}
          to="/appointments"
          onClick={() =>
            scroller.scrollTo("aboutSection", {
              duration: 500,
              offset: -20,
              spy: true,
            })
          }
        >
          Appointments
        </NavLink>
        <NavLink
          className={"navbar__navlinks"}
          to="/contacts"
          onClick={() =>
            scroller.scrollTo("aboutSection", {
              duration: 500,
              offset: -20,
              spy: true,
            })
          }
        >
          Contacts
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
