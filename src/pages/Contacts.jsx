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
            <div className="maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.6976368430887!2d-8.425973084717468!3d41.55414357924915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24feebd5dae855%3A0x47df5853823876fe!2sAv.%20Gen.%20Norton%20de%20Matos%2013%203%C2%BA%20Andar%20SALA%2014%2C%204700-978%20Braga!5e0!3m2!1spt-PT!2spt!4v1679012813017!5m2!1spt-PT!2spt" width="450" height="400" style={{border:0,  borderRadius: "20px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default Contacts;
