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
                spy: true,
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
                offset: -10,
                spy: true,
              })
            }
          >
            <h4>Welcome {user.name}</h4>
          </NavLink>
        )}
      </div>
      <div className="navbar__right">
        {user && user.admin && (
          <NavLink
            className={"navbar__navlinks"}
            to="/colaborators"
            onClick={() =>
              scroller.scrollTo("aboutSection", {
                duration: 500,
                offset: -10,
                spy: true,
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
              offset: -10,
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
              offset: -10,
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
              offset: -10,
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
              offset: -10,
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
              offset: -10,
              spy: true,
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
