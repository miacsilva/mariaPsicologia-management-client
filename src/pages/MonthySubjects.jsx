import React from "react";
import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import projectService from "../services/project.service";

function MonthlySubjects() {
  const { user } = useContext(AuthContext);
  const [monthlySubjects, setMonthlySubjects] = useState([]);

  const getMonthlySubject = async () => {
    try {
      const response = await projectService.getMonthlySubject();

      setMonthlySubjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMonthlySubject();
  }, []);

  return (
    <>
    <section className="appointmentSection">
        <h1>Monthly Subjects</h1>
        {user && (
          <NavLink to="/appointments/edit">
            <button className={"editApButton"}>Edit Monthly Subjects Section</button>
          </NavLink>
        )}
      </section>
      <hr className="separatorAppointments" />
      {user && (
        <>
          <NavLink to="/create/monthly-subject">
            <button className="addMSButton">
              Create new Monthly Subject
            </button>
          </NavLink>
        </>
      )}
      {monthlySubjects.length && (
        <>

        <div className="MSSContainer">
          {monthlySubjects &&
            monthlySubjects.map((MS) => (
              <div>
                <div className="MSScard">
                  <div className="cardMS">
                    <div key={MS._id}>
                      <img
                        src={MS.image}
                        className="cardImgMs"
                        alt="imagem de terapia"
                      />
                      <div className="card-body">
                        <h5 className="cardTitleMS">{MS.title}</h5>
                        <h5 className="cardDateMs">{MS.month}</h5>
                        <p className="cardTextMs">{MS.description}</p>
                        {user && (
                          <NavLink to={`/monthly-subject/edit/${MS._id}`}>
                            <button className="addTherapies-btn">
                              Edit Monthly Subject
                            </button>
                          </NavLink>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
        </>
      )}
    </>
  );
}

export default MonthlySubjects;
