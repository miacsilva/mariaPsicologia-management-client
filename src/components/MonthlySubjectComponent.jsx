//PACKAGES
import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

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
    <section className="monthlySubjectComponentSection">
      <div>
        {monthlySubject.length && (
          <>
            <h2>Blog</h2>
            <h6>{monthlySubject[0].month}</h6>
            <h1>{monthlySubject[0].title}</h1>
            <p> {monthlySubject[0].description} </p>
          </>
        )}
      </div>
      <div className="monthlysubButton">
        <NavLink to="/monthlySubjects">
          <button className="editApButtonMS">Ver publicações passadas</button>
        </NavLink>
      </div>
    </section>
  );
}

export default MonthlySubject;
