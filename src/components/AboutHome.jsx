//PACKAGES
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

//COMPONENTS
import projectService from "../services/project.service";
import fotoSobre from "../assets/images/sobre.jpg";

function AboutHome({ about }) {
  return (
    <>
      {about.length && (
        <section className="aboutSection">
          <div className="aboutSectionOne">
            <img src={fotoSobre} alt="" className={"photoAbout"} />
          </div>
          <div className="aboutSectionTwo">
            <h1>Sobre {about[0].name}</h1>
            <p>{about[0].smallAbout}</p>

            <div className={"buttonAbout"}>
              <NavLink to="/about">
                <button>Saber mais</button>
              </NavLink>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default AboutHome;
