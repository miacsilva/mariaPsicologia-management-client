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
            HomePage
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
          Sobre
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
          Livros
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
          Tema do Mês
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
          Terapias
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
          Contactos
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
