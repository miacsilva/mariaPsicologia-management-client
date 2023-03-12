//PACKAGES
import { useState, useEffect } from "react";
import axios from "axios";

//COMPONENTS
import projectService from "../services/project.service";
function About() {
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
          <section className="aboutSection">
            <h1>About</h1>
          </section>
          <h1>teste</h1>
        </>
      )}
    </>
  );
}

export default About;
