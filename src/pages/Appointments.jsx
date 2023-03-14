//PACKAGES
import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
//COMPONENTS
import projectService from "../services/project.service";


function Appointments() {
  const { user } = useContext(AuthContext);
  const [therapies, setTherapies] = useState([]);
  const getTherapies = async () => {
    try {
      const response = await projectService.getTherapies();
      /* console.log(response.data); */
      setTherapies(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTherapies();
  }, []);
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
      {therapies.length && (
        
        <div className="appointmentsBody">
        
          <div className="therapiesAppoint">
            <h3 className="therapiesAppointTitle">Terapias</h3>
            {therapies &&
              therapies.map((therapy) => (
                <div key={therapy._id}>
                  <p>{therapy.title}</p>
                </div>
              ))}
              <NavLink to="/therapies">
            <button className={"editButton"}>Saber mais sobre as diferentes terapias</button>
          </NavLink>
          </div>
          
          <div>
            <h4>Agendar consulta</h4>
            <h5>link</h5>
          </div>
        </div>
      )}
    </>
  );
}
export default Appointments;
