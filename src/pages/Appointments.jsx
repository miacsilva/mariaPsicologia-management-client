//PACKAGES
import { useState, useEffect, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
//COMPONENTS
import projectService from "../services/project.service";
import lovingDoodle from "../assets/images/DoodlesLoving.png";
import whatsapp from "../assets/images/whatsappverde.svg";

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
    getTherapies();
  }, []);
  return (
    <>
      <section className="appointmentSection">
        <h1> Appointments</h1>
        {user && (
          <NavLink to="/appointments/edit">
            <button className={"editApButton"}>Edit Appointment Section</button>
          </NavLink>
        )}
      </section>
      <hr className="separatorAppointments" />
      {therapies.length && (
        <div className="appointmentsBody">
          <div className="therapiesAppoint">
            <h3 className="therapiesAppointTitle">Therapies</h3>
            {therapies &&
              therapies.map((therapy) => (
                <div key={therapy._id}>
                  <p>{therapy.title}</p>
                </div>
              ))}
            <NavLink to="/therapies">
              <button className={"editApButton"}>
                Learn more about therapies
              </button>
            </NavLink>
          </div>
          <div class="appoinDoodle">
            <img src={lovingDoodle} alt="loving doodle" className="doodle" />
          </div>

          <div className="AppointContainerText">
            <div class="appoinText">
              <h4 className="therapiesAppointTitle">Book an Appointment!</h4>

              <Link
                to="https://koalendar.com/e/meet-with-maria-luisa"
                target="_blank"
              >
                <button className={"editApButton"}>
                  Go to Appointments-Book
                </button>
              </Link>
              <div className="contactWhatsapp">
              <img src={whatsapp} alt="whatsapp icon" className="whatsapp" />
              <h5>Any questions? <br></br>  Feel free to contact via whatsaap! </h5>
              <p>{contacts[0].phoneNumber}</p>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Appointments;
