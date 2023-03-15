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
      {user && (
        <>
        <NavLink to="/create/monthly-subject">
          <button className="addTherapies-btn">Create new Monthly Subject</button>
        </NavLink>
        </>
      )}
      {monthlySubjects.length && (
        <>
          {monthlySubjects &&
            monthlySubjects.map((MS) => (
              <div className="therapiesContainer">
                <div className="col-3">
                  <div className="card h-100">
                    <div key={MS._id}>
                      <img
                        src={MS.image}
                        className="card-img-top"
                        alt="imagem de terapia"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{MS.title}</h5>
                        <h5 className="card-title">{MS.month}</h5>
                        <p className="card-text">{MS.description}</p>
                        {user && (
        <NavLink to={`/monthly-subject/edit/${MS._id}`}>
          <button className="addTherapies-btn">Edit Monthly Subject</button>
        </NavLink>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </>
      )}
    </>
  );
}

export default MonthlySubjects;
