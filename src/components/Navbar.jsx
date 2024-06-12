import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { scroller } from "react-scroll";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive)
  }

  const closeNavbar = () => {
    setIsActive(false);
  }

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar__left  homeLink">
        {!user && (
          <NavLink
            className={"navbar__navlinks homeLink"}
            to="/"
            onClick={() =>
              scroller.scrollTo("App", {
                offset: -300,
              })
              
            }
          >
            Início
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
            <h4 className={"navbar__navlinks__user"}>Olá {user.name}</h4>
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
            Ver Colaboradores
          </NavLink>
        )}
{/* --------------------------HAMBURGUER MENU----------------------------------- */}
        <div  className={`toggle-button ${isActive ? "active" : ""}`} onClick={handleClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
{/* --------------------------HAMBURGUER MENU--END------------------------------ */}

<div className={`navbar-navlinks ${isActive ? "active" : ""}`}>

      <ul>
        <NavLink
              className={"navbar__navlinks navAbout navMobile"}
              to="/about"
              onClick={() => {
                scroller.scrollTo("aboutSection", {
                  duration: 500,
                  offset: -150,
                });
                closeNavbar(); // Call closeNavbar function to close the navbar
                }}
              >
                Sobre
        </NavLink>
        <NavLink
          className={"navbar__navlinks navMobile"}
          to="/books"
          onClick={() => {
              scroller.scrollTo("aboutSection", {
                duration: 500,
                offset: -150,
              });
              closeNavbar(); // Call closeNavbar function to close the navbar
              }}
        >
          Livros
        </NavLink>
        <NavLink
          className={"navbar__navlinks navMobile"}
          to="/"
          onClick={() => {
              scroller.scrollTo("aboutSection", {
                duration: 500,
                offset: -150,
              });
              closeNavbar(); // Call closeNavbar function to close the navbar
              }}
        >
          Blog
        </NavLink>
        <NavLink
          className={"navbar__navlinks navMobile"}
          to="/appointments"
          onClick={() => {
              scroller.scrollTo("aboutSection", {
                duration: 500,
                offset: -150,
              });
              closeNavbar(); // Call closeNavbar function to close the navbar
              }}
        >
          Terapias
        </NavLink>
        <NavLink
          className={"navbar__navlinks"}
          to="/contacts"
          onClick={() => {
              scroller.scrollTo("aboutSection", {
                duration: 500,
                offset: -150,
              });
              closeNavbar(); // Call closeNavbar function to close the navbar
              }}
        >
          Contactos
        </NavLink>
        {user && (
          <NavLink className={"navbar__navlinks"} onClick={logout}>
            Logout
          </NavLink>
        )}
        </ul>
        </div>


      </div>
    </nav>
  );
}

export default Navbar;
