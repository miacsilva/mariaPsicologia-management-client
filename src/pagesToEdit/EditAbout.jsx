import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

//COMPONENTS
import { AuthContext } from "../context/auth.context";
import projectService from "../services/project.service";

function EditAbout() {
  const { user, logout } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [education, setEducation] = useState("");
  const [imageHome, setImageHome] = useState("");
  const [imageAbout, setImageAbout] = useState("");
  const [bigAbout, setBigAbout] = useState("");
  const [smallAbout, setSmallAbout] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleEducation = (e) => setEducation(e.target.value);
  const handleBigAbout = (e) => setBigAbout(e.target.value);
  const handleSmallAbout = (e) => setSmallAbout(e.target.value);

  const getAbout = async () => {
    try {
      const response = await projectService.getAbout();

      setName(response.data[0].name);
      setEducation(response.data[0].education);
      setImageHome(response.data[0].imageHome);
      setImageAbout(response.data[0].imageAbout);
      setBigAbout(response.data[0].bigAbout);
      setSmallAbout(response.data[0].smallAbout);
    } catch (error) {
      console.log(error);
    }
  };

  /* 

  Maria Luisa Lopes Gomes da Silva nasceu em Fafe em 8 de Novembro de 1970. Cresceu em Vila Verde, distrito de Braga. Adora meditação e sonha conhecer o mundo inteiro. Tem um fascínio enorme pela mente e pelo comportamento humano. Como ela mesma diz: «Respiro o melhor do mundo: As pessoas».
«As conversas que tenho contigo» é o seu primeiro romance.
Pós-graduada em hipnose clínica experimental pela Faculdade de Medicina da Universidade de Lisboa; Certificada pelo London College Clinical Hypnosis; Dupla pós-graduação de neuropsicologia clínica pelo Instituto Português de Psicologia; Dupla pós-graduação de sexualidade clínica e terapia de casal pelo Instituto Português de Psicologia; Curso de desenvolvimento espiritual - The Arthur Findlay College – London; Finalista do mestrado integrado de psicologia da Universidade do Minho; Especializada em várias técnicas como: Deep Memory Process, Hipnose Ericksoniana e EMDR.
  
  */

  useEffect(() => {
    getAbout();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      name,
      education,
      imageHome,
      imageAbout,
      bigAbout,
      smallAbout,
    };

    try {
      await projectService.editAbout({ id, requestData });

      navigate(`/about`);
    } catch (errorHandler) {
      console.log(error);
    }
  };

  //cloudinary
  const handleFileUploadHome = (e) => {
    const uploadData = new FormData();
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("image", e.target.files[0]);
    projectService
      .uploadImage(uploadData)
      .then((response) => {
        // response carries "fileUrl" which we can use to update the state
        console.log(response.fileUrl);
        setImageHome(response.fileUrl);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  const handleFileUploadAbout = (e) => {
    const uploadData = new FormData();

    uploadData.append("image", e.target.files[0]);
    projectService
      .uploadImage(uploadData)
      .then((response) => {
        setImageAbout(response.fileUrl);
      })
      .catch((errorHandler) => console.log("Error while uploading the file: ", err));
  };

  return (
    <>
      <section className="colaboratorsSection">
        {user && (
          <>
            <section className="aboutSection">
              <h1>Editing About...</h1>
              {user && (
                <NavLink to="/about">
                  <button className={"editButton"}>Go back</button>
                </NavLink>
              )}
            </section>
            <section className="editAboutSection">
              <form onSubmit={handleSubmit}>
                <div className="inputAbout">
                  <label htmlFor="name">Name</label>
                  <input
                    className="inputAboutName"
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={handleName}
                  />
                </div>

                <div className="inputAbout">
                  <label htmlFor="education">Education</label>
                  <textarea
                    name="education"
                    id="education"
                    className="textareaAbout"
                    value={education}
                    onChange={handleEducation}
                  ></textarea>
                </div>

                <div className="inputAbout">
                  <label htmlFor="imageHome">Image Home Page</label>
                  {imageHome && (
                    <img
                      src={imageHome}
                      alt={name}
                      className="photoAboutEdit"
                    />
                  )}
                  <input
                    type="file"
                    onChange={(e) => handleFileUploadHome(e)}
                  />
                </div>

                <div className="inputAbout">
                  <label htmlFor="imageAbout">Image About Page</label>
                  {imageAbout && (
                    <img
                      src={imageAbout}
                      alt={name}
                      className="photoAboutEdit"
                    />
                  )}
                  <input
                    type="file"
                    onChange={(e) => handleFileUploadAbout(e)}
                  />
                </div>

                <div className="inputAbout">
                  <label htmlFor="bigAbout">Big About</label>
                  <textarea
                    name="bigAbout"
                    id="bigAbout"
                    className="textareaAbout"
                    value={bigAbout}
                    onChange={handleBigAbout}
                  ></textarea>
                </div>

                <div className="inputAbout">
                  <label htmlFor="smallAbout">Small About</label>
                  <textarea
                    name="smallAbout"
                    id="smallAbout"
                    className="textareaAbout"
                    value={smallAbout}
                    onChange={handleSmallAbout}
                  ></textarea>
                </div>

                <button type="submit">Edit Section</button>
              </form>
            </section>
          </>
        )}
      </section>
    </>
  );
}

export default EditAbout;
