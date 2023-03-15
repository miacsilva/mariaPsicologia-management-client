//PACKAGES
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

//COMPONENTS
import projectService from "../services/project.service";
import AboutHome from "../components/AboutHome";
import MonthlySubject from "../components/MonthlySubjectComponent";

function Home() {
  return (
    <>
      <AboutHome />
      <MonthlySubject />
      <NavLink to="/monthlySubjects">
            <button className="monthlySeeMoreBtn">See past months «</button>
          </NavLink>
    </>
  );
}

export default Home; 
