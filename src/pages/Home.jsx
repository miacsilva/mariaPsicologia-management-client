//PACKAGES
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

//COMPONENTS
import projectService from "../services/project.service";
import AboutHome from "../components/AboutHome";
import MonthlySubject from "../components/MonthlySubjectComponent";

function Home({ about }) {
  return (
    <>
      <AboutHome about={about} />
      <MonthlySubject />
    </>
  );
}

export default Home;
