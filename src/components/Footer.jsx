//PACKAGES
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

//COMPONENTS
import projectService from "../services/project.service";
import facebook from "../assets/images/facebookbege.svg";
import instagram from "../assets/images/instagrambege.svg";

function Footer({ books, contacts }) {
  return (
    <>
      {contacts.length && books.length && (
        <footer>
        <div className="upperFooter">
          <div>
            <NavLink to="/about" className={"footerLinks"}>
              <h5>Sobre</h5>
            </NavLink>
          </div>
          <div>
            <NavLink to="/books" className={"footerLinks"}>
              <h5>Livros</h5>
            </NavLink>
            {books.map((book) => {
              return (
                <NavLink
                  to={`/books/${book._id}`}
                  className={"footerLinks"}
                  key={book._id}
                >
                  <p>{book.title}</p>
                </NavLink>
              );
            })}
          </div>
          <div>
            <NavLink to="/appointments" className={"footerLinks"}>
              <h5>Terapias e consultas</h5>
            </NavLink>
            <NavLink to="/appointments" className={"footerLinks"}>
              <p>Ver mais</p>
            </NavLink>
          </div>
          <div>
            <NavLink to="/contacts" className={"footerLinks"}>
              <h5>Contactos</h5>
            </NavLink>
            <p className="footerContact">{contacts[0].address}</p>
            <p>{contacts[0].email}</p>
            <p>{contacts[0].phoneNumber}</p>
          </div>
          <div className="footerIcons">
            <NavLink target="_blank" to={contacts[0].facebook}>
              <img src={facebook} alt="facebook" className="iconSocialMedia" />
            </NavLink>
            <NavLink target="_blank" to={contacts[0].instagram}>
              <img
                src={instagram}
                alt="instagram"
                className="iconSocialMedia"
              />
            </NavLink>
          </div>

        
                
                </div>

              <div className="bottomFooter">


              

          <hr className="footerBar" />
          <h5 className="developedBy">
            {" "}
            Developed by{" "}
            <a href="https://github.com/miacsilva" className="github">
              Maria Carvalho
            </a>{" "}
            and <a href="https://github.com/TiagoRato13" className="github">Tiago Rato</a>
          </h5>

</div>

        </footer>
      )}
    </>
  );
}

export default Footer;
