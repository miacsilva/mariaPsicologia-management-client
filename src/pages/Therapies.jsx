import React from "react";
import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import projectService from "../services/project.service";

function Therapies() {
  const { user } = useContext(AuthContext);
  const [therapies, setTherapies] = useState([]);

  const getTherapies = async () => {
    try {
      const response = await projectService.getTherapies();

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
      {user && (
        <>
          <NavLink to="/add-therapies" className="therapySection">
            <button className="addTherapies-btn">Add Therapy</button>
          </NavLink>
        </>
      )}
      {therapies.length && (
        <>
          {therapies &&
            therapies.map((therapy) => (
              <div className="therapiesContainer" key={therapy._id}>
                <div className="col">
                  <div className="card h-100">
                    <div key={therapy._id}>
                      <img
                        src={therapy.image}
                        className="card-img-top"
                        alt="imagem de terapia"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{therapy.title}</h5>
                        <p className="card-text">{therapy.description}</p>
                        {user && (
                          <NavLink to={`/therapies/edit/${therapy._id}`}>
                            <button className="addTherapies-btn">
                              Edit Therapy
                            </button>
                          </NavLink>
                        )}
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

export default Therapies;
