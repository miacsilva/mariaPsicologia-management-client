//PACKAGES
import { useState, useEffect } from "react";
import axios from "axios";

//COMPONENTS
import projectService from "../services/project.service";

function Appointments() {
  return (
    <>
      <section className="appointmentSection">
        <h1> Consultas</h1>

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
      </section>
    </>
  );
}

export default Appointments;
