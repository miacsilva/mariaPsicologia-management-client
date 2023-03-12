//PACKAGES
import { useState, useEffect } from "react";
import axios from "axios";

//COMPONENTS
import projectService from "../services/project.service";

function MonthlySubject() {
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
            <p>{monthlySubject[0].description}</p>
          </section>
        </>
      )}
    </>
  );
}

export default MonthlySubject;
