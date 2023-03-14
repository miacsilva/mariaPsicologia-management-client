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
  const [image, setImage] = useState("");
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
      setImage(response.data[0].image);
      setBigAbout(response.data[0].bigAbout);
      setSmallAbout(response.data[0].smallAbout);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAbout();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = { name, education, image, bigAbout, smallAbout };

    try {
      await projectService.editAbout({ id, requestData });

      navigate(`/about`);
    } catch (error) {
      console.log(error);
    }
  };

  //cloudinary
  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("image", e.target.files[0]);
    projectService
      .uploadImage(uploadData)
      .then((response) => {
        // response carries "fileUrl" which we can use to update the state
        setImage(response.fileUrl);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
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
                  <label htmlFor="image">Image</label>
                  {image && (
                    <img src={image} alt={name} className="photoAboutEdit" />
                  )}
                  <input
                    type="file"
                    image="image"
                    id="image"
                    onChange={(e) => handleFileUpload(e)}
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
