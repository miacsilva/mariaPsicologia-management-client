import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { scroller } from "react-scroll";

function Navbar() {
  const { loggedIn, user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
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
              offset: -70,
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
            scroller.scrollTo("booksSection", {
              offset: -70,
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
            scroller.scrollTo("monthlySubjectSection", {
              offset: -70,
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
            scroller.scrollTo("appointmentSection", {
              offset: -70,
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
            scroller.scrollTo("contactsSection", {
              duration: 500,
              delay: 100,
              offset: -70,
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
