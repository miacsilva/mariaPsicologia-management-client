import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

//COMPONENTS
import projectService from "../services/project.service";

function ViewColaborators() {
  const { user, logout } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await projectService.getUser();
      /* console.log(response.data); */
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await projectService.deleteUser(id);
      navigate("/user");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <section className="colaboratorsSection">
        {user && user.admin && (
          <>
            <section className="booksSection">
              <h1>Colaborators </h1>
            </section>
            {users.map((colaborators) => {
              return (
                <div key={colaborators._id} className={"colaboratorsTabs"}>
                  <h1>{colaborators.name}</h1>
                  <div className={"colaboratorsTabs__buttons"}>
                    <NavLink
                      className={"colaboratorEditButton"}
                      to={`/colaborators/edit/${colaborators._id}`}
                    >
                      Edit this colaborator
                    </NavLink>
                    <button
                      className={"colaboratorDeleteButton"}
                      type="submit"
                      onClick={() => deleteUser(user._id)}
                    >
                      Delete this colaborator
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </section>
    </>
  );
}

export default ViewColaborators;
