//PACKAGES
import { useState, useEffect } from "react";
import axios from "axios";

//COMPONENTS
import projectService from "../services/project.service";
function About() {
  const [about, setAbout] = useState([]);

  const getAbout = async () => {
    try {
      const response = await projectService.getAbout();
      /* console.log(response.data); */
      setAbout(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAbout();
  }, []);
  return (
    <>
      {about.length && (
        <>
          <section className="aboutSection">
            <h1>About</h1>
            {/* {about[0].name} */}
          </section>
        </>
      )}
    </>
  );
}

export default About;
