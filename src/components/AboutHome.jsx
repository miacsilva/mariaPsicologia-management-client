//PACKAGES
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

//COMPONENTS
import projectService from "../services/project.service";

function AboutHome() {
  const [about, setAbout] = useState([]);

  const getAbout = async () => {
    try {
      const response = await projectService.getAbout();
      /* console.log(response.data); */
      setAbout(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAbout();
  }, []);

  return (
    <>
      {about.length && (
        <section className="aboutSection" id="aboutHome">
        
          <div className="contentAboutHome">
            <div className="aboutSectionOne">
              <img src={about[0].imageHome} alt="" className={"photoAbout"} />
            </div>
            <div className="aboutSectionTwo">
              <h1>Sobre {about[0].name}</h1>
              <p>{about[0].smallAbout}</p>
              <div className={"buttonAbout"}>
                <NavLink to="/about">
                  <button>Saber Mais</button>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default AboutHome;
