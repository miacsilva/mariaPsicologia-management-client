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
          <NavLink to="/add-therapies">
            <button className={"editButton"}>Add Therapy</button>
          </NavLink>
        )}

        
      <div class="col">
        <div class="card h-100">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      {/* cards */}
      {/* map therapies */}
    </>
  );
}

export default Therapies;
