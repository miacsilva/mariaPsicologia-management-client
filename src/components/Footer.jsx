//PACKAGES
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

//COMPONENTS
import projectService from "../services/project.service";
import icon1 from "../assets/images/facebooklight.svg";

function Footer({ books, contacts }) {
  return (
    <>
      {contacts.length && books.length && (
        <footer>
          <div>
            <NavLink to="/about" className={"footerLinks"}>
              <h5>About</h5>
            </NavLink>
          </div>
          <div>
            <NavLink to="/books" className={"footerLinks"}>
              <h5>Books</h5>
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
              <h5>Appointments</h5>
            </NavLink>
            <NavLink className={"footerLinks"}>
              <p>Book an appointment</p>
            </NavLink>
          </div>
          <div>
            <NavLink to="/contacts" className={"footerLinks"}>
              <h5>Contacts</h5>
            </NavLink>
            <p>{contacts[0].address}</p>
            <p>{contacts[0].email}</p>
            <p>{contacts[0].phoneNumber}</p>
            {/* <p>{contacts[0].facebook}</p> */}
          </div>
          <div className="footerIcons">
            <NavLink target="_blank" to={contacts[0].facebook[0]}>
              <img src={icon1} alt="facebook" className="iconSocialMedia" />
            </NavLink>
            <NavLink target="_blank" to={contacts[0].instagram[0]}>
              <img src={icon1} alt="instagram" className="iconSocialMedia" />
            </NavLink>
          </div>
        </footer>
      )}
    </>
  );
}

export default Footer;
