//PACKAGES
import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

import axios from "axios";

//COMPONENTS
import projectService from "../services/project.service";
import facebook from "../assets/images/facebookverde.svg";
import instagram from "../assets/images/instagramverde.svg";
import email from "../assets/images/emailverde.svg";
import phone from "../assets/images/telephoneverde.svg";
import address from "../assets/images/addressverde.svg";

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
          <hr className="separatorAppointments" />
          <section className="contactsSectionBox">
            <section className="contactsSectionContacts">
              <div>
                <img src={email} alt="" />
                <p>{contacts[0].email}</p>
              </div>

              <div>
                <img src={phone} alt="" />
                <p>{contacts[0].phoneNumber}</p>
              </div>
              <div>
                <img src={address} alt="" />
                <p>{contacts[0].address}</p>
              </div>
            </section>
            <div className="separator"></div>
            <section className="contactsSectionLinks">
              <NavLink target="_blank" to={contacts[0].facebook}>
                <img src={facebook} alt="" className="iconContacts" />
              </NavLink>
              <NavLink target="_blank" to={contacts[0].instagram}>
                <img src={instagram} alt="" className="iconContacts" />
              </NavLink>
            </section>
          </section>
        </>
      )}
    </>
  );
}

export default Contacts;
