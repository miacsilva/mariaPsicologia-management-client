//PACKAGES
import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

import axios from "axios";

//COMPONENTS
import projectService from "../services/project.service";
import icon1 from "../assets/images/facebookyellow.svg";

function Contacts() {
  const { user, logout } = useContext(AuthContext);
  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    try {
      const response = await projectService.getContacts();
      /* console.log(response.data); */
      setContacts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);
  return (
    <>
      {contacts.length && (
        <>
          <section className="contactsSection">
            <h1>Contacts</h1>
            {user && (
              <NavLink to={`/contacts/edit/${contacts[0]._id}`}>
                <button className={"editButton"}>Edit Contacts Section</button>
              </NavLink>
            )}
          </section>
          <section className="contactsSectionBox">
            <section className="contactsSectionContacts">
              <div>
                <p>Email</p>
                <p>{contacts[0].email}</p>
              </div>

              <div>
                <p>Phone</p>
                <p>{contacts[0].phoneNumber}</p>
              </div>
              <div>
                <p>Adress</p>
                <p>{contacts[0].address}</p>
              </div>
            </section>
            <div className="separator"></div>
            <section className="contactsSectionLinks">
              <NavLink target="_blank" to={contacts[0].facebook[0]}>
                <img src={icon1} alt="" className="iconContacts" />
              </NavLink>
              <NavLink target="_blank" to={contacts[0].instagram[0]}>
                <img src={icon1} alt="" className="iconContacts" />
              </NavLink>
            </section>
          </section>
        </>
      )}
    </>
  );
}

export default Contacts;
