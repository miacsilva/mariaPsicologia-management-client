//PACKAGES
import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

//COMPONENTS
import projectService from "../services/project.service";

function MonthlySubject() {
  const { user, logout } = useContext(AuthContext);
  const [monthlySubject, setMonthlySubject] = useState([]);

  const getMonthlySubject = async () => {
    try {
      const response = await projectService.getMonthlySubject();
      console.log(response.data);
      setMonthlySubject(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMonthlySubject();
  }, []);
  return (
    <>
      {monthlySubject.length && (
        <>
          <section className="monthlySubjectSection">
            <h1>Monthly Subject</h1>
            {user && (
              <NavLink to="/monthly-subject/edit">
                <button className={"editButton"}>
                  Edit Monthly Subject Section
                </button>
              </NavLink>
            )}
          </section>
        </>
      )}
    </>
  );
}

export default MonthlySubject;
