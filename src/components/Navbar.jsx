import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { scroller } from "react-scroll";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar__left">
        {!user && (
          <NavLink
            className={"navbar__navlinks"}
            to="/"
            onClick={() =>
              scroller.scrollTo("App", {
                offset: -10,
              })
            }
          >
            Home
          </NavLink>
        )}
        {user && (
          <NavLink
            className={"navbar__navlinks"}
            to="/"
            onClick={() =>
              scroller.scrollTo("App", {
                offset: 0,
              })
            }
          >
            <h4 className={"navbar__navlinks__user"}>Welcome {user.name}</h4>
          </NavLink>
        )}
      </div>
      <div className="navbar__right">
        {user && user.admin && (
          <NavLink
            className={"navbar__navlinks"}
            to="/colaborators"
            onClick={() =>
              scroller.scrollTo("colaboratorsSection", {
                duration: 500,
                offset: -150,
              })
            }
          >
            View Colaborators
          </NavLink>
        )}
        <NavLink
          className={"navbar__navlinks"}
          to="/about"
          onClick={() =>
            scroller.scrollTo("aboutSection", {
              duration: 500,
              offset: -150,
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
              duration: 500,
              offset: -150,
            })
          }
        >
          Books
        </NavLink>
        <NavLink
          className={"navbar__navlinks"}
          to="/"
          onClick={() =>
            scroller.scrollTo("monthlySubjectComponentSection", {
              duration: 500,
              offset: 0, // fica a 0
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
              duration: 500,
              offset: -150,
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
              offset: -150,
            })
          }
        >
          Contacts
        </NavLink>
        {user && (
          <NavLink className={"navbar__navlinks"} onClick={logout}>
            Logout
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
