import React from "react";
import { useState, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
// import the service file since we need it to send/get the data to/from the server
import projectService from "../services/project.service";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AuthContext } from "../context/auth.context";

function CreateMonthlySubject() {
  const { user, logout } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [month, setMonth] = useState("");

  const navigate = useNavigate();

  // ******** this method handles the file upload ********

  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append("image", e.target.files[0]);
    projectService
      .uploadImage(uploadData)
      .then((response) => {
        // response carries "fileUrl" which we can use to update the state
        setImage(response.fileUrl);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  // ********  this method submits the form ********
  const handleSubmit = (e) => {
    e.preventDefault();
    projectService
      .createMonthlySubject({ title, description, image, month })
      .then((res) => {
        // Reset the form
        setTitle("");
        setDescription("");
        setImage("");
        setMonth("")
        // navigate to another page
        navigate("/monthlySubjects");
      })
      .catch((err) => console.log("Error while adding the new monthly subject: ", err));
  };
  return (
    <div>
      <section className="createMsSection">
        <h1>Criar nova publicação</h1>
        {user && (
          <NavLink to="/appointments/edit">
            <button className={"editApButton"}>Editar secção do Blog</button>
          </NavLink>
        )}
      </section>
      <hr className="separatorAppointments" />

      <NavLink to="/monthlySubjects"> <button className="btnGoBackAddMS">« Voltar</button>  </NavLink>


     <section  className="createMS">
      <form onSubmit={handleSubmit}>

          <div>

        <label>Título</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
          </div>
                      
          <div className="descriptionMS">

        <label>Descrição</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

          </div>
         
          <div>

        <label>Data</label>
        <input
          type="text"
          name="month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />

          </div>

          
          <div>

        <input type="file" name="image" onChange={(e) => handleFileUpload(e)} />

          </div>
          <hr />
          <div>

        <button type="submit" className="btnAddMSForm">Adicionar nova publicação</button>

          </div>


        
      </form>

      </section>
    </div>
  );
}
export default CreateMonthlySubject;
