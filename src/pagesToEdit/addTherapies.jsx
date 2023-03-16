import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import the service file since we need it to send/get the data to/from the server
import projectService from "../services/project.service";

function AddTherapies() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
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
      .createTherapy({ title, description, image })
      .then((res) => {
        // Reset the form
        setTitle("");
        setDescription("");
        setImage("");
        // navigate to another page
        navigate("/therapies");
      })
      .catch((err) => console.log("Error while adding the new therapy: ", err));
  };
  return (
    <section className="addTherapiesSection">
      <h2>Add Therapy</h2>
      <form onSubmit={handleSubmit} className="addTherapiesSectionForm">
        <label>Name</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Description</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <img src={image} alt={title} />
        <input type="file" name="image" onChange={(e) => handleFileUpload(e)} />
        <button type="submit" className="buttonCreateTherapy">
          Save new therapy
        </button>
      </form>
    </section>
  );
}
export default AddTherapies;
