//PACKAGES
import { useState, useEffect, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
//COMPONENTS
import projectService from "../services/project.service";
import lovingDoodle from "../assets/images/DoodlesLoving.png";
import whatsapp from "../assets/images/whatsappverde.svg";

function Appointments({ contacts }) {
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
        <h1>Terapias e Consultas</h1>
        {/* {user && (
          <NavLink to="/appointments/edit">
            <button className={"editApButton"}>Edit Appointment Section</button>
          </NavLink>
        )} */}
      </section>
      <hr className="separatorAppointments" />
      {therapies.length && (
        <div className="appointmentsBody">
          <div className="therapiesAppoint">
            <img src={lovingDoodle} alt="loving doodle" className="doodle" />
            <h3 className="therapiesAppointTitle">Terapias</h3>
            {therapies &&
              therapies.map((therapy) => (
                <div key={therapy._id}>
                  <p>{therapy.title}</p>
                </div>
              ))}
            <NavLink to="/therapies">
              <button className={"editApButton"}>
                Descobre mais sobre as terapias
              </button>
            </NavLink>
          </div>
          {/* <div className="appoinDoodle">
            <img src={lovingDoodle} alt="loving doodle" className="doodle" />
          </div> */}

          <div className="AppointContainerText">
            
              {/* <h4 className="therapiesAppointTitle">Book an Appointment!</h4> */}

             {/*  <div className="coverGreen"></div> */}

              <div className="contactWhatsapp">
                <img src={whatsapp} alt="whatsapp icon" className="whatsapp" />
                <h5>
                  Tem alguma questão? <br></br> Sinta-se à vontade para contactar por whatsapp!{" "}
                </h5>
                <p>{contacts[0].phoneNumber}</p>
              </div>
          
          </div>
        </div>
      )}
    </>
  );
}
export default Appointments;
