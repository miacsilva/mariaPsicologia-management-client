//PACKAGES
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

//COMPONENTS
import projectService from "../services/project.service";
import icon1 from "../assets/images/facebooklight.svg";

function Footer() {
  const [books, setBooks] = useState([]);
  const [contacts, setContacts] = useState([]);

  const getBooks = async () => {
    try {
      const response = await projectService.getAllBooks();
      /* console.log(response.data); */
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getContacts = async () => {
    try {
      const response = await projectService.getContacts();
      console.log(response.data);
      setContacts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContacts();
    getBooks();
  }, []);
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
            <h5>Books</h5>
            {books.map((book) => {
              return (
                <NavLink to={`/books/${book._id}`} className={"footerLinks"}>
                  <p>{book.title}</p>
                </NavLink>
              );
            })}
          </div>
          <div>
            <h5>Appointments</h5>
            <NavLink className={"footerLinks"}>
              <p>Book an appointment</p>
            </NavLink>
          </div>
          <div>
            <h5>Contacts</h5>
            <p>{contacts[0].address}</p>
            <p>{contacts[0].email}</p>
            <p>{contacts[0].phoneNumber}</p>
            {/* <p>{contacts[0].facebook}</p> */}
          </div>
          <div>
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
