//PACKAGES
import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

//COMPONENTS
import projectService from "../services/project.service";

function Appointments() {
  const { loggedIn, user, logout } = useContext(AuthContext);
  return (
    <>
      <section className="appointmentSection">
        <h1> Appointments</h1>
        {user && (
          <NavLink to="/appointments/edit">
            <button className={"editButton"}>Edit Appointment Section</button>
          </NavLink>
        )}
      </section>
      <div>
        <div>
          <h3>Terapias</h3>
          *listar terapias * * * * *
        </div>

        <div>
          <h4>Agendar consulta</h4>
          <h5>link</h5>
        </div>
      </div>
    </>
  );
}

export default Appointments;
